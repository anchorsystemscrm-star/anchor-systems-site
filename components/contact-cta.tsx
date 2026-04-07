import { ButtonLink } from "@/components/button-link";

import { siteConfig } from "@/data/site";

type ContactCtaProps = {
  title: string;
  description: string;
};

export function ContactCta({ title, description }: ContactCtaProps) {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="surface-outline grid gap-8 p-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <span className="section-eyebrow">Book the next step</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
              {description}
            </p>
          </div>
          <div className="surface-card-light p-6">
            <p className="text-sm uppercase tracking-[0.18em] text-ink-soft">
              Best next move
            </p>
            <p className="mt-4 text-xl font-semibold text-ink">
              Show us how leads are handled today and where follow-up breaks
              down.
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              We will walk through the workflow, where revenue leaks out, and
              how Anchor Systems can help your team respond faster and book more
              jobs.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={siteConfig.bookingLink} external>
                Book Demo
              </ButtonLink>
              <ButtonLink href="/pricing" variant="secondary">
                See pricing
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
