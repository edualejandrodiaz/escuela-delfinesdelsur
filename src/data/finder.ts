/**
 * Orientador "¿Qué estás buscando?"
 * Fuente: docs/content.md §3.
 */

export interface FinderNeed {
  text: string;
  age: string;
  targetId: string;
}

export const finderTabs: { id: 'hijo' | 'yo'; label: string; needs: FinderNeed[] }[] = [
  {
    id: 'hijo',
    label: 'Para mi hijo o hija',
    needs: [
      { text: 'Su primer contacto con el agua', age: 'Hasta 4 años', targetId: 'programa-baby-swift' },
      { text: 'Que aprenda a nadar', age: '5 a 12 años', targetId: 'programa-inicial' },
      {
        text: 'Un espacio adaptado si es neurodivergente o está dentro del espectro autista',
        age: '7 a 12 años',
        targetId: 'programa-habilidades-sociales',
      },
      { text: 'Que entrene para competir', age: 'Desde 14 años', targetId: 'programa-competitivo' },
    ],
  },
  {
    id: 'yo',
    label: 'Para mí',
    needs: [
      { text: 'Aprender a nadar', age: 'Desde 13 años', targetId: 'programa-adulto-inicial' },
      {
        text: 'Mejorar mi técnica y mi condición física',
        age: 'Desde 13 años',
        targetId: 'programa-adulto-intermedio',
      },
      { text: 'Perfeccionar mi técnica y entrenar', age: 'Desde 13 años', targetId: 'programa-adulto-avanzado' },
      { text: 'Entrenar para competir', age: 'Desde 14 años', targetId: 'programa-competitivo' },
    ],
  },
];
