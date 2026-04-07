import { notFound } from "next/navigation";

import { IndustryPageShell } from "@/components/industry-page-shell";
import { getIndustryStaticParams, getIndustryBySlug } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

type IndustryPageProps = {
  params: {
    industrySlug: string;
  };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getIndustryStaticParams();
}

export function generateMetadata({ params }: IndustryPageProps) {
  const industry = getIndustryBySlug(params.industrySlug);

  if (!industry) {
    return buildMetadata({
      title: "Industry page",
      description: "Industry page not found.",
      path: "/"
    });
  }

  return buildMetadata({
    title: `${industry.name} CRM`,
    description: industry.heroDescription,
    path: `/${industry.slug}`
  });
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const industry = getIndustryBySlug(params.industrySlug);

  if (!industry) {
    notFound();
  }

  return <IndustryPageShell industry={industry} />;
}
