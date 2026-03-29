// Banco centralizado de preguntas
// Cada pregunta tiene:
// - id: identificador único
// - simulacros: array de simulacros a los que pertenece (ej: [1] o [1,2])
// - subject: clave de la materia
// - context/contexImg: contexto de la pregunta
// - text: enunciado
// - opts: opciones de respuesta
// - correct: índice de respuesta correcta
// - hint: pista
// - explain: explicación/retroalimentación
// - comp: competencia evaluada
// - nivel: nivel de dificultad (1-4)

const QUESTIONS = [
  {
    id: 101, simulacros: [1], subject: 'lc',
    context: '<div style="margin-bottom:6px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;color:#7a5010;padding:3px 0">Responda la pregunta 1 de acuerdo con la siguiente información:</div><div style="font-size:14px;line-height:1.75;color:#1a1a1a;text-align:justify">Aunque las comodidades de esta vida pueden aumentarse con la ayuda mutua, sin embargo, como eso se puede conseguir dominando a los demás mejor que asociándose con ellos, nadie debe dudar de que los hombres por su naturaleza, si no existiera el miedo, se verían inclinados más al dominio que a la sociedad. Por lo tanto, hay que afirmar que el origen de las sociedades grandes y duraderas no se ha debido a la mutua benevolencia de los hombres sino al miedo mutuo.</div><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center">Tomado de: Hobbes, T. (1999). <em>Tratado sobre el ciudadano</em>. trad. Joaquín Rodríguez Feo. Madrid: Trotta.</div>',
    text: 'De acuerdo con las ideas expresadas en el texto, si "los hombres por su naturaleza están más inclinados al dominio que a la sociedad", ¿por qué aparecieron sociedades grandes y duraderas?',
    opts: ["A. Es natural para el hombre asociarse con otros para ejercer su dominio con seguridad.", "B. Para ampliar su capacidad de dominio, al hombre le resulta más efectivo vivir en sociedad.", "C. Es propio del hombre evitar todo tipo de dominio a través de las relaciones confiables que le brinda la vida en sociedad.", "D. El hombre busca la seguridad y es más seguro para él vivir en comunidad que estar expuesto a ser dominado por otro."],
    correct: 3,
    hint: "El texto afirma explícitamente que el origen de las sociedades se debe al miedo mutuo, no a la benevolencia.",
    comp: "Reflexiona a partir de un texto y evalúa su contenido.",
    nivel: 4,
    explain: "El texto establece que el origen de las sociedades duraderas es el miedo mutuo."
  },
  {
    id: 102, simulacros: [1], subject: 'lc',
    contextImg: 'lc_caricatura',
    contextImgCaption: 'Tomado y adaptado de: www.edizzz.com',
    text: 'La expresión en la cara del padre al oír la pregunta de la niña se debe a que',
    opts: ["A. no está de acuerdo con lo que dice la niña.", "B. no entendió lo que la niña quería decir.", "C. le disgustó que la niña lo interrumpiera súbitamente.", "D. no esperaba la interpretación que hizo la niña de sus palabras."],
    correct: 3,
    hint: "La cara del adulto expresa sorpresa, no enojo ni desacuerdo.",
    comp: "Identifica y entiende los contenidos locales que conforman un texto.",
    nivel: 2,
    explain: "El gesto de sorpresa del adulto indica que la interpretación de la niña fue inesperada."
  },
  {
    id: 103, simulacros: [1], subject: 'lc',
    context: '<strong>Fábula:</strong><br>"En lo más intricado de la Selva existió en tiempos lejanos un Búho que empezó a preocuparse por los demás..."',
    text: '¿Qué relación hay entre los párrafos 3 y 5?',
    opts: ["A. Representar a un científico que estudia la naturaleza de los animales.", "B. Simbolizar la capacidad humana de observar críticamente la conducta ajena.", "C. Mostrar la inutilidad del conocimiento científico en la vida práctica.", "D. Ilustrar cómo el dominio del conocimiento conduce al poder sobre los demás."],
    correct: 1,
    hint: "El búho observa, clasifica y juzga el comportamiento de los demás animales.",
    comp: "Comprende cómo se articulan las partes de un texto para darle un sentido global.",
    nivel: 3,
    explain: "El búho representa la observación crítica y reflexiva de la conducta ajena."
  },
  {
    id: 104, simulacros: [1], subject: 'lc',
    context: '<strong>Texto filosófico (Descartes):</strong><br>"...recuerdo haber sido engañado, mientras dormía, por ilusiones semelhantes..."',
    text: 'Si suponemos que Descartes tiene razón, se podría concluir que',
    opts: ["A. es fácil distinguir con certeza qué es real y qué no lo es.", "B. no hay un criterio definitivo para saber qué es real y qué es fantasía.", "C. cuando se cree estar despierto se enfrenta la realidad y no la fantasía.", "D. hay que asegurarse de estar dormido para conocer la realidad."],
    correct: 1,
    hint: "Descartes dice que NO puede distinguir el sueño de la vigilia.",
    comp: "Comprende cómo se articulan las partes de un texto para darle un sentido global.",
    nivel: 3,
    explain: "La duda cartesiana conclude que no existe criterio definitivo para distinguir sueño y vigilia."
  },
  {
    id: 105, simulacros: [1], subject: 'lc',
    context: '<strong>Texto informativo:</strong><br>"Ingenieros de alimentos quieren revolucionar la industria con comestibles saludables..."',
    text: '¿Cuál es el propósito principal de la investigación descrita en el texto?',
    opts: ["A. Contribuir al mejoramiento de los hábitos de nutrición de los niños.", "B. Demostrar que los microorganismos pueden transformar cualquier alimento.", "C. Reemplazar todos los alimentos procesados por frutas con probióticos.", "D. Investigar únicamente las propiedades anticancerígenas de los probióticos."],
    correct: 0,
    hint: "El texto habla de una alternativa saludable para niños.",
    comp: "Comprende cómo se articulan las partes de un texto para darle un sentido global.",
    nivel: 4,
    explain: "El propósito central es mejorar los hábitos nutricionales infantiles."
  },
  {
    id: 106, simulacros: [1], subject: 'lc',
    context: '',
    text: 'La lectura crítica exige, para evaluar una afirmación, principalmente',
    opts: ["A. buscar evidencias históricas de sectores donde la tecnología eliminó empleos sin crear nuevos.", "B. aceptar la afirmación porque proviene de un texto académico reconocido.", "C. rechazar la afirmación porque contradice la experiencia cotidiana de muchas personas.", "D. buscar otros textos del mismo autor para confirmar que esta es su postura general."],
    correct: 0,
    hint: "¿Qué herramienta intelectual permite validar o refutar una afirmación con fundamento?",
    comp: "Reflexiona a partir de un texto y evalúa su contenido.",
    nivel: 4,
    explain: "La lectura crítica exige contrastar las afirmaciones con evidencias."
  },

  // MAT - Matemáticas (9 preguntas)
  {
    id: 201, simulacros: [1], subject: 'mat',
    contextImg: 'mat_fig1',
    contextImgCaption: 'Figura 1 — Mapa de la ciudad con puntos A, B y C',
    context: 'En la figura se presenta un mapa de la vista aérea de las calles de una ciudad. Cada cuadrilátero corresponde a un cuadrado. La ruta de A a C mide 25 cm. Cada cuadrado tiene lado de 5 cm.',
    questionImg: 'mat_fig2',
    questionImgCaption: 'Figura 2 — Tres rutas posibles de A a B',
    text: 'Una persona debe ir del punto A al punto B. ¿Cuál(es) de las rutas presentadas tiene(n) longitud igual a la mostrada en la figura 1?',
    opts: ["A. Solamente I.", "B. Solamente I y III.", "C. Solamente II.", "D. Solamente II y III."],
    correct: 1,
    hint: "Cada cuadrado = 5 cm. La ruta de referencia = 25 cm = 5 cuadrados.",
    comp: "Interpretación y representación",
    nivel: 3,
    explain: "Ruta I: 5 cuadrados × 5 cm = 25 cm. Ruta III: 5 cuadrados × 5 cm = 25 cm."
  },
  {
    id: 202, simulacros: [1], subject: 'mat',
    context: 'La representación de los posibles caminos entre dos puntos X e Y se escribe X(n)Y, donde n es el número de caminos. Para caminos de A a B de longitud 25 cm pasando por C: de A a C la longitud debe ser 15 cm y de C a B 10 cm.',
    text: 'La representación de los posibles caminos de A a B de longitud igual a 25 cm, pasando por C, es',
    opts: ["A. A(1)C(1)B", "B. A(2)C(1)B", "C. A(3)C(2)B", "D. A(4)C(2)B"],
    correct: 2,
    hint: "Cuenta cuántos caminos hay de A a C con 15 cm y cuántos de C a B con 10 cm.",
    comp: "Formulación",
    nivel: 4,
    explain: "Hay 3 caminos de A a C con 15 cm y 2 caminos de C a B con 10 cm."
  },
  {
    id: 203, simulacros: [1], subject: 'mat',
    questionImg: 'mat_graficas_edades',
    context: 'Al hacer una encuesta en un curso, se determinó que la mayoría de estudiantes tienen 15 años de edad.',
    text: '¿Cuál de las siguientes gráficas NO puede corresponder a la distribución de los estudiantes del curso?',
    opts: ["A. Gráfica A", "B. Gráfica B", "C. Gráfica C", "D. Gráfica D"],
    correct: 2,
    hint: "La mayoría tiene 15 años significa que la moda es 15.",
    comp: "Interpretación y representación",
    nivel: 2,
    explain: "En la gráfica C la barra más alta está en 13 años (moda = 13)."
  },
  {
    id: 204, simulacros: [1], subject: 'mat',
    questionImg: 'mat_vidrios',
    context: 'Dos vidrios iguales de forma cuadrada, cada uno de área x cm², se ponen juntos en una ventana.',
    text: 'Una persona afirma que el resultado es una ventana de área 2x cm². Esta afirmación es',
    opts: ["A. cierta, pues basta multiplicar el área de uno de los vidrios por 2.", "B. falsa, pues se desconocen las dimensiones de la ventana resultante.", "C. cierta, pues la ventana resultante tiene un lado de medida 2x.", "D. falsa, pues el área de la ventana resultante es x² cm⁴."],
    correct: 0,
    hint: "El área de dos figuras iguales unidas = suma de sus áreas.",
    comp: "Argumentación",
    nivel: 4,
    explain: "x + x = 2x. El área total siempre es la suma de las partes."
  },
  {
    id: 205, simulacros: [1], subject: 'mat',
    contextImg: 'mat_vj_ctx',
    questionImg: 'mat_vj_opts',
    context: 'La gráfica muestra el costo de producción y el precio de venta de un videojuegos en 2010. La tabla muestra el número de videojuegos vendidos por una empresa del año 2008 al 2012.',
    text: '¿Cuál de las siguientes gráficas representa correctamente la información de la tabla?',
    opts: ["A. Gráfica A", "B. Gráfica B", "C. Gráfica C", "D. Gráfica D"],
    correct: 1,
    hint: "Lee los datos: 2008→20k, 2009→15k, 2010→10k (bajan), 2011→25k, 2012→30k (suben).",
    comp: "Interpretación y representación",
    nivel: 2,
    explain: "Las ventas bajan de 2008 a 2010 y suben de 2010 a 2012."
  },
  {
    id: 206, simulacros: [1], subject: 'mat',
    context: 'Una tienda fija el anuncio: TV HD 32" → $1.200.000, Nevera 327L → $1.000.000, Lavadora 13kg → $1.100.000, Pague hasta 12 cuotas mensuales sin intereses.',
    text: 'Gustavo realiza la operación: (1.000.000 + 1.200.000) ÷ 6. Con esta operación, él halla',
    opts: ["A. el costo promedio de una lavadora.", "B. el costo promedio de una nevera y un televisor.", "C. la cuota mensual si compra una lavadora a doce meses.", "D. la cuota mensual si compra una nevera y un televisor a seis meses."],
    correct: 3,
    hint: "La suma es el precio de nevera y TV. Dividir entre 6 da la cuota a 6 meses.",
    comp: "Formulación",
    nivel: 2,
    explain: "Nevera + TV = $2.200.000. Dividido en 6 = cuota mensual."
  },
  {
    id: 207, simulacros: [1], subject: 'mat',
    context: 'Carlos evalúa dos cursos de idiomas: Intensivo (inscripción $100.000, libro $50.000, clase $30.000, descuento 20%) vs Extensivo (inscripción $100.000, libro $50.000, clase $10.000, descuento 10%).',
    text: 'La información es insuficiente porque',
    opts: ["A. no conoce las formas de pago de cada curso.", "B. necesita saber la cantidad de clases que ofrece cada curso.", "C. no sabe cuánto es el descuento por cada clase.", "D. necesita conocer el valor total del curso para aplicar el descuento."],
    correct: 1,
    hint: "Para calcular el costo total necesitas: inscripción + libro + (precio/clase × número de clases).",
    comp: "Argumentación",
    nivel: 3,
    explain: "Sin saber cuántas clases tiene cada curso, no se puede calcular el costo total."
  },
  {
    id: 208, simulacros: [1], subject: 'mat',
    context: 'Se encuestarán 2.000 personas para conocer intención de voto. El 60% de los votantes tienen entre 18 y 38 años; el 40% restante son mayores de 39 años.',
    text: 'La encuesta representará la intención de voto de toda la población, cuando la cantidad de encuestados entre los 18 y 38 años sea',
    opts: ["A. 2.000", "B. 1.200", "C. 1.000", "D. 600"],
    correct: 1,
    hint: "Para que la muestra sea representativa debe mantener la misma proporción que la población.",
    comp: "Formulación",
    nivel: 3,
    explain: "60% × 2.000 = 1.200 personas entre 18 y 38 años."
  },
  {
    id: 209, simulacros: [1], subject: 'mat',
    questionImg: 'mat_mnop',
    context: 'En la figura se representa el cuadrilátero MNOP con la medida de algunos de sus lados, ángulos y de una de sus diagonales.',
    text: 'Los lados PO y MN del cuadrilátero son paralelos porque',
    opts: ["A. MO es congruente con MN.", "B. γ es congruente con β.", "C. PM es congruente con NO.", "D. α es congruente con δ."],
    correct: 3,
    hint: "Para que dos lados sean paralelos, los ángulos alternos internos deben ser iguales.",
    comp: "Argumentación",
    nivel: 4,
    explain: "α y δ son ángulos alternos internos. Como α = δ = 40°, entonces PO ∥ MN."
  },

  // SOC - Sociales (9 preguntas)
  {
    id: 301, simulacros: [1], subject: 'soc',
    context: 'La Constitución de 1991 estableció que los gobernadores y alcaldas contraen con sus electores la obligación de cumplir el programa de gobierno que presentaron al inscribirse como candidatos.',
    text: 'El incumplimiento del programa puede dar lugar a que',
    opts: ["A. los gobernantes le consulten al pueblo qué deben hacer.", "B. la elección de los gobernantes sea revocada por decisión popular.", "C. se convoque al pueblo para que apruebe o rechace normas del país.", "D. el presidente decida si se aprueban las decisiones de los gobernantes."],
    correct: 1,
    hint: "La Constitución contempla mecanismos de participación directa cuando un mandatario incumple.",
    comp: "Pensamiento social",
    nivel: 2,
    explain: "La revocatoria del mandato permite a los ciudadanos revocar un gobernante que incumplió."
  },
  {
    id: 302, simulacros: [1], subject: 'soc',
    context: 'Empleados de una empresa se quejan permanentemente del alto volumen de ruido que deben soportar a diario en sus instalaciones de trabajo.',
    text: '¿Qué derecho pueden invocar los trabajadores para pedirle a la empresa que tome medidas para disminuir el ruido?',
    opts: ["A. Tener un acceso equitativo a la salud.", "B. Tener un trato justo y equitativo ante la ley.", "C. Tener igualdad de oportunidades para trabajar.", "D. Tener un entorno ambiental sano."],
    correct: 3,
    hint: "El ruido excesivo en el ambiente laboral afecta un derecho específico consagrado en la Constitución.",
    comp: "Pensamiento social",
    nivel: 2,
    explain: "El artículo 79 de la Constitución garantiza el derecho a un ambiente sano."
  },
  {
    id: 303, simulacros: [1], subject: 'soc',
    context: '',
    text: 'De los siguientes factores, ¿cuáles se relacionan, de manera directa, con el surgimiento de movimientos guerrilleros en Colombia en la década de los años 1960? 1. El auge del negocio del narcotráfico. 2. La difusión de las ideas de la Revolución cubana. 3. El asesinato de integrantes de la Unión Patriótica. 4. Los problemas de distribución de la tierra en el sector rural.',
    opts: ["A. 1 y 3", "B. 2 y 4", "C. 2 y 3", "D. 1 y 4"],
    correct: 1,
    hint: "Los factores 1 y 3 corresponden a fenómenos de décadas posteriores a los 60.",
    comp: "Pensamiento social",
    nivel: 4,
    explain: "Las ideas de la Revolución cubana y los problemas de tierras sí influyeron en los 60."
  },
  {
    id: 304, simulacros: [1], subject: 'soc',
    context: 'Un joven de 20 años compra material pornográfico con imágenes de adolescentes menores de edad. Sus padres señalan las implicaciones legales. El joven invoca su mayoría de edad y libertad de consumo.',
    text: 'En esta situación se presenta un conflicto porque',
    opts: ["A. los padres no conocen los derechos sexuales de los jóvenes.", "B. los padres tienen en cuenta las implicaciones de la explotación sexual de menores y el joven no.", "C. los padres no tienen en cuenta que los menores hacen actividades de manera voluntaria.", "D. los padres ven a todos los jóvenes como niños."],
    correct: 1,
    hint: "El conflicto surge porque cada parte valora distinto el mismo acto.",
    comp: "Interpretación y análisis de perspectivas",
    nivel: 2,
    explain: "Los padres reconocen el daño de la explotación sexual de menores."
  },
  {
    id: 305, simulacros: [1], subject: 'soc',
    context: '<em>Editorial de El Tiempo:</em> "En Rusia y en todos los países sometidos a la órbita despótica, los derechos humanos no han tenido reconocimiento alguno... En contraste, en el mundo libre la Declaración de los Derechos Humanos ha encontrado fervorosa y progresiva aplicación..."',
    text: 'Por su contenido, este editorial puede relacionarse de manera directa con el contexto de',
    opts: ["A. la Violencia política en Colombia.", "B. la Primera Guerra Mundial.", "C. la Guerra Fría.", "D. la Revolución Bolchevique."],
    correct: 2,
    hint: "El texto opone el modelo soviético al mundo libre. ¿En qué período surge esa polaridad?",
    comp: "Interpretación y análisis de perspectivas",
    nivel: 3,
    explain: "La oposición entre el modelo soviético y las democracias occidentales sitúa el texto en la Guerra Fría."
  },
  {
    id: 306, simulacros: [1], subject: 'soc',
    context: '<em>Comunicado del consulado estadounidense en Santa Marta, diciembre 1928:</em> "El sentimiento contra el Gobierno... es dudoso si podemos depender del gobierno colombiano para la protección..."',
    text: 'Esta descripción de las circunstancias previas a la Masacre de las Bananeras puede ponerse en duda porque',
    opts: ["A. se afirma que el carácter de la huelga ha cambiado sin señalar los aspectos centrales del cambio.", "B. es un estadounidense y no un huelguista el que argumenta.", "C. se da por sentada una relación entre las Fuerzas Armadas y los huelguistas sin aportar evidencias.", "D. las comunicaciones entre cónsules debían tener el visto bueno del Gobierno colombiano."],
    correct: 2,
    hint: "Para cuestionar la credibilidad de una fuente, busca afirmaciones sin evidencia.",
    comp: "Interpretación y análisis de perspectivas",
    nivel: 3,
    explain: "La fuente afirma que soldados simpatizan con huelguistas sin aportar evidencia."
  },
  {
    id: 307, simulacros: [1], subject: 'soc',
    context: '',
    text: 'Uno de los principales problemas de las grandes ciudades es la dificultad de movilidad. La solución de construir más vías puede generar efectos no deseados. ¿Cuál es uno de estos efectos?',
    opts: ["A. Construir más vías disminuye la velocidad de circulación.", "B. Construir más vías genera más contaminación.", "C. Construir más vías genera más empleos en la construcción.", "D. Construir más vías incentiva el uso del automóvil."],
    correct: 1,
    hint: "Generar empleos (C) e incentivar el uso del auto (D) son consecuencias deseadas.",
    comp: "Pensamiento reflexivo y sistémico",
    nivel: 2,
    explain: "La contaminación adicional es un efecto no deseado ni planeado."
  },
  {
    id: 308, simulacros: [1], subject: 'soc',
    context: 'El Derecho Internacional Humanitario (DIH) protege a personas que no toman parte en las hostilidades: civiles, médicos y religiosos. Regula también la detención de prisioneros de guerra.',
    text: 'El objetivo central del DIH es',
    opts: ["A. Proteger al personal médico que trabaja en varios países.", "B. Evitar y limitar el sufrimiento humano en tiempos de conflictos armados.", "C. Proteger a los soldados en un conflicto armado entre países.", "D. Evitar y limitar los conflictos políticos entre grupos opositores."],
    correct: 1,
    hint: "El DIH protege a civiles, médicos, prisioneros... ¿Cuál es el objetivo común?",
    comp: "Pensamiento reflexivo y sistémico",
    nivel: 3,
    explain: "El DIH busca limitar el sufrimiento humano en todos los actores durante conflictos armados."
  },
  {
    id: 309, simulacros: [1], subject: 'soc',
    context: '<em>Documento del CONPES (1990):</em> "Los grandes niveles de protección reducen los incentivos para buscar mejoras tecnológicas..."',
    text: 'El anterior texto justifica la implementación de una política de apertura económica, porque',
    opts: ["A. sugiere que la inversión en ciencia y tecnología puede incrementar las exportaciones.", "B. describe las ventajas de proteger los sectores económicos con menos recursos.", "C. indica que la diversificación de la producción incrementa la inserción en mercados competitivos.", "D. señala que proteger la economía nacional desestima la competitividad."],
    correct: 3,
    hint: "El texto critica que la protección reduce competitividad y orienta mal la inversión.",
    comp: "Pensamiento reflexivo y sistémico",
    nivel: 4,
    explain: "El texto critica exactamente que la protección desestima la competitividad."
  },

  // CN - Ciencias Naturales (10 preguntas)
  {
    id: 401, simulacros: [1], subject: 'cn',
    questionImg: 'cn_co2',
    context: '',
    text: 'Con base en el modelo del ciclo biogeoquímico del CO₂, ¿qué efecto tiene para el ecosistema el aumento de la emisión de CO₂ por causa de las fábricas?',
    opts: ["A. Pérdida de la capacidad de las plantas para realizar su respiración.", "B. Incremento en la concentración de este gas en la atmósfera.", "C. Pérdida de la concentración de carbón en los combustibles fósiles.", "D. Pérdida de las bacterias anaerobias que realizan la descomposición."],
    correct: 1,
    hint: "Si aumentan las emisiones y la absorción es constante, ¿qué pasa con la concentración?",
    comp: "Uso comprensivo del conocimiento científico",
    nivel: 3,
    explain: "Mayor emisión de CO₂ resulta en un incremento de su concentración atmosférica."
  },
  {
    id: 402, simulacros: [1], subject: 'cn',
    questionImg: 'cn_quimica',
    context: 'Las sustancias con el grupo C=O pueden reducirse en presencia de un catalizador M y un medio ácido para formar un alcano.',
    text: '¿Cuál de las siguientes sustancias puede reducirse para formar un alcano de 4 carbonos?',
    opts: ["A. Sustancia A (alcohol de 4C sin grupo C=O)", "B. Sustancia B (molécula con Cl y N, sin C=O)", "C. Sustancia C (alcano de 5C, ya reducido)", "D. Sustancia D (cetona de 4C con grupo C=O)"],
    correct: 3,
    hint: "La reacción requiere un grupo C=O. Solo una opción tiene ese grupo Y tiene exactamente 4 carbonos.",
    comp: "Uso comprensivo del conocimiento científico",
    nivel: 4,
    explain: "Solo D (cetona de 4C) tiene el grupo C=O necesario."
  },
  {
    id: 403, simulacros: [1], subject: 'cn',
    questionImg: 'cn_estufa',
    context: 'Una estudiante pone 4 recipientes con líquidos de diferente masa en una estufa con llamas idénticas. Orden de ebullición: 1, 3, 4, 2.',
    text: '¿Cuál de los líquidos necesitó mayor energía calórica para alcanzar el punto de ebullición?',
    opts: ["A. El del recipiente 3.", "B. El del recipiente 4.", "C. El del recipiente 1.", "D. El del recipiente 2."],
    correct: 3,
    hint: "El que tarda MÁS en hervir absorbe MÁS energía total.",
    comp: "Uso comprensivo del conocimiento científico",
    nivel: 3,
    explain: "El recipiente 2 tardó más tiempo, por tanto absorbió más energía calórica total."
  },
  {
    id: 404, simulacros: [1], subject: 'cn',
    questionImg: 'cn_boya',
    context: 'Una boya se ata al fondo del mar mediante una cuerda. La boya se mantiene quieta. Las fuerzas son: flotación (↑), peso (↓) y tensión de la cuerda (↓).',
    text: 'Puede afirmarse que la boya se mantiene quieta porque',
    opts: ["A. la fuerza de flotación es igual al peso de la boya sumando la tensión de la cuerda.", "B. la tensión de la cuerda más el peso de la boya es mayor que la fuerza de flotación.", "C. la fuerza de flotación es igual al peso de la boya.", "D. la fuerza de flotación es igual a la tensión de la cuerda."],
    correct: 0,
    hint: "Si la boya está quieta, la fuerza neta = 0. Suma las fuerzas hacia abajo y hacia arriba.",
    comp: "Explicación de fenómenos",
    nivel: 3,
    explain: "Equilibrio: F_flotación = Peso + Tensión."
  },
  {
    id: 405, simulacros: [1], subject: 'cn',
    questionImg: 'cn_fases',
    context: 'Un diagrama de fases muestra las condiciones de presión y temperatura de los estados de un compuesto. En el momento 1: presión P₁ y temperatura T₁. En el momento 2: presión P₂ y temperatura T₂ (ambos en la región sólida).',
    text: '¿Cuál es el estado del compuesto W en el momento 1 y en el momento 2?',
    opts: ["A. En el momento 1 es sólido y en el momento 2 es líquido.", "B. En el momento 1 es sólido y en el momento 2 también es sólido.", "C. En el momento 1 es gas y en el momento 2 es sólido.", "D. En el momento 1 es líquido y en el momento 2 también es líquido."],
    correct: 1,
    hint: "Ambos puntos están dentro de la MISMA región. ¿Hubo cambio de fase?",
    comp: "Explicación de fenómenos",
    nivel: 3,
    explain: "Ambos puntos permanecen en la región sólida, no hay cambio de estado."
  },
  {
    id: 406, simulacros: [1], subject: 'cn',
    questionImg: 'cn_gases',
    context: '',
    text: 'Los gases de efecto invernadero son aquellos que contribuyen al calentamiento global. ¿Cuál de los siguientes es el principal gas de efecto invernadero?',
    opts: ["A. Oxígeno (O₂)", "B. Nitrógeno (N₂)", "C. Vapor de agua (H₂O)", "D. CO₂"],
    correct: 3,
    hint: "Es el gas más asociado con el calentamiento global antropogénico.",
    comp: "Uso comprensivo del conocimiento científico",
    nivel: 2,
    explain: "El CO₂ es el principal gas de efecto invernadero causado por actividades humanas."
  },
  {
    id: 407, simulacros: [1], subject: 'cn',
    questionImg: 'cn_geotermica',
    context: '',
    text: 'La energía geotérmica es una fuente de energía renovable. ¿Cuál es su principal ventaja?',
    opts: ["A. Es contaminante.", "B. No depende del clima.", "C. Es muy cara de explotar.", "D. Tiene alto impacto visual."],
    correct: 1,
    hint: "A diferencia de solar o eólica, no depende de las condiciones climáticas.",
    comp: "Uso comprensivo del conocimiento científico",
    nivel: 2,
    explain: "La energía geotérmica no depende del clima y está disponible constantemente."
  },
  {
    id: 408, simulacros: [1], subject: 'cn',
    questionImg: 'cn_ph',
    context: '',
    text: 'El pH es una medida de la acidez o basicidad de una solución. ¿Cuál es el rango típico del pH neutro?',
    opts: ["A. 0-3", "B. 4-6", "C. 7", "D. 8-10"],
    correct: 2,
    hint: "El pH neutro es exactamente 7.",
    comp: "Uso comprensivo del conocimiento científico",
    nivel: 1,
    explain: "El pH neutro es 7, valores menores son ácidos y mayores son básicos."
  },
  {
    id: 409, simulacros: [1], subject: 'cn',
    questionImg: 'cn_geotermica',
    context: '',
    text: 'La energía geotérmica se obtiene del calor interno de la Tierra. ¿Qué tipo de energía transforma?',
    opts: ["A. Energía nuclear en energía térmica", "B. Energía química en energía eléctrica", "C. Energía térmica en energía eléctrica", "D. Energía mecánica en energía química"],
    correct: 2,
    hint: "Se usa el calor interno de la Tierra para generar electricidad.",
    comp: "Explicación de fenómenos",
    nivel: 2,
    explain: "La energía geotérmica transforma energía térmica en eléctrica."
  },
  {
    id: 410, simulacros: [1], subject: 'cn',
    context: '',
    text: '¿Cuál de las siguientes es una característica de los seres vivos que los distingue de la materia inerte?',
    opts: ["A. Estar compuestos de átomos", "B. Realizar reacciones químicas", "C. Tener células", "D. Ocupar espacio"],
    correct: 2,
    hint: "Los seres vivos están formados por células, la unidad básica de la vida.",
    comp: "Uso comprensivo del conocimiento científico",
    nivel: 1,
    explain: "Tener células es la característica que define a los seres vivos."
  },

  // ING - Inglés (4 preguntas)
  {
    id: 501, simulacros: [1], subject: 'ing',
    context: 'Read the following text and answer the question: "The Amazon rainforest is the largest tropical rainforest in the world. It is located in South America, mainly in Brazil."',
    text: 'Where is the Amazon rainforest located?',
    opts: ["A. Africa", "B. South America", "C. Asia", "D. North America"],
    correct: 1,
    hint: "The text explicitly mentions the location.",
    comp: "Reading comprehension",
    nivel: 1,
    explain: "The text states it is located in South America."
  },
  {
    id: 502, simulacros: [1], subject: 'ing',
    context: 'Choose the correct sentence:',
    text: 'She _____ to the store yesterday.',
    opts: ["A. go", "B. goes", "C. went", "D. going"],
    correct: 2,
    hint: "This is past simple tense.",
    comp: "Grammar",
    nivel: 1,
    explain: "Went is the past simple of go."
  },
  {
    id: 503, simulacros: [1,2], subject: 'ing',
    context: 'Choose the correct definition for "environment":',
    text: 'The word "environment" means:',
    opts: ["A. A type of animal", "B. The conditions around us", "C. A type of food", "D. A building"],
    correct: 1,
    hint: "Environment refers to surrounding conditions.",
    comp: "Vocabulary",
    nivel: 1,
    explain: "Environment means the conditions that surround us."
  },
  {
    id: 504, simulacros: [1], subject: 'ing',
    context: 'Complete the sentence: "If it _____ tomorrow, I will stay home."',
    text: 'Choose the correct option:',
    opts: ["A. rains", "B. rained", "C. raining", "D. rain"],
    correct: 0,
    hint: "This is a first conditional sentence.",
    comp: "Grammar",
    nivel: 2,
    explain: "First conditional uses present simple after if."
  },

  // ============================================
  // PREGUNTAS DE SIMULACRO 2
  // ============================================
  // MAT - Matemáticas (20 preguntas)
  {
    id: 1001, simulacros: [2], subject: 'mat',
    context: 'En una bolsa hay 3 bolas rojas, 3 negras y 12 blancas.',
    text: 'Una persona afirma que al sacar una bola al azar, los tres colores tienen la misma probabilidad. Esta afirmación es',
    opts: ["A. verdadera, pues el número de bolas de cada color no importa.", "B. falsa, pues no se sabe el número total de bolas en la bolsa.", "C. falsa, pues hay más bolas de un color que de los otros dos.", "D. verdadera, pues las bolas están repartidas de igual manera."],
    correct: 2,
    hint: "Observa cuántas bolas hay de cada color en la bolsa.",
    comp: "Argumentación",
    nivel: 2,
    explain: "En la bolsa hay 18 bolas: 3 rojas, 3 negras, 12 blancas. Las probabilidades son 3/18, 3/18, 12/18."
  },
  {
    id: 1002, simulacros: [2], subject: 'mat',
    context: 'Con respecto a la vertical, la torre se ha inclinado 4°.',
    text: '¿Cuánto mide el otro ángulo?',
    opts: ["A. 4°", "B. 14°", "C. 86°", "D. 90°"],
    correct: 2,
    hint: "La suma de los dos ángulos debe ser igual a 90°.",
    comp: "Interpretación",
    nivel: 2,
    explain: "Como el ángulo de inclinación es 4°, el otro ángulo mide 90° - 4° = 86°."
  },
  {
    id: 1003, simulacros: [2], subject: 'mat',
    context: 'En la tabla se relaciona la cantidad de personas que ingresó cada día durante una semana.',
    text: '¿Qué porcentaje del total de personas entraron sin hacer reserva?',
    opts: ["A. 56 %", "B. 50 %", "C. 44 %", "D. 40 %"],
    correct: 2,
    hint: "Suma las personas sin reserva y divídelas entre el total.",
    comp: "Interpretación",
    nivel: 3,
    explain: "Total sin reserva: 3100. Total: 7000. Porcentaje: (3100/7000) × 100 ≈ 44%."
  },
  {
    id: 1004, simulacros: [2], subject: 'mat',
    context: 'El proceso: 1. Sumar personas sin reserva, 2. Multiplicar por 17, 3. Sumar personas con reserva, 4. Multiplicar por 22.5.',
    text: '¿Cuál pregunta NO se puede resolver con este proceso?',
    opts: ["A. ¿Con cuál tipo de entrada se recaudó más dinero?", "B. ¿Cuántas personas ingresaron en la semana?", "C. ¿Cuál es la ganancia total del sitio turístico?", "D. ¿Cuánto dinero se recaudó por tipo de entrada?"],
    correct: 2,
    hint: "Piensa qué información adicional necesitarías.",
    comp: "Interpretación",
    nivel: 2,
    explain: "No se pueden calcular ganancias porque no se conocen los gastos."
  },
  {
    id: 1005, simulacros: [2], subject: 'mat',
    context: 'Con los datos de la tabla (precios de 17€ y 22.5€).',
    text: 'El recaudo total de la semana fue aproximadamente de',
    opts: ["A. 14 mil euros", "B. 140 mil euros", "C. 120 euros", "D. 120.000 euros"],
    correct: 1,
    hint: "Multiplica personas por precio y suma ambos totales.",
    comp: "Formulación y ejecución",
    nivel: 2,
    explain: "3100 × 17 = 52700, 3900 × 22.5 = 87750, Total ≈ 140000."
  },
  {
    id: 1006, simulacros: [2], subject: 'mat',
    context: 'La mediana de turistas sin reserva es 300; con reserva es 600.',
    text: '¿Es correcto afirmar que entran el doble de turistas con reserva?',
    opts: ["A. No, la mediana es una medida de localización central.", "B. No, la mediana muestra la dispersión de los datos.", "C. Sí, la mediana me da el promedio de los datos.", "D. Sí, la mediana me da la mitad de los datos."],
    correct: 0,
    hint: "Recuerda qué representa la mediana.",
    comp: "Argumentación",
    nivel: 3,
    explain: "La mediana es el valor central, no caracteriza totales."
  },
  {
    id: 1007, simulacros: [2], subject: 'mat',
    context: 'Figuras de piscinas: 12, 18, 24 baldosas azules.',
    text: 'Según las figuras, puede afirmarse que el número de baldosas',
    opts: ["A. azules se incrementa en seis de una piscina a la siguiente.", "B. blancas aumenta en ocho a medida que crece el tamaño.", "C. azules es el doble de la cantidad de baldosas blancas.", "D. blancas es la tercera parte de las baldosas azules."],
    correct: 0,
    hint: "Observa el patrón: 12, 18, 24...",
    comp: "Interpretación",
    nivel: 2,
    explain: "El número de baldosas azules aumenta en 6 cada vez."
  },
  {
    id: 1008, simulacros: [2], subject: 'mat',
    context: 'Se lanzan cuatro fichas: una azul doble, una blanca doble, y dos mixtas.',
    text: '¿Cuál evento es imposible que ocurra?',
    opts: ["A. Obtener una cara azul y tres blancas.", "B. Obtener dos caras azules y dos blancas.", "C. Obtener tres caras azules y una blanca.", "D. Obtener cuatro caras azules y cero blancas."],
    correct: 3,
    hint: "Hay al menos una ficha con cara blanca.",
    comp: "Formulación y ejecución",
    nivel: 3,
    explain: "Siempre hay al menos una cara blanca por la ficha blanca doble."
  },
  {
    id: 1009, simulacros: [2], subject: 'mat',
    context: 'El costo de la boleta según edad: 0-8: $5000, 8-16: $7000, 16-56: $10000, >56: $6000.',
    text: 'La gráfica que representa esta función es',
    opts: ["A. Gráfica escalonada con los cuatro intervalos.", "B. Gráfica con puntos unidos por segmentos.", "C. Gráfica con línea continua.", "D. Gráfica con valores en eje equivocado."],
    correct: 0,
    hint: "La función es a trozos y tiene saltos.",
    comp: "Interpretación",
    nivel: 2,
    explain: "Es una función escalonada con intervalos definidos."
  },
  {
    id: 1010, simulacros: [2], subject: 'mat',
    context: 'Ángulo M = 150°. Análisis: I. M=150°, N=180°-150°. II. N=30°. III. La suma debe ser 160°.',
    text: '¿En qué paso se comete un error?',
    opts: ["A. I, porque N debe ser 10°.", "B. III, porque la suma debe ser 180°.", "C. VII, porque O<130° no quiere decir O<150°.", "D. VIII, porque si O<150° la cometa no volará."],
    correct: 1,
    hint: "¿Cuánto suman los ángulos internos de un triángulo?",
    comp: "Argumentación",
    nivel: 3,
    explain: "La suma de los ángulos debe ser 180°, no 160°."
  },
  {
    id: 1011, simulacros: [2], subject: 'mat',
    context: 'Encuesta a 200 clientes: Excelente 10%, Bueno 35%, Regular 40%, Malo 15%.',
    text: 'La afirmación verdadera es:',
    opts: ["A. Más de 30 clientes consideran excelente el servicio.", "B. Menos de 50 clientes consideran regular el servicio.", "C. Menos de 55 clientes están satisfechos.", "D. Más de 60 clientes consideran bueno el servicio."],
    correct: 3,
    hint: "Calcula el 35% de 200 clientes.",
    comp: "Argumentación",
    nivel: 3,
    explain: "35% de 200 = 70 clientes. Más de 60 es verdadero."
  },
  {
    id: 1012, simulacros: [2], subject: 'mat',
    context: 'Construcción geométrica: dividir MN en dos partes congruentes.',
    text: 'La construcción correcta fue',
    opts: ["A. Dos triángulos con MN como lado.", "B. Triángulos congruentes sin intersección.", "C. M y N como centros de circunferencias.", "D. Dos triángulos equiláteros sobre MN con PQ intersectando MN."],
    correct: 3,
    hint: "Los triángulos deben construirse sobre MN.",
    comp: "Formulación y ejecución",
    nivel: 3,
    explain: "Se deben construir dos triángulos equiláteros sobre MN."
  },
  {
    id: 1013, simulacros: [2], subject: 'mat',
    context: 'Plan de 220 minutos. Consumo: 331 minutos. Consumo adicional: 111 minutos.',
    text: 'El tiempo adicional consumido fue:',
    opts: ["A. 1 hora y 11 minutos.", "B. 1 hora y 51 minutos.", "C. 3 horas y 40 minutos.", "D. 5 horas y 31 minutos."],
    correct: 1,
    hint: "111 minutos = 1 hora + ? minutos",
    comp: "Formulación y ejecución",
    nivel: 2,
    explain: "111 minutos = 1 hora + 51 minutos."
  },
  {
    id: 1014, simulacros: [2], subject: 'mat',
    context: 'Diferencia entre valor del minuto del plan y el adicional es $35.42.',
    text: '¿Qué dato NO se necesita?',
    opts: ["A. La cantidad de minutos del plan.", "B. El valor del consumo adicional.", "C. El total de cargos del mes.", "D. El valor del plan local."],
    correct: 2,
    hint: "Solo necesitas datos directos del plan y consumo.",
    comp: "Formulación y ejecución",
    nivel: 3,
    explain: "El total de cargos no es necesario para la diferencia."
  },
  {
    id: 1015, simulacros: [2], subject: 'mat',
    context: 'Nivel III: 6 horas máximo. Turno 180, llamado cuando tablero muestra 240.',
    text: '¿Cuántas personas por hora llegaron mientras Isabel estuvo allí?',
    opts: ["A. 60 personas por hora.", "B. 40 personas por hora.", "C. 15 personas por hora.", "D. 10 personas por hora."],
    correct: 3,
    hint: "Divide personas adicionales entre horas.",
    comp: "Formulación y ejecución",
    nivel: 3,
    explain: "60 personas / 6 horas = 10 personas por hora."
  },
  {
    id: 1016, simulacros: [2], subject: 'mat',
    context: 'Cuadrilátero se traslada 1 unidad a la izquierda, luego se amplía al doble.',
    text: 'Las coordenadas de los otros dos vértices son:',
    opts: ["A. (-1,5) y (3,7).", "B. (5,-1) y (7,3).", "C. (5,7) y (1,1).", "D. (1,5) y (-5,-7)."],
    correct: 0,
    hint: "Sigue la transformación paso a paso.",
    comp: "Formulación y ejecución",
    nivel: 3,
    explain: "Siguiendo la transformación: (-1,5) y (3,7)."
  },
  {
    id: 1017, simulacros: [2], subject: 'mat',
    context: 'Apartamento de $80.000.000 en cuotas: 50×1.600.000, 40×2.000.000, etc.',
    text: 'Es verdadero afirmar que',
    opts: ["A. el empresario paga más por el apartamento dependiendo de las cuotas.", "B. a mayor cantidad de cuotas menor valor se pagará en cada una.", "C. solo cuando elige el menor número de cuotas paga el valor del apartamento.", "D. a mayor valor pagado por cuota, más tiempo se tardará en pagar."],
    correct: 1,
    hint: "Multiplica número de cuotas por valor de cuota.",
    comp: "Interpretación",
    nivel: 2,
    explain: "Son inversamente proporcionales: más cuotas = menor valor cada una."
  },
  {
    id: 1018, simulacros: [2], subject: 'mat',
    context: 'Tres CD con canciones de salsa y merengue.',
    text: 'El diagrama que representa la selección es',
    opts: ["A. Diagrama con todas las combinaciones posibles.", "B. Diagrama con solo algunas combinaciones.", "C. Diagrama con selección aleatoria de CD.", "D. Diagrama con un solo tipo de canción."],
    correct: 0,
    hint: "Cada CD tiene canciones de ambos géneros.",
    comp: "Interpretación",
    nivel: 3,
    explain: "Debe mostrar todas las combinaciones posibles."
  },
  {
    id: 1019, simulacros: [2], subject: 'mat',
    context: 'Gráfica: amplitud 2, trasladada 36 unidades, periodo 3.',
    text: 'La expresión corresponde a',
    opts: ["A. F(t) = 2cos(2πt/3) + 36", "B. F(t) = 3cos(2πt/3) + 38", "C. F(t) = 2sen(2πt/3) + 36", "D. F(t) = 3sen(2πt/3) + 38"],
    correct: 2,
    hint: "La amplitud es 2 y está trasladada 36 unidades.",
    comp: "Formulación y ejecución",
    nivel: 3,
    explain: "F(t) = 2sen(2πt/3) + 36."
  },
  {
    id: 1020, simulacros: [2], subject: 'mat',
    context: 'Velocidad máxima: 100 km/h. Pilar afirma que en 100 horas avanzará 1 km.',
    text: 'La afirmación de Pilar es',
    opts: ["A. falsa, porque a la velocidad máxima recorrerá 100 km en una hora.", "B. verdadera, porque al dividir la velocidad máxima entre 100 horas se obtiene 1 km.", "C. falsa, porque en 100 horas el auto recorrerá 100 km.", "D. verdadera, porque al dividir 100 entre 1 se obtiene el valor 100."],
    correct: 0,
    hint: "100 km/h significa 100 km en 1 hora.",
    comp: "Argumentación",
    nivel: 2,
    explain: "100 km/h × 100 h = 10000 km. Es falsa."
  },

  // LC - Lectura Crítica (20 preguntas)
  {
    id: 2001, simulacros: [2], subject: 'lc',
    context: 'LA CONTAMINACIÓN MARINA: Texto sobre la contaminación de los océanos.',
    text: '¿Cuál es la relación argumentativa entre los dos enunciados?',
    opts: ["A. Premisa/evidencia.", "B. Introducción/descripción.", "C. Antecedente/fundamento.", "D. Conjetura/contraevidencia."],
    correct: 3,
    hint: "El segundo enunciado contradice al primero.",
    comp: "Comprensión",
    nivel: 3,
    explain: "Es conjetura (creencia) y contraevidencia (estudios que la contradicen)."
  },
  {
    id: 2002, simulacros: [2], subject: 'lc',
    context: 'Texto sobre contaminación marina.',
    text: '¿Cuál puede considerarse la antítesis del argumento central?',
    opts: ["A. La respuesta al problema es la dilución.", "B. Las iniciativas de protección son inexistentes.", "C. Los océanos han sido contaminados durante miles de años.", "D. Los humanos han comenzado a advertir la insostenibilidad."],
    correct: 0,
    hint: "La antítesis sería lo opuesto al argumento principal.",
    comp: "Reflexión",
    nivel: 3,
    explain: "La antítesis es que la dilución es la solución."
  },
  {
    id: 2003, simulacros: [2], subject: 'lc',
    context: 'Los científicos han descubierto 400 zonas muertas.',
    text: 'El enunciado de las 400 zonas',
    opts: ["A. refuerza la postura de los que promueven la dilución.", "B. controvierte la tesis sobre el incremento.", "C. prueba que la devastación es responsabilidad industrial.", "D. refuta que la contaminación sea un fenómeno reciente."],
    correct: 2,
    hint: "Las zonas muertas prueban consecuencias reales.",
    comp: "Comprensión",
    nivel: 2,
    explain: "Las zonas muertas prueban la devastación por contaminación."
  },
  {
    id: 2004, simulacros: [2], subject: 'lc',
    context: 'El texto utiliza evidencia científica para probar su tesis.',
    text: '¿Qué recurso emplean los autores?',
    opts: ["A. Evidencia científica.", "B. Un estudio de caso.", "C. Datos gubernamentales.", "D. Investigaciones propias."],
    correct: 0,
    hint: "El texto cita estudios y datos científicos.",
    comp: "Reflexión",
    nivel: 2,
    explain: "Los autores usan evidencia científica."
  },
  {
    id: 2005, simulacros: [2], subject: 'lc',
    context: 'Texto filosófico de Descartes sobre la mente.',
    text: 'Cuando afirma "es posible que juzgue que toco la tierra aunque no haya tierra, pero no es posible que yo juzgue esto y mi mente no sea nada", pretende',
    opts: ["A. probar que no hay certeza sobre la existencia de la mente.", "B. señalar que no hay certeza de la existencia de la tierra.", "C. mostrar que es posible equivocarse en un juicio.", "D. demostrar la existencia de quien juzga."],
    correct: 3,
    hint: "El enunciado busca probar algo sobre la mente.",
    comp: "Reflexión",
    nivel: 4,
    explain: "Busca probar que la mente existe porque está juzgando."
  },
  {
    id: 2006, simulacros: [2], subject: 'lc',
    context: 'No hay cualidades de la nada.',
    text: 'La afirmación permite',
    opts: ["A. sostener que si hay cualidades, existe algo a lo que pertenecen.", "B. afirmar que aunque existe una sustancia no podemos conocer sus cualidades.", "C. sostener que si existe una sustancia, entonces podemos observar sus cualidades.", "D. demostrar que si conocemos algo, entonces existen sus cualidades."],
    correct: 0,
    hint: "La nada no puede tener cualidades, debe haber algo.",
    comp: "Comprensión",
    nivel: 3,
    explain: "Si hay cualidades, debe haber algo a lo que pertenecen."
  },
  {
    id: 2007, simulacros: [2], subject: 'lc',
    context: 'Es posible que yo juzgue y mi mente no sea nada.',
    text: 'De acuerdo con Descartes, nuestra mente existe porque',
    opts: ["A. cuanto más observemos algo, más claramente la conoceremos.", "B. no es posible que yo juzgue algo y mi mente no sea nada.", "C. no existen los cuerpos, aunque los toque y los vea.", "D. conocemos nuestra mente más certésamente que el cuerpo."],
    correct: 1,
    hint: "La mente debe existir porque está haciendo un juicio.",
    comp: "Reflexión",
    nivel: 4,
    explain: "Si la mente juzga, debe existir."
  },
  {
    id: 2008, simulacros: [2], subject: 'lc',
    context: 'Es evidente por luz natural que no hay cualidades de la nada.',
    text: 'Con la expresión "luz natural", el autor se refiere a',
    opts: ["A. una facultad de la nada.", "B. una cualidad del cuerpo.", "C. una facultad de la mente.", "D. una cualidad divina."],
    correct: 2,
    hint: "La luz natural permite concluir algo sobre la nada.",
    comp: "Comprensión",
    nivel: 2,
    explain: "Se refiere a la capacidad de raciocinio de la mente."
  },
  {
    id: 2009, simulacros: [2], subject: 'lc',
    context: 'MAFALDA: "¿De quién es el discurso que hay que masticar pero no hay que tragárselo?"',
    text: 'Mafalda quiere decir que el discurso debe',
    opts: ["A. analizarse pero no hay que creerlo.", "B. aprobarse pero no hay que admitirlo.", "C. criticarse pero hay que creerlo.", "D. aprobarse pero hay que reformularlo."],
    correct: 0,
    hint: "Juega con el doble sentido de masticar y tragar.",
    comp: "Comprensión",
    nivel: 2,
    explain: "Debe analizarse pero no creerse."
  },
  {
    id: 2010, simulacros: [2], subject: 'lc',
    context: 'MAFALDA: Padre con expresión de resignación.',
    text: 'La expresión del padre se debe a que',
    opts: ["A. no está de acuerdo con lo que dice Mafalda.", "B. no entendió lo que Mafalda quería decir.", "C. le disgustó que Mafalda lo interrumpiera.", "D. no esperaba la interpretación de Mafalda."],
    correct: 3,
    hint: "La expresión es de resignación, no de desacuerdo.",
    comp: "Comprensión",
    nivel: 3,
    explain: "No esperaba la interpretación irónica."
  },
  {
    id: 2011, simulacros: [2], subject: 'lc',
    context: 'MAFALDA: Cómic sobre el discurso político.',
    text: '¿Qué supuesto implícito describe el cómic?',
    opts: ["A. Los discursos de los políticos son engañosos.", "B. Los chicles son malos para la salud.", "C. Los padres no entienden a sus hijos.", "D. Los discursos de los políticos son difíciles."],
    correct: 0,
    hint: "La crítica se dirige al discurso político.",
    comp: "Reflexión",
    nivel: 4,
    explain: "Critica que los discursos políticos son engañosos."
  },
  {
    id: 2012, simulacros: [2], subject: 'lc',
    context: 'MAFALDA: Cómic sobre discurso y chicle.',
    text: 'El autor pretende',
    opts: ["A. criticar la manera como los políticos hacen sus discursos.", "B. llamar la atención sobre cómo debemos tomar los discursos políticos.", "C. mostrar la relación entre comer chicle y los discursos.", "D. disuadir de escuchar los discursos de los políticos."],
    correct: 0,
    hint: "El chicle es una excusa para criticar algo.",
    comp: "Reflexión",
    nivel: 4,
    explain: "Critica los discursos engañosos de los políticos."
  },
  {
    id: 2013, simulacros: [2], subject: 'lc',
    context: 'LA NIEVE DEL ALMIRANTE: Texto sobre un marinero melancólico.',
    text: '¿Cuál NO explica el desasosiego del personaje?',
    opts: ["A. La insatisfacción con su vida en general.", "B. El terreno agreste en que se encuentra.", "C. Los negocios pendientes con Abdul Bashur.", "D. La creencia de haber tomado malas decisiones."],
    correct: 2,
    hint: "Los negocios con Abdul no le generan preocupación.",
    comp: "Comprensión",
    nivel: 2,
    explain: "Los negocios no son motivo de desasosiego."
  },
  {
    id: 2014, simulacros: [2], subject: 'lc',
    context: 'Y aquí voy, río arriba, como un necio...',
    text: 'La narración ocurre en',
    opts: ["A. una cueva de iguanas.", "B. un navío en el río Bósforo.", "C. un lugar desértico lejos del mar.", "D. una embarcación, en algún río."],
    correct: 3,
    hint: "El personaje va río arriba.",
    comp: "Comprensión",
    nivel: 1,
    explain: "La narración ocurre en una embarcando subiendo por un río."
  },
  {
    id: 2015, simulacros: [2], subject: 'lc',
    context: 'Reflexiones del personaje sobre su vida.',
    text: 'El autor utiliza',
    opts: ["A. eufemismos para expresar disgusta sin ofender.", "B. reflexiones para presentar la experiencia y el estado de ánimo.", "C. juegos de palabras para asociar conceptos y recalcar el hastío.", "D. redundancias para generar un tono triste."],
    correct: 1,
    hint: "El personaje reflexiona sobre su vida.",
    comp: "Reflexión",
    nivel: 3,
    explain: "Utiliza reflexiones para presentar su experiencia y estado de ánimo."
  },
  {
    id: 2016, simulacros: [2], subject: 'lc',
    context: 'En la selva, río arriba...',
    text: 'La narración ocurre durante',
    opts: ["A. una temporada de artera mudanza.", "B. un periodo de monotonía de la selva.", "C. un viaje hacia una zona selvática.", "D. una época lejana en Valencia y Toulon."],
    correct: 1,
    hint: "El personaje ya está en la selva.",
    comp: "Comprensión",
    nivel: 2,
    explain: "Ocurre durante su monótono viaje por el río."
  },
  {
    id: 2017, simulacros: [2], subject: 'lc',
    context: 'EL RÍO (Yagé): Texto sobre el proceso del yagé.',
    text: 'La continuación más coherente sería',
    opts: ["A. Los indios persistieron y se hicieron hábiles en la manipulación.", "B. Ingeridos oralmente, estos compuestos no producen efecto.", "C. En el caso del curare, la corteza se coloca debajo de una hoja.", "D. Los indios tenían sus propias explicaciones cosmológicas."],
    correct: 0,
    hint: "El texto termina hablando del tanteo y la corteza.",
    comp: "Reflexión",
    nivel: 4,
    explain: "Debe continuar hablando de cómo lograron las mezclas."
  },
  {
    id: 2018, simulacros: [2], subject: 'lc',
    context: 'El problema del tanteo...',
    text: 'El autor concluye que',
    opts: ["A. la ciencia tradicional es infalible.", "B. el tanteo no es una explicación adecuada.", "C. el vómito y la diarrea prueban el tanteo.", "D. las teorías de Schultes eran acertadas."],
    correct: 1,
    hint: "El tanteo no explica cómo descubrieron las combinaciones.",
    comp: "Comprensión",
    nivel: 3,
    explain: "El tanteo no es adecuado para explicar las preparaciones."
  },
  {
    id: 2019, simulacros: [2], subject: 'lc',
    context: 'Cuando el yagé se combina con alguna de las dos plantas...',
    text: 'La palabra "alguna" indica que el efecto es cuando se le agregan',
    opts: ["A. ambas plantas.", "B. una u otra planta.", "C. solo la Psychotria virids.", "D. solo la Dyplopterys cabrerana."],
    correct: 1,
    hint: "Alguna indica que puede ser una u otra.",
    comp: "Comprensión",
    nivel: 2,
    explain: "Se refiere a una u otra planta."
  },
  {
    id: 2020, simulacros: [2], subject: 'lc',
    context: 'Dos primeros párrafos del texto sobre Yagé.',
    text: 'Es acertado afirmar que',
    opts: ["A. el primero presenta la tesis y el segundo la complementa.", "B. el primero introduce el tema y el segundo presenta la tesis.", "C. el primero presenta la estructura y el segundo la desarrolla.", "D. el primero introduce el tema y el segundo lo desarrolla."],
    correct: 3,
    hint: "El primer párrafo presenta el tema general.",
    comp: "Comprensión",
    nivel: 3,
    explain: "El primero introduce el tema, el segundo lo desarrolla con ejemplos."
  }
];

// Función para obtener preguntas de un simulacro específico
function getQuestionsForSimulacro(simulacroId) {
  return QUESTIONS.filter(q => q.simulacros.includes(simulacroId));
}

// Función para obtener preguntas por materia
function getQuestionsBySubject(subject) {
  return QUESTIONS.filter(q => q.subject === subject);
}
