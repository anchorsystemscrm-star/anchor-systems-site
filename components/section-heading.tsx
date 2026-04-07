type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light"
}: SectionHeadingProps) {
  const centered = align === "center";
  const isDark = theme === "dark";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <span className="section-eyebrow">{eyebrow}</span> : null}
      <h2
        className={`mt-5 text-3xl font-semibold tracking-tight sm:text-4xl ${
          isDark ? "text-text" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-lg leading-8 ${
          isDark ? "text-muted" : "text-ink-soft"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
