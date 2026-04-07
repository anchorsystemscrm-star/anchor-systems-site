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
                revenue.
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
                Why it fits {industry.name.toLowerCase()} operators
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
              What {industry.name.toLowerCase()} businesses are up against
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
              A better operating system for {industry.name.toLowerCase()} teams
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
              Where it creates leverage
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
            <span className="section-eyebrow">Location pages</span>
            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-tight text-ink">
                  Explore {industry.name.toLowerCase()} SEO pages by city
                </h2>
                <p className="mt-4 text-lg leading-8 text-ink-soft">
                  The site is structured to scale location-targeted pages cleanly.
                  Start with these seeded city pages and expand by adding data,
                  not rebuilding templates.
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
              <span className="section-eyebrow">Problem pages</span>
              <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-semibold tracking-tight text-text">
                    Related revenue problems for {industry.name.toLowerCase()}{" "}
                    businesses
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-muted">
                    These pages go deeper on the specific breakdowns that most
                    often cost {industry.name.toLowerCase()} companies booked
                    jobs.
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
        description={`Here are the questions owners and operators typically ask when they want a cleaner system for responsiveness, follow-up, and booked-job visibility.`}
        items={industry.faqs}
        theme="dark"
      />

      <CtaBanner
        eyebrow="Book the walkthrough"
        title={`See how Anchor Systems supports ${industry.name.toLowerCase()} growth without adding complexity`}
        description="We will walk through how your team handles calls, estimates, follow-up, and booked jobs today, then show exactly where missed calls and stale estimates are costing you revenue."
        primaryHref={siteConfig.bookingLink}
        primaryLabel="Book Demo"
        secondaryHref="/service-business-crm"
        secondaryLabel="Explore the platform"
      />

      <ContactCta
        title={`Want a cleaner system for your ${industry.name.toLowerCase()} business?`}
        description="Anchor Systems is designed to make your business more responsive, more organized, and far harder to lose jobs through missed calls, lead leaks, and slow follow-up."
      />
    </>
  );
}
