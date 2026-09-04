const copy = {
    en: {
        home: 'Home', inventory: 'Inventory', customOrder: 'Custom order', sellCar: 'Sell your car', navFinancing: 'Financing', contact: 'Contact',
        available: 'Available now', signatureTier: 'Signature vehicle · 01', askingPrice: 'Asking price', power: 'Power', discover: 'Discover the car',
        signatureSeries: 'CarZone Signature · 01', signatureHeading: 'The flagship deserves its own room.',
        signatureCopy: 'A separate visual chapter for the rare car that defines the top of the collection.',
        cinematicFilm: 'Cinematic film', originalFrames: 'Original frames', interactiveModel: 'Interactive model', enterPrivateRoom: 'Open the model', closePrivateRoom: 'Close the model', loadingRoom: 'Loading the model', threeSixty: 'Three-sixty', walkAround: 'Walk around it.',
        selectionNote: 'The selection note', keyInformation: 'Key information', price: 'Price', priceNote: 'VAT status and financing are confirmed during the consultation.',
        bookViewing: 'Book a private viewing', bookViewingShort: 'Book viewing', exploreFinance: 'Explore financing',
        editorialReasons: 'Editorial reasons', whyThisOne: 'Why this one.',
        visualRecord: 'Visual record', closerLook: 'A closer look.',
        provenance: 'Provenance', knownBeforeLoved: 'Known before it is loved.',
        trustCopy: 'The presentation is editorial. The decision remains practical: identity, history and terms are made clear before a viewing.',
        technicalArchive: 'Technical archive', everythingWorth: 'Everything worth knowing.',
        sameEdit: 'From the same edit', continueLooking: 'Continue looking.', allInventory: 'All inventory',
        privateConsultation: 'Private consultation', finalCopy: 'We will confirm the car, answer the difficult questions and arrange a focused viewing.',
        startConversation: 'Start the conversation', year: 'Year', mileage: 'Mileage', fuel: 'Fuel', drivetrain: 'Drivetrain',
        reference: 'Reference', vin: 'VIN', firstRegistration: 'First registration', warranty: 'Warranty', colour: 'Colour',
        basic: 'Identity', technical: 'Core specifications', performance: 'Performance', comfort: 'Comfort', safety: 'Safety', technology: 'Technology', design: 'Design',
        photo: 'Vehicle photograph', viewVehicle: 'View vehicle', preparing: 'Preparing the dossier',
        missingVehicle: 'This vehicle could not be found.', backInventory: 'Return to inventory',
        skip: 'Skip to content', navigation: 'Primary navigation', homeLabel: 'CarZone home',
        languageLabel: 'Language selection', openMenu: 'Open navigation', closeMenu: 'Close navigation',
        previousImage: 'Previous image', nextImage: 'Next image', thumbnails: 'Vehicle image thumbnails',
        summary: 'Vehicle summary', dossier: 'CarZone vehicle dossier', description: 'Vehicle photographs, specifications and viewing enquiries.'
    },
    ro: {
        home: 'Acasă', inventory: 'Mașini pe stoc', customOrder: 'Mașini la comandă', sellCar: 'Vinde-ți mașina', navFinancing: 'Finanțare', contact: 'Contact',
        available: 'Disponibil acum', signatureTier: 'Automobil Signature · 01', askingPrice: 'Preț solicitat', power: 'Putere', discover: 'Descoperă mașina',
        signatureSeries: 'CarZone Signature · 01', signatureHeading: 'Vârful colecției merită propria încăpere.',
        signatureCopy: 'Un capitol vizual separat pentru automobilul rar care definește vârful întregii colecții.',
        cinematicFilm: 'Film cinematic', originalFrames: 'Cadre originale', interactiveModel: 'Model interactiv', enterPrivateRoom: 'Deschide modelul', closePrivateRoom: 'Închide modelul', loadingRoom: 'Se încarcă modelul', threeSixty: 'Trei sute șaizeci', walkAround: 'Ocolește-o pe îndelete.',
        selectionNote: 'Nota selecției', keyInformation: 'Informații cheie', price: 'Preț', priceNote: 'Regimul TVA și opțiunile de finanțare se confirmă în timpul consultanței.',
        bookViewing: 'Programează o vizionare privată', bookViewingShort: 'Programează', exploreFinance: 'Vezi finanțarea',
        editorialReasons: 'Argumente editoriale', whyThisOne: 'De ce acest exemplar.',
        visualRecord: 'Jurnal vizual', closerLook: 'Privește mai atent.',
        provenance: 'Proveniență', knownBeforeLoved: 'Cunoscută înainte să fie dorită.',
        trustCopy: 'Prezentarea este editorială. Decizia rămâne practică: identitatea, istoricul și condițiile sunt clarificate înainte de vizionare.',
        technicalArchive: 'Arhivă tehnică', everythingWorth: 'Tot ce merită știut.',
        sameEdit: 'Din aceeași selecție', continueLooking: 'Continuă explorarea.', allInventory: 'Tot stocul',
        privateConsultation: 'Consultanță privată', finalCopy: 'Confirmăm disponibilitatea, răspundem întrebărilor importante și organizăm o vizionare atentă.',
        startConversation: 'Începe conversația', year: 'An', mileage: 'Kilometraj', fuel: 'Combustibil', drivetrain: 'Tracțiune',
        reference: 'Referință', vin: 'VIN', firstRegistration: 'Prima înmatriculare', warranty: 'Garanție', colour: 'Culoare',
        basic: 'Identitate', technical: 'Specificații esențiale', performance: 'Performanță', comfort: 'Confort', safety: 'Siguranță', technology: 'Tehnologie', design: 'Design',
        photo: 'Fotografie automobil', viewVehicle: 'Vezi mașina', preparing: 'Pregătim dosarul',
        missingVehicle: 'Acest automobil nu a fost găsit.', backInventory: 'Înapoi la stoc',
        skip: 'Sari la conținut', navigation: 'Navigare principală', homeLabel: 'CarZone — pagina principală',
        languageLabel: 'Selectare limbă', openMenu: 'Deschide meniul', closeMenu: 'Închide meniul',
        previousImage: 'Imaginea anterioară', nextImage: 'Imaginea următoare', thumbnails: 'Miniaturi ale automobilului',
        summary: 'Datele automobilului', dossier: 'Dosar auto CarZone', description: 'Fotografii, specificații și solicitări de vizionare pentru automobil.'
    }
};

const editorial = {
    'mercedes-c63-amg': {
        en: {
            kicker: 'AMG archive · naturally aspirated',
            statement: 'A compact executive saloon built around an engine that became a chapter in its own right.',
            heading: 'The final word belongs to the engine.',
            intro: 'The C63 from this era is direct, mechanical and increasingly difficult to replace. This example brings the 6.2-litre naturally aspirated V8 together with a discreet body and the kind of tactility modern performance cars have edited out.',
            reasons: [
                ['Naturally aspirated', 'A 6.2-litre AMG V8 with immediate response, character and no artificial soundtrack.'],
                ['Before downsizing', '457 HP delivered through a rear-driven platform that asks the driver to stay involved.'],
                ['An honest example', 'A known specification, clear identity and warranty terms that can be checked before the first visit.']
            ],
            final: 'Hear the V8 before the numbers.'
        },
        ro: {
            kicker: 'Arhiva AMG · motor aspirat',
            statement: 'Un sedan executiv compact construit în jurul unui motor care a devenit un capitol de sine stătător.',
            heading: 'Ultimul cuvânt îl are motorul.',
            intro: 'C63-ul acestei generații este direct, mecanic și tot mai greu de înlocuit. Exemplarul reunește V8-ul aspirat de 6,2 litri cu o caroserie discretă și acea senzație tactilă pe care mașinile moderne de performanță au început să o piardă.',
            reasons: [
                ['Aspirat natural', 'Un V8 AMG de 6,2 litri, cu răspuns imediat, personalitate și fără coloană sonoră artificială.'],
                ['Înainte de downsizing', '457 CP trimiși către puntea spate într-o mașină care îl păstrează pe șofer implicat.'],
                ['Un exemplar onest', 'Specificație cunoscută, identitate clară și condiții de garanție verificabile înainte de vizită.']
            ],
            final: 'Ascultă V8-ul înaintea cifrelor.'
        }
    },
    'mercedes-s580': {
        en: {
            kicker: 'Flagship saloon · contemporary luxury',
            statement: 'A quiet, intelligent expression of performance that never needs to announce itself.',
            heading: 'Luxury measured in what disappears.',
            intro: 'The S580 is at its best when complexity becomes calm. V8 performance, four-wheel drive and chassis intelligence work behind the scenes, leaving the cabin quiet, composed and unusually effortless over distance.',
            reasons: [
                ['Quiet authority', 'The 4.0-litre V8 with EQ Boost delivers effortless pace without disturbing the cabin.'],
                ['Executive calm', 'AIRMATIC suspension and 4MATIC traction turn long journeys into the car’s natural environment.'],
                ['Technology without theatre', 'Assistance, displays and comfort systems are integrated to reduce effort rather than demand attention.']
            ],
            final: 'Experience what effortlessness feels like.'
        },
        ro: {
            kicker: 'Limuzină etalon · lux contemporan',
            statement: 'O expresie calmă și inteligentă a performanței, care nu simte nevoia să se anunțe.',
            heading: 'Luxul se măsoară în ceea ce dispare.',
            intro: 'S580 este cel mai convingător atunci când complexitatea devine liniște. Performanța V8, tracțiunea integrală și inteligența șasiului lucrează discret, iar habitaclul rămâne calm, echilibrat și incredibil de relaxant pe distanțe lungi.',
            reasons: [
                ['Autoritate discretă', 'V8-ul de 4,0 litri cu EQ Boost oferă accelerații fără efort, fără să tulbure habitaclul.'],
                ['Calm executiv', 'Suspensia AIRMATIC și tracțiunea 4MATIC fac din drumurile lungi mediul natural al mașinii.'],
                ['Tehnologie fără spectacol', 'Sistemele de asistență și confort sunt integrate pentru a reduce efortul, nu pentru a cere atenție.']
            ],
            final: 'Descoperă cum se simte lipsa efortului.'
        }
    }
};

const genericEditorial = (car, lang) => {
    const brand = `${car.make} ${car.model}`;
    const technical = car.specs?.technical || {};
    const performance = car.specs?.performance || [];
    if (lang === 'ro') {
        return {
            kicker: `${car.year} · selecție curatoriată`,
            statement: 'Un automobil ales pentru proporții, specificație și felul în care se simte dincolo de fișa tehnică.',
            heading: `${brand}, redus la ceea ce contează.`,
            intro: `Acest ${brand} intră în selecție pentru echilibrul dintre prezență, performanță și utilizarea de zi cu zi. Fără promisiuni inutile: doar configurația, starea și caracterul care îl diferențiază.`,
            reasons: [
                ['Performanță relevantă', vehicleText(performance[0], lang) || `${vehicleText(car.power, lang)} într-o configurație echilibrată.`],
                ['Configurație echilibrată', vehicleText(technical.Drivetrain || technical.Gearbox, lang) || 'O echipare aleasă pentru utilizare, nu doar pentru impresie.'],
                ['Date clare', vehicleText(technical.Warranty, lang) || 'Identitatea și condițiile se verifică înainte de vizionare.']
            ],
            final: `Cunoaște acest ${brand} în persoană.`
        };
    }
    return {
        kicker: `${car.year} · curated inventory`,
        statement: 'A car selected for proportion, specification and the way it feels beyond the data sheet.',
        heading: `${brand}, reduced to what matters.`,
        intro: `This ${brand} earns its place through the balance of presence, performance and real-world use. No unnecessary promises: just the specification, condition and character that set it apart.`,
        reasons: [
            ['Relevant performance', performance[0] || `${car.power} delivered through a coherent configuration.`],
            ['Balanced specification', technical.Drivetrain || technical.Gearbox || 'A specification chosen for use, not just for first impressions.'],
            ['Clear information', technical.Warranty || 'Identity and terms are checked before a viewing.']
        ],
        final: `Meet this ${brand} in person.`
    };
};


