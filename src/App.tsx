import { useEffect, useMemo, useRef, useState } from "react";
import { notionSourceDigest } from "./notion-sourced";
import registrySnapshot from "../archive/notion-captures/visual-language-diagram-types.json";
import { council, councilCriteria } from "./council";
import { buildHandoffMarkdown, HANDOFF_FILENAME, publicSourceLinks } from "./handoff";
import { calculateRoy, getRoyBand, getRoyInterpretation, royPresets } from "./roy";
import { CLAIM_MAX_LENGTH, createDefaultSession, loadSession, persistSession, resetSession, type LiePattern, type SessionState } from "./session";
import { workbenchStates } from "./workbench";

const steps = [
  { number: "01", label: "Spot the lie", kicker: "The premise" },
  { number: "02", label: "Measure ROY", kicker: "The exchange rate" },
  { number: "03", label: "Draw the truth", kicker: "The workbench" },
  { number: "04", label: "Use disagreement", kicker: "The council" },
  { number: "05", label: "Ship the proof", kicker: "The handoff" },
];
const patterns: Array<{ id: LiePattern; label: string; note: string }> = [
  { id: "hidden-loop", label: "Hidden loop", note: "The tidy line hides a return, retry, or revision." },
  { id: "missing-exception", label: "Missing exception", note: "The happy path has a case that breaks its promise." },
  { id: "false-certainty", label: "False certainty", note: "An unresolved choice is presented as settled." },
  { id: "decorative-complexity", label: "Decorative complexity", note: "Extra shapes create work without removing confusion." },
];
const checklist = [
  { id: "claim", label: "The claim is clear before the diagram appears." },
  { id: "loops", label: "The revision path is visible, not politely hidden." },
  { id: "signal", label: "Every shape removes confusion or earns its space." },
  { id: "conditions", label: "Different conditions are labelled before comparison." },
  { id: "handoff", label: "The artifact tells the next person what to do." },
];
const compactBrief = "Show the real thinking path. Include the decision that could fail, the revision loop, and the test that proves the diagram earns its words. Keep only shapes that remove confusion.";
const diagramRegistry = registrySnapshot.records as Array<{ diagramType: string; family: string | null; purpose: string | null; mermaidSupport: string | null; themeConfidence: string | null; examplePriority: string | null; exampleFile: string | null; actionLane: string | null }>;
const registrySupportCounts = diagramRegistry.reduce<Record<string, number>>((counts, record) => { const support = record.mermaidSupport ?? "Unclassified"; counts[support] = (counts[support] ?? 0) + 1; return counts; }, {});

function BrandMark() { return <span className="brand-lock">OverKill&nbsp;Hill&nbsp;P³™</span>; }

function StepRail({ activeStep, completedSteps, onSelect }: { activeStep: number; completedSteps: number[]; onSelect: (step: number) => void }) {
  return <aside className="step-rail" aria-label="Tutorial steps">
    <div className="rail-brand"><span className="signal-dot" /> FIELD GUIDE / 01</div><div className="rail-line" aria-hidden="true" />
    <nav>{steps.map((step, index) => <button key={step.number} aria-label={`${step.number}. ${step.kicker}: ${step.label}`} aria-current={activeStep === index ? "step" : undefined} className={`rail-step ${activeStep === index ? "is-active" : ""} ${completedSteps.includes(index) ? "is-complete" : ""}`} onClick={() => onSelect(index)}><span className="rail-step-number" aria-hidden="true">{completedSteps.includes(index) ? "✓" : step.number}</span><span><small>{step.kicker}</small>{step.label}</span></button>)}</nav>
    <div className="rail-footer"><span className="mono-label">ROY / 001</span><span>One honest diagram beats a polished lie.</span></div>
  </aside>;
}

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <div className="section-intro"><p className="eyebrow"><span className="eyebrow-mark">↳</span>{eyebrow}</p><h2>{title}</h2><p className="section-copy">{copy}</p></div>;
}

