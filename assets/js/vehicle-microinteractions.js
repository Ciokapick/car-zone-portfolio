(() => {
    'use strict';

    const grid = document.getElementById('inventory-grid');
    if (!grid) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const canAnimate = () => !motionQuery.matches && finePointerQuery.matches;
    const cards = () => Array.from(grid.querySelectorAll('.featured__card'));

    const carId = (card) => {
        const link = card.querySelector('a[href*="id="]');
        if (!link) return '';
        return new URL(link.getAttribute('href'), window.location.href).searchParams.get('id') || '';
    };

    const lang = () => document.documentElement.lang === 'ro' ? 'ro' : 'en';
    const labels = {
        en: { year: 'Year', power: 'Power', mileage: 'Mileage' },
        ro: { year: 'An', power: 'Putere', mileage: 'Kilometri' }
    };

    const formatMileage = (value) => {
        const locale = lang() === 'ro' ? 'ro-RO' : 'en-GB';
        return `${new Intl.NumberFormat(locale).format(Number(value) || 0)} km`;
    };

    const injectSpecs = (catalogue) => {
        cards().forEach((card) => {
            const price = card.querySelector('.featured__price');
            const car = catalogue[carId(card)];
            if (!price || !car) return;
            card.querySelector('.vehicle-micro-specs')?.remove();

            const dossierIcon = card.querySelector('.featured__button i');
            if (dossierIcon) dossierIcon.className = 'ri-arrow-right-up-line';

            const facts = [
                { label: labels[lang()].year, value: car.year },
                { label: labels[lang()].power, value: window.carzoneVehicleI18n.text(car.power, lang()) },
                {
                    label: labels[lang()].mileage,
                    value: car.km === undefined || car.km === null ? null : formatMileage(car.km)
                }
            ].filter((fact) => fact.value !== null && fact.value !== undefined && String(fact.value).trim());
            const reveal = document.createElement('dl');
            reveal.className = 'vehicle-micro-specs';

            facts.slice(0, 3).forEach((fact) => {
                const item = document.createElement('div');
                item.className = 'vehicle-micro-specs__item';
                const term = document.createElement('dt');
                const value = document.createElement('dd');
                term.textContent = fact.label;
                value.textContent = String(fact.value);
                item.append(term, value);
                reveal.append(item);
            });
            price.before(reveal);
        });
    };

    let activeCard = null;
    let activeRect = null;
    let pointerX = 0;
    let pointerY = 0;
    let frame = 0;

    const reset = (card) => {
        if (!card) return;
        card.classList.remove('is-micro-active');
        card.style.removeProperty('--micro-tilt-x');
        card.style.removeProperty('--micro-tilt-y');
        card.style.removeProperty('--micro-car-x');
        card.style.removeProperty('--micro-car-y');
        card.style.removeProperty('--micro-shine-x');
        card.style.removeProperty('--micro-shine-y');
        card.style.removeProperty('--micro-shine-opacity');
    };

    const paint = () => {
        frame = 0;
        if (!activeCard || !activeRect || !canAnimate()) return;

        const nx = Math.max(-1, Math.min(1, ((pointerX - activeRect.left) / activeRect.width) * 2 - 1));
        const ny = Math.max(-1, Math.min(1, ((pointerY - activeRect.top) / activeRect.height) * 2 - 1));

        activeCard.style.setProperty('--micro-tilt-x', `${(-ny * 1.1).toFixed(2)}deg`);
        activeCard.style.setProperty('--micro-tilt-y', `${(nx * 1.45).toFixed(2)}deg`);
        activeCard.style.setProperty('--micro-car-x', `${(nx * 3.2).toFixed(2)}px`);
        activeCard.style.setProperty('--micro-car-y', `${(ny * 1.4).toFixed(2)}px`);
        activeCard.style.setProperty('--micro-shine-x', `${((nx + 1) * 50).toFixed(1)}%`);
        activeCard.style.setProperty('--micro-shine-y', `${((ny + 1) * 50).toFixed(1)}%`);
        activeCard.style.setProperty('--micro-shine-opacity', '.32');
    };

    const schedulePaint = () => {
        if (!frame) frame = requestAnimationFrame(paint);
    };

    grid.addEventListener('pointermove', (event) => {
        if (!canAnimate()) return;
        const card = event.target.closest('.featured__card');
        if (!card || card.hidden) {
            reset(activeCard);
            activeCard = null;
            activeRect = null;
            return;
        }

        if (activeCard !== card) {
            reset(activeCard);
            activeCard = card;
            activeRect = card.getBoundingClientRect();
            card.classList.add('is-micro-active');
        }
        pointerX = event.clientX;
        pointerY = event.clientY;
        schedulePaint();
    }, { passive: true });

    grid.addEventListener('pointerleave', () => {
        if (frame) cancelAnimationFrame(frame);
        frame = 0;
        reset(activeCard);
        activeCard = null;
        activeRect = null;
    }, { passive: true });

    const resetInteraction = () => {
        if (frame) cancelAnimationFrame(frame);
        frame = 0;
        reset(activeCard);
        activeCard = null;
        activeRect = null;
    };

    motionQuery.addEventListener?.('change', resetInteraction);
    finePointerQuery.addEventListener?.('change', resetInteraction);
    window.addEventListener('resize', resetInteraction, { passive: true });
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) resetInteraction();
    });

    let catalogue = null;
    fetch('assets/data/cars.json', { cache: 'no-store' })
        .then((response) => {
            if (!response.ok) throw new Error(`Vehicle catalogue returned ${response.status}`);
            return response.json();
        })
        .then((payload) => {
            catalogue = payload;
            injectSpecs(catalogue);
            new MutationObserver(() => injectSpecs(catalogue))
                .observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
        })
        .catch((error) => console.warn('Vehicle spec reveal is unavailable.', error));

    document.documentElement.classList.add('vehicle-micro-ready');
})();
