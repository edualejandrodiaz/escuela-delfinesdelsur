/**
 * Programas y horarios — fuente única de datos.
 * Fuente: docs/content.md §4 (4.1–4.7). No editar la vista "por día": se deriva de aquí (§4.8).
 *
 * Los nombres de programas, edades, horarios, profesores y mensajes de WhatsApp
 * son copy final. No modificar sin actualizar antes docs/brief.md y docs/content.md.
 */

export type PlanId = 'deportivo' | 'intensivo';

export type DayName = 'Martes' | 'Miércoles' | 'Sábado' | 'Domingo';
export type DayShort = 'Mar' | 'Mié' | 'Sáb' | 'Dom';

export const DAYS: { name: DayName; short: DayShort }[] = [
  { name: 'Martes', short: 'Mar' },
  { name: 'Miércoles', short: 'Mié' },
  { name: 'Sábado', short: 'Sáb' },
  { name: 'Domingo', short: 'Dom' },
];

export interface ScheduleSlot {
  day: DayName;
  dayShort: DayShort;
  start: string;
  end: string;
  /** Minutos desde medianoche, para ordenar la vista "Por día". */
  startMinutes: number;
}

export interface Program {
  /** Ancla de sección, tal como en docs/content.md (`id: programa-…`). */
  id: string;
  group: 'ninos' | 'adultos' | 'competicion';
  /** Nombre oficial y completo. No abreviar. */
  name: string;
  ageLabel: string;
  /** Resumen de la fila cerrada del acordeón: "{edad} · {días}". */
  summary: string;
  audience: string;
  description: string;
  instructorLabel: 'Profesor' | 'Profesora' | 'A cargo de';
  instructorName: string;
  duration: string;
  plans: PlanId[];
  note?: string;
  /** data-cta del botón de WhatsApp de la ficha. */
  waCta: string;
  waMessage: string;
  schedule: ScheduleSlot[];
}

function slot(day: DayName, dayShort: DayShort, start: string, end: string, startMinutes: number): ScheduleSlot {
  return { day, dayShort, start, end, startMinutes };
}

