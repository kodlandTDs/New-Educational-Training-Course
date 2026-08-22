/* ============================================================
   PB Courses — Entrenamiento de Tutores · contenido en ESPAÑOL
   Fuente: "Entrenamiento Nuevo Modelo Educativo" (EM_Draft),
           instrucciones de Follow Mode, guía de Kodland Sparks.
   ============================================================ */
window.CONTENT = {
lang: 'es',

/* ---------------- textos de interfaz ---------------- */
ui: {
  loginTitle: 'Nuevo Modelo Educativo',
  loginSub: 'Entrenamiento de tutores para los 4 cursos actualizados de Kodland. Ingresa con tu correo de trabajo para ver los cursos que tienes asignados.',
  loginBtn: 'Entrar al entrenamiento',
  loginHint: 'Usa el mismo correo con el que entras a Back Office (…@kodland.team). Tu progreso se guarda en este navegador.',
  emailPlaceholder: 'tunombre@kodland.team',
  errEmpty: 'Por favor escribe tu correo electrónico.',
  errFormat: 'Eso no parece un correo electrónico.',
  errNotFound: 'No encontramos ese correo en la lista del entrenamiento. Revisa que esté bien escrito o contacta a tu Course Consultant para que te agregue.',

  heroEyebrow: '🚀 Programa de Entrenamiento de Tutores',
  heroTitle: 'El <span class="h-pill">nuevo</span> modelo educativo',
  heroSub: 'Cuatro módulos generales para todos, y después las primeras 4 lecciones de los cursos que tienes asignados. Cada módulo termina con una evaluación corta — apruébala para desbloquear el siguiente.',
  homeNote: 'El progreso se guarda solo en este navegador. Si cambias de computadora o borras los datos del navegador, empezarás de nuevo. ¿Dudas sobre el contenido? Habla con tu Course Consultant.',
  footer: 'Kodland · Tutor Development · Entrenamiento Nuevo Modelo Educativo',

  modulesLabel: 'módulos',
  completeWord: 'completos',
  allDone: '¡todo listo!',
  allDoneShort: '🏆 ¡Todo listo!',
  generalTitle: 'Entrenamiento principal',
  generalSub: 'Todos completan estos cuatro, en orden — sin importar el curso que impartas.',
  courseTitle: 'Entrenamiento de tus cursos',
  courseSub: 'Las primeras 4 lecciones de cada curso que tienes asignado.',
  noCourses: 'Todavía no hay cursos vinculados a tu correo. <b>Contacta a tu Course Consultant</b> para que te asigne.',
  lockPrev: 'Aprueba primero el módulo anterior',
  lockGeneral: 'Termina primero los 4 módulos principales',

  badgeDone: '✓ Listo',
  badgeStart: 'Empezar →',
  badgeLocked: '🔒 Bloqueado',
  score: 'Puntaje',
  reviewed: '✓ Revisado',
  resetProgress: 'Reiniciar mi progreso y empezar de nuevo',
  resetConfirm: '¿Reiniciar tu progreso en este idioma? Todos los módulos vuelven a quedar bloqueados y se borran tus puntajes. Esto no se puede deshacer.',
  syncButton: 'Actualizar mi progreso',
  syncConfirm: '¿Reemplazar lo que ves aquí con la última versión guardada de tu progreso? Usa esto si algo se ve mal (por ejemplo, un curso marcado como revisado sin estarlo).',
  syncEmpty: 'Todavía no hay progreso guardado en el servidor para tu cuenta.',
  goal: 'Objetivo',

  qType: { mcq: 'Opción múltiple', multi: 'Selecciona todas', match: 'Relacionar', open: 'Respuesta escrita' },
  multiHint: '☑️ Hay más de una respuesta correcta — selecciona todas las que apliquen.',
  matchHint: '🔗 Elige la respuesta que corresponde a cada fila.',
  openHint: '✍️ Escribe tu propia respuesta — mínimo {n} caracteres. No hay una única redacción correcta; verás una respuesta modelo para comparar.',
  openPlaceholder: 'Escribe tu respuesta aquí…',
  checkAnswer: 'Revisar mi respuesta',
  submitAnswer: 'Enviar mi respuesta',
  choose: 'Elige',
  recorded: 'Respuesta registrada.',
  modelAnswer: 'Respuesta modelo — compara con la tuya',
  markReviewed: 'Ya terminé de leer este módulo',
  moduleReviewed: 'Módulo marcado como revisado',

  devOn: 'MODO DEV — todo desbloqueado',
  devHint: 'Presiona Shift+D tres veces para apagar el modo dev y borrar este progreso.',
  devEmail: 'dev.preview@kodland.org',

  takeQuiz: '📝 Hacer la evaluación →',
  retakeQuiz: '🔁 Repetir la evaluación →',
  question: 'Pregunta',
  correct: '¡Correcto!',
  incorrect: 'Casi —',
  nextQ: 'Siguiente pregunta →',
  seeResults: 'Ver mi resultado →',
  exitQuiz: 'Salir',
  modules: 'Módulos',
  logout: 'Cerrar sesión',
  logoutConfirm: '¿Cerrar sesión? Tu progreso queda guardado en este navegador.',

  passTitle: '¡Módulo aprobado!',
  failTitle: 'Casi lo logras',
  passSub: 'Respondiste {n} de {t} correctamente. Este módulo queda marcado como completo.',
  failSub: 'Respondiste {n} de {t} correctamente. Necesitas {p}% para aprobar — repasa el módulo e inténtalo de nuevo.',
  tryAgain: 'Intentar de nuevo',
  reviewModule: 'Repasar el módulo',
  backModules: '← Volver a los módulos',
  nextModule: 'Siguiente',
  goFinalDst: 'Ir al DST final',
  seeCert: 'Ver mi certificado',

  certLabel: 'Entrenamiento completo',
  certTitle: 'Nuevo Modelo Educativo · Entrenamiento de Tutores',
  certSub: 'Completaste los {n} módulos con un promedio de {avg}%.',
  certNote: 'Buen trabajo. Deja este entrenamiento abierto como referencia durante tus primeras lecciones — puedes volver a cualquier módulo cuando quieras.',

  finalDstTitle: 'DST final de este curso',
  finalDstGo: 'Abrir el DST final',
  finalDstLocked: 'Aprueba primero la evaluación del módulo',
  finalDstLockedNote: 'Completa la evaluación de arriba para desbloquear el DST final.',
  finalDstSoon: 'Enlace próximamente',
  finalDstSoonNote: 'Tu Course Consultant compartirá aquí el enlace del DST muy pronto. Mientras tanto puedes marcar el módulo como leído abajo.',

  videoFallback: 'Tu navegador no puede reproducir este video.',
  watchOnYouTube: 'Ver en YouTube ↗',
  videoMissing: 'Video próximamente — pide a tu Course Consultant la demostración de Follow Mode.'
},


/* ============================================================
   MÓDULOS PRINCIPALES
   ============================================================ */
general: [

/* ---------------------------------------------------------- G1 */
{
  id: 'g1', kind: 'general', num: 'Módulo principal 1', emoji: '🧩', color: '#2B8EF0',
  title: 'Conoce todo sobre el nuevo modelo',
  desc: 'Qué cambió realmente, las nuevas herramientas que usarás en clase y los 4 cursos que siguen esta metodología.',
  meta: '5 preguntas de formato mixto',
  chips: ['🎯 Sparks', '👁 Follow Mode', '📝 Notas del profesor'],
  objective: 'Entender qué es el nuevo modelo educativo, dónde vive ahora la guía de la lección, y cómo Follow Mode y Kodland Sparks cambian la forma de dar clase.',
  cards: [
    { type: 'h', ic: '🔍', t: '¿De qué se trata?' },
    { type: 'text', p: 'Kodland está actualizando la forma en que se enseña en algunos de sus cursos. <strong>No es un cambio de contenido técnico solamente</strong>: es un cambio de <strong>metodología</strong> — cómo se estructura una clase, qué rol cumple el tutor, y cómo se integra la inteligencia artificial como parte del aprendizaje, no como un atajo.' },
    { type: 'text', p: 'Este nuevo modelo ya está aplicado en <strong>4 cursos específicos</strong>. Tu entrenamiento como tutor incluye tanto la mentalidad general (este entrenamiento principal) como el conocimiento específico del curso que vas a impartir (los entrenamientos de curso).' },

    { type: 'h', ic: '🤔', t: '¿Por qué el nuevo modelo?' },
    { type: 'text', p: 'Porque nuestros estudiantes de hoy aprenden distinto a como aprendían hace unos años. Las herramientas cambiaron, la forma en que los niños y jóvenes se relacionan con la tecnología cambió, y la inteligencia artificial ya es parte de su vida cotidiana.' },
    { type: 'iclist', h: 'Actualizar nuestros cursos significa…', items: [
      { ic: '🛠', t: 'Trabajar con herramientas que los estudiantes reconocen y usan hoy.' },
      { ic: '🧠', t: 'Enseñarles a usar la IA <strong>con criterio</strong>, no a temerle ni a depender ciegamente de ella.' },
      { ic: '✨', t: 'Mantener la experiencia de aprendizaje relevante, para que cada clase valga la pena.' }
    ]},

    { type: 'h', ic: '🎓', t: '¿Cuáles son los cursos con esta nueva metodología?' },
    { type: 'table', head: ['Curso', 'Edad', 'Lección', 'Programa'], rows: [
      ['<strong>[2058]</strong> Creatividad Digital Nivel 2', '10–12', '60 min', '40 lecciones'],
      ['<strong>[2063]</strong> Creación digital: Nivel principiante', '8–9', '60 min', '40 lecciones'],
      ['<strong>[2060]</strong> Creación digital: Nivel intermedio', '10–12', '90 min', '40 lecciones'],
      ['<strong>[2059]</strong> Creación digital: Nivel avanzado', '12–17', '90 min', '40 lecciones']
    ]},
    { type: 'good', t: '<strong>¿Son un reemplazo definitivo de cómo se enseña en Kodland?</strong> No. Los grupos actuales mantienen su curso tal como está. Es una metodología <strong>adicional</strong>, que convive con la actual.' },

    { type: 'divider' },
    { type: 'h', ic: '⚡', t: 'Nuevo Hub: Kodland Sparks' },
    { type: 'text', p: '<strong>Kodland Sparks</strong> es la nueva plataforma donde los estudiantes publican sus proyectos, siguen aprendiendo entre clases y reciben retroalimentación de compañeros y de un agente de IA. Ahí vive el portafolio que construyen a lo largo del curso.' },
    { type: 'link', ic: '⚡', href: 'https://portfolio.kodland.org/feed', t: 'Abrir Kodland Sparks', d: 'portfolio.kodland.org/feed — el feed público donde se publican los proyectos' },
    { type: 'iclist', h: 'Lo que necesitas saber como tutor', items: [
      { ic: '🔐', t: 'Los estudiantes entran con <strong>un solo botón desde la plataforma principal (SSO)</strong>: no necesitan registrarse aparte.' },
      { ic: '🔑', t: '<strong>Los tutores acceden con credenciales separadas</strong>, distintas a las del Back Office. Te serán entregadas una vez completes este entrenamiento.' },
      { ic: '🎨', t: 'Sparks tiene dos modos: <strong>Studio</strong> (crear desde cero — web, Python, pixel art, skin de Minecraft, música, Scratch) y <strong>Challenges</strong> (tareas estructuradas con revisión automática y recompensa).' },
      { ic: '💬', t: 'No hay likes ni comentarios clásicos. En su lugar: <strong>reacciones</strong> (emoji), <strong>reviews</strong> (tres campos: impresión general, fortalezas, qué mejorar) y <strong>suscripciones/amigos</strong>.' },
      { ic: '🏆', t: 'La gamificación funciona con <strong>cristales → cofres → recompensas cosméticas</strong>. Las reviews de un tutor o administrador se destacan visualmente, así el estudiante reconoce el retroalimentación oficial.' }
    ]},
    { type: 'tip', t: 'Las reviews que dejes salen marcadas como oficiales. Usa la estructura de tres campos — impresión general, fortalezas, una cosa a mejorar — y mantén el campo "mejorar" concreto, nunca comparativo.' },

    { type: 'divider' },
    { type: 'h', ic: '📝', t: 'Nuevos manuales: adiós wiki' },
    { type: 'hi', ic: '📌', h: 'El cambio más importante en tu rutina de preparación', p: 'Estos nuevos cursos <strong>no tendrán manuales en wiki ni presentaciones</strong>. Ahora <strong>toda la guía de una lección vive en la propia lección</strong>: dentro de BO podrás encontrar las <strong>notas del profesor</strong>, que te mostrarán cómo impartir cada actividad.' },
    { type: 'iclist', h: 'Las notas del profesor pueden contener', items: [
      { ic: '⏱', t: '<strong>Tiempo exacto</strong> en minutos (a veces un rango, ej. "5–7 minutos").' },
      { ic: '🎯', t: '<strong>Objetivo</strong> de la actividad.' },
      { ic: '🙋', t: '<strong>Qué debe hacer el tutor</strong> — acción concreta.' },
      { ic: '👀', t: '<strong>En qué prestar atención / qué NO hacer.</strong>' },
      { ic: '✅', t: '<strong>Criterio de logro</strong> — cómo sabes que el objetivo se cumplió, de forma observable.' }
    ]},
    { type: 'img', src: 'images/tutor-notes-1.png', alt: 'Bloque de notas del profesor en la plataforma Kodland', cap: 'Las notas del profesor aparecen como un bloque naranja punteado dentro de la tarjeta de la lección — aquí, el resumen de la Lección 1 de Creación digital: Nivel avanzado.' },
    { type: 'img', src: 'images/tutor-notes-2.png', alt: 'Notas del profesor con tiempo estimado e instrucciones', cap: 'Las notas están junto a la actividad que describen, con tiempo estimado y guía paso a paso para esa tarjeta específica.' },

    { type: 'h', ic: '🙈', t: 'Si la guía está dentro de la actividad, ¿los estudiantes pueden verla?' },
    { type: 'text', p: '<strong>No.</strong> Cuando estés en la pestaña <strong>Tareas</strong> mostrando la actividad, <strong>no estarás compartiendo tu pantalla</strong>. Simplemente le indicarás al estudiante que abra la pestaña Tareas. Gracias al Follow Mode el estudiante será dirigido automáticamente a la misma actividad que tú estás viendo, pero <strong>no tendrá acceso a la guía del tutor</strong>: esa información solo es visible para ti.' },

    { type: 'divider' },
    { type: 'h', ic: '👁', t: 'Follow Mode' },
    { type: 'text', p: '<strong>Qué es:</strong> en Follow Mode, los estudiantes ven automáticamente <strong>la misma tarea que tú tienes abierta</strong>. No es compartir pantalla — cada estudiante tiene su propia copia abierta y puede trabajar en ella. Funciona solo dentro de la lección.' },
    { type: 'video', h: 'Follow Mode en acción', p: 'Una demostración corta de cómo activar el modo y mover al grupo por la lección.', yt: 'HDWga8ZROik' },
    { type: 'steps', items: [
      { h: 'Abre cualquier tarea de la lección', p: 'Haz clic en ella en la lista de tareas. El interruptor solo aparece con una tarea abierta.' },
      { h: 'Busca el interruptor "Dirigir al grupo"', p: 'Aparece junto a la tarea abierta.' },
      { h: 'Actívalo', p: 'Desde ese momento los estudiantes se mueven automáticamente a la tarea que tú abras.' }
    ]},
    { type: 'iclist', h: 'Cómo se comporta durante la clase', items: [
      { ic: '➡️', t: '<strong>Cambias de tarea</strong> → cambia para todos los que te siguen.' },
      { ic: '❌', t: '<strong>Cierras una tarea</strong> → se cierra también para ellos.' },
      { ic: '🖱', t: 'Te <strong>desplazas dentro de una actividad con bloques</strong> → su posición se ajusta a la tuya automáticamente.' },
      { ic: '🕐', t: 'Un estudiante que <strong>se une tarde</strong> aterriza directo en la tarea que tengas abierta.' },
      { ic: '🚪', t: 'Si te <strong>ausentas</strong>, ven un aviso de "el tutor se ausentó"; al volver, el seguimiento continúa.' },
      { ic: '👥', t: 'Junto al nombre de cada estudiante ves un marcador de <strong>quién te sigue</strong> y quién trabaja independiente.' }
    ]},
    { type: 'good', t: '<strong>El estudiante no está encerrado.</strong> Puede desengancharse con el botón <strong>"Trabajar independiente"</strong> y trabajar en lo que quiera. Mientras tanto ve un banner ("El tutor está en la actividad…") con un botón <strong>"Volver"</strong> para resincronizarse en un clic. Si cambias de tarea mientras él trabaja solo, el banner se actualiza sin interrumpirlo.' },
    { type: 'tip', t: 'Con el modo apagado, todo funciona como antes: nada cambia. Apágalo cuando quieras que los estudiantes exploren libremente.' },

    { type: 'divider' },
    { type: 'h', ic: '📤', t: 'No olvides el botón Enviar' },
    { type: 'warn', t: 'Muchas actividades son interactivas. <strong>Si el estudiante no hace clic en Enviar, no podemos rastrear su progreso</strong>, aunque haya completado la actividad correctamente en pantalla. Recuérdaselo activamente, sobre todo en las primeras clases. Esto también permite que métricas como entrega de tareas de clase mejoren.' },
    { type: 'img', src: 'images/submit-button.png', alt: 'El botón Enviar al final de una actividad interactiva', cap: 'El botón rosa Enviar al final de una tarjeta interactiva — el momento en que el trabajo del estudiante realmente queda registrado.' }
  ],
  quiz: [
  { type: 'open',
    ctx: 'Es domingo por la noche. Estás preparando la lección de mañana, tu primera con uno de estos cursos. Abres la plataforma buscando el manual de wiki y la presentación con la que sueles dar clase. No existe ninguno de los dos.',
    q: 'Escribe cómo vas a prepararte en su lugar. Di dónde vive realmente ahora la guía de la lección, y nombra al menos tres cosas que te dirá sobre cada actividad.',
    min: 180,
    model: 'Una buena respuesta cubre: <ul><li>Estos cursos <strong>no tienen manual en wiki ni presentación</strong> — es por diseño, no es un archivo que falte.</li><li>Toda la guía vive <strong>dentro de la propia lección</strong>, en Back Office, como <strong>notas del profesor</strong> junto a cada tarjeta de actividad.</li><li>Las notas te dan el <strong>tiempo exacto</strong> de la actividad, su <strong>objetivo</strong>, <strong>qué debes hacer tú</strong>, <strong>en qué prestar atención o qué NO hacer</strong>, y el <strong>criterio de logro</strong> — cómo sabes, de forma observable, que el objetivo se cumplió.</li><li>Así que tu preparación es: abrir la lección en BO y leer las notas tarjeta por tarjeta, abrir el resultado final que mostrarás al inicio, y leer también la próxima lección para poder generar expectativa en el cierre.</li></ul>',
    fb: 'Compara tu respuesta con el modelo de abajo.' },

  { type: 'match',
    q: 'Estás leyendo la lección de mañana en Back Office y te surgen cuatro dudas prácticas. Relaciona cada una con el campo de las notas del profesor que la responde.',
    pairs: [
      { l: '"¿Se supone que dedique 5 minutos aquí o 20?"', r: 'Tiempo exacto' },
      { l: '"¿Cómo sé que esta actividad realmente funcionó antes de avanzar?"', r: 'Criterio de logro' },
      { l: '"¿Lo demuestro yo, o los dejo intentar primero?"', r: 'Qué debe hacer el tutor' },
      { l: '"Aquí hay una trampa en la que siempre caen los estudiantes, ¿está señalada?"', r: 'En qué prestar atención / qué NO hacer' }
    ],
    fb: 'Cada campo de las notas responde una pregunta práctica distinta. El "criterio de logro" es el que más fácilmente se pasa por alto: es lo que te dice que la actividad terminó, no el reloj.' },

  { type: 'multi',
    ctx: 'Tienes <strong>"Dirigir al grupo"</strong> activado. A mitad de la lección, un estudiante hace clic en <strong>"Trabajar independiente"</strong> y regresa a una tarea anterior.',
    q: '¿Cuáles de las siguientes afirmaciones son ciertas a partir de ese momento? Selecciona todas las que apliquen.',
    opts: [
      'El estudiante sigue viendo un banner que muestra en qué tarea estás tú, con un botón "Volver"',
      'El estudiante queda fuera de Follow Mode de forma permanente y debe volver a entrar a la lección',
      'Si cambias de tarea mientras él trabaja solo, su banner se actualiza sin interrumpirlo',
      'Sigues viendo, junto a su nombre, que está trabajando de forma independiente',
      'Las respuestas del estudiante dentro de la tarea que tú tienes abierta se te transmiten en vivo',
      'El progreso del estudiante en la tarea anterior no se guarda mientras está desenganchado'
    ],
    c: [0, 2, 3],
    fb: 'El modo nunca encierra ni expulsa al estudiante. Conserva el banner, este se actualiza en silencio, y tú ves el marcador junto a su nombre. Lo que <strong>no</strong> se comparte son sus respuestas y acciones dentro de una tarea — eso queda privado — y desengancharse nunca afecta el guardado.' },

  { type: 'mcq',
    ctx: 'Tu clase salió excelente. Todos tus estudiantes terminaron la actividad interactiva: los viste hacerlo en pantalla. A la mañana siguiente el reporte muestra <strong>0% de entrega de tareas de clase</strong> para todo tu grupo.',
    q: '¿Cuál es la explicación más probable, y qué vas a cambiar?',
    opts: [
      'La actividad estaba rota; hay que reportarlo a soporte técnico y pedir que corrijan la métrica manualmente',
      'Tus estudiantes no hicieron clic en <strong>Enviar</strong>, así que nada quedó registrado — haz del recordatorio de Enviar parte de tu rutina de cierre',
      'Follow Mode estaba activado, lo que bloquea el rastreo de progreso mientras lideras al grupo',
      'Tus estudiantes no habían iniciado sesión en Kodland Sparks, así que su trabajo se fue a una cuenta de invitado'
    ],
    c: 1,
    fb: 'Completar la actividad en pantalla no es lo que queda registrado: el clic en <strong>Enviar</strong> sí. Esta es la causa más común de un reporte "clase excelente, métricas en cero", y por eso el recordatorio de Enviar pertenece a tu rutina de cierre, sobre todo en tus primeras clases.' },

  { type: 'mcq',
    ctx: 'Tus estudiantes publicarán su primer proyecto en Kodland Sparks esta semana, y quieres dejarle retroalimentación a cada uno. Antes de la lección revisas tres cosas: cómo entran tus estudiantes, cómo entras <em>tú</em>, y cómo funciona ahí el retroalimentación.',
    q: '¿Qué conjunto de respuestas es correcto?',
    opts: [
      'Tus estudiantes se registran solos en Sparks; tú usas tu acceso de Back Office; dejas retroalimentación con likes y comentarios',
      'Tus estudiantes entran con un solo botón desde la plataforma principal (SSO); tú recibes credenciales separadas al completar este entrenamiento; dejas retroalimentación como una review de tres campos, que aparece destacada como oficial',
      'Tus estudiantes entran con SSO; tú usas tu acceso de Back Office; tus reviews se ven exactamente igual que la review de un compañero',
      'Tú y tus estudiantes se registran por separado en Sparks; el retroalimentación lo genera solamente la IA'
    ],
    c: 1,
    fb: 'Tus estudiantes entran con SSO: un botón, sin registro aparte. <strong>Tú recibes credenciales separadas</strong>, distintas a las del Back Office, entregadas al completar este entrenamiento. Y no hay likes ni comentarios clásicos: reacciones más reviews estructuradas de tres campos, y las tuyas se destacan visualmente para que el estudiante reconozca el retroalimentación oficial de la escuela.' }
]
},

/* ---------------------------------------------------------- G2 */
{
  id: 'g2', kind: 'general', num: 'Módulo principal 2', emoji: '🧠', color: '#22C55E',
  title: 'Pedagogía y mentalidad del tutor',
  desc: 'Los cuatro pilares del modelo, cómo se usa la IA de forma distinta en cada edad, y cómo cambia tu rol en el aula.',
  meta: '5 preguntas de formato mixto',
  chips: ['🔄 Learning Loop', '🤖 Reglas de IA', '🎭 Storytelling'],
  objective: 'Cambiar cómo piensas una clase, no qué botones aprietas. Al final deberías poder explicar los cuatro pilares y la regla "la IA propone, el autor decide".',
  cards: [
    { type: 'hi', ic: '⭐', h: 'Este es el módulo más importante de todo el entrenamiento', p: 'No se trata de aprender botones nuevos. Se trata de <strong>cambiar cómo piensas una clase</strong>.' },

    { type: 'h', ic: '🏛', t: 'Los 4 pilares del modelo' },

    { type: 'text', h: 'Pilar 1 — Aprendizaje deductivo', ic: '1️⃣', p: 'La clase ya no empieza con teoría. Empieza mostrando el <strong>resultado final ya funcionando</strong>.' },
    { type: 'ba',
      beforeLbl: 'Antes',
      before: 'La clase empezaba con teoría, luego herramienta, luego el estudiante construía desde cero.',
      afterLbl: 'Ahora',
      after: 'La clase empieza mostrando el <strong>resultado final ya funcionando</strong> ("¿qué juego o mecánica debe funcionar al final de hoy?"). El estudiante primero ve el proyecto completo, lo desarma junto contigo, y solo después lo construye pieza por pieza.'
    },
    { type: 'tip', t: 'Esto cambia tu primer instinto como tutor: en vez de explicar antes de mostrar, <strong>muestra primero y explica como respuesta a lo que el estudiante ya observó</strong>.' },

    { type: 'text', h: 'Pilar 2 — Mentalidad de crecimiento', ic: '2️⃣', p: 'Un bug, un error, una mecánica rota son una <strong>etapa normal del desarrollo</strong>, no un fracaso. Se le enseña al estudiante a decir "todavía no funciona, busquemos una estrategia" en vez de "no puedo".' },
    { type: 'twocol',
      left:  { ic: '✅', h: 'Di esto', items: ['"Perfecto, encontramos un problema típico, vamos a resolverlo."', '"Todavía no funciona. ¿Cuál es nuestra siguiente estrategia?"', '"Muéstrame qué intentaste antes de esto."'] },
      right: { ic: '🚫', h: 'Evita esto', items: ['"Otra vez no te salió."', '"Está mal, déjame arreglarlo."', '"Esto es fácil, ya deberías saberlo."'] }
    },

    { type: 'text', h: 'Pilar 3 — El ciclo de aprendizaje de Kodland', ic: '3️⃣', p: 'Es el ciclo que se repite dentro de cada clase y entre clases. Reemplaza la vieja secuencia lineal de "explico → practican → reviso".' },
    { type: 'flow', steps: [
      { ic: '🎯', t: 'Objetivo' }, { ic: '⚡', t: 'Prototipo rápido' }, { ic: '🐞', t: 'Dificultad / error' },
      { ic: '🧭', t: 'Estrategia / pista' }, { ic: '📈', t: 'Mejora' }, { ic: '🎤', t: 'Demostración' }, { ic: '💭', t: 'Reflexión' }
    ]},
    { type: 'text', p: 'Ahora la clase se mueve en <strong>espiral</strong>: cada vuelta del ciclo profundiza un poco más.' },

    { type: 'text', h: 'Pilar 4 — Aprendizaje asistido por IA', ic: '4️⃣', p: 'Aquí es donde más cuidado hay que tener, porque <strong>el rol de la IA no es el mismo en los 4 cursos</strong>: depende de la edad.' },
    { type: 'table', h: 'Cómo se usa la IA en cada curso', ic: '🤖',
      head: ['Curso / edad', 'Modelo de uso de IA', 'Test para validar el proyecto'],
      rows: [
        ['<strong>Creatividad Digital</strong> y <strong>Creación digital: Nivel principiante</strong> (8–9)',
         'Aprendizaje guiado basado en proyectos, IA asistida. Herramientas cercanas a las actuales, IA mediada por el tutor + AI Buddy. <strong>El sentimiento de "yo lo hice" es el activo que hay que proteger.</strong> La IA puede aparecer tarde en el curso, como elemento lúdico y acotado.',
         '<strong>Test inverso:</strong> el proyecto debe seguir siendo 100% alcanzable y significativo <em>sin</em> IA. La IA solo puede quitar fricción rutinaria — nunca reemplazar el acto creativo.'],
        ['<strong>Creación digital: Nivel intermedio</strong> (10–12)',
         'Aprendizaje basado en proyectos dirigidos, IA como material. El estudiante es dueño y ejecutor del núcleo creativo; la IA genera material crudo (sprites, sonidos, textos) que el estudiante cura, edita y ensambla. La IA es un "compañero de sparring".',
         '<strong>Test de apalancamiento:</strong> sin IA el proyecto seguiría siendo posible, pero visiblemente más pobre o pequeño dentro del tiempo de clase. La IA sube el techo de la idea del estudiante.'],
        ['<strong>Creación digital: Nivel avanzado</strong> (12–17)',
         'Aprendizaje basado en proyectos integrado con la IA, el estudiante como director creativo. Orquesta la IA en todo el proceso (concepto → assets → lógica → construcción), incluyendo IA como componente dentro de su propio programa. Alfabetización explícita sobre medios sintéticos.',
         '<strong>Test de ambición:</strong> el alcance/calidad pretendido no es alcanzable sin IA en el tiempo dado. Quitar la IA colapsa la forma prevista del proyecto.']
      ]},
    { type: 'quote', t: '"La IA propone, el autor decide."', src: 'La regla que debes repetir siempre, en cualquiera de los 4 cursos' },
    { type: 'iclist', h: 'Dos agentes distintos — no los confundas', items: [
      { ic: '⚙️', t: '<strong>IA convencional / generadora</strong> — crea código, imágenes, ideas.' },
      { ic: '🧭', t: '<strong>AI Mentor / AI Buddy</strong> — no genera la solución. Hace preguntas guía y explica.' }
    ], after: '<strong>Nunca dejes que la IA construya la lógica central del proyecto en lugar del estudiante.</strong>' },

    { type: 'divider' },
    { type: 'h', ic: '💬', t: 'El retroalimentación ya no es solo tutor → estudiante' },
    { type: 'iclist', h: 'Retroalimentación de 4 vías', items: [
      { ic: '🧑‍🏫', t: 'El <strong>tutor</strong>.' },
      { ic: '👥', t: 'Un <strong>compañero</strong> (retroalimentación entre pares).' },
      { ic: '🪞', t: 'La <strong>autoevaluación</strong> del estudiante.' },
      { ic: '🤖', t: 'La <strong>IA</strong>.' }
    ]},
    { type: 'text', p: 'La autoevaluación no es "¿te gustó?". Es identificar: <strong>qué problema tuve, qué estrategia usé, cuál es mi siguiente paso</strong>. El retroalimentación entre pares durante el showcase es simple y específico ("me gustó que…") y <strong>nunca comparativo entre proyectos</strong>.' },

    { type: 'h', ic: '🎭', t: 'Storytelling como motor motivacional' },
    { type: 'text', p: 'Cada uno de los 4 cursos tiene una narrativa que envuelve todo el programa: no es decorativo. El estudiante no es "un alumno haciendo un ejercicio", es un <strong>creador/desarrollador junior dentro de un estudio digital ficticio</strong>.' },
    { type: 'iclist', items: [
      { ic: '🎨', t: '<strong>Creatividad Digital:</strong> "Creativia Studio", agencia creativa digital.' },
      { ic: '🔬', t: '<strong>Creación digital: Nivel principiante:</strong> "Creator Lab", laboratorio de creación.' },
      { ic: '🎮', t: '<strong>Creación digital: Nivel intermedio:</strong> "Creator Lab" — cada módulo es una "misión".' },
      { ic: '💻', t: '<strong>Creación digital: Nivel avanzado:</strong> "Creación digital: Nivel avanzado", estudio de desarrollo; el estudiante es "Junior Developer".' }
    ], after: 'Como tutor, sostener esta narrativa — aunque sea con una frase — ayuda a que el estudiante sienta que tiene un rol profesional, no que "está en clase".' },

    { type: 'h', ic: '🪜', t: 'Propiedad del proyecto' },
    { type: 'text', p: 'Al inicio del curso el estudiante trabaja muy guiado: tú demuestras, él repite. Hacia el final del curso, el estudiante <strong>decide qué mejorar y por qué</strong>, sin que tú se lo indiques paso a paso. Tu rol se transforma: pasas de dirigir la solución a <strong>acompañar la toma de decisiones</strong>.' },
    { type: 'steps', items: [
      { h: 'Conecta', p: 'Los bloques ya están, solo hay que unirlos.' },
      { h: 'Completa', p: 'Falta una parte y el estudiante la agrega.' },
      { h: 'Arma tú solo', p: 'Parte de cero con lo aprendido.' }
    ]},

    { type: 'divider' },
    { type: 'hi', ic: '🧭', h: 'En resumen: tu rol cambió', p: 'Ya no eres el que explica todo antes de empezar. Eres un <strong>navegante</strong>: muestras el destino, acompañas el camino con preguntas y pistas puntuales, y dejas que el estudiante se tope con la dificultad antes de resolvérsela. Las plantillas de respaldo existen en cada curso precisamente para que nunca tengas que "salvar" un proyecto en pánico: siempre hay una ruta alterna con resultado garantizado.' }
  ],
  quiz: [
  { type: 'match',
    q: 'Relaciona cada curso con el test que valida si la IA se está usando en el nivel correcto para esa edad.',
    pairs: [
      { l: 'Creación digital: Nivel principiante (8–9)', r: 'Test inverso — el proyecto debe seguir siendo 100% alcanzable sin IA' },
      { l: 'Creación digital: Nivel intermedio (10–12)', r: 'Test de apalancamiento — sin IA seguiría siendo posible, pero visiblemente más pobre' },
      { l: 'Creación digital: Nivel avanzado (12–17)', r: 'Test de ambición — el alcance pretendido no es alcanzable sin IA en el tiempo dado' },
      { l: 'Creatividad Digital Nivel 2 (10–12)', r: 'Test inverso — la IA solo puede quitar fricción rutinaria, nunca el acto creativo' }
    ],
    fb: 'Creatividad Digital y Creación digital: Nivel principiante comparten el <strong>test inverso</strong>: a esas edades el sentimiento de "yo lo hice" es el activo que hay que proteger. GameDev usa el <strong>test de apalancamiento</strong> (la IA sube el techo). Creación digital: Nivel avanzado usa el <strong>test de ambición</strong> (quita la IA y la forma prevista colapsa).' },

  { type: 'mcq',
    ctx: 'En tu grupo de Creación digital: Nivel intermedio, un estudiante pega todo su proyecto en la IA y le pide: <em>"Diséñame una mejor mecánica de juego y escribe el código."</em> La IA devuelve una mecánica que funciona. El estudiante está encantado.',
    q: '¿Cuál es la lectura correcta de esta situación?',
    opts: [
      'Está bien — GameDev usa el test de apalancamiento, y la IA claramente subió el techo del proyecto',
      'Está bien mientras el estudiante pueda explicar después qué hace el código',
      'Cruza la línea: la IA genera material crudo, pero el estudiante es dueño y ejecutor del núcleo creativo — la mecánica es decisión del estudiante, no de la IA',
      'Solo es un problema en Creación digital: Nivel avanzado, donde el prompt engineering es un resultado educativo explícito'
    ],
    c: 2,
    fb: 'En GameDev la IA es un <strong>compañero de sparring</strong>: genera material crudo (sprites, sonidos, textos) que el estudiante cura y ensambla. Nunca decide la mecánica. La regla vale en los cuatro cursos — <strong>"la IA propone, el autor decide"</strong> — y poder explicar el código después no devuelve la autoría.' },

  { type: 'multi',
    ctx: 'Un estudiante lleva diez minutos intentando que funcione una colisión. Sigue sin funcionar y dice: <em>"Es que soy malo para esto."</em>',
    q: '¿Qué respuestas son consistentes con el modelo? Selecciona todas las que apliquen.',
    opts: [
      '"Perfecto, encontramos un problema típico. Vamos a resolverlo."',
      '"<em>Todavía</em> no funciona. ¿Cuál es nuestra siguiente estrategia?"',
      '"No te preocupes, déjame arreglarlo para que podamos avanzar."',
      '"Muéstrame qué intentaste antes de esto."',
      '"Este es fácil, ya deberías tenerlo."',
      '"Volvamos a la última versión que funcionaba y busquemos la primera diferencia."'
    ],
    c: [0, 1, 3, 5],
    fb: 'El lenguaje de mentalidad de crecimiento nombra el error como algo normal y devuelve el siguiente paso al estudiante. Arreglárselo elimina el aprendizaje; "esto es fácil" agrega vergüenza a un momento de bloqueo. Nota que "busquemos la primera diferencia" es a la vez apoyo <em>y</em> una estrategia real de depuración.' },

  { type: 'open',
    ctx: 'Llevas 15 minutos de una lección de Creación digital: Nivel avanzado. El juego de un estudiante dejó de ejecutarse después de su último cambio. Se voltea y te dice: <em>"Se rompió. ¿Lo puedes revisar?"</em>',
    q: 'Escribe lo que realmente dirías y harías a continuación, con las palabras que usarías con el estudiante. Tu respuesta debe mostrar el paso de dirigir la solución a acompañar la decisión.',
    min: 180,
    model: 'Una respuesta sólida cubre la mayoría de esto: <ul><li>Nombra el error como normal: <em>"Bien, algo cambió y ahora no corre. Esa es exactamente la situación para la que practicamos."</em></li><li>Devuelve el volante al estudiante con una pregunta, no con una respuesta: <em>"¿Qué fue lo último que cambiaste?"</em></li><li>Aplica el ciclo <strong>cambio → ejecución → comparación → diagnóstico → corrección</strong>: volver a la última versión que funcionaba y buscar la <strong>primera diferencia</strong>, en vez de corregir todo de una vez.</li><li>Guía hacia <strong>una sola hipótesis comprobable a la vez</strong>.</li><li>No abre la solicitud a la IA y se la reescribe: hace una pregunta puntual sobre lo que le falta.</li><li>Mantiene la plantilla de respaldo en reserva, usada sin dramatizar y solo después de intentos genuinos.</li></ul>',
    fb: 'Compara tu respuesta con el modelo de abajo.' },

  { type: 'mcq',
    ctx: 'Estás planeando los primeros 10 minutos de tu lección: presentar el concepto de variables, mostrarles a tus estudiantes dónde están los bloques, y luego repartir la plantilla para que armen el contador.',
    q: '¿Qué está mal con este plan bajo el nuevo modelo?',
    opts: [
      'Nada — hay que explicar las variables antes de que los estudiantes puedan usarlas',
      'Es inductivo. Abre mostrando el resultado final ya funcionando, deja que tus estudiantes lo desarmen contigo, y que tu explicación llegue como respuesta a lo que ya observaron',
      'Deberías dejar que el AI Mentor explique el concepto en vez de explicarlo tú',
      'Las variables no deberían enseñarse en estos cursos'
    ],
    c: 1,
    fb: 'Ese plan es la vieja secuencia inductiva: teoría → herramienta → construir. El aprendizaje deductivo la invierte: <strong>muestra primero el resultado final</strong>, desármenlo juntos, y deja que tu explicación llegue en el momento en que tu estudiante ya se topó con la necesidad de saberla.' }
]
},

/* ---------------------------------------------------------- G3 */
{
  id: 'g3', kind: 'general', num: 'Módulo principal 3', emoji: '⏱', color: '#F59E0B',
  title: 'Estructura de la lección',
  desc: 'Los 9 bloques ya no existen como diapositivas — esto es lo que los reemplazó, y las métricas que siguen siendo tuyas.',
  meta: '5 preguntas de formato mixto',
  chips: ['🧱 9 bloques', '📊 Métricas', '☑️ Checklist previo'],
  objective: 'Saber cómo se estructura ahora una lección sin diapositivas de bloque, gestionar tú mismo el ritmo, y mantener al día la asistencia, la tarea y la retención.',
  cards: [
    { type: 'h', ic: '🧱', t: 'Se acabaron los 9 bloques con slide avisando el cambio' },
    { type: 'text', p: 'Antes, una clase tenía bloques grandes y un slide que nos indicaba cuándo "hacer un resumen de la lección" o "ahora toca cierre":' },
    { type: 'list', ordered: true, items: [
      'Warm-Up', 'Revisión de la Lección Anterior', 'Revisión de la Tarea', 'Objetivo de la Lección',
      'Teoría y Práctica', 'Resumen de la Lección', 'Asignación de Tarea', 'Adelanto de la Próxima Lección', 'Cierre'
    ]},
    { type: 'hi', ic: '⚠️', h: 'Qué cambió', p: 'Ahora ya no existen como bloques separados anunciados por un slide. La lección se descompone en <strong>actividades dentro de la plataforma</strong>, y cada una trae su propia información. <strong>Tú gestionas el ritmo, no un slide que te lo recuerde.</strong>' },

    { type: 'h', ic: '✅', t: 'La estructura no se pierde — se mudó' },
    { type: 'acc', items: [
      { ic: '👋', h: 'Warm-Up — de 2 a 4 minutos', open: true, body: '<p>Sigue existiendo, pero dura 2–4 minutos: saludo, cámara/micrófono, una reacción. Ya no es un segmento largo. En algunas lecciones tendremos revisión del estado de ánimo.</p><p><strong>Lo que sí debemos mantener:</strong> aprovecharla para conectar con nuestros estudiantes, ya sea con una pequeña charla o con actividades sobre sus gustos y su estado de ánimo.</p>' },
      { ic: '🔧', h: 'Revisión de la clase anterior → un checkpoint técnico', body: '<p>Se convierte en un <strong>checkpoint</strong>: ¿el proyecto anterior abre y funciona? <strong>No</strong> se re-explican conceptos, solo se verifica que el punto de partida esté listo.</p><p>De esa forma, en algunas lecciones hacemos la revisión de la lección anterior y la tarea en una sola tarea de la plataforma.</p>' },
      { ic: '🎬', h: 'Objetivo de la lección — se muestra, no se explica', body: '<p>El objetivo de la lección ya no se explica solo con palabras: <strong>se muestra</strong> con el resultado final (video, GIF, proyecto terminado) como primer disparador.</p>' },
      { ic: '🔀', h: 'Teoría y práctica están fusionadas', body: '<p>La explicación llega justo cuando el estudiante ya se topó con la necesidad de saberla: primero exploran y se enfrentan al reto, después llega la explicación <strong>como respuesta</strong>.</p>' },
      { ic: '📋', h: 'Resumen de la lección — interactivo y grupal', body: '<p>Más interactivo y grupal, con pequeños quiz que cada estudiante responde directo en la plataforma, y una lista con el resumen de lo aprendido para que el tutor resuma.</p>' },
      { ic: '🏠', h: 'Tarea — la siguiente versión, no un ejercicio aparte', body: '<p>La tarea para casa se reformula como "la siguiente versión/iteración" del <strong>mismo proyecto publicado</strong>, no como un ejercicio aparte. Dependiendo del curso, también se reformula como una misión o reto sobre lo que ya aprendieron.</p>' },
      { ic: '🔮', h: 'Adelanto de la próxima clase — una frase, no un segmento', body: '<p>Es una frase, no un segmento. Sin embargo, no lo minimices a solo leer la frase: <strong>motiva a los estudiantes</strong>. Es muy recomendable que antes de dar tu lección hayas leído la próxima, y de esa forma puedas motivarlos de verdad.</p>' }
    ]},

    { type: 'divider' },
    { type: 'h', ic: '📊', t: 'Lo que sigue siendo tuyo: las métricas' },
    { type: 'hi', ic: '📈', h: 'Se fueron las diapositivas — la estructura no', p: 'Recuerda que la estructura de la lección está estrechamente conectada con métricas importantes como la <strong>asistencia</strong>, la <strong>retención</strong> y la <strong>entrega de tareas</strong>. Recordarles la tarea a los estudiantes, explicarla y revisarla, hacer el warm-up y el cierre, explicar los objetivos de la lección y adelantar la próxima lección: todo eso contribuye al engagement, la retención y la asistencia.' },
    { type: 'iclist', h: 'Tres métricas, tres hábitos concretos', items: [
      { ic: '🗓', t: '<strong>Asistencia</strong> — márcala al inicio, durante el warm-up, mientras los estudiantes se acomodan. No la dejes para el final de la clase, cuando estás cerrando y es fácil olvidarla.' },
      { ic: '📚', t: '<strong>Tarea</strong> — como la tarea ahora es "la siguiente iteración del mismo proyecto", revísala dentro del checkpoint de la lección anterior. Si un estudiante no trae nada, esa es tu señal para ver si se atoró técnicamente, no solo para registrar un cero.' },
      { ic: '💚', t: '<strong>Retención</strong> — un estudiante que deja de publicar en Sparks, o deja de hacer clic en Enviar, suele estar desconectándose antes de dejar de asistir. Esas dos señales son tu alerta más temprana.' }
    ]},
    { type: 'warn', t: 'Recuerda: <strong>si el estudiante no hace clic en Enviar, su trabajo no queda registrado</strong>. Una clase que se sintió excelente puede aparecer con cero entrega de tareas de clase. Haz del recordatorio de Enviar parte de tu rutina de cierre.' },

    { type: 'h', ic: '☑️', t: 'Antes de tu lección' },
    { type: 'check', h: 'Checklist previo a la clase', items: [
      'Leí las notas del profesor de esta lección en Back Office.',
      'Leí también <strong>la próxima</strong> lección, para poder generar expectativa en el cierre.',
      'Abrí el resultado final que mostraré al inicio (video, GIF o proyecto funcionando).',
      'Sé qué único paso con IA permite esta lección, y cuál es su límite de alcance.',
      'Sé dónde está la plantilla de respaldo por si un proyecto se rompe.',
      'Tengo un plan para marcar la asistencia durante el warm-up.',
      'Recordaré a los estudiantes hacer clic en <strong>Enviar</strong> antes de cerrar.'
    ]},
    { type: 'good', t: 'No necesitas memorizar la lección. Necesitas saber dónde está el resultado final, dónde está la plantilla de respaldo, y cuándo dejar de hablar. Las notas del profesor cargan con el resto.' }
  ],
  quiz: [
  { type: 'match',
    q: 'Los 9 bloques de la lección ya no existen como diapositivas, pero cada uno tiene un sucesor. Relaciona el bloque antiguo con aquello en lo que se convirtió.',
    pairs: [
      { l: 'Revisión de la Lección Anterior', r: 'Un checkpoint técnico: ¿el proyecto anterior abre y funciona?' },
      { l: 'Objetivo de la Lección', r: 'El resultado final mostrado como primer disparador — video, GIF o proyecto funcionando' },
      { l: 'Asignación de Tarea', r: 'La siguiente versión/iteración del mismo proyecto publicado' },
      { l: 'Resumen de la Lección', r: 'Pequeños quiz respondidos en la plataforma más una lista compartida de lo aprendido' },
      { l: 'Adelanto de la Próxima Lección', r: 'Una frase que motiva — lo que implica haber leído antes la próxima lección' }
    ],
    fb: 'Nada se eliminó; todo se mudó a las actividades. El checkpoint es el más fácil de equivocar: verifica que el punto de partida funcione, no re-explica los conceptos de la semana pasada.' },

  { type: 'multi',
    ctx: 'Es tu primer mes dando uno de estos cursos. Quieres mantener sanas la asistencia, la tarea y la retención sin un slide que te lo recuerde.',
    q: '¿Qué hábitos corresponden a lo que el modelo realmente pide? Selecciona todos los que apliquen.',
    opts: [
      'Marcar la asistencia al inicio, durante el warm-up, mientras los estudiantes se acomodan',
      'Marcar la asistencia al final, junto con el registro de la tarea, para hacerlo todo de una vez',
      'Revisar la tarea dentro del checkpoint de la lección anterior, ya que la tarea ahora es la siguiente iteración del mismo proyecto',
      'Si un estudiante no trae tarea, registrar un cero y seguir para que la clase no se atrase',
      'Tratar "dejó de publicar en Sparks" y "dejó de hacer clic en Enviar" como alertas tempranas de desconexión',
      'Esperar a dos faltas seguidas antes de considerar a un estudiante en riesgo de abandono'
    ],
    c: [0, 2, 4],
    fb: 'La asistencia al final compite con el cierre de la clase y se olvida. Una tarea faltante es una señal para revisar si el estudiante se atoró técnicamente, no solo un cero. Y la desconexión aparece en la <strong>producción</strong> (sin publicaciones, sin Enviar) antes que en la asistencia, por eso esperar a las faltas ya es tarde.' },

  { type: 'mcq',
    ctx: 'Abres la lección y la actividad de revisión de la clase anterior. Los proyectos de dos estudiantes no abren. Tienes 90 minutos y la lección de hoy se construye directamente sobre ese proyecto.',
    q: '¿Qué te pide hacer el checkpoint aquí?',
    opts: [
      'Re-explicar los conceptos de la semana pasada a todo el grupo para que nadie se quede atrás',
      'Verificar y reparar el punto de partida — poner a esos dos en un proyecto funcional (plantilla de respaldo si hace falta) sin re-enseñar conceptos, y continuar',
      'Que esos dos estudiantes observen a un compañero durante el resto de la lección',
      'Saltar la lección planeada de hoy y reconstruir en grupo el proyecto de la semana pasada'
    ],
    c: 1,
    fb: 'El checkpoint es técnico, no conceptual: <strong>¿el proyecto anterior abre y funciona?</strong> Los conceptos no se re-explican. Las plantillas de respaldo existen en cada curso precisamente para que nadie quede varado y nunca tengas que "salvar" un proyecto en pánico.' },

  { type: 'open',
    ctx: 'Una estudiante de tu grupo ha asistido a todas las clases de las últimas tres semanas. Pero no ha publicado nada en Kodland Sparks desde el primer módulo, y sus últimas cuatro actividades no tienen Enviar.',
    q: '¿Cuál es tu lectura de esta situación, y qué harás en la próxima lección? Sé concreto sobre las acciones que tomarías.',
    min: 180,
    model: 'Una respuesta sólida cubre: <ul><li><strong>La lectura:</strong> la asistencia se ve sana, pero las dos señales más tempranas de desconexión están encendidas. La producción se detiene antes que la asistencia — esta estudiante está en riesgo ahora, no después.</li><li>Distinguir las dos causas posibles: <em>desconexión</em> frente a un <em>bloqueo técnico</em> (puede que no sepa publicar, o que su proyecto esté roto). No asumir motivación antes de revisar la mecánica.</li><li><strong>En la próxima lección, en concreto:</strong> revisar que su proyecto abra durante el checkpoint; acompañarla personalmente por el flujo de publicación en Sparks; asegurarte de que haga clic en Enviar antes de cerrar la clase.</li><li>Usar la narrativa y el showcase entre pares para reconectarla: una reacción o una revisión específica de un compañero sobre su trabajo.</li><li>Hacer del recordatorio de Enviar parte de la rutina de cierre para todo el grupo, no solo para ella.</li></ul>',
    fb: 'Compara tu respuesta con el modelo de abajo.' },

  { type: 'mcq',
    ctx: 'Estás cerrando tu lección y estás por decirles a tus estudiantes: <em>"De tarea, hagan el ejercicio 4 de la hoja de trabajo — practica los mismos bloques que usamos hoy."</em>',
    q: '¿Por qué esto no encaja con el nuevo modelo?',
    opts: [
      'No deberías asignar tarea en estos cursos',
      'La tarea se reformula como la siguiente versión o iteración del mismo proyecto que tu estudiante ya publicó, no como un ejercicio aparte',
      'La tarea debería generarla el AI Mentor, no elegirla tú',
      'El ejercicio 4 debería hacerse en clase, ya que teoría y práctica están fusionadas'
    ],
    c: 1,
    fb: 'La tarea continúa el <strong>mismo proyecto</strong> que tu estudiante ya publicó: la siguiente iteración, o una misión construida sobre lo que acaba de aprender. Un ejercicio suelto en una hoja rompe el hilo y el portafolio que está construyendo.' }
]
},

/* ---------------------------------------------------------- G4 */
{
  id: 'g4', kind: 'general', num: 'Módulo principal 4', emoji: '🤖', color: '#A855F7',
  title: 'Introducción a los prompts para tutores',
  desc: 'La única habilidad realmente nueva de estos cursos. No el lado técnico de la IA, sino cómo escribir un prompt y cómo ayudar a un estudiante a escribir el suyo.',
  meta: '5 preguntas de formato mixto',
  chips: ['✍️ Escribir prompts', '🐞 Depurar con IA', '🎨 Imagen y video'],
  objective: 'Saber lo suficiente sobre prompts para guiar a tus estudiantes mientras escriben los suyos en clase. Se trata de habilidad práctica, no de teoría técnica.',
  cards: [
    { type: 'hi', ic: '💡', h: 'Por qué existe este módulo', p: 'Estos nuevos cursos no te exigen mucho en cuanto a conocimiento nuevo de la materia. El único área realmente nueva es la <strong>IA</strong> — y aunque hay tutores que ya se manejan bien con ella, hay otros que la usan muy poco, o la usan de formas que no le sirven al estudiante. Este módulo es la base común.' },

    { type: 'h', ic: '🧠', t: 'Conocer la IA' },
    { type: 'text', p: 'La inteligencia artificial que usamos en nuestras clases — AI Buddy y las herramientas dentro de Kodland Sparks — funciona con instrucciones escritas en lenguaje natural, llamadas <strong>prompts</strong>. Mejor prompt, mejor resultado obtiene el estudiante.' },
    { type: 'text', p: 'Como tutor no necesitas ser un experto técnico en IA. Sí necesitas entender lo básico, para poder guiar a tus estudiantes mientras escriben sus propios prompts durante la clase.' },

    { type: 'h', ic: '❓', t: '¿Qué es un prompt?' },
    { type: 'text', p: 'Un prompt es la instrucción que le damos a una IA para que genere un resultado: texto, código, una imagen, un video. Es como darle instrucciones a alguien que no conoce nada del contexto de tu proyecto: <strong>cuanto más claras y específicas sean las instrucciones, más cerca estará el resultado de lo que realmente querías.</strong>' },
    { type: 'ba',
      beforeLbl: 'Un prompt malo',
      before: 'Produce resultados genéricos o incorrectos. El estudiante termina aceptando algo que no quería, o empezando de cero otra vez.',
      afterLbl: 'Un prompt bueno',
      after: 'Produce resultados útiles y precisos que son <strong>fáciles de ajustar</strong>. Esa última parte es la más importante: un resultado que puedes corregir vale más que uno que tienes que reemplazar.'
    },

    { type: 'h', ic: '🧩', t: '¿Qué debe incluir un buen prompt?' },
    { type: 'iclist', p: 'Un prompt sólido generalmente responde estas cuatro preguntas:', items: [
      { ic: '🎬', t: '<strong>Contexto</strong> — ¿para qué es esto? ¿Quién lo va a usar?' },
      { ic: '🎯', t: '<strong>Objetivo</strong> — ¿qué quieres lograr exactamente?' },
      { ic: '📐', t: '<strong>Detalles específicos</strong> — estilo, formato, tono, restricciones. Por ejemplo: "en 3 oraciones", "usando Python", "estilo cartoon".' },
      { ic: '🖼', t: '<strong>Ejemplos</strong>, cuando apliquen — mostrar un ejemplo ayuda a que la IA entienda mejor lo que se espera.' }
    ]},
    { type: 'twocol',
      left:  { ic: '✅', h: 'Suficientemente específico', items: ['"Crea un juego simple en Scratch donde un gato esquiva obstáculos que caen, con un puntaje visible y 3 vidas."'] },
      right: { ic: '❌', h: 'Demasiado vago', items: ['"Hazme un juego."'] }
    },

    { type: 'h', ic: '💻', t: 'Consejos para prompts que generan código' },
    { type: 'iclist', items: [
      { ic: '🏷', t: '<strong>Nombra el lenguaje o la plataforma</strong> — Python, HTML, Scratch, Roblox, etc.' },
      { ic: '👣', t: '<strong>Describe el comportamiento esperado paso a paso</strong>, no solo el resultado final.' },
      { ic: '💬', t: '<strong>Pide que el código venga comentado</strong>, así es más fácil de leer y de explicar en clase.' },
      { ic: '🔧', t: 'Si algo no funciona, <strong>no reescribas todo el prompt</strong>. Pídele a la IA que corrija el error específico, mencionando qué pasó.' },
      { ic: '🧪', t: '<strong>Anima a los estudiantes a probar y entender el código</strong>, no solo a copiarlo.' }
    ]},

    { type: 'h', ic: '🎨', t: 'Consejos para prompts que generan imagen y video' },
    { type: 'iclist', items: [
      { ic: '🖌', t: '<strong>Describe el sujeto principal, el estilo visual</strong> (realista, cartoon, pixel art…) <strong>y el escenario o fondo.</strong>' },
      { ic: '🌈', t: '<strong>Menciona colores, iluminación o ambiente</strong> cuando importen para el proyecto.' },
      { ic: '📏', t: '<strong>Sé específico con el formato</strong> — vertical, horizontal, cuadrado — si el proyecto lo requiere.' },
      { ic: '🔁', t: 'Si el primer resultado no es lo que esperabas, <strong>ajusta una variable a la vez</strong> (solo el color, o solo el estilo) para poder ver qué cambió realmente el resultado.' }
    ]},

    { type: 'h', ic: '⚠️', t: 'Errores comunes' },
    { type: 'iclist', items: [
      { ic: '🌫', t: '<strong>Ser demasiado vago.</strong> "Hazlo más bonito" no le da a la IA nada con lo que trabajar.' },
      { ic: '📚', t: '<strong>Pedir demasiado de una vez.</strong> Divide un proyecto complejo en varios prompts más pequeños.' },
      { ic: '🔍', t: '<strong>No revisar el resultado.</strong> La IA se equivoca y puede generar contenido incorrecto: revisa siempre antes de usarlo.' },
      { ic: '🔂', t: '<strong>No iterar.</strong> El primer resultado casi nunca es el final. Ajustar y volver a pedir es parte normal del proceso.' },
      { ic: '🧭', t: '<strong>Olvidar el contexto del proyecto.</strong> Un prompt sin contexto produce resultados genéricos que no encajan con lo que el estudiante está construyendo.' }
    ]},
    { type: 'good', t: 'Fíjate cuánto de esto se parece a lo que ya haces como tutor: un cambio a la vez, describe el comportamiento que esperas, prueba antes de confiar, e itera en vez de empezar de nuevo. Escribir prompts no es una habilidad aparte: es el mismo hábito de depuración, apuntado a otra herramienta.' }
  ],
  quiz: [
    { type: 'mcq',
      ctx: 'Estás ayudando a un estudiante a convertir su idea de juego en Scratch en un prompt.',
      q: '¿Cuál prompt tiene más probabilidad de dar un resultado usable en el primer intento?',
      opts: [
        '"Haz un juego de un gato con obstáculos, parecido a los juegos de endless runner, usando buenos principios de diseño de juegos."',
        '"Crea un juego en Scratch: un sprite de gato se mueve izquierda/derecha con las flechas, los obstáculos caen desde arriba a velocidad creciente, el puntaje sube cada segundo sobrevivido, el juego termina tras 3 colisiones."',
        '"Haz un juego divertido y entretenido para un niño de 8 años que le enseñe sobre obstáculos y supervivencia, parecido a Flappy Bird pero original."',
        '"Crea un juego 2D en Scratch con reglas claras, un sistema de puntaje y dificultad creciente con el tiempo."'
      ], c: 1,
      fb: 'Solo ese tiene mecánicas concretas y sin ambigüedad: movimiento, comportamiento de aparición, disparador del puntaje, condición de fin. Los otros <em>suenan</em> específicos pero se apoyan en términos subjetivos — "buenos principios de diseño", "divertido y entretenido", "reglas claras" — que la IA tiene que interpretar por su cuenta.' },

    { type: 'mcq',
      ctx: 'El primer prompt de imagen de un estudiante produjo un personaje con la paleta de colores equivocada. Todo lo demás — pose, estilo, fondo — salió correcto.',
      q: '¿Cuál es el mejor siguiente paso?',
      opts: [
        'Reescribir todo el prompt desde cero con más detalle en general, para no repetir el mismo error',
        'Volver a ejecutar exactamente el mismo prompt, ya que la salida de la IA tiene aleatoriedad y un segundo intento suele arreglarlo',
        'Enviar un prompt de seguimiento que cambie solo la paleta de colores, manteniendo igual el resto de la descripción',
        'Agregar varios adjetivos extra describiendo el ambiente deseado, para que la IA tenga más contexto'
      ], c: 2,
      fb: 'Aislar la única variable que estuvo mal es más rápido y más confiable que empezar de nuevo, que confiar en la aleatoriedad, o que agregar detalle no relacionado que no ataca el problema real.' },

    { type: 'mcq',
      ctx: 'Estás ayudando a un estudiante de 13+ a depurar una función de Python usando IA.',
      q: '¿Cuál prompt refleja el enfoque de diagnóstico más efectivo?',
      opts: [
        '"Este código no funciona, arréglalo por favor: [código]"',
        '"Esta función debería devolver el promedio de una lista pero devuelve None cuando la lista tiene un solo elemento. Aquí está el código: [código]. ¿Qué está causando que falle este caso específico?"',
        '"Reescribe este código con mejores prácticas y asegúrate de que funcione: [código]"',
        '"Explica qué está mal con este código y dame una versión corregida: [código]"'
      ], c: 1,
      fb: 'Nombra el comportamiento esperado exacto, la falla observada exacta y el caso límite específico, así la IA puede apuntar al bug real en vez de adivinar el alcance o reescribir más de lo necesario.' },

    { type: 'mcq',
      ctx: 'Dos tutores escriben prompts para la misma tarea de generación de video. El tutor A escribe un solo prompt largo y detallado que cubre estilo, sujeto y fondo de una vez. El tutor B escribe primero un prompt más corto, revisa el resultado y después ajusta.',
      q: '¿Cuál afirmación es la más precisa?',
      opts: [
        'El enfoque del tutor A siempre es mejor, porque más detalle desde el inicio reduce la cantidad de iteraciones necesarias',
        'El enfoque del tutor B siempre es mejor, porque los prompts más cortos son intrínsecamente más fáciles de procesar para la IA',
        'Cualquiera puede funcionar, pero el enfoque iterativo del tutor B hace más fácil identificar qué detalle específico causó un resultado no deseado',
        'Ninguno de los dos enfoques importa, ya que la calidad final depende solo del modelo de IA que se use, no del prompt'
      ], c: 2,
      fb: 'El principio central de este módulo es iterar y aislar variables. El detalle por sí solo no garantiza el éxito, e iterar hace la relación causa-efecto mucho más clara que hacer todo en un solo prompt grande.' },

    { type: 'open',
      ctx: 'Un estudiante de tu grupo quiere agregar un doble salto a su juego de plataformas. Le escribe a la IA: <em>"haz que el salto sea mejor"</em>.',
      q: 'Reescríbelo como un prompt que probablemente funcione en el primer intento. Escribe el texto real del prompt que le ayudarías a producir, y agrega una línea explicando por qué el tuyo va a funcionar mejor.',
      min: 180,
      model: 'Un prompt sólido hace la mayoría de esto: <ul><li><strong>Nombra la plataforma</strong> — "En Scratch…" — para que la IA no adivine el entorno.</li><li><strong>Indica el comportamiento exacto y su disparador:</strong> "cuando se presione la tecla espacio mientras el gato ya está en el aire, salta una segunda vez".</li><li><strong>Pone un límite:</strong> "solo una vez por caída", y "no cambies los bloques de movimiento existentes".</li><li><strong>Pide una explicación:</strong> "dime qué bloques agregaste y dónde".</li></ul><p style="margin-top:8px">Y la razón: aísla <strong>una</strong> mecánica, indica el comportamiento esperado con precisión, y limita qué se puede cambiar — así no queda nada que la IA tenga que inventar. "Haz que el salto sea mejor" le deja todas esas decisiones a la IA.</p>',
      fb: 'Compara tu respuesta con el modelo de abajo.' }
  ]
}
],

/* ============================================================
   MÓDULOS DE CURSO
   ============================================================ */
courses: [

/* ---------------------------------------------------------- 2058 */
{
  id: 'c2058', kind: 'course', bit: 1, num: 'Curso · [2058]', emoji: '🎨', color: '#EC4899',
  title: 'Creatividad Digital Nivel 2',
  desc: 'Creativia Studio — primeras 4 lecciones: animación en FlipAnim, registro en Canva, escenas con IA y publicación en Sparks.',
  meta: 'Termina con el DST final',
  chips: ['👦 10–12', '⏱ 60 min', '📚 40 lecciones'],
  objective: 'Estar listo para impartir las primeras 4 lecciones de Creatividad Digital Nivel 2, donde los estudiantes construyen un video de 3 escenas y publican su primera pieza de portafolio.',
  finalDst: { url: 'https://docs.google.com/forms/d/e/1FAIpQLSfbpeeYIT4PuhTthSQQdxx33-fJVo-sZsAmqviKv28ORLX5UQ/viewform', desc: 'Un último paso: el DST final de Creatividad Digital Nivel 2 verifica que estás listo para dar estas lecciones con un grupo real.' },
  cards: [
    { type: 'metabar', items: [
      { ic: '👦', k: 'Edad', v: '10–12' }, { ic: '⏱', k: 'Lección', v: '60 min' },
      { ic: '📚', k: 'Programa', v: '40 lecciones' }, { ic: '🌎', k: 'Región', v: 'LatAm' }
    ]},
    { type: 'text', h: 'Storytelling', ic: '🎭', p: 'Los estudiantes se convierten en jóvenes creadores de <strong>"Creativia Studio"</strong>, una agencia creativa digital donde cada módulo es un nuevo encargo de cliente: video personal, marca, cómic, animación, mundo 3D, tienda online. Terminan el curso con un portafolio profesional en Kodland Sparks.' },
    { type: 'ba',
      beforeLbl: 'Versión anterior',
      before: 'Inductivo: herramienta y teoría primero, luego proyecto desde cero. No se enseñaban habilidades de IA.',
      afterLbl: 'Esta versión',
      after: 'Deductivo: prototipo/animación terminada → exploración → construcción propia. <strong>AI Buddy y Canva AI son parte integrada de la experiencia.</strong>'
    },
    { type: 'divider' },
    { type: 'h', ic: '📖', t: 'Las primeras 4 lecciones' },
    { type: 'tabs', tabs: [
      { label: 'M1L1', cards: [
        { type: 'text', h: 'Lección 1 — Animación de tu nombre en FlipAnim', ic: '✏️', p: 'Primera clase del curso. Los estudiantes conocen al grupo y crean su primer proyecto digital: una animación GIF cuadro por cuadro con su propio nombre.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Conocimiento que debes tener', open: true, body: '<ul><li>El principio de animación cuadro por cuadro (una letra nueva = un cuadro nuevo).</li><li>Manejo básico de FlipAnim: lápiz, relleno, borrador, duplicar cuadro.</li><li><strong>BrushNinja</strong> como alternativa si FlipAnim falla.</li></ul>' },
          { ic: '🎯', h: 'Objetivos de aprendizaje', body: '<ul><li>El estudiante comprende que el movimiento surge de una secuencia de imágenes que difieren ligeramente.</li><li>Produce una animación GIF funcional y legible con su nombre.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Rol del tutor', body: '<ul><li>Mostrar el resultado final y el algoritmo principal <strong>una vez</strong>.</li><li>Generar un desafío productivo <em>antes</em> de explicar — dejar que intenten primero.</li><li>Dar solo <strong>una pista a la vez</strong>.</li><li>Priorizar que la animación <em>funcione</em> antes que el diseño se vea bonito.</li></ul>' },
          { ic: '⚙️', h: 'Aspectos técnicos', body: '<ul><li>Si FlipAnim no carga, usar BrushNinja.</li><li>El editor funciona sin registro — no se piden datos personales.</li><li><strong>Tarea para casa:</strong> preparar un correo electrónico propio o de un adulto para la siguiente clase (registro en Canva), sin compartir la contraseña con el tutor.</li></ul>' }
        ]},
        { type: 'tip', t: 'Recuérdales la tarea del correo <strong>unos días antes</strong> de la siguiente clase: es el bloqueo más común de la Lección 2.' }
      ]},
      { label: 'M1L2', cards: [
        { type: 'text', h: 'Lección 2 — Registro en Canva. Primera escena "Me llamo…"', ic: '🖼', p: 'Los estudiantes conocen Canva, crean su primer proyecto de video y arman la primera escena de su futura video-presentación usando el GIF de la Lección 1.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Conocimiento que debes tener', open: true, body: '<ul><li>El proceso de registro en Canva (o cuentas de respaldo si hay problemas técnicos).</li><li>Estructura de un proyecto de video en Canva: fondo, marcos, subidas, animar, línea de tiempo.</li><li>Cómo importar el GIF de la clase anterior.</li></ul>' },
          { ic: '📌', h: 'Notas importantes', body: '<ul><li>El registro puede generar dificultades técnicas — <strong>ten cuentas de correo de respaldo listas</strong>.</li><li>No sobrecargar con herramientas complejas de Canva.</li><li>Verificar que solo se usen elementos gratuitos.</li><li>Recordar normas de seguridad de datos personales durante el registro.</li></ul>' },
          { ic: '🎯', h: 'Objetivos de aprendizaje', body: '<ul><li>El estudiante se registra e inicia sesión en Canva.</li><li>Crea un proyecto de video con una primera escena.</li><li>Agrega el GIF de su nombre y al menos 2 elementos animados adicionales.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Rol del tutor', body: '<ul><li>Mostrar el proceso de registro y creación de proyecto <strong>una sola vez</strong>.</li><li>Dar tiempo de exploración libre antes de explicar la interfaz en detalle.</li><li>Organizar una demostración final con retroalimentación positivo y específico.</li></ul>' },
          { ic: '⚙️', h: 'Aspectos técnicos', body: '<ul><li>Proyecto de video en formato <strong>vertical</strong>.</li><li>Compartir → Cualquiera con el enlace → Ver → Copiar enlace.</li><li>Activar revisión manual con puntuación máxima mayor a cero antes de la actividad de entrega.</li></ul>' }
        ]}
      ]},
      { label: 'M1L3', cards: [
        { type: 'text', h: 'Lección 3 — Escena de intereses con avatar/foto y elementos de IA', ic: '🤖', p: 'Los estudiantes crean la segunda escena del video usando una foto autorizada o un avatar, generan una versión editada con IA (quitar fondo), y animan un efecto de "apertura de cabeza" con stickers de sus intereses.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Conocimiento que debes tener', open: true, body: '<ul><li>Cómo subir una imagen (Subidos).</li><li>Cómo usar las apps de IA integradas en Canva para eliminar el fondo.</li><li>Orden correcto de capas (nube detrás del personaje pero delante del fondo).</li><li>Atajos de deshacer (Ctrl/Cmd + Z).</li></ul>' },
          { ic: '📌', h: 'Notas importantes', body: '<ul><li>Tener un <strong>avatar neutral de respaldo</strong> si el estudiante no trae su recurso.</li><li>No iniciar muchas generaciones de IA seguidas — los créditos gratuitos son limitados.</li><li>Revisar que la imagen no contenga datos personales ni salga del encuadre.</li></ul>' },
          { ic: '🎯', h: 'Objetivos de aprendizaje', body: '<ul><li>El estudiante integra su recurso personal editado con IA.</li><li>Mantiene el estilo visual de la escena 1.</li><li>Agrega stickers relacionados con sus propios intereses, con aparición animada.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Rol del tutor', body: '<ul><li>Mostrar el flujo técnico <strong>una sola vez</strong> y dejar que el estudiante experimente.</li><li>Dar retroalimentación con la fórmula: <strong>fortaleza específica → pregunta para mejorar → apoyo</strong>.</li><li><strong>No corregir el proyecto en lugar del estudiante.</strong></li></ul>' },
          { ic: '⚙️', h: 'Aspectos técnicos', body: '<ul><li>Herramientas de recorte para separar el avatar en dos partes (apertura de cabeza).</li><li>Verificar que ambas partes conserven el mismo tamaño.</li><li>Recordar la prohibición de compartir fotos con datos personales.</li></ul>' }
        ]}
      ]},
      { label: 'M1L4', cards: [
        { type: 'text', h: 'Lección 4 — Música, exportación y publicación en Kodland Sparks', ic: '🎵', p: 'Última lección del módulo. Se agrega música/efectos de sonido al video completo, se exporta como MP4, y se publica el proyecto final como la primera pieza del portafolio en Kodland Sparks.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Conocimiento que debes tener', open: true, body: '<ul><li>Cómo agregar y ajustar una pista de audio en la línea de tiempo de Canva.</li><li>Proceso completo de exportación (Archivo → Descargar → MP4).</li><li>Flujo de publicación en Kodland Sparks (tipo "Embed", visibilidad, copiar enlace de la tarjeta publicada).</li></ul>' },
          { ic: '📌', h: 'Notas importantes', body: '<ul><li>Existe una <strong>versión simplificada</strong> (solo música + 1 efecto de sonido) si falta tiempo.</li><li>No cerrar Canva antes de que termine el procesamiento de la exportación.</li><li>El permiso para usar el trabajo en publicidad de Kodland debe ser siempre <strong>voluntario, nunca forzado</strong>.</li></ul>' },
          { ic: '🎯', h: 'Objetivos de aprendizaje', body: '<ul><li>El video final tiene las 3 escenas, música y un cierre legible.</li><li>Se descarga correctamente y se publica en Sparks con enlace funcional entregado.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Rol del tutor', body: '<ul><li>Revisar el proyecto en grupo antes de publicar.</li><li>Guiar el proceso de publicación paso a paso.</li><li>Fomentar retroalimentación entre pares <strong>específica</strong> (música, animación o final), no genérica ("qué bonito").</li></ul>' },
          { ic: '⚙️', h: 'Aspectos técnicos', body: '<ul><li>Verificar que todas las páginas se hayan descargado y el video suene con audio.</li><li>En Sparks, revisar que el estudiante haya explorado su perfil y mencione al menos 2 funciones de la plataforma antes de publicar.</li></ul>' }
        ]},
        { type: 'link', ic: '⚡', href: 'https://portfolio.kodland.org/feed', t: 'Feed de Kodland Sparks', d: 'Donde se publicará esta primera pieza del portafolio' }
      ]}
    ]},
    { type: 'divider' },
    { type: 'h', ic: '🔍', t: 'Repasa las lecciones antes del DST' },
    { type: 'text', p: 'Antes de hacer el DST, abre el curso en Back Office y recorre las cuatro lecciones a tu propio ritmo: ahí están todas las tarjetas de actividad y las notas del profesor. Nada de esto tiene tiempo límite, así que tómate el que necesites.' },
    { type: 'link', ic: '📘', href: 'https://bo.kodland.org/courses/2058/?tab=2&lessonId=41764', t: 'Abrir el curso en Back Office', d: '[2058] Creatividad Digital Nivel 2 — ve directo a la lección y sus notas del profesor — haz clic aquí para repasar cada lección antes de hacer el DST' }
  ]
},

