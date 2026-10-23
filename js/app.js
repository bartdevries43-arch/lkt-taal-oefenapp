/* ============================================================
   LKT Taal – Oefenapp  ·  LOGICA
   Oefenvormen: flashcards, combineren, spellen, oefentoets, hoofdstuktoets en eindtoets.
   Voortgang wordt lokaal (localStorage) op dit apparaat bewaard.
   ============================================================ */
"use strict";

/* ---------- Hulpjes ---------- */
const $  = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const shuffle = a => { a=[...a]; for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]];} return a; };
const sample  = (a,n) => shuffle(a).slice(0,n);
const esc = s => String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ---------- Voortgang ---------- */
const PKEY = "lkt_taal_progress_v1";
const CKEY = "lkt_taal_current_chapter_v1";
function loadP(){ try{ return JSON.parse(localStorage.getItem(PKEY)) || {}; }catch(e){ return {}; } }
function saveP(){ try{ localStorage.setItem(PKEY, JSON.stringify(P)); }catch(e){} }
let P = loadP();
function chP(id){
  const empty = { mcSeen:0, mcCorrect:0, matchRounds:0, flashKnown:{}, examBest:0, examAttempts:0, examLastGrade:0,
    gameRounds:0, gameBest:0, sprintBest:0 };
  if(!P[id]) P[id] = empty;
  else P[id] = {...empty, ...P[id], flashKnown:P[id].flashKnown || {}};
  return P[id];
}

function chapterKnown(ch){
  return Object.values(chP(ch.id).flashKnown).filter(Boolean).length;
}
function chapterPct(ch){
  return Math.round(chapterKnown(ch) / ch.concepts.length * 100) || 0;
}

/* ---------- Tekstgrootte (weergave vergroten) ---------- */
const TSKEY = "lkt_text_zoom_v1";
const TS_LEVELS = [0.9, 1, 1.15, 1.3, 1.5];
function loadTS(){ try{ const v=parseFloat(localStorage.getItem(TSKEY)); return TS_LEVELS.includes(v)?v:1; }catch(e){ return 1; } }
function applyTextSize(z){
  try{ document.documentElement.style.zoom = z; }catch(e){}
  const el = document.getElementById("ts-val"); if(el) el.textContent = Math.round(z*100)+"%";
}
function changeTextSize(dir){
  let i = TS_LEVELS.indexOf(loadTS());
  i = Math.max(0, Math.min(TS_LEVELS.length-1, i+dir));
  const z = TS_LEVELS[i];
  try{ localStorage.setItem(TSKEY, z); }catch(e){}
  applyTextSize(z);
}

/* ---------- Foutenbak (begrippen die terugkomen) ---------- */
function loadFouten(){ if(!P.fouten || typeof P.fouten!=="object") P.fouten={}; return P.fouten; }
function addFout(chId, term){ const f=loadFouten(); f[chId]=f[chId]||[]; if(!f[chId].includes(term)) f[chId].push(term); saveP(); }
function removeFout(chId, term){ const f=loadFouten(); if(f[chId]){ f[chId]=f[chId].filter(t=>t!==term); if(!f[chId].length) delete f[chId]; saveP(); } }
function foutenList(){
  const f=loadFouten(), out=[];
  CHAPTERS.forEach(ch=>{ (f[ch.id]||[]).forEach(term=>{ const c=ch.concepts.find(x=>x.t===term); if(c) out.push({ch,concept:c}); }); });
  return out;
}
function foutenCount(){ return foutenList().length; }
function wisFouten(){ if(confirm("Weet je zeker dat je je foutenbak wilt leegmaken?")){ P.fouten={}; saveP(); renderToetsHub(); } }

/* ---------- Toestand ---------- */
const savedChapter = (()=>{ try{return localStorage.getItem(CKEY);}catch(e){return null;} })();
let CH = CHAPTERS.find(ch=>ch.id===savedChapter) || CHAPTERS[0];
let flash = null, mc = null, match = null, exam = null, game = null, gameTimer = null;

function clearGameTimer(){
  if(gameTimer){ clearInterval(gameTimer); gameTimer=null; }
}

function animateActiveScreen(){
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    const root=$(".screen.active"); if(!root) return;
    const items=[...new Set([...root.children,...$$(".card,.chapter-panel,.chapter-heading,.stat",root)])].slice(0,20);
    items.forEach((el,i)=>{
      el.classList.remove("reveal-in");
      el.style.setProperty("--reveal-delay",`${Math.min(i*45,360)}ms`);
      void el.offsetWidth;
      el.classList.add("reveal-in");
    });
  }));
}

function selectChapter(id){
  const selected = CHAPTERS.find(ch=>ch.id===id);
  if(!selected) return;
  CH = selected;
  try{ localStorage.setItem(CKEY, CH.id); }catch(e){}
  renderStart();
  window.scrollTo({top:0,behavior:"smooth"});
}

/* ---------- Navigatie ---------- */
function go(id){
  if(examInProgress){
    if(!confirm("Je hebt een lopende toets. Als je nu weggaat, gaat je voortgang in deze toets verloren. Toch stoppen?")) return;
    examInProgress=false; clearExamTimer();
  }
  if(id!=="spellen") clearGameTimer();
  if(id!=="examen") clearExamTimer();
  $$(".screen").forEach(s=>s.classList.remove("active"));
  $$(".tab").forEach(t=>t.classList.remove("active"));
  $("#screen-"+id).classList.add("active");
  const tab = $(`.tab[data-go="${id}"]`); if(tab) tab.classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
  if(id==="start")     renderStart();
  if(id==="begrippen") renderBegrippen();
  if(id==="flashcards")startFlash();
  if(id==="match")     startMatch();
  if(id==="spellen")   renderGamesHub();
  if(id==="themas")    renderThemas();
  if(id==="ezels")     renderEzels();
  if(id==="examen")    renderToetsHub();
  if(id==="voortgang") renderVoortgang();
  animateActiveScreen();
}

/* ================= START ================= */
function renderStart(){
  const p = chP(CH.id);
  const totQ = p.mcSeen, totC = p.mcCorrect;
  const pct = totQ ? Math.round(totC/totQ*100) : null;
  const visualConcepts=[CH.concepts[0],CH.concepts[Math.floor(CH.concepts.length/2)],CH.concepts[CH.concepts.length-1]];
  $("#hero-visual").innerHTML = `
    <div class="hero-orb"><span>${CH.icon}</span><b>H${CH.nr}</b></div>
    ${visualConcepts.map((c,i)=>`<div class="flying-card flying-${i+1}"><span>${c.icon||CH.icon}</span><b>${esc(c.t)}</b></div>`).join("")}
    <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>`;
  $("#chapter-tabs").innerHTML = CHAPTERS.map(ch=>`
    <button class="chapter-tab ${ch.id===CH.id?'active':''}" onclick="selectChapter('${ch.id}')" aria-pressed="${ch.id===CH.id}">
      <span>H${ch.nr}</span><b>${esc(ch.title)}</b><small>${chapterPct(ch)}% bekend</small>
    </button>`).join("");
  $("#chapter-heading").innerHTML = `
    <div><span class="eyebrow">HOOFDSTUK ${CH.nr}</span><h2>${CH.icon} ${esc(CH.title)}</h2><p>${esc(CH.subtitle)}</p></div>
    <div class="chapter-score"><b>${chapterKnown(CH)}/${CH.concepts.length}</b><span>begrippen bekend</span></div>`;
  $("#start-stats").innerHTML = `
    <div class="stat"><b>${CH.concepts.length}</b><span>begrippen in dit hoofdstuk</span></div>
    <div class="stat"><b>${pct===null?"–":pct+"%"}</b><span>toetsvragen goed</span></div>
    <div class="stat"><b>${P.eindtoets?P.eindtoets.lastGrade.toFixed(1):"–"}</b><span>laatste eindtoetscijfer</span></div>`;
  const fc = foutenCount();
  $("#start-chapter").innerHTML = `
    <button class="study-button" onclick="go('begrippen')">
      <span class="study-icon">${CH.icon}</span>
      <span><span class="eyebrow">EERST DE STOF BEKIJKEN</span><b>Lees alle ${CH.concepts.length} begrippen</b>
      <small>${esc(CH.subtitle)}</small></span><span class="study-arrow">›</span>
    </button>
    ${fc?`<button class="study-button" style="margin-top:.55rem;background:linear-gradient(135deg,rgba(255,179,64,.18),rgba(255,255,255,.88))" onclick="go('examen');startLeerFouten()">
      <span class="study-icon">🔁</span>
      <span><span class="eyebrow">HERHAAL JE FOUTEN</span><b>Oefen de ${fc} begrip${fc===1?'':'pen'} die je nog fout had</b>
      <small>Foute begrippen komen terug tot je ze kent</small></span><span class="study-arrow">›</span>
    </button>`:''}`;
}

/* ================= BEGRIPPEN (leren) ================= */
function renderBegrippen(){
  const wrap = $("#begrippen-body");
  wrap.innerHTML = `
    <button class="back" onclick="go('start')">‹ Ander hoofdstuk kiezen</button>
    <div class="card">
      <span class="eyebrow">HOOFDSTUK ${CH.nr} · ${CH.concepts.length} BEGRIPPEN</span>
      <h2>${CH.icon} ${esc(CH.title)}</h2>
      <p class="sub">${esc(CH.intro)}</p>
      <div id="concept-list"></div>
    </div>`;
  const list = $("#concept-list");
  CH.concepts.forEach((c,i)=>{
    const el = document.createElement("button");
    el.className = "tile"; el.style.width="100%"; el.style.marginBottom=".55rem";
    el.innerHTML = `<span class="ti">${c.icon||"🔹"}</span>
      <span><span class="tt">${esc(c.t)}</span><span class="td">${esc(c.d.slice(0,80))}${c.d.length>80?"…":""}</span></span>`;
    el.onclick = ()=>showConcept(i);
    list.appendChild(el);
  });
}
function showConcept(i){
  const c = CH.concepts[i];
  const artHTML = c.art && ART[c.art] ? `<div class="art">${ART[c.art]}</div>` : "";
  $("#begrippen-body").innerHTML = `
    <button class="back" onclick="renderBegrippen()">‹ Alle begrippen</button>
    <div class="card">
      <div style="text-align:center"><div style="font-size:46px">${c.icon||"🔹"}</div>
        <h2 style="margin-top:.2rem">${esc(c.t)}</h2></div>
      ${artHTML}
      <p class="lead" style="margin-top:.8rem">${esc(c.d)}</p>
      <div class="ex" style="font-size:13px;color:var(--muted);border-left:3px solid var(--tint-a);padding:.6rem .8rem;background:#fafcfb;border-radius:0 8px 8px 0;margin-top:.6rem">
        <b style="color:var(--brand-d)">Voorbeeld:</b> ${esc(c.ex)}</div>
      ${c.focus?`<div class="focus-callout"><span>🎓</span><div><b>Toetsfocus</b><p>${esc(c.focus)}</p></div></div>`:""}
      <div class="row" style="margin-top:1rem">
        <button class="btn" onclick="showConcept(${(i-1+CH.concepts.length)%CH.concepts.length})">‹ Vorige</button>
        <button class="btn primary" onclick="showConcept(${(i+1)%CH.concepts.length})">Volgende ›</button>
      </div>
    </div>`;
  window.scrollTo({top:0,behavior:"smooth"});
}

