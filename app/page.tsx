import Link from "next/link";

import { ContactCta } from "@/components/contact-cta";
import { CtaBanner } from "@/components/cta-banner";
import { FaqSection } from "@/components/faq-section";
import { FeatureGrid } from "@/components/feature-grid";
import { HeroSection } from "@/components/hero-section";
import { PricingCard } from "@/components/pricing-card";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialSection } from "@/components/testimonial-section";
import { TrustSection } from "@/components/trust-section";
import { cities } from "@/data/cities";
import { platformFeatures } from "@/data/features";
import { homeFaqs } from "@/data/faqs";
import { industries } from "@/data/industries";
import { pricingPlan } from "@/data/pricing";
import { siteConfig } from "@/data/site";
import { operatorSignals } from "@/data/testimonials";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AI for Service Businesses That Want More Booked Jobs",
  description:
    "Anchor Systems helps service businesses capture more leads, automate follow-up, and book more jobs using AI, pipeline visibility, and cleaner lead handling.",
  path: "/"
});

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.domainFallback,
    areaServed: "United States",
    sameAs: [siteConfig.bookingLink]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <HeroSection
        eyebrow="Anchor Systems"
        title="Capture more leads, automate follow-up, and book more jobs."
        description="Anchor Systems is a premium operating system for service businesses that need tighter lead handling, faster response times, and cleaner pipeline visibility. It helps you stop losing revenue between the phone call, the estimate, and the booked job."
        primaryHref={siteConfig.bookingLink}
        primaryLabel="Book Demo"
        secondaryHref="/pricing"
        secondaryLabel="View pricing"
        highlights={[
          "Built for service businesses, not generic sales teams",
          "Premium experience without bloated software complexity",
          "Designed to turn responsiveness into booked revenue",
          "Scalable SEO architecture for city and trade landing pages"
        ]}
        stats={[
          { value: "$297/mo", label: "Simple monthly pricing" },
          { value: "$250", label: "One-time setup fee" },
          { value: "24/7", label: "Lead handling support and automation" },
          { value: "1 system", label: "For leads, follow-up, and booked jobs" }
        ]}
      />

      <TrustSection
        eyebrow="Why it works"
        title="Built around the pressure points where service businesses actually leak revenue"
        description="Most operators do not need another dashboard. They need fewer gaps. Anchor Systems focuses on the points where jobs are usually lost: missed calls, weak estimate follow-up, low pipeline visibility, and slow office response."
        items={[
          {
            title: "Respond faster",
            description:
              "Protect inbound demand with AI receptionist support and missed-call follow-up that keeps the conversation moving."
          },
          {
            title: "Follow up better",
            description:
              "Use automation to stay present after the first estimate so more opportunities stay alive long enough to close."
          },
          {
            title: "Operate tighter",
            description:
              "Centralize lead status, scheduling, and communication so the office and the field are working from the same system."
          }
        ]}
        theme="light"
      />

      <FeatureGrid
        eyebrow="Platform features"
        title="Everything needed to tighten lead handling and customer follow-up"
        description="Anchor Systems combines the workflows that matter most for service businesses into one premium, easy-to-maintain platform."
        features={platformFeatures}
        theme="dark"
      />

      <section className="section-space light-section">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Industries"
            title="Built for service businesses where speed and follow-up decide who wins"
            description="These industry pages are seeded and ready to expand. Each page uses customized copy, structured internal linking, and a scalable route system instead of generic keyword swaps."
            theme="light"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/${industry.slug}`}
                className="light-link-card"
              >
                {industry.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <PricingCard {...pricingPlan} />
        </div>
      </section>

      <section className="section-space dark-section">
        <div className="container-shell">
          <div className="surface-outline p-8">
            <SectionHeading
              eyebrow="Location SEO system"
              title="A structure designed to scale into hundreds of local pages"
              description="Anchor Systems is set up with data-driven location and industry routes so you can expand by adding cities and trades to shared content files rather than rebuilding the site."
              theme="dark"
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${city.slug}/hvac-crm`}
                  className="dark-link-card"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection
        eyebrow="Operator signals"
        title="The problems service businesses keep trying to solve"
        description="Anchor Systems is designed around the operational pain points we hear most often from owner-led and growth-focused service companies."
        items={operatorSignals}
        theme="light"
      />

      <FaqSection
        eyebrow="FAQs"
        title="Questions owners ask before they tighten the system"
        description="If you are evaluating whether better lead handling and automation are worth it, start here."
        items={homeFaqs}
        theme="dark"
      />

      <CtaBanner
        eyebrow="Primary call to action"
        title="If your team is missing leads or letting estimates go cold, fix the system."
        description="Anchor Systems helps service businesses respond faster, automate follow-up, and make it easier to turn inbound demand into booked jobs."
        primaryHref={siteConfig.bookingLink}
        primaryLabel="Book Demo"
        secondaryHref="/demo"
        secondaryLabel="Go to demo page"
      />

      <ContactCta
        title="Want to see where your lead handling breaks down?"
        description="We will walk through the current workflow, identify where missed calls and stale estimates leak revenue, and show how Anchor Systems helps your team operate with more control."
      />
    </>
  );
}
