import { SectionHeading } from "@/components/section-heading";

type TestimonialSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  theme?: "light" | "dark";
  items: Array<{
    quote: string;
    author: string;
    metric: string;
  }>;
};

export function TestimonialSection({
  eyebrow,
  title,
  description,
  theme = "light",
  items
}: TestimonialSectionProps) {
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
          {items.map((item, index) => (
            <article
              key={item.author}
              className={isDark ? "surface-card p-6" : "surface-card-light p-6"}
            >
              <div className="flex items-center justify-between">
                <p
                  className={`font-display text-4xl leading-none ${
                    isDark ? "text-blue-3" : "text-blue-2"
                  }`}
                >
                  “
                </p>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
                    isDark
                      ? "border border-white/10 bg-white/[0.05] text-blue-3"
                      : "bg-blue-4 text-blue-2"
                  }`}
                >
                  Signal {index + 1}
                </span>
              </div>
              <p
                className={`mt-4 text-base leading-8 ${
                  isDark ? "text-text" : "text-ink"
                }`}
              >
                {item.quote}
              </p>
              <div
                className={`mt-6 border-t pt-5 ${
                  isDark ? "border-white/10" : "border-slate-200"
                }`}
              >
                <p className={`text-sm font-semibold ${isDark ? "text-text" : "text-ink"}`}>
                  {item.author}
                </p>
                <p className={`mt-1 text-sm ${isDark ? "text-muted" : "text-ink-soft"}`}>
                  {item.metric}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
