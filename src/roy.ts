export const ROY_WORDS_MIN = 20;
export const ROY_WORDS_MAX = 200;
export const ROY_CLARITY_MIN = 1;
export const ROY_CLARITY_MAX = 10;

export type RoyPresetId = "fast-sketch" | "over-explained" | "useful-compression";

export type RoyPreset = {
  id: RoyPresetId;
  label: string;
  words: number;
  clarity: number;
  note: string;
};

export const royPresets: RoyPreset[] = [
  { id: "fast-sketch", label: "Fast sketch", words: 35, clarity: 5, note: "A quick, low-cost first pass." },
  { id: "over-explained", label: "Over-explained", words: 140, clarity: 8, note: "More words, with a clearer shared model." },
  { id: "useful-compression", label: "Useful compression", words: 60, clarity: 9, note: "A compact explanation that earns its space." },
];

export function calculateRoy(words: number, clarity: number): number {
  const safeWords = Math.min(ROY_WORDS_MAX, Math.max(ROY_WORDS_MIN, Number.isFinite(words) ? words : ROY_WORDS_MIN));
  const safeClarity = Math.min(ROY_CLARITY_MAX, Math.max(ROY_CLARITY_MIN, Number.isFinite(clarity) ? clarity : ROY_CLARITY_MIN));
  return Math.round((safeClarity * 50) / safeWords * 10) / 10;
}

export function getRoyBand(score: number): "needs-work" | "inspect" | "earning-space" {
  if (!Number.isFinite(score) || score < 2.5) return "needs-work";
  if (score < 5) return "inspect";
  return "earning-space";
}

export function getRoyInterpretation(score: number): string {
  switch (getRoyBand(score)) {
    case "earning-space":
      return "The diagram is starting to pay rent. Now ask what it hides.";
    case "inspect":
      return "The exchange is improving. Inspect the assumptions before adding polish.";
    default:
      return "The words are doing too much work. Reduce friction before adding decoration.";
  }
}

export function getRoyPreset(id: RoyPresetId): RoyPreset {
  return royPresets.find((preset) => preset.id === id) ?? royPresets[0];
}