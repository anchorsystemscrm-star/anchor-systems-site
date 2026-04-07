import type { FaqItem } from "@/data/types";

import { SectionHeading } from "@/components/section-heading";

type FaqSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: FaqItem[];
  theme?: "light" | "dark";
};

export function FaqSection({
  eyebrow,
  title,
  description,
  items,
  theme = "dark"
}: FaqSectionProps) {
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
        <div className="mt-10 space-y-4">
          {items.map((item) => (
            <details
              key={item.question}
              className={`group overflow-hidden px-6 py-5 ${
                isDark ? "surface-card" : "surface-card-light"
              }`}
            >
              <summary
                className={`cursor-pointer list-none text-lg font-semibold marker:hidden ${
                  isDark ? "text-text" : "text-ink"
                }`}
              >
                {item.question}
              </summary>
              <p
                className={`mt-4 max-w-4xl text-sm leading-7 ${
                  isDark ? "text-muted" : "text-ink-soft"
                }`}
              >
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