/* ================= FLASHCARDS ================= */
function startFlash(){
  flash = { deck: shuffle(CH.concepts.map((c,i)=>i)), pos:0, hard:[] };
  renderFlash();
}
function renderFlash(){
  const wrap = $("#flashcards-body");
  if(flash.pos >= flash.deck.length){ return flashDone(); }
  const c = CH.concepts[flash.deck[flash.pos]];
  const artHTML = c.art && ART[c.art] ? `<div class="art">${ART[c.art]}</div>` : "";
  wrap.innerHTML = `
    <div class="counter">Kaart ${flash.pos+1} van ${flash.deck.length}</div>
    <div class="pbar"><i style="width:${flash.pos/flash.deck.length*100}%"></i></div>
    <div class="flash-wrap"><div class="flash" id="flashcard" role="button" tabindex="0" aria-label="Draai flashcard om" onclick="this.classList.toggle('flip')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.classList.toggle('flip')}">
      <div class="face front">
        <div class="emoji">${c.icon||"🔹"}</div>
        <div class="term">${esc(c.t)}</div>
        <div class="hint">tik om te draaien ↻</div>
      </div>
      <div class="face back">
        <div class="term">${esc(c.t)}</div>
        <div class="def">${esc(c.d)}</div>
        ${artHTML}
        <div class="ex"><b>Voorbeeld:</b> ${esc(c.ex)}</div>
      </div>
    </div></div>
    <div class="self-rate">
      <button class="btn" onclick="rateFlash(false)">😕 Nog lastig</button>
      <button class="btn primary" onclick="rateFlash(true)">😀 Ik weet hem</button>
    </div>
    <div class="row between">
      <button class="btn ghost" onclick="go('begrippen')">Stof teruglezen</button>
      <button class="btn ghost" onclick="startFlash()">↻ Opnieuw schudden</button>
    </div>`;
}
function rateFlash(known){
  const idx = flash.deck[flash.pos];
  const p = chP(CH.id);
  p.flashKnown[idx] = known;
  const term = CH.concepts[idx] && CH.concepts[idx].t;
  if(term){ if(known) removeFout(CH.id, term); else addFout(CH.id, term); }
  saveP();
  if(!known) flash.hard.push(idx);
  flash.pos++;
  renderFlash();
}
function flashDone(){
  const total = flash.deck.length, hard = flash.hard.length, known = total-hard;
  $("#flashcards-body").innerHTML = `
    <div class="card">
      <h2>🃏 Ronde klaar!</h2>
      <div class="ring" style="--p:${Math.round(known/total*100)}"><span>${known}/${total}</span></div>
      <p class="sub" style="text-align:center">Je markeerde ${known} begrip${known===1?"":"pen"} als 'gekend'.</p>
      ${hard? `<div class="tip">😕 Nog lastig: <b>${flash.hard.map(i=>esc(CH.concepts[i].t)).join(", ")}</b>. Oefen die nog een keer.</div>`
             : `<div class="tip ok">🎉 Alle begrippen gekend. Sterk!</div>`}
      <div class="row">
        ${hard?`<button class="btn primary" onclick="flashHardOnly()">Alleen de lastige (${hard})</button>`:""}
        <button class="btn ${hard?'':'primary'}" onclick="startFlash()">Hele set opnieuw</button>
        <button class="btn" onclick="go('examen')">Nu een toets →</button>
      </div>
    </div>`;
}
function flashHardOnly(){ const h=flash.hard; flash={deck:shuffle(h),pos:0,hard:[]}; renderFlash(); }

/* ================= VRAAGPOOL ================= */
// Vraagpool voor één hoofdstuk, getagd met domein (voor oefentoets, hoofdstuktoets en eindtoets).
function poolForChapter(ch){
  const base = (ch.mc || []).map(q=>({q:q.q, opts:q.opts, ans:q.ans, leg:q.leg, raw:false}));
  const gen = ch.concepts.map(c=>{
    const wrong = sample(ch.concepts.filter(x=>x.t!==c.t),3).map(x=>x.t);
    const opts = shuffle([c.t, ...wrong]);
    return { q:`Welk begrip hoort bij deze omschrijving?<br><span style="font-weight:500;color:var(--muted)">“${esc(c.d)}”</span>`,
             opts, ans:opts.indexOf(c.t), leg:`${c.t}: ${c.d}`, raw:true };
  });
  return [...base, ...gen].map(q=>({ ...q, dom:ch.id, domNr:ch.nr, domTitle:ch.title }));
}
function fmtTime(s){ const m=Math.floor(s/60), r=s%60; return m+":"+(r<10?"0":"")+r; }

/* ================= COMBINEREN (match) ================= */
function startMatch(){
  const set = sample(CH.concepts, 5);
  match = { pairs:set, left:shuffle(set.map((c,i)=>i)), right:shuffle(set.map((c,i)=>i)),
            sel:null, done:0 };
  renderMatch();
}
function shortDef(c){ return c.d.length>70 ? c.d.slice(0,70).replace(/\s\S*$/,"")+"…" : c.d; }
function renderMatch(){
  $("#match-body").innerHTML = `
    <div class="card">
      <h2>🔗 Combineren</h2>
      <p class="sub">Tik op een begrip en daarna op de bijbehorende omschrijving.</p>
      <div class="counter">${match.done} van ${match.pairs.length} gekoppeld</div>
      <div class="pbar"><i style="width:${match.done/match.pairs.length*100}%"></i></div>
      <div class="match-grid">
        <div class="match-col"><h4>Begrip</h4><div id="mcol-l"></div></div>
        <div class="match-col"><h4>Omschrijving</h4><div id="mcol-r"></div></div>
      </div>
      <div class="row" style="margin-top:1rem"><button class="btn ghost" onclick="startMatch()">↻ Nieuwe set</button></div>
    </div>`;
  const L=$("#mcol-l"), R=$("#mcol-r");
  match.left.forEach(i=>{
    const c=match.pairs[i], b=document.createElement("button");
    b.className="chip term"+(isDone(i)?" done":""); b.textContent=c.t; b.dataset.i=i;
    if(!isDone(i)) b.onclick=()=>pickTerm(i,b);
    L.appendChild(b);
  });
  match.right.forEach(i=>{
    const c=match.pairs[i], b=document.createElement("button");
    b.className="chip def"+(isDone(i)?" done":""); b.textContent=shortDef(c); b.dataset.i=i;
    if(!isDone(i)) b.onclick=()=>pickDef(i,b);
    R.appendChild(b);
  });
}
function isDone(i){ return match.matched && match.matched.has(i); }
function pickTerm(i,el){
  $$("#mcol-l .chip").forEach(c=>c.classList.remove("sel"));
  el.classList.add("sel"); match.sel = i;
}
function pickDef(i,el){
  if(match.sel===null){ el.classList.add("bad"); setTimeout(()=>el.classList.remove("bad"),300); return; }
  if(i===match.sel){
    match.matched = match.matched || new Set();
    match.matched.add(i); match.done++;
    saveMatchMaybe();
    renderMatch();
  } else {
    el.classList.add("bad");
    const lsel=$(`#mcol-l .chip.sel`); if(lsel){lsel.classList.add("bad");setTimeout(()=>lsel.classList.remove("bad"),300);}
    setTimeout(()=>el.classList.remove("bad"),300);
    match.sel=null; $$("#mcol-l .chip").forEach(c=>c.classList.remove("sel"));
  }
}
function saveMatchMaybe(){
  if(match.done===match.pairs.length){
    const p=chP(CH.id); p.matchRounds=(p.matchRounds||0)+1; saveP();
    setTimeout(()=>{
      $("#match-body").insertAdjacentHTML("afterbegin",
        `<div class="tip ok" id="match-win">🎉 Alle 5 goed gekoppeld! <button class="btn primary" style="margin-left:.5rem;padding:.35rem .8rem" onclick="startMatch()">Nieuwe set</button></div>`);
      window.scrollTo({top:0,behavior:"smooth"});
    }, 250);
  }
}

/* ================= OEFENSPELLEN ================= */
function renderGamesHub(){
  clearGameTimer(); game=null;
  const p=chP(CH.id);
  $("#spellen-body").innerHTML = `
    <div class="hero compact game-hero">
      <span class="eyebrow">ACTIEF OPHALEN · HOOFDSTUK ${CH.nr}</span>
      <h2>Speel met de leerstof.</h2>
      <p>Vier korte spellen om actief op te halen. De Foutenjacht gebruikt je eigen foutenbak over alle hoofdstukken.</p>
      <div class="game-summary"><span>🎮 ${p.gameRounds||0} rondes gespeeld</span><span>⚡ sprintrecord ${p.sprintBest||0}</span><span>🎯 ${foutenCount()} in foutenbak</span></div>
    </div>
    <div class="game-grid">
      <button class="game-card example-game" onclick="startExampleGame()">
        <span class="game-art"><i>🧠</i><em>→</em><i>💡</i></span>
        <span class="eyebrow">TOEPASSEN</span><b>Voorbeeldkraker</b>
        <small>Lees een praktijksituatie en kies het begrip dat erbij hoort.</small><strong>10 rondes <i>→</i></strong>
      </button>
      <button class="game-card truth-game" onclick="startTrueFalseGame()">
        <span class="game-art"><i>⚖️</i><em>?</em><i>✅</i></span>
        <span class="eyebrow">ONDERSCHEIDEN</span><b>Waar of niet waar?</b>
        <small>Controleer of een begrip en omschrijving echt bij elkaar horen.</small><strong>10 rondes <i>→</i></strong>
      </button>
      <button class="game-card sprint-game" onclick="startSprintGame()">
        <span class="game-art"><i>⚡</i><em>60</em><i>⏱️</i></span>
        <span class="eyebrow">AUTOMATISEREN</span><b>Bliksemronde</b>
        <small>Herken in zestig seconden zo veel mogelijk begrippen.</small><strong>Start sprint <i>→</i></strong>
      </button>
      <button class="game-card example-game" onclick="startFoutenGame()">
        <span class="game-art"><i>🎯</i><em>${foutenCount()}</em><i>🗑️</i></span>
        <span class="eyebrow">JOUW FOUTENBAK</span><b>Foutenjacht</b>
        <small>Vang de begrippen die je fout had of 'nog lastig' vond. Elk goed antwoord haalt er één uit je foutenbak — leeg = gewonnen!</small><strong>${foutenCount()?('Jaag op '+foutenCount()):'Bak is leeg'} <i>→</i></strong>
      </button>
    </div>
    <div class="research-note"><span>🔬</span><div><b>Didactisch opgebouwd</b><p>De spellen sluiten rechtstreeks aan op de bestaande begrippen, definities en voorbeelden. Ze voegen geen leerstof buiten de kennisbasis toe.</p></div></div>`;
  animateActiveScreen();
}

