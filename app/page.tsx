import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { platformModules } from "@/data/platform";
import { impactMetrics, siteConfig } from "@/lib/constants";

const processSteps = [
  {
    title: "Discover",
    description: "Start with trusted academic surfaces for institutions, opportunities, research, and learning spaces.",
  },
  {
    title: "Verify",
    description: "Move through profile, institution, and source signals that help every academic connection feel credible.",
  },
  {
    title: "Collaborate",
    description: "Continue into campus rooms, research pathways, multilingual access, and guided academic intelligence.",
  },
];

const advantages = [
  "Eleven connected modules for each academic surface",
  "ETL GIS Consulting LLC representation with a global education lens",
  "Source-aware data foundation for trusted growth",
  "Professional motion system designed to support readability",
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="relative isolate overflow-hidden">
        <div className="academic-backdrop" aria-hidden="true">
          <span className="campus-orb campus-orb-one" />
          <span className="campus-orb campus-orb-two" />
          <span className="campus-orb campus-orb-three" />
          <div className="campus-network" />
        </div>

        <section className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="relative z-10">
            <p className="mb-5 inline-flex rounded-full border border-campus/20 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-campus shadow-sm backdrop-blur">
              Global academic infrastructure
            </p>
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Verified learning, research, and opportunity networks for every campus.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Campusitory is a premium academic infrastructure platform represented by {siteConfig.architect.company}, connecting discovery, identity, live learning, research, scholarships, and academic intelligence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/dashboard" className="rounded-full bg-ink px-7 py-4 text-center text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-academy">
                Open Mission Control
              </Link>
              <Link href="/institution-network" className="rounded-full border border-ink/15 bg-white/70 px-7 py-4 text-center text-sm font-semibold text-ink shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-campus hover:text-campus">
                Explore Institution Network
              </Link>
            </div>
          </div>

          <div className="hero-module relative rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-soft backdrop-blur md:p-6">
            <div className="absolute inset-4 rounded-[1.5rem] border border-white/40" />
            <div className="relative rounded-[1.5rem] bg-ink p-6 text-white shadow-2xl">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm uppercase tracking-[0.24em] text-gold">Campus command center</p>
                <span className="h-3 w-3 rounded-full bg-gold shadow-[0_0_30px_rgba(214,168,91,0.9)]" />
              </div>
              <div className="rotating-campus-stack mt-8 min-h-[25rem] sm:min-h-[22rem]">
                {platformModules.slice(0, 5).map((module, index) => (
                  <Link
                    key={module.slug}
                    href={module.href}
                    className="hero-module-card absolute inset-x-0 top-0 rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur transition hover:bg-white/14"
                    style={{ animationDelay: `${index * 2.8}s` }}
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">{module.eyebrow}</span>
                    <div className="mt-4 flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-semibold">{module.shortTitle}</h2>
                        <p className="mt-3 text-sm leading-6 text-white/68">{module.signal}</p>
                      </div>
                      <span className="text-gold">↗</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto grid max-w-7xl gap-4 px-4 pb-12 sm:px-6 md:grid-cols-3 lg:px-8">
          {impactMetrics.map((metric) => (
            <div key={metric.label} className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur">
              <p className="text-3xl font-bold text-academy">{metric.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{metric.label}</p>
            </div>
          ))}
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-campus">Enterprise platform modules</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">A connected academic system organized around eleven enduring modules.</h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {platformModules.map((module) => (
              <Link key={module.slug} href={module.href} className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-soft transition hover:-translate-y-1 hover:border-campus/40">
                <p className="font-serif text-3xl text-gold/75">{String(module.id).padStart(2, "0")}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-campus">{module.eyebrow}</p>
                <h3 className="mt-3 text-xl font-semibold text-ink">{module.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{module.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="relative mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-campus">How Campusitory works</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Process-based academic pathways from discovery to collaboration.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-soft">
                <span className="font-serif text-4xl text-gold/70">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-ink p-8 text-white shadow-soft md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Campusitory advantage</p>
            <div className="mt-6 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">A premium, modular foundation for global academic infrastructure.</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {advantages.map((advantage) => (
                  <div key={advantage} className="rounded-2xl border border-white/10 bg-white/8 p-4 text-sm leading-6 text-white/72">
                    {advantage}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
