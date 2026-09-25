/**
 * Punto de entrada único de JS del sitio. Se importa una sola vez desde
 * BaseLayout. Cada módulo es responsable de una sola interacción
 * (DESIGN.md §8 — motion contenido, sin dependencias).
 */
import { initTabs, activateTabById } from './tabs';
import { initProgramAccordion, initProgramLinks, initOpenViewLinks } from './programs';
import { initHeaderScrollShadow, initMobileMenu, initFloatingWhatsapp } from './site';

// Días en el mismo orden que src/data/programs.ts, con su índice de
// JavaScript (Date#getDay(): 0 = domingo … 6 = sábado).
const DAY_TAB_BY_JS_INDEX: Record<number, string> = {
  0: 'domingo',
  2: 'martes',
  3: 'miercoles',
  6: 'sabado',
};
const CLASS_DAYS_JS = [0, 2, 3, 6]; // orden de semana, domingo primero

function defaultScheduleDay(): string {
  const today = new Date().getDay();
  const next = CLASS_DAYS_JS.find((d) => d >= today) ?? CLASS_DAYS_JS[0];
  return DAY_TAB_BY_JS_INDEX[next];
}

function initScheduleDefaultDay(): void {
  const tablist = document.getElementById('schedule-day-tabs');
  if (!tablist) return;
  activateTabById(tablist, defaultScheduleDay());
}

initTabs();
initProgramAccordion();
initProgramLinks();
initOpenViewLinks();
initHeaderScrollShadow();
initMobileMenu();
initFloatingWhatsapp();
initScheduleDefaultDay();