/* ---------------------------------------------------------- 2063 */
{
  id: 'c2063', kind: 'course', bit: 8, num: 'Curso · [2063]', emoji: '🧪', color: '#8B5CF6',
  title: 'Creación digital: Nivel principiante',
  desc: 'El laboratorio creativo secreto — primeras 4 lecciones en Scratch: Dance Party, el Guardián del Portal y el festival de lanzamiento.',
  meta: 'Termina con el DST final',
  chips: ['🧒 8–9', '⏱ 60 min', '📚 40 lecciones'],
  objective: 'Estar listo para impartir las primeras 4 lecciones de Creación digital: Nivel principiante, donde niños de 8–9 años pasan de un prototipo funcional a su propio juego publicado.',
  finalDst: { url: 'https://docs.google.com/forms/d/e/1FAIpQLSc5iDl6GgzVRWg-Cpp4nE1hSRn9_pMD2YSmKG4kvoHTQ0NogQ/viewform', desc: 'Un último paso: el DST final de Creación digital: Nivel principiante verifica que estás listo para dar estas lecciones con un grupo real.' },
  cards: [
    { type: 'metabar', items: [
      { ic: '🧒', k: 'Edad', v: '8–9' }, { ic: '⏱', k: 'Lección', v: '60 min' },
      { ic: '📚', k: 'Programa', v: '40 lecciones' }, { ic: '🌎', k: 'Región', v: 'LatAm' }
    ]},
    { type: 'text', h: 'Storytelling', ic: '🎭', p: 'Los estudiantes entran al laboratorio creativo secreto <strong>"Creator Lab"</strong>. Cada proyecto es una misión, y <strong>AI Buddy</strong> los acompaña con consejos rápidos, ideas creativas y checklists de autoevaluación.' },
    { type: 'ba',
      beforeLbl: 'Curso Scratch anterior',
      before: 'Inductivo: herramienta y conceptos primero, luego el proyecto. No se enseñaban habilidades de IA.',
      afterLbl: 'Esta versión',
      after: 'Deductivo: prototipo completo pero imperfecto → exploración → mejora. <strong>AI Buddy es parte integrada, con un ciclo de aprendizaje de Kodland explícito.</strong>'
    },
    { type: 'warn', t: 'Este es el grupo de edad <strong>más joven</strong> de los cuatro cursos. Aplica el test inverso: el proyecto debe seguir siendo 100% alcanzable y significativo <em>sin</em> IA. Protege el sentimiento de "yo lo hice".' },
    { type: 'divider' },
    { type: 'h', ic: '📖', t: 'Las primeras 4 lecciones' },
    { type: 'tabs', tabs: [
      { label: 'M1L1', cards: [
        { type: 'text', h: 'Lección 1 — Dance Party: damos vida al escenario', ic: '💃', p: 'Primera clase del programa. Los estudiantes exploran un prototipo ya funcional en Scratch (personaje que baila con música) y lo personalizan: eligen personaje y música, generan un fondo con IA, y programan al menos 2 reacciones a distintas teclas.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Conocimiento que debes tener', open: true, body: '<ul><li>Bloques básicos de eventos, movimiento, apariencia y sonido en Scratch.</li><li>Cómo cargar un proyecto <code>.sb3</code> en Creator Lab — <strong>vía "Upload", nunca doble clic</strong>.</li><li>Uso del Sandbox de IA para generar un fondo (prompt → descargar PNG → subir a Scratch).</li></ul>' },
          { ic: '📌', h: 'Notas importantes', body: '<ul><li><strong>No se enseñan variables, bucles ni condiciones complejas todavía</strong> — la lección estrecha el foco a propósito.</li><li>Los errores (bloques mal armados, no encontrar guardar) son material normal de aprendizaje, no fracasos.</li><li>La plantilla ya trae los bloques necesarios: no hay que buscarlos en las categorías.</li></ul>' },
          { ic: '🎯', h: 'Objetivos de aprendizaje', body: '<ul><li>El estudiante comprende la relación <strong>evento → acción → resultado</strong>.</li><li>Personaliza el baile modificando valores de movimiento.</li><li>Agrega un fondo generado por IA.</li><li>Puede explicar con sus propias palabras al menos una relación evento-acción-resultado.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Rol del tutor', body: '<ul><li>Mostrar <strong>el resultado final primero</strong> (el espectáculo terminado) y guiar la exploración antes de explicar bloques.</li><li>Dar solo pistas puntuales — <strong>nunca resolver el bloque en lugar del estudiante</strong>.</li><li>Cerrar con desfile de proyectos y retroalimentación de AI Buddy (una fortaleza + una idea de mejora).</li></ul>' },
          { ic: '⚙️', h: 'Aspectos técnicos', body: '<ul><li>El fondo con IA debe estar libre de personajes y con espacio central para el personaje.</li><li><strong>Publicar en Sparks y enviar el enlace en la plataforma de Kodland son pasos distintos.</strong></li><li>Recordar reglas de seguridad de datos personales.</li></ul>' }
        ]}
      ]},
      { label: 'M1L2', cards: [
        { type: 'text', h: 'Lección 2 — El Guardián del Portal: héroe y cristales', ic: '💎', p: 'Los estudiantes comienzan un proyecto nuevo (plantilla distinta a Dance Party): un héroe que recolecta 3 cristales con un puntaje visible. El peligro, la llave y el portal se dejan para la siguiente lección.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Conocimiento que debes tener', open: true, body: '<ul><li>Variables (el contador de cristales).</li><li>Condición de contacto (tocar objeto → sumar → sonido → desaparecer).</li><li>Estructura <code>if</code>.</li><li>El <strong>único</strong> uso de IA en esta lección es generar la imagen del cristal.</li></ul>' },
          { ic: '📌', h: 'Notas importantes', body: '<ul><li>Es un <strong>proyecto nuevo</strong>, no el de Dance Party — verifica que todos carguen el archivo correcto antes de avanzar.</li><li>Un nuevo inicio (bandera verde) debe devolver al héroe a su posición y el puntaje a cero.</li><li>No toques peligro, llave ni portal todavía.</li></ul>' },
          { ic: '🎯', h: 'Objetivos de aprendizaje', body: '<ul><li>El estudiante entiende que todo juego tiene un objetivo, una regla y un progreso visible.</li><li>Arma la mecánica de recolección en <strong>3 niveles crecientes de autonomía</strong>: cristal 1 (conectar bloques ya armados), cristal 2 (completar lo que falta), cristal 3 (armar la secuencia por su cuenta).</li></ul>' },
          { ic: '🧑‍🏫', h: 'Rol del tutor', body: '<ul><li>Mostrar <strong>una sola vez</strong> dónde unir los bloques del primer cristal, luego retirarte progresivamente.</li><li>Dejar que el estudiante arme el tercer cristal <strong>sin ayuda</strong> antes de intervenir con preguntas orientadoras.</li><li>Probar el sistema completo (0→1→2→3→reinicio→0) antes de publicar.</li></ul>' },
          { ic: '⚙️', h: 'Aspectos técnicos', body: '<ul><li>El disfraz del cristal generado con IA debe llevar <strong>fondo transparente</strong> y tamaño configurado al <strong>25%</strong>.</li><li>Verificar que el script de inicio incluya tanto la posición del héroe como el reinicio del puntaje a 0.</li></ul>' }
        ]}
      ]},
      { label: 'M1L3', cards: [
        { type: 'text', h: 'Lección 3 — Desafío del portal: peligro, llave y portal', ic: '🚪', p: 'Continúa el mismo proyecto de la Lección 2. Se agrega un peligro (Danger) con reacción al contacto, una llave que aparece solo tras recolectar los 3 cristales, y un portal que abre una pantalla de victoria (WIN) vacía.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Conocimiento que debes tener', open: true, body: '<ul><li>Mensajes entre sprites (enviar/recibir).</li><li>Condiciones compuestas (ej. <code>Crystals &gt; 2</code>).</li><li>Cambio de fondo (switch backdrop).</li><li>De nuevo, un <strong>único</strong> paso con IA (la imagen del peligro).</li></ul>' },
          { ic: '📌', h: 'Notas importantes', body: '<ul><li>Mientras el portal está oculto <strong>no debe</strong> reaccionar al tocarlo — la transición a WIN se configura en un paso aparte.</li><li>La pantalla WIN se deja <strong>vacía intencionalmente</strong> (se decora en la Lección 4).</li><li>Hay plantilla de respaldo disponible si el proyecto se pierde.</li></ul>' },
          { ic: '🎯', h: 'Objetivos de aprendizaje', body: '<ul><li>El estudiante completa el recorrido entero sin ayuda: inicio → 3 cristales → llave → portal → WIN.</li><li>Aprende a equilibrar la dificultad del juego <strong>cambiando la posición de los objetos, no el código</strong>.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Rol del tutor', body: '<ul><li>Guiar la <strong>prueba completa en voz alta</strong> del sistema antes de cerrar la clase.</li><li>Dejar que el estudiante decida dónde reubicar peligro o llave para ajustar la dificultad (sin agregar mecánicas nuevas).</li><li>Recoger retroalimentación de pares sobre la dificultad del juego.</li></ul>' },
          { ic: '⚙️', h: 'Aspectos técnicos', body: '<ul><li>El mensaje que envía la llave y el que recibe el portal deben <strong>coincidir exactamente</strong>.</li><li>No diseñar aún la pantalla WIN — solo el fondo vacío.</li></ul>' }
        ]}
      ]},
      { label: 'M1L4', cards: [
        { type: 'text', h: 'Lección 4 — Cierre del módulo: personalización final y publicación', ic: '🎉', p: 'Última lección del módulo. Se personaliza la pantalla WIN con un fondo generado por IA y una frase de victoria (con bloque <code>Decir</code> o texto a voz), se agrega un detalle único adicional, se hace un checklist final y se publica la versión definitiva con un mini-festival de cierre.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Conocimiento que debes tener', open: true, body: '<ul><li>Diferencia entre el bloque <code>Decir</code> y <strong>Texto a Voz</strong> — usar solo uno, nunca ambos.</li><li>Backdrops generados con IA.</li><li>Checklist de verificación antes de publicar (sin agregar código nuevo, solo depurar).</li></ul>' },
          { ic: '📌', h: 'Notas importantes', body: '<ul><li><strong>Un solo backdrop con IA</strong> en esta lección (límite de uso).</li><li>No modificar la lógica de Key ni Portal, solo agregar el detalle final.</li><li>Este es el cierre del primer ciclo completo del proyecto: <strong>vale la pena celebrarlo explícitamente con el grupo</strong>.</li></ul>' },
          { ic: '🎯', h: 'Objetivos de aprendizaje', body: '<ul><li>El estudiante puede nombrar sus <strong>3 decisiones personales</strong> del módulo completo (fondo, frase de victoria, detalle único).</li><li>Entrega un enlace final funcional con el recorrido completo hasta WIN.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Rol del tutor', body: '<ul><li>Guiar el checklist sin agregar funcionalidad nueva.</li><li>Entregar un <strong>"Iteration Award"</strong> por estilo o detalle único, <strong>sin comparar proyectos</strong> entre sí.</li><li>Cerrar con una reflexión de todo el módulo, no solo de la clase de hoy.</li></ul>' },
          { ic: '⚙️', h: 'Aspectos técnicos', body: '<ul><li>El bloque de frase de victoria va en el <strong>sprite Portal</strong>, justo después del cambio de fondo a WIN — <strong>no en el Stage</strong>.</li><li>Confirmar la publicación final y el envío del enlace actualizado.</li></ul>' }
        ]}
      ]}
    ]},
    { type: 'divider' },
    { type: 'h', ic: '🔍', t: 'Repasa las lecciones antes del DST' },
    { type: 'text', p: 'Antes de hacer el DST, abre el curso en Back Office y recorre las cuatro lecciones a tu propio ritmo: ahí están todas las tarjetas de actividad y las notas del profesor. Nada de esto tiene tiempo límite, así que tómate el que necesites.' },
    { type: 'link', ic: '📘', href: 'https://bo.kodland.org/courses/2063?tab=2&lessonId=41776', t: 'Abrir el curso en Back Office', d: '[2063] Creación digital: Nivel principiante — ve directo a la lección y sus notas del profesor — haz clic aquí para repasar cada lección antes de hacer el DST' }
  ]
},

