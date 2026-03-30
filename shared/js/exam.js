// ════════════ SHARED EXAM LOGIC ════════════
// Common functions for both simulacro-1 and simulacro-2
// SUBJ_INFO, SIMULACROS, getSimulacroSubjects defined in data.js

/* ════════════ SIMULACRO CONFIG ════════════ */
let SIMULACRO_ID = 1;
let SIMULACRO_CONFIG = null;
let ACTIVE_SUBJECTS = [];
const QB = {};

function getSimulacroFromURL() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('simulacro'), 10);
  return (id === 1 || id === 2) ? id : 1;
}

function configureSimulacro() {
  SIMULACRO_ID = getSimulacroFromURL();
  state.simulacroId = SIMULACRO_ID;
  SIMULACRO_CONFIG = SIMULACROS[SIMULACRO_ID] || SIMULACROS[1];
  
  document.getElementById('simulacroBadge').textContent = SIMULACRO_CONFIG.shortName;
  document.getElementById('homeTitle').innerHTML = SIMULACRO_CONFIG.titulo.replace('·', '<br>');
  document.getElementById('homeDesc').textContent = SIMULACRO_CONFIG.descripcion;
  document.title = SIMULACRO_CONFIG.titulo + ' · Nariño';
  
  document.querySelector('meta[name="description"]').setAttribute('content', 
    'Simulador SABER 11 - ' + SIMULACRO_CONFIG.descripcion + ' - Secretaría de Educación de Nariño');
  document.querySelector('meta[name="apple-mobile-web-app-title"]').setAttribute('content', 
    SIMULACRO_CONFIG.shortName + ' Nariño');
  
  const btnStartAll = document.getElementById('btnStartAll');
  if (SIMULACRO_ID === 2) {
    btnStartAll.style.display = 'none';
  } else {
    btnStartAll.style.display = '';
  }
}

function detectActiveSubjects() {
  if (typeof QUESTIONS !== 'undefined') {
    const subjectsWithQuestions = ['lc', 'mat', 'soc', 'cn', 'ing'];
    ACTIVE_SUBJECTS = subjectsWithQuestions.filter(subj => {
      return QUESTIONS.some(q => 
        q.subject === subj && 
        q.simulacros && 
        q.simulacros.includes(SIMULACRO_ID)
      );
    });
  } else {
    ACTIVE_SUBJECTS = ['lc', 'mat'];
  }
}

function renderSubjects() {
  const grid = document.getElementById('subjectGrid');
  grid.innerHTML = '';
  
  ACTIVE_SUBJECTS.forEach(subj => {
    const info = SUBJ_INFO[subj];
    const count = getSubjectQuestionCount(subj);
    const div = document.createElement('div');
    div.className = `subj-card s-${subj}`;
    div.onclick = () => selectSubject(subj);
    div.innerHTML = `<span class="subj-icon">${info.icon}</span><div class="subj-name">${info.name}</div><div class="subj-count">${count} preguntas</div>`;
    grid.appendChild(div);
  });
}

function getSubjectQuestionCount(subject) {
  if (typeof QUESTIONS !== 'undefined') {
    const count = QUESTIONS.filter(q => q.subject === subject && q.simulacros && q.simulacros.includes(SIMULACRO_ID)).length;
    return count > 0 ? count : (SIMULACRO_ID === 2 ? 20 : 5);
  }
  return SIMULACRO_ID === 2 ? 20 : 5;
}

/* ════════════ STATE ════════════ */
let state = {
  simulacroId: null,
  subject: null,
  questions: [],
  current: 0,
  answers: [],
  hintsUsed: 0,
  allSubjects: false,
  allQueue: [],
  allAnswers: {},
  immediateFeedback: false,
  timedMode: true,
  timeRemaining: 0,
  timerInterval: null,
  timeExpired: false
};

/* ════════════ SHUFFLE ════════════ */
function shuffleOpts(q){
  if(!q._origOpts){
    q._origOpts=[...q.opts];
    q._origCorrect=q.correct;
    q._origOptsImg=q.optsImg ? [...q.optsImg] : null;
  }
  const origOpts=q._origOpts;
  const origCorrect=q._origCorrect;
  const origOptsImg=q._origOptsImg;
  const order=[0,1,2,3];
  for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}
  const newOpts=order.map(i=>origOpts[i]);
  const newOptsImg=origOptsImg ? order.map(i=>origOptsImg[i]) : null;
  const newCorrect=order.indexOf(origCorrect);
  return{...q, opts:newOpts, optsImg:newOptsImg, correct:newCorrect, _origCorrect:origCorrect};
}

