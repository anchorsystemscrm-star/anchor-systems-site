import { notFound } from "next/navigation";

import { LocationProblemPageShell } from "@/components/location-problem-page-shell";
import {
  getCityBySlug,
  getIndustryBySlug,
  getLocationProblemStaticParams,
  getProblemBySlug,
  getRelatedProblemCities
} from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

type LocationProblemPageProps = {
  params: {
    citySlug: string;
    problemSlug: string;
  };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getLocationProblemStaticParams();
}

export function generateMetadata({ params }: LocationProblemPageProps) {
  const city = getCityBySlug(params.citySlug);
  const problem = getProblemBySlug(params.problemSlug);

  if (!city || !problem) {
    return buildMetadata({
      title: "Local solution page",
      description: "Local solution page not found.",
      path: "/locations"
    });
  }

  return buildMetadata({
    title: `${problem.shortLabel} in ${city.name}, ${city.state}`,
    description: `Anchor Systems helps ${city.name}, ${city.state} service businesses fix ${problem.shortLabel.toLowerCase()}, protect revenue, and book more jobs.`,
    path: `/locations/${city.slug}/solutions/${problem.slug}`
  });
}

export default function LocationProblemPage({
  params
}: LocationProblemPageProps) {
  const city = getCityBySlug(params.citySlug);
  const problem = getProblemBySlug(params.problemSlug);

  if (!city || !problem) {
    notFound();
  }

  const industry = getIndustryBySlug(problem.industrySlug);

  if (!industry) {
    notFound();
  }

  return (
    <LocationProblemPageShell
      city={city}
      industry={industry}
      problem={problem}
      relatedCities={getRelatedProblemCities(city.slug)}
    />
  );
}
