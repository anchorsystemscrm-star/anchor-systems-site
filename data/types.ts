export type FaqItem = {
  question: string;
  answer: string;
};

export type Feature = {
  icon: string;
  title: string;
  description: string;
  benefit: string;
};

export type Industry = {
  slug: string;
  name: string;
  serviceLabel: string;
  heroTitle: string;
  heroDescription: string;
  intro: string;
  painPoints: string[];
  solutions: string[];
  useCases: string[];
  outcomes: string[];
  faqs: FaqItem[];
};

export type City = {
  slug: string;
  name: string;
  state: string;
  region: string;
  intro: string;
  marketAngle: string;
  nearby: string[];
};

export type ProblemSolution = {
  slug: string;
  name: string;
  shortLabel: string;
  industrySlug: string;
  seoTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  intro: string;
  painPoints: string[];
  solutionPoints: string[];
  featureBlocks: string[];
  outcomes: string[];
  faqs: FaqItem[];
};
