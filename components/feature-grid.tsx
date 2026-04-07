import {
  BarChart3,
  CalendarDays,
  KanbanSquare,
  MessageSquare,
  Phone,
  Send,
  Star,
  Wallet
} from "lucide-react";

import type { Feature } from "@/data/types";

import { SectionHeading } from "@/components/section-heading";

const iconMap = {
  "bar-chart-3": BarChart3,
  "calendar-days": CalendarDays,
  "kanban-square": KanbanSquare,
  "message-square": MessageSquare,
  phone: Phone,
  send: Send,
  star: Star,
  wallet: Wallet
};

type FeatureGridProps = {
  eyebrow: string;
  title: string;
  description: string;
  features: Feature[];
  theme?: "light" | "dark";
};

export function FeatureGrid({
  eyebrow,
  title,
  description,
  features,
  theme = "dark"
}: FeatureGridProps) {
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
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] ?? Phone;

            return (
              <article
                key={feature.title}
                className={isDark ? "surface-card p-6" : "surface-card-light p-6"}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    isDark
                      ? "bg-white/[0.06] text-blue-3"
                      : "bg-blue-4 text-blue-2"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3
                  className={`mt-5 text-xl font-semibold ${
                    isDark ? "text-text" : "text-ink"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`mt-3 text-sm leading-7 ${
                    isDark ? "text-muted" : "text-ink-soft"
                  }`}
                >
                  {feature.description}
                </p>
                <p
                  className={`mt-4 text-sm font-medium ${
                    isDark ? "text-blue-3" : "text-blue-2"
                  }`}
                >
                  {feature.benefit}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
