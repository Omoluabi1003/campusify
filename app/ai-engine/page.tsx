import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AcademicGuidancePanel } from "@/components/ui/AcademicGuidancePanel";
import { liveOpportunities, liveResearchItems } from "@/data/campus-live-data";

export default function AiEnginePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-soft backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-campus">AI Academic Engine</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Academic intelligence that responds to schools, scholarships, research, and learning workflows.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            This release introduces a working guidance preview powered by Campusitory records and rules. It is intentionally local first, so the product proves value before adding external AI services.
          </p>
        </section>

        <AcademicGuidancePanel />

        <section className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-soft backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-campus">Opportunity signals</p>
            <h2 className="mt-3 text-2xl font-semibold text-ink">Scholarships, challenges, and academic pathways</h2>
            <div className="mt-5 space-y-4">
              {liveOpportunities.map((opportunity) => (
                <article key={opportunity.id} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{opportunity.type}</p>
                  <h3 className="mt-2 font-semibold text-ink">{opportunity.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{opportunity.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-soft backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-campus">Research signals</p>
            <h2 className="mt-3 text-2xl font-semibold text-ink">Research items available to the guidance engine</h2>
            <div className="mt-5 space-y-4">
              {liveResearchItems.map((item) => (
                <article key={item.id} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{item.type} · {item.publicationYear}</p>
                  <h3 className="mt-2 font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.abstract}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