/* ════════════ HOME ════════════ */
function selectSubject(key){
  state.subject=key;
  document.querySelectorAll('.subj-card').forEach(c=>c.classList.remove('active-subj'));
  document.querySelector('.s-'+key).classList.add('active-subj');
  document.getElementById('btnStart').disabled=false;
}

function startAllSubjects(){
  state.allSubjects=true;state.allQueue=['lc','mat','soc','cn','ing'];
  state.allAnswers={};
  if(state.timedMode){
    state.timeRemaining=state.allQueue.reduce((acc,key)=>acc+QB[key].questions.length*60,0);
  }
  state.subject=state.allQueue.shift();beginSubject();
}

function startQuiz(){stopTimer();state.allSubjects=false;beginSubject();}

function beginSubject(){
  const s=QB[state.subject];
  state.questions=s.questions.map(q=>shuffleOpts(q));
  state.current=0;
  state.answers=new Array(s.questions.length).fill(null);state.hintsUsed=0;
  state.timeExpired=false;
  if(state.timedMode){
    if(state.allSubjects){
      if(state.timeRemaining===0){
        state.timeRemaining=state.allQueue.reduce((acc,key)=>acc+QB[key].questions.length*60,0)+s.questions.length*60;
      }
    } else {
      state.timeRemaining=s.questions.length*60;
    }
  }
  showIntro();
}

/* ════════════ INTRO ════════════ */
function showIntro(){
  const s=QB[state.subject];
  const timeModeHtml=state.timedMode?`<div style="margin-top:12px;padding:10px 14px;background:#fef3c7;border:1px solid #fcd34d;border-radius:8px;font-size:13px;color:#b45309"><strong>⏰ Modo cronometrado:</strong> ${s.questions.length} minutos</div>`:`<div style="margin-top:12px;padding:10px 14px;background:#f7f9fc;border-radius:8px;font-size:13px;color:var(--text-2)"><strong>⏱️ Sin límite de tiempo</strong></div>`;
  document.getElementById('introContent').innerHTML=`
    <span class="big-icon">${s.icon}</span>
    <h2>Prueba de ${s.name}</h2>
    <p>${s.desc}</p>
    <div class="info-chips">
      <span class="chip">📝 ${s.questions.length} preguntas</span>
      <span class="chip">🖼️ Imágenes reales ICFES</span>
    </div>
    <div style="margin-bottom:16px;text-align:left;background:#f7f9fc;border-radius:10px;padding:14px 18px">
      <div style="font-size:11px;font-weight:800;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Competencias evaluadas</div>
      ${s.competencias.map(c=>`<div style="font-size:13px;color:var(--text);padding:3px 0;padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--accent)">•</span>${c}</div>`).join('')}
    </div>
    ${timeModeHtml}
    <div class="actions" style="justify-content:center">
      <button class="btn btn-outline" onclick="goHomeResetTime()">← Regresar</button>
      <button class="btn btn-primary" onclick="showQuestion()">Iniciar prueba ➜</button>
    </div>`;
  goScreen('s-intro');setProgress(0);
}

function toggleFeedbackMode(){
  const toggle=document.getElementById('feedbackToggle');
  state.immediateFeedback=toggle.checked;
}

function setTimedMode(timed){
  state.timedMode=timed;
  document.getElementById('modeUntimed')?.classList.toggle('active',!timed);
  document.getElementById('modeTimed')?.classList.toggle('active',timed);
  document.getElementById('homeModeUntimed')?.classList.toggle('active',!timed);
  document.getElementById('homeModeTimed')?.classList.toggle('active',timed);
  document.getElementById('timeInfo').style.display=timed?'block':'none';
  document.getElementById('homeTimeInfo').style.display=timed?'block':'none';
  if(timed){
    const s=QB[state.subject];
    state.timeRemaining=s.questions.length*60;
    document.getElementById('timeDisplay').textContent=`${s.questions.length} minutos`;
  }
}

/* ════════════ TIMER ════════════ */
function startTimer(){
  if(!state.timedMode) return;
  stopTimer();
  updateTimerDisplay();
  state.timerInterval=setInterval(()=>{
    state.timeRemaining--;
    updateTimerDisplay();
    if(state.timeRemaining<=0){
      stopTimer();
      expireTime();
    }
  },1000);
}

