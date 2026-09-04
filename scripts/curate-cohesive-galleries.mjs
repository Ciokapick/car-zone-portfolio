import { mkdir, readFile, rename, rm, stat, writeFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import path from 'node:path';
import process from 'node:process';

// Finds photo runs rather than independently picking four photos by angle.
// A run is kept only when every selected file is openly licensed and comes
// from the same photographer + filename series.  This prevents a black M5,
// white M5 and silver M5 ending up in one dossier.

const ROOT = process.cwd();
const CARS_PATH = path.join(ROOT, 'assets', 'data', 'cars.json');
const OUTPUT_PATH = path.join(ROOT, 'assets', 'data', 'cohesive-gallery-candidates.json');
const CREDIT_PATH = path.join(ROOT, 'assets', 'data', 'commons-media.json');
const GALLERIES_PATH = path.join(ROOT, 'assets', 'img', 'galleries');
const STAGING_PATH = path.join(ROOT, 'tmp', 'cohesive-galleries');
const ONLY_ARG = process.argv.find((argument) => argument.startsWith('--only='));
const ONLY = ONLY_ARG ? new Set(ONLY_ARG.slice(7).split(',').filter(Boolean)) : null;
const APPLY = process.argv.includes('--apply');
const APPLY_EXISTING = process.argv.includes('--apply-existing');
const LIMIT_ARG = process.argv.find((argument) => argument.startsWith('--limit='));
const LIMIT = LIMIT_ARG ? Number(LIMIT_ARG.slice(8)) : Infinity;
const SLOTS = ['hero', 'rear', 'interior', 'detail'];

const cars = JSON.parse(await readFile(CARS_PATH, 'utf8'));
const existingCredits = JSON.parse(await readFile(CREDIT_PATH, 'utf8'));

function stripHtml(value = '') {
  return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function normal(value = '') {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function metadata(item, field) {
  return item.imageinfo?.[0]?.extmetadata?.[field]?.value || '';
}

function compact(page) {
  const info = page.imageinfo?.[0] || {};
  const title = page.title || '';
  const sourceUrl = info.descriptionurl || '';
  return {
    title,
    width: info.width || 0,
    height: info.height || 0,
    mime: info.mime || '',
    sourceUrl,
    originalUrl: info.url || '',
    downloadUrl: info.thumburl || info.url || '',
    license: stripHtml(metadata(page, 'LicenseShortName')),
    licenseUrl: metadata(page, 'LicenseUrl'),
    artist: stripHtml(metadata(page, 'Artist')),
    credit: stripHtml(metadata(page, 'Credit'))
  };
}

function canUse(item) {
  return item.mime === 'image/jpeg'
    && item.width >= 1600
    && item.height >= 900
    && /CC BY|CC0|Public domain/i.test(item.license)
    && Boolean(item.originalUrl);
}

function seriesName(title) {
  return normal(title
    .replace(/^File:/i, '')
    .replace(/\.(?:jpe?g)$/i, '')
    // Camera/Flickr identifiers distinguish a run but are not part of its name.
    .replace(/\s*\((?:\d+|img[_ -]?\d+)\)\s*$/i, '')
    .replace(/(?:[_ -](?:img[_ -]?)?\d+)$/i, '')
    .replace(/\s+(?:front|rear|back|interior|cockpit|dashboard|detail|side|profile)$/i, ''));
}

function groupKey(item) {
  // A filename family alone is unsafe: generic names such as "BMW M5 E60"
  // can include uploads from several owners. Photographer + family is a
  // conservative proxy for one capture session.
  return `${normal(item.artist || item.credit || 'unknown')}::${seriesName(item.title)}`;
}

function captureNumber(title) {
  const fileName = title.replace(/\.(?:jpe?g)$/i, '');
  const match = fileName.match(/\((\d{3,})\)\s*$/) || fileName.match(/(?:[_ -])(\d{3,})$/);
  return match ? Number(match[1]) : null;
}

function splitIntoCaptureRuns(items) {
  const numbered = items
    .map((item) => ({ item, number: captureNumber(item.title) }))
    .filter(({ number }) => Number.isFinite(number));
  // Flickr-style image IDs are consecutive inside a shoot but can be millions
  // apart between shoots. Keep a tight cluster so one prolific photographer
  // cannot accidentally contribute several different M5s to a single gallery.
  if (numbered.length < 4) return [items];
  const clusters = [];
  for (const record of numbered.sort((a, b) => a.number - b.number)) {
    const cluster = clusters.at(-1);
    if (!cluster || record.number - cluster.at(-1).number > 600) clusters.push([record]);
    else cluster.push(record);
  }
  const usable = clusters.filter((cluster) => cluster.length >= 4).map((cluster) => cluster.map(({ item }) => item));
  // Do not fall back to the whole photographer/model group here. When there
  // are numeric file IDs but none form a four-image burst, it is evidence of
  // several separate shoots rather than one documented vehicle.
  return usable;
}

function keywordScore(item, slot) {
  const words = normal(item.title);
  const has = (terms) => terms.some((term) => words.includes(term));
  const scores = {
    hero: (has(['front', 'three quarter', '3 4', 'side', 'profile']) ? 30 : 0) - (has(['rear', 'back']) ? 20 : 0),
    rear: (has(['rear', 'back', 'taillight']) ? 30 : 0) - (has(['front', 'headlight']) ? 20 : 0),
    interior: has(['interior', 'cockpit', 'dashboard', 'inside', 'steering']) ? 30 : 0,
    detail: has(['detail', 'wheel', 'engine', 'headlight', 'door']) ? 22 : 0
  };
  return scores[slot] + (item.width / item.height >= 1.25 ? 4 : 0);
}

function pickSlots(items) {
  const unused = new Set(items.map((item) => item.title));
  return SLOTS.map((slot) => {
    const pick = [...items]
      .filter((item) => unused.has(item.title))
      .sort((a, b) => keywordScore(b, slot) - keywordScore(a, slot) || (b.width * b.height) - (a.width * a.height))[0];
    unused.delete(pick.title);
    return { slot, ...pick };
  });
}

async function searchCommons(search) {
  const params = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: `intitle:"${search}" filetype:bitmap`,
    gsrnamespace: '6',
    gsrlimit: '100',
    prop: 'imageinfo',
    iiprop: 'url|size|mime|extmetadata',
    iiurlwidth: '1920',
    format: 'json',
    origin: '*'
  });
  for (let attempt = 1; attempt <= 5; attempt += 1) {
    const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`, {
      headers: { 'User-Agent': 'CarZonePortfolioGalleryCurator/1.0 (portfolio media audit)' }
    });
    if (response.ok) {
      const payload = await response.json();
      return Object.values(payload.query?.pages || {}).map(compact);
    }
    if (response.status !== 429 || attempt === 5) {
      throw new Error(`Commons query failed (${response.status}) for ${search}`);
    }
    const waitSeconds = Math.max(Number(response.headers.get('retry-after')) || 0, attempt * 4);
    process.stderr.write(`${search}: rate limited, retrying in ${waitSeconds}s\n`);
    await new Promise((resolve) => setTimeout(resolve, waitSeconds * 1000));
  }
  return [];
}

function chooseRun(items) {
  const grouped = new Map();
  for (const item of items.filter(canUse)) {
    const key = groupKey(item);
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(item);
  }

  return [...grouped.entries()]
    .flatMap(([key, run]) => splitIntoCaptureRuns(run).map((captureRun) => [key, captureRun]))
    .filter(([, run]) => run.length >= 4)
    .map(([key, run]) => ({
      key,
      run,
      score: run.length * 100
        + run.reduce((sum, item) => sum + Math.min(12, Math.round(Math.log2(item.width * item.height) - 18)), 0)
    }))
    .sort((a, b) => b.score - a.score)[0] || null;
}

async function fetchFile(url, destination) {
  for (let attempt = 1; attempt <= 6; attempt += 1) {
    const response = await fetch(url, { headers: { 'User-Agent': 'CarZonePortfolioGalleryCurator/1.0 (portfolio media audit)' } });
    if (response.ok) {
      await writeFile(destination, Buffer.from(await response.arrayBuffer()));
      return;
    }
    if (response.status !== 429 || attempt === 6) {
      throw new Error(`Download failed (${response.status}): ${url}`);
    }
    const waitSeconds = Math.max(Number(response.headers.get('retry-after')) || 0, attempt * 5);
    process.stderr.write(`Download rate limited; retrying in ${waitSeconds}s\n`);
    await new Promise((resolve) => setTimeout(resolve, waitSeconds * 1000));
  }
}

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'inherit', shell: process.platform === 'win32' });
    child.once('error', reject);
    child.once('exit', (code) => code === 0 ? resolve() : reject(new Error(`${command} exited ${code}`)));
  });
}

async function toWebp(source, destination) {
  await run('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-i', source, '-vf', "scale='min(1920,iw)':-2", '-c:v', 'libwebp', '-q:v', '82', destination]);
  const file = await stat(destination);
  if (file.size < 30_000) throw new Error(`Unexpectedly small WebP: ${destination}`);
}

async function applyRun(id, images) {
  const stage = path.join(STAGING_PATH, id);
  const finalDir = path.join(GALLERIES_PATH, id);
  await mkdir(stage, { recursive: true });
  await mkdir(finalDir, { recursive: true });
  for (const image of images) {
    const original = path.join(stage, `${image.slot}.jpg`);
    const stagedWebp = path.join(stage, `${image.slot}.webp`);
    const finalWebp = path.join(finalDir, `${image.slot}.webp`);
    await fetchFile(image.downloadUrl, original);
    await toWebp(original, stagedWebp);
    // Rename replaces the target atomically on the same volume, so a failed
    // conversion cannot leave an existing gallery half-written.
    await rm(finalWebp, { force: true });
    await rename(stagedWebp, finalWebp);
    image.localPath = `assets/img/galleries/${id}/${image.slot}.webp`;
    image.optimizedBytes = (await stat(finalWebp)).size;
  }
}

if (APPLY_EXISTING) {
  const prior = JSON.parse(await readFile(OUTPUT_PATH, 'utf8'));
  const credits = existingCredits;
  let applied = 0;
  for (const [id, entry] of Object.entries(prior.cars || {})) {
    if (ONLY && !ONLY.has(id)) continue;
    if (entry.status !== 'cohesive-candidate') continue;
    await applyRun(id, entry.images);
    credits.cars[id] = { status: 'candidate-complete', searchName: entry.searchName, images: entry.images };
    applied += 1;
    process.stdout.write(`${id}: applied ${entry.images.length} images\n`);
  }
  credits.generatedAt = new Date().toISOString();
  await writeFile(CREDIT_PATH, `${JSON.stringify(credits, null, 2)}\n`);
  process.stdout.write(`Applied ${applied} cohesive galleries from the reviewed candidate manifest.\n`);
  process.exit(0);
}

const candidates = {
  generatedAt: new Date().toISOString(),
  source: 'Wikimedia Commons',
  rule: 'Only complete four-image runs from one photographer and filename family are eligible for replacement.',
  cars: {}
};

const selectedEntries = Object.entries(cars)
  .filter(([id]) => !ONLY || ONLY.has(id))
  .filter(([id]) => id !== 'mercedes-s580')
  .slice(0, Number.isFinite(LIMIT) ? LIMIT : undefined);

for (const [id, car] of selectedEntries) {
  // The first media pass already records generation-aware search names such
  // as "BMW M5 E60" and "Audi Q7 4M".  Reuse them instead of guessing from
  // the display model ("M5" would otherwise find several generations).
  const searchName = existingCredits.cars?.[id]?.searchName || `${car.make} ${car.model}`;
  try {
    const candidatesForCar = await searchCommons(searchName);
    const run = chooseRun(candidatesForCar);
    if (!run) {
      candidates.cars[id] = { status: 'needs-source', searchName, candidateCount: candidatesForCar.filter(canUse).length };
      process.stdout.write(`${id}: no cohesive four-image run\n`);
      continue;
    }
    const images = pickSlots(run.run);
    candidates.cars[id] = {
      status: 'cohesive-candidate',
      searchName,
      series: run.key,
      sourceCount: run.run.length,
      images
    };
    if (APPLY) await applyRun(id, images);
    process.stdout.write(`${id}: ${images.length} cohesive images${APPLY ? ' applied' : ''}\n`);
  } catch (error) {
    candidates.cars[id] = { status: 'error', searchName, error: error.message };
    process.stderr.write(`${id}: ${error.message}\n`);
  }
  await new Promise((resolve) => setTimeout(resolve, 1_250));
}

await writeFile(OUTPUT_PATH, `${JSON.stringify(candidates, null, 2)}\n`);

if (APPLY) {
  const credits = existingCredits;
  for (const [id, entry] of Object.entries(candidates.cars)) {
    if (entry.status !== 'cohesive-candidate') continue;
    credits.cars[id] = { status: 'candidate-complete', searchName: entry.searchName, images: entry.images };
  }
  credits.generatedAt = candidates.generatedAt;
  await writeFile(CREDIT_PATH, `${JSON.stringify(credits, null, 2)}\n`);
}

const applied = Object.values(candidates.cars).filter((entry) => entry.status === 'cohesive-candidate').length;
const missing = Object.values(candidates.cars).filter((entry) => entry.status === 'needs-source').length;
process.stdout.write(`Finished: ${applied} cohesive candidates, ${missing} need a separate source.\n`);
