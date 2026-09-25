# Contenido y copy — Landing Delfines del Sur

> **Fuente de verdad del contenido.** Define qué dice la página, palabra por palabra.
> Datos: `docs/brief.md` (v5). Estructura: `docs/sitemap.md`. Presentación: `DESIGN.md`.
> Todo dato de este documento proviene del brief. Lo no confirmado aparece como `[PENDIENTE: …]` y **no se publica**.

**Convenciones**
- Los textos entre comillas o en tablas de "Texto" son **copy final**, listo para implementar.
- Precios en formato chileno: `$50.000`. Rangos horarios con guion corto: `18:20–19:20`.
- Tratamiento de **tú**, cercano y directo.
- Número público único: **+56 9 3955 3821** · `wa.me/56939553821`.

---

## 1. Header

| Elemento | Texto |
|---|---|
| Logo (alt) | Delfines del Sur — Escuela de Natación |
| Enlace de salto (accesibilidad) | Saltar al contenido |
| Ancla 1 | Programas → `#programas` (vista "Por programa") |
| Ancla 2 | Horarios → `#programas` (abre la vista "Por día") |
| Ancla 3 | Planes → `#planes` |
| Ancla 4 | La escuela → `#escuela` |
| Ancla 5 | Contacto → `#contacto` |
| CTA desktop | WhatsApp |
| CTA desktop (aria-label) | Escribir a Delfines del Sur por WhatsApp (se abre WhatsApp) |
| Botón menú móvil | Menú |
| Botón cerrar menú | Cerrar |
| Menú móvil · CTA | Escríbenos por WhatsApp |
| Menú móvil · Instagram | Instagram @delfines_del_sur |

---

## 2. Hero — `#inicio`

| Elemento | Texto |
|---|---|
| Eyebrow | Escuela de natación · Coronel |
| H1 | Aprende, crece y compite en el agua |
| Lead | Clases de natación para bebés, niños, adolescentes y adultos, con enseñanza adaptada a cada alumno. |
| Dato clave 1 | Desde bebés hasta adultos |
| Dato clave 2 | Piscina temperada y piscina al aire libre |
| Dato clave 3 (link a `#planes`) | Planes desde $50.000 al mes |
| CTA principal | Escríbenos por WhatsApp |
| CTA secundario (→ `#busco`) | Encuentra tu programa |
| Señal de confianza | Dirigida por Cristofer Aguilera, Profesor de Educación Física y Salvavidas. |

---

## 3. Orientador — `#busco`

| Elemento | Texto |
|---|---|
| Eyebrow | Encuentra tu programa |
| H2 | ¿Qué estás buscando? |
| Pestaña 1 | Para mi hijo o hija |
| Pestaña 2 | Para mí |

### Pestaña "Para mi hijo o hija"

| Necesidad (texto) | Edad | Programa de destino | Ancla |
|---|---|---|---|
| Su primer contacto con el agua | Hasta 4 años | Natación Baby Swift | `#programa-baby-swift` |
| Que aprenda a nadar | 5 a 12 años | Natación Inicial | `#programa-inicial` |
| Un espacio adaptado si es neurodivergente o está dentro del espectro autista | 7 a 12 años | Taller de Habilidades Sociales con Natación | `#programa-habilidades-sociales` |
| Que entrene para competir | Desde 14 años | Natación Competitivo | `#programa-competitivo` |

### Pestaña "Para mí"

| Necesidad (texto) | Edad | Programa de destino | Ancla |
|---|---|---|---|
| Aprender a nadar | Desde 13 años | Natación Adulto Inicial | `#programa-adulto-inicial` |
| Mejorar mi técnica y mi condición física | Desde 13 años | Natación Adulto Intermedio | `#programa-adulto-intermedio` |
| Perfeccionar mi técnica y entrenar | Desde 13 años | Natación Adulto Avanzado | `#programa-adulto-avanzado` |
| Entrenar para competir | Desde 14 años | Natación Competitivo | `#programa-competitivo` |

> Nota: el sitemap agrupaba Intermedio y Avanzado en una sola necesidad con una línea de ayuda pendiente. Aquí se separan en dos filas: cada una lleva a un único curso y se evita publicar un criterio de nivel que no está confirmado.

---

## 4. Programas y horarios — `#programas`

