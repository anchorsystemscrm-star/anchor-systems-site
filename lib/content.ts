import { cities } from "@/data/cities";
import { industries } from "@/data/industries";
import type { City } from "@/data/types";

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}

export function getCityBySlug(slug: string) {
  return cities.find((city) => city.slug === slug);
}

export function getIndustryStaticParams() {
  return industries.map((industry) => ({
    industrySlug: industry.slug
  }));
}

export function getLocationStaticParams() {
  return cities.flatMap((city) =>
    industries.map((industry) => ({
      citySlug: city.slug,
      industrySlug: industry.slug
    }))
  );
}

export function getRelatedCities(citySlug: string, limit = 3) {
  const city = getCityBySlug(citySlug);

  if (!city) {
    return [];
  }

  return city.nearby
    .map((slug) => getCityBySlug(slug))
    .filter((value): value is City => Boolean(value))
    .slice(0, limit);
}

export function getFeaturedIndustries(limit = 6) {
  return industries.slice(0, limit);
}

export function getFeaturedCities(limit = 6) {
  return cities.slice(0, limit);
}

export function buildLocationFaqs(citySlug: string, industrySlug: string) {
  const city = getCityBySlug(citySlug);
  const industry = getIndustryBySlug(industrySlug);

  if (!city || !industry) {
    return [];
  }

  return [
    {
      question: `Why does ${industry.name.toLowerCase()} lead handling matter in ${city.name}?`,
      answer: `${city.intro} Anchor Systems helps ${industry.name.toLowerCase()} businesses respond faster, keep follow-up moving, and create a more reliable path from new inquiry to booked job.`
    },
    {
      question: `Can Anchor Systems work for smaller ${industry.name.toLowerCase()} teams in ${city.name}?`,
      answer: `Yes. Lean operators often see the biggest benefit because the platform removes manual gaps without requiring a large office staff or a complicated rollout.`
    },
    {
      question: `What is the main advantage for ${city.name} ${industry.name.toLowerCase()} companies?`,
      answer: `Better responsiveness, cleaner pipeline visibility, and more consistent follow-up on the leads your team is already working hard to generate.`
    }
  ];
}
