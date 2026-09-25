# Sitemap y arquitectura — Landing Delfines del Sur

> Fuente de verdad de la **estructura** de la landing.
> Los datos provienen de `docs/brief.md` (v5). Este documento no agrega información: solo selecciona, ordena y jerarquiza.
> No define diseño visual (ver `DESIGN.md`) ni copy final (ver `docs/content.md`).

---

## 1. Principio narrativo

La página responde las preguntas del visitante **en el orden en que se las hace**:

> **¿Qué es esto? → ¿Hay algo para mí o para mi hijo? → ¿Cuál es, cuándo y cuánto cuesta? → ¿Puedo confiar? → Escribo por WhatsApp.**

- En los **primeros 5 segundos** (hero) el visitante ya sabe qué es, dónde está, que hay programas para todas las edades y que los planes cuestan desde $50.000 al mes.
- En el **primer scroll** se identifica con una necesidad concreta ("para mi hijo" / "para mí") y llega directo a su programa.
- La ficha del programa concentra **todo lo necesario para decidir** (edad, profesor, horarios, planes) y termina en un WhatsApp con el mensaje ya escrito.
- La confianza (equipo, seguridad, piscinas, familia, competencia) viene **después** como respaldo para quien aún duda. Algunas señales de confianza aparecen antes, en el hero y en las fichas.
- **El contacto nunca está a más de un toque:** botón flotante en móvil y botón en el header en desktop.

---

## 2. Arquitectura definitiva

**7 secciones de contenido + header y footer persistentes** (antes eran 16).

| # | Sección | Ancla | Prioridad |
|---|---|---|---|
| — | Header | — | Persistente |
| 1 | Hero | `#inicio` | Alta |
| 2 | Orientador: ¿Qué estás buscando? | `#busco` | Alta |
| 3 | Programas y horarios | `#programas` | Alta |
| 4 | Planes | `#planes` | Alta |
| 5 | La escuela (confianza) | `#escuela` | Media |
| 6 | Preguntas frecuentes | `#preguntas` | Media |
| 7 | Contacto y ubicación | `#contacto` | Alta |
| — | Footer | — | Persistente |

---

### 1. Hero — `#inicio`

- **Objetivo:** explicar en una pantalla de teléfono qué es Delfines del Sur y a quién recibe, y ofrecer los dos siguientes pasos: escribir o encontrar su programa.
- **Contenido principal:**
  - Titular con la idea de **Aprender · Crecer · Competir** y **todas las edades** (aquí vive la antigua sección 4).
  - Subtítulo: escuela de natación en Coronel, para bebés, niños, adolescentes y adultos.
  - **Datos clave**, en una fila de 3–4 elementos breves:
    - Coronel
    - Desde bebés hasta adultos
    - Piscina temperada y al aire libre
    - **Planes desde $50.000 al mes** (enlace a `#planes`)
  - Señal de confianza en una línea: "Dirigida por Cristofer Aguilera, Profesor de Educación Física y Salvavidas".
  - Imagen: `profesor-junto-a-alumnos.jpg` (alternativa: `piscina-temperada-01.webp`).
- **Público principal:** todos.
- **CTA:**
  - Primario: **WhatsApp (mensaje general)**.
  - Secundario: "Encuentra tu programa" → `#busco` (enlace interno, no WhatsApp).
- **Información secundaria:** ninguna. Nada de misión, visión ni listas.
- **Prioridad:** Alta.

---

### 2. Orientador: "¿Qué estás buscando?" — `#busco`

Reemplaza a "¿Para quién es?". Orienta por **necesidad**, no solo por edad, y separa las dos voces del visitante.

- **Objetivo:** que el visitante se reconozca en una frase y llegue en un toque a su programa.
- **Contenido principal:** un selector de dos pestañas y, en cada una, una lista de necesidades escritas en primera persona.

  **Pestaña "Para mi hijo o hija"**

  | Necesidad | Lleva a |
  |---|---|
  | Su primer contacto con el agua (hasta 4 años) | Natación Baby Swift |
  | Que aprenda a nadar (5 a 12 años) | Natación Inicial |
  | Un espacio adaptado si es neurodivergente o está dentro del espectro autista (7 a 12 años) | Taller de Habilidades Sociales con Natación |
  | Que entrene para competir (desde 14 años) | Natación Competitivo |

  **Pestaña "Para mí" (13+)**

  | Necesidad | Lleva a |
  |---|---|
  | Aprender a nadar | Natación Adulto Inicial |
  | Mejorar mi técnica o mi condición física | Natación Adulto Intermedio · Natación Adulto Avanzado |
  | Entrenar para competir (desde 14 años) | Natación Competitivo |