| Elemento | Texto |
|---|---|
| Eyebrow | Programas y horarios |
| H2 | Un programa para cada etapa |
| Lead | Elige un programa para ver sus horarios, quién lo dicta y los planes disponibles. |
| Pestaña 1 | Por programa |
| Pestaña 2 | Por día |
| Grupo 1 | Niños y familias |
| Grupo 2 | Adolescentes y adultos (13+) |
| Grupo 3 | Competición (14+) |
| Etiquetas de ficha | Horarios · Profesor / Profesora / A cargo de · Duración · Planes |
| CTA de ficha | Consultar por WhatsApp |
| CTA de ficha (aria-label) | Consultar por {nombre del programa} en WhatsApp (se abre WhatsApp) |

**Fuente única de datos:** las 7 fichas de abajo son la **única** fuente de programas y horarios. La vista "Por día" (sección 4.8) se genera a partir de ellas.

**Descripciones:** de una línea, construidas solo con datos del brief. **Aprobadas** por la escuela.

---

### 4.1 Natación Baby Swift
`id: programa-baby-swift`

| Campo | Contenido |
|---|---|
| Grupo | Niños y familias |
| Resumen (fila cerrada) | Hasta 4 años · Mié, Sáb |
| Público | Niños de hasta 4 años, con su madre o padre |
| Descripción | El primer contacto con el agua, para niños de hasta 4 años. |
| Profesor | César Cifuentes |
| Duración | 60 min |
| Planes | Plan Deportivo · Plan Intensivo |
| Nota | La madre o el padre pueden entrar al agua con su hijo, con supervisión del profesor. |
| CTA | Consultar por WhatsApp |

| Día | Horario |
|---|---|
| Miércoles | 18:20–19:20 |
| Sábado | 10:20–11:20 |

**Mensaje WhatsApp:**
> Hola, quiero información sobre Natación Baby Swift.

---

### 4.2 Natación Inicial
`id: programa-inicial`

| Campo | Contenido |
|---|---|
| Grupo | Niños y familias |
| Resumen (fila cerrada) | 5 a 12 años · Mar, Mié, Sáb, Dom |
| Público | Niños de 5 a 12 años |
| Descripción | Clases de natación para niños de 5 a 12 años, con enseñanza adaptada a cada alumno. |
| Profesor | César Cifuentes |
| Duración | 60 min |
| Planes | Plan Deportivo · Plan Intensivo |
| Nota | — |
| CTA | Consultar por WhatsApp |

| Día | Horario |
|---|---|
| Martes | 18:20–19:20 |
| Miércoles | 19:20–20:20 |
| Sábado | 11:20–12:20 |
| Domingo | 10:20–11:20 |

**Mensaje WhatsApp:**
> Hola, quiero información sobre Natación Inicial.

---

### 4.3 Taller de Habilidades Sociales con Natación
`id: programa-habilidades-sociales`

| Campo | Contenido |
|---|---|
| Grupo | Niños y familias |
| Resumen (fila cerrada) | 7 a 12 años · Dom |
| Público | Niños de 7 a 12 años, neurodivergentes y dentro del espectro autista |
| Descripción | Un taller en el agua para niños de 7 a 12 años, neurodivergentes y dentro del espectro autista. |
| A cargo de | Sabrina Ladaroch, terapeuta ocupacional |
| Duración | 60 min |
| Planes | Plan Deportivo |
| Nota (obligatoria) | Es una herramienta más a la que las familias pueden optar, sin compromiso de resultados. |
| CTA | Consultar por WhatsApp |

| Día | Horario |
|---|---|
| Domingo | 13:00–14:00 |

**Mensaje WhatsApp:**
> Hola, quiero información sobre el Taller de Habilidades Sociales con Natación.

**Reglas de copy para este programa:**
- No usar "terapia", "tratamiento", "mejora", "beneficios", "resultados" (salvo en la nota que los descarta) ni "terapéutico".
- El brief lo describe internamente como "taller terapéutico". En la página se nombra solo como "taller" para que no se lea como tratamiento.
- No agregar objetivos, metodologías ni efectos esperados.

---

### 4.4 Natación Adulto Inicial
`id: programa-adulto-inicial`

| Campo | Contenido |
|---|---|
| Grupo | Adolescentes y adultos (13+) |
| Resumen (fila cerrada) | Desde 13 años · Mar, Mié |
| Público | Adultos y adolescentes desde 13 años |
| Descripción | Para adolescentes y adultos que quieren aprender a nadar correctamente. |
| Profesor | Cristofer Aguilera |
| Duración | 60 min |
| Planes | Plan Deportivo · Plan Intensivo |
| Nota | — |
| CTA | Consultar por WhatsApp |