// Mesajul de incheiere, unul pentru fiecare masina: ce transmite ea, nu ce
// scrie in fisa tehnica. Cand un id lipseste de aici, se foloseste linia
// generica din genericEditorial().
const closings = {
    'tesla-model-x': ['Space, reimagined without compromise.', 'Spațiul, regândit fără compromis.'],
    'tesla-model-y': ['The everyday electric, without the asterisk.', 'Electricul de fiecare zi, fără asterisc.'],
    'tesla-model-s': ['Silence that accelerates.', 'Liniște care accelerează.'],
    'mercedes-s580': ['Experience what effortlessness feels like.', 'Descoperă cum se simte lipsa efortului.'],
    'mercedes-s400d': ['Diesel, when the distance is the point.', 'Diesel, când contează distanța.'],
    'mercedes-e55-amg': ['Supercharged, before AMG learned restraint.', 'Cu compresor, înainte ca AMG să învețe măsura.'],
    'mercedes-g65-amg': ['A V12 in a box. Nothing about it is reasonable.', 'Un V12 într-o cutie. Nimic rezonabil la el.'],
    'mercedes-c63-amg': ['Hear the V8 before the numbers.', 'Ascultă V8-ul înaintea cifrelor.'],
    'mercedes-c43-amg': ['AMG, translated for every day.', 'AMG, tradus pentru fiecare zi.'],
    'mercedes-cls63-amg': ['A four-door that never accepted the label.', 'Un coupé cu patru uși, dincolo de etichete.'],
    'mercedes-s63-smg': ['The S-Class that stopped being polite.', 'S-ul care a încetat să mai fie politicos.'],
    'audi-r8': ['A V10 you hear before you see.', 'Un V10 pe care îl auzi înainte să îl vezi.'],
    'audi-q3': ['Compact outside, generous where it counts.', 'Compact la exterior, generos unde contează.'],
    'audi-q7': ['Seven seats that ask for no compromise.', 'Șapte locuri care nu cer niciun compromis.'],
    'audi-rs4': ['An estate that hides its intentions.', 'Un break care își ascunde intențiile.'],
    'audi-rs5': ['Built for distance, not for display.', 'Făcut pentru distanță, nu pentru vitrină.'],
    'audi-rsq8': ['The SUV that refuses to behave like one.', 'SUV-ul care refuză să se poarte ca unul.'],
    'porsche-911-turbo-s': ['Everyday speed, without the theatre.', 'Viteză de zi cu zi, fără spectacol.'],
    'porsche-918-spyder': ['The hybrid that rewrote the rules.', 'Hibridul care a rescris regulile.'],
    'porsche-taycan': ['Porsche, without a single drop of fuel.', 'Porsche, fără un strop de combustibil.'],
    'porsche-turbo-s-cross': ['A Taycan that stopped avoiding gravel.', 'Un Taycan care nu mai ocolește pietrișul.'],
    'porsche-boxster-718': ['Mid-engined, and honest about it.', 'Motor central, și onest în privința asta.'],
    'porsche-cayman': ['The purest shape Porsche builds.', 'Cea mai pură formă pe care o face Porsche.'],
    'lotus-emira': ['The last Lotus with a combustion heart.', 'Ultimul Lotus cu inimă termică.'],
    'lotus-seletre': ['Lotus, reinvented for the electric age.', 'Lotus, reinventat pentru era electrică.'],
    'lotus-elise': ['Lightness, treated as a design philosophy.', 'Greutatea redusă, o filozofie de design.'],
    'lexus-es': ['Quiet by design, not by accident.', 'Liniștit din construcție, nu din întâmplare.'],
    'lexus-is': ['A saloon that still wants to be driven.', 'Un sedan care încă vrea să fie condus.'],
    'lexus-lc': ['A concept car that reached the road unchanged.', 'Un concept ajuns pe șosea neschimbat.'],
    'lexus-lfa': ['The V10 that took a decade to build.', 'V10-ul construit într-un deceniu.'],
    'lexus-lx': ['Built to arrive, wherever that happens to be.', 'Construit să ajungă, oriunde ar fi.'],
    'lexus-uxh': ['The city, taken quietly.', 'Prin oraș, în liniște.'],
    'alfa-romeo-4c': ['Carbon fibre, and nothing between you and the road.', 'Fibră de carbon, și nimic între tine și drum.'],
    'alfa-romeo-33-stradale': ['Thirty-three will be built. This is one.', 'Se vor construi treizeci și trei. Acesta e unul.'],
    'alfa-romeo-giulia': ['Italian temper, held to German discipline.', 'Temperament italian, ținut în disciplină germană.'],
    'alfa-romeo-tonale': ['Alfa, answering for the everyday.', 'Alfa, pentru fiecare zi.'],
    'alfa-romeo-stelvio': ['An SUV that kept its driving licence.', 'Un SUV care și-a păstrat permisul.'],
    'genesis-g70-shooting-brake': ['The estate Europe asked for, built in Korea.', 'Break-ul cerut de Europa, construit în Coreea.'],
    'genesis-g80': ['Luxury, without the badge tax.', 'Lux, fără taxă de emblemă.'],
    'genesis-g90': ['A flagship that arrived without asking permission.', 'O limuzină apărută fără să ceară voie.'],
    'genesis-g90-long-wheelbase': ['Measured in the space behind you.', 'Se măsoară în spațiul din spatele tău.'],
    'genesis-gv60': ['Electric, and unmistakably itself.', 'Electric, și inconfundabil el însuși.'],
    'genesis-gv70': ['Restraint, sized for a family.', 'Sobrietate, la dimensiunea unei familii.'],
    'bmw-x5': ['The SUV that started the argument.', 'SUV-ul care a început discuția.'],
    'bmw-x6': ['Divisive, entirely on purpose.', 'Stârnește controverse. Intenționat.'],
    'bmw-m3': ['The E92, and the last M3 to run a V8.', 'E92, și ultimul M3 cu V8.'],
    'bmw-m5': ['The saloon that never needed a second car.', 'Sedanul care n-a avut nevoie de a doua mașină.'],
    'bmw-m6': ['Grand touring, with a V8 accent.', 'Grand touring, cu accent de V8.'],
    'bmw-m8': ['Everything BMW knows, in a single body.', 'Tot ce știe BMW, într-o singură caroserie.'],
    'corvette-c8': ['The Corvette that moved the engine.', 'Corvette-ul care și-a mutat motorul.'],
    'corvette-z51': ['Track intent, road manners.', 'Intenție de circuit, maniere de șosea.'],
    'corvette-stingray-c7': ['The last of the front-engined Corvettes.', 'Ultimul Corvette cu motor în față.'],
    'koenigsegg-cc850': ['A manual gearbox that is also an automatic.', 'O cutie manuală care e și automată.'],
    'koenigsegg-gemera': ['Four seats. No apology.', 'Patru locuri. Nicio scuză.'],
    'koenigsegg-jesko-attack': ['Built for a number nobody has reached.', 'Construit pentru o cifră la care nimeni n-a ajuns.']
};

function closingFor(car, lang) {
    const line = closings[car.id];
    return line ? line[lang === 'ro' ? 1 : 0] : null;
}


// Pozele de card nu privesc toate in aceeasi directie. Cand masina e fotografiata
// cu botul spre dreapta si o asezam tot in dreapta, iese din cadru. Oglindim
// asezarea, nu fotografia: un scaleX(-1) ar intoarce si emblema, si numarul de
// inmatriculare, ceea ce pe un site de dealer e o minciuna vizuala.
const facingRight = new Set([
    'alfa-romeo-4c',
    'alfa-romeo-giulia',
    'audi-q3',
    'audi-r8',
    'bmw-m3',
    'bmw-m6',
    'bmw-x6',
    'corvette-c8',
    'corvette-stingray-c7',
    'corvette-z51',
    'genesis-g80',
    'genesis-g90',
    'genesis-gv60',
    'koenigsegg-cc850',
    'koenigsegg-gemera',
    'lexus-es',
    'lexus-lc',
    'lexus-lfa',
    'lotus-elise',
    'lotus-emira',
    'lotus-seletre',
    'mercedes-s400d',
    'mercedes-c43-amg',
    'mercedes-s63-smg',
    'porsche-918-spyder',
    'porsche-911-turbo-s',
    'tesla-model-s',
    'tesla-model-x'
]);

// Masini fotografiate mic in cadru, cu mult gol in jur: fara un plafon mai
// generos ar arata pierdute langa restul.
const looseFraming = new Set([
    'alfa-romeo-giulia',
    'genesis-g80',
    'genesis-g90',
    'mercedes-e55-amg'
]);