- **Comportamiento:** al tocar una necesidad, la página baja a `#programas` y **abre la ficha del curso correspondiente**. Si la necesidad lleva a dos cursos (Intermedio/Avanzado), abre el primero y muestra una línea de ayuda para elegir entre ambos `[PENDIENTE: criterio de nivel, ver sección 6]`.
- **Público principal:** apoderados (pestaña 1) y adultos/adolescentes (pestaña 2).
- **CTA:** ninguno de WhatsApp. Su función es orientar y llevar a la ficha, que tiene el CTA específico.
- **Información secundaria:** la edad entre paréntesis en cada necesidad.
- **Prioridad:** Alta.
- **Nota:** no incluye "bienestar/salud" como necesidad separada, para evitar afirmaciones de salud. Queda dentro de "mejorar mi condición física".

---

### 3. Programas y horarios — `#programas`

Fusiona las antiguas secciones **Cursos** y **Horarios**. Una sola fuente de datos con dos formas de verla.

- **Objetivo:** mostrar los 7 programas con todo lo necesario para decidir, y permitir encontrar un horario en segundos.
- **Contenido principal:**
  - Selector de vista: **"Por programa"** (por defecto) | **"Por día"**.
  - **Vista por programa:** 7 fichas agrupadas en 3 grupos:
    - **Niños y familias:** Natación Baby Swift · Natación Inicial · Taller de Habilidades Sociales con Natación
    - **Adolescentes y adultos (13+):** Natación Adulto Inicial · Natación Adulto Intermedio · Natación Adulto Avanzado
    - **Competición (14+):** Natación Competitivo
  - **Cada ficha contiene:**
    - Nombre exacto del curso
    - Edad
    - Descripción de una línea `[PENDIENTE: aprobación en content.md]`
    - Profesor/a
    - Horarios (lista de días y horas)
    - Duración de la clase (60 min; **80 min** en Competitivo)
    - Planes disponibles
    - CTA de WhatsApp del curso
  - **Vista por día:** pestañas Martes · Miércoles · Sábado · Domingo (solo días con clases). Cada pestaña muestra una lista cronológica: hora, curso y edad. Al tocar un curso se abre su ficha.
- **Público principal:** todos. Es el corazón de la página.
- **CTA:** un WhatsApp **por ficha**, con el mensaje del curso (ver sección 4). La vista por día no lleva CTA propio.
- **Información secundaria:** duración de la clase, planes disponibles por curso.
- **Ficha de Natación Baby Swift:** incluye la línea confirmada *la madre o el padre pueden entrar al agua con su hijo, con supervisión del profesor*.
- **Tratamiento del Taller de Habilidades Sociales con Natación:**
  - Va en el grupo "Niños y familias", con el mismo peso visual que los demás. No se esconde y no se destaca como gancho comercial.
  - Su ficha incluye:
    - dirigido a niños de 7 a 12 años, neurodivergentes y dentro del espectro autista;
    - a cargo de Sabrina Ladaroch, terapeuta ocupacional;
    - domingo 13:00–14:00;
    - una línea explícita: *es una herramienta más a la que las familias pueden optar, sin compromiso de resultados*;
    - planes: **solo Plan Deportivo**.
  - Lenguaje respetuoso. No usar "tratamiento", "terapia que mejora…", "beneficios" ni promesas.
- **Prioridad:** Alta.

---

### 4. Planes — `#planes`

- **Objetivo:** mostrar precio y frecuencia de forma clara y comparable, justo cuando el visitante ya eligió un programa.
- **Ubicación:** inmediatamente después de Programas. Además, el precio ya se anticipó en el hero ("desde $50.000") y cada ficha indica qué planes admite.
- **Contenido principal:** dos planes comparables.

  | | Plan Deportivo | Plan Intensivo |
  |---|---|---|
  | Precio | $50.000 CLP/mes | $80.000 CLP/mes |
  | Clases | 4 al mes | 8 al mes (máx. 2 por semana) |
  | Días | Eliges el día dentro de los horarios de tu curso | Se acuerdan contigo dentro de los horarios de tu curso |

  Una sola línea común (no repetida en cada plan): **Incluye antiparras y gorro.**