| Día | Horario |
|---|---|
| Martes | 20:20–21:20 |
| Miércoles | 21:20–22:20 |

**Mensaje WhatsApp:**
> Hola, quiero información sobre Natación Adulto Inicial.

---

### 4.5 Natación Adulto Intermedio
`id: programa-adulto-intermedio`

| Campo | Contenido |
|---|---|
| Grupo | Adolescentes y adultos (13+) |
| Resumen (fila cerrada) | Desde 13 años · Mar, Mié, Sáb, Dom |
| Público | Adultos y adolescentes desde 13 años |
| Descripción | Para adolescentes y adultos que quieren mejorar su técnica y su condición física. |
| Profesora | Aracely Morales |
| Duración | 60 min |
| Planes | Plan Deportivo · Plan Intensivo |
| Nota | — |
| CTA | Consultar por WhatsApp |

| Día | Horario |
|---|---|
| Martes | 19:20–20:20 |
| Miércoles | 20:20–21:20 |
| Sábado | 12:20–13:20 |
| Domingo | 11:20–12:20 |

**Mensaje WhatsApp:**
> Hola, quiero información sobre Natación Adulto Intermedio.

---

### 4.6 Natación Adulto Avanzado
`id: programa-adulto-avanzado`

| Campo | Contenido |
|---|---|
| Grupo | Adolescentes y adultos (13+) |
| Resumen (fila cerrada) | Desde 13 años · Mar, Mié |
| Público | Adultos y adolescentes desde 13 años |
| Descripción | Para adolescentes y adultos que quieren perfeccionar su técnica y desarrollar una práctica deportiva. |
| Profesor | Cristofer Aguilera |
| Duración | 60 min |
| Planes | Plan Deportivo · Plan Intensivo |
| Nota | — |
| CTA | Consultar por WhatsApp |

| Día | Horario |
|---|---|
| Martes | 21:20–22:20 |
| Miércoles | 22:20–23:20 |

**Mensaje WhatsApp:**
> Hola, quiero información sobre Natación Adulto Avanzado.

---

### 4.7 Natación Competitivo
`id: programa-competitivo`

| Campo | Contenido |
|---|---|
| Grupo | Competición (14+) |
| Resumen (fila cerrada) | Desde 14 años · Mar, Sáb, Dom · 80 min |
| Público | Nadadores desde 14 años |
| Descripción | Formación y preparación para la competencia, desde los 14 años. |
| Profesor | Cristofer Aguilera |
| Duración | 80 min |
| Planes | Plan Deportivo · Plan Intensivo |
| Nota | Las clases de 80 minutos tienen el mismo precio que los demás programas. |
| CTA | Consultar por WhatsApp |

| Día | Horario |
|---|---|
| Martes | 17:00–18:20 |
| Sábado | 9:00–10:20 |
| Domingo | 9:00–10:20 |

**Mensaje WhatsApp:**
> Hola, quiero información sobre Natación Competitivo.

---

### 4.8 Vista "Por día" (derivada)

**No se edita a mano.** Se genera ordenando por hora de inicio los horarios de las fichas 4.1–4.7. La tabla sirve para verificar el resultado.

| Elemento | Texto |
|---|---|
| Pestañas (visible / aria-label) | Mar / Martes · Mié / Miércoles · Sáb / Sábado · Dom / Domingo |
| Día por defecto | El día actual si tiene clases; si no, el próximo día con clases. |
| Fila | {hora inicio} · {–hora término} · {nombre del programa} · {edad} → abre la ficha |

