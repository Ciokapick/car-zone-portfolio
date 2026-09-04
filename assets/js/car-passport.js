const passportCopy = {
    en: {
        eyebrow: 'Provenance / CarZone dossier',
        title: 'The car, before the promise.',
        intro: 'A concise reading of what is published today, what belongs in the file and what should be confirmed with the car in front of you.',
        source: 'Reference',
        sourceValue: 'Internal vehicle record',
        declared: 'Listed detail',
        request: 'Documents on request',
        beforeDecision: 'Inspection pending',
        identity: 'Identity',
        identityNote: 'The coordinates of this exact example, as published in the listing.',
        record: 'Document trail',
        recordNote: 'The paperwork that turns a description into provenance.',
        inspection: 'Physical review',
        inspectionNote: 'The checks best completed with the car, not the screen.',
        vin: 'VIN',
        firstRegistration: 'First registration',
        mileage: 'Mileage',
        colour: 'Colour',
        warranty: 'Listed warranty',
        serviceHistory: 'Service history',
        previousOwners: 'Previous owners',
        accidentPaint: 'Accident & paint record',
        ownershipDocs: 'Ownership documents',
        bodyPaint: 'Body & paint inspection',
        mechanical: 'Mechanical & electrical check',
        diagnostics: 'Diagnostics & road test',
        documentMatch: 'VIN and document match',
        notInDemo: 'Not included in demo',
        requestProof: 'Ask for supporting proof',
        notInspected: 'No inspection recorded',
        journey: 'Private purchase process',
        journeyTitle: 'From listing to handover.',
        stepOne: 'Read the declared data',
        stepOneCopy: 'Use the listing as a starting point, not as a completed verification report.',
        stepTwo: 'Request the evidence',
        stepTwoCopy: 'Service, ownership and damage records are reviewed only when supplied for the enquiry.',
        stepThree: 'Inspect before purchase',
        stepThreeCopy: 'Match the VIN and documents, inspect the vehicle and confirm commercial terms in writing.',
        disclosure: 'Portfolio disclosure',
        disclosureCopy: 'This is a demonstration interface. Status labels describe the source of the information, not a guarantee of vehicle history or condition.',
        requestFile: 'Request the vehicle file',
        unavailable: 'Not provided'
    },
    ro: {
        eyebrow: 'Proveniență / dosar CarZone',
        title: 'Mașina, înaintea promisiunii.',
        intro: 'O lectură clară a ceea ce este publicat acum, a documentelor care aparțin dosarului și a lucrurilor care se confirmă cu mașina în față.',
        source: 'Referință',
        sourceValue: 'Fișa internă a exemplarului',
        declared: 'Detaliu publicat',
        request: 'Documente la cerere',
        beforeDecision: 'Inspecție necesară',
        identity: 'Identitate',
        identityNote: 'Coordonatele exacte ale exemplarului, așa cum apar în anunț.',
        record: 'Traseu documentar',
        recordNote: 'Actele care transformă o descriere într-o proveniență verificabilă.',
        inspection: 'Verificare fizică',
        inspectionNote: 'Lucrurile care se evaluează cel mai bine lângă mașină, nu pe ecran.',
        vin: 'Serie VIN',
        firstRegistration: 'Prima înmatriculare',
        mileage: 'Kilometraj',
        colour: 'Culoare',
        warranty: 'Garanție declarată',
        serviceHistory: 'Istoric de service',
        previousOwners: 'Proprietari anteriori',
        accidentPaint: 'Daune și elemente revopsite',
        ownershipDocs: 'Documente de proprietate',
        bodyPaint: 'Inspecție caroserie și vopsea',
        mechanical: 'Verificare mecanică și electrică',
        diagnostics: 'Diagnoză și test rutier',
        documentMatch: 'Corespondență VIN și documente',
        notInDemo: 'Nu există în demo',
        requestProof: 'Solicită documentele justificative',
        notInspected: 'Nicio inspecție înregistrată',
        journey: 'Proces de achiziție privată',
        journeyTitle: 'Din anunț, până la predare.',
        stepOne: 'Citește datele declarate',
        stepOneCopy: 'Folosește anunțul ca punct de plecare, nu ca raport de verificare finalizat.',
        stepTwo: 'Solicită dovezile',
        stepTwoCopy: 'Istoricul de service, proprietate și daune se verifică doar când documentele sunt furnizate pentru solicitare.',
        stepThree: 'Inspectează înainte de cumpărare',
        stepThreeCopy: 'Compară VIN-ul și actele, inspectează mașina și confirmă în scris condițiile comerciale.',
        disclosure: 'Mențiune portofoliu',
        disclosureCopy: 'Aceasta este o interfață demonstrativă. Etichetele indică sursa informației, nu garantează istoricul sau starea automobilului.',
        requestFile: 'Solicită dosarul mașinii',
        unavailable: 'Nefurnizat'
    }
};

const el = (tag, className = '', text = '') => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
};

const language = () => {
    try {
        return document.documentElement.lang === 'ro' ? 'ro' : 'en';
    } catch {
        return document.documentElement.lang === 'ro' ? 'ro' : 'en';
    }
};

