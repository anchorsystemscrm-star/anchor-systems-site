import type { Metadata } from "next";

import { siteConfig } from "@/data/site";

export function getBaseUrl() {
  return new URL(process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.domainFallback);
}

export function absoluteUrl(path: string) {
  return new URL(path, getBaseUrl()).toString();
}

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function buildMetadata({
  title,
  description,
  path
}: MetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
