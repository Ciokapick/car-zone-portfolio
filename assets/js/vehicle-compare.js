(() => {
    'use strict';

    const MAX_SELECTION = 3;
    const STORAGE_KEY = 'carzone-compare-selection';
    const cards = Array.from(document.querySelectorAll('.featured__card'));
    if (!cards.length) return;

    const copy = {
        en: {
            add: 'Add to compare', remove: 'Remove from compare', selected: 'selected', compare: 'Compare vehicles',
            clear: 'Clear', close: 'Close comparison', title: 'Vehicle comparison', eyebrow: 'Side by side',
            hint: 'Choose two or three cars. The strongest figure in each row is highlighted.', empty: 'Select at least two cars.',
            year: 'Year', mileage: 'Mileage', power: 'Power', fuel: 'Fuel', drivetrain: 'Drivetrain', warranty: 'Warranty',
            price: 'Price', view: 'Open dossier', limit: 'Maximum three vehicles'
        },
        ro: {
            add: 'Adaugă la comparație', remove: 'Scoate din comparație', selected: 'selectate', compare: 'Compară mașinile',
            clear: 'Golește', close: 'Închide comparația', title: 'Comparația mașinilor', eyebrow: 'Față în față',
            hint: 'Alege două sau trei mașini. Cea mai bună valoare din fiecare rând este evidențiată.', empty: 'Selectează cel puțin două mașini.',
            year: 'An', mileage: 'Kilometraj', power: 'Putere', fuel: 'Combustibil', drivetrain: 'Tracțiune', warranty: 'Garanție',
            price: 'Preț', view: 'Deschide dosarul', limit: 'Maximum trei mașini'
        }
    };

    const lang = () => document.documentElement.lang === 'ro' ? 'ro' : 'en';
    const t = (key) => copy[lang()][key];
    const vehicleText = (value) => window.carzoneVehicleI18n.text(value, lang());
    const carId = (card) => {
        const link = card.querySelector('a[href*="id="]');
        return link ? new URL(link.getAttribute('href'), location.href).searchParams.get('id') : '';
    };
    const parseNumber = (value) => Number(String(value ?? '').replace(/[^0-9.]/g, '')) || 0;
    const formatKm = (value) => `${new Intl.NumberFormat(lang() === 'ro' ? 'ro-RO' : 'en-GB').format(Number(value) || 0)} km`;

    let cars = {};
    let selected = new Set();
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        selected = new Set(Array.isArray(saved) ? saved.slice(0, MAX_SELECTION) : []);
    } catch (_) { selected = new Set(); }

    const drawer = document.createElement('aside');
    drawer.className = 'compare-drawer';
    drawer.hidden = true;
    drawer.setAttribute('aria-label', 'Vehicle comparison');
    drawer.innerHTML = `
        <div class="compare-drawer__inner">
            <div class="compare-drawer__identity">
                <span class="compare-drawer__count" aria-live="polite">0 / ${MAX_SELECTION}</span>
                <span class="compare-drawer__label"></span>
            </div>
            <div class="compare-drawer__cars" aria-live="polite"></div>
            <div class="compare-drawer__actions">
                <button type="button" class="compare-drawer__clear"></button>
                <button type="button" class="compare-drawer__open"></button>
            </div>
        </div>`;

    const modal = document.createElement('dialog');
    modal.className = 'compare-modal';
    modal.innerHTML = `
        <div class="compare-modal__shell">
            <header class="compare-modal__header">
                <div><p class="compare-modal__eyebrow"></p><h2 class="compare-modal__title"></h2><p class="compare-modal__hint"></p></div>
                <button type="button" class="compare-modal__close"><i class="ri-close-line" aria-hidden="true"></i><span class="sr-only"></span></button>
            </header>
            <div class="compare-modal__content"></div>
        </div>`;

    document.body.append(drawer, modal);

    const save = () => {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...selected])); } catch (_) { /* private mode */ }
    };

    const remove = (id) => {
        selected.delete(id);
        save();
        render();
    };

    const metricRows = () => [
        { key: 'price', label: t('price'), value: (car) => window.carzoneVehicleI18n.price(car.price, lang()), score: (car) => parseNumber(car.price), best: 'min' },
        { key: 'year', label: t('year'), value: (car) => String(car.year), score: (car) => Number(car.year), best: 'max' },
        { key: 'mileage', label: t('mileage'), value: (car) => formatKm(car.km), score: (car) => Number(car.km), best: 'min' },
        { key: 'power', label: t('power'), value: (car) => vehicleText(car.power), score: (car) => parseNumber(car.power), best: 'max' },
        { key: 'fuel', label: t('fuel'), value: (car) => vehicleText(car.fuel) },
        { key: 'drivetrain', label: t('drivetrain'), value: (car) => vehicleText(car.specs?.technical?.Drivetrain || '—') },
        { key: 'warranty', label: t('warranty'), value: (car) => vehicleText(car.specs?.technical?.Warranty || '—') }
    ];

    const renderModal = () => {
        modal.querySelector('.compare-modal__eyebrow').textContent = t('eyebrow');
        modal.querySelector('.compare-modal__title').textContent = t('title');
        modal.querySelector('.compare-modal__hint').textContent = t('hint');
        modal.querySelector('.compare-modal__close').setAttribute('aria-label', t('close'));
        modal.querySelector('.compare-modal__close .sr-only').textContent = t('close');

        const picked = [...selected].map((id) => cars[id]).filter(Boolean);
        const content = modal.querySelector('.compare-modal__content');
        content.replaceChildren();
        if (picked.length < 2) {
            const empty = document.createElement('p');
            empty.className = 'compare-modal__empty';
            empty.textContent = t('empty');
            content.append(empty);
            return;
        }

        const grid = document.createElement('div');
        grid.className = `compare-grid compare-grid--${picked.length}`;
        const corner = document.createElement('div');
        corner.className = 'compare-grid__corner';
        corner.textContent = `${picked.length} ${t('selected')}`;
        grid.append(corner);

        picked.forEach((car) => {
            const head = document.createElement('article');
            head.className = 'compare-grid__vehicle';
            const image = document.createElement('img');
            image.src = car.image;
            image.alt = `${car.make} ${car.model}`;
            const name = document.createElement('h3');
            name.textContent = `${car.make} ${car.model}`;
            const link = document.createElement('a');
            link.href = `dossier.html?id=${encodeURIComponent(car.id)}`;
            link.textContent = t('view');
            link.innerHTML += ' <span aria-hidden="true">↗</span>';
            head.append(image, name, link);
            grid.append(head);
        });

        metricRows().forEach((metric) => {
            const label = document.createElement('div');
            label.className = 'compare-grid__label';
            label.textContent = metric.label;
            grid.append(label);

            const scores = picked.map(metric.score || (() => 0));
            const target = metric.best === 'min' ? Math.min(...scores) : metric.best === 'max' ? Math.max(...scores) : null;
            picked.forEach((car, index) => {
                const cell = document.createElement('div');
                cell.className = 'compare-grid__value';
                if (target !== null && scores[index] === target) cell.classList.add('is-best');
                cell.textContent = metric.value(car);
                grid.append(cell);
            });
        });
        content.append(grid);
    };

    const render = () => {
        drawer.setAttribute('aria-label', t('title'));
        selected = new Set([...selected].filter((id) => cars[id]).slice(0, MAX_SELECTION));
        drawer.hidden = selected.size === 0;
        drawer.querySelector('.compare-drawer__count').textContent = `${selected.size} / ${MAX_SELECTION}`;
        drawer.querySelector('.compare-drawer__label').textContent = lang() === 'ro' && selected.size === 1 ? 'selectată' : t('selected');
        drawer.querySelector('.compare-drawer__clear').textContent = t('clear');
        const openButton = drawer.querySelector('.compare-drawer__open');
        openButton.textContent = t('compare');
        openButton.disabled = selected.size < 2;

        const chips = drawer.querySelector('.compare-drawer__cars');
        chips.replaceChildren(...[...selected].map((id) => {
            const car = cars[id];
            const chip = document.createElement('button');
            chip.type = 'button';
            chip.className = 'compare-chip';
            chip.setAttribute('aria-label', `${t('remove')}: ${car.make} ${car.model}`);
            chip.innerHTML = `<span>${car.make} ${car.model}</span><i class="ri-close-line" aria-hidden="true"></i>`;
            chip.addEventListener('click', () => remove(id));
            return chip;
        }));

        cards.forEach((card) => {
            const id = carId(card);
            const button = card.querySelector('.compare-toggle');
            if (!button || !id) return;
            const active = selected.has(id);
            button.classList.toggle('is-active', active);
            button.setAttribute('aria-pressed', String(active));
            button.setAttribute('aria-label', `${active ? t('remove') : t('add')}: ${cars[id]?.make || ''} ${cars[id]?.model || ''}`.trim());
            button.title = active ? t('remove') : selected.size >= MAX_SELECTION ? t('limit') : t('add');
            card.classList.toggle('is-compared', active);
        });
        renderModal();
    };

    const injectButtons = () => {
        cards.forEach((card) => {
            const id = carId(card);
            if (!id || !cars[id]) return;
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'compare-toggle';
            button.innerHTML = '<i class="ri-scales-3-line" aria-hidden="true"></i>';
            button.addEventListener('click', () => {
                if (selected.has(id)) selected.delete(id);
                else if (selected.size < MAX_SELECTION) selected.add(id);
                save();
                render();
            });
            card.append(button);
        });
    };

    drawer.querySelector('.compare-drawer__clear').addEventListener('click', () => {
        selected.clear();
        save();
        render();
    });
    drawer.querySelector('.compare-drawer__open').addEventListener('click', () => {
        if (selected.size < 2) return;
        renderModal();
        if (typeof modal.showModal === 'function') modal.showModal();
        else modal.setAttribute('open', '');
    });
    modal.querySelector('.compare-modal__close').addEventListener('click', () => modal.close());
    modal.addEventListener('click', (event) => {
        if (event.target === modal) modal.close();
    });

    new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

    fetch('assets/data/cars.json', { cache: 'no-store' })
        .then((response) => {
            if (!response.ok) throw new Error(`Inventory returned ${response.status}`);
            return response.json();
        })
        .then((payload) => {
            cars = payload;
            injectButtons();
            render();
        })
        .catch((error) => console.warn('Vehicle comparison is unavailable.', error));
})();
