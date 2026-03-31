// Banco centralizado de preguntas
// Cada pregunta tiene:
// - id: identificador único
// - simulators: array de simulacros a los que pertenece (ej: [1] o [1,2])
// - subject: clave de la materia (lc, mat, soc, cn, ing)
// - context: contexto de la pregunta (HTML)
// - contextImg: imagen de contexto (opcional)
// - questionImg: imagen de la pregunta (opcional)
// - text: enunciado
// - options: opciones de respuesta
// - optionsImg: imágenes de opciones (opcional)
// - correct: índice de respuesta correcta (0-3)
// - competency: competencia evaluada
// - level: nivel de dificultad (1-4)
// - assertion: afirmación
// - evidence: evidencia
// - component: componente
// - standard: estándar asociado
// - skill: pensamiento asociado
// - evaluationCriteria: qué evalúa
// - justification: justificación/explicación
// - invalidOptions: opciones no válidas

const QUESTIONS = [
  {
    id: 1,
    simulators: [1,2],
    subject: 'lc',
    context: `<p><strong>LA CONTAMINACIÓN MARINA</strong></p><p>Debido a la inmensidad y profundidad de los océanos, hasta hace poco se creía que podrían ser utilizados para verter basura y sustancias químicas en cantidades ilimitadas sin que esto tuviera consecuencias importantes. Los partidarios de continuar con los vertidos en los océanos incluso tienen un eslogan: "La solución a la contaminación es la dilución". En la actualidad, basta con fijarse en la zona muerta del tamaño del estado de Nueva Jersey que se forma cada verano en el delta del Río Mississippi, o en la extensión de 1.600 kilómetros de plástico en descomposición en el Pacífico Norte para darse cuenta de que esta ideología de la "dilución" ha contribuido a llevar al borde del colapso lo que tiempo atrás fue un ecosistema oceánico próspero. Existen pruebas de que los océanos han sufrido a manos del hombre durante miles de años. Sin embargo, estudios recientes demuestran que la degradación, especialmente en las zonas costeras, se ha acelerado notablemente en los últimos tres siglos a medida que han aumentado los vertidos industriales y los contaminantes procedentes de explotaciones agrarias y ciudades costeras.</p><p>Algunos de los contaminantes más comunes derivados de la actividad humana son los plaguicidas, fertilizantes químicos, detergentes, hidrocarburos, aguas residuales, plásticos y otros sólidos. Muchos de estos contaminantes se acumulan en las profundidades del océano, donde son ingeridos por pequeños organismos marinos a través de los cuales se introducen en la cadena alimentaria global. Los fertilizantes ricos en nitrógeno que utilizan los productores agrícolas en zonas del interior, por ejemplo, acaban en las corrientes, ríos y aguas subterráneas locales, y más tarde se depositan en los estuarios, bahías y deltas. Este exceso de nutrientes puede provocar un crecimiento masivo de algas que consumen el oxígeno del agua, lo cual genera zonas en las que no puede haber vida marina o apenas existe. Los científicos han descubierto 400 zonas muertas con estas características por todo el planeta. Los humanos comienzan a percatarse de la insostenibilidad de la filosofía de la "dilución". Muchas leyes nacionales y protocolos internacionales prohíben en la actualidad el vertido de sustancias nocivas en los océanos, si bien su aplicación es a menudo incierta. Se están creando santuarios marinos con el fin de mantener ecosistemas marinos prístinos. Asimismo, se están llevando a cabo iniciativas aisladas que han logrado cierto éxito en la restauración de estuarios y bahías.</p> <div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado y adaptado de: http://www.nationalgeographic.es/el-oceano/cuestiones-criticas-sobre-el-problemas-de-la-contaminacion-marina/</em></p></div>`,
    text: '¿Cuál es la relación argumentativa entre los dos enunciados del texto que se presentan a continuación?\n"Debido a la inmensidad y profundidad de los océanos, hasta hace poco se creía que podrían ser utilizados para verter basura y sustancias químicas en cantidades ilimitadas sin que esto tuviera consecuencias importantes."\n"Estudios recientes demuestran que la degradación, especialmente en las zonas costeras, se ha acelerado notablemente en los últimos tres siglos".',
    options: ['Premisa/evidencia.', 'Introducción/descripción.', 'Antecedente/fundamento.', 'Conjetura/contraevidencia.'],
    correct: 3,
    competency: 'Comprensión lectora',
    level: '',
    assertion: 'Comprende cómo se articulan las partes de un texto para darle un sentido global.',
    evidence: 'Comprende las relaciones entre diferentes partes o enunciados de un texto.',
    component: 'Comprensión global del texto',
    standard: 'Analizo los aspectos textuales, conceptuales y formales de cada uno de los textos que leo.',
    skill: 'Identificar la relación argumentativa entre dos enunciados de un texto.',
    evaluationCriteria: 'La capacidad para identificar la relación entre dos enunciados de un texto.',
    justification: 'La opción D es la respuesta correcta, ya que el primer enunciado presenta una conjetura acerca de la posibilidad de verter basura sin consecuencias en los océanos, dada su profundidad, y el segundo enunciado señala que existen estudios que prueban que la conjetura no era correcta.',
    invalidOptions: 'Las opciones A, B y C no son correctas, ya que identifican relaciones inexistentes entre los enunciados. La opción A afirma que el primer enunciado es una premisa y el segundo una evidencia para sustentar esa premisa, pero el segundo enunciado presenta evidencia que va en contravía de lo dicho en el primero. La opción B dice que el primer enunciado es una introducción y el segundo una descripción, pero el segundo enunciado no hace una descripción; presenta evidencia de estudios para contradecir la hipótesis inicial. La opción C asegura que el primero es un antecedente y el segundo enunciado es un fundamento, pero el primer enunciado no es un antecedente de un razonamiento.',
  },


  // Pregunta de prueba con optsImg
  {
    id: 150, simulators: [1], subject: 'mat',
    context: 'Observe las siguientes figuras geométricas:',
    text: '¿Cuál de las opciones corresponde a un triángulo rectángulo?',
    options: ["A. Figura con 3 lados iguales", "B. Figura con 1 ángulo recto", "C. Figura con todos los ángulos menores a 90°", "D. Figura con 4 lados"],
    optionsImg: ['test_triangulo_eq', 'test_triangulo_recto', 'test_triangulo_acut', 'test_cuadrilatero'],
    correct: 1,
    competency: "Interpretación y representación",
    level: 2,
    justification: "La figura B tiene un ángulo de 90°, característica del triángulo rectángulo."
  },

  // MAT - Matemáticas (9 preguntas)
  {
    id: 201, simulators: [1,3], subject: 'mat',
    contextImg: 'mat_fig1',
    contextImgCaption: 'Figura 1 — Mapa de la ciudad con puntos A, B y C',
    context: 'En la figura se presenta un mapa de la vista aérea de las calles de una ciudad. Cada cuadrilátero corresponde a un cuadrado. La ruta de A a C mide 25 cm. Cada cuadrado tiene lado de 5 cm.',
    questionImg: 'mat_fig2',
    questionImgCaption: 'Figura 2 — Tres rutas posibles de A a B',
    text: 'Una persona debe ir del punto A al punto B. ¿Cuál(es) de las rutas presentadas tiene(n) longitud igual a la mostrada en la figura 1?',
    options: ["A. Solamente I.", "B. Solamente I y III.", "C. Solamente II.", "D. Solamente II y III."],
    correct: 1,
    competency: "Interpretación y representación",
    level: 3,
    justification: "Ruta I: 5 cuadrados × 5 cm = 25 cm. Ruta III: 5 cuadrados × 5 cm = 25 cm."
  },
  {
    id: 202, simulators: [1], subject: 'mat',
    context: 'La representación de los posibles caminos entre dos puntos X e Y se escribe X(n)Y, donde n es el número de caminos. Para caminos de A a B de longitud 25 cm pasando por C: de A a C la longitud debe ser 15 cm y de C a B 10 cm.',
    text: 'La representación de los posibles caminos de A a B de longitud igual a 25 cm, pasando por C, es',
    options: ["A. A(1)C(1)B", "B. A(2)C(1)B", "C. A(3)C(2)B", "D. A(4)C(2)B"],
    correct: 2,
    competency: "Formulación",
    level: 4,
    justification: "Hay 3 caminos de A a C con 15 cm y 2 caminos de C a B con 10 cm."
  },
  {
    id: 203, simulators: [1], subject: 'mat',
    questionImg: 'mat_graficas_edades',
    context: 'Al hacer una encuesta en un curso, se determinó que la mayoría de estudiantes tienen 15 años de edad.',
    text: '¿Cuál de las siguientes gráficas NO puede corresponder a la distribución de los estudiantes del curso?',
    options: ["A. Gráfica A", "B. Gráfica B", "C. Gráfica C", "D. Gráfica D"],
    correct: 2,
    competency: "Interpretación y representación",
    level: 2,
    justification: "En la gráfica C la barra más alta está en 13 años (moda = 13)."
  },
  {
    id: 204, simulators: [1], subject: 'mat',
    questionImg: 'mat_vidrios',
    context: 'Dos vidrios iguales de forma cuadrada, cada uno de área x cm², se ponen juntos en una ventana.',
    text: 'Una persona afirma que el resultado es una ventana de área 2x cm². Esta afirmación es',
    options: ["A. cierta, pues basta multiplicar el área de uno de los vidrios por 2.", "B. falsa, pues se desconocen las dimensiones de la ventana resultante.", "C. cierta, pues la ventana resultante tiene un lado de medida 2x.", "D. falsa, pues el área de la ventana resultante es x² cm⁴."],
    correct: 0,
    competency: "Argumentación",
    level: 4,
    justification: "x + x = 2x. El área total siempre es la suma de las partes."
  },
  {
    id: 205, simulators: [1], subject: 'mat',
    contextImg: 'mat_vj_ctx',
    questionImg: 'mat_vj_opts',
    context: 'La gráfica muestra el costo de producción y el precio de venta de un videojuegos en 2010. La tabla muestra el número de videojuegos vendidos por una empresa del año 2008 al 2012.',
    text: '¿Cuál de las siguientes gráficas representa correctamente la información de la tabla?',
    options: ["A. Gráfica A", "B. Gráfica B", "C. Gráfica C", "D. Gráfica D"],
    correct: 1,
    competency: "Interpretación y representación",
    level: 2,
    justification: "Las ventas bajan de 2008 a 2010 y suben de 2010 a 2012."
  },
  {
    id: 206, simulators: [1], subject: 'mat',
    context: 'Una tienda fija el anuncio: TV HD 32" → $1.200.000, Nevera 327L → $1.000.000, Lavadora 13kg → $1.100.000, Pague hasta 12 cuotas mensuales sin intereses.',
    text: 'Gustavo realiza la operación: (1.000.000 + 1.200.000) ÷ 6. Con esta operación, él halla',
    options: ["A. el costo promedio de una lavadora.", "B. el costo promedio de una nevera y un televisor.", "C. la cuota mensual si compra una lavadora a doce meses.", "D. la cuota mensual si compra una nevera y un televisor a seis meses."],
    correct: 3,
    competency: "Formulación",
    level: 2,
    justification: "Nevera + TV = $2.200.000. Dividido en 6 = cuota mensual."
  },
  {
    id: 207, simulators: [1], subject: 'mat',
    context: 'Carlos evalúa dos cursos de idiomas: Intensivo (inscripción $100.000, libro $50.000, clase $30.000, descuento 20%) vs Extensivo (inscripción $100.000, libro $50.000, clase $10.000, descuento 10%).',
    text: 'La información es insuficiente porque',
    options: ["A. no conoce las formas de pago de cada curso.", "B. necesita saber la cantidad de clases que ofrece cada curso.", "C. no sabe cuánto es el descuento por cada clase.", "D. necesita conocer el valor total del curso para aplicar el descuento."],
    correct: 1,
    competency: "Argumentación",
    level: 3,
    justification: "Sin saber cuántas clases tiene cada curso, no se puede calcular el costo total."
  },
  {
    id: 208, simulators: [1], subject: 'mat',
    context: 'Se encuestarán 2.000 personas para conocer intención de voto. El 60% de los votantes tienen entre 18 y 38 años; el 40% restante son mayores de 39 años.',
    text: 'La encuesta representará la intención de voto de toda la población, cuando la cantidad de encuestados entre los 18 y 38 años sea',
    options: ["A. 2.000", "B. 1.200", "C. 1.000", "D. 600"],
    correct: 1,
    competency: "Formulación",
    level: 3,
    justification: "60% × 2.000 = 1.200 personas entre 18 y 38 años."
  },
  {
    id: 209, simulators: [1], subject: 'mat',
    questionImg: 'mat_mnop',
    context: 'En la figura se representa el cuadrilátero MNOP con la medida de algunos de sus lados, ángulos y de una de sus diagonales.',
    text: 'Los lados PO y MN del cuadrilátero son paralelos porque',
    options: ["A. MO es congruente con MN.", "B. γ es congruente con β.", "C. PM es congruente con NO.", "D. α es congruente con δ."],
    correct: 3,
    competency: "Argumentación",
    level: 4,
    justification: "α y δ son ángulos alternos internos. Como α = δ = 40°, entonces PO ∥ MN."
  },

  // SOC - Sociales (9 preguntas)
  {
    id: 301, simulators: [1], subject: 'soc',
    context: 'La Constitución de 1991 estableció que los gobernadores y alcaldas contraen con sus electores la obligación de cumplir el programa de gobierno que presentaron al inscribirse como candidatos.',
    text: 'El incumplimiento del programa puede dar lugar a que',
    options: ["A. los gobernantes le consulten al pueblo qué deben hacer.", "B. la elección de los gobernantes sea revocada por decisión popular.", "C. se convoque al pueblo para que apruebe o rechace normas del país.", "D. el presidente decida si se aprueban las decisiones de los gobernantes."],
    correct: 1,
    competency: "Pensamiento social",
    level: 2,
    justification: "La revocatoria del mandato permite a los ciudadanos revocar un gobernante que incumplió."
  },
  {
    id: 302, simulators: [1], subject: 'soc',
    context: 'Empleados de una empresa se quejan permanentemente del alto volumen de ruido que deben soportar a diario en sus instalaciones de trabajo.',
    text: '¿Qué derecho pueden invocar los trabajadores para pedirle a la empresa que tome medidas para disminuir el ruido?',
    options: ["A. Tener un acceso equitativo a la salud.", "B. Tener un trato justo y equitativo ante la ley.", "C. Tener igualdad de oportunidades para trabajar.", "D. Tener un entorno ambiental sano."],
    correct: 3,
    competency: "Pensamiento social",
    level: 2,
    justification: "El artículo 79 de la Constitución garantiza el derecho a un ambiente sano."
  },
  {
    id: 303, simulators: [1], subject: 'soc',
    context: '',
    text: 'De los siguientes factores, ¿cuáles se relacionan, de manera directa, con el surgimiento de movimientos guerrilleros en Colombia en la década de los años 1960? 1. El auge del negocio del narcotráfico. 2. La difusión de las ideas de la Revolución cubana. 3. El asesinato de integrantes de la Unión Patriótica. 4. Los problemas de distribución de la tierra en el sector rural.',
    options: ["A. 1 y 3", "B. 2 y 4", "C. 2 y 3", "D. 1 y 4"],
    correct: 1,
    competency: "Pensamiento social",
    level: 4,
    justification: "Las ideas de la Revolución cubana y los problemas de tierras sí influyeron en los 60."
  },
  {
    id: 304, simulators: [1], subject: 'soc',
    context: 'Un joven de 20 años compra material pornográfico con imágenes de adolescentes menores de edad. Sus padres señalan las implicaciones legales. El joven invoca su mayoría de edad y libertad de consumo.',
    text: 'En esta situación se presenta un conflicto porque',
    options: ["A. los padres no conocen los derechos sexuales de los jóvenes.", "B. los padres tienen en cuenta las implicaciones de la explotación sexual de menores y el joven no.", "C. los padres no tienen en cuenta que los menores hacen actividades de manera voluntaria.", "D. los padres ven a todos los jóvenes como niños."],
    correct: 1,
    competency: "Interpretación y análisis de perspectivas",
    level: 2,
    justification: "Los padres reconocen el daño de la explotación sexual de menores."
  },
  {
    id: 305, simulators: [1], subject: 'soc',
    context: '<em>Editorial de El Tiempo:</em> "En Rusia y en todos los países sometidos a la órbita despótica, los derechos humanos no han tenido reconocimiento alguno... En contraste, en el mundo libre la Declaración de los Derechos Humanos ha encontrado fervorosa y progresiva aplicación..."',
    text: 'Por su contenido, este editorial puede relacionarse de manera directa con el contexto de',
    options: ["A. la Violencia política en Colombia.", "B. la Primera Guerra Mundial.", "C. la Guerra Fría.", "D. la Revolución Bolchevique."],
    correct: 2,
    competency: "Interpretación y análisis de perspectivas",
    level: 3,
    justification: "La oposición entre el modelo soviético y las democracias occidentales sitúa el texto en la Guerra Fría."
  },
  {
    id: 306, simulators: [1], subject: 'soc',
    context: '<em>Comunicado del consulado estadounidense en Santa Marta, diciembre 1928:</em> "El sentimiento contra el Gobierno... es dudoso si podemos depender del gobierno colombiano para la protección..."',
    text: 'Esta descripción de las circunstancias previas a la Masacre de las Bananeras puede ponerse en duda porque',
    options: ["A. se afirma que el carácter de la huelga ha cambiado sin señalar los aspectos centrales del cambio.", "B. es un estadounidense y no un huelguista el que argumenta.", "C. se da por sentada una relación entre las Fuerzas Armadas y los huelguistas sin aportar evidencias.", "D. las comunicaciones entre cónsules debían tener el visto bueno del Gobierno colombiano."],
    correct: 2,
    competency: "Interpretación y análisis de perspectivas",
    level: 3,
    justification: "La fuente afirma que soldados simpatizan con huelguistas sin aportar evidencia."
  },
  {
    id: 307, simulators: [1], subject: 'soc',
    context: '',
    text: 'Uno de los principales problemas de las grandes ciudades es la dificultad de movilidad. La solución de construir más vías puede generar efectos no deseados. ¿Cuál es uno de estos efectos?',
    options: ["A. Construir más vías disminuye la velocidad de circulación.", "B. Construir más vías genera más contaminación.", "C. Construir más vías genera más empleos en la construcción.", "D. Construir más vías incentiva el uso del automóvil."],
    correct: 1,
    competency: "Pensamiento reflexivo y sistémico",
    level: 2,
    justification: "La contaminación adicional es un efecto no deseado ni planeado."
  },
  {
    id: 308, simulators: [1], subject: 'soc',
    context: 'El Derecho Internacional Humanitario (DIH) protege a personas que no toman parte en las hostilidades: civiles, médicos y religiosos. Regula también la detención de prisioneros de guerra.',
    text: 'El objetivo central del DIH es',
    options: ["A. Proteger al personal médico que trabaja en varios países.", "B. Evitar y limitar el sufrimiento humano en tiempos de conflictos armados.", "C. Proteger a los soldados en un conflicto armado entre países.", "D. Evitar y limitar los conflictos políticos entre grupos opositores."],
    correct: 1,
    competency: "Pensamiento reflexivo y sistémico",
    level: 3,
    justification: "El DIH busca limitar el sufrimiento humano en todos los actores durante conflictos armados."
  },
  {
    id: 309, simulators: [1], subject: 'soc',
    context: '<em>Documento del CONPES (1990):</em> "Los grandes niveles de protección reducen los incentivos para buscar mejoras tecnológicas..."',
    text: 'El anterior texto justifica la implementación de una política de apertura económica, porque',
    options: ["A. sugiere que la inversión en ciencia y tecnología puede incrementar las exportaciones.", "B. describe las ventajas de proteger los sectores económicos con menos recursos.", "C. indica que la diversificación de la producción incrementa la inserción en mercados competitivos.", "D. señala que proteger la economía nacional desestima la competitividad."],
    correct: 3,
    competency: "Pensamiento reflexivo y sistémico",
    level: 4,
    justification: "El texto critica exactamente que la protección desestima la competitividad."
  },

  // CN - Ciencias Naturales (10 preguntas)
  {
    id: 401, simulators: [1], subject: 'cn',
    questionImg: 'cn_co2',
    context: '',
    text: 'Con base en el modelo del ciclo biogeoquímico del CO₂, ¿qué efecto tiene para el ecosistema el aumento de la emisión de CO₂ por causa de las fábricas?',
    options: ["A. Pérdida de la capacidad de las plantas para realizar su respiración.", "B. Incremento en la concentración de este gas en la atmósfera.", "C. Pérdida de la concentración de carbón en los combustibles fósiles.", "D. Pérdida de las bacterias anaerobias que realizan la descomposición."],
    correct: 1,
    competency: "Uso comprensivo del conocimiento científico",
    level: 3,
    justification: "Mayor emisión de CO₂ resulta en un incremento de su concentración atmosférica."
  },
  {
    id: 402, simulators: [1], subject: 'cn',
    questionImg: 'cn_quimica',
    context: 'Las sustancias con el grupo C=O pueden reducirse en presencia de un catalizador M y un medio ácido para formar un alcano.',
    text: '¿Cuál de las siguientes sustancias puede reducirse para formar un alcano de 4 carbonos?',
    options: ["A. Sustancia A (alcohol de 4C sin grupo C=O)", "B. Sustancia B (molécula con Cl y N, sin C=O)", "C. Sustancia C (alcano de 5C, ya reducido)", "D. Sustancia D (cetona de 4C con grupo C=O)"],
    correct: 3,
    competency: "Uso comprensivo del conocimiento científico",
    level: 4,
    justification: "Solo D (cetona de 4C) tiene el grupo C=O necesario."
  },
  {
    id: 403, simulators: [1], subject: 'cn',
    questionImg: 'cn_estufa',
    context: 'Una estudiante pone 4 recipientes con líquidos de diferente masa en una estufa con llamas idénticas. Orden de ebullición: 1, 3, 4, 2.',
    text: '¿Cuál de los líquidos necesitó mayor energía calórica para alcanzar el punto de ebullición?',
    options: ["A. El del recipiente 3.", "B. El del recipiente 4.", "C. El del recipiente 1.", "D. El del recipiente 2."],
    correct: 3,
    competency: "Uso comprensivo del conocimiento científico",
    level: 3,
    justification: "El recipiente 2 tardó más tiempo, por tanto absorbió más energía calórica total."
  },
  {
    id: 404, simulators: [1], subject: 'cn',
    questionImg: 'cn_boya',
    context: 'Una boya se ata al fondo del mar mediante una cuerda. La boya se mantiene quieta. Las fuerzas son: flotación (↑), peso (↓) y tensión de la cuerda (↓).',
    text: 'Puede afirmarse que la boya se mantiene quieta porque',
    options: ["A. la fuerza de flotación es igual al peso de la boya sumando la tensión de la cuerda.", "B. la tensión de la cuerda más el peso de la boya es mayor que la fuerza de flotación.", "C. la fuerza de flotación es igual al peso de la boya.", "D. la fuerza de flotación es igual a la tensión de la cuerda."],
    correct: 0,
    competency: "Explicación de fenómenos",
    level: 3,
    justification: "Equilibrio: F_flotación = Peso + Tensión."
  },
  {
    id: 405, simulators: [1], subject: 'cn',
    questionImg: 'cn_fases',
    context: 'Un diagrama de fases muestra las condiciones de presión y temperatura de los estados de un compuesto. En el momento 1: presión P₁ y temperatura T₁. En el momento 2: presión P₂ y temperatura T₂ (ambos en la región sólida).',
    text: '¿Cuál es el estado del compuesto W en el momento 1 y en el momento 2?',
    options: ["A. En el momento 1 es sólido y en el momento 2 es líquido.", "B. En el momento 1 es sólido y en el momento 2 también es sólido.", "C. En el momento 1 es gas y en el momento 2 es sólido.", "D. En el momento 1 es líquido y en el momento 2 también es líquido."],
    correct: 1,
    competency: "Explicación de fenómenos",
    level: 3,
    justification: "Ambos puntos permanecen en la región sólida, no hay cambio de estado."
  },
  {
    id: 406, simulators: [1], subject: 'cn',
    questionImg: 'cn_gases',
    context: '',
    text: 'Los gases de efecto invernadero son aquellos que contribuyen al calentamiento global. ¿Cuál de los siguientes es el principal gas de efecto invernadero?',
    options: ["A. Oxígeno (O₂)", "B. Nitrógeno (N₂)", "C. Vapor de agua (H₂O)", "D. CO₂"],
    correct: 3,
    competency: "Uso comprensivo del conocimiento científico",
    level: 2,
    justification: "El CO₂ es el principal gas de efecto invernadero causado por actividades humanas."
  },
  {
    id: 407, simulators: [1], subject: 'cn',
    questionImg: 'cn_geotermica',
    context: '',
    text: 'La energía geotérmica es una fuente de energía renovable. ¿Cuál es su principal ventaja?',
    options: ["A. Es contaminante.", "B. No depende del clima.", "C. Es muy cara de explotar.", "D. Tiene alto impacto visual."],
    correct: 1,
    competency: "Uso comprensivo del conocimiento científico",
    level: 2,
    justification: "La energía geotérmica no depende del clima y está disponible constantemente."
  },
  {
    id: 408, simulators: [1], subject: 'cn',
    questionImg: 'cn_ph',
    context: '',
    text: 'El pH es una medida de la acidez o basicidad de una solución. ¿Cuál es el rango típico del pH neutro?',
    options: ["A. 0-3", "B. 4-6", "C. 7", "D. 8-10"],
    correct: 2,
    competency: "Uso comprensivo del conocimiento científico",
    level: 1,
    justification: "El pH neutro es 7, valores menores son ácidos y mayores son básicos."
  },
  {
    id: 409, simulators: [1], subject: 'cn',
    questionImg: 'cn_geotermica',
    context: '',
    text: 'La energía geotérmica se obtiene del calor interno de la Tierra. ¿Qué tipo de energía transforma?',
    options: ["A. Energía nuclear en energía térmica", "B. Energía química en energía eléctrica", "C. Energía térmica en energía eléctrica", "D. Energía mecánica en energía química"],
    correct: 2,
    competency: "Explicación de fenómenos",
    level: 2,
    justification: "La energía geotérmica transforma energía térmica en eléctrica."
  },
  {
    id: 410, simulators: [1], subject: 'cn',
    context: '',
    text: '¿Cuál de las siguientes es una característica de los seres vivos que los distingue de la materia inerte?',
    options: ["A. Estar compuestos de átomos", "B. Realizar reacciones químicas", "C. Tener células", "D. Ocupar espacio"],
    correct: 2,
    competency: "Uso comprensivo del conocimiento científico",
    level: 1,
    justification: "Tener células es la característica que define a los seres vivos."
  },

  // ING - Inglés (4 preguntas)
  {
    id: 501, simulators: [1], subject: 'ing',
    context: 'Read the following text and answer the question: "The Amazon rainforest is the largest tropical rainforest in the world. It is located in South America, mainly in Brazil."',
    text: 'Where is the Amazon rainforest located?',
    options: ["A. Africa", "B. South America", "C. Asia", "D. North America"],
    correct: 1,
    competency: "Reading comprehension",
    level: 1,
    justification: "The text states it is located in South America."
  },
  {
    id: 502, simulators: [1], subject: 'ing',
    context: 'Choose the correct sentence:',
    text: 'She _____ to the store yesterday.',
    options: ["A. go", "B. goes", "C. went", "D. going"],
    correct: 2,
    competency: "Grammar",
    level: 1,
    justification: "Went is the past simple of go."
  },
  {
    id: 503, simulators: [1,2], subject: 'ing',
    context: 'Choose the correct definition for "environment":',
    text: 'The word "environment" means:',
    options: ["A. A type of animal", "B. The conditions around us", "C. A type of food", "D. A building"],
    correct: 1,
    competency: "Vocabulary",
    level: 1,
    justification: "Environment means the conditions that surround us."
  },
  {
    id: 504, simulators: [1], subject: 'ing',
    context: 'Complete the sentence: "If it _____ tomorrow, I will stay home."',
    text: 'Choose the correct option:',
    options: ["A. rains", "B. rained", "C. raining", "D. rain"],
    correct: 0,
    competency: "Grammar",
    level: 2,
    justification: "First conditional uses present simple after if."
  },

  // ============================================
  // PREGUNTAS DE SIMULACRO 2
  // ============================================
  // MAT - Matemáticas (20 preguntas)
  {
    id: 1001, simulators: [2], subject: 'mat',
    context: 'En una bolsa hay 3 bolas rojas, 3 negras y 12 blancas.',
    text: 'Una persona afirma que al sacar una bola al azar, los tres colores tienen la misma probabilidad. Esta afirmación es',
    options: ["A. verdadera, pues el número de bolas de cada color no importa.", "B. falsa, pues no se sabe el número total de bolas en la bolsa.", "C. falsa, pues hay más bolas de un color que de los otros dos.", "D. verdadera, pues las bolas están repartidas de igual manera."],
    correct: 2,
    competency: "Argumentación",
    level: 2,
    justification: "En la bolsa hay 18 bolas: 3 rojas, 3 negras, 12 blancas. Las probabilidades son 3/18, 3/18, 12/18."
  },
  {
    id: 1002, simulators: [2], subject: 'mat',
    context: 'Con respecto a la vertical, la torre se ha inclinado 4°.',
    text: '¿Cuánto mide el otro ángulo?',
    options: ["A. 4°", "B. 14°", "C. 86°", "D. 90°"],
    correct: 2,
    competency: "Interpretación",
    level: 2,
    justification: "Como el ángulo de inclinación es 4°, el otro ángulo mide 90° - 4° = 86°."
  },
  {
    id: 1003, simulators: [2], subject: 'mat',
    context: 'En la tabla se relaciona la cantidad de personas que ingresó cada día durante una semana.',
    text: '¿Qué porcentaje del total de personas entraron sin hacer reserva?',
    options: ["A. 56 %", "B. 50 %", "C. 44 %", "D. 40 %"],
    correct: 2,
    competency: "Interpretación",
    level: 3,
    justification: "Total sin reserva: 3100. Total: 7000. Porcentaje: (3100/7000) × 100 ≈ 44%."
  },
  {
    id: 1004, simulators: [2], subject: 'mat',
    context: 'El proceso: 1. Sumar personas sin reserva, 2. Multiplicar por 17, 3. Sumar personas con reserva, 4. Multiplicar por 22.5.',
    text: '¿Cuál pregunta NO se puede resolver con este proceso?',
    options: ["A. ¿Con cuál tipo de entrada se recaudó más dinero?", "B. ¿Cuántas personas ingresaron en la semana?", "C. ¿Cuál es la ganancia total del sitio turístico?", "D. ¿Cuánto dinero se recaudó por tipo de entrada?"],
    correct: 2,
    competency: "Interpretación",
    level: 2,
    justification: "No se pueden calcular ganancias porque no se conocen los gastos."
  },
  {
    id: 1005, simulators: [2], subject: 'mat',
    context: 'Con los datos de la tabla (precios de 17€ y 22.5€).',
    text: 'El recaudo total de la semana fue aproximadamente de',
    options: ["A. 14 mil euros", "B. 140 mil euros", "C. 120 euros", "D. 120.000 euros"],
    correct: 1,
    competency: "Formulación y ejecución",
    level: 2,
    justification: "3100 × 17 = 52700, 3900 × 22.5 = 87750, Total ≈ 140000."
  },
  {
    id: 1006, simulators: [2], subject: 'mat',
    context: 'La mediana de turistas sin reserva es 300; con reserva es 600.',
    text: '¿Es correcto afirmar que entran el doble de turistas con reserva?',
    options: ["A. No, la mediana es una medida de localización central.", "B. No, la mediana muestra la dispersión de los datos.", "C. Sí, la mediana me da el promedio de los datos.", "D. Sí, la mediana me da la mitad de los datos."],
    correct: 0,
    competency: "Argumentación",
    level: 3,
    justification: "La mediana es el valor central, no caracteriza totales."
  },
  {
    id: 1007, simulators: [2], subject: 'mat',
    context: 'Figuras de piscinas: 12, 18, 24 baldosas azules.',
    text: 'Según las figuras, puede afirmarse que el número de baldosas',
    options: ["A. azules se incrementa en seis de una piscina a la siguiente.", "B. blancas aumenta en ocho a medida que crece el tamaño.", "C. azules es el doble de la cantidad de baldosas blancas.", "D. blancas es la tercera parte de las baldosas azules."],
    correct: 0,
    competency: "Interpretación",
    level: 2,
    justification: "El número de baldosas azules aumenta en 6 cada vez."
  },
  {
    id: 1008, simulators: [2], subject: 'mat',
    context: 'Se lanzan cuatro fichas: una azul doble, una blanca doble, y dos mixtas.',
    text: '¿Cuál evento es imposible que ocurra?',
    options: ["A. Obtener una cara azul y tres blancas.", "B. Obtener dos caras azules y dos blancas.", "C. Obtener tres caras azules y una blanca.", "D. Obtener cuatro caras azules y cero blancas."],
    correct: 3,
    competency: "Formulación y ejecución",
    level: 3,
    justification: "Siempre hay al menos una cara blanca por la ficha blanca doble."
  },
  {
    id: 1009, simulators: [2], subject: 'mat',
    context: 'El costo de la boleta según edad: 0-8: $5000, 8-16: $7000, 16-56: $10000, >56: $6000.',
    text: 'La gráfica que representa esta función es',
    options: ["A. Gráfica escalonada con los cuatro intervalos.", "B. Gráfica con puntos unidos por segmentos.", "C. Gráfica con línea continua.", "D. Gráfica con valores en eje equivocado."],
    correct: 0,
    competency: "Interpretación",
    level: 2,
    justification: "Es una función escalonada con intervalos definidos."
  },
  {
    id: 1010, simulators: [2], subject: 'mat',
    context: 'Ángulo M = 150°. Análisis: I. M=150°, N=180°-150°. II. N=30°. III. La suma debe ser 160°.',
    text: '¿En qué paso se comete un error?',
    options: ["A. I, porque N debe ser 10°.", "B. III, porque la suma debe ser 180°.", "C. VII, porque O<130° no quiere decir O<150°.", "D. VIII, porque si O<150° la cometa no volará."],
    correct: 1,
    competency: "Argumentación",
    level: 3,
    justification: "La suma de los ángulos debe ser 180°, no 160°."
  },
  {
    id: 1011, simulators: [2], subject: 'mat',
    context: 'Encuesta a 200 clientes: Excelente 10%, Bueno 35%, Regular 40%, Malo 15%.',
    text: 'La afirmación verdadera es:',
    options: ["A. Más de 30 clientes consideran excelente el servicio.", "B. Menos de 50 clientes consideran regular el servicio.", "C. Menos de 55 clientes están satisfechos.", "D. Más de 60 clientes consideran bueno el servicio."],
    correct: 3,
    competency: "Argumentación",
    level: 3,
    justification: "35% de 200 = 70 clientes. Más de 60 es verdadero."
  },
  {
    id: 1012, simulators: [2], subject: 'mat',
    context: 'Construcción geométrica: dividir MN en dos partes congruentes.',
    text: 'La construcción correcta fue',
    options: ["A. Dos triángulos con MN como lado.", "B. Triángulos congruentes sin intersección.", "C. M y N como centros de circunferencias.", "D. Dos triángulos equiláteros sobre MN con PQ intersectando MN."],
    correct: 3,
    competency: "Formulación y ejecución",
    level: 3,
    justification: "Se deben construir dos triángulos equiláteros sobre MN."
  },
  {
    id: 1013, simulators: [2], subject: 'mat',
    context: 'Plan de 220 minutos. Consumo: 331 minutos. Consumo adicional: 111 minutos.',
    text: 'El tiempo adicional consumido fue:',
    options: ["A. 1 hora y 11 minutos.", "B. 1 hora y 51 minutos.", "C. 3 horas y 40 minutos.", "D. 5 horas y 31 minutos."],
    correct: 1,
    competency: "Formulación y ejecución",
    level: 2,
    justification: "111 minutos = 1 hora + 51 minutos."
  },
  {
    id: 1014, simulators: [2], subject: 'mat',
    context: 'Diferencia entre valor del minuto del plan y el adicional es $35.42.',
    text: '¿Qué dato NO se necesita?',
    options: ["A. La cantidad de minutos del plan.", "B. El valor del consumo adicional.", "C. El total de cargos del mes.", "D. El valor del plan local."],
    correct: 2,
    competency: "Formulación y ejecución",
    level: 3,
    justification: "El total de cargos no es necesario para la diferencia."
  },
  {
    id: 1015, simulators: [2], subject: 'mat',
    context: 'Nivel III: 6 horas máximo. Turno 180, llamado cuando tablero muestra 240.',
    text: '¿Cuántas personas por hora llegaron mientras Isabel estuvo allí?',
    options: ["A. 60 personas por hora.", "B. 40 personas por hora.", "C. 15 personas por hora.", "D. 10 personas por hora."],
    correct: 3,
    competency: "Formulación y ejecución",
    level: 3,
    justification: "60 personas / 6 horas = 10 personas por hora."
  },
  {
    id: 1016, simulators: [2], subject: 'mat',
    context: 'Cuadrilátero se traslada 1 unidad a la izquierda, luego se amplía al doble.',
    text: 'Las coordenadas de los otros dos vértices son:',
    options: ["A. (-1,5) y (3,7).", "B. (5,-1) y (7,3).", "C. (5,7) y (1,1).", "D. (1,5) y (-5,-7)."],
    correct: 0,
    competency: "Formulación y ejecución",
    level: 3,
    justification: "Siguiendo la transformación: (-1,5) y (3,7)."
  },
  {
    id: 1017, simulators: [2], subject: 'mat',
    context: 'Apartamento de $80.000.000 en cuotas: 50×1.600.000, 40×2.000.000, etc.',
    text: 'Es verdadero afirmar que',
    options: ["A. el empresario paga más por el apartamento dependiendo de las cuotas.", "B. a mayor cantidad de cuotas menor valor se pagará en cada una.", "C. solo cuando elige el menor número de cuotas paga el valor del apartamento.", "D. a mayor valor pagado por cuota, más tiempo se tardará en pagar."],
    correct: 1,
    competency: "Interpretación",
    level: 2,
    justification: "Son inversamente proporcionales: más cuotas = menor valor cada una."
  },
  {
    id: 1018, simulators: [2], subject: 'mat',
    context: 'Tres CD con canciones de salsa y merengue.',
    text: 'El diagrama que representa la selección es',
    options: ["A. Diagrama con todas las combinaciones posibles.", "B. Diagrama con solo algunas combinaciones.", "C. Diagrama con selección aleatoria de CD.", "D. Diagrama con un solo tipo de canción."],
    correct: 0,
    competency: "Interpretación",
    level: 3,
    justification: "Debe mostrar todas las combinaciones posibles."
  },
  {
    id: 1019, simulators: [2], subject: 'mat',
    context: 'Gráfica: amplitud 2, trasladada 36 unidades, periodo 3.',
    text: 'La expresión corresponde a',
    options: ["A. F(t) = 2cos(2πt/3) + 36", "B. F(t) = 3cos(2πt/3) + 38", "C. F(t) = 2sen(2πt/3) + 36", "D. F(t) = 3sen(2πt/3) + 38"],
    correct: 2,
    competency: "Formulación y ejecución",
    level: 3,
    justification: "F(t) = 2sen(2πt/3) + 36."
  },
  {
    id: 1020, simulators: [2], subject: 'mat',
    context: 'Velocidad máxima: 100 km/h. Pilar afirma que en 100 horas avanzará 1 km.',
    text: 'La afirmación de Pilar es',
    options: ["A. falsa, porque a la velocidad máxima recorrerá 100 km en una hora.", "B. verdadera, porque al dividir la velocidad máxima entre 100 horas se obtiene 1 km.", "C. falsa, porque en 100 horas el auto recorrerá 100 km.", "D. verdadera, porque al dividir 100 entre 1 se obtiene el valor 100."],
    correct: 0,
    competency: "Argumentación",
    level: 2,
    justification: "100 km/h × 100 h = 10000 km. Es falsa."
  },

  // LC - Lectura Crítica (19 preguntas)
  {
    id: 2,
    simulators: [2],
    subject: 'lc',
    context: `<p><strong>LA CONTAMINACIÓN MARINA</strong></p><p>Debido a la inmensidad y profundidad de los océanos, hasta hace poco se creía que podrían ser utilizados para verter basura y sustancias químicas en cantidades ilimitadas sin que esto tuviera consecuencias importantes. Los partidarios de continuar con los vertidos en los océanos incluso tienen un eslogan: "La solución a la contaminación es la dilución". En la actualidad, basta con fijarse en la zona muerta del tamaño del estado de Nueva Jersey que se forma cada verano en el delta del Río Mississippi, o en la extensión de 1.600 kilómetros de plástico en descomposición en el Pacífico Norte para darse cuenta de que esta ideología de la "dilución" ha contribuido a llevar al borde del colapso lo que tiempo atrás fue un ecosistema oceánico próspero. Existen pruebas de que los océanos han sufrido a manos del hombre durante miles de años. Sin embargo, estudios recientes demuestran que la degradación, especialmente en las zonas costeras, se ha acelerado notablemente en los últimos tres siglos a medida que han aumentado los vertidos industriales y los contaminantes procedentes de explotaciones agrarias y ciudades costeras.</p><p>Algunos de los contaminantes más comunes derivados de la actividad humana son los plaguicidas, fertilizantes químicos, detergentes, hidrocarburos, aguas residuales, plásticos y otros sólidos. Muchos de estos contaminantes se acumulan en las profundidades del océano, donde son ingeridos por pequeños organismos marinos a través de los cuales se introducen en la cadena alimentaria global. Los fertilizantes ricos en nitrógeno que utilizan los productores agrícolas en zonas del interior, por ejemplo, acaban en las corrientes, ríos y aguas subterráneas locales, y más tarde se depositan en los estuarios, bahías y deltas. Este exceso de nutrientes puede provocar un crecimiento masivo de algas que consumen el oxígeno del agua, lo cual genera zonas en las que no puede haber vida marina o apenas existe. Los científicos han descubierto 400 zonas muertas con estas características por todo el planeta. Los humanos comienzan a percatarse de la insostenibilidad de la filosofía de la "dilución". Muchas leyes nacionales y protocolos internacionales prohíben en la actualidad el vertido de sustancias nocivas en los océanos, si bien su aplicación es a menudo incierta. Se están creando santuarios marinos con el fin de mantener ecosistemas marinos prístinos. Asimismo, se están llevando a cabo iniciativas aisladas que han logrado cierto éxito en la restauración de estuarios y bahías.</p><p><em>Tomado y adaptado de: http://www.nationalgeographic.es/el-oceano/cuestiones-criticas-sobre-el-problemas-de-la-contaminacion-marina/</em></p>`,
    text: '¿Cuál de los siguientes enunciados puede considerarse la antítesis del argumento central del texto?',
    options: ['La respuesta al problema de la contaminación es la dilución.', 'Las iniciativas dirigidas a la protección marítima son casi inexistentes.', 'Los océanos han sido contaminados por los humanos durante miles de años.', 'Los humanos han comenzado a advertir la insostenibilidad de la filosofía de la dilución.'],
    correct: 0,
    competency: 'Comprensión lectora',
    level: 3,
    assertion: 'Comprende cómo se articulan las partes de un texto para darle un sentido global.',
    evidence: 'Identifica y caracteriza las ideas o afirmaciones presentes en un texto informativo.',
    component: 'Comprensión global del texto',
    standard: 'Diseño un esquema de interpretación, teniendo en cuenta el tipo de texto, tema, interlocutor e intención comunicativa.',
    skill: 'Inferir la tesis contraria a la tesis principal de un texto.',
    evaluationCriteria: 'La capacidad para inferir la tesis contraria a la tesis principal de un texto.',
    justification: 'La opción A es la respuesta correcta, ya que el texto argumenta que la idea de la dilución ha llevado a causar daños cada vez mayores a los océanos. La opción A afirma justamente lo contrario: que la dilución es la solución al problema de la contaminación.',
    invalidOptions: 'Las opciones B, C y D no son correctas porque presentan tesis que no se oponen a lo dicho en el texto. La opción B afirmaría que las iniciativas para proteger los océanos abundan, pero el texto no niega que existan, simplemente señala que hay más santuarios marinos e iniciativas aisladas. La opción C dice lo que el propio texto afirma explícitamente. La opción D también es algo que el texto afirma: "Los humanos comienzan a percatarse de la insostenibilidad de la filosofía de la dilución".',
  },

  {
    id: 3,
    simulators: [2],
    subject: 'lc',
    context: `<p><strong>LA CONTAMINACIÓN MARINA</strong></p><p>Debido a la inmensidad y profundidad de los océanos, hasta hace poco se creía que podrían ser utilizados para verter basura y sustancias químicas en cantidades ilimitadas sin que esto tuviera consecuencias importantes. Los partidarios de continuar con los vertidos en los océanos incluso tienen un eslogan: "La solución a la contaminación es la dilución". En la actualidad, basta con fijarse en la zona muerta del tamaño del estado de Nueva Jersey que se forma cada verano en el delta del Río Mississippi, o en la extensión de 1.600 kilómetros de plástico en descomposición en el Pacífico Norte para darse cuenta de que esta ideología de la "dilución" ha contribuido a llevar al borde del colapso lo que tiempo atrás fue un ecosistema oceánico próspero. Existen pruebas de que los océanos han sufrido a manos del hombre durante miles de años. Sin embargo, estudios recientes demuestran que la degradación, especialmente en las zonas costeras, se ha acelerado notablemente en los últimos tres siglos a medida que han aumentado los vertidos industriales y los contaminantes procedentes de explotaciones agrarias y ciudades costeras.</p><p>Algunos de los contaminantes más comunes derivados de la actividad humana son los plaguicidas, fertilizantes químicos, detergentes, hidrocarburos, aguas residuales, plásticos y otros sólidos. Muchos de estos contaminantes se acumulan en las profundidades del océano, donde son ingeridos por pequeños organismos marinos a través de los cuales se introducen en la cadena alimentaria global. Los fertilizantes ricos en nitrógeno que utilizan los productores agrícolas en zonas del interior, por ejemplo, acaban en las corrientes, ríos y aguas subterráneas locales, y más tarde se depositan en los estuarios, bahías y deltas. Este exceso de nutrientes puede provocar un crecimiento masivo de algas que consumen el oxígeno del agua, lo cual genera zonas en las que no puede haber vida marina o apenas existe. Los científicos han descubierto 400 zonas muertas con estas características por todo el planeta. Los humanos comienzan a percatarse de la insostenibilidad de la filosofía de la "dilución". Muchas leyes nacionales y protocolos internacionales prohíben en la actualidad el vertido de sustancias nocivas en los océanos, si bien su aplicación es a menudo incierta. Se están creando santuarios marinos con el fin de mantener ecosistemas marinos prístinos. Asimismo, se están llevando a cabo iniciativas aisladas que han logrado cierto éxito en la restauración de estuarios y bahías.</p><p><em>Tomado y adaptado de: http://www.nationalgeographic.es/el-oceano/cuestiones-criticas-sobre-el-problemas-de-la-contaminacion-marina/</em></p>`,
    text: 'El enunciado "Los científicos han descubierto 400 zonas muertas con estas características por todo el planeta"',
    options: [' refuerza la postura de aquellos que promueven la ideología de la "dilución".', 'controvierte la tesis sobre el incremento alarmante de la contaminación marítima.', 'apoya el argumento de la contaminación marítima a causa de la actividad humana.', 'refuta la creencia popular de que la contaminación marítima es un fenómeno reciente.'],
    correct: 2,
    competency: 'Comprensión lectora',
    level: 2,
    assertion: 'Comprende cómo se articulan las partes de un texto para darle un sentido global.',
    evidence: 'Identifica y caracteriza las ideas o afirmaciones presentes en un texto informativo.',
    component: 'Comprensión global del texto',
    standard: 'Diseño un esquema de interpretación, teniendo en cuenta el tipo de texto, tema, interlocutor e intención comunicativa.',
    skill: 'Identificar la función que cumple un enunciado dentro de un argumento.',
    evaluationCriteria: 'La capacidad para identificar la función que cumple un enunciado en un argumento en un texto.',
    justification: 'La respuesta correcta es la opción C, ya que las zonas muertas descubiertas contribuyen a probar que la devastación reciente de los océanos es responsabilidad de los vertimientos industriales y la contaminación humana.',
    invalidOptions: 'Las opciones A, B y D no son correctas porque presentan funciones que no cumple el enunciado. La opción A afirma que el descubrimiento refuerza la postura de quienes defienden la dilución, pero las zonas muertas prueban que la idea de la dilución no es correcta. La opción B dice que las zonas controvierten la tesis sobre el incremento de la contaminación marina, pero el descubrimiento de estas zonas muestra todo lo contrario. La opción D señala que refutan la creencia de que la contaminación marítima es un fenómeno reciente, pero el descubrimiento de estas zonas apoya la idea de que la contaminación marina es en ciertos sentidos un hecho sentido.',
  },

  {
    id: 4,
    simulators: [2],
    subject: 'lc',
    context: `<p><strong>LA CONTAMINACIÓN MARINA</strong></p><p>Debido a la inmensidad y profundidad de los océanos, hasta hace poco se creía que podrían ser utilizados para verter basura y sustancias químicas en cantidades ilimitadas sin que esto tuviera consecuencias importantes. Los partidarios de continuar con los vertidos en los océanos incluso tienen un eslogan: "La solución a la contaminación es la dilución". En la actualidad, basta con fijarse en la zona muerta del tamaño del estado de Nueva Jersey que se forma cada verano en el delta del Río Mississippi, o en la extensión de 1.600 kilómetros de plástico en descomposición en el Pacífico Norte para darse cuenta de que esta ideología de la "dilución" ha contribuido a llevar al borde del colapso lo que tiempo atrás fue un ecosistema oceánico próspero. Existen pruebas de que los océanos han sufrido a manos del hombre durante miles de años. Sin embargo, estudios recientes demuestran que la degradación, especialmente en las zonas costeras, se ha acelerado notablemente en los últimos tres siglos a medida que han aumentado los vertidos industriales y los contaminantes procedentes de explotaciones agrarias y ciudades costeras.</p><p>Algunos de los contaminantes más comunes derivados de la actividad humana son los plaguicidas, fertilizantes químicos, detergentes, hidrocarburos, aguas residuales, plásticos y otros sólidos. Muchos de estos contaminantes se acumulan en las profundidades del océano, donde son ingeridos por pequeños organismos marinos a través de los cuales se introducen en la cadena alimentaria global. Los fertilizantes ricos en nitrógeno que utilizan los productores agrícolas en zonas del interior, por ejemplo, acaban en las corrientes, ríos y aguas subterráneas locales, y más tarde se depositan en los estuarios, bahías y deltas. Este exceso de nutrientes puede provocar un crecimiento masivo de algas que consumen el oxígeno del agua, lo cual genera zonas en las que no puede haber vida marina o apenas existe. Los científicos han descubierto 400 zonas muertas con estas características por todo el planeta. Los humanos comienzan a percatarse de la insostenibilidad de la filosofía de la "dilución". Muchas leyes nacionales y protocolos internacionales prohíben en la actualidad el vertido de sustancias nocivas en los océanos, si bien su aplicación es a menudo incierta. Se están creando santuarios marinos con el fin de mantener ecosistemas marinos prístinos. Asimismo, se están llevando a cabo iniciativas aisladas que han logrado cierto éxito en la restauración de estuarios y bahías.</p><p><em>Tomado y adaptado de: http://www.nationalgeographic.es/el-oceano/cuestiones-criticas-sobre-el-problemas-de-la-contaminacion-marina/</em></p>`,
    text: '¿Qué recurso emplean los autores del texto para reforzar su tesis principal?',
    options: [' Evidencia científica.', 'Un estudio de caso.', 'Datos gubernamentales.', 'Investigaciones propias.'],
    correct: 0,
    competency: 'Comprensión lectora',
    level: 3,
    assertion: 'Reflexiona a partir de un texto y evalúa su contenido.',
    evidence: 'Reconoce las estrategias discursivas en un texto.',
    component: 'Reflexión y evaluación',
    standard: 'Elaboro hipótesis de interpretación atendiendo a la intención comunicativa y al sentido global del texto que leo.',
    skill: 'Reconocer recursos argumentativos utilizados en un texto.',
    evaluationCriteria: 'La capacidad para reconocer recursos argumentativos en un texto.',
    justification: 'La respuesta correcta es la opción A, ya que los autores utilizan evidencia científica para probar que la filosofía de la dilución no tiene mayor sentido. Esto es claro sobre todo en el segundo párrafo del texto, donde se explica en detalle el efecto que pueden tener los contaminantes más comunes en el océano.',
    invalidOptions: 'Las opciones B, C y D no son correctas porque presentan recursos que no se utilizan en el texto. La opción B afirma que el texto usa un estudio de caso, pero este no se centra en un único ejemplo para luego llegar a conclusiones generales. La opción C afirma que se usan datos gubernamentales, pero en el texto no se utilizan estudios de Gobiernos. La opción D señala que utilizan investigaciones propias, pero en el texto nunca se habla de que National Geographic o los autores llevaran a cabo estudios propios.',
  },

  // ─── PREGUNTAS 5–8: DESCARTES ─────────────────────────────────────────────

  {
    id: 5,
    simulators: [2],
    subject: 'lc',
    context: `<p><em>Por qué nuestra mente es más conocida que el cuerpo.</em></p><p>Por otra parte, para saber que conocemos nuestra mente no sólo antes y más ciertamente, sino también más evidentemente que el cuerpo, hay que observar que es evidente por luz natural que no hay afecciones o cualidades de la nada; y por tanto donde quiera que observemos algunas, debe hallarse necesariamente una cosa o una sustancia a la que pertenezcan. Y cuantas más observemos en esa cosa o sustancia, tanto más claramente la conoceremos. Y es evidente que observamos más en nuestra mente que en ninguna otra cosa, porque todo lo que nos permite conocer algo nos lleva también con mucha mayor certeza al conocimiento de nuestra mente. Como cuando juzgo que existe la tierra, porque la toco o la veo: con más razón debo juzgar, por eso mismo, que existe mi mente, pues es posible, quizá, que juzgue que toco la tierra aunque no haya tierra, pero no es posible que yo juzgue esto y que mi mente, que lo juzga, no sea nada; y así en lo demás.</p><p><em>Tomado de: Descartes, R. Sobre los principios de la filosofía.</em></p>`,
    text: 'Cuando el autor afirma "es posible, quizá, que juzgue que toco la tierra aunque no haya tierra, pero no es posible que yo juzgue esto y que mi mente, que lo juzga, no sea nada", pretende',
    options: ['probar que no hay certeza sobre la existencia de la mente.', 'señalar que no hay certeza de la existencia de la tierra.', 'mostrar que es posible equivocarse en un juicio.', 'demostrar la existencia de quien juzga.'],
    correct: 3,
    competency: 'Comprensión lectora',
    level: 3,
    assertion: 'Reflexiona a partir de un texto y evalúa su contenido.',
    evidence: 'Reconoce las estrategias discursivas en un texto.',
    component: 'Reflexión y evaluación',
    standard: 'Relaciono el significado de los textos que leo con los contextos sociales, culturales y políticos en los cuales se han producido.',
    skill: 'Inferir la intención comunicativa de un enunciado a partir de una lectura global.',
    evaluationCriteria: 'La capacidad para inferir la intención comunicativa de un enunciado de un texto a partir de una lectura global.',
    justification: 'La respuesta correcta es la opción D. Por medio del enunciado, Descartes busca probar que, aunque la mente se equivoque a la hora de hacer un juicio, necesariamente existe pues está haciendo un juicio. Es decir, incluso si la mente emite un juicio sobre algo que no está ahí, la mente tiene que estar ahí para poder hacer ese juicio.',
    invalidOptions: 'Las opciones A, B y C no son correctas porque presentan intenciones que no se corresponden con la del enunciado. La opción A afirma que el enunciado busca probar que no hay certeza sobre la existencia de la mente, pero el enunciado pretende hacer justamente lo contrario. La opción B dice que el enunciado quiere señalar que no hay certeza sobre la existencia de la tierra, pero el enunciado no problematiza la existencia de la tierra, de hecho la da por sentado. La opción C asegura que el enunciado busca mostrar que es posible equivocarse en un juicio, pero ese no es el punto del enunciado.',
  },

  {
    id: 6,
    simulators: [2],
    subject: 'lc',
    context: `<p><em>Por qué nuestra mente es más conocida que el cuerpo.</em></p><p>Por otra parte, para saber que conocemos nuestra mente no sólo antes y más ciertamente, sino también más evidentemente que el cuerpo, hay que observar que es evidente por luz natural que no hay afecciones o cualidades de la nada; y por tanto donde quiera que observemos algunas, debe hallarse necesariamente una cosa o una sustancia a la que pertenezcan. Y cuantas más observemos en esa cosa o sustancia, tanto más claramente la conoceremos. Y es evidente que observamos más en nuestra mente que en ninguna otra cosa, porque todo lo que nos permite conocer algo nos lleva también con mucha mayor certeza al conocimiento de nuestra mente. Como cuando juzgo que existe la tierra, porque la toco o la veo: con más razón debo juzgar, por eso mismo, que existe mi mente, pues es posible, quizá, que juzgue que toco la tierra aunque no haya tierra, pero no es posible que yo juzgue esto y que mi mente, que lo juzga, no sea nada; y así en lo demás.</p><p><em>Tomado de: Descartes, R. Sobre los principios de la filosofía.</em></p>`,
    text: 'La afirmación "no hay afecciones o cualidades de la nada" permite',
    options: ['sostener que si observamos algunas cualidades, entonces existe algo a lo que pertenecen.', 'afirmar que aunque existe una sustancia no podemos conocer sus cualidades.', 'sostener que si existe una sustancia, entonces podemos observar sus cualidades.', 'demostrar que si conocemos algo, entonces existen sus cualidades.'],
    correct: 0,
    competency: 'Comprensión lectora',
    level: 2,
    assertion: 'Comprende cómo se articulan las partes de un texto para darle un sentido global.',
    evidence: 'Identifica y caracteriza las ideas o afirmaciones presentes en un texto informativo.',
    component: 'Comprensión global del texto',
    standard: 'Elaboro hipótesis de interpretación atendiendo a la intención comunicativa y al sentido global del texto que leo.',
    skill: 'Identificar la función que cumple un enunciado en un argumento.',
    evaluationCriteria: 'La capacidad para identificar la función que cumple un enunciado en un argumento en un texto.',
    justification: 'La opción A es la respuesta correcta, ya que Descartes afirma que la nada no tiene cualidades para probar que, si hay cualidades, entonces debe haber algo a lo que pertenezcan esas cualidades: "y por tanto donde quiera que observemos algunas, debe hallarse necesariamente una cosa o una sustancia a la que pertenezcan".',
    invalidOptions: 'Las opciones B, C y D no son correctas porque no presentan la función del enunciado en el texto. La opción B afirma que el enunciado busca mostrar que, aunque exista una sustancia, no podemos conocer sus cualidades, pero el texto afirma que cuanto más observemos a una más la conoceremos. La opción C dice que el enunciado quiere probar que, si existe una sustancia, entonces podemos conocer sus cualidades, pero lo que le interesa al autor es mostrar que debe existir una sustancia cuando hay cualidades. La opción D asegura que el enunciado busca demostrar que, si conocemos algo, existen sus cualidades, pero el texto no dice que el conocimiento de una sustancia implique que sus cualidades existen.',
  },

  {
    id: 7,
    simulators: [2],
    subject: 'lc',
    context: `<p><em>Por qué nuestra mente es más conocida que el cuerpo.</em></p><p>Por otra parte, para saber que conocemos nuestra mente no sólo antes y más ciertamente, sino también más evidentemente que el cuerpo, hay que observar que es evidente por luz natural que no hay afecciones o cualidades de la nada; y por tanto donde quiera que observemos algunas, debe hallarse necesariamente una cosa o una sustancia a la que pertenezcan. Y cuantas más observemos en esa cosa o sustancia, tanto más claramente la conoceremos. Y es evidente que observamos más en nuestra mente que en ninguna otra cosa, porque todo lo que nos permite conocer algo nos lleva también con mucha mayor certeza al conocimiento de nuestra mente. Como cuando juzgo que existe la tierra, porque la toco o la veo: con más razón debo juzgar, por eso mismo, que existe mi mente, pues es posible, quizá, que juzgue que toco la tierra aunque no haya tierra, pero no es posible que yo juzgue esto y que mi mente, que lo juzga, no sea nada; y así en lo demás.</p><p><em>Tomado de: Descartes, R. Sobre los principios de la filosofía.</em></p>`,
    text: 'De acuerdo con los argumentos expuestos por Descartes, nuestra mente existe porque',
    options: ['cuanto más observemos una cosa, más claramente la conoceremos.', 'no es posible que yo juzgue algo y que mi mente, que lo juzga, no sea nada.', 'no existen los cuerpos, aunque los toque y los vea.', 'conocemos nuestra mente más ciertamente que el cuerpo.'],
    correct: 1,
    competency: 'Comprensión lectora',
    level: 3,
    assertion: 'Reflexiona a partir de un texto y evalúa su contenido.',
    evidence: 'Establece la validez e implicaciones de un enunciado de un texto (argumentativo o expositivo).',
    component: 'Reflexión y evaluación',
    standard: 'Asumo una actitud crítica frente a los textos que leo y elaboro, y frente a otros tipos de texto: explicativos, descriptivos y narrativos.',
    skill: 'Explicar por qué una tesis se sostiene sobre los argumentos dados en el texto.',
    evaluationCriteria: 'La capacidad para explicar por qué una tesis se sostiene sobre los argumentos dados en el texto.',
    justification: 'La respuesta correcta es la opción B porque, como afirma el texto, "hay que observar que es evidente por luz natural que no hay afecciones o cualidades de la nada; y por tanto donde quiera que observemos algunas, debe hallarse necesariamente una cosa o una sustancia a la que pertenezcan". Y si la mente emite juicios incluso sobre aquello que no está percibiendo, no es posible que la mente no sea nada, pues tiene la cualidad de emitir esos juicios.',
    invalidOptions: 'Las opciones A, C y D no son correctas, ya que presentan explicaciones que no recogen la defensa de la tesis de Descartes. La opción A afirma que cuanto más observemos algo, más lo conoceremos, pero esto no contribuye a probar la existencia de la mente. La opción C dice que los cuerpos no existen, aunque los toquemos o los veamos, pero en el texto Descartes no se refiere a la existencia de los cuerpos. La opción D asegura que conocemos nuestra mente más ciertamente que nuestro cuerpo, pero del hecho de que creamos conocer algo no se sigue que ese algo existe.',
  },

  {
    id: 8,
    simulators: [2],
    subject: 'lc',
    context: `<p><em>Por qué nuestra mente es más conocida que el cuerpo.</em></p><p>Por otra parte, para saber que conocemos nuestra mente no sólo antes y más ciertamente, sino también más evidentemente que el cuerpo, hay que observar que es evidente por luz natural que no hay afecciones o cualidades de la nada; y por tanto donde quiera que observemos algunas, debe hallarse necesariamente una cosa o una sustancia a la que pertenezcan. Y cuantas más observemos en esa cosa o sustancia, tanto más claramente la conoceremos. Y es evidente que observamos más en nuestra mente que en ninguna otra cosa, porque todo lo que nos permite conocer algo nos lleva también con mucha mayor certeza al conocimiento de nuestra mente. Como cuando juzgo que existe la tierra, porque la toco o la veo: con más razón debo juzgar, por eso mismo, que existe mi mente, pues es posible, quizá, que juzgue que toco la tierra aunque no haya tierra, pero no es posible que yo juzgue esto y que mi mente, que lo juzga, no sea nada; y así en lo demás.</p><p><em>Tomado de: Descartes, R. Sobre los principios de la filosofía.</em></p>`,
    text: 'Con la expresión "luz natural", el autor se refiere a una',
    options: ['facultad de la nada.', 'cualidad del cuerpo.', 'facultad de la mente.', 'cualidad divina.'],
    correct: 2,
    competency: 'Comprensión lectora',
    level: 1,
    assertion: 'Identifica y entiende los contenidos locales que conforman un texto.',
    evidence: 'Entiende el significado de los elementos locales que constituyen un texto.',
    component: 'Comprensión local del texto',
    standard: 'Diseño un esquema de interpretación, teniendo en cuenta el tipo de texto, tema, interlocutor e intención comunicativa.',
    skill: 'Identificar un sinónimo de una expresión a partir del contexto.',
    evaluationCriteria: 'La capacidad para identificar un sinónimo de una expresión a partir del contexto.',
    justification: 'La respuesta correcta es la opción C. En el texto se afirma: "hay que observar que es evidente por luz natural que no hay afecciones o cualidades de la nada". La razón, o una facultad de la mente, es la que nos permite concluir que la nada no tiene cualidades.',
    invalidOptions: 'Las opciones A, B y D no son correctas, ya que presentan expresiones que no tienen el mismo significado que "luz natural" en ese contexto. La opción A afirma que "luz natural" es lo mismo que una facultad de la nada, pero la nada no tiene facultades, como lo da a entender Descartes. La opción B dice que la "luz natural" es equivalente a una cualidad del cuerpo, pero en este contexto Descartes no se refiere a uno de los sentidos o a alguna característica del cuerpo humano. La opción D asegura que "luz natural" se refiere a una cualidad divina, pero no hay nada en el texto que afirme que la razón es una cualidad de Dios o ajena a los humanos.',
  },

  // ─── PREGUNTAS 9–12: MAFALDA ──────────────────────────────────────────────

  {
    id: 9,
    simulators: [2],
    subject: 'lc',
    contextImg: 'mafalda_chicle',
    text: 'Cuando Mafalda pregunta de quién es el discurso que hay que masticar "pero no hay que tragárselo", quiere decir que el discurso debe',
    options: ['analizarse pero no hay que creerlo.', 'aprobarse pero no hay que admitirlo.', 'criticarse pero hay que creerlo.', 'aprobarse pero hay que reformularlo.'],
    correct: 0,
    competency: 'Comprensión lectora',
    level: 1,
    assertion: 'Identifica y entiende los contenidos locales que conforman un texto.',
    evidence: 'Entiende el significado de los elementos locales que constituyen un texto.',
    component: 'Comprensión local del texto',
    standard: 'Elaboro hipótesis de interpretación atendiendo a la intención comunicativa y al sentido global del texto que leo.',
    skill: 'Identificar una paráfrasis de un enunciado.',
    evaluationCriteria: 'La capacidad para identificar una paráfrasis de un enunciado.',
    justification: 'La respuesta correcta es la opción A, ya que lo que quiere decir Mafalda es que los discursos deben analizarse ("masticarse"), pero que no deben creerse ("tragarse"). El enunciado y la caricatura juegan con una acepción común de las palabras "masticar" y "tragar".',
    invalidOptions: 'Las opciones B, C y D no son correctas, dado que presentan paráfrasis erróneas del enunciado. Las opciones B y D afirman que los discursos deben aprobarse, pero precisamente lo que dice Mafalda es que no hay que creerlos sin más. La opción C dice que los discursos deben creerse, pero Mafalda asegura que no deben creerse sin antes haberlos analizado.',
  },

  {
    id: 10,
    simulators: [2],
    subject: 'lc',
    contextImg: 'mafalda_chicle',
    text: 'La expresión en la cara del padre al oír la pregunta de Mafalda se debe a que',
    options: ['no está de acuerdo con lo que dice Mafalda.', 'no entendió lo que Mafalda quería decir.', 'le disgustó que Mafalda lo interrumpiera tan súbitamente.', 'no esperaba la interpretación que hizo Mafalda de sus palabras.'],
    correct: 3,
    competency: 'Comprensión lectora',
    level: 2,
    assertion: 'Comprende cómo se articulan las partes de un texto para darle un sentido global.',
    evidence: 'Identifica el tipo de relación existente entre diferentes elementos de un texto (discontinuo).',
    component: 'Comprensión global del texto',
    standard: 'Doy cuenta del uso del lenguaje verbal o no verbal en manifestaciones humanas como los grafiti, la publicidad, los símbolos patrios, las canciones, los caligramas, entre otros.',
    skill: 'Establecer relaciones entre elementos lingüísticos y no lingüísticos en un texto discontinuo.',
    evaluationCriteria: 'La capacidad para establecer relaciones entre elementos lingüísticos y no lingüísticos en un texto discontinuo.',
    justification: 'La respuesta correcta es la opción D. El papá de Mafalda le está explicando a su hijo que debe masticar el chicle, pero no tragárselo. Su expresión en el segundo recuadro se relaciona con la interpretación que hizo Mafalda de sus palabras.',
    invalidOptions: 'Las opciones A, B y C no son correctas porque interpretan de manera errónea la expresión del padre de Mafalda. La opción A afirma que el padre no está de acuerdo con Mafalda, pero su expresión es de resignación, no de desacuerdo. La opción B dice que el padre no entendió lo que dijo Mafalda, pero la expresión en su rostro es de resignación, no de duda; además, si el padre no entendiera la interpretación de Mafalda la caricatura carecería de humor. La opción C asegura que al padre le disgustó que Mafalda lo interrumpiera, pero su expresión es de resignación, no de rabia o molestia.',
  },

  {
    id: 11,
    simulators: [2],
    subject: 'lc',
    contextImg: 'mafalda_chicle',
    text: '¿Cuál de las siguientes afirmaciones describe un supuesto implícito en el cómic?',
    options: ['Los discursos de los políticos son engañosos.', 'Los chicles son malos para la salud de los niños.', 'Los padres no entienden a sus hijos.', 'Los discursos de los políticos son difíciles.'],
    correct: 0,
    competency: 'Comprensión lectora',
    level: 4,
    assertion: 'Reflexiona a partir de un texto y evalúa su contenido.',
    evidence: 'Establece la validez e implicaciones de un enunciado de un texto (argumentativo o expositivo).',
    component: 'Reflexión y evaluación',
    standard: 'Analizo las implicaciones culturales, sociales e ideológicas de manifestaciones humanas como los grafiti, la publicidad, los símbolos patrios, las canciones, los caligramas, entre otros.',
    skill: 'Identificar supuestos implícitos en un texto.',
    evaluationCriteria: 'La capacidad para identificar supuestos implícitos en un texto.',
    justification: 'La opción A es la respuesta correcta. La caricatura critica el discurso político, el discurso con el que usualmente lidian las caricaturas. Si es necesario analizar el discurso y no creerlo, es porque los discursos políticos suelen ser engañosos. Si no lo fueran, la advertencia de Mafalda sería innecesaria y la caricatura perdería su gracia.',
    invalidOptions: 'Las opciones B, C y D no son correctas porque identifican supuestos que no hacen parte de la caricatura. La opción B afirma que los chicles son malos para la salud de los niños, pero el papá de Mafalda en ningún momento regaña a su hijo por comer chicle. La opción C dice que los padres no entienden a los niños, pero el papá entiende lo que dice Mafalda y precisamente por eso la caricatura es divertida. La opción D asegura que los discursos de los políticos son difíciles, pero el problema no es que sean difíciles, sino que son engañosos.',
  },

  {
    id: 12,
    simulators: [2],
    subject: 'lc',
    contextImg: 'mafalda_chicle',
    text: 'Con este cómic el autor pretende',
    options: ['criticar la manera como los políticos hacen sus discursos.', 'llamar la atención sobre cómo debemos tomar los discursos políticos.', 'mostrar la relación entre comer chicle y los discursos de los políticos.', 'disuadir a las personas de escuchar los discursos de los políticos.'],
    correct: 0,
    competency: 'Comprensión lectora',
    level: 4,
    assertion: 'Reflexiona a partir de un texto y evalúa su contenido.',
    evidence: 'Reconoce las estrategias discursivas en un texto.',
    component: 'Reflexión y evaluación',
    standard: 'Analizo las implicaciones culturales, sociales e ideológicas de manifestaciones humanas como los grafiti, la publicidad, los símbolos patrios, las canciones, los caligramas, entre otros.',
    skill: 'Inferir el propósito comunicativo de un texto.',
    evaluationCriteria: 'La capacidad para inferir el propósito comunicativo de un texto.',
    justification: 'La respuesta correcta es la opción A. La caricatura critica los discursos engañosos de los políticos que, a pesar de que no deberían ser engañosos, lo son, de acuerdo con el autor. Debido a esto, los discursos de este tipo deben ser analizados, pero no creídos sin un previo análisis.',
    invalidOptions: 'Las opciones B, C y D no son correctas, ya que presentan intenciones comunicativas que no se corresponden con la caricatura. La opción B afirma que la intención es llamar la atención sobre la manera como debemos tomar los discursos de los políticos, pero la caricatura va más allá, como se puede ver por la expresión de resignación del padre. La opción C dice que la caricatura muestra la relación del chicle y los políticos, pero el chicle es sólo una excusa ingeniosa para criticar el discurso de los políticos. La opción D asegura que la caricatura pretende disuadir a las personas de escuchar los discursos políticos, pero lo que afirma Mafalda es que los discursos no deben dejar de oírse, sino analizarse con un oído crítico.',
  },

  // ─── PREGUNTAS 13–16: MUTIS – LA NIEVE DEL ALMIRANTE ─────────────────────

  {
    id: 13,
    simulators: [2],
    subject: 'lc',
    context: `<p>Siempre me ha sucedido lo mismo: las empresas en las que me lanzo tienen el estigma de lo indeterminado, la maldición de una artera mudanza. Y aquí voy, río arriba, como un necio, sabiendo de antemano en lo que irá a parar todo. En la selva, en donde nada me espera, cuya monotonía y clima de cueva de iguanas, me hace mal y me entristece.</p><p>Lejos del mar, sin hembras y hablando un idioma de tarados. Y, entretanto, mi querido Abdul Bashur, camarada de tantas noches a orillas del Bósforo, de tantos intentos inolvidables por hacer dinero fácil en Valencia y Toulon; esperándome y pensando que tal vez haya muerto. Me intriga sobremanera la forma como se repiten en mi vida estas caídas, estas decisiones erróneas desde su inicio, estos callejones sin salida cuya suma vendría a ser la historia de mi existencia.</p><p><em>Tomado de: Mutis, A. (1986). La nieve del almirante. Bogotá: Editorial Norma.</em></p>`,
    text: 'De las siguientes razones, ¿cuál NO explica el desasosiego del personaje?',
    options: ['La insatisfacción con su vida en general.', 'El terreno agreste en el que se encuentra.', 'Los negocios pendientes con Abdul Bashur.', 'La creencia de haber tomado malas decisiones.'],
    correct: 2,
    competency: 'Comprensión lectora',
    level: 2,
    assertion: 'Comprende cómo se articulan las partes de un texto para darle un sentido global.',
    evidence: 'Identifica y caracteriza las ideas o afirmaciones presentes en un texto informativo.',
    component: 'Comprensión global del texto',
    standard: 'Leo textos literarios de diversa índole, género, temática y origen.',
    skill: 'Identificar las razones que apoyan o contradicen la tesis de un texto.',
    evaluationCriteria: 'La capacidad para identificar las razones que apoyan la tesis de un texto.',
    justification: 'La respuesta correcta es la opción C. Los negocios con Abdul Bashur no son motivo de desasosiego para el personaje. Le inquieta saber que quizás su camarada piense que esté muerto, pero no los negocios que tiene con él.',
    invalidOptions: 'Las opciones A, B y D no son correctas, ya que presentan razones por las que el personaje siente desasosiego. Las opciones A y D afirman, respectivamente, que el personaje siente desasosiego por la insatisfacción de su vida en general y por creer haber tomado malas decisiones, que es precisamente lo que se dice en el texto: "Me intriga sobremanera la forma como se repiten en mi vida estas caídas, estas decisiones erróneas desde su inicio, estos callejones sin salida cuya suma vendría a ser la historia de mi existencia". La opción B dice que el personaje siente desasosiego por el terreno en el que se encuentra, que es lo que dice el texto: "En la selva, en donde nada me espera, cuya monotonía y clima de cueva de iguanas, me hace mal y me entristece".',
  },

  {
    id: 14,
    simulators: [2],
    subject: 'lc',
    context: `<p>Siempre me ha sucedido lo mismo: las empresas en las que me lanzo tienen el estigma de lo indeterminado, la maldición de una artera mudanza. Y aquí voy, río arriba, como un necio, sabiendo de antemano en lo que irá a parar todo. En la selva, en donde nada me espera, cuya monotonía y clima de cueva de iguanas, me hace mal y me entristece.</p><p>Lejos del mar, sin hembras y hablando un idioma de tarados. Y, entretanto, mi querido Abdul Bashur, camarada de tantas noches a orillas del Bósforo, de tantos intentos inolvidables por hacer dinero fácil en Valencia y Toulon; esperándome y pensando que tal vez haya muerto. Me intriga sobremanera la forma como se repiten en mi vida estas caídas, estas decisiones erróneas desde su inicio, estos callejones sin salida cuya suma vendría a ser la historia de mi existencia.</p><p><em>Tomado de: Mutis, A. (1986). La nieve del almirante. Bogotá: Editorial Norma.</em></p>`,
    text: 'La narración ocurre en',
    options: ['una cueva de iguanas.', 'un navío en el río Bósforo.', 'un lugar desértico lejos del mar.', 'una embarcación, en algún río.'],
    correct: 3,
    competency: 'Comprensión lectora',
    level: 1,
    assertion: 'Identifica y entiende los contenidos locales que conforman un texto.',
    evidence: 'Identifica los eventos narrados de manera explícita en un texto (literario, descriptivo, caricatura o cómic) y los personajes involucrados (si los hay).',
    component: 'Comprensión local del texto',
    standard: 'Leo textos literarios de diversa índole, género, temática y origen.',
    skill: 'Ubicar información explícita sobre un lugar en un texto.',
    evaluationCriteria: 'La capacidad para ubicar información sobre un lugar que se encuentra de manera explícita en un texto.',
    justification: 'La respuesta correcta es la opción D, dado que en el texto se afirma lo siguiente: "Y aquí voy, río arriba, como un necio, sabiendo de antemano en lo que irá a parar todo. En la selva, en donde nada me espera, cuya monotonía y clima de cueva de iguanas, me hace mal y me entristece".',
    invalidOptions: 'Aunque presentan lugares mencionados en el texto, las opciones A, B y C no son correctas ya que ninguna señala el lugar específico donde ocurre la narración.',
  },

  {
    id: 15,
    simulators: [2],
    subject: 'lc',
    context: `<p>Siempre me ha sucedido lo mismo: las empresas en las que me lanzo tienen el estigma de lo indeterminado, la maldición de una artera mudanza. Y aquí voy, río arriba, como un necio, sabiendo de antemano en lo que irá a parar todo. En la selva, en donde nada me espera, cuya monotonía y clima de cueva de iguanas, me hace mal y me entristece.</p><p>Lejos del mar, sin hembras y hablando un idioma de tarados. Y, entretanto, mi querido Abdul Bashur, camarada de tantas noches a orillas del Bósforo, de tantos intentos inolvidables por hacer dinero fácil en Valencia y Toulon; esperándome y pensando que tal vez haya muerto. Me intriga sobremanera la forma como se repiten en mi vida estas caídas, estas decisiones erróneas desde su inicio, estos callejones sin salida cuya suma vendría a ser la historia de mi existencia.</p><p><em>Tomado de: Mutis, A. (1986). La nieve del almirante. Bogotá: Editorial Norma.</em></p>`,
    text: 'El autor utiliza',
    options: ['eufemismos, para expresar el disgusto del narrador sin ofender al lector.', 'reflexiones, para presentar la experiencia y el estado de ánimo del narrador.', 'juegos de palabras, para asociar conceptos y recalcar el hastío del narrador.', 'redundancias, para generar un tono triste y sombrío en el discurso del narrador.'],
    correct: 1,
    competency: 'Comprensión lectora',
    level: 3,
    assertion: 'Reflexiona a partir de un texto y evalúa su contenido.',
    evidence: 'Reconoce las estrategias discursivas en un texto.',
    component: 'Reflexión y evaluación',
    standard: 'Identifico en obras de la literatura universal el lenguaje, las características formales, las épocas y escuelas, estilos, tendencias, temáticas, géneros y autores, entre otros aspectos.',
    skill: 'Reconocer recursos retóricos en un texto.',
    evaluationCriteria: 'La capacidad para reconocer recursos retóricos en un texto.',
    justification: 'La respuesta correcta es la opción B, ya que, en el texto, el personaje reflexiona sobre su pasado. Mientras lo hace, cuenta algunas de sus experiencias y detalla su melancolía y su tristeza.',
    invalidOptions: 'Las opciones A, C y D no son correctas, ya que presentan recursos retóricos que no están presentes en el texto. La opción A afirma que la historia incluye eufemismos, pero en el texto no se usan palabras más "decorosas" o menos "directas" para reemplazar a otras. La opción C dice que el texto incluye juegos de palabras, pero en el texto no hay parejas o grupos de palabras que produzcan un efecto lúdico o humorístico. La opción D asegura que en el texto se utilizan redundancias, pero en este no se repiten conceptos o se utilizan palabras innecesarias para transmitir las mismas ideas.',
  },

  {
    id: 16,
    simulators: [2],
    subject: 'lc',
    context: `<p>Siempre me ha sucedido lo mismo: las empresas en las que me lanzo tienen el estigma de lo indeterminado, la maldición de una artera mudanza. Y aquí voy, río arriba, como un necio, sabiendo de antemano en lo que irá a parar todo. En la selva, en donde nada me espera, cuya monotonía y clima de cueva de iguanas, me hace mal y me entristece.</p><p>Lejos del mar, sin hembras y hablando un idioma de tarados. Y, entretanto, mi querido Abdul Bashur, camarada de tantas noches a orillas del Bósforo, de tantos intentos inolvidables por hacer dinero fácil en Valencia y Toulon; esperándome y pensando que tal vez haya muerto. Me intriga sobremanera la forma como se repiten en mi vida estas caídas, estas decisiones erróneas desde su inicio, estos callejones sin salida cuya suma vendría a ser la historia de mi existencia.</p><p><em>Tomado de: Mutis, A. (1986). La nieve del almirante. Bogotá: Editorial Norma.</em></p>`,
    text: 'La narración ocurre durante',
    options: ['una temporada de artera mudanza.', 'un periodo de monotonía de la selva.', 'un viaje hacia una zona selvática.', 'una época lejana en Valencia y Toulon.'],
    correct: 1,
    competency: 'Comprensión lectora',
    level: 1,
    assertion: 'Identifica y entiende los contenidos locales que conforman un texto.',
    evidence: 'Identifica los eventos narrados de manera explícita en un texto (literario, descriptivo, caricatura o cómic) y los personajes involucrados (si los hay).',
    component: 'Comprensión local del texto',
    standard: 'Leo textos literarios de diversa índole, género, temática y origen.',
    skill: 'Ubicar información explícita sobre el tiempo en el que ocurren los hechos de un texto.',
    evaluationCriteria: 'La capacidad para ubicar información explícita sobre el tiempo en el que ocurren los hechos de un texto.',
    justification: 'La respuesta correcta es la opción B, dado que el texto afirma lo siguiente: "Y aquí voy, río arriba, como un necio, sabiendo de antemano en lo que irá a parar todo. En la selva, en donde nada me espera, cuya monotonía y clima de cueva de iguanas, me hace mal y me entristece".',
    invalidOptions: 'Las opciones A, C y D no son correctas, ya que no presentan el tiempo en el que ocurren los hechos de la historia. La opción A afirma que la historia ocurre durante una época de artera mudanza, pero el personaje habla de una "maldición de artera mudanza" que persigue sus empresas. La opción C dice que la historia ocurre durante un viaje hacia una zona selvática, pero el personaje ya se encuentra en la selva. La opción D asegura que la historia ocurre durante una época lejana en Valencia y Toulon, pero el personaje recuerda épocas pasadas en Valencia y Toulon durante su monótono viaje por un río en la selva.',
  },

  // ─── PREGUNTAS 17–20: EL RÍO / YAGÉ ──────────────────────────────────────

  {
    id: 17,
    simulators: [2],
    subject: 'lc',
    context: `<p>Dio la casualidad de que Schultes había tropezado con un hecho de alquimia chamánica sin paralelo en el Amazonas. Los ingredientes psicoactivos de la corteza del yagé son los beta-carbolíneos harmine y harmaline. Hace mucho tiempo, sin embargo, los chamanes del noroeste amazónico descubrieron que se podían ampliar dramáticamente sus efectos añadiendo unas cuantas plantas secundarias. Este es un importante rasgo de muchos preparados tradicionales, y se debe en parte al hecho de que diferentes compuestos químicos en cantidades relativamente pequeñas pueden hacerse mutuamente más potentes.</p><p>En el caso del yagé, se han identificado hasta la fecha cerca de veintiún añadidos. Dos de estos son de particular interés. La <em>Psychotria virids</em> es un arbusto de la familia del café. La Chagropanga es la <em>Dyplopterys cabrerana</em>, un bejuco selvático con relación cercana al yagé. [...] Cuando el yagé se combina con alguna de las dos plantas agregadas, el resultado es un potente efecto sinérgico, una versión bioquímica de una totalidad mayor que la suma de sus partes. Las visiones, tal como los indios le prometieron a Schultes, se hicieron más brillantes, y los tonos azules y púrpuras se expandieron hasta cubrir todo el espectro del arco iris.</p><p>Lo que asombró más a Schultes fue menos el efecto puro de las drogas –para ese entonces, después de todo, se estaba acostumbrando a la inmersión de su consciencia en el color– que el implícito problema intelectual planteado por esos complejos preparados. La flora amazónica contiene, literalmente, decenas de miles de especies. ¿Cómo aprendieron los indios a identificar y combinar en forma tan refinada estas plantas morfológicamente distintas, que poseían propiedades químicas tan peculiares y complementarias? La explicación científica tradicional es el tanteo –término razonable que puede bien dar razón de ciertas innovaciones–, pero en otro nivel, como comprobó Schultes después de pasar más tiempo en la selva, es un eufemismo que esconde el hecho de que los etnobotánicos tienen una idea muy vaga de cómo los indios hicieron sus descubrimientos en primer lugar.</p><p>El problema del tanteo, de la prueba por eliminación, es que la elaboración de los preparados a menudo implica procedimientos muy complejos o rinde resultados de escaso o ningún valor. El yagé es un bejuco incomible y sin características definidas que rara vez florece. Es cierto que su corteza es amarga, lo cual a menudo es indicio de sus propiedades medicinales, pero no lo es más que cientos de otras lianas de la selva. La infusión de la corteza causa severos vómitos y diarrea, condiciones que desalentarían cualquier experimentación adicional.</p><p><em>Tomado de: Davis, W. (2009). El río. Bogotá: Fondo de Cultura Económica, El Áncora Editores.</em></p>`,
    text: '¿Cuál de los siguientes fragmentos sería la continuación más coherente del texto en términos de estilo y contenido?',
    options: [
      '"Pero los indios no solo persistieron sino que se hicieron tan hábiles en la manipulación de los diferentes ingredientes que los chamanes desarrollaron individualmente docenas de recetas".',
      '"Ingeridos oralmente, sin embargo, estos potentes compuestos no producen ningún efecto, pues una enzima propia del intestino humano, la monoamina oxidaza (MAO), los neutraliza".',
      '"En el caso del curare, Schultes descubrió que la corteza raspada se coloca debajo de una hoja en forma de embudo, colgada entre dos lanzas".',
      '"Los indios tenían, como es natural, sus propias explicaciones, ricos relatos cosmológicos que desde su punto de vista eran perfectamente lógicos".',
    ],
    correct: 0,
    competency: 'Comprensión lectora',
    level: 4,
    assertion: 'Reflexiona a partir de un texto y evalúa su contenido.',
    evidence: 'Establece relaciones entre un texto y otros textos o enunciados.',
    component: 'Reflexión y evaluación',
    standard: 'Elaboro hipótesis de interpretación atendiendo a la intención comunicativa y al sentido global del texto que leo.',
    skill: 'Inferir, a partir de las características del texto, cuál es su continuación más adecuada.',
    evaluationCriteria: 'La capacidad para inferir, a partir de las características del texto, cuál es su continuación más adecuada.',
    justification: 'La respuesta correcta es la opción A, dado que el último párrafo del texto trata sobre el problema de utilizar el tanteo para explicar la producción del yagé. La línea final dice: "La infusión de la corteza causa severos vómitos y diarrea, condiciones que desalentarían cualquier experimentación adicional". Dado que el resto del texto apunta a explicar el surgimiento de las recetas del yagé, es de esperar que la continuación afirme que, a pesar de las características de la corteza del bejuco, de alguna manera los indígenas lograron producir la mezcla que produce la droga.',
    invalidOptions: 'Aunque las opciones B, C y D presentan enunciados cuyo contenido está relacionado con el tema del texto, ninguna es una continuación adecuada dado como termina el último párrafo. La opción B trata sobre los efectos de ciertos químicos, pero la última oración del texto afirma que la infusión de la corteza tiene efectos poderosos y la opción habla de químicos que no tienen efectos. La opción C habla sobre el curare, un veneno sobre el que no se habla en ninguna parte del texto. La opción D habla sobre las explicaciones de los indios, pero no es claro a qué fenómenos se refieren estas explicaciones.',
  },

  {
    id: 18,
    simulators: [2],
    subject: 'lc',
    context: `<p>Dio la casualidad de que Schultes había tropezado con un hecho de alquimia chamánica sin paralelo en el Amazonas. Los ingredientes psicoactivos de la corteza del yagé son los beta-carbolíneos harmine y harmaline. Hace mucho tiempo, sin embargo, los chamanes del noroeste amazónico descubrieron que se podían ampliar dramáticamente sus efectos añadiendo unas cuantas plantas secundarias. Este es un importante rasgo de muchos preparados tradicionales, y se debe en parte al hecho de que diferentes compuestos químicos en cantidades relativamente pequeñas pueden hacerse mutuamente más potentes.</p><p>En el caso del yagé, se han identificado hasta la fecha cerca de veintiún añadidos. Dos de estos son de particular interés. La <em>Psychotria virids</em> es un arbusto de la familia del café. La Chagropanga es la <em>Dyplopterys cabrerana</em>, un bejuco selvático con relación cercana al yagé. [...] Cuando el yagé se combina con alguna de las dos plantas agregadas, el resultado es un potente efecto sinérgico, una versión bioquímica de una totalidad mayor que la suma de sus partes. Las visiones, tal como los indios le prometieron a Schultes, se hicieron más brillantes, y los tonos azules y púrpuras se expandieron hasta cubrir todo el espectro del arco iris.</p><p>Lo que asombró más a Schultes fue menos el efecto puro de las drogas –para ese entonces, después de todo, se estaba acostumbrando a la inmersión de su consciencia en el color– que el implícito problema intelectual planteado por esos complejos preparados. La flora amazónica contiene, literalmente, decenas de miles de especies. ¿Cómo aprendieron los indios a identificar y combinar en forma tan refinada estas plantas morfológicamente distintas, que poseían propiedades químicas tan peculiares y complementarias? La explicación científica tradicional es el tanteo –término razonable que puede bien dar razón de ciertas innovaciones–, pero en otro nivel, como comprobó Schultes después de pasar más tiempo en la selva, es un eufemismo que esconde el hecho de que los etnobotánicos tienen una idea muy vaga de cómo los indios hicieron sus descubrimientos en primer lugar.</p><p>El problema del tanteo, de la prueba por eliminación, es que la elaboración de los preparados a menudo implica procedimientos muy complejos o rinde resultados de escaso o ningún valor. El yagé es un bejuco incomible y sin características definidas que rara vez florece. Es cierto que su corteza es amarga, lo cual a menudo es indicio de sus propiedades medicinales, pero no lo es más que cientos de otras lianas de la selva. La infusión de la corteza causa severos vómitos y diarrea, condiciones que desalentarían cualquier experimentación adicional.</p><p><em>Tomado de: Davis, W. (2009). El río. Bogotá: Fondo de Cultura Económica, El Áncora Editores.</em></p>`,
    text: 'El autor concluye que',
    options: [
      'la ciencia tradicional es infalible, pero no es suficiente para explicar las prácticas indígenas que giran en torno al yagé.',
      'el tanteo no es una explicación adecuada para dar cuenta del origen de las complejas preparaciones del yagé.',
      'el vómito y la diarrea que produce el yagé prueban que el tanteo no explica el origen del uso de esta planta.',
      'las teorías de Schultes sobre el origen de las complejas preparaciones del yagé eran acertadas, pero insuficientes.',
    ],
    correct: 1,
    competency: 'Comprensión lectora',
    level: 3,
    assertion: 'Comprende cómo se articulan las partes de un texto para darle un sentido global.',
    evidence: 'Identifica y caracteriza las ideas o afirmaciones presentes en un texto informativo.',
    component: 'Comprensión global del texto',
    standard: 'Elaboro hipótesis de interpretación atendiendo a la intención comunicativa y al sentido global del texto que leo.',
    skill: 'Inferir la conclusión de un texto.',
    evaluationCriteria: 'La capacidad para inferir la conclusión de un texto.',
    justification: 'La respuesta correcta es la opción B, dado que el texto afirma: "El problema del tanteo, de la prueba por eliminación, es que la elaboración de los preparados a menudo implica procedimientos muy complejos o rinde resultados de escaso o ningún valor" y "La infusión de la corteza causa severos vómitos y diarrea, condiciones que desalentarían cualquier experimentación adicional". Si la corteza causa efectos que desalentarían la experimentación y a menudo los procedimientos son complejos o rinden resultados de escaso valor, entonces parece que el tanteo no es una explicación adecuada para las combinaciones a las que llegaron los indígenas.',
    invalidOptions: 'Las opciones A, C y D no son correctas porque presentan conclusiones que no se siguen del texto. La opción A afirma que la ciencia es infalible, pero en el texto nunca se argumenta esta posición. La opción C dice que el vómito y la diarrea prueban que el tanteo no explica el origen del uso del yagé, pero el texto, además del vómito y la diarrea, señala otras razones para argumentar esa tesis. La opción D asegura que las teorías de Schultes eran insuficientes aunque acertadas, pero el texto no emite un juicio sobre las teorías de Schultes.',
  },

  {
    id: 19,
    simulators: [2],
    subject: 'lc',
    context: `<p>Dio la casualidad de que Schultes había tropezado con un hecho de alquimia chamánica sin paralelo en el Amazonas. Los ingredientes psicoactivos de la corteza del yagé son los beta-carbolíneos harmine y harmaline. Hace mucho tiempo, sin embargo, los chamanes del noroeste amazónico descubrieron que se podían ampliar dramáticamente sus efectos añadiendo unas cuantas plantas secundarias. Este es un importante rasgo de muchos preparados tradicionales, y se debe en parte al hecho de que diferentes compuestos químicos en cantidades relativamente pequeñas pueden hacerse mutuamente más potentes.</p><p>En el caso del yagé, se han identificado hasta la fecha cerca de veintiún añadidos. Dos de estos son de particular interés. La <em>Psychotria virids</em> es un arbusto de la familia del café. La Chagropanga es la <em>Dyplopterys cabrerana</em>, un bejuco selvático con relación cercana al yagé. [...] Cuando el yagé se combina con alguna de las dos plantas agregadas, el resultado es un potente efecto sinérgico, una versión bioquímica de una totalidad mayor que la suma de sus partes. Las visiones, tal como los indios le prometieron a Schultes, se hicieron más brillantes, y los tonos azules y púrpuras se expandieron hasta cubrir todo el espectro del arco iris.</p><p>Lo que asombró más a Schultes fue menos el efecto puro de las drogas –para ese entonces, después de todo, se estaba acostumbrando a la inmersión de su consciencia en el color– que el implícito problema intelectual planteado por esos complejos preparados. La flora amazónica contiene, literalmente, decenas de miles de especies. ¿Cómo aprendieron los indios a identificar y combinar en forma tan refinada estas plantas morfológicamente distintas, que poseían propiedades químicas tan peculiares y complementarias? La explicación científica tradicional es el tanteo –término razonable que puede bien dar razón de ciertas innovaciones–, pero en otro nivel, como comprobó Schultes después de pasar más tiempo en la selva, es un eufemismo que esconde el hecho de que los etnobotánicos tienen una idea muy vaga de cómo los indios hicieron sus descubrimientos en primer lugar.</p><p>El problema del tanteo, de la prueba por eliminación, es que la elaboración de los preparados a menudo implica procedimientos muy complejos o rinde resultados de escaso o ningún valor. El yagé es un bejuco incomible y sin características definidas que rara vez florece. Es cierto que su corteza es amarga, lo cual a menudo es indicio de sus propiedades medicinales, pero no lo es más que cientos de otras lianas de la selva. La infusión de la corteza causa severos vómitos y diarrea, condiciones que desalentarían cualquier experimentación adicional.</p><p><em>Tomado de: Davis, W. (2009). El río. Bogotá: Fondo de Cultura Económica, El Áncora Editores.</em></p>`,
    text: 'Considere el siguiente enunciado: "Cuando el yagé se combina con alguna de las dos plantas agregadas, el resultado es un potente efecto sinérgico, una versión bioquímica de una totalidad mayor que la suma de sus partes." La palabra "alguna" indica que del yagé resulta un potente efecto sinérgico cuando se le agregan',
    options: [
      'la Psychotria virids y la Dyplopterys cabrerana.',
      'la Psychotria virids o la Dyplopterys cabrerana.',
      'solo la Psychotria virids.',
      'solo la Dyplopterys cabrerana.',
    ],
    correct: 1,
    competency: 'Comprensión lectora',
    level: 1,
    assertion: 'Identifica y entiende los contenidos locales que conforman un texto.',
    evidence: 'Entiende el significado de los elementos locales que constituyen un texto.',
    component: 'Comprensión local del texto',
    standard: 'Elaboro hipótesis de interpretación atendiendo a la intención comunicativa y al sentido global del texto que leo.',
    skill: 'Comprender el significado de cuantificadores en un texto.',
    evaluationCriteria: 'La capacidad para comprender el significado de cuantificadores en un texto.',
    justification: 'La respuesta correcta es la opción B, ya que la palabra "alguna" se refiere tanto a la Psychotria virids como a la Dyplopterys cabrerana. Cuando la una o la otra se mezcla con el yagé, se produce "un potente efecto sinérgico".',
    invalidOptions: 'Las opciones A, C y D no son correctas porque presentan un significado erróneo de la palabra "alguna". La opción A afirma que el efecto sinérgico se produce cuando el yagé se mezcla con la Psychotria virids y la Dyplopterys cabrerana simultáneamente, pero la mezcla del yagé con la una o la otra produce ese efecto. La opción C dice que el efecto sinérgico se produce sólo cuando el yagé se mezcla con la Psychotria virids, pero la Dyplopterys cabrerana también produce ese efecto. La opción D asegura que el efecto se produce sólo cuando el yagé se mezcla con la Dyplopterys cabrerana, pero el efecto también se produce cuando el yagé se mezcla con la Psychotria virids.',
  },

  {
    id: 20,
    simulators: [2],
    subject: 'lc',
    context: `<p>Dio la casualidad de que Schultes había tropezado con un hecho de alquimia chamánica sin paralelo en el Amazonas. Los ingredientes psicoactivos de la corteza del yagé son los beta-carbolíneos harmine y harmaline. Hace mucho tiempo, sin embargo, los chamanes del noroeste amazónico descubrieron que se podían ampliar dramáticamente sus efectos añadiendo unas cuantas plantas secundarias. Este es un importante rasgo de muchos preparados tradicionales, y se debe en parte al hecho de que diferentes compuestos químicos en cantidades relativamente pequeñas pueden hacerse mutuamente más potentes.</p><p>En el caso del yagé, se han identificado hasta la fecha cerca de veintiún añadidos. Dos de estos son de particular interés. La <em>Psychotria virids</em> es un arbusto de la familia del café. La Chagropanga es la <em>Dyplopterys cabrerana</em>, un bejuco selvático con relación cercana al yagé. [...] Cuando el yagé se combina con alguna de las dos plantas agregadas, el resultado es un potente efecto sinérgico, una versión bioquímica de una totalidad mayor que la suma de sus partes. Las visiones, tal como los indios le prometieron a Schultes, se hicieron más brillantes, y los tonos azules y púrpuras se expandieron hasta cubrir todo el espectro del arco iris.</p><p>Lo que asombró más a Schultes fue menos el efecto puro de las drogas –para ese entonces, después de todo, se estaba acostumbrando a la inmersión de su consciencia en el color– que el implícito problema intelectual planteado por esos complejos preparados. La flora amazónica contiene, literalmente, decenas de miles de especies. ¿Cómo aprendieron los indios a identificar y combinar en forma tan refinada estas plantas morfológicamente distintas, que poseían propiedades químicas tan peculiares y complementarias? La explicación científica tradicional es el tanteo –término razonable que puede bien dar razón de ciertas innovaciones–, pero en otro nivel, como comprobó Schultes después de pasar más tiempo en la selva, es un eufemismo que esconde el hecho de que los etnobotánicos tienen una idea muy vaga de cómo los indios hicieron sus descubrimientos en primer lugar.</p><p>El problema del tanteo, de la prueba por eliminación, es que la elaboración de los preparados a menudo implica procedimientos muy complejos o rinde resultados de escaso o ningún valor. El yagé es un bejuco incomible y sin características definidas que rara vez florece. Es cierto que su corteza es amarga, lo cual a menudo es indicio de sus propiedades medicinales, pero no lo es más que cientos de otras lianas de la selva. La infusión de la corteza causa severos vómitos y diarrea, condiciones que desalentarían cualquier experimentación adicional.</p><p><em>Tomado de: Davis, W. (2009). El río. Bogotá: Fondo de Cultura Económica, El Áncora Editores.</em></p>`,
    text: 'De lo expresado en los dos primeros párrafos, es acertado afirmar que',
    options: [
      'el primero presenta la tesis del autor y el segundo la complementa con ejemplos.',
      'el primero introduce el tema y el segundo presenta la tesis con ejemplos.',
      'el primero presenta la estructura del texto y el segundo la desarrolla con ejemplos.',
      'el primero introduce el tema y el segundo lo desarrolla con ejemplos.',
    ],
    correct: 3,
    competency: 'Comprensión lectora',
    level: 2,
    assertion: 'Comprende cómo se articulan las partes de un texto para darle un sentido global.',
    evidence: 'Comprende la estructura formal de un texto y la función de sus partes.',
    component: 'Comprensión global del texto',
    standard: 'Diseño un esquema de interpretación, teniendo en cuenta el tipo de texto, tema, interlocutor e intención comunicativa.',
    skill: 'Inferir las funciones de las partes de un texto a partir de una lectura global.',
    evaluationCriteria: 'La capacidad para inferir las funciones de las partes de un texto a partir de una lectura global.',
    justification: 'La respuesta correcta es la opción D, dado que en el primer párrafo del texto se introduce el tema del texto, el yagé y sus añadidos, y en el segundo párrafo se exponen ejemplos concretos sobre añadidos al yagé como la Psychotria virids y la Dyplopterys cabrerana.',
    invalidOptions: 'Las opciones A, B y C no son correctas porque identifican de manera errónea las funciones de algunas partes del texto. La opción A afirma que en el primer párrafo se presenta la tesis del texto, pero la tesis (la idea del tanteo no es adecuada para explicar el surgimiento de las combinaciones de plantas) se halla hacia el final del texto. La opción B dice que el segundo párrafo presenta la tesis del texto, pero esta se encuentra en los párrafos finales. La opción C asegura que el primer párrafo presenta la estructura del texto, pero en este no se menciona cómo el autor va a organizar el resto del texto.',
  },
];

// Función para obtener preguntas de un simulacro específico
function getQuestionsForSimulacro(simulacroId) {
  return QUESTIONS.filter(q => q.simulators.includes(simulacroId));
}

// Función para obtener preguntas por materia
function getQuestionsBySubject(subject) {
  return QUESTIONS.filter(q => q.subject === subject);
}
