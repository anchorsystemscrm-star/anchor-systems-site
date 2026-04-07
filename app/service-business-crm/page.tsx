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
    "Anchor Systems is a service business CRM for centralizing leads, automating follow-up, improving pipeline visibility, and helping teams book more jobs.",
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
              A CRM built around how service businesses actually operate.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Anchor Systems centralizes leads, automates follow-up, and gives
              owners and office teams better visibility into what is happening
              between the first call, the estimate, and the booked job. It is a
              platform for running tighter, not a generic sales database.
            </p>
          </div>
          <div className="surface-outline p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-blue-3">
              What it improves
            </p>
            <div className="mt-6 space-y-4">
              {[
                "Lead centralization across calls, forms, and follow-up",
                "Automation for estimate reminders and customer communication",
                "Pipeline visibility so active opportunities are easier to track",
                "Operational efficiency from faster handoffs and fewer dropped balls"
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
        title="The platform exists to make close rates and customer retention easier to improve"
        description="When leads are organized, follow-up is automated, and pipeline status is visible, the team spends less time guessing and more time closing and serving customers well."
        items={[
          {
            title: "Centralized pipeline",
            description:
              "Keep new opportunities, pending estimates, and booked work in a single operating view."
          },
          {
            title: "Automation where it matters",
            description:
              "Remove manual follow-up gaps that normally depend on someone remembering the next touchpoint."
          },
          {
            title: "Operational clarity",
            description:
              "Help office staff, owners, and the field stay aligned without constant status chasing."
          }
        ]}
        theme="light"
      />

      <FeatureGrid
        eyebrow="Platform depth"
        title="The workflows service businesses rely on most"
        description="Anchor Systems focuses on the areas that create the biggest operational leverage: responsiveness, pipeline movement, and customer communication."
        features={platformFeatures.slice(1)}
        theme="dark"
      />

      <FaqSection
        eyebrow="CRM FAQs"
        title="Questions about workflow, visibility, and day-to-day use"
        description="These are the most common CRM questions from service operators who have outgrown patchwork systems."
        items={crmFaqs}
        theme="dark"
      />

      <CtaBanner
        eyebrow="See the platform"
        title="If the business feels scattered between leads, estimates, and follow-up, this is the fix."
        description="Book a walkthrough and see how Anchor Systems helps your team operate with more control, more consistency, and more booked-job leverage."
        primaryHref={siteConfig.bookingLink}
        primaryLabel="Book Demo"
        secondaryHref="/pricing"
        secondaryLabel="View pricing"
      />

      <ContactCta
        title="Want a CRM that behaves like an operating system, not a generic database?"
        description="Anchor Systems is designed for service companies that want less friction between inbound demand, estimate follow-up, and collected revenue."
      />
    </>
  );
}