function makeExampleQuestions(amount=10){
  return sample(CH.concepts,Math.min(amount,CH.concepts.length)).map(concept=>{
    const wrong=sample(CH.concepts.filter(item=>item.t!==concept.t),3).map(item=>item.t);
    const opts=shuffle([concept.t,...wrong]);
    return {concept,opts,ans:opts.indexOf(concept.t)};
  });
}

function startExampleGame(){
  clearGameTimer();
  game={type:"example",pool:makeExampleQuestions(),i:0,score:0,locked:false,saved:false};
  renderExampleGame();
}

function renderExampleGame(){
  if(game.i>=game.pool.length) return finishKnowledgeGame("🧠 Voorbeeldkraker","startExampleGame()");
  const q=game.pool[game.i], K=["A","B","C","D"];
  $("#spellen-body").innerHTML = `
    <button class="back" onclick="renderGamesHub()">‹ Alle spellen</button>
    <div class="game-status"><span>Voorbeeld ${game.i+1} van ${game.pool.length}</span><b>${game.score} goed</b></div>
    <div class="pbar"><i style="width:${game.i/game.pool.length*100}%"></i></div>
    <div class="card game-play-card">
      <span class="eyebrow">WELK BEGRIP PAST BIJ DIT VOORBEELD?</span>
      <div class="example-prompt"><span>${q.concept.icon||CH.icon}</span><p>“${esc(q.concept.ex)}”</p></div>
      <div class="opts" id="game-opts"></div>
      <div class="feedback" id="game-feedback" aria-live="polite"></div>
      <div class="row between"><button class="btn ghost" onclick="renderGamesHub()">Stoppen</button><button class="btn primary hidden" id="game-next" onclick="game.i++;renderExampleGame()">Volgende ›</button></div>
    </div>`;
  const box=$("#game-opts");
  q.opts.forEach((option,index)=>{
    const button=document.createElement("button");button.className="opt";
    button.innerHTML=`<span class="k">${K[index]}</span><span>${esc(option)}</span>`;
    button.onclick=()=>answerExampleGame(index);box.appendChild(button);
  });
  game.locked=false; animateActiveScreen();
}

function answerExampleGame(index){
  if(game.locked) return; game.locked=true;
  const q=game.pool[game.i], buttons=$$("#game-opts .opt"), fb=$("#game-feedback");
  buttons.forEach(button=>button.disabled=true);
  if(index===q.ans){ buttons[index].classList.add("correct");game.score++;fb.className="feedback show ok";fb.innerHTML=`✓ Goed. <b>${esc(q.concept.t)}</b>: ${esc(q.concept.d)}`; }
  else { buttons[index].classList.add("wrong");buttons[q.ans].classList.add("correct");fb.className="feedback show no";fb.innerHTML=`✗ Dit is <b>${esc(q.concept.t)}</b>. ${esc(q.concept.d)}`; }
  $("#game-next").classList.remove("hidden");
  $("#game-next").textContent=game.i+1>=game.pool.length?"Bekijk resultaat ›":"Volgende ›";
}

function startTrueFalseGame(){
  clearGameTimer();
  const concepts=sample(CH.concepts,Math.min(10,CH.concepts.length));
  const pool=concepts.map((concept,index)=>{
    const isTrue=index%2===0;
    const shown=isTrue?concept:sample(CH.concepts.filter(item=>item.t!==concept.t),1)[0];
    return {concept,shown,isTrue};
  });
  game={type:"truth",pool:shuffle(pool),i:0,score:0,locked:false,saved:false};
  renderTrueFalseGame();
}

function renderTrueFalseGame(){
  if(game.i>=game.pool.length) return finishKnowledgeGame("⚖️ Waar of niet waar?","startTrueFalseGame()");
  const q=game.pool[game.i];
  $("#spellen-body").innerHTML = `
    <button class="back" onclick="renderGamesHub()">‹ Alle spellen</button>
    <div class="game-status"><span>Stelling ${game.i+1} van ${game.pool.length}</span><b>${game.score} goed</b></div>
    <div class="pbar"><i style="width:${game.i/game.pool.length*100}%"></i></div>
    <div class="card game-play-card">
      <span class="eyebrow">HOREN DEZE BIJ ELKAAR?</span>
      <div class="truth-prompt"><span>${q.concept.icon||CH.icon}</span><h3>${esc(q.concept.t)}</h3><p>${esc(q.shown.d)}</p></div>
      <div class="truth-actions" id="truth-actions"><button onclick="answerTrueFalse(true)"><span>✓</span><b>Waar</b></button><button onclick="answerTrueFalse(false)"><span>×</span><b>Niet waar</b></button></div>
      <div class="feedback" id="game-feedback" aria-live="polite"></div>
      <div class="row between"><button class="btn ghost" onclick="renderGamesHub()">Stoppen</button><button class="btn primary hidden" id="game-next" onclick="game.i++;renderTrueFalseGame()">Volgende ›</button></div>
    </div>`;
  game.locked=false; animateActiveScreen();
}

function answerTrueFalse(value){
  if(game.locked) return; game.locked=true;
  const q=game.pool[game.i], buttons=$$("#truth-actions button"), fb=$("#game-feedback"), correct=value===q.isTrue;
  buttons.forEach(button=>button.disabled=true);
  if(correct){game.score++;buttons[value?0:1].classList.add("correct");fb.className="feedback show ok";fb.innerHTML=`✓ Goed gezien. <b>${esc(q.concept.t)}</b>: ${esc(q.concept.d)}`;}
  else{buttons[value?0:1].classList.add("wrong");buttons[q.isTrue?0:1].classList.add("correct");fb.className="feedback show no";fb.innerHTML=`✗ ${q.isTrue?"Deze omschrijving hoort er wél bij.":"Deze omschrijving hoort bij een ander begrip."} <b>${esc(q.concept.t)}</b>: ${esc(q.concept.d)}`;}
  $("#game-next").classList.remove("hidden");
  $("#game-next").textContent=game.i+1>=game.pool.length?"Bekijk resultaat ›":"Volgende ›";
}

function startSprintGame(){
  clearGameTimer();
  game={type:"sprint",score:0,answered:0,time:60,locked:false,finished:false,run:Date.now()};
  nextSprintQuestion();renderSprintGame();
  gameTimer=setInterval(()=>{
    if(!game||game.type!=="sprint"||game.finished) return clearGameTimer();
    game.time--;
    const time=$("#game-time"), bar=$("#time-bar");if(time)time.textContent=game.time;if(bar)bar.style.width=`${game.time/60*100}%`;
    if(game.time<=0) finishSprintGame();
  },1000);
}

function nextSprintQuestion(){
  const concept=sample(CH.concepts,1)[0], wrong=sample(CH.concepts.filter(item=>item.t!==concept.t),3).map(item=>item.t), opts=shuffle([concept.t,...wrong]);
  game.current={concept,opts,ans:opts.indexOf(concept.t)};game.locked=false;
}

function renderSprintGame(){
  if(!game||game.finished) return;
  const q=game.current,K=["A","B","C","D"];
  $("#spellen-body").innerHTML = `
    <button class="back" onclick="renderGamesHub()">‹ Alle spellen</button>
    <div class="sprint-hud"><div><span>TIJD</span><b id="game-time">${game.time}</b></div><div><span>SCORE</span><b>${game.score}</b></div><div><span>BEANTWOORD</span><b>${game.answered}</b></div></div>
    <div class="time-track"><i id="time-bar" style="width:${game.time/60*100}%"></i></div>
    <div class="card game-play-card sprint-play">
      <span class="eyebrow">WELK BEGRIP HOORT BIJ DE UITLEG?</span>
      <div class="sprint-prompt"><span>⚡</span><p>${esc(q.concept.d)}</p></div>
      <div class="opts" id="game-opts"></div>
    </div>`;
  const box=$("#game-opts");
  q.opts.forEach((option,index)=>{const button=document.createElement("button");button.className="opt";button.innerHTML=`<span class="k">${K[index]}</span><span>${esc(option)}</span>`;button.onclick=()=>answerSprintGame(index);box.appendChild(button);});
}

function answerSprintGame(index){
  if(game.locked||game.finished) return;game.locked=true;game.answered++;
  const q=game.current,buttons=$$("#game-opts .opt"),run=game.run;
  buttons.forEach(button=>button.disabled=true);
  if(index===q.ans){game.score++;buttons[index].classList.add("correct");}else{buttons[index].classList.add("wrong");buttons[q.ans].classList.add("correct");}
  setTimeout(()=>{if(game&&game.type==="sprint"&&!game.finished&&game.run===run){nextSprintQuestion();renderSprintGame();}},320);
}

function finishKnowledgeGame(title,restart){
  clearGameTimer();
  const total=game.pool.length,pct=Math.round(game.score/total*100),p=chP(CH.id);
  if(!game.saved){p.gameRounds++;p.gameBest=Math.max(p.gameBest||0,pct);saveP();game.saved=true;}
  $("#spellen-body").innerHTML=resultCard(title,game.score,total,pct,`<button class="btn primary" onclick="${restart}">Nog een ronde</button><button class="btn" onclick="renderGamesHub()">Alle spellen</button>`);
  animateActiveScreen();
}

