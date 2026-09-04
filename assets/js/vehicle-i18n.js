/* Shared translations for vehicle data. Keep source data and manufacturer
   product names intact; translate only presentation, never specifications. */
(() => {
    'use strict';
    const ro = Object.fromEntries(`
Make|Marcă
Model|Model
model|model
Production year|Anul fabricației
First registration|Prima înmatriculare
Engine capacity|Cilindree
Power|Putere
Gearbox|Cutie de viteze
Fuel|Combustibil
Color|Culoare
Warranty|Garanție
Drivetrain|Tracțiune
Electric|Electric
Hybrid|Hibrid
Petrol|Benzină
Diesel|Motorină
Petrol + mild hybrid|Benzină + sistem mild-hybrid
Automatic|Automată
Manual transmission|Cutie manuală
Direct drive transmission|Transmisie directă
Sport automatic transmission|Cutie automată sport
E-CVT transmission|Transmisie E-CVT
AWD|Tracțiune integrală
FWD|Tracțiune față
RWD|Tracțiune spate
4WD|Tracțiune integrală
AWD - Dual Motor|Tracțiune integrală — două motoare
4MATIC all-wheel drive|Tracțiune integrală 4MATIC
Q4 all-wheel drive|Tracțiune integrală Q4
quattro AWD|Tracțiune integrală quattro
quattro all-wheel drive|Tracțiune integrală quattro
quattro all-wheel drive system|Sistem de tracțiune integrală quattro
quattro permanent AWD|Tracțiune integrală permanentă quattro
quattro AWD with sport differential|Tracțiune integrală quattro cu diferențial sport
quattro sport differential|Diferențial sport quattro
xDrive AWD|Tracțiune integrală xDrive
xDrive intelligent AWD|Tracțiune integrală inteligentă xDrive
M xDrive AWD system|Sistem de tracțiune integrală M xDrive
HTRAC AWD system|Sistem de tracțiune integrală HTRAC
Dual motor All-Wheel Drive|Tracțiune integrală cu două motoare
Tri motor All-Wheel Drive|Tracțiune integrală cu trei motoare
Dual electric motors|Două motoare electrice
Dual permanent-magnet electric motors|Două motoare electrice cu magneți permanenți
2-speed transmission on the rear axle|Transmisie cu două trepte pe puntea spate
7G-TRONIC Sport automatic|Cutie automată 7G-TRONIC Sport
7G-TRONIC automatic transmission|Cutie automată 7G-TRONIC
9G-TRONIC automatic transmission|Cutie automată 9G-TRONIC
ABS with DSC|ABS cu DSC
ABS with EBD|ABS cu EBD
ABS with ESP|ABS cu ESP
AIRMATIC semi-active suspension|Suspensie semiactivă AIRMATIC
AIRMATIC semi-active suspension - comfort and stability|Suspensie semiactivă AIRMATIC — confort și stabilitate
AMG Line exterior|Exterior AMG Line
AMG body kit|Kit de caroserie AMG
AMG body styling|Elemente de caroserie AMG
AMG exhaust system|Sistem de evacuare AMG
AMG exterior package|Pachet exterior AMG
AMG high-performance brakes|Frâne AMG de înaltă performanță
AMG multi-spoke wheels|Jante AMG cu spițe multiple
AMG package|Pachet AMG
AMG quad exhaust|Evacuare AMG cu patru terminații
AMG ride control suspension|Suspensie AMG Ride Control
AMG sport seats|Scaune sport AMG
AMG sport suspension|Suspensie sport AMG
AMG sports suspension|Suspensie sport AMG
AMG sports exhaust|Evacuare sport AMG
AMG steering wheel|Volan AMG
AMG styling elements|Elemente de design AMG
Active Brake Assist|Asistent activ la frânare
Active Cruise Control|Pilot automat adaptiv
Active Lane Keep Assist|Asistent activ pentru menținerea benzii
Active Lane Keeping Assist|Asistent activ pentru menținerea benzii
Active aerodynamics|Aerodinamică activă
Active exhaust system|Sistem de evacuare activ
Active parking assist with 360° camera|Asistent activ la parcare cu cameră de 360°
Active rear spoiler|Spoiler spate activ
Active rear wing|Eleron spate activ
Active suspension|Suspensie activă
Adaptive M suspension|Suspensie adaptivă M
Adaptive air suspension|Suspensie pneumatică adaptivă
Adaptive cruise assist|Asistență adaptivă la rulare
Adaptive cruise control|Pilot automat adaptiv
Adaptive sport seats|Scaune sport adaptive
Adaptive suspension|Suspensie adaptivă
Advanced data logging|Înregistrare avansată a datelor
Aerodynamic body|Caroserie aerodinamică
Aerodynamic design|Design aerodinamic
Aerodynamic efficiency|Eficiență aerodinamică
Aerodynamic styling|Forme aerodinamice
Aggressive appearance|Aspect sportiv pronunțat
Aggressive stance|Ținută sportivă pronunțată
Aggressive styling|Design sportiv pronunțat
Air conditioning|Aer condiționat
Air suspension|Suspensie pneumatică
Airbags|Airbaguri
Alcantara accents|Inserții din Alcantara
Alcantara headliner|Plafon interior din Alcantara
Alcantara interior|Interior din Alcantara
Alcon brakes|Frâne Alcon
Alfa DNA drive modes|Moduri de condus Alfa DNA
Alfa Romeo DNA safety|Sistem Alfa Romeo DNA
Alfa connect services|Servicii Alfa Connect
Alloy wheels|Jante din aliaj
Audi connect services|Servicii Audi connect
Augmented reality navigation|Navigație cu realitate augmentată
Automatic climate control|Climatizare automată
Automatic high beams|Fază lungă automată
Automatic panoramic sliding sunroof|Trapă panoramică glisantă cu acționare electrică
Autonomous emergency braking|Frânare automată de urgență
Autopilot convenience features|Funcții de asistență Autopilot
Autopilot emergency braking|Frânare de urgență Autopilot
Autopilot system included|Sistem Autopilot inclus
Avant design|Caroserie Avant
BMW ConnectedDrive services|Servicii BMW ConnectedDrive
BMW iDrive navigation|Navigație BMW iDrive
Bang & Olufsen 3D sound|Sistem audio 3D Bang & Olufsen
Bang & Olufsen audio system|Sistem audio Bang & Olufsen
Bang & Olufsen sound|Sistem audio Bang & Olufsen
Basic audio system|Sistem audio de bază
Basic infotainment|Sistem multimedia de bază
Bi-Xenon headlights|Faruri bi-xenon
Blind spot assist|Asistent pentru unghiul mort
Blind spot collision warning|Avertizare de coliziune în unghiul mort
Blind spot monitor|Monitorizarea unghiului mort
Blind spot monitoring|Monitorizarea unghiului mort
Blu-ray player|Player Blu-ray
BlueTEC SCR system|Sistem BlueTEC SCR
BlueTEC SCR system - Euro 6|Sistem BlueTEC SCR — Euro 6
BlueTEC SCR system - Euro 6 standard - particulate filter|Sistem BlueTEC SCR — normă Euro 6 și filtru de particule
Bluetooth audio|Redare audio prin Bluetooth
Bluetooth connectivity|Conectivitate Bluetooth
Bose audio system|Sistem audio Bose
Bose premium audio|Sistem audio premium Bose
Brembo brakes|Frâne Brembo
Brembo carbon ceramic brakes|Frâne carbon-ceramice Brembo
Burmester 3D sound|Sistem audio 3D Burmester
Burmester 3D sound system|Sistem audio 3D Burmester
Burmester audio system|Sistem audio Burmester
Burmester premium audio|Sistem audio premium Burmester
Butterfly doors|Uși cu deschidere tip fluture
CD changer|Magazie de CD-uri
CLS coupe styling|Design coupé CLS
COMAND Online navigation|Navigație COMAND Online
COMAND navigation|Navigație COMAND
Captain's chairs|Scaune individuale în spate
Carbon ceramic brakes|Frâne carbon-ceramice
Carbon fiber accents|Inserții din fibră de carbon
Carbon fiber body|Caroserie din fibră de carbon
Carbon fiber chassis|Șasiu din fibră de carbon
Carbon fiber interior|Interior cu fibră de carbon
Carbon fiber mirror caps|Carcase ale oglinzilor din fibră de carbon
Carbon fiber monocoque|Monococă din fibră de carbon
Carbon fiber racing seats|Scaune de competiție din fibră de carbon
Carbon fiber roof|Plafon din fibră de carbon
Carbon fiber safety cell|Celulă de siguranță din fibră de carbon
Carbon fiber seats|Scaune din fibră de carbon
Center exhaust|Evacuare centrală
Center exit exhaust|Evacuare cu ieșire centrală
Center-lock forged wheels|Jante forjate cu prindere centrală
Center-lock wheels|Jante cu prindere centrală
Chrome accents|Accente cromate
Chrome exterior trim|Ornamente exterioare cromate
Classic AMG styling|Design clasic AMG
Classic American look|Aspect american clasic
Classic Porsche styling|Design clasic Porsche
Classic boxy shape|Caroserie clasică, cu forme drepte
Classic roadster design|Design clasic de roadster
Climate control|Climatizare
Coachbuilt Italian styling|Design italian de carosier
Collision avoidance system|Sistem de evitare a coliziunilor
Composite bodywork|Caroserie din materiale compozite
Coupe SUV design|Design de SUV coupé
Coupe design|Design coupé
Coupe-like profile|Profil de coupé
Crawl control|Control al vitezei reduse în teren
Crest grille|Grilă Crest
Crossover design|Design crossover
Cruise control|Pilot automat
DAB radio|Radio DAB
DISTRONIC PLUS adaptive cruise control|Pilot automat adaptiv DISTRONIC PLUS
Data logging|Înregistrarea datelor
Designo leather package|Pachet de piele designo
Digital LED headlights|Faruri LED digitale
Digital dashboard|Planșă de bord digitală
Digital instrument cluster|Instrumentar de bord digital
Digital telemetry display|Afișaj digital pentru telemetrie
Drive select system|Sistem de selectare a modurilor de condus
Driver and passenger airbags|Airbaguri pentru șofer și pasager
Driving Assistance Professional|Pachet Driving Assistance Professional
Driving Assistance package|Pachet de asistență la condus
Driving Assistance package (L2 autonomy)|Pachet de asistență la condus, nivel 2
Dry sump oil system|Sistem de ungere cu carter uscat
Dual touchscreen displays|Două ecrane tactile
Dual-zone air conditioning|Aer condiționat pe două zone
Dual-zone climate control|Climatizare pe două zone
Dynamic radar cruise control|Pilot automat adaptiv cu radar
Dynamic ride control|Control dinamic al suspensiei
Dynamic stability control|Control dinamic al stabilității
E60 M5 styling|Design M5 E60
E92 M3 styling|Design M3 E92
ECO driving mode|Mod de condus ECO
EV styling|Design specific unui automobil electric
Efficiency mode|Mod de eficiență
Efficient diesel engine|Motor diesel eficient
Efficient diesel technology|Tehnologie diesel eficientă
Efficient fuel economy|Consum redus de combustibil
Efficient hybrid system|Sistem hibrid eficient
Electric everything|Comenzi cu acționare electrică
Electric seats with memory|Scaune cu reglaj electric și memorie
Electric sports car design|Design de automobil sport electric
Electric tailgate|Hayon cu acționare electrică
Electric third row|Al treilea rând de scaune cu acționare electrică
Electric third row seats|Scaune pe al treilea rând cu acționare electrică
Electric trunk|Portbagaj cu acționare electrică
Electric windows|Geamuri electrice
Electronic limited-slip differential|Diferențial autoblocant electronic
Elegant lines|Linii elegante
Elegant profile|Profil elegant
Elegant styling|Design elegant
Elegant wagon profile|Profil elegant de break
Emergency braking|Frânare de urgență
Emergency steering assist|Asistență la manevre de evitare
Emergency stop assist|Asistent pentru oprirea de urgență
Enhanced wheelbase|Ampatament mărit
Excellent fuel economy|Consum foarte redus
Excellent handling|Manevrabilitate foarte bună
Exclusive paint finish|Finisaj de vopsea exclusiv
Executive line package|Pachet Executive Line
Executive rear seats|Scaune spate Executive
Executive ride|Confort de limuzină
Executive styling|Design de limuzină
F sport styling|Design F Sport
Falcon wing doors|Uși Falcon Wing
Fast charging capability|Compatibilitate cu încărcarea rapidă
Fixed glass roof|Plafon fix din sticlă
Fixed rear wing, downforce configuration|Eleron spate fix, configurație pentru apăsare aerodinamică
Fixed roof|Plafon fix
Forward collision alert|Avertizare de coliziune frontală
Forward collision avoidance|Sistem de evitare a coliziunilor frontale
Four luxury seats|Patru scaune de lux
Four-wheel drive system|Sistem de tracțiune integrală
Four-zone climate control|Climatizare pe patru zone
Front-engine design|Configurație cu motor frontal
Full self-driving capability|Pachet Full Self-Driving pentru asistență la condus
Futuristic appearance|Aspect futurist
Futuristic interior|Interior futurist
Futuristic styling|Design futurist
GT seats|Scaune GT
GT1 seats|Scaune GT1
Genesis connected services|Servicii conectate Genesis
HUD display|Afișaj pe parbriz
Halogen headlights|Faruri cu halogen
Hard-disk navigation + OTA updates|Navigație pe hard disk și actualizări de la distanță
Harman Kardon Logic7 audio|Sistem audio Harman Kardon Logic7
Harman Kardon audio|Sistem audio Harman Kardon
Harman Kardon surround sound|Sistem audio surround Harman Kardon
Head-Up Display|Afișaj pe parbriz
Head-up display|Afișaj pe parbriz
Heated and ventilated front seats|Scaune față încălzite și ventilate
Heated and ventilated seats|Scaune încălzite și ventilate
Heated front and rear seats|Scaune față și spate încălzite
Heated front seats|Scaune față încălzite
Heated front seats with electric lumbar adjustment|Scaune față încălzite, cu reglaj lombar electric
Heated front seats with ventilation|Scaune față încălzite și ventilate
Heated seats|Scaune încălzite
Heated sport seats|Scaune sport încălzite
Heated sports seats|Scaune sport încălzite
High gloss black exterior|Exterior negru lucios
High-performance brakes|Frâne de înaltă performanță
High-performance braking system|Sistem de frânare de înaltă performanță
High-performance sport brakes|Frâne sport de înaltă performanță
High-revving engine|Motor de turație înaltă
Highway Driving Assist 2|Asistență la condus pe autostradă, generația 2
Hill descent assist|Asistent la coborârea pantelor
Hybrid hypercar system|Sistem hibrid pentru hipercar
Hybrid management display|Afișaj pentru gestionarea sistemului hibrid
Hypercar design|Design de hipercar
Iconic G-Class design|Design emblematic Clasa G
Immobilizer|Imobilizator
Individual climate control|Climatizare individuală
Individual throttle bodies|Clapete de accelerație individuale
Intelligent high beams|Fază lungă inteligentă
Intersection assist|Asistent în intersecții
Italian styling|Design italian
Keyless entry|Acces fără cheie
Keyless start|Pornire fără cheie
Kinetic suspension|Suspensie Kinetic
LED headlights|Faruri LED
LED headlights with animation|Faruri LED cu animații
LED matrix headlights|Faruri LED Matrix
LED taillight strip|Bandă LED pentru stopuri
LED taillights|Stopuri LED
LED taillights with dynamic signals|Stopuri LED cu semnalizare dinamică
LED triple-beam headlights|Faruri LED cu trei fascicule
LSD differential|Diferențial autoblocant LSD
Lane Keeping Assistant|Asistent pentru menținerea benzii
Lane change assist|Asistent la schimbarea benzii
Lane departure alert|Avertizare la părăsirea benzii
Lane departure warning|Avertizare la părăsirea benzii
Lane keep assist|Asistent pentru menținerea benzii
Lane keeping assist|Asistent pentru menținerea benzii
Lane tracing assist|Asistent pentru urmărirea benzii
Large SUV design|Design de SUV mare
Laser LED headlights|Faruri LED cu laser
Launch control|Control al lansării de pe loc
Leather interior|Interior din piele
Leather interior throughout|Interior integral din piele
Leather steering wheel|Volan îmbrăcat în piele
Lexicon premium audio|Sistem audio premium Lexicon
Lexus Enform services|Servicii Lexus Enform
Lightweight carbon construction|Construcție ușoară din carbon
Lightweight chassis|Șasiu ușor
Lightweight construction|Construcție ușoară
Lightweight package|Pachet pentru reducerea greutății
Limited-slip differential|Diferențial autoblocant
Long wheelbase design|Caroserie cu ampatament lung
Luxury sedan design|Design de berlină de lux
Luxury styling|Design de lux
M Sport package|Pachet M Sport
M aerodynamic kit|Kit aerodinamic M
M carbon bucket seats|Scaune scoică M din carbon
M carbon ceramic brakes|Frâne carbon-ceramice M
M carbon package|Pachet carbon M
M compound brakes|Frâne M Compound
M differential|Diferențial M
M exhaust system|Sistem de evacuare M
M mild hybrid system|Sistem mild-hybrid M
M sport exhaust|Evacuare sport M
M sport seats|Scaune sport M
M steering wheel|Volan M
M suspension|Suspensie M
M6 coupe styling|Design coupé M6
M8 coupe design|Design coupé M8
MBUX multimedia system|Sistem multimedia MBUX
MMI navigation|Navigație MMI
MMI navigation plus|Navigație MMI Plus
Magical forged wheels|Jante forjate Magical
Magnesium wheels|Jante din magneziu
Magnetic ride suspension|Suspensie magnetică
Manual air conditioning|Aer condiționat manual
Mark Levinson audio|Sistem audio Mark Levinson
Mark Levinson premium audio|Sistem audio premium Mark Levinson
Massage function|Funcție de masaj
Massive rear wing|Eleron spate de mari dimensiuni
Matrix LED headlights|Faruri LED Matrix
Mercedes me connect services|Servicii Mercedes me connect
Merino leather interior|Interior din piele Merino
Mid-engine design|Configurație cu motor central
Mild hybrid system|Sistem mild-hybrid
Minimalist cabin|Habitaclu minimalist
Minimalist interior|Interior minimalist
Minimalist luxury|Lux minimalist
Modern minimalist interior|Interior modern, minimalist
Modern styling|Design modern
Multi terrain monitor|Monitorizare pentru condus în teren
Multi-spoke wheels|Jante cu spițe multiple
Multi-terrain select|Selector pentru tipul de teren
Multi-zone automatic climate control|Climatizare automată pe mai multe zone
Multi-zone climate control|Climatizare pe mai multe zone
Multibeam LED headlights|Faruri MULTIBEAM LED
Multiple airbags|Airbaguri multiple
Multiple drive modes|Mai multe moduri de condus
Nappa leather seats|Scaune din piele Nappa
Navigation module|Modul de navigație
Navigation system|Sistem de navigație
Night package|Pachet Night
Night view assist|Asistent pentru vedere nocturnă
Night vision assist|Asistent pentru vedere nocturnă
Normal and Eco modes|Moduri Normal și Eco
Normal and Sport modes|Moduri Normal și Sport
OLED taillights|Stopuri OLED
OTA updates|Actualizări de la distanță
Off-road reduction gears|Reductor pentru teren accidentat
On-board computer|Computer de bord
Over-the-air updates|Actualizări de la distanță
PRE-SAFE® Impulse Side system|Sistem PRE-SAFE® Impulse Side
PRE-SAFE® system|Sistem PRE-SAFE®
Panoramic glass roof|Plafon panoramic din sticlă
Panoramic roof|Plafon panoramic
Panoramic sunroof|Trapă panoramică
Park assist with 360° camera|Asistent la parcare cu cameră de 360°
Park assist with cameras|Asistent la parcare cu camere
Park assist with surround cameras|Asistent la parcare cu camere panoramice
Parking Assistant Plus|Asistent la parcare Plus
Parking assist with 360° camera|Asistent la parcare cu cameră de 360°
Parking assist with camera|Asistent la parcare cu cameră
Parking assist with cameras|Asistent la parcare cu camere
Parking sensors|Senzori de parcare
Parking sensors with camera|Senzori de parcare și cameră
Performance analytics|Analiza performanțelor
Performance data recorder|Înregistrator al datelor de performanță
Performance exhaust|Evacuare de înaltă performanță
Performance exhaust system|Sistem de evacuare de înaltă performanță
Performance telemetry|Telemetrie de performanță
Performance traction management|Gestionarea tracțiunii pentru performanță
Porsche Connect services|Servicii Porsche Connect
Porsche Wetzler design|Design Porsche Wetzler
Power moonroof|Trapă din sticlă cu acționare electrică
Power sunroof|Trapă cu acționare electrică
Power third row|Al treilea rând de scaune cu acționare electrică
Powerful acceleration|Accelerație puternică
Pre-collision system|Sistem de prevenire a coliziunilor
Precision handling|Manevrabilitate precisă
Premium ambient lighting|Iluminare ambientală premium
Premium audio system|Sistem audio premium
Premium cloth interior|Interior din material textil premium
Premium interior|Interior premium
Premium interior materials|Materiale premium în interior
Premium leather interior|Interior din piele premium
Premium paint finish|Finisaj de vopsea premium
Premium sound system|Sistem audio premium
Premium styling|Design premium
Presence grille|Grilă cu prezență impunătoare
Quad exhaust tips|Patru terminații de evacuare
Quiet cabin|Habitaclu silențios
RS body kit|Kit de caroserie RS
RS ceramic brakes|Frâne ceramice RS
RS design package|Pachet de design RS
RS exhaust system|Sistem de evacuare RS
RS exhaust tips|Terminații de evacuare RS
RS front bumper|Bară față RS
RS oval exhaust|Evacuare ovală RS
RS sport exhaust|Evacuare sport RS
RS sport seats|Scaune sport RS
RS sport suspension|Suspensie sport RS
RS widebody kit|Kit de caroserie lățită RS
Racing harness|Centuri de competiție
Racing safety cell|Celulă de siguranță pentru competiții
Radar cruise control|Pilot automat cu radar
Real-time navigation|Navigație în timp real
Real-time traffic|Informații de trafic în timp real
Rear cross traffic alert|Avertizare de trafic transversal în spate
Rear park assist|Asistent la parcarea cu spatele
Rear parking sensors|Senzori de parcare spate
Rear seat controls|Comenzi pentru locurile din spate
Rear seat entertainment|Sistem multimedia pentru locurile din spate
Rear seat tablets|Tablete pentru locurile din spate
Rear view camera|Cameră pentru marșarier
Regenerative braking|Frânare regenerativă
Removable roof panel|Panou de plafon detașabil
Responsive handling|Răspuns prompt la comenzi
Retro-inspired design|Design cu influențe retro
Reversing Assistant|Asistent la mersul înapoi
Roadster design|Design de roadster
S line exterior|Exterior S line
S line package|Pachet S line
SAC design|Caroserie SAC
SAV design|Caroserie SAV
SUV design|Design SUV
Sculpted body|Caroserie cu linii sculptate
Sculpted bodywork|Caroserie cu linii sculptate
Sedan design|Caroserie berlină
Shooting brake design|Caroserie shooting brake
Side blind zone alert|Avertizare pentru unghiul mort lateral
Side impact protection|Protecție la impact lateral
Sleek sedan design|Design de berlină cu linii fluide
Smart cruise control|Pilot automat inteligent
Smartphone integration|Integrare smartphone
Smooth ride quality|Confort ridicat la rulare
Soft top roof|Plafon textil
Sound insulation|Izolare fonică
Spacious cabin|Habitaclu spațios
Spindle grille|Grilă tip fus
Sport Chrono package|Pachet Sport Chrono
Sport Turismo design|Caroserie Sport Turismo
Sport driving mode|Mod de condus Sport
Sport driving modes|Moduri de condus sport
Sport seats|Scaune sport
Sport seats with diamond stitching|Scaune sport cu cusături în romburi
Sport sedan design|Design de berlină sport
Sport steering wheel|Volan sport
Sport suspension|Suspensie sport
Sport-tuned suspension|Suspensie cu reglaj sport
SportDesign package|Pachet SportDesign
Sports car design|Design de mașină sport
Sports exhaust|Evacuare sport
Sports seats|Scaune sport
Sports seats with leather|Scaune sport din piele
Sports suspension|Suspensie sport
Sporty appearance|Aspect sportiv
Stability control|Controlul stabilității
Stability management|Gestionarea stabilității
Stingray styling|Design Stingray
Sunroof|Trapă
Supercar design|Design de supercar
Swedish craftsmanship|Măiestrie suedeză
Swedish engineering|Inginerie suedeză
Tech-focused interior|Interior axat pe tehnologie
Three locking differentials|Trei diferențiale blocabile
Three-zone climate control|Climatizare pe trei zone
Tire pressure monitoring|Monitorizarea presiunii în anvelope
Top-exit exhaust|Evacuare cu ieșire superioară
Torque vectoring|Distribuție vectorială a cuplului
Towing capability|Capacitate de tractare
Track telemetry|Telemetrie pentru circuit
Track-focused design|Design axat pe utilizarea pe circuit
Track-focused hypercar|Hipercar pentru circuit
Traction control|Controlul tracțiunii
Traffic sign recognition|Recunoașterea indicatoarelor rutiere
Trail assist|Asistent pentru teren accidentat
Trilobe grille|Grilă trilobată
USB integration|Integrare USB
USB port|Port USB
USB ports|Porturi USB
Urban styling|Design urban
Virtual cockpit|Instrumentar de bord digital
Virtual cockpit plus|Instrumentar de bord digital Plus
Voice control|Comandă vocală
Voice recognition|Recunoaștere vocală
WiFi connectivity|Conectivitate Wi-Fi
WiFi hotspot|Hotspot Wi-Fi
Widebody styling|Caroserie lățită
Wireless charging|Încărcare wireless
Wireless phone charging|Încărcare wireless pentru telefon
Wireless smartphone charger|Încărcător wireless pentru smartphone
Wireless smartphone integration|Integrare wireless pentru smartphone
Wood trim|Ornamente din lemn
Xenon headlights|Faruri xenon
Z51 performance package|Pachet de performanță Z51
iPod integration|Integrare iPod
360-degree camera|Cameră de 360°
360° camera|Cameră de 360°
360° camera + parking sensors|Cameră de 360° și senzori de parcare
800-volt architecture|Arhitectură de 800 V
800V charging capability|Compatibilitate cu încărcarea la 800 V
4-seater hypercar design|Design de hipercar cu patru locuri
6-disc CD changer|Magazie pentru șase CD-uri
5G connectivity|Conectivitate 5G
Adjust speed according to route and topography|Adaptarea vitezei la traseu și relief
Black|Negru
Metallic Blue|Albastru metalizat
Matte Silver|Argintiu mat
Pearl White|Alb perlat
Obsidian Black|Negru Obsidian
Available on request|Disponibil la cerere
Confirmed on consultation|Se confirmă în cadrul consultanței
    `.trim().split('\n').map(line => line.trim().split('|')));

    // Factory colour names, model codes and registered systems are identifiers,
    // not untranslated prose. Keep their original spelling in both languages.
    const names = new Set(`Alfa Rosso|Alfa White|Rosso Alfa|Rosso Competizione|Barcelona Burgundy|Black Sapphire|Carrara White|Corvette Racing Yellow|Designo Diamond White|Elkhart Lake Blue|Eminent White|Florett Silver|GT Silver|Ghost Purple|Hyper Blue|Ice Grey Metallic|Ice White|Jerez Black|Liquid Silver|Macho Green|Makalu Gray|Melbourne Red|Midnight Silver|Misano Blue|Mythos Black|Nardo Gray|Navarra Blue|Nebula Red|Neumünster Silver|Obsidian Gray|Opulent Blue|Phytonic Blue|Polar White|Red Hot|Sao Paulo Green|Saville Silver|Selenite Grey|Silverstone II|Solar Yellow|Sonoma Green|Tango Red|Torch Red|Toronto Red|Ultra White|Utah Gray|Vik Black|VIN|Model|model|Electric|4x4|4x4 - 4MATIC|E55 AMG|M8|Apple CarPlay & Android Auto|Audi connect|Audi pre sense|Audi pre sense 360|Audi pre sense basic|Audi pre sense city|Audi pre sense front|Audi virtual cockpit|BMW Live Cockpit Professional|Lexus Safety System+|Lexus Safety System+ 2.0|Lexus Safety System+ 2.5|Light Speed Transmission|Magnetic Ride Control|MMI touch response|Mercedes me connect|Nurburgring Edition|Porsche Active Safe|Porsche Active Suspension Management|Porsche Communication Management|Porsche Dynamic Chassis Control|Porsche InnoDrive|Porsche Sport Exhaust|Porsche Traction Management`.split('|'));
    const decimal = value => value.replace('.', ',');
    const patterns = [
        [/^([\d,.]+) HP$/i, (_, n) => `${n.replaceAll(',', '.')} CP`],
        [/^(\d+)-month warranty$/, (_, n) => `Garanție de ${n} ${Number(n) >= 20 ? 'de ' : ''}luni`],
        [/^Top speed: (\d+) km\/h$/, (_, n) => `Viteză maximă: ${n} km/h`],
        [/^0-100 km\/h in ([\d.]+) seconds$/, (_, n) => `0–100 km/h în ${decimal(n)} secunde`],
        [/^(Automatic|Automated Manual|Manual) (\d+)-speed$/, (_, type, n) => `Cutie ${type === 'Automatic' ? 'automată' : type === 'Manual' ? 'manuală' : 'manuală robotizată'} cu ${n} trepte`],
        [/^Automatic (.+)$/, (_, name) => `Cutie automată ${name}`],
        [/^(\d+)-speed (automatic|manual|sequential|twin-clutch|dual-clutch) transmission$/, (_, n, type) => `Cutie ${ {automatic:'automată',manual:'manuală',sequential:'secvențială','twin-clutch':'cu dublu ambreiaj','dual-clutch':'cu dublu ambreiaj'}[type]} cu ${n} trepte`],
        [/^(\d+)-speed (.+) transmission$/, (_, n, name) => `Transmisie ${name} cu ${n} trepte`],
        [/^([\d.]+)-inch (touchscreen display|touchscreen|curved display|instrument cluster|navigation display|navigation|infotainment|display)$/, (_, n, type) => `${{'touchscreen display':'Ecran tactil',touchscreen:'Ecran tactil','curved display':'Ecran curbat','instrument cluster':'Instrumentar de bord','navigation display':'Ecran de navigație',navigation:'Navigație',infotainment:'Sistem multimedia',display:'Ecran'}[type]} de ${decimal(n)} inchi`],
        [/^(\d+)-inch(?: (AMG|M|Taycan|alloy|forged|front))? wheels$/, (_, n, type) => `Jante${{AMG:' AMG',M:' M',Taycan:' Taycan',alloy:' din aliaj',forged:' forjate',front:' față'}[type] || ''} de ${n} inchi`],
        [/^(\d+)-inch\/(\d+)-inch wheels$/, (_, a, b) => `Jante de ${a}/${b} inchi`],
        [/^([\d.]+) kWh battery$/, (_, n) => `Baterie de ${decimal(n)} kWh`],
        [/^([\d.]+)L (.+)$/, (_, size, engine) => {
            const translated = engine.replace(/naturally aspirated/gi, 'aspirat natural').replace(/Turbocharged/gi, 'turbo').replace(/Supercharged/gi, 'cu compresor').replace(/supercharged/gi, 'cu compresor').replace(/Twin-Turbo/gi, 'biturbo').replace(/Inline (\d)-cylinder/gi, '$1 cilindri în linie').replace(/(\d)-cylinder/gi, '$1 cilindri').replace(/dual electric motors/gi, 'două motoare electrice').replace(/electric motors/gi, 'motoare electrice').replace(/petrol/gi, 'pe benzină').replace(/diesel/gi, 'diesel').replace(/hybrid/gi, 'hibrid').replace(/\s*engine/gi, '').replace(/Boxer/g, 'boxer');
            return `Motor de ${decimal(size)} l — ${translated}`;
        }]
    ];
    function text(value, lang = document.documentElement.lang) {
        const raw = String(value ?? '');
        if (lang !== 'ro') return raw;
        if (Object.hasOwn(ro, raw)) return ro[raw];
        for (const [pattern, replace] of patterns) if (pattern.test(raw)) return raw.replace(pattern, replace);
        return raw;
    }
    function covered(value) {
        const raw = String(value ?? '');
        return Object.hasOwn(ro, raw) || names.has(raw) || /^[\d.,\s]+(?:cm³|km|kWh)?$/.test(raw) || patterns.some(([pattern]) => pattern.test(raw));
    }
    function price(value, lang = document.documentElement.lang) {
        const raw = String(value ?? '');
        if (lang !== 'ro' || !/^€[\d,]+$/.test(raw)) return raw;
        return new Intl.NumberFormat('ro-RO', { style: 'currency', currency: 'EUR', currencyDisplay: 'narrowSymbol', maximumFractionDigits: 0 }).format(Number(raw.replace(/[^0-9]/g, '')));
    }
    window.carzoneVehicleI18n = { text, covered, price };
})();
