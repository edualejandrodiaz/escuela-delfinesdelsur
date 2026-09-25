# Delfines del Sur — Landing Page

## 1. Rol de este archivo

Este archivo define las reglas de trabajo para Claude Code en este proyecto.

Antes de modificar código, contenido o diseño, Claude debe entender y respetar las fuentes de verdad del proyecto.

### Fuentes de verdad

* `docs/brief.md` → fuente de verdad del negocio, público, cursos, planes, contenidos y restricciones.
* `docs/sitemap.md` → arquitectura y estructura de la landing.
* `docs/content.md` → copy aprobado o propuesto para la interfaz.
* `DESIGN.md` → fuente de verdad visual: dirección de arte, sistema visual, tipografía, colores, componentes y criterios de diseño.
* `docs/decisions.md` → decisiones importantes tomadas durante el proyecto.
* OpenDesign → herramienta de apoyo para explorar, evaluar y refinar decisiones de diseño y experiencia.

Si existe conflicto entre documentos, no inventar una solución silenciosamente. Identificar el conflicto y seguir la fuente de verdad más específica.

---

# 2. Regla principal: no inventar

No inventar:

* cursos;
* precios;
* horarios;
* profesores;
* testimonios;
* certificaciones;
* instalaciones;
* resultados;
* fotografías;
* datos de contacto;
* beneficios médicos o terapéuticos;
* afirmaciones competitivas;
* información sobre alumnos;
* información sobre el equipo.

Si un dato necesario no está confirmado, marcarlo como pendiente o solicitar confirmación.

No convertir información marcada como pendiente en una afirmación pública.

---

# 3. Objetivo del proyecto

Crear una landing page para Delfines del Sur que permita a una persona entender rápidamente:

1. qué es la escuela;
2. para quién son sus programas;
3. qué cursos existen;
4. cuándo se realizan;
5. cuánto cuestan;
6. por qué confiar en la escuela;
7. cómo contactar.

La conversión principal es mediante WhatsApp.

Instagram es un canal secundario.

La experiencia debe funcionar especialmente bien para usuarios que llegan desde móvil, Instagram, Google o WhatsApp.

---

# 4. Principios de marca

La experiencia debe equilibrar:

* familia;
* aprendizaje;
* disciplina;
* inclusión;
* desarrollo deportivo;
* competencia.

No convertir la marca en una escuela exclusivamente infantil.

No convertirla tampoco en un centro exclusivamente orientado al alto rendimiento.

La percepción buscada es:

* agua, no acuario;
* deporte, no gimnasio;
* familia, no jardín infantil;
* competencia, no intimidación;
* accesibilidad, no comunicación genérica.

La identidad debe transmitir una escuela deportiva acuática real, cercana y profesional.

---

# 5. Audiencia

Considerar principalmente dos grandes grupos:

### Apoderados

Personas que buscan actividades acuáticas para:

* bebés;
* niños;
* jóvenes;
* niños que participan en programas específicos de habilidades sociales;
* jóvenes con interés competitivo.

### Adultos

Personas que buscan:

* aprender a nadar;
* mejorar técnica;
* entrenar;
* mejorar condición física;
* desarrollar habilidades acuáticas;
* eventualmente competir.

No diseñar la experiencia exclusivamente pensando en niños.

---

# 6. Arquitectura y contenido

Antes de realizar cambios importantes en la estructura de la página:

1. leer `docs/brief.md`;
2. leer `docs/sitemap.md`;
3. revisar `docs/content.md` si existe;
4. revisar `DESIGN.md`;
5. revisar `docs/decisions.md` si existe.

No tratar el brief como contenido que deba aparecer completo en la página.

El brief es la fuente de verdad, pero la landing debe seleccionar, jerarquizar y resumir la información.

La arquitectura debe priorizar comprensión y conversión.

---

# 7. Mobile-first

Diseñar y desarrollar pensando primero en teléfonos.

La experiencia móvil debe ser clara sin depender de:

* tablas difíciles de leer;
* grandes bloques de texto;
* scroll horizontal innecesario;
* exceso de tarjetas;
* navegación compleja;
* repetición de información.

Especial atención a:

