document.addEventListener('DOMContentLoaded', () => {
    const filters = Array.from(document.querySelectorAll('.featured__item[data-filter]'));
    const cards = Array.from(document.querySelectorAll('.featured__card'));

    if (!filters.length || !cards.length) return;

    filters.forEach((button) => {
        button.setAttribute('aria-pressed', String(button.classList.contains('active-featured')));

        button.addEventListener('click', () => {
            const selector = button.dataset.filter;

            cards.forEach((card) => {
                card.hidden = selector !== 'all' && !card.matches(selector);
            });

            filters.forEach((filter) => {
                const active = filter === button;
                filter.classList.toggle('active-featured', active);
                filter.setAttribute('aria-pressed', String(active));
            });
        });
    });
});
