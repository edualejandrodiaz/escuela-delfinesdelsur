/**
 * Datos institucionales y de contacto.
 * Fuente: docs/brief.md (v5) — docs/content.md §1, §8, §9, §12.
 */

export const site = {
  name: 'Delfines del Sur',
  fullName: 'Delfines del Sur — Escuela de Natación',
  url: 'https://delfinesdelsur.cl',
  locale: 'es_CL',
  lang: 'es-CL',

  phoneDisplay: '+56 9 3955 3821',
  phoneE164: '+56939553821',
  phoneHref: 'tel:+56939553821',

  whatsappNumber: '56939553821',

  instagramHandle: '@delfines_del_sur',
  instagramUrl: 'https://www.instagram.com/delfines_del_sur/',

  address: {
    line1: 'Los Patagones 1869, Coronel',
    line2: 'Provincia de Concepción',
    street: 'Los Patagones 1869',
    locality: 'Coronel',
    region: 'Provincia de Concepción',
    country: 'CL',
  },

  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Los+Patagones+1869,+Coronel,+Chile',

  director: {
    name: 'Cristofer Aguilera',
    role: 'Profesor de Educación Física y Salvavidas',
  },
} as const;

/** docs/content.md §12 — SEO y metadata. */
export const seo = {
  title: 'Delfines del Sur · Escuela de natación en Coronel',
  description:
    'Clases de natación en Coronel para bebés, niños, adolescentes y adultos. Piscina temperada y al aire libre. Planes desde $50.000 al mes.',
  ogTitle: 'Delfines del Sur — Escuela de natación en Coronel',
  ogDescription:
    'Aprende, crece y compite en el agua. Programas para todas las edades en Coronel, Provincia de Concepción.',
  ogImage: '/og-image.jpg',
  ogImageAlt: 'Alumnos de Delfines del Sur en el borde de la piscina temperada',
} as const;

/** docs/sitemap.md §4 — Umami Cloud. */
export const analytics = {
  umamiWebsiteId: 'c68d1912-9e8e-487e-a2af-9d91b247dcbb',
  umamiDomains: 'delfinesdelsur.cl',
} as const;

/** docs/content.md §1 — anclas de navegación (5, en este orden). */
export const navLinks = [
  { label: 'Programas', href: '#programas' },
  { label: 'Horarios', href: '#programas', openView: 'dia' as const },
  { label: 'Planes', href: '#planes' },
  { label: 'La escuela', href: '#escuela' },
  { label: 'Contacto', href: '#contacto' },
];
