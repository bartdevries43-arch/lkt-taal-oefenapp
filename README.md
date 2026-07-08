# 📚 LKT Taal – Oefenapp

Een oefenapp om te leren voor de **LKT Taaltoets** (Kennisbasis Taal, Pabo). Gebaseerd op `SAMENVATTING TAAL.docx` en vormgegeven in dezelfde paarse, groene en oranje stijl als de woordenschat-app voor groep 7/8.

De app draait volledig in de browser (HTML/CSS/JavaScript, geen server nodig) en wordt gehost via **GitHub Pages**. Je voortgang wordt lokaal op je eigen apparaat bewaard.

## ✨ Oefenvormen

- 🃏 **Flashcards** – begrip aan de voorkant, uitleg + voorbeeld + illustratie aan de achterkant. Tik om te draaien en beoordeel jezelf ("Nog lastig" / "Ik weet hem").
- ✅ **Meerkeuze** – vragen met directe feedback en uitleg bij elk antwoord.
- 🔗 **Combineren** – koppel elk begrip aan de juiste omschrijving.
- 🎮 **Oefenspellen** – Voorbeeldkraker, Waar of niet waar? en een Bliksemronde van 60 seconden.
- 📝 **Oefentoets** – 20 vragen per domein of gemengd, mét directe feedback en uitleg en een indicatief cijfer.
- 🎯 **Eindtoets** – examensimulatie met klok en zónder feedback. Cijfer 1–10, **geslaagd vanaf een 6**, en aan het eind je **domeinscores** per domein — net als bij de echte toets. De **officiële eindtoets telt 80 vragen** met exact de weging van de toetsmatrijs; daarnaast een kortere gelijk-verdeelde ronde (45 / 27).
- 📊 **Voortgang** – overzicht van wat je al kent, per oefenvorm en per domein.

## 📖 Inhoud

Alle negen hoofdstukken zijn volledig afgewerkt tot hetzelfde niveau als het proefhoofdstuk Woordenschat.

| # | Hoofdstuk | Begrippen | Meerkeuzevragen | Illustraties |
|---|-----------|:---------:|:---------------:|:------------:|
| 1 | Taalonderwijs en taal | 26 | 15 | 4 |
| 2 | Mondelinge taalvaardigheid | 48 | 18 | 4 |
| 3 | Woordenschat | 28 | 18 | 8 |
| 4 | Beginnende geletterdheid | 39 | 16 | 3 |
| 5 | Voortgezet technisch lezen | 36 | 16 | 2 |
| 6 | Begrijpend lezen | 42 | 16 | 2 |
| 7 | Stellen | 30 | 15 | 2 |
| 8 | Jeugdliteratuur | 43 | 16 | 3 |
| 9 | Taalbeschouwing en spelling | 83 | 20 | 5 |

Samen: **375 begrippen**, **150 handgeschreven meerkeuzevragen** en **31 illustraties** (inline SVG, werken offline).

Elk begrip wordt gebruikt voor flashcards en combineeropgaven. De meerkeuze- en examenvragen combineren de handgeschreven toepassingsvragen met automatisch gegenereerde begripsvragen. Elk hoofdstuk heeft een eigen examensimulatie van 15 vragen en een eigen voortgangsoverzicht.

## 🎯 Over de LKT Taal-toets (pabo)

De app bereidt voor op de **landelijke kennisbasistoets Taal** van de pabo (lerarenopleiding basisonderwijs), afgenomen via 10voordeleraar. Op basis van de officiële documenten en sites:

- **9 domeinen** – exact de 9 hoofdstukken in de app: mondelinge taalvaardigheid, woordenschat, beginnende geletterdheid, voortgezet technisch lezen, begrijpend lezen, stellen, jeugdliteratuur, taalbeschouwing en spelling.
- **Vraagtype** – digitale **meerkeuzevragen met 3 of 4 antwoordopties**; 1 punt per goed antwoord, geen aftrek.
- **Uitslag** – de score wordt omgezet naar een **cijfer van 1 tot 10; je bent geslaagd vanaf een 6**. De cesuur wordt per afname wetenschappelijk bepaald.
- **Domeinscores** – na afloop zie je per domein hoe je scoorde. De eindtoets in deze app doet dit na.
- **Voorbereiding** – 10voordeleraar biedt een voorbeeldtoets en per domein oefentoetsen.

**Toetsmatrijs (80 vragen).** De officiële eindtoets in de app volgt deze verdeling:

| Domein | Vragen |
|--------|:------:|
| Mondelinge taalvaardigheid | 11 |
| Woordenschat | 9 |
| Beginnende geletterdheid | 16 |
| Voortgezet technisch lezen | 6 |
| Begrijpend lezen | 8 |
| Stellen | 5 |
| Jeugdliteratuur | 3 |
| Taalbeschouwing | 13 |
| Spelling | 9 |
| **Totaal** | **80** |

In de app zijn taalbeschouwing en spelling samengevoegd tot hoofdstuk 9 (samen 22 vragen). Hoofdstuk 1 "Taalonderwijs en taal" is een extra oriëntatiehoofdstuk en telt niet mee in de officiële eindtoets (wel in flashcards, meerkeuze en de oefentoets).

> Let op: de drie meegeleverde pdf's (Toetsgids, Handreiking, Kennisbasis) zijn de **tweedegraads** lerarenopleiding Nederlands (voortgezet onderwijs), niet de pabo. Ze zijn gebruikt voor het **toetsformat** (dat blijkens de OER ook voor de pabo geldt), niet voor de inhoud. De inhoud volgt de pabo-kennisbasis en `SAMENVATTING TAAL.docx`.

Bronnen: [lkt.10voordeleraar.nl/pabo/nederlands](https://lkt.10voordeleraar.nl/pabo/nederlands) · [lkttaal.nl](https://www.lkttaal.nl/) · Toetsgids & OER 10voordeleraar 2025-2026.

## 🔬 Inhoudelijke controle

De oorspronkelijke begrippen en hoofdstukindeling uit `SAMENVATTING TAAL.docx` blijven leidend. Kernbegrippen waarbij een scherp onderscheid belangrijk is, zijn voorzichtig gecontroleerd en aangescherpt met:

- de **Uitwerking Kennisbasis Nederlands pabo** van 10voordeleraar;
- kerndoelen en materiaal voor schrijfonderwijs van **SLO**;
- publicaties van het **Expertisecentrum Nederlands**;
- de Brede Vakinhoudelijke Richtlijn Dyslexie via **Dyslexie Centraal**;
- onderzoek en publicaties van **Stichting Lezen**.

Deze aanvullingen staan apart in `js/research.js`, zodat de oorspronkelijke begrippenlijst herkenbaar en opnieuw genereerbaar blijft.

## 🗂️ Structuur

```
index.html        – opbouw van de app (schermen + tabbladen)
css/style.css     – vormgeving
js/data.js        – de leerstof: begrippen, illustraties en vragen per hoofdstuk
js/chapters.generated.js – hoofdstukken die uit de samenvatting zijn gegenereerd
js/enrichment.js  – handgeschreven meerkeuzevragen + illustraties per hoofdstuk
js/research.js    – voorzichtig aangescherpte kernbegrippen en toetsfocus
js/app.js         – de logica van de vier oefenvormen + voortgang
scripts/generate-chapters.mjs – werkt de leerstof bij vanuit het Word-document
```

## 🔄 Leerstof opnieuw genereren

De hoofdstukken 1, 2 en 4 t/m 9 worden gegenereerd uit de tabel **Begrippen per domein** in `SAMENVATTING TAAL.docx`. Na een wijziging in dat document kun je de leerstof opnieuw opbouwen met:

```bash
node scripts/generate-chapters.mjs
```

De begrippenlijst blijft zo herkenbaar en opnieuw genereerbaar. De handgeschreven meerkeuzevragen, illustraties en tekstaanscherpingen staan los daarvan in `js/enrichment.js` en worden bij het laden op de begrippen gelegd — die blijven dus behouden bij opnieuw genereren. Hoofdstuk 3 (Woordenschat) staat als proefhoofdstuk volledig handgemaakt in `js/data.js`.

## 🚀 Hosten via GitHub Pages

Deze repo is ingesteld om te draaien via GitHub Pages (branch `main`, map `/`).
De app is live op:

> https://bartdevries43-arch.github.io/lkt-taal-oefenapp/

Na elke wijziging die je pusht naar `main`, wordt de live-site automatisch bijgewerkt (kan 1–2 minuten duren).

## 💻 Lokaal bekijken

Open `index.html` gewoon in je browser, of start een klein servertje:

```bash
cd lkt-taal-oefenapp
python3 -m http.server 8000
# open daarna http://localhost:8000
```

---
Gemaakt als oefenmateriaal voor de LKT Taaltoets. Succes met leren! 🍀