// Cele trei motive de pe fiecare pagina, scrise per masina. Inainte, 53 din 55
// primeau text generat din specs — titluri goale ("Relevant performance") si
// corpuri care repetau valori deja prezente in acordeonul de specificatii.
const reasonsByCar = {
    'tesla-model-x': {
        en: [["Quick, despite the size", "3.1 seconds to 100 km/h is startling for a full-size SUV, helped by adaptive air suspension that keeps the ride composed."], ["The falcon-door Tesla", "Falcon wing doors are unique to the X within Tesla's range, marking it as the showpiece SUV rather than merely the practical one."], ["Full Self-Driving package included", "The Full Self-Driving assistance package appears in the published specification, alongside a listed 48-month warranty and 15,000 km covered. Feature availability should be verified for this vehicle."]],
        ro: [["Rapid, în ciuda dimensiunii", "3,1 secunde până la 100 km/h e surprinzător pentru un SUV de dimensiuni mari, ajutat de suspensia pneumatică adaptivă care păstrează mersul echilibrat."], ["Tesla cu uși falcon", "Ușile falcon sunt unice pentru X în gama Tesla, semnul clar că aceasta e SUV-ul-vedetă, nu doar varianta practică."], ["Pachet Full Self-Driving inclus", "Pachetul de asistență Full Self-Driving apare în configurația publicată, alături de o garanție de 48 de luni și un rulaj de 15.000 km. Disponibilitatea funcțiilor se verifică pentru această mașină."]]
    },
    'mercedes-s580': {
        en: [["Quiet authority", "The 4.0-litre V8 with EQ Boost delivers effortless pace without disturbing the cabin."], ["Top of the range", "Sits above every S-Class but the AMG and Maybach versions, without their added bulk or price."], ["Low yearly mileage", "Thirty thousand kilometres in three years points to occasional use, not the daily grind typical of big saloons."]],
        ro: [["Autoritate discretă", "V8-ul de 4.0 litri cu EQ Boost oferă accelerație lejeră fără să tulbure liniștea din habitaclu."], ["Vârful gamei", "Se situează deasupra oricărei variante S-Class, cu excepția AMG și Maybach, fără greutatea sau prețul acestora."], ["Rulaj anual redus", "Treizeci de mii de kilometri în trei ani indică o utilizare ocazională, nu rulajul zilnic tipic limuzinelor mari."]]
    },
    'audi-r8': {
        en: [["Ten cylinders, no turbo", "The 5.2-litre V10 makes its power without turbos or hybrid assistance, revving with a directness few remaining engines offer."], ["Related to the Huracán", "This generation of R8 shares its naturally aspirated V10 with Lamborghini's Huracán, a rare link between the two brands."], ["Light use since 2022", "12,000 km since 2022 leaves this naturally aspirated V10 with most of its service life still ahead."]],
        ro: [["Zece cilindri, fără turbo", "V10-ul de 5,2 litri își face puterea fără turbine sau asistență hibridă, turează cu o răspuns direct pe care puține motoare o mai oferă."], ["Rudă cu Huracán", "Această generație de R8 împarte V10-ul aspirat natural cu Huracán de la Lamborghini, o legătură rară între cele două mărci."], ["Puțin folosit din 2022", "12.000 km din 2022 lasă acestui V10 aspirat natural cea mai mare parte din durata de viață încă neconsumată."]]
    },
    'porsche-911-turbo-s': {
        en: [["Grip over spectacle", "Twin-turbo flat-six and all-wheel drive put 650 hp down without drama, in the wet or the dry."], ["Everyday flagship", "Turbo S sits above Carrera and GTS as the 911 built to be daily-usable and still the quickest in the range."], ["Barely run in", "At 8,000 km, it has covered a fraction of what a typical 911 sees in two years, with dealer warranty still active."]],
        ro: [["Aderență, nu spectacol", "Motorul boxer biturbo și tracțiunea integrală livrează cei 650 CP fără dramatism, pe ploaie sau pe uscat."], ["Vârful gamei, zilnic", "Turbo S stă deasupra variantelor Carrera și GTS, ca versiunea de 911 gândită să fie condusă zilnic și, totuși, cea mai rapidă din gamă."], ["Abia rodat", "Cu doar 8.000 km, a parcurs o fracțiune din ce acumulează, în doi ani, un 911 obișnuit, iar garanția de la dealer este încă activă."]]
    },
    'tesla-model-y': {
        en: [["Quick for the price", "4.8 seconds to 100 km/h is genuinely fast for a compact crossover, and comes without paying flagship Model S or X money."], ["Tesla's volume model", "Built on the Model 3's platform, the Y is Tesla's most practical everyday size and among the best-selling cars in the world."], ["Rear-seat heating, standard here", "This configuration includes heated rear seats, not just front, alongside 18,000 km covered and a 48-month warranty."]],
        ro: [["Rapid pentru preț", "4,8 secunde până la 100 km/h e cu adevărat rapid pentru un crossover compact, și vine fără prețul unui Model S sau X."], ["Modelul de volum al Tesla", "Construit pe platforma Model 3, Y e dimensiunea cea mai practică pentru zi cu zi din gama Tesla și unul dintre cele mai vândute modele din lume."], ["Încălzire și în spate, de serie", "Această configurație include scaune încălzite și în spate, nu doar în față, alături de 18.000 km parcurși și o garanție de 48 de luni."]]
    },
    'tesla-model-s': {
        en: [["The tri-motor Tesla", "A third motor and a 322 km/h top speed set the S apart from the dual-motor X and Y in this range."], ["Tesla's original flagship", "The S is the model that first proved Tesla could build a genuine luxury performance sedan, not just a promising startup's concept."], ["Ventilated seats, lowest mileage", "Ventilated front seats are fitted, a detail the X and Y lack here, and it has covered the least distance of the three."]],
        ro: [["Tesla cu trei motoare", "Al treilea motor și viteza maximă de 322 km/h separă S-ul de X și Y, ambele cu două motoare, în această gamă."], ["Primul vârf de gamă Tesla", "S e modelul care a dovedit primul că Tesla poate construi un sedan de lux cu adevărat performant, nu doar conceptul unui startup promițător."], ["Scaune ventilate, cel mai mic kilometraj", "Scaunele față ventilate sunt montate aici, un detaliu pe care X și Y din această gamă nu-l au, iar mașina a parcurs cea mai mică distanță dintre cele trei."]]
    },
    'lotus-emira': {
        en: [["Balance over brute force", "A mid-mounted engine and limited-slip differential give the Emira classic sports-car balance, built to reward technique rather than raw power."], ["Lotus's last petrol car", "Lotus has said the Emira will be its final combustion-engined model, closing out a chapter before the brand goes fully electric."], ["Essentially unworn", "5,000 km on a 2023 car means this Emira has barely left its first owner's driveway, backed by a 36-month warranty."]],
        ro: [["Echilibru, nu forță brută", "Motorul central și diferențialul cu alunecare limitată dau Emirei echilibrul clasic al unei mașini sport, gândit să recompenseze tehnica, nu puterea brută."], ["Ultima Lotus pe benzină", "Lotus a declarat că Emira va fi ultimul său model cu motor termic, închizând un capitol înainte ca marca să treacă integral pe electric."], ["Rulaj foarte redus", "Această Emira din 2023 are un rulaj publicat de 5.000 km și o garanție declarată de 36 de luni."]]
    },
    'lotus-seletre': {
        en: [["Torque vectoring, SUV body", "Torque vectoring and active aerodynamics keep a tall, heavy SUV composed in corners, applying Lotus's chassis knowledge to an unfamiliar shape."], ["Lotus's first SUV", "Eletre is the first SUV Lotus has ever built, a sharp turn for a brand historically defined by small, light sports cars."], ["Nearly new, well covered", "8,000 km since 2023 is a light start for this SUV, backed by one of the longer warranty terms in this collection."]],
        ro: [["Reflexe sportive într-un SUV", "Vectorizarea cuplului și aerodinamica activă păstrează un SUV înalt și greu stabil în viraje, aplicând know-how-ul de șasiu al Lotus unei forme neobișnuite pentru marcă."], ["Primul SUV Lotus", "Eletre este primul SUV construit vreodată de Lotus, o schimbare radicală pentru o marcă definită istoric prin mașini sport mici și ușoare."], ["Aproape nouă, bine acoperită", "8.000 km din 2023 reprezintă un început modest pentru acest SUV, susținut de una dintre cele mai lungi perioade de garanție din această colecție."]]
    },
    'lotus-elise': {
        en: [["The only manual here", "This is the one car in the collection where the driver still works a clutch pedal and a physical shift gate."], ["From the final year", "Lotus ended Elise production in 2021, making a car from this model year one of the last of the original line built."], ["No luxury added", "Manual air conditioning and a basic stereo aren't missing options here, they're the Elise staying true to its lightweight-first design brief."]],
        ro: [["Singura cu cutie manuală", "Este singura mașină din colecție unde șoferul mai calcă o pedală de ambreiaj și schimbă vitezele printr-o culisă fizică."], ["Din ultimul an fabricat", "Lotus a încheiat producția modelului Elise în 2021, ceea ce face ca o mașină din acest an să fie printre ultimele din linia originală construite."], ["Fără lux adăugat", "Aerul condiționat manual și un aparat audio simplu nu sunt opțiuni lipsă, ci dovada că Elise a rămas fidelă filozofiei sale de greutate minimă."]]
    },
    'audi-q3': {
        en: [["Diesel range, quattro grip", "The TDI engine trades outright power for long-distance efficiency, and quattro keeps that efficiency working when the road is wet or loose."], ["Audi's smallest SUV", "Q3 is the compact entry point to Audi's SUV range, sized for city streets and tight parking rather than long trips."], ["Ordinary, well-kept mileage", "25,000 km since 2022 is typical family-car mileage, not a sign of neglect or hard driving."]],
        ro: [["Autonomie diesel, aderență quattro", "Motorul TDI renunță la puterea brută în favoarea eficienței pe distanțe lungi, iar quattro păstrează acea eficiență utilă și pe carosabil ud sau afânat."], ["SUV-ul compact al Audi", "Q3 este poarta de acces compactă în gama SUV Audi, dimensionată pentru străzile din oraș și parcări strâmte, nu pentru drumuri lungi."], ["Kilometraj obișnuit, bine ținut", "25.000 km din 2022 reprezintă un kilometraj obișnuit pentru o mașină de familie, nu semnul unei conduceri neglijente sau dure."]]
    },
    'audi-q7': {
        en: [["Mild hybrid, smoother ride", "A mild hybrid system smooths stop-start driving while adaptive air suspension keeps the cabin level under a full load of passengers."], ["Audi's original three-row SUV", "Q7 established Audi's large SUV format years before the Q8 arrived, and it's still the one built specifically to seat seven."], ["Configured for the family", "Massage front seats, four-zone climate, and a power third row point to a car specified for long trips with a full family."]],
        ro: [["Mild-hibrid, confort sporit", "Sistemul mild-hibrid netezește condusul în trafic oprit-pornit, iar suspensia pneumatică adaptivă păstrează caroseria dreaptă chiar și cu toate locurile ocupate."], ["Primul SUV mare Audi", "Q7 a stabilit formatul SUV-urilor mari Audi cu ani înainte de apariția lui Q8 și rămâne singurul gândit special pentru șapte locuri."], ["Configurat pentru familie", "Scaunele față cu masaj, climatizarea în patru zone și rândul trei electric arată o mașină echipată pentru drumuri lungi cu toată familia."]]
    },
    'audi-rs4': {
        en: [["Quick in wagon clothing", "Permanent quattro all-wheel drive keeps 450 hp usable in poor conditions, letting the Avant body keep pace with more overtly sporting shapes."], ["The performance wagon tradition", "RS4 continues Audi's long-running formula of putting supercar-level power into the practical Avant wagon body, not a two-door shell."], ["Well used, priced accordingly", "45,000 km and a 12-month warranty are honest signs of five years' use, reflected fairly in the price."]],
        ro: [["Putere ascunsă în break", "Tracțiunea integrală quattro permanentă păstrează cei 450 CP utilizabili pe vreme nefavorabilă, permițând caroseriei Avant să țină pasul cu forme mult mai sportive."], ["Tradiția break-ului performant", "RS4 continuă formula de lungă durată a Audi de a pune putere de supercar într-o caroserie Avant practică, nu într-o caroserie coupé cu două uși."], ["Rulată, dar preț corect", "45.000 km și o garanție de 12 luni sunt semne oneste ale celor cinci ani de utilizare, reflectate corect în preț."]]
    },
    'audi-rs5': {
        en: [["Active torque vectoring", "The sport differential actively vectors torque across the rear axle, sharpening turn-in in a way the standard quattro setup doesn't."], ["The two-door alternative", "Where RS4 wears the practical Avant body, RS5 carries the same drivetrain in a two-door shell built for style over cargo room."], ["Driven as intended", "55,000 km reflects a car that has been used as intended rather than kept for occasional outings, with the price set accordingly."]],
        ro: [["Vectorizare activă a cuplului", "Diferențialul sport distribuie activ cuplul pe puntea spate, ascuțind intrarea în viraj într-un mod în care quattro standard nu o face."], ["Alternativa cu două uși", "Acolo unde RS4 poartă caroseria practică Avant, RS5 duce același ansamblu mecanic într-o caroserie cu două uși, gândită pentru stil, nu pentru portbagaj."], ["Condusă așa cum trebuie", "55.000 km arată o mașină folosită așa cum a fost gândită, nu păstrată pentru ieșiri ocazionale, iar prețul reflectă exact acest lucru."]]
    },
    'audi-rsq8': {
        en: [["SUV mass, supercar pace", "RS ceramic brakes and an active sport differential give a full-size SUV the stopping power and agility normally reserved for two-seat coupes."], ["The SUV range's halo", "RS Q8 sits above Q7 as Audi's fastest SUV, trading some of Q7's third-row practicality for a sloping, coupe-like roofline."], ["Light use, full specification", "20,000 km since 2022 is light use for a car carrying the full RS widebody kit and 23-inch wheels from new."]],
        ro: [["Corpolent, dar agil", "Frânele ceramice RS și diferențialul sport activ dau acestui SUV mare puterea de frânare și agilitatea rezervate, de obicei, cupeurilor cu două locuri."], ["Vârful gamei de SUV-uri", "RS Q8 stă deasupra lui Q7 ca cel mai rapid SUV Audi, renunțând la o parte din practicitatea rândului trei pentru o linie de acoperiș înclinată, tip coupé."], ["Puțin rulat, complet echipat", "20.000 km din 2022 înseamnă o utilizare redusă pentru o mașină echipată din fabrică cu kitul RS widebody și jante de 23 de țoli."]]
    },
    'lexus-es': {
        en: [["Silence over speed", "The hybrid E-CVT puts cabin hush and smoothness over urgency, more limousine than sports sedan."], ["Comfort before flagship status", "Positioned below the LS as Lexus's comfort-first sedan, built for quiet commuting rather than back-road ambition."], ["Low mileage, easy ownership", "Under 28,000 km recorded and still within the manufacturer warranty, the hybrid driveline has seen genuinely light use."]],
        ro: [["Liniște, nu viteză", "Cutia hibridă E-CVT pune liniștea cabinei și fluiditatea înaintea grabei, mai aproape de o limuzină decât de o berlină sportivă."], ["Confort înainte de rang", "Poziționat sub LS ca sedanul Lexus axat pe confort, e gândit pentru naveta liniștită, nu pentru ambiții de drum de munte."], ["Kilometraj mic, deținere simplă", "Cu sub 28.000 km la bord și încă în garanția producătorului, sistemul hibrid a fost cu adevărat puțin solicitat."]]
    },
    'lexus-is': {
        en: [["Chassis over horsepower", "The turbo four gives up some outright power to rivals, but RWD balance and sharp steering are the real selling point."], ["A shrinking breed", "As rivals push compact sport sedans toward SUVs and EVs, the IS keeps the RWD three-box formula alive."], ["Track-ready trim, warranty intact", "This example carries the full F Sport visual and chassis package, with performance exhaust and sport suspension, still under warranty."]],
        ro: [["Șasiul, nu puterea", "Motorul turbo în patru cilindri cedează din putere brută rivalilor, dar echilibrul pe puntea spate și direcția precisă rămân atuul real."], ["Tot mai rar întâlnită", "Pe măsură ce rivalii mută berlinele sport compacte spre SUV-uri și electrice, IS păstrează vie formula clasică cu tracțiune spate."], ["Echipare de pistă, garanție intactă", "Acest exemplar are pachetul vizual și de șasiu F Sport complet, cu evacuare sport și suspensie sport, încă în garanție."]]
    },
    'lexus-lc': {
        en: [["Naturally aspirated, increasingly rare", "The 5.0-litre V8 revs freely to redline without a turbo's lag or an electric motor's silence, a formula few rivals still build."], ["Lexus's halo grand tourer", "Built to prove Lexus could make a proper grand tourer, not just a comfortable sedan, with styling and cabin finish to match."], ["Barely broken in", "With around 12,000 km covered and still inside its warranty window, this LC has been driven sparingly rather than daily."]],
        ro: [["Aspirație naturală, tot mai rară", "V8-ul de 5,0 litri turează liber până la limită, fără întârzierea unui turbo sau tăcerea unui motor electric, o formulă tot mai rar construită."], ["Grand tourerul-vedetă al Lexus", "Construit ca să dovedească faptul că Lexus poate face un grand tourer adevărat, nu doar un sedan confortabil, cu finisaje pe măsură."], ["Abia rodat", "Cu aproximativ 12.000 km parcurși și încă în perioada de garanție, acest LC a fost condus rar, nu zilnic."]]
    },
    'lexus-lfa': {
        en: [["Yamaha-tuned V10 howl", "Lexus worked with Yamaha to tune the V10's induction and exhaust note, the reason this engine is still discussed a decade on."], ["Under 500 ever built", "Lexus built only 500 LFAs worldwide between 2010 and 2012, each essentially hand-assembled around a carbon fibre monocoque."], ["The Nürburgring Package", "Finished in the Nürburgring Package specification, the rarest version of an already rare car, with barely 8,500 km on the odometer."]],
        ro: [["Un V10 acordat de Yamaha", "Lexus a colaborat cu Yamaha pentru a regla admisia și sunetul evacuării V10-ului, motivul pentru care acest motor e încă discutat după un deceniu."], ["Sub 500 de exemplare construite", "Lexus a construit doar 500 de LFA în toată lumea între 2010 și 2012, fiecare asamblat aproape manual pe un monococ din fibră de carbon."], ["Pachetul Nürburgring", "Finisat în specificația Pachetului Nürburgring, cea mai rară versiune a unei mașini deja rare, cu abia 8.500 km la bord."]]
    },
    'lexus-lx': {
        en: [["Genuine off-road hardware", "Crawl control and multi-terrain select are genuine low-range systems shared with the Land Cruiser, not badge-engineered SUV styling."], ["Land Cruiser underneath", "Built on the same body-on-frame platform as the Land Cruiser, it adds Lexus cabin quality without losing the underlying toughness."], ["Privacy over capacity", "Second-row captain's chairs and a power third row trade outright seating capacity for a more private, individually adjustable middle row."]],
        ro: [["Echipare reală de off-road", "Crawl control și modul multi-teren sunt sisteme reale de reducție, preluate de la Land Cruiser, nu doar stil de SUV."], ["Land Cruiser dedesubt", "Construit pe aceeași platformă cu șasiu separat ca Land Cruiser, adaugă rafinamentul Lexus fără să piardă robustețea de bază."], ["Intimitate în locul capacității", "Scaunele individuale din spate și rândul trei electric renunță la capacitatea maximă de locuri în favoarea unui rând median mai privat, reglabil individual."]]
    },
    'lexus-uxh': {
        en: [["Tuned for efficiency", "At 181 hp, the hybrid system is tuned for low fuel use and smooth city driving rather than outright pace."], ["Entry point into Lexus", "As Lexus's smallest and most affordable model, the UX exists to bring buyers into the brand before they move up the range."], ["Long warranty runway", "With roughly 15,000 km covered and a 48-month warranty attached, most of its coverage period and hybrid battery life still lie ahead."]],
        ro: [["Calibrat pentru eficiență", "Cu 181 CP, sistemul hibrid e calibrat pentru consum redus și condus urban lin, nu pentru viteză maximă."], ["Poarta de intrare în Lexus", "Ca cel mai mic și accesibil model Lexus, UX există pentru a aduce clienți în brand înainte ca aceștia să urce în gamă."], ["Garanție cu mult drum înainte", "Cu aproximativ 15.000 km parcurși și o garanție de 48 de luni, cea mai mare parte a acoperirii și a duratei bateriei hibride stă încă înainte."]]
    },
    'porsche-918-spyder': {
        en: [["Electric and V8, together", "Two electric motors fill in torque below the V8's power band, and the car can also creep through town in silence."], ["One of 918 built", "Porsche built exactly this many examples between 2013 and 2015, making the 918 Spyder rare even among hypercars of its generation."], ["Collector mileage", "3,000 km in just over a decade means this car has spent most of its life stored rather than driven."]],
        ro: [["Electric și V8, împreună", "Cele două motoare electrice completează cuplul sub turația de forță a V8-ului, iar mașina poate și să alunece prin oraș în tăcere."], ["Unul din 918 fabricate", "Porsche a construit exact atâtea exemplare între 2013 și 2015, ceea ce face din 918 Spyder o raritate chiar și printre hipercarurile generației sale."], ["Kilometraj de colecție", "3.000 km în puțin peste un deceniu înseamnă că mașina și-a petrecut cea mai mare parte a vieții depozitată, nu condusă."]]
    },
    'alfa-romeo-4c': {
        en: [["Analog steering feel", "Alfa skipped electric power assistance, so the carbon tub's low weight comes through the wheel at any speed."], ["A race-built tub", "Its carbon monocoque uses bonded construction borrowed from racing, unusual for a sports car this compact."], ["Low annual mileage", "Under 18,000 km since 2019 averages roughly 2,500 km a year, a car kept for occasions rather than commutes."]],
        ro: [["Direcție nefiltrată", "Alfa a renunțat la servodirecția electrică, iar greutatea mică a caroseriei din carbon se simte direct în volan, la orice viteză."], ["Monococ de competiție", "Monococul din fibră de carbon este lipit, o tehnică împrumutată din competiții, neobișnuită pentru o mașină atât de compactă."], ["Kilometraj anual redus", "Sub 18.000 km parcurși din 2019 înseamnă circa 2.500 km pe an, semnul unei mașini scoase cu ocazii, nu folosite zilnic."]]
    },
    'alfa-romeo-33-stradale': {
        en: [["Rear wheels, no filter", "All 620 hp reaches the road through the rear wheels alone, with active aerodynamics keeping the carbon tub composed as speed builds."], ["One of thirty-three", "The name honors the 1967 original, and like it, Alfa is building just 33 examples worldwide, each essentially bespoke."], ["Essentially delivery mileage", "At 500 km, this car has barely left a transporter, a rare chance to buy one of only 33 ever assembled."]],
        ro: [["Putere doar la spate", "Toți cei 620 CP ajung la asfalt doar prin roțile din spate, iar aerodinamica activă ține monococul din carbon stabil la viteză mare."], ["Unul din 33", "Numele reia originalul din 1967, iar Alfa construiește, la fel ca atunci, doar 33 de exemplare în toată lumea, fiecare practic unicat."], ["Kilometraj practic de livrare", "Cu 500 km la bord, mașina abia a coborât de pe transportor, o ocazie rară de a cumpăra una dintre cele 33 deja asamblate."]]
    },
    'alfa-romeo-giulia': {
        en: [["Diesel torque, RWD balance", "The diesel's low-end torque goes through the rear wheels, the layout that gives the Giulia sharper turn-in than most sedans its size."], ["Same platform as Stelvio", "Giulia's rear-drive architecture is the same one underneath the Stelvio in this collection, engineered as a sedan first, then adapted."], ["Three years of cover", "35,000 km over roughly four years is steady, unspectacular use, backed here by a 36-month warranty on the sale."]],
        ro: [["Cuplu diesel, tracțiune spate", "Cuplul motorului diesel ajunge la roțile din spate, arhitectura care dă Giuliei un viraj mai precis decât la majoritatea berlinelor din clasă."], ["Aceeași platformă ca Stelvio", "Arhitectura cu tracțiune spate a Giuliei este aceeași care se regăsește și sub Stelvio din această colecție, gândită întâi pentru berlină, apoi adaptată."], ["Trei ani de garanție", "35.000 km în aproximativ patru ani înseamnă o utilizare liniștită, acoperită acum de o garanție de 36 de luni la vânzare."]]
    },
    'alfa-romeo-tonale': {
        en: [["Electric fills the gap", "The electric motor covers the gap while the turbo spools, giving the Tonale quicker response off the line than the numbers suggest."], ["The gateway model", "Tonale is the newest and smallest car Alfa builds, a compact crossover designed to bring new buyers into the badge."], ["Well optioned, lightly used", "Around 20,000 km since 2023, with the panoramic sunroof and wireless charging fitted, a well-equipped example that has covered modest distance."]],
        ro: [["Electricul acoperă golul", "Motorul electric acoperă golul cât timp turbina se încarcă, oferind Tonale un răspuns mai rapid la accelerație decât ar părea din cifre."], ["Poarta către Alfa", "Tonale este cel mai nou și mai compact model Alfa, un crossover gândit să aducă spre marcă și clienți noi."], ["Dotată bine, puțin folosită", "Aproximativ 20.000 km din 2023, cu trapa panoramică și încărcarea wireless montate, un exemplar bine dotat și puțin rulat."]]
    },
    'alfa-romeo-stelvio': {
        en: [["Rear-biased all-wheel drive", "Q4 defaults to the rear axle and calls on the front wheels only when needed, giving it car-like balance for an SUV."], ["SUV with sedan instincts", "Most rivals in this SUV class start from front-wheel-drive platforms; Stelvio starts from a rear-drive sedan's underpinnings instead."], ["Driven as intended", "38,000 km over roughly four years is normal family-SUV use, and the sale still carries a 36-month warranty."]],
        ro: [["Q4 cu bază spate", "Q4 trimite implicit puterea spre puntea din spate și implică puntea față doar la nevoie, dând un echilibru de mașină, nu de SUV clasic."], ["Instincte de berlină", "Majoritatea rivalelor din clasa SUV pornesc de la platforme cu tracțiune față; Stelvio pornește de la o platformă de berlină cu tracțiune spate."], ["Folosit așa cum trebuie", "38.000 km în aproximativ patru ani înseamnă o utilizare normală de SUV de familie, iar vânzarea vine tot cu garanție de 36 de luni."]]
    },
    'genesis-g70-shooting-brake': {
        en: [["Diesel torque, sport chassis", "A torque-rich diesel four paired with RWD balance and Brembo brakes gives this shooting brake a different character than the petrol G70."], ["A vanishing body style", "The shooting brake wagon body is nearly extinct among sport sedans, giving practicality the standard G70 sedan can't match."], ["Warranty rivals can't match", "The 60-month warranty outlasts what most German rivals offer on a comparable used car, with 22,000 km of everyday use behind it."]],
        ro: [["Cuplu diesel, șasiu sportiv", "Un diesel în patru cilindri bogat în cuplu, combinat cu echilibrul pe puntea spate și frâne Brembo, dă acestui shooting brake un caracter diferit față de G70-ul pe benzină."], ["O caroserie pe cale de dispariție", "Caroseria de tip shooting brake e aproape dispărută printre berlinele sport, oferind o practicitate pe care varianta sedan a G70 n-o poate egala."], ["Garanție pe care rivalii n-o egalează", "Garanția de 60 de luni depășește ce oferă majoritatea rivalilor germani la o mașină second-hand comparabilă, cu 22.000 km de utilizare zilnică la activ."]]
    },
    'genesis-g80': {
        en: [["Air suspension, all-weather grip", "HTRAC all-wheel drive and air suspension are tuned for composed, all-weather cruising rather than outright cornering pace."], ["Genesis's E-Class rival", "Positioned squarely against the E-Class and 5 Series, the G80 is the model that made cross-shopping Genesis against the Germans plausible."], ["Well-equipped, lightly driven", "Massage front seats and three-zone climate control are fitted, and 25,000 km recorded is a modest total for a 2023 car."]],
        ro: [["Suspensie pe aer, aderență completă", "Sistemul HTRAC și suspensia pneumatică sunt calibrate pentru un mers stabil, indiferent de vreme, nu pentru viteză maximă în curbe."], ["Rivalul Genesis pentru Clasa E", "Poziționat direct împotriva Clasei E și a Seriei 5, G80 e modelul care a făcut plauzibilă compararea Genesis cu nemții."], ["Bine echipat, puțin condus", "Scaune cu masaj în față și climatizare pe trei zone sunt de serie, iar cei 25.000 km înregistrați sunt puțini pentru o mașină din 2023."]]
    },
    'genesis-g90': {
        en: [["Twin-turbo V6, no theatrics", "The 3.5-litre twin-turbo V6 delivers strong, effortless overtaking power without the drama or fuel thirst of a V8 flagship."], ["For owner-drivers, not chauffeurs", "Unlike the long-wheelbase version aimed at rear-seat passengers, this G90 is sized for someone who wants to drive it themselves."], ["Flagship spec, low mileage", "Four-zone climate control and rear seat entertainment are fitted despite the standard wheelbase, with only 18,000 km covered so far."]],
        ro: [["V6 biturbo, fără teatru", "V6-ul biturbo de 3,5 litri oferă putere puternică și lină la depășire, fără dramatismul sau consumul unui flagship cu V8."], ["Pentru cel care conduce, nu pentru șofer", "Spre deosebire de versiunea cu ampatament lung, gândită pentru pasagerii din spate, acest G90 e dimensionat pentru cineva care vrea să-l conducă singur."], ["Echipare de vârf, kilometraj mic", "Climatizarea pe patru zone și sistemul de divertisment pentru bancheta spate sunt prezente chiar și pe ampatamentul standard, cu doar 18.000 km parcurși până acum."]]
    },
    'genesis-g90-long-wheelbase': {
        en: [["More power, less urgency", "This long-wheelbase car actually carries more power than the standard G90, 409 hp against 380, despite being built for the back seat."], ["The chauffeur-focused flagship", "The stretched wheelbase exists for one reason, rear legroom, putting this car against long-wheelbase S-Class and 7 Series, not standard executive sedans."], ["Rear compartment, fully equipped", "Executive rear seats with individual tablets make clear who this car was configured for, and it has covered only 15,000 km."]],
        ro: [["Mai multă putere, mai puțină grabă", "Această versiune cu ampatament lung are de fapt mai multă putere decât G90-ul standard, 409 CP față de 380, deși e gândită pentru bancheta din spate."], ["Limuzina gândită pentru călătoria cu șofer", "Ampatamentul prelungit există dintr-un singur motiv, spațiul pentru picioare în spate, situând această mașină alături de Clasa S și Seria 7 cu ampatament lung, nu de sedanurile executive standard."], ["Compartimentul spate, complet echipat", "Scaunele spate executive cu tablete individuale arată clar pentru cine a fost configurată această mașină, iar ea are la bord doar 15.000 km."]]
    },
    'genesis-gv60': {
        en: [["Dual motor, no drama", "Dual motors and a 77.4 kWh battery give confident, immediate response without chasing the performance model's more extreme numbers."], ["Genesis's first ground-up EV", "Built on a dedicated electric platform, not a converted combustion chassis, the GV60 is Genesis's first true ground-up EV."], ["Battery health, low mileage", "For an electric car, low mileage matters even more than usual, and this GV60 has covered only 12,000 km since new."]],
        ro: [["Două motoare, fără dramatism", "Cele două motoare electrice și bateria de 77,4 kWh oferă un răspuns imediat și sigur, fără să vâneze cifrele extreme ale versiunii de performanță."], ["Primul electric Genesis de la zero", "Construit pe o platformă electrică dedicată, nu pe un șasiu adaptat de la un model cu combustie, GV60 e primul electric Genesis gândit de la zero."], ["Sănătatea bateriei, kilometraj mic", "La o mașină electrică, kilometrajul mic contează și mai mult ca de obicei, iar acest GV60 are doar 12.000 km de la fabricație."]]
    },
    'genesis-gv70': {
        en: [["Diesel efficiency, sporty tune", "Sport suspension sharpens the handling of what is otherwise a torque-focused, efficiency-minded diesel SUV built for long distances."], ["The conventional choice", "Where the GV60 is Genesis's dedicated EV, the GV70 is the conventional combustion SUV aimed squarely at the X3 and GLC crowd."], ["Everyday miles, full warranty", "At 20,000 km, this GV70 has covered the kind of everyday distances the diesel engine was actually designed for, still under warranty."]],
        ro: [["Eficiență diesel, reglaj sportiv", "Suspensia sport ascute comportamentul unui SUV diesel altfel orientat spre cuplu și eficiență, construit pentru distanțe lungi."], ["Alegerea convențională", "Acolo unde GV60 e electricul dedicat al Genesis, GV70 e SUV-ul convențional cu combustie, îndreptat direct spre publicul X3 și GLC."], ["Kilometri de zi cu zi, garanție completă", "Cu 20.000 km parcurși, acest GV70 a acumulat exact genul de distanțe zilnice pentru care a fost gândit motorul diesel, încă în garanție."]]
    },
    'mercedes-s400d': {
        en: [["Diesel for distance", "The inline-six diesel trades outright power for the torque and range that suit long motorway journeys."], ["The distance-driver's S-Class", "Where the S580 chases effortless power, the S400d is built for owners who actually cover big yearly mileages."], ["Executive-line specification", "Fitted with the Executive line package, which leans the car toward rear-seat comfort rather than driver focus."]],
        ro: [["Diesel pentru distanțe lungi", "Motorul diesel în șase cilindri în linie renunță la putere brută în favoarea cuplului și autonomiei pe autostradă."], ["S-Class-ul pentru kilometraj mare", "Acolo unde S580 mizează pe putere livrată fără efort, S400d e gândit pentru proprietari care chiar acoperă mulți kilometri anual."], ["Pachet Executive Line", "Vine cu pachetul Executive Line, care înclină mașina spre confortul din spate, nu spre plăcerea șoferului."]]
    },
    'mercedes-e55-amg': {
        en: [["Supercharged, not turbocharged", "The Kompressor's belt-driven blower answers the throttle instantly, with none of a turbo's characteristic lag."], ["The last supercharged AMG", "Built in the final years before AMG retired the supercharger altogether, in favor of naturally aspirated, then turbocharged V8s."], ["Two decades, modest use", "145,000 km over nearly twenty years averages about 7,000 km a year, not a hard life."]],
        ro: [["Compresor, nu turbo", "Suflanta Kompressor, acționată prin curea, răspunde instant la accelerație, fără întârzierea specifică unui turbo."], ["Ultimul AMG cu compresor", "Construit în ultimii ani înainte ca AMG să renunțe definitiv la compresor, mai întâi pentru motoare aspirate natural, apoi turbo."], ["Două decenii, uzură moderată", "145.000 km în aproape douăzeci de ani înseamnă circa 7.000 km anual, nu o viață grea."]]
    },
    'mercedes-g65-amg': {
        en: [["Twelve cylinders, three diffs", "The biturbo V12 sends power through three locking differentials engineered for terrain, not lap times."], ["A discontinued combination", "This V12 and G-Class pairing ran for a limited span of years and has not been offered since."], ["Driven, not left idle", "65,000 km over about a decade is enough to show use, not so much it suggests it was worked hard."]],
        ro: [["Doisprezece cilindri, trei diferențiale", "V12-ul biturbo trimite puterea prin trei diferențiale blocabile, gândite pentru teren, nu pentru cronometru."], ["Combinație scoasă din producție", "Această pereche V12-Clasa G s-a fabricat doar câțiva ani și nu a mai fost oferită de atunci."], ["Folosit, nu neglijat", "65.000 km în aproape un deceniu arată o mașină folosită, dar nu suficient cât să fi fost solicitată intens."]]
    },
    'mercedes-c63-amg': {
        en: [["Naturally aspirated", "A 6.2-litre AMG V8 with immediate response, character and no artificial soundtrack."], ["Before the turbo era", "The last C63 generation built around a naturally aspirated V8, before AMG moved the badge to forced induction."], ["High miles, simple mechanicals", "125,000 km is high mileage, but this generation's naturally aspirated V8 has no turbos or hybrid components to wear."]],
        ro: [["Aspirație naturală", "Un V8 AMG de 6.2 litri cu răspuns imediat, caracter propriu și fără sonorizare artificială."], ["Înainte de era turbo", "Ultima generație C63 construită în jurul unui V8 aspirat natural, înainte ca AMG să mute totul spre supraalimentare."], ["Kilometraj mare, mecanică simplă", "125.000 km înseamnă rulaj mare, dar V8-ul aspirat natural al acestei generații nu are turbo sau componente hibride care să se uzeze."]]
    },
    'mercedes-c43-amg': {
        en: [["All-weather AMG power", "Four-wheel drive puts the V6's power down in wet and cold conditions that would have the C63 spinning up."], ["The everyday AMG", "Positioned as AMG's accessible performance model, built for daily use rather than outright track-focused power."], ["Barely run in", "22,000 km on a 2023 car means most of its service life and warranty are still ahead."]],
        ro: [["Putere AMG, orice vreme", "Tracțiunea integrală pune la sol puterea V6-ului în condiții de umezeală și frig în care C63 ar patina."], ["AMG-ul cotidian", "Poziționat ca model AMG accesibil, gândit pentru uz zilnic, nu pentru performanță pură de circuit."], ["Abia rodat", "22.000 km pe o mașină din 2023 înseamnă că cea mai mare parte din durata de viață și garanție sunt încă înainte."]]
    },
    'mercedes-cls63-amg': {
        en: [["Turbocharged torque, early", "The biturbo V8 makes its power lower in the rev range than the naturally aspirated C63 of the same period."], ["Four-door coupe pioneer", "CLS created the four-door coupe shape in 2004; this is AMG's most powerful take on that idea."], ["Gently covered ground", "135,000 km over fourteen years works out to under 10,000 km a year, closer to gentle use than abuse."]],
        ro: [["Cuplu turbo, timpuriu", "V8-ul biturbo livrează puterea la turații mai joase decât V8-ul aspirat natural din C63 al aceleiași perioade."], ["Pionierul segmentului coupe", "CLS a creat conceptul de coupe cu patru uși în 2004; acesta e cel mai puternic AMG din acea gamă."], ["Kilometri parcurși cu blândețe", "135.000 km în paisprezece ani înseamnă sub 10.000 km anual, mai aproape de utilizare blândă decât de abuz."]]
    },
    'mercedes-s63-smg': {
        en: [["Shared AMG engine architecture", "Powered by the same naturally aspirated 6.2-litre V8 used in the C63, in a full-size luxury body."], ["Rear-drive, before 4MATIC", "Unlike its 4MATIC S-Class siblings, this earlier generation sends all of its power to the rear wheels alone."], ["Highest mileage, lowest price", "The most-driven car in this range, priced accordingly — a way into flagship AMG performance under €30,000."]],
        ro: [["Același motor ca C63", "Folosește același V8 aspirat natural de 6.2 litri ca C63, într-o caroserie de lux de dimensiuni mari."], ["Doar pe puntea spate", "Spre deosebire de surorile 4MATIC din gamă, această generație trimite toată puterea doar către roțile spate."], ["Rulaj maxim, preț minim", "Cea mai rulată mașină din gamă, la preț pe măsură — o intrare în performanța AMG de top sub 30.000 €."]]
    },
    'bmw-x5': {
        en: [["Torque built for towing", "The diesel inline-six is tuned for pulling power and long-distance cruising rather than outright speed."], ["The original sport-SUV", "BMW's first SUV effort in 1999 helped define the sport-utility segment that every rival now competes in."], ["Sport looks, diesel heart", "Wears the M Sport styling package without the M model's higher running costs or firmer ride."]],
        ro: [["Cuplu gândit pentru remorcare", "Motorul diesel în șase cilindri e calibrat pentru forță de tracțiune și croazieră la distanță, nu pentru viteză."], ["Pionierul segmentului SUV", "Primul SUV BMW, lansat în 1999, a ajutat la definirea segmentului sport-utilitar în care concurează azi toți rivalii."], ["Aspect sportiv, inimă diesel", "Poartă pachetul estetic M Sport fără costurile de întreținere mai mari sau suspensia mai fermă a unui model M adevărat."]]
    },
    'bmw-m6': {
        en: [["Turbo torque, GT manners", "The twin-turbo V8's low-end torque suits fast, relaxed cross-country driving more than a raw track focus."], ["BMW's grand tourer", "Built as a big, luxurious coupe for covering ground quickly, not as a stripped-out track special."], ["Standard carbon roof", "The carbon fiber roof panel lowers the car's center of gravity, a factory M engineering touch for this generation."]],
        ro: [["Cuplu turbo, maniere GT", "Cuplul de jos al V8-ului biturbo se potrivește condusului rapid și relaxat pe distanțe lungi, nu circuitului brut."], ["Grand tourer-ul BMW", "Construit ca un coupe mare și luxos pentru parcurs distanțe rapid, nu ca o mașină de circuit epurată."], ["Plafon carbon de serie", "Plafonul din fibră de carbon coboară centrul de greutate, o soluție de inginerie M specifică acestei generații."]]
    },
    'bmw-x6': {
        en: [["More power than X5", "The same diesel platform tuned to 340 hp, enough to offset the coupe roofline's extra weight and drag."], ["The coupe-SUV pioneer", "BMW coined the 'Sports Activity Coupe' label in 2008, a shape every premium rival has since copied."], ["Understated color, low mileage", "A dark, understated color choice tempers the shape's boldness, on a car with light use for its age."]],
        ro: [["Peste puterea X5-ului", "Aceeași platformă diesel calibrată la 340 CP, suficient cât să compenseze greutatea și rezistența aerodinamică suplimentară a caroseriei coupe."], ["Pionierul SUV-coupe", "BMW a inventat eticheta „Sports Activity Coupe” în 2008, o formă copiată de atunci de toți rivalii premium."], ["Culoare discretă, rulaj redus", "O culoare închisă și discretă temperează îndrăzneala caroseriei, pe o mașină cu uzură redusă pentru vârsta ei."]]
    },
    'bmw-m5': {
        en: [["Race-bred throttle response", "Individual throttle bodies and a free-revving V10 give a throttle response no turbocharged M car since has matched."], ["The only V10 M5", "BMW has never repeated the V10 layout in an M5, before or since — this generation stands alone."], ["High miles, modest price", "175,000 km over nineteen years reflects genuine use, and puts V10 ownership within reach at a modest price."]],
        ro: [["Răspuns de curse", "Corpurile de clapetă individuale și un V10 turat înalt oferă un răspuns pe care niciun M turbo de azi nu-l egalează."], ["Singurul M5 cu V10", "BMW nu a mai repetat niciodată configurația V10 la M5, nici înainte, nici după — această generație rămâne unică."], ["Rulaj mare, preț modest", "175.000 km în nouăsprezece ani reflectă o utilizare reală și fac accesibilă proprietatea asupra unui V10 la preț rezonabil."]]
    },
    'bmw-m8': {
        en: [["AWD grip advantage", "M xDrive puts 600 hp down without the wheelspin a rear-drive M car would show under hard acceleration."], ["Decades-delayed flagship", "BMW prototyped an M8 in the early 1990s but never sold it; this generation is the first to reach production."], ["The least driven", "At 18,000 km, this is the lowest-mileage M car in the range, its carbon ceramic brakes barely broken in."]],
        ro: [["Avantajul tracțiunii integrale", "M xDrive trimite cei 600 CP la sol fără patinarea pe care un M cu tracțiune spate ar arăta-o la accelerații puternice."], ["Vârf întârziat cu decenii", "BMW a construit prototipuri M8 la începutul anilor '90, dar nu le-a vândut niciodată; această generație e prima ajunsă în producție."], ["Cel mai puțin rulat", "La 18.000 km, este mașina M cu cel mai mic rulaj din gamă, cu frânele ceramice-carbon aproape nerodate."]]
    },
    'bmw-m3': {
        en: [["High-revving, naturally aspirated", "No turbo and individually fed throttle bodies mean the V8 answers the pedal instantly, all the way to redline."], ["The only V8 M3", "Every M3 generation before and after this one used a six-cylinder engine; only the E92 got a V8."], ["Sixteen years, honest wear", "145,000 km over sixteen years is real use on a high-revving engine built to be driven hard, not babied."]],
        ro: [["Turații înalte, aspirație naturală", "Fără turbo și cu corpuri de clapetă individuale, V8-ul răspunde instant la pedală, până aproape de linia roșie."], ["Singurul M3 cu V8", "Orice altă generație M3, înainte sau după aceasta, a folosit un motor în șase cilindri; doar E92 a primit V8."], ["Șaisprezece ani, uzură cinstită", "145.000 km în șaisprezece ani înseamnă utilizare reală pe un motor turat înalt, construit ca să fie condus, nu menajat."]]
    },
    'corvette-z51': {
        en: [["The track-ready hardware", "The Z51 package adds a limited-slip differential, extra brake cooling and firmer suspension tuning that the base C8 does without."], ["The performance-first trim", "The standard C8 here is set up for the street; this Z51 adds hardware built with track days in mind."], ["The lowest mileage here", "At 12,000 km, this Z51 has covered less distance than either other Corvette in this collection, still under a 36-month warranty."]],
        ro: [["Hardware pregătit de pistă", "Pachetul Z51 adaugă diferențial cu alunecare limitată, răcire suplimentară la frâne și o suspensie mai fermă, pe care C8 de bază nu le are."], ["Varianta axată pe performanță", "C8-ul standard din colecție este gândit pentru stradă; acest Z51 vine cu hardware construit cu gândul la zilele de pistă."], ["Cel mai redus kilometraj", "Cu 12.000 km, acest Z51 a parcurs mai puțin decât oricare alt Corvette din colecție, tot sub o garanție de 36 de luni."]]
    },
    'corvette-c8': {
        en: [["Engine behind the seats", "Moving the V8 behind the cabin shifts weight to the rear axle, changing how the car turns in and puts down power."], ["The first mid-engine Corvette", "This generation broke decades of front-engine Corvette tradition, moving the V8 behind the driver for the first time."], ["Same power, lower price", "This C8 makes the same 495 hp as the Z51 in this collection but costs less, skipping the track-focused hardware."]],
        ro: [["Motorul din spatele scaunelor", "Mutarea V8-ului în spatele habitaclului deplasează greutatea spre puntea din spate, schimbând felul în care mașina intră în viraj și transmite puterea la sol."], ["Primul Corvette central", "Această generație rupe cu zeci de ani de tradiție a Corvette-urilor cu motor în față, mutând V8-ul în spatele șoferului pentru prima dată."], ["Aceeași putere, preț mic", "Acest C8 dezvoltă aceeași putere de 495 CP ca Z51 din colecție, dar costă mai puțin, fără hardware-ul dedicat pistei."]]
    },
    'corvette-stingray-c7': {
        en: [["Old-school weight transfer", "With the V8 up front, weight shifts rearward under hard acceleration, the way Corvettes drove for six decades before the C8."], ["The last front-engine Corvette", "This is the final Corvette generation before the switch to a mid-engine layout, the traditional format in its last iteration."], ["A decade of use", "As the most affordable Corvette in this collection, its higher mileage simply reflects a decade of use since 2016."]],
        ro: [["Transfer de masă clasic", "Cu V8-ul în față, greutatea se deplasează spre spate la accelerații puternice, exact cum se întâmpla la Corvette-uri timp de șase decenii, înainte de C8."], ["Ultima generație clasică", "Acesta este ultimul Corvette dinaintea trecerii la motorul central, formatul tradițional în ultima lui variantă."], ["Un deceniu de utilizare", "Fiind cel mai accesibil Corvette din colecție, kilometrajul mai mare reflectă pur și simplu un deceniu de utilizare, din 2016."]]
    },
    'koenigsegg-cc850': {
        en: [["A true manual gearbox", "Few hypercars still offer a clutch pedal and a stick; this one built its whole transmission around giving drivers that choice."], ["Retro tribute, modern hardware", "Its shape deliberately echoes Koenigsegg's first road car from two decades earlier, styled as a tribute rather than a clean-sheet design."], ["Barely broken in", "At 500 km, this CC850 has barely moved beyond a delivery drive, close to as new as a car this rare gets."]],
        ro: [["O cutie manuală reală", "Puține hypercar-uri mai oferă pedală de ambreiaj și manetă de viteze; acesta și-a construit toată transmisia în jurul acestei alegeri."], ["Omagiu retro, tehnică modernă", "Silueta reia intenționat liniile primului model rutier Koenigsegg, de acum două decenii, ca un omagiu, nu ca un design pornit de la zero."], ["Aproape nerulat", "Cu 500 km la bord, acest CC850 abia a depășit o cursă de livrare, aproape la fel de nou cum poate fi o mașină atât de rară."]]
    },
    'koenigsegg-gemera': {
        en: [["Direct drive, no gearbox", "Electric motors handle the front wheels directly while the engine drives the rear, so there is no conventional multi-speed transmission at all."], ["Room for four", "Almost every hypercar seats two; Gemera fits four adults, making it something closer to a family car with hypercar output."], ["Practically brand new", "With only 100 km recorded, this Gemera is barely broken in, closer to a delivery-mile car than a used one."]],
        ro: [["Fără cutie tradițională", "Motoarele electrice acționează direct roțile din față, iar motorul termic pune în mișcare puntea din spate, așa că nu există o transmisie clasică, cu mai multe trepte."], ["Loc pentru patru", "Aproape toate hypercar-urile au doar două locuri; Gemera are loc pentru patru adulți, apropiindu-se mai mult de o mașină de familie cu performanțe de hypercar."], ["Practic, mașină nouă", "Cu doar 100 km la bord, acest Gemera este abia rulat, mai aproape de o mașină de livrare decât de una folosită."]]
    },
    'koenigsegg-jesko-attack': {
        en: [["Any gear, directly", "The transmission can jump straight to any gear from any other, skipping the sequential shifting that conventional gearboxes are built around."], ["Downforce over top speed", "Where a sibling variant chases top speed, Attack trades that for a fixed wing and downforce built to hold a line."], ["Minimal mileage, full telemetry", "At 200 km, this Jesko Attack has hardly been driven, its telemetry system still waiting for a first real track day."]],
        ro: [["Orice treaptă, direct", "Transmisia poate trece direct în orice treaptă din oricare alta, fără schimbările secvențiale pe care se bazează cutiile clasice."], ["Apăsare aerodinamică, nu doar viteză", "Acolo unde o variantă înrudită vânează viteza maximă, Attack renunță la asta pentru o aripă fixă și o forță de apăsare menite să țină mașina pe traiectorie."], ["Kilometraj minim, telemetrie completă", "Cu 200 km la bord, acest Jesko Attack a fost abia folosit, sistemul de telemetrie așteptând încă prima zi reală de pistă."]]
    },
    'porsche-taycan': {
        en: [["Built around 800 volts", "Porsche built the Taycan around 800-volt architecture ahead of most rivals, meaning faster charging and less power loss under repeated hard use."], ["Porsche's first electric", "The Taycan was Porsche's first series-production EV, built to prove the brand's driving feel could survive the switch to batteries."], ["Light annual use", "10,000 km since 2023 works out to roughly 3,300 km a year, well below typical use, backed by a 48-month warranty."]],
        ro: [["Arhitectură de 800 volți", "Porsche a construit Taycan pe o arhitectură de 800 volți, înaintea majorității rivalilor, ceea ce înseamnă încărcare mai rapidă și pierderi mai mici la solicitare repetată."], ["Primul electric Porsche", "Taycan a fost primul model Porsche electric de serie, construit pentru a dovedi că senzația de condus a mărcii supraviețuiește trecerii la baterii."], ["Utilizare anuală redusă", "10.000 km din 2023 înseamnă aproximativ 3.300 km pe an, mult sub media obișnuită, cu o garanție de 48 de luni în spate."]]
    },
    'porsche-turbo-s-cross': {
        en: [["The practical Taycan", "The Cross Turismo's raised wagon roofline adds headroom and cargo space over the standard Taycan without softening the sport-tuned chassis."], ["Beyond the sedan", "Cross Turismo extends the Taycan formula into a raised, load-friendly wagon body, with none of a coupe roofline's compromises in the back."], ["Low use since new", "8,000 km since 2023 is a light load for a car this capable, leaving most of its service life still ahead."]],
        ro: [["Taycan-ul practic", "Acoperișul înălțat de tip break al variantei Cross Turismo adaugă spațiu pentru cap și portbagaj față de Taycan-ul standard, fără să înmoaie șasiul sport."], ["Dincolo de berlină", "Cross Turismo extinde formula Taycan într-o caroserie de tip break, mai înaltă și practică la încărcare, fără compromisurile unui acoperiș de tip coupé pe bancheta din spate."], ["Puțin folosită de nouă", "8.000 km din 2023 înseamnă o solicitare redusă pentru o mașină atât de capabilă, cu cea mai mare parte din durata de viață încă înainte."]]
    },
    'porsche-boxster-718': {
        en: [["Open-top, mid-engine balance", "The soft top folds away for open-air driving without moving the flat-four from its mid-chassis position, so handling balance doesn't change."], ["The roadster half", "Boxster is the open-top half of the 718 pair, built for drivers who want a mid-engine Porsche with the roof down."], ["Driven, not stored", "15,000 km since 2023 shows a car that has been used regularly rather than kept purely for display."]],
        ro: [["Plafon jos, motor central", "Plafonul textil se retrage pentru condus la aer liber fără să mute motorul boxer din poziția centrală, așa că echilibrul mașinii rămâne neschimbat."], ["Jumătatea decapotabilă", "Boxster este jumătatea decapotabilă a perechii 718, gândită pentru cei care vor un Porsche cu motor central și plafonul lăsat jos."], ["Condusă, nu depozitată", "15.000 km din 2023 arată o mașină folosită constant, nu una păstrată doar pentru expunere."]]
    },
    'porsche-cayman': {
        en: [["Stiffer shell, sharper turn-in", "The fixed roof adds rigidity a soft-top can't match, and the extra displacement over the Boxster brings 50 hp more."], ["The coupe half", "Cayman is the fixed-roof half of the 718 pair, long regarded by driving enthusiasts as the more focused of the two chassis."], ["Second-car mileage", "12,000 km since 2023 averages out to light annual use, closer to a weekend car than a daily driver."]],
        ro: [["Caroserie rigidă, viraje precise", "Plafonul fix adaugă o rigiditate pe care o decapotabilă n-o poate egala, iar cilindreea mai mare față de Boxster aduce cu 50 CP în plus."], ["Jumătatea cu plafon fix", "Cayman este jumătatea cu plafon fix a perechii 718, considerată de multă vreme de pasionați drept șasiul mai riguros dintre cele două."], ["Kilometraj de mașină secundară", "12.000 km din 2023 înseamnă o utilizare anuală redusă, mai degrabă de mașină de weekend decât de mașină de zi cu zi."]]
    }
};


