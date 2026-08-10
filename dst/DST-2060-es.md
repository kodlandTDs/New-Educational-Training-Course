# DST Final — [2060] GameDev Creator Lab

10-12 · 90 min · Español

---

## Descripción que ve el tutor

> Este es el DST final del módulo GameDev Creator Lab del entrenamiento de tutores del Nuevo Modelo Educativo. Cubre las primeras 4 lecciones que vas a impartir.
>
> 12 preguntas puntuadas (1 punto cada una) más una sección corta de feedback. Verás tu puntaje y las respuestas correctas apenas envíes. Puntaje recomendado para aprobar: 10 / 12.

---

## Configuración sugerida

- Recopilar direcciones de correo: **activado**
- Convertir en cuestionario: **activado**, 1 punto por pregunta puntuada (12 puntos en total)
- Publicar calificación: **inmediatamente después de cada envío**
- Mostrar preguntas falladas y respuestas correctas: **activado** (esto es entrenamiento, no un examen)
- Puntaje para aprobar: **10 / 12 (83%)** — Forms no lo aplica solo, así que filtra en la hoja de respuestas
- Preguntas de feedback: **0 puntos**, y marcadas como obligatorias

---

## Sección 1 — Identificación

**Q1 — Tu nombre completo** *(respuesta corta, obligatoria)*

**Q2 — Tu correo de Kodland** *(respuesta corta, obligatoria)*

> El mismo correo con el que entras a Back Office (…@kodland.team).

---

## Sección 2 — Evaluación de conocimiento (12 preguntas, 1 punto cada una)

### Q1. Lección 1. ¿Cuál es el límite estricto de alcance del personaje generado con IA?

- A. Cualquier cantidad de personajes, en cualquier vista
- B. Debe incluir el escenario de fondo
- C. **Un solo personaje, vista lateral, fondo transparente** ✅
- D. Debe estar animado en al menos dos cuadros

> *Feedback:* Un personaje, vista lateral, fondo transparente — convertido a 24×24 y llamado hero. La IA se usa una vez por lección, siempre acotada.

### Q2. Lección 1. ¿Por qué los estudiantes no deben usar "Sign in" en MakeCode durante la prueba inicial?

- A. **El acceso a la cuenta es parte de la tarea, no de la primera prueba** ✅
- B. La cuenta se crea automáticamente la primera vez que ejecutan el proyecto
- C. Iniciar sesión desactiva el Ayudante de IA
- D. Iniciar sesión reinicia la plantilla y la deja en blanco

> *Feedback:* Entrar a la cuenta es la tarea para casa. Mantén la primera ejecución sin fricción para que la clase llegue a un resultado funcional.

### Q3. Lección 1. ¿Cuál de estas cosas pertenece a la Lección 1?

- A. Un puntaje visible
- B. Condiciones de Game Over y WIN
- C. Nuevos tipos de enemigos
- D. **Cambiar el intervalo de ritmo de 1200 a 900 o 1500** ✅

> *Feedback:* Solo el remix visual más el cambio de ritmo. Puntaje, Game Over, WIN y enemigos nuevos corresponden a lecciones posteriores — adelantarlos rompe el orden de construcción.

### Q4. Lección 2. El puntaje de un estudiante se reinicia constantemente mientras juega. ¿Cuál es la causa más probable?

- A. El sprite de la moneda tiene el kind equivocado
- B. **El bloque set score está dentro de "on game update"** ✅
- C. La variable de puntaje nunca se creó
- D. El intervalo de ritmo es demasiado rápido

> *Feedback:* El puntaje debe ponerse en 0 al inicio del juego vía Advanced → Info, nunca dentro de un bucle como "on game update".

### Q5. Lección 2. El coleccionable no suma +1 al contacto. ¿Qué revisas primero?

- A. El color de fondo
- B. El prompt de IA usado para generar la moneda
- C. El intervalo de ritmo
- D. **Que el kind del bloque create y el del bloque overlaps coincidan** ✅

> *Feedback:* Un kind que no coincide entre create y overlaps es la causa clásica. Compara siempre esos dos antes de mirar cualquier otra cosa.

### Q6. Lección 2. ¿Qué debe entregar exactamente el estudiante en la tarea?

- A. El enlace Share de MakeCode
- B. Una captura del juego funcionando
- C. **El enlace de Kodland Sparks, obtenido después de Publish** ✅
- D. El .png exportado del sprite de la moneda