/* ---- Foutenjacht: spel met je foutenbak-begrippen ---- */
function startFoutenGame(){
  clearGameTimer();
  const list=foutenList();
  if(!list.length){
    $("#spellen-body").innerHTML = `
      <button class="back" onclick="renderGamesHub()">‹ Alle spellen</button>
      <div class="card">
        <h2>🎯 Foutenjacht</h2>
        <div class="tip ok">🎉 Je foutenbak is leeg — niets te jagen! Zet bij de flashcards begrippen op 'Nog lastig', of maak de toets 'Alle begrippen'; foute begrippen verschijnen dan hier.</div>
        <div class="row"><button class="btn primary" onclick="go('examen');startAlleBegrippen()">Alle begrippen</button><button class="btn" onclick="go('flashcards')">Naar flashcards</button></div>
      </div>`;
    return;
  }
  const items=shuffle(list).slice(0,12).map(f=>conceptQuestion(f.ch, f.concept, Math.random()<0.4));
  game={type:"fouten",pool:items,i:0,score:0,caught:0,streak:0,bestStreak:0,locked:false,saved:false};
  renderFoutenGame();
}
function renderFoutenGame(){
  if(game.i>=game.pool.length) return finishFoutenGame();
  const q=game.pool[game.i], K=["A","B","C","D"], left=foutenCount();
  $("#spellen-body").innerHTML = `
    <button class="back" onclick="renderGamesHub()">‹ Alle spellen</button>
    <div class="game-status"><span>Jacht ${game.i+1} van ${game.pool.length} · 🔥 streak ${game.streak}</span><b>🎯 ${left} in bak</b></div>
    <div class="pbar"><i style="width:${game.i/game.pool.length*100}%"></i></div>
    <div class="card game-play-card">
      <span class="eyebrow">VANG HET JUISTE BEGRIP · H${q.ch.nr} ${esc(q.ch.title)}</span>
      <div class="example-prompt"><span>🎯</span><p>${q.q}</p></div>
      <div class="opts" id="game-opts"></div>
      <div class="feedback" id="game-feedback" aria-live="polite"></div>
      <div class="row between"><button class="btn ghost" onclick="renderGamesHub()">Stoppen</button><button class="btn primary hidden" id="game-next" onclick="game.i++;renderFoutenGame()">Volgende ›</button></div>
    </div>`;
  const box=$("#game-opts");
  q.opts.forEach((o,idx)=>{const b=document.createElement("button");b.className="opt";b.innerHTML=`<span class="k">${K[idx]}</span><span>${esc(o)}</span>`;b.onclick=()=>answerFoutenGame(idx);box.appendChild(b);});
  game.locked=false; animateActiveScreen();
}
function answerFoutenGame(idx){
  if(game.locked) return; game.locked=true;
  const q=game.pool[game.i], buttons=$$("#game-opts .opt"), fb=$("#game-feedback");
  buttons.forEach(b=>b.disabled=true);
  const dp=chP(q.ch.id); dp.mcSeen++;
  if(idx===q.ans){
    buttons[idx].classList.add("correct"); game.score++; game.caught++; game.streak++; game.bestStreak=Math.max(game.bestStreak,game.streak); dp.mcCorrect++;
    removeFout(q.ch.id,q.term);
    fb.className="feedback show ok"; fb.innerHTML=`🎯 Gevangen! <b>${esc(q.term)}</b> is uit je foutenbak. ${q.leg}`;
  } else {
    buttons[idx].classList.add("wrong"); buttons[q.ans].classList.add("correct"); game.streak=0;
    addFout(q.ch.id,q.term);
    fb.className="feedback show no"; fb.innerHTML=`✗ Nog niet. ${q.leg}`;
  }
  saveP();
  $("#game-next").classList.remove("hidden");
  $("#game-next").textContent=game.i+1>=game.pool.length?"Bekijk resultaat ›":"Volgende ›";
}
function finishFoutenGame(){
  clearGameTimer();
  const p=chP(CH.id), pct=game.pool.length?Math.round(game.score/game.pool.length*100):0;
  if(!game.saved){p.gameRounds=(p.gameRounds||0)+1;p.gameBest=Math.max(p.gameBest||0,pct);saveP();game.saved=true;}
  const left=foutenCount();
  $("#spellen-body").innerHTML = `
    <div class="card sprint-result">
      <span class="result-burst">🎯</span>
      <span class="eyebrow">FOUTENJACHT</span>
      <h2>${game.caught} begrip${game.caught===1?'':'pen'} gevangen</h2>
      <p>Langste streak: ${game.bestStreak} · nog ${left} in je foutenbak</p>
      ${left?'':'<div class="tip ok">🎉 Je foutenbak is helemaal leeg — top gedaan!</div>'}
      <div class="row">
        ${left?`<button class="btn primary" onclick="startFoutenGame()">Verder jagen (${left})</button>`:`<button class="btn primary" onclick="renderGamesHub()">Alle spellen</button>`}
        ${left?'<button class="btn" onclick="renderGamesHub()">Alle spellen</button>':''}
      </div>
    </div>`;
  animateActiveScreen();
}

function finishSprintGame(){
  if(!game||game.finished) return;game.finished=true;clearGameTimer();
  const pct=game.answered?Math.round(game.score/game.answered*100):0,p=chP(CH.id);
  p.gameRounds++;p.gameBest=Math.max(p.gameBest||0,pct);p.sprintBest=Math.max(p.sprintBest||0,game.score);saveP();
  $("#spellen-body").innerHTML=`<div class="card sprint-result"><span class="result-burst">⚡</span><span class="eyebrow">TIJD VOORBIJ</span><h2>${game.score} begrippen goed</h2><p>${game.answered} beantwoord · ${pct}% nauwkeurig · record ${p.sprintBest}</p><div class="row"><button class="btn primary" onclick="startSprintGame()">Nog een sprint</button><button class="btn" onclick="renderGamesHub()">Alle spellen</button></div></div>`;
  animateActiveScreen();
}

/* ================= TOETSEN: OEFENTOETS & EINDTOETS ================= */
let examTimer = null, oefen = null, examInProgress = false;
function clearExamTimer(){ if(examTimer){ clearInterval(examTimer); examTimer=null; } }
function grade(pct){ return Math.max(1, Math.min(10, 1 + 9*pct/100)); }

/* ---- Begrippen-quiz: alle begrippen + leer je fouten ---- */
let cq = null;
function conceptQuestion(ch, concept, useEx){
  const others = ch.concepts.filter(x=>x.t!==concept.t);
  let wrong = sample(others,3).map(x=>x.t);
  if(wrong.length<3){
    const all=[]; CHAPTERS.forEach(c=>c.concepts.forEach(x=>{ if(x.t!==concept.t) all.push(x.t); }));
    wrong = [...new Set([...wrong, ...sample(all,8)])].filter(t=>t!==concept.t).slice(0,3);
  }
  const opts = shuffle([concept.t, ...wrong]);
  const prompt = (useEx && concept.ex)
    ? `Welk begrip past bij dit <b>voorbeeld</b>?<br><span style="font-weight:500;color:var(--muted)">“${esc(concept.ex)}”</span>`
    : `Welk begrip hoort bij deze omschrijving?<br><span style="font-weight:500;color:var(--muted)">“${esc(concept.d)}”</span>`;
  return { q:prompt, opts, ans:opts.indexOf(concept.t),
           leg:`<b>${esc(concept.t)}</b>: ${esc(concept.d)}`, raw:true, ch, term:concept.t };
}
function startAlleBegrippen(){
  clearExamTimer();
  const items=[];
  CHAPTERS.forEach(ch=>ch.concepts.forEach(c=>items.push(conceptQuestion(ch,c, Math.random()<0.45))));
  cq = { mode:"alle", title:"Alle begrippen", heading:"📚 Alle begrippen afgerond",
         bodySel:"#examen-body", backCall:"renderToetsHub()", restartCall:"startAlleBegrippen()", restartLabel:"Alle begrippen opnieuw",
         queue:shuffle(items), i:0, score:0, seen:0, answered:false, requeued:{} };
  renderCQ();
}
function startLeerFouten(){
  clearExamTimer();
  const list = foutenList();
  if(!list.length){
    $("#examen-body").innerHTML = `
      <button class="back" onclick="renderToetsHub()">‹ Terug naar toetsen</button>
      <div class="card">
        <h2>🔁 Leer je fouten</h2>
        <div class="tip ok">🎉 Je foutenbak is leeg! Begrippen die je bij de flashcards 'nog lastig' vindt of bij 'Alle begrippen' fout hebt, komen hier vanzelf terug.</div>
        <div class="row"><button class="btn primary" onclick="startAlleBegrippen()">Start Alle begrippen</button></div>
      </div>`;
    return;
  }
  const items = list.map(f=>conceptQuestion(f.ch, f.concept, Math.random()<0.45));
  cq = { mode:"fouten", title:"Leer je fouten", heading:"🔁 Fouten herhaald",
         bodySel:"#examen-body", backCall:"renderToetsHub()", restartCall:"startLeerFouten()", restartLabel:"Nog een ronde",
         queue:shuffle(items), i:0, score:0, seen:0, answered:false, requeued:{} };
  renderCQ();
}
function renderCQ(){
  if(cq.i>=cq.queue.length) return cqDone();
  const q=cq.queue[cq.i], K=["A","B","C","D"];
  $(cq.bodySel).innerHTML = `
    <div class="counter">${esc(cq.title)} — vraag ${cq.i+1} van ${cq.queue.length} · <span style="color:var(--green)">H${q.ch.nr} ${esc(q.ch.title)}</span></div>
    <div class="pbar"><i style="width:${cq.i/cq.queue.length*100}%"></i></div>
    <div class="card">
      <div class="q">${q.q}</div>
      <div class="opts" id="cq-opts"></div>
      <div class="feedback" id="cq-fb"></div>
      <div class="row between">
        <button class="btn ghost" onclick="${cq.backCall}">Stoppen</button>
        <button class="btn primary hidden" id="cq-next" onclick="cq.i++;renderCQ()">Volgende ›</button>
      </div>
    </div>`;
  const box=$("#cq-opts");
  q.opts.forEach((o,idx)=>{
    const b=document.createElement("button");
    b.className="opt"; b.innerHTML=`<span class="k">${K[idx]}</span><span>${esc(o)}</span>`;
    b.onclick=()=>answerCQ(idx);
    box.appendChild(b);
  });
  cq.answered=false;
  animateActiveScreen();
}
function answerCQ(idx){
  if(cq.answered) return; cq.answered=true;
  const q=cq.queue[cq.i], opts=$$("#cq-opts .opt"), fb=$("#cq-fb");
  opts.forEach(o=>o.disabled=true);
  cq.seen++;
  const dp=chP(q.ch.id); dp.mcSeen++;
  if(idx===q.ans){
    opts[idx].classList.add("correct"); cq.score++; dp.mcCorrect++;
    fb.className="feedback show ok"; fb.innerHTML="✓ Goed! "+q.leg;
    removeFout(q.ch.id, q.term);
  } else {
    opts[idx].classList.add("wrong"); opts[q.ans].classList.add("correct");
    fb.className="feedback show no"; fb.innerHTML="✗ Helaas. "+q.leg;
    addFout(q.ch.id, q.term);
    const key=q.ch.id+"::"+q.term;
    if(!cq.requeued[key]){
      cq.requeued[key]=1;
      const c=q.ch.concepts.find(x=>x.t===q.term);
      if(c) cq.queue.push(conceptQuestion(q.ch, c, false));
    }
  }
  saveP();
  const nx=$("#cq-next"); nx.classList.remove("hidden");
  nx.textContent = cq.i+1>=cq.queue.length ? "Bekijk resultaat ›" : "Volgende ›";
}
function cqDone(){
  const s=cq.score, t=cq.seen, pct=t?Math.round(s/t*100):0, fc=foutenCount();
  $(cq.bodySel).innerHTML = `
    <div class="card">
      <h2>${cq.heading||"Afgerond"}</h2>
      <div class="ring" style="--p:${pct}"><span>${pct}%</span></div>
      <div class="score-box"><div class="big">${s}/${t}</div><div class="lbl">${pct}% goed</div></div>
      ${fc ? `<div class="tip">🔁 Je hebt nog <b>${fc} begrip${fc===1?"":"pen"}</b> in je foutenbak. Herhaal ze tot ze weg zijn.</div>`
           : `<div class="tip ok">🎉 Je foutenbak is leeg — knap werk!</div>`}
      <div class="row" style="margin-top:1rem">
        <button class="btn primary" onclick="${cq.restartCall}">${cq.restartLabel||"Opnieuw"}</button>
        ${(fc && cq.mode!=="fouten")?`<button class="btn" onclick="go('examen');startLeerFouten()">🔁 Leer je fouten (${fc})</button>`:""}
        <button class="btn" onclick="${cq.backCall}">Terug</button>
      </div>
    </div>`;
  window.scrollTo({top:0,behavior:"smooth"});
}