function stopTimer(){
  if(state.timerInterval){
    clearInterval(state.timerInterval);
    state.timerInterval=null;
  }
}

function updateTimerDisplay(){
  const mins=Math.floor(state.timeRemaining/60);
  const secs=state.timeRemaining%60;
  const timerEl=document.getElementById('timerDisplay');
  if(timerEl){
    timerEl.innerHTML=`⏱️ <span>${mins}:${secs.toString().padStart(2,'0')}</span>`;
    timerEl.classList.toggle('timer-warning',state.timeRemaining<=60);
    timerEl.classList.toggle('timer-danger',state.timeRemaining<=30);
  }
}

function expireTime(){
  state.timeExpired=true;
  let unanswered=0;
  state.answers=state.answers.map((a,i)=>{
    if(a===null){unanswered++;return -1;}
    return a;
  });
  showResults();
}

function goHomeResetTime(){stopTimer();goScreen('s-home');}

/* ════════════ QUESTION ════════════ */
function showQuestion(){
  const q=state.questions[state.current];
  const s=QB[state.subject];
  const total=state.questions.length;
  let dots='';
  for(let i=0;i<total;i++) dots+=`<div class="step-dot ${i<state.current?'done':i===state.current?'current':''}"></div>`;
  document.getElementById('stepperDots').innerHTML=dots;
  document.getElementById('qTag').className='q-subject-tag '+s.tag;
  document.getElementById('qTag').textContent=s.name;
  document.getElementById('qNum').textContent=`Pregunta ${state.current+1} / ${total}`;
  const timerEl=document.getElementById('timerDisplay');
  if(timerEl){
    timerEl.style.display=state.timedMode?'inline-flex':'none';
  }
  if(state.current===0 && state.timedMode && !state.timerInterval){
    startTimer();
  }
  let ctxHtml='';
  if(q.contextImg){
    ctxHtml+=`<div class="q-context">`;
    ctxHtml+=`<figure class="q-figure"><img src="${getImg(q.contextImg)}" alt="${q.contextImgCaption||''}" class="q-img" loading="lazy">`;
    if(q.contextImgCaption) ctxHtml+=`<figcaption>${q.contextImgCaption}</figcaption>`;
    ctxHtml+=`</figure>`;
    if(q.context) ctxHtml+=`<div style="margin-top:10px">${q.context}</div>`;
    ctxHtml+=`</div>`;
  } else if(q.context){
    ctxHtml=`<div class="q-context">${q.context}</div>`;
  }
  document.getElementById('qContextBlock').innerHTML=ctxHtml;
  document.getElementById('qText').innerHTML=q.text;
  let qImgHtml='';
  if(q.questionImg){
    qImgHtml=`<figure class="q-figure"><img src="${getImg(q.questionImg)}" alt="${q.questionImgCaption||''}" class="q-img" loading="lazy">`;
    if(q.questionImgCaption) qImgHtml+=`<figcaption>${q.questionImgCaption}</figcaption>`;
    qImgHtml+=`</figure>`;
  }
  document.getElementById('qImgBlock').innerHTML=qImgHtml;
  let optsHtml='';
  q.opts.forEach((o,i)=>{
    const letter=['A','B','C','D'][i];
    const optImg=q.optsImg&&q.optsImg[i]?`<img src="${getImg(q.optsImg[i])}" alt="Opción ${letter}" class="opt-img" loading="lazy">`:'';
    optsHtml+=`<button class="opt" id="opt${i}" onclick="selectOpt(${i})">
      <span class="opt-letter">${letter}</span>
      <span class="opt-text">${o.replace(/^[A-D]\.\s*/,'')}</span>
      ${optImg}
    </button>`;
  });
  document.getElementById('qOpts').innerHTML=optsHtml;
  document.getElementById('feedbackBox').className='feedback';
  const metaEl=document.getElementById('fbMeta');
  if(metaEl) metaEl.style.display='none';
  document.getElementById('qActions').style.display='none';
  goScreen('s-question');
  setProgress(((state.current)/total)*80);
  window.scrollTo({top:0,behavior:'smooth'});
}

/* ════════════ CUY AVATARS ════════════ */
function hideCuyAvatars(){
  const el1=document.getElementById('cuyAvatar');
  const el2=document.getElementById('cuyAvatarLeft');
  if(el1){el1.classList.remove('show');el1.style.display='none';}
  if(el2){el2.classList.remove('show');el2.style.display='none';}
  clearTimeout(window._cuyTimer);
  clearTimeout(window._cuyWrongTimer);
}

