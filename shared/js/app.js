// ════════════ SHARED EXAM APP LOGIC ════════════

// Ensure QUESTIONS is loaded before this file

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

// Initialize exam for a specific simulacro
function initExam(simulacroId) {
  state.simulacroId = simulacroId;
  state.subject = null;
  state.questions = [];
  state.current = 0;
  state.answers = [];
  state.hintsUsed = 0;
  state.allSubjects = false;
  state.allQueue = [];
  state.allAnswers = {};
  
  showScreen('home');
}

// Start exam for a specific subject
function startSubject(subjectKey) {
  if (!state.simulacroId) return;
  
  const subjectQuestions = getQuestionsForSimulacro(state.simulacroId)
    .filter(q => q.subject === subjectKey);
  
  if (subjectQuestions.length === 0) {
    alert('No hay preguntas para esta materia');
    return;
  }
  
  state.subject = subjectKey;
  state.questions = shuffleArray([...subjectQuestions]);
  state.current = 0;
  state.answers = new Array(state.questions.length).fill(null);
  state.hintsUsed = 0;
  
  showScreen('exam');
  renderQuestion();
  startTimer();
}

// Shuffle function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Get questions for simulacro
function getQuestionsForSimulacro(simulacroId) {
  if (typeof QUESTIONS === 'undefined') {
    console.error('QUESTIONS not loaded. Make sure questions.js is included.');
    return [];
  }
  return QUESTIONS.filter(q => q.simulacros.includes(simulacroId));
}

// Render current question
function renderQuestion() {
  const q = state.questions[state.current];
  if (!q) return;
  
  const container = document.getElementById('questionContainer');
  if (!container) return;
  
  const subject = SUBJ_INFO[q.subject];
  
  // Build question HTML
  let html = `
    <div class="q-meta">
      <span class="q-subject-tag tag-${q.subject}">${subject.tag}</span>
      <span class="q-num">Pregunta ${state.current + 1} de ${state.questions.length}</span>
    </div>
    <div class="prog-wrap">
      <div class="prog-fill" style="width:${((state.current + 1) / state.questions.length) * 100}%"></div>
    </div>
  `;
  
  // Context
  if (q.context) {
    html += `<div class="q-context">${q.context}</div>`;
  }
  
  // Context image
  if (q.contextImg) {
    const imgPath = `../shared/img/${q.contextImg}.png`;
    html += `<div class="img-block"><img class="q-img-half" src="${imgPath}" alt=""></div>`;
    if (q.contextImgCaption) {
      html += `<p class="q-figure figcaption">${q.contextImgCaption}</p>`;
    }
  }
  
  // Question text
  html += `<div class="q-text">${q.text}</div>`;
  
  // Question image
  if (q.questionImg) {
    const imgPath = `../shared/img/${q.questionImg}.png`;
    html += `<div class="img-block"><img class="q-img" src="${imgPath}" alt=""></div>`;
    if (q.questionImgCaption) {
      html += `<p class="q-figure figcaption">${q.questionImgCaption}</p>`;
    }
  }
  
  // Options
  html += `<div class="opts">`;
  q.opts.forEach((opt, idx) => {
    const selected = state.answers[state.current] === idx;
    html += `
      <button class="opt ${selected ? 'selected' : ''}" data-index="${idx}" onclick="selectOption(${idx})">
        <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
        <span>${opt}</span>
      </button>
    `;
  });
  html += `</div>`;
  
  // Actions
  html += `
    <div class="actions">
      <button class="btn btn-outline" onclick="showHint()" ${state.hintsUsed >= 2 ? 'disabled' : ''}>
        💡 Pista (${2 - state.hintsUsed})
      </button>
      <button class="btn btn-primary" id="btnNext" onclick="nextQuestion()" disabled>
        ${state.current === state.questions.length - 1 ? 'Finalizar' : 'Siguiente'} →
      </button>
    </div>
  `;
  
  // Feedback container
  html += `
    <div class="feedback" id="feedback">
      <span class="fb-icon"></span>
      <div class="fb-content">
        <h3></h3>
        <p></p>
      </div>
    </div>
  `;
  
  container.innerHTML = html;
  
  // Update review dots
  updateReviewDots();
}