const valueOrFallback = (value, copy) => {
    if (value === undefined || value === null || String(value).trim() === '') return copy.unavailable;
    return String(value);
};

const localizeWarranty = (value) => {
    return window.carzoneVehicleI18n.text(value, language());
};

function status(kind, text) {
    const badge = el('span', `car-passport__status car-passport__status--${kind}`);
    badge.append(el('span', 'car-passport__status-dot'), document.createTextNode(text));
    return badge;
}

function declaredRow(label, value, copy) {
    const row = el('div', 'car-passport__data-row');
    const terms = el('div');
    terms.append(el('dt', '', label), el('dd', '', valueOrFallback(value, copy)));
    row.append(terms, status('declared', copy.declared));
    return row;
}

function requestRow(label, detail, copy, kind = 'request') {
    const row = el('li', 'car-passport__request-row');
    const marker = el('span', 'car-passport__request-marker');
    marker.setAttribute('aria-hidden', 'true');
    const body = el('span', 'car-passport__request-body');
    body.append(el('strong', '', label), el('small', '', detail));
    row.append(marker, body, status(kind, kind === 'request' ? copy.request : copy.beforeDecision));
    return row;
}

function cardHeading(number, title, badge) {
    const head = el('header', 'car-passport__card-head');
    const label = el('div', 'car-passport__card-title');
    label.append(el('span', 'car-passport__number', number), el('h3', '', title));
    head.append(label, badge);
    return head;
}

function identityCard(car, copy) {
    const basic = car.specs?.basic || {};
    const technical = car.specs?.technical || {};
    const card = el('article', 'car-passport__card car-passport__card--identity');
    card.append(cardHeading('01', copy.identity, status('declared', copy.declared)), el('p', 'car-passport__card-note', copy.identityNote));
    const list = el('dl', 'car-passport__data');
    list.append(
        declaredRow(copy.vin, basic.VIN, copy),
        declaredRow(copy.firstRegistration, basic['First registration'] || car.year, copy),
        declaredRow(copy.mileage, `${new Intl.NumberFormat(language() === 'ro' ? 'ro-RO' : 'en-GB').format(Number(car.km) || 0)} km`, copy),
        declaredRow(copy.warranty, localizeWarranty(technical.Warranty), copy)
    );
    card.append(list);
    return card;
}

function recordCard(copy) {
    const card = el('article', 'car-passport__card');
    card.append(cardHeading('02', copy.record, status('request', copy.request)), el('p', 'car-passport__card-note', copy.recordNote));
    const list = el('ul', 'car-passport__request-list');
    list.append(
        requestRow(copy.serviceHistory, copy.notInDemo, copy),
        requestRow(copy.previousOwners, copy.notInDemo, copy),
        requestRow(copy.accidentPaint, copy.notInDemo, copy),
        requestRow(copy.ownershipDocs, copy.requestProof, copy)
    );
    card.append(list);
    return card;
}

function inspectionCard(copy) {
    const card = el('article', 'car-passport__card');
    card.append(cardHeading('03', copy.inspection, status('before', copy.beforeDecision)), el('p', 'car-passport__card-note', copy.inspectionNote));
    const list = el('ul', 'car-passport__request-list');
    list.append(
        requestRow(copy.bodyPaint, copy.notInspected, copy, 'before'),
        requestRow(copy.mechanical, copy.notInspected, copy, 'before'),
        requestRow(copy.diagnostics, copy.notInspected, copy, 'before'),
        requestRow(copy.documentMatch, copy.notInspected, copy, 'before')
    );
    card.append(list);
    return card;
}

function chapterDeck(car, copy) {
    const wrap = el('div', 'car-passport__cards');
    const index = el('div', 'car-passport__chapter-index');
    index.setAttribute('role', 'tablist');
    index.setAttribute('aria-label', copy.eyebrow);
    const panels = el('div', 'car-passport__chapter-panels');
    const chapters = [
        ['01', copy.identity, copy.declared, 'declared', identityCard(car, copy)],
        ['02', copy.record, copy.request, 'request', recordCard(copy)],
        ['03', copy.inspection, copy.beforeDecision, 'before', inspectionCard(copy)]
    ];

    const activate = (activeIndex, focus = false) => {
        const tabs = [...index.querySelectorAll('.car-passport__chapter-tab')];
        const chapterPanels = [...panels.querySelectorAll('.car-passport__card')];
        tabs.forEach((tab, tabIndex) => {
            const isActive = tabIndex === activeIndex;
            tab.classList.toggle('is-active', isActive);
            tab.setAttribute('aria-selected', String(isActive));
            tab.tabIndex = isActive ? 0 : -1;
        });
        chapterPanels.forEach((panel, panelIndex) => {
            const isActive = panelIndex === activeIndex;
            panel.hidden = !isActive;
            panel.classList.toggle('is-active', isActive);
        });
        if (focus) tabs[activeIndex]?.focus();
    };

    chapters.forEach(([number, title, stateLabel, stateKind, panel], chapterIndex) => {
        const tab = el('button', 'car-passport__chapter-tab');
        const tabId = `car-passport-tab-${number}`;
        const panelId = `car-passport-panel-${number}`;
        tab.type = 'button';
        tab.id = tabId;
        tab.setAttribute('role', 'tab');
        tab.setAttribute('aria-controls', panelId);
        tab.append(
            el('span', 'car-passport__chapter-number', number),
            el('span', 'car-passport__chapter-title', title),
            el('span', `car-passport__chapter-label car-passport__chapter-label--${stateKind}`, stateLabel)
        );
        tab.addEventListener('click', () => activate(chapterIndex));
        tab.addEventListener('mouseenter', () => {
            if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) activate(chapterIndex);
        });
        tab.addEventListener('keydown', (event) => {
            if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
            event.preventDefault();
            let next = chapterIndex;
            if (event.key === 'ArrowLeft') next = (chapterIndex + chapters.length - 1) % chapters.length;
            if (event.key === 'ArrowRight') next = (chapterIndex + 1) % chapters.length;
            if (event.key === 'Home') next = 0;
            if (event.key === 'End') next = chapters.length - 1;
            activate(next, true);
        });

        panel.id = panelId;
        panel.dataset.chapter = number;
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-labelledby', tabId);
        panel.tabIndex = 0;
        index.append(tab);
        panels.append(panel);
    });

    wrap.append(index, panels);
    activate(0);
    return wrap;
}

