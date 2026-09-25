/**
 * Planes mensuales.
 * Fuente: docs/content.md §5.
 */
import type { PlanId } from './programs';

export interface Plan {
  id: PlanId;
  name: string;
  price: string;
  period: string;
  classesLabel: string;
  classesValue: string;
  daysLabel: string;
  daysValue: string;
  waCta: string;
  waMessage: string;
}

export const plans: Plan[] = [
  {
    id: 'deportivo',
    name: 'Plan Deportivo',
    price: '$50.000',
    period: '/ mes',
    classesLabel: 'Clases',
    classesValue: '4 al mes',
    daysLabel: 'Días',
    daysValue: 'Eliges el día, dentro de los horarios de tu curso',
    waCta: 'plan-deportivo',
    waMessage: 'Hola, quiero información sobre el Plan Deportivo.',
  },
  {
    id: 'intensivo',
    name: 'Plan Intensivo',
    price: '$80.000',
    period: '/ mes',
    classesLabel: 'Clases',
    classesValue: '8 al mes, hasta 2 por semana',
    daysLabel: 'Días',
    daysValue: '2 días por semana, dentro de los horarios de tu curso y acordados contigo',
    waCta: 'plan-intensivo',
    waMessage: 'Hola, quiero información sobre el Plan Intensivo.',
  },
];

/** Texto común bajo ambas tarjetas (docs/content.md §5). */
export const plansFooter = {
  included: 'Ambos planes incluyen antiparras y gorro.',
  notes: [
    'Natación Competitivo (clases de 80 minutos) tiene el mismo precio.',
    'El Taller de Habilidades Sociales con Natación solo tiene Plan Deportivo.',
  ],
};
