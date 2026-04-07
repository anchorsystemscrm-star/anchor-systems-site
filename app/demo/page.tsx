import { BookingFrame } from "@/components/booking-frame";
import { ContactCta } from "@/components/contact-cta";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Book a Demo",
  description:
    "Book a demo with Anchor Systems to see how service businesses can capture more leads, automate follow-up, and book more jobs.",
  path: "/demo"
});

export default function DemoPage() {
  return (
    <>
      <section className="section-space dark-section bg-hero-grid">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
          <div>
            <span className="section-eyebrow">Book Demo</span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-text sm:text-6xl">
              Book the demo and see where your business is losing jobs.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              The demo is the fastest way to see how missed calls, scattered
              follow-up, and weak pipeline visibility turn into lost money, and
              what a cleaner operating system does differently.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                "See exactly where missed calls and slow callbacks cost you jobs",
                "See how AI receptionist and follow-up automation close those gaps",
                "Review pricing, onboarding, and the fastest path to fixing the problem"
              ].map((item) => (
                <div
                  key={item}
                  className="surface-card px-5 py-4 text-sm font-medium text-text"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <BookingFrame />
        </div>
      </section>

      <section className="section-space light-section">
        <div className="container-shell">
          <SectionHeading
            eyebrow="What to expect"
            title="A practical walkthrough, not a bloated sales pitch"
            description="We will focus on the workflows that matter most: inbound calls, lost opportunities, estimate follow-up, scheduling friction, and pipeline visibility."
            theme="light"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              {
                title: "Lead handling review",
                description:
                  "We start by identifying how leads enter the business and exactly where they stall, cool off, or disappear."
              },
              {
                title: "System fit",
                description:
                  "Then we show how Anchor Systems tightens responsiveness, customer communication, and booked-job visibility."
              },
              {
                title: "Clear next steps",
                description:
                  "If the fit is right, you will leave with a clear plan to stop the leaks and get the system live."
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
        </div>
      </section>

      <ContactCta
        title="If you know leads are slipping, this is the next step."
        description="Book the walkthrough and we will keep the conversation focused on missed calls, weak follow-up, and the fastest path to more booked jobs."
      />
    </>
  );
}
