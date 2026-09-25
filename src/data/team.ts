/**
 * Equipo docente.
 * Fuente: docs/content.md §6.1. Sin teléfonos, sin bios ni fotos individuales
 * ([PENDIENTE] en el brief) — no se muestran placeholders para ese pendiente.
 */

export interface TeamMember {
  name: string;
  role: string;
}

export const team: TeamMember[] = [
  {
    name: 'Cristofer Aguilera',
    role:
      'Director. Profesor de Educación Física y Salvavidas · Natación Competitivo, Natación Adulto Inicial, Natación Adulto Avanzado',
  },
  { name: 'César Cifuentes', role: 'Natación Baby Swift, Natación Inicial' },
  { name: 'Aracely Morales', role: 'Natación Adulto Intermedio' },
  {
    name: 'Sabrina Ladaroch',
    role: 'Terapeuta ocupacional · Taller de Habilidades Sociales con Natación',
  },
];