// Fraza de sub titlul de incheiere. Inainte, 53 din 55 primeau acelasi rand
// generat din date ("Un automobil ales pentru proportii, specificatie si felul
// in care se simte dincolo de fisa tehnica"), adica exact senzatia de text
// turnat pe banda. Fiecare masina are acum o invitatie proprie: ce merita
// verificat sau simtit anume la ea, nu o formula.
const finalNotes = {
    'tesla-model-x': [
        "Come and open the falcon doors in a normal parking space, then decide about the third row for yourself.",
        "Vino să deschizi ușile falcon într-un loc normal de parcare, apoi hotărăște singur în privința rândului trei."
    ],
    'tesla-model-y': [
        "Bring the child seats and the weekly shopping. This one answers questions no spec sheet gets asked.",
        "Adu scaunele de copil și cumpărăturile de o săptămână. Aici se răspunde la întrebări pe care fișa tehnică nu le primește."
    ],
    'tesla-model-s': [
        "Worth feeling how the acceleration arrives without sound, and how little of it reaches the cabin.",
        "Merită simțit cum vine accelerația fără sunet și cât de puțin din ea ajunge în habitaclu."
    ],
    'mercedes-s580': [
        "We will confirm the specification, answer the difficult questions and arrange a focused viewing.",
        "Confirmăm specificația, răspundem la întrebările incomode și programăm o vizionare fără grabă."
    ],
    'mercedes-s400d': [
        "Ask for the long test drive. This is a car that shows its argument after the first hundred kilometres.",
        "Cere proba lungă. E o mașină care își arată argumentul abia după prima sută de kilometri."
    ],
    'mercedes-e55-amg': [
        "Come and hear the supercharger under load, and check the history of a car this age deserves.",
        "Vino să auzi compresorul în sarcină și să verifici istoricul pe care o mașină de vârsta asta îl merită."
    ],
    'mercedes-g65-amg': [
        "Sit inside before you judge the numbers. Everything about this car is a deliberate excess.",
        "Urcă înăuntru înainte să judeci cifrele. Totul la mașina asta e un exces asumat."
    ],
    'mercedes-c63-amg': [
        "Start it cold, in a quiet street. That is the part no photograph carries.",
        "Pornește-o la rece, pe o stradă liniștită. Aia e partea pe care nicio fotografie nu o duce mai departe."
    ],
    'mercedes-c43-amg': [
        "Drive it in traffic first. The point of this one is how little effort it asks day to day.",
        "Condu-o întâi prin trafic. Rostul ei e cât de puțin efort cere zi de zi."
    ],
    'mercedes-cls63-amg': [
        "Check the rear headroom yourself, then decide whether the shape was worth the compromise.",
        "Verifică singur spațiul deasupra capului în spate, apoi hotărăște dacă forma a meritat compromisul."
    ],
    'mercedes-s63-smg': [
        "The mileage is high and the price reflects it. Come and see what that actually bought.",
        "Kilometrajul e mare și prețul o arată. Vino să vezi ce a însemnat asta de fapt."
    ],
    'audi-r8': [
        "Ask us to start it in the enclosed space. The V10 makes its case before the road does.",
        "Cere-ne să o pornim în spațiu închis. V10-ul își pledează cauza înainte să o facă drumul."
    ],
    'audi-q3': [
        "Bring what you carry weekly. The question here is whether the size actually fits your life.",
        "Adu ce cari săptămânal. Întrebarea aici e dacă dimensiunea chiar se potrivește vieții tale."
    ],
    'audi-q7': [
        "Come with the whole family. The third row is either enough for you or it is not.",
        "Vino cu toată familia. Rândul trei ori îți ajunge, ori nu."
    ],
    'audi-rs4': [
        "Load the boot, then drive it. That contradiction is the entire reason this car exists.",
        "Umple portbagajul, apoi condu-o. Contradicția asta e tot motivul pentru care mașina există."
    ],
    'audi-rs5': [
        "Take it on a longer road than a test drive usually allows. Ask us and we will arrange it.",
        "Ia-o pe un drum mai lung decât permite de obicei o probă. Spune-ne și organizăm."
    ],
    'audi-rsq8': [
        "Worth driving back to back with something lower. The comparison is what makes the point.",
        "Merită condusă imediat după ceva mai jos. Comparația e cea care lămurește."
    ],
    'porsche-911-turbo-s': [
        "Drive it slowly first. How ordinary it feels at low speed is the surprising part.",
        "Condu-o întâi încet. Cât de obișnuită pare la viteză mică e partea surprinzătoare."
    ],
    'porsche-918-spyder': [
        "Viewings are arranged privately, with the full history available before you travel.",
        "Vizionările se fac privat, cu tot istoricul disponibil înainte să te deplasezi."
    ],
    'porsche-taycan': [
        "Come and check the charging routine against your week, not against a brochure figure.",
        "Vino să verifici rutina de încărcare față de săptămâna ta, nu față de o cifră din broșură."
    ],
    'porsche-turbo-s-cross': [
        "Bring the dog, the skis, whatever normally rules a car out. That is the test here.",
        "Adu câinele, schiurile, orice exclude de obicei o mașină. Ăsta e testul aici."
    ],
    'porsche-boxster-718': [
        "Ask for a day with the roof down. A roadster is not decided in twenty minutes.",
        "Cere o zi cu plafonul jos. Un roadster nu se hotărăște în douăzeci de minute."
    ],
    'porsche-cayman': [
        "Drive it on a road with corners. On a straight line it tells you almost nothing.",
        "Condu-o pe un drum cu viraje. În linie dreaptă nu-ți spune aproape nimic."
    ],
    'lotus-emira': [
        "Cars like this stop being made. Come and understand why before the decision gets easier.",
        "Mașinile ca asta nu se mai fac. Vino să înțelegi de ce, înainte ca decizia să devină ușoară."
    ],
    'lotus-seletre': [
        "Come and see how much Lotus survived the move to electric. That is the real question.",
        "Vino să vezi cât din Lotus a supraviețuit trecerii la electric. Aia e întrebarea adevărată."
    ],
    'lotus-elise': [
        "Get in and out a few times before you commit. That, honestly, is the hardest part.",
        "Urcă și coboară de câteva ori înainte să te decizi. Aia e, sincer, partea cea mai grea."
    ],
    'lexus-es': [
        "Drive it over bad tarmac. Refinement is easiest to judge where other cars get noisy.",
        "Condu-o pe asfalt prost. Rafinamentul se judecă cel mai ușor acolo unde alte mașini devin zgomotoase."
    ],
    'lexus-is': [
        "Worth driving before you compare it on paper. This one reads better through the wheel.",
        "Merită condusă înainte să o compari pe hârtie. Asta se citește mai bine prin volan."
    ],
    'lexus-lc': [
        "Come and look at it in daylight. Photographs consistently fail this particular shape.",
        "Vino să o vezi la lumină naturală. Fotografiile ratează constant exact forma asta."
    ],
    'lexus-lfa': [
        "Viewings are by appointment, with full documentation prepared before you arrive.",
        "Vizionările se fac pe bază de programare, cu documentația completă pregătită înainte să ajungi."
    ],
    'lexus-lx': [
        "Ask what it has actually done. On this model that history matters more than the mileage.",
        "Întreabă ce a făcut efectiv. La modelul ăsta istoricul contează mai mult decât kilometrajul."
    ],
    'lexus-uxh': [
        "Try it on your own commute. A city car is only ever judged on a real route.",
        "Încearc-o pe drumul tău zilnic. O mașină de oraș se judecă doar pe un traseu real."
    ],
    'alfa-romeo-4c': [
        "Sit in it before anything else. The carbon tub decides this purchase, one way or the other.",
        "Așază-te în ea înainte de orice. Cuva de carbon decide achiziția asta, într-un fel sau altul."
    ],
    'alfa-romeo-33-stradale': [
        "Enquiries are handled privately, with provenance confirmed before any viewing is arranged.",
        "Solicitările se tratează privat, cu proveniența confirmată înainte de orice vizionare."
    ],
    'alfa-romeo-giulia': [
        "Drive it and a German saloon on the same road, same day. That is the honest comparison.",
        "Condu-o pe același drum, în aceeași zi, cu o berlină germană. Aia e comparația onestă."
    ],
    'alfa-romeo-tonale': [
        "Come and check whether the character survived the practicality. It usually does not.",
        "Vino să verifici dacă a supraviețuit caracterul sub practicitate. De obicei nu supraviețuiește."
    ],
    'alfa-romeo-stelvio': [
        "Take it somewhere with corners, not just a car park. That is where it separates itself.",
        "Du-o undeva cu viraje, nu doar într-o parcare. Acolo se desparte de restul."
    ],
    'genesis-g70-shooting-brake': [
        "Come and see it in person. This body style is far rarer here than the numbers suggest.",
        "Vino să o vezi pe viu. Caroseria asta e mult mai rară pe la noi decât sugerează cifrele."
    ],
    'genesis-g80': [
        "Compare it against the badge you were going to buy. That comparison is the whole argument.",
        "Compar-o cu emblema pe care urma să o cumperi. Comparația aia e tot argumentul."
    ],
    'genesis-g90': [
        "Sit in the back before you sit in the front. This car was designed in that order.",
        "Așază-te în spate înainte să te așezi în față. Mașina asta a fost gândită în ordinea aia."
    ],
    'genesis-g90-long-wheelbase': [
        "Bring whoever normally sits behind you. Their verdict matters more than yours here.",
        "Adu-l pe cine stă de obicei în spatele tău. Verdictul lui contează mai mult decât al tău aici."
    ],
    'genesis-gv60': [
        "Come and check the charging and the cabin together. On an EV they are one decision.",
        "Vino să verifici încărcarea și habitaclul împreună. La un electric sunt o singură decizie."
    ],
    'genesis-gv70': [
        "Bring the family and the luggage you actually travel with, not the amount you hope for.",
        "Adu familia și bagajul cu care chiar călătorești, nu cât speri că îți trebuie."
    ],
    'bmw-x5': [
        "Drive it before the newer rivals. It explains why the whole category exists.",
        "Condu-o înaintea rivalelor mai noi. Explică de ce există toată categoria."
    ],
    'bmw-m6': [
        "Ask for a long road rather than a short lap. This one is a grand tourer first.",
        "Cere un drum lung, nu o tură scurtă. Asta e în primul rând un grand tourer."
    ],
    'bmw-x6': [
        "Look at it in person before you decide. Very few people are neutral about this shape.",
        "Vezi-o pe viu înainte să te decizi. Foarte puțini rămân neutri în fața formei ăsteia."
    ],
    'bmw-m5': [
        "Take it past four thousand revs, once. That is the entire reason to choose this generation.",
        "Du-o o dată peste patru mii de rotații pe minut. Ăsta e tot motivul pentru care alegi generația asta."
    ],
    'bmw-m8': [
        "Worth driving in both modes, back to back. It is really two cars sharing one body.",
        "Merită condusă în ambele moduri, unul după altul. Sunt de fapt două mașini într-o singură caroserie."
    ],
    'bmw-m3': [
        "Come and hear it before the market decides what this generation is worth.",
        "Vino să o auzi înainte ca piața să hotărască cât valorează generația asta."
    ],
    'corvette-z51': [
        "Ask about the setup before you drive it. On this trim the details change the car.",
        "Întreabă de reglaje înainte să o conduci. La versiunea asta detaliile schimbă mașina."
    ],
    'corvette-c8': [
        "Sit in it first. The driving position is the part that surprises people who know the older ones.",
        "Așază-te întâi în ea. Poziția la volan e ce îi surprinde pe cei care le știu pe cele vechi."
    ],
    'corvette-stingray-c7': [
        "Drive it while cars like this are still ordinary to find. That window is closing.",
        "Condu-o cât mașinile ca ea se mai găsesc ușor. Aceste modele devin tot mai rare."
    ],
    'koenigsegg-cc850': [
        "Enquiries are private. The gearbox alone justifies making the trip to see it.",
        "Solicitările sunt private. Doar cutia de viteze justifică drumul până la ea."
    ],
    'koenigsegg-gemera': [
        "Bring three passengers. That sentence is not usually possible with a car like this.",
        "Adu trei pasageri. Puține mașini cu asemenea performanțe oferă această posibilitate."
    ],
    'koenigsegg-jesko-attack': [
        "Viewings are arranged privately, with specification and delivery confirmed in advance.",
        "Vizionările se fac privat, cu configurația și livrarea confirmate din timp."
    ]
};