/* ================= THEMA'S (oefenhubs) ================= */
const THEMES = [
  { id:"opbouw", icon:"🏗️", title:"De opbouw van taal", subtitle:"Taalniveaus en taalkundige onderdelen",
    intro:"Taal kun je op verschillende niveaus bekijken: van klank tot betekenis en gebruik. Hier oefen je de taalkundige onderdelen (fonologie, morfologie, syntaxis, semantiek, pragmatiek, orthografie), de bijbehorende taalniveaus én de bouwstenen van woorden.",
    refs:[
      {ch:"taalbeschouwing-spelling",t:"Fonologie"},{ch:"taalbeschouwing-spelling",t:"Foneem"},
      {ch:"taalbeschouwing-spelling",t:"Morfologie"},{ch:"taalbeschouwing-spelling",t:"Morfeem"},
      {ch:"taalbeschouwing-spelling",t:"Vrij morfeem"},{ch:"taalbeschouwing-spelling",t:"Gebonden morfeem"},
      {ch:"taalbeschouwing-spelling",t:"Samenstelling"},{ch:"taalbeschouwing-spelling",t:"Afleiding"},
      {ch:"taalbeschouwing-spelling",t:"Verbuiging"},{ch:"taalbeschouwing-spelling",t:"Vervoeging"},
      {ch:"taalbeschouwing-spelling",t:"Syntaxis"},{ch:"taalbeschouwing-spelling",t:"Semantiek"},
      {ch:"taalbeschouwing-spelling",t:"Pragmatiek"},{ch:"taalbeschouwing-spelling",t:"Orthografie"},
      {ch:"taalonderwijs",t:"Fonologisch niveau"},{ch:"taalonderwijs",t:"Morfologisch niveau"},
      {ch:"taalonderwijs",t:"Syntactisch niveau"},{ch:"taalonderwijs",t:"Semantisch niveau"},
      {ch:"taalonderwijs",t:"Pragmatisch niveau"},{ch:"taalonderwijs",t:"Orthografisch niveau"}
    ] },
  { id:"audvis", icon:"👂", title:"Auditieve & visuele strategieën", subtitle:"Horen en zien bij lezen en spellen",
    intro:"Bij beginnende geletterdheid draait het om vaardigheden met klanken (auditief) en met letters en woordbeelden (visueel). Hier oefen je hakken en plakken, discriminatie, analyse en synthese, en het ordenen van klanken en letters.",
    refs:[
      {ch:"beginnende-geletterdheid",t:"Fonologisch bewustzijn"},{ch:"beginnende-geletterdheid",t:"Fonemisch bewustzijn"},
      {ch:"beginnende-geletterdheid",t:"Auditieve objectivatie"},{ch:"beginnende-geletterdheid",t:"Auditieve discriminatie"},
      {ch:"beginnende-geletterdheid",t:"Auditieve analyse"},{ch:"beginnende-geletterdheid",t:"Auditieve synthese"},
      {ch:"beginnende-geletterdheid",t:"Temporeel ordenen"},{ch:"beginnende-geletterdheid",t:"Klankpositie bepalen"},
      {ch:"beginnende-geletterdheid",t:"Visuele discriminatie"},{ch:"beginnende-geletterdheid",t:"Visuele analyse"},
      {ch:"beginnende-geletterdheid",t:"Visuele synthese"},{ch:"beginnende-geletterdheid",t:"Spatieel ordenen"},
      {ch:"beginnende-geletterdheid",t:"Letterpositie bepalen"}
    ] }
];
function themeById(id){ return THEMES.find(t=>t.id===id); }
function resolveTheme(theme){
  const out=[];
  theme.refs.forEach(r=>{ const ch=CHAPTERS.find(c=>c.id===r.ch); if(!ch) return; const c=ch.concepts.find(x=>x.t===r.t); if(c) out.push({ch,concept:c}); });
  return out;
}
function renderThemas(){
  const cards = THEMES.map(th=>{
    const n=resolveTheme(th).length;
    return `<button class="game-card ${th.id==='opbouw'?'example-game':'truth-game'}" onclick="openTheme('${th.id}')">
      <span class="game-art"><i>${th.icon}</i><em>${n}</em><i>📖</i></span>
      <span class="eyebrow">OEFENHUB</span><b>${esc(th.title)}</b>
      <small>${esc(th.subtitle)}. ${n} begrippen om te bekijken en te oefenen.</small>
      <strong>Open <i>→</i></strong>
    </button>`;
  }).join("");
  $("#themas-body").innerHTML = `
    <div class="hero compact">
      <span class="eyebrow">THEMA'S · GERICHT OEFENEN</span>
      <h2>Oefenhubs rond één onderwerp.</h2>
      <p>Begrippen uit verschillende hoofdstukken, gegroepeerd per thema. Bekijk ze samen en oefen ze gericht — foute begrippen gaan in je foutenbak.</p>
    </div>
    <div class="game-grid" style="grid-template-columns:1fr 1fr">${cards}</div>
    <button class="study-button" style="margin-top:.8rem;background:linear-gradient(135deg,rgba(255,179,64,.18),rgba(255,255,255,.88))" onclick="go('ezels')">
      <span class="study-icon">💡</span>
      <span><span class="eyebrow">GEHEUGENSTEUNTJES</span><b>Bekijk de ezelsbruggetjes</b>
      <small>Korte trucjes om deze begrippen te onthouden</small></span><span class="study-arrow">›</span>
    </button>`;
  animateActiveScreen();
}
function openTheme(id){
  const th=themeById(id); if(!th) return go('themas');
  const list=resolveTheme(th);
  const items=list.map(x=>`
    <div class="card" style="padding:1rem 1.1rem;margin-bottom:.6rem">
      <div style="display:flex;gap:.6rem;align-items:center"><span style="font-size:22px">${x.concept.icon||"🔹"}</span>
        <b style="font-size:15px">${esc(x.concept.t)}</b>
        <span style="margin-left:auto;font-size:11px;color:var(--green);font-weight:800">H${x.ch.nr}</span></div>
      ${x.concept.art && ART[x.concept.art] ? `<div class="art" style="margin:.5rem 0">${ART[x.concept.art]}</div>`:""}
      <p class="lead" style="margin-top:.5rem">${esc(x.concept.d)}</p>
      <div style="font-size:12.5px;color:var(--muted);border-left:3px solid var(--tint-a);padding:.5rem .7rem;background:#fafcfb;border-radius:0 8px 8px 0;margin-top:.5rem"><b style="color:var(--brand-d)">Voorbeeld:</b> ${esc(x.concept.ex)}</div>
    </div>`).join("");
  $("#themas-body").innerHTML = `
    <button class="back" onclick="go('themas')">‹ Alle thema's</button>
    <div class="chapter-heading">
      <div><span class="eyebrow">OEFENHUB</span><h2>${th.icon} ${esc(th.title)}</h2><p>${esc(th.subtitle)}</p></div>
      <div class="chapter-score"><b>${list.length}</b><span>begrippen</span></div>
    </div>
    <div class="card"><p class="sub" style="margin:0">${esc(th.intro)}</p></div>
    <div class="row" style="margin:.4rem 0 1rem">
      <button class="btn primary" onclick="startThemeQuiz('${th.id}')">📝 Oefen deze ${list.length} begrippen</button>
    </div>
    <span class="eyebrow" style="margin-left:.2rem">DE BEGRIPPEN</span>
    <div style="margin-top:.5rem">${items}</div>`;
  window.scrollTo({top:0,behavior:"smooth"});
  animateActiveScreen();
}
function startThemeQuiz(id){
  const th=themeById(id); if(!th) return;
  const items=resolveTheme(th).map(x=>conceptQuestion(x.ch, x.concept, Math.random()<0.45));
  cq = { mode:"thema", title:th.title, heading:`${th.icon} ${th.title} — afgerond`,
         bodySel:"#themas-body", backCall:`openTheme('${id}')`, restartCall:`startThemeQuiz('${id}')`, restartLabel:"Opnieuw oefenen",
         queue:shuffle(items), i:0, score:0, seen:0, answered:false, requeued:{} };
  renderCQ();
}

