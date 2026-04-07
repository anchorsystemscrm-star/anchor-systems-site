import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/button-link";

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  highlights: string[];
  stats: Array<{
    label: string;
    value: string;
  }>;
};

export function HeroSection({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  highlights,
  stats
}: HeroSectionProps) {
  return (
    <section className="dark-section overflow-hidden bg-hero-grid">
      <div className="container-shell section-space relative">
        <div className="absolute inset-x-8 top-12 h-px bg-gradient-to-r from-transparent via-blue-3/30 to-transparent" />
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr,0.85fr]">
          <div>
            <span className="section-eyebrow">{eyebrow}</span>
            <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold tracking-tight text-text sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
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
            <ul className="mt-10 grid gap-3 text-sm text-text sm:grid-cols-2">
              {highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 rounded-[24px] border border-white/10 bg-white/[0.05] px-4 py-3 backdrop-blur-xl"
                >
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-blue-3" />
                  <span className="text-muted">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-outline relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-3 to-transparent" />
            <div className="rounded-[2rem] border border-white/10 bg-bg-3/70 p-6 backdrop-blur-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-3">
                What changes when the system is tighter
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[26px] border border-white/10 bg-white/[0.05] px-5 py-5"
                  >
                    <p className="text-3xl font-semibold tracking-tight text-text">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[26px] border border-blue/20 bg-gradient-to-r from-blue/12 to-blue-3/10 px-6 py-6 text-white">
                <p className="font-display text-3xl leading-none text-white/90">
                  Built for operators
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Anchor Systems is designed for teams that want fewer lead
                  leaks, faster response windows, and a cleaner path from first
                  contact to booked revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
