import Link from "next/link";

import type { City, Industry } from "@/data/types";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { ButtonLink } from "@/components/button-link";
import { ContactCta } from "@/components/contact-cta";
import { FaqSection } from "@/components/faq-section";
import { siteConfig } from "@/data/site";
import { getProblemsForIndustry } from "@/lib/content";

type LocationPageShellProps = {
  city: City;
  industry: Industry;
  relatedCities: City[];
};

export function LocationPageShell({
  city,
  industry,
  relatedCities
}: LocationPageShellProps) {
  const localHeadline = `${industry.name} CRM in ${city.name}, ${city.state}`;
  const industryProblems = getProblemsForIndustry(industry.slug, 2);

  return (
    <>
      <section className="dark-section section-space bg-hero-grid">
        <div className="container-shell">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/locations", label: "Locations" },
              { href: `/locations/${city.slug}/${industry.slug}`, label: localHeadline }
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
            <div>
              <span className="section-eyebrow">Local landing page</span>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-text sm:text-6xl">
                {localHeadline} for service businesses that need tighter lead
                handling
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                {city.intro} Anchor Systems gives {city.name}{" "}
                {industry.name.toLowerCase()} businesses a premium system for
                lead capture, automated follow-up, pipeline visibility, and
                booked-job efficiency. If calls go unanswered or estimates sit
                too long, local buyers rarely wait around.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={siteConfig.bookingLink} external>
                  Book Demo
                </ButtonLink>
                <ButtonLink
                  href={`/${industry.slug}`}
                  variant="secondary"
                  className="border-white/10 bg-white/[0.04] text-text shadow-none backdrop-blur-xl hover:bg-white/[0.08] hover:text-blue-3"
                >
                  Explore {industry.name} page
                </ButtonLink>
              </div>
            </div>

            <div className="surface-outline p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-blue-3">
                Why this page exists
              </p>
              <div className="mt-6 space-y-4">
                <div className="surface-card px-5 py-5">
                  <p className="text-sm leading-7 text-muted">
                    {city.marketAngle}
                  </p>
                </div>
                <div className="surface-card px-5 py-5">
                  <p className="text-sm leading-7 text-muted">
                    {industry.intro}
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
            <span className="section-eyebrow">Local fit</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink">
              Why Anchor Systems fits {city.name} {industry.name.toLowerCase()}{" "}
              companies
            </h2>
            <p className="mt-4 text-lg leading-8 text-ink-soft">
              Service businesses in {city.name} do not just need more leads.
              They need a better way to answer fast, stop lead leaks, follow up
              on estimates, and keep the office and field aligned. Anchor
              Systems helps create that operating discipline without forcing
              teams into a bloated, hard-to-maintain software stack. The cost of
              not fixing it is simple: lost jobs and lost money.
            </p>
          </div>

          <div className="grid gap-4">
            {industry.solutions.slice(0, 3).map((solution) => (
              <div
                key={solution}
                className="surface-card-light px-6 py-5"
              >
                <p className="text-sm leading-7 text-ink-soft">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space dark-section">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">Use cases in {city.name}</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text">
              How local operators use the platform
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

          <div>
            <span className="section-eyebrow">Built to convert demand</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text">
              What stronger systems change
            </h2>
            <div className="mt-6 space-y-4">
              {industry.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="surface-card px-6 py-5"
                >
                  <p className="text-sm leading-7 text-muted">
                    {outcome} for {city.name} teams competing on speed,
                    professionalism, and follow-up.
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
            <span className="section-eyebrow">Related local pages</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink">
              Explore nearby {industry.name.toLowerCase()} pages
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-soft">
              Internal links between nearby city pages make the location system
              easier to expand and easier for search engines to crawl.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {relatedCities.map((relatedCity) => (
                <Link
                  key={relatedCity.slug}
                  href={`/locations/${relatedCity.slug}/${industry.slug}`}
                  className="light-link-card"
                >
                  {industry.name} CRM in {relatedCity.name}
                </Link>
              ))}
              <Link
                href={`/${industry.slug}`}
                className="light-link-card"
              >
                Back to the main {industry.name} page
              </Link>
            </div>
          </div>
        </div>
      </section>

      {industryProblems.length ? (
        <section className="section-space dark-section">
          <div className="container-shell">
            <div className="surface-outline p-8">
              <span className="section-eyebrow">Problem pages</span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text">
                Related pages for the biggest conversion leaks
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
                These pages focus on the specific response and follow-up problems
                that most often cost {city.name} {industry.name.toLowerCase()}{" "}
                businesses booked work.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {industryProblems.map((problem) => (
                  <Link
                    key={problem.slug}
                    href={`/locations/${city.slug}/solutions/${problem.slug}`}
                    className="dark-link-card"
                  >
                    {problem.shortLabel} in {city.name}
                  </Link>
                ))}
                <Link href="/demo" className="dark-link-card">
                  Book a demo walkthrough
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <FaqSection
        eyebrow="Local FAQs"
        title={`Questions about ${industry.name.toLowerCase()} software in ${city.name}`}
        description={`These are the most common questions local service operators ask when evaluating a better system for lead capture, follow-up, and booking efficiency.`}
        items={[
          {
            question: `Does Anchor Systems work for ${industry.name.toLowerCase()} companies in ${city.name}?`,
            answer: `Yes. It is designed for service businesses that need faster lead response, stronger follow-up, and a cleaner operating system for turning inbound demand into booked work.`
          },
          {
            question: `Why would a ${city.name} ${industry.name.toLowerCase()} business use this instead of separate tools?`,
            answer: `Because separate tools usually create gaps between the phone, the pipeline, the estimate, and the next action. Anchor Systems brings those workflows closer together so the business runs tighter.`
          },
          {
            question: `What is the first improvement most ${city.name} teams notice?`,
            answer: `Usually it is improved responsiveness. Missed calls get addressed faster, follow-up becomes more consistent, and the pipeline is easier to understand.`
          }
        ]}
        theme="dark"
      />

      <ContactCta
        title={`Want a better ${industry.name.toLowerCase()} operating system in ${city.name}?`}
        description={`Anchor Systems helps ${city.name} service businesses stop lead leaks, automate estimate follow-up, and book more jobs before more local revenue slips to faster competitors.`}
      />
    </>
  );
}
