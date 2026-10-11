const modes = [
  { id: "light", label: "Light mode", path: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5" /></> },
  { id: "system", label: "System preference", path: <><rect x="3" y="3" width="18" height="13" rx="2" /><path d="M12 16v5m-4 0h8" /></> },
  { id: "dark", label: "Dark mode", path: <path d="M20.5 13A9 9 0 0 1 11 3.5 9 9 0 1 0 20.5 13Z" /> },
];

export function AppearanceControls() {
  return <div className="display-tools">
    <a className="repo-icon" href="https://github.com/OKHP3/first-diagram-is-a-liar" target="_blank" rel="noreferrer" aria-label="View First Diagram on GitHub (opens in a new tab)" title="Source and receipts on GitHub">
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.12c-3.08.67-3.73-1.31-3.73-1.31-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.14 1.7 1.14.99 1.7 2.59 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.46-.28-5.05-1.23-5.05-5.48 0-1.21.43-2.2 1.14-2.97-.11-.28-.49-1.41.11-2.94 0 0 .93-.3 3.05 1.13A10.6 10.6 0 0 1 12 6.21c.94 0 1.88.13 2.76.37 2.12-1.43 3.05-1.13 3.05-1.13.6 1.53.22 2.66.11 2.94.71.77 1.14 1.76 1.14 2.97 0 4.26-2.59 5.2-5.06 5.48.4.35.75 1.02.75 2.06v3.09c0 .3.2.65.76.54A11.1 11.1 0 0 0 12 .9Z" /></svg>
    </a>
    <div className="theme-switch" role="group" aria-label="Color theme">
      {modes.map(({ id, label, path }) => <button key={id} type="button" data-color-mode={id} aria-label={label} title={label} aria-pressed={document.documentElement.dataset.colorMode === id}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{path}</svg>
      </button>)}
    </div>
  </div>;
}
