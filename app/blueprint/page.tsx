import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { blueprintModules } from "@/data/blueprint";
import { siteConfig } from "@/lib/constants";

export default function BlueprintPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-soft backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-campus">Campusify Blueprint</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            The 11-module operating map for Campusify and Campusitory.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            This blueprint is the master structure for the platform. Every future feature should advance one or more of these modules while preserving professional delivery by {siteConfig.architect.company}.
          </p>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-2">
          {blueprintModules.map((module) => (
            <article key={module.slug} className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-campus/40 hover:shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-campus">Module {String(module.id).padStart(2, "0")}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-ink">{module.title}</h2>
                </div>
                <Link href={module.route} className="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white transition hover:bg-academy">
                  Open
                </Link>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{module.summary}</p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-paper p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-campus">Build focus</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {module.primaryBuild.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-paper p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-campus">Data focus</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {module.dataNeeds.slice(0, 4).map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
