import { CheckCircle2 } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";

type TrustSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  theme?: "light" | "dark";
  items: Array<{
    title: string;
    description: string;
  }>;
};

export function TrustSection({
  eyebrow,
  title,
  description,
  theme = "light",
  items
}: TrustSectionProps) {
  const isDark = theme === "dark";

  return (
    <section className={isDark ? "section-space dark-section" : "section-space light-section"}>
      <div className="container-shell">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          theme={isDark ? "dark" : "light"}
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className={isDark ? "surface-card p-6" : "surface-card-light p-6"}
            >
              <div className="flex items-center gap-3">
                <CheckCircle2
                  className={`h-5 w-5 ${isDark ? "text-blue-3" : "text-blue-2"}`}
                />
                <h3 className={`text-lg font-semibold ${isDark ? "text-text" : "text-ink"}`}>
                  {item.title}
                </h3>
              </div>
              <p
                className={`mt-4 text-sm leading-7 ${
                  isDark ? "text-muted" : "text-ink-soft"
                }`}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
