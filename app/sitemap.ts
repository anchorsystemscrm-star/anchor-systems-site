import type { MetadataRoute } from "next";

import { cities } from "@/data/cities";
import { industries } from "@/data/industries";
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

  return [...staticEntries, ...industryEntries, ...locationEntries];
}
