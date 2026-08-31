document.addEventListener('DOMContentLoaded', () => {
    const filters = Array.from(document.querySelectorAll('.featured__item[data-filter]'));
    const cards = Array.from(document.querySelectorAll('.featured__card'));
    const search = document.getElementById('inventory-search');
    const count = document.getElementById('inventory-count');

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
    updateInventory();
});
