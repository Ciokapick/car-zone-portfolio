document.addEventListener('DOMContentLoaded', () => {
    const filters = Array.from(document.querySelectorAll('.featured__item[data-filter]'));
    const cards = Array.from(document.querySelectorAll('.featured__card'));
    const search = document.getElementById('inventory-search');
    const count = document.getElementById('inventory-count');
    const sort = document.getElementById('inventory-sort');
    const grid = cards[0] && cards[0].parentElement;

    if (!filters.length || !cards.length) return;

    // Un singur sistem de pagini pentru toata colectia: cardurile trimit spre
    // dossier.html, iar treapta de prezentare o decide dosarul dupa media
    // disponibila, nu link-ul de aici.
    cards.forEach((card) => {
        card.querySelectorAll('a[href^="car-detail.html?id="]').forEach((link) => {
            link.href = link.getAttribute('href').replace('car-detail.html', 'dossier.html');
        });
    });

    let activeSelector = 'all';

    // Ordinea din markup e cea curatoriata: o pastram ca sa putem reveni la ea.
    const originalOrder = cards.slice();
    // Cheia de sortare vine din cars.json, nu din textul cardului: pretul e scris
    // "€108,990", iar parsarea din DOM ar fi depins de formatare.
    const data = new Map();

    const idOf = (card) => {
        const link = card.querySelector('a[href*="id="]');
        return link ? new URL(link.getAttribute('href'), location.href).searchParams.get('id') : null;
    };

    // Imaginile au canvase si spatii transparente foarte diferite. Aceeasi
    // cutie CSS de 230x150 nu inseamna aceeasi marime perceputa a masinii.
    // Metadatele sunt calculate offline din alpha; aici normalizam aria
    // vizibila, centrul si linia rotilor fara crop sau deformare.
    let framing = null;
    let framingFrame = 0;

    const applyVehicleFraming = (image) => {
        if (!framing || !image.complete || !image.naturalWidth) return;
        const source = image.getAttribute('src');
        const frame = framing.images[source];
        if (!frame) return;

        const boxWidth = image.clientWidth;
        const boxHeight = image.clientHeight;
        if (!boxWidth || !boxHeight) return;

        const [sourceWidth, sourceHeight] = frame.sourceSize;
        const drawScale = Math.min(boxWidth / sourceWidth, boxHeight / sourceHeight);
        const drawWidth = sourceWidth * drawScale;
        const drawHeight = sourceHeight * drawScale;
        const offsetX = (boxWidth - drawWidth) / 2;
        const offsetY = boxHeight - drawHeight;
        const [left, top, right, bottom] = frame.bounds;
        const x1 = offsetX + left * drawWidth;
        const y1 = offsetY + top * drawHeight;
        const x2 = offsetX + right * drawWidth;
        const y2 = offsetY + bottom * drawHeight;
        const visibleWidth = Math.max(1, x2 - x1);
        const visibleHeight = Math.max(1, y2 - y1);
        const rules = framing.normalization;
        const targetArea = boxWidth * boxHeight * rules.targetAreaRatio;
        const areaScale = Math.sqrt(targetArea / (visibleWidth * visibleHeight));
        const scale = Math.min(
            areaScale,
            (boxWidth * rules.maxWidthRatio) / visibleWidth,
            (boxHeight * rules.maxHeightRatio) / visibleHeight
        );
        const translateX = boxWidth / 2 - scale * ((x1 + x2) / 2);
        const translateY = boxHeight * rules.baselineRatio - scale * y2;

        image.style.setProperty('--vehicle-x', `${translateX.toFixed(2)}px`);
        image.style.setProperty('--vehicle-y', `${translateY.toFixed(2)}px`);
        image.style.setProperty('--vehicle-scale', scale.toFixed(4));
        image.style.setProperty('--vehicle-scale-hover', (scale * 1.025).toFixed(4));
    };

    const updateVehicleFraming = () => {
        cancelAnimationFrame(framingFrame);
        framingFrame = requestAnimationFrame(() => {
            cards.forEach((card) => {
                const image = card.querySelector('.featured__img');
                if (image) applyVehicleFraming(image);
            });
        });
    };

    fetch('assets/data/inventory-framing.json')
        .then((response) => {
            if (!response.ok) throw new Error(`Framing metadata returned ${response.status}`);
            return response.json();
        })
        .then((payload) => {
            framing = payload;
            cards.forEach((card) => {
                const image = card.querySelector('.featured__img');
                if (image && !image.complete) image.addEventListener('load', updateVehicleFraming, { once: true });
            });
            updateVehicleFraming();
        })
        .catch((error) => console.warn('Vehicle framing fallback is active.', error));

    window.addEventListener('resize', updateVehicleFraming);

    fetch('assets/data/cars.json')
        .then((response) => response.json())
        .then((cars) => {
            cards.forEach((card) => {
                const car = cars[idOf(card)];
                if (!car) return;
                data.set(card, {
                    price: Number(String(car.price).replace(/[^0-9]/g, '')) || 0,
                    year: Number(car.year) || 0,
                    km: Number(car.km) || 0
                });
            });
            if (sort) sort.disabled = false;
        })
        .catch(() => {
            // Fara date nu putem sorta corect, deci ascundem comanda in loc sa
            // oferim o sortare care ar reordona gresit.
            if (sort) sort.closest('.stock-sort').hidden = true;
        });

    const applySort = () => {
        if (!grid || !sort) return;
        const mode = sort.value;
        if (mode === 'default') {
            originalOrder.forEach((card) => grid.append(card));
            return;
        }
        const [field, dir] = mode.split('-');
        const ordered = originalOrder.slice().sort((a, b) => {
            const va = data.get(a)?.[field] ?? 0;
            const vb = data.get(b)?.[field] ?? 0;
            return dir === 'asc' ? va - vb : vb - va;
        });
        ordered.forEach((card) => grid.append(card));
    };

    const normalize = (value) => value
        .toLocaleLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim();

    const updateInventory = () => {
        const query = normalize(search ? search.value : '');
        let visibleCount = 0;

        cards.forEach((card) => {
            const matchesBrand = activeSelector === 'all' || card.matches(activeSelector);
            const matchesSearch = !query || normalize(card.textContent).includes(query);
            const visible = matchesBrand && matchesSearch;
            card.hidden = !visible;
            if (visible) visibleCount += 1;
        });

        if (count) count.textContent = String(visibleCount);
        window.carzoneI18n?.updateInventoryCount();
        const empty = document.getElementById('inventory-empty');
        if (empty) empty.hidden = visibleCount !== 0;

        // Filtrarea poate scurta pagina cu cateva mii de pixeli, iar ScrollReveal
        // ramane cu pozitiile calculate inainte: footerul urca in ecran, dar el
        // il crede tot jos si nu-l mai afiseaza niciodata. Un resize il face sa
        // recalculeze. Fara asta, footerul ramane la opacity 0 chiar si dupa ce
        // derulezi pana la capat.
        window.dispatchEvent(new Event('resize'));
    };

    filters.forEach((button) => {
        button.setAttribute('aria-pressed', String(button.classList.contains('active-featured')));

        button.addEventListener('click', () => {
            activeSelector = button.dataset.filter;

            filters.forEach((filter) => {
                const active = filter === button;
                filter.classList.toggle('active-featured', active);
                filter.setAttribute('aria-pressed', String(active));
            });

            updateInventory();
        });
    });

    if (search) search.addEventListener('input', updateInventory);
    if (sort) {
        sort.disabled = true;
        sort.addEventListener('change', () => {
            applySort();
            // Reordonarea schimba inaltimea randurilor, deci ScrollReveal are
            // nevoie de acelasi impuls ca la filtrare.
            window.dispatchEvent(new Event('resize'));
        });
    }
    updateInventory();
});