* navegación;
* hero;
* cursos;
* horarios;
* planes;
* FAQ;
* CTA de WhatsApp.

Los horarios deben permitir encontrar rápidamente la información relevante para cada curso.

No asumir que una tabla desktop con `overflow-x` es una buena solución móvil.

---

# 8. Conversión y WhatsApp

WhatsApp es el CTA principal.

Los CTA deben aparecer cuando tienen sentido dentro de la narrativa, no después de cada bloque.

Utilizar CTAs contextuales.

Ejemplos:

* información general;
* información de un curso específico;
* información sobre planes;
* contacto.

Cuando sea posible, los enlaces de WhatsApp asociados a cursos deben incluir un mensaje predefinido específico.

Ejemplo:

> Hola, quiero información sobre Natación Inicial.

No modificar el número público de WhatsApp sin confirmación.

No publicar números personales de profesores si el brief no los autoriza.

---

# 9. Cursos

Los nombres de los cursos deben respetarse exactamente según `docs/brief.md`.

No crear cursos nuevos ni modificar sus nombres para mejorar SEO o copy sin autorización.

No inferir categorías de edad o características que no estén confirmadas.

Los cursos deben poder identificarse rápidamente desde móvil.

---

# 10. Planes y precios

Los precios confirmados son información importante.

No esconderlos exclusivamente al final de la página.

Los planes deben presentarse de manera clara y comparable.

No crear descuentos, promociones, matrículas, condiciones comerciales o beneficios que no estén en el brief.

---

# 11. Taller de Habilidades Sociales con Natación

Tratar este programa con especial cuidado.

No realizar afirmaciones médicas, terapéuticas o de resultados garantizados.

No presentar el programa como tratamiento.

Utilizar únicamente la información autorizada en `docs/brief.md`.

Si el brief establece limitaciones o ausencia de compromiso de resultados, respetarlas en el contenido y en la interfaz.

---

# 12. Competencia deportiva

La competencia forma parte de la identidad de Delfines del Sur, pero no debe dominar toda la comunicación.

Debe coexistir con:

* aprendizaje;
* desarrollo;
* familia;
* inclusión;
* práctica deportiva.

Cualquier información marcada como pendiente de autorización en el brief no debe convertirse en una afirmación pública.

---

# 13. Imágenes y assets

Utilizar únicamente imágenes y assets disponibles y autorizados.

No inventar fotografías de:

* alumnos;
* profesores;
* instalaciones;
* competencias;
* eventos.

No generar imágenes que pretendan representar fotografías reales de Delfines del Sur.

No reemplazar fotografías reales por imágenes genéricas sin indicarlo.

No modificar ni recrear el logo.

Utilizar los archivos oficiales del logo cuando estén disponibles.

---

# 14. Sistema visual

`DESIGN.md` es la fuente de verdad visual.

Respetar:

* colores;
* tipografía;
* jerarquía;
* espaciado;
* componentes;
* estilos;
* dirección fotográfica;
* comportamiento responsive;
* criterios de accesibilidad.

No introducir una nueva dirección visual sin actualizar primero `DESIGN.md`.

No usar estilos arbitrarios únicamente porque "se ven bien".

---

# 15. OpenDesign

OpenDesign debe utilizarse como parte del proceso de diseño y desarrollo.

Su función es ayudar a:

* explorar alternativas de diseño;
* validar jerarquía visual;
* analizar composición;
* mantener consistencia;
* revisar decisiones de UI;
* detectar problemas de UX;
* iterar sobre componentes y páginas.

OpenDesign no reemplaza las fuentes de verdad del proyecto.

### Antes de diseñar

Claude debe conocer:

* `docs/brief.md`;
* `docs/sitemap.md`;
* `docs/content.md`;
* `DESIGN.md`.

### Durante la exploración

Cuando existan varias soluciones posibles:

1. explorar alternativas;
2. comparar las alternativas según los objetivos del proyecto;
3. elegir una dirección;
4. documentar decisiones importantes;
5. mantener consistencia con `DESIGN.md`.

No introducir patrones visuales únicamente porque son tendencias actuales.

El diseño debe responder al negocio, al público y al contenido real de Delfines del Sur.

### Durante la implementación

