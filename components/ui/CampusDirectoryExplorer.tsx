"use client";

import { useMemo, useState } from "react";
import type { Institution } from "@/types";

interface CampusDirectoryExplorerProps {
  institutions: Institution[];
}

const institutionTypeLabels: Record<string, string> = {
  university: "University",
  polytechnic: "Polytechnic",
  college: "College",
  vocational_school: "Vocational School",
  nursing_school: "Nursing School",
  aviation_school: "Aviation School",
  culinary_school: "Culinary School",
  music_school: "Music School",
  professional_body: "Professional Body",
};

export function CampusDirectoryExplorer({ institutions }: CampusDirectoryExplorerProps) {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("all");
  const [type, setType] = useState("all");

  const countries = useMemo(() => Array.from(new Set(institutions.map((institution) => institution.country))).sort(), [institutions]);
  const types = useMemo(() => Array.from(new Set(institutions.map((institution) => institution.type))).sort(), [institutions]);

  const filteredInstitutions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return institutions.filter((institution) => {
      const matchesQuery =
        !normalizedQuery ||
        institution.name.toLowerCase().includes(normalizedQuery) ||
        institution.country.toLowerCase().includes(normalizedQuery) ||
        institution.city?.toLowerCase().includes(normalizedQuery);
      const matchesCountry = country === "all" || institution.country === country;
      const matchesType = type === "all" || institution.type === type;

      return matchesQuery && matchesCountry && matchesType;
    });
  }, [country, institutions, query, type]);

  return (
    <section className="mt-10 rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-soft backdrop-blur">
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <label className="block">
          <span className="text-sm font-semibold text-ink">Search by school, city, or country</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try Lagos, nursing, Florida, aviation..."
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-campus focus:ring-4 focus:ring-campus/10"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-ink">Country</span>
          <select
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-campus focus:ring-4 focus:ring-campus/10"
          >
            <option value="all">All countries</option>
            {countries.map((countryName) => (
              <option key={countryName} value={countryName}>
                {countryName}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-ink">Institution type</span>
          <select
            value={type}
            onChange={(event) => setType(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-campus focus:ring-4 focus:ring-campus/10"
          >
            <option value="all">All types</option>
            {types.map((institutionType) => (
              <option key={institutionType} value={institutionType}>
                {institutionTypeLabels[institutionType] ?? institutionType}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-200 pt-5">
        <p className="text-sm font-semibold text-ink">{filteredInstitutions.length} matching institution{filteredInstitutions.length === 1 ? "" : "s"}</p>
        <p className="text-xs uppercase tracking-[0.22em] text-campus">Live data preview</p>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredInstitutions.map((institution) => (
          <article key={institution.id} className="rounded-3xl border border-white/80 bg-white/85 p-5 shadow-soft transition hover:-translate-y-1 hover:border-campus/40 hover:shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-campus">{institutionTypeLabels[institution.type] ?? institution.type}</p>
                <h2 className="mt-2 text-lg font-semibold text-ink">{institution.name}</h2>
              </div>
              <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold capitalize text-ink">{institution.verificationStatus}</span>
            </div>
            <p className="mt-4 text-sm text-slate-600">{institution.city ? `${institution.city}, ` : ""}{institution.country}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-500">Access: {institution.accessTier}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