function finalNoteFor(car, lang) {
    const line = finalNotes[car.id];
    return line ? line[lang === 'ro' ? 1 : 0] : null;
}

const state = { cars: {}, car: null, images: [], imageIndex: 0, lang: 'en' };
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
}

function getLanguage() {
    try { return localStorage.getItem('carzone-lang') === 'ro' ? 'ro' : 'en'; }
    catch { return 'en'; }
}

function setLanguage(lang) {
    state.lang = lang === 'ro' ? 'ro' : 'en';
    document.documentElement.lang = state.lang;
    try { localStorage.setItem('carzone-lang', state.lang); } catch { /* storage can be unavailable */ }
    $$('[data-dossier-lang]').forEach((button) => {
        const active = button.dataset.dossierLang === state.lang;
        button.classList.toggle('active-lang', active);
        button.setAttribute('aria-pressed', String(active));
    });
    render();
}

function t(key) { return copy[state.lang][key] || copy.en[key] || key; }
function vehicleText(value, lang = state.lang) { return window.carzoneVehicleI18n.text(value, lang); }
function getEditorial() {
    const base = editorial[state.car.id]?.[state.lang] || genericEditorial(state.car, state.lang);
    // Motivele scrise de mana bat intotdeauna pe cele compuse din specs.
    const written = reasonsByCar[state.car.id]?.[state.lang];
    return written ? { ...base, reasons: written } : base;
}
function refFor(car) { return `CZ / ${String(car.year).slice(-2)} / ${car.id.toUpperCase().replaceAll('-', ' ')}`; }
function formatKm(km) { return new Intl.NumberFormat(state.lang === 'ro' ? 'ro-RO' : 'en-GB').format(Number(km) || 0) + ' km'; }

