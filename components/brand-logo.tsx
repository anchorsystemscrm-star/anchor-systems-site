import { cn } from "@/lib/utils";

type BrandLogoProps = {
  tone?: "light" | "dark";
  compact?: boolean;
  showTagline?: boolean;
};

export function BrandLogo({
  tone = "light",
  compact = false,
  showTagline = true
}: BrandLogoProps) {
  const isDark = tone === "dark";

  return (
    <div className="flex items-center gap-3">
      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden rounded-[22px] border shadow-glow",
          compact ? "h-11 w-11" : "h-12 w-12",
          isDark
            ? "border-slate-200/70 bg-gradient-to-br from-blue via-blue-3 to-blue-4 text-bg"
            : "border-white/12 bg-gradient-to-br from-blue-2 via-blue to-blue-3 text-white"
        )}
      >
        <div className="absolute inset-[1px] rounded-[20px] bg-gradient-to-br from-white/20 via-transparent to-transparent" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="relative h-5 w-5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="5.5" r="1.75" />
          <path d="M12 7.25v10.5" />
          <path d="M7.25 11.75h9.5" />
          <path d="M4 15.5h3.2" />
          <path d="M16.8 15.5H20" />
          <path d="M6 15.5c1.25 3.1 3.75 4.75 6 4.75s4.75-1.65 6-4.75" />
        </svg>
      </div>
      <div className="leading-none">
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-[0.28em]",
            isDark ? "text-ink-soft" : "text-blue-3"
          )}
        >
          Anchor Systems
        </p>
        {!compact ? (
          <p
            className={cn(
              "mt-1 text-base font-semibold",
              isDark ? "text-ink" : "text-text"
            )}
          >
            Premium AI operating system
          </p>
        ) : null}
        {showTagline ? (
          <p
            className={cn(
              "mt-1 text-xs",
              isDark ? "text-ink-soft" : "text-muted"
            )}
          >
            For service businesses
          </p>
        ) : null}
      </div>
    </div>
  );
}
