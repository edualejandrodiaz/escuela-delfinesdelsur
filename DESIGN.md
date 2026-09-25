# DESIGN.md — Delfines del Sur

> **Fuente de verdad visual** del proyecto. Define colores, tipografía, espaciado, componentes, fotografía, interacción y responsive.
> Contenido y datos: `docs/brief.md`. Estructura: `docs/sitemap.md`. Este documento no agrega información del negocio.
> Exploración y validación: proyecto OpenDesign **"Delfines del Sur — Dirección visual"** (`exploracion.html`, `direccion-c.html`).
> Copy: el texto de las maquetas es referencial. **El texto final está en `docs/content.md`**; este documento no define copy.

---

## 1. Dirección visual: "Carril y orilla"

Una escuela deportiva real vista desde el borde de la piscina: **orden y energía de carril** (deporte, técnica, competencia) con la **cercanía de la orilla** (familia, aprendizaje, acompañamiento).

**Cómo se traduce:**
- **Base blanca y clara** para leer y decidir. **Bloques navy `#01245B`** solo para anclar el inicio (hero) y el cierre (contacto).
- **La fotografía real es la protagonista.** Nunca lleva texto encima en móvil.
- **Un único motivo gráfico: el "carril".** Una barra cian corta (56 × 4 px) que abre los bloques navy, más una línea cian lateral en elementos activos. Viene de la línea bajo el nombre en el logo.
- **Tipografía en frase normal**, no en mayúsculas gritadas. Las mayúsculas espaciadas se reservan para las etiquetas pequeñas (eyebrow), como en "ESCUELA DE NATACIÓN" del logo.
- **Radios medios (12 px):** ni rígido de club, ni blando de guardería.

**Qué evita:** olas SVG, burbujas, degradados de agua, ilustraciones de delfines (más allá del logo), mayúsculas agresivas, fondos oscuros permanentes, pastillas infantiles y badges de marketing.

### Alternativas exploradas (OpenDesign)

| Dirección | Idea | Por qué no |
|---|---|---|
| **A · Carril** (deportivo) | Navy dominante, mayúsculas, líneas de carril, cifras tipo marcador. | Se percibe como club competitivo. La foto con overlay oscuro pierde al nadador. Intimida a familias con bebés y a adultos principiantes. Cifras como "0 → 13+" confunden. |
| **B · Orilla** (familiar) | Fondo claro, radios muy grandes (20–28 px), pastillas, tarjetas 2×2. | Se acerca a app infantil o plantilla genérica. Las tarjetas 2×2 alargan la página y parten el texto. Poca energía deportiva: la dimensión "Competir" desaparece. |
| **C · Carril y orilla** (elegida) | Blanco con bloques navy, foto sin texto encima, carril solo como acento, radios de 12 px, listas en vez de tarjetas. | — |

**Por qué C:** es la única que funciona igual para un apoderado de un bebé, un adulto que empieza y un joven que quiere competir. Además:
- Mantiene contraste AA en todos los textos.
- Resuelve el hero a 360 px sin sacrificar la foto ni la legibilidad.
- Usa listas y acordeones (más cortos en móvil que las tarjetas).
- Es la más simple de implementar: pocos tokens y un solo motivo gráfico.

---

## 2. Color

### Tokens

| Token | Valor | Rol |
|---|---|---|
| `--color-navy` | `#01245B` | **Primario.** Títulos, botón primario sobre claro, bloques de anclaje (hero, contacto, footer), estados seleccionados. |
| `--color-navy-hover` | `#0A3275` | Hover/pressed del primario. |
| `--color-blue` | `#0092F4` | **Secundario.** Anillo de foco sobre claro, iconos decorativos, bordes de énfasis. **No para texto** sobre blanco (3.27:1). |
| `--color-blue-text` | `#006FC0` | Variante de `#0092F4` apta para texto: links y eyebrows sobre claro (5.20:1). |
| `--color-cyan` | `#4BE1FC` | **Acento.** CTA primario sobre navy, eyebrows y links sobre navy, barra "carril", línea de ítem activo. **Nunca texto sobre claro** (1.56:1). |
| `--color-ice` | `#7EEBFD` | **Apoyo.** Hover del CTA cian sobre navy. Solo sobre fondos oscuros. |
| `--color-ink` | `#0B1B33` | Texto principal. |
| `--color-slate` | `#4A5B73` | Texto secundario, metadatos (edad, días), etiquetas. |
| `--color-line` | `#D5E2F0` | Bordes y separadores decorativos. |
| `--color-bg` | `#FFFFFF` | Fondo principal. |
| `--color-bg-alt` | `#F4F8FC` | Fondo alterno de secciones (Programas, La escuela). |
| `--color-mist` | `#EAF4FD` | Superficie suave: fondo de iconos de acordeón, notas, hover de botón secundario. |
| `--color-on-dark` | `#FFFFFF` | Texto sobre navy. |
| `--color-on-dark-muted` | `#B8C9E6` | Texto secundario sobre navy. |
| `--color-line-dark` | `rgba(255,255,255,.16)` | Separadores sobre navy. |

