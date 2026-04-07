import { ContactCta } from "@/components/contact-cta";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Anchor Systems to learn how your service business can capture more leads, automate follow-up, and book more jobs.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <section className="section-space dark-section bg-hero-grid">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Contact"
            title="Talk with Anchor Systems"
            description="If you want a cleaner system for missed calls, follow-up automation, booking flow, and pipeline visibility, the best next step is to book a demo."
            theme="dark"
          />
        </div>
      </section>

      <section className="section-space light-section">
        <div className="container-shell grid gap-6 lg:grid-cols-[1fr,1fr]">
          <article className="surface-card-light p-8">
            <h2 className="text-2xl font-semibold text-ink">
              What we can help you evaluate
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-ink-soft">
              <li>Where missed calls and slow response are costing you jobs</li>
              <li>
                How to automate estimate follow-up without making the customer
                experience feel robotic
              </li>
              <li>
                How to centralize the pipeline so the office and field stay more
                aligned
              </li>
              <li>
                Whether Anchor Systems is the right fit for your current stage
                of growth
              </li>
            </ul>
          </article>

          <article className="surface-card-light p-8">
            <h2 className="text-2xl font-semibold text-ink">
              Best way to reach us
            </h2>
            <p className="mt-4 text-lg leading-8 text-ink-soft">
              Use the booking link to schedule a walkthrough. That gives us the
              fastest path to understand your business and show how the platform
              fits.
            </p>
            <a
              href={siteConfig.bookingLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full border border-blue-3/50 bg-gradient-to-r from-blue via-blue-3 to-blue-4 px-5 py-3 text-sm font-semibold text-bg shadow-[0_18px_40px_rgba(97,168,255,0.3)] hover:-translate-y-0.5"
            >
              Book Demo
            </a>
          </article>
        </div>
      </section>

      <ContactCta
        title="If the business is growing but the system is still loose, let’s fix that."
        description="Anchor Systems helps service businesses tighten operations around lead capture, follow-up, and booked revenue without creating unnecessary software overhead."
      />
    </>
  );
}