function timeline(copy) {
    const wrap = el('div', 'car-passport__journey');
    wrap.id = 'car-passport-process';
    const head = el('header', 'car-passport__journey-head');
    head.append(el('p', 'eyebrow', copy.journey), el('h3', '', copy.journeyTitle));
    const list = el('ol', 'car-passport__timeline');
    [
        ['01', copy.stepOne, copy.stepOneCopy, 'declared', copy.declared],
        ['02', copy.stepTwo, copy.stepTwoCopy, 'request', copy.request],
        ['03', copy.stepThree, copy.stepThreeCopy, 'before', copy.beforeDecision]
    ].forEach(([number, title, body, kind, label]) => {
        const item = el('li', 'car-passport__step');
        item.append(el('span', 'car-passport__step-number', number));
        const text = el('div');
        text.append(el('h4', '', title), el('p', '', body), status(kind, label));
        item.append(text);
        list.append(item);
    });
    wrap.append(head, list);
    return wrap;
}

function renderPassport(car) {
    const lang = language();
    const copy = passportCopy[lang];
    const old = document.querySelector('.car-passport');
    const section = el('section', 'car-passport container reveal-block');
    section.id = 'car-passport';
    section.setAttribute('aria-labelledby', 'car-passport-heading');

    const header = el('header', 'car-passport__header');
    const heading = el('div');
    heading.append(el('p', 'eyebrow', copy.eyebrow));
    const title = el('h2', '', copy.title);
    title.id = 'car-passport-heading';
    heading.append(title);
    const intro = el('div', 'car-passport__intro');
    intro.append(el('p', '', copy.intro));
    const source = el('p', 'car-passport__source');
    source.append(el('span', '', copy.source), document.createTextNode(copy.sourceValue));
    intro.append(source);
    header.append(heading, intro);

    const cards = chapterDeck(car, copy);

    const footer = el('footer', 'car-passport__footer');
    const disclosure = el('div', 'car-passport__disclosure');
    disclosure.append(el('span', 'car-passport__disclosure-mark', 'i'));
    const disclosureText = el('p');
    disclosureText.append(el('strong', '', copy.disclosure), document.createTextNode(copy.disclosureCopy));
    disclosure.append(disclosureText);
    const requestLink = el('a', 'car-passport__cta', copy.requestFile);
    requestLink.href = `contact.html?vehicle=${encodeURIComponent(car.id)}`;
    requestLink.append(el('span', 'car-passport__cta-arrow', '↗'));
    footer.append(disclosure, requestLink);

    section.append(header, cards, timeline(copy), footer);
    if (old) old.replaceWith(section);
    else (document.querySelector('.dossier-trust') || document.querySelector('.dossier-intro'))?.after(section);

    requestAnimationFrame(() => {
        section.classList.add('is-visible');
        if (['#car-passport', '#car-passport-process'].includes(window.location.hash)) {
            document.querySelector(window.location.hash)?.scrollIntoView({ block: 'start' });
        }
    });
}

async function initPassport() {
    const id = new URLSearchParams(window.location.search).get('id') || 'mercedes-c63-amg';
    try {
        const response = await fetch('assets/data/cars.json', { cache: 'no-store' });
        if (!response.ok) throw new Error(`Inventory returned ${response.status}`);
        const cars = await response.json();
        const car = cars[id];
        if (!car) return;
        renderPassport(car);

        document.querySelectorAll('[data-dossier-lang]').forEach((button) => {
            button.addEventListener('click', () => requestAnimationFrame(() => renderPassport(car)));
        });
        const languageObserver = new MutationObserver(() => renderPassport(car));
        languageObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    } catch (error) {
        console.error('Car Passport could not be initialized.', error);
    }
}

initPassport();
