import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { cities } from "@/data/cities";
import { industries } from "@/data/industries";
import { siteConfig } from "@/data/site";

export function Footer() {
  const footerIndustries = industries.slice(0, 5);
  const footerCities = cities.slice(0, 5);

  return (
    <footer className="border-t border-white/10 bg-bg text-text">
      <div className="container-shell py-16">
        <div className="surface-outline overflow-hidden px-6 py-8 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.4fr,1fr,1fr,1fr]">
            <div className="max-w-md">
              <BrandLogo />
              <p className="mt-6 text-sm leading-7 text-muted">
                Capture more leads, tighten follow-up, and book more jobs with
                an operating system built for service businesses that cannot
                afford to leak demand.
              </p>
              <div className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-3">
                  Built for operators
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Built to capture more leads, stop missed opportunities, and
                  help service businesses book more of the work already coming in.
                </p>
              </div>
              <Link
                href={siteConfig.bookingLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full border border-blue-3/50 bg-gradient-to-r from-blue via-blue-3 to-blue-4 px-5 py-3 text-sm font-semibold text-bg shadow-[0_18px_40px_rgba(97,168,255,0.3)] hover:-translate-y-0.5"
              >
                Book Demo
              </Link>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-3">
                Company
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-muted">
                <li>
                  <Link href="/" className="hover:text-text">
                    Home
                  </Link>
                </li>
                {siteConfig.navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-text">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-3">
                Industries
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-muted">
                {footerIndustries.map((industry) => (
                  <li key={industry.slug}>
                    <Link href={`/${industry.slug}`} className="hover:text-text">
                      {industry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-3">
                Locations
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-muted">
                {footerCities.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/locations/${city.slug}/hvac-crm`}
                      className="hover:text-text"
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p>Built for stronger responsiveness, cleaner operations, and more booked jobs.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