**No se usa verde WhatsApp.** El canal se reconoce por el glifo oficial de WhatsApp en el botón. Un verde accesible (≥ 4.5:1 con blanco) sería un verde oscuro poco reconocible y rompería la paleta. **No hay colores de error/éxito:** la landing no tiene formularios.

### Contraste verificado (WCAG 2.1)

| Combinación | Ratio | Uso permitido |
|---|---|---|
| navy sobre blanco | 14.95 | Todo |
| ink sobre blanco | 17.23 | Todo |
| slate sobre blanco / bg-alt | 6.92 / 6.48 | Texto secundario, incluso pequeño |
| blue-text sobre blanco / bg-alt / mist | 5.20 / 4.88 / 4.67 | Links, eyebrows |
| blanco sobre navy | 14.95 | Todo |
| on-dark-muted sobre navy | 8.92 | Texto secundario sobre navy |
| cyan sobre navy (y navy sobre cyan) | 9.59 | CTA sobre navy, eyebrow y link sobre navy |
| navy sobre ice | 10.81 | Hover del CTA cian |
| blue `#0092F4` sobre blanco | 3.27 | **Solo** foco, iconos y bordes (UI ≥ 3:1). No texto. |
| cyan sobre blanco | 1.56 | **Solo decorativo** (barra carril, línea activa). |

### Estados

| Estado | Regla |
|---|---|
| Hover (primario claro) | `navy` → `navy-hover` |
| Hover (primario sobre navy) | `cyan` → `ice` |
| Hover (secundario) | Fondo `mist` (claro) o `rgba(255,255,255,.08)` (navy) |
| Foco | `outline: 3px solid var(--color-blue); outline-offset: 2px`. Sobre navy: `--color-cyan`. Siempre con `:focus-visible`. |
| Seleccionado (tabs) | Fondo `navy`, texto blanco. Además, `aria-selected`. |
| Abierto (acordeón) | Borde 2 px `navy` + línea cian izquierda de 4 px + icono rotado. No depende solo del color. |
| Pressed | Mismo color de hover. Sin desplazamientos. |

### CTA

| Contexto | Estilo |
|---|---|
| Sobre fondo claro | Fondo `navy`, texto blanco, glifo WhatsApp blanco |
| Sobre fondo navy (hero, contacto) | Fondo `cyan`, texto `navy`, glifo `navy` |
| Secundario claro | Transparente, borde 1.5 px `navy`, texto `navy` |
| Secundario sobre navy | Transparente, borde 1.5 px `rgba(255,255,255,.5)`, texto blanco |

---

## 3. Tipografía

**Poppins** (600, 700) para títulos, botones, precios, tabs y etiquetas. **Inter** (400, 500, 600) para texto, horarios, FAQ y metadatos. Se cargan desde Google Fonts con `display=swap`, solo esos pesos. No se agregan otras familias.

| Estilo | Fuente | Móvil (base) | Desktop (≥1024) | Line-height | Tracking |
|---|---|---|---|---|---|
| H1 | Poppins 700 | 30 px | 44 px | 1.15 / 1.1 | −0.01em |
| H2 | Poppins 700 | 24 px | 32 px | 1.2 | 0 |
| H3 | Poppins 600 | 18 px | 20 px | 1.3 | 0 |
| Eyebrow | Poppins 600, MAYÚSCULAS | 12 px | 12 px | 1.3 | 0.14em |
| Lead | Inter 400 | 17 px | 18 px | 1.5 | 0 |
| Body | Inter 400 | 16 px | 16 px | 1.55 | 0 |
| Small / meta | Inter 400 | 14 px | 14 px | 1.45 | 0 |
| Botón | Poppins 600 | 16 px | 16 px (header 15 px) | 1 | 0 |
| Precio | Poppins 700 | 32 px | 40 px | 1.1 | 0 |
| Hora (horarios) | Inter 600 | 16 px | 16 px | 1.3 | 0 |

**Reglas:**
- Horas, precios y rangos usan `font-variant-numeric: tabular-nums`. Rangos con guion corto sin espacios: `18:20–19:20`.
- Tamaño mínimo de texto: **14 px**. El único 13 px permitido es la hora de término en la vista "Por día" y las etiquetas `dt` de planes.
- Ancho máximo de lectura: **62ch** para párrafos y **40ch** para el lead.
- Títulos en frase normal ("Aprende, crece y compite en el agua"), nunca todo en mayúsculas.
- Nombres de cursos siempre completos y exactos. No se abrevian en títulos ni en CTAs.