/* ---- Ezelsbruggetjes bij de twee oefenhubs ---- */
const EZELS = {
  // De opbouw van taal
  "Fonologie":"‘Fono’ klinkt als telefoon → het gaat over klank en uitspraak.",
  "Foneem":"Foneem = een ‘foon’-klank: de kleinste klank die het woord verandert (bak → dak).",
  "Morfologie":"Morf = vorm. Morfologie kijkt naar de vórm en bouw van woorden (de woorddelen).",
  "Morfeem":"Morfeem = het kleinste stukje mét betekenis (on-, -heid).",
  "Vrij morfeem":"Vrij = mag vrij en alleen staan (huis, boom).",
  "Gebonden morfeem":"Gebonden = zit vast, kan niet los (-tje, -heid, on-).",
  "Samenstelling":"Samen stellen = twee héle woorden samen (fiets + bel).",
  "Afleiding":"Je leidt een nieuw woord áf met een voor- of achtervoegsel (nat → nattig).",
  "Verbuiging":"Buigen = het bijvoeglijk naamwoord buigt mee (mooi → mooie).",
  "Vervoeging":"Alleen een wérkwoord vervoeg je (loop, loopt, liep) — werkwoord = vervoegen.",
  "Syntaxis":"Syntaxis = zinsbouw. Denk aan een ‘zin-taxi’: de woorden in de juiste volgorde door de zin.",
  "Semantiek":"Semantiek lijkt op het Engelse ‘meaning/semantics’ → het gaat om de betekenis.",
  "Pragmatiek":"Pragmatisch = Praktisch: hoe je taal in de praktijk/situatie gebruikt.",
  "Orthografie":"Ortho = recht (orthodontist = rechte tanden) + grafie = schrijven → juist schrijven = spelling.",
  "Fonologisch niveau":"Het niveau van de klank (fono = klank).",
  "Morfologisch niveau":"Het niveau van de woordbouw (morf = vorm).",
  "Syntactisch niveau":"Het niveau van de zinsbouw (syntaxis = zin).",
  "Semantisch niveau":"Het niveau van de betekenis.",
  "Pragmatisch niveau":"Het niveau van het gebruik (pragmatisch = praktisch).",
  "Orthografisch niveau":"Het niveau van de spelling (ortho = juist schrijven).",
  // Auditieve & visuele strategieën
  "Fonologisch bewustzijn":"Fono = klank → je bent je bewust van klanken (rijm, klankgroepen).",
  "Fonemisch bewustzijn":"Foneem = lósse klank → je hoort dat een woord uit losse klanken bestaat (fijnmaziger dan fonologisch).",
  "Auditieve objectivatie":"Auditief = oren; je bekijkt de klank als ‘object’ los van de betekenis (‘kabouter’ klínkt langer dan ‘reus’).",
  "Auditieve discriminatie":"Discrimineren = onderscheiden → met je oren het verschil hóren (pan / pen).",
  "Auditieve analyse":"Analyse = uit elkaar halen → het woord HAKken in klanken (/m/ /aa/ /n/).",
  "Auditieve synthese":"Synthese = samenvoegen (denk aan een synthesizer!) → de klanken PLAKken tot een woord.",
  "Temporeel ordenen":"Temporeel = tijd (tempo) → de klanken in de juiste vólgorde zetten.",
  "Klankpositie bepalen":"Positie = plaats → wáár in het woord hoor je de klank (voor, midden of achter)?",
  "Visuele discriminatie":"Visueel = ogen; onderscheiden → met je ogen het verschil zíen (b / d).",
  "Visuele analyse":"Zien + uit elkaar halen → de losse letters in een woord onderscheiden.",
  "Visuele synthese":"Zien + samenvoegen → de letters samen lezen tot één woord.",
  "Spatieel ordenen":"Spatieel = ruimte (space) → de lees-/schrijfrichting volgen (‘tak’ niet als ‘kat’ lezen).",
  "Letterpositie bepalen":"Positie = plaats → wáár staat de letter in het woord?"
};
function renderEzels(){
  let html = `
    <div class="hero compact">
      <span class="eyebrow">EZELSBRUGGETJES</span>
      <h2>Onthoud de begrippen met een geheugensteuntje.</h2>
      <p>Handige ezelsbruggetjes bij de begrippen uit de twee oefenhubs. Niet om letterlijk te leren, maar om het begrip te laten beklijven.</p>
    </div>`;
  THEMES.forEach(th=>{
    html += `<div class="chapter-heading" style="margin:.6rem 0 .5rem"><div><span class="eyebrow">OEFENHUB</span><h2>${th.icon} ${esc(th.title)}</h2></div></div>`;
    resolveTheme(th).forEach(x=>{
      const ez = EZELS[x.concept.t];
      html += `
        <div class="card" style="padding:.9rem 1.05rem;margin-bottom:.5rem">
          <div style="display:flex;gap:.55rem;align-items:center"><span style="font-size:20px">${x.concept.icon||"🔹"}</span><b style="font-size:15px">${esc(x.concept.t)}</b></div>
          <p class="lead" style="margin:.35rem 0 .5rem">${esc(x.concept.d)}</p>
          ${ez?`<div style="display:flex;gap:.55rem;align-items:flex-start;background:rgba(255,179,64,.12);border:1px solid rgba(255,159,28,.28);border-radius:12px;padding:.55rem .75rem">
            <span style="font-size:17px;line-height:1.2">💡</span><div style="font-size:13px;color:#7a4a00;line-height:1.5"><b>Ezelsbruggetje:</b> ${esc(ez)}</div></div>`:""}
        </div>`;
    });
  });
  html += `<p class="note">💡 Zelf een beter ezelsbruggetje bedacht? Die onthoud je vaak het best van allemaal.</p>`;
  $("#ezels-body").innerHTML = html;
  animateActiveScreen();
}

function renderToetsHub(){
  clearExamTimer(); examInProgress=false;
  const e = P.eindtoets;
  const totalConcepts = CHAPTERS.reduce((s,ch)=>s+ch.concepts.length,0);
  const fc = foutenCount();
  $("#examen-body").innerHTML = `
    <div class="hero compact">
      <span class="eyebrow">TOETSEN</span>
      <h2>Oefenen, per hoofdstuk toetsen of de hele eindtoets.</h2>
      <p>Kies hoe je wilt oefenen: rustig mét uitleg, één domein onder examencondities, of de volledige landelijke kennistoets nagebootst.</p>
    </div>
    <div class="tip">📌 De echte LKT Taal (pabo) is een digitale meerkeuzetoets (3–4 opties) van <b>80 vragen in 2 uur</b>. Cijfer 1–10, <b>geslaagd vanaf een 6</b>, met domeinscores. <span style="opacity:.75">Bron: 10voordeleraar.</span></div>
    <div class="game-grid">
      <button class="game-card example-game" onclick="renderOefenSelect()">
        <span class="game-art"><i>📝</i><em>+</em><i>💡</i></span>
        <span class="eyebrow">LEREN MET FEEDBACK</span><b>Oefentoets</b>
        <small>Per hoofdstuk of gemengd. 20 vragen met directe uitleg bij elk antwoord en een indicatief cijfer.</small>
        <strong>Kies <i>→</i></strong>
      </button>
      <button class="game-card truth-game" onclick="renderHoofdstukSelect()">
        <span class="game-art"><i>📚</i><em>→</em><i>⏱️</i></span>
        <span class="eyebrow">ÉÉN DOMEIN · EXAMENSTIJL</span><b>Hoofdstuktoets</b>
        <small>Toets één hoofdstuk onder examencondities: met klok, zonder feedback en met cijfer. Zwaardere domeinen krijgen meer vragen.</small>
        <strong>Kies hoofdstuk <i>→</i></strong>
      </button>
      <button class="game-card sprint-game" onclick="renderEindtoetsSelect()">
        <span class="game-art"><i>🎓</i><em>1–10</em><i>⏱️</i></span>
        <span class="eyebrow">VOLLEDIGE SIMULATIE</span><b>Eindtoets</b>
        <small>Alle domeinen, 80 vragen volgens de toetsmatrijs. Kies je tijd — óók de echte 2 uur.</small>
        <strong>${e?`Beste: cijfer ${e.bestGrade.toFixed(1)} · opnieuw`:'Start eindtoets'} <i>→</i></strong>
      </button>
      <button class="game-card example-game" onclick="startAlleBegrippen()">
        <span class="game-art"><i>📚</i><em>${totalConcepts}</em><i>🧠</i></span>
        <span class="eyebrow">ALLE HOOFDSTUKKEN</span><b>Alle begrippen</b>
        <small>Toets álle ${totalConcepts} begrippen uit alle hoofdstukken, met directe uitleg en voorbeelden. Foute begrippen komen vanzelf terug.</small>
        <strong>Start <i>→</i></strong>
      </button>
      <button class="game-card truth-game" onclick="startLeerFouten()">
        <span class="game-art"><i>🔁</i><em>${fc}</em><i>🎯</i></span>
        <span class="eyebrow">JE FOUTENBAK</span><b>Leer je fouten</b>
        <small>Oefen alleen de begrippen die je fout had of 'nog lastig' vond. Goed beantwoord = weg uit je foutenbak.</small>
        <strong>${fc?('Oefen '+fc+' begrip'+(fc===1?'':'pen')):'Nog geen fouten'} <i>→</i></strong>
      </button>
    </div>
    ${fc?`<div class="row" style="justify-content:flex-end;margin-top:.5rem"><button class="btn ghost danger" style="font-size:12px" onclick="wisFouten()">Foutenbak leegmaken</button></div>`:''}`;
  animateActiveScreen();
}

/* ---- Oefentoets (met directe feedback) ---- */
function renderOefenSelect(){
  clearExamTimer();
  const rows = CHAPTERS.map(ch=>`
    <button class="progress-chapter" onclick="startOefentoets('${ch.id}')">
      <span class="progress-icon">${ch.icon}</span>
      <span class="progress-copy"><b>H${ch.nr} · ${esc(ch.title)}</b><small>${ch.concepts.length} begrippen</small></span>
      <strong>›</strong></button>`).join("");
  $("#examen-body").innerHTML = `
    <button class="back" onclick="renderToetsHub()">‹ Terug naar toetsen</button>
    <div class="card">
      <h2>📝 Oefentoets</h2>
      <p class="sub">20 vragen met directe feedback en uitleg. Kies een domein of oefen gemengd over alle domeinen.</p>
      <button class="btn primary wide" style="margin-bottom:.9rem" onclick="startOefentoets('mixed')">🔀 Gemengde oefentoets (alle domeinen)</button>
      <div class="progress-list">${rows}</div>
    </div>`;
}
function startOefentoets(scope){
  clearExamTimer();
  let pool;
  if(scope==='mixed'){ pool=[]; CHAPTERS.forEach(ch=>{ pool=pool.concat(poolForChapter(ch)); }); pool=shuffle(pool).slice(0,20); }
  else { const ch=CHAPTERS.find(c=>c.id===scope)||CH; pool=shuffle(poolForChapter(ch)).slice(0,20); }
  oefen={ pool, i:0, score:0, answered:false, scope };
  renderOefen();
}
function renderOefen(){
  if(oefen.i>=oefen.pool.length) return oefenDone();
  const q=oefen.pool[oefen.i], K=["A","B","C","D"];
  const title = oefen.scope==='mixed' ? 'Gemengde oefentoets' : ('H'+q.domNr+' · '+q.domTitle);
  $("#examen-body").innerHTML = `
    <div class="counter">${esc(title)} — vraag ${oefen.i+1} van ${oefen.pool.length}</div>
    <div class="pbar"><i style="width:${oefen.i/oefen.pool.length*100}%"></i></div>
    <div class="card">
      <div class="q">${q.raw?q.q:esc(q.q)}</div>
      <div class="opts" id="oef-opts"></div>
      <div class="feedback" id="oef-fb"></div>
      <div class="row between">
        <button class="btn ghost" onclick="renderToetsHub()">Stoppen</button>
        <button class="btn primary hidden" id="oef-next" onclick="oefen.i++;renderOefen()">Volgende ›</button>
      </div>
    </div>`;
  const box=$("#oef-opts");
  q.opts.forEach((o,idx)=>{
    const b=document.createElement("button");
    b.className="opt"; b.innerHTML=`<span class="k">${K[idx]}</span><span>${esc(o)}</span>`;
    b.onclick=()=>answerOefen(idx);
    box.appendChild(b);
  });
  oefen.answered=false;
}
function answerOefen(idx){
  if(oefen.answered) return; oefen.answered=true;
  const q=oefen.pool[oefen.i], opts=$$("#oef-opts .opt"), fb=$("#oef-fb");
  opts.forEach(o=>o.disabled=true);
  const dp=chP(q.dom); dp.mcSeen++;
  if(idx===q.ans){ opts[idx].classList.add("correct"); oefen.score++; dp.mcCorrect++; fb.className="feedback show ok"; fb.innerHTML="✓ Goed! "+esc(q.leg); }
  else { opts[idx].classList.add("wrong"); opts[q.ans].classList.add("correct"); fb.className="feedback show no"; fb.innerHTML="✗ Helaas. "+esc(q.leg); }
  saveP();
  const nx=$("#oef-next"); nx.classList.remove("hidden");
  nx.textContent = oefen.i+1>=oefen.pool.length ? "Bekijk resultaat ›" : "Volgende ›";
}
function oefenDone(){
  const s=oefen.score, t=oefen.pool.length, pct=Math.round(s/t*100), cijfer=grade(pct);
  $("#examen-body").innerHTML = `
    <div class="card">
      <h2>📝 Oefentoets afgerond</h2>
      <div class="ring" style="--p:${pct}"><span>${cijfer.toFixed(1)}</span></div>
      <div class="score-box"><div class="big">${s}/${t}</div><div class="lbl">${pct}% goed · indicatief cijfer ${cijfer.toFixed(1)}</div></div>
      <div class="tip ${pct>=60?'ok':''}">${pct>=60?'👍 Lekker bezig — dit zit er goed in.':'🔁 Herhaal de lastige begrippen en probeer het nog eens.'}</div>
      <div class="row" style="margin-top:1rem">
        <button class="btn primary" onclick="renderOefenSelect()">Nieuwe oefentoets</button>
        <button class="btn" onclick="renderEindtoetsSelect()">Naar de eindtoets →</button>
      </div>
    </div>`;
  window.scrollTo({top:0,behavior:"smooth"});
}

