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
    "See Anchor Systems pricing for service businesses, including $297 per month and a $250 one-time setup fee.",
  path: "/pricing"
});

export default function PricingPage() {
  return (
    <>
      <section className="section-space dark-section bg-hero-grid">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Pricing"
            title="Simple pricing for service businesses that want a tighter system"
            description="Anchor Systems keeps pricing direct so owners can focus on the value: stronger lead capture, faster follow-up, better pipeline visibility, and more booked jobs."
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
                "The value is in better lead handling and better follow-up, not just in adding another tool to the stack."
            },
            {
              title: "Simple enough for owner-led and lean office teams",
              description:
                "Anchor Systems is built for practical operations, which means the system is meant to be used, not just purchased."
            },
            {
              title: "Focused on workflows that support booked revenue",
              description:
                "Every included feature is there to reduce operational drag and improve responsiveness across the customer journey."
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
        description="Here is what most service businesses want to understand before they book a walkthrough."
        items={pricingFaqs}
        theme="dark"
      />

      <CtaBanner
        eyebrow="Next step"
        title="See whether Anchor Systems fits your workflow before you decide"
        description="We will walk through how your business handles leads, estimates, and follow-up today, then show what the platform changes."
        primaryHref={siteConfig.bookingLink}
        primaryLabel="Book Demo"
        secondaryHref="/demo"
        secondaryLabel="View demo page"
      />

      <ContactCta
        title="Want to talk through pricing with your actual lead flow in mind?"
        description="Book a demo and we will show how Anchor Systems supports your workflow, where it removes friction, and why the return comes from tighter lead handling and follow-up execution."
      />
    </>
  );
}