---

## 4. Espaciado, layout y forma

### Tokens de espacio (base 4)

`--space-1: 4px` · `--space-2: 8px` · `--space-3: 12px` · `--space-4: 16px` · `--space-5: 24px` · `--space-6: 32px` · `--space-7: 48px` · `--space-8: 64px` · `--space-9: 96px`

No se usan valores fuera de esta escala.

### Layout

| Token | 360–767 | 768–1023 | ≥1024 |
|---|---|---|---|
| `--gutter` (padding lateral) | 16 px | 24 px | 32 px |
| `--section` (padding vertical de sección) | 48 px | 64 px | 96 px |
| Container máx. | — | — | 1120 px |
| Grid | 1 columna | 2 columnas (gap 32) | 12 columnas (gap 32) |

**Ritmo de fondos:** Hero `navy` → Orientador `bg` → Programas `bg-alt` → Planes `bg` → La escuela `bg-alt` → FAQ `bg` → Contacto + Footer `navy`.

**Separación interna:** eyebrow → H2: 8 px · H2 → contenido: 24 px · entre grupos: 32 px · entre ítems de lista: separador de 1 px, sin gap.

### Forma

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | 8 px | Pestañas internas, tabs de días, notas |
| `--radius-md` | 12 px | Botones, acordeones, tarjetas de plan, contenedor de tabs |
| `--radius-lg` | 16 px | Fotografías |
| `--radius-full` | 999 px | Botón flotante, iconos circulares de acordeón |

- **Bordes:** 1 px `--color-line`, implementados como `box-shadow: inset` para no alterar el tamaño. 2 px `navy` para el estado abierto.
- **Sombras:** solo dos.
  - `--shadow-1`: `0 1px 2px rgba(1,36,91,.06), 0 2px 8px rgba(1,36,91,.06)`. Para el header al hacer scroll.
  - `--shadow-float`: `0 6px 20px rgba(1,36,91,.28)`. Para el botón flotante y el menú móvil.
  - Las tarjetas no llevan sombra; usan borde.

### Iconografía
- Iconos de línea 20 px, trazo 1.75–2 px, esquinas redondeadas (estilo Lucide), en SVG inline.
- Set cerrado: WhatsApp (glifo oficial), teléfono, Instagram (glifo oficial), pin, chevron, flecha, más, menú y cerrar.
- No se usan iconos decorativos por bullet ni emojis.

---

## 5. Dirección fotográfica

**Prioridad de contenido** (de mayor a menor):
1. Acción en el agua.
2. Interacción profesor–alumno.
3. Grupos en la piscina.
4. Retratos posados.

Se evita que la página sea una sucesión de personas sonriendo a cámara: cada bloque combina una foto de acción o lugar con una de personas.

**Tratamiento:**
- **Corrección de color al exportar** (no con filtros CSS en producción). Las fotos de piscinas (`piscina-*`) vienen sobresaturadas o con HDR: bajar saturación ~15–20 % y corregir la dominante cian para que el agua se vea real.
- Sin duotonos, sin overlays de color ni texto sobre la foto en móvil.
- Sin marcos, sin formas orgánicas ni máscaras de ola. Solo radio de 16 px, salvo el hero, que va a sangre (sin radio).
- Recortes: hero 16:10 (móvil) / columna completa (desktop); bloques de confianza 16:9; galería 4:3. Definir `object-position` por foto para no cortar caras.
- Export: WebP/AVIF con `srcset` (480, 768, 1200 px), `loading="lazy"` excepto el hero (`fetchpriority="high"`).
- `alt` descriptivo y literal. Los textos finales están en `docs/content.md` (sección 11). El mundial de aguas gélidas se nombra solo de forma genérica: sin nombre oficial, sin año y sin expresiones de representación nacional.

**Asignación de fotos:**

