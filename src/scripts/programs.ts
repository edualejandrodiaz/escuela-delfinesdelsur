/**
 * Acordeón de programas + navegación desde el Orientador y la vista "Por día".
 * DESIGN.md §6 (Programas y horarios) y §7 (ProgramAccordion, ProgramCard).
 */
import { activateTabById, reducedMotion } from './tabs';

function collapseAll(exceptId?: string): void {
  document.querySelectorAll<HTMLElement>('.program-card').forEach((card) => {
    const toggle = card.querySelector<HTMLButtonElement>('.program-card__toggle');
    const body = card.querySelector<HTMLElement>('.program-card__body');
    if (!toggle || !body) return;
    const isTarget = card.id === exceptId;
    toggle.setAttribute('aria-expanded', String(isTarget));
    body.hidden = !isTarget;
  });
}

/** Cambia a "Por programa", abre la ficha indicada y le lleva el scroll/foco. */
export function openProgram(id: string): void {
  const target = document.getElementById(id);
  if (!target) return;

  const viewTabs = document.getElementById('programs-view-tabs');
  activateTabById(viewTabs, 'programa');

  collapseAll(id);

  const behavior: ScrollBehavior = reducedMotion() ? 'auto' : 'smooth';
  const toggle = target.querySelector<HTMLButtonElement>('.program-card__toggle');
  // Se hace scroll al botón, no al <article>: en el layout maestro–detalle
  // de escritorio, `.program-card` es `display:contents` y no tiene caja
  // propia (scrollIntoView no funcionaría sobre él).
  const scrollTarget = toggle ?? target;
  // Espera al frame siguiente: el tabpanel recién se hizo visible.
  requestAnimationFrame(() => {
    scrollTarget.scrollIntoView({ behavior, block: 'start' });
    toggle?.focus({ preventScroll: true });
  });
}

export function initProgramAccordion(): void {
  document.querySelectorAll<HTMLButtonElement>('.program-card__toggle').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const card = toggle.closest<HTMLElement>('.program-card');
      const body = toggle.nextElementSibling as HTMLElement | null;
      if (!card || !body) return;
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        toggle.setAttribute('aria-expanded', 'false');
        body.hidden = true;
      } else {
        collapseAll();
        toggle.setAttribute('aria-expanded', 'true');
        body.hidden = false;
      }
    });
  });
}

/** Enlaces que deben abrir una ficha de programa: Orientador y vista "Por día". */
export function initProgramLinks(): void {
  document.querySelectorAll<HTMLAnchorElement>('[data-open-program]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.dataset.openProgram;
      if (!id) return;
      event.preventDefault();
      openProgram(id);
    });
  });
}

/** Ancla "Horarios" del header/menú/footer: abre la vista "Por día" de Programas. */
export function initOpenViewLinks(): void {
  document.querySelectorAll<HTMLAnchorElement>('[data-open-view]').forEach((link) => {
    link.addEventListener('click', () => {
      const view = link.dataset.openView;
      if (!view) return;
      activateTabById(document.getElementById('programs-view-tabs'), view);
      // No se hace preventDefault: el navegador hace el scroll nativo a #programas.
    });
  });
}