// Pragul de la care o masina primeste tratamentul signature. Nu un id, ci
// cantitatea de media pe care o are efectiv: o galerie proprie, sau un model 3D.
const SIGNATURE_MIN_IMAGES = 8;

function isSignatureCar(car, images) {
    return images.length >= SIGNATURE_MIN_IMAGES || Boolean(car.sketchfab);
}

function resolveImages(car) {
    if (Array.isArray(car.images) && car.images.length) return [...new Set(car.images)];
    if (car.id === 'mercedes-s580') return Array.from({ length: 14 }, (_, index) => `assets/img/s/${index + 1}.jpg`);
    return [car.image].filter(Boolean);
}

function updateStaticCopy() {
    document.documentElement.lang = state.lang;
    $$('[data-copy]').forEach((node) => { node.textContent = t(node.dataset.copy); });
    $$('[data-dossier-lang]').forEach(button => {
        const active = button.dataset.dossierLang === state.lang;
        button.classList.toggle('active-lang', active);
        button.setAttribute('aria-pressed', String(active));
    });
    const labels = { '.dossier-nav':'navigation', '.nav__logo':'homeLabel', '.nav__lang':'languageLabel', '#nav-toggle':'openMenu', '#nav-close':'closeMenu', '#gallery-prev':'previousImage', '#gallery-next':'nextImage', '#gallery-rail':'thumbnails', '.dossier-purchase':'summary' };
    Object.entries(labels).forEach(([selector, key]) => $(selector)?.setAttribute('aria-label', t(key)));
    const text = { '.skip-link':'skip', '#dossier-loading p':'preparing', '#dossier-error h1':'missingVehicle', '#dossier-error a':'backInventory' };
    Object.entries(text).forEach(([selector, key]) => { const node = $(selector); if (node) node.textContent = t(key); });
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('description'));
}

