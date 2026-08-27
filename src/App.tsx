import { useEffect, useMemo, useRef, useState } from "react";
import { notionSourceDigest } from "./notion-sourced";

type CouncilTier = "Core Five" | "Exhibition" | "Specialty" | "Attempted";

const steps = [
  { number: "01", label: "Spot the lie", kicker: "The premise" },
  { number: "02", label: "Measure ROY", kicker: "The exchange rate" },
  { number: "03", label: "Draw the truth", kicker: "The workbench" },
  { number: "04", label: "Use disagreement", kicker: "The council" },
  { number: "05", label: "Ship the proof", kicker: "The handoff" },
];

const council: Array<{ name: string; tier: CouncilTier; role: string; result: string; note: string }> = [
  { name: "Copilot V1", tier: "Core Five", role: "Renderer-level discipline", result: "Round 1 top performer", note: "Configured the Mermaid theme engine instead of decorating individual nodes." },
  { name: "Claude V2", tier: "Core Five", role: "Narrative architecture", result: "Round 2 top performer", note: "Made revision loops visible. Dashed arrows carried the uncomfortable truth." },
  { name: "ChatGPT", tier: "Core Five", role: "Scaffolding and synthesis", result: "Structural benchmark", note: "Strong loop logic and a useful first-pass scaffold." },
  { name: "Perplexity", tier: "Core Five", role: "ROY framing", result: "Conceptual precision", note: "Compressed the argument tightly, with less patience for decorative noise." },
  { name: "Gemini", tier: "Core Five", role: "Maximalist energy", result: "Free-tier ceiling noted", note: "Evaluated fairly, with the different access condition left visible." },
  { name: "ChatGPT V2 Pro", tier: "Exhibition", role: "Raised capability ceiling", result: "Exhibition only", note: "Interesting and instructive, but not a direct comparison with the Core Five." },
  { name: "Notion + Replit", tier: "Specialty", role: "Archivist and builder", result: "Different brief", note: "Useful specialty perspectives. Neither entered the same cold-start contest." },
  { name: "Mermaid AI", tier: "Attempted", role: "Context-blind attempt", result: "Excluded", note: "Jumped to drawing before it understood the argument. That failure is part of the lesson." },
];

const checklist = [
  { id: "claim", label: "The claim is clear before the diagram appears." },
  { id: "loops", label: "The revision path is visible, not politely hidden." },
  { id: "signal", label: "Every shape removes confusion or earns its space." },
  { id: "conditions", label: "Different conditions are labelled before comparison." },
  { id: "handoff", label: "The artifact tells the next person what to do." },
];
const progressStorageKey = "first-diagram-progress";

function BrandMark() { return <span className="brand-lock">OverKill&nbsp;Hill&nbsp;P³™</span>; }

function StepRail({ activeStep, completedSteps, onSelect }: { activeStep: number; completedSteps: number[]; onSelect: (step: number) => void }) {
  return <aside className="step-rail" aria-label="Tutorial steps">
    <div className="rail-brand"><span className="signal-dot" /> FIELD GUIDE / 01</div>
    <div className="rail-line" aria-hidden="true" />
     <nav>{steps.map((step, index) => <button key={step.number} aria-label={`${step.number}. ${step.kicker}: ${step.label}`} aria-current={activeStep === index ? "step" : undefined} className={`rail-step ${activeStep === index ? "is-active" : ""} ${completedSteps.includes(index) ? "is-complete" : ""}`} onClick={() => onSelect(index)}><span className="rail-step-number" aria-hidden="true">{completedSteps.includes(index) ? "✓" : step.number}</span><span><small>{step.kicker}</small>{step.label}</span></button>)}</nav>
    <div className="rail-footer"><span className="mono-label">ROY / 001</span><span>One honest diagram beats a polished lie.</span></div>
  </aside>;
}

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <div className="section-intro"><p className="eyebrow"><span className="eyebrow-mark">↳</span>{eyebrow}</p><h2>{title}</h2><p className="section-copy">{copy}</p></div>;
}

