import { ButtonLink } from "@/components/button-link";

type CtaBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBanner({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: CtaBannerProps) {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="surface-outline relative overflow-hidden px-6 py-10 text-white sm:px-10 sm:py-14">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-3 to-transparent" />
          <span className="section-eyebrow">
            {eyebrow}
          </span>
          <p className="mt-5 max-w-2xl text-sm font-semibold uppercase tracking-[0.18em] text-blue-3">
            Every missed call, stale estimate, and slow callback costs real revenue.
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr,auto] lg:items-end">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href={primaryHref}>
                {primaryLabel}
              </ButtonLink>
              {secondaryHref && secondaryLabel ? (
                <ButtonLink
                  href={secondaryHref}
                  variant="secondary"
                  className="border-white/10 bg-white/[0.04] text-text shadow-none backdrop-blur-xl hover:bg-white/[0.08] hover:text-blue-3"
                >
                  {secondaryLabel}
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
