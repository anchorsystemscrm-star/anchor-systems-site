import { ContactCta } from "@/components/contact-cta";
import { CtaBanner } from "@/components/cta-banner";
import { FaqSection } from "@/components/faq-section";
import { TrustSection } from "@/components/trust-section";
import { aiReceptionistFaqs } from "@/data/faqs";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AI Receptionist",
  description:
    "Anchor Systems helps service businesses capture missed calls, handle after-hours inquiries, support booking, and create a better customer experience with AI receptionist workflows.",
  path: "/ai-receptionist"
});

export default function AiReceptionistPage() {
  return (
    <>
      <section className="section-space dark-section bg-hero-grid">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <div>
            <span className="section-eyebrow">AI Receptionist</span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-text sm:text-6xl">
              Stop letting missed calls turn into lost revenue.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Service businesses lose jobs every day because nobody answers,
              nobody follows up fast enough, or after-hours demand lands in
              voicemail. Anchor Systems helps keep those conversations alive
              with AI receptionist workflows, missed-call text back, and a
              cleaner path to booking.
            </p>
          </div>
          <div className="surface-outline p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-blue-3">
              What it protects
            </p>
            <div className="mt-6 space-y-4">
              {[
                "Missed-call capture before the lead contacts someone else",
                "After-hours lead handling when the office is closed",
                "Booking support that keeps the next step clear",
                "A more professional customer experience from the first contact"
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
        eyebrow="Where businesses lose money"
        title="Most service companies do not lose the lead because demand is weak"
        description="They lose it because the customer was ready first, while the business was not. That gap gets expensive when calls are missed, staff are overloaded, or the team assumes someone else will follow up."
        items={[
          {
            title: "Missed-call leakage",
            description:
              "If a homeowner calls with an urgent need and gets no answer, there is a good chance they move to the next provider immediately."
          },
          {
            title: "After-hours demand",
            description:
              "Calls and quote requests do not stop when the office closes. A better system keeps those leads engaged overnight and on weekends."
          },
          {
            title: "Booking friction",
            description:
              "Even interested buyers drop off when the next step is unclear or the callback comes too late to matter."
          }
        ]}
        theme="light"
      />

      <section className="section-space light-section">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Missed call text back",
              description:
                "Send an immediate follow-up when the phone rings unanswered so the lead knows your business is still engaged."
            },
            {
              title: "Lead qualification support",
              description:
                "Create a better first interaction that gathers context and sets up the next action more clearly."
            },
            {
              title: "Better customer experience",
              description:
                "Responsiveness feels premium. It builds confidence before the team ever arrives on site."
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
        eyebrow="AI receptionist FAQs"
        title="Questions about missed-call capture and after-hours lead handling"
        description="If your business depends on quick response times, this is where the operational leverage usually starts."
        items={aiReceptionistFaqs}
        theme="dark"
      />

      <CtaBanner
        eyebrow="Book the walkthrough"
        title="See how much demand you may be losing between the ring and the response"
        description="We will show how Anchor Systems helps your business stay responsive, even when the team is busy, the office is closed, or calls hit all at once."
        primaryHref={siteConfig.bookingLink}
        primaryLabel="Book Demo"
        secondaryHref="/service-business-crm"
        secondaryLabel="Explore the full platform"
      />

      <ContactCta
        title="Need a better front door for your business?"
        description="Anchor Systems gives service businesses a stronger way to capture inbound demand, support booking, and stop missed-call leakage from the first customer touchpoint."
      />
    </>
  );
}