| Día | Hora | Programa | Edad | Destino |
|---|---|---|---|---|
| Martes | 17:00–18:20 | Natación Competitivo | Desde 14 años | `#programa-competitivo` |
| Martes | 18:20–19:20 | Natación Inicial | 5 a 12 años | `#programa-inicial` |
| Martes | 19:20–20:20 | Natación Adulto Intermedio | Desde 13 años | `#programa-adulto-intermedio` |
| Martes | 20:20–21:20 | Natación Adulto Inicial | Desde 13 años | `#programa-adulto-inicial` |
| Martes | 21:20–22:20 | Natación Adulto Avanzado | Desde 13 años | `#programa-adulto-avanzado` |
| Miércoles | 18:20–19:20 | Natación Baby Swift | Hasta 4 años | `#programa-baby-swift` |
| Miércoles | 19:20–20:20 | Natación Inicial | 5 a 12 años | `#programa-inicial` |
| Miércoles | 20:20–21:20 | Natación Adulto Intermedio | Desde 13 años | `#programa-adulto-intermedio` |
| Miércoles | 21:20–22:20 | Natación Adulto Inicial | Desde 13 años | `#programa-adulto-inicial` |
| Miércoles | 22:20–23:20 | Natación Adulto Avanzado | Desde 13 años | `#programa-adulto-avanzado` |
| Sábado | 9:00–10:20 | Natación Competitivo | Desde 14 años | `#programa-competitivo` |
| Sábado | 10:20–11:20 | Natación Baby Swift | Hasta 4 años | `#programa-baby-swift` |
| Sábado | 11:20–12:20 | Natación Inicial | 5 a 12 años | `#programa-inicial` |
| Sábado | 12:20–13:20 | Natación Adulto Intermedio | Desde 13 años | `#programa-adulto-intermedio` |
| Domingo | 9:00–10:20 | Natación Competitivo | Desde 14 años | `#programa-competitivo` |
| Domingo | 10:20–11:20 | Natación Inicial | 5 a 12 años | `#programa-inicial` |
| Domingo | 11:20–12:20 | Natación Adulto Intermedio | Desde 13 años | `#programa-adulto-intermedio` |
| Domingo | 13:00–14:00 | Taller de Habilidades Sociales con Natación | 7 a 12 años | `#programa-habilidades-sociales` |

Total: **18 clases semanales** (Martes 5 · Miércoles 5 · Sábado 4 · Domingo 4).

---

## 5. Planes — `#planes`

| Elemento | Texto |
|---|---|
| Eyebrow | Planes |
| H2 | Planes mensuales |
| Lead | Elige según cuántas veces a la semana quieres venir. |

### Plan Deportivo

| Campo | Texto |
|---|---|
| Nombre | Plan Deportivo |
| Precio | $50.000 |
| Periodo | / mes |
| Clases (etiqueta / valor) | Clases / 4 al mes |
| Días (etiqueta / valor) | Días / Eliges el día, dentro de los horarios de tu curso |
| CTA | Consultar por este plan |
| CTA (aria-label) | Consultar por el Plan Deportivo en WhatsApp (se abre WhatsApp) |

### Plan Intensivo

| Campo | Texto |
|---|---|
| Nombre | Plan Intensivo |
| Precio | $80.000 |
| Periodo | / mes |
| Clases (etiqueta / valor) | Clases / 8 al mes, hasta 2 por semana |
| Días (etiqueta / valor) | Días / 2 días por semana, dentro de los horarios de tu curso y acordados contigo |
| CTA | Consultar por este plan |
| CTA (aria-label) | Consultar por el Plan Intensivo en WhatsApp (se abre WhatsApp) |

### Texto común (bajo ambas tarjetas)

- **Ambos planes incluyen antiparras y gorro.**
- Natación Competitivo (clases de 80 minutos) tiene el mismo precio.
- El Taller de Habilidades Sociales con Natación solo tiene Plan Deportivo.

> Las dos tarjetas usan la misma estructura y la misma extensión de texto. No se agregan adjetivos ("ideal", "recomendado", "más completo") a ninguno de los planes.

---

## 6. La escuela — `#escuela`

| Elemento | Texto |
|---|---|
| Eyebrow | La escuela |
| H2 | Conoce Delfines del Sur |
| Lead | Recibimos alumnos de todas las edades y adaptamos la enseñanza a la condición física, las capacidades y la experiencia de cada uno. |

### 6.1 Equipo

| Campo | Contenido |
|---|---|
| H3 | Equipo |
| Texto | Cada programa está a cargo de un profesor o profesora del equipo. |
| Foto | `profesor-junto-a-alumnos.jpg` |
| Alt | Profesor junto a un grupo de alumnos en el césped de la escuela |

| Nombre | Rol / programas |
|---|---|
| Cristofer Aguilera | Director. Profesor de Educación Física y Salvavidas · Natación Competitivo, Natación Adulto Inicial, Natación Adulto Avanzado |
| César Cifuentes | Natación Baby Swift, Natación Inicial |
| Aracely Morales | Natación Adulto Intermedio |
| Sabrina Ladaroch | Terapeuta ocupacional · Taller de Habilidades Sociales con Natación |

