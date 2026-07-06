/* ============================================================
   LKT Taal – Oefenapp  ·  LOGICA
   Vier oefenvormen: flashcards, meerkeuze, combineren, examen.
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
  const empty = { mcSeen:0, mcCorrect:0, matchRounds:0, flashKnown:{}, examBest:0, examAttempts:0, examLastGrade:0 };
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

/* ---------- Toestand ---------- */
const savedChapter = (()=>{ try{return localStorage.getItem(CKEY);}catch(e){return null;} })();
let CH = CHAPTERS.find(ch=>ch.id===savedChapter) || CHAPTERS[0];
let flash = null, mc = null, match = null, exam = null;

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
  $$(".screen").forEach(s=>s.classList.remove("active"));
  $$(".tab").forEach(t=>t.classList.remove("active"));
  $("#screen-"+id).classList.add("active");
  const tab = $(`.tab[data-go="${id}"]`); if(tab) tab.classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
  if(id==="start")     renderStart();
  if(id==="begrippen") renderBegrippen();
  if(id==="flashcards")startFlash();
  if(id==="meerkeuze") startMC();
  if(id==="match")     startMatch();
  if(id==="examen")    startExamIntro();
  if(id==="voortgang") renderVoortgang();
}

/* ================= START ================= */
function renderStart(){
  const p = chP(CH.id);
  const totQ = p.mcSeen, totC = p.mcCorrect;
  const pct = totQ ? Math.round(totC/totQ*100) : null;
  $("#chapter-tabs").innerHTML = CHAPTERS.map(ch=>`
    <button class="chapter-tab ${ch.id===CH.id?'active':''}" onclick="selectChapter('${ch.id}')" aria-pressed="${ch.id===CH.id}">
      <span>H${ch.nr}</span><b>${esc(ch.title)}</b><small>${chapterPct(ch)}% bekend</small>
    </button>`).join("");
  $("#chapter-heading").innerHTML = `
    <div><span class="eyebrow">HOOFDSTUK ${CH.nr}</span><h2>${CH.icon} ${esc(CH.title)}</h2><p>${esc(CH.subtitle)}</p></div>
    <div class="chapter-score"><b>${chapterKnown(CH)}/${CH.concepts.length}</b><span>begrippen bekend</span></div>`;
  $("#start-stats").innerHTML = `
    <div class="stat"><b>${CH.concepts.length}</b><span>begrippen in dit hoofdstuk</span></div>
    <div class="stat"><b>${pct===null?"–":pct+"%"}</b><span>meerkeuze goed</span></div>
    <div class="stat"><b>${p.examLastGrade?p.examLastGrade.toFixed(1):"–"}</b><span>laatste examencijfer</span></div>`;
  $("#start-chapter").innerHTML = `
    <button class="study-button" onclick="go('begrippen')">
      <span class="study-icon">${CH.icon}</span>
      <span><span class="eyebrow">EERST DE STOF BEKIJKEN</span><b>Lees alle ${CH.concepts.length} begrippen</b>
      <small>${esc(CH.subtitle)}</small></span><span class="study-arrow">›</span>
    </button>`;
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
    <div class="flash-wrap"><div class="flash" id="flashcard" onclick="this.classList.toggle('flip')">
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
  p.flashKnown[idx] = known; saveP();
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
        <button class="btn" onclick="go('meerkeuze')">Nu meerkeuze →</button>
      </div>
    </div>`;
}
function flashHardOnly(){ const h=flash.hard; flash={deck:shuffle(h),pos:0,hard:[]}; renderFlash(); }

/* ================= MEERKEUZE ================= */
function buildMCPool(){
  // Vaste meerkeuzevragen + automatisch gegenereerde begrip-vragen
  const base = (CH.mc || []).map(q=>({q:q.q, opts:q.opts, ans:q.ans, leg:q.leg}));
  const gen = CH.concepts.map(c=>{
    const wrong = sample(CH.concepts.filter(x=>x.t!==c.t),3).map(x=>x.t);
    const opts = shuffle([c.t, ...wrong]);
    return { q:`Welk begrip hoort bij deze omschrijving?<br><span style="font-weight:500;color:var(--muted)">“${esc(c.d)}”</span>`,
             opts, ans:opts.indexOf(c.t), leg:`${c.t}: ${c.d}`, raw:true };
  });
  return shuffle([...base, ...gen]);
}
function startMC(){
  mc = { pool: buildMCPool().slice(0,10), i:0, score:0, answered:false };
  renderMC();
}
function renderMC(){
  if(mc.i >= mc.pool.length) return mcDone();
  const q = mc.pool[mc.i];
  const K = ["A","B","C","D","E"];
  $("#meerkeuze-body").innerHTML = `
    <div class="counter">Vraag ${mc.i+1} van ${mc.pool.length}</div>
    <div class="pbar"><i style="width:${mc.i/mc.pool.length*100}%"></i></div>
    <div class="card">
      <div class="q">${q.raw?q.q:esc(q.q)}</div>
      <div class="opts" id="mc-opts"></div>
      <div class="feedback" id="mc-fb"></div>
      <div class="row between">
        <button class="btn ghost" onclick="go('start')">Stoppen</button>
        <button class="btn primary hidden" id="mc-next" onclick="mc.i++;renderMC()">Volgende ›</button>
      </div>
    </div>`;
  const box = $("#mc-opts");
  q.opts.forEach((o,idx)=>{
    const b = document.createElement("button");
    b.className="opt"; b.innerHTML=`<span class="k">${K[idx]}</span><span>${esc(o)}</span>`;
    b.onclick = ()=>answerMC(idx);
    box.appendChild(b);
  });
  mc.answered = false;
}
function answerMC(idx){
  if(mc.answered) return; mc.answered = true;
  const q = mc.pool[mc.i], opts = $$("#mc-opts .opt");
  opts.forEach(o=>o.disabled=true);
  const p = chP(CH.id); p.mcSeen++;
  const fb = $("#mc-fb");
  if(idx===q.ans){
    opts[idx].classList.add("correct"); mc.score++; p.mcCorrect++;
    fb.className="feedback show ok"; fb.innerHTML="✓ Goed! "+esc(q.leg);
  } else {
    opts[idx].classList.add("wrong"); opts[q.ans].classList.add("correct");
    fb.className="feedback show no"; fb.innerHTML="✗ Helaas. "+esc(q.leg);
  }
  saveP();
  $("#mc-next").classList.remove("hidden");
  $("#mc-next").textContent = mc.i+1>=mc.pool.length ? "Bekijk resultaat ›" : "Volgende ›";
}
function mcDone(){
  const s=mc.score,t=mc.pool.length,pct=Math.round(s/t*100);
  $("#meerkeuze-body").innerHTML = resultCard("✅ Meerkeuze", s, t, pct,
     `<button class="btn primary" onclick="startMC()">Nieuwe vragen</button>
      <button class="btn" onclick="go('match')">Combineren →</button>`);
}

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

/* ================= EXAMEN ================= */
function startExamIntro(){
  const p = chP(CH.id);
  $("#examen-body").innerHTML = `
    <div class="card">
      <h2>🎯 Examen-simulatie</h2>
      <p class="sub">15 gemengde vragen over dit hoofdstuk. Aan het eind krijg je een cijfer. Geslaagd vanaf een 5,5.</p>
      <div class="tip">📌 Geen feedback tijdens de toets — net als bij het echte examen. De uitleg zie je pas bij het resultaat.</div>
      ${p.examAttempts?`<p class="sub">Eerder gemaakt: ${p.examAttempts}× · beste score ${p.examBest}% · laatste cijfer ${p.examLastGrade.toFixed(1)}</p>`:""}
      <button class="btn primary wide" onclick="startExam()">Start examen (15 vragen)</button>
    </div>`;
}
function startExam(){
  exam = { pool: buildMCPool().slice(0,15), i:0, score:0, wrong:[] };
  renderExam();
}
function renderExam(){
  if(exam.i >= exam.pool.length) return examDone();
  const q = exam.pool[exam.i]; const K=["A","B","C","D"];
  $("#examen-body").innerHTML = `
    <div class="counter">Vraag ${exam.i+1} van ${exam.pool.length}</div>
    <div class="pbar"><i style="width:${exam.i/exam.pool.length*100}%"></i></div>
    <div class="card">
      <div class="q">${q.raw?q.q:esc(q.q)}</div>
      <div class="opts" id="ex-opts"></div>
    </div>`;
  const box=$("#ex-opts");
  q.opts.forEach((o,idx)=>{
    const b=document.createElement("button");
    b.className="opt"; b.innerHTML=`<span class="k">${K[idx]}</span><span>${esc(o)}</span>`;
    b.onclick=()=>{
      if(idx===q.ans) exam.score++; else exam.wrong.push({q,picked:idx});
      exam.i++; renderExam();
    };
    box.appendChild(b);
  });
}
function grade(pct){ return Math.max(1, Math.min(10, 1 + 9*pct/100)); }
function examDone(){
  const s=exam.score,t=exam.pool.length,pct=Math.round(s/t*100),cijfer=grade(pct);
  const p=chP(CH.id);
  p.examAttempts++; p.examLastGrade=cijfer; if(pct>p.examBest)p.examBest=pct; saveP();
  const geslaagd = cijfer>=5.5;
  const wrongHTML = exam.wrong.length ? `<h3>Fout beantwoord — leer deze na:</h3>`+
     exam.wrong.map(w=>`<div class="feedback show no" style="margin-bottom:.5rem">${w.q.raw?w.q.q:esc(w.q.q)}<br><b>Goed:</b> ${esc(w.q.opts[w.q.ans])}. ${esc(w.q.leg)}</div>`).join("")
     : `<div class="tip ok">🏆 Alles goed! Foutloos examen.</div>`;
  $("#examen-body").innerHTML = `
    <div class="card">
      <h2>🎯 Examenresultaat</h2>
      <div class="ring" style="--p:${pct}"><span>${cijfer.toFixed(1)}</span></div>
      <div class="score-box"><div class="big">${s}/${t}</div><div class="lbl">${pct}% goed · cijfer ${cijfer.toFixed(1)}</div></div>
      <div class="tip ${geslaagd?'ok':'no'}">${geslaagd?'✅ Geslaagd! Je zit boven de 5,5.':'⚠️ Nog niet geslaagd. Herhaal de begrippen en probeer opnieuw.'}</div>
      ${wrongHTML}
      <div class="row" style="margin-top:1rem">
        <button class="btn primary" onclick="startExam()">Opnieuw examen</button>
        <button class="btn" onclick="go('begrippen')">Stof herhalen</button>
      </div>
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
        <div class="stat"><b>${p.examLastGrade?p.examLastGrade.toFixed(1):"–"}</b><span>laatste cijfer</span></div>
      </div>
      <h3>Beheersing</h3>
      ${bar("Flashcards gekend",flashPct,col(flashPct))}
      ${bar("Meerkeuze goed",mcPct,col(mcPct))}
      ${bar("Beste examen",p.examBest||0,col(p.examBest||0))}
      <p class="sub" style="margin-top:1rem">Combineren afgerond: <b>${p.matchRounds||0}×</b> · Examens gemaakt: <b>${p.examAttempts||0}×</b></p>
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
  $$(".tab").forEach(t=>t.onclick=()=>go(t.dataset.go));
  go("start");
});