function DiagramWorkbench({ revision, showLoops, onRevision, onToggleLoops }: { revision: "v1" | "v2"; showLoops: boolean; onRevision: (revision: "v1" | "v2") => void; onToggleLoops: () => void }) {
  const model = workbenchStates[revision];
  return <div className="workbench-wrap">
    <div className="revision-tabs" role="tablist" aria-label="Workbench revision"><button role="tab" aria-selected={revision === "v1"} className={revision === "v1" ? "is-selected" : ""} onClick={() => onRevision("v1")}>V1 / tidy first pass</button><button role="tab" aria-selected={revision === "v2"} className={revision === "v2" ? "is-selected" : ""} onClick={() => onRevision("v2")}>V2 / honest revision</button></div>
    <div className="workbench-shell" id="workbench">
      <div className="workbench-toolbar"><div><span className="status-light" /> {model.label}</div><button className={`toggle-button ${showLoops ? "is-on" : ""}`} onClick={onToggleLoops} aria-label={showLoops ? "Hide revision loopbacks" : "Show revision loopbacks"} aria-pressed={showLoops}><span className="toggle-track"><span /></span>{showLoops ? "Loopbacks visible" : "Happy path only"}</button></div>
      <div className="diagram-stage" aria-label={`Illustrative ${revision.toUpperCase()} diagram: ${model.visual}`}>
        <svg className="diagram-lines" viewBox="0 0 800 420" role="img" aria-label={model.visual}><defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="currentColor" /></marker></defs><path className="forward-line" d="M108 98 H260" markerEnd="url(#arrow)" /><path className="forward-line" d="M340 98 H500" markerEnd="url(#arrow)" /><path className="forward-line" d="M580 98 C650 98 688 140 688 212" markerEnd="url(#arrow)" />{revision === "v2" && <><path className={`loop-line ${showLoops ? "is-visible" : ""}`} d="M640 252 C640 364 432 378 398 248" markerEnd="url(#arrow)" /><path className={`loop-line secondary ${showLoops ? "is-visible" : ""}`} d="M300 248 C260 338 132 334 118 198" markerEnd="url(#arrow)" /></>}</svg>
        <div className="diagram-node node-spark"><span className="node-index">A</span><strong>SPARK</strong><small>Text is getting expensive.</small></div><div className="diagram-node node-draft"><span className="node-index">B</span><strong>ROUGH DRAFT</strong><small>Make the wrong answer visible.</small></div><div className="diagram-node node-check"><span className="node-index">C</span><strong>ROY CHECK</strong><small>Does the visual earn its words?</small></div><div className="diagram-node node-ship"><span className="node-index">D</span><strong>SHIP THE PROOF</strong><small>Clarity survives contact.</small></div>{revision === "v2" && <div className={`diagram-loop-label ${showLoops ? "is-visible" : ""}`}>doubt / revise / try again</div>}<div className="diagram-caption"><span className="legend-line" /> forward motion <span className="legend-dash" /> revision loop</div>
      </div>
    </div>
    <div className="workbench-evidence"><div><span className="panel-kicker">SOURCE EXCERPT / SELECTABLE</span><pre>{model.source}</pre></div><div><span className="panel-kicker">WHAT CHANGED?</span><p>{model.change}</p><p className="text-alternative"><strong>Text alternative:</strong> {model.visual} {showLoops && model.loopNote}</p></div></div>
    <p className="illustrative-note">Illustrative SVG only - this is a teaching surface, not a live Mermaid parser or general-purpose diagram editor.</p>
  </div>;
}

