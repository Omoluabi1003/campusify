export * from "./domain";

export type FeatureCategory =
  | "directory"
  | "identity"
  | "community"
  | "opportunity"
  | "research"
  | "ai"
  | "language"
  | "pricing";

export interface Feature {
  title: string;
  description: string;
  category: FeatureCategory;
  href: string;
  eyebrow: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface PlatformModule {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  frontEndProgress: string[];
  backEndProgress: string[];
  nextBuild: string[];
}
