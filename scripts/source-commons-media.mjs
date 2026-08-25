import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const CARS_PATH = path.join(ROOT, 'assets', 'data', 'cars.json');
const MANIFEST_PATH = path.join(ROOT, 'assets', 'data', 'commons-media.json');
const MEDIA_ROOT = path.join(ROOT, 'assets', 'img', 'galleries');
const DOWNLOAD = process.argv.includes('--download');
const DOWNLOAD_MANIFEST = process.argv.includes('--download-manifest');
const ONLY_ARG = process.argv.find((argument) => argument.startsWith('--only='));
const ONLY = ONLY_ARG ? new Set(ONLY_ARG.slice('--only='.length).split(',').filter(Boolean)) : null;

const cars = JSON.parse(await readFile(CARS_PATH, 'utf8'));

const aliases = {
  'tesla-model-x': 'Tesla Model X',
  'mercedes-s580': 'Mercedes-Benz S 580 W223',
  'audi-r8': 'Audi R8 4S',
  'porsche-911-turbo-s': 'Porsche 911 992 Turbo S',
  'tesla-model-y': 'Tesla Model Y',
  'tesla-model-s': 'Tesla Model S',
  'lotus-emira': 'Lotus Emira',
  'lotus-seletre': 'Lotus Eletre',
  'lotus-elise': 'Lotus Elise',
  'audi-q3': 'Audi Q3',
  'audi-q7': 'Audi Q7 4M',
  'audi-rs4': 'Audi RS4 B8',
  'audi-rs5': 'Audi RS5',
  'audi-rsq8': 'Audi RS Q8',
  'lexus-es': 'Lexus ES 300h',
  'lexus-is': 'Lexus IS 500',
  'lexus-lc': 'Lexus LC 500',
  'lexus-lfa': 'Lexus LFA',
  'lexus-lx': 'Lexus LX',
  'lexus-uxh': 'Lexus UX 250h',
  'porsche-918-spyder': 'Porsche 918 Spyder',
  'alfa-romeo-4c': 'Alfa Romeo 4C',
  'alfa-romeo-33-stradale': 'Alfa Romeo 33 Stradale',
  'alfa-romeo-giulia': 'Alfa Romeo Giulia Quadrifoglio',
  'alfa-romeo-tonale': 'Alfa Romeo Tonale',
  'alfa-romeo-stelvio': 'Alfa Romeo Stelvio',
  'genesis-g70-shooting-brake': 'Genesis G70 Shooting Brake',
  'genesis-g80': 'Genesis G80',
  'genesis-g90': 'Genesis G90 RS4',
  'genesis-g90-long-wheelbase': 'Genesis G90 LWB',
  'genesis-gv60': 'Genesis GV60',
  'genesis-gv70': 'Genesis GV70',
  'mercedes-s400d': 'Mercedes-Benz W223',
  'mercedes-e55-amg': 'Mercedes-Benz E 55 AMG W211',
  'mercedes-g65-amg': 'Mercedes-Benz G 65 AMG',
  'mercedes-c63-amg': 'Mercedes-Benz C 63 AMG',
  'mercedes-c43-amg': 'Mercedes-AMG C 43 W206',
  'mercedes-cls63-amg': 'Mercedes-Benz CLS 63 AMG',
  'mercedes-s63-smg': 'Mercedes-Benz W221',
  'bmw-x5': 'BMW X5 G05',
  'bmw-m6': 'BMW M6 F13',
  'bmw-x6': 'BMW X6 G06',
  'bmw-m5': 'BMW M5 E60',
  'bmw-m8': 'BMW M8',
  'bmw-m3': 'BMW M3 E92',
  'corvette-z51': 'Chevrolet Corvette C8 Z51',
  'corvette-c8': 'Chevrolet Corvette C8',
  'corvette-stingray-c7': 'Chevrolet Corvette Stingray C7',
  'koenigsegg-cc850': 'Koenigsegg CC850',
  'koenigsegg-gemera': 'Koenigsegg Gemera',
  'koenigsegg-jesko-attack': 'Koenigsegg Jesko Attack',
  'porsche-taycan': 'Porsche Taycan',
  'porsche-turbo-s-cross': 'Porsche Taycan Turbo S Cross Turismo',
  'porsche-boxster-718': 'Porsche 718 Boxster',
  'porsche-cayman': 'Porsche 718 Cayman'
};

const blockedWords = [
  'crash', 'crashed', 'accident', 'police', 'taxi', 'wreck', 'damaged', 'fire',
  'toy', 'lego', 'diecast', 'model car', 'drawing', 'diagram', 'logo', 'badge',
  'camouflage', 'prototype mule', 'race car', 'racing', 'replica', 'polizia', 'polizei', 'carabinieri'
];

