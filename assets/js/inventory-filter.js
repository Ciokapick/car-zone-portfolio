document.addEventListener('DOMContentLoaded', () => {
    const filters = Array.from(document.querySelectorAll('.featured__item[data-filter]'));
    const cards = Array.from(document.querySelectorAll('.featured__card'));
    const search = document.getElementById('inventory-search');
    const count = document.getElementById('inventory-count');

    if (!filters.length || !cards.length) return;

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
