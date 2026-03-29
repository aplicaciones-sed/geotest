# Arquitectura del Proyecto SABER 11 PWA

## 1. Visión General del Proyecto

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         SABER 11 SIMULADOR PWA                         │
│                    Secretaría de Educación Nariño                       │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌──────────────┐    ┌──────────────────────────────┐               │
│  │   PORTAL    │    │         SIMULACRO             │               │
│  │  (index)    │    │   (Unificado con URL params)  │               │
│  └──────┬───────┘    │  ?simulacro=1 → Full exam    │               │
│         │             │  ?simulacro=2 → Math + Read  │               │
│         └─────────────┴──────────────┬───────────────┘               │
│                                     │                                  │
│                    ┌────────────────┴────────────────┐                 │
│                    │    SHARED RESOURCES            │                 │
│                    │  ┌────────────────────────┐   │                 │
│                    │  │  CSS (exam.css)         │   │                 │
│                    │  │  JS (app.js, nivel.js,  │   │                 │
│                    │  │        exam.js, meta.js) │   │                 │
│                    │  └────────────────────────┘   │                 │
│                    └─────────────────────────────────┘                 │
│                                     │                                  │
│                    ┌────────────────┴────────────────┐                 │
│                    │    CENTRALIZED DATA            │                 │
│                    │  ┌────────────────────────┐     │                 │
│                    │  │  questions.js (78 Q)   │     │                 │
│                    │  └────────────────────────┘     │                 │
│                    └─────────────────────────────────┘                 │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Estructura de Archivos

```
geotest/
├── index.html                    # Portal principal
│
├── sw.js                        # Service Worker PWA (portal)
├── manifest.json               # Manifiesto PWA (portal)
│
├── js/
│   ├── portal.js               # Lógica del portal
│   ├── questions.js            # Banco de preguntas centralizado (78 preguntas)
│   └── simulacros.js          # Configuración de simulacros
│
├── shared/
│   ├── css/
│   │   └── exam.css            # CSS compartido
│   │
│   └── js/
│       ├── app.js              # Definición de state
│       ├── nivel.js            # NIVEL_INFO, getNivel()
│       ├── meta.js             # META_QB (metadatos de preguntas)
│       └── exam.js             # Funciones compartidas
│
├── simulacro/                  # Simulacro unificado
│   ├── index.html              # Detecta ?simulacro=1 o =2
│   ├── manifest.json
│   └── sw.js
│
└── assets/
    ├── img/
    │   ├── logo.svg           # Logo SED Nariño
    │   ├── icon-192.png       # Icono PWA
    │   ├── icon-512.png       # Icono PWA
    │   ├── icon-escudo.svg    # Escudo SVG
    │   ├── cuy_correcto_ok.png
    │   └── cuy_incorrecto_ok.png
    │
    └── docs/                  # PDFs de referencia
```

---

## 3. Configuración de Simulacros

```javascript
// js/simulacros.js
const SIMULACROS = {
  1: {
    id: 1,
    nombre: "Simulacro 1",
    titulo: "Simulador SABER 11°",
    descripcion: "Examen completo - Todas las materias",
    shortName: "SABER 11",
    cacheName: "simulacro-v1",
    subjects: ['lc', 'mat', 'soc', 'cn', 'ing']  // 5 materias
  },
  2: {
    id: 2,
    nombre: "Simulacro 2",
    titulo: "SABER 11° · Simulacro 2020",
    descripcion: "Matemáticas y Lectura Crítica",
    shortName: "Sim 2020",
    cacheName: "simulacro-v1",
    subjects: ['mat', 'lc']  // Solo 2 materias
  }
};
```

### URL Configuration:
- `simulacro/index.html?simulacro=1` → Simulacro completo (5 materias)
- `simulacro/index.html?simulacro=2` → Simulacro 2020 (2 materias)

---

## 4. Diagrama de Carga de Scripts

