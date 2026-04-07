import { ContactCta } from "@/components/contact-cta";
import { CtaBanner } from "@/components/cta-banner";
import { FaqSection } from "@/components/faq-section";
import { PricingCard } from "@/components/pricing-card";
import { SectionHeading } from "@/components/section-heading";
import { pricingFaqs } from "@/data/faqs";
import { pricingPlan } from "@/data/pricing";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pricing",
  description:
    "See Anchor Systems pricing for service businesses that want to stop losing money to missed calls, stale estimates, and loose lead handling.",
  path: "/pricing"
});

export default function PricingPage() {
  return (
    <>
      <section className="section-space dark-section bg-hero-grid">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Pricing"
            title="Simple pricing for businesses that are done losing easy revenue"
            description="Anchor Systems keeps pricing direct so owners can focus on the return: fewer missed calls, fewer stale estimates, cleaner visibility, and more booked jobs."
            theme="dark"
          />
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <PricingCard {...pricingPlan} />
        </div>
      </section>

      <section className="section-space light-section">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Designed to pay for itself in missed opportunities recovered",
              description:
                "The value is in recovering jobs you are already generating but still losing because calls, callbacks, and follow-up are too loose."
            },
            {
              title: "Built to close the gaps without adding operational drag",
              description:
                "Anchor Systems is built for practical operations, which means your team can start using it to stop leaks fast instead of babysitting a bloated rollout."
            },
            {
              title: "Focused on workflows that support booked revenue",
              description:
                "Every included feature exists to stop lead leaks, tighten follow-up, and convert more of the demand you already paid to generate."
            }
          ].map((item) => (
            <article key={item.title} className="surface-card-light p-6">
              <h2 className="text-xl font-semibold text-ink">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-ink-soft">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <FaqSection
        eyebrow="Pricing FAQs"
        title="Questions about cost, setup, and fit"
        description="Here is what most service businesses want to understand before they decide to stop the revenue leaks."
        items={pricingFaqs}
        theme="dark"
      />

      <CtaBanner
        eyebrow="Fix the leak"
        title="If missed calls and weak follow-up are costing jobs, the next step is obvious."
        description="We will walk through how your business handles leads, estimates, and follow-up today, then show where the current process is costing you jobs and money."
        primaryHref={siteConfig.bookingLink}
        primaryLabel="Book Demo"
        secondaryHref="/demo"
        secondaryLabel="See where revenue is slipping"
      />

      <ContactCta
        title="See what fixing missed calls and stale follow-up is worth in your business."
        description="Book a demo and we will show how Anchor Systems fits your workflow, where revenue is slipping, and why closing those gaps usually pays for itself fast."
      />
    </>
  );
}
