import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { ButtonLink } from "@/components/button-link";
import { ContactCta } from "@/components/contact-cta";
import { CtaBanner } from "@/components/cta-banner";
import { FaqSection } from "@/components/faq-section";
import { siteConfig } from "@/data/site";
import type { City, Industry, ProblemSolution } from "@/data/types";

type LocationProblemPageShellProps = {
  city: City;
  industry: Industry;
  problem: ProblemSolution;
  relatedCities: City[];
};

export function LocationProblemPageShell({
  city,
  industry,
  problem,
  relatedCities
}: LocationProblemPageShellProps) {
  const pageLabel = `${problem.shortLabel} in ${city.name}, ${city.state}`;

  return (
    <>
      <section className="dark-section section-space bg-hero-grid">
        <div className="container-shell">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: `/locations/${city.slug}/${industry.slug}`, label: city.name },
              { href: `/solutions/${problem.slug}`, label: problem.shortLabel },
              {
                href: `/locations/${city.slug}/solutions/${problem.slug}`,
                label: city.name
              }
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
            <div>
              <span className="section-eyebrow">Local problem page</span>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-text sm:text-6xl">
                {pageLabel} for service businesses that are tired of losing
                money to slow response
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                {city.intro} {problem.intro} In {city.name}, that usually means
                the revenue lands with whoever responds first and follows up
                harder. Jobs are lost here every day for exactly this reason.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={siteConfig.bookingLink} external>
                  Book Demo
                </ButtonLink>
                <ButtonLink
                  href="/pricing"
                  variant="secondary"
                  className="border-white/10 bg-white/[0.04] text-text shadow-none backdrop-blur-xl hover:bg-white/[0.08] hover:text-blue-3"
                >
                  View pricing
                </ButtonLink>
              </div>
            </div>

            <div className="surface-outline p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-blue-3">
                Why it matters in {city.name}
              </p>
              <div className="mt-6 space-y-4">
                <div className="surface-card px-5 py-5">
                  <p className="text-sm leading-7 text-muted">
                    {city.marketAngle}
                  </p>
                </div>
                <div className="surface-card px-5 py-5">
                  <p className="text-sm leading-7 text-muted">
                    {problem.heroDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space light-section">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <div className="surface-card-light p-8">
            <span className="section-eyebrow">Local pain points</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink">
              Why {city.name} {industry.name.toLowerCase()} teams lose money
              here
            </h2>
            <p className="mt-4 text-lg leading-8 text-ink-soft">
              In a local market like {city.name}, the penalty for weak response
              time is simple: fewer callbacks, fewer bookings, and more revenue
              going to the next available competitor.
            </p>
          </div>
          <div className="grid gap-4">
            {problem.painPoints.map((point) => (
              <div key={point} className="surface-card-light px-6 py-5">
                <p className="text-sm leading-7 text-ink-soft">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space dark-section">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">How Anchor Systems helps</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text">
              Fix the leak before the next job disappears
            </h2>
            <div className="mt-6 space-y-4">
              {problem.solutionPoints.map((point) => (
                <div key={point} className="surface-card px-6 py-5">
                  <p className="text-sm leading-7 text-muted">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="section-eyebrow">Operational leverage</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text">
              What changes when response gets tighter
            </h2>
            <div className="mt-6 space-y-4">
              {problem.outcomes.map((outcome) => (
                <div key={outcome} className="surface-card px-6 py-5">
                  <p className="text-sm font-medium leading-7 text-text">
                    {outcome} for {city.name} {industry.name.toLowerCase()}{" "}
                    businesses.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space light-section">
        <div className="container-shell">
          <div className="surface-card-light p-8">
            <span className="section-eyebrow">Related internal links</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink">
              Keep moving through the pages tied to this local revenue leak
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-soft">
              These links connect the local intent, trade intent, and problem
              intent pages so visitors and search engines can move naturally
              through the topic cluster. They also make the next step obvious if
              you are actively trying to fix this problem.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <Link
                href={`/locations/${city.slug}/${industry.slug}`}
                className="light-link-card"
              >
                Back to {city.name} {industry.name}
              </Link>
              <Link href={`/solutions/${problem.slug}`} className="light-link-card">
                Main {problem.shortLabel} page
              </Link>
              <Link href="/demo" className="light-link-card">
                Book a demo walkthrough
              </Link>
              {relatedCities.map((relatedCity) => (
                <Link
                  key={relatedCity.slug}
                  href={`/locations/${relatedCity.slug}/solutions/${problem.slug}`}
                  className="light-link-card"
                >
                  {problem.shortLabel} in {relatedCity.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        eyebrow="Local FAQs"
        title={`Questions about ${problem.shortLabel} in ${city.name}`}
        description="These are the local questions operators ask when they know leads are slipping, jobs are being lost, and they need a stronger system fast."
        items={[
          {
            question: `Why does ${problem.shortLabel.toLowerCase()} matter in ${city.name}?`,
            answer: `${city.marketAngle} ${problem.intro} In a market like ${city.name}, weak response time is usually visible to the buyer immediately.`
          },
          {
            question: `Can Anchor Systems help smaller ${industry.name.toLowerCase()} teams in ${city.name}?`,
            answer:
              "Yes. Lean service teams often feel the cost of missed calls and loose follow-up most sharply, which makes operational leverage especially valuable."
          },
          {
            question: `What is the first win for a ${city.name} business that fixes this problem?`,
            answer:
              "Usually it is improved responsiveness and fewer leads disappearing before the team can actually work them."
          }
        ]}
        theme="dark"
      />

      <CtaBanner
        eyebrow="Book the walkthrough"
        title={`If ${problem.shortLabel.toLowerCase()} is weak in ${city.name}, you are losing jobs right now.`}
        description="Book the demo and we will walk through how your current process handles inbound demand, where the jobs are slipping, and how Anchor Systems closes the gap fast."
        primaryHref={siteConfig.bookingLink}
        primaryLabel="Book Demo"
        secondaryHref="/demo"
        secondaryLabel="View demo"
      />

      <ContactCta
        title={`Fix ${problem.shortLabel.toLowerCase()} in ${city.name} before more local jobs go elsewhere.`}
        description={`Anchor Systems helps ${city.name} service businesses stop missed opportunities, tighten follow-up, and turn more local demand into booked revenue while competitors are still relying on loose processes.`}
      />
    </>
  );
}
