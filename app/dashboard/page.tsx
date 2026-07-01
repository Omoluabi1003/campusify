import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { blueprintModules } from "@/data/blueprint";
import { siteConfig } from "@/lib/constants";

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-soft backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-campus">Platform command center</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Campusify now follows the original 11-module academic blueprint.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Campusify is represented by {siteConfig.architect.company}. The platform is organized around institutions, registration, lecture board rooms, personal academic pages, opportunities, research, professional bodies, student activities, AI search, secure access, and international languages.
          </p>
          <Link href="/blueprint" className="mt-7 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-academy">
            View master blueprint
          </Link>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {blueprintModules.map((module) => (
            <Link key={module.slug} href={module.route} className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-campus/50">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-campus">Module {String(module.id).padStart(2, "0")}</p>
              <h2 className="mt-3 text-xl font-semibold text-ink">{module.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{module.summary}</p>
              <span className="mt-5 inline-flex text-sm font-semibold text-academy">Open module →</span>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
