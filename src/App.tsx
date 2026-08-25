import { useMemo, useState } from "react";

type Friction = "handoff" | "decision" | "feedback";

const journey = [
  ["01", "Name the job", "What must become obvious?"],
  ["02", "Draft the lie", "Make the optimistic path visible."],
  ["03", "Find the loop", "Add the interruption reality supplies."],
  ["04", "Spend fewer words", "Turn the insight into a reusable brief."],
] as const;

const council = [
  { round: "Round 1", winner: "Copilot V1", reason: "Worked at the Mermaid theme-engine layer." },
  { round: "Round 2", winner: "Claude V2", reason: "Made revision loops structurally visible." },
];

const frictionLabels: Record<Friction, string> = {
  handoff: "A handoff keeps losing context",
  decision: "A decision has an invisible fork",
  feedback: "Feedback arrives after the work looks done",
};

function conciseLabel(value: string): string {
  const cleaned = value.replace(/["`[\]{}|]/g, "").replace(/\s+/g, " ").trim();
  return (cleaned || "The work").slice(0, 54);
}

function makeMermaid(problem: string, friction: Friction): string {
  const subject = conciseLabel(problem);
  const loop = friction === "handoff" ? "Clarify context" : friction === "decision" ? "Check the decision" : "Use the feedback";

  return `flowchart LR
    A[${subject}] --> B[First useful sketch]
    B --> C{What does the sketch hide?}
    C -->|Nothing important| D[Explain it]
    C -->|A ${friction} appears| E[${loop}]
    E -. revise .-> B
    D --> F[Shared understanding]`;
}

function downloadMermaid(source: string): void {
  const blob = new Blob([source], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "honest-diagram-draft.mmd";
  link.click();
  URL.revokeObjectURL(link.href);
}

function App() {
  const [problem, setProblem] = useState("A request arrives, the team explains it, makes a diagram, gets feedback, then revises before shipping.");
  const [friction, setFriction] = useState<Friction>("feedback");
  const [activeStep, setActiveStep] = useState(1);
  const [copied, setCopied] = useState(false);

  const mermaid = useMemo(() => makeMermaid(problem, friction), [problem, friction]);
  const shortProblem = conciseLabel(problem);
  const investedWords = problem.trim().split(/\s+/).filter(Boolean).length || 0;

  async function copyBrief(): Promise<void> {
    const brief = `Diagram brief\n\nGoal: make this understandable: ${shortProblem}\n\nRequired honesty: show the happy path and the ${friction} loop.\n\nUse this Mermaid starter:\n${mermaid}`;
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#start" aria-label="First Diagram Field Guide home"><span className="wordmark-mark">F</span><span>Field guide</span></a>
        <nav aria-label="Guide sections"><a href="#workbench">Workbench</a><a href="#receipts">Receipts</a><a href="#archive">Archive</a></nav>
      </header>

      <section className="hero" id="start">
        <div className="hero-stamp">A tutorial for useful visual thinking</div>
        <p className="eyebrow">THE FIRST DIAGRAM IS USUALLY A LIAR</p>
        <h1>Say more.<br /><em>Draw less.</em></h1>
        <p className="hero-copy">A diagram is not a trophy for surviving the meeting. It is a cheap test of whether people share the same mental model.</p>
        <a className="ink-button" href="#workbench">Build your honest first draft <span aria-hidden="true">↓</span></a>
        <div className="hero-diagram" aria-hidden="true"><span className="diagram-node node-one">WORDS</span><span className="diagram-arrow">→</span><span className="diagram-node node-two">SHAPE</span><span className="diagram-arrow">→</span><span className="diagram-node node-three">OH.</span><span className="loop-arrow">↶ the useful interruption</span></div>
      </section>

      <section className="principle-band" aria-label="Return on Your Words principle"><p>ROY <span>Return on Your Words</span></p><strong>Understanding produced <i>÷</i> explanation invested</strong><p className="right-note">More words are not a plan.</p></section>

      <section className="journey-section" aria-labelledby="journey-title">
        <div><p className="eyebrow">THE JOURNEY</p><h2 id="journey-title">Four moves. One usable result.</h2></div>
        <div className="journey-list">
          {journey.map(([number, title, description], index) => (
            <button className={`journey-item ${activeStep === index ? "selected" : ""}`} key={number} onClick={() => setActiveStep(index)} type="button"><span>{number}</span><strong>{title}</strong><small>{description}</small></button>
          ))}
        </div>
        <div className="lesson-card"><span className="lesson-index">{journey[activeStep][0]}</span><p>{journey[activeStep][2]}</p><strong>
          {activeStep === 0 && "Start with the thing a reader needs to decide, not your complete backstory."}
          {activeStep === 1 && "A clean path is a hypothesis. It earns no authority by being neatly aligned."}
          {activeStep === 2 && "Revision, exception, and feedback are not blemishes. They are the system doing its job."}
          {activeStep === 3 && "The outcome is a small reusable brief, not another document people have to decode."}
        </strong></div>
      </section>

      <section className="workbench" id="workbench" aria-labelledby="workbench-title">
        <div className="workbench-intro"><p className="eyebrow">THE HONEST-DIAGRAM WORKBENCH</p><h2 id="workbench-title">Turn one explanation into a draft you can challenge.</h2><p>This is deliberately small. Describe the work, name the friction, and leave with a Mermaid starter that makes the loop impossible to ignore.</p></div>
        <div className="workbench-grid">
          <form className="input-panel" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="problem">What needs to become clear?</label>
            <textarea id="problem" value={problem} onChange={(event) => setProblem(event.target.value)} rows={6} />
            <fieldset><legend>Where does reality interrupt?</legend>
              {(Object.keys(frictionLabels) as Friction[]).map((option) => <label className="radio-row" key={option}><input checked={friction === option} name="friction" onChange={() => setFriction(option)} type="radio" value={option} /><span>{frictionLabels[option]}</span></label>)}
            </fieldset>
            <div className="roy-readout"><span>WORDS INVESTED</span><strong>{investedWords}</strong><small>Make each one buy a clearer next step.</small></div>
          </form>
          <div className="output-panel" aria-live="polite">
            <div className="output-label"><span>YOUR HONEST FIRST DRAFT</span><b>LOOP INCLUDED</b></div>
            <div className="mini-flow"><div>Describe<br />the work</div><span>→</span><div>Sketch<br />the path</div><span>→</span><div className="decision">Expose<br />the {friction}</div><i>↙ revise with evidence</i></div>
            <pre><code>{mermaid}</code></pre>
            <div className="output-actions"><button className="ink-button" onClick={() => void copyBrief()} type="button">{copied ? "Brief copied" : "Copy the diagram brief"}</button><button className="text-button" onClick={() => downloadMermaid(mermaid)} type="button">Download .mmd</button></div>
          </div>
        </div>
      </section>

      <section className="receipts" id="receipts" aria-labelledby="receipts-title">
        <div className="receipts-heading"><p className="eyebrow">THE RECEIPTS</p><h2 id="receipts-title">The point was never a beauty contest.</h2><p>The council compared different instincts under disclosed conditions. The lesson is not to pick a permanent winner. It is to make a better next draft.</p></div>
        <div className="receipt-cards">{council.map((item) => <article key={item.round}><p>{item.round}</p><h3>{item.winner}</h3><span>{item.reason}</span></article>)}<article className="receipt-quote"><p>THE ACTUAL WIN</p><h3>Visible revision loops.</h3><span>Because a diagram that pretends there is no return path is only drawing the desired outcome.</span></article></div>
      </section>

      <section className="archive-callout" id="archive"><div><p className="eyebrow">KEEP THE RECEIPTS</p><h2>The archive has the eight prompts, Mermaid sources, rendered diagrams, and the council record.</h2></div><div className="archive-links"><a href="https://github.com/OKHP3/first-diagram-is-a-liar/tree/main/etch-ai-sketch-vibe-diagramming-shootout" target="_blank" rel="noreferrer">Open the source archive <span aria-hidden="true">↗</span></a><a href="https://overkillhill.com/writings/first-diagram-is-a-liar/" target="_blank" rel="noreferrer">Read the published article <span aria-hidden="true">↗</span></a></div></section>
      <footer><span>FIRST DIAGRAM FIELD GUIDE</span><span>OVERKILL HILL P³</span><span>MAKE THE LOOP VISIBLE.</span></footer>
    </main>
  );
}

export default App;