function DiagramWorkbench({ showLoops, onToggleLoops }: { showLoops: boolean; onToggleLoops: () => void }) {
  return <div className="workbench-shell" id="workbench">
    <div className="workbench-toolbar"><div><span className="status-light" /> LIVE MODEL / REVISION 02</div><button className={`toggle-button ${showLoops ? "is-on" : ""}`} onClick={onToggleLoops} aria-label={showLoops ? "Hide revision loopbacks" : "Show revision loopbacks"} aria-pressed={showLoops}><span className="toggle-track"><span /></span>{showLoops ? "Loopbacks visible" : "Happy path only"}</button></div>
     <div className="diagram-stage" aria-label="Interactive diagram showing a non-linear ideation process">
      <svg className="diagram-lines" viewBox="0 0 800 420" role="img" aria-label="Arrows connect a spark to a draft, through an honesty check, and back through revision loops"><defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="currentColor" /></marker></defs><path className="forward-line" d="M108 98 H260" markerEnd="url(#arrow)" /><path className="forward-line" d="M340 98 H500" markerEnd="url(#arrow)" /><path className="forward-line" d="M580 98 C650 98 688 140 688 212" markerEnd="url(#arrow)" /><path className={`loop-line ${showLoops ? "is-visible" : ""}`} d="M640 252 C640 364 432 378 398 248" markerEnd="url(#arrow)" /><path className={`loop-line secondary ${showLoops ? "is-visible" : ""}`} d="M300 248 C260 338 132 334 118 198" markerEnd="url(#arrow)" /></svg>
      <div className="diagram-node node-spark"><span className="node-index">A</span><strong>SPARK</strong><small>Text is getting expensive.</small></div><div className="diagram-node node-draft"><span className="node-index">B</span><strong>ROUGH DRAFT</strong><small>Make the wrong answer visible.</small></div><div className="diagram-node node-check"><span className="node-index">C</span><strong>ROY CHECK</strong><small>Does the visual earn its words?</small></div><div className="diagram-node node-ship"><span className="node-index">D</span><strong>SHIP THE PROOF</strong><small>Clarity survives contact.</small></div><div className={`diagram-loop-label ${showLoops ? "is-visible" : ""}`}>doubt / revise / try again</div><div className="diagram-caption"><span className="legend-line" /> forward motion <span className="legend-dash" /> revision loop</div>
    </div>
  </div>;
}

