import Link from "next/link";
import type { Feature } from "@/types";

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <Link
      href={`/${feature.href}`}
      className="group rounded-3xl border border-white/70 bg-white/85 p-6 shadow-soft transition hover:-translate-y-1 hover:border-gold/60 hover:bg-white"
    >
      <div className="mb-8 flex items-center justify-between gap-4">
        <span className="rounded-full bg-campus/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-campus">
          {feature.eyebrow}
        </span>
        <span className="font-serif text-3xl text-academy/15">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="text-xl font-semibold text-ink">{feature.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{feature.description}</p>
      <span className="mt-6 inline-flex text-sm font-semibold text-academy transition group-hover:text-campus">
        Explore module →
      </span>
    </Link>
  );
}
