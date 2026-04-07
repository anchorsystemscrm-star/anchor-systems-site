import Link from "next/link";

type Crumb = {
  href: string;
  label: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-muted backdrop-blur-xl">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 ? <span className="text-white/20">/</span> : null}
            <Link href={item.href} className="hover:text-blue-3">
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
