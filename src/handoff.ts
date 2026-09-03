import type { CouncilCriterion } from "./council";
import type { SessionState } from "./session";
import { calculateRoy, getRoyInterpretation } from "./roy";
import { workbenchStates } from "./workbench";

export const HANDOFF_FILENAME = "first-diagram-is-a-liar-handoff.md";
export const LEARNER_TEXT_EXPORT_POLICY =
  "Included by default for an explicit local export; any future shared or externally distributed export must offer an explicit redacted mode.";
export const publicSourceLinks = [
  { label: "GitHub repository / receipts", url: "https://github.com/OKHP3/first-diagram-is-a-liar" },
  { label: "Live long-form article", url: "https://overkillhill.com/writings/first-diagram-is-a-liar/" },
  { label: "LinkedIn article", url: "https://www.linkedin.com/pulse/first-diagram-usually-liar-jamie-hill-lv3hc" },
  { label: "Preserved experiment", url: "https://github.com/OKHP3/first-diagram-is-a-liar/tree/main/archive/diagramming-shootout" },
  { label: "All eight prompts", url: "https://github.com/OKHP3/first-diagram-is-a-liar/tree/main/archive/diagramming-shootout/prompts" },
  { label: "Editorial cut", url: "https://github.com/OKHP3/first-diagram-is-a-liar/tree/main/archive/editorial-cut" },
];

const criterionLabels: Record<CouncilCriterion, string> = {
  fidelity: "Fidelity", clarity: "Clarity", structure: "Structure", hierarchy: "Hierarchy", iteration: "Iteration", usefulness: "Usefulness",
};
const patternLabels: Record<string, string> = {
  "hidden-loop": "Hidden loop", "missing-exception": "Missing exception", "false-certainty": "False certainty", "decorative-complexity": "Decorative complexity",
};

function markdownText(value: string, empty = "Not entered"): string {
  const clean = value.replace(/[\r\n]+/g, " ").replace(/[<>]/g, "").trim()
    .replaceAll("\\", "\\\\").replaceAll("`", "\\`").replaceAll("*", "\\*")
    .replaceAll("_", "\\_").replaceAll("[", "\\[").replaceAll("]", "\\]")
    .replaceAll("#", "\\#").replaceAll("|", "\\|");
  return clean || empty;
}

export function buildHandoffMarkdown(session: SessionState, generatedDate = session.handoff.generatedDate || "Not generated yet"): string {
  const workbench = workbenchStates[session.workbench.revision];
  const score = calculateRoy(session.roy.words, session.roy.clarity);
  const checklistItems = [
    ["claim", "The claim is clear before the diagram appears."],
    ["loops", "The revision path is visible, not politely hidden."],
    ["signal", "Every shape removes confusion or earns its space."],
    ["conditions", "Different conditions are labelled before comparison."],
    ["handoff", "The artifact tells the next person what to do."],
  ];
  const sourceList = publicSourceLinks.map((source) => `- [${source.label}](${source.url})`).join("\n");
  const checkedCount = checklistItems.filter(([id]) => session.checklist[id]).length;
  return `# Local Working Handoff

> Browser-generated Markdown for local working continuity. This is a downloaded snapshot, not a cloud backup, durable server storage, or a verdict.

## Export metadata

- **Project:** The First Diagram Is Usually a Liar
- **Content identifier:** first-diagram-is-a-liar
- **Tutorial version:** 1.0
- **Schema version:** ${session.schemaVersion}
- **Generated date:** ${generatedDate}
- **Filename:** \`${HANDOFF_FILENAME}\`
- **Privacy boundary:** Assembled in the browser. No account, identifier, analytics, or server persistence is involved.
- **Learner text policy:** ${LEARNER_TEXT_EXPORT_POLICY}
- **Completion status:** ${checkedCount === checklistItems.length ? "Ready for review" : "Incomplete by choice"}
- **Important boundary:** This records learning activity. It does not claim that the learner produced a validated diagram.

## Premise

- **Lie pattern:** ${patternLabels[session.premise.pattern] ?? "Not selected"}
- **Bounded claim:** ${markdownText(session.premise.claim)}

## Current tutorial position

- **Step:** ${String(session.activeStep + 1).padStart(2, "0")} / ${session.activeStep === 0 ? "The premise" : session.activeStep === 1 ? "The exchange rate" : session.activeStep === 2 ? "The workbench" : session.activeStep === 3 ? "The council" : "The handoff"}
- **Visited steps:** ${session.visitedSteps.map((step) => String(step + 1).padStart(2, "0")).join(", ")}

## ROY teaching heuristic

ROY means **Return on Your Words**: understanding produced divided by explanation invested. It is a bounded teaching heuristic, not a scientific measurement or universal benchmark.

- **Words invested:** ${session.roy.words}
- **Clarity delivered:** ${session.roy.clarity}/10
- **Preset used:** ${markdownText(session.roy.preset)}
- **Current ROY readout:** ${score}x
- **Interpretation:** ${getRoyInterpretation(score)}

## Workbench

- **Selected revision:** ${workbench.label}
- **Revision loopbacks:** ${session.workbench.showLoops ? "Visible" : "Hidden"}
- **Visual state:** ${workbench.visual}
- **What changed:** ${workbench.change}
- **Source excerpt:**

\`\`\`text
${workbench.source}
\`\`\`

- **Text alternative:** ${workbench.visual} ${workbench.loopNote}

## Council comparison

- **Selected criterion:** ${criterionLabels[session.council.criterion]}
- **Synthesis outcome:** ${session.council.outcome || "Not selected"}
- **Synthesis sentence:** ${markdownText(session.council.note)}
- **Comparison boundary:** Core Five entries are directly comparable. Exhibition, Specialty Notion, Specialty Replit, and Attempted entries remain separate conditions. No overall winner is declared.

## Checklist (${checkedCount}/${checklistItems.length})

${checklistItems.map(([id, label]) => `- [${session.checklist[id] ? "x" : " "}] ${label}`).join("\n")}

## Next test

${markdownText(session.nextTest, "Write the smallest question that could falsify this diagram.")}

## Public receipts

${sourceList}

## Carry-forward summary

This handoff preserves what the learner selected and recorded in this browser session. A reviewer can inspect the premise, heuristic inputs, revision source, comparison condition, checklist, and next test without treating completion as diagram validation.
`;
}