- **Notas breves:**
  - Competitivo (clases de 80 min) tiene el mismo precio.
  - El Taller de Habilidades Sociales con Natación solo tiene Plan Deportivo.
- **Público principal:** todos. Especialmente quien ya eligió un programa.
- **CTA:** un WhatsApp **por plan**, con el mensaje del plan.
- **Información secundaria:** ninguna.
- **Prioridad:** Alta.

---

### 5. La escuela — `#escuela`

Fusiona las antiguas secciones **Por qué Delfines del Sur**, **Equipo**, **Competencia**, **Instalaciones**, **Comunidad familiar** y **Misión y Visión**. Son todas respuestas a una misma pregunta: *¿por qué confiar?*

- **Objetivo:** dar pruebas concretas de confianza a quien ya vio programas y precios pero todavía duda.
- **Contenido principal:** 4 bloques breves, cada uno con una foto real y 1–2 frases.

  1. **Equipo**
     - Cristofer Aguilera, director, Profesor de Educación Física y Salvavidas.
     - César Cifuentes, Aracely Morales y Sabrina Ladaroch (terapeuta ocupacional), cada uno con los cursos que dicta.
     - Foto: `equipo-profesores-natacion-01.jpg`.
     - Sin teléfonos. Bios `[PENDIENTE]`.
  2. **Seguridad e instalaciones**
     - Piscina temperada y piscina al aire libre.
     - Salvavidas y primeros auxilios en las dependencias.
     - Implementos incluidos.
     - Fotos: `piscina-temperada-01.webp`, `piscina-aire-libre-01.webp` (galería deslizable en móvil).
  3. **Ambiente familiar**
     - Los padres acompañan y son parte del proceso.
     - Foto: `categoria-infantil-con-padres.jpg` (revisar resolución) o `categoria-infantil.jpg`.
  4. **Experiencia deportiva**
     - Alumnos que compiten en distintas categorías.
     - Profesores que también compiten en torneos.
     - Fotos: `alumnos-compitiendo.jpg`, `profesor-director-entrenando-para-competencia.jpg`.
     - Mención autorizada: el director participó en un mundial de aguas gélidas en El Calafate, Argentina. Una línea dentro del bloque, sin convertirla en argumento principal de la página.
- **Cierre de la sección:** la misión en una sola frase, como declaración de valores ("disciplina, trabajo duro y mentalidad positiva"). La visión no se publica en la landing: no aporta a la decisión del visitante y queda en el brief.
- **Público principal:** apoderados indecisos (seguridad, familia) y adultos o jóvenes deportistas (experiencia competitiva).
- **CTA:** ninguno de WhatsApp. Un enlace secundario a **Instagram** ("Mira más de la escuela en Instagram"): es el lugar natural para prueba social.
- **Información secundaria:** nombres de los profesores, galería de fotos.
- **Prioridad:** Media.

---

### 6. Preguntas frecuentes — `#preguntas`

- **Objetivo:** resolver las objeciones que quedan, **solo con respuestas confirmadas**.
- **Contenido principal:** acordeón de 6–7 preguntas como máximo:
  1. ¿Necesito saber nadar para empezar? → Enseñanza adaptada a cada alumno; cursos Inicial y Adulto Inicial.
  2. ¿Desde qué edad pueden participar? → Baby Swift hasta 4, Inicial 5–12, adultos 13+, Competitivo 14+, Taller 7–12.
  3. ¿Los adolescentes nadan con adultos? → Sí, desde los 13 años en los cursos de adulto.
  4. ¿Puedo elegir los días? → Deportivo: eliges; Intensivo: se acuerdan contigo, máximo 2 por semana.
  5. ¿Qué incluye la clase? → Antiparras y gorro.
  6. ¿Es seguro? → Director Profesor de Educación Física y Salvavidas; salvavidas y primeros auxilios en las dependencias.
  7. ¿Dónde están? → Los Patagones 1869, Coronel (enlace a `#contacto`).
- **Público principal:** indecisos de ambos grupos.
- **CTA:** uno al final: "¿Tienes otra pregunta?" → WhatsApp (mensaje de consulta).
- **Información secundaria:** ninguna.
- **Prioridad:** Media.
- **Excluidas hasta confirmar:** clase de prueba, matrícula, recuperación de clases, piscina por curso, funcionamiento en invierno, tamaño de grupos.

