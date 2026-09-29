import { useState } from "react";

export const finalCutUrl = `${import.meta.env.BASE_URL}final-cut.html`;
const repo = "https://github.com/OKHP3/first-diagram-is-a-liar";

export const relatedResources = [
  { name: "Skillz Forge", purpose: "Find reusable instructions and package a repeatable method.", project: "https://overkillhill.com/skillz-forge/", tool: "https://okhp3.github.io/skillz/", action: "Browse skills" },
  { name: "Mermaid Theme Builder", purpose: "Inspect styling choices around existing Mermaid source.", project: "https://overkillhill.com/projects/mermaid-theme-builder/", tool: "https://okhp3.github.io/mermaid-theme-builder/", action: "Open the workbench" },
  { name: "BPMN for Mermaid", purpose: "Explore process knowledge and the prototype's notation boundaries.", project: "https://overkillhill.com/projects/bpmn-for-mermaid/", tool: "https://okhp3.github.io/mermaid-diagram-bpmn/", action: "Explore the project" },
  { name: "Mermaid", purpose: "Check supported syntax, configuration, and the upstream implementation.", project: "https://mermaid.ai/open-source/", tool: "https://github.com/mermaid-js/mermaid", action: "Inspect upstream" },
  { name: "Agent Skills", purpose: "Use the portable format; check what your chosen host can load or execute.", project: "https://agentskills.io/home", tool: "https://github.com/agentskills/agentskills", action: "Read the specification" },
];

export function FinalCutIntro() {
  return <div className="final-cut-intro panel">
    <span className="panel-kicker">THE FINAL CUT / FROM PICTURE TO PRACTICE</span>
    <p>Make the claim visible. Challenge the exceptions. Keep the meaning connected to the picture.</p>
    <p>This field guide applies the Final Cut's argument: shared understanding needs evidence, a responsible owner, and a maintainable record. Start with one process and an honest question.</p>
    <a className="text-link" href={finalCutUrl}>Read the complete Final Cut, with figures and sources ↗</a>
    <p>Created using <a className="text-link" href="https://replit.com">Replit</a>. Explore here, return to the story, and carry the next question back into the work.</p>
    <a className="text-link" href="https://overkillhill.com/writings/first-diagram-is-a-liar/">Visit the story at OverKill Hill ↗</a>
  </div>;
}

export function RoyPractice() {
  return <section className="final-cut-section" aria-labelledby="roy-practice-title">
    <p className="eyebrow">THE BUSINESS CHECK</p><h3 id="roy-practice-title">Measure the work around the picture.</h3>
    <p>The sliders are an illustrative conversation aid. ROY is a heuristic, not a validated composite score. Self-rated clarity and word count cannot establish reader comprehension or a return on investment.</p>
    <div className="practice-grid">
      <article><h4>Cost</h4><p>Include generation, correction turns, review, reading, and maintenance. A quick render can still be an expensive explanation.</p></article>
      <article><h4>Understanding</h4><p>Give a reader a realistic task. Record correct decisions, missed exceptions, time spent, and requests for clarification.</p></article>
      <article><h4>Comparison</h4><p>Compare prose, a diagram, and the combination on equivalent tasks. Keep units separate unless a defensible conversion exists.</p></article>
    </div>
    <p className="practice-note">A ratio of positive quantities cannot become negative. A separate net-benefit calculation can be negative when costs exceed benefits. No measured productivity gain is claimed for this case.</p>
  </section>;
}

const profiles = {
  field: { name: "Field guide", activity: "#234c40", decision: "#f0b84b", exception: "#713c2b", font: "Arial" },
  office: { name: "Boardroom", activity: "#1e3a5f", decision: "#f2c94c", exception: "#8b2635", font: "Verdana" },
  quiet: { name: "Quiet contrast", activity: "#333333", decision: "#e8e8e8", exception: "#702459", font: "Georgia" },
};
type ProfileId = keyof typeof profiles;

