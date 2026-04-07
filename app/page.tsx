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
import { getFeaturedProblems } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Stop Missed Calls and Turn More Leads Into Booked Revenue",
  description:
    "Anchor Systems captures inbound demand, closes follow-up gaps, and stops missed calls, stale estimates, and pipeline chaos from leaking revenue out of service businesses.",
  path: "/"
});

export default function HomePage() {
  const featuredProblems = getFeaturedProblems(6);
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
        title="Stop missed calls, tighten follow-up, and turn more leads into booked revenue."
        description="Anchor Systems is built for service businesses that are tired of losing money between the first call, the estimate, and the booked job. If leads are going unanswered or follow-up is slipping, revenue is leaking right now."
        primaryHref={siteConfig.bookingLink}
        primaryLabel="Book Demo"
        secondaryHref="/pricing"
        secondaryLabel="View pricing"
        highlights={[
          "Every missed call is a chance for a competitor to win the job",
          "Every stale estimate is revenue sitting in a weak follow-up process",
          "Built for service businesses, not generic sales teams",
          "Designed to turn faster response into booked revenue"
        ]}
        stats={[
          { value: "$297/mo", label: "Simple monthly pricing" },
          { value: "$250", label: "One-time setup fee" },
          { value: "24/7", label: "Coverage for calls that would otherwise go cold" },
          { value: "1 system", label: "To stop missed calls, stale estimates, and lead leaks" }
        ]}
      />

      <TrustSection
        eyebrow="Why it works"
        title="Where service businesses lose money every day"
        description="Most operators do not need another dashboard. They need the leaks closed. Anchor Systems goes straight at the places where booked revenue usually disappears: missed calls, weak estimate follow-up, poor pipeline visibility, and slow office response."
        items={[
          {
            title: "Missed calls",
            description:
              "When the phone rings and nobody answers, the job usually goes to the next company that does."
          },
          {
            title: "Slow follow-up",
            description:
              "When callbacks lag and estimates sit untouched, warm leads go cold and revenue leaves with them."
          },
          {
            title: "Pipeline chaos",
            description:
              "When lead status lives across scattered tools, jobs slip through the cracks while the team stays busy."
          }
        ]}
        theme="light"
      />

      <FeatureGrid
        eyebrow="Platform features"
        title="One system built to capture demand and stop revenue leaks"
        description="Anchor Systems puts the most expensive operational gaps in one place so your team can answer faster, follow up harder, and book more of the work already coming in."
        features={platformFeatures}
        theme="dark"
      />

      <section className="section-space light-section">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Common revenue leaks"
            title="Start with the leaks that usually cost the most jobs"
            description="Start with the problems most service businesses feel first: missed calls, slow follow-up, after-hours gaps, and weak visibility into which leads still need action."
            theme="light"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredProblems.map((problem) => (
              <Link
                key={problem.slug}
                href={`/solutions/${problem.slug}`}
                className="light-link-card"
              >
                {problem.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space light-section">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Industries"
            title="Built for service businesses where speed decides who gets paid"
            description="Each industry section focuses on where revenue actually leaks by trade, from emergency calls that go unanswered to estimates that sit too long to convert."
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
              eyebrow="Local growth"
              title="Built to win more local jobs"
              description="Anchor Systems helps service businesses stay visible, responsive, and organized in the markets they want to win so more nearby demand turns into booked work."
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
        title="The same revenue leaks keep showing up in service businesses"
        description="Anchor Systems is built around the operational failures owners keep paying for: missed calls, slow callbacks, stale estimates, and poor visibility into what still needs action."
        items={operatorSignals}
        theme="light"
      />

      <FaqSection
        eyebrow="FAQs"
        title="Questions owners ask when they know money is leaking"
        description="If you are evaluating whether missed calls, weak follow-up, and pipeline chaos are costing real revenue, start here."
        items={homeFaqs}
        theme="dark"
      />

      <CtaBanner
        eyebrow="Stop losing jobs"
        title="Missed calls and stale estimates do not fix themselves."
        description="Anchor Systems captures inbound demand, closes follow-up gaps, and stops missed calls and stale quotes from quietly draining booked revenue."
        primaryHref={siteConfig.bookingLink}
        primaryLabel="Book Demo"
        secondaryHref="/demo"
        secondaryLabel="See where revenue is leaking"
      />

      <ContactCta
        title="See exactly where missed calls and weak follow-up are costing you jobs."
        description="We will walk through the current workflow, identify where missed calls, delayed callbacks, and stale estimates leak revenue, and show how Anchor Systems closes those gaps."
      />
    </>
  );
}
