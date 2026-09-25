/**
 * Preguntas frecuentes publicadas.
 * Fuente: docs/content.md §7. Solo respuestas confirmadas: no agregar preguntas
 * de la tabla "No publicadas" de ese documento.
 */

export interface FaqItem {
  question: string;
  answer: string;
  /** HTML permitido solo para el enlace interno de la pregunta 7. */
  answerHtml?: string;
}

export const faqItems: FaqItem[] = [
  {
    question: '¿Necesito saber nadar para empezar?',
    answer:
      'No. La enseñanza se adapta al nivel de experiencia de cada alumno. Si parte desde cero, los programas de inicio son Natación Baby Swift (hasta 4 años), Natación Inicial (5 a 12 años) y Natación Adulto Inicial (desde 13 años).',
  },
  {
    question: '¿Desde qué edad se puede participar?',
    answer:
      'Natación Baby Swift es para niños de hasta 4 años, y Natación Inicial, de 5 a 12. Desde los 13 años, los adolescentes pueden sumarse a los programas de adultos. Natación Competitivo es desde los 14 años. El Taller de Habilidades Sociales con Natación es para niños de 7 a 12 años.',
  },
  {
    question: '¿Cómo funcionan los planes?',
    answer:
      'Hay dos. Plan Deportivo: $50.000 al mes, 4 clases, y eliges el día dentro de los horarios de tu curso. Plan Intensivo: $80.000 al mes, 8 clases, hasta 2 por semana, en días que acordamos contigo. Natación Competitivo tiene el mismo precio, y el Taller de Habilidades Sociales con Natación solo tiene Plan Deportivo.',
  },
  {
    question: '¿Qué incluye la clase?',
    answer: 'Las clases incluyen antiparras y gorro.',
  },
  {
    question: '¿Puedo entrar al agua con mi hijo en Natación Baby Swift?',
    answer: 'Sí. La madre o el padre pueden entrar al agua con su hijo, con supervisión del profesor.',
  },
  {
    question: '¿Qué medidas de seguridad tiene la escuela?',
    answer:
      'La escuela está dirigida por Cristofer Aguilera, Profesor de Educación Física y Salvavidas, y las dependencias cuentan con salvavidas y primeros auxilios.',
  },
  {
    question: '¿Dónde están?',
    answer: 'En Los Patagones 1869, Coronel.',
    answerHtml:
      'En Los Patagones 1869, Coronel. <a class="link" href="#contacto">Cómo llegar</a>',
  },
];