export function VisualPreferencesLab() {
  const [profile, setProfile] = useState(profiles.field);
  const [family, setFamily] = useState("flowchart");
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const payload = {
    schema: "personal-diagram-profile-example/1",
    diagramFamily: family,
    preferences: { fontFamily: profile.font, roles: {
      activity: { fill: profile.activity, label: "Activity" },
      decision: { fill: profile.decision, label: "Decision" },
      exception: { fill: profile.exception, label: "Exception / rework" },
    } },
    renderer: { host: "Specify the actual destination", version: "Confirm before generation" },
    constraints: ["Preserve process meaning and both decision outcomes", "Never communicate meaning through color alone", "Check contrast and installed fonts in the destination", "Report unsupported syntax or styling and propose a labeled fallback"],
    exemplar: `Provide a reviewed ${family} Mermaid file that works in the chosen renderer`,
  };
  const prompt = `Use my personal diagram profile below for the process I provide. First confirm the audience, source facts, exceptions, and destination renderer. Load the matching reviewed exemplar. Translate semantic colors and font preferences into configuration supported by that diagram family and host. Generate the source, render it where available, and inspect labels, decision outcomes, contrast, and clipping. Report any fallback explicitly. Do not invent missing process facts.\n\n${JSON.stringify(payload, null, 2)}`;
  function changeProfile(id: ProfileId) { setProfile(profiles[id]); setCopied(false); setCopyFailed(false); }
  async function copyPrompt() {
    try { await navigator.clipboard.writeText(prompt); setCopied(true); setCopyFailed(false); }
    catch { setCopyFailed(true); setCopied(false); }
  }
  return <section className="final-cut-section" aria-labelledby="visual-preferences-title">
    <p className="eyebrow">VISUAL CONSISTENCY / A PREFERENCE SHOULD SURVIVE THE NEXT PROMPT</p>
    <h3 id="visual-preferences-title">Stop renegotiating the palette.</h3>
    <p>Missing preferences leave the model to choose. Renderer versions, diagram families, fonts, layout engines, and hosting restrictions can then change the result again. A personal skill can carry your choices into generation; a compatible plugin can package the workflow.</p>
    <div className="profile-lab panel">
      <div className="profile-controls">
        <label>Starting palette<select defaultValue="field" onChange={e => changeProfile(e.target.value as ProfileId)}>{Object.entries(profiles).map(([id, p]) => <option value={id} key={id}>{p.name}</option>)}</select></label>
        <label>Diagram family<select value={family} onChange={e => { setFamily(e.target.value); setCopied(false); }}>{["flowchart", "architecture", "ishikawa", "venn"].map(value => <option key={value} value={value}>{value}</option>)}</select></label>
        <label>Preferred font<select value={profile.font} onChange={e => { setProfile({ ...profile, font: e.target.value }); setCopied(false); }}>{["Arial", "Verdana", "Georgia"].map(font => <option key={font}>{font}</option>)}</select></label>
        {(["activity", "decision", "exception"] as const).map(role => <label key={role}>{role} color<input type="color" value={profile[role]} onChange={e => { setProfile({ ...profile, [role]: e.target.value }); setCopied(false); }} /><code>{profile[role]}</code></label>)}
      </div>
      <div className="profile-preview" style={{ fontFamily: profile.font }} aria-label="Illustrative semantic palette preview">
        {(["activity", "decision", "exception"] as const).map(role => <div key={role}><span className={`profile-swatch profile-swatch-${role}`} style={{ backgroundColor: profile[role] }} aria-hidden="true" /><strong>{role === "exception" ? "Exception / rework" : role}</strong></div>)}
      </div>
      <p className="practice-note">Palette preview only. This is a proposed profile and prompt example, not a Mermaid render, installed skill, or compatibility certification. Controls stay in this page's memory; reload restores defaults.</p>
      <details className="profile-payload"><summary>Inspect the reusable prompt and JSON preferences</summary><pre>{prompt}</pre></details>
      <button className="button button-quiet" onClick={copyPrompt}>{copied ? "Prompt copied" : "Copy profile prompt"}</button>
      <p className="copy-status" role="status">{copyFailed ? "Clipboard unavailable. Expand the prompt and copy its selectable text." : copied ? "Copied the current profile prompt. Add your process facts and reviewed exemplar in the destination assistant." : ""}</p>
    </div>
    <div className="practice-grid">
      <article><h4>Package the preference</h4><p>Use a SKILL.md entry point, a JSON or YAML profile, references, and reviewed .mmd exemplars. Optional Python helpers can validate or assemble configuration when the host permits execution.</p></article>
      <article><h4>Respect each family</h4><p>Flowchart classes are not a universal styling language. Architecture, fishbone, and Venn examples need their own syntax and support checks. CSS-like tokens must be translated into supported Mermaid settings.</p></article>
      <article><h4>Inspect the destination</h4><p>ChatGPT, Claude, Copilot, Gemini, Perplexity, and other hosts expose different capabilities. A supported skill or plugin can load the package; elsewhere, supply the rules and examples as context. Identical pixels are not promised.</p></article>
    </div>
    <p><a className="text-link" href="https://okhp3.github.io/mermaid-theme-builder/" target="_blank" rel="noreferrer">Explore choices in Mermaid Theme Builder ↗</a> Then carry the accepted profile into your next task. Measure first-result adherence and styling correction turns while keeping semantic accuracy as the acceptance gate.</p>
  </section>;
}