> *Feedback:* El enlace de Sparks después de Publish — no solo el Share técnico de MakeCode. Ahí es donde vive realmente su primera beta.

### Q7. Lección 3. ¿Dónde NO debe colocarse el bloque LOSE?

- A. En el bloque on start
- B. **Dentro del overlaps de recolección de monedas** ✅
- C. En el bucle game update
- D. En el sprite del héroe

> *Feedback:* Nunca dentro del overlaps de recolección de monedas. Revisa además que el bloque de derrota reemplace correctamente al reset original.

### Q8. Lección 3. ¿Cuánto tiempo real de práctica independiente deben tener los estudiantes antes de que intervengas?

- A. **Unos 17 minutos** ✅
- B. Unos 5 minutos
- C. Unos 2 minutos
- D. Ninguno — guíalos continuamente

> *Feedback:* Alrededor de 17 minutos. La lucha productiva es el punto de la lección, no un accidente dentro de ella.

### Q9. Lección 3. Los estudiantes eligen una condición de victoria entre tres opciones, A, B o C. ¿Cuál es tu rol?

- A. **Dejar que cada estudiante elija la suya, y en el desfile mostrar las distintas formas sin rankearlas** ✅
- B. Recomendar la opción que produce el código más limpio
- C. Asignar opciones para que el grupo cubra las tres de forma pareja
- D. Elegir una opción para todo el grupo y simplificar la depuración

> *Feedback:* Sin imponer y sin comparar. Mostrar tres victorias distintas y válidas es justamente lo que hace que el desfile valga la pena.

### Q10. Lección 4. ¿Qué hace que un prompt sea lo bastante específico para el Ayudante de IA?

- A. Una frase corta que describa la sensación que debe generar la mecánica
- B. **Una sola mecánica, el contexto del juego, el JavaScript completo pegado, y restricciones claras** ✅
- C. Una lista de todas las mecánicas que quiere el estudiante, para que la IA elija
- D. Una captura del juego más el nombre de la mecánica

> *Feedback:* Una mecánica a la vez, con el JavaScript completo pegado en lugar de fragmentos. Los prompts vagos son la causa principal de un proyecto roto en esta lección.

### Q11. Lección 4. ¿Cómo debe republicar el estudiante su juego actualizado?

- A. Publish project de nuevo en Sparks, creando una tarjeta nueva
- B. Enviar solo el enlace Share de MakeCode
- C. **Share con "Update existing share link" marcada, y luego My Projects → Edit → Project link** ✅
- D. Descargar el archivo y subirlo manualmente

> *Feedback:* Publish project de nuevo crea un duplicado no deseado. Actualiza el enlace existente y luego edita la tarjeta que ya existe en Sparks.

### Q12. Lección 4. ¿Cómo debes cerrar el módulo?

- A. Adelantar el próximo módulo en detalle para mantener la motivación
- B. Asignar mecánicas extra como tarea de vacaciones
- C. Revisar el código de cada estudiante individualmente con el grupo mirando
- D. **Celebrar todo el recorrido — prototipo → mecánica → lanzamiento — sin adelantar el contenido del próximo módulo** ✅

> *Feedback:* Cierra todo el arco con una celebración grupal. Los adelantos detallados del próximo módulo corresponden al próximo módulo.

---

## Sección 3 — Feedback sobre este módulo (no se puntúa)

**Q13 — ¿Qué tan claro fue el módulo de entrenamiento de GameDev Creator Lab?** *(escala lineal 1–5, obligatoria)*
`1 = Confuso` … `5 = Muy claro`

**Q14 — ¿Qué tan preparado te sientes para dar las primeras 4 lecciones de GameDev Creator Lab?** *(escala lineal 1–5, obligatoria)*
`1 = Nada preparado` … `5 = Totalmente preparado`

**Q15 — ¿Qué tan útiles fueron las notas por lección (de qué trata, rol del tutor, aspectos técnicos)?** *(escala lineal 1–5, obligatoria)*
`1 = Nada útiles` … `5 = Muy útiles`

**Q16 — ¿Qué sigue sin quedarte claro de GameDev Creator Lab, o qué agregarías a este módulo?** *(párrafo, obligatoria)*

> Nombra la lección a la que te refieres — eso es lo que hace tu respuesta útil.