---

### 7. Contacto y ubicación — `#contacto`

Fusiona la antigua sección "CTA + Contacto".

- **Objetivo:** cierre de conversión para quien llegó al final.
- **Contenido principal:**
  - Frase de cierre breve.
  - **Botón principal WhatsApp** (mensaje general).
  - Opciones secundarias:
    - llamar: `tel:+56939553821`;
    - Instagram @delfines_del_sur.
  - Dirección: Los Patagones 1869, Coronel.
  - Botón "Cómo llegar": enlace a Google Maps. El mapa embebido es opcional y carga solo cuando se toca o se hace visible (lazy-load), para no penalizar el rendimiento.
- **Público principal:** todos.
- **CTA:** WhatsApp general (primario) · Llamar · Instagram · Cómo llegar.
- **Información secundaria:** ninguna. No se publican horarios de atención (no están confirmados).
- **Prioridad:** Alta.

---

## 3. Elementos persistentes

### Navegación (header)
- **Sticky**, compacto, se reduce al hacer scroll.
- **Móvil:**
  - icono o logotipo horizontal pequeño (versión *light* o *dark* según el fondo);
  - botón "Menú" que abre un panel con 5 anclas y, al pie, WhatsApp e Instagram.
  - **Sin botón de WhatsApp en el header móvil:** ese rol lo cumple el botón flotante, para no tener dos accesos persistentes al mismo destino.
- **Desktop:**
  - logotipo horizontal;
  - anclas en línea;
  - botón **WhatsApp** a la derecha.
- **Anclas (5):** Programas · Horarios (→ `#programas`, abre la vista "Por día") · Planes · La escuela · Contacto.
- La FAQ no está en la navegación: se llega a ella con el scroll natural.

### CTA WhatsApp
- Número único: **+56 9 3955 3821** → `https://wa.me/56939553821?text=<mensaje codificado>`.
- Siempre abre en una pestaña nueva o en la app. Etiqueta accesible: "Escribir por WhatsApp (se abre WhatsApp)".
- Nunca se usan números de profesores.

### Botón flotante (solo móvil)
- Aparece **después de que el CTA del hero sale de la pantalla**.
- **Se oculta** cuando la sección `#contacto` está visible, para no duplicar su botón, y cuando el menú está abierto.
- Mensaje: **general**.
- No debe tapar el CTA de las fichas ni el último elemento de la FAQ: la página reserva espacio inferior para él.
- En desktop no existe; lo reemplaza el botón del header.

### Footer
- Logotipo vertical (versión *dark* sobre `#01245B`).
- Dirección, teléfono y WhatsApp de la escuela, e Instagram.
- Anclas principales (repetición mínima de la navegación).
- "© {año} Delfines del Sur — Escuela de Natación".
- Sin misión ni visión, sin teléfonos de profesores y sin horarios de atención.

---

## 4. Estrategia de CTAs

**Regla:** WhatsApp aparece solo en **puntos de decisión**: al entender qué es la escuela (hero), al elegir un programa (fichas), al comparar precios (planes), al resolver dudas (FAQ) y al cierre (contacto). Las secciones de orientación y confianza no llevan WhatsApp.

| Ubicación | Tipo | Mensaje predefinido |
|---|---|---|
| Hero | Primario | Hola, quiero información sobre las clases de natación en Delfines del Sur. |
| Header desktop / botón flotante móvil | Persistente | Hola, quiero información sobre las clases de natación en Delfines del Sur. |
| Ficha Natación Baby Swift | Contextual | Hola, quiero información sobre Natación Baby Swift. |
| Ficha Natación Inicial | Contextual | Hola, quiero información sobre Natación Inicial. |
| Ficha Taller de Habilidades Sociales con Natación | Contextual | Hola, quiero información sobre el Taller de Habilidades Sociales con Natación. |
| Ficha Natación Adulto Inicial | Contextual | Hola, quiero información sobre Natación Adulto Inicial. |
| Ficha Natación Adulto Intermedio | Contextual | Hola, quiero información sobre Natación Adulto Intermedio. |
| Ficha Natación Adulto Avanzado | Contextual | Hola, quiero información sobre Natación Adulto Avanzado. |
| Ficha Natación Competitivo | Contextual | Hola, quiero información sobre Natación Competitivo. |
| Plan Deportivo | Contextual | Hola, quiero información sobre el Plan Deportivo. |
| Plan Intensivo | Contextual | Hola, quiero información sobre el Plan Intensivo. |
| FAQ ("¿Tienes otra pregunta?") | Secundario | Hola, tengo una consulta sobre Delfines del Sur. |
| Contacto | Primario | Hola, quiero información sobre las clases de natación en Delfines del Sur. |