### Orden de carga en simulacro/index.html:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        HEAD SECTION                                    │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  1. CSS                                                                 │
│     ┌──────────────────────────────────────────────────────────────┐    │
│     │ <link rel="stylesheet" href="../shared/css/exam.css">      │    │
│     └──────────────────────────────────────────────────────────────┘    │
│                                    │                                    │
│  2. JavaScript (carga secuencial)                                     │
│     ┌──────────────────────────────────────────────────────────────┐    │
│     │ <script src="../js/simulacros.js"></script>                │    │
│     │ <script src="../js/questions.js"></script>                 │    │
│     │ <script src="../shared/js/nivel.js"></script>               │    │
│     │ <script src="../shared/js/meta.js"></script>                │    │
│     │ <script src="../shared/js/app.js"></script>                 │    │
│     │ <script src="../shared/js/exam.js"></script>                │    │
│     └──────────────────────────────────────────────────────────────┘    │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Lógica de inicialización en simulacro/index.html:

```javascript
// Detectar simulacro desde URL
function getSimulacroFromURL() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('simulacro'), 10);
  return (id === 1 || id === 2) ? id : 1;
}

// Configurar según simulacro
function configureSimulacro() {
  SIMULACRO_ID = getSimulacroFromURL();
  SIMULACRO_CONFIG = SIMULACROS[SIMULACRO_ID];
  
  ACTIVE_SUBJECTS = SIMULACRO_ID === 1 
    ? ['lc', 'mat', 'soc', 'cn', 'ing']
    : ['mat', 'lc'];
  
  // Actualizar UI dinámicamente
  renderSubjects();
}
```

---

## 5. Flujo de Datos del Examen

```
┌─────────────────────────────────────────────────────────────────────────┐
│                      FLUJO DEL EXAMEN                                   │
└─────────────────────────────────────────────────────────────────────────┘

    ┌─────────────┐
    │  USUARIO   │
    │  ABRE APP  │
    └──────┬──────┘
           │
           ▼
┌─────────────────────────────────────────────────────────────────────────┐
│ 1. INICIALIZACIÓN                                                     │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   DOMContentLoaded                                                     │
│        │                                                                │
│        ▼                                                                │
│   configureSimulacro() → Detecta ?simulacro=N                           │
│        │                                                                │
│        ▼                                                                │
│   QUESTIONS.filter(q => q.simulacros.includes(SIMULACRO_ID))           │
│        │                                                                │
│        ▼                                                                │
│   QB = { lc: { questions: [...] }, mat: {...}, ... }                  │
│        │                                                                │
│        ▼                                                                │
│   renderSubjects() → Renderiza tarjetas de materias según simulacro     │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────────────────────────┐
│ 2. SELECCIÓN DE MATERIA                                               │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   selectSubject(key)                                                    │
│        │                                                                │
│        ▼                                                                │
│   state.subject = key                                                   │
│   renderHomeScreen()                                                    │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────────────────────────┐
│ 3. PRUEBA (BUCLE)                                                     │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   showQuestion()                                                        │
│        ├──► Mostrar contexto                                            │
│        ├──► shuffleOpts() → Mezclar opciones                            │
│        └──► selectOpt(idx) → Procesar respuesta                        │
│                                                                          │
│   nextQuestion() → Repite hasta última pregunta                        │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────────────────────────┐
│ 4. RESULTADOS                                                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   showResults() → Calcular scores y mostrar resultados                  │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Estructura del Estado (State)

```javascript
// Definido en shared/js/app.js
let state = {
  simulacroId: null,        // 1 o 2
  subject: null,            // 'lc', 'mat', 'soc', 'cn', 'ing'
  questions: [],            // Preguntas mezcladas
  current: 0,              // Índice de pregunta actual
  answers: [],              // Respuestas del usuario
  hintsUsed: 0,            // Pistas usadas
  allSubjects: false,      // Modo examen completo
  allQueue: [],            // Cola de materias (full exam)
  allAnswers: {},          // Respuestas de todas las materias
  immediateFeedback: true, // Feedback inmediato
  timedMode: true,         // Modo cronometrado
  timeRemaining: 0,        // Segundos restantes
  timerInterval: null,     // Referencia del interval
  timeExpired: false       // Tiempo agotado
};
```

---

## 7. Banco de Preguntas (questions.js)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                  STRUCTURA DE PREGUNTAS                                 │
└─────────────────────────────────────────────────────────────────────────┘

const QUESTIONS = [
  {
    id: 101,                      // ID único
    simulacros: [1],              // [1] = Simulacro 1, [2] = Simulacro 2
    subject: 'lc',               // Materia: lc, mat, soc, cn, ing
    
    // Contexto (opcional)
    context: '...',               // Texto de contexto HTML
    contextImg: 'img_key',       // Clave de imagen Base64
    
    // Pregunta
    text: '¿Cuál es la respuesta?',
    
    // Opciones
    opts: ['A) Opción', 'B) Opción', 'C) Opción', 'D) Opción'],
    correct: 0,                 // Índice de respuesta correcta (0-3)
    
    // Feedback
    hint: 'Pista para la pregunta',
    explain: 'Explicación de la respuesta',
    
    // Metadatos
    comp: 'Competencia evaluada',
    nivel: 1-4                 // Nivel de dificultad
  },
  // ... más preguntas
];
```

