import { type PlanFeature } from "./PlanFeature";

export type CompareFeature = {
  group: string;
  index: number;
  features: PlanFeature[];
};
