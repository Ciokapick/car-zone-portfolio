document.addEventListener('DOMContentLoaded', async () => {
    const grid = document.querySelector('#concept-grid');
    const filters = document.querySelector('#concept-filters');
    const count = document.querySelector('#concept-count');

    if (!grid || !filters || !count) return;

    const brands = [
        ['all', 'All makes', 'assets/img/all.webp'],
        ['Tesla', 'Tesla', 'assets/img/brands/tesla.webp'],
        ['Audi', 'Audi', 'assets/img/brands/audi.webp'],
        ['Porsche', 'Porsche', 'assets/img/brands/porsche.webp'],
        ['Chevrolet', 'Corvette', 'assets/img/brands/corvette.webp'],
        ['Alfa Romeo', 'Alfa Romeo', 'assets/img/brands/alfa-romeo.webp'],
        ['Genesis', 'Genesis', 'assets/img/brands/genesis.webp'],
        ['Lexus', 'Lexus', 'assets/img/brands/lexus.webp'],
        ['Lotus', 'Lotus', 'assets/img/brands/lotus.webp'],
        ['Koenigsegg', 'Koenigsegg', 'assets/img/brands/koenigsegg.webp'],
        ['Mercedes-Benz', 'Mercedes-Benz', 'assets/img/brands/mercedes.webp'],
        ['BMW', 'BMW', 'assets/img/brands/bmw.webp']
    ];

    const fallbackImages = {
        'porsche-911-turbo-s': 'assets/img/popular1.webp',
        'mercedes-c43-amg': 'assets/img/mercedes-c63-w206.webp'
    };

    try {
        const response = await fetch('assets/data/cars.json');
        if (!response.ok) throw new Error(`Inventory request failed: ${response.status}`);

        const inventory = Object.values(await response.json());

        filters.innerHTML = brands.map(([value, label, image], index) => `
            <button
                type="button"
                class="concept-filter${index === 0 ? ' is-active' : ''}"
                data-brand="${value}"
                aria-label="Show ${label} vehicles"
                aria-pressed="${index === 0 ? 'true' : 'false'}">
                <img src="${image}" alt="">
            </button>
        `).join('');

        grid.innerHTML = inventory.map((car) => {
            const image = car.image || fallbackImages[car.id];
            const detailUrl = car.id === 'mercedes-s580' ? 's580.html' : `car-detail.html?id=${car.id}`;
            const distance = Number(car.km).toLocaleString('en-US');

            return `
                <article class="concept-card" data-brand="${car.make}">
                    <div class="concept-card__copy">
                        <p class="concept-card__make">${car.make}</p>
                        <h3>${car.model}</h3>
                        <p class="concept-card__meta">${car.year} · ${distance} km · ${car.power}</p>
                    </div>
                    <a href="${detailUrl}" class="concept-card__media" aria-label="View ${car.make} ${car.model}">
                        <img src="${image}" alt="${car.make} ${car.model}" loading="lazy">
                    </a>
                    <div class="concept-card__footer">
                        <strong>${car.price}</strong>
                        <a href="${detailUrl}" class="concept-card__action" aria-label="View ${car.make} ${car.model}">
                            <i class="ri-shopping-bag-2-line" aria-hidden="true"></i>
                        </a>
                    </div>
                </article>
            `;
        }).join('');

        const filterButtons = Array.from(filters.querySelectorAll('.concept-filter'));
        const cards = Array.from(grid.querySelectorAll('.concept-card'));

        const updateCount = (visible, brand = 'all') => {
            const label = brand === 'all' ? 'complete collection' : brand;
            count.textContent = `${visible} ${visible === 1 ? 'vehicle' : 'vehicles'} · ${label}`;
        };

        updateCount(cards.length);

        filterButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const selectedBrand = button.dataset.brand;
                let visible = 0;

                cards.forEach((card) => {
                    const show = selectedBrand === 'all' || card.dataset.brand === selectedBrand;
                    card.hidden = !show;
                    if (show) visible += 1;
                });

                filterButtons.forEach((filter) => {
                    const active = filter === button;
                    filter.classList.toggle('is-active', active);
                    filter.setAttribute('aria-pressed', String(active));
                });

                updateCount(visible, selectedBrand);
            });
        });
    } catch (error) {
        count.textContent = 'Inventory unavailable';
        grid.innerHTML = '<p class="collection-error">The concept could not load the local inventory data.</p>';
        console.error(error);
    }
});