function showCuyWrong(){
  const el=document.getElementById('cuyAvatarLeft');
  if(!el) return;
  el.classList.remove('show');
  el.style.display='block';
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    el.classList.add('show');
  }));
  clearTimeout(window._cuyWrongTimer);
  window._cuyWrongTimer=setTimeout(()=>{
    el.classList.remove('show');
    setTimeout(()=>{ el.style.display='none'; }, 700);
  }, 3500);
}

function showCuy(){
  const el=document.getElementById('cuyAvatar');
  if(!el) return;
  el.classList.remove('show');
  el.style.display='block';
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    el.classList.add('show');
  }));
  clearTimeout(window._cuyTimer);
  window._cuyTimer=setTimeout(()=>{
    el.classList.remove('show');
    setTimeout(()=>{el.style.display='none';},600);
  },3200);
}

/* ════════════ SELECT OPTION ════════════ */
function selectOpt(idx){
  if(state.answers[state.current]!==null && state.immediateFeedback) return;
  const prevAnswer=state.answers[state.current];
  state.answers[state.current]=idx;
  const q=state.questions[state.current];
  const correct=idx===q.correct;
  document.querySelectorAll('.opt').forEach((el,i)=>{
    el.disabled=true;
    if(state.immediateFeedback){
      if(i===q.correct) el.classList.add('correct');
      else if(i===idx&&!correct) el.classList.add('wrong');
    } else {
      el.classList.remove('selected');
      if(i===idx) el.classList.add('selected');
    }
  });
  if(state.immediateFeedback){
    const fb=document.getElementById('feedbackBox');
    fb.className='feedback show '+(correct?'fb-correct':'fb-wrong');
    document.getElementById('fbIcon').textContent=correct?'🎉':'🤔';
    document.getElementById('fbTitle').textContent=correct?'¡Correcto!':'Respuesta incorrecta';
    if(correct) showCuy(); else showCuyWrong();
    const letters=['A','B','C','D'];
    const origLetter = letters[q._origCorrect ?? q.correct];
    const newLetter  = letters[q.correct];
    function fixExplainLetter(text, orig, rep){
      if(orig === rep) return text;
      return text
        .replace(new RegExp(`\\(${orig}\\)`, 'g'), `(${rep})`)
        .replace(new RegExp(`\\b(opci[oó]n|respuesta|answer is|answer:|option|gr[aá]fica|Solo|solo|es la)\\s+${orig}\\b`, 'gi'),
          (_, p) => `${p} ${rep}`)
        .replace(new RegExp(`\\bthe correct answer is ${orig}\\b`, 'gi'), `The correct answer is ${rep}`)
        .replace(new RegExp(`\\b(Por tanto|Therefore|purpose is)\\s+${orig}\\b`, 'gi'),
          (_, p) => `${p} ${rep}`)
        .replace(new RegExp(`\\bSolo ${orig}\\b`, 'g'), `Solo ${rep}`)
        .replace(new RegExp(`\\bOnly ${orig}\\b`, 'g'), `Only ${rep}`);
    }
    const fixedExplain = fixExplainLetter(q.explain, origLetter, newLetter);
    document.getElementById('fbText').textContent=fixedExplain;
    const subj=state.allSubjects?state.subject:state.subject;
    const qIdx=state.current;
    const meta=META_QB[subj]?.[qIdx];
    const metaEl=document.getElementById('fbMeta');
    if(meta&&metaEl){
      const tipoHtml=meta.tipo?`<span class="meta-pill meta-tipo">${meta.tipo}</span>`:'';
      metaEl.innerHTML=`
        <div class="meta-row"><span class="meta-label">Competencia</span><span class="meta-val">${meta.comp}</span></div>
        <div class="meta-row"><span class="meta-label">Afirmación</span><span class="meta-val">${meta.afirm}</span></div>
        <div class="meta-row"><span class="meta-label">Nivel de desempeño</span><span class="meta-pill meta-nivel">Nivel ${meta.nivel}</span>${tipoHtml}</div>`;
      metaEl.style.display='block';
    }
    const metaDiv = document.getElementById('fbMeta');
    if(metaDiv){
      const compFull = q.comp || '';
      const parts = compFull.split(' · ');
      const competencia = parts[0] || '';
      const afirmacion = parts.length > 1 && !parts[1].startsWith('Tipo:') && !parts[1].startsWith('Componente:') ? parts[1] : '';
      const contenido = parts.find(p => !p.startsWith('Tipo:') && !p.startsWith('Componente:') && p !== competencia && p !== afirmacion) || '';
      const tipo = (parts.find(p => p.startsWith('Tipo:')) || '').replace('Tipo: ','');
      const componente = (parts.find(p => p.startsWith('Componente:')) || '').replace('Componente: ','');
      const nivel = q.nivel || '';
      const nivelCls = ['','meta-nivel-1','meta-nivel-2','meta-nivel-3','meta-nivel-4'][nivel] || 'meta-nivel-1';
      let compAfirm = competencia;
      if(afirmacion) compAfirm += `<br><span style="font-weight:400;color:var(--text-2);font-style:italic">${afirmacion}</span>`;
      let rows = '';
      if(compAfirm) rows += `<tr><td>📌 Competencia/Afirmación</td><td>${compAfirm}</td></tr>`;
      if(contenido && !contenido.startsWith('Tipo:') && !contenido.startsWith('Componente:')) rows += `<tr><td>📚 Contenido</td><td>${contenido}</td></tr>`;
      if(componente) rows += `<tr><td>🔖 Componente</td><td>${componente}</td></tr>`;
      if(tipo) rows += `<tr><td>📄 Tipo de texto</td><td>${tipo}</td></tr>`;
      if(nivel) rows += `<tr><td>⭐ Nivel de desempeño</td><td><span class="meta-pill meta-nivel ${nivelCls}">${nivel}</span></td></tr>`;
      metaDiv.innerHTML = rows ? `<table class="meta-table">${rows}</table>` : '';
      metaDiv.style.display = rows ? 'block' : 'none';
    }
    if(correct) launchConfetti(4);
  }
  document.getElementById('qActions').style.display='flex';
  const isLast=state.current===state.questions.length-1;
  document.getElementById('btnNext').textContent=isLast?(state.allSubjects&&state.allQueue.length>0?`Ir a ${QB[state.allQueue[0]]?.name} ➜`:'Ver resultados 📊'):'Siguiente pregunta ➜';
}