export const programs: Program[] = [
  {
    id: 'programa-baby-swift',
    group: 'ninos',
    name: 'Natación Baby Swift',
    ageLabel: 'Hasta 4 años',
    summary: 'Hasta 4 años · Mié, Sáb',
    audience: 'Niños de hasta 4 años, con su madre o padre',
    description: 'El primer contacto con el agua, para niños de hasta 4 años.',
    instructorLabel: 'Profesor',
    instructorName: 'César Cifuentes',
    duration: '60 min',
    plans: ['deportivo', 'intensivo'],
    note: 'La madre o el padre pueden entrar al agua con su hijo, con supervisión del profesor.',
    waCta: 'curso-baby-swift',
    waMessage: 'Hola, quiero información sobre Natación Baby Swift.',
    schedule: [
      slot('Miércoles', 'Mié', '18:20', '19:20', 18 * 60 + 20),
      slot('Sábado', 'Sáb', '10:20', '11:20', 10 * 60 + 20),
    ],
  },
  {
    id: 'programa-inicial',
    group: 'ninos',
    name: 'Natación Inicial',
    ageLabel: '5 a 12 años',
    summary: '5 a 12 años · Mar, Mié, Sáb, Dom',
    audience: 'Niños de 5 a 12 años',
    description: 'Clases de natación para niños de 5 a 12 años, con enseñanza adaptada a cada alumno.',
    instructorLabel: 'Profesor',
    instructorName: 'César Cifuentes',
    duration: '60 min',
    plans: ['deportivo', 'intensivo'],
    waCta: 'curso-inicial',
    waMessage: 'Hola, quiero información sobre Natación Inicial.',
    schedule: [
      slot('Martes', 'Mar', '18:20', '19:20', 18 * 60 + 20),
      slot('Miércoles', 'Mié', '19:20', '20:20', 19 * 60 + 20),
      slot('Sábado', 'Sáb', '11:20', '12:20', 11 * 60 + 20),
      slot('Domingo', 'Dom', '10:20', '11:20', 10 * 60 + 20),
    ],
  },
  {
    id: 'programa-habilidades-sociales',
    group: 'ninos',
    name: 'Taller de Habilidades Sociales con Natación',
    ageLabel: '7 a 12 años',
    summary: '7 a 12 años · Dom',
    audience: 'Niños de 7 a 12 años, neurodivergentes y dentro del espectro autista',
    description:
      'Un taller en el agua para niños de 7 a 12 años, neurodivergentes y dentro del espectro autista.',
    instructorLabel: 'A cargo de',
    instructorName: 'Sabrina Ladaroch, terapeuta ocupacional',
    duration: '60 min',
    plans: ['deportivo'],
    note: 'Es una herramienta más a la que las familias pueden optar, sin compromiso de resultados.',
    waCta: 'curso-habilidades-sociales',
    waMessage: 'Hola, quiero información sobre el Taller de Habilidades Sociales con Natación.',
    schedule: [slot('Domingo', 'Dom', '13:00', '14:00', 13 * 60)],
  },
  {
    id: 'programa-adulto-inicial',
    group: 'adultos',
    name: 'Natación Adulto Inicial',
    ageLabel: 'Desde 13 años',
    summary: 'Desde 13 años · Mar, Mié',
    audience: 'Adultos y adolescentes desde 13 años',
    description: 'Para adolescentes y adultos que quieren aprender a nadar correctamente.',
    instructorLabel: 'Profesor',
    instructorName: 'Cristofer Aguilera',
    duration: '60 min',
    plans: ['deportivo', 'intensivo'],
    waCta: 'curso-adulto-inicial',
    waMessage: 'Hola, quiero información sobre Natación Adulto Inicial.',
    schedule: [
      slot('Martes', 'Mar', '20:20', '21:20', 20 * 60 + 20),
      slot('Miércoles', 'Mié', '21:20', '22:20', 21 * 60 + 20),
    ],
  },
  {
    id: 'programa-adulto-intermedio',
    group: 'adultos',
    name: 'Natación Adulto Intermedio',
    ageLabel: 'Desde 13 años',
    summary: 'Desde 13 años · Mar, Mié, Sáb, Dom',
    audience: 'Adultos y adolescentes desde 13 años',
    description: 'Para adolescentes y adultos que quieren mejorar su técnica y su condición física.',
    instructorLabel: 'Profesora',
    instructorName: 'Aracely Morales',
    duration: '60 min',
    plans: ['deportivo', 'intensivo'],
    waCta: 'curso-adulto-intermedio',
    waMessage: 'Hola, quiero información sobre Natación Adulto Intermedio.',
    schedule: [
      slot('Martes', 'Mar', '19:20', '20:20', 19 * 60 + 20),
      slot('Miércoles', 'Mié', '20:20', '21:20', 20 * 60 + 20),
      slot('Sábado', 'Sáb', '12:20', '13:20', 12 * 60 + 20),
      slot('Domingo', 'Dom', '11:20', '12:20', 11 * 60 + 20),
    ],
  },
  {
    id: 'programa-adulto-avanzado',
    group: 'adultos',
    name: 'Natación Adulto Avanzado',
    ageLabel: 'Desde 13 años',
    summary: 'Desde 13 años · Mar, Mié',
    audience: 'Adultos y adolescentes desde 13 años',
    description:
      'Para adolescentes y adultos que quieren perfeccionar su técnica y desarrollar una práctica deportiva.',
    instructorLabel: 'Profesor',
    instructorName: 'Cristofer Aguilera',
    duration: '60 min',
    plans: ['deportivo', 'intensivo'],
    waCta: 'curso-adulto-avanzado',
    waMessage: 'Hola, quiero información sobre Natación Adulto Avanzado.',
    schedule: [
      slot('Martes', 'Mar', '21:20', '22:20', 21 * 60 + 20),
      slot('Miércoles', 'Mié', '22:20', '23:20', 22 * 60 + 20),
    ],
  },
  {
    id: 'programa-competitivo',
    group: 'competicion',
    name: 'Natación Competitivo',
    ageLabel: 'Desde 14 años',
    summary: 'Desde 14 años · Mar, Sáb, Dom · 80 min',
    audience: 'Nadadores desde 14 años',
    description: 'Formación y preparación para la competencia, desde los 14 años.',
    instructorLabel: 'Profesor',
    instructorName: 'Cristofer Aguilera',
    duration: '80 min',
    plans: ['deportivo', 'intensivo'],
    note: 'Las clases de 80 minutos tienen el mismo precio que los demás programas.',
    waCta: 'curso-competitivo',
    waMessage: 'Hola, quiero información sobre Natación Competitivo.',
    schedule: [
      slot('Martes', 'Mar', '17:00', '18:20', 17 * 60),
      slot('Sábado', 'Sáb', '9:00', '10:20', 9 * 60),
      slot('Domingo', 'Dom', '9:00', '10:20', 9 * 60),
    ],
  },
];

export const groupLabels: Record<Program['group'], string> = {
  ninos: 'Niños y familias',
  adultos: 'Adolescentes y adultos (13+)',
  competicion: 'Competición (14+)',
};

export const groupOrder: Program['group'][] = ['ninos', 'adultos', 'competicion'];

/** Vista "Por día" (docs/content.md §4.8): derivada, nunca editada a mano. */
export interface DayRow {
  program: Program;
  slot: ScheduleSlot;
}

export function getScheduleByDay(): Record<DayName, DayRow[]> {
  const byDay: Record<DayName, DayRow[]> = {
    Martes: [],
    Miércoles: [],
    Sábado: [],
    Domingo: [],
  };
  for (const program of programs) {
    for (const s of program.schedule) {
      byDay[s.day].push({ program, slot: s });
    }
  }
  for (const day of Object.keys(byDay) as DayName[]) {
    byDay[day].sort((a, b) => a.slot.startMinutes - b.slot.startMinutes);
  }
  return byDay;
}

export function findProgram(id: string): Program | undefined {
  return programs.find((p) => p.id === id);
}