const blockedWordsByCar = {
  'lexus-lfa': ['chassis', 'concept', 'spider', 'roadster'],
  'alfa-romeo-33-stradale': ['1967', '1968', 'classic', 'prototype', 'cropped'],
};

const slotKeywords = {
  hero: ['front', 'three quarter', '3-4', 'side', 'profile'],
  rear: ['rear', 'back', 'taillight'],
  interior: ['interior', 'cockpit', 'dashboard', 'inside', 'steering'],
  detail: ['detail', 'wheel', 'engine', 'headlight', 'door', 'side', 'profile']
};

function stripHtml(value = '') {
  return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function normalized(value = '') {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function getMetadata(item, field) {
  return item.imageinfo?.[0]?.extmetadata?.[field]?.value || '';
}

function compactItem(page) {
  const info = page.imageinfo?.[0] || {};
  return {
    title: page.title,
    width: info.width || 0,
    height: info.height || 0,
    mime: info.mime || '',
    sourceUrl: info.descriptionurl || '',
    originalUrl: info.url || '',
    downloadUrl: info.thumburl || info.url || '',
    license: stripHtml(getMetadata(page, 'LicenseShortName')),
    licenseUrl: getMetadata(page, 'LicenseUrl'),
    artist: stripHtml(getMetadata(page, 'Artist')),
    credit: stripHtml(getMetadata(page, 'Credit'))
  };
}

async function commonsSearch(searchName, extra = '') {
  const search = `intitle:"${searchName}" ${extra} filetype:bitmap`;
  const params = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: search,
    gsrnamespace: '6',
    gsrlimit: '50',
    prop: 'imageinfo',
    iiprop: 'url|size|mime|extmetadata',
    iiurlwidth: '1920',
    format: 'json',
    origin: '*'
  });
  let response;
  for (let attempt = 1; attempt <= 5; attempt += 1) {
    response = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`, {
      headers: { 'User-Agent': 'CarZonePortfolioMediaAudit/1.0 (https://github.com/Ciokapick/car-zone-portfolio; contact via GitHub)' }
    });
    if (response.ok) break;
    if (response.status !== 429 || attempt === 5) {
      throw new Error(`Commons search failed (${response.status}) for ${searchName}`);
    }
    const retryAfter = Number(response.headers.get('retry-after')) || attempt * 2;
    await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000));
  }
  const payload = await response.json();
  return Object.values(payload.query?.pages || {}).map(compactItem);
}

function isUsable(item, searchName, carId) {
  const title = normalized(item.title);
  const required = normalized(searchName).split(' ').filter((token) => token.length > 1);
  const tokenHits = required.filter((token) => title.includes(token)).length;
  const enoughIdentity = tokenHits >= Math.min(required.length, Math.max(2, Math.ceil(required.length * .6)));
  return item.mime === 'image/jpeg'
    && item.width >= 1600
    && item.height >= 900
    && enoughIdentity
    && !blockedWords.some((word) => title.includes(word))
    && !(blockedWordsByCar[carId] || []).some((word) => title.includes(word));
}

function scoreForSlot(item, slot, searchName) {
  const title = normalized(item.title);
  const queryTokens = normalized(searchName).split(' ');
  const identityScore = queryTokens.reduce((score, token) => score + (title.includes(token) ? 6 : 0), 0);
  const keywordScore = slotKeywords[slot].reduce((score, keyword) => score + (title.includes(keyword) ? 18 : 0), 0);
  const landscapeScore = item.width / item.height >= 1.35 ? 12 : 0;
  const resolutionScore = Math.min(18, Math.log2(Math.max(item.width * item.height, 1)) - 18);
  const licenseScore = /CC0|Public domain/i.test(item.license) ? 4 : 0;
  const interiorTerms = slotKeywords.interior;
  const hasInteriorTerm = interiorTerms.some((keyword) => title.includes(keyword));
  const interiorFitScore = slot === 'interior'
    ? (hasInteriorTerm ? 24 : -20)
    : (hasInteriorTerm ? -28 : 0);
  const anglePenalty = slot === 'hero' && /rear|back|taillight/.test(title)
    ? -22
    : slot === 'rear' && /front|headlight/.test(title)
      ? -22
      : 0;
  return identityScore + keywordScore + landscapeScore + resolutionScore + licenseScore + interiorFitScore + anglePenalty;
}

function selectSlots(items, searchName) {
  const selected = [];
  for (const slot of ['hero', 'rear', 'interior', 'detail']) {
    const ranked = items
      .filter((item) => !selected.some((choice) => choice.title === item.title))
      .map((item) => ({ ...item, score: Math.round(scoreForSlot(item, slot, searchName) * 10) / 10 }))
      .sort((a, b) => b.score - a.score);
    if (ranked[0]) selected.push({ slot, ...ranked[0] });
  }
  return selected;
}

async function downloadFile(url, outputPath) {
  let response;
  for (let attempt = 1; attempt <= 6; attempt += 1) {
    response = await fetch(url, {
      headers: { 'User-Agent': 'CarZonePortfolioMediaAudit/1.0 (https://github.com/Ciokapick/car-zone-portfolio; contact via GitHub)' }
    });
    if (response.ok) break;
    if (response.status !== 429 || attempt === 6) {
      throw new Error(`Download failed (${response.status}): ${url}`);
    }
    const retryAfter = Number(response.headers.get('retry-after')) || attempt * 3;
    await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000));
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(outputPath, buffer);
  return buffer.length;
}

if (DOWNLOAD_MANIFEST) {
  const existingManifest = JSON.parse(await readFile(MANIFEST_PATH, 'utf8'));
  const tasks = [];
  for (const [id, entry] of Object.entries(existingManifest.cars)) {
    for (const image of entry.images || []) {
      tasks.push({ id, image });
    }
  }

  let cursor = 0;
  let completed = 0;
  async function worker() {
    while (cursor < tasks.length) {
      const task = tasks[cursor];
      cursor += 1;
      const directory = path.join(MEDIA_ROOT, task.id);
      await mkdir(directory, { recursive: true });
      const output = path.join(directory, `${task.image.slot}.jpg`);
      task.image.localPath = `assets/img/galleries/${task.id}/${task.image.slot}.jpg`;
      try {
        const existing = await stat(output);
        if (existing.size > 100_000) {
          task.image.bytes = existing.size;
          completed += 1;
          continue;
        }
      } catch {
        // Download the missing file below.
      }
      const fileName = task.image.title.replace(/^File:/, '');
      const redirectUrl = `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(fileName)}?width=1920`;
      try {
        task.image.bytes = await downloadFile(redirectUrl, output);
      } catch {
        task.image.bytes = await downloadFile(task.image.originalUrl, output);
      }
      completed += 1;
      await new Promise((resolve) => setTimeout(resolve, 1400));
      if (completed % 12 === 0 || completed === tasks.length) {
        process.stdout.write(`Downloaded ${completed}/${tasks.length}\n`);
      }
    }
  }

  await worker();
  await writeFile(MANIFEST_PATH, `${JSON.stringify(existingManifest, null, 2)}\n`);
  process.stdout.write(`Downloaded all ${tasks.length} selected images.\n`);
  process.exit(0);
}

let manifest;
if (ONLY) {
  try {
    manifest = JSON.parse(await readFile(MANIFEST_PATH, 'utf8'));
    manifest.generatedAt = new Date().toISOString();
  } catch {
    manifest = null;
  }
}
manifest ||= {
  generatedAt: new Date().toISOString(),
  source: 'Wikimedia Commons',
  note: 'Every file keeps its source page, author and license for portfolio attribution.',
  cars: {}
};

for (const [id, car] of Object.entries(cars)) {
  if (ONLY && !ONLY.has(id)) continue;
  if (id === 'mercedes-s580') {
    manifest.cars[id] = { status: 'custom-gallery-kept', searchName: aliases[id], images: [] };
    continue;
  }

  const searchName = aliases[id] || `${car.make} ${car.model}`;
  const broad = await commonsSearch(searchName);
  const needsInterior = !broad.some((item) => /interior|cockpit|dashboard|inside/i.test(item.title));
  const needsRear = !broad.some((item) => /rear|back|taillight/i.test(item.title));
  const extra = [];
  if (needsInterior) extra.push(...await commonsSearch(searchName, 'interior'));
  if (needsRear) extra.push(...await commonsSearch(searchName, 'rear'));

  const unique = [...broad, ...extra]
    .filter((item, index, list) => list.findIndex((candidate) => candidate.title === item.title) === index)
    .filter((item) => isUsable(item, searchName, id));
  const images = selectSlots(unique, searchName);

  manifest.cars[id] = {
    status: images.length === 4 ? 'candidate-complete' : 'needs-review',
    searchName,
    candidateCount: unique.length,
    images
  };

  if (DOWNLOAD && images.length) {
    const directory = path.join(MEDIA_ROOT, id);
    await mkdir(directory, { recursive: true });
    for (const image of images) {
      const output = path.join(directory, `${image.slot}.jpg`);
      image.localPath = `assets/img/galleries/${id}/${image.slot}.jpg`;
      image.bytes = await downloadFile(image.downloadUrl, output);
    }
  }

  process.stdout.write(`${id}: ${images.length}/4 from ${unique.length} candidates\n`);
  await new Promise((resolve) => setTimeout(resolve, 450));
}

await writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`);

const complete = Object.values(manifest.cars).filter((entry) => entry.status === 'candidate-complete').length;
const review = Object.values(manifest.cars).filter((entry) => entry.status === 'needs-review').length;
process.stdout.write(`Manifest written: ${complete} complete, ${review} need review.\n`);