**Otros CTAs (no WhatsApp):**
- Hero → "Encuentra tu programa" (`#busco`).
- Orientador → abre la ficha del curso.
- Datos clave del hero ("Planes desde $50.000") → `#planes`.
- La escuela y Contacto → Instagram.
- Contacto → Llamar, Cómo llegar.

**Implementación:**
- Los mensajes se generan desde una única tabla de datos de cursos y planes, para no escribirlos a mano en cada botón.
- Van codificados en la URL (`encodeURIComponent`).
- Cada CTA lleva un identificador de ubicación (p. ej. `data-cta="curso-inicial"`) para medir clics.

**Analítica: Umami Cloud (plan gratuito).**
- **Por qué:**
  - No usa cookies ni datos personales, así que no necesita banner de consentimiento.
  - El script pesa unos 2 KB y no afecta el rendimiento.
  - Mide eventos personalizados con atributos HTML, sin código extra: encaja directo con los `data-cta`.
  - El plan gratuito alcanza para el tráfico de una landing local.
- **Descartadas:**
  - Google Analytics 4: pesado, usa cookies y requiere consentimiento.
  - Cloudflare Web Analytics: no mide eventos personalizados.
  - Plausible: equivalente a Umami, pero de pago.
- **Eventos a medir:**

| Evento (`data-umami-event`) | Dónde | Propiedad |
|---|---|---|
| `whatsapp` | Todos los CTA de WhatsApp | `cta` = valor de `data-cta` (hero, curso-inicial, plan-deportivo…) |
| `llamar` | Contacto | — |
| `instagram` | Menú, La escuela, Contacto, Footer | `cta` = ubicación |
| `como-llegar` | Contacto | — |
| `orientador` | Filas del orientador | `programa` = ancla de destino |
| `vista-por-dia` | Pestaña "Por día" | — |

- **Complemento:** Google Search Console (gratis, sin script en la página) para ver cómo aparece el sitio en Google. Se verifica por DNS del dominio.
- **Script (en el `<head>`):**

```html
<script defer src="https://cloud.umami.is/script.js" data-website-id="c68d1912-9e8e-487e-a2af-9d91b247dcbb" data-domains="delfinesdelsur.cl"></script>
```

  `data-domains` limita el registro al dominio de producción, para que las visitas en local o en previsualizaciones no ensucien las métricas. Es el único script de terceros de la página.
- Los nombres de curso en los mensajes son **exactos**, tal como en el brief.

---

## 5. Mobile UX

### Programas (vista "Por programa")
- **Acordeón agrupado:** cada curso es una fila compacta con **nombre + edad + días** (p. ej. "Natación Inicial · 5–12 años · Mar, Mié, Sáb, Dom") y un indicador para expandir.
- Solo **una ficha abierta a la vez**, para que la página no se alargue.
- La ficha expandida muestra los horarios como **lista vertical** ("Martes · 18:20–19:20"), nunca como tabla.
- El CTA de WhatsApp queda **al final de la ficha**, a ancho completo y con área táctil ≥ 48 px.
- Al llegar desde el orientador, la ficha correspondiente se abre y queda con su título visible bajo el header.
- **Accesibilidad:** encabezados de acordeón como `<button aria-expanded>`. El contenido está en el HTML aunque esté cerrado (SEO y lectores de pantalla).
- **Tablet/desktop:** las fichas pueden mostrarse como grilla abierta por grupo. La decisión es de `DESIGN.md`.

### Horarios (vista "Por día")
- **Pestañas de días:** Martes · Miércoles · Sábado · Domingo.
- Día seleccionado por defecto: **el día actual si tiene clases; si no, el próximo día con clases**.
- Cada pestaña es una **lista cronológica** de filas: hora a la izquierda, nombre del curso y edad a la derecha. Máximo 5 filas por día, sin scroll horizontal.
- Tocar una fila cambia a la vista "Por programa" y abre esa ficha.
- La edad aparece como texto, no solo por color, para que quien ve la semana completa (p. ej. una familia con dos hijos) distinga los cursos.
- Si no hay JavaScript, se muestran los 4 días apilados como listas.