| Lugar | Foto | Nota |
|---|---|---|
| Hero | `alumnos-practicando-borde-piscina.jpg` | Clase real en la piscina al aire libre: alumnos con gorro y antiparras haciendo ejercicio de patada en el borde. Es acción en el agua (prioridad 1), muestra aprendizaje y entrenamiento a la vez y no depende de caras a cámara. Recorte móvil 16:10 centrado en la fila diagonal de nadadores (`object-position` ~50% 62%); en desktop, columna vertical completa. |
| La escuela · Equipo | `profesor-junto-a-alumnos.jpg` | Equipo y alumnos en la escuela. |
| La escuela · Seguridad e instalaciones | Galería: `categoria-infantil.jpg` (primera: alumnos en la piscina temperada, humaniza la galería), `piscina-temperada-01.webp`, `piscina-temperada-02.jpg`, `piscina-aire-libre-01.webp`, `piscina-aire-libre-02.webp` | Con corrección de color. |
| La escuela · Ambiente familiar | `bebe-y-padre-piscina.png` (principal), `categoria-infantil-con-padres.jpg` (alternativa) | Foto real en la piscina temperada: bebé y adulto en el agua. Es la única imagen propia relacionada con Baby Swift y cumple la prioridad "interacción en el agua". **Baja resolución (530 × 470, fotograma de video):** convertir a WebP y mostrar como máximo a ~360 px de ancho CSS; en la grilla desktop, la foto no se estira más allá de ese ancho. Coherente con lo confirmado: en Baby Swift la madre o el padre pueden entrar al agua con supervisión del profesor. Alt descriptivo sin nombrar a las personas. |
| La escuela · Experiencia deportiva | `alumnos-compitiendo.jpg` (principal), `director-profesor-compitiendo-mundial-aguas-gelidas.jpg` (secundaria en desktop; acompaña la línea del mundial). Alternativas: `profesor-compitiendo-laguna.webp`, `profesor-director-entrenando-para-competencia.jpg` | Principal: alumnos (la competencia no se centra en el director). Secundaria: el director en el mundial, con mención autorizada. Sin nombre oficial del evento ni año en alt o leyendas. |
| Open Graph | `categoria-infantil.jpg` + logo | 1200 × 630. Se prefiere a la foto del hero porque las caras se leen mejor en miniatura. |

**No usar por ahora:**
- `equipo-compitiendo-mundial-aguas-gelidas-calafate.jpg`: disponible, pero sin asignar en `docs/content.md` (no tiene ubicación ni alt definido). No se usa mientras no se asigne allí.
- `equipo-profesores-natacion-01.jpg` y `equipo-profesores-escuela-02.jpg`: el mundial ya está autorizado, pero **no se usan en el bloque Equipo**. Muestran chaquetas de la selección y la bandera de Chile, lo que sugiere una representación nacional no confirmada, y en la segunda aparecen personas que no son del equipo docente. Equipo usa `profesor-junto-a-alumnos.jpg`, tomada en la escuela.
- `entrevista-escuela-equipo.jpg`: sin contexto confirmado.
- `nadador-profesional-con-alumno.jpg`: la persona es un competidor que visitó la escuela, sin nombre conocido. **No se usa.** En la landing se leería como parte del equipo docente, y no hay autorización de uso de su imagen.
- `piscinas-bebes-uso-libre.jpg` (Pexels, licencia libre): **no se usa.** La licencia no es el problema; el problema es lo que muestra. Son niñas en juego recreativo con flotadores y lentes de sol, no una clase: los flotadores contradicen el mensaje de enseñanza y seguridad, la estética es de vacaciones y no corresponde al rango de Baby Swift (hasta 4 años) en contexto de aprendizaje. Además, al ser niñas identificables de stock, en la ficha de un curso se leerían como alumnas de la escuela.
- `ebebes-aprendiendo-a-nadar-con-padres.jpg` y `piscina-debajo-del-agua.jpg`: **no se usan.** Tienen estética de banco de imágenes y origen desconocido. Publicarlas implica dos riesgos: presentarlas como si fueran de Delfines del Sur (la segunda muestra una piscina olímpica que no es de la escuela) y usar una imagen con derechos de autor sin licencia. Solo se reconsideran con licencia confirmada **y** con una indicación clara de que son ilustrativas.
- `profesor-director-dirigiendo-entrenamiento-salvavidas-en-playa.jpg`: foto real y con mucha energía (el director guiando a un grupo de adultos en la playa), pero **no se usa por ahora**. Es un entrenamiento de salvavidas en el mar, una actividad que no figura entre los cursos del brief: en la landing se leería como un programa que la escuela ofrece. Además, muestra a unos 20 adultos identificables sin autorización confirmada (la autorización existente cubre a menores de la escuela). Se habilita si se confirma que es una actividad de Delfines del Sur **y** hay permiso de los participantes. En ese caso iría en "Experiencia deportiva", con un texto alternativo neutro.
- `director-profesor-escuela.jpg`: retrato de surf fuera del contexto de la escuela. No se usa como foto principal del director.

**Nunca:** generar o usar fotos de stock que parezcan de Delfines del Sur; recrear o alterar el logo.

---

## 6. Secciones

