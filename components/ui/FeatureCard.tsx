import Link from "next/link";
import type { Feature } from "@/types";

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  const isExternal = feature.href.startsWith("http://") || feature.href.startsWith("https://");
  const targetHref = isExternal ? feature.href : feature.href.startsWith("/") ? feature.href : `/${feature.href}`;

  return (
    <Link
      href={targetHref}
      className="group premium-card relative overflow-hidden rounded-3xl border border-white/75 bg-white/85 p-6 shadow-soft transition duration-500 hover:-translate-y-2 hover:border-gold/60 hover:bg-white hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-campus/15"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-campus/10 blur-2xl transition duration-500 group-hover:scale-150 group-hover:bg-gold/20" />
      <div className="relative mb-8 flex items-center justify-between gap-4">
        <span className="rounded-full bg-campus/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-campus">
          {feature.eyebrow}
        </span>
        <span className="font-serif text-3xl text-academy/15 transition duration-500 group-hover:text-academy/30">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="relative text-xl font-semibold text-ink">{feature.title}</h3>
      <p className="relative mt-4 text-sm leading-7 text-slate-600">{feature.description}</p>
      <span className="relative mt-6 inline-flex text-sm font-semibold text-academy transition group-hover:translate-x-1 group-hover:text-campus">
        Explore module →
      </span>
    </Link>
  );
}