/* ════════════ NIVEL INFO ════════════ */
function showNivelInfo(nivel, subject) {
  const subjectData = NIVEL_INFO[subject];
  if (!subjectData || !nivel) return;
  const data = subjectData[nivel];
  if (!data) return;
  const [color, bg] = NIVEL_COLORS[nivel].split(',');
  const itemsHtml = data.items.length
    ? `<ul class="nivel-desc-items">${data.items.map(i=>`<li>${i}</li>`).join('')}</ul>`
    : '';
  document.getElementById('nivelSheet').innerHTML = `
    <div class="nivel-sheet-header">
      <span class="nivel-sheet-badge" style="background:${bg};color:${color}">Nivel ${nivel}</span>
      <h3>${subjectData.name}</h3>
      <button class="nivel-sheet-close" onclick="closeNivelModal()">×</button>
    </div>
    <div class="nivel-range">${data.range}</div>
    <div class="nivel-desc-summary">${data.summary}</div>
    ${itemsHtml}`;
  document.getElementById('nivelModal').classList.add('show');
}

function closeNivelModal() {
  document.getElementById('nivelModal').classList.remove('show');
}

/* ════════════ NEXT QUESTION ════════════ */
function nextQuestion(){
  if(state.immediateFeedback) hideCuyAvatars();
  if(state.current<state.questions.length-1){state.current++;showQuestion();}
  else{
    if(state.allSubjects){
      state.allAnswers[state.subject]={answers:[...state.answers],questions:[...state.questions]};
      if(state.allQueue.length>0){state.subject=state.allQueue.shift();beginSubject();return;}
    }
    showResults();
  }
}

