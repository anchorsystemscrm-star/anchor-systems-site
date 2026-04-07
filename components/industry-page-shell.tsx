import Link from "next/link";

import type { Industry } from "@/data/types";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { ButtonLink } from "@/components/button-link";
import { CtaBanner } from "@/components/cta-banner";
import { FaqSection } from "@/components/faq-section";
import { ContactCta } from "@/components/contact-cta";
import { siteConfig } from "@/data/site";
import { cities } from "@/data/cities";
import { getProblemsForIndustry } from "@/lib/content";

type IndustryPageShellProps = {
  industry: Industry;
};

export function IndustryPageShell({ industry }: IndustryPageShellProps) {
  const locationLinks = cities.slice(0, 4);
  const relatedProblems = getProblemsForIndustry(industry.slug, 3);

  return (
    <>
      <section className="dark-section section-space bg-hero-grid">
        <div className="container-shell">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: `/${industry.slug}`, label: industry.serviceLabel }
            ]}
          />
          <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
            <div>
              <span className="section-eyebrow">{industry.name} software</span>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-text sm:text-6xl">
                {industry.heroTitle}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                {industry.heroDescription} If your team misses the first call or
                lets estimates sit, that job usually becomes someone else&apos;s
                revenue the same day.
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
                Where the money leaks
              </p>
              <ul className="mt-6 space-y-4">
                {industry.outcomes.map((outcome) => (
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
            <span className="section-eyebrow">Industry reality</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink">
              Why {industry.name.toLowerCase()} businesses lose jobs here
            </h2>
            <p className="mt-4 text-lg leading-8 text-ink-soft">
              {industry.intro} In this category, slow response and weak
              follow-up do not just create admin problems. They cost booked
              jobs.
            </p>
          </div>

          <div className="grid gap-5">
            {industry.painPoints.map((point) => (
              <div
                key={point}
                className="surface-card-light px-6 py-5"
              >
                <p className="text-base leading-8 text-ink-soft">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space dark-section">
        <div className="container-shell grid gap-12 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">How Anchor Systems helps</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text">
              How Anchor Systems closes the leak
            </h2>
            <div className="mt-6 space-y-4">
              {industry.solutions.map((solution) => (
                <div
                  key={solution}
                  className="surface-card px-6 py-5"
                >
                  <p className="text-sm leading-7 text-muted">{solution}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="section-eyebrow">Use cases</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text">
              Where booked revenue is usually won or lost
            </h2>
            <div className="mt-6 space-y-4">
              {industry.useCases.map((useCase) => (
                <div
                  key={useCase}
                  className="surface-card px-6 py-5"
                >
                  <p className="text-sm font-medium leading-7 text-text">
                    {useCase}
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
            <span className="section-eyebrow">Local markets</span>
            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-tight text-ink">
                  See how this problem shows up across the markets you want to win
                </h2>
                <p className="mt-4 text-lg leading-8 text-ink-soft">
                  Anchor Systems helps service businesses show up stronger in
                  the places they want to win. In every market, fast response
                  and tighter follow-up are what stop jobs from leaking away.
                </p>
              </div>
              <ButtonLink href="/contact" variant="secondary">
                Talk through fit
              </ButtonLink>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {locationLinks.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${city.slug}/${industry.slug}`}
                  className="light-link-card"
                >
                  {industry.name} CRM in {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {relatedProblems.length ? (
        <section className="section-space dark-section">
          <div className="container-shell">
            <div className="surface-outline p-8">
              <span className="section-eyebrow">Where else money leaks</span>
              <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-semibold tracking-tight text-text">
                    If you are dealing with this, you are likely also losing
                    jobs here:
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-muted">
                    These breakdowns zero in on the missed-call, follow-up, and
                    pipeline leaks that most often cost{" "}
                    {industry.name.toLowerCase()} companies booked jobs.
                  </p>
                </div>
                <ButtonLink
                  href="/demo"
                  variant="secondary"
                  className="border-white/10 bg-white/[0.04] text-text shadow-none backdrop-blur-xl hover:bg-white/[0.08] hover:text-blue-3"
                >
                  View demo
                </ButtonLink>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {relatedProblems.map((problem) => (
                  <Link
                    key={problem.slug}
                    href={`/solutions/${problem.slug}`}
                    className="dark-link-card"
                  >
                    {problem.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <FaqSection
        eyebrow="FAQs"
        title={`Questions about Anchor Systems for ${industry.name.toLowerCase()} companies`}
        description={`Here are the questions owners and operators ask when they know missed calls, slow follow-up, and loose pipeline control are costing them revenue.`}
        items={industry.faqs}
        theme="dark"
      />

      <CtaBanner
        eyebrow="Stop the leak"
        title={`If your ${industry.name.toLowerCase()} process is loose, revenue is slipping out daily.`}
        description="We will walk through how your team handles calls, estimates, follow-up, and booked jobs today, then show exactly where missed calls, stale estimates, and weak pipeline control are costing you money."
        primaryHref={siteConfig.bookingLink}
        primaryLabel="Book Demo"
        secondaryHref="/service-business-crm"
        secondaryLabel="See the operating system"
      />

      <ContactCta
        title={`Fix the leaks in your ${industry.name.toLowerCase()} business before more jobs disappear.`}
        description="Anchor Systems captures missed demand, closes follow-up gaps, and gives your team one operating system to stop booked revenue from leaking away."
      />
    </>
  );
}
