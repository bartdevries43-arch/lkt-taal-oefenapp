# 📚 LKT Taal – Oefenapp

Een oefenapp om te leren voor de **LKT Taaltoets** (Kennisbasis Taal, Pabo). Gebaseerd op `SAMENVATTING TAAL.docx` en vormgegeven in dezelfde paarse, groene en oranje stijl als de woordenschat-app voor groep 7/8.

De app draait volledig in de browser (HTML/CSS/JavaScript, geen server nodig) en wordt gehost via **GitHub Pages**. Je voortgang wordt lokaal op je eigen apparaat bewaard.

## ✨ Oefenvormen

- 🃏 **Flashcards** – begrip aan de voorkant, uitleg + voorbeeld + illustratie aan de achterkant. Tik om te draaien en beoordeel jezelf ("Nog lastig" / "Ik weet hem").
- ✅ **Meerkeuze** – vragen met directe feedback en uitleg bij elk antwoord.
- 🔗 **Combineren** – koppel elk begrip aan de juiste omschrijving.
- 🎯 **Examen-simulatie** – 15 gemengde vragen, zonder feedback tussendoor, met een eindcijfer (geslaagd vanaf 5,5).
- 📊 **Voortgang** – overzicht van wat je al kent, per oefenvorm.

## 📖 Inhoud

Alle hoofdstukken uit de samenvatting zijn beschikbaar. Samen bevatten ze **375 begrippen**:

1. **Taalonderwijs en taal** – 26 begrippen
2. **Mondelinge taalvaardigheid** – 48 begrippen
3. **Woordenschat** – 28 begrippen en 18 extra toepassingsvragen
4. **Beginnende geletterdheid** – 39 begrippen
5. **Voortgezet technisch lezen** – 36 begrippen
6. **Begrijpend lezen** – 42 begrippen
7. **Stellen** – 30 begrippen
8. **Jeugdliteratuur** – 43 begrippen
9. **Taalbeschouwing en spelling** – 83 begrippen

Elk begrip wordt automatisch gebruikt voor flashcards, meerkeuzevragen en combineeropgaven. Elk hoofdstuk heeft daarnaast een eigen examensimulatie van 15 vragen en een eigen voortgangsoverzicht.

## 🗂️ Structuur

```
index.html        – opbouw van de app (schermen + tabbladen)
css/style.css     – vormgeving
js/data.js        – de leerstof: begrippen, illustraties en vragen per hoofdstuk
js/chapters.generated.js – hoofdstukken die uit de samenvatting zijn gegenereerd
js/app.js         – de logica van de vier oefenvormen + voortgang
scripts/generate-chapters.mjs – werkt de leerstof bij vanuit het Word-document
```

## 🔄 Leerstof opnieuw genereren

De hoofdstukken 1, 2 en 4 t/m 9 worden gegenereerd uit de tabel **Begrippen per domein** in `SAMENVATTING TAAL.docx`. Na een wijziging in dat document kun je de leerstof opnieuw opbouwen met:

```bash
node scripts/generate-chapters.mjs
```

Hoofdstuk 3 bevat extra handgemaakte illustraties en toepassingsvragen en staat daarom apart in `js/data.js`.

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
