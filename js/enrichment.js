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
    </svg>`,
  viertaktCyclus: `
    <svg viewBox="0 0 210 124" role="img" aria-label="De viertakt woordenschatdidactiek">
      <g font-size="8.5">
        <rect x="6"   y="14" width="92" height="22" rx="7" fill="var(--tint-a)" stroke="var(--brand)" stroke-width="1.5"/><text x="52"  y="28" text-anchor="middle" class="art-t">1 voorbewerken</text>
        <rect x="112" y="14" width="92" height="22" rx="7" fill="var(--tint-b)" stroke="var(--brand)" stroke-width="1.5"/><text x="158" y="28" text-anchor="middle" class="art-t">2 semantiseren</text>
        <rect x="112" y="78" width="92" height="22" rx="7" fill="var(--tint-a)" stroke="var(--brand)" stroke-width="1.5"/><text x="158" y="92" text-anchor="middle" class="art-t">3 consolideren</text>
        <rect x="6"   y="78" width="92" height="22" rx="7" fill="var(--tint-b)" stroke="var(--accent)" stroke-width="1.5"/><text x="52"  y="92" text-anchor="middle" class="art-t">4 controleren</text>
      </g>
      <g stroke="var(--muted)" stroke-width="1.5" fill="none">
        <path d="M98 25h10M106 22l4 3-4 3"/>
        <path d="M158 36v40M155 72l3 4 3-4"/>
        <path d="M112 89h-10M106 86l-4 3 4 3"/>
        <path d="M52 78V38M49 42l3-4 3 4"/>
      </g>
      <text x="105" y="116" text-anchor="middle" class="art-s">woord pas verankerd na ± 7× aanbieden</text>
    </svg>`,
  drieUitjes: `
    <svg viewBox="0 0 210 104" role="img" aria-label="De drie uitjes van semantiseren">
      <rect x="6"   y="16" width="60" height="50" rx="9" fill="var(--tint-a)"/>
      <rect x="75"  y="16" width="60" height="50" rx="9" fill="var(--tint-b)"/>
      <rect x="144" y="16" width="60" height="50" rx="9" fill="var(--tint-a)"/>
      <text x="36"  y="44" text-anchor="middle" class="art-e">👐</text>
      <text x="105" y="44" text-anchor="middle" class="art-e">💬</text>
      <text x="174" y="44" text-anchor="middle" class="art-e">🕸️</text>
      <text x="36"  y="80" text-anchor="middle" class="art-s">uitbeelden</text>
      <text x="105" y="80" text-anchor="middle" class="art-s">uitleggen</text>
      <text x="174" y="80" text-anchor="middle" class="art-s">uitbreiden</text>
      <text x="36"  y="92" text-anchor="middle" class="art-s">beeld/gebaar</text>
      <text x="105" y="92" text-anchor="middle" class="art-s">verbale uitleg</text>
      <text x="174" y="92" text-anchor="middle" class="art-s">in netwerk</text>
    </svg>`,
  directeInstructie: `
    <svg viewBox="0 0 210 108" role="img" aria-label="Het directe instructiemodel">
      <polygon points="8,20 202,20 150,54 60,54" fill="var(--tint-b)" opacity="0.5"/>
      <g font-size="8">
        <rect x="8"   y="24" width="60" height="22" rx="6" fill="var(--tint-a)"/><text x="38"  y="35" text-anchor="middle" class="art-t">uitleggen</text><text x="38" y="44" text-anchor="middle" class="art-s">&amp; voordoen</text>
        <rect x="74"  y="24" width="62" height="22" rx="6" fill="var(--tint-b)"/><text x="105" y="35" text-anchor="middle" class="art-t">oefenen</text><text x="105" y="44" text-anchor="middle" class="art-s">&amp; begeleiden</text>
        <rect x="142" y="24" width="60" height="22" rx="6" fill="var(--tint-a)"/><text x="172" y="35" text-anchor="middle" class="art-t">verwerken</text><text x="172" y="44" text-anchor="middle" class="art-s">/ toepassen</text>
      </g>
      <path d="M8 72h194" stroke="var(--muted)" stroke-width="1.5" marker-end=""/>
      <text x="8" y="86" class="art-s">veel sturing</text>
      <text x="202" y="86" text-anchor="end" class="art-s">zelfstandig</text>
      <text x="105" y="100" text-anchor="middle" class="art-s">leerkrachtsturing neemt af →</text>
    </svg>`,
  referentieniveaus: `
    <svg viewBox="0 0 210 100" role="img" aria-label="Referentieniveaus 1F en 1S/2F">
      <rect x="20" y="52" width="80" height="30" rx="7" fill="var(--tint-a)" stroke="var(--brand)" stroke-width="2"/>
      <text x="60" y="68" text-anchor="middle" class="art-b">1F</text>
      <text x="60" y="94" text-anchor="middle" class="art-s">fundamenteel</text>
      <rect x="110" y="22" width="80" height="30" rx="7" fill="var(--tint-b)" stroke="var(--accent)" stroke-width="2"/>
      <text x="150" y="38" text-anchor="middle" class="art-b">1S / 2F</text>
      <text x="150" y="64" text-anchor="middle" class="art-s">streef</text>
      <path d="M100 60l10-20" stroke="var(--muted)" stroke-width="1.5"/>
      <text x="14" y="18" class="art-s">niveau ↑</text>
    </svg>`
});

/* ---- Verrijking per hoofdstuk ---- */
const ENRICH = {

  /* =========================================================
     HOOFDSTUK 1 · Taalonderwijs en taal
     ========================================================= */
  taalonderwijs: {
    subtitle: "Taalfuncties, taalniveaus, referentiekader en didactiek",
    intro: "Leer hoe taalonderwijs is opgebouwd, welke functies en niveaus taal heeft, én de kaders en didactiek die de hele kennisbasis omspannen: het referentiekader (1F/1S-2F), kerndoelen en tussendoelen, VVE, differentiatie, taalontwikkelend vakonderwijs en het verschil tussen methodegebonden en genormeerde toetsen.",
    addConcepts: [
      { t:"Startbekwame leerkracht", icon:"🎓",
        d:"De leraar die net voldoende bekwaam is om zelfstandig les te geven. De kennisbasis beschrijft per domein wat een startbekwame leerkracht moet kennen en kunnen — en dat is precies wat de LKT-toets toetst.",
        ex:"Elk kennisbasis-begrip begint met 'De startbekwame leerkracht …'." },
      { t:"Referentiekader Taal", icon:"📏", art:"referentieniveaus",
        d:"Landelijk kader dat beschrijft wat leerlingen op verschillende momenten aan taal moeten beheersen, verdeeld in fundamentele niveaus en streefniveaus.",
        ex:"Aan het eind van de basisschool wordt minimaal niveau 1F verwacht." },
      { t:"Fundamenteel niveau (1F)", icon:"🟦", art:"referentieniveaus",
        d:"Het basisniveau dat vrijwel alle leerlingen moeten halen. Voor de basisschool is dat 1F aan het eind van groep 8.",
        ex:"1F lezen: eenvoudige teksten over alledaagse, concrete onderwerpen begrijpen." },
      { t:"Streefniveau (1S/2F)", icon:"🟨", art:"referentieniveaus",
        d:"Het hogere niveau waar je naar streeft; voor de basisschool is 1S gelijk aan 2F. Niet elke leerling haalt dit.",
        ex:"1S/2F: ook omgaan met minder alledaagse onderwerpen en complexere teksten." },
      { t:"Kerndoelen", icon:"🎯",
        d:"Door de overheid vastgestelde, globale einddoelen die aangeven wat leerlingen aan het eind van het basisonderwijs minimaal moeten kennen en kunnen.",
        ex:"Er zijn kerndoelen voor mondeling taalonderwijs, lezen, schrijven en taalbeschouwing." },
      { t:"Tussendoelen", icon:"📍",
        d:"Concretere doelen tussen de kerndoelen in, die de doorgaande lijn per periode beschrijven (o.a. van SLO en het Expertisecentrum Nederlands).",
        ex:"Tussendoelen beginnende geletterdheid beschrijven stap voor stap de weg naar lezen." },
      { t:"Voor- en vroegschoolse educatie (VVE)", icon:"🧸",
        d:"Programma's voor peuters en kleuters met (risico op) een taalachterstand, gericht op onder meer woordenschat en beginnende geletterdheid.",
        ex:"Piramide en Schatkist zijn bekende VVE-programma's." },
      { t:"Differentiatie", icon:"🪜",
        d:"Het afstemmen van het onderwijs op verschillen tussen leerlingen, bijvoorbeeld taalzwakke, meertalige en meerbegaafde leerlingen.",
        ex:"Een meertalige leerling krijgt extra woordenschatsteun; een meerbegaafde leerling verdiepende taaltaken." },
      { t:"Taalontwikkelend vakonderwijs", icon:"🔬",
        d:"Bij zaakvakken bewust aandacht geven aan taal (context, interactie en taalsteun), zodat leerlingen de vaktaal leren terwijl ze de vakinhoud leren.",
        ex:"Bij aardrijkskunde leer je eerst de vaktaalwoorden, zodat de tekst te begrijpen is." },
      { t:"Methodegebonden toets", icon:"📗",
        d:"Een toets die bij de lesmethode hoort en na enkele weken de behandelde stof toetst; niet landelijk genormeerd (een deelvaardigheidstoets).",
        ex:"De toets na een blok van de leesmethode is methodegebonden." },
      { t:"Methodeonafhankelijke toets", icon:"📊",
        d:"Een landelijk genormeerde toets (bijv. Cito), onderdeel van het leerlingvolgsysteem (lovs), waarmee je een leerling met het landelijk gemiddelde kunt vergelijken.",
        ex:"De Cito begrijpend lezen is methodeonafhankelijk; de score (CLIB) komt in het lovs." }
    ],
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
        ans:2, leg:"Taalbeschouwing is nadenken over taalvorm, taalgebruik en hoe iets verwoord is — precies wat hier gebeurt." },
      { q:"Welk taalniveau moet (bijna) elke leerling aan het eind van groep 8 halen?",
        opts:["Streefniveau 1S","Fundamenteel niveau 1F","Niveau 2F voor iedereen","Niveau 3F"],
        ans:1, leg:"1F (fundamenteel niveau) is het basisniveau dat vrijwel alle leerlingen moeten halen; 1S/2F is het hogere streefniveau." },
      { q:"Het streefniveau 1S is voor de basisschool gelijk aan welk niveau?",
        opts:["1F","2F","3F","4F"],
        ans:1, leg:"Het streefniveau 1S komt overeen met 2F." },
      { q:"Wat is het verschil tussen kerndoelen en tussendoelen?",
        opts:["Kerndoelen zijn globale einddoelen van de overheid; tussendoelen beschrijven concreter de doorgaande lijn ertussenin","Ze zijn hetzelfde","Tussendoelen zijn wettelijk, kerndoelen niet","Kerndoelen gelden alleen voor de eindtoets"],
        ans:0, leg:"Kerndoelen = globale, wettelijke einddoelen; tussendoelen (o.a. SLO, Expertisecentrum) maken de weg ernaartoe concreter per periode." },
      { q:"Piramide en Schatkist zijn voorbeelden van ...",
        opts:["Leesmethoden voor groep 4","VVE-programma's","Cito-toetsen","Spellingmethoden"],
        ans:1, leg:"Het zijn VVE-programma's (voor- en vroegschoolse educatie) voor peuters en kleuters, gericht op o.a. woordenschat en beginnende geletterdheid." },
      { q:"Welke toets is landelijk genormeerd en onderdeel van het leerlingvolgsysteem?",
        opts:["De methodegebonden bloktoets","De Cito-toets (methodeonafhankelijk)","Het dictee van de leerkracht","De observatielijst"],
        ans:1, leg:"Methodeonafhankelijke (Cito-)toetsen zijn landelijk genormeerd en komen in het lovs; methodegebonden toetsen horen bij de methode en zijn niet genormeerd." },
      { q:"Een leerkracht geeft een meertalige leerling extra woordenschatsteun en een meerbegaafde leerling verdiepende taken. Hoe heet dit afstemmen op verschillen?",
        opts:["Modeling","Differentiatie","Scaffolding","Automatiseren"],
        ans:1, leg:"Differentiatie = het onderwijs afstemmen op verschillen tussen leerlingen (taalzwak, meertalig, meerbegaafd)." },
      { q:"Bij aardrijkskunde leert de leerkracht eerst de vaktaalwoorden aan vóór de tekst gelezen wordt. Welke aanpak is dit?",
        opts:["Taalontwikkelend vakonderwijs","Incidenteel woordenschatonderwijs","Voordracht","Differentiatie"],
        ans:0, leg:"Taalontwikkelend (vak)onderwijs = bij zaakvakken bewust aandacht voor taal, zodat leerlingen de vaktaal én de vakinhoud leren." },
      { q:"Wat beschrijft het Referentiekader Taal?",
        opts:["Welke lesmethode je moet gebruiken","Wat leerlingen op verschillende momenten aan taal moeten beheersen (fundamentele en streefniveaus)","De cesuur van de LKT-toets","De volgorde van de schoolvakken"],
        ans:1, leg:"Het Referentiekader Taal beschrijft de taalniveaus (1F fundamenteel, 1S/2F streef, enzovoort) die leerlingen moeten beheersen." }
    ]
  },

  /* =========================================================
     HOOFDSTUK 2 · Mondelinge taalvaardigheid
     ========================================================= */
  mondeling: {
    addConcepts: [
      { t:"Modeling", icon:"🗣️",
        d:"Leerkrachtvaardigheid waarbij de leerkracht hardop denkend een (denk)proces of strategie voordoet, zodat de onzichtbare vaardigheid zichtbaar wordt. Ook: impliciet het correcte taalmodel geven.",
        ex:"De leerkracht denkt hardop: 'Waar gaat dit over? Ik luister eerst naar het begin…' Of: een kind zegt 'aangetrekt' en de leerkracht herhaalt 'aangetrokken'." },
      { t:"Scaffolding", icon:"🪜",
        d:"Tijdelijke taalsteun die net boven het niveau van de leerling ligt ('een steigertje'), zodat de leerling een hoger niveau bereikt. De steun wordt afgebouwd als de leerling het zelf kan.",
        ex:"De leerkracht herformuleert de uiting van een leerling net iets rijker en vraagt om de denkstap te verwoorden." },
      { t:"Taalontwikkelende interactie", icon:"💬",
        d:"Gesprekken bewust zó inrichten dat leerlingen veel en rijke taal produceren: open vragen stellen, doorvragen en denk-/wachttijd geven.",
        ex:"De leerkracht stelt een open vraag en geeft wachttijd, zodat kinderen zelf uitgebreid antwoorden." }
    ],
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
        ans:1, leg:"Strategische competentie = strategieën inzetten om je communicatieve doel tóch te bereiken (bijv. omschrijven)." },
      { q:"Een leerling houdt een spreekbeurt om de klas iets te leren over vulkanen. Welk spreekdoel is dit?",
        opts:["Amuseren","Informeren","Overtuigen","Instrueren"],
        ans:1, leg:"Informeren = feitelijke informatie geven of iets uitleggen." },
      { q:"Je vertelt een grappig verhaal om de klas te vermaken. Welk spreekdoel hoort daarbij?",
        opts:["Informeren","Amuseren","Instrueren","Overtuigen"],
        ans:1, leg:"Amuseren = de luisteraar vermaken, boeien of ontroeren." },
      { q:"'Zullen we samen spelen?' zegt een kind. Welke sociale taalfunctie gebruikt het?",
        opts:["Zelfhandhaving","Zelfsturing","Sturing van anderen","Structurering van gesprek"],
        ans:2, leg:"Sturing van anderen = met taal het gedrag van anderen beïnvloeden." },
      { q:"'Mag ik iets zeggen?' in een kringgesprek is een voorbeeld van ...",
        opts:["Zelfsturing","Structurering van gesprek","Rapporteren","Projecteren"],
        ans:1, leg:"Structurering van gesprek = taal gebruiken om het gesprek te organiseren (beurten, opening, afsluiting)." },
      { q:"Een kind vertelt precies wat het op het schoolplein zag gebeuren. Welke cognitieve taalfunctie is dit?",
        opts:["Rapporteren","Redeneren","Projecteren","Structureren"],
        ans:0, leg:"Rapporteren = verslag doen van iets dat (echt) gebeurt of is gebeurd." },
      { q:"Vóór een spreekbeurt bepaal je je doel, onderwerp en publiek. Welke stap van de spreekstrategie is dit?",
        opts:["Monitoren","Oriënteren","Evalueren","Reflecteren"],
        ans:1, leg:"Oriënteren = je vooraf richten op doel, onderwerp, taakvorm en publiek." },
      { q:"Tijdens je presentatie merk je dat het publiek je niet volgt en je verduidelijkt. Welke stap is dit?",
        opts:["Oriënteren","Monitoren","Reflecteren","Evalueren"],
        ans:1, leg:"Monitoren = tijdens het spreken nagaan of je duidelijk bent en waar nodig bijsturen." },
      { q:"Een kind van 1,5 jaar zegt 'poes' en bedoelt 'daar is de poes'. Hoe heet zo'n uiting?",
        opts:["Tweewoordzin","Eenwoordzin","Meerwoordzin","Brabbelen"],
        ans:1, leg:"Een eenwoordzin: één woord drukt een hele boodschap uit." },
      { q:"Een kind zegt 'gevald' in plaats van 'gevallen'. Hoe heet dit verschijnsel?",
        opts:["Interferentie","Overgeneralisatie","Differentiatie","Vocaliseren"],
        ans:1, leg:"Overgeneralisatie = een taalregel te breed toepassen (gevald, loopte)." },
      { q:"Een kind leert eerst thuis Turks en pas op de basisschool Nederlands. Welke vorm van tweetaligheid?",
        opts:["Simultane tweetaligheid","Successieve tweetaligheid","Interferentie","Overgeneralisatie"],
        ans:1, leg:"Successieve tweetaligheid = de tweede taal wordt geleerd nadat de eerste taal al is verworven." },
      { q:"Werkwoorden goed vervoegen en woorden correct uitspreken hoort bij welke competentie?",
        opts:["Grammaticale competentie","Tekstuele competentie","Strategische competentie","Functionele competentie"],
        ans:0, leg:"Grammaticale competentie = kennis van grammatica, woordenschat, uitspraak en vervoeging." },
      { q:"De leerkracht doet hardop denkend voor hoe hij een luisterstrategie toepast. Welke leerkrachtvaardigheid is dit?",
        opts:["Scaffolding","Modeling","Differentiatie","Semantiseren"],
        ans:1, leg:"Modeling = een (denk)proces of strategie hardop voordoen, zodat de onzichtbare vaardigheid zichtbaar wordt." },
      { q:"Een kind zegt 'ik heb het aangetrekt'. De leerkracht reageert: 'Oh, je hebt het aangetrokken.' Welke techniek gebruikt de leerkracht?",
        opts:["Expliciet verbeteren","Modeling (impliciet het correcte model geven)","Scaffolding","Negeren"],
        ans:1, leg:"Dit is modeling: de leerkracht geeft impliciet het correcte taalmodel door de juiste vorm hardop uit te spreken." },
      { q:"De leerkracht biedt tijdelijke taalsteun net boven het niveau van de leerling ('een steigertje'), en bouwt die af. Hoe heet dit?",
        opts:["Modeling","Scaffolding","Differentiatie","Automatiseren"],
        ans:1, leg:"Scaffolding = tijdelijke steun net boven het huidige niveau, die wordt afgebouwd naarmate de leerling het zelf kan." }
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
        ans:0, leg:"Taalbewustzijn = nadenken over de vormaspecten van taal (zin, woord, klank), los van de betekenis." },
      { q:"Een kind hoort het verschil tussen 'pan' en 'pen'. Welke auditieve vaardigheid is dit?",
        opts:["Auditieve analyse","Auditieve discriminatie","Auditieve synthese","Temporeel ordenen"],
        ans:1, leg:"Auditieve discriminatie = verschillen horen tussen klanken of woorden (pan/pen)." },
      { q:"Een kind voegt de letters m-aa-n samen tot het woordbeeld 'maan'. Welke vaardigheid is dit?",
        opts:["Visuele analyse","Visuele synthese","Auditieve synthese","Spatieel ordenen"],
        ans:1, leg:"Visuele synthese = letters of grafemen samenvoegen tot een woord." },
      { q:"Een kind leert 'tak' niet als 'kat' te lezen door de leesrichting te volgen. Welke vaardigheid?",
        opts:["Letterpositie bepalen","Spatieel ordenen","Visuele discriminatie","Temporeel ordenen"],
        ans:1, leg:"Spatieel ordenen = de lees- en schrijfrichting volgen, van links naar rechts." },
      { q:"Een kind onthoudt de klanken /m/ /aa/ /n/ in de juiste volgorde. Welke vaardigheid?",
        opts:["Klankpositie bepalen","Temporeel ordenen","Auditieve discriminatie","Visuele analyse"],
        ans:1, leg:"Temporeel ordenen = klanken of woorden in de juiste volgorde onthouden." },
      { q:"Een peuter 'leest' een prentenboek na en herkent zijn eigen naam. In welke fase zit dit kind?",
        opts:["Beginnende geletterdheid","Ontluikende geletterdheid","Gevorderde geletterdheid","Functionele geletterdheid"],
        ans:1, leg:"Ontluikende geletterdheid = de voorschoolse kennismaking met geschreven taal (0–4 jaar)." },
      { q:"Een verkeersbord met een tekening van een fiets is een voorbeeld van ...",
        opts:["Pictografisch schrift","Logografisch schrift","Alfabetisch schrift","Invented spelling"],
        ans:0, leg:"Pictografisch schrift = schrift met tekeningen of afbeeldingen." },
      { q:"Een schrift waarin spraakklanken met losse letters worden weergegeven, zoals het Nederlands, heet ...",
        opts:["Pictografisch schrift","Logografisch schrift","Alfabetisch schrift","Syllabisch schrift"],
        ans:2, leg:"Alfabetisch schrift: spraakklanken worden met letters weergegeven." },
      { q:"Een kleuter 'schrijft' een boodschap met golvende krabbels. In welke vroege schrijffase zit het?",
        opts:["Invented spelling","Krabbelen","Eén of enkele letters gebruiken","Ketens letterachtige vormen"],
        ans:1, leg:"Krabbelen = een vroege schrijffase waarin woorden met krabbels worden weergegeven." },
      { q:"Een kind koppelt de klank /ui/ aan de letters 'ui'. Hoe heet die koppeling?",
        opts:["Alfabetisch principe","Foneem-grafeemkoppeling","Auditieve synthese","Temporeel ordenen"],
        ans:1, leg:"Foneem-grafeemkoppeling = een klank koppelen aan de bijbehorende letter of lettercombinatie." }
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
    addConcepts: [
      { t:"Didactische modellen begrijpend lezen", icon:"🧩",
        d:"Benaderingen voor het onderwijzen van begrijpend lezen, van leerlinggestuurd (zelfontdekkend leren) tot leraargestuurd (dialogisch leren). Het Expertisecentrum noemt er drie die het midden houden: directe instructie, elkaar onderwijzen en probleemgestuurd lezen.",
        ex:"De meeste leesmethoden zijn gebaseerd op het directe instructiemodel." },
      { t:"Directe instructiemodel", icon:"📐", art:"directeInstructie",
        d:"Veelgebruikt lesmodel in drie fasen: (1) uitleggen en voordoen, (2) oefening en begeleiding, (3) verwerking of toepassing. De sturing van de leerkracht neemt per fase af.",
        ex:"De leerkracht doet een leesstrategie hardop voor, laat leerlingen in tweetallen oefenen en daarna zelfstandig toepassen." },
      { t:"Elkaar onderwijzen", icon:"👥",
        d:"Didactische aanpak (reciprocal teaching) waarbij leerlingen om de beurt de rol van 'leraar' vervullen en samen leesstrategieën toepassen: voorspellen, vragen stellen, ophelderen en samenvatten.",
        ex:"In een groepje leidt steeds een andere leerling het gesprek over de tekst." }
    ],
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
        ans:1, leg:"Het tekstkenmerk 'bedoeling' gaat over het doel van de schrijver: informeren, overtuigen, amuseren of instrueren." },
      { q:"Je zoekt in een tekst gericht naar de datum van een gebeurtenis. Wat is je leesdoel?",
        opts:["Informatie zoeken","Mening vormen","Ontspannen lezen","Handeling uitvoeren"],
        ans:0, leg:"Informatie zoeken = gericht zoeken naar feiten, namen of gegevens." },
      { q:"Je geeft de hoofdzaken van een tekst in drie zinnen weer. Welke leesstrategie is dit?",
        opts:["Voorspellen","Samenvatten","Visualiseren","Afleiden"],
        ans:1, leg:"Samenvatten = de hoofdzaken kort en overzichtelijk weergeven." },
      { q:"Je maakt in je hoofd een beeld van de scène die je leest. Welke strategie is dit?",
        opts:["Verbinden","Visualiseren","Monitoren","Vragen stellen"],
        ans:1, leg:"Visualiseren = beelden vormen bij de tekst om je begrip te ondersteunen." },
      { q:"Vóór en tijdens het lezen bedenk je: 'wat wil ik hier te weten komen?' Welke strategie is dit?",
        opts:["Vragen stellen","Samenvatten","Afleiden","Verbinden"],
        ans:0, leg:"Vragen stellen = vragen bedenken en tijdens het lezen antwoorden zoeken." },
      { q:"'Eerst… daarna… ten slotte…' Welke tekstrelatie herken je aan deze signaalwoorden?",
        opts:["Vergelijking","Chronologie","Middel-doelrelatie","Vraag-antwoordrelatie"],
        ans:1, leg:"Chronologie = een tekstverband in tijdsvolgorde." },
      { q:"'Een olifant is veel groter dan een muis.' Welke tekstrelatie is dit?",
        opts:["Chronologie","Vergelijking","Voorbeeldrelatie","Voorwaardelijke structuur"],
        ans:1, leg:"Een vergelijking legt overeenkomsten of verschillen bloot ('groter dan')." },
      { q:"'Er zijn veel fruitsoorten, zoals appels en peren.' Welke tekstrelatie is dit?",
        opts:["Voorbeeldrelatie","Vergelijking","Middel-doelrelatie","Chronologie"],
        ans:0, leg:"Een voorbeeldrelatie verduidelijkt iets met een voorbeeld ('zoals…')." },
      { q:"Onderstrepen, een schema maken en een mindmap tekenen zijn voorbeelden van ...",
        opts:["Leesstrategieën","Studievaardigheden","Voordrachtsaspecten","Tekstkenmerken"],
        ans:1, leg:"Studievaardigheden = technieken om informatie uit bronnen te verwerken en vast te leggen." },
      { q:"Een nieuwsbericht dat je feiten wil geven, heeft als tekstdoel ...",
        opts:["Overtuigen","Informeren","Amuseren","Instrueren"],
        ans:1, leg:"Tekstdoel informeren = de lezer informatie of kennis geven." },
      { q:"Wat zijn de drie fasen van het directe instructiemodel?",
        opts:["Voorspellen, lezen, samenvatten","Uitleggen en voordoen, oefening en begeleiding, verwerking of toepassing","Semantiseren, consolideren, controleren","Oriënteren, monitoren, evalueren"],
        ans:1, leg:"Het directe instructiemodel: 1 uitleggen en voordoen, 2 oefening en begeleiding, 3 verwerking of toepassing — met afnemende sturing van de leerkracht." },
      { q:"Zelfontdekkend leren is een voorbeeld van ... onderwijs.",
        opts:["Leraargestuurd","Leerlinggestuurd","Methodegebonden","Klassikaal"],
        ans:1, leg:"Zelfontdekkend leren is leerlinggestuurd; dialogisch leren is juist leraargestuurd. De drie Expertisecentrum-modellen houden het midden." },
      { q:"Leerlingen vervullen om de beurt de rol van 'leraar' en passen samen leesstrategieën toe. Welke aanpak is dit?",
        opts:["Directe instructie","Elkaar onderwijzen (reciprocal teaching)","Probleemgestuurd lezen","Modeling"],
        ans:1, leg:"Elkaar onderwijzen (reciprocal teaching): leerlingen nemen beurten als gespreksleider en passen strategieën als voorspellen, vragen stellen, ophelderen en samenvatten toe." }
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
        ans:1, leg:"In een prentenboek geven tekst en beeld samen de betekenis." },
      { q:"Welk rijmschema hoort bij het patroon A-B-C-B?",
        opts:["Gepaard rijm","Omarmend rijm","Gekruist rijm","Gebroken rijm"],
        ans:3, leg:"Gebroken rijm = ABCB: alleen de tweede en vierde regel rijmen." },
      { q:"Een grappig gedicht van 5 regels met rijmschema aabba is een ...",
        opts:["Haiku","Limerick","Rondeel","Elfje"],
        ans:1, leg:"Een limerick: 5 regels, vaak rijmschema aabba, met een humoristische pointe." },
      { q:"Een gedicht waarbij de beginletters van de regels samen een naam vormen, heet een ...",
        opts:["Rondeel","Naamgedicht","Sonnet","Copla"],
        ans:1, leg:"Een naamgedicht (acrostichon): de beginletters vormen samen een woord of naam." },
      { q:"Proza, drama en poëzie zijn een indeling van jeugdliteratuur naar ...",
        opts:["Thema","Doelstelling","Vorm","Woord en beeld"],
        ans:2, leg:"De indeling naar vorm: proza, drama en poëzie." },
      { q:"Een prentenboek of stripverhaal valt onder welke indeling?",
        opts:["Thema-indeling","Woord-en-beeld-indeling","Vorm","Doelstelling"],
        ans:1, leg:"De woord-en-beeld-indeling: prentenboek, strip, informatieve tekst, poëzie." },
      { q:"Een boek waarin bewust normen en waarden worden meegegeven, vervult vooral de ...",
        opts:["Esthetische functie","Opvoedende functie","Ontspannende functie","Informatieve functie"],
        ans:1, leg:"De opvoedende functie: literatuur draagt normen, waarden of standpunten over." },
      { q:"Een kind gaat helemaal op in een spannend avonturenboek. Welke functie is dit vooral?",
        opts:["Informatieve functie","Ontspannende functie","Opvoedende functie","Esthetische functie"],
        ans:1, leg:"De ontspannende functie: de lezer gaat op in het verhaal of de fantasie." },
      { q:"Een gewone verhaaltekst die niet in versvorm is geschreven, heet ...",
        opts:["Poëzie","Proza","Drama","Lyriek"],
        ans:1, leg:"Proza = gewone geschreven of gesproken taal, niet in versvorm." },
      { q:"De regelmaat in de klank en opbouw van een gedicht heet ...",
        opts:["Rijm","Ritme","Strofe","Beeldspraak"],
        ans:1, leg:"Ritme = de regelmaat in klank of opbouw van een gedicht." }
    ]
  },

  /* =========================================================
     HOOFDSTUK 9 · Taalbeschouwing en spelling
     ========================================================= */
  "taalbeschouwing-spelling": {
    tweaks: {
      /* --- Taalbeschouwing: nadenken over taal --- */
      "Metalinguïstisch bewustzijn": { d:"Je kunt bewust nadenken en praten over taal zélf: over de vorm, de klank, de bouw of het gebruik van woorden en zinnen. Taal wordt dan het onderwerp.", ex:"Een kind merkt op: 'Gister zeg je toch raar? Moet dat niet gisteren zijn?'" },
      "Relateren": { d:"Verbanden leggen tussen taalelementen: zien hoe woorden, woorddelen of zinnen met elkaar samenhangen.", ex:"Zien dat 'onvriendelijk' = on- + vriendelijk, en dat 'on-' het tegenovergestelde maakt." },
      "Classificeren": { d:"Woorden of zinnen in groepen (categorieën) indelen op grond van een gemeenschappelijk kenmerk.", ex:"'De', 'het' en 'een' samen in de groep lidwoorden zetten." },
      "Generaliseren": { d:"Uit losse voorbeelden zelf een algemene (taal)regel afleiden.", ex:"Merken dat na een korte klank de medeklinker verdubbelt (bakker, koffer) en daar de regel van maken." },
      "Herordenen": { d:"Taal bewust anders rangschikken om er iets over te ontdekken, bijvoorbeeld woorden of zinsdelen van plaats wisselen.", ex:"'Morgen ga ik zwemmen' → 'Ik ga morgen zwemmen'; de betekenis blijft gelijk." },
      /* --- Zinsontleden (redekundig) --- */
      "Zinsontleden": { d:"De functie van de zinsdelen benoemen: wie doet wat? Denk aan onderwerp, gezegde en lijdend voorwerp. Heet ook redekundig ontleden.", ex:"'De hond eet een koekje' → onderwerp: de hond · gezegde: eet · lijdend voorwerp: een koekje." },
      "Woordbenoemen": { d:"De woordsoort van elk los woord benoemen (zelfstandig naamwoord, werkwoord, lidwoord…). Heet ook taalkundig ontleden.", ex:"'de rode fiets' → de = lidwoord · rode = bijvoeglijk naamwoord · fiets = zelfstandig naamwoord." },
      "Onderwerp": { d:"Het zinsdeel dat aangeeft wie of wat iets doet of is. Vindtruc: vraag 'wie of wat' + het gezegde.", ex:"'De hond blaft' → wie blaft? De hond = onderwerp." },
      "Werkwoordelijk gezegde": { d:"Alle werkwoorden samen die vertellen wat er gebeurt of gedaan wordt — zónder koppelwerkwoord.", ex:"'Zij heeft gisteren gevoetbald' → werkwoordelijk gezegde = heeft gevoetbald." },
      "Naamwoordelijk gezegde": { d:"Een gezegde met een koppelwerkwoord (zijn, worden, blijven, lijken, schijnen, heten) plus een naamwoordelijk deel dat iets over het onderwerp zegt.", ex:"'De soep is koud' → koppelwerkwoord 'is' + naamwoordelijk deel 'koud'." },
      "Lijdend voorwerp": { d:"Het zinsdeel dat de handeling ondergaat. Vindtruc: 'wie of wat' + gezegde + onderwerp.", ex:"'Ik eet een appel' → wat eet ik? Een appel = lijdend voorwerp." },
      "Meewerkend voorwerp": { d:"Het zinsdeel dat aangeeft aan of voor wie iets gebeurt. Je kunt er vaak 'aan' of 'voor' voor zetten.", ex:"'Ik geef mijn zus een boek' → aan wie? (aan) mijn zus = meewerkend voorwerp." },
      "Bijwoordelijke bepaling": { d:"Een zinsdeel dat extra informatie geeft over tijd, plaats, manier of reden (wanneer? waar? hoe? waarom?).", ex:"'Morgen kom ik naar school' → 'morgen' (tijd) en 'naar school' (plaats)." },
      /* --- Woordsoorten --- */
      "Zelfstandig naamwoord": { d:"Een woord voor een mens, dier, ding, plaats of begrip. Je kunt er meestal 'de' of 'het' voor zetten.", ex:"tafel, hond, Amsterdam, vrijheid." },
      "Bijvoeglijk naamwoord": { d:"Een woord dat iets zegt over een zelfstandig naamwoord: hoe iets is.", ex:"'de rode fiets', 'een lief kind' → rode en lief." },
      "Bijwoord": { d:"Een woord dat iets zegt over een werkwoord, een bijvoeglijk naamwoord of de hele zin. (Een bijvoeglijk naamwoord hoort juist bij een zelfstandig naamwoord.)", ex:"'Hij loopt snel' (snel bij lopen); 'heel mooi' (heel bij mooi)." },
      "Voornaamwoord": { d:"Een woord dat verwijst naar, of in de plaats komt van, een zelfstandig naamwoord (persoon, ding of bezit).", ex:"hij, zij, dit, die, mijn, jouw." },
      "Voorzetsel": { d:"Een woord dat een plaats-, tijd- of ander verband aangeeft; het staat meestal vóór een zelfstandig naamwoord.", ex:"in, op, onder, naast, tussen → 'de bal ligt onder de tafel'." },
      "Voegwoord": { d:"Een woord dat woorden, zinsdelen of zinnen met elkaar verbindt.", ex:"en, of, maar, omdat → 'Ik blijf thuis omdat het regent'." },
      "Werkwoord": { d:"Een woord dat een handeling, gebeurtenis of toestand uitdrukt: iets wat je doet of wat er gebeurt.", ex:"lopen, denken, zijn → 'Zij rent'." },
      "Lidwoord": { d:"De woordjes 'de', 'het' en 'een' die vóór een zelfstandig naamwoord staan.", ex:"de fiets, het huis, een boom." },
      /* --- Taalvariatie --- */
      "Taalvariëteit": { d:"Eén concrete verschijningsvorm van taal: een bepaalde variant die een groep of streek gebruikt.", ex:"Het Twents, straattaal of formele schrijftaal zijn elk een taalvariëteit." },
      "Autochtone standaardtalen": { d:"Van oudsher in Nederland gesproken talen met een eigen, erkende status náást het Standaardnederlands. De samenvatting noemt het Fries en het Nedersaksisch.", ex:"Fries is in Friesland een officiële taal; Nedersaksisch is een erkende streektaal." },
      "Register": { d:"De toon en stijl van taal die passen bij de situatie of groep: formeel of informeel, algemeen of vakjargon.", ex:"Tegen je baas: 'Zou u…?'; tegen een vriend: 'Doe ff.'" },
      "Recursieve eigenschap": { d:"De eigenschap van taal dat een onderdeel een zelfde soort onderdeel kan bevatten, zodat je eindeloos kunt uitbreiden. Zo kan een zin een andere zin in zich hebben.", ex:"'Ik denk dat jij weet dat hij komt' — een zin in een zin in een zin." },
      /* --- Taalkunde-onderdelen --- */
      "Foneem": { d:"De kleinste klank die betekenisverschil maakt. Vervang je hem, dan verandert het woord.", ex:"/b/ tegenover /d/: 'bak' wordt 'dak'." },
      "Morfeem": { d:"Het kleinste deeltje van een woord dat nog betekenis draagt.", ex:"'vrijheid' = vrij + heid (twee morfemen)." },
      "Vrij morfeem": { d:"Een morfeem dat een zelfstandig woord is en alleen kan staan.", ex:"huis, boom, fiets." },
      "Gebonden morfeem": { d:"Een morfeem dat niet op zichzelf kan staan; het plakt altijd aan een ander woorddeel vast.", ex:"-tje, -heid, on-, ge- (zoals in huis-je, vrij-heid)." },
      "Samenstelling": { d:"Een nieuw woord maken door twee (of meer) bestaande woorden aan elkaar te plakken.", ex:"fiets + bel = 'fietsbel'; voetbal + doel = 'voetbaldoel'." },
      "Afleiding": { d:"Een nieuw woord maken door een voor- of achtervoegsel (gebonden morfeem) toe te voegen.", ex:"nat → 'nattig'; huis → 'huisje'; vriend → 'vriendschap'." },
      "Verbuiging": { d:"Vormverandering van een zelfstandig of bijvoeglijk naamwoord of lidwoord (bijvoorbeeld een -e erbij), zónder dat er een nieuw woord ontstaat.", ex:"'mooi' wordt 'mooie' in 'een mooie dag'." },
      "Vervoeging": { d:"Vormverandering van een werkwoord naar persoon en tijd.", ex:"lopen → ik loop, hij loopt, wij liepen." },
      "Pragmatiek": { d:"Hoe je taal gebruikt in een concrete situatie: wat past, wat is beleefd, en wat bedoel je écht?", ex:"'Kun je het zout aangeven?' is geen vraag of je het kúnt, maar een beleefd verzoek." },
      "Taalhandeling": { d:"Iets wat je mét taal dóét: door iets te zeggen voer je meteen een handeling uit.", ex:"beloven ('ik doe het morgen'), bevelen ('ruim op!'), vragen, waarschuwen." },
      "Homograaf": { d:"Woorden die je hétzelfde schrijft, maar verschillend uitspreekt (en die iets anders betekenen).", ex:"'de regént' (heerser) en 'het régent' (er valt regen); 'vóórkomen' en 'voorkómen'." },
      /* --- Spelling: handeling & strategieën --- */
      "Elementaire spellinghandeling": { d:"De eerste, spellende manier van schrijven: het woord beluisteren, in klanken hakken, bij elke klank de letter(s) kiezen en opschrijven.", ex:"'maan' → /m/ /aa/ /n/ → m-aa-n." },
      "Fonemen onthouden": { d:"De losse klanken van een woord in de juiste volgorde vasthouden terwijl je ze opschrijft.", ex:"'maan' → /m/-/aa/-/n/ in díé volgorde onthouden." },
      "Foneem-grafeemkoppeling": { d:"Een klank (foneem) koppelen aan de bijbehorende letter of lettercombinatie (grafeem).", ex:"de klank /ui/ koppel je aan de letters 'ui'." },
      "Directe spellingstrategie": { d:"Je weet de schrijfwijze meteen uit je hoofd, zonder nadenken (geautomatiseerd).", ex:"'de', 'ik' en 'school' schrijf je zó op." },
      "Indirecte spellingstrategie": { d:"Je denkt bewust na vóór je schrijft: je gebruikt een regel, een vergelijking, het woordbeeld of een ezelsbruggetje.", ex:"Bij 'hij vindt' eerst bedenken: stam 'vind' + t." },
      "Fonologische strategie": { d:"Je schrijft een woord door het in klanken te hakken en bij elke klank de letter te kiezen (schrijven zoals je het hoort).", ex:"'kat' → /k/ /a/ /t/ → kat." },
      "Woordbeeldstrategie": { d:"Je schrijft het woord op uit je geheugen, omdat je het beeld van het hele woord kent (een 'weetwoord').", ex:"'vrouw', 'thee' en 'chocolade' moet je gewoon weten." },
      "Regelstrategie": { d:"Je past een spellingregel toe die je geleerd hebt.", ex:"Verdubbelingsregel: na een korte klank een dubbele medeklinker → 'kat' wordt 'katten'." },
      "Analogiestrategie": { d:"Je schrijft een woord door het te vergelijken met een bekend woord dat net zo klinkt of is opgebouwd.", ex:"'dromen' schrijf je met één m, net als 'bomen'." },
      "Hulpstrategie": { d:"Je gebruikt een zelfbedacht geheugensteuntje of ezelsbruggetje.", ex:"''t kofschip' om te onthouden wanneer een werkwoord met -te of -de eindigt." },
      "Spellingcategorie": { d:"Een groep woorden met dezelfde spellingmoeilijkheid, die je samen aanleert.", ex:"woorden met '-eeuw' (meeuw, sneeuw) of met '-cht' (lucht, nacht)." },
      /* --- Spelling: principes --- */
      "Fonologisch principe": { d:"Je schrijft elke losse klank (foneem) met een eigen letter of lettercombinatie (grafeem): schrijven zoals je het hoort.", ex:"'maan' hoor je als /m/ /aa/ /n/ en zo schrijf je het ook." },
      "Klankzuiver woord": { d:"Een woord dat je precies schrijft zoals je het hoort — elke klank één letter(groep).", ex:"maan, tuin, vis, boom." },
      "Morfologisch principe": { d:"Je spelt op basis van de bouw en betekenis van een woord, niet alleen op de klank. Het omvat de regel van gelijkvormigheid en de regel van overeenkomst.", ex:"'hond' schrijf je met d, ook al hoor je een t, omdat je 'honden' kent." },
      "Regel van gelijkvormigheid": { d:"Je schrijft een woord(deel) altijd op dezelfde manier, ook al hoor je soms iets anders.", ex:"'hond' met d (vanwege 'honden'); 'web' met b (vanwege 'webben')." },
      "Regel van overeenkomst": { d:"Woorden die op dezelfde manier zijn opgebouwd, schrijf je ook op de overeenkomstige manier (naar analogie).", ex:"'hij vindt' krijgt een -t (stam + t), net als 'hij loopt' — ook al hoor je die t bij 'vindt' nauwelijks." },
      "Etymologisch principe": { d:"De herkomst (geschiedenis) van een woord bepaalt de schrijfwijze; dat moet je vaak gewoon onthouden.", ex:"Het verschil tussen 'ei' en 'ij' komt uit de geschiedenis van de woorden (weetwoorden)." },
      "Syllabisch principe": { d:"De schrijfwijze hangt af van de klankgroepen (syllaben) waarin je een woord verdeelt.", ex:"'ramen' → ra-men: open klankgroep met lange klank → één a (verenkeling)." },
      "Syllabe": { d:"Een klankgroep: een stukje van een woord dat je in één keer hoort. Let op: klankgroepen kunnen anders lopen dan de geschreven lettergrepen.", ex:"'bakker' deel je in klankgroepen als 'bak-ker'; je hoort de korte /a/." },
      "Verenkelingsregel": { d:"Eindigt een klankgroep op een lange klinker, dan schrijf je die met één letter.", ex:"ra-men → 'ramen' met één a (niet 'raamen')." },
      "Verdubbelingsregel": { d:"Na een korte klinker aan het eind van een klankgroep verdubbel je de medeklinker.", ex:"'bak' heeft een korte /a/ → 'bakker' met dubbele k." },
      "Werkwoordspelling": { d:"De regels om werkwoordsvormen correct te schrijven (persoonsvorm en voltooid deelwoord), vaak met stam + uitgang en 't kofschip.", ex:"'hij loopt' = stam 'loop' + t; voltooid deelwoord 'gewerkt' (met -t volgens 't kofschip)." },
      "Spelling": { d:"De manier waarop je gesproken taal in letters vastlegt: woorden correct schrijven volgens de afspraken.", ex:"weten dat je 'fiets' met ie en ts schrijft." }
    },
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
        ans:1, leg:"Standaardtaal is de taal van overheid, onderwijs en media. Een dialect is een regionale variant." },
      { q:"'De hond blaft in de tuin.' Wat is het onderwerp van deze zin?",
        opts:["De hond","blaft","in de tuin","de tuin"],
        ans:0, leg:"Het onderwerp geeft aan wie of wat iets doet of is: 'de hond' blaft." },
      { q:"'Ik geef mijn zus een cadeau.' Wat is 'mijn zus' in deze zin?",
        opts:["Lijdend voorwerp","Meewerkend voorwerp","Onderwerp","Bijwoordelijke bepaling"],
        ans:1, leg:"Het meewerkend voorwerp is voor/aan wie iets gebeurt: je geeft het cadeau aan 'mijn zus'." },
      { q:"'Morgen ga ik zwemmen.' Wat voor zinsdeel is 'morgen'?",
        opts:["Onderwerp","Lijdend voorwerp","Bijwoordelijke bepaling","Persoonsvorm"],
        ans:2, leg:"Een bijwoordelijke bepaling geeft extra informatie zoals tijd, plaats of manier — hier de tijd 'morgen'." },
      { q:"'Mijn broer is ziek.' Welk soort gezegde staat in deze zin?",
        opts:["Werkwoordelijk gezegde","Naamwoordelijk gezegde","Lijdend voorwerp","Bijstelling"],
        ans:1, leg:"Een naamwoordelijk gezegde heeft een koppelwerkwoord (is) + een naamwoordelijk deel (ziek)." },
      { q:"Welk woord is een voorzetsel?",
        opts:["snel","onder","lopen","mooi"],
        ans:1, leg:"Een voorzetsel geeft een relatie aan, zoals onder, op of tussen." },
      { q:"'Ik blijf thuis omdat het regent.' Wat voor woordsoort is 'omdat'?",
        opts:["Voorzetsel","Voegwoord","Bijwoord","Voornaamwoord"],
        ans:1, leg:"Een voegwoord verbindt woorden, zinsdelen of zinnen; 'omdat' verbindt hier twee zinnen." },
      { q:"In 'de rode fiets' is 'rode' een ...",
        opts:["Zelfstandig naamwoord","Bijvoeglijk naamwoord","Werkwoord","Lidwoord"],
        ans:1, leg:"Een bijvoeglijk naamwoord zegt iets over een zelfstandig naamwoord (rode → fiets)." },
      { q:"In 'Hij heeft gelopen' is 'gelopen' een ...",
        opts:["Persoonsvorm","Voltooid deelwoord","Infinitief","Onderwerp"],
        ans:1, leg:"Een voltooid deelwoord komt vaak met hebben, zijn of worden voor: 'heeft gelopen'." },
      { q:"Een regionale taalvariant, bijvoorbeeld het Twents, noem je een ...",
        opts:["Standaardtaal","Dialect","Register","Idioom"],
        ans:1, leg:"Een dialect is een regiogebonden taalvariëteit; standaardtaal is de algemene norm." },
      { q:"Je praat anders met je baas dan met je vrienden. Dat verschil in taalgebruik per situatie heet ...",
        opts:["Dialect","Register","Taalverandering","Interferentie"],
        ans:1, leg:"Register = taalgebruik dat past bij een situatie of groep (formeel versus informeel)." },
      { q:"Nieuwe woorden als 'appen' en 'swipen' zijn een voorbeeld van ...",
        opts:["Taalvariatie","Taalverandering","Register","Homonymie"],
        ans:1, leg:"Taalverandering: de woordenschat (en ook uitspraak of betekenis) verandert in de loop van de tijd." },
      { q:"Je schrijft 'vrouw' zó uit je hoofd omdat je het woordbeeld kent. Welke spellingstrategie is dit?",
        opts:["Regelstrategie","Woordbeeldstrategie","Fonologische strategie","Analogiestrategie"],
        ans:1, leg:"De woordbeeldstrategie: spellen op basis van het geheugenbeeld van het woord (een weetwoord)." },
      { q:"Een kind schrijft 'kat' door /k/ /a/ /t/ te verklanken. Welke spellingstrategie is dit?",
        opts:["Woordbeeldstrategie","Fonologische strategie","Regelstrategie","Hulpstrategie"],
        ans:1, leg:"De fonologische strategie: het woord opsplitsen in klanken en die koppelen aan letters." },
      { q:"Bij welk woord kun je de spelling NIET met een regel afleiden (een weetwoord)?",
        opts:["Bomen","Ramen","Vrouw","Koffer"],
        ans:2, leg:"'Vrouw' is een weetwoord: de schrijfwijze moet je onthouden. Bomen, ramen en koffer volgen een spellingregel." },
      { q:"Een leerling kan uitleggen wáárom 'hij loopt' een -t krijgt. Dat bewust nadenken over taalvorm heet ...",
        opts:["Taalvariatie","Metalinguïstisch bewustzijn","Taalverwerving","Register"],
        ans:1, leg:"Metalinguïstisch bewustzijn = bewust kunnen nadenken over de vorm en het gebruik van taal." }
    ]
  },

  /* =========================================================
     HOOFDSTUK 3 · Woordenschat — didactiek (viertakt, semantiseren)
     (Woordenschat zelf staat in data.js; dit verrijkt het.)
     ========================================================= */
  woordenschat: {
    addConcepts: [
      { t:"Semantiseren", icon:"💡", art:"drieUitjes",
        d:"De fase in de woordenschatdidactiek waarin de leerkracht de woordbetekenis uitlegt. Hij doet dit zélf (niet terugvragen) via de 'drie uitjes': uitbeelden, uitleggen en uitbreiden.",
        ex:"Bij 'vulkaan': een foto tonen (uitbeelden), omschrijven wat het is (uitleggen) en koppelen aan lava, uitbarsting, berg (uitbreiden)." },
      { t:"Drie uitjes", icon:"👐", art:"drieUitjes",
        d:"De drie manieren van semantiseren (Van den Nulft & Verhallen): uitbeelden (met beeld, gebaar of voorwerp), uitleggen (verbale uitleg en voorbeelden) en uitbreiden (het woord in een netwerk van woorden plaatsen).",
        ex:"Uitbeelden → uitleggen → uitbreiden." },
      { t:"Viertakt", icon:"🔄", art:"viertaktCyclus",
        d:"Didactisch model voor woordenschatonderwijs (Van den Nulft & Verhallen): voorbewerken, semantiseren, consolideren en controleren. Een woord raakt pas verankerd na ongeveer zeven keer aanbieden.",
        ex:"Voorkennis activeren → betekenis uitleggen → oefenen (woordkast/woordparaplu) → later nagaan of het onthouden is." },
      { t:"Incidenteel woordenschatonderwijs", icon:"🎲",
        d:"Woordbetekenissen komen min of meer toevallig aan bod, bijvoorbeeld bij het lezen van een tekst. De kans op blijvende uitbreiding is klein.",
        ex:"Tijdens het voorlezen legt de leerkracht een woord uit dat een kind niet kent." },
      { t:"Intentioneel woordenschatonderwijs", icon:"🎯",
        d:"Doelbewust en planmatig werken aan woordenschat, met woordselectie, thematische opbouw en veel herhaling.",
        ex:"Een vast programma leert per thema zorgvuldig gekozen woorden aan, met herhaling." },
      { t:"Woordselectie", icon:"🗳️",
        d:"Het zorgvuldig kiezen van aan te leren woorden op basis van criteria: woordfrequentie, nut en context. Woorden worden in clusters (woordgroepen) aangeboden.",
        ex:"Rond het thema ziekenhuis: dokter, verpleegster, injectie en operatie samen aanbieden." }
    ],
    mc: [
      { q:"Wat zijn de 'drie uitjes' van semantiseren?",
        opts:["Uitbeelden, uitleggen, uitbreiden","Uitknippen, uitspreken, uitschrijven","Horen, zien, doen","Voorbewerken, oefenen, toetsen"],
        ans:0, leg:"De drie uitjes (Van den Nulft & Verhallen): uitbeelden (beeld/gebaar), uitleggen (verbaal) en uitbreiden (het woord in een woordnetwerk plaatsen)." },
      { q:"Wat is de juiste volgorde van de viertakt?",
        opts:["Semantiseren, voorbewerken, controleren, consolideren","Voorbewerken, semantiseren, consolideren, controleren","Controleren, consolideren, semantiseren, voorbewerken","Voorbewerken, consolideren, semantiseren, controleren"],
        ans:1, leg:"De viertakt: 1 voorbewerken (voorkennis activeren), 2 semantiseren (betekenis uitleggen), 3 consolideren (oefenen), 4 controleren (nagaan of onthouden)." },
      { q:"In welke fase van de viertakt oefenen leerlingen het woord en de betekenis, bijvoorbeeld met de woordkast of woordparaplu?",
        opts:["Voorbewerken","Semantiseren","Consolideren","Controleren"],
        ans:2, leg:"Consolideren = oefenen en inslijpen. Een woord raakt pas verankerd na ongeveer zeven keer aanbieden." },
      { q:"Wat doet de leerkracht bij semantiseren het best?",
        opts:["De betekenis terugvragen aan de klas","Zélf de betekenis duidelijk uitleggen","De leerlingen het woord laten opzoeken","Het woord overslaan"],
        ans:1, leg:"Bij semantiseren legt de leerkracht de betekenis zélf duidelijk uit; de meeste kinderen kennen het woord nog niet of onvolledig." },
      { q:"Een leerkracht werkt doelbewust en planmatig aan woordenschat, met woordselectie en thematische opbouw. Welke aanpak is dit?",
        opts:["Incidenteel woordenschatonderwijs","Intentioneel woordenschatonderwijs","Semi-incidenteel onderwijs","Modeling"],
        ans:1, leg:"Intentioneel = doelbewust en planmatig. Incidenteel = woorden komen toevallig aan bod (bijv. tijdens het lezen)." },
      { q:"Welke criteria gebruikt een leerkracht om woorden te selecteren voor het woordenschatonderwijs?",
        opts:["Woordlengte, kleur en klank","Woordfrequentie, nut en context","Alfabetische volgorde","Aantal lettergrepen"],
        ans:1, leg:"Woorden worden geselecteerd op frequentie, nut en context — en bij voorkeur in clusters (woordgroepen) aangeboden." }
    ]
  }

};

/* ---- Verrijking toepassen op de hoofdstukken ---- */
(function applyEnrichment(){
  if (typeof CHAPTERS === "undefined") return;
  CHAPTERS.forEach(ch => {
    const e = ENRICH[ch.id];
    if (!e) return;
    if (e.intro) ch.intro = e.intro;
    if (e.subtitle) ch.subtitle = e.subtitle;
    if (e.addConcepts) e.addConcepts.forEach(c => ch.concepts.push(c));
    if (e.mc) ch.mc = (ch.mc || []).concat(e.mc);
    if (e.tweaks || e.art) {
      ch.concepts.forEach(c => {
        if (e.tweaks && e.tweaks[c.t]) Object.assign(c, e.tweaks[c.t]);
        if (e.art && e.art[c.t]) c.art = e.art[c.t];
      });
    }
  });
})();
