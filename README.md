# 📚 LKT Taal – Oefenapp

Een oefenapp om te leren voor de **LKT Taaltoets** (Kennisbasis Taal, Pabo). Gebaseerd op de samenvatting "Kennisbasis Taal" en in de stijl van een woordenschat-oefenapp.

De app draait volledig in de browser (HTML/CSS/JavaScript, geen server nodig) en wordt gehost via **GitHub Pages**. Je voortgang wordt lokaal op je eigen apparaat bewaard.

## ✨ Oefenvormen

- 🃏 **Flashcards** – begrip aan de voorkant, uitleg + voorbeeld + illustratie aan de achterkant. Tik om te draaien en beoordeel jezelf ("Nog lastig" / "Ik weet hem").
- ✅ **Meerkeuze** – vragen met directe feedback en uitleg bij elk antwoord.
- 🔗 **Combineren** – koppel elk begrip aan de juiste omschrijving.
- 🎯 **Examen-simulatie** – 15 gemengde vragen, zonder feedback tussendoor, met een eindcijfer (geslaagd vanaf 5,5).
- 📊 **Voortgang** – overzicht van wat je al kent, per oefenvorm.

## 📖 Inhoud

Op dit moment is **Hoofdstuk 3: Woordenschat** volledig uitgewerkt (28 begrippen) als proefhoofdstuk. De overige hoofdstukken uit de samenvatting worden hierna toegevoegd:

1. Taalonderwijs, taalfuncties en taalniveaus
2. Mondelinge taalvaardigheid en taalverwerving
3. **Woordenschat** ✅
4. Beginnende geletterdheid
5. Voortgezet technisch lezen
6. Begrijpend lezen
7. Stellen
8. Jeugdliteratuur
9. Taalbeschouwing en spelling

## 🗂️ Structuur

```
index.html        – opbouw van de app (schermen + tabbladen)
css/style.css     – vormgeving
js/data.js        – de leerstof: begrippen, illustraties en vragen per hoofdstuk
js/app.js         – de logica van de vier oefenvormen + voortgang
```

## ➕ Een hoofdstuk toevoegen

Alle leerstof staat in `js/data.js`. Een nieuw hoofdstuk voeg je toe door een object te maken zoals `CH_WOORDENSCHAT` en dat aan de lijst `CHAPTERS` toe te voegen:

```js
const CH_SPELLING = {
  id: "spelling", nr: 9, title: "Spelling", subtitle: "…", icon: "✏️",
  intro: "…",
  concepts: [ { t:"…", icon:"…", d:"…", ex:"…", art:"…" }, … ],
  mc: [ { q:"…", opts:["…","…","…","…"], ans:0, leg:"…" }, … ]
};
const CHAPTERS = [ CH_WOORDENSCHAT, CH_SPELLING ];
```

Meerkeuzevragen voor de examen-simulatie worden deels automatisch uit de begrippen gegenereerd, dus met alleen `concepts` heb je al flashcards, combineren én examenvragen.

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