function SourceRoom() {
  return <section className="source-room" aria-labelledby="source-room-title">
    <div className="source-room-heading"><div><p className="eyebrow"><span className="eyebrow-mark">↳</span>{notionSourceDigest.eyebrow}</p><h3 id="source-room-title">{notionSourceDigest.title}</h3></div><span className="source-room-stamp">PUBLIC-SAFE COPY / 6 PAGES</span></div>
    <p className="source-room-intro">{notionSourceDigest.intro}</p>
    <div className="source-stage-grid">{notionSourceDigest.stages.map((stage) => <article className="source-stage" key={stage.label}><span className="source-stage-label">{stage.label}</span><h4>{stage.title}</h4><p>{stage.copy}</p></article>)}</div>
    <div className="source-receipt-wrap"><div className="panel-kicker">THE PUBLIC RECEIPT STACK</div><div className="source-receipt-grid">{notionSourceDigest.receipts.map((receipt) => <article className="source-receipt" key={receipt.label}><span className="source-stage-label">{receipt.label}</span><h4>{receipt.title}</h4><p>{receipt.copy}</p></article>)}</div></div>
    <div className="source-cycle-wrap"><div className="panel-kicker">THE COUNCIL LOOP</div><div className="source-cycle-grid">{notionSourceDigest.cycle.map((cycle, index) => <article className="source-cycle" key={cycle.label}><span className="source-cycle-number">{String(index + 1).padStart(2, "0")}</span><h4>{cycle.label}</h4><p>{cycle.copy}</p></article>)}</div></div>
    <div className="source-release-wrap"><div className="panel-kicker">THE LINEAGE / STATUS STAYS VISIBLE</div><div className="source-release-grid">{notionSourceDigest.releases.map((release) => <article className={`source-release source-release-${release.status}`} key={release.version}><div className="source-release-top"><span>{release.version}</span><small>{release.status}</small></div><h4>{release.label}</h4><p>{release.copy}</p></article>)}</div></div>
    <p className="source-room-note">{notionSourceDigest.sourceNote}</p>
  </section>;
}

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [words, setWords] = useState(50);
  const [clarity, setClarity] = useState(7);
  const [showLoops, setShowLoops] = useState(true);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [storageReady, setStorageReady] = useState(false);
  const hasNavigated = useRef(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(progressStorageKey);
      if (saved) {
        const parsed = JSON.parse(saved) as unknown;
        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
          const validProgress = Object.fromEntries(checklist.filter((item) => (parsed as Record<string, unknown>)[item.id] === true).map((item) => [item.id, true]));
          setChecked(validProgress);
        }
      }
    } catch {
      try { window.localStorage.removeItem(progressStorageKey); } catch { /* Storage may be blocked. */ }
    } finally {
      setStorageReady(true);
    }
  }, []);
  useEffect(() => {
    if (!storageReady) return;
    try { window.localStorage.setItem(progressStorageKey, JSON.stringify(checked)); } catch { /* Checklist remains usable when storage is unavailable. */ }
  }, [checked, storageReady]);
  useEffect(() => {
    if (!hasNavigated.current) { hasNavigated.current = true; return; }
    document.getElementById("main-content")?.focus();
  }, [activeStep]);

  const royScore = useMemo(() => Math.round((clarity * 50) / words * 10) / 10, [clarity, words]);
  const readyCount = Object.values(checked).filter(Boolean).length;
  const completedSteps = [0, 1, 2, 3, 4].filter((step) => step < activeStep || (step === 4 && readyCount === checklist.length));
  function goToStep(step: number) { setActiveStep(step); window.scrollTo({ top: 0, behavior: "smooth" }); }
  async function copyBrief() { const brief = "Show the real thinking path. Include the decision that could fail, the revision loop, and the test that proves the diagram earns its words. Keep only shapes that remove confusion."; setCopyFailed(false); try { if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable"); await navigator.clipboard.writeText(brief); setCopied(true); window.setTimeout(() => setCopied(false), 1800); } catch { setCopied(false); setCopyFailed(true); } }
  function toggleCheck(id: string) { setChecked((current) => ({ ...current, [id]: !current[id] })); }

  return <><a className="skip-link" href="#main-content">Skip to content</a><div className="app-shell">
    <StepRail activeStep={activeStep} completedSteps={completedSteps} onSelect={goToStep} />
     <main className="main-content" id="main-content" aria-label="Tutorial content" tabIndex={-1}>
      <header className="topbar"><span className="mono-label">ETCH-AI-SKETCH / TUTORIAL APPLICATION</span><a href="https://github.com/OKHP3/first-diagram-is-a-liar" target="_blank" rel="noreferrer">VIEW RECEIPTS ↗</a></header>
       {activeStep === 0 && <section className="hero-section content-width"><div className="hero-copy"><p className="eyebrow"><span className="eyebrow-mark">01</span>THE PREMISE</p><h1>The first diagram<br /><em>is usually a liar.</em></h1><p className="hero-lede">It wants to look resolved before the thinking has earned that confidence. This field guide turns that uncomfortable observation into a working method.</p><div className="hero-actions"><button className="button button-primary" onClick={() => goToStep(1)}>Start the field guide <span>↓</span></button><a className="button button-quiet" href="https://overkillhill.com/writings/first-diagram-is-a-liar/" target="_blank" rel="noreferrer">Read the long form ↗</a></div></div><div className="hero-art" role="img" aria-label="A diagram that begins as a tidy line and then reveals its revision loops"><div className="art-label art-label-top">FIG. 01 / THE LIE</div><div className="art-line line-one" /><div className="art-line line-two" /><div className="art-loop" /><div className="art-node node-one">A</div><div className="art-node node-two">?</div><div className="art-node node-three">B</div><div className="art-stamp">MAKE<br />THE<br />LOOP<br />VISIBLE</div><div className="art-label art-label-bottom">HONESTY IS A STRUCTURAL CHOICE</div></div></section>}
      {activeStep === 1 && <section className="content-width step-section"><SectionIntro eyebrow="02 / THE EXCHANGE RATE" title="Measure what the picture bought." copy="ROY is not a beauty score. It is a pressure test: how much shared understanding did the visual return for the words and effort invested?" /><div className="roy-layout"><div className="panel control-panel"><div className="panel-kicker">YOUR DRAFT INPUT</div><label htmlFor="words">Words invested <output>{words}</output></label><input id="words" type="range" min="20" max="200" step="5" value={words} onChange={(event) => setWords(Number(event.target.value))} /><div className="range-notes"><span>quick sketch</span><span>over-explained</span></div><label htmlFor="clarity">Clarity delivered <output>{clarity}/10</output></label><input id="clarity" type="range" min="1" max="10" value={clarity} onChange={(event) => setClarity(Number(event.target.value))} /><div className="range-notes"><span>muddy</span><span>shared model</span></div><div className="control-callout">A high score is not permission to stop thinking. It is a signal to inspect the assumptions before you ship.</div></div><div className="roy-meter"><div className="meter-head"><span className="panel-kicker">LIVE ROY READOUT</span><span className="meter-status">{royScore >= 5 ? "EARNING SPACE" : "NEEDS WORK"}</span></div><div className="roy-number" aria-live="polite">{royScore}<span>x</span></div><div className="formula"><span>clarity delivered</span><strong>÷</strong><span>words invested</span></div><div className="meter-bar"><span style={{ width: `${Math.min(100, royScore * 10)}%` }} /></div><p>{royScore >= 5 ? "The diagram is starting to pay rent. Now ask what it hides." : "The words are doing too much work. Reduce friction before adding decoration."}</p></div></div><div className="quote-strip"><span className="quote-mark">“</span><p>A picture is not automatically worth 1,000 words. The real metric is the clarity, compression, and shared understanding extracted per word invested.</p><span className="quote-source">LIVE ARTICLE / v0.5</span></div><StepNav previous={0} next={2} onSelect={goToStep} /></section>}
      {activeStep === 2 && <section className="content-width step-section"><SectionIntro eyebrow="03 / THE WORKBENCH" title="Draw the truth, not the brochure." copy="A first pass is allowed to be wrong. The useful correction is to make the wrong turn, doubt, and return path part of the model." /><DiagramWorkbench showLoops={showLoops} onToggleLoops={() => setShowLoops((current) => !current)} /><div className="two-column-notes"><div><span className="note-number">01</span><h3>Start ugly.</h3><p>Get the shape out of your head before you spend time styling it. The first draft is diagnostic equipment.</p></div><div><span className="note-number">02</span><h3>Make revision visible.</h3><p>Solid arrows show what happened. Dashed arrows show what it took to get there. Both are part of the story.</p></div></div><StepNav previous={1} next={3} onSelect={goToStep} /></section>}
      {activeStep === 3 && <section className="content-width step-section"><SectionIntro eyebrow="04 / THE COUNCIL" title="Use disagreement as a variance engine." copy="Multiple models do not magically produce truth. They expose different instincts. The human work is to compare, question, borrow, reject, and synthesize." /><div className="council-grid">{council.map((member, index) => <article className={`council-card tier-${member.tier.toLowerCase()}`} key={member.name}><div className="council-card-top"><span className="tier-pill">{member.tier}</span><span className="card-index">{String(index + 1).padStart(2, "0")}</span></div><h3>{member.name}</h3><p className="member-role">{member.role}</p><p className="member-result">{member.result}</p><p className="member-note">{member.note}</p></article>)}</div><div className="fairness-note"><span className="fairness-icon">!</span><div><strong>Fairness is part of the artifact.</strong><p>Core Five means direct comparison. Exhibition and Specialty entries stay visible, but their different access or context is not flattened into a fake leaderboard.</p></div></div><StepNav previous={2} next={4} onSelect={goToStep} /></section>}
       {activeStep === 4 && <section className="content-width step-section"><SectionIntro eyebrow="05 / THE HANDOFF" title="Ship the proof someone else can use." copy="A tutorial is only useful when it changes the next move. Run the checklist, copy the compact brief, and keep the receipts attached." /><div className="handoff-layout"><div className="panel checklist-panel"><div className="panel-kicker">SHIP CHECK / {readyCount} OF {checklist.length}</div>{checklist.map((item) => <label className={`check-row ${checked[item.id] ? "is-checked" : ""}`} key={item.id}><input type="checkbox" checked={Boolean(checked[item.id])} onChange={() => toggleCheck(item.id)} /><span className="check-box" aria-hidden="true">✓</span><span>{item.label}</span></label>)}</div><div className="panel brief-panel"><div className="panel-kicker">THE COMPACT BRIEF</div><p>Show the real thinking path. Include the decision that could fail, the revision loop, and the test that proves the diagram earns its words. Keep only shapes that remove confusion.</p><button className="button button-primary" onClick={copyBrief}>{copied ? "Copied to clipboard" : copyFailed ? "Try copying again" : "Copy the brief"} <span>{copied ? "✓" : "↗"}</span></button><p className="copy-status" role="status" aria-live="polite">{copyFailed ? "Clipboard access is unavailable. Select the brief above to copy it manually." : copied ? "Brief copied to your clipboard." : ""}</p></div></div><div className="final-card"><div><p className="eyebrow"><span className="eyebrow-mark">↳</span>THE POINT</p><h3>The winning diagram did not exist in any single output.</h3><p>It emerged from comparing the field. That is the method: make the disagreement inspectable, then make a human decision.</p></div><div className="final-mark">ROY<br /><span>∞</span></div></div><SourceRoom /><div className="source-links"><span className="panel-kicker">KEEP GOING</span><a href="https://github.com/OKHP3/first-diagram-is-a-liar/tree/main/archive/diagramming-shootout" target="_blank" rel="noreferrer">Browse the preserved experiment ↗</a><a href="https://github.com/OKHP3/first-diagram-is-a-liar/tree/main/archive/diagramming-shootout/prompts" target="_blank" rel="noreferrer">Read all eight prompts ↗</a><a href="https://github.com/OKHP3/first-diagram-is-a-liar/tree/main/archive/editorial-cut" target="_blank" rel="noreferrer">Inspect the editorial cut ↗</a><a href="https://github.com/OKHP3/first-diagram-is-a-liar/blob/main/docs/notion-source-reconciliation-2026-08-27.md" target="_blank" rel="noreferrer">Read the source map ↗</a></div><StepNav previous={3} next={0} onSelect={goToStep} last /></section>}
      <footer className="site-footer"><span><BrandMark /> / Precision · Protocol · Promptcraft</span><span>Built as a working tutorial, not a written exercise in hypocrisy.</span></footer>
     </main>
   </div></>;
}

function StepNav({ previous, next, onSelect, last = false }: { previous: number; next: number; onSelect: (step: number) => void; last?: boolean }) {
  return <div className="step-nav"><button className="button button-quiet" onClick={() => onSelect(previous)}>← Previous</button><button className="button button-primary" onClick={() => onSelect(next)}>{last ? "Run it again" : "Next field test"} <span>→</span></button></div>;
}

export default App;

