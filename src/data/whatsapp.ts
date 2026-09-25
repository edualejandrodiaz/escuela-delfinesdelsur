/**
 * Mensajes de WhatsApp por contexto — fuente única.
 * Fuente: docs/content.md §10. Los mensajes de programas y planes viven en
 * programs.ts y plans.ts; aquí solo los de contexto general.
 */
import { site } from './site';

export const GENERAL_MESSAGE =
  'Hola, quiero información sobre las clases de natación en Delfines del Sur.';

export const generalWhatsapp = {
  hero: { cta: 'hero', message: GENERAL_MESSAGE },
  header: { cta: 'header', message: GENERAL_MESSAGE },
  menu: { cta: 'menu', message: GENERAL_MESSAGE },
  fab: { cta: 'fab', message: GENERAL_MESSAGE },
  contacto: { cta: 'contacto', message: GENERAL_MESSAGE },
  faq: { cta: 'faq', message: 'Hola, tengo una consulta sobre Delfines del Sur.' },
} as const;

/** Construye el enlace de WhatsApp con el mensaje codificado. */
export function whatsappHref(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