// Select option
function selectOption(idx) {
  if (state.timeExpired) return;
  
  const prevAnswer = state.answers[state.current];
  state.answers[state.current] = idx;
  
  // Update UI
  document.querySelectorAll('.opt').forEach((el, i) => {
    el.classList.toggle('selected', i === idx);
  });
  
  document.getElementById('btnNext').disabled = false;
  
  // Show feedback if immediate mode
  if (state.immediateFeedback) {
    showFeedback(idx);
  }
}

// Show feedback
function showFeedback(selectedIdx) {
  const q = state.questions[state.current];
  const feedback = document.getElementById('feedback');
  const isCorrect = selectedIdx === q.correct;
  
  feedback.className = `feedback show ${isCorrect ? 'fb-correct' : 'fb-wrong'}`;
  feedback.querySelector('.fb-icon').textContent = isCorrect ? '✓' : '✗';
  feedback.querySelector('h3').textContent = isCorrect ? '¡Correcto!' : 'Incorrecto';
  feedback.querySelector('p').textContent = q.explain;
  
  // Disable all options
  document.querySelectorAll('.opt').forEach((el, i) => {
    el.classList.add('disabled');
    if (i === q.correct) {
      el.classList.add('correct');
    } else if (i === selectedIdx && !isCorrect) {
      el.classList.add('wrong');
    }
  });
}

// Show hint
function showHint() {
  if (state.hintsUsed >= 2) return;
  
  const q = state.questions[state.current];
  state.hintsUsed++;
  
  const feedback = document.getElementById('feedback') || createFeedback();
  feedback.className = 'feedback show';
  feedback.querySelector('.fb-icon').textContent = '💡';
  feedback.querySelector('h3').textContent = 'Pista';
  feedback.querySelector('p').textContent = q.hint;
  
  // Update button
  const hintBtn = document.querySelector('.btn-outline');
  if (hintBtn) hintBtn.textContent = `💡 Pista (${2 - state.hintsUsed})`;
}

function createFeedback() {
  const div = document.createElement('div');
  div.id = 'feedback';
  div.innerHTML = `
    <span class="fb-icon"></span>
    <div class="fb-content">
      <h3></h3>
      <p></p>
    </div>
  `;
  document.querySelector('.card').appendChild(div);
  return div;
}

// Next question
function nextQuestion() {
  if (state.current < state.questions.length - 1) {
    state.current++;
    renderQuestion();
  } else {
    finishSubject();
  }
}

// Finish subject
function finishSubject() {
  stopTimer();
  
  if (state.allSubjects) {
    // Save and continue to next subject
    state.allAnswers[state.subject] = {
      answers: [...state.answers],
      questions: [...state.questions]
    };
    
    if (state.allQueue.length > 0) {
      const nextSubject = state.allQueue.shift();
      startSubject(nextSubject);
    } else {
      showResults();
    }
  } else {
    showResults();
  }
}

// Show results
function showResults() {
  showScreen('results');
  calculateScores();
}

// Calculate scores
function calculateScores() {
  const scores = {};
  const subjectKeys = state.allAnswers ? Object.keys(state.allAnswers) : [state.subject];
  
  subjectKeys.forEach(subj => {
    const data = state.allAnswers ? state.allAnswers[subj] : { answers: state.answers, questions: state.questions };
    const correct = data.answers.filter((a, i) => a === data.questions[i].correct).length;
    const total = data.questions.length;
    const percent = Math.round((correct / total) * 100);
    const nivel = getNivel(percent, subj);
    
    scores[subj] = { correct, total, percent, nivel };
  });
  
  renderScores(scores);
}