/* ---- Hoofdstuktoets (één domein, examenstijl) ---- */
function renderHoofdstukSelect(){
  clearExamTimer();
  const rows = CHAPTERS.map(ch=>{
    const n=hoofdstukN(ch);
    return `<button class="progress-chapter" onclick="startHoofdstuktoets('${ch.id}')">
      <span class="progress-icon">${ch.icon}</span>
      <span class="progress-copy"><b>H${ch.nr} · ${esc(ch.title)}</b><small>${n} vragen · ± ${n} min · zonder feedback</small></span>
      <strong>›</strong></button>`;
  }).join("");
  $("#examen-body").innerHTML = `
    <button class="back" onclick="renderToetsHub()">‹ Terug naar toetsen</button>
    <div class="card">
      <h2>📚 Hoofdstuktoets</h2>
      <p class="sub">Toets één domein onder examencondities: met klok, zónder feedback en met een cijfer aan het eind. Zwaardere domeinen (zoals beginnende geletterdheid en taalbeschouwing & spelling) krijgen meer vragen — net als in de echte toets. Handig om precies dát domein af te toetsen dat je nog wilt oefenen.</p>
      <div class="progress-list">${rows}</div>
    </div>`;
}

/* ---- Eindtoets (examensimulatie: klok, geen feedback, domeinscores) ---- */
function renderEindtoetsSelect(){
  clearExamTimer();
  const maxN=Math.max(...Object.values(MATRIJS));
  const rows=CHAPTERS.filter(ch=>MATRIJS[ch.id]).sort((a,b)=>MATRIJS[b.id]-MATRIJS[a.id]).map(ch=>{
    const n=MATRIJS[ch.id];
    return `<div class="bar-row"><div class="bl" title="${esc(ch.title)}">${ch.icon} ${esc(ch.title)}</div><div class="bt"><i style="width:${n/maxN*100}%;background:linear-gradient(90deg,var(--purple),var(--green))"></i></div><div class="bp">${n}</div></div>`;
  }).join("");
  $("#examen-body").innerHTML = `
    <button class="back" onclick="renderToetsHub()">‹ Terug naar toetsen</button>
    <div class="card">
      <h2>🎯 Eindtoets — examensimulatie</h2>
      <p class="sub">Vragen door elkaar, <b>geen feedback tijdens de toets</b>. Aan het eind: je cijfer (1–10), je uitslag (geslaagd vanaf een 6) en je domeinscores.</p>
      <div class="tip">⏱️ Er loopt een klok. Je kunt terug- en vooruitbladeren en tussentijds inleveren. Als de tijd om is, wordt automatisch ingeleverd.</div>
      <p class="sub" style="margin:.2rem 0 .35rem"><b>🎓 Officiële eindtoets · 80 vragen</b> — kies je tijd:</p>
      <div class="row" style="margin-bottom:.6rem">
        <button class="btn primary" onclick="startEindtoetsOfficieel(120)">⏱️ Echte tijd · 2 uur</button>
        <button class="btn" onclick="startEindtoetsOfficieel(90)">Vlot · 90 min</button>
        <button class="btn" onclick="startEindtoetsOfficieel(0)">Zonder tijdslimiet</button>
      </div>
      <p class="sub">Zelfde verdeling als de echte toetsmatrijs (bron: 10voordeleraar):</p>
      ${rows}
      <div style="height:1px;background:var(--line);margin:1rem 0"></div>
      <p class="sub">Of een kortere ronde, gelijk verdeeld over alle 9 hoofdstukken:</p>
      <div class="row">
        <button class="btn" onclick="startEindtoets(45,45)">Half · 45 vragen · 45 min</button>
        <button class="btn" onclick="startEindtoets(27,25)">Kort · 27 vragen · 25 min</button>
      </div>
      <p class="sub" style="margin-top:.8rem">De echte toets telt 80 vragen in 2 uur. De cesuur (het aantal goed voor een 6) wordt per afname wetenschappelijk bepaald; het cijfer hier is een indicatie.</p>
    </div>`;
}
// Officiële toetsmatrijs van de LKT Taal pabo (10voordeleraar): vragen per domein.
// De app-hoofdstukken sluiten aan op de domeinen; H9 = taalbeschouwing (13) + spelling (9) = 22.
// Hoofdstuk 1 (Taalonderwijs) is geen los toetsdomein en zit niet in de officiële eindtoets.
const MATRIJS = {
  "mondeling":11, "woordenschat":9, "beginnende-geletterdheid":16, "technisch-lezen":6,
  "begrijpend-lezen":8, "stellen":5, "jeugdliteratuur":3, "taalbeschouwing-spelling":22
};
function runEindtoets(pool, minutes, title, official){
  clearExamTimer();
  exam={ pool:shuffle(pool), i:0, answers:new Array(pool.length).fill(null),
         marks:new Set(), showGrid:false,
         time:minutes>0?minutes*60:null, title:title||"Eindtoets", official:!!official };
  examInProgress=true;
  if(minutes>0){
    examTimer=setInterval(()=>{
      if(!exam||exam.time==null){ return clearExamTimer(); }
      exam.time--;
      const c=$("#exam-clock"); if(c){ c.textContent=fmtTime(Math.max(0,exam.time)); if(exam.time<=30) c.style.color="var(--no)"; }
      if(exam.time<=0){ clearExamTimer(); finishEindtoets(true); }
    },1000);
  }
  renderEindtoets();
}
function startEindtoets(total, minutes){
  const perDom=Math.max(1, Math.round(total/CHAPTERS.length));
  let pool=[];
  CHAPTERS.forEach(ch=>{ pool=pool.concat(sample(poolForChapter(ch), perDom)); });
  runEindtoets(pool, minutes, "Eindtoets (gemengd)", false);
}
function startEindtoetsOfficieel(minutes){
  let pool=[];
  CHAPTERS.forEach(ch=>{ const n=MATRIJS[ch.id]; if(n) pool=pool.concat(sample(poolForChapter(ch), n)); });
  runEindtoets(pool, minutes, "Officiële eindtoets", true);
}
function hoofdstukN(ch){ return Math.min(poolForChapter(ch).length, Math.max(15, MATRIJS[ch.id]||12)); }
function startHoofdstuktoets(chId){
  const ch=CHAPTERS.find(c=>c.id===chId)||CH;
  const n=hoofdstukN(ch);
  runEindtoets(sample(poolForChapter(ch), n), n, "Hoofdstuktoets · "+ch.title, false);
}
function renderEindtoets(){
  const q=exam.pool[exam.i], K=["A","B","C","D"], n=exam.pool.length;
  const answeredCount=exam.answers.filter(a=>a!==null).length;
  const last=exam.i===n-1, marked=exam.marks.has(exam.i);
  const grid = exam.showGrid
    ? `<div class="qgrid">`+exam.pool.map((_,i)=>{
        const cls=[i===exam.i?'current':'', exam.answers[i]!=null?'answered':'', exam.marks.has(i)?'marked':''].filter(Boolean).join(' ');
        return `<button class="${cls}" title="Ga naar vraag ${i+1}" onclick="exam.i=${i};renderEindtoets()">${i+1}</button>`;
      }).join('')+`</div>
      <p class="qgrid-legend"><b>paars</b> = ingevuld · <b>oranje rand</b> = gemarkeerd · <b>omlijnd</b> = huidige vraag</p>` : '';
  $("#examen-body").innerHTML = `
    <div class="sprint-hud">
      <div><span>TIJD</span><b id="exam-clock">${exam.time==null?'∞':fmtTime(exam.time)}</b></div>
      <div><span>VRAAG</span><b>${exam.i+1}/${n}</b></div>
      <div><span>BEANTWOORD</span><b>${answeredCount}/${n}</b></div>
    </div>
    <div class="pbar"><i style="width:${exam.i/n*100}%"></i></div>
    <div class="card">
      <div class="row between" style="margin-bottom:.35rem;align-items:center">
        <span class="eyebrow">DOMEIN: ${esc(q.domTitle)}</span>
        <button class="btn ghost" style="font-size:12px;padding:.3rem .6rem" onclick="toggleMark()">${marked?'🔖 Gemarkeerd':'🔖 Markeer'}</button>
      </div>
      <div class="q">${q.raw?q.q:esc(q.q)}</div>
      <div class="opts" id="ex-opts"></div>
      <div class="row between" style="margin-top:.4rem">
        <button class="btn" ${exam.i===0?'disabled':''} onclick="exam.i--;renderEindtoets()">‹ Vorige</button>
        ${last
          ? `<button class="btn primary" onclick="confirmInleveren()">Inleveren ✓</button>`
          : `<button class="btn primary" onclick="exam.i++;renderEindtoets()">Volgende ›</button>`}
      </div>
      <div class="row between" style="margin-top:.6rem">
        <button class="btn ghost" style="font-size:12px" onclick="exam.showGrid=!exam.showGrid;renderEindtoets()">${exam.showGrid?'▲ Verberg overzicht':'📋 Vragenoverzicht ('+answeredCount+'/'+n+')'}</button>
        <button class="btn ghost danger" style="font-size:12px" onclick="confirmInleveren()">Nu inleveren ✓</button>
      </div>
      ${grid}
    </div>`;
  const box=$("#ex-opts");
  q.opts.forEach((o,idx)=>{
    const b=document.createElement("button");
    b.className="opt"; b.innerHTML=`<span class="k">${K[idx]}</span><span>${esc(o)}</span>`;
    if(exam.answers[exam.i]===idx){ b.style.borderColor="var(--purple)"; b.style.background="rgba(205,184,255,.20)"; }
    b.onclick=()=>{ exam.answers[exam.i]=idx; renderEindtoets(); };
    box.appendChild(b);
  });
}
function toggleMark(){ if(exam.marks.has(exam.i)) exam.marks.delete(exam.i); else exam.marks.add(exam.i); renderEindtoets(); }
function confirmInleveren(){
  const answeredCount=exam.answers.filter(a=>a!==null).length, n=exam.pool.length;
  if(answeredCount<n && !confirm(`Je hebt ${answeredCount} van de ${n} vragen beantwoord. Weet je zeker dat je wilt inleveren?`)) return;
  clearExamTimer(); finishEindtoets(false);
}
function finishEindtoets(auto){
  clearExamTimer(); examInProgress=false;
  const n=exam.pool.length;
  let score=0; const wrong=[]; const perDom={};
  exam.pool.forEach((q,i)=>{
    const a=exam.answers[i], ok=a===q.ans;
    if(!perDom[q.dom]) perDom[q.dom]={nr:q.domNr,title:q.domTitle,t:0,c:0};
    perDom[q.dom].t++; if(ok) perDom[q.dom].c++;
    if(ok) score++; else wrong.push({q,picked:a});
    const dp=chP(q.dom); dp.mcSeen++; if(ok) dp.mcCorrect++;
  });
  const pct=Math.round(score/n*100), cijfer=grade(pct), geslaagd=cijfer>=6;
  if(exam.official){
    const prev=P.eindtoets||{attempts:0,bestGrade:0,bestPct:0};
    P.eindtoets={ attempts:prev.attempts+1, bestGrade:Math.max(prev.bestGrade,cijfer), bestPct:Math.max(prev.bestPct,pct), lastGrade:cijfer, lastPct:pct };
  }
  saveP();
  const col=p=>p>=70?"var(--ok)":p>=50?"var(--accent)":"var(--no)";
  const domBars=Object.values(perDom).sort((a,b)=>a.nr-b.nr).map(d=>{
    const p=Math.round(d.c/d.t*100);
    return `<div class="bar-row"><div class="bl" title="${esc(d.title)}">H${d.nr} ${esc(d.title)}</div><div class="bt"><i style="width:${p}%;background:${col(p)}"></i></div><div class="bp" style="color:${col(p)}">${d.c}/${d.t}</div></div>`;
  }).join("");
  const wrongHTML = wrong.length ? `<h3>Fout of niet beantwoord — leer deze na (${wrong.length}):</h3>`+
     wrong.map(w=>`<div class="feedback show no" style="margin-bottom:.5rem"><span class="eyebrow">H${w.q.domNr} · ${esc(w.q.domTitle)}</span><br>${w.q.raw?w.q.q:esc(w.q.q)}<br><b>Goed:</b> ${esc(w.q.opts[w.q.ans])}. ${esc(w.q.leg)}</div>`).join("")
     : `<div class="tip ok">🏆 Alles goed! Foutloze eindtoets.</div>`;
  $("#examen-body").innerHTML = `
    <div class="card">
      <h2>🎯 Uitslag · ${esc(exam.title)}</h2>
      ${auto?`<div class="tip">⏱️ De tijd was om — de toets is automatisch ingeleverd.</div>`:''}
      <div class="ring" style="--p:${pct}"><span>${cijfer.toFixed(1)}</span></div>
      <div class="score-box"><div class="big">${score}/${n}</div><div class="lbl">${pct}% goed · cijfer ${cijfer.toFixed(1)} (indicatief)</div></div>
      <div class="tip ${geslaagd?'ok':'no'}">${geslaagd?'✅ Geslaagd! Je zit op of boven een 6.':'⚠️ Nog niet geslaagd — je hebt minstens een 6 nodig. Pak de zwakke domeinen hieronder aan.'}</div>
      <h3>Domeinscores</h3>
      ${domBars}
      <div class="row" style="margin-top:1rem">
        <button class="btn primary" onclick="renderEindtoetsSelect()">Nieuwe eindtoets</button>
        <button class="btn" onclick="go('begrippen')">Zwak domein herhalen</button>
      </div>
      ${wrongHTML}
    </div>`;
  window.scrollTo({top:0,behavior:"smooth"});
}

