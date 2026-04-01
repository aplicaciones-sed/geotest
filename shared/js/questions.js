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
  // LC - Lectura Crítica (20 preguntas)
  {
    id: 1,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p><strong>LA CONTAMINACIÓN MARINA</strong></p><p>Debido a la inmensidad y profundidad de los océanos, hasta hace poco se creía que podrían ser utilizados para verter basura y sustancias químicas en cantidades ilimitadas sin que esto tuviera consecuencias importantes. Los partidarios de continuar con los vertidos en los océanos incluso tienen un eslogan: "La solución a la contaminación es la dilución". En la actualidad, basta con fijarse en la zona muerta del tamaño del estado de Nueva Jersey que se forma cada verano en el delta del Río Mississippi, o en la extensión de 1.600 kilómetros de plástico en descomposición en el Pacífico Norte para darse cuenta de que esta ideología de la "dilución" ha contribuido a llevar al borde del colapso lo que tiempo atrás fue un ecosistema oceánico próspero. Existen pruebas de que los océanos han sufrido a manos del hombre durante miles de años. Sin embargo, estudios recientes demuestran que la degradación, especialmente en las zonas costeras, se ha acelerado notablemente en los últimos tres siglos a medida que han aumentado los vertidos industriales y los contaminantes procedentes de explotaciones agrarias y ciudades costeras.</p><br><p>Algunos de los contaminantes más comunes derivados de la actividad humana son los plaguicidas, fertilizantes químicos, detergentes, hidrocarburos, aguas residuales, plásticos y otros sólidos. Muchos de estos contaminantes se acumulan en las profundidades del océano, donde son ingeridos por pequeños organismos marinos a través de los cuales se introducen en la cadena alimentaria global. Los fertilizantes ricos en nitrógeno que utilizan los productores agrícolas en zonas del interior, por ejemplo, acaban en las corrientes, ríos y aguas subterráneas locales, y más tarde se depositan en los estuarios, bahías y deltas. Este exceso de nutrientes puede provocar un crecimiento masivo de algas que consumen el oxígeno del agua, lo cual genera zonas en las que no puede haber vida marina o apenas existe. Los científicos han descubierto 400 zonas muertas con estas características por todo el planeta. Los humanos comienzan a percatarse de la insostenibilidad de la filosofía de la "dilución". Muchas leyes nacionales y protocolos internacionales prohíben en la actualidad el vertido de sustancias nocivas en los océanos, si bien su aplicación es a menudo incierta. Se están creando santuarios marinos con el fin de mantener ecosistemas marinos prístinos. Asimismo, se están llevando a cabo iniciativas aisladas que han logrado cierto éxito en la restauración de estuarios y bahías.</p> <div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado y adaptado de: http://www.nationalgeographic.es/el-oceano/cuestiones-criticas-sobre-el-problemas-de-la-contaminacion-marina/</em></p></div></div>`,
    text: '¿Cuál es la relación argumentativa entre los dos enunciados del texto que se presentan a continuación?<br><br>"Debido a la inmensidad y profundidad de los océanos, hasta hace poco se creía que podrían ser utilizados para verter basura y sustancias químicas en cantidades ilimitadas sin que esto tuviera consecuencias importantes."<br><br>"Estudios recientes demuestran que la degradación, especialmente en las zonas costeras, se ha acelerado notablemente en los últimos tres siglos".',
    options: [
      "Premisa / evidencia.",
      "Introducción / descripción.",
      "Antecedente / fundamento.",
      "Conjetura / contraevidencia.",
    ],
    correct: 3,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Comprende cómo se articulan las partes de un texto para darle un sentido global.",
    evidence:
      "Comprende las relaciones entre diferentes partes o enunciados de un texto.",
    component: "",
    standard:
      "Analizo los aspectos textuales, conceptuales y formales de cada uno de los textos que leo.",
    skill: "",
    evaluationCriteria:
      "La capacidad para identificar la relación entre dos enunciados de un texto.",
    justification:
      "La opción D es la respuesta correcta, ya que el primer enunciado presenta una conjetura acerca de la posibilidad de verter basura sin consecuencias en los océanos, dada su profundidad, y el segundo enunciado señala que existen estudios que prueban que la conjetura no era correcta.",
    invalidOptions:
      "Las opciones A, B y C no son correctas, ya que identifican relaciones inexistentes entre los enunciados. La opción A afirma que el primer enunciado es una premisa y el segundo una evidencia para sustentar esa premisa, pero el segundo enunciado presenta evidencia que va en contravía de lo dicho en el primero. La opción B dice que el primer enunciado es una introducción y el segundo una descripción, pero el segundo enunciado no hace una descripción; presenta evidencia de estudios para contradecir la hipótesis inicial. La opción C, por último, asegura que el primer es un antecedente y el segundo enunciado es un fundamento, pero el primer enunciado no es un antecedente de un razonamiento.",
  },
  {
    id: 2,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p><strong>LA CONTAMINACIÓN MARINA</strong></p><p>Debido a la inmensidad y profundidad de los océanos, hasta hace poco se creía que podrían ser utilizados para verter basura y sustancias químicas en cantidades ilimitadas sin que esto tuviera consecuencias importantes. Los partidarios de continuar con los vertidos en los océanos incluso tienen un eslogan: "La solución a la contaminación es la dilución". En la actualidad, basta con fijarse en la zona muerta del tamaño del estado de Nueva Jersey que se forma cada verano en el delta del Río Mississippi, o en la extensión de 1.600 kilómetros de plástico en descomposición en el Pacífico Norte para darse cuenta de que esta ideología de la "dilución" ha contribuido a llevar al borde del colapso lo que tiempo atrás fue un ecosistema oceánico próspero. Existen pruebas de que los océanos han sufrido a manos del hombre durante miles de años. Sin embargo, estudios recientes demuestran que la degradación, especialmente en las zonas costeras, se ha acelerado notablemente en los últimos tres siglos a medida que han aumentado los vertidos industriales y los contaminantes procedentes de explotaciones agrarias y ciudades costeras.</p><br><p>Algunos de los contaminantes más comunes derivados de la actividad humana son los plaguicidas, fertilizantes químicos, detergentes, hidrocarburos, aguas residuales, plásticos y otros sólidos. Muchos de estos contaminantes se acumulan en las profundidades del océano, donde son ingeridos por pequeños organismos marinos a través de los cuales se introducen en la cadena alimentaria global. Los fertilizantes ricos en nitrógeno que utilizan los productores agrícolas en zonas del interior, por ejemplo, acaban en las corrientes, ríos y aguas subterráneas locales, y más tarde se depositan en los estuarios, bahías y deltas. Este exceso de nutrientes puede provocar un crecimiento masivo de algas que consumen el oxígeno del agua, lo cual genera zonas en las que no puede haber vida marina o apenas existe. Los científicos han descubierto 400 zonas muertas con estas características por todo el planeta. Los humanos comienzan a percatarse de la insostenibilidad de la filosofía de la "dilución". Muchas leyes nacionales y protocolos internacionales prohíben en la actualidad el vertido de sustancias nocivas en los océanos, si bien su aplicación es a menudo incierta. Se están creando santuarios marinos con el fin de mantener ecosistemas marinos prístinos. Asimismo, se están llevando a cabo iniciativas aisladas que han logrado cierto éxito en la restauración de estuarios y bahías.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado y adaptado de: http://www.nationalgeographic.es/el-oceano/cuestiones-criticas-sobre-el-problemas-de-la-contaminacion-marina/</em></p></div>`,
    text: "¿Cuál de los siguientes enunciados puede considerarse la antítesis del argumento central del texto?",
    options: [
      "La respuesta al problema de la contaminación es la dilución.",
      "Las iniciativas dirigidas a la protección marítima son casi inexistentes.",
      "Los océanos han sido contaminados por los humanos durante miles de años.",
      "Los humanos han comenzado a advertir la insostenibilidad de la filosofía de la dilución.",
    ],
    correct: 0,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Comprende cómo se articulan las partes de un texto para darle un sentido global.",
    evidence:
      "Identifica y caracteriza las ideas o afirmaciones presentes en un texto informativo.",
    component: "",
    standard:
      "Diseño un esquema de interpretación, teniendo en cuenta al tipo de texto, tema, interlocutor e intención comunicativa.",
    skill: "",
    evaluationCriteria:
      "La capacidad para inferir la tesis contraria a la tesis principal de un texto.",
    justification:
      "La opción A es la respuesta correcta, ya que el texto argumenta que la idea de la dilución ha llevado a que causemos daños cada vez mayores a los océanos: \"En la actualidad, basta con fijarse en la zona muerta del tamaño del estado de Nueva Jersey que se forma cada verano en el delta del Río Mississippi, o en la extensión de 1.600 kilómetros de plástico en descomposición en el Pacífico Norte para darse cuenta de que esta ideología de la 'dilución' ha contribuido a llevar al borde del colapso lo que tiempo atrás fue un ecosistema oceánico próspero\". La opción A afirma justamente lo contrario.",
    invalidOptions:
      "Las opciones B, C y D no son correctas porque presentan tesis que no se oponen a lo dicho en el texto. La opción B afirma que las iniciativas para proteger los océanos son casi inexistentes. Lo tesis contraria esta sería que las iniciativas para proteger a los océanos abundan. El texto no menciona lo anterior, simplemente señala que cada vez hay más santuarios marinos e iniciativas aisladas para restaurar estuarios y bahías. La opción C dice los humanos han contamino los océanos desde hace miles de años, que es justamente lo que afirma el texto. Finalmente, la opción D asegura que los humanos han empezado a darse cuenta de la insostenibilidad de la idea de la dilución, que también es algo que se afirma en el texto: \"Los humanos comienzan a percatarse de la insostenibilidad de la filosofía de la 'dilución'\".",
  },
  {
    id: 3,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p><strong>LA CONTAMINACIÓN MARINA</strong></p><p>Debido a la inmensidad y profundidad de los océanos, hasta hace poco se creía que podrían ser utilizados para verter basura y sustancias químicas en cantidades ilimitadas sin que esto tuviera consecuencias importantes. Los partidarios de continuar con los vertidos en los océanos incluso tienen un eslogan: "La solución a la contaminación es la dilución". En la actualidad, basta con fijarse en la zona muerta del tamaño del estado de Nueva Jersey que se forma cada verano en el delta del Río Mississippi, o en la extensión de 1.600 kilómetros de plástico en descomposición en el Pacífico Norte para darse cuenta de que esta ideología de la "dilución" ha contribuido a llevar al borde del colapso lo que tiempo atrás fue un ecosistema oceánico próspero. Existen pruebas de que los océanos han sufrido a manos del hombre durante miles de años. Sin embargo, estudios recientes demuestran que la degradación, especialmente en las zonas costeras, se ha acelerado notablemente en los últimos tres siglos a medida que han aumentado los vertidos industriales y los contaminantes procedentes de explotaciones agrarias y ciudades costeras.</p><br><p>Algunos de los contaminantes más comunes derivados de la actividad humana son los plaguicidas, fertilizantes químicos, detergentes, hidrocarburos, aguas residuales, plásticos y otros sólidos. Muchos de estos contaminantes se acumulan en las profundidades del océano, donde son ingeridos por pequeños organismos marinos a través de los cuales se introducen en la cadena alimentaria global. Los fertilizantes ricos en nitrógeno que utilizan los productores agrícolas en zonas del interior, por ejemplo, acaban en las corrientes, ríos y aguas subterráneas locales, y más tarde se depositan en los estuarios, bahías y deltas. Este exceso de nutrientes puede provocar un crecimiento masivo de algas que consumen el oxígeno del agua, lo cual genera zonas en las que no puede haber vida marina o apenas existe. Los científicos han descubierto 400 zonas muertas con estas características por todo el planeta. Los humanos comienzan a percatarse de la insostenibilidad de la filosofía de la "dilución". Muchas leyes nacionales y protocolos internacionales prohíben en la actualidad el vertido de sustancias nocivas en los océanos, si bien su aplicación es a menudo incierta. Se están creando santuarios marinos con el fin de mantener ecosistemas marinos prístinos. Asimismo, se están llevando a cabo iniciativas aisladas que han logrado cierto éxito en la restauración de estuarios y bahías.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado y adaptado de: http://www.nationalgeographic.es/el-oceano/cuestiones-criticas-sobre-el-problemas-de-la-contaminacion-marina/</em></p></div>`,
    text: 'El enunciado "Los científicos han descubierto 400 zonas muertas con estas características por todo el planeta"',
    options: [
      'refuerza la postura de aquellos que promueven la ideología de la "dilución".',
      "controvierte la tesis sobre el incremento alarmante de la contaminación marítima.",
      "apoya el argumento de la contaminación marítima a causa de la actividad humana.",
      "refuta la creencia popular de que la contaminación marítima es un fenómeno reciente.",
    ],
    correct: 2,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Comprende cómo se articulan las partes de un texto para darle un sentido global.",
    evidence:
      "Identifica y caracteriza las ideas o afirmaciones presentes en un texto informativo.",
    component: "",
    standard:
      "Diseño un esquema de interpretación, teniendo en cuenta al tipo de texto, tema, interlocutor e intención comunicativa.",
    skill: "",
    evaluationCriteria:
      "La capacidad para identificar la función que cumple un enunciado en un argumento en un texto.",
    justification:
      "La respuesta correcta es la opción C, ya que las zonas muertas descubiertas contribuyen a probar que la devastación reciente de los océanos es responsabilidad de los vertimientos industriales y la contaminación humana.",
    invalidOptions:
      "Las opciones A, B y D no son correctas porque presentan funciones que no cumple el enunciado de la pregunta. La opción A afirma que el descubrimiento de las zonas muertas refuerza la postura de quienes defienden la dilución, pero las zonas muertas prueban que la idea de la dilución no es correcta. La opción B dice que las zonas controvierten la tesis sobre el incremento de la contaminación marina, pero el descubrimiento de estas zonas muestra todo lo contrario. La opción D, finalmente, señala que las zonas muertas refutan la creencia de que la contaminación marítima es un fenómeno reciente, pero el descubrimiento de estas zonas apoya la idea de que de hecho la contaminación marina es en ciertos sentidos un hecho sentido.",
  },
  {
    id: 4,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p><strong>LA CONTAMINACIÓN MARINA</strong></p><p>Debido a la inmensidad y profundidad de los océanos, hasta hace poco se creía que podrían ser utilizados para verter basura y sustancias químicas en cantidades ilimitadas sin que esto tuviera consecuencias importantes. Los partidarios de continuar con los vertidos en los océanos incluso tienen un eslogan: "La solución a la contaminación es la dilución". En la actualidad, basta con fijarse en la zona muerta del tamaño del estado de Nueva Jersey que se forma cada verano en el delta del Río Mississippi, o en la extensión de 1.600 kilómetros de plástico en descomposición en el Pacífico Norte para darse cuenta de que esta ideología de la "dilución" ha contribuido a llevar al borde del colapso lo que tiempo atrás fue un ecosistema oceánico próspero. Existen pruebas de que los océanos han sufrido a manos del hombre durante miles de años. Sin embargo, estudios recientes demuestran que la degradación, especialmente en las zonas costeras, se ha acelerado notablemente en los últimos tres siglos a medida que han aumentado los vertidos industriales y los contaminantes procedentes de explotaciones agrarias y ciudades costeras.</p><br><p>Algunos de los contaminantes más comunes derivados de la actividad humana son los plaguicidas, fertilizantes químicos, detergentes, hidrocarburos, aguas residuales, plásticos y otros sólidos. Muchos de estos contaminantes se acumulan en las profundidades del océano, donde son ingeridos por pequeños organismos marinos a través de los cuales se introducen en la cadena alimentaria global. Los fertilizantes ricos en nitrógeno que utilizan los productores agrícolas en zonas del interior, por ejemplo, acaban en las corrientes, ríos y aguas subterráneas locales, y más tarde se depositan en los estuarios, bahías y deltas. Este exceso de nutrientes puede provocar un crecimiento masivo de algas que consumen el oxígeno del agua, lo cual genera zonas en las que no puede haber vida marina o apenas existe. Los científicos han descubierto 400 zonas muertas con estas características por todo el planeta. Los humanos comienzan a percatarse de la insostenibilidad de la filosofía de la "dilución". Muchas leyes nacionales y protocolos internacionales prohíben en la actualidad el vertido de sustancias nocivas en los océanos, si bien su aplicación es a menudo incierta. Se están creando santuarios marinos con el fin de mantener ecosistemas marinos prístinos. Asimismo, se están llevando a cabo iniciativas aisladas que han logrado cierto éxito en la restauración de estuarios y bahías.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado y adaptado de: http://www.nationalgeographic.es/el-oceano/cuestiones-criticas-sobre-el-problemas-de-la-contaminacion-marina/</em></p></div>`,
    text: "¿Qué recurso emplean los autores del texto para reforzar su tesis principal?",
    options: [
      "Evidencia científica.",
      "Un estudio de caso.",
      "Datos gubernamentales.",
      "Investigaciones propias.",
    ],
    correct: 0,
    competency: "Comprensión lectora",
    level: "",
    assertion: "Reflexiona a partir de un texto y evalúa su contenido.",
    evidence: "Reconoce las estrategias discursivas en un texto.",
    component: "",
    standard:
      "Elaboro hipótesis de interpretación atendiendo a la intención comunicativa y al sentido global del texto que leo.",
    skill: "",
    evaluationCriteria:
      "La capacidad para reconocer recursos argumentativos en un texto.",
    justification:
      "La respuesta correcta es la opción A, ya que los autores utilizan evidencia científica para probar que la filosofía de la dilución no tiene mayor sentido. Esto es claro sobre todo en el segundo párrafo del texto, donde se explica en detalle el efecto que pueden tener los contaminantes más comunes en el océano.",
    invalidOptions:
      "Las opciones B, C y D no son correctas porque presentan recursos que no se utilizan en el texto. La opción B afirma que el texto usa un estudio de caso, pero este no se centra un único ejemplo para luego llegar a conclusiones generales. La opción C afirma que se usan datos gubernamentales, pero en el texto no se utilizan estudios de Gobiernos. La opción D, por último, señala que utilizan investigaciones propias, pero en el texto nunca se habla de que National Geographic o los autores llevaran a cabo estudios propios.",
  },
  {
    id: 5,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p><em>Por qué nuestra mente es más conocida que el cuerpo.</em></p><p>Por otra parte, para saber que conocemos nuestra mente no sólo antes y más ciertamente, sino también más evidentemente que el cuerpo, hay que observar que es evidente por luz natural que no hay afecciones o cualidades de la nada; y por tanto donde quiera que observemos algunas, debe hallarse necesariamente una cosa o una sustancia a la que pertenezcan. Y cuantas más observemos en esa cosa o sustancia, tanto más claramente la conoceremos. Y es evidente que observamos más en nuestra mente que en ninguna otra cosa, porque todo lo que nos permite conocer algo nos lleva también con mucha mayor certeza al conocimiento de nuestra mente. Como cuando juzgo que existe la tierra, porque la toco o la veo: con más razón debo juzgar, por eso mismo, que existe mi mente, pues es posible, quizá, que juzgue que toco la tierra aunque no haya tierra, pero no es posible que yo juzgue esto y que mi mente, que lo juzga, no sea nada; y así en lo demás.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Descartes, R. Sobre los principios de la filosofía.</em></p></div>`,
    text: 'Cuando el autor afirma "es posible, quizá, que juzgue que toco la tierra aunque no haya tierra, pero no es posible que yo juzgue esto y que mi mente, que lo juzga, no sea nada", pretende',
    options: [
      "probar que no hay certeza sobre la existencia de la mente.",
      "señalar que no hay certeza de la existencia de la tierra.",
      "mostrar que es posible equivocarse en un juicio.",
      "demostrar la existencia de quien juzga.",
    ],
    correct: 3,
    competency: "Comprensión lectora",
    level: "",
    assertion: "Reflexiona a partir de un texto y evalúa su contenido.",
    evidence: "Reconoce las estrategias discursivas en un texto.",
    component: "",
    standard:
      "Relaciono el significado de los textos que leo con los contextos sociales, culturales y políticos en los cuales se han producido.",
    skill: "",
    evaluationCriteria:
      "La capacidad para inferir la intención comunicativa de un enunciado de un texto a partir de una lectura global.",
    justification:
      "La respuesta correcta es la opción D. Por medio del enunciado, Descartes busca probar que, aunque la mente se equivoque a la hora de hacer un juicio, necesariamente existe pues está haciendo un juicio. Es decir, incluso si la mente emite un juicio sobre algo que no está ahí, la mente tiene que estar ahí para poder hacer ese juicio.",
    invalidOptions:
      "Las opciones A, B y C no son correctas porque presentan intenciones que no se corresponden con la del enunciado de la pregunta. La opción A afirma que el enunciado busca probar que no hay certeza sobre la existencia de la mente, pero el enunciado pretende hacer justamente lo contrario. La opción B dice que el enunciado quiere señalar que no hay certeza sobre la existencia de la tierra, pero el enunciado no problematiza la existencia la tierra —de hecho, la da por sentado—. La opción C, finalmente, asegura que el enunciado busca mostrar que es posible equivocarse en un juicio, pero ese no es el punto del enunciado. Dado todo lo que se ha dicho en el texto antes del enunciado, es posible inferir que lo que Descartes pretende es probar la existencia de quien juzga.",
  },
  {
    id: 6,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p><em>Por qué nuestra mente es más conocida que el cuerpo.</em></p><p>Por otra parte, para saber que conocemos nuestra mente no sólo antes y más ciertamente, sino también más evidentemente que el cuerpo, hay que observar que es evidente por luz natural que no hay afecciones o cualidades de la nada; y por tanto donde quiera que observemos algunas, debe hallarse necesariamente una cosa o una sustancia a la que pertenezcan. Y cuantas más observemos en esa cosa o sustancia, tanto más claramente la conoceremos. Y es evidente que observamos más en nuestra mente que en ninguna otra cosa, porque todo lo que nos permite conocer algo nos lleva también con mucha mayor certeza al conocimiento de nuestra mente. Como cuando juzgo que existe la tierra, porque la toco o la veo: con más razón debo juzgar, por eso mismo, que existe mi mente, pues es posible, quizá, que juzgue que toco la tierra aunque no haya tierra, pero no es posible que yo juzgue esto y que mi mente, que lo juzga, no sea nada; y así en lo demás.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Descartes, R. Sobre los principios de la filosofía.</em></p></div>`,
    text: 'La afirmación "no hay afecciones o cualidades de la nada" permite',
    options: [
      "sostener que si observamos algunas cualidades, entonces existe algo a lo que pertenecen.",
      "afirmar que aunque existe una sustancia no podemos conocer sus cualidades.",
      "sostener que si existe una sustancia, entonces podemos observar sus cualidades.",
      "demostrar que si conocemos algo, entonces existen sus cualidades.",
    ],
    correct: 0,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Comprende cómo se articulan las partes de un texto para darle un sentido global.",
    evidence:
      "Identifica y caracteriza las ideas o afirmaciones presentes en un texto informativo.",
    component: "",
    standard:
      "Elaboro hipótesis de interpretación atendiendo a la intención comunicativa y al sentido global del texto que leo.",
    skill: "",
    evaluationCriteria:
      "La capacidad para identificar la función que cumple un enunciado en un argumento en un texto.",
    justification:
      'La opción A es la respuesta correcta, ya que Descartes afirma que la nada no tiene cualidades para probar que, si hay cualidades, entonces debe haber algo a lo que pertenezcan esas cualidades: "y por tanto donde quiera que observemos algunas, debe hallarse necesariamente una cosa o una sustancia a la que pertenezcan".',
    invalidOptions:
      "Las opciones B, C y D no son correctas porque no presentan la función del enunciado en el texto. La opción B afirma que el enunciado busca mostrar que, aunque exista una sustancia, no podemos conocer sus cualidades, pero el texto afirma que cuanto más observemos a una más la conoceremos. La opción C dice que el enunciado quiere probar que, si existe una sustancia, entonces podemos conocer sus cualidades, pero, como lo muestra el resto del texto, lo que le interesa al autor es mostrar que debe existir una sustancia cuando hay cualidades. La opción D, finalmente, asegura que el enunciado busca demostrar que, si conocemos algo, existen sus cualidades, pero el texto no dice que el conocimiento de una sustancia implique que sus cualidades existen. De hecho, podemos equivocarnos sobre la existencia de las cualidades de una sustancia, sin que esto implique que la sustancia no exista.",
  },
  {
    id: 7,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p><em>Por qué nuestra mente es más conocida que el cuerpo.</em></p><p>Por otra parte, para saber que conocemos nuestra mente no sólo antes y más ciertamente, sino también más evidentemente que el cuerpo, hay que observar que es evidente por luz natural que no hay afecciones o cualidades de la nada; y por tanto donde quiera que observemos algunas, debe hallarse necesariamente una cosa o una sustancia a la que pertenezcan. Y cuantas más observemos en esa cosa o sustancia, tanto más claramente la conoceremos. Y es evidente que observamos más en nuestra mente que en ninguna otra cosa, porque todo lo que nos permite conocer algo nos lleva también con mucha mayor certeza al conocimiento de nuestra mente. Como cuando juzgo que existe la tierra, porque la toco o la veo: con más razón debo juzgar, por eso mismo, que existe mi mente, pues es posible, quizá, que juzgue que toco la tierra aunque no haya tierra, pero no es posible que yo juzgue esto y que mi mente, que lo juzga, no sea nada; y así en lo demás.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Descartes, R. Sobre los principios de la filosofía.</em></p></div>`,
    text: "De acuerdo con los argumentos expuestos por Descartes, nuestra mente existe porque",
    options: [
      "cuanto más observemos una cosa, más claramente la conoceremos.",
      "no es posible que yo juzgue algo y que mi mente, que lo juzga, no sea nada.",
      "no existen los cuerpos, aunque los toque y los vea.",
      "conocemos nuestra mente más ciertamente que el cuerpo.",
    ],
    correct: 1,
    competency: "Comprensión lectora",
    level: "",
    assertion: "Reflexiona a partir de un texto y evalúa su contenido.",
    evidence:
      "Establece la validez e implicaciones de un enunciado de un texto (argumentativo o expositivo).",
    component: "",
    standard:
      "Asumo una actitud crítica frente a los textos que leo y elaboro, y frente a otros tipos de texto: explicativos, descriptivos y narrativos.",
    skill: "",
    evaluationCriteria:
      "La capacidad para explicar por qué una tesis se sostiene sobre los argumentos dados en el texto.",
    justification:
      'La respuesta correcta es la opción B porque, como afirma el texto, "hay que observar que es evidente por luz natural que no hay afecciones o cualidades de la nada; y por tanto donde quiera que observemos algunas, debe hallarse necesariamente una cosa o una sustancia a la que pertenezcan". Y si la mente emite juicios incluso sobre aquello que no está percibiendo, no es posible que la mente no sea nada, pues tiene la cualidad de emitir esos juicios.',
    invalidOptions:
      "Las opciones A, C y D no son correctas, ya que presentan explicaciones que no recogen la defensa de la tesis de Descartes. La opción A afirma que cuanto más observemos algo, más lo conoceremos, pero esto no contribuye a probar la existencia de la mente. La opción C dice que los cuerpos no existen, aunque los toquemos o los veamos, pero en el texto Descartes no se refiere a la existencia de los cuerpos. Finalmente, la opción D asegura que conocemos nuestra mente más ciertamente que nuestro cuerpo, pero del hecho de que creamos conocer algo no se sigue que ese algo existe (piénsese, por ejemplo, en los unicornios o los dragones).",
  },
  {
    id: 8,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p><em>Por qué nuestra mente es más conocida que el cuerpo.</em></p><p>Por otra parte, para saber que conocemos nuestra mente no sólo antes y más ciertamente, sino también más evidentemente que el cuerpo, hay que observar que es evidente por luz natural que no hay afecciones o cualidades de la nada; y por tanto donde quiera que observemos algunas, debe hallarse necesariamente una cosa o una sustancia a la que pertenezcan. Y cuantas más observemos en esa cosa o sustancia, tanto más claramente la conoceremos. Y es evidente que observamos más en nuestra mente que en ninguna otra cosa, porque todo lo que nos permite conocer algo nos lleva también con mucha mayor certeza al conocimiento de nuestra mente. Como cuando juzgo que existe la tierra, porque la toco o la veo: con más razón debo juzgar, por eso mismo, que existe mi mente, pues es posible, quizá, que juzgue que toco la tierra aunque no haya tierra, pero no es posible que yo juzgue esto y que mi mente, que lo juzga, no sea nada; y así en lo demás.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Descartes, R. Sobre los principios de la filosofía.</em></p></div>`,
    text: 'Con la expresión "luz natural", el autor se refiere a una',
    options: [
      "facultad de la nada.",
      "cualidad del cuerpo.",
      "facultad de la mente.",
      "cualidad divina.",
    ],
    correct: 2,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Identifica y entiende los contenidos locales que conforman un texto.",
    evidence:
      "Entiende el significado de los elementos locales que constituyen un texto.",
    component: "",
    standard:
      "Diseño un esquema de interpretación, teniendo en cuenta al tipo de texto, tema, interlocutor e intención comunicativa.",
    skill: "",
    evaluationCriteria:
      "La capacidad para identificar un sinónimo de una expresión a partir del contexto.",
    justification:
      'La respuesta correcta es la opción C. En el texto se afirma lo siguiente: "hay que observar que es evidente por luz natural que no hay afecciones o cualidades de la nada". La razón, o una facultad de la mente, es la que nos permite concluir que la nada no tiene cualidades.',
    invalidOptions:
      'Las opciones A, B y D no son correctas, ya que presentan expresiones que no tienen el mismo significado que "luz natural" en ese contexto. La opción A afirma que "luz natural" es lo mismo que una facultad de la nada, pero la nada no tiene facultades, como lo da a entender Descartes. La opción B dice que la "luz natural" es equivalente a una cualidad del cuerpo, pero en este contexto Descartes no se refiere a uno de los sentidos o a alguna característica del cuerpo humano, pues estas no nos permiten llegar al razonamiento del que se habla después. La opción D, finalmente, asegura que "luz natural" se refiere a una cualidad divina, pero no hay nada en el texto que afirme que la razón es una cualidad de Dios o ajena a los humanos.',
  },
  {
    id: 9,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><div style="text-align:center;margin-bottom:10px"><p><img style="width:100%" src="../shared/img/questions/mafalda1.png" alt='[Caricatura de Mafalda: En el primer recuadro, el padre le dice a un niño pequeño: "ES PARA MASTICARLO, PERO NO HAY QUE TRAGÁRSELO". En el segundo recuadro, Mafalda aparece y pregunta: "¿EL DISCURSO DE QUIÉN?"]' loading="lazy"></p></div><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado y adaptado de: http://www.edizzz.com/es-para-masticarlo-pero-no-hay-que-tragarselo/</em></p></div>`,
    text: 'Cuando Mafalda pregunta de quién es el discurso que hay que masticar "pero no hay que tragárselo", quiere decir que el discurso debe',
    options: [
      "analizarse pero no hay que creerlo.",
      "aprobarse pero no hay que admitirlo.",
      "criticarse pero hay que creerlo.",
      "aprobarse pero hay que reformularlo.",
    ],
    correct: 0,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Identifica y entiende los contenidos locales que conforman un texto.",
    evidence:
      "Entiende el significado de los elementos locales que constituyen un texto.",
    component: "",
    standard:
      "Elaboro hipótesis de interpretación atendiendo a la intención comunicativa y al sentido global del texto que leo.",
    skill: "",
    evaluationCriteria:
      "La capacidad para identificar una paráfrasis de un enunciado.",
    justification:
      'La respuesta correcta es la opción A, ya que lo que quiere decir Mafalda es que los discursos deben analizarse ("masticarse"), pero que no deben creerse ("tragarse"). El enunciado y la caricatura juegan con una acepción común de las palabras "masticar" y "tragar".',
    invalidOptions:
      "Las opciones B, C y D no son correctas, dado que presentan paráfrasis erróneas del enunciado de la pregunta. Las opciones B y D afirman que los discursos deben aprobarse, pero precisamente lo que dice Mafalda es que no hay que creerlos sin más. La opción C dice que los discursos deben creerse, pero Mafalda asegura que no deben creerse sin antes haberlo analizado.",
  },
  {
    id: 10,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><div style="text-align:center;margin-bottom:10px"><p><img style="width:100%" src="../shared/img/questions/mafalda1.png" alt='[Caricatura de Mafalda: En el primer recuadro, el padre le dice a un niño pequeño: "ES PARA MASTICARLO, PERO NO HAY QUE TRAGÁRSELO". En el segundo recuadro, Mafalda aparece y pregunta: "¿EL DISCURSO DE QUIÉN?"]' loading="lazy"></p></div><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado y adaptado de: http://www.edizzz.com/es-para-masticarlo-pero-no-hay-que-tragarselo/</em></p></div>`,
    text: "La expresión en la cara del padre al oír la pregunta de Mafalda se debe a que",
    options: [
      "no está de acuerdo con lo que dice Mafalda.",
      "no entendió lo que Mafalda quería decir.",
      "le disgustó que Mafalda lo interrumpiera tan súbitamente.",
      "no esperaba la interpretación que hizo Mafalda de sus palabras.",
    ],
    correct: 3,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Comprende cómo se articulan las partes de un texto para darle un sentido global.",
    evidence:
      "Identifica el tipo de relación existente entre diferentes elementos de un texto (discontinuo).",
    component: "",
    standard:
      "Doy cuenta del uso del lenguaje verbal o no verbal en manifestaciones humanas como los grafiti, la publicidad, los símbolos patrios, las canciones, los caligramas, entre otros.",
    skill: "",
    evaluationCriteria:
      "La capacidad para establecer relaciones entre elementos lingüísticos y no lingüísticos en un texto discontinuo.",
    justification:
      "La respuesta correcta es la opción D. El papá de Mafalda le está explicando a su hijo que debe masticar el chicle, pero no tragárselo. Su expresión en el segundo recuadro se relaciona con la interpretación que hizo Mafalda de sus palabras.",
    invalidOptions:
      "Las opciones A, B y C no son correctas porque interpretan de manera errónea la expresión del padre de Mafalda. La opción A afirma que el padre no está de acuerdo con Mafalda, pero su expresión es de resignación, no de desacuerdo. La opción B dice que el padre no entendió lo que dijo Mafalda, pero la expresión en su rostro es de resignación, no de duda. Todavía más importante: si el padre no entendiera la interpretación de Mafalda la caricatura carecería de humor y no cumpliría con su propósito comunicativo. La opción C, finalmente, asegura que el al padre le disgustó que Mafalda lo interrumpiera, pero su expresión es de resignación, no de rabia o molestia.",
  },
  {
    id: 11,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><div style="text-align:center;margin-bottom:10px"><p><img style="width:100%" src="../shared/img/questions/mafalda1.png" alt='[Caricatura de Mafalda: En el primer recuadro, el padre le dice a un niño pequeño: "ES PARA MASTICARLO, PERO NO HAY QUE TRAGÁRSELO". En el segundo recuadro, Mafalda aparece y pregunta: "¿EL DISCURSO DE QUIÉN?"]' loading="lazy"></p></div><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado y adaptado de: http://www.edizzz.com/es-para-masticarlo-pero-no-hay-que-tragarselo/</em></p></div>`,
    text: "¿Cuál de las siguientes afirmaciones describe un supuesto implícito en el cómic?",
    options: [
      "Los discursos de los políticos son engañosos.",
      "Los chicles son malos para la salud de los niños.",
      "Los padres no entienden a sus hijos.",
      "Los discursos de los políticos son difíciles.",
    ],
    correct: 0,
    competency: "Comprensión lectora",
    level: "",
    assertion: "Reflexiona a partir de un texto y evalúa su contenido.",
    evidence:
      "Establece la validez e implicaciones de un enunciado de un texto (argumentativo o expositivo).",
    component: "",
    standard:
      "Analizo las implicaciones culturales, sociales e ideológicas de manifestaciones humanas como los grafiti, la publicidad, los símbolos patrios, las canciones, los caligramas, entre otros.",
    skill: "",
    evaluationCriteria:
      "La capacidad para identificar supuestos implícitos en un texto.",
    justification:
      "La opción A es la respuesta correcta. La caricatura critica el discurso político, el discurso con el que usualmente lidian las caricaturas. Si es necesario analizar el discurso y no creerlo, es porque los discursos políticos suelen ser engañosos. Si no lo fueran, entonces la advertencia de Mafalda sería innecesaria y la caricatura perdería su gracia.",
    invalidOptions:
      "Las opciones B, C y D no son correctas porque identifican supuestos que no hacen parte de la caricatura. La opción B afirma que los chicles son malos para la salud de los niños, pero el papá de Mafalda en ningún momento regaña a su hijo por comer chicle. La opción C dice que los padres no entienden a los niños, pero el papá entiende lo que dice Mafalda y precisamente por eso es por lo que la caricatura es divertida. La opción D, finalmente, asegura que los discursos de los políticos son difíciles, pero el problema no es que sean difíciles, sino que no debemos creerlos por lo que son engañosos.",
  },
  {
    id: 12,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><div style="text-align:center;margin-bottom:10px"><p><img style="width:100%" src="../shared/img/questions/mafalda1.png" alt='[Caricatura de Mafalda: En el primer recuadro, el padre le dice a un niño pequeño: "ES PARA MASTICARLO, PERO NO HAY QUE TRAGÁRSELO". En el segundo recuadro, Mafalda aparece y pregunta: "¿EL DISCURSO DE QUIÉN?"]' loading="lazy"></p></div><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado y adaptado de: http://www.edizzz.com/es-para-masticarlo-pero-no-hay-que-tragarselo/</em></p></div>`,
    text: "Con este cómic el autor pretende",
    options: [
      "criticar la manera como los políticos hacen sus discursos.",
      "llamar la atención sobre cómo debemos tomar los discursos políticos.",
      "mostrar la relación entre comer chicle y los discursos de los políticos.",
      "disuadir a las personas de escuchar los discursos de los políticos.",
    ],
    correct: 0,
    competency: "Comprensión lectora",
    level: "",
    assertion: "Reflexiona a partir de un texto y evalúa su contenido.",
    evidence: "Reconoce las estrategias discursivas en un texto.",
    component: "",
    standard:
      "Analizo las implicaciones culturales, sociales e ideológicas de manifestaciones humanas como los grafiti, la publicidad, los símbolos patrios, las canciones, los caligramas, entre otros.",
    skill: "",
    evaluationCriteria:
      "La capacidad para inferir el propósito comunicativo de un texto.",
    justification:
      "La respuesta correcta es la opción A. La caricatura critica los discursos engañosos de los políticos que, a pesar de que no deberían ser engañosos, lo son, de acuerdo con el autor. Debido a esto, los discursos de este tipo deben ser analizados, pero no creídos sin un previo análisis.",
    invalidOptions:
      "Las opciones B, C y D no son correctas, ya que presentan intenciones comunicativas que no se corresponden con la caricatura. La opción B afirma que la intención de la caricatura es llamar la atención sobre la manera como debemos tomar los discursos de los políticos, pero la caricatura va más allá, como se puede ver por la expresión de resignación del padre. La opción C dice que la caricatura muestra la relación del chicle y los políticos, pero el chicle es sólo una excusa ingeniosa para criticar el discurso de los políticos. Finalmente, la opción D asegura que la caricatura pretende disuadir a las personas de escuchar los discursos políticos, pero lo que afirma Mafalda es que los discursos no deben dejar de oírse, sino analizarse con un oído crítico.",
  },
  {
    id: 13,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p>Siempre me ha sucedido lo mismo: las empresas en las que me lanzo tienen el estigma de lo indeterminado, la maldición de una artera mudanza. Y aquí voy, río arriba, como un necio, sabiendo de antemano en lo que irá a parar todo. En la selva, en donde nada me espera, cuya monotonía y clima de cueva de iguanas, me hace mal y me entristece.</p><br><p>Lejos del mar, sin hembras y hablando un idioma de tarados. Y, entretanto, mi querido Abdul Bashur, camarada de tantas noches a orillas del Bósforo, de tantos intentos inolvidables por hacer dinero fácil en Valencia y Toulon; esperándome y pensando que tal vez haya muerto. Me intriga sobremanera la forma como se repiten en mi vida estas caídas, estas decisiones erróneas desde su inicio, estos callejones sin salida cuya suma vendría a ser la historia de mi existencia.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Mutis, A. (1986). La nieve del almirante. Bogotá: Editorial Norma.</em></p></div>`,
    text: "De las siguientes razones, ¿cuál NO explica el desasosiego del personaje?",
    options: [
      "La insatisfacción con su vida en general.",
      "El terreno agreste en el que se encuentra.",
      "Los negocios pendientes con Abdul Bashur.",
      "La creencia de haber tomado malas decisiones.",
    ],
    correct: 2,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Comprende cómo se articulan las partes de un texto para darle un sentido global.",
    evidence:
      "Identifica y caracteriza las ideas o afirmaciones presentes en un texto informativo.",
    component: "",
    standard:
      "Leo textos literarios de diversa índole, género, temática y origen.",
    skill: "",
    evaluationCriteria:
      "La capacidad para identificar las razones que apoyan la tesis de un texto.",
    justification:
      "La respuesta correcta es la opción C. Los negocios con Abdul Bashur no son motivo de desasosiego para el personaje. Le inquieta saber que quizás su camarada piense que esté muerto, pero no los negocios que tiene con él.",
    invalidOptions:
      'Las opciones A, B y D no son correctas, ya que presentan razones por las que el personaje siente desasosiego. Las opciones A y D afirman, respectivamente, que el personaje siente desasosiego por la insatisfacción de su vida en general y por creer haber tomado malas decisiones, que es precisamente lo que se dice en el siguiente punto: "Me intriga sobremanera la forma como se repiten en mi vida estas caídas, estas decisiones erróneas desde su inicio, estos callejones sin salida cuya suma vendría a ser la historia de mi existencia". La opción B dice que al personaje siente desasosiego por el terreno en el que se encuentra, que es lo que dice el texto: "En la selva, en donde nada me espera, cuya monotonía y clima de cueva de iguanas, me hace mal y me entristece".',
  },
  {
    id: 14,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p>Siempre me ha sucedido lo mismo: las empresas en las que me lanzo tienen el estigma de lo indeterminado, la maldición de una artera mudanza. Y aquí voy, río arriba, como un necio, sabiendo de antemano en lo que irá a parar todo. En la selva, en donde nada me espera, cuya monotonía y clima de cueva de iguanas, me hace mal y me entristece.</p><br><p>Lejos del mar, sin hembras y hablando un idioma de tarados. Y, entretanto, mi querido Abdul Bashur, camarada de tantas noches a orillas del Bósforo, de tantos intentos inolvidables por hacer dinero fácil en Valencia y Toulon; esperándome y pensando que tal vez haya muerto. Me intriga sobremanera la forma como se repiten en mi vida estas caídas, estas decisiones erróneas desde su inicio, estos callejones sin salida cuya suma vendría a ser la historia de mi existencia.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Mutis, A. (1986). La nieve del almirante. Bogotá: Editorial Norma.</em></p></div>`,
    text: "La narración ocurre en",
    options: [
      "una cueva de iguanas.",
      "un navío en el río Bósforo.",
      "un lugar desértico lejos del mar.",
      "una embarcación, en algún río.",
    ],
    correct: 3,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Identifica y entiende los contenidos locales que conforman un texto.",
    evidence:
      "Identifica los eventos narrados de manera explícita en un texto (literario, descriptivo, caricatura o cómic) y los personajes involucrados (si los hay).",
    component: "",
    standard:
      "Leo textos literarios de diversa índole, género, temática y origen.",
    skill: "",
    evaluationCriteria:
      "La capacidad para ubicar información sobre un lugar que se encuentra de manera explícita en un texto.",
    justification:
      'La respuesta correcta es la opción D, dado que en el texto se afirma lo siguiente: "Y aquí voy, río arriba, como un necio, sabiendo de antemano en lo que irá a parar todo. En la selva, en donde nada me espera, cuya monotonía y clima de cueva de iguanas, me hace mal y me entristece".',
    invalidOptions:
      "Aunque presentan lugares mencionados en el texto, las opciones A, B y C no son correctas ya que ninguna señala el lugar específico donde ocurre la narración.",
  },
  {
    id: 15,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p>Siempre me ha sucedido lo mismo: las empresas en las que me lanzo tienen el estigma de lo indeterminado, la maldición de una artera mudanza. Y aquí voy, río arriba, como un necio, sabiendo de antemano en lo que irá a parar todo. En la selva, en donde nada me espera, cuya monotonía y clima de cueva de iguanas, me hace mal y me entristece.</p><br><p>Lejos del mar, sin hembras y hablando un idioma de tarados. Y, entretanto, mi querido Abdul Bashur, camarada de tantas noches a orillas del Bósforo, de tantos intentos inolvidables por hacer dinero fácil en Valencia y Toulon; esperándome y pensando que tal vez haya muerto. Me intriga sobremanera la forma como se repiten en mi vida estas caídas, estas decisiones erróneas desde su inicio, estos callejones sin salida cuya suma vendría a ser la historia de mi existencia.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Mutis, A. (1986). La nieve del almirante. Bogotá: Editorial Norma.</em></p></div>`,
    text: "El autor utiliza",
    options: [
      "eufemismos, para expresar el disgusto del narrador sin ofender al lector.",
      "reflexiones, para presentar la experiencia y el estado de ánimo del narrador.",
      "juegos de palabras, para asociar conceptos y recalcar el hastío del narrador.",
      "redundancias, para generar un tono triste y sombrío en el discurso del narrador.",
    ],
    correct: 1,
    competency: "Comprensión lectora",
    level: "",
    assertion: "Reflexiona a partir de un texto y evalúa su contenido.",
    evidence: "Reconoce las estrategias discursivas en un texto.",
    component: "",
    standard:
      "Identifico en obras de la literatura universal el lenguaje, las características formales, las épocas y escuelas, estilos, tendencias, temáticas, géneros y autores, entre otros aspectos.",
    skill: "",
    evaluationCriteria:
      "La capacidad para reconocer recursos retóricos en un texto.",
    justification:
      "La respuesta correcta es la opción B, ya que, en el texto, el personaje reflexiona sobre su pasado. Mientras lo hace, cuenta algunas de sus experiencias y detalla su melancolía y su tristeza.",
    invalidOptions:
      'Las opciones A, C y D no son correctas, ya que presentan recursos retóricos que no están presentes en el texto. La opción A afirma que la historia incluye eufemismos, pero en el texto no se usan palabras más "decorosas" o menos "directas" para reemplazar a otras. La opción C dice que el texto incluye juegos de palabras, pero en el texto no hay parejas o grupos de palabras que produzcan un efecto lúdico o humorístico. La opción D, por último, asegura que en el texto se utilizan redundancias, pero en este no se repiten conceptos o se utilizan palabras innecesarias para transmitir las mismas ideas.',
  },
  {
    id: 16,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p>Siempre me ha sucedido lo mismo: las empresas en las que me lanzo tienen el estigma de lo indeterminado, la maldición de una artera mudanza. Y aquí voy, río arriba, como un necio, sabiendo de antemano en lo que irá a parar todo. En la selva, en donde nada me espera, cuya monotonía y clima de cueva de iguanas, me hace mal y me entristece.</p><br><p>Lejos del mar, sin hembras y hablando un idioma de tarados. Y, entretanto, mi querido Abdul Bashur, camarada de tantas noches a orillas del Bósforo, de tantos intentos inolvidables por hacer dinero fácil en Valencia y Toulon; esperándome y pensando que tal vez haya muerto. Me intriga sobremanera la forma como se repiten en mi vida estas caídas, estas decisiones erróneas desde su inicio, estos callejones sin salida cuya suma vendría a ser la historia de mi existencia.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Mutis, A. (1986). La nieve del almirante. Bogotá: Editorial Norma.</em></p></div>`,
    text: "La narración ocurre durante",
    options: [
      "una temporada de artera mudanza.",
      "un periodo de monotonía de la selva.",
      "un viaje hacia una zona selvática.",
      "una época lejana en Valencia y Toulon.",
    ],
    correct: 1,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Identifica y entiende los contenidos locales que conforman un texto.",
    evidence:
      "Identifica los eventos narrados de manera explícita en un texto (literario, descriptivo, caricatura o cómic) y los personajes involucrados (si los hay).",
    component: "",
    standard:
      "Leo textos literarios de diversa índole, género, temática y origen.",
    skill: "",
    evaluationCriteria:
      "La capacidad para ubicar información explícita sobre el tiempo en el que ocurren los hechos de un texto.",
    justification:
      'La respuesta correcta es la opción B, dado que el texto afirma lo siguiente: "Y aquí voy, río arriba, como un necio, sabiendo de antemano en lo que irá a parar todo. En la selva, en donde nada me espera, cuya monotonía y clima de cueva de iguanas, me hace mal y me entristece".',
    invalidOptions:
      'Las opciones A, C y D no son correctas, ya que no presentan el tiempo en el que ocurren los hechos de la historia. La opción A afirma que la historia ocurre durante una época de artera mudanza, pero el personaje habla de una "maldición de artera mudanza" que persigue sus empresas. La opción C dice que la historia ocurre durante un viaje hacia una zona selvática, pero el personaje ya se encuentra en la selva. La opción D, por último, asegura que la historia ocurre durante una época lejana en Valencia y Toulon, pero el personaje recuerda épocas pasadas en Valencia y Toulon durante su monótono viaje por un río en la selva.',
  },
  {
    id: 17,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p>Dio la casualidad de que Schultes había tropezado con un hecho de alquimia chamánica sin paralelo en el Amazonas. Los ingredientes psicoactivos de la corteza del yagé son los beta-carbolíneos harmine y harmaline. Hace mucho tiempo, sin embargo, los chamanes del noroeste amazónico descubrieron que se podían ampliar dramáticamente sus efectos añadiendo unas cuantas plantas secundarias. Este es un importante rasgo de muchos preparados tradicionales, y se debe en parte al hecho de que diferentes compuestos químicos en cantidades relativamente pequeñas pueden hacerse mutuamente más potentes.</p><br><p>En el caso del yagé, se han identificado hasta la fecha cerca de veintiún añadidos. Dos de estos son de particular interés. La <em>Psychotria virids</em> es un arbusto de la familia del café. La Chagropanga es la <em>Dyplopterys cabrerana</em>, un bejuco selvático con relación cercana al yagé. […] Cuando el yagé se combina con alguna de las dos plantas agregadas, el resultado es un potente efecto sinérgico, una versión bioquímica de una totalidad mayor que la suma de sus partes. Las visiones, tal como los indios le prometieron a Schultes, se hicieron más brillantes, y los tonos azules y púrpuras se expandieron hasta cubrir todo el espectro del arco iris.</p><br><p>Lo que asombró más a Schultes fue menos el efecto puro de las drogas –para ese entonces, después de todo, se estaba acostumbrando a la inmersión de su consciencia en el color– que el implícito problema intelectual planteado por esos complejos preparados. La flora amazónica contiene, literalmente, decenas de miles de especies. ¿Cómo aprendieron los indios a identificar y combinar en forma tan refinada estas plantas morfológicamente distintas, que poseían propiedades químicas tan peculiares y complementarias? La explicación científica tradicional es el tanteo –término razonable que puede bien dar razón de ciertas innovaciones–, pero en otro nivel, como comprobó Schultes después de pasar más tiempo en la selva, es un eufemismo que esconde el hecho de que los etnobotánicos tienen una idea muy vaga de cómo los indios hicieron sus descubrimientos en primer lugar.</p><br><p>El problema del tanteo, de la prueba por eliminación, es que la elaboración de los preparados a menudo implica procedimientos muy complejos o rinde resultados de escaso o ningún valor. El yagé es un bejuco incomible y sin características definidas que rara vez florece. Es cierto que su corteza es amarga, lo cual a menudo es indicio de sus propiedades medicinales, pero no lo es más que cientos de otras lianas de la selva. La infusión de la corteza causa severos vómitos y diarrea, condiciones que desalentarían cualquier experimentación adicional.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Davis, W. (2009). El río. Bogotá: Fondo de Cultura Económica, El Áncora Editores.</em></p></div>`,
    text: "¿Cuál de los siguientes fragmentos sería la continuación más coherente del texto en términos de estilo y contenido?",
    options: [
      '"Pero los indios no solo persistieron sino que se hicieron tan hábiles en la manipulación de los diferentes ingredientes que los chamanes desarrollaron individualmente docenas de recetas".',
      '"Ingeridos oralmente, sin embargo, estos potentes compuestos no producen ningún efecto, pues una enzima propia del intestino humano, la monoamina oxidaza (MAO), los neutraliza".',
      '"En el caso del curare, Schultes descubrió que la corteza raspada se coloca debajo de una hoja en forma de embudo, colgada entre dos lanzas".',
      '"Los indios tenían, como es natural, sus propias explicaciones, ricos relatos cosmológicos que desde su punto de vista eran perfectamente lógicos".',
    ],
    correct: 0,
    competency: "Comprensión lectora",
    level: "",
    assertion: "Reflexiona a partir de un texto y evalúa su contenido.",
    evidence:
      "Establece relaciones entre un texto y otros textos o enunciados.",
    component: "",
    standard:
      "Elaboro hipótesis de interpretación atendiendo a la intención comunicativa y al sentido global del texto que leo.",
    skill: "",
    evaluationCriteria:
      "La capacidad para inferir, a partir de las características del texto, cuál es su continuación más adecuada.",
    justification:
      'La respuesta correcta es la opción A, dado que el último párrafo del texto trata sobre el problema de utilizar el tanteo para explicar la producción del yagé. La línea final dice lo siguiente: "La infusión de la corteza causa severos vómitos y diarrea, condiciones que desalentarían cualquier experimentación adicional". Dado que el resto del texto apunta a explicar el surgimiento de las recetas del yagé, es de esperar que la continuación del texto afirme que, a pesar de las características de la corteza del bejuco que se mencionan en la última línea, de alguna manera los indígenas lograron producir la mezcla que produce la droga.',
    invalidOptions:
      "Aunque las opciones B, C y D presentan enunciados cuyo contenido está relacionado con el tema del texto, ninguna es una continuación adecuada dado como termina el último párrafo. La opción B trata sobre los efectos de ciertos químicos, pero este tema se trata en el segundo párrafo. Por lo demás, la última oración del texto afirma que la infusión de la corteza tiene efectos poderosos y la opción habla de químicos que no tienen efectos. La opción C habla sobre el curare, un veneno sobre el que no se habla en ninguna parte del texto. La opción D, por último, sobre las explicaciones de los indios, pero no es claro a qué fenómenos se refieren estas explicaciones y los temas de los que se habla al precer tienen que ver más con efectos psicológicos que con los añadidos del yagé.",
  },
  {
    id: 18,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p>Dio la casualidad de que Schultes había tropezado con un hecho de alquimia chamánica sin paralelo en el Amazonas. Los ingredientes psicoactivos de la corteza del yagé son los beta-carbolíneos harmine y harmaline. Hace mucho tiempo, sin embargo, los chamanes del noroeste amazónico descubrieron que se podían ampliar dramáticamente sus efectos añadiendo unas cuantas plantas secundarias. Este es un importante rasgo de muchos preparados tradicionales, y se debe en parte al hecho de que diferentes compuestos químicos en cantidades relativamente pequeñas pueden hacerse mutuamente más potentes.</p><br><p>En el caso del yagé, se han identificado hasta la fecha cerca de veintiún añadidos. Dos de estos son de particular interés. La <em>Psychotria virids</em> es un arbusto de la familia del café. La Chagropanga es la <em>Dyplopterys cabrerana</em>, un bejuco selvático con relación cercana al yagé. […] Cuando el yagé se combina con alguna de las dos plantas agregadas, el resultado es un potente efecto sinérgico, una versión bioquímica de una totalidad mayor que la suma de sus partes. Las visiones, tal como los indios le prometieron a Schultes, se hicieron más brillantes, y los tonos azules y púrpuras se expandieron hasta cubrir todo el espectro del arco iris.</p><br><p>Lo que asombró más a Schultes fue menos el efecto puro de las drogas –para ese entonces, después de todo, se estaba acostumbrando a la inmersión de su consciencia en el color– que el implícito problema intelectual planteado por esos complejos preparados. La flora amazónica contiene, literalmente, decenas de miles de especies. ¿Cómo aprendieron los indios a identificar y combinar en forma tan refinada estas plantas morfológicamente distintas, que poseían propiedades químicas tan peculiares y complementarias? La explicación científica tradicional es el tanteo –término razonable que puede bien dar razón de ciertas innovaciones–, pero en otro nivel, como comprobó Schultes después de pasar más tiempo en la selva, es un eufemismo que esconde el hecho de que los etnobotánicos tienen una idea muy vaga de cómo los indios hicieron sus descubrimientos en primer lugar.</p><br><p>El problema del tanteo, de la prueba por eliminación, es que la elaboración de los preparados a menudo implica procedimientos muy complejos o rinde resultados de escaso o ningún valor. El yagé es un bejuco incomible y sin características definidas que rara vez florece. Es cierto que su corteza es amarga, lo cual a menudo es indicio de sus propiedades medicinales, pero no lo es más que cientos de otras lianas de la selva. La infusión de la corteza causa severos vómitos y diarrea, condiciones que desalentarían cualquier experimentación adicional.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Davis, W. (2009). El río. Bogotá: Fondo de Cultura Económica, El Áncora Editores.</em></p></div>`,
    text: "El autor concluye que",
    options: [
      "la ciencia tradicional es infalible, pero no es suficiente para explicar las prácticas indígenas que giran en torno al yagé.",
      "el tanteo no es una explicación adecuada para dar cuenta del origen de las complejas preparaciones del yagé.",
      "el vómito y la diarrea que produce el yagé prueban que el tanteo no explica el origen del uso de esta planta.",
      "las teorías de Schultes sobre el origen de las complejas preparaciones del yagé eran acertadas, pero insuficientes.",
    ],
    correct: 1,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Comprende cómo se articulan las partes de un texto para darle un sentido global.",
    evidence:
      "Identifica y caracteriza las ideas o afirmaciones presentes en un texto informativo.",
    component: "",
    standard:
      "Elaboro hipótesis de interpretación atendiendo a la intención comunicativa y al sentido global del texto que leo.",
    skill: "",
    evaluationCriteria: "La capacidad para inferir la conclusión de un texto.",
    justification:
      'La respuesta correcta es la opción B, dado que el texto afirma lo siguiente: "El problema del tanteo, de la prueba por eliminación, es que la elaboración de los preparados a menudo implica procedimientos muy complejos o rinde resultados de escaso o ningún valor" y "La infusión de la corteza causa severos vómitos y diarrea, condiciones que desalentarían cualquier experimentación adicional". Si la corteza causa efectos que desalentarían la experimentación y a menudo los procedimientos son complejos o rinden resultados de escaso o ningún valor, entonces parece que el tanteo no es una explicación adecuada para las combinaciones a las que llegaron los indígenas.',
    invalidOptions:
      "Las opciones A, C y D no son correctas porque presentan conclusiones que no se siguen del texto. La opción A afirma que la ciencia es infalible, pero en el texto nunca se argumenta esta posición. La opción C dice que el vómito y la diarrea prueban que el tanteo no explica el origen del uso del yagé, pero el texto, además del vómito y la diarrea, señala otras razones para argumentar esa tesis. La opción D, por último, asegura que las teorías de Schultes sobre el origen de las preparaciones del yagé eran insuficientes, aunque acertadas, pero el texto no emite un juicio sobre las teorías de Schultes.",
  },
  {
    id: 19,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p>Dio la casualidad de que Schultes había tropezado con un hecho de alquimia chamánica sin paralelo en el Amazonas. Los ingredientes psicoactivos de la corteza del yagé son los beta-carbolíneos harmine y harmaline. Hace mucho tiempo, sin embargo, los chamanes del noroeste amazónico descubrieron que se podían ampliar dramáticamente sus efectos añadiendo unas cuantas plantas secundarias. Este es un importante rasgo de muchos preparados tradicionales, y se debe en parte al hecho de que diferentes compuestos químicos en cantidades relativamente pequeñas pueden hacerse mutuamente más potentes.</p><br><p>En el caso del yagé, se han identificado hasta la fecha cerca de veintiún añadidos. Dos de estos son de particular interés. La <em>Psychotria virids</em> es un arbusto de la familia del café. La Chagropanga es la <em>Dyplopterys cabrerana</em>, un bejuco selvático con relación cercana al yagé. […] Cuando el yagé se combina con alguna de las dos plantas agregadas, el resultado es un potente efecto sinérgico, una versión bioquímica de una totalidad mayor que la suma de sus partes. Las visiones, tal como los indios le prometieron a Schultes, se hicieron más brillantes, y los tonos azules y púrpuras se expandieron hasta cubrir todo el espectro del arco iris.</p><br><p>Lo que asombró más a Schultes fue menos el efecto puro de las drogas –para ese entonces, después de todo, se estaba acostumbrando a la inmersión de su consciencia en el color– que el implícito problema intelectual planteado por esos complejos preparados. La flora amazónica contiene, literalmente, decenas de miles de especies. ¿Cómo aprendieron los indios a identificar y combinar en forma tan refinada estas plantas morfológicamente distintas, que poseían propiedades químicas tan peculiares y complementarias? La explicación científica tradicional es el tanteo –término razonable que puede bien dar razón de ciertas innovaciones–, pero en otro nivel, como comprobó Schultes después de pasar más tiempo en la selva, es un eufemismo que esconde el hecho de que los etnobotánicos tienen una idea muy vaga de cómo los indios hicieron sus descubrimientos en primer lugar.</p><br><p>El problema del tanteo, de la prueba por eliminación, es que la elaboración de los preparados a menudo implica procedimientos muy complejos o rinde resultados de escaso o ningún valor. El yagé es un bejuco incomible y sin características definidas que rara vez florece. Es cierto que su corteza es amarga, lo cual a menudo es indicio de sus propiedades medicinales, pero no lo es más que cientos de otras lianas de la selva. La infusión de la corteza causa severos vómitos y diarrea, condiciones que desalentarían cualquier experimentación adicional.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Davis, W. (2009). El río. Bogotá: Fondo de Cultura Económica, El Áncora Editores.</em></p></div>`,
    text: 'Considere el siguiente enunciado:<br><br>"Cuando el yagé se combina con alguna de las dos plantas agregadas, el resultado es un potente efecto sinérgico, una versión bioquímica de una totalidad mayor que la suma de sus partes."<br><br>La palabra "alguna" indica que del yagé resulta un potente efecto sinérgico cuando se le agregan',
    options: [
      "la Psychotria virids y la Dyplopterys cabrerana.",
      "la Psychotria virids o la Dyplopterys cabrerana.",
      "solo la Psychotria virids.",
      "solo la Dyplopterys cabrerana.",
    ],
    correct: 1,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Identifica y entiende los contenidos locales que conforman un texto.",
    evidence:
      "Entiende el significado de los elementos locales que constituyen un texto.",
    component: "",
    standard:
      "Elaboro hipótesis de interpretación atendiendo a la intención comunicativa y al sentido global del texto que leo.",
    skill: "",
    evaluationCriteria:
      "La capacidad para comprender el significado de cuantificadores en un texto.",
    justification:
      'La respuesta correcta es la opción B, ya que la palabra "alguna", en el enunciado de la pregunta, se refiere tanto a la Psychotria virids como a la Dyplopterys cabrerana. Cuando la una o la otra se mezcla con el yagé, se produce "un potente efecto sinérgico".',
    invalidOptions:
      'Las opciones A, C y D no son correctas porque presentan un significado erróneo de la palabra "alguna" en el enunciado de la pregunta. La opción A afirma que el efecto sinérgico se produce cuando el yagé se mezcla con la Psychotria virids y la Dyplopterys cabrerana, pero la mezcla del yagé con la una o la otra produce ese efecto. La opción C dice que el efecto sinérgico se produce sólo cuando el yagé se mezcla con la Psychotria virids, pero la Dyplopterys cabrerana también produce ese efecto. Finalmente, la opción D asegura que el efecto se produce sólo cuando el yagé se mezcla con la Dyplopterys cabrerana, pero el efecto también se produce cuando el yagé se mezcla con la Psychotria virids.',
  },
  {
    id: 20,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p>Dio la casualidad de que Schultes había tropezado con un hecho de alquimia chamánica sin paralelo en el Amazonas. Los ingredientes psicoactivos de la corteza del yagé son los beta-carbolíneos harmine y harmaline. Hace mucho tiempo, sin embargo, los chamanes del noroeste amazónico descubrieron que se podían ampliar dramáticamente sus efectos añadiendo unas cuantas plantas secundarias. Este es un importante rasgo de muchos preparados tradicionales, y se debe en parte al hecho de que diferentes compuestos químicos en cantidades relativamente pequeñas pueden hacerse mutuamente más potentes.</p><br><p>En el caso del yagé, se han identificado hasta la fecha cerca de veintiún añadidos. Dos de estos son de particular interés. La <em>Psychotria virids</em> es un arbusto de la familia del café. La Chagropanga es la <em>Dyplopterys cabrerana</em>, un bejuco selvático con relación cercana al yagé. […] Cuando el yagé se combina con alguna de las dos plantas agregadas, el resultado es un potente efecto sinérgico, una versión bioquímica de una totalidad mayor que la suma de sus partes. Las visiones, tal como los indios le prometieron a Schultes, se hicieron más brillantes, y los tonos azules y púrpuras se expandieron hasta cubrir todo el espectro del arco iris.</p><br><p>Lo que asombró más a Schultes fue menos el efecto puro de las drogas –para ese entonces, después de todo, se estaba acostumbrando a la inmersión de su consciencia en el color– que el implícito problema intelectual planteado por esos complejos preparados. La flora amazónica contiene, literalmente, decenas de miles de especies. ¿Cómo aprendieron los indios a identificar y combinar en forma tan refinada estas plantas morfológicamente distintas, que poseían propiedades químicas tan peculiares y complementarias? La explicación científica tradicional es el tanteo –término razonable que puede bien dar razón de ciertas innovaciones–, pero en otro nivel, como comprobó Schultes después de pasar más tiempo en la selva, es un eufemismo que esconde el hecho de que los etnobotánicos tienen una idea muy vaga de cómo los indios hicieron sus descubrimientos en primer lugar.</p><br><p>El problema del tanteo, de la prueba por eliminación, es que la elaboración de los preparados a menudo implica procedimientos muy complejos o rinde resultados de escaso o ningún valor. El yagé es un bejuco incomible y sin características definidas que rara vez florece. Es cierto que su corteza es amarga, lo cual a menudo es indicio de sus propiedades medicinales, pero no lo es más que cientos de otras lianas de la selva. La infusión de la corteza causa severos vómitos y diarrea, condiciones que desalentarían cualquier experimentación adicional.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Davis, W. (2009). El río. Bogotá: Fondo de Cultura Económica, El Áncora Editores.</em></p></div>`,
    text: "De lo expresado en los dos primeros párrafos, es acertado afirmar que",
    options: [
      "el primero presenta la tesis del autor y el segundo la complementa con ejemplos.",
      "el primero introduce el tema y el segundo presenta la tesis con ejemplos.",
      "el primero presenta la estructura del texto y el segundo la desarrolla con ejemplos.",
      "el primero introduce el tema y el segundo lo desarrolla con ejemplos.",
    ],
    correct: 3,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Comprende cómo se articulan las partes de un texto para darle un sentido global.",
    evidence:
      "Comprende la estructura formal de un texto y la función de sus partes.",
    component: "",
    standard:
      "Diseño un esquema de interpretación, teniendo en cuenta al tipo de texto, tema, interlocutor e intención comunicativa.",
    skill: "",
    evaluationCriteria:
      "La capacidad para inferir las funciones de las partes de un texto a partir de una lectura global.",
    justification:
      "La respuesta correcta es la opción D, dado que en el primer párrafo del texto se introduce el tema del texto, el yagé y sus añadidos, y en el segundo párrafo se exponen ejemplos concretos sobre añadidos al yagé como la Psychotria virids y la Dyplopterys cabrerana.",
    invalidOptions:
      "Las opciones A, B y C no son correctas porque identifican de manera errónea las funciones de algunas partes del texto. La opción A afirma que en el primer párrafo se presenta la tesis del texto, pero la tesis (la idea del tanteo no es adecuada para explicar el surgimiento de las combinaciones de plantas que los indígenas hallaron para potenciar el yagé) se halla hacia el final del texto. La opción B dice que el segundo párrafo presenta la tesis del texto, pero esta se encuentra en los párrafos finales. Finalmente, la opción C asegura que el primer párrafo presenta la estructura del texto, pero en este no se menciona cómo el autor va a organizar el resto del texto o cuál orden va a seguir en los párrafos siguientes.",
  },

  // SC - Sociales y Ciudadanas (20 preguntas)
  {
    id: 21,
    simulators: [1],
    subject: "soc",
    context: `<p>La siguiente es una estrofa de la Canción de los dinosaurios, compuesta e interpretada por el músico argentino Charlie García en 1983:</p><br><p style="text-align:center">"Los amigos del barrio pueden desaparecer<br>Los cantores de radio pueden desaparecer<br>Los que están en los diarios pueden desaparecer<br>La persona que amas puede desaparecer.<br>Los que están en el aire pueden desaparecer, en el aire.<br>Los que están en la calle pueden desaparecer, en la calle.<br>Los amigos del barrio pueden desaparecer,<br>Pero los dinosaurios van a desaparecer".</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: García, C. (1983). Los dinosaurios. En: Clics modernos [LP]. Buenos Aires, Argentina: SG Discos.</em></p></div>`,
    text: "Puede afirmarse que la letra de esta canción",
    options: [
      "tiene relación con la época de la dictadura argentina, porque Charlie García tiene esa nacionalidad.",
      "no tiene relación con la dictadura, en tanto en este tipo de gobierno se respetan los derechos civiles y políticos.",
      "tiene relación con la dictadura argentina, en tanto describe la persecución social y política característica de los regímenes dictatoriales.",
      "no tiene relación con la dictadura argentina, dado que el arte y la política son ámbitos independientes de la vida social.",
    ],
    correct: 2,
    competency:
      "Interpretación y Análisis de Perspectivas (Ciencias Sociales).",
    level: "",
    assertion: "Contextualiza y evalúa usos de fuentes y argumentos.",
    evidence:
      "Inscribe una fuente primaria dada en un contexto económico, político o cultural.",
    component: "",
    standard:
      "Identifico algunas características culturales y sociales de los procesos de transformación que se generaron a partir del desarrollo político y económico de Colombia y el mundo a lo largo del siglo XX.",
    skill: "",
    evaluationCriteria:
      "La habilidad para contrastar información relacionada con una fuente y un hecho específico.",
    justification:
      "La opción C es la correcta porque hace una correspondencia entre la fecha a la que se hace referencia en la fuente, la nacionalidad de quien escribe la canción citada y la descripción hecha, relacionada con lo sucedido durante la dictadura argentina entre 1976 y 1983.",
    invalidOptions:
      "La opción A no es correcta porque lo indicado no es suficiente para indicar por qué la información dada hace referencia a la dictadura argentina. La opción B no es correcta porque se desconocen las características asociadas a una dictadura. La opción D no es correcta porque no es cierto que el arte y la política sean dimensiones separadas y que a través del arte no se pueda manifestar políticamente.",
  },
  {
    id: 22,
    simulators: [1],
    subject: "soc",
    context: `<p>Un niño presenta una entrevista para ingresar en un colegio público. Durante la entrevista, le preguntan a qué religión pertenece. Al finalizar la entrevista, le dicen al niño que pueden admitirlo si accede a participar en las ceremonias religiosas del colegio, aunque él profese una religión distinta.</p>`,
    text: "El derecho fundamental que se le violaría al niño en este caso sería",
    options: [
      "a la libertad de culto.",
      "a la libre personalidad.",
      "a la libertad de conciencia.",
      "a la libre expresión.",
    ],
    correct: 2,
    competency: "Pensamiento Social (Competencias Ciudadanas).",
    level: "",
    assertion:
      "Comprende modelos conceptuales, sus características y contextos de aplicación.",
    evidence:
      "Conoce el modelo de Estado Social de Derecho y su aplicación en Colombia.",
    component: "",
    standard:
      "Participo constructivamente en iniciativas o proyectos a favor de la no-violencia en el nivel local o global.",
    skill: "",
    evaluationCriteria:
      "La habilidad para reconocer cuándo se respeta o vulneran los derechos fundamentales.",
    justification:
      'La opción C es la respuesta correcta porque este derecho hace referencia a que "nadie será molestado por razón de sus opiniones religiosas, ni compelido a profesar creencia ni a observar prácticas contrarias a su conciencia". Esto es lo que se pretende en la situación al indicar que será aceptado si accede a participar en ceremonias religiosas, aunque el estudiante profese una religión distinta.',
    invalidOptions:
      "La opción A es incorrecta porque, aunque hace referencia al derecho consignado en el Artículo 19 sobre garantizar la libertad de cultos, en este caso la situación no apunta a que el estudiante no pueda profesar su religión, sino a que acepte participar en ceremonias religiosas diferentes a la religión a la que pertenece, para que lo acepten en la institución educativa. La opción B no es correcta porque, aunque la decisión o no de profesar una religión puede relacionarse con características de la personalidad, este implica más elementos; directamente el derecho que está en juego en la situación es el de libertad de cultos. La opción D no es correcta porque este derecho hace referencia a poder manifestar sus puntos de vista y opiniones, lo cual no se relaciona directamente con el derecho que se trata en el enunciado.",
  },
  {
    id: 23,
    simulators: [1],
    subject: "soc",
    context: `<p>Uno de los principales problemas de las grandes ciudades es la dificultad para movilizarse debido a la gran cantidad de automóviles. Tradicionalmente, se ha propuesto que la mejor solución para este problema es construir más vías que permitan el flujo de más automóviles. Esta solución puede ser efectiva, pero puede generar efectos no deseados.</p>`,
    text: "¿Cuál es uno de estos efectos?",
    options: [
      "Construir más vías genera más empleos en la construcción.",
      "Construir más vías incentiva el uso del automóvil.",
      "Construir más vías disminuye la velocidad de circulación de los automóviles.",
      "Construir más vías, y su posterior utilización, genera más contaminación.",
    ],
    correct: 1,
    competency: "Pensamiento Reflexivo y Sistémico (Competencias Ciudadanas).",
    level: "",
    assertion:
      "Comprende que los problemas y sus soluciones involucran distintas dimensiones y reconoce relaciones entre estas.",
    evidence:
      "Analiza los efectos en distintas dimensiones que tendría una posible intervención.",
    component: "",
    standard:
      "Participo constructivamente en iniciativas o proyectos a favor de la no-violencia en el nivel local o global.",
    skill: "",
    evaluationCriteria:
      "La habilidad para reconocer en una situación que las soluciones a las problemáticas tienen efectos que pueden ser no esperados o no deseados.",
    justification:
      "La opción B es correcta porque la solución propuesta puede llevar a que se incremente el uso del automóvil, lo cual en principio fue la causa del problema. A largo plazo puede generar que la solución deje de ser efectiva e incluso afectar otras dimensiones como lo ambiental, que es un efecto no deseado.",
    invalidOptions:
      "La opción A no es correcta porque la generación de empleos es algo que se espera con la construcción de nuevas vías y no tendría un efecto negativo. La opción C no es correcta porque la construcción de nuevas vías no se asocia directamente con la disminución de velocidad, y de ser así, podría ser un efecto positivo si se relaciona por ejemplo con baja accidentalidad. La opción D no es correcta porque la construcción de vías y la utilización de éstas no se relaciona con más contaminación, faltaría que se aumente el uso o la compra de más automóviles.",
  },
  {
    id: 24,
    simulators: [1],
    subject: "soc",
    context: `<p>El presidente de la República de Colombia quiere reformar las leyes que regulan el sistema de pensiones.</p>`,
    text: "Para lograr esta reforma, su propuesta debe ser aprobada por",
    options: [
      "el voto unánime de la Corte Constitucional.",
      "la totalidad de miembros de la Cámara de Representantes.",
      "la mayoría de la rama judicial del poder público.",
      "la mayoría de miembros del Congreso de la República.",
    ],
    correct: 3,
    competency: "Pensamiento Social (Competencias Ciudadanas).",
    level: "",
    assertion:
      "Comprende modelos conceptuales, sus características y contextos de aplicación.",
    evidence:
      "Conoce el modelo de Estado Social de Derecho y su aplicación en Colombia.",
    component: "",
    standard:
      "Conozco y sé usar los mecanismos constitucionales de participación que permiten expresar mis opiniones y participar en la toma de decisiones políticas tanto a nivel local como a nivel nacional.",
    skill: "",
    evaluationCriteria:
      "Los conocimiento sobre las funciones básicas de las ramas del poder sus alcances y limitaciones.",
    justification:
      "La opción D es correcta porque, según el Artículo 150, corresponde al Congreso hacer las leyes. Por medio de ellas ejerce las funciones de interpretar, reformar y derogar las leyes.",
    invalidOptions:
      "La opción A no es la respuesta correcta porque no está dentro de las funciones de la Corte Constitucional las reformas planteadas en la situación. La opción B no es correcta porque, aunque la Cámara de Representante tiene funciones legislativas y no le corresponde la reforma de leyes como la indicada en el enunciado. La opción C no es correcta porque la Rama Judicial se ocupa de administrar la justicia en Colombia, la componen organismos como la Corte Suprema de Justicia, la Corte Constitucional, el Consejo de Estado, el Consejo Superior de la Judicatura, las Jurisdicciones Especiales y la Fiscalía General de la Nación, las cuales son entidades que no se ocupan de reformar leyes como la descrita en la situación.",
  },
  {
    id: 25,
    simulators: [1],
    subject: "soc",
    context: `<p>Hay en Colombia un gran debate sobre la posible adopción de niños por parte de parejas homosexuales. Quienes están a favor cuestionan la tesis de que es necesario que la familia empiece con un hombre y una mujer. Un vocero de este grupo dijo que nada garantiza que la orientación sexual de los cónyuges determine la preferencia sexual del menor. Además, sostiene que hay muchos niños abandonados que se beneficiarían de crecer en una familia, independientemente de la composición de esta. Por otro lado, un opositor argumenta que, desde el punto de vista psicológico, los niños adoptados por parejas homosexuales muy probablemente van a aprender "conductas equivocadas". Además, sostiene que "Dios concibió al hombre y la mujer para ser pareja y procrear".</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Adaptado de: http://www.eltiempo.com/colombia/llano/ARTICULO-WEB-NEW_NOTA_INTERIOR-8928421.html</em></p></div>`,
    text: "Entre las siguientes opciones, ¿cuál presenta lo que cada una de las partes probablemente quiere lograr?",
    options: [
      "El opositor busca defender la familia tradicional y cuidar de los niños; el vocero busca cambiar la forma de la familia nuclear sin importarle el bienestar de los niños.",
      "El vocero quiere que se permita adoptar a las parejas homosexuales; el opositor quiere mantener la familia tradicional, y ambos buscan bienestar para los niños.",
      "El opositor está preocupado por la manera en que debe estar formada la familia, sin importarle el bienestar de los niños; el vocero defiende el bienestar de estos.",
      "El vocero busca cambiar la constitución de la familia tradicional; el opositor está de acuerdo, y ambos quieren facilitar la adopción de niños abandonados.",
    ],
    correct: 1,
    competency:
      "Interpretación y Análisis de Perspectivas (Competencias Ciudadanas).",
    level: "",
    assertion: "Comprende perspectivas de distintos actores y grupos sociales.",
    evidence: "Reconoce y compara perspectivas de actores y grupos sociales.",
    component: "",
    standard:
      "Expreso rechazo ante toda forma de discriminación o exclusión social y hago uso de los mecanismos democráticos para la superación de la discriminación y el respeto a la diversidad.",
    skill: "",
    evaluationCriteria:
      "La habilidad para identificar en una situación conflictiva las perspectivas de las partes involucradas y qué es lo que cada una quiere lograr.",
    justification:
      "La opción B es correcta porque se identifica que, respecto a la adopción de niños por parte de parejas homosexuales, una de las partes está a favor, la otra en contra, pero que las dos partes, a su manera, piensan en el bienestar de los niños.",
    invalidOptions:
      "Las opciones que no son correctas en este caso corresponden a interpretaciones parciales o erróneas de la información de la situación. La opción A es incorrecta porque el opositor sí busca defender la familia tradicional y cuidar a los niños, pero la intención del vocero no es cambiar la forma de la familia nuclear y tampoco es válido afirmar que no le importe el bienestar de los niños. La opción C es incorrecta porque al opositor, según su argumento, sí le importa el bienestar de los niños. La opción D no es correcta porque el vocero no busca cambiar la constitución de la familia tradicional.",
  },
  {
    id: 26,
    simulators: [1],
    subject: "soc",
    context: `<p>Un profesor de una prestigiosa universidad invierte dinero y tiempo en diseñar un examen novedoso que determina con mayor exactitud y más rapidez si una mujer está embarazada. El profesor y sus estudiantes realizan muchos experimentos para demostrar la efectividad de su prueba antes de publicar sus resultados. La universidad patenta el examen antes de sacarlo al mercado. Una vez la prueba sale al mercado, se crea un conflicto.</p>`,
    text: "¿Cuál de las siguientes afirmaciones NO plantea un posible escenario de conflicto entre las partes involucradas?",
    options: [
      "Un laboratorio privado desarrolla y comercializa el mismo examen de detección temprana de embarazos.",
      "Las mujeres partícipes del estudio demandan a la universidad porque los resultados no son tan acertados como el profesor sugiere.",
      "El profesor quiere quedarse con la patente de la prueba y comercializarla por su cuenta.",
      "Los estudiantes participantes en la investigación divulgan los resultados de la investigación en diversos escenarios internacionales.",
    ],
    correct: 0,
    competency:
      "Interpretación y Análisis de Perspectivas (Competencias Ciudadanas).",
    level: "",
    assertion: "Comprende perspectivas de distintos actores y grupos sociales.",
    evidence: "Reconoce y compara perspectivas de actores y grupos sociales.",
    component: "",
    standard:
      "Expreso rechazo ante toda forma de discriminación o exclusión social y hago uso de los mecanismos democráticos para la superación de la discriminación y el respeto a la diversidad.",
    skill: "",
    evaluationCriteria:
      "La habilidad para identificar, a partir de los intereses descritos en una situación, si es probable o no que se dé un conflicto, y entre quiénes se daría.",
    justification:
      "La opción A es correcta por ser la única opción donde no aparecen las partes involucradas y no representa un escenario de conflicto evidente al ser el laboratorio un agente externo sin ningún vínculo entre las partes.",
    invalidOptions:
      "Las opciones que no son correctas están involucrando a dos o más partes de los actores que se podrían encontrar en un escenario de conflicto. En la opción B, las mujeres demandan a la universidad porque los resultados no son tan acertados, lo cual podría dejar en entredicho al profesor y a la investigación. La opción C no es correcta porque presenta un conflicto entre el profesor y la universidad, pues el primero quiere quedarse con la patente y comercializarla. El conflicto es que la universidad ya la había patentado. La opción D no es correcta porque los estudiantes, al divulgar los resultados de la investigación, estarían violando la ley de derechos de autor, que para este caso la tendría la universidad a través de la patente.",
  },
  {
    id: 27,
    simulators: [1],
    subject: "soc",
    context: `<p>En marzo de 2014, Estados Unidos pidió a varios países recibir como refugiados a varias personas detenidas en la prisión de Guantánamo desde hace más de una década. Esta prisión ha sido objeto de varias controversias y debates por violaciones a los derechos humanos de los presos. El presidente de Uruguay fue uno de los primeros en responder positivamente la petición. "Hay 120 tipos que están presos hace 13 años. No han visto un juez, un fiscal, no tuvieron ningún proceso. La decisión contribuirá a garantizar los derechos humanos de estas personas, que están hace más de 10 años tras las rejas sin juicio", afirmó el mandatario. Aunque varias organizaciones humanitarias han celebrado esta decisión, sectores políticos uruguayos la critican.</p>`,
    text: "¿Cuál de los siguientes podría ser un argumento afín a quienes se oponen a la decisión del presidente uruguayo?",
    options: [
      "La decisión favorecería el derecho de los defendidos a tener un juicio.",
      "La decisión estaría dándole la posibilidad a los refugiados de vivir como hombres libres e integrarse de nuevo a la sociedad.",
      "La decisión pondría en peligro la seguridad del país, pues no se sabe qué personas llegarán al país.",
      "La decisión causaría un mayor hacinamiento en las cárceles de Uruguay, al recibir presos de la cárcel de Guantánamo.",
    ],
    correct: 2,
    competency:
      "Interpretación y Análisis de Perspectivas (Competencias Ciudadanas).",
    level: "",
    assertion: "Contextualiza y evalúa usos de fuentes y argumentos.",
    evidence:
      "Evalúa posibilidades y limitaciones del uso de una fuente para apoyar argumentos o explicaciones.",
    component: "",
    standard:
      "Expreso rechazo ante toda forma de discriminación o exclusión social y hago uso de los mecanismos democráticos para la superación de la discriminación y el respeto a la diversidad.",
    skill: "",
    evaluationCriteria:
      "La habilidad para analizar información y comparar puntos de vista que pueden ser afines o no.",
    justification:
      "La opción C es la correcta porque coincide con lo que podría ser una oposición a la decisión del presidente, fundamentada en que se afectaría la seguridad de la comunidad uruguaya por la llegada de los refugiados que vienen de la prisión de Guantánamo.",
    invalidOptions:
      "La opción A no es correcta porque estaría apoyando a la decisión del presidente. La opción B no es correcta porque estaría en coincidencia con lo que propone el presidente. La opción D no es correcta pues las personas llegarían en calidad de refugiados y no de presos, por lo cual no estarían causando hacinamiento en las prisiones.",
  },
  {
    id: 28,
    simulators: [1],
    subject: "soc",
    context: `<p>En el 2011, el movimiento estudiantil colombiano se organizó a través de la Mesa Amplia Nacional Estudiantil (MANE), con el fin de protestar en contra del proyecto de ley de Reforma a la Educación Superior propuesto por el Gobierno nacional.</p><br><p>Los estudiantes exigían una discusión amplia y democrática del contenido de la reforma, la cual ya estaba siendo discutida en el Congreso de la República. Ante las protestas, algunos sectores sociales insistieron en que tales manifestaciones generaban inestabilidad y que las reclamaciones debían tramitarse por las vías institucionales de representación democrática, tales como el legislativo.</p><br><p>Finalmente, y después de dos meses de movilizaciones, el Gobierno decidió retirar el proyecto de ley y generar un proceso de socialización con la sociedad civil, incluidos estudiantes, profesores y directivos universitarios, entre otros.</p>`,
    text: "De acuerdo con la situación descrita, ¿cuál de las siguientes opciones describe adecuadamente la relación entre los movimientos sociales y la democracia?",
    options: [
      "Los movimientos sociales derivan en protestas que generan un ambiente de inestabilidad y debilitan la democracia.",
      "Los movimientos sociales solo son democráticos cuando hacen uso de las vías institucionales de representación.",
      "Los movimientos sociales permiten canalizar y expresar demandas sociales y, por tanto, fortalecen la democracia.",
      "Los movimientos sociales son los únicos mecanismos de representación y participación en una democracia como la colombiana.",
    ],
    correct: 2,
    competency: "Pensamiento Social (Ciencias Sociales).",
    level: "",
    assertion:
      "Comprende modelos conceptuales, sus características y contextos de aplicación.",
    evidence:
      "Identifica y usa conceptos sociales básicos (económicos, políticos, culturales y geográficos).",
    component: "",
    standard:
      "Identifico y tomo posición frente a las principales causas y consecuencias políticas, económicas, sociales y ambientales de la aplicación de las diferentes teorías y modelos económicos en el siglo XX y formulo hipótesis que me permitan explicar la situación de Colombia en este contexto.",
    skill: "",
    evaluationCriteria:
      "La habilidad para identificar el papel que pueden tener los movimientos u organizaciones sociales en un Estado social de derecho.",
    justification:
      "La opción C es correcta porque describe las características principales de los movimientos sociales en la democracia de un país.",
    invalidOptions:
      "La opción A no es correcta porque parte de una generalización de lo que son los movimientos sociales. La opción B no es correcta porque existen otras formas de representación enmarcadas también dentro de la democracia. La opción D no es correcta porque los movimientos sociales no son la única forma de representación y participación en una democracia, no es necesario pertenecer a un movimiento social para poder acceder a los mecanismos de participación y representación.",
  },
  {
    id: 29,
    simulators: [1],
    subject: "soc",
    context: `<p>Un informe de la UNICEF sobre los pueblos indígenas en Colombia señala lo siguiente:</p><br><p>"La tierra para los indígenas tiene un significado amplio, que comprende no solo la superficie sino los recursos naturales –flora, fauna, ríos, lagos, etc.– que hay en ella. En contraste con el concepto de propiedad individual, propio de la cultura occidental, la tierra y los recursos son, generalmente, poseídos y utilizados en forma comunitaria por los indígenas".</p>`,
    text: "Analizando el contenido de este fragmento, se puede afirmar que hay diferencias culturales entre los pueblos indígenas y otros grupos sociales que habitan en Colombia, porque los indígenas",
    options: [
      "tienen prácticas más avanzadas de protección del medio ambiente que otros grupos sociales.",
      "consideran que la propiedad colectiva es más rentable que la propiedad privada.",
      "no recibieron ninguna influencia de las culturas occidentales que llegaron al continente.",
      "tienen concepciones distintas sobre el uso y aprovechamiento de los recursos naturales.",
    ],
    correct: 3,
    competency: "Pensamiento Social.",
    level: "",
    assertion:
      "Comprende modelos conceptuales, sus características y contextos de aplicación.",
    evidence:
      "Identifica y usa conceptos sociales básicos (económicos, políticos, culturales y geográficos).",
    component: "",
    standard:
      "Comprendo que el ejercicio político es el resultado de esfuerzos por resolver conflictos y tensiones que surgen en las relaciones de poder entre los Estados y en el interior de ellos mismos.",
    skill: "",
    evaluationCriteria:
      "La habilidad para comprender formas de ver la vida por parte de diferentes comunidades.",
    justification:
      "La opción D es correcta porque corresponde a la concepción que tienen los indígenas sobre la tierra y el uso de esta como aprovechamiento de los recursos naturales.",
    invalidOptions:
      "La opción A no es correcta porque la pregunta está enfocada en establecer las diferencias entre dos perspectivas y no sólo en juzgar cuál de las dos es mejor. La opción B es incorrecta pues no se está preguntando sobre la rentabilidad de la tierra como un recurso natural, por otro lado, dentro de las comunidades indígenas la rentabilidad es asociada a la cosmogonía. La opción C es incorrecta porque desconoce las influencias entre las culturas indígenas y las culturas occidentales.",
  },
  {
    id: 30,
    simulators: [1],
    subject: "soc",
    context: `<p>"… con el surgimiento del narcotráfico de una manera organizada y alrededor del tema de la producción, distribución, circulación y protección de los narcotraficantes, llegaron propuestas de organización de grupos delincuenciales a los barrios populares con distintas funciones: cuidar el negocio, ajustar cuentas y cobrar venganza. Se fortaleció entonces un aparato militar, al lado de una cultura de enriquecimiento fácil y de solución violenta de los conflictos…".</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Yarse, E. (2007). En series el Colombiano.</em></p></div>`,
    text: "De acuerdo con los elementos incluidos en el artículo anterior, se podría deducir que en este se hace referencia a la violencia urbana de la década de",
    options: [
      "1980, porque se describe la influencia de los carteles en la configuración de prácticas delictivas.",
      "1990, porque se ubica como protagonistas a bandas criminales financiadas por paramilitares.",
      "1980, porque se hace referencia a una práctica violenta como forma de solucionar los problemas.",
      "1960, porque se instala como escenario del conflicto a la ciudad, en particular los barrios populares.",
    ],
    correct: 0,
    competency:
      "Interpretación y Análisis de Perspectivas (Ciencias Sociales).",
    level: "",
    assertion: "Contextualiza y evalúa usos de fuentes y argumentos.",
    evidence:
      "Inscribe una fuente primaria dada en un contexto económico, político o cultural.",
    component: "",
    standard:
      "Identifico algunas características culturales y sociales de los procesos de transformación que se generaron a partir del desarrollo político y económico de Colombia y el mundo a lo largo del siglo XX.",
    skill: "",
    evaluationCriteria:
      "La habilidad para contrastar información relacionada con una fuente y un hecho específico.",
    justification:
      "La opción A es la opción correcta ya que en la década de 1980 el narcotráfico configuró las prácticas delictivas en las ciudades, como se muestra en la fuente citada.",
    invalidOptions:
      "No es la opción B pues en 1990 las prácticas delictivas ya estaban configuradas en los barrios urbanos y los carteles de las drogas se reconfiguraron en otras organizaciones. No es la opción C, pues solo menciona una parte de las prácticas delictivas dejando invisibilizado características principales de los carteles. No es la D porque en 1960 se estaba viviendo una violencia bipartidista y una violencia guerrillera en el campo; además, los carteles de la droga tienen el auge en la década de 1980.",
  },
  {
    id: 31,
    simulators: [1],
    subject: "soc",
    context: `<p>La integración económica se da cuando países cercanos acuerdan unificar aspectos de su política económica y social. Esto se traduce en el uso de una misma moneda y en la libre circulación de mercancías y personas dentro de sus territorios.</p>`,
    text: "En la actualidad, el ejemplo más visible y claro de integración económica lo constituye",
    options: [
      "el Mercado Común del Sur (Mercosur).",
      "los Estados Unidos de Norteamérica.",
      "el Tratado de Libre Comercio (TLC).",
      "la Unión Europea (EU).",
    ],
    correct: 3,
    competency: "Pensamiento Reflexivo y Sistémico (Ciencias Sociales).",
    level: "",
    assertion: "Evalúa usos sociales de las ciencias sociales.",
    evidence: "Analiza modelos conceptuales y sus usos en decisiones sociales.",
    component: "",
    standard:
      "Identifico y tomo posición frente a las principales causas y consecuencias políticas, económicas, sociales y ambientales de la aplicación de las diferentes teorías y modelos económicos en el siglo XX y formulo hipótesis que me permitan explicar la situación de Colombia en este contexto.",
    skill: "",
    evaluationCriteria:
      "La habilidad para identificar hechos relacionados con fenómenos económicos.",
    justification:
      "La opción D es la correcta ya que es la región donde se da la unificación de la moneda de diferentes países, en el euro, y se permite la libre circulación de las personas por una parte del territorio europeo.",
    invalidOptions:
      "No es la opción A pues el MERCOSUR, si bien es un bloque económico conformado por varios países, no contempla la unificación de monedas en una sola. Puede existir la posibilidad de un libre tránsito, pero este es restringido a pocos países. No es la opción B porque Estados Unidos no es una región conformada por varios países. No es la opción C ya que el TLC solo implica el libre tránsito de mercancías con excepciones arancelarias y no hace mención del libre tránsito de personas o una moneda unificada.",
  },
  {
    id: 32,
    simulators: [1],
    subject: "soc",
    context: `<p>En Colombia, si el presidente quisiera declarar el estado de excepción para controlar a los medios de comunicación de la oposición, ¿cuál debería ser la posición de la Corte Constitucional?</p>`,
    text: "¿cuál debería ser la posición de la Corte Constitucional?",
    options: [
      "Rechazar la propuesta del presidente, porque solo la Corte puede declarar el estado de excepción.",
      "Apoyar la petición, pues a veces los medios transmiten información que puede generar caos.",
      "Rechazar este uso del estado de excepción, porque esta figura no puede usarse para vulnerar las libertades fundamentales.",
      "Apoyar al presidente, pues la Corte Constitucional debe trabajar junto al poder ejecutivo para favorecer la unidad del Estado.",
    ],
    correct: 2,
    competency: "Pensamiento Social (Competencias Ciudadanas).",
    level: "",
    assertion:
      "Comprende modelos conceptuales, sus características y contextos de aplicación.",
    evidence:
      "Conoce la organización del Estado: Conoce las funciones y alcances de las ramas del poder y de los organismos de control.",
    component: "",
    standard:
      "Participo constructivamente en iniciativas o proyectos a favor de la no-violencia en el nivel local o global.",
    skill: "",
    evaluationCriteria:
      "La habilidad para reconocer situaciones en las que se están respetando o vulnerando los derechos fundamentales.",
    justification:
      "La opción C es la correcta ya que la Corte Constitucional vela para que toda ley promovida por la Rama Ejecutiva se encuentre dentro del marco constitucional protegiendo los derechos y los deberes de los ciudadanos. Por eso rechazará el uso de estado de excepción para violar un derecho fundamental.",
    invalidOptions:
      "No es la opción A porque la función de la Corte Constitucional es velar porque las leyes no estén por encima de la Constitución; además el presidente de la República es el que debe declarar el estado de excepción. No es la B porque la Corte Constitucional no puede pasar por encima de los derechos que defiende y, además, no es la encargada de juzgar el accionar de los medios de comunicación. No es la D, pues esta opción viola el equilibrio de poderes públicos, además, desconoce la función de la Corte Constitucional.",
  },
  {
    id: 33,
    simulators: [1],
    subject: "soc",
    context: `<p>Un informe sobre las causas de los conflictos armados entre etnias en África plantea que los ejércitos insurgentes financian sus operaciones mediante el saqueo de recursos naturales. Por tanto, se propone en este informe que una de las posibles soluciones a los conflictos armados sea evitar que los grupos armados tengan acceso a estos recursos.</p>`,
    text: "¿Es posible adaptar esta solución a los conflictos latinoamericanos?",
    options: [
      "No, porque los conflictos armados en América Latina no se relacionan con conflictos entre etnias.",
      "No, porque los conflictos armados en África tienen raíces históricas distintas a los de América Latina.",
      "Sí, si los conflictos armados en América Latina, como los africanos, tienen causas étnicas.",
      "Sí, si se comprueba que los ejércitos insurgentes en América Latina financian sus actividades con la explotación de recursos naturales.",
    ],
    correct: 3,
    competency: "Pensamiento Reflexivo y Sistémico (Competencias Ciudadanas).",
    level: "",
    assertion:
      "Comprende que los problemas y sus soluciones involucran distintas dimensiones y reconoce relaciones entre estas.",
    evidence:
      "Analiza los efectos en distintas dimensiones que tendría una posible intervención.",
    component: "",
    standard:
      "Conozco y sé usar los mecanismos constitucionales de participación que permiten expresar mis opiniones y participar en la toma de decisiones políticas tanto a nivel local como a nivel nacional.",
    skill: "",
    evaluationCriteria:
      "La comprensión sobre en qué condiciones se puede aplicar a una misma solución en diferentes contextos.",
    justification:
      "La opción D es la opción correcta pues establece que para adoptar la medida en Latinoamérica debe revisarse si existe relación entre la explotación de los recursos naturales como fuente de financiamiento de los grupos armados ilegales.",
    invalidOptions:
      "No es la opción A pues omite toda referencia a la dimensión ambiental o la explotación de recursos naturales de forma ilegal, ya que se concentran en la problemática étnica, y esta tiene un bajo porcentaje en los conflictos latinoamericanos. No es la opción B, si bien la afirmación es correcta teniendo en cuenta la dimensión histórica esta no tiene en cuenta la dimensión ambiental o la explotación de recursos naturales. No es la C pues omite la dimensión ambiental y solo hace referencia a las causas étnicas.",
  },
  {
    id: 34,
    simulators: [1],
    subject: "soc",
    context: `<p>"La Unión Patriótica no puede asumir el compromiso de la combinación de todas las formas de lucha, porque ni es una organización marxista-leninista, ni representa los intereses de una sola clase social, y su política es eminentemente civilista. Nosotros, las víctimas propiciatorias de la guerra sucia, mal haríamos en reivindicar la lucha armada como una opción política". Este testimonio pertenece a Bernardo Jaramillo Ossa, político y militante de izquierda, asesinado en Bogotá, D. C. en 1990.</p>`,
    text: "De esta alocución, se puede concluir que la intención del autor es",
    options: [
      "buscar alternativas de paz para la desmovilización de una organización guerrillera.",
      "denunciar la persecución política a los militantes de los partidos de izquierda.",
      "defender el derecho a la participación política de la Unión Patriótica.",
      "desmarcar la Unión Patriótica de la ideología de los grupos subversivos.",
    ],
    correct: 3,
    competency:
      "Interpretación y Análisis de Perspectivas (Ciencias Sociales).",
    level: "",
    assertion: "Comprende perspectivas de distintos actores y grupos sociales.",
    evidence: "Reconoce y compara perspectivas de actores y grupos sociales.",
    component: "",
    standard:
      "Comprendo que el ejercicio político es el resultado de esfuerzos por resolver conflictos y tensiones que surgen en las relaciones de poder entre los Estados y en el interior de ellos mismos.",
    skill: "",
    evaluationCriteria:
      "La habilidad para identificar cuál es la intención de una afirmación teniendo en cuenta un contexto.",
    justification:
      "La opción D es correcta, pues hace referencia a la condición civilista y no una relación con grupos armados. Al mismo tiempo, toman distancia de los prejuicios de ser marxista-leninistas, ideología que se asocia a grupos armados ilegales de Colombia.",
    invalidOptions:
      "No es la A porque la Unión Patriótica es un partido político y no es catalogado como una organización guerrillera, además, en la evidencia no hace alusión a alternativas de paz. No es la opción B porque si bien hace referencia a la persecución que vivía los partidos de izquierda, el punto central de la evidencia se basa en posicionar a la Unión Patriótica como un partido político dentro de la legalidad. No es la C, pues en ninguna parte de la evidencia se hace referencia a los procesos de participación política.",
  },
  {
    id: 35,
    simulators: [1],
    subject: "soc",
    context: `<p>El Gobierno nacional ha decidido romper relaciones con un Gobierno vecino después de recibir información de algunos campesinos que habitan en la frontera, en el sentido de que ha habido movimientos del ejército del país vecino y que, según ellos, ese país vecino se prepara para invadir a Colombia.</p>`,
    text: "La decisión de romper relaciones con el país vecino es",
    options: [
      "adecuada siempre que los campesinos no hayan sido manipulados por los políticos locales.",
      "apresurada porque se sustenta en información insuficiente y posiblemente parcializada.",
      "adecuada y acorde con la protección de nuestro interés general.",
      "apresurada porque la declaración de unos campesinos no puede ser confiable.",
    ],
    correct: 1,
    competency:
      "Interpretación y Análisis de Perspectivas (Competencias Ciudadanas).",
    level: "",
    assertion: "Contextualiza y evalúa usos de fuentes y argumentos.",
    evidence:
      "Evalúa posibilidades y limitaciones del uso de una fuente para apoyar argumentos o explicaciones.",
    component: "",
    standard:
      "Expreso rechazo ante toda forma de discriminación o exclusión social y hago uso de los mecanismos democráticos para la superación de la discriminación y el respeto a la diversidad.",
    skill: "",
    evaluationCriteria:
      "La habilidad para identificar si una información proveniente de una fuente es suficiente o no para hacer una conclusión.",
    justification:
      "La opción B es la correcta ya que, para romper relaciones con un país se debe surtir un proceso diplomático en el que se corrobore la información con diferentes organismos del Estado.",
    invalidOptions:
      "No es la opción A ya que no se puede romper relaciones con un país vecino basados únicamente en un testimonio y menos si hay indicios de interés políticos de por medio. No es la C pues no hace referencia a los procedimientos gubernamentales para romper relaciones con países vecinos. No es la D porque las acciones del Estado deben sustentarse en diferentes organismos del Gobierno, como en la cancillería o en los diferentes ministerios.",
  },
  {
    id: 36,
    simulators: [1],
    subject: "soc",
    context: `<p>En una empresa, uno de los miembros de la junta directiva le dice al gerente general: "Hay un grupo de empleados que está inconforme con las políticas laborales que implementamos recientemente. Esto preocupa, porque es un grupo muy activo que, al parecer, está movilizando a varios empleados con el objetivo de conformar un sindicato". Ante esto, el gerente afirmó: "Propongo hablar con ese grupo para comunicarle que aquí están prohibidas las protestas y las movilizaciones, y que, si tienen alguna inquietud, será atendida de manera individual con cada empleado".</p>`,
    text: "¿Qué derecho constitucional podría ponerse en riesgo con la propuesta del gerente?",
    options: [
      "El derecho al libre acceso a la información.",
      "El derecho a la participación política.",
      "El derecho a la libertad de creencias.",
      "El derecho a la libre asociación.",
    ],
    correct: 3,
    competency: "Pensamiento Social (Competencias Ciudadanas).",
    level: "",
    assertion:
      "Comprende modelos conceptuales, sus características y contextos de aplicación.",
    evidence:
      "Conoce el modelo de Estado Social de Derecho y su aplicación en Colombia.",
    component: "",
    standard:
      "Participo constructivamente en iniciativas o proyectos a favor de la no-violencia en el nivel local o global.",
    skill: "",
    evaluationCriteria:
      "La habilidad para reconocer situaciones en las que se están respetando o vulnerando los derechos fundamentales.",
    justification:
      "La opción D es la correcta pues hace referencia al derecho de libre asociación, contenido en la Constitución, que consiste en la facultad de unirse y formar grupos con objetivos lícitos, en este caso, reclamar mejoras en las condiciones laborales.",
    invalidOptions:
      "No es la opción A ya que el derecho al acceso a la información está relacionado con el derecho fundamental de la libre expresión, haciendo referencia a aspectos individuales y no a la conformación de grupos. No es la B, puesto que el derecho a la libre participación política hace referencia a la libertad al acceso a la función pública de elegir y ser elegido. No es la C porque el derecho a la libertad de creencias está asociado a la libertad de los individuos de profesar el culto de su preferencia.",
  },
  {
    id: 37,
    simulators: [1],
    subject: "soc",
    context: ``,
    text: "¿Cuál de las siguientes situaciones requiere una acción solidaria, derivada de lo contemplado en la Constitución Política de Colombia?",
    options: [
      "Hubo un deslizamiento de tierras que dejó varios heridos graves. Las familias no han sido evacuadas de la zona, la cual podría presentar más deslizamiento.",
      "Los estudiantes de un colegio reclaman poder ir al colegio con el pelo largo o tinturado, ante lo cual las directivas han respondido con un no rotundo.",
      "Un grupo numeroso de ciudadanos y ciudadanas homosexuales reclaman su derecho a casarse, pero los organismos pertinentes no han respondido.",
      "El 46 % de la población rural trabaja en condiciones que hacen que su capacidad adquisitiva haya disminuido en los últimos años.",
    ],
    correct: 0,
    competency: "Pensamiento Social (Competencias Ciudadanas).",
    level: "",
    assertion:
      "Comprende modelos conceptuales, sus características y contextos de aplicación.",
    evidence:
      "Conoce el modelo de Estado Social de Derecho y su aplicación en Colombia.",
    component: "",
    standard:
      "Participo constructivamente en iniciativas o proyectos a favor de la no-violencia en el nivel local o global.",
    skill: "",
    evaluationCriteria:
      "La capacidad para acciones asociadas a los derechos y deberes contemplados en la Constitución.",
    justification:
      'La opción A muestra una situación fortuita en la que el Gobierno debe canalizar las ayudas para resolver el problema de la comunidad de forma inmediata. Esto lo debe hacer por medio de una acción solidaria que le permita a los ciudadanos participar voluntariamente, lo cual corresponde con lo planteado en la Constitución, capítulo 5 sobre deberes y obligaciones de la persona y del ciudadano: "Obrar conforme al principio de solidaridad social, respondiendo con acciones humanitarias ante situaciones que pongan en peligro la vida o la salud de las personas".',
    invalidOptions:
      "No es la opción B porque es una situación particular, en donde los acudientes de los menores han aceptado las reglas del colegio una vez hayan firmado el contrato escolar y el manual de convivencia. No es la opción C, pues si bien los individuos con diferente orientación de género deben velar porque se le respeten los derechos, la acción que piden no tiene cabida dentro de la acción solidaria, pues no implica un alto riesgo de vida o muerte para que el Estado o los ciudadanos intervengan de inmediato y canalice ayudas. No es la opción D, pues el análisis de la dimensión económica debe ser resuelto por otros organismos del Gobierno para brindar soluciones que tengan mayor efecto y no necesariamente a través de la acción solidaria.",
  },
  {
    id: 38,
    simulators: [1],
    subject: "soc",
    context: `<p>Los vecinos de un conjunto de viviendas se reúnen para redactar conjuntamente el reglamento de habitantes. Un grupo de vecinos considera que no se deben permitir mascotas en el conjunto, por el ruido y suciedad que estas pueden producir. Otro grupo considera que se pueden permitir las mascotas, pero que no se deben permitir las fiestas en las noches.</p>`,
    text: "De acuerdo con lo anterior, los puntos de vista de los dos grupos son semejantes, porque creen que",
    options: [
      "es más importante la limpieza del conjunto que las preferencias de los residentes.",
      "es responsabilidad de todos los residentes cuidar los espacios comunes del conjunto.",
      "es importante que los residentes eviten hacer ruido que moleste a los demás vecinos.",
      "se debe respetar el derecho de todos de disponer de sus predios como les parezca.",
    ],
    correct: 2,
    competency: "Interpretación y Análisis de Perspectivas.",
    level: "",
    assertion: "Comprende perspectivas de distintos actores y grupos sociales.",
    evidence: "Reconoce y compara perspectivas de actores y grupos sociales.",
    component: "",
    standard:
      "Participo constructivamente en iniciativas o proyectos a favor de la no-violencia en el nivel local o global.",
    skill: "",
    evaluationCriteria:
      "La habilidad para reconocer el papel que tienen las normas en una sociedad.",
    justification:
      "La opción C es correcta porque demuestra la preocupación en común de los dos grupos de vecinos frente a la tranquilidad de la comunidad.",
    invalidOptions:
      "No es la opción A porque solo un grupo de vecinos consideran que la limpieza es un aspecto fundamental para tener en cuenta en la redacción del reglamento. No es la opción B pues no evidencia una problemática que estén experimentando los vecinos y los obligue a tomar una posición. No es la D pues no tiene en cuenta que los vecinos viven en una comunidad que debe hacer acuerdos para el bienestar de todos.",
  },
  {
    id: 39,
    simulators: [1],
    subject: "soc",
    context: `<p>Un político propuso que, para asegurar la calidad en la educación escolar y que todos los estudiantes tengan acceso a los mismos libros de texto, estos deberían publicarse en un portal de internet.</p>`,
    text: "¿Cuál de las siguientes opciones expresa condiciones que dificultan la implementación de esta propuesta?",
    options: [
      "La propuesta no tiene en cuenta las condiciones tecnológicas de las instituciones de todo el país.",
      "Los políticos no son expertos en pedagogía y por eso sus propuestas no son adecuadas.",
      "La propuesta no tiene en cuenta que los libros en internet suelen tener información errada.",
      "Los estudiantes no deberían tener libros iguales porque sus condiciones socioeconómicas son distintas.",
    ],
    correct: 0,
    competency: "Pensamiento Reflexivo y Sistémico (Competencias Ciudadanas).",
    level: "",
    assertion:
      "Comprende que los problemas y sus soluciones involucran distintas dimensiones y reconoce relaciones entre estas.",
    evidence:
      "Analiza los efectos en distintas dimensiones que tendría una posible intervención.",
    component: "",
    standard:
      "Conozco y sé usar los mecanismos constitucionales de participación que permiten expresar mis opiniones y participar en la toma de decisiones políticas tanto a nivel local como a nivel nacional.",
    skill: "",
    evaluationCriteria:
      "La habilidad para identificar elementos en una situación que favorecen o no la implementación o efectividad de una solución.",
    justification:
      "La opción A es correcta porque expresa las condiciones desiguales del acceso a la tecnología de las instituciones educativas del país. Esto sería la condición que dificulta la implementación de la propuesta del político.",
    invalidOptions:
      "No es la opción B porque si bien el político puede no ser experto en pedagogía, esto no es una condición que dificulte la implementación de su propuesta. No es la opción C pues la calidad del contenido de internet no hace referencia a las dificultades que puedan tener los estudiantes al acceso a la tecnología. La opción D hace referencia a una discriminación socioeconómica entre las regiones del país estableciendo un prejuicio, lo cual sería contradictorio para la propuesta política que se expresa.",
  },
  {
    id: 40,
    simulators: [1,3],
    subject: "soc",
    context: `<p>Un periódico colombiano publicó la siguiente noticia: "Luego de que la autoridad nacional a cargo de las licencias ambientales autorizara la construcción de un hotel ecoturístico dentro del parque Tayrona, territorio ancestral indígena, el ministro de Ambiente y Desarrollo Sostenible puso en duda la viabilidad de esa obra. De acuerdo con el ministro, la licencia que tiene este hotel no es viable porque permite talar una porción de bosque seco, ecosistema que está casi extinto en Colombia".</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado y adaptado de: Redacción Vida de Hoy (2013, 10 de enero). Gobierno considera inviable hotel en el Tayrona. El Tiempo. Recuperado de http://www.eltiempo.com/archivo/dcumento/CMS-12505333</em></p></div>`,
    text: "En esta noticia, el narrador está dándole un mayor énfasis a",
    options: [
      "el efecto político del proyecto porque registra la reacción del Gobierno nacional.",
      "el riesgo que corren los recursos de un parque nacional, debido a la licencia ambiental.",
      "la restricción económica del proyecto hotelero, pues habla de su viabilidad.",
      "la construcción de un hotel ecoturístico en un territorio ancestral indígena.",
    ],
    correct: 1,
    competency: "Pensamiento Reflexivo y Sistémico (Competencias Ciudadanas).",
    level: "",
    assertion:
      "Comprende que los problemas y sus soluciones involucran distintas dimensiones y reconoce relaciones entre estas.",
    evidence:
      "Establece relaciones que hay entre dimensiones presentes en una situación problemática.",
    component: "",
    standard:
      "Conozco y sé usar los mecanismos constitucionales de participación que permiten expresar mis opiniones y participar en la toma de decisiones políticas tanto a nivel local como a nivel nacional.",
    skill: "",
    evaluationCriteria:
      "La habilidad para identificar en una situación problemática cuáles dimensiones son más importantes.",
    justification:
      "La opción B es la correcta, porque menciona los riesgos a los que se expondrían los recursos naturales del parque debido a la licencia ambiental.",
    invalidOptions:
      "No es correcta la opción A porque solo hace mención al efecto político del proyecto, desconociendo la perspectiva ambiental. No es la opción C porque la dimensión central es la viabilidad económica y no habla del énfasis de la noticia que se refiere a lo ambiental. No es la opción D ya que en esta opción se hace referencia a la dimensión cultural, el énfasis central de la noticia es la dimensión ambiental.",
  },

  // {
  //   id: 2,
  //   simulators: [3],
  //   subject: "lc",
  //   context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p><strong>LA CONTAMINACIÓN MARINA</strong></p><p>Debido a la inmensidad y profundidad de los océanos, hasta hace poco se creía que podrían ser utilizados para verter basura y sustancias químicas en cantidades ilimitadas sin que esto tuviera consecuencias importantes. Los partidarios de continuar con los vertidos en los océanos incluso tienen un eslogan: "La solución a la contaminación es la dilución". En la actualidad, basta con fijarse en la zona muerta del tamaño del estado de Nueva Jersey que se forma cada verano en el delta del Río Mississippi, o en la extensión de 1.600 kilómetros de plástico en descomposición en el Pacífico Norte para darse cuenta de que esta ideología de la "dilución" ha contribuido a llevar al borde del colapso lo que tiempo atrás fue un ecosistema oceánico próspero. Existen pruebas de que los océanos han sufrido a manos del hombre durante miles de años. Sin embargo, estudios recientes demuestran que la degradación, especialmente en las zonas costeras, se ha acelerado notablemente en los últimos tres siglos a medida que han aumentado los vertidos industriales y los contaminantes procedentes de explotaciones agrarias y ciudades costeras.</p><p>Algunos de los contaminantes más comunes derivados de la actividad humana son los plaguicidas, fertilizantes químicos, detergentes, hidrocarburos, aguas residuales, plásticos y otros sólidos. Muchos de estos contaminantes se acumulan en las profundidades del océano, donde son ingeridos por pequeños organismos marinos a través de los cuales se introducen en la cadena alimentaria global. Los fertilizantes ricos en nitrógeno que utilizan los productores agrícolas en zonas del interior, por ejemplo, acaban en las corrientes, ríos y aguas subterráneas locales, y más tarde se depositan en los estuarios, bahías y deltas. Este exceso de nutrientes puede provocar un crecimiento masivo de algas que consumen el oxígeno del agua, lo cual genera zonas en las que no puede haber vida marina o apenas existe. Los científicos han descubierto 400 zonas muertas con estas características por todo el planeta. Los humanos comienzan a percatarse de la insostenibilidad de la filosofía de la "dilución". Muchas leyes nacionales y protocolos internacionales prohíben en la actualidad el vertido de sustancias nocivas en los océanos, si bien su aplicación es a menudo incierta. Se están creando santuarios marinos con el fin de mantener ecosistemas marinos prístinos. Asimismo, se están llevando a cabo iniciativas aisladas que han logrado cierto éxito en la restauración de estuarios y bahías.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado y adaptado de: http://www.nationalgeographic.es/el-oceano/cuestiones-criticas-sobre-el-problemas-de-la-contaminacion-marina/</em></p></div>`,
  //   text: "¿Cuál de los siguientes enunciados puede considerarse la antítesis del argumento central del texto?",
  //   options: [
  //     "La respuesta al problema de la contaminación es la dilución.",
  //     "Las iniciativas dirigidas a la protección marítima son casi inexistentes.",
  //     "Los océanos han sido contaminados por los humanos durante miles de años.",
  //     "Los humanos han comenzado a advertir la insostenibilidad de la filosofía de la dilución.",
  //   ],
  //   correct: 0,
  //   competency: "Comprensión lectora",
  //   level: "",
  //   assertion:
  //     "Comprende cómo se articulan las partes de un texto para darle un sentido global.",
  //   evidence:
  //     "Identifica y caracteriza las ideas o afirmaciones presentes en un texto informativo.",
  //   component: "",
  //   standard:
  //     "Diseño un esquema de interpretación, teniendo en cuenta el tipo de texto, tema, interlocutor e intención comunicativa.",
  //   skill: "",
  //   evaluationCriteria:
  //     "La capacidad para inferir la tesis contraria a la tesis principal de un texto.",
  //   justification:
  //     "La opción A es la respuesta correcta, ya que el texto argumenta que la idea de la dilución ha llevado a que causemos daños cada vez mayores a los océanos: “En la actualidad, basta con fijarse en la zona muerta del tamaño del estado de Nueva Jersey que se forma cada verano en el delta del Río Mississippi, o en la extensión de 1.600 kilómetros de plástico en descomposición en el Pacífico Norte para darse cuenta de que esta ideología de la ‘dilución’ ha contribuido a llevar al borde del colapso lo que tiempo atrás fue un ecosistema oceánico próspero”. La opción A afirma justamente lo contrario.",
  //   invalidOptions:
  //     'Las opciones B, C y D no son correctas porque presentan tesis que no se oponen a lo dicho en el texto. La opción B afirmaría que las iniciativas para proteger los océanos abundan, pero el texto no niega que existan, simplemente señala que hay más santuarios marinos e iniciativas aisladas. La opción C dice lo que el propio texto afirma explícitamente. La opción D también es algo que el texto afirma: "Los humanos comienzan a percatarse de la insostenibilidad de la filosofía de la dilución".',
  // },

  // Pregunta de prueba con optsImg
  {
    id: 150,
    simulators: [1],
    subject: "mat",
    context: "Observe las siguientes figuras geométricas:",
    text: "¿Cuál de las opciones corresponde a un triángulo rectángulo?",
    options: [
      "A. Figura con 3 lados iguales",
      "B. Figura con 1 ángulo recto",
      "C. Figura con todos los ángulos menores a 90°",
      "D. Figura con 4 lados",
    ],
    optionsImg: [
      "test_triangulo_eq",
      "test_triangulo_recto",
      "test_triangulo_acut",
      "test_cuadrilatero",
    ],
    correct: 1,
    competency: "Interpretación y representación",
    level: 2,
    justification:
      "La figura B tiene un ángulo de 90°, característica del triángulo rectángulo.",
  },

  // MAT - Matemáticas (9 preguntas)
  {
    id: 201,
    simulators: [1],
    subject: "mat",
    contextImg: "mat_fig1",
    contextImgCaption: "Figura 1 — Mapa de la ciudad con puntos A, B y C",
    context:
      "En la figura se presenta un mapa de la vista aérea de las calles de una ciudad. Cada cuadrilátero corresponde a un cuadrado. La ruta de A a C mide 25 cm. Cada cuadrado tiene lado de 5 cm.",
    questionImg: "mat_fig2",
    questionImgCaption: "Figura 2 — Tres rutas posibles de A a B",
    text: "Una persona debe ir del punto A al punto B. ¿Cuál(es) de las rutas presentadas tiene(n) longitud igual a la mostrada en la figura 1?",
    options: [
      "A. Solamente I.",
      "B. Solamente I y III.",
      "C. Solamente II.",
      "D. Solamente II y III.",
    ],
    correct: 1,
    competency: "Interpretación y representación",
    level: 3,
    justification:
      "Ruta I: 5 cuadrados × 5 cm = 25 cm. Ruta III: 5 cuadrados × 5 cm = 25 cm.",
  },
];

// Función para obtener preguntas de un simulacro específico
function getQuestionsForSimulacro(simulacroId) {
  return QUESTIONS.filter((q) => q.simulators.includes(simulacroId));
}

// Función para obtener preguntas por materia
function getQuestionsBySubject(subject) {
  return QUESTIONS.filter((q) => q.subject === subject);
}