### Planes
- En móvil, dos tarjetas **apiladas**, cada una con: nombre, precio grande, clases al mes, cómo se eligen los días y CTA.
- "Incluye antiparras y gorro" aparece **una sola vez** bajo ambas tarjetas.
- Las dos notas (Competitivo mismo precio; Taller solo Deportivo) van en texto pequeño, sin iconos de advertencia que generen desconfianza.
- Desde tablet, las tarjetas van lado a lado para comparar.

### FAQ
- Acordeón; todas las preguntas cerradas por defecto.
- Preguntas cortas, que quepan en una o dos líneas en un teléfono de 360 px.
- Respuestas de 1–3 líneas, con enlaces internos cuando corresponda (p. ej. a `#planes`).
- Un solo CTA de WhatsApp al final de la sección, no dentro de cada respuesta.

### General
- Ancho de referencia: **360 px**.
- Ninguna sección requiere scroll horizontal, salvo la galería de instalaciones, que es deslizable con indicador visible.
- Los bloques de texto no superan ~3 líneas por párrafo en móvil.

---

## 6. Información que NO debe aparecer todavía

Estos datos están pendientes en el brief. **No se convierten en afirmaciones públicas** hasta que se confirmen:

| Dato | Estado | Tratamiento en la landing |
|---|---|---|
| Mundial de aguas gélidas: nombre oficial y año | No confirmados | Se menciona el evento de forma genérica ("un mundial de aguas gélidas en El Calafate, Argentina"), sin nombre oficial ni año. |
| Criterio para elegir entre Adulto Intermedio y Adulto Avanzado / evaluación inicial | Pendiente | No se publica. La ficha invita a consultar por WhatsApp. |
| En qué piscina se realiza cada curso | Pendiente | Solo "piscina temperada y al aire libre" a nivel escuela. |
| Funcionamiento todo el año / invierno | Pendiente | No se menciona. |
| Tamaño de grupos / alumnos por profesor | Pendiente | No se menciona. |
| Trajes de agua (venta / entrega gratuita) | Dato interno | No se menciona. Se resuelve por WhatsApp. |
| Matrícula, costos adicionales, descuentos, medios de pago | Pendiente | No se menciona. No se escribe "sin matrícula" ni "sin costos extra". |
| Clase de prueba | Pendiente | No se menciona. |
| Recuperación de clases | Pendiente | No se menciona. |
| Bios y fotos individuales de profesores | Pendiente | Solo nombre, rol y cursos. |
| Contexto de la entrevista (medio, fecha) | Pendiente | La foto `entrevista-escuela-equipo.jpg` no se usa como "prensa". |
| Testimonios, resultados, logros, categorías de competencia | No entregados | No se publican. |
| Año de fundación / trayectoria | No entregado | No se menciona. |
| Horarios de atención | No entregados | No se publican. |
| Otras redes sociales | Pendiente | Solo Instagram. |
| Teléfonos de profesores | **Prohibido publicar** | Nunca. `horarios.txt` no se publica. |

---

## 7. Decisiones

1. **De 16 a 7 secciones de contenido.** Cada sección responde a una pregunta del visitante. Las que respondían la misma pregunta ("¿por qué confiar?") se fusionaron. Menos secciones significa menos scroll en móvil y menos repetición.

2. **"¿Para quién es?" pasa a ser un orientador por necesidad con dos voces.** Separar "Para mi hijo o hija" de "Para mí" reconoce que el apoderado y el adulto leen la página distinto. Las necesidades en primera persona ("que aprenda a nadar", "mejorar mi técnica") generan más identificación que una categoría de edad, y cada una lleva a un curso real. Competitivo aparece en ambas pestañas porque recibe tanto a jóvenes como a adultos desde 14 años.

3. **Cursos y horarios se fusionan en una sola sección con dos vistas.** El horario es parte de la decisión de un curso, así que va dentro de su ficha. La vista "Por día" cubre el otro caso real, "¿qué hay el sábado?" (familias con varios hijos, adultos con agenda fija), sin duplicar datos en pantalla: es la misma información vista de otra forma, no una segunda sección.

