import { notFound } from "next/navigation";

import { LocationPageShell } from "@/components/location-page-shell";
import {
  getCityBySlug,
  getIndustryBySlug,
  getLocationStaticParams,
  getRelatedCities
} from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

type LocationPageProps = {
  params: {
    citySlug: string;
    industrySlug: string;
  };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getLocationStaticParams();
}

export function generateMetadata({ params }: LocationPageProps) {
  const city = getCityBySlug(params.citySlug);
  const industry = getIndustryBySlug(params.industrySlug);

  if (!city || !industry) {
    return buildMetadata({
      title: "Location page",
      description: "Location page not found.",
      path: "/locations"
    });
  }

  return buildMetadata({
    title: `${industry.name} CRM in ${city.name}, ${city.state}`,
    description: `Anchor Systems helps ${industry.name.toLowerCase()} businesses in ${city.name}, ${city.state} capture more leads, automate follow-up, and book more jobs.`,
    path: `/locations/${city.slug}/${industry.slug}`
  });
}

export default function LocationIndustryPage({ params }: LocationPageProps) {
  const city = getCityBySlug(params.citySlug);
  const industry = getIndustryBySlug(params.industrySlug);

  if (!city || !industry) {
    notFound();
  }

  return (
    <LocationPageShell
      city={city}
      industry={industry}
      relatedCities={getRelatedCities(city.slug)}
    />
  );
}