Sin teléfonos, sin bios y sin fotos individuales (`[PENDIENTE: bios y fotos individuales]`, no se muestran placeholders).

### 6.2 Seguridad e instalaciones

| Campo | Contenido |
|---|---|
| H3 | Seguridad e instalaciones |
| Texto | Contamos con una piscina temperada y una piscina al aire libre. Las dependencias tienen salvavidas y primeros auxilios. |
| Galería | Ver alt text en la sección 11 (5 fotos) |

> No usar "100 % seguro", "totalmente seguro", "sin riesgos" ni expresiones equivalentes.

### 6.3 Ambiente familiar

| Campo | Contenido |
|---|---|
| H3 | Ambiente familiar |
| Texto | Las familias acompañan y son parte del proceso. En Natación Baby Swift, la madre o el padre pueden entrar al agua con su hijo, con supervisión del profesor. |
| Foto | `bebe-y-padre-piscina.png` (alternativa: `categoria-infantil-con-padres.jpg`) |
| Alt | Un adulto sostiene a un bebé con gorro dentro de la piscina temperada |

### 6.4 Experiencia deportiva

| Campo | Contenido |
|---|---|
| H3 | Experiencia deportiva |
| Texto | Nuestros alumnos participan en competencias de distintas categorías, y los profesores también compiten en torneos. El director, Cristofer Aguilera, participó en un mundial de aguas gélidas en El Calafate, Argentina. |
| Link secundario | Ver Natación Competitivo → `#programa-competitivo` |
| Foto principal | `alumnos-compitiendo.jpg` |
| Alt | Alumnos nadando en una competencia en aguas abiertas |
| Foto secundaria (desktop) | `director-profesor-compitiendo-mundial-aguas-gelidas.jpg` |
| Alt | Cristofer Aguilera, director, en la zona de competencia del mundial de aguas gélidas en El Calafate |
| Foto alternativa | `profesor-compitiendo-laguna.webp` · Alt: Cristofer Aguilera, director, nadando crol en aguas abiertas |

> La mención del mundial está autorizada. **No agregar** nombre oficial del evento, año, resultados ni expresiones como "representó a Chile" o "seleccionado nacional" (no confirmados). La mención es una línea dentro del bloque, no un titular.

### 6.5 Misión (cierre de la sección)

| Campo | Texto |
|---|---|
| Etiqueta | Nuestra misión |
| Texto | Hacer accesibles los deportes acuáticos a personas de todas las edades, entregando principios de disciplina, trabajo duro y mentalidad positiva. |
| Link Instagram | Mira más de la escuela en Instagram |

### 6.6 Visión (no se publica en la landing)

> Ser el líder en la enseñanza de deportes acuáticos y en la formación de deportistas en la Provincia de Concepción.

Texto institucional literal del brief. **No se publica en la landing** (`sitemap.md`, decisión 8). Si en el futuro se publica, debe ir siempre como "Nuestra visión", nunca como afirmación ("somos líderes").

---

## 7. Preguntas frecuentes — `#preguntas`

| Elemento | Texto |
|---|---|
| Eyebrow | Preguntas frecuentes |
| H2 | Antes de empezar |
| Cierre | ¿Tienes otra pregunta? |
| CTA de cierre | Escríbenos |
| CTA (aria-label) | Escribir una consulta por WhatsApp (se abre WhatsApp) |

### Publicadas (7)

**1. ¿Necesito saber nadar para empezar?**
No. La enseñanza se adapta al nivel de experiencia de cada alumno. Si parte desde cero, los programas de inicio son Natación Baby Swift (hasta 4 años), Natación Inicial (5 a 12 años) y Natación Adulto Inicial (desde 13 años).

**2. ¿Desde qué edad se puede participar?**
Natación Baby Swift es para niños de hasta 4 años, y Natación Inicial, de 5 a 12. Desde los 13 años, los adolescentes pueden sumarse a los programas de adultos. Natación Competitivo es desde los 14 años. El Taller de Habilidades Sociales con Natación es para niños de 7 a 12 años.

