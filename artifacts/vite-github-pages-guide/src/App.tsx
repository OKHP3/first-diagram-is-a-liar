import { type ReactNode, useEffect, useMemo, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import {
  ArrowDown,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Clipboard,
  Compass,
  ExternalLink,
  FileCode2,
  Flag,
  Github,
  Hash,
  Menu,
  RotateCcw,
  Terminal,
  X,
} from 'lucide-react';
import { GuideStep } from '@/components/guide-step';
import {
  checklistItems,
  contractRows,
  orientationFacts,
  preflightSteps,
  sections,
  troubleshootingSteps,
  validationSteps,
} from '@/data/guide-content';

const queryClient = new QueryClient();

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function CopyBlock({
  code,
  label,
  testId,
}: {
  code: string;
  label: string;
  testId: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = code;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="command-card overflow-hidden rounded-xl" data-testid={`code-block-${testId}`}>
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
        <span className="eyebrow text-white/55">{label}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="copy-button inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs font-semibold"
          data-testid={`button-copy-${testId}`}
          aria-label={`Copy ${label}`}
        >
          {copied ? <Check size={14} /> : <Clipboard size={14} />}
          <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-5 text-[13px] leading-7 sm:px-6" data-testid={`text-code-${testId}`}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function SectionHeading({
  number,
  kicker,
  title,
  children,
}: {
  number: string;
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-10 grid gap-5 md:grid-cols-[96px_1fr]">
      <div className="eyebrow pt-1 text-[hsl(var(--accent))]">{number} / {kicker}</div>
      <div>
        <h2 className="font-display max-w-3xl text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl" data-testid={`heading-${kicker.toLowerCase().replaceAll(' ', '-')}`}>
          {title}
        </h2>
        <div className="mt-5 max-w-2xl text-[1.05rem] leading-8 text-[hsl(var(--muted-foreground))]">
          {children}
        </div>
      </div>
    </div>
  );
}

function Sidebar({
  activeSection,
  progress,
  mobileOpen,
  onClose,
}: {
  activeSection: string;
  progress: number;
  mobileOpen: boolean;
  onClose: () => void;
}) {
  return (
    <aside
      id="guide-navigation"
      aria-label="Guide navigation"
      className={`guide-sidebar fixed inset-y-0 left-0 z-40 w-[286px] overflow-hidden px-6 py-7 transition-transform duration-300 md:translate-x-0 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
      data-testid="navigation-sidebar"
    >
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between">
          <button
            type="button"
            onClick={() => scrollToSection('orientation')}
            className="text-left"
            data-testid="button-guide-mark"
          >
            <span className="eyebrow text-white/55">Field manual</span>
            <span className="mt-2 block font-display text-[1.65rem] leading-none tracking-[-0.04em]">Pages, proven.</span>
          </button>
          <button type="button" onClick={onClose} className="rounded-md p-1 text-white/70 md:hidden" data-testid="button-close-navigation" aria-label="Close navigation">
            <X size={19} />
          </button>
        </div>

        <div className="mt-10">
          <div className="mb-3 flex items-center justify-between text-[11px] text-white/55">
            <span className="eyebrow">Read progress</span>
            <span className="font-mono-ui" data-testid="text-progress-percentage">{progress}%</span>
          </div>
          <div className="progress-track h-1.5 overflow-hidden rounded-full" role="progressbar" aria-label="Guide read progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
            <div className="progress-fill h-full rounded-full" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <nav className="mt-9" aria-label="Guide sections">
          <p className="eyebrow mb-3 text-white/40">Route map</p>
          <ol className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={onClose}
                  className="guide-nav-link flex items-center gap-3 rounded-md px-2.5 py-2.5 text-sm text-white/72"
                  data-active={activeSection === section.id}
                  data-testid={`link-section-${section.id}`}
                >
                  <span className="font-mono-ui text-[11px] text-white/40">{section.number}</span>
                  <span>{section.label}</span>
                  {activeSection === section.id && <ArrowRight size={14} className="ml-auto text-[hsl(var(--accent))]" />}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-auto border-t border-white/15 pt-5 text-sm leading-6 text-white/55">
          <p className="font-display text-lg leading-6 text-white/85">Keep this open beside your terminal.</p>
          <p className="mt-2">A local green build is a starting signal, not live proof.</p>
        </div>
      </div>
    </aside>
  );
}

function MobileHeader({ onOpen, open }: { onOpen: () => void; open: boolean }) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[hsl(var(--foreground)/.12)] bg-[hsl(var(--background)/.9)] px-5 py-4 backdrop-blur-md md:hidden">
      <button type="button" onClick={onOpen} aria-expanded={open} aria-controls="guide-navigation" className="inline-flex items-center gap-2 text-sm font-semibold" data-testid="button-open-navigation">
        <Menu size={18} />
        Guide index
      </button>
      <span className="eyebrow text-[hsl(var(--primary))]">Vite / Pages</span>
    </header>
  );
}

function Note({
  tone = 'teal',
  icon,
  title,
  children,
}: {
  tone?: 'teal' | 'coral' | 'ink';
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  const toneClass = tone === 'coral'
    ? 'border-[hsl(var(--accent)/.45)] bg-[hsl(var(--accent)/.11)]'
    : tone === 'ink'
      ? 'border-[hsl(var(--foreground)/.16)] bg-[hsl(var(--foreground)/.055)]'
      : 'border-[hsl(var(--primary)/.35)] bg-[hsl(var(--primary)/.07)]';
  return (
    <aside className={`my-7 flex gap-4 rounded-xl border p-5 ${toneClass}`} data-testid={`note-${title.toLowerCase().replaceAll(' ', '-')}`}>
      <div className="mt-0.5 shrink-0 text-[hsl(var(--primary))]">{icon}</div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <div className="mt-1 text-sm leading-6 text-[hsl(var(--muted-foreground))]">{children}</div>
      </div>
    </aside>
  );
}

function Home() {
  const [activeSection, setActiveSection] = useState('orientation');
  const [progress, setProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [checked, setChecked] = useState<string[]>([]);

  useEffect(() => {
    document.title = 'Vite to GitHub Pages: Field Guide';
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0);
      const current = sections.reduce((found, section) => {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= 180) return section.id;
        return found;
      }, 'orientation');
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const completion = useMemo(() => Math.round((checked.length / checklistItems.length) * 100), [checked.length]);

  const toggleCheck = (id: string) => {
    setChecked((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  };

  return (
    <div className="guide-shell">
      <Sidebar activeSection={activeSection} progress={progress} mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      {mobileOpen && <button type="button" aria-label="Close navigation overlay" onClick={() => setMobileOpen(false)} className="fixed inset-0 z-30 bg-[hsl(var(--foreground)/.28)] md:hidden" data-testid="button-navigation-overlay" />}
          <MobileHeader onOpen={() => setMobileOpen(true)} open={mobileOpen} />

      <main className="md:pl-[286px]">
        <div className="mx-auto max-w-[1160px] px-5 pb-20 sm:px-9 lg:px-16">
          <GuideStep id="orientation" testId="section-orientation" className="relative pb-24 pt-16 sm:pt-24 lg:pb-32 lg:pt-32">
            <div className="pointer-events-none absolute -right-10 top-10 hidden select-none font-display text-[17rem] leading-none text-[hsl(var(--primary)/.055)] lg:block">↗</div>
            <div className="animate-rise relative">
              <div className="eyebrow flex items-center gap-3 text-[hsl(var(--primary))]">
                <span className="inline-block h-2 w-2 rounded-full bg-[hsl(var(--accent))]" />
                Vite → GitHub Pages / field guide 01
              </div>
              <h1 className="font-display mt-7 max-w-5xl text-[clamp(3.5rem,8vw,7.7rem)] leading-[.88] tracking-[-0.07em]" data-testid="heading-page-title">
                Ship it to Pages.<br />
                <span className="text-[hsl(var(--primary))]">Prove it in Pages.</span>
              </h1>
              <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px] lg:items-end">
                <p className="max-w-2xl text-xl leading-8 text-[hsl(var(--muted-foreground))]" data-testid="text-hero-introduction">
                  A practical runbook for a client-only Vite SPA headed for GitHub Pages. The destination is simple. The details are where confident-looking deploys go to disappear.
                </p>
                <div className="border-l-2 border-[hsl(var(--accent))] pl-5 text-sm leading-6">
                  <span className="eyebrow text-[hsl(var(--accent))]">The premise</span>
                  <p className="mt-2">Local success is a hypothesis. A fresh-browser visit to the deployed site is evidence.</p>
                </div>
              </div>
              <button type="button" onClick={() => scrollToSection('contract')} className="mt-12 inline-flex items-center gap-3 rounded-full bg-[hsl(var(--primary))] px-5 py-3 text-sm font-semibold text-[hsl(var(--primary-foreground))] transition-transform hover:-translate-y-0.5" data-testid="button-begin-guide">
                Start with the contract <ArrowDown size={16} />
              </button>
            </div>

            <div className="mt-24 grid gap-3 sm:grid-cols-3" data-testid="orientation-facts">
              {orientationFacts.map(([number, title, copy]) => (
                <div key={number} className="principle-card rounded-xl border border-[hsl(var(--foreground)/.13)] bg-[hsl(var(--card)/.74)] p-5" data-testid={`card-orientation-${number}`}>
                  <span className="font-mono-ui text-xs text-[hsl(var(--accent))]">{number}</span>
                  <h2 className="mt-7 font-display text-2xl tracking-[-.03em]">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[hsl(var(--muted-foreground))]">{copy}</p>
                </div>
              ))}
            </div>
          </GuideStep>

          <GuideStep id="contract" testId="section-contract">
            <SectionHeading number="01" kicker="The contract" title="Write down the rules before you write the fix.">
              GitHub Pages is not serving your Vite project from the same root as localhost. Make the path contract explicit, then make every layer agree with it. This is the part you can inspect without a network connection.
            </SectionHeading>
              <div className="overflow-hidden rounded-xl border border-[hsl(var(--foreground)/.15)] bg-[hsl(var(--card)/.72)]" role="table" aria-label="GitHub Pages deployment contract" data-testid="contract-table">
              <div className="grid grid-cols-[minmax(110px,.7fr)_minmax(180px,1fr)_1.3fr] border-b border-[hsl(var(--foreground)/.13)] bg-[hsl(var(--primary)/.08)] px-4 py-3 text-[11px] font-semibold uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))] sm:px-6" role="row">
                <span role="columnheader">Surface</span><span role="columnheader">Value</span><span role="columnheader">Why it matters</span>
              </div>
              {contractRows.map(([surface, value, why], index) => (
                <div key={surface} className="grid grid-cols-[minmax(110px,.7fr)_minmax(180px,1fr)_1.3fr] gap-3 border-b border-[hsl(var(--foreground)/.1)] px-4 py-4 text-sm last:border-0 sm:px-6" role="row">
                  <span className="font-semibold" role="cell">{surface}</span>
                  <code className="font-mono-ui text-[hsl(var(--primary))]" role="cell" data-testid={`text-contract-value-${index}`}>{value}</code>
                  <span className="text-[hsl(var(--muted-foreground))]" role="cell">{why}</span>
                </div>
              ))}
            </div>
            <Note icon={<Hash size={19} />} title="Why HashRouter belongs here">
              A hash route keeps the client-side location after the server has returned the one static document it knows. BrowserRouter can work with a server rewrite; GitHub Pages does not give this project one by default.
            </Note>
          </GuideStep>

          <GuideStep id="preflight" testId="section-preflight">
            <SectionHeading number="02" kicker="Preflight" title="Ask the repository three boring questions.">
              Before touching configuration, establish what is actually true. These checks are fast, deterministic, and much cheaper than debugging a green workflow that uploaded the wrong folder.
            </SectionHeading>
            <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
              <div>
                <CopyBlock label="Terminal / repository root" testId="preflight" code={`git status --short
cat package.json
npm ci
npm run build
test -f dist/404.html && echo "fallback present"`} />
                <div className="mt-9 space-y-5">
                  {preflightSteps.map(([letter, title, copy]) => (
                    <article key={letter} className="flex gap-4" data-testid={`article-preflight-${letter}`}>
                      <span className="step-number shrink-0">{letter}</span>
                      <div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-[hsl(var(--muted-foreground))]">{copy}</p></div>
                    </article>
                  ))}
                </div>
              </div>
              <aside className="h-fit rounded-xl border border-[hsl(var(--foreground)/.13)] bg-[hsl(var(--secondary)/.7)] p-5">
                <div className="flex items-center gap-2 text-[hsl(var(--primary))]"><Terminal size={17} /><span className="eyebrow">Preflight signal</span></div>
                <p className="mt-5 font-display text-2xl leading-tight">If the artifact is vague, the deploy is vague.</p>
                <p className="mt-4 text-sm leading-6 text-[hsl(var(--muted-foreground))]">Name the output directory. Inspect it. Then give it to the Pages action.</p>
              </aside>
            </div>
          </GuideStep>

          <GuideStep id="implementation" testId="section-implementation">
            <SectionHeading number="03" kicker="Implementation" title="Make the path boring in every file.">
              The smallest reliable implementation is explicit: a production base in Vite, a root base during development, HashRouter in the app, and an Actions workflow that uploads the build output. Avoid cleverness that only your laptop understands.
            </SectionHeading>
            <div className="grid gap-6 lg:grid-cols-2">
              <CopyBlock label="vite.config.ts" testId="vite-config" code={`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/kierans-lifetrkr/' : '/',
  plugins: [react()],
}))`} />
              <CopyBlock label="src/main.tsx / routing" testId="router" code={`import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>,
)`} />
            </div>
            <div className="mt-6">
              <CopyBlock label=".github/workflows/pages.yml" testId="workflow" code={`- name: Install dependencies
  run: npm ci
