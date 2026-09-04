/**
 * CarZone Showroom Mode
 *
 * Progressive enhancement for media-rich dossiers. The module intentionally
 * reads the gallery that car-dossier.js has already rendered; inventory data
 * remains owned by cars.json and is never duplicated here.
 */
(() => {
    'use strict';

    const MIN_SIGNATURE_FRAMES = 8;
    const focusableSelector = [
        'button:not([disabled])',
        '[href]',
        'video[controls]',
        '[tabindex]:not([tabindex="-1"])'
    ].join(',');

    const copy = {
        en: {
            open: 'Enter showroom', close: 'Close showroom', title: 'Private showroom',
            all: 'All', exterior: 'Exterior', interior: 'Interior', film: 'Film',
            day: 'Day', night: 'Night', previous: 'Previous frame', next: 'Next frame',
            frames: 'frames', hint: 'Use arrow keys or swipe to explore',
            imageAlt: 'showroom frame', fullscreen: 'Fullscreen', views: 'Showroom views', rail: 'Showroom frames'
        },
        ro: {
            open: 'Intră în showroom', close: 'Închide showroom-ul', title: 'Showroom privat',
            all: 'Toate', exterior: 'Exterior', interior: 'Interior', film: 'Film',
            day: 'Zi', night: 'Noapte', previous: 'Cadrul anterior', next: 'Cadrul următor',
            frames: 'cadre', hint: 'Folosește săgețile sau glisează pentru a explora',
            imageAlt: 'cadru de showroom', fullscreen: 'Ecran complet', views: 'Vederi ale automobilului', rail: 'Cadre din showroom'
        }
    };

    const state = {
        media: [], filtered: [], index: 0, filter: 'all', light: 'day',
        dialog: null, opener: null, trigger: null, touchX: null, initialized: false,
        closeTimer: null, pageNodes: []
    };

    const lang = () => document.documentElement.lang === 'ro' ? 'ro' : 'en';
    const t = (key) => copy[lang()][key] || copy.en[key] || key;

    function classify(src, index, total) {
        const path = String(src || '').toLowerCase();
        const interiorWords = /interior|cabin|cockpit|dashboard|dash|seat|steering|console/;
        const exteriorWords = /exterior|front|rear|side|detail|wheel/;
        if (interiorWords.test(path)) return 'interior';
        if (exteriorWords.test(path)) return 'exterior';

        // The current Signature archive uses s/1..14: frames 01–03 and 14 are
        // exterior; 04–13 are the original cabin record. This is presentation
        // metadata only—the media paths themselves still come from the DOM.
        const sFrame = path.match(/\/s\/(\d+)\.jpe?g(?:$|\?)/);
        if (sFrame) {
            const frame = Number(sFrame[1]);
            return frame <= 3 || frame === 14 ? 'exterior' : 'interior';
        }

        // Unknown future sets stay discoverable under "All" without pretending
        // we know what their photographs depict.
        return 'all';
    }

    function collectMedia() {
        const thumbs = Array.from(document.querySelectorAll('#gallery-rail .dossier-thumb'));
        const items = thumbs.map((thumb, index) => {
            const img = thumb.querySelector('img');
            const src = img?.getAttribute('src') || img?.src || '';
            return {
                type: thumb.classList.contains('dossier-thumb--video') ? 'video' : 'image',
                src,
                poster: src,
                category: 'all',
                sourceIndex: index
            };
        }).filter((item) => item.src);

        const videoIndex = items.findIndex((item) => item.type === 'video');
        if (videoIndex >= 0) {
            const video = document.querySelector('#gallery-track video, #hero-video[src]');
            const source = video?.getAttribute('src') || video?.src;
            if (source) items[videoIndex].src = source;
        }

        const imageTotal = items.filter((item) => item.type === 'image').length;
        let imageIndex = 0;
        items.forEach((item) => {
            if (item.type === 'video') item.category = 'film';
            else {
                item.category = classify(item.src, imageIndex, imageTotal);
                imageIndex += 1;
            }
        });
        return items;
    }

    function eligible() {
        const media = collectMedia();
        return document.body.classList.contains('is-signature') &&
            media.filter((item) => item.type === 'image').length >= MIN_SIGNATURE_FRAMES;
    }

    function icon(name) {
        const icons = {
            expand: '<path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/>',
            close: '<path d="m5 5 14 14M19 5 5 19"/>',
            left: '<path d="m15 18-6-6 6-6"/>',
            right: '<path d="m9 18 6-6-6-6"/>',
            sun: '<circle cx="12" cy="12" r="3.25"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"/>',
            moon: '<path d="M20 15.1A8.3 8.3 0 0 1 8.9 4a8.3 8.3 0 1 0 11.1 11.1Z"/>'
        };
        return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name]}</svg>`;
    }

    function button(className, label, html) {
        const node = document.createElement('button');
        node.type = 'button';
        node.className = className;
        node.setAttribute('aria-label', label);
        node.innerHTML = html;
        return node;
    }

    function buildDialog() {
        const dialog = document.createElement('div');
        dialog.className = 'cz-showroom';
        dialog.hidden = true;
        dialog.setAttribute('role', 'dialog');
        dialog.setAttribute('aria-modal', 'true');
        dialog.setAttribute('aria-labelledby', 'cz-showroom-title');
        dialog.innerHTML = `
            <div class="cz-showroom__chrome">
                <header class="cz-showroom__header">
                    <div>
                        <span class="cz-showroom__eyebrow">CARZONE SIGNATURE</span>
                        <h2 id="cz-showroom-title"></h2>
                    </div>
                    <div class="cz-showroom__header-actions">
                        <div class="cz-showroom__light" role="group"></div>
                        <button class="cz-showroom__close" type="button"></button>
                    </div>
                </header>
                <div class="cz-showroom__filters" role="tablist" aria-label="Showroom views"></div>
                <div class="cz-showroom__viewport">
                    <div class="cz-showroom__ambient" aria-hidden="true"></div>
                    <img class="cz-showroom__image" alt="">
                    <video class="cz-showroom__video" controls playsinline preload="metadata" hidden></video>
                    <div class="cz-showroom__headlights" aria-hidden="true"></div>
                    <button class="cz-showroom__nav cz-showroom__nav--prev" type="button"></button>
                    <button class="cz-showroom__nav cz-showroom__nav--next" type="button"></button>
                    <div class="cz-showroom__counter" aria-live="polite"></div>
                </div>
                <footer class="cz-showroom__footer">
                    <p class="cz-showroom__hint"></p>
                    <div class="cz-showroom__rail" aria-label="Showroom frames"></div>
                </footer>
            </div>`;
        document.body.append(dialog);

        dialog.querySelector('#cz-showroom-title').textContent = t('title');
        const close = dialog.querySelector('.cz-showroom__close');
        close.innerHTML = `${icon('close')}<span>${t('close')}</span>`;
        close.setAttribute('aria-label', t('close'));
        const prev = dialog.querySelector('.cz-showroom__nav--prev');
        const next = dialog.querySelector('.cz-showroom__nav--next');
        prev.innerHTML = icon('left'); prev.setAttribute('aria-label', t('previous'));
        next.innerHTML = icon('right'); next.setAttribute('aria-label', t('next'));
        dialog.querySelector('.cz-showroom__hint').textContent = t('hint');

        close.addEventListener('click', closeShowroom);
        prev.addEventListener('click', () => step(-1));
        next.addEventListener('click', () => step(1));
        const viewport = dialog.querySelector('.cz-showroom__viewport');
        viewport.addEventListener('pointerdown', (event) => { state.touchX = event.clientX; });
        viewport.addEventListener('pointerup', (event) => {
            if (state.touchX === null) return;
            const distance = event.clientX - state.touchX;
            state.touchX = null;
            if (Math.abs(distance) > 48) step(distance > 0 ? -1 : 1);
        });
        dialog.addEventListener('click', (event) => {
            if (event.target === dialog) closeShowroom();
        });
        state.dialog = dialog;
        renderLightControls();
        return dialog;
    }

    function renderLightControls() {
        const root = state.dialog.querySelector('.cz-showroom__light');
        root.replaceChildren();
        ['day', 'night'].forEach((mode) => {
            const control = button(
                `cz-showroom__light-btn${state.light === mode ? ' is-active' : ''}`,
                t(mode), `${icon(mode === 'day' ? 'sun' : 'moon')}<span>${t(mode)}</span>`
            );
            control.setAttribute('aria-pressed', String(state.light === mode));
            control.addEventListener('click', () => {
                state.light = mode;
                state.dialog.dataset.light = mode;
                renderLightControls();
            });
            root.append(control);
        });
    }

    function categoriesFor(media) {
        const categories = ['all'];
        ['exterior', 'interior', 'film'].forEach((category) => {
            if (media.some((item) => item.category === category)) categories.push(category);
        });
        return categories;
    }

    function renderFilters() {
        const root = state.dialog.querySelector('.cz-showroom__filters');
        root.replaceChildren();
        categoriesFor(state.media).forEach((category) => {
            const count = category === 'all' ? state.media.length : state.media.filter((item) => item.category === category).length;
            const control = button(
                `cz-showroom__filter${state.filter === category ? ' is-active' : ''}`,
                t(category), `<span>${t(category)}</span><b>${String(count).padStart(2, '0')}</b>`
            );
            control.setAttribute('role', 'tab');
            control.setAttribute('aria-selected', String(state.filter === category));
            control.addEventListener('click', () => setFilter(category));
            root.append(control);
        });
    }

    function setFilter(filter) {
        state.filter = filter;
        state.filtered = filter === 'all' ? [...state.media] : state.media.filter((item) => item.category === filter);
        state.index = 0;
        renderFilters();
        renderRail();
        renderFrame();
    }

    function renderRail() {
        const rail = state.dialog.querySelector('.cz-showroom__rail');
        rail.replaceChildren(...state.filtered.map((item, index) => {
            const thumb = button(`cz-showroom__thumb${index === state.index ? ' is-active' : ''}`, `${t('imageAlt')} ${index + 1}`, '');
            const image = document.createElement('img');
            image.src = item.poster || item.src;
            image.alt = '';
            image.loading = 'lazy';
            thumb.append(image);
            if (item.type === 'video') {
                const tag = document.createElement('span'); tag.textContent = t('film'); thumb.append(tag);
            }
            thumb.addEventListener('click', () => { state.index = index; renderRail(); renderFrame(); });
            return thumb;
        }));
    }

    function renderFrame() {
        const item = state.filtered[state.index];
        if (!item) return;
        const image = state.dialog.querySelector('.cz-showroom__image');
        const video = state.dialog.querySelector('.cz-showroom__video');
        video.pause();
        image.hidden = item.type !== 'image';
        video.hidden = item.type !== 'video';
        if (item.type === 'video') {
            if (video.getAttribute('src') !== item.src) video.src = item.src;
            video.poster = item.poster || '';
        } else {
            image.classList.remove('is-entering');
            image.src = item.src;
            image.alt = `${document.querySelector('#hero-title')?.textContent?.trim() || 'CarZone'} — ${t('imageAlt')} ${item.sourceIndex + 1}`;
            requestAnimationFrame(() => image.classList.add('is-entering'));
        }
        const front = item.category === 'exterior' && (item.sourceIndex === 0 || item.sourceIndex === 13);
        state.dialog.classList.toggle('is-front-frame', front);
        state.dialog.querySelector('.cz-showroom__counter').innerHTML =
            `<strong>${String(state.index + 1).padStart(2, '0')}</strong><span>/ ${String(state.filtered.length).padStart(2, '0')}</span>`;
        state.dialog.querySelectorAll('.cz-showroom__thumb').forEach((thumb, index) => thumb.classList.toggle('is-active', index === state.index));
        state.dialog.querySelector('.cz-showroom__thumb.is-active')?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    }

    function step(delta) {
        if (!state.filtered.length) return;
        state.index = (state.index + delta + state.filtered.length) % state.filtered.length;
        renderRail();
        renderFrame();
    }

    function openShowroom() {
        state.media = collectMedia();
        if (!state.media.length) return;
        state.filtered = [...state.media];
        state.index = 0;
        state.filter = 'all';
        state.opener = document.activeElement;
        const dialog = state.dialog || buildDialog();
        window.clearTimeout(state.closeTimer);
        dialog.dataset.light = state.light;
        dialog.hidden = false;
        state.pageNodes = Array.from(document.body.children).filter((node) => node !== dialog && node.tagName !== 'SCRIPT').map((node) => ({
            node,
            ariaHidden: node.getAttribute('aria-hidden'),
            inert: node.inert
        }));
        state.pageNodes.forEach(({ node }) => {
            node.setAttribute('aria-hidden', 'true');
            node.inert = true;
        });
        document.body.classList.add('cz-showroom-open');
        renderFilters();
        renderRail();
        renderFrame();
        requestAnimationFrame(() => {
            dialog.classList.add('is-open');
            dialog.querySelector('.cz-showroom__close').focus();
        });
    }

    function closeShowroom() {
        if (!state.dialog || state.dialog.hidden) return;
        state.dialog.classList.remove('is-open');
        state.dialog.querySelector('video')?.pause();
        document.body.classList.remove('cz-showroom-open');
        state.pageNodes.forEach(({ node, ariaHidden, inert }) => {
            if (ariaHidden === null) node.removeAttribute('aria-hidden');
            else node.setAttribute('aria-hidden', ariaHidden);
            node.inert = inert;
        });
        state.pageNodes = [];
        state.closeTimer = window.setTimeout(() => { if (state.dialog) state.dialog.hidden = true; }, 260);
        state.opener?.focus?.();
    }

    function handleKeyboard(event) {
        if (!state.dialog || state.dialog.hidden) return;
        if (event.key === 'Escape') { event.preventDefault(); closeShowroom(); return; }
        if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1); return; }
        if (event.key === 'ArrowRight') { event.preventDefault(); step(1); return; }
        if (event.key === 'Home') { event.preventDefault(); state.index = 0; renderRail(); renderFrame(); return; }
        if (event.key === 'End') { event.preventDefault(); state.index = state.filtered.length - 1; renderRail(); renderFrame(); return; }
        if (event.key !== 'Tab') return;
        const focusable = Array.from(state.dialog.querySelectorAll(focusableSelector)).filter((node) => !node.hidden && node.offsetParent !== null);
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }

    function refreshLanguage() {
        if (!state.dialog) return;
        state.dialog.querySelector('.cz-showroom__filters').setAttribute('aria-label', t('views'));
        state.dialog.querySelector('.cz-showroom__rail').setAttribute('aria-label', t('rail'));
        state.dialog.querySelector('#cz-showroom-title').textContent = t('title');
        const close = state.dialog.querySelector('.cz-showroom__close');
        close.querySelector('span').textContent = t('close');
        close.setAttribute('aria-label', t('close'));
        state.dialog.querySelector('.cz-showroom__nav--prev').setAttribute('aria-label', t('previous'));
        state.dialog.querySelector('.cz-showroom__nav--next').setAttribute('aria-label', t('next'));
        state.dialog.querySelector('.cz-showroom__hint').textContent = t('hint');
        if (state.trigger) {
            state.trigger.querySelector('span').textContent = t('open');
            state.trigger.querySelector('b').textContent = t('fullscreen');
            state.trigger.setAttribute('aria-label', t('open'));
        }
        renderLightControls();
        renderFilters();
        renderRail();
    }

    function mount() {
        if (state.initialized || !eligible()) return;
        const heading = document.querySelector('.dossier-gallery .dossier-section-heading');
        if (!heading) return;
        const open = button('cz-showroom-trigger', t('open'), `${icon('expand')}<span>${t('open')}</span><b>${t('fullscreen')}</b>`);
        open.addEventListener('click', openShowroom);
        heading.append(open);
        state.trigger = open;
        buildDialog();
        refreshLanguage();
        document.addEventListener('keydown', handleKeyboard);
        document.querySelectorAll('[data-dossier-lang]').forEach((control) => control.addEventListener('click', () => requestAnimationFrame(refreshLanguage)));
        state.initialized = true;
    }

    const observer = new MutationObserver(mount);
    observer.observe(document.documentElement, { attributes: true, childList: true, subtree: true, attributeFilter: ['class', 'hidden'] });
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, { once: true });
    else mount();
})();