/* ════════════ RESULTS ════════════ */
function showResults(){
  stopTimer();
  setProgress(100);
  let subjects=[];
  if(state.allSubjects){
    state.allAnswers[state.subject]={answers:[...state.answers],questions:[...state.questions]};
    Object.entries(state.allAnswers).forEach(([k,d])=>subjects.push({key:k,answers:d.answers,questions:d.questions}));
  } else {
    subjects.push({key:state.subject,answers:state.answers,questions:state.questions});
  }
  let totalCorrect=0,totalQ=0;
  const sc=subjects.map(({key,answers,questions})=>{
    let correct=answers.filter((a,i)=>a===questions[i].correct).length;
    totalCorrect+=correct;totalQ+=questions.length;
    const pct=Math.round((correct/questions.length)*100);
    const nivel=getNivel(pct,key);
    return{key,correct,total:questions.length,pct,nivel,answers};
  });
  const globalPct=Math.round((totalCorrect/totalQ)*100);
  const globalPts=subjects.length>1?Math.round(globalPct*5):globalPct;
  const isSingleSubject=subjects.length===1;
  const mainSubject=isSingleSubject?subjects[0].key:(subjects.some(s=>s.key==='ing')?'ing':'lc');
  const globalNivel=getNivel(globalPct,mainSubject);
  const scoreClass='gs-lv'+globalNivel;
  const formatTime=(secs)=>{const m=Math.floor(secs/60);const s=secs%60;return`${m}:${s.toString().padStart(2,'0')}`;};
  const totalTime=state.allSubjects?state.allQueue.reduce((acc,key)=>acc+QB[key].questions.length*60,0)+subjects[0].questions.length*60:subjects[0].questions.length*60;
  const timeUsed=state.timedMode?totalTime-state.timeRemaining:null;
  const lvText={4:{label:'Nivel 4',cls:'lv4',desc:'Reflexiona, evalúa y argumenta con alto nivel crítico.'},
    3:{label:'Nivel 3',cls:'lv3',desc:'Interpreta, infiere y relaciona información con solidez.'},
    2:{label:'Nivel 2',cls:'lv2',desc:'Identifica y comprende información básica.'},
    1:{label:'Nivel 1',cls:'lv1',desc:'Nivel inicial: reconoce información explícita.'}};
  const lvTextIng={
    4:{label:'B+',cls:'lv4',desc:'El estudiante promedio clasificado en este nivel supera las preguntas de mayor complejidad de la prueba.'},
    3:{label:'B1',cls:'lv3',desc:'El estudiante es capaz de comprender los puntos principales de textos claros y en lengua estándar si tratan sobre cuestiones que le son conocidas, ya sea en situaciones de trabajo, de estudio o de ocio.'},
    2:{label:'A2',cls:'lv2',desc:'El estudiante es capaz de comprender frases y expresiones de uso frecuente relacionadas con áreas de experiencia que le son especialmente relevantes.'},
    1:{label:'A1',cls:'lv1',desc:'El estudiante es capaz de comprender y utilizar expresiones cotidianas de uso muy frecuente, así como frases sencillas destinadas a satisfacer necesidades inmediatas.'},
    0:{label:'A−',cls:'lv0',desc:'El estudiante promedio clasificado en este nivel no supera las preguntas de menor complejidad de la prueba.'}
  };
  const sc_colors={lc:'#6c4bc0',mat:'#1a3a5c',soc:'#e8a020',cn:'#2a9d5c',ing:'#d94040'};

  let html=`<div class="result-header">
    <div style="font-size:11px;font-weight:800;letter-spacing:1px;text-transform:uppercase;opacity:.7;margin-bottom:8px">Reporte de Resultados · SABER 11°</div>
    <h2>${state.timeExpired?'¡Tiempo agotado!':'¡Simulacro completado!'}</h2>
    ${state.timeExpired?'<p style="color:#dc2626;margin-bottom:8px">El tiempo se agotó antes de responder todas las preguntas</p>':''}
    <p>Secretaría de Educación Departamental de Nariño</p>
    <div class="global-score ${scoreClass}">
      <div class="global-score-badge">🏆</div>
      <span class="pts">${subjects.length>1?globalPts+'/500':globalPct+'/100'}</span>
      <span class="pts-label">${subjects.length>1?'Puntaje global':'Puntaje'}</span>
    </div>
    ${timeUsed!==null?`<div style="margin-top:12px;font-size:13px;color:rgba(255,255,255,.8)">⏱️ Tiempo utilizado: ${formatTime(timeUsed)} de ${formatTime(totalTime)}</div>`:''}
  </div>
  <div class="card">
    <div style="font-size:12px;font-weight:800;color:var(--muted);letter-spacing:1px;text-transform:uppercase;margin-bottom:16px">Resultados por prueba</div>
    <table class="score-table"><thead><tr><th>Prueba</th><th>Puntaje</th><th>Progreso</th><th>Nivel</th></tr></thead><tbody>
    ${sc.map(s=>`<tr>
      <td><strong style="font-size:13px">${QB[s.key].icon} ${QB[s.key].name}</strong><br><span style="font-size:11px;color:var(--muted)">${s.correct}/${s.total} correctas</span></td>
      <td><span style="font-family:'Space Mono';font-size:18px;font-weight:700;color:${sc_colors[s.key]}">${s.pct}</span></td>
      <td style="width:100px"><div class="score-bar-wrap"><div class="score-bar" style="width:${s.pct}%;background:${sc_colors[s.key]}"></div></div></td>
      <td><span class="level-pill ${(s.key==='ing'?lvTextIng:lvText)[s.nivel].cls}">${(s.key==='ing'?lvTextIng:lvText)[s.nivel].label}</span></td>
    </tr>`).join('')}
    </tbody></table></div>`;

  html+=`<div class="review-section">
    <div class="review-header">
      <h3>Revisión de respuestas</h3>
      <p>Analiza cada pregunta para aprender de tus errores</p>
    </div>`;
  sc.forEach(({key,nivel,pct})=>{
    const subj=QB[key];
    const isIng=key==='ing';
    const lv=(isIng?lvTextIng:lvText)[nivel];
    const subjData=subjects.find(s=>s.key===key);
    html+=`<div class="review-subject">
      ${subjects.length>1?`<div class="review-subject-name"><span>${subj.icon}</span> ${subj.name}</div>`:''}
      ${(()=>{const nd=NIVEL_INFO[key]?.[nivel];if(!nd)return'';const items=nd.items.length?`<ul class="nivel-items-list">${nd.items.map(i=>`<li>${i}</li>`).join('')}</ul>`:'';return`<div class="review-nivel-detail ${lv.cls}">
        <div class="nivel-detail-header">
          <span class="nivel-detail-badge ${lv.cls}">${lv.label}</span>
          <span class="nivel-detail-range">${nd.range}</span>
        </div>
        <p class="nivel-detail-summary">${nd.summary}</p>
        ${items}
      </div>`;})()}
      ${subjData.questions.map((q,i)=>{
        const userAns=state.allSubjects?state.allAnswers[key]?.answers[i]:state.answers[i];
        const correct=userAns===q.correct;
        const letters=['A','B','C','D'];
        const origLetter = letters[q._origCorrect ?? q.correct];
        const newLetter  = letters[q.correct];
        function fixExplainLetter(text, orig, rep){
          if(orig === rep) return text;
          return text
            .replace(new RegExp(`\\(${orig}\\)`, 'g'), `(${rep})`)
            .replace(new RegExp(`\\b(opci[oó]n|respuesta|answer is|answer:|option|gr[aá]fica|Solo|solo|es la)\\s+${orig}\\b`, 'gi'),(_, p) => `${p} ${rep}`)
            .replace(new RegExp(`\\bthe correct answer is ${orig}\\b`, 'gi'), `The correct answer is ${rep}`)
            .replace(new RegExp(`\\b(Por tanto|Therefore|purpose is)\\s+${orig}\\b`, 'gi'),(_, p) => `${p} ${rep}`)
            .replace(new RegExp(`\\bSolo ${orig}\\b`, 'g'), `Solo ${rep}`)
            .replace(new RegExp(`\\bOnly ${orig}\\b`, 'g'), `Only ${rep}`);
        }
        const fixedExplain = fixExplainLetter(q.explain, origLetter, newLetter);
        return `<div class="review-card ${correct?'review-correct':'review-wrong'}">
          <div class="review-card-header">
            <span class="review-q-num">${i+1}</span>
            <span class="review-status ${correct?'status-correct':'status-wrong'}">${correct?'Correcto':'Incorrecto'}</span>
          </div>
          ${q.context?'<div class="review-context">'+q.context+'</div>':''}
          ${q.contextImg?'<div class="review-img"><img src="'+getImg(q.contextImg)+'" alt="Imagen de contexto" loading="lazy"></div>':''}
          <div class="review-question">${q.text||''}</div>
          ${q.img?'<div class="review-img"><img src="'+getImg(q.img)+'" alt="Imagen de la pregunta" loading="lazy"></div>':''}
          <div class="review-answers">
            ${correct?`
            <div class="review-answer answer-correct">
              <span class="answer-label">Respuesta correcta</span>
              <span class="answer-text">${q.opts[q.correct]?.replace(/^[A-D]\.\s*/,'') || ''}</span>
              ${q.optsImg&&q.optsImg[q.correct]?'<img src="'+getImg(q.optsImg[q.correct])+'" class="review-opt-img" alt="Imagen respuesta">':''}
            </div>`:`
            <div class="review-answer answer-wrong">
              <span class="answer-label">Tu respuesta</span>
              <span class="answer-text">${q.opts[userAns]?.replace(/^[A-D]\.\s*/,'') || '<em>Sin responder</em>'}</span>
              ${q.optsImg&&userAns!==null&&q.optsImg[userAns]?'<img src="'+getImg(q.optsImg[userAns])+'" class="review-opt-img" alt="Tu respuesta">':''}
            </div>
            <div class="review-answer answer-correct">
              <span class="answer-label">Respuesta correcta</span>
              <span class="answer-text">${q.opts[q.correct]?.replace(/^[A-D]\.\s*/,'') || ''}</span>
              ${q.optsImg&&q.optsImg[q.correct]?'<img src="'+getImg(q.optsImg[q.correct])+'" class="review-opt-img" alt="Imagen respuesta">':''}
            </div>`}
          </div>
          ${fixedExplain?'<div class="review-explain"><span class="explain-icon">💡</span><span>'+fixedExplain+'</span></div>':''}
        </div>`;
      }).join('')}
    </div>`;
  });
  html+=`</div>`;

  html+=`<div class="card" style="text-align:center">
    <div style="font-size:14px;font-weight:700;margin-bottom:16px">¿Quieres seguir practicando?</div>
    <div class="actions" style="justify-content:center">
      <button class="btn btn-primary" onclick="restartSame()">🔄 Repetir asignatura</button>
      <a class="btn btn-outline" href="../index.html">🏠 Volver al portal</a>
    </div></div>`;

  document.getElementById('resultsContent').innerHTML=html;
  goScreen('s-results');
  window.scrollTo({top:0,behavior:'smooth'});
  if(globalPct>=60) launchConfetti(20);
}

