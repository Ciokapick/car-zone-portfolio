import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { runInNewContext, Script } from 'node:vm';
import assert from 'node:assert/strict';

const root = resolve(import.meta.dirname, '..');
const read = file => readFileSync(resolve(root, file), 'utf8');
const source = read('assets/js/i18n.js');
const dictionary = runInNewContext(`(${source.match(/var translations = (\{[\s\S]*?\n    \});/)[1]})`);
for (const [key, entry] of Object.entries(dictionary)) {
  for (const lang of ['ro', 'en']) assert.ok(typeof entry[lang] === 'string' && entry[lang].trim(), `${key}: missing ${lang}`);
}
const pages = ['index', 'stoc', 'dossier', 's580', 'comanda', 'vinde', 'contact', 'finantare', 'media-credits'];
for (const page of pages) {
  for (const [, key] of read(`${page}.html`).matchAll(/(?:data-i18n(?:-placeholder|-alt|-aria|-content)?|data-demo-i18n)="([^"]+)"/g)) {
    assert.ok(dictionary[key], `${page}: unknown translation ${key}`);
  }
}
const context = { window: {}, document: { documentElement: { lang: 'ro' } } };
runInNewContext(read('assets/js/vehicle-i18n.js'), context);
const { text, covered } = context.window.carzoneVehicleI18n;
const cars = Object.values(JSON.parse(read('assets/data/cars.json')));
const values = new Set();
for (const car of cars) {
  values.add(car.fuel); values.add(car.power);
  for (const section of Object.values(car.specs || {})) {
    if (Array.isArray(section)) section.forEach(value => values.add(value));
    else for (const [key, value] of Object.entries(section)) {
      values.add(key);
      if (!['VIN', 'First registration', 'Production year', 'Make', 'Model', 'model'].includes(key)) values.add(value);
    }
  }
}
for (const value of values) {
  assert.ok(covered(value), `Missing Romanian vehicle translation: ${value}`);
  assert.equal(text(value, 'en'), String(value ?? ''), 'English source must be preserved');
  assert.ok(text(value, 'ro').trim(), `Empty translation: ${value}`);
}
assert.equal(text('750 HP', 'ro'), '750 CP');
assert.equal(text('24-month warranty', 'ro'), 'Garanție de 24 de luni');
assert.equal(text('quattro AWD', 'ro'), 'Tracțiune integrală quattro');
assert.equal(context.window.carzoneVehicleI18n.price('€120,900', 'en'), '€120,900');
assert.equal(context.window.carzoneVehicleI18n.price('€120,900', 'ro').replace(/\s/g, ' '), '120.900 €');
for (const file of ['i18n', 'vehicle-i18n', 'car-dossier', 'vehicle-compare', 'vehicle-microinteractions', 'showroom-mode', 'form-status', 'main-finantare']) {
  new Script(read(`assets/js/${file}.js`), { filename: file });
}
console.log(`Translation checks passed: ${pages.length} pages, ${cars.length} vehicles, ${values.size} vehicle values, ${Object.keys(dictionary).length} bilingual keys.`);
