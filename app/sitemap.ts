import type { MetadataRoute } from "next";

import { cities } from "@/data/cities";
import { industries } from "@/data/industries";
import { problemSolutions, solutionLocationCitySlugs } from "@/data/solutions";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/pricing",
    "/demo",
    "/ai-receptionist",
    "/service-business-crm",
    "/contact",
    "/locations"
  ];

  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8
  }));

  const industryEntries = industries.map((industry) => ({
    url: absoluteUrl(`/${industry.slug}`),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85
  }));

  const locationEntries = cities.flatMap((city) =>
    industries.map((industry) => ({
      url: absoluteUrl(`/locations/${city.slug}/${industry.slug}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7
    }))
  );

  const solutionEntries = problemSolutions.map((problem) => ({
    url: absoluteUrl(`/solutions/${problem.slug}`),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.82
  }));

  const locationSolutionEntries = solutionLocationCitySlugs.flatMap((citySlug) =>
    problemSolutions.map((problem) => ({
      url: absoluteUrl(`/locations/${citySlug}/solutions/${problem.slug}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.68
    }))
  );

  return [
    ...staticEntries,
    ...industryEntries,
    ...locationEntries,
    ...solutionEntries,
    ...locationSolutionEntries
  ];
}