/* ---------------------------------------------------------- 2060 */
{
  id: 'c2060', kind: 'course', bit: 4, num: 'Curso · [2060]', emoji: '🎮', color: '#F97316',
  title: 'Creación digital: Nivel intermedio',
  desc: 'Arcade Remix: Impulso Neón — primeras 4 lecciones transformando una plantilla gris en el juego publicado del estudiante.',
  meta: 'Termina con el DST final',
  chips: ['👦 10–12', '⏱ 90 min', '📚 40 lecciones'],
  objective: 'Estar listo para impartir las primeras 4 lecciones de Creación digital: Nivel intermedio, donde los estudiantes remezclan una plantilla runner en MakeCode Arcade y publican una beta en Kodland Sparks.',
  finalDst: { url: 'https://docs.google.com/forms/d/e/1FAIpQLSdNUpFux4fn7NKFvXH1-MkxbAEZr6yoZfWmxEp3uin6l6PhXA/viewform', desc: 'Un último paso: el DST final de Creación digital: Nivel intermedio verifica que estás listo para dar estas lecciones con un grupo real.' },
  cards: [
    { type: 'metabar', items: [
      { ic: '👦', k: 'Edad', v: '10–12' }, { ic: '⏱', k: 'Lección', v: '90 min' },
      { ic: '📚', k: 'Programa', v: '40 lecciones' }, { ic: '🌎', k: 'Región', v: 'LatAm' }
    ]},
    { type: 'text', h: 'Storytelling', ic: '🎭', p: 'Los estudiantes entran a <strong>"Creator Lab"</strong>, un estudio digital, y transforman una plantilla gris de un juego "runner" en su propio juego a lo largo de las 4 lecciones del módulo <strong>"Arcade Remix: Impulso neón"</strong>.' },
    { type: 'ba',
      beforeLbl: 'Cursos anteriores',
      before: 'Teoría primero, código desde cero, IA mencionada solo de pasada.',
      afterLbl: 'Esta versión',
      after: 'Metodología deductiva desde la primera clase (probar la plantilla antes de tocar el código). <strong>La IA se usa en dosis puntuales — una por lección — y siempre con un límite claro de alcance. Nunca decide la mecánica del juego.</strong>'
    },
    { type: 'good', t: 'Test de apalancamiento para esta edad: sin IA el proyecto seguiría siendo posible, pero visiblemente más pobre o pequeño dentro del tiempo de clase. La IA sube el techo de la idea del estudiante — es un compañero de sparring, no el autor.' },
    { type: 'divider' },
    { type: 'h', ic: '📖', t: 'Las primeras 4 lecciones' },
    { type: 'tabs', tabs: [
      { label: 'M1L1', cards: [
        { type: 'text', h: 'Lección 1 — Arcade Remix: impulso neón (remix visual)', ic: '🌈', p: 'Primera clase del módulo. Se transforma una plantilla gris de un juego runner personalizando el personaje (generado con IA), el fondo y el ritmo del juego.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Conocimiento que debes tener', open: true, body: '<ul><li>Cómo usar el convertidor de PNG a sprite (tamaño <strong>24×24</strong>, nombre <code>hero</code>).</li><li>El bloque <code>hero.setImage</code>.</li><li>Los bloques <code>set background color</code> y <code>every</code> (para el ritmo).</li><li>Acceso al Ayudante de IA vía sign-in → <strong>Sign with Kodland</strong>.</li></ul>' },
          { ic: '📌', h: 'Notas importantes', body: '<ul><li><strong>No usar "Sign in" en MakeCode durante la prueba inicial</strong> — el acceso a cuenta es parte de la tarea para casa.</li><li>No agregar puntaje, Game Over, WIN ni nuevos enemigos en esta lección.</li><li>La IA se usa <strong>solo para la imagen del personaje</strong>, con límite estricto de alcance: un solo personaje, vista lateral, fondo transparente.</li></ul>' },
          { ic: '🎯', h: 'Objetivos de aprendizaje', body: '<ul><li>El personaje del estudiante aparece en el simulador vía <code>setImage</code>.</li><li>El color de fondo es distinto al original.</li><li>El intervalo de ritmo cambia de 1200 a 900 o 1500.</li><li>El proyecto se ejecuta y se comparte correctamente.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Rol del tutor', body: '<ul><li>Mostrar la ruta mínima <strong>una sola vez</strong>: Kodland Sparks → dos tipos de IA → prompt → código → ejecutar.</li><li>Dar <strong>4 minutos de exploración libre</strong> antes de explicar la interfaz.</li><li>Cerrar con un desfile de personajes.</li></ul>' },
          { ic: '⚙️', h: 'Aspectos técnicos', body: '<ul><li>Si el convertidor integrado no carga, existe una alternativa vía Railway.</li><li><strong>Tarea para casa:</strong> crear un obstáculo de 16×16 llamado <code>block</code> e insertarlo con <code>block.setImage</code>.</li></ul>' }
        ]}
      ]},
      { label: 'M1L2', cards: [
        { type: 'text', h: 'Lección 2 — El coleccionable y el puntaje', ic: '🪙', p: 'Continúa el mismo proyecto de la Lección 1. Se agrega un objeto coleccionable (coin) y un puntaje visible en pantalla.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Conocimiento que debes tener', open: true, body: '<ul><li>Variables (<code>score</code>), bloques <code>overlap</code> y <code>destroy</code>.</li><li>Diferencia entre la <strong>IA convencional</strong> (usada aquí solo para generar ideas, no imágenes) y el <strong>Ayudante de IA</strong> como guía metodológica.</li></ul>' },
          { ic: '📌', h: 'Notas importantes', body: '<ul><li>El error más frecuente: colocar <code>coin.setImage</code> fuera de lugar, o el bloque <code>set score</code> dentro de <code>on game update</code> (hace que el puntaje se reinicie constantemente).</li><li>Comparar siempre el <code>kind</code> del <code>create</code> y del <code>overlaps</code> — <strong>deben coincidir</strong>.</li><li>Para la tarea se necesita el <strong>enlace de Sparks después de Publish</strong>, no solo el Share técnico de MakeCode.</li></ul>' },
          { ic: '🎯', h: 'Objetivos de aprendizaje', body: '<ul><li>El coleccionable aparece con su propio diseño.</li><li>El contacto suma +1 de forma estable.</li><li>El estudiante publica su <strong>primera beta en Kodland Sparks</strong>.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Rol del tutor', body: '<ul><li>Mantener el ciclo <strong>cambio → ejecución → observación</strong> después de cada bloque agregado — no dejar todo para probar al final.</li><li>Aceptar como éxito mínimo un +1 estable, sin exigir balance perfecto.</li></ul>' },
          { ic: '⚙️', h: 'Aspectos técnicos', body: '<ul><li>El puntaje se pone en cero con <strong>Advanced → Info → set score to 0</strong> al inicio del juego, <strong>no dentro de bucles</strong>.</li><li>No agregar hoy Game Over, WIN ni vidas — eso corresponde a la siguiente lección.</li></ul>' }
        ]}
      ]},
      { label: 'M1L3', cards: [
        { type: 'text', h: 'Lección 3 — Victoria y ajuste de velocidad con IA', ic: '🏁', p: 'Se agrega una condición de derrota (game over LOSE) y una condición de victoria a elegir entre 3 opciones (A, B o C), además de ajustar la velocidad del juego con ayuda de un consejo del Ayudante de IA.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Conocimiento que debes tener', open: true, body: '<ul><li>El concepto de bucle y condición en términos simples: <em>el bucle repite, la condición decide cómo termina</em>.</li><li>Diferencia entre game over LOSE y WIN.</li><li>Cómo formular un prompt de ajuste pegando todo el <strong>JavaScript</strong> del proyecto.</li></ul>' },
          { ic: '📌', h: 'Notas importantes', body: '<ul><li><strong>No colocar el bloque LOSE dentro del <code>overlaps</code> de la recolección de monedas.</strong></li><li>Dar tiempo real de práctica independiente (unos <strong>17 minutos</strong>) antes de intervenir.</li><li>Al ajustar velocidad con IA, <strong>cambiar solo un número a la vez</strong>.</li></ul>' },
          { ic: '🎯', h: 'Objetivos de aprendizaje', body: '<ul><li>El estudiante logra una condición de victoria propia y funcional.</li><li>Ajusta la velocidad de forma justificada.</li><li>Guarda el enlace de Share antes de presentar.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Rol del tutor', body: '<ul><li>Dejar que cada estudiante elija su propia forma de victoria (A, B o C) <strong>sin imponer una</strong>.</li><li>En el desfile final, mostrar las distintas formas de victoria <strong>sin comparar cuál es "mejor"</strong>.</li></ul>' },
          { ic: '⚙️', h: 'Aspectos técnicos', body: '<ul><li>Revisar que el bloque de derrota reemplace correctamente al reset original.</li><li>Recordar probar en <strong>Play</strong> después de cada cambio de velocidad.</li></ul>' }
        ]}
      ]},
      { label: 'M1L4', cards: [
        { type: 'text', h: 'Lección 4 — Mecánica propia con IA y relanzamiento', ic: '🚀', p: 'Cierre del módulo. Cada estudiante diseña una mecánica nueva propia (vidas, escudo, cambio de velocidad…) formulando un prompt específico al Ayudante de IA, actualiza la beta ya publicada en Sparks (no crea un proyecto nuevo), y participa en un mini-festival de lanzamiento.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Conocimiento que debes tener', open: true, body: '<ul><li>Cómo diferenciar un prompt vago de uno específico: <strong>una sola mecánica, contexto del juego, código completo pegado, restricciones claras</strong>.</li><li>Diferencia entre actualizar un proyecto existente (<strong>Edit</strong>) y publicarlo de nuevo desde cero (<strong>Publish project</strong>, que crea un duplicado no deseado).</li></ul>' },
          { ic: '📌', h: 'Notas importantes', body: '<ul><li><strong>Una mecánica a la vez</strong> — nunca varias simultáneas.</li><li>Siempre pegar el JavaScript <strong>completo</strong> en el prompt, no fragmentos.</li><li>Probar en Play después de cada cambio; evitar que los estudiantes creen proyectos duplicados en Sparks por accidente.</li></ul>' },
          { ic: '🎯', h: 'Objetivos de aprendizaje', body: '<ul><li>El estudiante logra una mecánica nueva funcional que puede explicar con sus propias palabras (qué agregó, cómo cambia el juego).</li><li>Relanza correctamente la misma tarjeta ya publicada del módulo completo.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Rol del tutor', body: '<ul><li>Ayudar con <strong>preguntas orientadoras</strong>, nunca resolviendo la mecánica en lugar del estudiante.</li><li>Cerrar todo el módulo (prototipo → mecánica → lanzamiento) con una celebración grupal, <strong>sin adelantar contenido del próximo módulo</strong>.</li></ul>' },
          { ic: '⚙️', h: 'Aspectos técnicos', body: '<ul><li>Al republicar, usar Share con la opción <strong>"Update existing share link"</strong> marcada.</li><li>En Sparks ir a <strong>My Projects → Edit → Project link</strong> — evitar el botón Publish project salvo la primera vez.</li></ul>' }
        ]}
      ]}
    ]},
    { type: 'divider' },
    { type: 'h', ic: '🔍', t: 'Repasa las lecciones antes del DST' },
    { type: 'text', p: 'Antes de hacer el DST, abre el curso en Back Office y recorre las cuatro lecciones a tu propio ritmo: ahí están todas las tarjetas de actividad y las notas del profesor. Nada de esto tiene tiempo límite, así que tómate el que necesites.' },
    { type: 'link', ic: '📘', href: 'https://bo.kodland.org/courses/2060', t: 'Abrir el curso en Back Office', d: '[2060] Creación digital: Nivel intermedio — ve directo a la lección y sus notas del profesor — haz clic aquí para repasar cada lección antes de hacer el DST' }
  ]
},

