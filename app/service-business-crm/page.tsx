import { ContactCta } from "@/components/contact-cta";
import { CtaBanner } from "@/components/cta-banner";
import { FaqSection } from "@/components/faq-section";
import { FeatureGrid } from "@/components/feature-grid";
import { TrustSection } from "@/components/trust-section";
import { crmFaqs } from "@/data/faqs";
import { platformFeatures } from "@/data/features";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Service Business CRM",
  description:
    "Anchor Systems is a service business operating system that captures leads, closes follow-up gaps, and stops pipeline chaos from turning into lost revenue.",
  path: "/service-business-crm"
});

export default function ServiceBusinessCrmPage() {
  return (
    <>
      <section className="section-space dark-section bg-hero-grid">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <div>
            <span className="section-eyebrow">Service Business CRM</span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-text sm:text-6xl">
              See every lead, fix follow-up leaks, and book more work.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Anchor Systems centralizes leads, closes follow-up gaps, and gives
              owners and office teams clear visibility into what is happening
              between the first call, the estimate, and the booked job. It is
              built to stop revenue leaks, not to act like a generic sales database.
            </p>
          </div>
          <div className="surface-outline p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-blue-3">
              Where businesses lose money
            </p>
            <div className="mt-6 space-y-4">
              {[
                "Leads disappear when calls, forms, and callbacks are split across too many tools",
                "Estimates go stale when no system forces follow-up to happen on time",
                "Booked jobs slip when pipeline status is unclear and handoffs are loose",
                "The office stays busy while revenue still leaks out of the process"
              ].map((item) => (
                <div
                  key={item}
                  className="surface-card px-5 py-5 text-sm leading-7 text-muted"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustSection
        eyebrow="Core value"
        title="Where service businesses lose money after the lead comes in"
        description="When leads are scattered, follow-up is manual, and pipeline status is unclear, the team stays busy while booked revenue quietly leaks out."
        items={[
          {
            title: "Scattered lead data",
            description:
              "When customer context lives across disconnected tools, good jobs slip before anyone realizes they still needed action."
          },
          {
            title: "Manual follow-up",
            description:
              "When callbacks and estimate reminders depend on memory, warm opportunities cool off and disappear."
          },
          {
            title: "Pipeline blind spots",
            description:
              "When no one can see what is pending, stale, or urgent, jobs slip through the cracks while the team thinks they are covered."
          }
        ]}
        theme="light"
      />

      <FeatureGrid
        eyebrow="Platform depth"
        title="The workflows that stop missed opportunities from turning into lost revenue"
        description="Anchor Systems goes straight at the expensive operational gaps: responsiveness, estimate follow-up, pipeline movement, and customer communication."
        features={platformFeatures.slice(1)}
        theme="dark"
      />

      <FaqSection
        eyebrow="CRM FAQs"
        title="Questions about workflow, visibility, and day-to-day use"
        description="These are the most common questions from service operators who know patchwork systems are costing them jobs."
        items={crmFaqs}
        theme="dark"
      />

      <CtaBanner
        eyebrow="Fix the process"
        title="If the business feels scattered, revenue is leaking."
        description="Book a walkthrough and see exactly how missed follow-up, stale estimates, and weak pipeline visibility are costing jobs that should already be booked."
        primaryHref={siteConfig.bookingLink}
        primaryLabel="Book Demo"
        secondaryHref="/pricing"
        secondaryLabel="See pricing"
      />

      <ContactCta
        title="If your pipeline is messy, revenue is leaking."
        description="Anchor Systems captures the leads, follow-up, and pipeline movement that usually get scattered across disconnected tools and turns them into one system that closes the gaps."
      />
    </>
  );
}
