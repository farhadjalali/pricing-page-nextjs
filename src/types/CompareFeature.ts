import { type PlanFeature } from "./PlanFeature";

export type CompareFeature = {
  group: string;
  comment: string;
  index: number;
  features: PlanFeature[];
};
