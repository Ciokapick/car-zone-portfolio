import { existsSync, readFileSync, statSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const siteUrl = 'https://car-zone-five.vercel.app';
const pages = [
  ['index.html', `${siteUrl}/`],
  ['stoc.html', `${siteUrl}/stoc.html`],
  ['s580.html', `${siteUrl}/s580.html`],
  ['comanda.html', `${siteUrl}/comanda.html`],
  ['vinde.html', `${siteUrl}/vinde.html`],
  ['finantare.html', `${siteUrl}/finantare.html`],
  ['contact.html', `${siteUrl}/contact.html`],
];
const errors = [];
const i18nSource = readFileSync(resolve(root, 'assets/js/i18n.js'), 'utf8');
const translationKeys = new Set([...i18nSource.matchAll(/^\s*'([^']+)':\s*\{\s*ro:/gm)].map((match) => match[1]));
const referencedTranslationKeys = new Map();

const fail = (file, message) => errors.push(`${file}: ${message}`);
const attribute = (tag, name) => tag.match(new RegExp(`\\b${name}=["']([^"']+)["']`, 'i'))?.[1];

for (const [file, canonical] of pages) {
  const html = readFileSync(resolve(root, file), 'utf8');

  if (!/<html\b[^>]*lang="en"/i.test(html)) fail(file, 'missing English language declaration');
  if (!/<title\b[^>]*>[^<]+<\/title>/i.test(html)) fail(file, 'missing title');
  if (!/<meta\s+name="description"[^>]*content="[^"]+"/i.test(html)) fail(file, 'missing description');
  if (!html.includes('assets/js/i18n.js')) fail(file, 'missing bilingual language controller');
  if (!html.includes('class="nav__lang"')) fail(file, 'missing EN/RO language control');
  if (!html.includes('data-lang="en"') || !html.includes('data-lang="ro"')) fail(file, 'language control must expose EN and RO');
  if (!html.includes(`<link rel="canonical" href="${canonical}">`)) fail(file, `canonical must be ${canonical}`);
  if (!html.includes(`<meta property="og:url" content="${canonical}">`)) fail(file, `og:url must be ${canonical}`);

  for (const property of ['og:title', 'og:description', 'og:url', 'og:image', 'og:image:alt']) {
    if (!html.includes(`property="${property}"`)) fail(file, `missing ${property}`);
  }
  for (const name of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']) {
    if (!html.includes(`name="${name}"`)) fail(file, `missing ${name}`);
  }

  for (const tag of html.match(/<a\b[^>]*target=["']_blank["'][^>]*>/gi) ?? []) {
    const rel = attribute(tag, 'rel')?.split(/\s+/) ?? [];
    if (!rel.includes('noopener') || !rel.includes('noreferrer')) fail(file, 'target="_blank" link lacks noopener noreferrer');
  }

  if (/<form\b[^>]*(?:action=["'][^"']*\.php|method=["']post)/i.test(html)) fail(file, 'contains a server form submission');
  if (html.includes('data-demo-form') && !html.includes('assets/js/form-status.js')) fail(file, 'demo form is missing its local handler');

  for (const match of html.matchAll(/(?:data-i18n(?:-placeholder|-alt|-aria|-content)?|data-demo-i18n)="([^"]+)"/g)) {
    referencedTranslationKeys.set(match[1], file);
  }

  for (const tag of html.match(/<(?:a|img|script|link|source)\b[^>]*(?:href|src)=["'][^"']+["'][^>]*>/gi) ?? []) {
    const value = attribute(tag, 'href') ?? attribute(tag, 'src');
    if (!value || /^(?:https?:|mailto:|tel:|#|data:)/i.test(value)) continue;
    const localPath = value.split(/[?#]/)[0];
    if (!existsSync(resolve(root, localPath))) fail(file, `missing local asset ${localPath}`);
  }
}

for (const file of ['assets/js/form-status.js', 'assets/js/main-finantare.js']) {
  const source = readFileSync(resolve(root, file), 'utf8');
  for (const match of source.matchAll(/\.t\(['"]([^'"]+)['"]\)/g)) referencedTranslationKeys.set(match[1], file);
}
for (const [key, file] of referencedTranslationKeys) {
  if (!translationKeys.has(key)) fail(file, `references undefined translation key ${key}`);
}

const index = readFileSync(resolve(root, 'index.html'), 'utf8');
const schemaText = index.match(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/i)?.[1];
try {
  if (!schemaText) throw new Error('missing JSON-LD');
  JSON.parse(schemaText);
} catch (error) {
  fail('index.html', `invalid JSON-LD (${error.message})`);
}

const sitemap = readFileSync(resolve(root, 'sitemap.xml'), 'utf8');
for (const [, canonical] of pages) {
  if (!sitemap.includes(`<loc>${canonical}</loc>`)) fail('sitemap.xml', `missing ${canonical}`);
}

const robots = readFileSync(resolve(root, 'robots.txt'), 'utf8');
if (!robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) fail('robots.txt', 'sitemap URL does not match canonical deployment');

for (const banned of ['mixitup', 'unpkg.com', 'npmcdn.com', 'fonts.googleapis.com', 'assets/php/']) {
  for (const [file] of pages) {
    if (readFileSync(resolve(root, file), 'utf8').toLowerCase().includes(banned)) fail(file, `contains banned legacy reference ${banned}`);
  }
}

const videos = [
  'assets/img/bmwm5f90.mp4',
  'assets/img/ferrari488pista.mp4',
  'assets/img/mclarenp1.mp4',
  'assets/img/porsche992gt3.mp4',
  'assets/img/s/s580.mp4',
  'assets/img/s63amg.mp4',
  'assets/img/w223.mp4',
];
for (const video of videos) {
  const bytes = statSync(resolve(root, video)).size;
  if (bytes > 15 * 1024 * 1024) fail(video, `media budget exceeded (${(bytes / 1024 / 1024).toFixed(1)} MiB)`);
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

console.log(`Validated ${pages.length} pages, metadata, links, forms, structured data and media budgets.`);
