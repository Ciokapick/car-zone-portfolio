/*=============== I18N (EN default, RO toggle) ===============*/
/* Buildless dictionary-based translation. English is the site default and
   lives in the static HTML; Romanian is applied by swapping [data-i18n*] nodes. */
(function () {
    'use strict';

    var STORAGE_KEY = 'carzone-lang';

    var translations = {
        /*===== Nav =====*/
        'nav.home': { ro: 'Acasă', en: 'Home' },
        'nav.stock': { ro: 'Mașini pe stoc', en: 'Inventory' },
        'nav.order': { ro: 'Mașini la comandă', en: 'Custom order' },
        'nav.sell': { ro: 'Vinde-ți mașina', en: 'Sell your car' },
        'nav.financing': { ro: 'Finanțare', en: 'Financing' },
        'nav.langLabel': { ro: 'Selectare limbă', en: 'Language selection' },

        /*===== Shared =====*/
        'common.skip': { ro: 'Sari la conținut', en: 'Skip to content' },
        'common.county': { ro: 'Județ', en: 'County' },
        'common.city': { ro: 'Localitate', en: 'City' },
        'common.name': { ro: 'Nume', en: 'Name' },
        'common.phone': { ro: 'Telefon', en: 'Phone' },
        'common.petrol': { ro: 'Benzină', en: 'Petrol' },
        'common.diesel': { ro: 'Motorină', en: 'Diesel' },
        'common.automatic': { ro: 'Automată', en: 'Automatic' },
        'common.power': { ro: 'Putere', en: 'Power' },
        'video.unsupported': { ro: 'Videoclipul nu este susținut de browserul tău.', en: 'Your browser does not support this video.' },

        /*===== Footer =====*/
        'footer.description': { ro: 'Oferim cele mai bune mașini ale celor mai recunoscute branduri din lume.', en: "We offer the finest cars from the world's most renowned brands." },
        'footer.descriptionBr': { ro: 'Oferim cele mai bune mașini ale <br> celor mai recunoscute branduri din <br> lume.', en: "We offer the finest cars from <br> the world's most renowned <br> brands." },
        'footer.company': { ro: 'Companie', en: 'Company' },
        'footer.info': { ro: 'Informații', en: 'Information' },
        'footer.follow': { ro: 'Urmărește-ne', en: 'Follow us' },
        'footer.about': { ro: 'Despre', en: 'About' },
        'footer.cars': { ro: 'Mașini', en: 'Cars' },
        'footer.history': { ro: 'Istoric', en: 'History' },
        'footer.store': { ro: 'Magazin', en: 'Store' },
        'footer.requestOffer': { ro: 'Solicită o ofertă', en: 'Request a quote' },
        'footer.findDealer': { ro: 'Găsește un dealer', en: 'Find a dealer' },
        'footer.contactUs': { ro: 'Contactează-ne', en: 'Contact us' },
        'footer.services': { ro: 'Servicii', en: 'Services' },
        'footer.terms': { ro: 'Termeni și condiții', en: 'Terms & conditions' },
        'footer.warranty': { ro: 'Garanție', en: 'Warranty' },
        'aria.facebook': { ro: 'CarZone pe Facebook', en: 'CarZone on Facebook' },
        'aria.instagram': { ro: 'CarZone pe Instagram', en: 'CarZone on Instagram' },
        'aria.openMenu': { ro: 'Deschide meniul', en: 'Open menu' },
        'aria.closeMenu': { ro: 'Închide meniul', en: 'Close menu' },

        /*===== Forms (demo mode) =====*/
        'form.demoNote': { ro: 'Mod demo: poți completa și valida fluxul, dar datele nu sunt trimise și nu sunt stocate.', en: 'Demo mode: you can fill in and validate the flow, but no data is sent or stored.' },
        'form.demoNoteContact': { ro: 'Mod demo: formularul poate fi validat, dar datele nu sunt trimise și nu sunt stocate.', en: 'Demo mode: the form can be validated, but no data is sent or stored.' },
        'form.demoResult': { ro: 'a trecut validarea locală. Acesta este un proiect de portofoliu: nimic nu a fost trimis sau stocat.', en: 'passed local validation. This is a portfolio project: nothing was sent or stored.' },
        'form.fallbackLabel': { ro: 'Solicitarea', en: 'The request' },
        'form.label.order': { ro: 'Cererea pentru mașina configurată', en: 'The custom car request' },
        'form.label.sell': { ro: 'Cererea de evaluare', en: 'The valuation request' },
        'form.label.contact': { ro: 'Mesajul de contact', en: 'The contact message' },
        'form.checkDemo': { ro: 'Verifică cererea demo', en: 'Validate the demo request' },
        'form.checkDemoMsg': { ro: 'Verifică mesajul demo', en: 'Validate the demo message' },

        /*===== Home (index.html) =====*/
        'meta.home.title': { ro: 'CarZone — Marketplace auto premium', en: 'CarZone — Premium automotive marketplace' },
        'meta.home.desc': { ro: 'CarZone este un concept de marketplace auto premium cu stoc extins, pagini de prezentare și cereri pentru mașini la comandă.', en: 'CarZone is a premium automotive marketplace concept with an extensive inventory, detailed vehicle pages and custom-order requests.' },
        'home.eyebrow': { ro: 'Alege cea mai bună mașină', en: 'Choose the best car' },
        'home.electric': { ro: 'Mașină electrică', en: 'Electric car' },
        'home.imgAlt': { ro: 'Porsche Taycan alb prezentat pe pagina principală CarZone', en: 'White Porsche Taycan showcased on the CarZone homepage' },
        'home.stat.powerValue': { ro: '872 CP', en: '872 HP' },
        'home.stat.power': { ro: 'PUTERE', en: 'POWER' },
        'home.stat.time': { ro: 'TIMP 0-100', en: '0-100 TIME' },
        'home.stat.range': { ro: 'AUTONOMIE', en: 'RANGE' },
        'home.ctaDiscover': { ro: 'Descoperă Taycan', en: 'Discover the Taycan' },
        'home.ctaAll': { ro: 'Vezi toate mașinile', en: 'Browse all cars' },
        'home.motion.kicker': { ro: 'Arhitectură de performanță', en: 'Performance architecture' },
        'home.motion.title': { ro: 'Electrică.<br>Fără compromis.', en: 'Electric.<br>Uncompromised.' },
        'home.motion.scroll': { ro: 'Derulează pentru explorare', en: 'Scroll to explore' },
        'home.aboutCardDesc': { ro: 'Selecție auto atent prezentată', en: 'A carefully curated selection' },
        'home.aboutTitle': { ro: 'Dealer Auto Premium <br> Îți aducem visul pe 4 roți la realitate!', en: 'Premium Car Dealer <br> We bring your four-wheeled dream to life!' },
        'home.aboutDesc': { ro: 'Îți oferim o selecție exclusivă de mașini premium, verificate riguros și susținute de garanție, alături de servicii personalizate care transformă fiecare achiziție într-o experiență memorabilă. Alege calitatea, alege excelența – vino să descoperi diferența!', en: 'We offer an exclusive selection of premium cars, rigorously inspected and backed by warranty, along with personalized services that turn every purchase into a memorable experience. Choose quality, choose excellence — come and discover the difference!' },
        'home.aboutCta': { ro: 'Rezervă-ți o programare astăzi!', en: 'Book an appointment today!' },
        'home.popularTitle': { ro: 'Putere, eleganță și inovație la un clic distanță', en: 'Power, elegance and innovation, one click away' },
        'home.whyTitle': { ro: 'De ce să alegi', en: 'Why choose' },
        'home.zoom.kicker': { ro: 'Colecția', en: 'The collection' },
        'home.zoom.headline': { ro: 'Făcute să fie conduse', en: 'Built to be driven' },
        'home.featHistory': { ro: 'Istoric', en: 'Verified' },
        'home.featHistoryDesc': { ro: 'verificat', en: 'history' },
        'home.featDelivery': { ro: 'Livrare', en: 'Fast' },
        'home.featDeliveryDesc': { ro: 'rapidă', en: 'delivery' },
        'home.featWarranty': { ro: 'Garanție', en: 'Extended' },
        'home.featWarrantyDesc': { ro: 'extinsă', en: 'warranty' },
        'home.popularCars': { ro: 'Mașini Populare', en: 'Popular cars' },
        'home.offerTitle': { ro: 'Viziunea ta. Mașina noastră. <br> O combinație perfectă.', en: 'Your vision. Our car. <br> A perfect match.' },
        'home.offerDesc': { ro: 'Descoperă colecția noastră premium și lasă-ne să îți surprindem așteptările!', en: 'Discover our premium collection and let us exceed your expectations!' },
        'home.offerCta': { ro: 'Găsește mașina viselor acum!', en: 'Find your dream car now!' },

        /*===== Inventory (stoc.html) =====*/
        'meta.stock.title': { ro: 'Mașini pe stoc - CarZone', en: 'Cars in stock - CarZone' },
        'meta.stock.desc': { ro: 'Explorează stocul demonstrativ CarZone și filtrează modelele după marcă.', en: 'Browse the CarZone demo inventory and filter models by brand.' },
        'stock.title': { ro: 'Mașini pe stoc', en: 'Cars in stock' },

        /*===== S580 (s580.html) =====*/
        'meta.s580.desc': { ro: 'Prezentare detaliată Mercedes-Benz S580 în conceptul auto CarZone.', en: 'Detailed Mercedes-Benz S580 presentation in the CarZone automotive concept.' },
        's580.stat.year': { ro: 'An', en: 'Year' },
        's580.stat.fuel': { ro: 'Combustibil', en: 'Fuel' },
        's580.stat.powerValue': { ro: '496 CP', en: '496 HP' },
        's580.btn.report': { ro: 'Raport Vehicul', en: 'Vehicle report' },
        's580.btn.history': { ro: 'Istoric Reprezentanță', en: 'Service history' },
        's580.sec.basic': { ro: 'Informații de bază', en: 'Basic information' },
        's580.spec.make': { ro: 'Marcă', en: 'Make' },
        's580.spec.prodYear': { ro: 'Anul producției', en: 'Production year' },
        's580.spec.firstReg': { ro: 'Prima înmatriculare', en: 'First registration' },
        's580.spec.engine': { ro: 'Capacitatea motorului', en: 'Engine capacity' },
        's580.sec.tech': { ro: 'Specificații tehnice', en: 'Technical specifications' },
        's580.spec.gearbox': { ro: 'Cutie de viteze', en: 'Gearbox' },
        's580.spec.fuelValue': { ro: 'Benzină + Mild-Hybrid', en: 'Petrol + mild hybrid' },
        's580.spec.color': { ro: 'Culoare', en: 'Color' },
        's580.spec.colorValue': { ro: 'Negru Obsidian', en: 'Obsidian Black' },
        's580.spec.warrantyValue': { ro: '24 Luni Garanție', en: '24-month warranty' },
        's580.spec.traction': { ro: 'Tracțiune', en: 'Drivetrain' },
        's580.sec.perf': { ro: 'Performanță și dinamică', en: 'Performance & dynamics' },
        's580.perf.engine': { ro: 'Motor benzină 4.0L V8 biturbo cu EQ Boost - mild-hybrid', en: '4.0L V8 biturbo petrol engine with EQ Boost - mild hybrid' },
        's580.sec.comfort': { ro: 'Confort și funcționalitate', en: 'Comfort & convenience' },
        's580.comfort.1': { ro: 'Scaune față încălzite cu reglaj electric lumbar', en: 'Heated front seats with electric lumbar adjustment' },
        's580.comfort.2': { ro: 'Aer condiționat dual-zone', en: 'Dual-zone air conditioning' },
        's580.comfort.3': { ro: 'Climatizare automată multi-zone', en: 'Multi-zone automatic climate control' },
        's580.comfort.4': { ro: 'Plafon panoramic glisant automat', en: 'Automatic panoramic sliding sunroof' },
        's580.comfort.5': { ro: 'Volan Supersport îmbrăcat în piele', en: 'Supersport leather-wrapped steering wheel' },
        's580.comfort.6': { ro: 'Iluminare ambientală premium', en: 'Premium ambient lighting' },
        's580.comfort.7': { ro: 'Încărcare wireless pentru telefon în consola centrală', en: 'Wireless phone charging in the center console' },
        's580.comfort.8': { ro: 'Portbagaj cu blocare automată', en: 'Trunk with automatic locking' },
        's580.comfort.9': { ro: 'Oglinzi exterioare și interioare cu atenuare automată', en: 'Auto-dimming exterior and interior mirrors' },
        's580.comfort.10': { ro: 'Geamuri atermice cu protecție IR', en: 'Athermal glass with IR protection' },
        's580.comfort.11': { ro: 'Parbriz încălzit și spălătoare cu duze încălzite', en: 'Heated windshield and heated washer nozzles' },
        's580.comfort.12': { ro: 'Spălare parbriz cu rezervor fluid', en: 'Windshield washer with fluid reservoir' },
        's580.comfort.13': { ro: 'Geamuri fumurii cu protecție IR', en: 'Tinted windows with IR protection' },
        's580.comfort.14': { ro: 'Sistem audio premium', en: 'Premium audio system' },
        's580.comfort.15': { ro: 'Protecție logo Mercedes-Benz la deschiderea ușilor', en: 'Mercedes-Benz logo door sill protection' },
        's580.comfort.16': { ro: 'Tavă în portbagaj', en: 'Trunk storage tray' },
        's580.comfort.17': { ro: 'Tapițerie din piele bej/semi-anilină', en: 'Beige semi-aniline leather upholstery' },
        's580.comfort.18': { ro: 'Garnitură interioară în aluminiu/negru - stil metalic', en: 'Aluminium/black interior trim - metallic style' },
        's580.comfort.19': { ro: 'Covorașe AMG originale', en: 'Genuine AMG floor mats' },
        's580.sec.safety': { ro: 'Siguranță și asistență la condus', en: 'Safety & driver assistance' },
        's580.safety.1': { ro: 'Pachet Driving Assistance (nivel de autonomie L2)', en: 'Driving Assistance package (L2 autonomy level)' },
        's580.safety.2': { ro: 'DISTRONIC PLUS adaptive autopilot cu funcție stop-and-go', en: 'DISTRONIC PLUS adaptive cruise control with stop-and-go' },
        's580.safety.3': { ro: 'Asistent schimbare bandă activ', en: 'Active lane change assist' },
        's580.safety.4': { ro: 'Asistent parcare activ cu cameră 360°', en: 'Active parking assist with 360° camera' },
        's580.safety.5': { ro: 'Sistem de avertizare și intervenție pentru pietoni, cu capotă activă', en: 'Pedestrian warning and intervention system - active bonnet' },
        's580.safety.6': { ro: 'Sistem PRE-SAFE® Impulse Side pentru protecție laterală', en: 'PRE-SAFE® Impulse Side system for side-impact protection' },
        's580.safety.7': { ro: 'Asistent Stop de Urgență', en: 'Emergency stop assist' },
        's580.safety.8': { ro: 'Cameră 360° + senzori de parcare față/spate', en: '360° camera + front/rear parking sensors' },
        's580.safety.9': { ro: 'Monitorizare presiune anvelope în timp real', en: 'Real-time tire pressure monitoring' },
        's580.safety.10': { ro: 'Sistem de apel de urgență Ecall', en: 'eCall emergency call system' },
        's580.safety.11': { ro: 'Sistem de alarmă antifurt cu sirenă și senzori', en: 'Anti-theft alarm with siren and sensors' },
        's580.safety.12': { ro: 'Închidere centralizată cu funcție KEYLESS-GO', en: 'Central locking with KEYLESS-GO' },
        's580.safety.13': { ro: 'Airbaguri laterale față și airbag central spate', en: 'Front side and rear center airbags' },
        's580.safety.14': { ro: 'Sistem activ de recunoaștere coridor de urgență', en: 'Active emergency corridor recognition system' },
        's580.safety.15': { ro: 'Indicator stare centuri de siguranță pasageri spate', en: 'Rear passenger seat belt status indicator' },
        's580.safety.16': { ro: 'Sistem scaune pentru copii ISOFIX (i-Size)', en: 'ISOFIX child seat system (i-Size)' },
        's580.safety.17': { ro: 'Vestă reflectorizantă de siguranță inclusă', en: 'Reflective safety vest included' },
        's580.sec.techno': { ro: 'Tehnologie și infotainment', en: 'Technology & infotainment' },
        's580.techno.1': { ro: 'Sistem multimedia MBUX cu ecran central mare', en: 'MBUX multimedia system with large central display' },
        's580.techno.2': { ro: 'Navigație pe hard disk și actualizări OTA', en: 'Hard-disk navigation + OTA updates' },
        's580.techno.3': { ro: 'Realitate augmentată pentru navigare', en: 'Augmented reality navigation' },
        's580.techno.4': { ro: 'Head-Up Display (afișare informații direct pe parbriz)', en: 'Head-Up Display (information projected onto the windshield)' },
        's580.techno.5': { ro: 'Integrare smartphone Apple CarPlay & Android Auto', en: 'Apple CarPlay & Android Auto smartphone integration' },
        's580.techno.6': { ro: 'Sistem de recunoaștere trafic', en: 'Traffic sign recognition system' },
        's580.techno.7': { ro: 'Integrare smartphone + Pachet USB', en: 'Smartphone integration + USB package' },
        's580.techno.8': { ro: 'Conectivitate 4G și caracteristici online cu Mercedes Me Connect', en: '4G connectivity and online features with Mercedes me connect' },
        's580.techno.9': { ro: 'Servicii de acces la distanță (servicii la distanță)', en: 'Remote access services' },
        's580.techno.10': { ro: 'Recunoaștere voce pentru personalizarea profilului', en: 'Voice recognition for profile personalization' },
        's580.techno.11': { ro: 'Personalizare sunet conform preferințelor utilizatorului', en: "Sound personalization to the user's preferences" },
        's580.sec.design': { ro: 'Design și exterior', en: 'Design & exterior' },
        's580.design.1': { ro: 'Pachet AMG exterior: spoiler față, praguri laterale și elemente sportive', en: 'AMG package (exterior - front spoiler, side sills, aggressive styling)' },
        's580.design.2': { ro: 'Pachet Night (elemente exterioare în negru lucios)', en: 'Night package (gloss black exterior elements)' },
        's580.design.3': { ro: 'Jante AMG originale cu design multispoke și anvelope mixte', en: 'Genuine AMG multi-spoke wheels with mixed tires' },
        's580.design.4': { ro: 'Anvelope de vară cu absorbție sonoră optimizată', en: 'Summer tires with optimized noise absorption' },
        's580.design.5': { ro: 'Finisaj MANALITE cu Diamond White exclusiv - finisaj metalic', en: 'MANALITE finish with exclusive Diamond White - metallic paint' },
        's580.design.6': { ro: 'Proiecție simboluri, linii și animații prin farurile LED digitale', en: 'Symbols, lines and animations projected by the digital LED headlights' },
        's580.design.7': { ro: 'Faruri LED digitale adaptate pentru traficul de dreapta', en: 'Digital LED headlights adapted for right-hand traffic' },
        's580.design.8': { ro: 'Stopuri LED cu semnalizare dinamică', en: 'LED taillights with dynamic turn signals' },

        /*===== Custom order (comanda.html) =====*/
        'meta.order.title': { ro: 'Mașini pe comandă - CarZone', en: 'Custom order - CarZone' },
        'meta.order.desc': { ro: 'Trimite o cerere demonstrativă pentru o mașină la comandă prin CarZone.', en: 'Send a demo request for a custom-ordered car through CarZone.' },
        'order.title': { ro: 'Mașini la comandă', en: 'Custom order' },
        'order.subtitle': { ro: 'Nu găsești mașina căutată? Nicio problemă!<br> Îți putem aduce mașina dorită la comandă, cu garanție și verificare tehnică.<br> Tot ce trebuie să faci este să completezi formularul, iar <br> noi te vom contacta în cel mai scurt timp pentru stabilirea detaliilor.', en: "Can't find the car you're looking for? No problem!<br> We can source your desired car to order, with warranty and technical inspection.<br> All you have to do is fill in the order form and <br> we will contact you shortly to arrange the details." },
        'order.vehicleType': { ro: 'Tip vehicul', en: 'Vehicle type' },
        'order.vt.car': { ro: 'Autoturism', en: 'Car' },
        'order.vt.moto': { ro: 'Motocicletă', en: 'Motorcycle' },
        'order.vt.truck': { ro: 'Camion', en: 'Truck' },
        'order.gearboxType': { ro: 'Tip cutie', en: 'Gearbox type' },
        'order.gb.manual': { ro: 'Manuală', en: 'Manual' },
        'order.gb.semi': { ro: 'Semi-automată', en: 'Semi-automatic' },
        'order.fuelType': { ro: 'Tip combustibil', en: 'Fuel type' },
        'order.fuel.petrolHybrid': { ro: 'Hibrid/Benzină', en: 'Petrol hybrid' },
        'order.fuel.dieselHybrid': { ro: 'Hibrid/Motorină', en: 'Diesel hybrid' },
        'order.fuel.hydrogen': { ro: 'Hidrogen', en: 'Hydrogen' },
        'order.manufacturer': { ro: 'Producător', en: 'Manufacturer' },
        'order.yearFrom': { ro: 'An fabricat (de la)', en: 'Year of manufacture (from)' },
        'order.yearTo': { ro: 'An fabricat (până la)', en: 'Year of manufacture (to)' },
        'order.budget': { ro: 'Buget (Euro)', en: 'Budget (EUR)' },
        'order.mileage': { ro: 'Nr. Kilometri', en: 'Mileage (km)' },
        'order.details': { ro: 'Detalii suplimentare', en: 'Additional details' },

        /*===== Sell your car (vinde.html) =====*/
        'meta.sell.title': { ro: 'Vinde-ți mașina - CarZone', en: 'Sell your car - CarZone' },
        'meta.sell.desc': { ro: 'Descrie mașina pe care vrei să o vinzi și pregătește o solicitare CarZone.', en: 'Describe the car you want to sell and prepare a CarZone request.' },
        'sell.title': { ro: 'Vinde-ți mașina', en: 'Sell your car' },
        'sell.subtitle': { ro: 'Ai o mașină și vrei să o vinzi, dar nu vrei să te complici cu procesul de <br> publicare a anunțului, răspunsuri la telefoane și întâlniri cu potențiali clienți <br> sau doar curioși? Noi te putem ajuta! Completează formularul <br> și ne ocupăm noi de vânzarea mașinii tale!', en: "Have a car you want to sell, but don't want the hassle of <br> posting the listing, answering calls and meeting potential buyers <br> or the merely curious? We can help! Fill in the form <br> and we will take care of selling your car!" },
        'sell.lastName': { ro: 'Nume', en: 'Last name' },
        'sell.firstName': { ro: 'Prenume', en: 'First name' },
        'sell.carBrand': { ro: 'Marca mașină', en: 'Car make' },
        'sell.carModel': { ro: 'Model mașină', en: 'Car model' },
        'sell.details': { ro: 'Detalii autoturism', en: 'Vehicle details' },
        'sell.images': { ro: 'Imagini', en: 'Photos' },
        'sell.chooseFiles': { ro: 'Alege fișiere', en: 'Choose files' },
        'sell.fileInfo': { ro: 'Imaginile se trimit după primul contact', en: 'Photos are sent after the first contact' },
        'sell.clientType': { ro: 'Tip client', en: 'Client type' },
        'sell.individual': { ro: 'Persoană fizică', en: 'Individual' },
        'sell.company': { ro: 'Persoană juridică', en: 'Company' },

        /*===== Contact (contact.html) =====*/
        'meta.contact.desc': { ro: 'Pagina demonstrativă de contact și solicitări pentru proiectul CarZone.', en: 'Demo contact and enquiry page for the CarZone project.' },
        'contact.subtitle': { ro: 'Ai nevoie de informatii suplimentare? Nu ezita sa ne contactezi!', en: "Need more information? Don't hesitate to get in touch!" },
        'contact.infoDesc': { ro: 'Informații de contact<br> Completează formularul alăturat și un consultant te va contacta în cel mai scurt timp posibil. De asemenea, ne poți contacta direct folosind informațiile de mai jos:', en: 'Contact information<br> Fill in the form and a consultant will get back to you as soon as possible. You can also reach us directly using the details below:' },
        'contact.address': { ro: 'Strada Mihai Eminescu Nr. 88, Dumbrăveni, Suceava, România', en: '88 Mihai Eminescu Street, Dumbrăveni, Suceava, Romania' },
        'contact.hours': { ro: 'Luni până Vineri 8:00 - 16:00', en: 'Monday to Friday, 8:00 - 16:00' },
        'contact.message': { ro: 'Mesaj', en: 'Message' },

        /*===== Financing (finantare.html) =====*/
        'meta.fin.title': { ro: 'Finanțare - CarZone', en: 'Financing - CarZone' },
        'meta.fin.desc': { ro: 'Estimează orientativ finanțarea unei mașini cu instrumentul demonstrativ CarZone.', en: 'Get an indicative car financing estimate with the CarZone demo tool.' },
        'fin.title': { ro: 'Finanțare', en: 'Financing' },
        'fin.subtitle1': { ro: 'Ești interesat de o metodă de finanțare pentru a achiziționa mașina dorită? Noi te putem ajuta!', en: 'Interested in a financing option for the car you want? We can help!' },
        'fin.subtitle2': { ro: 'Oferim finanțare atât pentru persoane fizice, cât și pentru persoane juridice, în termeni foarte avantajoși.', en: 'We offer financing for both individuals and companies, on very advantageous terms.' },
        'fin.individual': { ro: 'Persoana Fizică', en: 'Individuals' },
        'fin.individualDesc': { ro: 'Poți opta pentru un credit auto sau leasing operational doar cu cartea de identitate.', en: 'Opt for a car loan or operational leasing with just your ID card.' },
        'fin.advance070': { ro: 'Avans între 0 - 70%', en: 'Down payment between 0 - 70%' },
        'fin.anaf': { ro: 'Se acceptă venituri declarate la ANAF', en: 'Income declared to ANAF (tax authority) is accepted' },
        'fin.foreign': { ro: 'Se acceptă venituri din străinătate', en: 'Foreign income is accepted' },
        'fin.company': { ro: 'Persoana Juridică', en: 'Companies' },
        'fin.companyDesc': { ro: 'Firma trebuie să fie înființată în România, să fie pe profit și să aibă bilanț închis.', en: 'The company must be registered in Romania, be profitable and have closed annual accounts.' },
        'fin.advance2070': { ro: 'Avans între 20 - 70%', en: 'Down payment between 20 - 70%' },
        'fin.calcTitle': { ro: 'Calculator Finanțare', en: 'Financing calculator' },
        'fin.calcDesc': { ro: 'Folosește formularul pentru a calcula valoarea ratelor.', en: 'Use the form to calculate your monthly payments.' },
        'fin.amount': { ro: 'Suma totală (EUR)', en: 'Total amount (EUR)' },
        'fin.advance': { ro: 'Avans (EUR)', en: 'Down payment (EUR)' },
        'fin.interest': { ro: 'Dobândă (%)', en: 'Interest rate (%)' },
        'fin.term': { ro: 'Durata (ani)', en: 'Term (years)' },
        'fin.calculate': { ro: 'Calculează', en: 'Calculate' },
        'fin.totalInterest': { ro: 'Total Dobândă:', en: 'Total interest:' },
        'fin.monthly': { ro: 'Rata lunară:', en: 'Monthly payment:' },
        'fin.totalPay': { ro: 'Total de plată:', en: 'Total payable:' },
        'fin.ph.amount': { ro: 'Ex: 10000', en: 'e.g. 10000' },
        'fin.ph.advance': { ro: 'Ex: 2000', en: 'e.g. 2000' },
        'fin.ph.5': { ro: 'Ex: 5', en: 'e.g. 5' },
        'fin.alertInvalid': { ro: 'Te rugăm să introduci valori valide în toate câmpurile.', en: 'Please enter valid values in all fields.' },
        'fin.alertAdvance': { ro: 'Avansul nu poate fi mai mare decât suma totală.', en: 'The down payment cannot be greater than the total amount.' }
    };

    function currentLang() {
        return document.documentElement.lang === 'ro' ? 'ro' : 'en';
    }

    function t(key) {
        var entry = translations[key];
        if (!entry) return key;
        return entry[currentLang()] != null ? entry[currentLang()] : entry.en;
    }

    function swap(selector, apply) {
        document.querySelectorAll(selector).forEach(function (el) {
            var attr = selector.slice(1, -1); // strip [ ]
            var entry = translations[el.getAttribute(attr)];
            if (entry) apply(el, entry[currentLang()] != null ? entry[currentLang()] : entry.en);
        });
    }

    function setLang(lang) {
        lang = lang === 'ro' ? 'ro' : 'en';
        document.documentElement.lang = lang;
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (error) { /* private mode */ }

        swap('[data-i18n]', function (el, value) {
            /* ponytail: dictionary strings are static and trusted; '<' means markup (<br>) */
            if (value.indexOf('<') !== -1) el.innerHTML = value;
            else el.textContent = value;
        });
        swap('[data-i18n-placeholder]', function (el, value) { el.setAttribute('placeholder', value); });
        swap('[data-i18n-alt]', function (el, value) { el.setAttribute('alt', value); });
        swap('[data-i18n-aria]', function (el, value) { el.setAttribute('aria-label', value); });
        swap('[data-i18n-content]', function (el, value) { el.setAttribute('content', value); });

        document.querySelectorAll('.nav__lang-btn').forEach(function (button) {
            var active = button.dataset.lang === lang;
            button.classList.toggle('active-lang', active);
            button.setAttribute('aria-pressed', String(active));
        });
    }

    try {
        var saved = null;
        try { saved = localStorage.getItem(STORAGE_KEY); } catch (error) { /* private mode */ }

        document.querySelectorAll('.nav__lang-btn').forEach(function (button) {
            button.addEventListener('click', function () { setLang(button.dataset.lang); });
        });

        /* English is the default; the static markup is already English, so this is
           a no-op on first visit and swaps immediately for returning RO visitors. */
        setLang(saved === 'ro' ? 'ro' : 'en');

        window.carzoneI18n = { t: t, setLang: setLang };
    } catch (error) {
        console.error('CarZone language controller failed to initialize.', error);
    }
})();
