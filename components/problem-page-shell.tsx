import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { ButtonLink } from "@/components/button-link";
import { ContactCta } from "@/components/contact-cta";
import { CtaBanner } from "@/components/cta-banner";
import { FaqSection } from "@/components/faq-section";
import { siteConfig } from "@/data/site";
import type { Industry, ProblemSolution } from "@/data/types";
import { getProblemLocationCities } from "@/lib/content";

type ProblemPageShellProps = {
  problem: ProblemSolution;
  industry: Industry;
};

export function ProblemPageShell({
  problem,
  industry
}: ProblemPageShellProps) {
  const featuredCities = getProblemLocationCities().slice(0, 4);

  return (
    <>
      <section className="dark-section section-space bg-hero-grid">
        <div className="container-shell">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: `/${industry.slug}`, label: industry.name },
              { href: `/solutions/${problem.slug}`, label: problem.shortLabel }
            ]}
          />
          <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
            <div>
              <span className="section-eyebrow">Revenue problem page</span>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-text sm:text-6xl">
                {problem.heroTitle}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                {problem.heroDescription} If this part of the workflow is weak,
                the job usually does not come back later. It goes to the company
                that moved first.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={siteConfig.bookingLink} external>
                  Book Demo
                </ButtonLink>
                <ButtonLink
                  href="/demo"
                  variant="secondary"
                  className="border-white/10 bg-white/[0.04] text-text shadow-none backdrop-blur-xl hover:bg-white/[0.08] hover:text-blue-3"
                >
                  View demo
                </ButtonLink>
              </div>
            </div>

            <div className="surface-outline p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-blue-3">
                What this fixes
              </p>
              <ul className="mt-6 space-y-4">
                {problem.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="rounded-[24px] border border-white/10 bg-white/[0.05] px-4 py-4 text-sm font-medium text-text"
                  >
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space light-section">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr,1.05fr]">
          <div className="surface-card-light p-8">
            <span className="section-eyebrow">The problem</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink">
              {problem.name} is really a booked-revenue problem
            </h2>
            <p className="mt-4 text-lg leading-8 text-ink-soft">
              {problem.intro}
            </p>
          </div>

          <div className="grid gap-5">
            {problem.painPoints.map((point) => (
              <div key={point} className="surface-card-light px-6 py-5">
                <p className="text-base leading-8 text-ink-soft">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space dark-section">
        <div className="container-shell grid gap-12 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">How Anchor Systems solves it</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text">
              A tighter operating system for {industry.name.toLowerCase()} teams
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
            <span className="section-eyebrow">Feature blocks</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text">
              What the platform gives your team
            </h2>
            <div className="mt-6 space-y-4">
              {problem.featureBlocks.map((block) => (
                <div key={block} className="surface-card px-6 py-5">
                  <p className="text-sm font-medium leading-7 text-text">
                    {block}
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
            <span className="section-eyebrow">Related pages</span>
            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-tight text-ink">
                  Explore location and industry pages tied to this problem
                </h2>
                <p className="mt-4 text-lg leading-8 text-ink-soft">
                  These pages support the same core theme from different angles:
                  local intent, trade-specific intent, and problem-specific
                  buying intent.
                </p>
              </div>
              <ButtonLink href="/pricing" variant="secondary">
                See pricing
              </ButtonLink>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <Link href={`/${industry.slug}`} className="light-link-card">
                Back to the main {industry.name} page
              </Link>
              {featuredCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${city.slug}/solutions/${problem.slug}`}
                  className="light-link-card"
                >
                  {problem.shortLabel} in {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        eyebrow="Problem FAQs"
        title={`Questions about ${problem.shortLabel}`}
        description="These are the questions owners ask when they know leads are slipping but need a cleaner fix than hiring more admin staff."
        items={problem.faqs}
        theme="dark"
      />

      <CtaBanner
        eyebrow="Book the walkthrough"
        title={`If ${problem.shortLabel.toLowerCase()} is weak, revenue is leaking.`}
        description="Book the demo and we will show where this problem is costing your business jobs, how Anchor Systems fixes it, and how fast you can put a tighter system in place."
        primaryHref={siteConfig.bookingLink}
        primaryLabel="Book Demo"
        secondaryHref="/demo"
        secondaryLabel="View demo"
      />

      <ContactCta
        title={`Ready to fix ${problem.shortLabel.toLowerCase()} before more jobs are lost?`}
        description="Anchor Systems helps service businesses close the gaps between the phone call, the follow-up, and the booked job so more revenue actually makes it through the system."
      />
    </>
  );
}
