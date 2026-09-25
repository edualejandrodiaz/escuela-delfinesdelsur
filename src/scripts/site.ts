/**
 * Header (sombra al hacer scroll + menú móvil) y botón flotante de WhatsApp.
 * DESIGN.md §6 (Header, Botón flotante de WhatsApp).
 */

const FOCUSABLE = 'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])';

export function initHeaderScrollShadow(): void {
  const header = document.querySelector<HTMLElement>('.site-header');
  if (!header) return;
  let ticking = false;
  const update = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
    ticking = false;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );
  update();
}

export function initMobileMenu(): void {
  const toggle = document.getElementById('menu-toggle') as HTMLButtonElement | null;
  const panel = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('menu-close') as HTMLButtonElement | null;
  if (!toggle || !panel) return;

  let lastFocused: HTMLElement | null = null;

  function open() {
    lastFocused = document.activeElement as HTMLElement | null;
    panel!.hidden = false;
    toggle!.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    const first = panel!.querySelector<HTMLElement>(FOCUSABLE);
    first?.focus();
    document.addEventListener('keydown', onKeydown);
  }

  function close() {
    panel!.hidden = true;
    toggle!.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKeydown);
    (lastFocused ?? toggle)?.focus();
  }

  function onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      close();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusables = Array.from(panel!.querySelectorAll<HTMLElement>(FOCUSABLE));
    if (focusables.length === 0) return;
    const firstEl = focusables[0];
    const lastEl = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === firstEl) {
      event.preventDefault();
      lastEl.focus();
    } else if (!event.shiftKey && document.activeElement === lastEl) {
      event.preventDefault();
      firstEl.focus();
    }
  }

  toggle.addEventListener('click', () => (panel.hidden ? open() : close()));
  closeBtn?.addEventListener('click', close);
  panel.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));
}

export function initFloatingWhatsapp(): void {
  const fab = document.querySelector<HTMLElement>('.fab-whatsapp');
  const heroCta = document.querySelector<HTMLElement>('[data-hero-cta]');
  const contact = document.getElementById('contacto');
  if (!fab || !heroCta || !contact) return;

  let heroVisible = true;
  let contactVisible = false;

  function update() {
    fab!.classList.toggle('is-visible', !heroVisible && !contactVisible);
  }

  const heroObserver = new IntersectionObserver(
    ([entry]) => {
      heroVisible = entry.isIntersecting;
      update();
    },
    { threshold: 0 }
  );
  const contactObserver = new IntersectionObserver(
    ([entry]) => {
      contactVisible = entry.isIntersecting;
      update();
    },
    { threshold: 0 }
  );

  heroObserver.observe(heroCta);
  contactObserver.observe(contact);
}