### Distribución de preguntas:

| Simulacro | LC  | MAT | SOC | CN  | ING | Total |
|-----------|-----|-----|-----|-----|-----|-------|
| 1         | 6   | 9   | 9   | 10  | 4   | 38    |
| 2         | 20  | 20  | -   | -   | -   | 40    |
| **Total** | 26  | 29  | 9   | 10  | 4   | **78** |

---

## 8. CSS Compartido (exam.css)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    ESTRUCTURA CSS (exam.css)                            │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ 1. VARIABLES (:root)                                                   │
│    ├── Colores: --primary, --accent, --green, --red                   │
│    ├── Backgrounds: --bg, --surface                                     │
│    ├── Texto: --text, --text-2, --text-3                               │
│    └── Bordes: --border, --r (border-radius)                           │
│                                                                          │
│ 2. LAYOUT                                                              │
│    ├── .top-bar, .top-inner (navbar)                                  │
│    ├── .container, .card (contenedores)                                │
│    └── .screen (pantallas: s-home, s-intro, s-question, s-results)    │
│                                                                          │
│ 3. COMPONENTES                                                          │
│    ├── .subj-card (tarjetas de materia)                                │
│    ├── .btn, .btn-primary, .btn-outline                                │
│    ├── .opt (opciones de respuesta)                                    │
│    ├── .feedback (retroalimentación)                                    │
│    └── .score-bar, .level-pill (resultados)                            │
│                                                                          │
│ 4. UTILIDADES                                                           │
│    ├── .active, .show (estados)                                        │
│    ├── .timer-warning, .timer-danger (timer)                           │
│    └── Animaciones y transiciones                                       │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 9. Funciones Principales (exam.js)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    FUNCIONES POR MÓDULO                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ SHUFFLE                                                                 │
│   shuffleOpts(q) ──────────► Mezcla opciones preservando respuesta     │
│                                                                          │
│ HOME                                                                    │
│   selectSubject(key) ──────► Selecciona materia                        │
│   startQuiz() ─────────────► Inicia quiz individual                    │
│   startAllSubjects() ───────► Inicia examen completo                    │
│   beginSubject() ──────────► Prepara preguntas de materia               │
│                                                                          │
│ INTRO                                                                   │
│   showIntro() ────────────► Muestra pantalla de inicio                │
│   setTimedMode(timed) ────► Alterna modo cronometrado                 │
│                                                                          │
│ TIMER                                                                   │
│   startTimer() ───────────► Inicia contador                            │
│   stopTimer() ────────────► Detiene contador                           │
│   updateTimerDisplay() ────► Actualiza mostrar timer                   │
│   expireTime() ────────────► Maneja tiempo agotado                      │
│                                                                          │
│ QUESTION                                                                │
│   showQuestion() ──────────► Renderiza pregunta actual                 │
│   selectOpt(idx) ───────────► Procesa selección de opción               │
│   nextQuestion() ───────────► Avanza a siguiente pregunta               │
│                                                                          │
│ RESULTS                                                                 │
│   showResults() ───────────► Genera y muestra resultados                │
│   showNivelInfo(nivel, s) ─► Muestra info de nivel (modal)            │
│                                                                          │
│ UTILS                                                                   │
│   goScreen(id) ────────────► Cambia pantalla activa                     │
│   setProgress(pct) ────────► Actualiza barra de progreso               │
│   launchConfetti(n) ───────► Efecto confeti                            │
│   goHome() ─────────────────► Resetea al inicio                        │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 10. PWA y Service Worker

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    PWA SERVICE WORKER                                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  Portal Cache: portal-sed-narino-v10                                    │
│  Simulacro Cache: simulacro-v4                                          │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │ ASSETS DEL PORTAL                                                │   │
│  ├──────────────────────────────────────────────────────────────────┤   │
│  │   - index.html, manifest.json, sw.js                            │   │
│  │   - js/portal.js, js/questions.js, js/simulacros.js             │   │
│  │   - assets/img/*                                                 │   │
│  │   - shared/css/exam.css, shared/js/*.js                         │   │
│  │   - simulacro/index.html, simulacro/sw.js                       │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │ ASSETS DEL SIMULACRO                                             │   │
│  ├──────────────────────────────────────────────────────────────────┤   │
│  │   - index.html, manifest.json, sw.js                            │   │
│  │   - ../js/simulacros.js, ../js/questions.js                     │   │
│  │   - ../shared/css/exam.css, ../shared/js/*.js                    │   │
│  │   - ../assets/img/*                                              │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  Estrategia: Cache-first with network fallback                          │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 11. Diagrama de Componentes

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    COMPONENTES Y RELACIONES                            │
└─────────────────────────────────────────────────────────────────────────┘

                            ┌─────────────────┐
                            │   index.html    │
                            │   (Portal)      │
                            └────────┬────────┘
                                     │
           ┌─────────────────────────┴─────────────────────────┐
           │                                                   │
           ▼                                                   ▼
    ┌──────────────────┐                          ┌──────────────────┐
    │   Portal SW      │                          │  simulacro/      │
    │   (sw.js)        │                          │  (Unificado)     │
    └────────┬─────────┘                          └────────┬─────────┘
             │                                            │
             │          ┌──────────────────────────────────┘
             │          │
             │          ▼
             │   ┌──────────────────────────────────────────┐
             │   │         simulacro/index.html             │
             │   │  URL params: ?simulacro=1 or =2         │
             │   │                                           │
             │   │  1. configureSimulacro()                  │
             │   │  2. Filter QUESTIONS by simulacro ID     │
             │   │  3. Render subjects dynamically          │
             │   └────────────────────┬─────────────────────┘
             │                        │
             └────────────────────────┼─────────────────────┘
                                      ▼
    ┌─────────────────────────────────────────────────────────────┐
    │                    JavaScript Runtime                        │
    ├─────────────────────────────────────────────────────────────┤
    │                                                              │
    │  QUESTIONS ──────► Filter by simulacro ──────► QB           │
    │      │                       │                    │          │
    │      │                       ▼                    ▼          │
    │      │               ┌─────────────┐      ┌───────────┐    │
    │      │               │   nivel.js  │      │  meta.js  │    │
    │      │               │ NIVEL_INFO  │      │ META_QB   │    │
    │      │               └─────────────┘      └───────────┘    │
    │      │                       │                    │          │
    │      └───────────────────────┼────────────────────┘          │
    │                              ▼                                │
    │                      ┌─────────────┐                          │
    │                      │  exam.js    │                          │
    │                      │  app.js    │                          │
    │                      │  FUNCTIONS │                          │
    │                      └──────┬──────┘                          │
    │                             │                                 │
    │                             ▼                                 │
    │                      ┌─────────────┐                          │
    │                      │    DOM      │                          │
    │                      │  (UI)      │                          │
    │                      └─────────────┘                          │
    │                                                              │
    └──────────────────────────────────────────────────────────────┘
```

---

## 12. Screens (Estados de Pantalla)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    ESTADOS / PANTALLAS                                 │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   s-home    │───►│  s-intro    │───►│  s-question │───►│ s-results   │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
     ▲                                          │
     │            ┌─────────────┐                │
     └────────────┤  s-results  │◄───────────────┘
                  │  (review)   │
                  └─────────────┘

s-home     → Pantalla de selección de materia
s-intro    → Información de la prueba antes de iniciar
s-question → Durante la prueba (preguntas)
s-results  → Resultados y revisión de respuestas
```

---

## 13. Niveles de Desempeño

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    NIVELES DE DESEMPEÑO                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  Lectura Crítica (lc)                                                  │
│  ┌────────┬────────────────────────────────────────────────────────┐   │
│  │ Nivel  │ Rango de Puntaje                                        │   │
│  ├────────┼────────────────────────────────────────────────────────┤   │
│  │   4   │ 66 - 100  (Reflexiona, evalúa y argumenta)            │   │
│  │   3   │ 51 - 65   (Interpreta, infiere y relaciona)           │   │
│  │   2   │ 36 - 50   (Identifica y comprende)                    │   │
│  │   1   │  0 - 35   (Reconoce información explícita)            │   │
│  └────────┴────────────────────────────────────────────────────────┘   │
│                                                                          │
│  Matemáticas (mat)                                                     │
│  ┌────────┬────────────────────────────────────────────────────────┐   │
│  │ Nivel  │ Rango de Puntaje                                        │   │
│  ├────────┼────────────────────────────────────────────────────────┤   │
│  │   4   │ 71 - 100                                                │   │
│  │   3   │ 51 - 70                                                 │   │
│  │   2   │ 36 - 50                                                 │   │
│  │   1   │  0 - 35                                                 │   │
│  └────────┴────────────────────────────────────────────────────────┘   │
│                                                                          │
│  Inglés (ing)                                                           │
│  ┌────────┬────────────────────────────────────────────────────────┐   │
│  │ Nivel  │ Rango de Puntaje                                        │   │
│  ├────────┼────────────────────────────────────────────────────────┤   │
│  │  B+    │ 79 - 100 (Dominio avanzado)                           │   │
│  │  B1    │ 68 - 78  (Intermedio alto)                            │   │
│  │  A2    │ 58 - 67  (Intermedio)                                 │   │
│  │  A1    │ 48 - 57  (Básico)                                      │   │
│  │  A-    │  0 - 47  (Por debajo del nivel básico)               │   │
│  └────────┴────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 14. Tecnologías y Dependencias

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    STACK TECNOLÓGICO                                     │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  FRONTEND                                                               │
│  ├── HTML5 (semántico, sin frameworks)                                 │
│  ├── CSS3 (variables, flexbox, grid, media queries)                    │
│  ├── JavaScript ES6+ (vanilla, sin librerías)                          │
│  └── PWA (Service Worker, Manifest)                                     │
│                                                                          │
│  EXTERNAL RESOURCES                                                     │
│  ├── Google Fonts: Nunito, Space Mono                                  │
│  └── (Sin dependencias npm/build)                                       │
│                                                                          │
│  BROWSER SUPPORT                                                        │
│  ├── Chrome/Edge (modern)                                             │
│  ├── Firefox (modern)                                                   │
│  ├── Safari iOS/macOS                                                   │
│  └── Requiere HTTPS o localhost                                        │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 15. Cambios Recientes

### Unificación de Simulacros
- **Antes**: `simulacro-1/` y `simulacro-2/` como carpetas separadas
- **Ahora**: `simulacro/` unificado con parámetro URL

### Portal Links Actualizados
```html
<!-- Antes -->
<a href="simulacro-1/index.html">Simulacro 1</a>
<a href="simulacro-2/index.html">Simulacro 2</a>

<!-- Ahora -->
<a href="simulacro/index.html?simulacro=1">Simulacro 1</a>
<a href="simulacro/index.html?simulacro=2">Simulacro 2</a>
```

### Imágenes Centralizadas
- Logo: `assets/img/logo.svg`
- Iconos PWA: `assets/img/icon-192.png`, `icon-512.png`, `icon-escudo.svg`
- Avatares: `assets/img/cuy_correcto_ok.png`, `cuy_incorrecto_ok.png`

---

## 16. Próximos Pasos / Mejoras Futuras

- [ ] Extraer IMGS de Base64 a archivos PNG reales
- [ ] Unificar completamente app.js con exam.js
- [ ] Agregar más preguntas al banco centralizado
- [ ] Implementar persistencia de progreso localStorage
- [ ] Agregar analytics para seguimiento de uso

---

*Documento generado para el proyecto SABER 11 - Secretaría de Educación Departamental de Nariño*
