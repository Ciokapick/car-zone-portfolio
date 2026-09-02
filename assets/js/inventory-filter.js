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
