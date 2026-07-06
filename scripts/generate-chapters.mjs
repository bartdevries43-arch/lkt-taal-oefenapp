import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { writeFileSync } from "node:fs";

const here = dirname(fileURLToPath(import.meta.url));
const source = resolve(here, "../../SAMENVATTING TAAL.docx");
const target = resolve(here, "../js/chapters.generated.js");

const xml = execFileSync("unzip", ["-p", source, "word/document.xml"], {
  encoding: "utf8",
  maxBuffer: 20_000_000
});

const decode = text => text
  .replace(/&amp;/g, "&")
  .replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">")
  .replace(/&#39;/g, "'")
  .replace(/&quot;/g, '"');

const lines = decode(xml
  .replace(/<w:tab[^>]*\/>/g, "\t")
  .replace(/<w:br[^>]*\/>/g, "\n")
  .replace(/<\/w:p>/g, "\n")
  .replace(/<[^>]+>/g, ""))
  .split(/\n/)
  .map(line => line.trim())
  .filter(Boolean);

const start = lines.indexOf("Begrippen per domein");
if (start < 0) throw new Error("De tabel 'Begrippen per domein' is niet gevonden.");

const sourceChapters = new Map();
let current = null;
for (const line of lines.slice(start + 1)) {
  const heading = line.match(/^Hoofdstuk (\d+) - (.+)$/);
  if (heading) {
    current = Number(heading[1]);
    sourceChapters.set(current, { title: heading[2], rows: [] });
    continue;
  }
  if (!current || line === "Begrip" || line === "Korte uitleg") continue;
  sourceChapters.get(current).rows.push(line);
}

for (const chapter of sourceChapters.values()) {
  if (chapter.rows.length % 2 !== 0) {
    throw new Error(`Oneven aantal tabelregels in ${chapter.title}.`);
  }
  chapter.concepts = [];
  for (let i = 0; i < chapter.rows.length; i += 2) {
    const term = chapter.rows[i];
    const raw = chapter.rows[i + 1];
    const exampleMatch = raw.match(/\(bijv\. ([^)]+)\)/i);
    const definition = raw
      .replace(exampleMatch?.[0] || "", "")
      .replace(/\s+\./g, ".")
      .replace(/\s{2,}/g, " ")
      .trim();
    const example = exampleMatch
      ? exampleMatch[1].charAt(0).toUpperCase() + exampleMatch[1].slice(1).replace(/[.]?$/, ".")
      : `Herken ${term.toLowerCase()} aan de kenmerken uit de uitleg.`;
    chapter.concepts.push({ t: term, d: definition, ex: example });
  }
}

