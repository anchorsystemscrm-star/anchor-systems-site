import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { ButtonLink } from "@/components/button-link";
import { siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/65 backdrop-blur-2xl">
      <div className="container-shell flex min-h-[84px] items-center justify-between gap-4">
        <Link href="/" className="shrink-0">
          <BrandLogo compact showTagline={false} />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={siteConfig.bookingLink} external>
            Book Demo
          </ButtonLink>
        </div>

        <details className="group relative lg:hidden">
          <summary className="list-none rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-text marker:hidden">
            Menu
          </summary>
          <div className="absolute right-0 top-16 w-72 rounded-[28px] border border-white/10 bg-bg-2/95 p-3 shadow-soft backdrop-blur-2xl">
            <div className="flex flex-col gap-1">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-muted hover:bg-white/[0.05] hover:text-text"
                >
                  {link.label}
                </Link>
              ))}
              <ButtonLink
                href={siteConfig.bookingLink}
                variant="primary"
                external
                className="mt-2 w-full"
              >
                Book Demo
              </ButtonLink>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