function SourceRoom() {
  return <section className="source-room" aria-labelledby="source-room-title">
    <div className="source-room-heading"><div><p className="eyebrow"><span className="eyebrow-mark">↳</span>{notionSourceDigest.eyebrow}</p><h3 id="source-room-title">{notionSourceDigest.title}</h3></div><span className="source-room-stamp">PUBLIC-SAFE COPY / 9 PAGES + 1 DB</span></div>
    <p className="source-room-intro">{notionSourceDigest.intro}</p><div className="source-stage-grid">{notionSourceDigest.stages.map((stage) => <article className="source-stage" key={stage.label}><span className="source-stage-label">{stage.label}</span><h4>{stage.title}</h4><p>{stage.copy}</p></article>)}</div>
    <div className="source-receipt-wrap"><div className="panel-kicker">THE PUBLIC RECEIPT STACK</div><div className="source-receipt-grid">{notionSourceDigest.receipts.map((receipt) => <article className="source-receipt" key={receipt.label}><span className="source-stage-label">{receipt.label}</span><h4>{receipt.title}</h4><p>{receipt.copy}</p></article>)}</div></div>
    <div className="source-cycle-wrap"><div className="panel-kicker">THE COUNCIL LOOP</div><div className="source-cycle-grid">{notionSourceDigest.cycle.map((cycle, index) => <article className="source-cycle" key={cycle.label}><span className="source-cycle-number">{String(index + 1).padStart(2, "0")}</span><h4>{cycle.label}</h4><p>{cycle.copy}</p></article>)}</div></div>
    <div className="source-release-wrap"><div className="panel-kicker">THE LINEAGE / STATUS STAYS VISIBLE</div><div className="source-release-grid">{notionSourceDigest.releases.map((release) => <article className={`source-release source-release-${release.status}`} key={release.version}><div className="source-release-top"><span>{release.version}</span><small>{release.status}</small></div><h4>{release.label}</h4><p>{release.copy}</p></article>)}</div></div>
    <div className="source-library panel"><div className="source-library-head"><div><div className="panel-kicker">PUBLIC-SAFE SOURCE COPIES</div><h3>The writer's room, left inspectable.</h3></div><a className="source-library-index" href="https://github.com/OKHP3/first-diagram-is-a-liar/tree/main/archive/notion-captures" target="_blank" rel="noreferrer">Open the source library ↗</a></div><p className="source-library-intro">These normalized copies keep the method, history, and open version questions in the repository without exposing private workspace links or signed attachments.</p></div>
    <div className="registry-snapshot panel"><div className="registry-heading"><div><div className="panel-kicker">ADJACENT NOTION DATABASE / PUBLIC-SAFE SNAPSHOT</div><h3>Diagram support is part of the truth.</h3></div><span className="registry-count">{diagramRegistry.length} records</span></div><p className="registry-intro">Native, partial, emulatable, gap, and external are not interchangeable claims. This adjacent registry is included as a public-safe receipt, not as a promise that this tutorial renders every notation.</p><div className="registry-summary">{["Native", "Partial", "Emulatable", "Gap", "External"].map((support) => <div className="registry-stat" key={support}><strong>{registrySupportCounts[support] ?? 0}</strong><span>{support}</span></div>)}</div><details className="registry-details"><summary>Open the copied registry record set</summary><div className="registry-table-wrap"><table className="registry-table"><caption>Public-safe snapshot of the Notion Visual Language Diagram Types database</caption><thead><tr><th>Diagram type</th><th>Family</th><th>Mermaid support</th><th>Theme confidence</th><th>Priority</th><th>Example</th><th>Action</th></tr></thead><tbody>{diagramRegistry.map((record, index) => <tr key={`${record.diagramType}-${index}`}><td><strong>{record.diagramType}</strong><small>{record.purpose ?? ""}</small></td><td>{record.family ?? "-"}</td><td>{record.mermaidSupport ?? "-"}</td><td>{record.themeConfidence ?? "-"}</td><td>{record.examplePriority ?? "-"}</td><td>{record.exampleFile ?? "-"}</td><td>{record.actionLane ?? "-"}</td></tr>)}</tbody></table></div></details><p className="registry-note">This snapshot omits Notion record IDs, URLs, workspace structure, and private links.</p></div>
    <p className="source-room-note">{notionSourceDigest.sourceNote}</p>
  </section>;
}

