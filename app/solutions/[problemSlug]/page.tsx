import { notFound } from "next/navigation";

import { ProblemPageShell } from "@/components/problem-page-shell";
import { getIndustryBySlug, getProblemBySlug, getProblemStaticParams } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

type ProblemPageProps = {
  params: {
    problemSlug: string;
  };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getProblemStaticParams();
}

export function generateMetadata({ params }: ProblemPageProps) {
  const problem = getProblemBySlug(params.problemSlug);

  if (!problem) {
    return buildMetadata({
      title: "Solution page",
      description: "Solution page not found.",
      path: "/"
    });
  }

  return buildMetadata({
    title: problem.seoTitle,
    description: problem.metaDescription,
    path: `/solutions/${problem.slug}`
  });
}

export default function ProblemPage({ params }: ProblemPageProps) {
  const problem = getProblemBySlug(params.problemSlug);

  if (!problem) {
    notFound();
  }

  const industry = getIndustryBySlug(problem.industrySlug);

  if (!industry) {
    notFound();
  }

  return <ProblemPageShell problem={problem} industry={industry} />;
}
