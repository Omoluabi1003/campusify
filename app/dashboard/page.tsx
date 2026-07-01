import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { platformModules } from "@/data/platform";
import { siteConfig } from "@/lib/constants";

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-campus">Platform command center</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Campusify is now organized as a multi-surface academic platform.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Campusify is represented by {siteConfig.architect.company}. Every module below is shaped as a dedicated academic surface with clear discovery, trust, and collaboration pathways.
          </p>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {platformModules.map((module) => (
            <Link key={module.slug} href={`/${module.slug}`} className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-soft transition hover:-translate-y-1 hover:border-campus/50">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-campus">{module.eyebrow}</p>
              <h2 className="mt-3 text-xl font-semibold text-ink">{module.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{module.description}</p>
              <span className="mt-5 inline-flex text-sm font-semibold text-academy">Open module →</span>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