// Render scores
function renderScores(scores) {
  const container = document.getElementById('scoresContainer');
  if (!container) return;
  
  let html = '<div class="scores-grid">';
  
  Object.entries(scores).forEach(([subj, data]) => {
    const subject = SUBJ_INFO[subj];
    html += `
      <div class="score-card">
        <div class="score-subj" style="color:${subject.color}">${subject.name}</div>
        <div class="score-value">${data.percent}%</div>
        <div class="score-level lv${data.nivel}">Nivel ${data.nivel}</div>
        <div style="font-size:12px;color:var(--text-2);margin-top:4px">
          ${data.correct}/${data.total} correctas
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  
  container.innerHTML = html;
}

// Timer functions
function startTimer() {
  if (!state.timedMode) return;
  
  // Default 3 hours for full exam, 1.5 for single subject
  const minutes = state.allSubjects ? 180 : 90;
  state.timeRemaining = minutes * 60;
  
  state.timerInterval = setInterval(() => {
    state.timeRemaining--;
    updateTimerDisplay();
    
    if (state.timeRemaining <= 0) {
      state.timeExpired = true;
      stopTimer();
      finishSubject();
    }
  }, 1000);
  
  updateTimerDisplay();
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function updateTimerDisplay() {
  const display = document.getElementById('timerDisplay');
  if (!display) return;
  
  const mins = Math.floor(state.timeRemaining / 60);
  const secs = state.timeRemaining % 60;
  display.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
  
  display.classList.remove('timer-warning', 'timer-danger');
  if (state.timeRemaining < 300) {
    display.classList.add('timer-danger');
  } else if (state.timeRemaining < 600) {
    display.classList.add('timer-warning');
  }
}

// Update review dots
function updateReviewDots() {
  const container = document.getElementById('reviewDots');
  if (!container) return;
  
  let html = '<div class="stepper">';
  state.questions.forEach((_, i) => {
    let cls = 'step-dot';
    if (state.answers[i] !== null) cls += ' done';
    if (i === state.current) cls += ' current';
    html += `<div class="${cls}" onclick="goToQuestion(${i})"></div>`;
  });
  html += '</div>';
  
  container.innerHTML = html;
}

// Go to question
function goToQuestion(idx) {
  state.current = idx;
  renderQuestion();
}

// Show screen
function showScreen(screenName) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const screen = document.getElementById(screenName + 'Screen');
  if (screen) screen.classList.add('active');
}

// Toggle feedback mode
function toggleFeedbackMode() {
  state.immediateFeedback = !state.immediateFeedback;
  localStorage.setItem('immediateFeedback', state.immediateFeedback);
}

// Toggle timer
function toggleTimer() {
  state.timedMode = !state.timedMode;
  if (state.timedMode && state.questions.length > 0 && !state.timerInterval) {
    startTimer();
  } else if (!state.timedMode) {
    stopTimer();
  }
  localStorage.setItem('timedMode', state.timedMode);
}

// Initialize settings from localStorage
function initSettings() {
  state.immediateFeedback = localStorage.getItem('immediateFeedback') === 'true';
  state.timedMode = localStorage.getItem('timedMode') !== 'false';
}

// Start full exam
function startFullExam() {
  if (!state.simulacroId) return;
  
  const simulacro = SIMULACROS[state.simulacroId];
  if (!simulacro) return;
  
  state.allSubjects = true;
  state.allQueue = [...simulacro.subjects];
  state.allAnswers = {};
  
  const firstSubject = state.allQueue.shift();
  startSubject(firstSubject);
}

// Initialize app for a specific simulacro
function initApp(simulacroId) {
  state.simulacroId = simulacroId;
  state.immediateFeedback = localStorage.getItem('immediateFeedback') === 'true';
  state.timedMode = localStorage.getItem('timedMode') !== 'false';
  
  console.log('App initialized for simulacro', simulacroId);
  
  // Render home screen with subjects
  renderHomeScreen();
}

// Render home screen with subjects
function renderHomeScreen() {
  const container = document.getElementById('subjectGrid');
  if (!container) return;
  
  const subjects = typeof getSimulacroSubjects === 'function' 
    ? getSimulacroSubjects(state.simulacroId) 
    : [];
  
  let html = '';
  subjects.forEach(subj => {
    const subjKey = subj.key;
    const qCount = QB[subjKey] ? QB[subjKey].questions.length : 0;
    html += `
      <div class="subj-card s-${subjKey}" data-subject="${subjKey}" onclick="selectSubject('${subjKey}')">
        <span class="subj-icon">${subj.icon}</span>
        <div class="subj-name">${subj.name}</div>
        <div class="subj-count">${qCount} preguntas</div>
      </div>
    `;
  });
  container.innerHTML = html;
}
