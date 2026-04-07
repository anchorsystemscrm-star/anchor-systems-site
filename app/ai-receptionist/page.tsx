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
    "Anchor Systems captures missed calls, handles after-hours demand, and stops voicemail from turning into lost jobs and lost money for service businesses.",
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
              Every missed call is a lost shot at a booked job.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Service businesses lose jobs every day because nobody answers,
              nobody follows up fast enough, or after-hours demand lands in
              voicemail. Anchor Systems keeps those conversations alive
              with AI receptionist workflows, missed-call text back, and a
              cleaner path to booking before the customer hires someone else.
            </p>
          </div>
          <div className="surface-outline p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-blue-3">
              Where businesses lose money
            </p>
            <div className="mt-6 space-y-4">
              {[
                "Missed calls that turn into someone else’s booked jobs",
                "After-hours leads that disappear overnight",
                "Callbacks delayed long enough for the buyer to move on",
                "A weak first impression that makes your business look unavailable"
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
        title="Most service companies do not lose jobs because demand is weak"
        description="They lose jobs because the customer is ready now and the business is not. That gap gets expensive when calls are missed, staff are overloaded, or the team assumes someone else will follow up."
        items={[
          {
            title: "Missed-call leakage",
            description:
              "If a homeowner calls with an urgent need and gets no answer, the job often goes to the next provider immediately."
          },
          {
            title: "After-hours demand",
            description:
              "Calls and quote requests do not stop when the office closes. Without coverage, those leads go somewhere else overnight and on weekends."
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
                "Send an immediate follow-up when the phone rings unanswered so the lead does not disappear before your team calls back."
            },
            {
              title: "Lead qualification support",
              description:
                "Capture context fast and keep the next step moving instead of letting the call die in voicemail."
            },
            {
              title: "Response that converts",
              description:
                "Fast response builds confidence immediately and keeps urgent buyers moving toward a booked job."
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
        description="If your business depends on quick response times, this is where daily revenue leaks usually start."
        items={aiReceptionistFaqs}
        theme="dark"
      />

      <CtaBanner
        eyebrow="Fix missed calls now"
        title="Every missed call is a job that may never come back."
        description="We will show exactly where calls are slipping, how fast those missed opportunities turn into lost revenue, and how Anchor Systems closes the gap."
        primaryHref={siteConfig.bookingLink}
        primaryLabel="Book Demo"
        secondaryHref="/service-business-crm"
        secondaryLabel="See the operating system"
      />

      <ContactCta
        title="If calls are being missed, fix that first."
        description="Anchor Systems captures inbound demand, keeps after-hours leads alive, and stops voicemail from quietly handing jobs to faster competitors."
      />
    </>
  );
}