/* ================= RESULTAAT-KAART (herbruikbaar) ================= */
function resultCard(title, s, t, pct, buttons){
  let msg, cls;
  if(pct>=80){msg="Sterk! Je beheerst dit goed.";cls="ok";}
  else if(pct>=55){msg="Redelijk — nog even herhalen.";cls="";}
  else{msg="Dit heeft meer aandacht nodig.";cls="no";}
  return `<div class="card">
    <h2>${title}</h2>
    <div class="ring" style="--p:${pct}"><span>${pct}%</span></div>
    <div class="score-box"><div class="big">${s}/${t}</div><div class="lbl">${msg}</div></div>
    <div class="tip ${cls}">${pct>=55?'👍':'🔁'} ${msg}</div>
    <div class="row">${buttons}</div>
  </div>`;
}

/* ================= VOORTGANG ================= */
function renderVoortgang(){
  const p = chP(CH.id);
  const mcPct = p.mcSeen ? Math.round(p.mcCorrect/p.mcSeen*100) : 0;
  const flashKnown = chapterKnown(CH);
  const flashPct = Math.round(flashKnown/CH.concepts.length*100);
  const bar = (label,pct,color)=>`<div class="bar-row"><div class="bl">${label}</div>
     <div class="bt"><i style="width:${pct}%;background:${color}"></i></div><div class="bp">${pct}%</div></div>`;
  const col = pct=>pct>=70?"var(--ok)":pct>=45?"var(--accent)":"var(--no)";
  const totalConcepts = CHAPTERS.reduce((sum,ch)=>sum+ch.concepts.length,0);
  const totalKnown = CHAPTERS.reduce((sum,ch)=>sum+chapterKnown(ch),0);
  const totalQuestions = CHAPTERS.reduce((sum,ch)=>sum+chP(ch.id).mcSeen,0);
  const chapterRows = CHAPTERS.map(ch=>{
    const known=chapterKnown(ch), pct=chapterPct(ch);
    return `<button class="progress-chapter ${ch.id===CH.id?'active':''}" onclick="selectChapter('${ch.id}');go('voortgang')">
      <span class="progress-icon">${ch.icon}</span><span class="progress-copy"><b>H${ch.nr} · ${esc(ch.title)}</b><small>${known}/${ch.concepts.length} begrippen bekend</small>
      <i><em style="width:${pct}%"></em></i></span><strong>${pct}%</strong></button>`;
  }).join("");
  $("#voortgang-body").innerHTML = `
    <div class="hero compact">
      <span class="eyebrow">JOUW VOORTGANG</span>
      <h2>Blijf bouwen aan je taalbasis.</h2>
      <p>Bekijk per hoofdstuk wat je al kent en waar nog winst te halen is.</p>
    </div>
    <div class="stat-grid overall-stats">
      <div class="stat"><b>${totalKnown}/${totalConcepts}</b><span>begrippen bekend</span></div>
      <div class="stat"><b>${totalQuestions}</b><span>vragen geoefend</span></div>
      <div class="stat"><b>${CHAPTERS.length}</b><span>hoofdstukken beschikbaar</span></div>
    </div>
    <div class="card">
      <span class="eyebrow">GESELECTEERD HOOFDSTUK</span>
      <h2>${CH.icon} Hoofdstuk ${CH.nr}: ${esc(CH.title)}</h2>
      <p class="sub">Kies hieronder een ander hoofdstuk om de details te bekijken.</p>
      <div class="stat-grid">
        <div class="stat"><b>${p.mcSeen}</b><span>vragen gedaan</span></div>
        <div class="stat"><b>${flashKnown}/${CH.concepts.length}</b><span>flashcards gekend</span></div>
        <div class="stat"><b>${P.eindtoets?P.eindtoets.lastGrade.toFixed(1):"–"}</b><span>laatste eindtoetscijfer</span></div>
      </div>
      <h3>Beheersing</h3>
      ${bar("Flashcards gekend",flashPct,col(flashPct))}
      ${bar("Meerkeuze goed",mcPct,col(mcPct))}
      ${bar("Beste spelronde",p.gameBest||0,col(p.gameBest||0))}
      ${bar("Beste eindtoets",P.eindtoets?P.eindtoets.bestPct:0,col(P.eindtoets?P.eindtoets.bestPct:0))}
      <p class="sub" style="margin-top:1rem">Spelrondes: <b>${p.gameRounds||0}×</b> · Sprintrecord: <b>${p.sprintBest||0}</b> · Combineren afgerond: <b>${p.matchRounds||0}×</b> · Eindtoetsen: <b>${P.eindtoets?P.eindtoets.attempts:0}×</b></p>
    </div>
    <div class="card">
      <span class="eyebrow">ALLE HOOFDSTUKKEN</span>
      <div class="progress-list">${chapterRows}</div>
      <button class="btn ghost danger" style="margin-top:1rem;font-size:12px" onclick="wisVoortgang()">Alle voortgang wissen</button>
    </div>
    <p class="note">💾 Opgeslagen op dit apparaat en beschikbaar wanneer je terugkomt.</p>`;
}
function wisVoortgang(){
  if(confirm("Weet je zeker dat je alle voortgang wilt wissen?")){
    P={}; saveP(); renderVoortgang();
  }
}

/* ---------- Start ---------- */
document.addEventListener("DOMContentLoaded",()=>{
  applyTextSize(loadTS());
  $$(".tab").forEach(t=>t.onclick=()=>go(t.dataset.go));
  go("start");
});
