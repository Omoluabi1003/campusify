import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { liveInstitutions, liveOpportunities, liveResearchItems } from "@/data/campus-live-data";
import { platformModules } from "@/data/platform";
import { impactMetrics, siteConfig } from "@/lib/constants";

const recentActivity = [
  "Institution records organized for global discovery",
  "Research library connected to source-aware academic intelligence",
  "Opportunity pathways aligned with funding, careers, and competitions",
];

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-campus">Mission Control</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Operate the complete Campusitory academic platform from one hub.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Campusitory is represented by {siteConfig.architect.company}. Its eleven modules work as one connected system for institutions, identity, learning, research, opportunities, trust, and global access.
          </p>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {[...impactMetrics, { value: String(liveInstitutions.length), label: "institution records" }, { value: String(liveResearchItems.length), label: "research records" }, { value: String(liveOpportunities.length), label: "opportunity records" }].map((metric) => (
            <div key={metric.label} className="rounded-3xl border border-white/70 bg-white/75 p-5 shadow-sm">
              <p className="text-3xl font-bold text-academy">{metric.value}</p>
              <p className="mt-2 text-sm leading-5 text-slate-600">{metric.label}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {platformModules.map((module) => (
            <Link key={module.slug} href={module.href} className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-soft transition hover:-translate-y-1 hover:border-campus/50">
              <p className="font-serif text-3xl text-gold/75">{String(module.id).padStart(2, "0")}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-campus">{module.eyebrow}</p>
              <h2 className="mt-3 text-xl font-semibold text-ink">{module.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{module.description}</p>
              <span className="mt-5 inline-flex text-sm font-semibold text-academy">Open module →</span>
            </Link>
          ))}
        </section>

        <section className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-campus">Recent activity</p>
            <ul className="mt-5 space-y-3">
              {recentActivity.map((activity) => <li key={activity} className="rounded-2xl bg-campus/5 p-4 text-sm font-medium text-ink">{activity}</li>)}
            </ul>
          </div>
          <div className="rounded-[2rem] bg-ink p-6 text-white shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Quick actions</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Link href="/platform" className="rounded-2xl bg-white/10 p-4 text-sm font-semibold transition hover:bg-white/15">View platform ecosystem</Link>
              <Link href="/institution-network" className="rounded-2xl bg-white/10 p-4 text-sm font-semibold transition hover:bg-white/15">Explore institutions</Link>
              <Link href="/opportunities" className="rounded-2xl bg-white/10 p-4 text-sm font-semibold transition hover:bg-white/15">Review opportunities</Link>
              <Link href="/academic-intelligence" className="rounded-2xl bg-white/10 p-4 text-sm font-semibold transition hover:bg-white/15">Use intelligence console</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