### Header
- **Móvil (<1024):** 56 px, fondo blanco, borde inferior `line`, sticky. Contiene el logotipo horizontal *light* (28 px de alto) y el botón **"Menú"** (icono + texto, 44 px de alto, borde `line`). **Sin WhatsApp.**
- **Desktop (≥1024):** 72 px. Logotipo de 34 px, 5 anclas en Inter 500 15 px (hover `blue-text`) y botón primario compacto **WhatsApp** (40 px de alto).
- **Scroll:** sticky permanente, sin ocultarse. Al pasar de 8 px de scroll se agrega `--shadow-1`. No cambia de altura (evita saltos).
- **Menú móvil:** panel que cubre la pantalla desde arriba, fondo blanco.
  - 5 anclas en filas de 56 px con separador.
  - Al pie: botón primario WhatsApp e Instagram como link.
  - Se cierra con botón (×), con `Esc` o al tocar un ancla. Tiene *focus trap* y bloquea el scroll del body.

### Hero
- **Móvil:** foto 16:10 a sangre (sin texto encima) y, debajo, un bloque `navy` con:
  - barra carril;
  - eyebrow "Escuela de natación · Coronel";
  - H1;
  - lead (hasta 3 líneas a 360 px);
  - datos clave (lista con puntos cian, 3 ítems; el precio es un link a `#planes`);
  - CTA primario cian (52 px, ancho completo);
  - CTA secundario "Encuentra tu programa" (52 px);
  - señal de confianza (14 px, `on-dark-muted`, separada por una línea).
- **Validado a 360 px con el copy final:** el CTA primario queda completo sin scroll en pantallas de **≥ 660 px de alto** (a 360 × 640 su borde inferior queda en 651 px). El CTA secundario, desde 720 px.
- **≥480:** datos clave en línea con salto automático.
- **≥1024:** dos columnas 50/50. Texto a la izquierda sobre navy, alineado al container, y foto a la derecha a sangre, altura mínima 560 px. Los CTAs van en línea con ancho automático y **`white-space: nowrap`**.
- **Jerarquía:** H1 > CTA primario > lead > datos clave > CTA secundario > confianza.

### Orientador "¿Qué estás buscando?"
- **Tabs segmentados:** contenedor blanco con borde `line`, radio 12 y padding 4. Dos botones de 44 px de alto; el activo va en `navy` con texto blanco y el inactivo en `slate`. Ancho completo en móvil, **máx. 480 px** en desktop.
- **Necesidades como filas de navegación, no tarjetas:** fila de mínimo 64 px con separador inferior.
  - Texto de la necesidad: Inter 500, 16 px, `ink`.
  - Edad: small, `slate`.
  - Flecha → en `blue-text`, alineada a la derecha.
  - Hover/foco: texto en `blue-text`.
- **Feedback:** al tocar, scroll suave hasta la ficha y apertura del acordeón. La ficha abierta recibe foco en su encabezado.
- **≥768:** filas en 2 columnas.

### Programas y horarios
- **Tabs segmentados** "Por programa | Por día" (mismo componente que el orientador).
- **Vista "Por programa":** etiquetas de grupo (estilo eyebrow en `slate`) y acordeones.
  - **Cerrado:** fila de mínimo 64 px con:
    - **nombre** (H3 Poppins 600, `navy`);
    - **edad · días** (small, `slate`);
    - icono chevron en círculo `mist`.
  - **Abierto:** borde 2 px `navy` + línea cian izquierda en el cuerpo + chevron rotado 180°. Contiene, en orden:
    1. descripción de una línea (`slate`);
    2. lista de horarios en filas clave–valor (día en `slate` a la izquierda; hora en Inter 600 tabular, `ink`, a la derecha);
    3. profesor/a;
    4. duración;
    5. planes;
    6. nota, si el programa la tiene (componente Note);
    7. **botón primario de ancho completo "Consultar por WhatsApp"**, con `aria-label` que incluye el nombre del curso.
  - Si un valor supera ~24 caracteres (p. ej. "Sabrina Ladaroch, terapeuta ocupacional"), la fila se **apila**: etiqueta arriba, valor abajo, alineado a la izquierda.
  - Solo un acordeón abierto a la vez. El contenido está en el HTML aunque esté cerrado.
- **Notas de ficha:** Natación Baby Swift, Natación Competitivo y el Taller de Habilidades Sociales con Natación llevan una **nota** (fondo `mist`, radio 8, 14 px, `ink`) con el texto de `docs/content.md`. En el Taller es obligatoria (ausencia de compromiso de resultados).
- **Taller de Habilidades Sociales con Natación:** mismo componente y mismo peso visual. Sin iconos de alerta, sin colores distintos y sin imaginería clínica.
- **Vista "Por día":**
  - 4 tabs de día en grilla de 4 columnas (Mar · Mié · Sáb · Dom), 44 px, con `aria-label` que lleva el nombre completo.
  - Debajo, una lista con borde. Cada fila tiene una columna fija de 72 px con la **hora de inicio** (Inter 600, `navy`) y la de término debajo (13 px, `slate`), luego **nombre del curso** (Inter 500) y **edad** (small, `slate`), y una flecha.
  - Al tocar una fila se cambia a "Por programa" con esa ficha abierta.
  - Sin tabla y sin scroll horizontal.