// Camera 3D: iframe-ul se creeaza la primul click si se distruge la inchidere.
// Cat timp e inchisa, nu exista nicio cerere catre Sketchfab — nici la
// incarcarea paginii, nici in fundal.

// Ce spune sectiunea 3D despre fiecare masina. Nu "avem model 3D", ci ce merita
// privit umbland in jurul ei. Fara intrare aici, se compune una din date.
const roomCopy = {
    'mercedes-s580': [
        'The S-Class hides its size in its proportions. From above the roofline you can see how little of the car announces itself.',
        'Clasa S își ascunde dimensiunile în proporții. Privită de sus, silueta își păstrează discreția.'
    ]
};

function roomCopyFor(car, lang) {
    const line = roomCopy[car.id];
    if (line) return line[lang === 'ro' ? 1 : 0];
    const name = `${car.make} ${car.model}`;
    return lang === 'ro'
        ? `Explorează ${name} din orice unghi: proporțiile, postura și detaliile pe care o singură fotografie nu le poate surprinde.`
        : `Explore ${name} from every angle: the proportions, the stance and the details a single photograph cannot hold.`;
}

// Sectiunea 3D exista doar daca masina are model. Posterul e prima poza din
// galerie, ca butonul sa arate masina, nu o caseta goala.
function renderRoom() {
    const section = $('#dossier-room');
    if (!section) return;
    const has = Boolean(state.car.sketchfab);
    section.hidden = !has;
    if (!has) return;
    $('#room-copy').textContent = roomCopyFor(state.car, state.lang);
    const poster = $('#room-poster');
    poster.src = state.images[0] || state.car.image || '';
    poster.alt = '';
    closeSignatureRoom();
}

function openSignatureRoom() {
    const viewer = $('#signature-viewer');
    if (!viewer || !state.car.sketchfab) return;
    if (!viewer.firstChild) {
        const frame = element('iframe');
        frame.src = state.car.sketchfab;
        frame.title = `${state.car.make} ${state.car.model} — ${t('interactiveModel')}`;
        frame.loading = 'lazy';
        frame.allow = 'autoplay; fullscreen; xr-spatial-tracking';
        frame.setAttribute('allowfullscreen', '');
        viewer.append(frame);
    }
    viewer.hidden = false;
    const button = $('#signature-3d-link');
    button.classList.add('is-open');
    button.setAttribute('aria-expanded', 'true');
    $('#signature-3d-label').textContent = t('closePrivateRoom');
}

function closeSignatureRoom() {
    const viewer = $('#signature-viewer');
    if (!viewer) return;
    viewer.hidden = true;
    // Golim iframe-ul, altfel modelul ramane sa se roteasca si sa consume
    // resurse dupa ce utilizatorul a inchis camera.
    viewer.replaceChildren();
    const button = $('#signature-3d-link');
    if (!button) return;
    button.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
    $('#signature-3d-label').textContent = t('enterPrivateRoom');
}

function toggleSignatureRoom() {
    const viewer = $('#signature-viewer');
    if (viewer && viewer.hidden) openSignatureRoom();
    else closeSignatureRoom();
}

// Faptele cheie se COMPUN din cars.json, nu se scriu de mana si nu se inventeaza.
// Un dealer real ar pune aici istoric de service si provenienta; noi nu avem asa
// ceva in date, asa ca spunem doar ce putem sustine: rulaj raportat la varsta,
// garantie, tractiune, culoare, prima inmatriculare.
function keyFactsFor(car, lang) {
    const ro = lang === 'ro';
    const facts = [];
    const nf = new Intl.NumberFormat(ro ? 'ro-RO' : 'en-GB');
    const km = Number(car.km) || 0;
    const year = Number(car.year) || 0;
    const age = Math.max(1, new Date().getFullYear() - year);
    const perYear = Math.round(km / age);

    if (km && year) {
        // Sub 3.000 km pe an inseamna o masina pastrata, nu folosita zilnic:
        // merita spus altfel decat un rulaj obisnuit.
        if (perYear < 3000) {
            facts.push(ro
                ? `Doar ${nf.format(km)} km de la înmatriculare, în ${year}`
                : `Only ${nf.format(km)} km since first registered in ${year}`);
        } else {
            facts.push(ro
                ? `${nf.format(km)} km în ${age} ani, aproximativ ${nf.format(perYear)} km pe an`
                : `${nf.format(km)} km over ${age} years, about ${nf.format(perYear)} km a year`);
        }
    }

    const technical = car.specs?.technical || {};
    const basic = car.specs?.basic || {};

    // Garantia si tractiunea sunt scrise englezeste in cars.json ("24-month
    // warranty", "RWD"). Pe versiunea romaneasca ar ramane fragmente in engleza
    // in mijlocul unei liste traduse, asa ca le rescriem aici.
    if (technical.Warranty) {
        facts.push(vehicleText(technical.Warranty, lang));
    }
    if (technical.Drivetrain) {
        const drive = technical.Drivetrain;
        // Denumirile de marca (4MATIC, quattro, xDrive) raman ca atare; doar
        // abrevierile seci primesc o forma citibila.
        const plain = ro
            ? { RWD: 'Tracțiune spate', FWD: 'Tracțiune față', AWD: 'Tracțiune integrală', '4WD': 'Tracțiune integrală', '4x4': 'Tracțiune integrală' }
            : { RWD: 'Rear-wheel drive', FWD: 'Front-wheel drive', AWD: 'All-wheel drive', '4WD': 'Four-wheel drive', '4x4': 'Four-wheel drive' };
        facts.push(plain[drive] || vehicleText(drive, lang));
    }
    if (technical.Color) {
        facts.push(ro ? `Culoare exterioară: ${vehicleText(technical.Color, lang)}` : `Finished in ${technical.Color}`);
    }
    if (basic['First registration']) {
        facts.push(ro
            ? `Prima înmatriculare ${basic['First registration']}`
            : `First registered ${basic['First registration']}`);
    }
    if (basic.VIN) {
        facts.push(ro ? `Serie de șasiu verificabilă: ${basic.VIN}` : `Chassis number on file: ${basic.VIN}`);
    }
    return facts.slice(0, 6);
}

function renderKeyFacts() {
    // id distinct: #key-facts era deja folosit de renderFacts pentru blocul
    // an / rulaj / combustibil / tractiune, iar cele doua se calcau.
    const root = $('#key-information');
    if (!root) return;
    root.replaceChildren(...keyFactsFor(state.car, state.lang).map((text) => element('li', '', text)));
}

function renderFacts() {
    const facts = [
        [t('year'), state.car.year],
        [t('mileage'), formatKm(state.car.km)],
        [t('fuel'), vehicleText(state.car.fuel)],
        [t('drivetrain'), vehicleText(state.car.specs?.technical?.Drivetrain || state.car.specs?.technical?.Gearbox || '—')]
    ];
    const root = $('#key-facts');
    root.replaceChildren(...facts.map(([label, value]) => {
        const dl = element('dl', 'dossier-fact');
        dl.append(element('dt', '', label), element('dd', '', String(value)));
        return dl;
    }));
}

function renderReasons(edit) {
    const root = $('#reason-cards');
    root.replaceChildren(...edit.reasons.map(([title, body], index) => {
        const article = element('article', 'dossier-reason reveal-block');
        article.append(
            element('span', 'dossier-reason__number', String(index + 1).padStart(2, '0')),
            element('h3', '', title),
            element('p', '', body)
        );
        return article;
    }));
}

// Pe signature reluam carusela din s580.html: o pista care gliseaza, cu
// slide-uri care pot fi si video. Pe restul treptelor ramane schimbul de src.
function usesCarousel() {
    return document.body.classList.contains('is-signature');
}

// Clipul intra ca ultim slide, ca in pagina originala, unde carusela amesteca
// fotografii si filmare. Fara clip, lista e identica cu cea de imagini.
function slideSources() {
    const slides = state.images.map((src) => ({ type: 'image', src }));
    if (state.car.video) slides.push({ type: 'video', src: state.car.video, poster: state.images[0] });
    return slides;
}

function renderCarousel() {
    const track = $('#gallery-track');
    const slides = slideSources();
    const carName = `${state.car.make} ${state.car.model}`;
    track.replaceChildren(...slides.map((slide, index) => {
        const cell = element('div', 'dossier-carousel__slide');
        if (slide.type === 'video') {
            const video = element('video');
            video.src = slide.src;
            video.poster = slide.poster || '';
            video.muted = true;
            video.loop = true;
            video.playsInline = true;
            video.preload = 'metadata';
            cell.append(video);
        } else {
            const img = element('img');
            img.src = slide.src;
            img.alt = `${carName} — ${t('photo')} ${index + 1}`;
            if (index > 0) img.loading = 'lazy';
            cell.append(img);
        }
        return cell;
    }));
    moveCarousel();
}

// Clipul ruleaza doar cat e pe ecran: altfel un slide ascuns tine banda ocupata.
function moveCarousel() {
    const track = $('#gallery-track');
    track.style.transform = `translateX(-${state.imageIndex * 100}%)`;
    $$('.dossier-carousel__slide video').forEach((video, index) => {
        const cell = video.closest('.dossier-carousel__slide');
        const active = Array.from(track.children).indexOf(cell) === state.imageIndex;
        if (active) video.play().catch(() => { /* posterul ramane suficient */ });
        else video.pause();
    });
}

