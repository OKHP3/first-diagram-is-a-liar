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
      title: "Use disagreement as evidence.",
      copy: "Parallel outputs expose different instincts. Compare them under visible conditions, borrow what works, reject decoration, and keep the human decision inspectable.",
    },
    {
      label: "04 / HAND OFF",
      title: "Ship the visual with its receipts.",
      copy: "The image carries the proof. The source carries the lineage. The post, poll, or comment carries the next feedback loop. None of those layers is the whole artifact.",
    },
  ] satisfies SourceStage[],
  receipts: [
    {
      label: "ARGUMENT",
      title: "Post or article",
      copy: "Explain the claim, the experiment, and why the visual matters.",
    },
    {
      label: "PROOF",
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
    {
      version: "v0.1",
      label: "Protoform",
      copy: "The ROY thesis, first diagrams, and the promise of a public experiment.",
      status: "historical",
    },
    {
      version: "v0.3",
      label: "Visual edition",
      copy: "The public hub, deck, prompts, scoring lanes, and the method made visible.",
      status: "historical",
    },
    {
      version: "v0.4",
      label: "Council of AIs",
      copy: "A documented fan-out, compare, adjudicate, and synthesize process.",
      status: "historical",
    },
    {
      version: "v0.5",
      label: "Council-assisted scoring",
      copy: "The current canonical article release and the archive-backed field guide.",
      status: "current",
    },
    {
      version: "v0.8",
      label: "The rematch",
      copy: "A proposed review cut about cleaner conditions, updated models, and better prompts.",
      status: "review-only",
    },
    {
      version: "v0.9",
      label: "The gap after the diagram",
      copy: "A proposed review cut about style governance and the Theme Builder response.",
      status: "review-only",
    },
  ] satisfies SourceRelease[],
  sourceNote:
    "This public copy synthesizes six historical Notion pages captured on 2026-08-27. The pages were source material, not a replacement for the repository's canonical archive. Private workspace links, IDs, temporary signed assets, and internal page structure are intentionally omitted.",
};