- **≥1024:** maestro–detalle. A la izquierda (5/12) la lista de cursos agrupada; a la derecha (7/12) la ficha abierta. La vista "Por día" ocupa el ancho completo del container.

### Planes
- Dos tarjetas **idénticas en estilo** (fondo blanco, borde `line`, radio 12, padding 24). Ningún plan se destaca: sin badges, sin colores distintos, sin escalas diferentes.
- Orden interno:
  1. nombre (H3);
  2. **precio** (Poppins 700 32/40 px, `navy`) + "/ mes" (Inter 16, `slate`);
  3. filas compactas "Clases" y "Días" (etiqueta small `slate` + valor Inter 500);
  4. botón primario de ancho completo.
- Bajo ambas tarjetas: la línea de implementos incluidos (Inter 600, `ink`) y dos líneas small `slate` con las notas (Natación Competitivo y Taller). Texto exacto en `docs/content.md`. No se repiten dentro de cada tarjeta.
- Móvil: tarjetas apiladas con gap de 12 px. ≥768: lado a lado.

### La escuela
- Una sola sección (`bg-alt`) con encabezado y **4 bloques de confianza** (TrustBlock). No son 4 secciones.
- **TrustBlock:** foto 16:9 (radio 16) + H3 + texto breve `slate` (1–2 frases) + link secundario opcional en `blue-text` (Experiencia deportiva → ficha de Natación Competitivo).
  - **Equipo:** una frase breve seguida de una lista de 4 filas, **nombre** (Inter 600) · rol/cursos, con separadores. Sin teléfonos, sin avatares individuales mientras no existan fotos para todos.
  - **Seguridad e instalaciones:** reemplaza la foto por una **galería** horizontal con scroll-snap. Ítems al 82 % del ancho, de modo que se ve el borde del siguiente.
- **Cierre:** etiqueta "Nuestra misión" en estilo eyebrow y, debajo, la misión en Poppins 600 20 px `navy`, con línea cian izquierda de 4 px. Debajo, link a Instagram con icono.
- ≥768: bloques en grilla 2 × 2.

### Preguntas frecuentes
- `<details>/<summary>` nativo: accesible y funcional sin JS.
- **Fila cerrada:** mínimo 56 px, pregunta en Inter 600 16 px `navy`, icono "+" en círculo `mist` de 28 px, separador de 1 px `line`.
- **Abierta:** el icono rota 45° (se lee como ×). La respuesta va en Inter 16 `ink`, máx. 62ch, padding inferior de 16 px.
- Se pueden abrir varias a la vez. Todas cerradas por defecto.
- Al final: "¿Tienes otra pregunta?" (small) + botón **secundario** WhatsApp "Escríbenos".

### Contacto
- Bloque `navy` con barra carril, eyebrow, H2 y lead de una línea.
- **CTA primario cian** de ancho completo y 56 px de alto (el único de 56 px en la página, por ser el cierre).
- Debajo, dos botones secundarios sobre navy en 2 columnas: **Llamar** · **Instagram**.
- Separador y bloque de dirección: pin cian + "Los Patagones 1869, Coronel" (Inter 600) + "Provincia de Concepción" (`on-dark-muted`) + link cian **"Cómo llegar"**.
- Sin mapa embebido por defecto. Si se agrega, se carga al tocar (lazy).
- ≥768: los CTAs a un máx. de 420 px; la dirección en una segunda columna.

### Footer
- Continúa el navy del contacto, separado por una línea `line-dark`.
- Contiene: logotipo vertical *dark* (128 px de ancho), anclas en blanco, teléfono · Instagram · dirección en `on-dark-muted` 14 px, y ©.
- Compacto: padding 32 px arriba y 64 px abajo (espacio para el botón flotante en móvil).

### Botón flotante de WhatsApp (solo <1024)
- **Forma:** píldora de 56 px de alto, padding `0 20 0 16`, **icono de 20 px + label "WhatsApp"** (Poppins 600 15 px). El label evita la ambigüedad de un icono solo y mantiene el botón compacto.
- **Color:** fondo `navy`, texto blanco, anillo interior 2 px `cyan`, `--shadow-float`.
- **Posición:** `fixed`, derecha 16 px, abajo `16px + env(safe-area-inset-bottom)`, z-index sobre el contenido y bajo el menú.
- **Estados:** hover `navy-hover`; foco con anillo `blue` de 3 px y offset 2 px.
- **Aparición:** cuando el CTA primario del hero sale del viewport, con opacity 0→1 y translateY 8→0 px en 250 ms.
- **Desaparición:** cuando `#contacto` entra en el viewport o el menú está abierto (animación inversa, 200 ms).
- La página reserva 88 px al final para que no tape contenido.

