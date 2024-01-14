export const pathAliases = [
  "id", // i.e., WCAG2:perceivable
  "num", // i.e., 1 (for Principle) or 1.1 (for Guideline) or 1.1.1 (for Success Criterion)
] as const;

export type WcagItem = Record<(typeof pathAliases)[number], string>;
interface Principle {
  guidelines: GuidelineType[];
}
interface Guideline {
  successcriteria: SuccessCriterionType[];
}
type PrincipleType = WcagItem & Principle;
type GuidelineType = WcagItem & Guideline;
type SuccessCriterionType = WcagItem;

export type WcagResponseData = {
  principles: PrincipleType[];
};
