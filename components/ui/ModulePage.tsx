import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import type { PlatformModule } from "@/types";

interface ModulePageProps {
  module: PlatformModule;
}

export function ModulePage({ module }: ModulePageProps) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Link href="/dashboard" className="text-sm font-semibold text-campus transition hover:text-ink">
          ← Back to platform dashboard
        </Link>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-campus">{module.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">{module.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">{module.description}</p>
          </div>

          <aside className="rounded-[2rem] bg-ink p-8 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Academic signal</p>
            <p className="mt-4 text-sm leading-7 text-white/70">{module.signal}</p>
          </aside>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-3">
          <CapabilityCard title="Campus layer" items={module.campusLayer} />
          <CapabilityCard title="Trust layer" items={module.trustLayer} />
          <CapabilityCard title="Academic pathway" items={module.pathway} />
        </section>
      </main>
      <Footer />
    </>
  );
}

function CapabilityCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-white/70 bg-white/75 p-6">
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex gap-3 text-sm leading-6 text-slate-600">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-campus" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
