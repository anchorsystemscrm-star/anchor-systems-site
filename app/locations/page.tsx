import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { cities } from "@/data/cities";
import { industries } from "@/data/industries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Locations",
  description:
    "Explore Anchor Systems location pages for service businesses across Virginia markets with scalable city and industry SEO landing pages.",
  path: "/locations"
});

export default function LocationsPage() {
  return (
    <>
      <section className="section-space dark-section bg-hero-grid">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Locations"
            title="Scalable location pages for service business SEO"
            description="These landing pages are generated from shared city and industry data so Anchor Systems can expand local coverage without rebuilding templates."
            theme="dark"
          />
        </div>
      </section>

      <section className="section-space light-section">
        <div className="container-shell">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {cities.map((city, index) => {
              const industry = industries[index % industries.length];
              return (
                <Link
                  key={city.slug}
                  href={`/locations/${city.slug}/${industry.slug}`}
                  className="surface-card-light p-6 hover:border-blue/40"
                >
                  <h2 className="text-xl font-semibold text-ink">
                    {city.name}, {city.state}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-ink-soft">
                    {city.intro}
                  </p>
                  <p className="mt-4 text-sm font-medium text-blue-2">
                    View {industry.name} page
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