La implementación debe reproducir fielmente las decisiones aprobadas.

No crear una segunda dirección visual dentro del código.

Si una decisión de implementación contradice `DESIGN.md`, detenerse y revisar la decisión antes de continuar.

---

# 16. Accesibilidad

La landing debe ser accesible y usable.

Priorizar:

* contraste suficiente;
* jerarquía semántica;
* botones y enlaces identificables;
* tamaños táctiles adecuados;
* navegación por teclado;
* estados de foco;
* textos alternativos relevantes;
* formularios comprensibles;
* reducción de movimiento cuando corresponda.

No utilizar color como único mecanismo para comunicar información.

---

# 17. Performance

Priorizar una landing rápida.

Evitar:

* librerías innecesarias;
* JavaScript innecesario;
* imágenes excesivamente pesadas;
* animaciones costosas;
* efectos que afecten la lectura o interacción.

Las imágenes deben estar optimizadas para web.

Las animaciones deben reforzar la experiencia, no competir con el contenido.

---

# 18. SEO

Implementar SEO básico sin sacrificar claridad ni experiencia de usuario.

Priorizar:

* títulos correctos;
* meta description;
* jerarquía de headings;
* contenido semántico;
* textos descriptivos;
* imágenes con alt adecuado;
* Open Graph;
* datos locales únicamente cuando estén confirmados.

No introducir keywords artificiales o repetitivas.

No inventar ubicaciones, servicios o atributos para SEO.

---

# 19. Código

Antes de crear código nuevo:

1. revisar la implementación existente;
2. reutilizar componentes cuando corresponda;
3. evitar duplicación;
4. mantener una estructura simple;
5. respetar las convenciones del proyecto.

No agregar dependencias sin una razón clara.

No realizar refactors grandes durante una tarea pequeña salvo que sean necesarios para completar correctamente la tarea.

---

# 20. Cambios incrementales

Trabajar por etapas.

Cada cambio importante debe tener un objetivo claro.

Preferir:

* cambios pequeños;
* componentes reutilizables;
* commits conceptualmente simples;
* validación después de cada etapa.

No modificar simultáneamente arquitectura, diseño visual y contenido sin necesidad.

---

# 21. Validación

Después de implementar cambios relevantes, revisar:

### Contenido

* ¿Los datos coinciden con el brief?
* ¿Hay información inventada?
* ¿Se modificó accidentalmente algún dato?

### UX

* ¿La propuesta se entiende rápidamente?
* ¿Funciona bien en móvil?
* ¿Es fácil encontrar cursos, horarios y precios?
* ¿El camino hacia WhatsApp es evidente?

### Visual

* ¿Respeta `DESIGN.md`?
* ¿Mantiene consistencia entre secciones?
* ¿Las jerarquías visuales son claras?

### Responsive

Revisar como mínimo:

* móvil;
* tablet;
* desktop.

### Accesibilidad

Revisar:

* contraste;
* foco;
* navegación;
* tamaños táctiles;
* alt text;
* semántica.

### Performance

Revisar:

* peso de imágenes;
* carga inicial;
* JavaScript innecesario;
* animaciones.

---

# 22. Antes de modificar archivos

Para tareas que involucren diseño, arquitectura o contenido, primero revisar los documentos relevantes.

No asumir que una decisión no existe simplemente porque no aparece en el código.

Para tareas importantes, indicar brevemente:

* qué archivos se revisaron;
* qué se va a modificar;
* por qué.

Después ejecutar el cambio.

---

# 23. Manejo de incertidumbre

Cuando exista información ambigua:

* no inventar;
* no asumir;
* identificar la incertidumbre;
* consultar la fuente correspondiente;
* si sigue sin estar definida, marcarla como pendiente.

Si hay dos documentos con información contradictoria, señalar el conflicto antes de implementar.

---

# 24. Regla de oro

La landing debe sentirse como una escuela de natación real y confiable, no como una plantilla genérica de marketing.

Cada decisión debe responder a esta pregunta:

> ¿Esto ayuda a una persona real a entender Delfines del Sur, encontrar un programa adecuado y dar el siguiente paso?

Si la respuesta es no, reconsiderar la decisión.
