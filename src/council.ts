export type CouncilTier = "Core Five" | "Exhibition" | "Specialty Notion" | "Specialty Replit" | "Attempted";
export type CouncilCriterion = "fidelity" | "clarity" | "structure" | "hierarchy" | "iteration" | "usefulness";

export const councilCriteria: Array<{ id: CouncilCriterion; label: string; question: string }> = [
  { id: "fidelity", label: "Fidelity", question: "Did the model preserve the actual argument?" },
  { id: "clarity", label: "Clarity", question: "Could another person reconstruct the move?" },
  { id: "structure", label: "Structure", question: "Are sequence, forks, and loops legible?" },
  { id: "hierarchy", label: "Hierarchy", question: "Does emphasis follow importance?" },
  { id: "iteration", label: "Iteration", question: "Does the artifact make revision cheap?" },
  { id: "usefulness", label: "Usefulness", question: "Does it change the next action?" },
];

export const council = [
  { name: "Copilot V1", tier: "Core Five" as const, role: "Renderer-level discipline", result: "Author’s Round 1 selection", note: "Explicit theme configuration in an earlier source capture. Later archived V1 headers reflect a different source stage.", comparable: true },
  { name: "Claude V2", tier: "Core Five" as const, role: "Narrative architecture", result: "Author’s Round 2 selection", note: "Organized phases and revision paths; the preserved source also loses a negative decision route.", comparable: true },
  { name: "ChatGPT", tier: "Core Five" as const, role: "Scaffolding and synthesis", result: "Structural benchmark", note: "Strong loop logic and a useful first-pass scaffold.", comparable: true },
  { name: "Perplexity", tier: "Core Five" as const, role: "ROY framing", result: "Conceptual precision", note: "Compressed the argument tightly, with less patience for decorative noise.", comparable: true },
  { name: "Gemini", tier: "Core Five" as const, role: "Maximalist energy", result: "Free-tier ceiling noted", note: "Free-tier access differed from the other four paid-tier participants; the comparison is not controlled.", comparable: true },
  { name: "ChatGPT V2 Pro", tier: "Exhibition" as const, role: "Raised capability ceiling", result: "Exhibition only", note: "Interesting and instructive, but not a direct comparison with the Core Five.", comparable: false },
  { name: "Notion", tier: "Specialty Notion" as const, role: "Documentarian perspective", result: "Different brief", note: "A source-and-lineage perspective, not a cold-start competitor.", comparable: false },
  { name: "Replit", tier: "Specialty Replit" as const, role: "Builder perspective", result: "Different brief", note: "A delivery and implementation perspective, not a cold-start competitor.", comparable: false },
  { name: "Mermaid AI", tier: "Attempted" as const, role: "Context-blind attempt", result: "Excluded", note: "Jumped to drawing before it understood the argument. That failure is part of the lesson.", comparable: false },
] as const;