4. **El precio aparece tres veces, sin repetir el bloque completo.** "Desde $50.000" en el hero, los planes admitidos en cada ficha y la sección de Planes completa justo después de Programas. Así el precio no queda escondido al final y tampoco interrumpe la narrativa.

5. **Los planes van antes que la confianza.** La secuencia "qué → cuándo → cuánto" es continua y se resuelve de una vez. La confianza no llega tarde: se siembra en el hero (director salvavidas, piscina temperada) y en las fichas (nombre del profesor). La sección La escuela es el respaldo profundo para quien sigue dudando.

6. **"Aprender · Crecer · Competir" es el mensaje del hero, no una sección.** Como sección era abstracta y agregaba scroll sin ayudar a decidir. Como titular enmarca toda la página.

7. **La competencia es un bloque dentro de La escuela, no una sección propia.** Comunica experiencia real (alumnos y profesores que compiten) sin dominar la identidad. La participación del director en el mundial de aguas gélidas se menciona ahí, en una línea, sin convertirse en el eje de la página.

8. **Misión en una frase; visión fuera de la landing.** La misión expresa valores útiles para el apoderado (disciplina, trabajo duro, mentalidad positiva). La visión ("ser el líder…") es un objetivo interno que no ayuda al visitante a decidir.

9. **WhatsApp contextual y solo en puntos de decisión.** Cada ficha y cada plan tienen su mensaje específico: la escuela sabe de inmediato qué pregunta la persona, y se puede medir el interés por curso. Orientador y La escuela no llevan WhatsApp para no saturar.

10. **Un solo acceso persistente por dispositivo.** En móvil, botón flotante (sin WhatsApp en el header); en desktop, botón en el header (sin flotante). El flotante se oculta en Contacto. Así el usuario nunca está a más de un toque del contacto y no ve dos botones iguales a la vez.

11. **El Taller va integrado, no aparte ni destacado.** Estar en el grupo "Niños y familias" lo normaliza e incluye. Su ficha lleva la aclaración "sin compromiso de resultados" y los datos exactos del brief, sin lenguaje terapéutico ni promesas.

12. **La FAQ solo con respuestas confirmadas.** Una FAQ que responde "consultar" a todo resta confianza. Las preguntas cuya respuesta está pendiente se excluyen hasta confirmarse.

13. **Mapa bajo demanda.** Un iframe de Google Maps pesa y ralentiza la carga en móvil. Se prioriza el botón "Cómo llegar" y el mapa embebido es opcional con lazy-load.

---

## Resumen de cambios respecto de la arquitectura anterior

| Antes (16) | Ahora | Cambio |
|---|---|---|
| 1. Header | Header | Móvil sin WhatsApp (lo cubre el flotante); 5 anclas. |
| 2. Hero | 1. Hero | Incorpora Aprender·Crecer·Competir, datos clave y "desde $50.000". |
| 3. ¿Para quién es? | 2. Orientador | Pasa de categorías de edad a necesidades, con dos pestañas (hijo/a · yo). |
| 4. Aprender · Crecer · Competir | → Hero | Eliminada como sección. |
| 5. Cursos | 3. Programas y horarios | Fusionada con Horarios; fichas en acordeón con horarios incluidos. |
| 6. Horarios | → Programas y horarios | Vista "Por día" con pestañas, sin tabla. |
| 7. Por qué Delfines del Sur | → 5. La escuela | Fusionada. |
| 8. Equipo | → 5. La escuela | Bloque "Equipo". |
| 9. Competencia | → 5. La escuela | Bloque "Experiencia deportiva", con una línea sobre el mundial del director. |
| 10. Instalaciones | → 5. La escuela | Bloque "Seguridad e instalaciones". |
| 11. Comunidad familiar | → 5. La escuela | Bloque "Ambiente familiar". |
| 12. Misión y Visión | → 5. La escuela | Misión en una frase; visión fuera. |
| 13. Planes y precios | 4. Planes | Sube de la posición 13 a la 4; precio anticipado en el hero y las fichas. |
| 14. FAQ | 6. Preguntas frecuentes | Limitada a 7 preguntas con respuestas confirmadas. |
| 15. CTA + Contacto | 7. Contacto y ubicación | Mapa bajo demanda; Llamar e Instagram como secundarios. |
| 16. Footer | Footer | Sin misión/visión ni datos no confirmados. |