const metadata = [
  {
    id: "taalonderwijs", nr: 1, source: [2], title: "Taalonderwijs en taal",
    subtitle: "Taalfuncties, geletterdheid en taalniveaus", icon: "💬",
    intro: "Leer hoe taalonderwijs is opgebouwd, welke functies taal heeft en op welke niveaus je taal kunt bekijken."
  },
  {
    id: "mondeling", nr: 2, source: [3], title: "Mondelinge taalvaardigheid",
    subtitle: "Luisteren, spreken en taalverwerving", icon: "🎙️",
    intro: "Oefen luister- en spreekdoelen, taalontwikkelingsfasen, meertaligheid en communicatieve competenties."
  },
  {
    id: "beginnende-geletterdheid", nr: 4, source: [5], title: "Beginnende geletterdheid",
    subtitle: "Van taalbewustzijn naar de eerste leeshandeling", icon: "🔤",
    intro: "Leer hoe kinderen geschreven taal ontdekken, klanken en letters verbinden en de elementaire leeshandeling uitvoeren."
  },
  {
    id: "technisch-lezen", nr: 5, source: [6], title: "Voortgezet technisch lezen",
    subtitle: "Decoderen, automatiseren en vloeiend lezen", icon: "📖",
    intro: "Oefen leesstrategieën, leesmodellen, voordrachtsaspecten, niveaubepaling en de kern van dyslexie."
  },
  {
    id: "begrijpend-lezen", nr: 6, source: [7], title: "Begrijpend lezen",
    subtitle: "Tekstbegrip, leesstrategieën en informatieverwerking", icon: "🔎",
    intro: "Leer teksten doelgericht begrijpen, relaties herkennen en informatie verwerken met passende strategieën."
  },
  {
    id: "stellen", nr: 7, source: [8], title: "Stellen",
    subtitle: "Schrijfproces, stelvaardigheden en tekststructuren", icon: "✍️",
    intro: "Oefen de functies van schrijven, het schrijfproces, tekststructuren en alle vaardigheden van plannen tot reviseren."
  },
  {
    id: "jeugdliteratuur", nr: 8, source: [9], title: "Jeugdliteratuur",
    subtitle: "Genres, poëzie, functies en beoordeling", icon: "📚",
    intro: "Leer literaire genres en versvormen herkennen en kinderboeken vanuit verschillende criteria beoordelen."
  },
  {
    id: "taalbeschouwing-spelling", nr: 9, source: [10, 11], title: "Taalbeschouwing en spelling",
    subtitle: "Grammatica, taalvariatie en spellingprincipes", icon: "🔠",
    intro: "Oefen taalbeschouwingsstrategieën, grammatica, woordopbouw, taalvariatie en de Nederlandse spelling."
  }
];

const iconRules = [
  [/luister|auditief/i, "👂"], [/spreek|mondeling|articul|uitspraak/i, "🗣️"],
  [/schrijf|stel|tekst/i, "✍️"], [/lees|letter|grafeem|foneem/i, "📖"],
  [/woord|morfeem|lexicon/i, "🔤"], [/zin|syntact|grammat/i, "🧩"],
  [/beteken|semant/i, "💡"], [/strategie|aanpak/i, "🧭"],
  [/doel|functie/i, "🎯"], [/fase|periode|ontwikkeling/i, "🌱"],
  [/boek|liter|genre|proza|poëzie|rijm|vers/i, "📚"],
  [/spelling|orthograf|regel/i, "✏️"], [/taal/i, "💬"]
];

const iconFor = (term, fallback) => iconRules.find(([pattern]) => pattern.test(term))?.[1] || fallback;
const varName = id => `CH_${id.toUpperCase().replace(/-/g, "_")}`;
const blocks = [];

for (const meta of metadata) {
  const concepts = meta.source.flatMap(number => sourceChapters.get(number)?.concepts || [])
    .map(concept => ({ ...concept, icon: iconFor(concept.t, meta.icon) }));
  const value = { ...meta, source: undefined, concepts, mc: [] };
  blocks.push(`const ${varName(meta.id)} = ${JSON.stringify(value, null, 2)};`);
}

const ordered = [
  "CH_TAALONDERWIJS", "CH_MONDELING", "CH_WOORDENSCHAT", "CH_BEGINNENDE_GELETTERDHEID",
  "CH_TECHNISCH_LEZEN", "CH_BEGRIJPEND_LEZEN", "CH_STELLEN", "CH_JEUGDLITERATUUR",
  "CH_TAALBESCHOUWING_SPELLING"
];

const header = `/* ============================================================\n` +
  `   AUTOMATISCH GEGENEREERD UIT SAMENVATTING TAAL.docx\n` +
  `   Pas de bron aan en voer scripts/generate-chapters.mjs uit.\n` +
  `   ============================================================ */\n\n`;

writeFileSync(target, `${header}${blocks.join("\n\n")}\n\nconst CHAPTERS = [\n  ${ordered.join(",\n  ")}\n];\n`);
console.log(`Gegenereerd: ${target}`);
console.log(`Hoofdstukken: ${ordered.length}; nieuwe begrippen: ${metadata.reduce((sum, meta) => sum + meta.source.reduce((n, sourceNumber) => n + (sourceChapters.get(sourceNumber)?.concepts.length || 0), 0), 0)}`);
