const SUBJ_INFO = {
  lc: { name: 'Lectura Crítica', icon: '📖', tag: 'tag-lc', color: '#6c4bc0', desc: 'Evalúa tu capacidad de interpretar, analizar y reflexionar sobre textos.', competencias: ['Identificar y entender los contenidos locales', 'Comprender cómo se articulan las partes de un texto', 'Reflexionar a partir de un texto y evaluar su contenido'] },
  mat: { name: 'Matemáticas', icon: '📐', tag: 'tag-mat', color: '#1a3a5c', desc: 'Evalúa competencias matemáticas.', competencias: ['Interpretación y representación', 'Formulación y ejecución', 'Argumentación'] },
  soc: { name: 'Sociales', icon: '🌎', tag: 'tag-soc', color: '#1e8a4a', desc: 'Evalúa conocimientos en ciencias sociales.', competencias: ['Pensamiento social', 'Interpretación y análisis de perspectivas', 'Pensamiento reflexivo y sistémico'] },
  cn: { name: 'Ciencias Naturales', icon: '🔬', tag: 'tag-cn', color: '#c0392b', desc: 'Evalúa competencias científicas.', competencias: ['Uso comprensivo del conocimiento científico', 'Explicación de fenómenos', 'Indagación'] },
  ing: { name: 'Inglés', icon: '🌐', tag: 'tag-ing', color: '#e8a020', desc: 'Evalúa competencias en inglés.', competencias: ['Competencia lingüística', 'Competencia pragmática', 'Competencia sociolingüística'] }
};

const SIMULACROS = {
  1: {
    id: 1,
    nombre: "Simulacro 1",
    titulo: "Simulador SABER 11°",
    descripcion: "Examen completo - Todas las materias",
    shortName: "SABER 11",
    cacheName: "simulacro-v1"
  },
  2: {
    id: 2,
    nombre: "Simulacro 2",
    titulo: "SABER 11° · Simulacro 2020",
    descripcion: "Matemáticas y Lectura Crítica",
    shortName: "Sim 2020",
    cacheName: "simulacro-v1"
  }
};

function getSimulacroSubjects(simId) {
  if (typeof QUESTIONS === 'undefined') return [];
  const subjectKeys = ['lc', 'mat', 'soc', 'cn', 'ing'];
  return subjectKeys.filter(subj => {
    return QUESTIONS.some(q => q.subject === subj && q.simulacros && q.simulacros.includes(simId));
  }).map(key => ({
    key: key,
    name: SUBJ_INFO[key].name,
    icon: SUBJ_INFO[key].icon
  }));
}
