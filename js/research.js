/* ============================================================
   ONDERZOEKSCHECK
   Voorzichtig aangescherpte kernbegrippen op basis van:
   - Uitwerking Kennisbasis Nederlands pabo (10voordeleraar)
   - SLO kerndoelen en schrijfonderwijs
   - Expertisecentrum Nederlands
   - Brede Vakinhoudelijke Richtlijn Dyslexie / Dyslexie Centraal

   De begrippenlijst en hoofdstukindeling blijven ongewijzigd.
   ============================================================ */

function enhanceConcept(chapterId, term, enhancement){
  const chapter = CHAPTERS.find(ch => ch.id === chapterId);
  const concept = chapter && chapter.concepts.find(item => item.t === term);
  if(concept) Object.assign(concept, enhancement);
}

enhanceConcept("taalonderwijs", "Mondelinge taalvaardigheid", {
  d:"De vaardigheid om doelgericht te spreken, te luisteren en gesprekken te voeren. Daarbij spelen inhoud, afstemming op de gesprekspartner en sociale interactie samen.",
  ex:"In een kringgesprek vertelt een leerling helder, luistert naar anderen en reageert passend op hun bijdrage.",
  focus:"Onthoud de drie onderdelen: spreken, luisteren én gesprekken voeren."
});

enhanceConcept("taalonderwijs", "Taalbeschouwing", {
  d:"Bewust nadenken over en onderzoeken van taalvorm, taalbetekenis en taalgebruik. Leerlingen leren taalverschijnselen analyseren, vergelijken en benoemen.",
  ex:"Leerlingen vergelijken de zinnen ‘Mag ik het raam openmaken?’ en ‘Doe dat raam open’ en bespreken het verschil in taalgebruik.",
  focus:"Taalbeschouwing is reflectie op taal; het is meer dan alleen zinsontleden."
});

enhanceConcept("taalonderwijs", "Ontluikende geletterdheid", {
  d:"De ontwikkeling van geletterdheid in de voorschoolse periode, waarin kinderen via boeken, logo’s, tekeningen en hun omgeving ontdekken dat geschreven taal betekenis en functies heeft.",
  ex:"Een peuter herkent het logo van een winkel en doet alsof hij een prentenboek voorleest.",
  focus:"Ontluikend hoort bij de voorschoolse periode; formeel leesonderwijs is nog niet begonnen."
});

enhanceConcept("taalonderwijs", "Beginnende geletterdheid", {
  d:"De fase in groep 1 tot en met 3 waarin kinderen inzicht ontwikkelen in geschreven taal, klanken leren onderscheiden en het alfabetisch principe leren gebruiken.",
  ex:"Een kleuter hoort dat maan met /m/ begint en koppelt die klank aan de letter m.",
  focus:"Beginnende geletterdheid verbindt taalbewustzijn, letterkennis en aanvankelijk lezen."
});

enhanceConcept("beginnende-geletterdheid", "Ontluikende geletterdheid", {
  d:"De ontwikkeling van geletterdheid in de voorschoolse periode, waarin kinderen via boeken, logo’s, tekeningen en hun omgeving ontdekken dat geschreven taal betekenis en functies heeft.",
  ex:"Een peuter herkent het logo van een winkel en doet alsof hij een prentenboek voorleest.",
  focus:"Ontluikend hoort bij de voorschoolse periode; formeel leesonderwijs is nog niet begonnen."
});

enhanceConcept("beginnende-geletterdheid", "Beginnende geletterdheid", {
  d:"De fase in groep 1 tot en met 3 waarin kinderen inzicht ontwikkelen in geschreven taal, klanken leren onderscheiden en het alfabetisch principe leren gebruiken.",
  ex:"Een leerling analyseert maan als /m/ - /aa/ - /n/ en leest het woord vervolgens samen.",
  focus:"Beginnende geletterdheid loopt van voorbereidend taalbewustzijn naar aanvankelijk lezen en schrijven."
});

enhanceConcept("beginnende-geletterdheid", "Alfabetisch principe", {
  d:"Het inzicht dat gesproken woorden uit fonemen bestaan en dat die klanken in geschreven taal door grafemen worden weergegeven.",
  ex:"De leerling begrijpt dat de klank /oe/ in boek door het grafeem oe wordt weergegeven.",
  focus:"Foneem is wat je hoort; grafeem is wat je ziet of schrijft."
});

