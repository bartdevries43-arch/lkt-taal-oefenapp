/* ============================================================
   LKT Taal – Oefenapp  ·  VERRIJKING PER HOOFDSTUK
   ------------------------------------------------------------
   De begrippen komen uit chapters.generated.js (uit de docx).
   Dit bestand voegt daar per hoofdstuk handmatig aan toe:
     - mc      : zorgvuldig geschreven meerkeuzevragen (toepassen/onderscheiden)
     - art     : illustraties bij kernbegrippen (verwijst naar ART-sleutel)
     - tweaks  : aangescherpte uitleg (d) of voorbeeld (ex) bij een begrip
   Zo blijven de gegenereerde begrippen herbruikbaar en staat al het
   handwerk overzichtelijk bij elkaar. Nieuw hoofdstuk verrijken =
   een blok aan ENRICH toevoegen; koppelen gebeurt onderaan automatisch.
   ============================================================ */

/* ---- Extra illustraties (naast die in data.js) ---- */
Object.assign(ART, {
  taalfuncties3: `
    <svg viewBox="0 0 210 118" role="img" aria-label="Drie functies van taal">
      <g>
        <rect x="6" y="30" width="60" height="46" rx="8" fill="var(--tint-a)" stroke="var(--brand)" stroke-width="2"/>
        <rect x="75" y="30" width="60" height="46" rx="8" fill="var(--tint-b)" stroke="var(--brand)" stroke-width="2"/>
        <rect x="144" y="30" width="60" height="46" rx="8" fill="var(--tint-a)" stroke="var(--accent)" stroke-width="2"/>
        <text x="36" y="50" text-anchor="middle" class="art-e">💬</text>
        <text x="105" y="50" text-anchor="middle" class="art-e">🧩</text>
        <text x="174" y="50" text-anchor="middle" class="art-e">🎨</text>
      </g>
      <text x="36" y="90" text-anchor="middle" class="art-t">communicatief</text>
      <text x="105" y="90" text-anchor="middle" class="art-t">conceptualis.</text>
      <text x="174" y="90" text-anchor="middle" class="art-t">expressief</text>
      <text x="36" y="104" text-anchor="middle" class="art-s">contact</text>
      <text x="105" y="104" text-anchor="middle" class="art-s">ordenen</text>
      <text x="174" y="104" text-anchor="middle" class="art-s">gevoel</text>
    </svg>`,
  taalniveaus: `
    <svg viewBox="0 0 210 132" role="img" aria-label="Zes taalniveaus">
      <g font-size="10">
        <rect x="8" y="6"   width="194" height="18" rx="5" fill="var(--tint-a)"/><text x="14" y="19" class="art-t">fonologisch · klank</text>
        <rect x="8" y="27"  width="194" height="18" rx="5" fill="var(--tint-b)"/><text x="14" y="40" class="art-t">morfologisch · woordopbouw</text>
        <rect x="8" y="48"  width="194" height="18" rx="5" fill="var(--tint-a)"/><text x="14" y="61" class="art-t">syntactisch · zinsbouw</text>
        <rect x="8" y="69"  width="194" height="18" rx="5" fill="var(--tint-b)"/><text x="14" y="82" class="art-t">semantisch · betekenis</text>
        <rect x="8" y="90"  width="194" height="18" rx="5" fill="var(--tint-a)"/><text x="14" y="103" class="art-t">pragmatisch · gebruik</text>
        <rect x="8" y="111" width="194" height="18" rx="5" fill="var(--tint-b)"/><text x="14" y="124" class="art-t">orthografisch · spelling</text>
      </g>
    </svg>`,
  datcat: `
    <svg viewBox="0 0 210 116" role="img" aria-label="DAT versus CAT">
      <rect x="8" y="20" width="92" height="80" rx="10" fill="var(--tint-a)" stroke="var(--brand)" stroke-width="2"/>
      <rect x="110" y="20" width="92" height="80" rx="10" fill="var(--tint-b)" stroke="var(--accent)" stroke-width="2"/>
      <text x="54" y="40" text-anchor="middle" class="art-b">DAT</text>
      <text x="156" y="40" text-anchor="middle" class="art-b">CAT</text>
      <text x="54" y="60" text-anchor="middle" class="art-e">🛝</text>
      <text x="156" y="60" text-anchor="middle" class="art-e">📘</text>
      <text x="54" y="84" text-anchor="middle" class="art-s">dagelijkse</text>
      <text x="54" y="95" text-anchor="middle" class="art-s">omgang</text>
      <text x="156" y="84" text-anchor="middle" class="art-s">schoolse</text>
      <text x="156" y="95" text-anchor="middle" class="art-s">vaktaal</text>
    </svg>`,
  geletterdheidLijn: `
    <svg viewBox="0 0 210 110" role="img" aria-label="Fasen van geletterdheid">
      <line x1="14" y1="40" x2="196" y2="40" stroke="var(--muted)" stroke-width="2"/>
      <g>
        <circle cx="40" cy="40" r="9" fill="var(--tint-a)" stroke="var(--brand)" stroke-width="2"/>
        <circle cx="105" cy="40" r="9" fill="var(--tint-b)" stroke="var(--brand)" stroke-width="2"/>
        <circle cx="170" cy="40" r="9" fill="var(--tint-a)" stroke="var(--accent)" stroke-width="2"/>
      </g>
      <text x="40" y="66" text-anchor="middle" class="art-t">ontluikend</text>
      <text x="105" y="66" text-anchor="middle" class="art-t">beginnend</text>
      <text x="170" y="66" text-anchor="middle" class="art-t">gevorderd</text>
      <text x="40" y="80" text-anchor="middle" class="art-s">0–4 jaar</text>
      <text x="105" y="80" text-anchor="middle" class="art-s">groep 1–3</text>
      <text x="170" y="80" text-anchor="middle" class="art-s">na groep 3</text>
    </svg>`
});