function App() {
  const [session, setSession] = useState<SessionState>(() => createDefaultSession());
  const [storageStatus, setStorageStatus] = useState<"saved" | "session-only">("saved");
  const [storageReady, setStorageReady] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const [downloadFailed, setDownloadFailed] = useState(false);
  const [resetMessage, setResetMessage] = useState("");
  const hasNavigated = useRef(false);
  const activeStep = session.activeStep;
  const royScore = useMemo(() => calculateRoy(session.roy.words, session.roy.clarity), [session.roy.words, session.roy.clarity]);
  const readyCount = checklist.filter((item) => session.checklist[item.id]).length;
  const completedSteps = session.visitedSteps.filter((step) => step < activeStep || (step === 4 && readyCount === checklist.length));

  useEffect(() => {
    const result = loadSession(window.localStorage);
    setSession(result.session);
    setStorageStatus(result.available ? "saved" : "session-only");
    setStorageReady(true);
    const hashStep = readHashStep();
    if (hashStep !== null) setSession((current) => ({ ...current, activeStep: hashStep, visitedSteps: [...new Set([...current.visitedSteps, hashStep])] }));
    else if (window.location.hash) window.history.replaceState({}, "", "#step-1");
  }, []);
  useEffect(() => {
    if (!storageReady) return;
    const stored = persistSession(window.localStorage, session);
    if (!stored) setStorageStatus("session-only");
  }, [session, storageReady]);
  useEffect(() => {
    const onHash = () => { const step = readHashStep(); if (step !== null) setSession((current) => ({ ...current, activeStep: step, visitedSteps: [...new Set([...current.visitedSteps, step])] })); };
    window.addEventListener("hashchange", onHash); window.addEventListener("popstate", onHash);
    return () => { window.removeEventListener("hashchange", onHash); window.removeEventListener("popstate", onHash); };
  }, []);
  useEffect(() => { if (!hasNavigated.current) { hasNavigated.current = true; return; } document.getElementById("main-content")?.focus(); }, [activeStep]);

  function updateSession(change: (current: SessionState) => SessionState) {
    setSession((current) => change({ ...current, updatedAt: Date.now() }));
  }
  function goToStep(step: number) {
    const safeStep = Math.max(0, Math.min(4, step));
    updateSession((current) => ({ ...current, activeStep: safeStep, visitedSteps: [...new Set([...current.visitedSteps, safeStep])] }));
    window.history.pushState({}, "", `#step-${safeStep + 1}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function selectPremise(pattern: LiePattern) { updateSession((current) => ({ ...current, premise: { ...current.premise, pattern } })); }
  async function copyBrief() {
    setCopyFailed(false);
    try { if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable"); const generatedDate = session.handoff.generatedDate || new Date().toISOString().slice(0, 10); await navigator.clipboard.writeText(buildHandoffMarkdown({ ...session, handoff: { ...session.handoff, generatedDate } }, generatedDate)); updateSession((current) => ({ ...current, handoff: { ...current.handoff, copied: true, generatedDate } })); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { setCopied(false); setCopyFailed(true); }
  }
  function downloadHandoff() {
    setDownloadFailed(false); setCopyFailed(false);
    try {
      if (!window.URL?.createObjectURL || !document.body) throw new Error("Local downloads are unavailable");
      const generatedDate = session.handoff.generatedDate || new Date().toISOString().slice(0, 10);
      const content = buildHandoffMarkdown({ ...session, handoff: { ...session.handoff, generatedDate } }, generatedDate);
      const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
      const url = window.URL.createObjectURL(blob); const link = document.createElement("a"); link.href = url; link.download = HANDOFF_FILENAME; link.rel = "noopener"; link.style.display = "none"; document.body.appendChild(link); link.click(); link.remove(); window.setTimeout(() => window.URL.revokeObjectURL(url), 0);
      updateSession((current) => ({ ...current, handoff: { ...current.handoff, downloaded: true, generatedDate } }));
    } catch { setDownloadFailed(true); }
  }
  function toggleCheck(id: string) { updateSession((current) => ({ ...current, checklist: { ...current.checklist, [id]: !current.checklist[id] } })); }
  function reset() {
    if (!window.confirm("Reset this local learning session? Your premise, controls, and checklist will be cleared.")) return;
    const removed = resetSession(window.localStorage); setSession(createDefaultSession()); setStorageStatus(removed ? "saved" : "session-only"); setResetMessage("Session reset. Nothing was sent anywhere."); window.history.pushState({}, "", "#step-1"); window.setTimeout(() => setResetMessage(""), 3000);
  }

  return <><a className="skip-link" href="#main-content">Skip to content</a><div className="app-shell"><StepRail activeStep={activeStep} completedSteps={completedSteps} onSelect={goToStep} />
    <main className="main-content" id="main-content" aria-label="Tutorial content" tabIndex={-1}>
      <header className="topbar"><span className="mono-label">ETCH-AI-SKETCH / TUTORIAL APPLICATION</span><span className="session-status" role="status">{storageStatus === "saved" ? "Saved locally" : "This session only"} · <button onClick={reset}>Reset session</button></span><a href="https://github.com/OKHP3/first-diagram-is-a-liar" target="_blank" rel="noreferrer">VIEW RECEIPTS ↗</a></header>
      {resetMessage && <p className="reset-message" role="status">{resetMessage}</p>}
      {activeStep === 0 && <section className="hero-section content-width"><div className="hero-copy"><p className="eyebrow"><span className="eyebrow-mark">01</span>THE PREMISE</p><h1>The first diagram<br /><em>is usually a liar.</em></h1><p className="hero-lede">It wants to look resolved before the thinking has earned that confidence. This field guide turns that uncomfortable observation into a working method.</p><div className="hero-actions"><button className="button button-primary" onClick={() => goToStep(1)}>Start the field guide <span>↓</span></button><a className="button button-quiet" href="https://overkillhill.com/writings/first-diagram-is-a-liar/" target="_blank" rel="noreferrer">Read the long form ↗</a></div><div className="premise-capture panel"><div className="panel-kicker">NAME THE LIE / REQUIRED TO MOVE YOUR THINKING</div><fieldset><legend>Which pattern is present?</legend><div className="pattern-grid">{patterns.map((pattern) => <label className={`pattern-choice ${session.premise.pattern === pattern.id ? "is-selected" : ""}`} key={pattern.id}><input type="radio" name="lie-pattern" value={pattern.id} checked={session.premise.pattern === pattern.id} onChange={() => selectPremise(pattern.id)} /><strong>{pattern.label}</strong><span>{pattern.note}</span></label>)}</div></fieldset><label className="claim-label" htmlFor="claim">Optional bounded claim <span>{session.premise.claim.length}/{CLAIM_MAX_LENGTH}</span></label><textarea id="claim" maxLength={CLAIM_MAX_LENGTH} value={session.premise.claim} onChange={(event) => updateSession((current) => ({ ...current, premise: { ...current.premise, claim: event.target.value } }))} placeholder="This diagram claims that…" rows={2} /><p className="field-help">One short claim, not an essay. It stays in this browser and the handoff you choose to download.</p></div></div><div className="hero-art" role="img" aria-label="A diagram that begins as a tidy line and then reveals its revision loops"><div className="art-label art-label-top">FIG. 01 / THE LIE</div><div className="art-line line-one" /><div className="art-line line-two" /><div className="art-loop" /><div className="art-node node-one">A</div><div className="art-node node-two">?</div><div className="art-node node-three">B</div><div className="art-stamp">MAKE<br />THE<br />LOOP<br />VISIBLE</div><div className="art-label art-label-bottom">HONESTY IS A STRUCTURAL CHOICE</div></div></section>}
      {activeStep === 1 && <section className="content-width step-section"><SectionIntro eyebrow="02 / THE EXCHANGE RATE" title="Measure what the picture bought." copy="ROY is not a beauty score. It is a pressure test: how much shared understanding did the visual return for the words and effort invested?" /><div className="roy-layout"><div className="panel control-panel"><div className="panel-kicker">YOUR DRAFT INPUT</div><div className="preset-row"><span className="mono-label">TEACHING PRESETS</span>{royPresets.map((preset) => <button className="preset-button" key={preset.id} onClick={() => updateSession((current) => ({ ...current, roy: { words: preset.words, clarity: preset.clarity, preset: preset.label } }))}>{preset.label}</button>)}</div><label htmlFor="words">Words invested <output>{session.roy.words}</output></label><input id="words" type="range" min="20" max="200" step="5" value={session.roy.words} onChange={(event) => updateSession((current) => ({ ...current, roy: { words: Number(event.target.value), clarity: current.roy.clarity, preset: "" } }))} /><div className="range-notes"><span>quick sketch</span><span>over-explained</span></div><label htmlFor="clarity">Clarity delivered <output>{session.roy.clarity}/10</output></label><input id="clarity" type="range" min="1" max="10" value={session.roy.clarity} onChange={(event) => updateSession((current) => ({ ...current, roy: { words: current.roy.words, clarity: Number(event.target.value), preset: "" } }))} /><div className="range-notes"><span>muddy</span><span>shared model</span></div><div className="formula-note"><strong>ROY = understanding produced ÷ explanation invested</strong><span>We normalize the teaching readout to clarity × 50 ÷ words. The number is bounded and useful for a conversation, not scientific measurement.</span></div><div className="control-callout">A high score is not permission to stop thinking. It is a signal to inspect the assumptions before you ship.</div></div><div className="roy-meter"><div className="meter-head"><span className="panel-kicker">LIVE ROY READOUT</span><span className="meter-status">{getRoyBand(royScore).replace("-", " ").toUpperCase()}</span></div><div className="roy-number" aria-live="polite">{royScore}<span>x</span></div><div className="formula"><span>clarity delivered</span><strong>÷</strong><span>words invested</span></div><div className="meter-bar"><span style={{ width: `${Math.min(100, royScore * 10)}%` }} /></div><p>{getRoyInterpretation(royScore)}</p></div></div><div className="quote-strip"><span className="quote-mark">“</span><p>A picture is not automatically worth 1,000 words. The real metric is the clarity, compression, and shared understanding extracted per word invested.</p><span className="quote-source">LIVE ARTICLE / v0.5</span></div><StepNav previous={0} next={2} onSelect={goToStep} /></section>}
      {activeStep === 2 && <section className="content-width step-section"><SectionIntro eyebrow="03 / THE WORKBENCH" title="Draw the truth, not the brochure." copy="A first pass is allowed to be wrong. Compare the source and the visible state, then make the wrong turn, doubt, and return path part of the model." /><DiagramWorkbench revision={session.workbench.revision} showLoops={session.workbench.showLoops} onRevision={(revision) => updateSession((current) => ({ ...current, workbench: { ...current.workbench, revision } }))} onToggleLoops={() => updateSession((current) => ({ ...current, workbench: { ...current.workbench, showLoops: !current.workbench.showLoops } }))} /><div className="two-column-notes"><div><span className="note-number">01</span><h3>Start ugly.</h3><p>Get the shape out of your head before you spend time styling it. The first draft is diagnostic equipment.</p></div><div><span className="note-number">02</span><h3>Make revision visible.</h3><p>Solid arrows show what happened. Dashed arrows show what it took to get there. Both are part of the story.</p></div></div><StepNav previous={1} next={3} onSelect={goToStep} /></section>}
      {activeStep === 3 && <section className="content-width step-section"><SectionIntro eyebrow="04 / THE COUNCIL" title="Use disagreement as a variance engine." copy="Multiple models do not magically produce truth. Compare one criterion at a time, keep the conditions visible, and make your synthesis inspectable." /><div className="council-controls panel"><div><span className="panel-kicker">COMPARE BY ONE CRITERION</span><div className="criterion-row" role="radiogroup" aria-label="Council comparison criterion">{councilCriteria.map((criterion) => <label className={session.council.criterion === criterion.id ? "is-selected" : ""} key={criterion.id}><input type="radio" name="criterion" value={criterion.id} checked={session.council.criterion === criterion.id} onChange={() => updateSession((current) => ({ ...current, council: { ...current.council, criterion: criterion.id } }))} />{criterion.label}</label>)}</div><p className="criterion-question">{councilCriteria.find((criterion) => criterion.id === session.council.criterion)?.question}</p></div><div><span className="panel-kicker">SYNTHESIS / NO OVERALL WINNER</span><div className="outcome-row" role="radiogroup" aria-label="Synthesis outcome">{(["borrow", "reject", "combine"] as const).map((outcome) => <label className={session.council.outcome === outcome ? "is-selected" : ""} key={outcome}><input type="radio" name="outcome" value={outcome} checked={session.council.outcome === outcome} onChange={() => updateSession((current) => ({ ...current, council: { ...current.council, outcome } }))} />{outcome}</label>)}</div><label className="claim-label" htmlFor="synthesis-note">Optional synthesis sentence</label><textarea id="synthesis-note" maxLength={CLAIM_MAX_LENGTH} rows={2} value={session.council.note} onChange={(event) => updateSession((current) => ({ ...current, council: { ...current.council, note: event.target.value } }))} placeholder="Borrow the loop, reject the noise, combine the useful…" /></div></div><div className="council-grid">{council.map((member, index) => <article className={`council-card tier-${member.tier.toLowerCase().replaceAll(" ", "-")}`} key={member.name}><div className="council-card-top"><span className="tier-pill">{member.tier}</span><span className="card-index">{String(index + 1).padStart(2, "0")}</span></div><h3>{member.name}</h3><p className="member-role">{member.role}</p><p className="member-result">{member.result}</p><p className="member-note">{member.note}</p><p className="comparability">{member.comparable ? "Direct comparison eligible" : "Condition kept separate"}</p></article>)}</div><div className="fairness-note"><span className="fairness-icon">!</span><div><strong>Fairness is part of the artifact.</strong><p>Core Five means direct comparison. Exhibition, Specialty Notion, Specialty Replit, and Attempted entries stay visible, but different access or context is not flattened into a fake leaderboard.</p></div></div><StepNav previous={2} next={4} onSelect={goToStep} /></section>}
      {activeStep === 4 && <section className="content-width step-section"><SectionIntro eyebrow="05 / THE HANDOFF" title="Ship the proof someone else can use." copy="A tutorial is only useful when it changes the next move. Run the checklist, record a falsifiable next test, and export the receipts you actually assembled." /><div className="handoff-layout"><div className="panel checklist-panel"><div className="panel-kicker">SHIP CHECK / {readyCount} OF {checklist.length}</div>{checklist.map((item) => <label className={`check-row ${session.checklist[item.id] ? "is-checked" : ""}`} key={item.id}><input type="checkbox" checked={Boolean(session.checklist[item.id])} onChange={() => toggleCheck(item.id)} /><span className="check-box" aria-hidden="true">✓</span><span>{item.label}</span></label>)}</div><div className="panel brief-panel"><div className="panel-kicker">THE PORTABLE HANDOFF</div><p className="brief-copy">{compactBrief}</p><label className="claim-label" htmlFor="next-test">Next feedback question / test</label><textarea id="next-test" maxLength={CLAIM_MAX_LENGTH} rows={3} value={session.nextTest} onChange={(event) => updateSession((current) => ({ ...current, nextTest: event.target.value }))} placeholder="What would prove this diagram is still hiding a lie?" /><details className="handoff-preview"><summary>Preview the full Markdown packet</summary><pre>{buildHandoffMarkdown(session)}</pre></details><div className="handoff-actions"><button className="button button-primary download-handoff-button" onClick={downloadHandoff}>{session.handoff.downloaded ? "Handoff downloaded" : "Download Markdown handoff"} <span>{session.handoff.downloaded ? "✓" : "↓"}</span></button><button className="button button-quiet copy-brief-button" onClick={copyBrief}>{copied ? "Copied Markdown" : copyFailed ? "Try copying again" : "Copy Markdown packet"} <span>{copied ? "✓" : "↗"}</span></button></div><p className="handoff-note">Local working file only — no cloud backup, account, or server storage. The Markdown packet includes this session’s premise, ROY, workbench, Council choice, checklist, next test, receipts, generated date, and schema version.</p><p className="copy-status" role="status" aria-live="polite">{downloadFailed ? "The browser could not start a local download. You can still copy the Markdown preview above." : copyFailed ? "Clipboard access is unavailable. Select the Markdown preview above to copy it manually, or download the full packet." : copied ? "Markdown packet copied to your clipboard." : session.handoff.downloaded ? `Saved locally as ${HANDOFF_FILENAME}.` : ""}</p></div></div><div className="completion-summary panel"><div><span className="panel-kicker">COMPLETION SUMMARY</span><h3>{readyCount === checklist.length ? "Ready for review" : "Incomplete by choice"}</h3><p>Visited {session.visitedSteps.length} of 5 steps · {readyCount} of 5 checks · premise {session.premise.pattern ? "named" : "not named"} · synthesis {session.council.outcome ? "recorded" : "not recorded"} · packet {session.handoff.downloaded || session.handoff.copied ? "handled" : "not handled"}.</p></div><strong>Not a validated diagram.<br />A useful next test.</strong></div><SourceRoom /><div className="source-links"><span className="panel-kicker">KEEP GOING</span>{publicSourceLinks.slice(3).map((source) => <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>{source.label} ↗</a>)}</div><StepNav previous={3} next={0} onSelect={goToStep} last /></section>}
      <footer className="site-footer"><span><BrandMark /> / Precision · Protocol · Promptcraft</span><span>Built as a working tutorial, not a written exercise in hypocrisy.</span></footer>
    </main></div></>;
}

function readHashStep(): number | null {
  const match = window.location.hash.match(/^#step-([1-5])$/);
  return match ? Number(match[1]) - 1 : null;
}
function StepNav({ previous, next, onSelect, last = false }: { previous: number; next: number; onSelect: (step: number) => void; last?: boolean }) {
  return <div className="step-nav"><button className="button button-quiet" onClick={() => onSelect(previous)}>← Previous</button><button className="button button-primary" onClick={() => onSelect(next)}>{last ? "Run it again" : "Next field test"} <span>→</span></button></div>;
}

export default App;