/* ---------------------------------------------------------- 2059 */
{
  id: 'c2059', kind: 'course', bit: 2, num: 'Curso · [2059]', emoji: '💻', color: '#2563EB',
  title: 'Creación digital: Nivel avanzado',
  desc: 'El estudio digital — primeras 4 lecciones: prototipo generado con IA, estructura de archivos, personalización visual y lógica del juego.',
  meta: 'Termina con el DST final',
  chips: ['🧑 12–17', '⏱ 90 min', '📚 40 lecciones'],
  objective: 'Estar listo para impartir las primeras 4 lecciones de Creación digital: Nivel avanzado, donde los estudiantes actúan como directores creativos orquestando la IA para construir y refinar un juego de navegador.',
  finalDst: { url: 'https://docs.google.com/forms/d/e/1FAIpQLScpx4Z-zXeY9lZX_Cv0DJU4DOb16TP9tI8YQ0JTRC6wD7Aofw/viewform', desc: 'Un último paso: el DST final de Creación digital: Nivel avanzado verifica que estás listo para dar estas lecciones con un grupo real.' },
  cards: [
    { type: 'metabar', items: [
      { ic: '🧑', k: 'Edad', v: '12–17' }, { ic: '⏱', k: 'Lección', v: '90 min' },
      { ic: '📚', k: 'Programa', v: '40 lecciones' }, { ic: '🌎', k: 'Región', v: 'LatAm' }
    ]},
    { type: 'text', h: 'Storytelling', ic: '🎭', p: 'Los estudiantes entran al estudio digital <strong>"Creación digital: Nivel avanzado"</strong> con el rol de <strong>desarrollador junior</strong>. Cada módulo es un nuevo encargo real: construir un juego, un sitio interactivo, un servicio digital.' },
    { type: 'ba',
      beforeLbl: 'Curso Python anterior',
      before: 'Inductivo: sintaxis y teoría → proyecto desde cero. La IA se mencionaba solo esporádicamente.',
      afterLbl: 'Esta versión',
      after: 'Deductivo: prototipo funcional no ideal → exploración → refinamiento. <strong>La IA es una herramienta central de aprendizaje y la alfabetización en IA/prompt engineering es un resultado educativo explícito.</strong>'
    },
    { type: 'hi', ic: '🎯', h: 'Test de ambición', p: 'A esta edad el alcance y la calidad pretendidos <strong>no son alcanzables sin IA</strong> en el tiempo dado. Quitar la IA colapsa la forma prevista del proyecto. Eso es correcto aquí — pero la regla sigue vigente: <strong>la IA propone, el autor decide.</strong>' },
    { type: 'warn', t: '<strong>Esta NO es una clase de sintaxis de HTML/CSS/JS.</strong> Los estudiantes no escriben grandes cantidades de código. Los errores y las generaciones fallidas son parte normal del desarrollo.' },
    { type: 'divider' },
    { type: 'h', ic: '📖', t: 'Las primeras 4 lecciones' },
    { type: 'tabs', tabs: [
      { label: 'M1L1', cards: [
        { type: 'text', h: 'Lección 1 — Primer prototipo de juego', ic: '⚡', p: 'Primera clase del programa. Los estudiantes usan una IA convencional para generar un juego funcional en el navegador a partir de un prompt preparado, y lo ejecutan dentro de Kodland Sparks.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Conocimiento que debes tener', open: true, body: '<ul><li>La diferencia entre la <strong>IA convencional</strong> (genera el código inicial) y el <strong>AI Mentor</strong> (orienta con preguntas, nunca escribe el código completo).</li><li>Estructura de un buen prompt: objetivo, funciones, límites, formato de respuesta.</li><li>Existe una plantilla de respaldo si la generación falla.</li></ul>' },
          { ic: '📌', h: 'Notas importantes', body: '<ul><li>Los errores y las generaciones fallidas son <strong>normales</strong>.</li><li>La personalización segura se limita a tema, título, personaje o contexto visual — <strong>no a requisitos técnicos</strong>.</li></ul>' },
          { ic: '🎯', h: 'Objetivos de aprendizaje', body: '<ul><li>El juego corre en la vista previa sin errores críticos y el personaje responde a los controles.</li><li>El estudiante distingue los 2 tipos de IA y nombra al menos una regla de seguridad al usarla.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Rol del tutor', body: '<ul><li>Guiar la ruta mínima: Kodland Sparks → funciones de las dos IAs → buen prompt → generación → copiar código → ejecutar.</li><li>Usar la plantilla de respaldo <strong>sin dramatizar</strong> si algo falla.</li></ul>' },
          { ic: '⚙️', h: 'Aspectos técnicos', body: '<ul><li>Nunca se comparten datos personales ni credenciales con el tutor.</li><li>Siempre revisar el resultado generado por la IA antes de aceptarlo.</li><li><strong>Tarea:</strong> cambiar un valor simple del código y saber revertirlo si el juego deja de funcionar.</li></ul>' }
        ]},
        { type: 'link', ic: '⚡', href: 'https://portfolio.kodland.org/feed', t: 'Kodland Sparks', d: 'Donde se ejecuta el prototipo y después se publica' }
      ]},
      { label: 'M1L2', cards: [
        { type: 'text', h: 'Lección 2 — Cómo está armado el juego', ic: '🗂', p: 'El prototipo de un solo archivo se separa en <code>index.html</code>, <code>style.css</code> y <code>script.js</code>; se localiza y ajusta el parámetro de velocidad del personaje.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Conocimiento que debes tener', open: true, body: '<ul><li>Qué contiene cada archivo: estructura, estilos, lógica.</li><li>El rol dual de la IA aquí: la <strong>IA estándar reestructura</strong> el proyecto, el <strong>AI Mentor</strong> ayuda a entender el código y ubicar el bloque correcto.</li><li>El ciclo <strong>predecir → modificar → comprobar → concluir</strong>.</li></ul>' },
          { ic: '📌', h: 'Notas importantes', body: '<ul><li>La IA estándar <strong>no debe</strong> cambiar la apariencia ni la lógica del juego, ni agregar dependencias externas.</li><li>No profundizar en teoría de HTML/CSS/JS ni en manejadores de eventos complejos.</li></ul>' },
          { ic: '🎯', h: 'Objetivos de aprendizaje', body: '<ul><li>El proyecto queda dividido en 3 archivos y sigue funcionando.</li><li>El estudiante ubica el parámetro de velocidad en <code>script.js</code>, elige su valor mediante experimentación, y explica cómo influye en el movimiento.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Rol del tutor', body: '<ul><li>Dejar que el estudiante elija el valor final de velocidad — <strong>no imponer uno "correcto"</strong>.</li><li>Verificar que el juego siga funcionando después de cada cambio importante.</li><li>Ante un error, <strong>comparar la línea modificada con la original</strong> antes de dar la respuesta.</li></ul>' },
          { ic: '⚙️', h: 'Aspectos técnicos', body: '<ul><li>Verificar que CSS y JavaScript estén conectados correctamente tras la división.</li><li>Estructura esperada: <code>index.html</code> (estructura/conexiones), <code>style.css</code> (diseño), <code>script.js</code> (movimiento y lógica).</li></ul>' }
        ]}
      ]},
      { label: 'M1L3', cards: [
        { type: 'text', h: 'Lección 3 — Personalización visual del juego', ic: '🎨', p: 'Se reemplazan los gráficos predeterminados (personaje, fondo) por recursos propios generados con IA, sin reescribir el código base.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Conocimiento que debes tener', open: true, body: '<ul><li>Cómo estructurar un prompt completo: <strong>objetivo + contexto suficiente + cambios permitidos + restricciones + petición de explicación</strong>.</li><li>Cómo ayudar a encontrar dónde se conecta un recurso visual en el código sin necesidad de analizarlo completo.</li></ul>' },
          { ic: '📌', h: 'Notas importantes', body: '<ul><li>Cuidado con que la IA haga una <strong>reescritura completa no deseada</strong> — comparar siempre las versiones antes/después.</li><li>Usar la ruta de respaldo <strong>solo después de 2 intentos genuinos</strong> y una pista de diagnóstico.</li><li>Recordar la prohibición de usar fotos o datos personales como recursos.</li></ul>' },
          { ic: '🎯', h: 'Objetivos de aprendizaje', body: '<ul><li>El nuevo personaje y/o fondo queda integrado y funcional, cumpliendo el ciclo <strong>un recurso → una ejecución → una observación</strong>.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Rol del tutor', body: '<ul><li><strong>No corregir la solicitud completa a la IA en lugar del estudiante</strong> — hacer una pregunta puntual sobre lo que falta.</li><li>Guiar hacia una <strong>sola hipótesis comprobable a la vez</strong>, nunca varios cambios simultáneos.</li></ul>' },
          { ic: '⚙️', h: 'Aspectos técnicos', body: '<ul><li>Organizar una revisión funcional con lista de verificación antes de avanzar.</li><li>Si hay un error, regresar a la última versión funcional y buscar la <strong>primera diferencia</strong> — no corregir todo de una vez.</li></ul>' }
        ]}
      ]},
      { label: 'M1L4', cards: [
        { type: 'text', h: 'Lección 4 — Lógica del juego y retroalimentación de pares', ic: '🧠', p: 'Última lección del módulo. Se agrega una mecánica lógica propia (modelo evento → condición → reacción) con ayuda <strong>exclusiva del AI Mentor</strong>, se publica el proyecto y se da retroalimentación estructurada a compañeros.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Conocimiento que debes tener', open: true, body: '<ul><li>El modelo <strong>evento → condición → reacción</strong>.</li><li>Cómo debe el estudiante formular su consulta al AI Mentor: <strong>objetivo + comportamiento actual + petición de una pista</strong> — el Mentor no entrega el código final.</li><li>Estructura de retroalimentación en 3 campos (impresión general, punto fuerte, mejora) con límite de caracteres.</li></ul>' },
          { ic: '📌', h: 'Notas importantes', body: '<ul><li><strong>Es preferible una sola mecánica estable que dos incompletas.</strong></li><li>Si el proyecto ya era inestable desde el inicio de la clase, pasar directamente a la plantilla de respaldo.</li><li>Recordar las normas de reacciones y suscripciones respetuosas entre compañeros.</li></ul>' },
          { ic: '🎯', h: 'Objetivos de aprendizaje', body: '<ul><li>La mecánica nueva funciona de forma estable y está publicada.</li><li>El estudiante da y recibe retroalimentación específica de al menos <strong>2 proyectos de compañeros</strong>.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Rol del tutor', body: '<ul><li>Mantener el ciclo <strong>cambio → ejecución → comparación → diagnóstico → corrección</strong> durante toda la práctica.</li><li>Cerrar recordando el recorrido completo del módulo (prototipo → comprensión del funcionamiento → personalización visual → lógica del juego → lanzamiento) y anunciar brevemente el siguiente módulo <strong>sin detalle</strong>.</li></ul>' },
          { ic: '⚙️', h: 'Aspectos técnicos', body: '<ul><li>En esta lección se usa <strong>exclusivamente el AI Mentor</strong>, no la IA convencional.</li><li>Los campos de retroalimentación tienen un límite de <strong>180 caracteres cada uno</strong>.</li></ul>' }
        ]}
      ]}
    ]},
    { type: 'divider' },
    { type: 'h', ic: '🔍', t: 'Repasa las lecciones antes del DST' },
    { type: 'text', p: 'Antes de hacer el DST, abre el curso en Back Office y recorre las cuatro lecciones a tu propio ritmo: ahí están todas las tarjetas de actividad y las notas del profesor. Nada de esto tiene tiempo límite, así que tómate el que necesites.' },
    { type: 'link', ic: '📘', href: 'https://bo.kodland.org/courses/2059', t: 'Abrir el curso en Back Office', d: '[2059] Creación digital: Nivel avanzado — ve directo a la lección y sus notas del profesor — haz clic aquí para repasar cada lección antes de hacer el DST' }
  ]
}
]
};
