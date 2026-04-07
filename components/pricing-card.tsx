import { Check } from "lucide-react";

type PricingCardProps = {
  name: string;
  monthlyPrice: string;
  setupFee: string;
  summary: string;
  includes: string[];
};

export function PricingCard({
  name,
  monthlyPrice,
  setupFee,
  summary,
  includes
}: PricingCardProps) {
  return (
    <div className="surface-outline relative overflow-hidden p-8 sm:p-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-3 to-transparent" />
      <div className="absolute right-10 top-10 h-40 w-40 rounded-full bg-blue/10 blur-3xl" />
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <span className="section-eyebrow">Simple pricing</span>
          <h3 className="mt-5 text-3xl font-semibold text-text">{name}</h3>
          <p className="mt-4 text-lg leading-8 text-muted">{summary}</p>
        </div>
        <div className="rounded-[28px] border border-white/10 bg-white/[0.06] p-6 lg:min-w-[300px]">
          <p className="text-sm uppercase tracking-[0.18em] text-blue-3">
            Monthly platform fee
          </p>
          <p className="mt-3 text-4xl font-semibold tracking-tight text-text">
            {monthlyPrice}
          </p>
          <p className="mt-3 text-sm text-muted">Setup: {setupFee}</p>
        </div>
      </div>
      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {includes.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 rounded-[24px] border border-white/10 bg-white/[0.05] px-4 py-4"
          >
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-3" />
            <span className="text-sm leading-6 text-muted">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
