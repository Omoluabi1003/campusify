"use client";

import { useMemo, useState } from "react";
import { generateCampusInsight } from "@/lib/campus-ai";

const samplePrompts = [
  "Find schools in Nigeria",
  "Show scholarship pathways for postgraduate students",
  "What research is available on learning systems?",
  "How will Campus Room handle attendance and assignments?",
];

export function AcademicGuidancePanel() {
  const [query, setQuery] = useState(samplePrompts[0]);
  const insight = useMemo(() => generateCampusInsight(query), [query]);

  return (
    <section className="mt-10 rounded-[2rem] border border-white/70 bg-ink p-6 text-white shadow-soft">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Campusitory intelligence</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight">Ask the academic guidance engine.</h2>
          <p className="mt-4 text-sm leading-7 text-white/70">
            This preview uses Campusitory records and academic rules to return structured guidance across schools, opportunities, research, and learning workflows.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {samplePrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => setQuery(prompt)}
                className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-gold/60 hover:text-white"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
          <label className="block">
            <span className="text-sm font-semibold text-white">Ask a question</span>
            <textarea
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              rows={4}
              className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/90 px-4 py-3 text-sm text-ink outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20"
            />
          </label>

          <div className="mt-5 rounded-2xl bg-white p-5 text-ink">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-campus">{insight.intent}</p>
            <h3 className="mt-2 text-xl font-semibold">{insight.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{insight.response}</p>
            <div className="mt-4 rounded-2xl bg-paper px-4 py-3 text-sm font-semibold text-ink">
              Recommended next step: {insight.recommendedAction}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