/* ---- Verrijking per hoofdstuk ---- */
const ENRICH = {

  /* =========================================================
     HOOFDSTUK 1 · Taalonderwijs en taal
     ========================================================= */
  taalonderwijs: {
    art: {
      "Communicatieve functie": "taalfuncties3",
      "Conceptualiserende functie": "taalfuncties3",
      "Expressieve functie": "taalfuncties3",
      "Fonologisch niveau": "taalniveaus",
      "Semantisch niveau": "taalniveaus",
      "DAT": "datcat",
      "CAT": "datcat",
      "Ontluikende geletterdheid": "geletterdheidLijn",
      "Beginnende geletterdheid": "geletterdheidLijn",
      "Gevorderde geletterdheid": "geletterdheidLijn"
    },
    mc: [
      { q:"Een leerling maakt tijdens het studeren aantekeningen om zijn gedachten te ordenen. Welke functie van taal gebruikt hij vooral?",
        opts:["Communicatieve functie","Conceptualiserende functie","Expressieve functie","Sociale functie"],
        ans:1, leg:"De conceptualiserende functie helpt om gedachten en de werkelijkheid te ordenen. Communicatief = contact met anderen, expressief = gevoelens uiten." },
      { q:"Welke functie van taal staat centraal bij het schrijven van een gedicht over verdriet?",
        opts:["Communicatieve functie","Conceptualiserende functie","Expressieve functie","Instrumentele functie"],
        ans:2, leg:"De expressieve functie gaat over het uiten van gevoelens, fantasie en persoonlijke beleving." },
      { q:"Een kind legt aan een klasgenoot uit hoe een gezelschapsspel werkt. Welke functie van taal gebruikt het vooral?",
        opts:["Expressieve functie","Communicatieve functie","Conceptualiserende functie","Orthografische functie"],
        ans:1, leg:"De communicatieve functie draait om contact en het uitwisselen van informatie met anderen." },
      { q:"Op welk taalniveau kijk je naar de betekenis van woorden en zinnen?",
        opts:["Fonologisch niveau","Syntactisch niveau","Semantisch niveau","Orthografisch niveau"],
        ans:2, leg:"Semantisch = betekenis. Fonologisch = klank, syntactisch = zinsbouw, orthografisch = spelling." },
      { q:"'Fiets + bel = fietsbel.' Op welk taalniveau speelt dit zich af?",
        opts:["Fonologisch niveau","Morfologisch niveau","Syntactisch niveau","Pragmatisch niveau"],
        ans:1, leg:"Het morfologische niveau gaat over de opbouw van woorden uit betekenisdelen (morfemen)." },
      { q:"Je zegt bewust 'u' tegen een onbekende volwassene. Bij welk taalniveau hoort deze keuze?",
        opts:["Semantisch niveau","Pragmatisch niveau","Syntactisch niveau","Fonologisch niveau"],
        ans:1, leg:"Het pragmatische niveau gaat over taalgebruik in een concrete situatie: beleefdheid, register en context." },
      { q:"Je let erop dat 'hond' met een d wordt geschreven (niet 'hont'). Op welk taalniveau werk je dan?",
        opts:["Fonologisch niveau","Orthografisch niveau","Semantisch niveau","Pragmatisch niveau"],
        ans:1, leg:"Het orthografische niveau gaat over spelling en interpunctie." },
      { q:"Welk woord is een schooltaalwoord en géén vaktaalwoord?",
        opts:["Persoonsvorm","Erosie","Oorzaak","Klinker"],
        ans:2, leg:"Schooltaalwoorden zijn abstracte, niet-vakgebonden woorden die je nodig hebt om onderwijs te volgen (oorzaak, gevolg, thema). Persoonsvorm, erosie en klinker horen bij een specifiek vak → vaktaalwoorden." },
      { q:"Een leerling praat vlot op het schoolplein, maar worstelt met een abstracte zaakvaktekst. Welk onderscheid past hier het best bij?",
        opts:["Receptief versus productief","DAT versus CAT","Concreet versus abstract label","Analyse versus synthese"],
        ans:1, leg:"DAT (Dagelijkse Algemene Taalvaardigheid) is de taal van alledaagse omgang; CAT (Cognitieve Academische Taalvaardigheid) is schoolse, abstracte taal. Een sterke DAT betekent niet automatisch een sterke CAT." },
      { q:"Wat kenmerkt schooltaal ten opzichte van dagelijkse taal?",
        opts:["Ze is informeler en losser","Ze is formeler en abstracter","Ze bestaat uitsluitend uit vaktermen","Ze wordt alleen gesproken, nooit geschreven"],
        ans:1, leg:"Schooltaal is formeler en abstracter dan dagelijkse taal. Je hebt haar nodig om opdrachten, uitleg en vakbegrippen te begrijpen." },
      { q:"Een peuter van 3 doet alsof hij voorleest en herkent het logo van de supermarkt. Welke fase van geletterdheid is dit?",
        opts:["Ontluikende geletterdheid","Beginnende geletterdheid","Gevorderde geletterdheid","Functionele geletterdheid"],
        ans:0, leg:"Ontluikende geletterdheid is de voorschoolse periode (0–4 jaar): de eerste kennismaking met geschreven taal via boeken, logo's en voorlezen." },
      { q:"In welke periode valt beginnende geletterdheid?",
        opts:["Voorschools (0–4 jaar)","Groep 1 tot en met 3","Na groep 3","Alleen in groep 8"],
        ans:1, leg:"Beginnende geletterdheid hoort bij groep 1 t/m 3: de ontwikkeling richting aanvankelijk lezen en schrijven." },
      { q:"Wat is het verschil tussen aanvankelijk lezen en voortgezet technisch lezen?",
        opts:["Aanvankelijk = leren lezen in groep 3; voortgezet = daarna vlotter en nauwkeuriger decoderen","Aanvankelijk = begrijpend lezen; voortgezet = technisch lezen","Ze betekenen precies hetzelfde","Aanvankelijk = na groep 3; voortgezet = in groep 3"],
        ans:0, leg:"Aanvankelijk lezen is de start van het leesonderwijs (groep 3). Voortgezet technisch lezen bouwt daarop voort: steeds vlotter en nauwkeuriger decoderen." },
      { q:"Taalonderwijs bestaat uit drie hoofdonderdelen. Welke rij klopt?",
        opts:["Mondelinge taalvaardigheid, schriftelijke taalvaardigheid en taalbeschouwing","Lezen, rekenen en schrijven","Spelling, grammatica en woordenschat","Luisteren, spreken en gebaren"],
        ans:0, leg:"Taalonderwijs omvat mondelinge taalvaardigheid (spreken/luisteren), schriftelijke taalvaardigheid (lezen/schrijven) en taalbeschouwing (nadenken over taal)." },
      { q:"Een klas bespreekt samen waarom je 'hij loopt' met een -t schrijft. Welk onderdeel van taalonderwijs is dit?",
        opts:["Mondelinge taalvaardigheid","Schriftelijke taalvaardigheid","Taalbeschouwing","Begrijpend lezen"],
        ans:2, leg:"Taalbeschouwing is nadenken over taalvorm, taalgebruik en hoe iets verwoord is — precies wat hier gebeurt." }
    ]
  }

};

/* ---- Verrijking toepassen op de hoofdstukken ---- */
(function applyEnrichment(){
  if (typeof CHAPTERS === "undefined") return;
  CHAPTERS.forEach(ch => {
    const e = ENRICH[ch.id];
    if (!e) return;
    if (e.mc) ch.mc = (ch.mc || []).concat(e.mc);
    if (e.tweaks || e.art) {
      ch.concepts.forEach(c => {
        if (e.tweaks && e.tweaks[c.t]) Object.assign(c, e.tweaks[c.t]);
        if (e.art && e.art[c.t]) c.art = e.art[c.t];
      });
    }
  });
})();