---

## 7. Componentes

| Componente | Función y reglas |
|---|---|
| **Button** | Variantes: `primary`, `primary-on-dark`, `secondary`, `secondary-on-dark`. Alto mín. 48 px (hero 52, contacto 56), radio 12, Poppins 600 16, icono opcional de 20 px a la izquierda. `block` = ancho completo. No partir el label en dos líneas en desktop. |
| **WhatsAppButton** | Button + glifo oficial + `href` construido desde la tabla de mensajes de `docs/content.md` §10 (`wa.me/56939553821?text=…`). Prop `context` (hero, header, menu, fab, contacto, curso, plan, faq). Atributos de medición según `docs/content.md` §10 y `sitemap.md` §4. `aria-label` con destino y el aviso "abre WhatsApp". `target="_blank" rel="noopener"`. Atributo `data-cta` para medición. |
| **Header** | Sticky, 56/72 px. Logo + menú (móvil) o nav + WhatsApp (desktop). |
| **MobileMenu** | Panel superior de pantalla completa, filas de 56 px, WhatsApp e Instagram al pie, focus trap, `Esc`. |
| **SectionHeader** | Eyebrow + H2 + lead opcional. Variante `on-dark` (eyebrow cian, H2 blanco, barra carril). |
| **SegmentedTabs** | Contenedor con borde y 2 opciones (orientador y cambio de vista). Patrón ARIA `tablist`, navegable con flechas. Máx. 480 px en desktop. |
| **NeedList** | Filas de navegación del orientador (texto, edad, flecha). Enlaza y abre la ficha. |
| **ProgramAccordion** | Grupo de ProgramCard con una sola abierta a la vez. Etiquetas de grupo. |
| **ProgramCard** | Encabezado (`button aria-expanded`) + cuerpo: descripción, horarios, profesor/a, duración, planes, nota opcional y WhatsAppButton. |
| **KeyValueList** | Filas etiqueta–valor con separador. Valor tabular. Se apila con valores largos. |
| **ScheduleTabs** | 4 tabs de día. Por defecto, el día actual si tiene clases; si no, el próximo. |
| **ScheduleList** | Filas hora / curso / edad → abre ProgramCard. |
| **PlanCard** | Nombre, precio, filas, CTA. Las dos son idénticas en estilo. |
| **Note** | Caja `mist`, radio 8, 14 px. Solo para aclaraciones confirmadas en `docs/content.md` (Baby Swift, Competitivo, Taller). |
| **TrustBlock** | Foto 16:9 + H3 + texto breve; lista (Equipo), Gallery (Seguridad e instalaciones) y link secundario opcional. |
| **Gallery** | Scroll-snap horizontal, ítems al 82 % (móvil) / 48 % (tablet+), sin controles de flecha en móvil. |
| **FAQAccordion** | `details/summary`, icono + que rota 45°. |
| **ContactBlock** | CTA cian + secundarios + dirección + "Cómo llegar". |
| **FloatingWhatsApp** | Píldora fija, visibilidad controlada por IntersectionObserver. Solo <1024. |
| **Footer** | Logo vertical, anclas, contacto, ©. |

---

## 8. Motion

| Qué | Duración | Curva |
|---|---|---|
| Hover/pressed de botones y links | 150 ms | `cubic-bezier(.2,.7,.2,1)` |
| Cambio de tab (contenido) | 150 ms fade | ídem |
| Acordeón abrir/cerrar (altura con `grid-template-rows: 0fr → 1fr`) + rotación de icono | 200 ms | ídem |
| Botón flotante aparecer/desaparecer | 250 / 200 ms | ídem |
| Menú móvil (translateY −8 px → 0 + fade) | 200 ms | ídem |
| Scroll a ancla | `scroll-behavior: smooth`, con `scroll-padding-top` igual al alto del header + 16 px | — |

**No se usan:** animaciones de entrada al hacer scroll, parallax, carruseles automáticos, contadores animados, ondas animadas ni loops.

**`prefers-reduced-motion: reduce`:** transiciones a 0 ms (salvo opacity ≤ 100 ms), scroll instantáneo y el botón flotante aparece sin desplazamiento.

---

## 9. Accesibilidad