/* ════════════ UTILS ════════════ */
function goScreen(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');}
function setProgress(pct){document.getElementById('progFill').style.width=pct+'%';}
function restartSame(){state.allSubjects=false;beginSubject();}
function confirmBack(){
  document.getElementById('modalBack').classList.add('show');
}
function closeModal(){
  document.getElementById('modalBack').classList.remove('show');
}
function goHome(){
  closeModal();
  state={subject:null,questions:[],current:0,answers:[],hintsUsed:0,allSubjects:false,allQueue:[],allAnswers:{},immediateFeedback:true};
  document.querySelectorAll('.subj-card').forEach(c=>c.classList.remove('active-subj'));
  document.getElementById('btnStart').disabled=true;
  goScreen('s-home');setProgress(0);
}
function launchConfetti(n){
  const colors=['#e8a020','#1a3a5c','#2a9d5c','#6c4bc0','#d94040','#f0c050'];
  for(let i=0;i<n;i++){
    const el=document.createElement('div');el.className='confetti-piece';
    el.style.cssText=`left:${20+Math.random()*60}vw;top:20vh;width:${6+Math.random()*6}px;height:${6+Math.random()*6}px;background:${colors[Math.floor(Math.random()*colors.length)]};border-radius:${Math.random()>.5?'50%':'2px'};animation-duration:${1.5+Math.random()*2}s;animation-delay:${Math.random()*.4}s;`;
    document.body.appendChild(el);setTimeout(()=>el.remove(),3000);
  }
}

/* ════════════ INIT ════════════ */
window.addEventListener('DOMContentLoaded', function() {
  configureSimulacro();
  
  if (typeof QUESTIONS !== 'undefined') {
    detectActiveSubjects();
    renderSubjects();
    
    const simulacroQuestions = QUESTIONS.filter(q => q.simulacros && q.simulacros.includes(SIMULACRO_ID));
    if (simulacroQuestions.length > 0) {
      ACTIVE_SUBJECTS.forEach(subj => {
        const subjQuestions = simulacroQuestions.filter(q => q.subject === subj);
        if (subjQuestions.length > 0) {
          QB[subj] = { ...SUBJ_INFO[subj], questions: subjQuestions };
        }
      });
      console.log('QB actualizado con preguntas para simulacro', SIMULACRO_ID, '- Materias:', ACTIVE_SUBJECTS);
    }
  } else {
    detectActiveSubjects();
    renderSubjects();
  }
});

/* ════════════ IMAGES ════════════ */
const IMGS = {};
function getImg(key) {
  if (IMGS[key]) return IMGS[key];
  return `../shared/img/questions/${key}.png`;
}

if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
