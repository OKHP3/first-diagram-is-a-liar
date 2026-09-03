export const SESSION_SCHEMA_VERSION = 2;
export const SESSION_STORAGE_KEY = "first-diagram-session";
export const LEGACY_STORAGE_KEY = "first-diagram-progress";
export const CLAIM_MAX_LENGTH = 160;

export type LiePattern = "hidden-loop" | "missing-exception" | "false-certainty" | "decorative-complexity";
export type WorkbenchRevision = "v1" | "v2";
export type SynthesisOutcome = "borrow" | "reject" | "combine" | "";
export type CouncilCriterion = "fidelity" | "clarity" | "structure" | "hierarchy" | "iteration" | "usefulness";

export type SessionState = {
  schemaVersion: number;
  activeStep: number;
  visitedSteps: number[];
  premise: { pattern: LiePattern | ""; claim: string };
  roy: { words: number; clarity: number; preset: string };
  workbench: { revision: WorkbenchRevision; showLoops: boolean };
  council: { criterion: CouncilCriterion; outcome: SynthesisOutcome; note: string };
  checklist: Record<string, boolean>;
  nextTest: string;
  handoff: { copied: boolean; downloaded: boolean; generatedDate: string };
  updatedAt: number;
};

const patterns: LiePattern[] = ["hidden-loop", "missing-exception", "false-certainty", "decorative-complexity"];
const criteria: CouncilCriterion[] = ["fidelity", "clarity", "structure", "hierarchy", "iteration", "usefulness"];
const outcomes: SynthesisOutcome[] = ["", "borrow", "reject", "combine"];
const revisions: WorkbenchRevision[] = ["v1", "v2"];
export const checklistIds = ["claim", "loops", "signal", "conditions", "handoff"] as const;

export function createDefaultSession(now = Date.now()): SessionState {
  return {
    schemaVersion: SESSION_SCHEMA_VERSION,
    activeStep: 0,
    visitedSteps: [0],
    premise: { pattern: "", claim: "" },
    roy: { words: 50, clarity: 7, preset: "" },
    workbench: { revision: "v2", showLoops: true },
    council: { criterion: "fidelity", outcome: "", note: "" },
    checklist: {},
    nextTest: "",
    handoff: { copied: false, downloaded: false, generatedDate: "" },
    updatedAt: now,
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function hasOnlyKeys(value: Record<string, unknown>, allowed: string[]): boolean {
  return Object.keys(value).every((key) => allowed.includes(key));
}

function validChecklist(value: unknown): value is Record<string, boolean> {
  if (!isRecord(value)) return false;
  return Object.entries(value).every(([key, item]) => checklistIds.includes(key as typeof checklistIds[number]) && item === true);
}

export function validateSession(value: unknown): value is SessionState {
  if (!isRecord(value) || !hasOnlyKeys(value, ["schemaVersion", "activeStep", "visitedSteps", "premise", "roy", "workbench", "council", "checklist", "nextTest", "handoff", "updatedAt"])) return false;
  const activeStep = value.activeStep;
  const visitedSteps = value.visitedSteps;
  if (value.schemaVersion !== SESSION_SCHEMA_VERSION || typeof activeStep !== "number" || !Number.isInteger(activeStep) || activeStep < 0 || activeStep > 4) return false;
  if (!Array.isArray(visitedSteps) || visitedSteps.some((step) => typeof step !== "number" || !Number.isInteger(step) || step < 0 || step > 4) || new Set(visitedSteps).size !== visitedSteps.length) return false;
  if (!isRecord(value.premise) || !hasOnlyKeys(value.premise, ["pattern", "claim"]) || !(value.premise.pattern === "" || patterns.includes(value.premise.pattern as LiePattern)) || typeof value.premise.claim !== "string" || value.premise.claim.length > CLAIM_MAX_LENGTH) return false;
  if (!isRecord(value.roy) || !hasOnlyKeys(value.roy, ["words", "clarity", "preset"])) return false;
  const words = value.roy.words;
  const clarity = value.roy.clarity;
  if (typeof words !== "number" || !Number.isInteger(words) || words < 20 || words > 200 || typeof clarity !== "number" || !Number.isInteger(clarity) || clarity < 1 || clarity > 10 || typeof value.roy.preset !== "string") return false;
  if (!isRecord(value.workbench) || !hasOnlyKeys(value.workbench, ["revision", "showLoops"]) || !revisions.includes(value.workbench.revision as WorkbenchRevision) || typeof value.workbench.showLoops !== "boolean") return false;
  if (!isRecord(value.council) || !hasOnlyKeys(value.council, ["criterion", "outcome", "note"]) || !criteria.includes(value.council.criterion as CouncilCriterion) || !outcomes.includes(value.council.outcome as SynthesisOutcome) || typeof value.council.note !== "string" || value.council.note.length > CLAIM_MAX_LENGTH) return false;
  if (!validChecklist(value.checklist) || typeof value.nextTest !== "string" || value.nextTest.length > CLAIM_MAX_LENGTH) return false;
  if (!isRecord(value.handoff) || !hasOnlyKeys(value.handoff, ["copied", "downloaded", "generatedDate"]) || typeof value.handoff.copied !== "boolean" || typeof value.handoff.downloaded !== "boolean" || typeof value.handoff.generatedDate !== "string") return false;
  return Number.isFinite(value.updatedAt) && typeof value.updatedAt === "number";
}

function migrate(value: Record<string, unknown>, now: number): SessionState | null {
  const session = createDefaultSession(now);
  const oldChecklist = value.checklist ?? value;
  if (validChecklist(oldChecklist)) session.checklist = oldChecklist;
  if (value.schemaVersion === 1 && isRecord(value.premise) && typeof value.premise.claim === "string") {
    session.premise.claim = value.premise.claim.slice(0, CLAIM_MAX_LENGTH);
  }
  return session;
}

export type StorageLike = Pick<Storage, "getItem" | "setItem" | "removeItem">;

export function loadSession(storage: StorageLike, now = Date.now()): { session: SessionState; available: boolean; restored: boolean; migrated: boolean } {
  let raw: string | null;
  try {
    raw = storage.getItem(SESSION_STORAGE_KEY);
  } catch {
    return { session: createDefaultSession(now), available: false, restored: false, migrated: false };
  }
  if (raw) {
    try {
      const parsed: unknown = JSON.parse(raw);
      if (validateSession(parsed)) return { session: parsed, available: true, restored: true, migrated: false };
      if (isRecord(parsed) && parsed.schemaVersion === 1) return { session: migrate(parsed, now) ?? createDefaultSession(now), available: true, restored: true, migrated: true };
    } catch {
      return { session: createDefaultSession(now), available: true, restored: false, migrated: false };
    }
  }
  try {
    const legacy = storage.getItem(LEGACY_STORAGE_KEY);
    if (legacy) {
      const parsed: unknown = JSON.parse(legacy);
      if (isRecord(parsed)) return { session: migrate(parsed, now) ?? createDefaultSession(now), available: true, restored: true, migrated: true };
    }
  } catch {
    return { session: createDefaultSession(now), available: false, restored: false, migrated: false };
  }
  return { session: createDefaultSession(now), available: true, restored: false, migrated: false };
}

export function persistSession(storage: StorageLike, session: SessionState): boolean {
  try {
    storage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
    return true;
  } catch {
    return false;
  }
}

export function resetSession(storage: StorageLike): boolean {
  try {
    storage.removeItem(SESSION_STORAGE_KEY);
    storage.removeItem(LEGACY_STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
}