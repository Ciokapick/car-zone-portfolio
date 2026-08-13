const {
    curatedInventory: inventoryVehicles,
    inventoryBrands: availableBrands
} = window.carzoneInventory;

const catalog = document.getElementById('inventory-catalog');
const filters = document.getElementById('inventory-filters');
const count = document.getElementById('inventory-count');
const dialog = document.getElementById('vehicle-dialog');

let activeBrand = 'all';

function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, (character) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[character]));
}

function vehicleLink(vehicle, label, className) {
    if (vehicle.detailUrl) {
        return `<a href="${escapeHtml(vehicle.detailUrl)}" class="${className}">${label}<i class="ri-arrow-right-line" aria-hidden="true"></i></a>`;
    }

    return `<button type="button" class="${className}" data-vehicle-summary="${escapeHtml(vehicle.id)}">${label}<i class="ri-arrow-right-line" aria-hidden="true"></i></button>`;
}

function specs(vehicle) {
    return `
        <ul class="vehicle-card__facts" aria-label="Key vehicle specifications">
            <li><span>Year</span><strong>${escapeHtml(vehicle.year)}</strong></li>
            <li><span>Mileage</span><strong>${escapeHtml(vehicle.mileage)}</strong></li>
            <li><span>Power</span><strong>${escapeHtml(vehicle.power)}</strong></li>
        </ul>`;
}

function flagshipCard(vehicle) {
    return `
        <article class="vehicle-card vehicle-card--flagship" data-brand="${escapeHtml(vehicle.brand)}">
            <div class="vehicle-card__visual">
                <span class="vehicle-card__badge"><i class="ri-star-line" aria-hidden="true"></i> Signature presentation</span>
                <img src="${escapeHtml(vehicle.image)}" alt="${escapeHtml(`${vehicle.make} ${vehicle.model}`)}">
                <span class="vehicle-card__index" aria-hidden="true">01</span>
            </div>
            <div class="vehicle-card__body">
                <p class="vehicle-card__make">${escapeHtml(vehicle.make)}</p>
                <h3>${escapeHtml(vehicle.model)}</h3>
                <p class="vehicle-card__description">${escapeHtml(vehicle.description)}</p>
                ${specs(vehicle)}
                <div class="vehicle-card__bottom">
                    <p><span>From</span><strong>${escapeHtml(vehicle.price)}</strong></p>
                    ${vehicleLink(vehicle, 'Open full experience', 'vehicle-card__action')}
                </div>
                <p class="vehicle-card__promise"><i class="ri-movie-2-line" aria-hidden="true"></i> Complete gallery · cinematic video · interactive 3D · full specifications</p>
            </div>
        </article>`;
}

function featuredCard(vehicle, index) {
    return `
        <article class="vehicle-card vehicle-card--featured" data-brand="${escapeHtml(vehicle.brand)}">
            <div class="vehicle-card__visual">
                <span class="vehicle-card__badge">Featured selection</span>
                <img src="${escapeHtml(vehicle.image)}" alt="${escapeHtml(`${vehicle.make} ${vehicle.model}`)}">
                <span class="vehicle-card__index" aria-hidden="true">0${index}</span>
            </div>
            <div class="vehicle-card__body">
                <p class="vehicle-card__make">${escapeHtml(vehicle.make)}</p>
                <h3>${escapeHtml(vehicle.model)}</h3>
                <p class="vehicle-card__description">${escapeHtml(vehicle.description)}</p>
                ${specs(vehicle)}
                <div class="vehicle-card__bottom">
                    <strong>${escapeHtml(vehicle.price)}</strong>
                    ${vehicleLink(vehicle, 'View summary', 'vehicle-card__action vehicle-card__action--compact')}
                </div>
            </div>
        </article>`;
}