function renderGallery() {
    const total = usesCarousel() ? slideSources().length : state.images.length;
    state.imageIndex = Math.min(state.imageIndex, total - 1);
    const carName = `${state.car.make} ${state.car.model}`;
    const carousel = usesCarousel();
    $('#gallery-track').hidden = !carousel;
    $('#gallery-main').hidden = carousel;
    $('#gallery-prev').hidden = !carousel || total < 2;
    if (carousel) {
        renderCarousel();
    } else {
        $('#gallery-main').src = state.images[state.imageIndex];
        $('#gallery-main').alt = `${carName} — ${t('photo')} ${state.imageIndex + 1}`;
    }
    $('#gallery-current').textContent = String(state.imageIndex + 1).padStart(2, '0');
    $('#gallery-total').textContent = `/ ${String(total).padStart(2, '0')}`;
    const rail = $('#gallery-rail');
    rail.replaceChildren(...slideSources().slice(0, carousel ? undefined : state.images.length).map((slide, index) => {
        const src = slide.type === 'video' ? (slide.poster || '') : slide.src;
        const button = element('button', `dossier-thumb${index === state.imageIndex ? ' is-active' : ''}`);
        button.type = 'button';
        button.setAttribute('aria-label', `${t('photo')} ${index + 1}`);
        const img = element('img');
        img.src = src;
        img.alt = '';
        img.loading = 'lazy';
        button.append(img);
        if (slide.type === 'video') button.classList.add('dossier-thumb--video');
        button.addEventListener('click', () => changeImage(index));
        return button;
    }));
    $('#gallery-next').hidden = total < 2;
}

function changeImage(nextIndex) {
    if (!state.images.length) return;
    const total = usesCarousel() ? slideSources().length : state.images.length;
    const settle = () => {
        $('#gallery-current').textContent = String(state.imageIndex + 1).padStart(2, '0');
        $$('.dossier-thumb').forEach((thumb, index) => thumb.classList.toggle('is-active', index === state.imageIndex));
        // Cu 15 cadre banda e de doua ori mai lata decat zona vizibila, asa ca
        // de pe la al saselea miniatura activa iesea din cadru si nu mai stiai
        // unde esti. O aducem inapoi in vizor la fiecare schimbare.
        const active = $('.dossier-thumb.is-active');
        const rail = $('#gallery-rail');
        if (active && rail) {
            // Masurat pe dreptunghiuri, nu pe offsetLeft: banda nu e pozitionata,
            // deci offsetLeft-ul miniaturii se raporteaza la body si da o tinta
            // complet gresita.
            const delta = active.getBoundingClientRect().left - rail.getBoundingClientRect().left;
            const target = rail.scrollLeft + delta - (rail.clientWidth - active.offsetWidth) / 2;
            rail.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
        }
    };
    if (usesCarousel()) {
        // pista gliseaza, deci nu mai e nevoie de stingerea si reaprinderea imaginii
        state.imageIndex = (nextIndex + total) % total;
        moveCarousel();
        settle();
        return;
    }
    const stage = $('.dossier-gallery__stage');
    stage.classList.add('is-changing');
    window.setTimeout(() => {
        state.imageIndex = (nextIndex + total) % total;
        const main = $('#gallery-main');
        main.src = state.images[state.imageIndex];
        main.alt = `${state.car.make} ${state.car.model} — ${t('photo')} ${state.imageIndex + 1}`;
        settle();
        stage.classList.remove('is-changing');
    }, 220);
}

function renderTrust() {
    const basic = state.car.specs?.basic || {};
    const technical = state.car.specs?.technical || {};
    const rows = [
        [t('reference'), refFor(state.car)],
        [t('vin'), basic.VIN || 'Available on request'],
        [t('firstRegistration'), basic['First registration'] || String(state.car.year)],
        [t('warranty'), technical.Warranty || 'Confirmed on consultation'],
        [t('colour'), technical.Color || '—']
    ];
    $('#trust-list').replaceChildren(...rows.map(([label, value]) => {
        const row = element('div', 'dossier-trust__row');
        row.append(element('dt', '', label), element('dd', '', vehicleText(value)));
        return row;
    }));
}

function accordionContent(key, value) {
    const content = element('div', 'dossier-accordion__content');
    if (Array.isArray(value)) {
        const list = element('ul', 'dossier-feature-list');
        value.forEach((item) => list.append(element('li', '', vehicleText(item))));
        content.append(list);
        return content;
    }
    const grid = element('div', 'dossier-spec-grid');
    Object.entries(value || {}).forEach(([label, item]) => {
        const row = element('div', 'dossier-spec-row');
        row.append(element('span', '', vehicleText(label)), element('span', '', ['Make', 'Model', 'model', 'VIN'].includes(label) ? String(item) : vehicleText(item)));
        grid.append(row);
    });
    content.append(grid);
    return content;
}

function renderAccordions() {
    const specs = state.car.specs || {};
    const ordered = ['basic', 'technical', 'performance', 'comfort', 'safety', 'technology', 'design'];
    const available = ordered.filter((key) => specs[key] && (Array.isArray(specs[key]) ? specs[key].length : Object.keys(specs[key]).length));
    $('#spec-accordions').replaceChildren(...available.map((key, index) => {
        const details = element('details', 'dossier-accordion');
        if (key === 'performance') details.open = true;
        const summary = element('summary');
        summary.append(
            element('span', 'dossier-accordion__number', String(index + 1).padStart(2, '0')),
            element('h3', '', t(key)),
            element('i', 'ri-add-line')
        );
        details.append(summary, accordionContent(key, specs[key]));
        return details;
    }));
}

// Pastrata pentru cazul in care sectiunea de masini inrudite revine.
function renderRelated() {
    if (!$('#related-cars')) return;
    const cars = Object.values(state.cars)
        .filter((car) => car.id !== state.car.id)
        .sort((a, b) => Number(b.make === state.car.make) - Number(a.make === state.car.make))
        .slice(0, 3);
    $('#related-cars').replaceChildren(...cars.map((car) => {
        const link = element('a', 'dossier-related-card reveal-block');
        link.href = `dossier.html?id=${encodeURIComponent(car.id)}`;
        const media = element('div', 'dossier-related-card__media');
        const img = element('img');
        img.src = resolveImages(car)[0] || car.image;
        img.alt = `${car.make} ${car.model}`;
        img.loading = 'lazy';
        media.append(img);
        const body = element('div', 'dossier-related-card__body');
        body.append(element('p', '', `${car.year} · ${vehicleText(car.fuel)}`), element('h3', '', `${car.make} ${car.model}`), element('strong', '', window.carzoneVehicleI18n.price(car.price, state.lang)));
        link.append(media, body);
        return link;
    }));
}

function setupReveal() {
    const nodes = $$('.reveal-block:not(.is-visible)');
    if (!('IntersectionObserver' in window)) {
        nodes.forEach((node) => node.classList.add('is-visible'));
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: .12, rootMargin: '0px 0px -30px' });
    nodes.forEach((node) => observer.observe(node));
}

// Fit the actual rendered type, not a guess based on character count. The
// natural CSS size is restored first so wider viewports can grow it again.
function fitHeroTitle() {
    const title = $('#hero-title');
    if (!title?.textContent || !title.clientWidth) return;
    title.style.removeProperty('font-size');
    const baseSize = parseFloat(getComputedStyle(title).fontSize);
    const range = document.createRange();
    range.selectNodeContents(title);
    const textWidth = range.getBoundingClientRect().width;
    const availableWidth = title.clientWidth - 2;
    if (textWidth > availableWidth) {
        title.style.fontSize = `${baseSize * availableWidth / textWidth}px`;
    }
}

function setupHeroTitle() {
    let lastWidth = 0;
    let frame;
    const scheduleFit = () => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(fitHeroTitle);
    };
    if ('ResizeObserver' in window) {
        const observer = new ResizeObserver(([entry]) => {
            if (entry.contentRect.width === lastWidth) return;
            lastWidth = entry.contentRect.width;
            scheduleFit();
        });
        observer.observe($('.dossier-hero__content'));
    } else {
        window.addEventListener('resize', scheduleFit, { passive: true });
    }
    document.fonts?.ready.then(scheduleFit);
    document.fonts?.addEventListener('loadingdone', scheduleFit);
}

function render() {
    if (!state.car) return;
    const edit = getEditorial();
    const fullName = `${state.car.make} ${state.car.model}`;
    const isSignature = isSignatureCar(state.car, state.images);
    const brandClass = `brand-${state.car.make.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
    [...document.body.classList]
        .filter((className) => className.startsWith('brand-'))
        .forEach((className) => document.body.classList.remove(className));
    document.body.classList.add(brandClass);
    document.body.classList.toggle('is-signature', isSignature);
    document.body.classList.toggle('is-standard', !isSignature);
    document.title = `${fullName} — ${t('dossier')}`;
    updateStaticCopy();
    $('#hero-image').src = state.images[0] || state.car.image;
    $('#hero-image').alt = fullName;
    const heroVideo = $('#hero-video');
    heroVideo.hidden = !isSignature;
    if (isSignature && state.car.video) {
        if (heroVideo.getAttribute('src') !== state.car.video) heroVideo.src = state.car.video;
        heroVideo.poster = state.images[0] || state.car.image;
        heroVideo.play().catch(() => { /* the poster remains a complete fallback */ });
    } else {
        heroVideo.pause();
        heroVideo.removeAttribute('src');
    }
    $('#hero-reference').textContent = refFor(state.car);
    $('#hero-tier').textContent = isSignature ? t('signatureTier') : t('available');
    $('#hero-kicker').textContent = edit.kicker;
    const heroTitle = $('#hero-title');
    heroTitle.setAttribute('aria-label', fullName);
    heroTitle.textContent = fullName;
    fitHeroTitle();
    $('#hero-statement').textContent = edit.statement;
    // Declaratia masinii inchide pagina in loc sa o intrerupa: pe banda de dupa
    // hero rupea ritmul, la final aduna. Inlocuieste randul generic despre
    // programarea vizionarii, care era acelasi pentru toate cele 55.
    const finalNote = $('#final-note');
    if (finalNote) finalNote.textContent = finalNoteFor(state.car, state.lang) || edit.statement;
    $('#hero-price').textContent = window.carzoneVehicleI18n.price(state.car.price, state.lang);
    $('#hero-power').textContent = vehicleText(state.car.power);
    $('#intro-heading').textContent = edit.heading;
    $('#intro-copy').textContent = edit.intro;
    $('#summary-price').textContent = window.carzoneVehicleI18n.price(state.car.price, state.lang);
    $('#mobile-price').textContent = window.carzoneVehicleI18n.price(state.car.price, state.lang);
    $('#final-heading').textContent = closingFor(state.car, state.lang) || edit.final;
    // Poza decupata de pe card, ca la .offer din index.html. Cade pe galerie
    // doar daca masina nu are imagine de lista.
    // Doar pozele de card sunt decupate pe fundal transparent. Fallback-ul
    // text-only ramane pentru date viitoare incomplete, dar inventarul curent
    // este validat astfel incat fiecare masina sa aiba propriul cutout.
    const finalCar = $('#final-car');
    const hasCutout = Boolean(state.car.image);
    const finalSection = $('.dossier-final');
    finalSection.classList.toggle('is-mirrored', hasCutout && facingRight.has(state.car.id));
    finalSection.classList.toggle('is-textonly', !hasCutout);
    finalCar.hidden = !hasCutout;
    finalCar.src = hasCutout ? state.car.image : '';
    finalCar.alt = hasCutout ? fullName : '';
    // Plafonul ramane legat de inaltimea naturala, acum la 1:1 deoarece toate
    // imaginile de card au surse 2x. Grupat intr-un if,
    // NU cu return: suntem in mijlocul lui render(), iar un return ar sari peste
    // galerie, motive si specificatii pentru exact cele doua masini fara decupaj.
    const capFromSource = () => {
        if (!finalCar.naturalHeight) return;
        const stretch = looseFraming.has(state.car.id) ? 1.0 : 1.0;
        finalCar.style.setProperty('--car-cap', `${Math.round(finalCar.naturalHeight * stretch)}px`);
    };
    if (hasCutout && finalCar.complete) capFromSource();
    else if (hasCutout) finalCar.addEventListener('load', capFromSource, { once: true });
    const signatureRoom = $('#signature-room');
    signatureRoom.hidden = !isSignature;
    if (isSignature) {
        $('#signature-main-image').src = state.images[4] || state.images[0];
        $('#signature-main-image').alt = `${fullName} — ${t('photo')} 5`;
        $('#signature-detail-image').src = state.images[10] || state.images[1] || state.images[0];
        $('#signature-detail-image').alt = `${fullName} — ${t('photo')} 11`;

    }
    renderRoom();
    renderKeyFacts();
    renderFacts();
    renderReasons(edit);
    renderGallery();
    renderTrust();
    renderAccordions();
    requestAnimationFrame(setupReveal);
}

async function init() {
    state.lang = getLanguage();
    updateStaticCopy();
    const id = new URLSearchParams(window.location.search).get('id') || 'mercedes-c63-amg';
    try {
        // Inventory data changes independently of this module. Avoid keeping an
        // older JSON response after a deployment, otherwise newly completed
        // dossiers can remain stuck in their legacy fallback until cache expiry.
        const response = await fetch('assets/data/cars.json', { cache: 'no-store' });
        if (!response.ok) throw new Error(`Inventory returned ${response.status}`);
        state.cars = await response.json();
        state.car = state.cars[id];
        if (!state.car) throw new Error('Unknown vehicle');
        state.images = resolveImages(state.car);
        $('#dossier-loading').hidden = true;
        $('#dossier-content').hidden = false;
        $('#mobile-cta').hidden = false;
        render();
        setupHeroTitle();
    } catch (error) {
        console.error('Car dossier failed to initialize.', error);
        $('#dossier-loading').hidden = true;
        $('#dossier-error').hidden = false;
    }
}

$$('[data-dossier-lang]').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.dossierLang)));
$('#gallery-next').addEventListener('click', () => changeImage(state.imageIndex + 1));
$('#gallery-prev').addEventListener('click', () => changeImage(state.imageIndex - 1));
$('#signature-3d-link').addEventListener('click', toggleSignatureRoom);
$$('[data-scroll]').forEach((button) => button.addEventListener('click', () => $(button.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' })));

init();
