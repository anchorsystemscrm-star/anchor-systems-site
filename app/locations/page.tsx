import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { cities } from "@/data/cities";
import { industries } from "@/data/industries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Locations",
  description:
    "Explore Anchor Systems across Virginia markets where fast response and tighter follow-up decide who gets paid.",
  path: "/locations"
});

export default function LocationsPage() {
  return (
    <>
      <section className="section-space dark-section bg-hero-grid">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Locations"
            title="Markets where slow response costs the most"
            description="Anchor Systems helps service businesses show up clearly in the markets they want to grow, respond faster, and turn more local demand into booked jobs."
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
                    View {industry.name} service fit
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