**3. ¿Cómo funcionan los planes?**
Hay dos. Plan Deportivo: $50.000 al mes, 4 clases, y eliges el día dentro de los horarios de tu curso. Plan Intensivo: $80.000 al mes, 8 clases, hasta 2 por semana, en días que acordamos contigo. Natación Competitivo tiene el mismo precio, y el Taller de Habilidades Sociales con Natación solo tiene Plan Deportivo.

**4. ¿Qué incluye la clase?**
Las clases incluyen antiparras y gorro.

**5. ¿Puedo entrar al agua con mi hijo en Natación Baby Swift?**
Sí. La madre o el padre pueden entrar al agua con su hijo, con supervisión del profesor.

**6. ¿Qué medidas de seguridad tiene la escuela?**
La escuela está dirigida por Cristofer Aguilera, Profesor de Educación Física y Salvavidas, y las dependencias cuentan con salvavidas y primeros auxilios.

**7. ¿Dónde están?**
En Los Patagones 1869, Coronel. [Cómo llegar](#contacto)

### No publicadas (sin respuesta confirmada)

| Pregunta | Estado |
|---|---|
| ¿Hay clase de prueba? | `[PENDIENTE: respuesta]` |
| ¿Hay matrícula o costos adicionales? | `[PENDIENTE: respuesta]` |
| ¿Qué pasa si falto a una clase? | `[PENDIENTE: respuesta]` |
| ¿En qué piscina se hace cada programa? ¿Funcionan todo el año? | `[PENDIENTE: respuesta]` |
| ¿Cuántos alumnos hay por grupo? | `[PENDIENTE: respuesta]` |
| ¿Cómo sé si me corresponde Intermedio o Avanzado? | `[PENDIENTE: respuesta]` |
| ¿Qué medios de pago aceptan? | `[PENDIENTE: respuesta]` |

---

## 8. Contacto — `#contacto`

| Elemento | Texto |
|---|---|
| Eyebrow | Contacto |
| H2 | Da el primer paso |
| Lead | Cuéntanos qué buscas y te orientamos. |
| CTA principal | Escríbenos por WhatsApp |
| CTA "Llamar" | Llamar → `tel:+56939553821` |
| CTA "Llamar" (aria-label) | Llamar a Delfines del Sur al +56 9 3955 3821 |
| CTA "Instagram" | Instagram → `https://www.instagram.com/delfines_del_sur/` |
| CTA "Instagram" (aria-label) | Ver Delfines del Sur en Instagram (se abre en una pestaña nueva) |
| Dirección (línea 1) | Los Patagones 1869, Coronel |
| Dirección (línea 2) | Provincia de Concepción |
| Link | Cómo llegar → `https://www.google.com/maps/search/?api=1&query=Los+Patagones+1869,+Coronel,+Chile` |
| Link (aria-label) | Cómo llegar a Los Patagones 1869, Coronel (se abre Google Maps) |

---

## 9. Footer

| Elemento | Texto |
|---|---|
| Logo (alt) | Delfines del Sur — Escuela de Natación |
| Anclas | Programas · Horarios · Planes · La escuela · Contacto |
| Teléfono y WhatsApp | +56 9 3955 3821 |
| Instagram | @delfines_del_sur |
| Dirección | Los Patagones 1869, Coronel |
| Copyright | © {año actual} Delfines del Sur — Escuela de Natación |

No se agregan otras redes, horarios de atención ni enlaces legales (no están confirmados).

---

## 10. Mensajes de WhatsApp

Base: `https://wa.me/56939553821?text={mensaje codificado con encodeURIComponent}`

| Contexto | `data-cta` | Mensaje |
|---|---|---|
| Hero | `hero` | Hola, quiero información sobre las clases de natación en Delfines del Sur. |
| Header desktop | `header` | Hola, quiero información sobre las clases de natación en Delfines del Sur. |
| Menú móvil | `menu` | Hola, quiero información sobre las clases de natación en Delfines del Sur. |
| Botón flotante | `fab` | Hola, quiero información sobre las clases de natación en Delfines del Sur. |
| Contacto | `contacto` | Hola, quiero información sobre las clases de natación en Delfines del Sur. |
| Ficha Baby Swift | `curso-baby-swift` | Hola, quiero información sobre Natación Baby Swift. |
| Ficha Inicial | `curso-inicial` | Hola, quiero información sobre Natación Inicial. |
| Ficha Taller | `curso-habilidades-sociales` | Hola, quiero información sobre el Taller de Habilidades Sociales con Natación. |
| Ficha Adulto Inicial | `curso-adulto-inicial` | Hola, quiero información sobre Natación Adulto Inicial. |
| Ficha Adulto Intermedio | `curso-adulto-intermedio` | Hola, quiero información sobre Natación Adulto Intermedio. |
| Ficha Adulto Avanzado | `curso-adulto-avanzado` | Hola, quiero información sobre Natación Adulto Avanzado. |
| Ficha Competitivo | `curso-competitivo` | Hola, quiero información sobre Natación Competitivo. |
| Plan Deportivo | `plan-deportivo` | Hola, quiero información sobre el Plan Deportivo. |
| Plan Intensivo | `plan-intensivo` | Hola, quiero información sobre el Plan Intensivo. |
| FAQ | `faq` | Hola, tengo una consulta sobre Delfines del Sur. |

**Medición:** cada enlace de WhatsApp lleva además `data-umami-event="whatsapp"` y `data-umami-event-cta="{data-cta}"` (ver `sitemap.md`, sección 4).

**11 mensajes distintos en 15 ubicaciones.** Los accesos generales (hero, header, menú, botón flotante y contacto) comparten el mismo mensaje, tal como define `sitemap.md`: son la misma consulta. Se distinguen por `data-cta` para medir de dónde viene cada clic.

---

## 11. Alt text

| Imagen | Ubicación | Alt |
|---|---|---|
| `logo/logotipo-horizontal-light.svg` | Header | Delfines del Sur — Escuela de Natación |
| `logo/logotipo-vertical-dark.svg` | Footer | Delfines del Sur — Escuela de Natación |
| `images/alumnos-practicando-borde-piscina.jpg` | Hero | Alumnos con gorro y antiparras practicando patada tomados del borde de la piscina al aire libre |
| `images/profesor-junto-a-alumnos.jpg` | La escuela · Equipo | Profesor junto a un grupo de alumnos en el césped de la escuela |
| `images/categoria-infantil.jpg` | Galería de instalaciones (1) | Alumnas y alumnos con gorro y antiparras sentados en el borde de la piscina temperada |
| `images/piscina-temperada-01.webp` | Galería (2) | Piscina temperada techada, con ventanales y mesas alrededor |
| `images/piscina-temperada-02.jpg` | Galería (3) | Piscina temperada con reposeras junto a los ventanales |
| `images/piscina-aire-libre-01.webp` | Galería (4) | Piscina al aire libre rodeada de césped y árboles |
| `images/piscina-aire-libre-02.webp` | Galería (5) | Piscina al aire libre con quitasoles y césped en un día soleado |
| `images/bebe-y-padre-piscina.png` | La escuela · Ambiente familiar | Un adulto sostiene a un bebé con gorro dentro de la piscina temperada |
| `images/categoria-infantil-con-padres.jpg` (alternativa) | La escuela · Ambiente familiar | Niñas y niños con camiseta del equipo celebrando junto a sus familias |
| `images/alumnos-compitiendo.jpg` | La escuela · Experiencia deportiva | Alumnos nadando en una competencia en aguas abiertas |
| `images/director-profesor-compitiendo-mundial-aguas-gelidas.jpg` | La escuela · Experiencia deportiva (desktop) | Cristofer Aguilera, director, en la zona de competencia del mundial de aguas gélidas en El Calafate |
| `images/profesor-compitiendo-laguna.webp` (alternativa) | La escuela · Experiencia deportiva | Cristofer Aguilera, director, nadando crol en aguas abiertas |
| `images/profesor-director-entrenando-para-competencia.jpg` (alternativa) | La escuela · Experiencia deportiva | Cristofer Aguilera, director, nadando crol en aguas abiertas frente a la costa |
| Imagen Open Graph (`categoria-infantil.jpg` + logo) | Redes sociales | Alumnos de Delfines del Sur en el borde de la piscina temperada |

Los iconos decorativos llevan `aria-hidden="true"`. Los iconos que son el único contenido de un botón usan el `aria-label` del botón.

---

## 12. SEO y metadata

| Campo | Texto |
|---|---|
| `lang` | `es-CL` |
| `<title>` | Delfines del Sur · Escuela de natación en Coronel |
| Meta description | Clases de natación en Coronel para bebés, niños, adolescentes y adultos. Piscina temperada y al aire libre. Planes desde $50.000 al mes. |
| `og:title` | Delfines del Sur — Escuela de natación en Coronel |
| `og:description` | Aprende, crece y compite en el agua. Programas para todas las edades en Coronel, Provincia de Concepción. |
| `og:image` | `https://delfinesdelsur.cl/og-image.jpg` (1200 × 630) |
| `og:image:alt` | Alumnos de Delfines del Sur en el borde de la piscina temperada |
| `og:locale` | `es_CL` |
| `og:type` | `website` |
| `og:url` / canonical | `https://delfinesdelsur.cl/` |

**Temas de contenido** (para guiar headings y textos, no para una lista de keywords): escuela de natación en Coronel · clases de natación para niños · natación para bebés · natación para adultos · natación competitiva · Provincia de Concepción. No se usa `<meta name="keywords">`.

**Datos estructurados (JSON-LD `SportsActivityLocation`)**, solo con campos confirmados:

| Campo | Valor |
|---|---|
| `name` | Delfines del Sur — Escuela de Natación |
| `address.streetAddress` | Los Patagones 1869 |
| `address.addressLocality` | Coronel |
| `address.addressRegion` | Provincia de Concepción |
| `address.addressCountry` | CL |
| `telephone` | +56939553821 |
| `sameAs` | https://www.instagram.com/delfines_del_sur/ |
| `url` | https://delfinesdelsur.cl/ |

**Trajes de agua:** no se mencionan en ninguna parte de la página (dato interno del brief).

No se incluyen `openingHours`, `priceRange`, `aggregateRating` ni coordenadas (no están confirmados).

---

## 13. Contenido pendiente

| Contenido | Estado | Qué falta |
|---|---|---|
| Mundial de aguas gélidas | Mención publicada (genérica) | Opcional: nombre oficial del evento y año. |
| Fotos en mayor resolución | Se usan las actuales | Llegarán más adelante; se reemplazan sin cambiar alt ni recortes. |
| `profesor-director-dirigiendo-entrenamiento-salvavidas-en-playa.jpg` | No se usa | Confirmar si es una actividad de la escuela y si hay permiso de los adultos que aparecen. |
| Fotos de adultos y del Taller | No existen | Fotos propias (opcional). |
| Bios y fotos individuales del equipo | No publicadas | Bio breve y foto de cada profesor/a. |
| Piscina de cada programa / funcionamiento en invierno | No publicado | Respuesta de la escuela. |
| Tamaño de grupos | No publicado | Respuesta de la escuela. |
| Criterio entre Adulto Intermedio y Adulto Avanzado / evaluación inicial | No publicado | Respuesta de la escuela. |
| Matrícula, clase de prueba, descuentos, medios de pago, recuperación de clases | No publicado | Respuesta de la escuela. |
| Otras redes sociales | Pendiente | Solo se publica Instagram. |

---

## 14. Reglas editoriales

1. **No inventar información.** Todo dato sale de `docs/brief.md`. Lo no confirmado se marca `[PENDIENTE]` y no se publica.
2. **Nombres exactos de los programas**, siempre completos: Natación Baby Swift, Natación Inicial, Natación Competitivo, Natación Adulto Inicial, Natación Adulto Intermedio, Natación Adulto Avanzado y Taller de Habilidades Sociales con Natación.
3. **Precios y horarios** se cambian primero en el brief y después aquí.
4. **Sin claims médicos ni terapéuticos**, especialmente en el Taller de Habilidades Sociales con Natación y en todo lo relacionado con salud y bienestar.
5. **Lo pendiente no se publica como confirmado.**
6. **Tono cercano, claro y deportivo**, tratando de tú. Frases cortas.
7. **Hablar a familias, niños, jóvenes y adultos sin infantilizar el lenguaje.** Sin diminutivos ni signos de exclamación en exceso.
8. **Competencia presente, pero no dominante.** Solo aparece en el H1 ("compite"), en la ficha de Natación Competitivo y en el bloque Experiencia deportiva.
9. **WhatsApp es la conversión principal**, siempre con el mensaje de su contexto (sección 10).
10. **CTAs contextuales.** No agregar botones de WhatsApp fuera de las ubicaciones definidas.
11. **Planes con el mismo peso.** Sin adjetivos que favorezcan a uno.
12. **Sin superlativos** ("el mejor", "líder", "n.º 1") en el copy público.
13. **Solo el número público de la escuela.** Nunca teléfonos de profesores.
14. **El logo no se modifica** ni se reemplaza por texto estilizado.
