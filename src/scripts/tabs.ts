/**
 * Controlador genérico de pestañas (patrón ARIA `tablist`).
 * Usado por: Orientador (2 pestañas), Programas (Por programa / Por día) y
 * Horarios (4 días). DESIGN.md §7 — SegmentedTabs / ScheduleTabs.
 */

function reducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function activateTab(tablist: HTMLElement, tab: HTMLButtonElement, focusTab = false): void {
  const tabs = Array.from(tablist.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
  for (const t of tabs) {
    const selected = t === tab;
    t.setAttribute('aria-selected', String(selected));
    t.tabIndex = selected ? 0 : -1;
    const panelId = t.getAttribute('aria-controls');
    if (panelId) {
      const panel = document.getElementById(panelId);
      if (panel) panel.hidden = !selected;
    }
  }
  if (focusTab) tab.focus();
  tablist.dispatchEvent(
    new CustomEvent('tabchange', { detail: { tabId: tab.dataset.tabId }, bubbles: true })
  );
}

export function activateTabById(tablist: HTMLElement | null, tabId: string, focusTab = false): void {
  if (!tablist) return;
  const tab = tablist.querySelector<HTMLButtonElement>(`[data-tab-id="${tabId}"]`);
  if (tab) activateTab(tablist, tab, focusTab);
}

export function initTabs(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>('[data-tabs]').forEach((tablist) => {
    const tabs = Array.from(tablist.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
    if (tabs.length === 0) return;

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => activateTab(tablist, tab));
      tab.addEventListener('keydown', (event) => {
        let nextIndex = i;
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (i + 1) % tabs.length;
        else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp')
          nextIndex = (i - 1 + tabs.length) % tabs.length;
        else if (event.key === 'Home') nextIndex = 0;
        else if (event.key === 'End') nextIndex = tabs.length - 1;
        else return;
        event.preventDefault();
        activateTab(tablist, tabs[nextIndex], true);
      });
    });
  });
}

export { reducedMotion };
