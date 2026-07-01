# Campusify Data Engine

This document defines how Campusify should expand data coverage while staying professional, lawful, lightweight, and free-first.

## Operating Standard

Campusify should use GeoAware-Core awareness with an 80/20 delivery model:

- Start with the highest-value academic records.
- Prefer reliable public or openly accessible sources.
- Keep source attribution and verification status visible.
- Separate verified records from sample or pending records.
- Avoid paid services until the product proves adoption.
- Avoid private, restricted, or unclear sources.

## Data Categories

### Institutions

Priority records:

- Universities
- Polytechnics
- Colleges
- Vocational schools
- Nursing schools
- Aviation schools
- Culinary schools
- Music schools
- Professional academic bodies

Recommended sources:

- Institution official websites
- Public government education directories
- Open university lists where licensing is clear
- Manually curated seed files for early MVP validation

### Opportunities

Priority records:

- Scholarships
- Grants
- Fellowships
- Student competitions
- Research assistantship pathways
- Postgraduate openings
- International exchange programs

Recommended sources:

- Official scholarship pages
- Public university funding pages
- Government scholarship portals
- Foundation websites
- Manually curated opportunity seed files

### Research

Priority records:

- Open-access papers
- Public abstracts
- Institutional publications
- Datasets
- Lecture materials
- Thesis metadata where permitted

Recommended sources:

- OpenAlex
- Crossref
- DOAJ
- PubMed Central where relevant
- Institutional repositories with clear public access

## Engine Roadmap

### Stage 1: Local Curated Data

Use typed local seed data to prove filters, cards, matching logic, and UI quality.

### Stage 2: Source Registry

Add a source registry with record provenance, source type, URL, access level, and freshness date.

### Stage 3: Import Adapters

Create adapters for open and lawful data sources. Each adapter must normalize data into Campusify domain models.

### Stage 4: Matching Engine

Use profile signals, country, program level, discipline, school type, eligibility, language, and access tier to recommend institutions and opportunities.

### Stage 5: Verified Data Layer

Introduce institution verification, manual review, and trust badges before public claims are treated as verified.

## Non-Negotiables

- Do not present pending data as verified.
- Do not use private or restricted data.
- Do not use paid services until approved.
- Do not expose internal implementation language to public users.
- Do not overbuild before the core discovery and matching flows work.

## Next Implementation Target

The next PR should introduce a source registry and data provenance fields so every record can show whether it is official, curated, sample, or pending verification.