- name: Build
  run: npm run build
- name: Upload Pages artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: ./dist`} />
            </div>
            <Note tone="coral" icon={<FileCode2 size={19} />} title="The 404 copy is an artifact step, not a browser trick.">
              Create or copy <code className="font-mono-ui text-[hsl(var(--foreground))]">dist/404.html</code> as part of the build process before upload. It belongs beside <code className="font-mono-ui text-[hsl(var(--foreground))]">index.html</code> in the published artifact.
            </Note>
          </GuideStep>

          <GuideStep id="validation" testId="section-validation">
            <SectionHeading number="04" kicker="Validation" title="Separate the four moments people call “deployed.”">
              A workflow can pass while the site is wrong. Validation is a ladder: each rung proves something different. Do not use the confidence from one rung to skip the next.
            </SectionHeading>
            <div className="space-y-3" data-testid="validation-ladder">
              {validationSteps.map(([number, title, description, proof]) => (
                <article key={number} className="group grid gap-4 rounded-xl border border-[hsl(var(--foreground)/.13)] bg-[hsl(var(--card)/.58)] p-5 transition-transform hover:-translate-y-0.5 sm:grid-cols-[56px_1fr_auto] sm:items-center sm:p-6" data-testid={`card-validation-${number}`}>
                  <span className="font-mono-ui text-sm text-[hsl(var(--accent))]">{number}</span>
                  <div><h3 className="font-display text-2xl tracking-[-.03em]">{title}</h3><p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">{description}</p></div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[hsl(var(--secondary))] px-3 py-1.5 text-xs font-semibold text-[hsl(var(--muted-foreground))]"><CheckCircle2 size={14} />{proof}</span>
                </article>
              ))}
            </div>
            <Note tone="ink" icon={<Compass size={19} />} title="Fresh means fresh.">
              Validate in a private window or a separate browser profile. This catches stale service workers, cached bundles, and assumptions smuggled in by an already-open tab.
            </Note>
          </GuideStep>

          <GuideStep id="troubleshooting" testId="section-troubleshooting">
            <SectionHeading number="05" kicker="Troubleshooting" title="Read the symptom, then check the layer.">
              Resist the urge to change three things at once. Start with the visible symptom, locate the layer that owns it, and change only the smallest relevant input.
            </SectionHeading>
            <div className="space-y-3">
              {troubleshootingSteps.map(([symptom, layer, fix], index) => (
                <details key={symptom} className="group rounded-xl border border-[hsl(var(--foreground)/.13)] bg-[hsl(var(--card)/.58)]" data-testid={`details-troubleshooting-${index}`}>
                  <summary className="flex cursor-pointer list-none items-center gap-4 p-5 sm:p-6">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[hsl(var(--accent)/.15)] text-[hsl(var(--accent))]"><ChevronDown size={17} className="transition-transform group-open:rotate-180" /></span>
                    <span className="flex-1"><span className="block font-semibold">{symptom}</span><span className="mt-1 block font-mono-ui text-[11px] uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))]">{layer}</span></span>
                  </summary>
                  <div className="border-t border-[hsl(var(--foreground)/.1)] px-5 pb-6 pt-4 pl-[4.75rem] text-sm leading-7 text-[hsl(var(--muted-foreground))] sm:pl-[5.75rem]"><strong className="text-[hsl(var(--foreground))]">Check this:</strong> {fix}</div>
                </details>
              ))}
            </div>
          </GuideStep>

          <GuideStep id="boundaries" testId="section-boundaries">
            <SectionHeading number="06" kicker="Live boundaries" title="Know what this guide can—and cannot—prove.">
              A runbook can make the path observable. It cannot manufacture a successful workflow, inspect your repository, or claim a URL it has not visited. Precision about the boundary is part of the deployment.
            </SectionHeading>
            <div className="grid gap-5 lg:grid-cols-2">
              <article className="rounded-xl border border-[hsl(var(--primary)/.32)] bg-[hsl(var(--primary)/.08)] p-6 sm:p-8" data-testid="card-proves">
                <span className="eyebrow text-[hsl(var(--primary))]">This guide proves</span>
                <ul className="mt-6 space-y-4 text-sm leading-6">
                  {['The exact source contract to implement.', 'The commands that create and inspect dist.', 'The official Actions → Pages deployment shape.', 'The checks needed before calling a site live.'].map((item) => <li key={item} className="flex gap-3"><Check size={17} className="mt-0.5 shrink-0 text-[hsl(var(--primary))]" />{item}</li>)}
                </ul>
              </article>
              <article className="rounded-xl border border-[hsl(var(--accent)/.4)] bg-[hsl(var(--accent)/.09)] p-6 sm:p-8" data-testid="card-does-not-prove">
                <span className="eyebrow text-[hsl(var(--accent))]">This guide does not prove</span>
                <ul className="mt-6 space-y-4 text-sm leading-6">
                  {['That a particular repository is currently deployed.', 'That GitHub Actions has passed for your commit.', 'That a production URL exists or is reachable.', 'That cached visitors see the newest bundle.'].map((item) => <li key={item} className="flex gap-3"><X size={17} className="mt-0.5 shrink-0 text-[hsl(var(--accent))]" />{item}</li>)}
                </ul>
              </article>
            </div>
            <div className="mt-8 flex flex-col gap-5 rounded-xl bg-[hsl(var(--foreground))] p-6 text-[hsl(var(--background))] sm:flex-row sm:items-center sm:justify-between sm:p-8" data-testid="live-boundary-callout">
              <div><span className="eyebrow text-[hsl(var(--accent))]">The only honest live claim</span><p className="mt-3 font-display text-2xl leading-tight sm:text-3xl">“I opened the deployed site and checked it.”</p></div>
              <ExternalLink className="hidden shrink-0 text-[hsl(var(--accent))] sm:block" size={28} />
            </div>
          </GuideStep>

          <GuideStep id="checklist" testId="section-checklist">
            <SectionHeading number="07" kicker="Final checklist" title="Leave the terminal with a clean yes.">
              Check each line against the repository and the deployed experience. This list is intentionally plain: the last five minutes of a deploy deserve less ceremony and more signal.
            </SectionHeading>
            <div className="rounded-xl border border-[hsl(var(--foreground)/.14)] bg-[hsl(var(--card)/.72)] p-4 sm:p-6" data-testid="checklist-panel">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-4 border-b border-[hsl(var(--foreground)/.12)] pb-5">
                <div>
                  <span className="eyebrow text-[hsl(var(--primary))]">Ship readiness</span>
                  <p className="mt-2 font-display text-2xl" data-testid="text-checklist-progress">{checked.length} of {checklistItems.length} checked</p>
                </div>
                <button type="button" onClick={() => setChecked([])} className="inline-flex items-center gap-2 rounded-md border border-[hsl(var(--foreground)/.16)] px-3 py-2 text-xs font-semibold transition-colors hover:bg-[hsl(var(--secondary))]" data-testid="button-reset-checklist">
                  <RotateCcw size={14} /> Reset
                </button>
              </div>
              <div className="space-y-2">
                {checklistItems.map((item) => {
                  const isChecked = checked.includes(item.id);
                  return (
                    <label key={item.id} className="check-row flex cursor-pointer items-start gap-3 rounded-lg border border-transparent p-3.5 text-sm leading-6" data-testid={`checklist-item-${item.id}`}>
                      <input id={`check-${item.id}`} type="checkbox" checked={isChecked} onChange={() => toggleCheck(item.id)} className="sr-only" aria-labelledby={`check-label-${item.id}`} data-testid={`checkbox-${item.id}`} />
                      <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded border ${isChecked ? 'border-[hsl(var(--primary))] bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]' : 'border-[hsl(var(--foreground)/.28)]'}`} aria-hidden="true">
                        {isChecked && <Check size={14} strokeWidth={3} />}
                      </span>
                      <span id={`check-label-${item.id}`} className="check-label">{item.label}</span>
                    </label>
                  );
                })}
              </div>
              <div className="mt-6 h-2 overflow-hidden rounded-full bg-[hsl(var(--secondary))]" role="progressbar" aria-label="Checklist completion" aria-valuemin={0} aria-valuemax={100} aria-valuenow={completion}>
                <div className="h-full rounded-full bg-[hsl(var(--accent))] transition-[width] duration-500" style={{ width: `${completion}%` }} />
              </div>
            </div>
            <div className="mt-14 text-center">
              <Flag className="mx-auto text-[hsl(var(--accent))]" size={25} />
              <h2 className="font-display mt-5 text-4xl tracking-[-.04em] sm:text-5xl" data-testid="heading-final-signal">Now go look at the site.</h2>
              <p className="mx-auto mt-4 max-w-xl text-[hsl(var(--muted-foreground))]">The workflow is a means. The browser is the witness. If the live check has not happened, the deploy story is not finished yet.</p>
              <button type="button" onClick={() => scrollToSection('orientation')} className="mt-8 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--foreground)/.2)] px-5 py-3 text-sm font-semibold transition-colors hover:bg-[hsl(var(--secondary))]" data-testid="button-return-to-top">
                <ArrowRight size={16} className="rotate-180" /> Read from the top
              </button>
            </div>
          </GuideStep>
        </div>
        <footer className="border-t border-[hsl(var(--foreground)/.13)] px-5 py-8 sm:px-9 lg:px-16" data-testid="footer-guide">
          <div className="mx-auto flex max-w-[1160px] flex-col gap-3 text-xs text-[hsl(var(--muted-foreground))] sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono-ui">VITE → GITHUB PAGES / FIELD GUIDE</span>
            <span>Precise about paths. Candid about proof.</span>
            <a href="https://docs.github.com/en/pages" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-[hsl(var(--primary))] hover:underline" data-testid="link-github-pages-docs">
              GitHub Pages docs <Github size={14} />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Router() {
  return (
    <ErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </ErrorBoundary>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;