enhanceConcept("beginnende-geletterdheid", "Foneem", {
  d:"De kleinste klankeenheid die in een taal betekenisverschil kan veroorzaken.",
  ex:"In pak en bak zorgt het verschil tussen /p/ en /b/ voor een andere betekenis.",
  focus:"Een foneem gaat over klank, niet automatisch over één afzonderlijke letter."
});

enhanceConcept("beginnende-geletterdheid", "Grafeem", {
  d:"Een letter of lettercombinatie die een foneem in geschreven taal weergeeft.",
  ex:"De klank /oe/ wordt geschreven met één grafeem dat uit twee letters bestaat: oe.",
  focus:"Een grafeem kan uit één letter of uit meerdere letters bestaan."
});

enhanceConcept("beginnende-geletterdheid", "Fonologisch bewustzijn", {
  d:"Het bewuste inzicht in de klankstructuur van gesproken taal, zoals woorden, rijm, lettergrepen en afzonderlijke klanken.",
  ex:"Een kind hoort dat maan en staan rijmen en kan olifant in lettergrepen verdelen.",
  focus:"Fonologisch bewustzijn is de brede categorie; fonemisch bewustzijn richt zich specifiek op fonemen."
});

enhanceConcept("beginnende-geletterdheid", "Fonemisch bewustzijn", {
  d:"Het bewust kunnen herkennen, analyseren, samenvoegen en manipuleren van afzonderlijke fonemen in gesproken woorden.",
  ex:"Een leerling hoort de klanken /v/ - /i/ - /s/ en voegt ze samen tot vis.",
  focus:"Fonemisch bewustzijn werkt op het niveau van losse klanken."
});

enhanceConcept("technisch-lezen", "Technisch lezen", {
  d:"Het accuraat en steeds vloeiender decoderen van geschreven woorden door grafemen aan fonemen en vervolgens aan woordbetekenissen te koppelen.",
  ex:"Een leerling zet k-a-t om in /k/ - /a/ - /t/, voegt de klanken samen en herkent het woord kat.",
  focus:"Lezen is decoderen; spellen verloopt omgekeerd en wordt ook coderen genoemd."
});

enhanceConcept("technisch-lezen", "Dyslexie", {
  d:"Een ernstig en hardnekkig lees- en/of spellingprobleem dat blijft bestaan ondanks goed onderwijs en gerichte, intensieve ondersteuning.",
  ex:"Een leerling blijft woorden traag en onnauwkeurig lezen nadat langdurig planmatige extra begeleiding is gegeven.",
  focus:"Bij toetsvragen zijn ernst, hardnekkigheid en uitsluiting van gebrekkig onderwijsaanbod kernpunten."
});

enhanceConcept("stellen", "Schrijfproces", {
  d:"Het cyclische proces van oriënteren, plannen, formuleren, reflecteren, reviseren en publiceren. Schrijvers bewegen tijdens het schrijven heen en weer tussen deze activiteiten.",
  ex:"Na feedback herschikt een leerling twee alinea’s, verduidelijkt de inleiding en controleert daarna spelling en interpunctie.",
  focus:"Het schrijfproces is recursief: plannen, schrijven en reviseren lopen niet strikt na elkaar."
});

enhanceConcept("taalbeschouwing-spelling", "Taalbeschouwing", {
  d:"Bewust nadenken over en onderzoeken van taalvorm, taalbetekenis en taalgebruik met strategieën als analyseren, vergelijken, classificeren en generaliseren.",
  ex:"Leerlingen groeperen woorden op woordsoort en formuleren daarna zelf een regel over hun gebruik.",
  focus:"De kern is taal onderzoeken en erover redeneren, niet alleen regels reproduceren."
});

enhanceConcept("taalbeschouwing-spelling", "Foneem", {
  d:"De kleinste klankeenheid die in een taal betekenisverschil kan veroorzaken.",
  ex:"De woorden tak en dak verschillen door de fonemen /t/ en /d/.",
  focus:"Fonemen behoren tot de gesproken taal; grafemen tot de geschreven taal."
});
