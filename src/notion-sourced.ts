export type SourceStage = {
  label: string;
  title: string;
  copy: string;
};

export type SourceRelease = {
  version: string;
  label: string;
  copy: string;
  status: "historical" | "current" | "review-only";
};

export type SourceReceipt = {
  label: string;
  title: string;
  copy: string;
};

export type SourceCycle = {
  label: string;
  copy: string;
};

export const notionSourceDigest = {
  eyebrow: "SOURCE ROOM / NOTION SYNTHESIS",
  title: "The experiment became a method.",
  intro:
    "The working records do more than preserve article drafts. They show how a slogan became a testable practice: frame the claim, render the uncertainty, compare the field, and ship the receipts.",
  stages: [
    {
      label: "01 / FRAME",
      title: "Start with the expensive confusion.",
      copy: "A diagram is a claim about structure, not an illustration added after the thinking. Name the audience, decision, and ambiguity before choosing a shape.",
    },
    {
      label: "02 / RENDER",
      title: "Make the wrong turn cheap.",
      copy: "Mermaid makes structure text-native, diffable, and quick to redraw. V1 is diagnostic equipment. It is allowed to be ugly if it reveals the argument.",
    },
    {
      label: "03 / ADJUDICATE",
      title: "Use disagreement to find questions.",
      copy: "Parallel outputs expose different instincts. Compare them under visible conditions, borrow what works, reject decoration, and keep the human decision inspectable.",
    },
    {
      label: "04 / HAND OFF",
      title: "Ship the visual with its receipts.",
      copy: "The image exposes a claim. The source preserves its lineage. The post, poll, or comment carries the next feedback loop. None of those layers is the whole artifact.",
    },
  ] satisfies SourceStage[],
  receipts: [
    {
      label: "ARGUMENT",
      title: "Post or article",
      copy: "Explain the claim, the experiment, and why the visual matters.",
    },
    {
      label: "MODEL",
      title: "Diagram",
      copy: "Show the structure, including the loop or doubt the first pass hid.",
    },
    {
      label: "RECEIPT",
      title: "Source",
      copy: "Keep the Mermaid or working source attached so revision is inspectable.",
    },
    {
      label: "FEEDBACK",
      title: "Comment or poll",
      copy: "Let another person test whether the diagram actually reduced confusion.",
    },
  ] satisfies SourceReceipt[],
  cycle: [
    { label: "FAN OUT", copy: "Give the same brief to parallel seats." },
    { label: "COMPARE", copy: "Put differences beside each other." },
    { label: "QUESTION", copy: "Test assumptions and conditions." },
    { label: "SYNTHESIZE", copy: "Borrow, reject, and combine deliberately." },
    { label: "PATCH", copy: "Feed the decision into the next version." },
  ] satisfies SourceCycle[],
  releases: [
    { version: "v0.1-v0.5", label: "Argument and Council", copy: "Historical serial development of ROY, the diagram rounds, and Council-assisted review.", status: "historical" },
    { version: "v0.6-v0.7", label: "Knowledge custody and building", copy: "Notion and Replit companion chapters developed the documentation and implementation lessons.", status: "historical" },
    { version: "v0.8-v0.9", label: "Styling and process meaning", copy: "Mermaid Theme Builder and BPMN for Mermaid companion chapters. These labels describe article history, not diagram rounds.", status: "historical" },
    { version: "Final Cut", label: "One argument, one working method", copy: "The unified thesis is available from this field guide. External website and LinkedIn publication states have their own receipts.", status: "current" },
  ] satisfies SourceRelease[],
  sourceNote:
    "Historical public-safe source copies and a registry snapshot inform this room. They preserve the development of the case, not current platform support. The Final Cut manuscript and source ledger govern the current interpretation; private workspace locators are excluded.",
};
