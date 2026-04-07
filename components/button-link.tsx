import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200",
        variant === "primary" &&
          "border border-blue-3/50 bg-gradient-to-r from-blue via-blue-3 to-blue-4 text-bg shadow-[0_18px_40px_rgba(97,168,255,0.3)] hover:-translate-y-0.5 hover:shadow-[0_22px_50px_rgba(97,168,255,0.38)]",
        variant === "secondary" &&
          "border border-slate-200/80 bg-white/90 text-ink shadow-panel hover:-translate-y-0.5 hover:border-blue/40 hover:text-blue",
        variant === "ghost" &&
          "text-blue-3 underline-offset-4 hover:text-text hover:underline",
        className
      )}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}
