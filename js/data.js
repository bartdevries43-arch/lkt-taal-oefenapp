/* ============================================================
   LKT Taal – Oefenapp  ·  DATA
   ------------------------------------------------------------
   Inhoud gebaseerd op "Samenvatting Taal – Kennisbasis Taal".
   Elk hoofdstuk bevat:
     - concepts : begrippen met uitleg, voorbeeld, icoon en (soms) illustratie
     - mc       : meerkeuzevragen
     - match    : begrip <-> korte omschrijving voor de sleep/match-oefening
   De vier oefenvormen (flashcards, meerkeuze, match, examen) worden
   automatisch uit deze data opgebouwd. Een nieuw hoofdstuk toevoegen =
   een nieuw object aan CHAPTERS toevoegen.
   ============================================================ */

/* ---- Herbruikbare illustraties (inline SVG, werken offline) ---- */
const ART = {
  receptiefProductief: `
    <svg viewBox="0 0 200 110" role="img" aria-label="Receptief versus productief">
      <g fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round">
        <circle cx="52" cy="45" r="20" fill="var(--tint-a)"/>
        <path d="M46 45h12M52 39v12" stroke="var(--brand)"/>
        <circle cx="148" cy="45" r="20" fill="var(--tint-b)"/>
        <path d="M141 45c3-5 11-5 14 0" stroke="var(--accent)"/>
      </g>
      <text x="52" y="90" text-anchor="middle" class="art-t">begrijpen</text>
      <text x="148" y="90" text-anchor="middle" class="art-t">zelf gebruiken</text>
      <text x="52" y="104" text-anchor="middle" class="art-s">receptief</text>
      <text x="148" y="104" text-anchor="middle" class="art-s">productief</text>
    </svg>`,
  labelConcept: `
    <svg viewBox="0 0 200 110" role="img" aria-label="Label en concept">
      <rect x="18" y="34" width="70" height="30" rx="6" fill="var(--tint-a)" stroke="var(--brand)" stroke-width="2"/>
      <text x="53" y="54" text-anchor="middle" class="art-b">hond</text>
      <path d="M92 49h26" stroke="var(--muted)" stroke-width="2" marker-end="url(#ar)"/>
      <circle cx="150" cy="49" r="26" fill="var(--tint-b)" stroke="var(--accent)" stroke-width="2"/>
      <text x="150" y="46" text-anchor="middle" class="art-e">🐕</text>
      <text x="53" y="86" text-anchor="middle" class="art-s">label (vorm)</text>
      <text x="150" y="90" text-anchor="middle" class="art-s">concept (idee)</text>
      <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
        <path d="M0 0l6 4-6 4" fill="none" stroke="var(--muted)" stroke-width="1.5"/></marker></defs>
    </svg>`,
  synoniem: `
    <svg viewBox="0 0 200 100" role="img" aria-label="Synoniem">
      <rect x="20" y="32" width="66" height="30" rx="6" fill="var(--tint-a)"/>
      <rect x="114" y="32" width="66" height="30" rx="6" fill="var(--tint-a)"/>
      <text x="53" y="52" text-anchor="middle" class="art-b">raam</text>
      <text x="147" y="52" text-anchor="middle" class="art-b">venster</text>
      <text x="100" y="52" text-anchor="middle" class="art-eq">=</text>
      <text x="100" y="86" text-anchor="middle" class="art-s">zelfde betekenis</text>
    </svg>`,
  antoniem: `
    <svg viewBox="0 0 200 100" role="img" aria-label="Antoniem">
      <rect x="20" y="32" width="66" height="30" rx="6" fill="var(--tint-b)"/>
      <rect x="114" y="32" width="66" height="30" rx="6" fill="var(--tint-b)"/>
      <text x="53" y="52" text-anchor="middle" class="art-b">warm</text>
      <text x="147" y="52" text-anchor="middle" class="art-b">koud</text>
      <text x="100" y="53" text-anchor="middle" class="art-eq">⇄</text>
      <text x="100" y="86" text-anchor="middle" class="art-s">tegengesteld</text>
    </svg>`,
  hyponiem: `
    <svg viewBox="0 0 200 110" role="img" aria-label="Hyponiem">
      <rect x="66" y="14" width="68" height="28" rx="6" fill="var(--tint-a)" stroke="var(--brand)" stroke-width="2"/>
      <text x="100" y="33" text-anchor="middle" class="art-b">fruit</text>
      <path d="M100 42v14M100 56H46m54 0h54M46 56v10m108-10v10M100 56v10" stroke="var(--muted)" stroke-width="2" fill="none"/>
      <g class="art-leaf">
        <rect x="20" y="70" width="52" height="26" rx="6" fill="var(--tint-b)"/>
        <rect x="74" y="70" width="52" height="26" rx="6" fill="var(--tint-b)"/>
        <rect x="128" y="70" width="52" height="26" rx="6" fill="var(--tint-b)"/>
        <text x="46" y="88" text-anchor="middle" class="art-t">mango</text>
        <text x="100" y="88" text-anchor="middle" class="art-t">appel</text>
        <text x="154" y="88" text-anchor="middle" class="art-t">peer</text>
      </g>
    </svg>`,
  categoriseren: `
    <svg viewBox="0 0 200 110" role="img" aria-label="Categoriseren">
      <rect x="54" y="10" width="92" height="26" rx="6" fill="var(--tint-a)" stroke="var(--brand)" stroke-width="2"/>
      <text x="100" y="28" text-anchor="middle" class="art-b">dieren</text>
      <g class="art-leaf">
        <circle cx="45" cy="78" r="22" fill="var(--tint-b)"/><text x="45" y="84" text-anchor="middle" class="art-e">🐄</text>
        <circle cx="100" cy="78" r="22" fill="var(--tint-b)"/><text x="100" y="84" text-anchor="middle" class="art-e">🐈</text>
        <circle cx="155" cy="78" r="22" fill="var(--tint-b)"/><text x="155" y="84" text-anchor="middle" class="art-e">🐐</text>
      </g>
    </svg>`,
  netwerk: `
    <svg viewBox="0 0 200 120" role="img" aria-label="Netwerkopbouw">
      <g stroke="var(--muted)" stroke-width="2">
        <line x1="100" y1="60" x2="40" y2="28"/><line x1="100" y1="60" x2="165" y2="30"/>
        <line x1="100" y1="60" x2="35" y2="95"/><line x1="100" y1="60" x2="165" y2="95"/>
      </g>
      <circle cx="100" cy="60" r="24" fill="var(--tint-a)" stroke="var(--brand)" stroke-width="2"/>
      <text x="100" y="65" text-anchor="middle" class="art-b">geit</text>
      <g class="art-leaf" font-size="9">
        <circle cx="40" cy="26" r="16" fill="var(--tint-b)"/><text x="40" y="29" text-anchor="middle" class="art-t">dier</text>
        <circle cx="165" cy="28" r="17" fill="var(--tint-b)"/><text x="165" y="31" text-anchor="middle" class="art-t">boerderij</text>
        <circle cx="33" cy="95" r="16" fill="var(--tint-b)"/><text x="33" y="98" text-anchor="middle" class="art-t">mekkeren</text>
        <circle cx="165" cy="95" r="16" fill="var(--tint-b)"/><text x="165" y="98" text-anchor="middle" class="art-t">4 poten</text>
      </g>
    </svg>`,
  homofoon: `
    <svg viewBox="0 0 200 100" role="img" aria-label="Homofoon">
      <text x="100" y="24" text-anchor="middle" class="art-s">klinkt hetzelfde 🔊</text>
      <rect x="20" y="34" width="66" height="30" rx="6" fill="var(--tint-a)"/>
      <rect x="114" y="34" width="66" height="30" rx="6" fill="var(--tint-b)"/>
      <text x="53" y="54" text-anchor="middle" class="art-b">hart</text>
      <text x="147" y="54" text-anchor="middle" class="art-b">hard</text>
      <text x="100" y="86" text-anchor="middle" class="art-s">anders geschreven</text>
    </svg>`
};