function inventoryCard(vehicle, index) {
    return `
        <article class="vehicle-card vehicle-card--summary" data-brand="${escapeHtml(vehicle.brand)}">
            <div class="vehicle-card__visual">
                <img src="${escapeHtml(vehicle.image)}" alt="${escapeHtml(`${vehicle.make} ${vehicle.model}`)}">
                <span class="vehicle-card__index" aria-hidden="true">${String(index).padStart(2, '0')}</span>
            </div>
            <div class="vehicle-card__body">
                <p class="vehicle-card__make">${escapeHtml(vehicle.make)}</p>
                <h3>${escapeHtml(vehicle.model)}</h3>
                <div class="vehicle-card__meta"><span>${escapeHtml(vehicle.year)}</span><span>${escapeHtml(vehicle.power)}</span><span>${escapeHtml(vehicle.fuel)}</span></div>
                <div class="vehicle-card__bottom">
                    <strong>${escapeHtml(vehicle.price)}</strong>
                    ${vehicleLink(vehicle, '<span class="sr-only">View summary for </span>Summary', 'vehicle-card__text-action')}
                </div>
            </div>
        </article>`;
}

function renderFilters() {
    const representedBrands = new Set(inventoryVehicles.map((vehicle) => vehicle.brand));
    const brands = availableBrands.filter((brand) => representedBrands.has(brand.id));

    filters.innerHTML = `
        <button type="button" class="inventory-filter is-active" data-brand="all" aria-pressed="true">
            <span class="inventory-filter__all" aria-hidden="true">ALL</span>
            <span>All makes</span>
        </button>
        ${brands.map((brand) => `
            <button type="button" class="inventory-filter" data-brand="${escapeHtml(brand.id)}" aria-pressed="false">
                <img src="${escapeHtml(brand.logo)}" alt="" aria-hidden="true">
                <span>${escapeHtml(brand.label)}</span>
            </button>`).join('')}`;
}

function renderCatalog() {
    const visible = activeBrand === 'all'
        ? inventoryVehicles
        : inventoryVehicles.filter((vehicle) => vehicle.brand === activeBrand);
    const flagship = visible.find((vehicle) => vehicle.tier === 'flagship');
    const featured = visible.filter((vehicle) => vehicle.tier === 'featured');
    const summary = visible.filter((vehicle) => vehicle.tier === 'inventory');

    catalog.innerHTML = `
        ${flagship ? `<div class="inventory-block inventory-block--flagship">${flagshipCard(flagship)}</div>` : ''}
        ${featured.length ? `<div class="inventory-block inventory-block--featured">${featured.map((vehicle, index) => featuredCard(vehicle, index + 2)).join('')}</div>` : ''}
        ${summary.length ? `<div class="inventory-block inventory-block--summary">${summary.map((vehicle, index) => inventoryCard(vehicle, index + 5)).join('')}</div>` : ''}`;

    count.textContent = `${visible.length} ${visible.length === 1 ? 'vehicle' : 'vehicles'}`;
}

function openSummary(vehicle) {
    if (!dialog || !vehicle) return;

    document.getElementById('vehicle-dialog-image').src = vehicle.image;
    document.getElementById('vehicle-dialog-image').alt = `${vehicle.make} ${vehicle.model}`;
    document.getElementById('vehicle-dialog-make').textContent = vehicle.make;
    document.getElementById('vehicle-dialog-title').textContent = vehicle.model;
    document.getElementById('vehicle-dialog-description').textContent = vehicle.description;
    document.getElementById('vehicle-dialog-price').textContent = vehicle.price;
    document.getElementById('vehicle-dialog-contact').href = `contact.html?vehicle=${encodeURIComponent(vehicle.id)}`;
    document.getElementById('vehicle-dialog-specs').innerHTML = [
        ['Year', vehicle.year],
        ['Mileage', vehicle.mileage],
        ['Fuel', vehicle.fuel],
        ['Power', vehicle.power],
        ['Drivetrain', vehicle.drivetrain]
    ].map(([term, value]) => `<div><dt>${escapeHtml(term)}</dt><dd>${escapeHtml(value)}</dd></div>`).join('');

    dialog.showModal();
}

filters?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-brand]');
    if (!button) return;

    activeBrand = button.dataset.brand;
    filters.querySelectorAll('[data-brand]').forEach((filter) => {
        const active = filter === button;
        filter.classList.toggle('is-active', active);
        filter.setAttribute('aria-pressed', String(active));
    });
    renderCatalog();
});

catalog?.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-vehicle-summary]');
    if (!trigger) return;
    openSummary(inventoryVehicles.find((vehicle) => vehicle.id === trigger.dataset.vehicleSummary));
});

dialog?.addEventListener('click', (event) => {
    if (event.target === dialog || event.target.closest('[data-dialog-close]')) dialog.close();
});

renderFilters();
renderCatalog();
