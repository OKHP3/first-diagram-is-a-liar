import type { WorkbenchRevision } from "./session";

export type WorkbenchState = {
  revision: WorkbenchRevision;
  label: string;
  source: string;
  change: string;
  visual: string;
  loopNote: string;
};

export const workbenchStates: Record<WorkbenchRevision, WorkbenchState> = {
  v1: {
    revision: "v1",
    label: "V1 / tidy first pass",
    source: "flowchart LR\n  A[SPARK] --> B[ROUGH DRAFT]\n  B --> C[ROY CHECK]\n  C --> D[SHIP THE PROOF]",
    change: "V1 draws a confident happy path. It is useful as a diagnostic first pass, but it hides where doubt sends the work backward.",
    visual: "A straight path from spark to rough draft, ROY check, and ship.",
    loopNote: "No revision loop is shown in this view.",
  },
  v2: {
    revision: "v2",
    label: "V2 / honest revision",
    source: "flowchart LR\n  A[SPARK] --> B[ROUGH DRAFT]\n  B --> C[ROY CHECK]\n  C --> D[SHIP THE PROOF]\n  D -. doubt / revise .-> B\n  C -. missing exception .-> A",
    change: "V2 keeps the same destination but exposes doubt, revision, and the return to an earlier assumption. The dashed paths are part of the proof.",
    visual: "A forward path with two visibly dashed return paths from the check and ship stages.",
    loopNote: "Dashed arrows mean revision: doubt, revise, and try again.",
  },
};