export function CouncilEvidence() {
  return <div className="final-cut-section panel">
    <span className="panel-kicker">PRESERVED ROUNDS / BOUNDED JUDGMENTS</span>
    <h3>A favorite can still contain a defect.</h3>
    <p>Copilot V1 and Claude V2 were Jamie's selections within this exercise. Gemini used free-tier access while the other Core Five used paid access. Prompts evolved, peers were visible before V2, and a reproducible original numeric scoring matrix is unavailable. These are informative comparisons, not a controlled model ranking.</p>
    <p>Claude V2 improves the phase structure but loses the negative route from the framing decision into “Sharpen it.” That missing branch remains in the preserved source. Visual polish did not protect process fidelity.</p>
    <p><a className="text-link" href={`${finalCutUrl}#what-the-two-rounds-actually-reveal`}>Inspect both selected figures and their caveats ↗</a> · <a className="text-link" href={`${repo}/blob/main/archive/diagramming-shootout/diagram-manifest.csv`} target="_blank" rel="noreferrer">Open the source/render manifest ↗</a></p>
  </div>;
}

export function OperatingMethod() {
  return <section className="final-cut-section" aria-labelledby="operating-method-title">
    <p className="eyebrow">FROM REVIEW TO OPERATIONS</p><h3 id="operating-method-title">Give the next person a decision they can make.</h3>
    <p>Illustrative purchase request: the requester supplies the business need, amount, and evidence. The process owner confirms the rules. The authorized approver makes the decision. The diagram cannot grant that authority.</p>
    <div className="practice-grid">
      <article><h4>Missing evidence</h4><p>Return to the requester with the missing item and a named owner. Make the return condition explicit, including what happens when a response never arrives.</p></article>
      <article><h4>Approve or decline</h4><p>Apply the documented policy, preserve the decision evidence, and show both outcomes. Escalate exceptions to a named authority rather than inventing a threshold.</p></article>
      <article><h4>Keep it current</h4><p>Connect stable step identifiers to a Process Narrative Specification: actors, inputs, decisions, exceptions, evidence, owner, and review triggers. Change the record and its views together.</p></article>
    </div>
    <p>Begin with a bounded pilot. Ask a reader to resolve a normal case, a missing-evidence case, and an exception. Record accuracy, elapsed effort, correction turns, and maintenance work. Keep, simplify, or stop the method based on the result.</p>
    <p className="practice-note">A completed checklist records review activity. It does not certify the process, BPMN conformance, or business benefit. Use formal tooling where executable or interchange semantics are required.</p>
    <a className="text-link" href={`${finalCutUrl}#a-purchase-request-followed-all-the-way-through`}>Follow the complete worked example ↗</a>
  </section>;
}

export function ResourceDirectory() {
  return <section className="final-cut-section" aria-labelledby="resource-directory-title">
    <p className="eyebrow">TOOLS AND REUSABLE METHODS</p><h3 id="resource-directory-title">Carry the method into your next task.</h3>
    <div className="resource-grid">{relatedResources.map(resource => <article key={resource.name}><h4>{resource.name}</h4><p>{resource.purpose}</p><a href={resource.project} target="_blank" rel="noreferrer">Project and context ↗</a><a href={resource.tool} target="_blank" rel="noreferrer">{resource.action} ↗</a></article>)}</div>
    <p>Working environments: <a className="text-link" href="https://replit.com" target="_blank" rel="noreferrer">Replit</a> for building and iteration; <a className="text-link" href="https://www.notion.com" target="_blank" rel="noreferrer">Notion</a> for editorial organization and knowledge custody.</p>
    <p className="resource-tags">#OverKillHill #SkillzForge #MermaidThemeBuilder #BPMNForMermaid #Mermaid #AgentSkills #Replit #Notion #ProcessImprovement #VisualCommunication</p>
  </section>;
}