/* ---- HOOFDSTUK: Woordenschat ---- */
const CH_WOORDENSCHAT = {
  id: "woordenschat",
  nr: 3,
  title: "Woordenschat",
  subtitle: "Woorden leren, betekenis en woordrelaties",
  icon: "📚",
  intro: "Woordenschat gaat over hoe kinderen woorden leren, opslaan en gebruiken. Je leert het mentaal lexicon kennen, het verschil tussen receptieve en productieve woordenschat, hoe woordenschat groeit (labelen, categoriseren, netwerkopbouw) en welke woordrelaties en woordsoorten er zijn.",

  concepts: [
    { t:"Mentaal lexicon", icon:"🧠",
      d:"Het woordgeheugen: de plek in je langetermijngeheugen waar per woord álle informatie ligt opgeslagen — klank, uitspraak, spelling, betekenis, woordopbouw, zinsgebruik en gebruikssituatie.",
      ex:"Bij het woord 'fiets' weet je hoe het klinkt, wat het betekent, hoe je het schrijft en wanneer je het gebruikt. Al die kennis samen zit in je mentaal lexicon." },
    { t:"Receptieve woordenschat", icon:"👂", art:"receptiefProductief",
      d:"De woorden die je begrijpt of herkent wanneer je ze hoort of leest, ook al gebruik je ze zelf (nog) niet.",
      ex:"Je snapt het woord 'erosie' als je het in een tekst tegenkomt, maar je gebruikt het zelf nog niet." },
    { t:"Productieve woordenschat", icon:"🗣️", art:"receptiefProductief",
      d:"De woorden die je zelf actief gebruikt bij spreken en schrijven.",
      ex:"Je gebruikt het woord 'erosie' zelf in een uitleg. Dan hoort het bij je productieve woordenschat." },
    { t:"Label", icon:"🏷️", art:"labelConcept",
      d:"De klank- of woordvorm van een woord: de 'buitenkant', hoe het klinkt en hoe je het schrijft.",
      ex:"Het woord 'hond' (de letters en de klank) is het label." },
    { t:"Concept", icon:"💡", art:"labelConcept",
      d:"De betekenis van een woord: het idee of beeld dat erbij hoort. De relatie tussen label en concept is meestal willekeurig.",
      ex:"Bij 'hond' hoort het concept: een viervoetig dier dat blaft. Het label 'hond' had ook een ander woord kunnen zijn." },
    { t:"Concrete betekenis", icon:"✋",
      d:"Een betekenis die je direct kunt zien, aanwijzen, aanraken of ervaren.",
      ex:"Je wijst een stoel aan: het woord 'stoel' heeft een concrete betekenis." },
    { t:"Abstracte betekenis", icon:"🌫️",
      d:"Een betekenis die je niet kunt aanwijzen. Je legt die uit met kenmerken, uitleg of voorbeelden.",
      ex:"'Rechtvaardigheid' kun je niet aanwijzen; je legt het uit met voorbeelden." },
    { t:"Contextuele betekenis", icon:"🔗",
      d:"De betekenisrelaties die een woord heeft met andere woorden in een situatie of zin.",
      ex:"Bij 'gitaar' horen woorden als 'spelen', 'snaren' en 'muziek'." },
    { t:"Labelen", icon:"🏷️",
      d:"Een nieuw woord koppelen aan een voorwerp, gebeurtenis of ervaring uit de werkelijkheid — een 'etiket' plakken.",
      ex:"De leerkracht wijst een dier aan en zegt: 'dit is een geit'." },
    { t:"Categoriseren", icon:"🗂️", art:"categoriseren",
      d:"Woorden indelen in groepen of onderbrengen bij een overkoepelend begrip.",
      ex:"Hond, kat en geit horen bij de categorie 'dieren'; mango hoort bij 'fruit'." },
    { t:"Netwerkopbouw", icon:"🕸️", art:"netwerk",
      d:"Nieuwe woorden verbinden met woorden die je al kent, zodat er een netwerk van betekenissen ontstaat.",
      ex:"Bij 'geit' sluiten woorden aan als dier, boerderij, mekkeren en vier poten." },
    { t:"Woordleerstrategie", icon:"🧭",
      d:"Een bewuste aanpak om de betekenis van een onbekend woord te achterhalen. De vier strategieën: woord analyseren, context gebruiken, bron raadplegen en overeenkomsten tussen talen benutten.",
      ex:"Bij 'vuilnisophaaldienst' gebruik je analyse: vuilnis + ophalen + dienst." },
    { t:"Woord analyseren", icon:"🔍",
      d:"Een onbekend woord opsplitsen in bekende delen (morfemen) om de betekenis te vinden.",
      ex:"'Fietsbel' = fiets + bel." },
    { t:"Context gebruiken", icon:"📖",
      d:"De betekenis van een woord afleiden uit de zin, de situatie, gebaren of een afbeelding.",
      ex:"Uit de zin 'hij bibberde van de kou' raad je wat 'bibberen' betekent." },
    { t:"Bron raadplegen", icon:"📚",
      d:"De betekenis opzoeken of navragen, bijvoorbeeld in een woordenboek, op internet of bij een klasgenoot.",
      ex:"Je zoekt een moeilijk woord op in het woordenboek." },
    { t:"Synoniem", icon:"🟰", art:"synoniem",
      d:"Een woord met (ongeveer) dezelfde betekenis als een ander woord.",
      ex:"Raam en venster; blij en vrolijk." },
    { t:"Antoniem", icon:"↔️", art:"antoniem",
      d:"Een woord met een tegengestelde betekenis.",
      ex:"Warm en koud; groot en klein." },
    { t:"Hyponiem", icon:"🔽", art:"hyponiem",
      d:"Een specifiek woord waarvan de betekenis onder een overkoepelend begrip valt.",
      ex:"Mango is een hyponiem van fruit; mus is een hyponiem van vogel." },
    { t:"Categorie–exemplaar", icon:"📦",
      d:"De relatie tussen een overkoepelende groep (categorie) en een voorbeeld daaruit (exemplaar).",
      ex:"Vogel (categorie) – mus (exemplaar); fruit – mango." },
    { t:"Betekenisveld", icon:"🌐",
      d:"Een groep woorden die inhoudelijk bij elkaar horen omdat ze met hetzelfde onderwerp te maken hebben.",
      ex:"Tuin, schoffel, gras, harken en planten vormen samen een betekenisveld." },
    { t:"Homoniem", icon:"🔀",
      d:"Eén woordvorm met meerdere, los van elkaar staande betekenissen.",
      ex:"Bank: een meubel om op te zitten én een plek voor geld." },
    { t:"Homofoon", icon:"🔊", art:"homofoon",
      d:"Woorden die hetzelfde klinken maar verschillend geschreven worden.",
      ex:"Hart en hard; ij en ei; hij leidt en hij lijdt." },
    { t:"Homograaf", icon:"✍️",
      d:"Woorden die hetzelfde geschreven worden, maar anders worden uitgesproken (en anders betekenen).",
      ex:"'regent' (het regent) en 'regent' (een heerser); 'voorkomen'." },
    { t:"Vaktaalwoord", icon:"🔧",
      d:"Een woord dat hoort bij een specifiek vakgebied of schoolvak.",
      ex:"'Persoonsvorm' bij taal; 'erosie' bij aardrijkskunde." },
    { t:"Schooltaalwoord", icon:"🎓",
      d:"Een abstract woord dat je nodig hebt om onderwijs te kunnen volgen. Niet vakgebonden, maar wel schools.",
      ex:"Oorzaak, gevolg, functie, thema, samenvatting, kenmerk." },
    { t:"Signaalwoord", icon:"🚦",
      d:"Een woord dat een verband of relatie in een tekst zichtbaar maakt.",
      ex:"'Omdat' en 'doordat' geven een oorzaak aan; 'maar' geeft een tegenstelling aan." },
    { t:"Inhoudswoord", icon:"🧱",
      d:"Een woord met een duidelijke, zelfstandige betekenis (zoals zelfstandige naamwoorden en werkwoorden).",
      ex:"Fiets, lopen, mooi, huis." },
    { t:"Functiewoord", icon:"🔩",
      d:"Een woord met weinig eigen betekenis dat vooral een grammaticale rol speelt in de zin.",
      ex:"En, of, wie, de, het, met." }
  ],

  /* Meerkeuzevragen: ans = index van juiste optie */
  mc: [
    { q:"Wat is het mentaal lexicon?",
      opts:["Een woordenboek in de klas","Het woordgeheugen waarin per woord alle informatie ligt opgeslagen","Een lijst met moeilijke woorden","Alleen de woorden die je zelf gebruikt"],
      ans:1, leg:"Het mentaal lexicon is de systematische opslag van woordkennis (klank, betekenis, spelling, gebruik) in het langetermijngeheugen." },
    { q:"Een leerling begrijpt het woord 'erosie' in een tekst, maar gebruikt het zelf nog niet. Tot welke woordenschat behoort dit woord voor die leerling?",
      opts:["Productieve woordenschat","Receptieve woordenschat","Vaktaalwoordenschat","Contextuele woordenschat"],
      ans:1, leg:"Receptief = herkennen/begrijpen. Productief = zelf actief gebruiken. Begrijpen zonder gebruiken is dus receptief." },
    { q:"Wat is het verschil tussen 'label' en 'concept'?",
      opts:["Label is de betekenis, concept is de vorm","Label is de woordvorm, concept is de betekenis","Ze betekenen precies hetzelfde","Label hoort bij spreken, concept bij schrijven"],
      ans:1, leg:"Het label is de klank-/woordvorm ('hond'), het concept is de betekenis (het idee van het dier). De relatie ertussen is meestal willekeurig." },
    { q:"Bij welke manier van woordenschatverwerving koppel je een woord aan een voorwerp of ervaring?",
      opts:["Categoriseren","Netwerkopbouw","Labelen","Analyseren"],
      ans:2, leg:"Labelen = een 'etiket' plakken: een woord koppelen aan een voorwerp, gebeurtenis of ervaring uit de werkelijkheid." },
    { q:"Een kind leert dat hond, kat en geit allemaal 'dieren' zijn. Welk proces is dit?",
      opts:["Labelen","Categoriseren","Netwerkopbouw","Contextualiseren"],
      ans:1, leg:"Categoriseren = woorden onderbrengen in groepen of onder een overkoepelend begrip." },
    { q:"Wat gebeurt er bij 'netwerkopbouw' van woordenschat?",
      opts:["Woorden worden aan een voorwerp gekoppeld","Nieuwe woorden worden verbonden met woorden die je al kent","Woorden worden opgezocht in een bron","Woorden worden in lettergrepen gehakt"],
      ans:1, leg:"Bij netwerkopbouw leg je verbanden: nieuwe woorden worden gekoppeld aan bekende woorden, zodat een betekenisnetwerk ontstaat." },
    { q:"Welke vier woordleerstrategieën noemt de kennisbasis?",
      opts:["Lezen, luisteren, spreken, schrijven","Analyseren, context gebruiken, bron raadplegen, overeenkomst tussen talen","Labelen, categoriseren, netwerkopbouw, herhalen","Hakken, plakken, verklanken, herkennen"],
      ans:1, leg:"De vier strategieën om een onbekend woord te achterhalen: het woord analyseren, de context gebruiken, een bron raadplegen en overeenkomsten tussen talen benutten." },
    { q:"'Raam' en 'venster' zijn een voorbeeld van...",
      opts:["Antoniemen","Homoniemen","Synoniemen","Hyponiemen"],
      ans:2, leg:"Synoniemen zijn woorden met (ongeveer) dezelfde betekenis." },
    { q:"'Warm' en 'koud' zijn...",
      opts:["Synoniemen","Antoniemen","Homofonen","Hyponiemen"],
      ans:1, leg:"Antoniemen zijn woorden met een tegengestelde betekenis." },
    { q:"'Mango is een hyponiem van fruit.' Wat betekent dat?",
      opts:["Mango en fruit betekenen hetzelfde","De betekenis van mango valt onder het overkoepelende begrip fruit","Fruit valt onder mango","Mango en fruit zijn tegengesteld"],
      ans:1, leg:"Een hyponiem is een specifiek woord waarvan de betekenis onder een overkoepelend begrip valt. Mango is een soort fruit." },
    { q:"'Bank' kan een zitmeubel zijn óf een plek voor je geld. Dit is een voorbeeld van een...",
      opts:["Homofoon","Homograaf","Homoniem","Synoniem"],
      ans:2, leg:"Een homoniem is één woordvorm met meerdere, van elkaar losstaande betekenissen." },
    { q:"'Hart' en 'hard' klinken hetzelfde maar worden anders geschreven. Dit noem je...",
      opts:["Homografen","Homofonen","Homoniemen","Antoniemen"],
      ans:1, leg:"Homofonen klinken hetzelfde maar worden verschillend geschreven. (Homografen: hetzelfde geschreven, anders uitgesproken.)" },
    { q:"Welk woord is een schooltaalwoord?",
      opts:["Persoonsvorm","Oorzaak","Fiets","Erosie"],
      ans:1, leg:"Schooltaalwoorden zijn abstracte, niet-vakgebonden woorden die je nodig hebt om onderwijs te volgen, zoals oorzaak, gevolg en thema. 'Persoonsvorm' en 'erosie' zijn vaktaalwoorden." },
    { q:"'Omdat' en 'doordat' in een tekst zijn voorbeelden van...",
      opts:["Inhoudswoorden","Vaktaalwoorden","Signaalwoorden","Functiewoorden"],
      ans:2, leg:"Signaalwoorden maken een verband zichtbaar. 'Omdat' en 'doordat' geven een oorzaak-gevolgrelatie aan." },
    { q:"Wat is het verschil tussen een inhoudswoord en een functiewoord?",
      opts:["Een inhoudswoord heeft een duidelijke eigen betekenis; een functiewoord heeft vooral een grammaticale rol","Een inhoudswoord is altijd een werkwoord","Een functiewoord is een vaktaalwoord","Er is geen verschil"],
      ans:0, leg:"Inhoudswoorden (fiets, lopen) dragen betekenis. Functiewoorden (en, of, de) hebben weinig eigen betekenis en verbinden of ordenen." },
    { q:"Een leerling snapt 'vuilnisophaaldienst' door het woord in stukjes te delen. Welke woordleerstrategie is dit?",
      opts:["Context gebruiken","Bron raadplegen","Woord analyseren","Overeenkomst tussen talen"],
      ans:2, leg:"Het woord opsplitsen in bekende delen (vuilnis + ophalen + dienst) is analyseren." },
    { q:"'Rechtvaardigheid' kun je niet aanwijzen; je legt het uit met voorbeelden. Dit woord heeft een...",
      opts:["Concrete betekenis","Abstracte betekenis","Contextuele betekenis","Productieve betekenis"],
      ans:1, leg:"Abstracte betekenissen kun je niet direct aanwijzen; je verduidelijkt ze met kenmerken of voorbeelden." },
    { q:"Tuin, schoffel, gras en harken horen inhoudelijk bij elkaar. Zo'n groep woorden heet een...",
      opts:["Betekenisveld","Categorie","Synoniemenreeks","Woordfamilie"],
      ans:0, leg:"Een betekenisveld is een groep woorden die inhoudelijk bij elkaar horen omdat ze over hetzelfde onderwerp gaan." }
  ]
};

/* De volledige hoofdstuklijst wordt in chapters.generated.js samengesteld. */
