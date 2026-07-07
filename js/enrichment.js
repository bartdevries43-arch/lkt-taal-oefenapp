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
    </svg>`,
  luisterstrategie: `
    <svg viewBox="0 0 210 126" role="img" aria-label="Vier luisterstrategieën">
      <g font-size="10">
        <rect x="8"   y="8"  width="94" height="50" rx="8" fill="var(--tint-a)"/><text x="55" y="30" text-anchor="middle" class="art-t">globaal</text><text x="55" y="45" text-anchor="middle" class="art-s">grote lijn</text>
        <rect x="108" y="8"  width="94" height="50" rx="8" fill="var(--tint-b)"/><text x="155" y="30" text-anchor="middle" class="art-t">intensief</text><text x="155" y="45" text-anchor="middle" class="art-s">alle details</text>
        <rect x="8"   y="64" width="94" height="50" rx="8" fill="var(--tint-b)"/><text x="55" y="86" text-anchor="middle" class="art-t">gericht</text><text x="55" y="101" text-anchor="middle" class="art-s">specifieke info</text>
        <rect x="108" y="64" width="94" height="50" rx="8" fill="var(--tint-a)"/><text x="155" y="86" text-anchor="middle" class="art-t">kritisch</text><text x="155" y="101" text-anchor="middle" class="art-s">mening vormen</text>
      </g>
    </svg>`,
  taalontwikkeling: `
    <svg viewBox="0 0 210 110" role="img" aria-label="Fasen van taalontwikkeling">
      <line x1="12" y1="38" x2="198" y2="38" stroke="var(--muted)" stroke-width="2"/>
      <g>
        <circle cx="30"  cy="38" r="8" fill="var(--tint-a)" stroke="var(--brand)" stroke-width="2"/>
        <circle cx="85"  cy="38" r="8" fill="var(--tint-b)" stroke="var(--brand)" stroke-width="2"/>
        <circle cx="140" cy="38" r="8" fill="var(--tint-a)" stroke="var(--brand)" stroke-width="2"/>
        <circle cx="188" cy="38" r="8" fill="var(--tint-b)" stroke="var(--accent)" stroke-width="2"/>
      </g>
      <g font-size="8.5">
        <text x="30"  y="58" text-anchor="middle" class="art-t">prelinguaal</text><text x="30"  y="70" text-anchor="middle" class="art-s">0–1 jr</text>
        <text x="85"  y="58" text-anchor="middle" class="art-t">vroeglinguaal</text><text x="85"  y="70" text-anchor="middle" class="art-s">1–2,5 jr</text>
        <text x="140" y="58" text-anchor="middle" class="art-t">differentiatie</text><text x="140" y="70" text-anchor="middle" class="art-s">2,5–5 jr</text>
        <text x="188" y="58" text-anchor="middle" class="art-t">voltooiing</text><text x="188" y="70" text-anchor="middle" class="art-s">5–9 jr</text>
      </g>
    </svg>`,
  tweetaligheid: `
    <svg viewBox="0 0 210 108" role="img" aria-label="Simultane versus successieve tweetaligheid">
      <text x="8" y="24" class="art-t">simultaan</text>
      <rect x="80"  y="12" width="55" height="16" rx="5" fill="var(--tint-a)"/><text x="107" y="24" text-anchor="middle" class="art-s">taal 1</text>
      <rect x="140" y="12" width="55" height="16" rx="5" fill="var(--tint-b)"/><text x="167" y="24" text-anchor="middle" class="art-s">taal 2</text>
      <text x="8" y="66" class="art-t">successief</text>
      <rect x="80"  y="54" width="80" height="16" rx="5" fill="var(--tint-a)"/><text x="120" y="66" text-anchor="middle" class="art-s">taal 1</text>
      <rect x="165" y="54" width="30" height="16" rx="5" fill="var(--tint-b)"/><text x="180" y="66" text-anchor="middle" class="art-s">taal 2</text>
      <text x="107" y="94" text-anchor="middle" class="art-s">grens ± 3e jaar</text>
      <line x1="137" y1="8" x2="137" y2="88" stroke="var(--muted)" stroke-width="1" stroke-dasharray="3 3"/>
    </svg>`,
  competenties4: `
    <svg viewBox="0 0 210 120" role="img" aria-label="Vier communicatieve competenties">
      <g font-size="9.5">
        <rect x="8"   y="10" width="94" height="44" rx="8" fill="var(--tint-a)"/><text x="55" y="30" text-anchor="middle" class="art-t">grammaticaal</text><text x="55" y="44" text-anchor="middle" class="art-s">woorden &amp; vormen</text>
        <rect x="108" y="10" width="94" height="44" rx="8" fill="var(--tint-b)"/><text x="155" y="30" text-anchor="middle" class="art-t">tekstueel</text><text x="155" y="44" text-anchor="middle" class="art-s">opbouw tekst</text>
        <rect x="8"   y="62" width="94" height="44" rx="8" fill="var(--tint-b)"/><text x="55" y="82" text-anchor="middle" class="art-t">strategisch</text><text x="55" y="96" text-anchor="middle" class="art-s">omweg vinden</text>
        <rect x="108" y="62" width="94" height="44" rx="8" fill="var(--tint-a)"/><text x="155" y="82" text-anchor="middle" class="art-t">functioneel</text><text x="155" y="96" text-anchor="middle" class="art-s">passend bij situatie</text>
      </g>
    </svg>`,
  hakkenplakken: `
    <svg viewBox="0 0 210 120" role="img" aria-label="Hakken en plakken">
      <rect x="72" y="8" width="66" height="26" rx="7" fill="var(--tint-a)" stroke="var(--brand)" stroke-width="2"/>
      <text x="105" y="26" text-anchor="middle" class="art-b">maan</text>
      <g font-size="12">
        <rect x="20"  y="54" width="46" height="26" rx="7" fill="var(--tint-b)"/><text x="43"  y="72" text-anchor="middle" class="art-t">/m/</text>
        <rect x="82"  y="54" width="46" height="26" rx="7" fill="var(--tint-b)"/><text x="105" y="72" text-anchor="middle" class="art-t">/aa/</text>
        <rect x="144" y="54" width="46" height="26" rx="7" fill="var(--tint-b)"/><text x="167" y="72" text-anchor="middle" class="art-t">/n/</text>
      </g>
      <path d="M95 36l-40 14M115 36l40 14" stroke="var(--muted)" stroke-width="2" fill="none"/>
      <text x="40" y="100" text-anchor="middle" class="art-s">hakken ▼ analyse</text>
      <text x="170" y="100" text-anchor="middle" class="art-s">plakken ▲ synthese</text>
    </svg>`,
  foneemGrafeem: `
    <svg viewBox="0 0 210 100" role="img" aria-label="Foneem-grafeemkoppeling">
      <rect x="18" y="30" width="60" height="34" rx="8" fill="var(--tint-a)" stroke="var(--brand)" stroke-width="2"/>
      <text x="48" y="52" text-anchor="middle" class="art-b">/m/</text>
      <text x="48" y="78" text-anchor="middle" class="art-s">klank (foneem)</text>
      <path d="M84 47h42" stroke="var(--muted)" stroke-width="2"/>
      <text x="105" y="41" text-anchor="middle" class="art-eq">↔</text>
      <rect x="132" y="30" width="60" height="34" rx="8" fill="var(--tint-b)" stroke="var(--accent)" stroke-width="2"/>
      <text x="162" y="53" text-anchor="middle" class="art-b">m</text>
      <text x="162" y="78" text-anchor="middle" class="art-s">letter (grafeem)</text>
    </svg>`,
  schriftsystemen: `
    <svg viewBox="0 0 210 110" role="img" aria-label="Drie schriftsystemen">
      <rect x="6"   y="20" width="60" height="54" rx="9" fill="var(--tint-a)"/>
      <rect x="75"  y="20" width="60" height="54" rx="9" fill="var(--tint-b)"/>
      <rect x="144" y="20" width="60" height="54" rx="9" fill="var(--tint-a)"/>
      <text x="36"  y="52" text-anchor="middle" class="art-e">🚸</text>
      <text x="105" y="53" text-anchor="middle" class="art-b">漢</text>
      <text x="174" y="52" text-anchor="middle" class="art-b">A B C</text>
      <text x="36"  y="88" text-anchor="middle" class="art-s">pictografisch</text>
      <text x="105" y="88" text-anchor="middle" class="art-s">logografisch</text>
      <text x="174" y="88" text-anchor="middle" class="art-s">alfabetisch</text>
    </svg>`,
  leesmodellen: `
    <svg viewBox="0 0 210 118" role="img" aria-label="Drie leesmodellen">
      <g font-size="8.5">
        <text x="35"  y="14" text-anchor="middle" class="art-t">bottom-up</text>
        <rect x="10" y="20" width="50" height="16" rx="4" fill="var(--tint-b)"/><text x="35" y="31" text-anchor="middle" class="art-s">betekenis</text>
        <rect x="10" y="72" width="50" height="16" rx="4" fill="var(--tint-a)"/><text x="35" y="83" text-anchor="middle" class="art-s">letters</text>
        <path d="M35 70V38" stroke="var(--brand)" stroke-width="2" marker-end="url(#up)"/>
        <text x="105" y="14" text-anchor="middle" class="art-t">top-down</text>
        <rect x="80" y="20" width="50" height="16" rx="4" fill="var(--tint-a)"/><text x="105" y="31" text-anchor="middle" class="art-s">voorkennis</text>
        <rect x="80" y="72" width="50" height="16" rx="4" fill="var(--tint-b)"/><text x="105" y="83" text-anchor="middle" class="art-s">woord</text>
        <path d="M105 38v32" stroke="var(--accent)" stroke-width="2" marker-end="url(#up)"/>
        <text x="175" y="14" text-anchor="middle" class="art-t">interactief</text>
        <rect x="150" y="20" width="50" height="16" rx="4" fill="var(--tint-b)"/>
        <rect x="150" y="72" width="50" height="16" rx="4" fill="var(--tint-a)"/><text x="175" y="83" text-anchor="middle" class="art-s">samen</text>
        <path d="M175 38v32M175 70V38" stroke="var(--brand)" stroke-width="2"/>
        <path d="M170 44l5-7 5 7M170 64l5 7 5-7" fill="none" stroke="var(--brand)" stroke-width="2"/>
      </g>
      <text x="105" y="106" text-anchor="middle" class="art-s">van klein → betekenis, of van voorkennis → woord</text>
      <defs><marker id="up" markerWidth="8" markerHeight="8" refX="4" refY="1" orient="auto"><path d="M0 6l4-6 4 6" fill="none" stroke="var(--brand)" stroke-width="1.5"/></marker></defs>
    </svg>`,
  klemtoon: `
    <svg viewBox="0 0 210 96" role="img" aria-label="Klemtoon verandert betekenis">
      <text x="105" y="30" text-anchor="middle" class="art-b"><tspan fill="var(--brand)">VOOR</tspan>komen</text>
      <text x="105" y="46" text-anchor="middle" class="art-s">= gebeuren</text>
      <text x="105" y="72" text-anchor="middle" class="art-b">voor<tspan fill="var(--accent)">KOMEN</tspan></text>
      <text x="105" y="88" text-anchor="middle" class="art-s">= verhinderen</text>
    </svg>`,
  tekstsoorten: `
    <svg viewBox="0 0 210 104" role="img" aria-label="Vijf tekstsoorten">
      <g font-size="8">
        <rect x="4"   y="20" width="38" height="40" rx="7" fill="var(--tint-a)"/><text x="23"  y="46" text-anchor="middle" class="art-e">📖</text><text x="23"  y="72" text-anchor="middle" class="art-s">verhalend</text><text x="23"  y="82" text-anchor="middle" class="art-s">amuseren</text>
        <rect x="46"  y="20" width="38" height="40" rx="7" fill="var(--tint-b)"/><text x="65"  y="46" text-anchor="middle" class="art-e">📰</text><text x="65"  y="72" text-anchor="middle" class="art-s">informatief</text><text x="65"  y="82" text-anchor="middle" class="art-s">informeren</text>
        <rect x="88"  y="20" width="38" height="40" rx="7" fill="var(--tint-a)"/><text x="107" y="46" text-anchor="middle" class="art-e">🧾</text><text x="107" y="72" text-anchor="middle" class="art-s">directief</text><text x="107" y="82" text-anchor="middle" class="art-s">instrueren</text>
        <rect x="130" y="20" width="38" height="40" rx="7" fill="var(--tint-b)"/><text x="149" y="46" text-anchor="middle" class="art-e">💭</text><text x="149" y="72" text-anchor="middle" class="art-s">beschouwend</text><text x="149" y="82" text-anchor="middle" class="art-s">mening</text>
        <rect x="172" y="20" width="34" height="40" rx="7" fill="var(--tint-a)"/><text x="189" y="46" text-anchor="middle" class="art-e">📣</text><text x="189" y="72" text-anchor="middle" class="art-s">argument.</text><text x="189" y="82" text-anchor="middle" class="art-s">overtuigen</text>
      </g>
    </svg>`,
  perceptieCognitie: `
    <svg viewBox="0 0 210 96" role="img" aria-label="Perceptie en cognitie">
      <circle cx="52" cy="44" r="26" fill="var(--tint-a)" stroke="var(--brand)" stroke-width="2"/>
      <text x="52" y="50" text-anchor="middle" class="art-e">👁️</text>
      <path d="M82 44h44M120 39l8 5-8 5" fill="none" stroke="var(--muted)" stroke-width="2"/>
      <circle cx="158" cy="44" r="26" fill="var(--tint-b)" stroke="var(--accent)" stroke-width="2"/>
      <text x="158" y="50" text-anchor="middle" class="art-e">🧠</text>
      <text x="52" y="84" text-anchor="middle" class="art-s">perceptie · zintuigen</text>
      <text x="158" y="84" text-anchor="middle" class="art-s">cognitie · verwerken</text>
    </svg>`,
  schrijfproces: `
    <svg viewBox="0 0 210 116" role="img" aria-label="Het schrijfproces als cyclus">
      <circle cx="45"  cy="46" r="26" fill="var(--tint-a)" stroke="var(--brand)" stroke-width="2"/>
      <circle cx="105" cy="46" r="26" fill="var(--tint-b)" stroke="var(--brand)" stroke-width="2"/>
      <circle cx="165" cy="46" r="26" fill="var(--tint-a)" stroke="var(--accent)" stroke-width="2"/>
      <text x="45"  y="50" text-anchor="middle" class="art-t">plannen</text>
      <text x="105" y="50" text-anchor="middle" class="art-t">schrijven</text>
      <text x="165" y="50" text-anchor="middle" class="art-t">reviseren</text>
      <path d="M73 40h4M79 40l-6-3v6z" fill="var(--muted)" stroke="var(--muted)"/>
      <path d="M133 40h4M139 40l-6-3v6z" fill="var(--muted)" stroke="var(--muted)"/>
      <path d="M150 74c-30 22-75 22-105 0" fill="none" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="4 3"/>
      <text x="105" y="104" text-anchor="middle" class="art-s">de fasen wisselen elkaar af</text>
    </svg>`,
  rijmschemas: `
    <svg viewBox="0 0 210 116" role="img" aria-label="Vier rijmschema's">
      <g font-size="10" text-anchor="middle">
        <text x="27"  y="16" class="art-t">gepaard</text>
        <text x="27"  y="36" class="art-b">A</text><text x="27" y="52" class="art-b">A</text><text x="27" y="68" class="art-b">B</text><text x="27" y="84" class="art-b">B</text>
        <text x="80"  y="16" class="art-t">omarmend</text>
        <text x="80"  y="36" class="art-b">A</text><text x="80" y="52" class="art-b">B</text><text x="80" y="68" class="art-b">B</text><text x="80" y="84" class="art-b">A</text>
        <text x="133" y="16" class="art-t">gekruist</text>
        <text x="133" y="36" class="art-b">A</text><text x="133" y="52" class="art-b">B</text><text x="133" y="68" class="art-b">A</text><text x="133" y="84" class="art-b">B</text>
        <text x="184" y="16" class="art-t">gebroken</text>
        <text x="184" y="36" class="art-b">A</text><text x="184" y="52" class="art-b">B</text><text x="184" y="68" class="art-b">C</text><text x="184" y="84" class="art-b">B</text>
      </g>
      <text x="105" y="106" text-anchor="middle" class="art-s">letters op dezelfde klank = rijm</text>
    </svg>`,
  dichtvormen: `
    <svg viewBox="0 0 210 112" role="img" aria-label="Haiku en elfje">
      <text x="52" y="14" text-anchor="middle" class="art-t">haiku</text>
      <rect x="20" y="22" width="30" height="10" rx="3" fill="var(--tint-a)"/><text x="60" y="31" class="art-s">5</text>
      <rect x="20" y="36" width="46" height="10" rx="3" fill="var(--tint-b)"/><text x="76" y="45" class="art-s">7</text>
      <rect x="20" y="50" width="30" height="10" rx="3" fill="var(--tint-a)"/><text x="60" y="59" class="art-s">5 lettergrepen</text>
      <text x="160" y="14" text-anchor="middle" class="art-t">elfje</text>
      <g fill="var(--tint-b)">
        <rect x="150" y="22" width="14" height="9" rx="2"/>
        <rect x="146" y="34" width="22" height="9" rx="2"/>
        <rect x="142" y="46" width="30" height="9" rx="2"/>
        <rect x="138" y="58" width="38" height="9" rx="2"/>
        <rect x="150" y="70" width="14" height="9" rx="2"/>
      </g>
      <text x="160" y="94" text-anchor="middle" class="art-s">1-2-3-4-1 woorden</text>
    </svg>`,
  criteria3: `
    <svg viewBox="0 0 210 104" role="img" aria-label="Drie beoordelingscriteria">
      <rect x="6"   y="18" width="60" height="50" rx="9" fill="var(--tint-a)"/>
      <rect x="75"  y="18" width="60" height="50" rx="9" fill="var(--tint-b)"/>
      <rect x="144" y="18" width="60" height="50" rx="9" fill="var(--tint-a)"/>
      <text x="36"  y="46" text-anchor="middle" class="art-e">📖</text>
      <text x="105" y="46" text-anchor="middle" class="art-e">🧒</text>
      <text x="174" y="46" text-anchor="middle" class="art-e">⚖️</text>
      <text x="36"  y="82" text-anchor="middle" class="art-s">literair</text>
      <text x="105" y="82" text-anchor="middle" class="art-s">pedagogisch</text>
      <text x="174" y="82" text-anchor="middle" class="art-s">ideologisch</text>
      <text x="36"  y="94" text-anchor="middle" class="art-s">de tekst</text>
      <text x="105" y="94" text-anchor="middle" class="art-s">het kind</text>
      <text x="174" y="94" text-anchor="middle" class="art-s">de waarden</text>
    </svg>`,
  tekststructuren: `
    <svg viewBox="0 0 210 110" role="img" aria-label="Drie tekststructuren">
      <g font-size="8">
        <rect x="8" y="18" width="58" height="12" rx="3" fill="var(--tint-b)"/>
        <rect x="8" y="34" width="58" height="12" rx="3" fill="var(--tint-b)"/>
        <rect x="8" y="50" width="58" height="12" rx="3" fill="var(--tint-b)"/>
        <text x="37" y="80" text-anchor="middle" class="art-t">stapel</text><text x="37" y="92" text-anchor="middle" class="art-s">losse delen</text>
        <line x1="76" y1="40" x2="134" y2="40" stroke="var(--brand)" stroke-width="2"/>
        <circle cx="80" cy="40" r="4" fill="var(--tint-a)" stroke="var(--brand)"/><circle cx="105" cy="40" r="4" fill="var(--tint-a)" stroke="var(--brand)"/><circle cx="130" cy="40" r="4" fill="var(--tint-a)" stroke="var(--brand)"/>
        <text x="105" y="80" text-anchor="middle" class="art-t">verhaal</text><text x="105" y="92" text-anchor="middle" class="art-s">gebeurtenissen</text>
        <rect x="150" y="16" width="52" height="14" rx="3" fill="var(--tint-a)"/><text x="176" y="26" text-anchor="middle" class="art-s">standpunt</text>
        <rect x="152" y="34" width="24" height="10" rx="3" fill="var(--tint-b)"/><rect x="178" y="34" width="24" height="10" rx="3" fill="var(--tint-b)"/>
        <rect x="152" y="48" width="24" height="10" rx="3" fill="var(--tint-b)"/><rect x="178" y="48" width="24" height="10" rx="3" fill="var(--tint-b)"/>
        <text x="176" y="80" text-anchor="middle" class="art-t">betoog</text><text x="176" y="92" text-anchor="middle" class="art-s">+ argumenten</text>
      </g>
    </svg>`,
  spellingprincipes: `
    <svg viewBox="0 0 210 118" role="img" aria-label="Vier spellingprincipes">
      <g font-size="8.5">
        <rect x="6"   y="16" width="96" height="40" rx="8" fill="var(--tint-a)"/><text x="54"  y="34" text-anchor="middle" class="art-t">fonologisch</text><text x="54"  y="48" text-anchor="middle" class="art-s">schrijf wat je hoort · kat</text>
        <rect x="108" y="16" width="96" height="40" rx="8" fill="var(--tint-b)"/><text x="156" y="34" text-anchor="middle" class="art-t">morfologisch</text><text x="156" y="48" text-anchor="middle" class="art-s">hond ← honden</text>
        <rect x="6"   y="62" width="96" height="40" rx="8" fill="var(--tint-b)"/><text x="54"  y="80" text-anchor="middle" class="art-t">etymologisch</text><text x="54"  y="94" text-anchor="middle" class="art-s">herkomst · ij / ei</text>
        <rect x="108" y="62" width="96" height="40" rx="8" fill="var(--tint-a)"/><text x="156" y="80" text-anchor="middle" class="art-t">syllabisch</text><text x="156" y="94" text-anchor="middle" class="art-s">klankgroepen · ra-men</text>
      </g>
    </svg>`,
  morfeemVrijGebonden: `
    <svg viewBox="0 0 210 100" role="img" aria-label="Vrij en gebonden morfeem">
      <rect x="16" y="30" width="66" height="30" rx="7" fill="var(--tint-a)" stroke="var(--brand)" stroke-width="2"/>
      <text x="49" y="50" text-anchor="middle" class="art-b">huis</text>
      <text x="49" y="80" text-anchor="middle" class="art-s">vrij · staat alleen</text>
      <rect x="120" y="30" width="42" height="30" rx="7" fill="var(--tint-b)" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 3"/>
      <text x="141" y="50" text-anchor="middle" class="art-b">-heid</text>
      <text x="150" y="80" text-anchor="middle" class="art-s">gebonden · plakt vast</text>
    </svg>`,
  verenkelingVerdubbeling: `
    <svg viewBox="0 0 210 104" role="img" aria-label="Verenkelen en verdubbelen">
      <rect x="12" y="26" width="86" height="34" rx="8" fill="var(--tint-a)"/>
      <text x="55" y="48" text-anchor="middle" class="art-b">ra<tspan fill="var(--brand)">m</tspan>en</text>
      <text x="55" y="76" text-anchor="middle" class="art-s">lange klank → 1 letter</text>
      <text x="55" y="88" text-anchor="middle" class="art-s">verenkelen</text>
      <rect x="112" y="26" width="86" height="34" rx="8" fill="var(--tint-b)"/>
      <text x="155" y="48" text-anchor="middle" class="art-b">ko<tspan fill="var(--accent)">ff</tspan>er</text>
      <text x="155" y="76" text-anchor="middle" class="art-s">korte klank → dubbel</text>
      <text x="155" y="88" text-anchor="middle" class="art-s">verdubbelen</text>
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
  },

  /* =========================================================
     HOOFDSTUK 2 · Mondelinge taalvaardigheid
     ========================================================= */
  mondeling: {
    art: {
      "Globaal luisteren": "luisterstrategie",
      "Intensief luisteren": "luisterstrategie",
      "Gericht luisteren": "luisterstrategie",
      "Kritisch luisteren": "luisterstrategie",
      "Prelinguale periode": "taalontwikkeling",
      "Vroeglinguale fase": "taalontwikkeling",
      "Differentiatiefase": "taalontwikkeling",
      "Voltooiingsfase": "taalontwikkeling",
      "Simultane tweetaligheid": "tweetaligheid",
      "Successieve tweetaligheid": "tweetaligheid",
      "Grammaticale competentie": "competenties4",
      "Tekstuele competentie": "competenties4",
      "Strategische competentie": "competenties4",
      "Functionele competentie": "competenties4"
    },
    mc: [
      { q:"Je luistert naar een discussie en wilt de argumenten beoordelen om een eigen mening te vormen. Welke luisterstrategie gebruik je?",
        opts:["Globaal luisteren","Intensief luisteren","Gericht luisteren","Kritisch luisteren"],
        ans:3, leg:"Kritisch luisteren = luisteren om een oordeel of mening te vormen." },
      { q:"Bij het weerbericht luister je alleen naar de temperatuur voor morgen. Welke luisterstrategie is dit?",
        opts:["Globaal luisteren","Gericht luisteren","Intensief luisteren","Kritisch luisteren"],
        ans:1, leg:"Gericht luisteren = luisteren naar specifieke informatie die je nodig hebt." },
      { q:"Wat is het verschil tussen globaal en intensief luisteren?",
        opts:["Globaal = op de grote lijn; intensief = op alle details","Globaal = op de details; intensief = op de grote lijn","Ze betekenen hetzelfde","Globaal = kritisch beoordelen; intensief = ontspannen"],
        ans:0, leg:"Globaal luisteren richt zich op de hoofdlijn; intensief luisteren op de details." },
      { q:"Een leerling houdt een betoog om de klas te overtuigen van meer buitenspelen. Welk spreekdoel hoort hierbij?",
        opts:["Informeren","Amuseren","Instrueren","Overtuigen"],
        ans:3, leg:"Overtuigen = iemand overhalen tot een mening of standpunt." },
      { q:"Je legt stap voor stap uit hoe een gezelschapsspel gespeeld wordt. Welk spreekdoel is dit?",
        opts:["Informeren","Instrueren","Amuseren","Overtuigen"],
        ans:1, leg:"Instrueren = uitleggen hoe iemand iets moet doen." },
      { q:"Een kind zegt: 'Ik ga eerst opruimen en dan spelen.' Welke sociale taalfunctie gebruikt het?",
        opts:["Zelfhandhaving","Zelfsturing","Sturing van anderen","Structurering van gesprek"],
        ans:1, leg:"Zelfsturing = met taal je eigen handelen plannen of aankondigen." },
      { q:"'Die had ik eerst!' roept een kind bij de bouwhoek. Welke sociale taalfunctie is dit?",
        opts:["Zelfhandhaving","Zelfsturing","Sturing van anderen","Rapporteren"],
        ans:0, leg:"Zelfhandhaving = met taal opkomen voor jezelf of je bezit verdedigen." },
      { q:"Een leerling vertelt niet alleen wát er bij een ongeluk gebeurde, maar legt ook uit wáárom. Welke cognitieve taalfunctie voegt dat 'waarom' toe?",
        opts:["Rapporteren","Redeneren","Projecteren","Structureren"],
        ans:1, leg:"Rapporteren = verslag doen van wat er gebeurde; redeneren = een extra denkstap toevoegen (bijv. oorzaak-gevolg)." },
      { q:"Een leerling bedenkt hoe een personage zich zou voelen. Welke cognitieve taalfunctie is dit?",
        opts:["Rapporteren","Redeneren","Projecteren","Evalueren"],
        ans:2, leg:"Projecteren = je verplaatsen in de gedachten of gevoelens van iemand anders." },
      { q:"Een kind zegt 'loopte', een vorm die het nooit heeft gehoord. Welke theorie verklaart dit het best?",
        opts:["Behaviorisme (imitatie)","Creatieve constructietheorie","Contrastieve analyse","Registertheorie"],
        ans:1, leg:"De creatieve constructietheorie: met een aangeboren taalvermogen bouwt een kind zélf regels en vormen, ook vormen die het nooit hoorde ('loopte')." },
      { q:"Volgens welke oudere verklaring leren kinderen taal vooral door nadoen en bekrachtiging?",
        opts:["Behaviorisme","Creatieve constructietheorie","Interactionele benadering","Nativisme"],
        ans:0, leg:"Het behaviorisme verklaart taalverwerving vooral via imitatie en bekrachtiging." },
      { q:"Welke benadering benadrukt dat zowel aangeboren taalvermogen áls taalaanbod en interactie met de omgeving nodig zijn?",
        opts:["Behaviorisme","Creatieve constructietheorie","Interactionele benadering","Imitatietheorie"],
        ans:2, leg:"De interactionele benadering combineert aangeboren vermogen met taalaanbod en interactie (bijv. een ouder reageert op brabbelen)." },
      { q:"Een kind van 3,5 jaar past steeds meer vormveranderingen en taalregels toe. In welke fase zit het?",
        opts:["Prelinguale periode","Vroeglinguale fase","Differentiatiefase","Voltooiingsfase"],
        ans:2, leg:"Differentiatiefase (2,5–5 jaar): het kind leert vormveranderingen en taalregels gebruiken." },
      { q:"Een baby van 8 maanden herhaalt klankgroepen als 'ba-ba-ba'. Hoe heet dit en in welke periode valt het?",
        opts:["Brabbelen, prelinguale periode","Vocaliseren, linguale periode","Eenwoordzin, vroeglinguale fase","Overgeneralisatie, voltooiingsfase"],
        ans:0, leg:"Brabbelen (het herhalen van klankgroepen, vanaf ±7 maanden) hoort bij de prelinguale periode: er zijn nog geen echte woorden." },
      { q:"Een kind groeit vanaf de geboorte tegelijk met Nederlands én Turks op. Welke vorm van tweetaligheid is dit?",
        opts:["Simultane tweetaligheid","Successieve tweetaligheid","Interferentie","Overgeneralisatie"],
        ans:0, leg:"Simultane tweetaligheid = twee talen (ongeveer) tegelijk leren, meestal als de tweede taal vóór het 3e jaar start. Successief = de tweede taal komt later." },
      { q:"Een leerling neemt een klank uit zijn eerste taal mee in het Nederlands. Hoe heet zo'n fout?",
        opts:["Overgeneralisatie","Interferentiefout","Registerfout","Analogiefout"],
        ans:1, leg:"Een interferentiefout ontstaat door invloed van de verschillen tussen de eerste en de tweede taal." },
      { q:"Een leerling spreekt formeel tijdens een presentatie, maar losjes met vrienden. Welke communicatieve competentie laat dit zien?",
        opts:["Grammaticale competentie","Tekstuele competentie","Strategische competentie","Functionele competentie"],
        ans:3, leg:"Functionele competentie = je taalgebruik aanpassen aan situatie, doel en publiek." },
      { q:"Je weet een woord even niet en omschrijft het dan met andere woorden. Welke competentie gebruik je?",
        opts:["Grammaticale competentie","Strategische competentie","Tekstuele competentie","Functionele competentie"],
        ans:1, leg:"Strategische competentie = strategieën inzetten om je communicatieve doel tóch te bereiken (bijv. omschrijven)." }
    ]
  },

  /* =========================================================
     HOOFDSTUK 4 · Beginnende geletterdheid
     ========================================================= */
  "beginnende-geletterdheid": {
    art: {
      "Auditieve analyse": "hakkenplakken",
      "Auditieve synthese": "hakkenplakken",
      "Alfabetisch principe": "foneemGrafeem",
      "Foneem": "foneemGrafeem",
      "Grafeem": "foneemGrafeem",
      "Foneem-grafeemkoppeling": "foneemGrafeem",
      "Pictografisch schrift": "schriftsystemen",
      "Logografisch schrift": "schriftsystemen",
      "Alfabetisch schrift": "schriftsystemen"
    },
    mc: [
      { q:"Wat is het verschil tussen fonologisch en fonemisch bewustzijn?",
        opts:["Fonologisch = omgaan met de klankvorm van taal in het algemeen; fonemisch = het besef dat woorden uit losse fonemen bestaan","Ze betekenen precies hetzelfde","Fonologisch gaat over letters, fonemisch over betekenis","Fonemisch is breder dan fonologisch"],
        ans:0, leg:"Fonologisch bewustzijn is het brede vermogen om met de klankvorm van taal om te gaan (rijm, klankgroepen). Fonemisch bewustzijn is daar een onderdeel van: het besef dat woorden uit losse fonemen bestaan." },
      { q:"Op school heet het splitsen van 'maan' in /m/ /aa/ /n/ 'hakken'. Welke vaardigheid is dit?",
        opts:["Auditieve synthese","Auditieve analyse","Visuele analyse","Temporeel ordenen"],
        ans:1, leg:"Auditieve analyse = een woord in klanken verdelen ('hakken'). Auditieve synthese = klanken samenvoegen ('plakken')." },
      { q:"Een kind voegt /m/ /aa/ /n/ samen tot 'maan'. Hoe heet deze vaardigheid?",
        opts:["Auditieve analyse","Auditieve synthese","Visuele synthese","Klankpositie bepalen"],
        ans:1, leg:"Auditieve synthese = losse klanken samenvoegen tot een woord ('plakken')." },
      { q:"Wat houdt het alfabetisch principe in?",
        opts:["Woorden staan op alfabetische volgorde","Klanken (fonemen) in woorden komen overeen met letters (grafemen)","Elk woord begint met een hoofdletter","Je leest altijd van links naar rechts"],
        ans:1, leg:"Het alfabetisch principe: gesproken woorden bestaan uit klanken, en die fonemen corresponderen met letters (grafemen) — de foneem-grafeemkoppeling." },
      { q:"Wat is een foneem?",
        opts:["Een letter","Een klank die betekenisverschil veroorzaakt","Een lettergreep","Het kleinste betekenisdragende woorddeel"],
        ans:1, leg:"Een foneem is de kleinste klank die betekenisverschil maakt: /b/ maakt 'bak' anders dan 'dak'." },
      { q:"'oe' in het woord 'boek' is één ...",
        opts:["Foneem","Grafeem","Morfeem","Syllabe"],
        ans:1, leg:"Een grafeem is een letter of lettercombinatie die één foneem weergeeft, zoals 'oe' in 'boek'." },
      { q:"Een beginnende lezer verklankt /m/ /aa/ /n/ en voegt het samen tot 'maan'. Hoe heet dit spellend lezen?",
        opts:["De elementaire leeshandeling","Directe woordherkenning","Morfologische analyse","Contextstrategie"],
        ans:0, leg:"De elementaire leeshandeling is spellend lezen: grafemen aan fonemen koppelen, de volgorde vasthouden, samenvoegen en betekenis geven." },
      { q:"Welk woord is klankzuiver (schrijf je precies zoals je het hoort)?",
        opts:["Maan","Hond","Meeuw","Thee"],
        ans:0, leg:"Een klankzuiver woord schrijf je volgens het fonologische principe, precies zoals je het hoort, zoals 'maan' of 'kat'. Bij 'hond' hoor je een /t/, dus die is niet klankzuiver." },
      { q:"Een kleuter weet dat je een boek van voor naar achter leest en dat de tekst een boodschap draagt. Welk begrip is dit?",
        opts:["Verhaalbegrip","Boekoriëntatie","Taalbewustzijn","Fonemisch bewustzijn"],
        ans:1, leg:"Boekoriëntatie = weten hoe boeken werken: omslag, leesrichting, bladzijdes, tekst en illustraties." },
      { q:"Een kind kan een voorgelezen verhaal navertellen met begin, probleem en oplossing. Welk begrip is dit?",
        opts:["Boekoriëntatie","Verhaalbegrip","Alfabetisch principe","Auditieve synthese"],
        ans:1, leg:"Verhaalbegrip = begrijpen hoe verhalen zijn opgebouwd en dit kunnen navertellen of voorspellen." },
      { q:"Een kind leert het verschil zien tussen de letters b en d. Welke vaardigheid oefent het?",
        opts:["Auditieve discriminatie","Visuele discriminatie","Spatieel ordenen","Visuele synthese"],
        ans:1, leg:"Visuele discriminatie = verschillen zien tussen letters, woorden of afbeeldingen (bijv. b en d)." },
      { q:"'Waar in het woord vuur hoor je de /v/?' Welke auditieve vaardigheid train je hiermee?",
        opts:["Auditieve analyse","Klankpositie bepalen","Temporeel ordenen","Auditieve discriminatie"],
        ans:1, leg:"Klankpositie bepalen = aangeven waar een klank in een woord staat (bijv. /v/ vooraan in 'vuur')." },
      { q:"In welk schriftsysteem staat elk teken voor een heel woord of begrip, zoals in het Chinees?",
        opts:["Pictografisch schrift","Logografisch schrift","Alfabetisch schrift","Syllabisch schrift"],
        ans:1, leg:"Logografisch schrift: elk teken geeft een woord of betekenis weer (bijv. een Chinees karakter). Pictografisch = tekeningen, alfabetisch = letters voor klanken." },
      { q:"Een kleuter schrijft 'fis' voor 'vis', precies zoals hij het hoort. Hoe heet deze spontane spelling?",
        opts:["Krabbelen","Invented spelling","Ketens letterachtige vormen","Logografisch schrift"],
        ans:1, leg:"Invented spelling = een kind schrijft woorden zoals het ze hoort; spontane, zelfbedachte spelling." },
      { q:"Iemand kan zó zwak lezen en schrijven dat meedoen in de maatschappij moeilijk is. Welk begrip past?",
        opts:["Functionele geletterdheid","Functioneel analfabetisme","Ontluikende geletterdheid","Dyslexie"],
        ans:1, leg:"Functioneel analfabetisme = zo zwak lezen/schrijven dat functioneren in een geletterde samenleving lastig is. Functionele geletterdheid is juist wél kunnen meedoen." },
      { q:"Een kleuter merkt op dat 'kat' en 'kam' allebei met /k/ beginnen. Welk begrip past hierbij?",
        opts:["Taalbewustzijn","Verhaalbegrip","Boekoriëntatie","Decoderen"],
        ans:0, leg:"Taalbewustzijn = nadenken over de vormaspecten van taal (zin, woord, klank), los van de betekenis." }
    ]
  },

  /* =========================================================
     HOOFDSTUK 5 · Voortgezet technisch lezen
     ========================================================= */
  "technisch-lezen": {
    art: {
      "Bottom-upmodel": "leesmodellen",
      "Top-downmodel": "leesmodellen",
      "Interactief model": "leesmodellen",
      "Klemtoon": "klemtoon"
    },
    mc: [
      { q:"Welk leesmodel gaat ervan uit dat de lezer bij de letters begint en zo naar de betekenis toewerkt?",
        opts:["Top-downmodel","Bottom-upmodel","Interactief model","Contextmodel"],
        ans:1, leg:"Bottom-up: lezen start bij de kleinste eenheden (letters), daarna woorden, zinnen en betekenis." },
      { q:"Een lezer voorspelt vanuit voorkennis en context wat er staat. Bij welk leesmodel hoort dat vooral?",
        opts:["Bottom-upmodel","Top-downmodel","Meervoudige routemodel","Elementaire leeshandeling"],
        ans:1, leg:"Top-down: lezen start vanuit voorkennis, voorspellen en context." },
      { q:"Ervaren lezers verklanken letters én voorspellen vanuit de context. Welk model beschrijft dit samenspel?",
        opts:["Bottom-upmodel","Top-downmodel","Interactief model","Pre-alfabetische fase"],
        ans:2, leg:"Het interactieve model combineert bottom-up (woord voor woord) met top-down (voorspellend) lezen." },
      { q:"Wat betekent 'decoderen' bij technisch lezen?",
        opts:["De betekenis van een tekst begrijpen","Letters en lettergroepen omzetten naar klanken en woorden","Een tekst samenvatten","Voorspellen wat er komt"],
        ans:1, leg:"Decoderen = letters/lettergroepen omzetten naar klanken en woorden. Dat is de kern van technisch lezen; de betekenis pakken is begrijpend lezen." },
      { q:"Een leerling herkent het woord 'de' meteen, zonder erover na te denken. Welk begrip is dit?",
        opts:["Decoderen","Automatisering","Morfologische analyse","Contextstrategie"],
        ans:1, leg:"Automatisering = woorden snel herkennen zonder bewuste, trage verklanking. Dat is het doel van technisch lezen." },
      { q:"Een lezer herkent 'voetbaldoel' direct als voetbal + doel. Welke leesstrategie is dit?",
        opts:["Contextstrategie","Morfologische analyse","Elementaire leeshandeling","Visuele woordvorm"],
        ans:1, leg:"Morfologische analyse = woorddelen (morfemen) herkennen tijdens het lezen." },
      { q:"Een lezer vult 'bibberen van de kou' aan dankzij het zinsverband. Welke strategie gebruikt hij?",
        opts:["Contextstrategie","Klankclusters","Directe woordherkenning","Automatisering"],
        ans:0, leg:"De contextstrategie = gebruikmaken van zinsverband, betekenis en voorkennis bij het lezen." },
      { q:"Een lezer leest 'sch' in 'school' in één keer als groep. Welke strategie is dit?",
        opts:["Morfologische analyse","Klankclusters gebruiken","Contextstrategie","Visuele woordvorm"],
        ans:1, leg:"Klankclusters = grotere klankgroepen (zoals /sch/ of /st/) in één keer lezen." },
      { q:"Wat is directe woordherkenning?",
        opts:["Een woord letter voor letter verklanken","Een woord meteen herkennen zonder te verklanken","Een woord opzoeken in een bron","Een woord in morfemen delen"],
        ans:1, leg:"Directe woordherkenning = een woord in één keer herkennen zonder verklanken. Indirecte woordherkenning gaat wél via verklanken of woorddelen." },
      { q:"In welke Ehri-fase verloopt het lezen vlot en geautomatiseerd?",
        opts:["Pre-alfabetische fase","Volledig alfabetische fase","Geconsolideerde alfabetische fase","Geautomatiseerde alfabetische fase"],
        ans:3, leg:"In de geautomatiseerde alfabetische fase verloopt lezen vlot en zonder bewuste inspanning." },
      { q:"Een kind 'leest' een logo zonder de letters te kennen. Bij welke Ehri-fase past dit?",
        opts:["Pre-alfabetische fase","Partieel alfabetische fase","Volledig alfabetische fase","Geconsolideerde alfabetische fase"],
        ans:0, leg:"In de pre-alfabetische fase is er nog geen systematische letter-klankkoppeling; een kind herkent bijv. een logo aan de vorm." },
      { q:"'VOORkomen' (gebeuren) en 'voorKOMEN' (verhinderen) verschillen door de nadruk. Welk voordrachtsaspect is dit?",
        opts:["Zinsmelodie","Klemtoon","Tempo","Articulatie"],
        ans:1, leg:"Klemtoon = de nadruk op een woorddeel of woord; die kan zelfs de betekenis veranderen." },
      { q:"Een vraagzin gaat aan het eind omhoog in toon. Welk voordrachtsaspect is dit?",
        opts:["Klemtoon","Zinsmelodie","Volume","Tempo"],
        ans:1, leg:"Zinsmelodie = het toonverloop in een zin, vaak gestuurd door betekenis en leestekens." },
      { q:"Waarvoor staat een AVI-niveau?",
        opts:["Het begrijpend-leesniveau","Het technisch-leesniveau van een tekst of lezer","De omvang van de woordenschat","Het spellingniveau"],
        ans:1, leg:"AVI is een indeling voor het technisch leesniveau. CLIB gaat juist over begrijpend lezen." },
      { q:"Hoe wordt dyslexie in de kennisbasis omschreven?",
        opts:["Een algemene taalontwikkelingsachterstand","Een hardnekkig probleem met accuraat en/of vlot lezen en spellen op woordniveau","Moeite met begrijpend lezen door weinig voorkennis","Een vorm van slechtziendheid"],
        ans:1, leg:"Dyslexie = een hardnekkig probleem met accuraat en/of vlot lezen en spellen op woordniveau, vooral door problemen in de automatisering." },
      { q:"Welke van deze is een bekende risicofactor voor dyslexie?",
        opts:["Een grote woordenschat","Moeite met hakken en plakken en met de letter-klankkoppeling","Veel voorleeservaring","Snel kunnen benoemen"],
        ans:1, leg:"Risicofactoren zijn onder meer moeite met hakken/plakken, met de letter-klankkoppeling en met snel benoemen." }
    ]
  },

  /* =========================================================
     HOOFDSTUK 6 · Begrijpend lezen
     ========================================================= */
  "begrijpend-lezen": {
    art: {
      "Verhalende tekst": "tekstsoorten",
      "Informatieve tekst": "tekstsoorten",
      "Directieve tekst": "tekstsoorten",
      "Beschouwende tekst": "tekstsoorten",
      "Argumentatieve tekst": "tekstsoorten",
      "Perceptie": "perceptieCognitie",
      "Cognitie": "perceptieCognitie"
    },
    mc: [
      { q:"Je leest een recept om een taart te bakken. Wat is je leesdoel?",
        opts:["Informatie zoeken","Mening vormen","Ontspannen lezen","Handeling uitvoeren"],
        ans:3, leg:"Leesdoel 'handeling uitvoeren' = instructies volgen om iets te doen, zoals bij een recept." },
      { q:"Welke tekstsoort stelt vooral de mening of visie van de schrijver centraal, zoals een recensie?",
        opts:["Verhalende tekst","Informatieve tekst","Beschouwende tekst","Directieve tekst"],
        ans:2, leg:"Een beschouwende tekst stelt een mening of visie centraal (bijv. een recensie)." },
      { q:"Een handleiding die uitlegt hoe je iets moet doen, is een ...",
        opts:["Argumentatieve tekst","Directieve tekst","Beschouwende tekst","Verhalende tekst"],
        ans:1, leg:"Een directieve tekst legt uit hoe je iets moet doen (handleiding, recept, stappenplan)." },
      { q:"Een advertentie die je wil overhalen iets te kopen, is vooral een ...",
        opts:["Informatieve tekst","Argumentatieve tekst","Verhalende tekst","Directieve tekst"],
        ans:1, leg:"Een argumentatieve tekst probeert de lezer te overtuigen (bijv. een advertentie of betoog)." },
      { q:"Wat is het verschil tussen fictie en non-fictie?",
        opts:["Fictie = verzonnen; non-fictie = verwijst naar de werkelijkheid","Fictie = waargebeurd; non-fictie = verzonnen","Ze betekenen hetzelfde","Fictie is altijd poëzie"],
        ans:0, leg:"Fictie is een verzonnen werkelijkheid; non-fictie verwijst naar de echte, controleerbare werkelijkheid (zakelijke teksten)." },
      { q:"'Ze stapte in haar Maserati' — je leidt af dat ze waarschijnlijk rijk is. Welke leesstrategie gebruik je?",
        opts:["Voorspellen","Afleiden","Samenvatten","Visualiseren"],
        ans:1, leg:"Afleiden = informatie invullen die niet letterlijk in de tekst staat, op basis van aanwijzingen." },
      { q:"Vóór het lezen bedenk je op basis van de titel waar de tekst waarschijnlijk over gaat. Welke strategie is dit?",
        opts:["Voorspellen","Monitoren","Samenvatten","Verbinden"],
        ans:0, leg:"Voorspellen = verwachtingen vormen over de inhoud of het vervolg van de tekst." },
      { q:"Tijdens het lezen vraag je jezelf af of je de alinea nog wel begrijpt. Welke strategie gebruik je?",
        opts:["Visualiseren","Monitoren","Verbinden","Afleiden"],
        ans:1, leg:"Monitoren = je eigen leesbegrip bewaken en bijsturen tijdens het lezen." },
      { q:"Je koppelt de tekst aan wat je zelf al over het onderwerp weet. Welke strategie is dit?",
        opts:["Verbinden","Samenvatten","Voorspellen","Vragen stellen"],
        ans:0, leg:"Verbinden = nieuwe informatie koppelen aan je voorkennis." },
      { q:"'Omdat' en 'daardoor' maken een verband in de tekst zichtbaar. Zulke woorden heten ...",
        opts:["Verwijswoorden","Signaalwoorden","Inhoudswoorden","Vraagwoorden"],
        ans:1, leg:"Signaalwoorden maken verbanden in een tekst zichtbaar (bijv. oorzaak-gevolg met 'omdat')." },
      { q:"'De jongen rende weg. Hij was bang.' Wat is 'hij' in de tweede zin?",
        opts:["Signaalwoord","Verwijswoord","Inhoudswoord","Voegwoord"],
        ans:1, leg:"Een verwijswoord verwijst terug of vooruit in een tekst; 'hij' verwijst naar 'de jongen'." },
      { q:"'Met een paraplu blijf je droog.' Welke tekstrelatie is dit?",
        opts:["Chronologie","Vergelijking","Middel-doelrelatie","Vraag-antwoordrelatie"],
        ans:2, leg:"Een middel-doelrelatie legt het verband tussen een middel (paraplu) en het beoogde doel (droog blijven)." },
      { q:"'Als je oefent, word je beter.' Welke tekstrelatie zie je hier?",
        opts:["Voorwaardelijke structuur","Chronologie","Voorbeeldrelatie","Vergelijking"],
        ans:0, leg:"Een voorwaardelijke structuur koppelt een voorwaarde aan een gevolg (als … dan …)." },
      { q:"Bij begrijpend lezen komt de tekst via je ogen binnen. Hoe heet het verwérken van die informatie en het koppelen aan je voorkennis?",
        opts:["Perceptie","Cognitie","Monitoren","Automatisering"],
        ans:1, leg:"Cognitie = nieuwe informatie verwerken en koppelen aan bestaande kennis. Perceptie is het binnenkomen via de zintuigen." },
      { q:"Vanaf welk aandeel onbekende woorden wordt een tekst volgens de kennisbasis al snel onleesbaar?",
        opts:["5%","10%","25%","50%"],
        ans:1, leg:"Bij ongeveer 10% onbekende woorden wordt een tekst al onleesbaar voor de lezer." },
      { q:"Waar gaat het tekstkenmerk 'bedoeling' over?",
        opts:["Het onderwerp van de tekst","Het doel dat de schrijver met de tekst heeft","De lengte van de tekst","De lettergrootte"],
        ans:1, leg:"Het tekstkenmerk 'bedoeling' gaat over het doel van de schrijver: informeren, overtuigen, amuseren of instrueren." }
    ]
  },

  /* =========================================================
     HOOFDSTUK 7 · Stellen (schrijven)
     ========================================================= */
  stellen: {
    art: {
      "Schrijfproces": "schrijfproces",
      "Plannen": "schrijfproces",
      "Schrijven": "schrijfproces",
      "Reviseren": "schrijfproces",
      "Stapelstructuur": "tekststructuren",
      "Verhaalstructuur": "tekststructuren",
      "Betoogstructuur": "tekststructuren"
    },
    mc: [
      { q:"Een beginnende schrijver begint meteen ('en toen… en toen…') en verbetert hooguit de spelling. Welke manier van schrijven is dit?",
        opts:["Denkend schrijven","Vertellend schrijven","Reviseren","Structureren"],
        ans:1, leg:"Vertellend schrijven = praten op papier: meteen beginnen, weinig planning of revisie van de structuur. Kenmerkend voor beginners." },
      { q:"Een ervaren schrijver maakt eerst een plan, bepaalt doel en publiek en herziet zijn tekst. Hoe heet dit?",
        opts:["Vertellend schrijven","Denkend schrijven","Coderen","Stileren"],
        ans:1, leg:"Denkend schrijven = bewust plannen, structureren, formuleren en reviseren." },
      { q:"Uit welke drie fasen bestaat het schrijfproces, die elkaar afwisselen?",
        opts:["Lezen, schrijven, nakijken","Plannen, schrijven (formuleren) en reviseren","Inleiding, kern, slot","Doel, publiek, tekstsoort"],
        ans:1, leg:"Het schrijfproces bestaat uit plannen, schrijven/formuleren en reviseren; deze fasen wisselen elkaar steeds af." },
      { q:"Wat houdt 'reviseren' in?",
        opts:["De lay-out en netheid verzorgen","De tekst kritisch herlezen en verbeteren op inhoud, structuur, formulering en spelling","Het onderwerp kiezen","De doelgroep bepalen"],
        ans:1, leg:"Reviseren = de tekst kritisch herlezen en bijstellen (inhoud, structuur, formulering, spelling) — ook al tijdens het schrijven." },
      { q:"Welke tekststructuur heeft een boodschappenlijst?",
        opts:["Verhaalstructuur","Betoogstructuur","Stapelstructuur","Argumentatieve structuur"],
        ans:2, leg:"Een stapelstructuur bestaat uit min of meer losse onderdelen zonder duidelijke samenhang (bijv. een boodschappenlijst of telefoonboek)." },
      { q:"Een tekst met een standpunt en onderbouwende argumenten heeft een ...",
        opts:["Stapelstructuur","Verhaalstructuur","Betoogstructuur","Vraagstructuur"],
        ans:2, leg:"Een betoogstructuur bevat een standpunt met onderbouwende argumenten." },
      { q:"Een verhaal met personages die opeenvolgende gebeurtenissen meemaken (begin–probleem–oplossing) heeft een ...",
        opts:["Betoogstructuur","Verhaalstructuur","Stapelstructuur","Retorische structuur"],
        ans:1, leg:"Een verhaalstructuur volgt opeenvolgende gebeurtenissen van personages (begin, probleem, oplossing)." },
      { q:"Wat is het verschil tussen 'formuleren' en 'coderen' bij het schrijven?",
        opts:["Formuleren = de inhoud in woorden en zinnen verwoorden; coderen = taalregels, spelling en interpunctie correct toepassen","Ze betekenen hetzelfde","Formuleren = spelling; coderen = inhoud","Coderen = een plan maken"],
        ans:0, leg:"Formuleren = de inhoud verwoorden in woorden en zinnen. Coderen = de taalregels, spelling en interpunctie correct toepassen." },
      { q:"Je schrijft een gedicht om je gevoelens te uiten. Welke functie van schrijven is dit?",
        opts:["Communicatieve schrijffunctie","Conceptualiserende schrijffunctie","Expressieve schrijffunctie","Directieve functie"],
        ans:2, leg:"De expressieve schrijffunctie = schrijven om gevoelens, fantasie of eigen stijl te uiten." },
      { q:"Je maakt een mindmap om je gedachten te ordenen. Welke functie van schrijven is dit?",
        opts:["Communicatieve schrijffunctie","Conceptualiserende schrijffunctie","Expressieve schrijffunctie","Esthetische functie"],
        ans:1, leg:"De conceptualiserende schrijffunctie = schrijven om je gedachten te ordenen (bijv. een mindmap of aantekeningen)." },
      { q:"Vóór het schrijven verzamel je informatie en bepaal je de tekstsoort. In welke fase van het schrijfproces zit je?",
        opts:["Plannen","Formuleren","Reviseren","Verzorgen"],
        ans:0, leg:"Plannen = informatie zoeken en de aanpak of tekstsoort bepalen." },
      { q:"Aan het eind controleer je de lay-out, alinea's en netheid van je tekst. Welke stelvaardigheid is dit?",
        opts:["Reviseren","Structureren","Verzorgen","Selecteren"],
        ans:2, leg:"Verzorgen = lay-out, alinea's, illustraties en netheid controleren." },
      { q:"Je zet de verzamelde informatie in logische groepjes vóór je gaat schrijven. Welke stelvaardigheid is dit?",
        opts:["Selecteren","Ordenen","Formuleren","Coderen"],
        ans:1, leg:"Ordenen = informatie logisch groeperen of in volgorde zetten." },
      { q:"Waarom bepaal je vooraf je publiek bij het schrijven?",
        opts:["Om je taal en inhoud aan te passen aan de lezer","Om sneller te typen","Om spelling te oefenen","Om de lay-out te kiezen"],
        ans:0, leg:"Het publiek bepalen helpt je taal, toon en inhoud af te stemmen op de lezer (bijv. schrijven voor groep 5)." },
      { q:"Je kiest bewust een formele of juist speelse schrijfstijl. Welke stelvaardigheid is dit?",
        opts:["Coderen","Stileren","Structureren","Reviseren"],
        ans:1, leg:"Stileren = een passende schrijfstijl kiezen (bijv. formeel of speels)." }
    ]
  },

  /* =========================================================
     HOOFDSTUK 8 · Jeugdliteratuur
     ========================================================= */
  jeugdliteratuur: {
    art: {
      "Gepaard rijm": "rijmschemas",
      "Omarmend rijm": "rijmschemas",
      "Gekruist rijm": "rijmschemas",
      "Gebroken rijm": "rijmschemas",
      "Elfje": "dichtvormen",
      "Haiku": "dichtvormen",
      "Literaire criteria": "criteria3",
      "Pedagogische criteria": "criteria3",
      "Ideologische criteria": "criteria3"
    },
    mc: [
      { q:"Welk rijmschema hoort bij het patroon A-B-A-B?",
        opts:["Gepaard rijm","Omarmend rijm","Gekruist rijm","Gebroken rijm"],
        ans:2, leg:"Gekruist rijm = ABAB. Gepaard = AABB, omarmend = ABBA, gebroken = ABCB." },
      { q:"Het rijmschema A-B-B-A heet ...",
        opts:["Gepaard rijm","Omarmend rijm","Gekruist rijm","Gebroken rijm"],
        ans:1, leg:"Omarmend rijm = ABBA: de buitenste regels rijmen op elkaar en de binnenste ook." },
      { q:"Twee opeenvolgende regels rijmen telkens: A-A-B-B. Welk rijmschema is dit?",
        opts:["Gepaard rijm","Gekruist rijm","Omarmend rijm","Gebroken rijm"],
        ans:0, leg:"Gepaard rijm = AABB: telkens twee regels achter elkaar rijmen." },
      { q:"'Liesje leerde Lotje lopen.' Welk verschijnsel is dit?",
        opts:["Eindrijm","Beginrijm (alliteratie)","Gebroken rijm","Ritme"],
        ans:1, leg:"Beginrijm (alliteratie) = klankherhaling aan het begin van woorden." },
      { q:"Een gedicht van 3 regels met 5-7-5 lettergrepen is een ...",
        opts:["Limerick","Haiku","Elfje","Sonnet"],
        ans:1, leg:"Een haiku heeft 3 regels met 5, 7 en 5 lettergrepen." },
      { q:"Een gedicht van 11 woorden verdeeld over 5 regels (1-2-3-4-1) is een ...",
        opts:["Kwatrijn","Elfje","Rondeel","Copla"],
        ans:1, leg:"Een elfje bestaat uit 11 woorden verdeeld over 5 regels volgens 1-2-3-4-1." },
      { q:"Hoeveel regels heeft een sonnet?",
        opts:["4","8","11","14"],
        ans:3, leg:"Een sonnet is een gedicht van 14 regels." },
      { q:"Een gedicht van 4 regels heet een ...",
        opts:["Kwatrijn","Haiku","Limerick","Sonnet"],
        ans:0, leg:"Een kwatrijn is een gedicht van 4 regels." },
      { q:"Een toneeltekst die bedoeld is om gespeeld te worden, valt onder welke vorm?",
        opts:["Proza","Drama","Poëzie","Non-fictie"],
        ans:1, leg:"Drama = een tekstvorm die bedoeld is om gespeeld te worden (toneel). Proza = gewone verhaaltaal, poëzie = gedichten." },
      { q:"Bij welk beoordelingscriterium staat de tekst zelf centraal (stijl, originaliteit, taalgebruik)?",
        opts:["Pedagogische criteria","Ideologische criteria","Literaire criteria","Didactische criteria"],
        ans:2, leg:"Literaire criteria richten zich op de tekstkwaliteit zelf: stijl, originaliteit en taalgebruik." },
      { q:"Je beoordeelt of een boek past bij de ontwikkeling en de leeftijd van het kind. Welk criterium is dit?",
        opts:["Literaire criteria","Pedagogische criteria","Ideologische criteria","Esthetische criteria"],
        ans:1, leg:"Pedagogische criteria kijken naar de ontwikkeling en het niveau van het kind." },
      { q:"Je let op welk beeld van jongens en meisjes een boek uitdraagt. Welk beoordelingscriterium gebruik je?",
        opts:["Literaire criteria","Pedagogische criteria","Ideologische criteria","Vormcriteria"],
        ans:2, leg:"Ideologische criteria richten zich op de normen, waarden en het maatschappijbeeld in het boek." },
      { q:"Een kind geniet van de mooie klank en taal van een gedicht. Welke functie van jeugdliteratuur is dit?",
        opts:["Informatieve functie","Esthetische functie","Opvoedende functie","Ontspannende functie"],
        ans:1, leg:"De esthetische functie = genieten van de schoonheid van taal of vorm." },
      { q:"Een kind leeft mee met een personage en herkent eigen gevoelens. Welke functie is dit?",
        opts:["Creatieve functie","Emotionele functie","Informatieve functie","Opvoedende functie"],
        ans:1, leg:"De emotionele functie = literatuur helpt bij herkenning en identificatie." },
      { q:"Een informatieve tekst over vulkanen die naar de werkelijkheid verwijst, is ...",
        opts:["Fictie","Non-fictie","Poëzie","Drama"],
        ans:1, leg:"Non-fictie verwijst naar de (controleerbare) werkelijkheid; fictie is een verzonnen werkelijkheid." },
      { q:"In welk genre geven tekst en beeld samen de betekenis, met illustraties op elke pagina?",
        opts:["Stripverhaal","Prentenboek","Poëziebundel","Informatieve tekst"],
        ans:1, leg:"In een prentenboek geven tekst en beeld samen de betekenis." }
    ]
  },

  /* =========================================================
     HOOFDSTUK 9 · Taalbeschouwing en spelling
     ========================================================= */
  "taalbeschouwing-spelling": {
    art: {
      "Synoniem": "synoniem",
      "Antoniem": "antoniem",
      "Hyponiem": "hyponiem",
      "Homofoon": "homofoon",
      "Morfeem": "morfeemVrijGebonden",
      "Vrij morfeem": "morfeemVrijGebonden",
      "Gebonden morfeem": "morfeemVrijGebonden",
      "Fonologisch principe": "spellingprincipes",
      "Morfologisch principe": "spellingprincipes",
      "Etymologisch principe": "spellingprincipes",
      "Syllabisch principe": "spellingprincipes",
      "Verenkelingsregel": "verenkelingVerdubbeling",
      "Verdubbelingsregel": "verenkelingVerdubbeling"
    },
    mc: [
      { q:"Wat is een morfeem?",
        opts:["Een klank die betekenis onderscheidt","Het kleinste betekenisdragende deel van een woord","Een lettergreep","Een zinsdeel"],
        ans:1, leg:"Een morfeem is het kleinste betekenisdragende deel van een woord, zoals '-heid' in 'vrijheid'." },
      { q:"Welk van deze is een gebonden morfeem?",
        opts:["huis","-tje","boom","fiets"],
        ans:1, leg:"Een gebonden morfeem kan niet zelfstandig voorkomen, zoals '-tje' of '-heid'. 'Huis', 'boom' en 'fiets' zijn vrije morfemen." },
      { q:"'Fietsbel' is gevormd uit twee losse woorden. Hoe heet zo'n woordvorming?",
        opts:["Afleiding","Samenstelling","Verbuiging","Vervoeging"],
        ans:1, leg:"Een samenstelling is een nieuw woord uit twee losse woorden (fiets + bel). Een afleiding voegt een gebonden morfeem toe (bijv. 'nattig')." },
      { q:"Het woord 'nattig' ontstaat door een gebonden morfeem toe te voegen. Hoe heet deze woordvorming?",
        opts:["Samenstelling","Afleiding","Vervoeging","Verbuiging"],
        ans:1, leg:"Een afleiding vormt een nieuw woord door een gebonden morfeem toe te voegen (nat + -ig)." },
      { q:"'Loop, loopt, liep' zijn vormen van hetzelfde werkwoord. Deze vormverandering heet ...",
        opts:["Verbuiging","Vervoeging","Afleiding","Samenstelling"],
        ans:1, leg:"Vervoeging = vormverandering van werkwoorden (loop, loopt, liep). Verbuiging betreft o.a. bijvoeglijke naamwoorden (mooi → mooie)." },
      { q:"Welk onderdeel van de taalkunde bestudeert de zinsbouw en de woordvolgorde?",
        opts:["Semantiek","Syntaxis","Fonologie","Pragmatiek"],
        ans:1, leg:"Syntaxis = de regels voor zinsbouw en woordvolgorde. Semantiek = betekenis, fonologie = klanken." },
      { q:"Een zin klopt grammaticaal, maar is in de situatie onbeleefd. Welk taalkunde-onderdeel gaat hierover?",
        opts:["Semantiek","Syntaxis","Pragmatiek","Morfologie"],
        ans:2, leg:"Pragmatiek = taalgebruik in concrete situaties en sociale context (bijv. beleefdheid)." },
      { q:"'Hart' en 'hard' klinken hetzelfde maar worden anders geschreven. Dit zijn ...",
        opts:["Homografen","Homofonen","Homoniemen","Synoniemen"],
        ans:1, leg:"Homofonen klinken hetzelfde maar worden verschillend geschreven. Homografen worden hetzelfde geschreven maar anders uitgesproken." },
      { q:"'regent' (het regent) en 'regent' (een heerser) schrijf je hetzelfde maar spreek je anders uit. Dit zijn ...",
        opts:["Homofonen","Homografen","Synoniemen","Antoniemen"],
        ans:1, leg:"Homografen worden hetzelfde geschreven maar anders uitgesproken (en betekenen iets anders)." },
      { q:"Wat is het verschil tussen zinsontleden en woordbenoemen?",
        opts:["Zinsontleden = de functie van zinsdelen benoemen; woordbenoemen = de woordsoort van losse woorden benoemen","Ze betekenen hetzelfde","Zinsontleden = spelling; woordbenoemen = betekenis","Woordbenoemen = zinsdelen; zinsontleden = woordsoorten"],
        ans:0, leg:"Zinsontleden = de functie van zinsdelen benoemen (onderwerp, gezegde…). Woordbenoemen = de woordsoort van losse woorden benoemen (zn, ww…)." },
      { q:"'Ik eet een appel.' Wat is 'een appel' in deze zin?",
        opts:["Onderwerp","Lijdend voorwerp","Meewerkend voorwerp","Bijwoordelijke bepaling"],
        ans:1, leg:"Het lijdend voorwerp ondergaat de handeling: je eet 'een appel'." },
      { q:"Welke werkwoordsvorm verandert mee met het onderwerp en de tijd?",
        opts:["Infinitief","Persoonsvorm","Voltooid deelwoord","Hele werkwoord"],
        ans:1, leg:"De persoonsvorm verandert met onderwerp en tijd (ik loop, hij loopt, hij liep)." },
      { q:"Je schrijft 'hond' met een d omdat je 'honden' kent. Welk spellingprincipe pas je toe?",
        opts:["Fonologisch principe","Etymologisch principe","Morfologisch principe (gelijkvormigheid)","Syllabisch principe"],
        ans:2, leg:"De regel van gelijkvormigheid (morfologisch principe): je schrijft een morfeem steeds hetzelfde — 'hond' vanwege 'honden'." },
      { q:"Waarom schrijf je 'koffer' met een dubbele f?",
        opts:["Etymologisch principe","Verdubbelingsregel: na een korte klank verdubbel je de medeklinker","Verenkelingsregel: na een lange klank één letter","Woordbeeldstrategie"],
        ans:1, leg:"Verdubbelingsregel (syllabisch principe): na een korte klank verdubbel je de medeklinker → koffer, bakker." },
      { q:"Waarom schrijf je 'ramen' met één a?",
        opts:["Verdubbelingsregel","Verenkelingsregel: na een lange klank aan het eind van een klankgroep schrijf je één klinker","Etymologisch principe","Regel van gelijkvormigheid"],
        ans:1, leg:"Verenkelingsregel (syllabisch principe): na een lange klank aan het eind van een klankgroep schrijf je één klinker → ra-men." },
      { q:"De keuze tussen 'ij' en 'ei' moet je vooral onthouden; ze hangt samen met de herkomst van het woord. Welk spellingprincipe is dit?",
        opts:["Fonologisch principe","Morfologisch principe","Etymologisch principe","Syllabisch principe"],
        ans:2, leg:"Het etymologische principe: de herkomst van een woord bepaalt de schrijfwijze (bijv. ij/ei als 'weetstuk')." },
      { q:"Bij welk woord kun je de spelling met een regel afleiden (regelwoord)?",
        opts:["Vrouw","Bomen","Fiets","Trein"],
        ans:1, leg:"Een regelwoord kun je met een spellingregel schrijven ('bomen' via verenkeling). Een weetwoord zoals 'vrouw' moet je vooral onthouden." },
      { q:"Je schrijft 'dromen' door te vergelijken met 'bomen'. Welke spellingstrategie is dit?",
        opts:["Regelstrategie","Analogiestrategie","Woordbeeldstrategie","Hulpstrategie"],
        ans:1, leg:"De analogiestrategie: spellen door te vergelijken met een bekend woord (dromen zoals bomen)." },
      { q:"Je gebruikt ''t kofschip' om te bepalen of een werkwoord met -te of -de eindigt. Welke strategie is dit?",
        opts:["Fonologische strategie","Woordbeeldstrategie","Hulpstrategie","Regelstrategie"],
        ans:2, leg:"Een hulpstrategie is een zelfbedacht geheugensteuntje of ezelsbruggetje, zoals ''t kofschip'." },
      { q:"De taal van de overheid, het onderwijs en het journaal noem je ...",
        opts:["Dialect","Standaardtaal","Register","Taalvariëteit"],
        ans:1, leg:"Standaardtaal is de taal van overheid, onderwijs en media. Een dialect is een regionale variant." }
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
