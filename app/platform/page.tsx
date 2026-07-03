import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { platformHierarchy, platformModules, sourceRegistry } from "@/data/platform";
import { siteConfig } from "@/lib/constants";

export default function PlatformPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-soft backdrop-blur md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-campus">Complete Campusitory ecosystem</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">Eleven connected modules for global academic infrastructure.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Campusitory connects institutions, identity, live learning, research, opportunities, professional bodies, student life, academic intelligence, trusted access, and multilingual participation in one enterprise academic platform.</p>
          <p className="mt-5 text-sm font-semibold text-ink">Designed and Developed by {siteConfig.architect.company}</p>
          <p className="mt-1 text-sm text-slate-600">Platform Architecture by {siteConfig.architect.lead}, Project Architect & Lead Developer</p>
        </section>
        <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {platformModules.map((module) => (
            <Link key={module.slug} href={module.href} className="group rounded-3xl border border-white/70 bg-white/75 p-6 shadow-soft transition hover:-translate-y-1 hover:border-campus/50">
              <div className="flex items-center justify-between gap-4"><span className="font-serif text-4xl text-gold/75">{String(module.id).padStart(2, "0")}</span><span className="text-sm font-semibold text-campus group-hover:text-ink">Open →</span></div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-campus">{module.eyebrow}</p>
              <h2 className="mt-3 text-xl font-semibold text-ink">{module.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{module.description}</p>
            </Link>
          ))}
        </section>
        <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-campus">Academic hierarchy</p>
            <div className="mt-5 flex flex-wrap gap-2">{platformHierarchy.map((item) => <span key={item} className="rounded-full border border-campus/15 bg-campus/5 px-3 py-2 text-sm font-semibold text-ink">{item}</span>)}</div>
          </div>
          <div className="rounded-[2rem] bg-ink p-6 text-white shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Source registry</p>
            <div className="mt-5 space-y-3">{sourceRegistry.slice(0, 5).map((entry) => <div key={entry.source} className="rounded-2xl border border-white/10 bg-white/8 p-4"><p className="font-semibold">{entry.source}</p><p className="mt-1 text-xs text-white/60">{entry.verificationStatus} · {entry.confidence} confidence · {entry.lastUpdated}</p></div>)}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