- **Contraste:** AA en todos los textos (ver tabla de la sección 2). El cian nunca se usa como texto sobre claro y `#0092F4` nunca como texto.
- **Enlace "Saltar al contenido"** como primer elemento de la página: oculto hasta recibir foco; al enfocarse aparece arriba a la izquierda como botón `primary`.
- **Foco visible** en todo elemento interactivo (`:focus-visible`, anillo de 3 px). Nunca `outline: none` sin reemplazo.
- **Área táctil** mínima de 44 × 44 px; botones de 48 px o más; filas de lista de 56–64 px.
- **Semántica:**
  - un solo H1;
  - H2 por sección;
  - H3 en fichas, planes y bloques;
  - `nav`, `main`, `footer`, `section` con `aria-labelledby`;
  - listas reales para horarios y equipo.
- **Estados sin depender del color:** tab activo (fondo + `aria-selected`), acordeón (borde + icono + `aria-expanded`) y edad siempre como texto.
- **Tabs y acordeones** con patrones ARIA correctos y navegación por teclado.
- **Links externos** (WhatsApp, Instagram, Maps) anunciados en el `aria-label`.
- **Imágenes:** `alt` descriptivo; `alt=""` solo en fotos decorativas repetidas.
- **Reduced motion** respetado (sección 8).
- **Zoom:** la página funciona al 200 % sin scroll horizontal.

---

## 10. Responsive

La referencia es **360 px**. Cada breakpoint suma; no hay que "arreglar" nada hacia abajo.

| Rango | Cambios |
|---|---|
| **360–479** (base) | 1 columna, gutter de 16, secciones de 48. Hero apilado con foto 16:10. Datos clave en lista vertical. Tabs y CTAs a ancho completo. Planes apilados. Galería al 82 %. Botón flotante activo. |
| **480–767** (móvil grande) | Datos clave del hero en línea. Resto igual. |
| **768–1023** (tablet) | Gutter de 24, secciones de 64. Orientador en 2 columnas. Planes lado a lado. La escuela en 2 × 2. Galería al 48 %. Contacto en 2 columnas. Header móvil con botón flotante. |
| **≥1024** (desktop) | Gutter de 32, secciones de 96, container de 1120. Header con nav y WhatsApp; sin botón flotante. Hero en 2 columnas. Programas en maestro–detalle. Tabs segmentados con máx. 480 px. H1 de 44 px, H2 de 32 px, precio de 40 px. |

---

## 11. Principios de diseño

1. **Mobile-first.** Se diseña y valida a 360 px antes que cualquier otro ancho.
2. **Claridad antes que decoración.** Si un elemento no ayuda a entender, elegir o contactar, se quita.
3. **Fotografía real antes que imágenes genéricas.** Nunca stock que parezca de la escuela, nunca imágenes generadas.
4. **Agua y deporte sin clichés.** Un único motivo gráfico (carril); sin olas, burbujas ni delfines ilustrados.
5. **Una identidad válida para bebés, niños y adultos.** Ni guardería ni club de élite.
6. **Competencia presente pero no dominante.** Vive en su ficha y en un bloque de confianza.
7. **WhatsApp visible en los puntos de decisión.** No en cada sección; un solo acceso persistente por dispositivo.
8. **Accesibilidad desde el diseño inicial.** Contrastes, foco y áreas táctiles son parte del sistema, no un ajuste final.
9. **Consistencia antes que variedad.** Pocos componentes, reutilizados; ningún valor fuera de los tokens.
10. **No inventar información para llenar espacios.** Un dato pendiente se marca, no se reemplaza con texto genérico.
11. **Planes con el mismo peso.** Ningún plan se destaca sin información real que lo justifique.
12. **El logo no se toca.** Se usan los SVG oficiales: *light* sobre claro y *dark* sobre navy.

---

## 12. Pendientes

| Tema | Estado |
|---|---|
| Fotos en mayor resolución | Llegarán más adelante. Se implementa con las actuales respetando los límites de ancho definidos (`bebe-y-padre-piscina.png` y `categoria-infantil-con-padres.jpg` a ~360 px máx.). Al reemplazarlas se mantienen nombre de archivo, recorte y alt. |
| Foto del director en contexto de escuela | Deseable, para un eventual retrato en Equipo. |
| Fotos de adultos y Taller | No existen fotos propias. Baby Swift tiene solo una, de baja resolución (`bebe-y-padre-piscina.png`). Las fichas funcionan sin foto; no se usan placeholders visuales. |
| `profesor-director-dirigiendo-entrenamiento-salvavidas-en-playa.jpg` | Confirmar si es una actividad de la escuela y si hay permiso de los adultos que aparecen. |
| Corrección de color de fotos de piscinas | A realizar en la etapa de optimización de assets. |
