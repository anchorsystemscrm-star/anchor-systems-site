import Link from "next/link";

import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="surface-card mx-auto max-w-3xl px-6 py-12 text-center sm:px-10">
          <span className="section-eyebrow">Page not found</span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            This page is not on the map.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate">
            The page you requested does not exist or may have moved. Head back
            to the main site or book a demo to see how Anchor Systems can help
            your service business capture more leads and book more jobs.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/">Back to home</ButtonLink>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-full border border-line px-5 py-3 text-sm font-semibold text-navy hover:border-blue/40 hover:text-blue"
            >
              See the demo page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
