# Campusitory

Campusitory is a global academic platform connecting verified students, lecturers, institutions, researchers, and professional bodies through virtual lectures, research access, scholarships, academic intelligence, multilingual learning, and secure academic communities.

## Project Representation

Campusitory development architecture is represented by **ETL GIS Consulting LLC**, with **Paul A. K. Iyogun** serving as Project Architect and Development Lead.

Every development decision should preserve the product posture as secure global academic infrastructure, not a generic learning management system.

## Vision

The product goal is to become trusted academic infrastructure for borderless learning and research. The MVP starts with a premium public shell that validates positioning, core modules, and navigation before adding authentication, data persistence, and intelligent workflows.

## Stack

- **Framework:** Next.js App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel-ready
- **Data:** Typed mock data only for the foundation phase

## Current MVP Shell

The homepage includes professional, responsive sections for:

- Hero
- Institution Directory
- Verified Academic Profiles
- Campus Room
- Scholarships and Opportunities
- Research Library
- Academic Intelligence
- Multilingual Console
- Pricing Preview

Authentication is intentionally represented by a placeholder `/auth` route. No database, paid API, or production authentication flow is included yet.

## Project Structure

```txt
app/                     App Router pages, layout, and global styles
app/(marketing)/         Reserved route group for marketing pages
app/(dashboard)/         Reserved route group for future authenticated dashboard
app/auth/                Authentication placeholder route
components/layout/       Shared layout components
components/ui/           Reusable interface components
data/                    Typed mock product data
docs/                    Delivery governance, roadmap, and architecture notes
lib/                     Constants and shared configuration
types/                   Shared TypeScript types
public/                  Static assets
```

## Development Governance

All contributors must follow the Campusitory development map in [`docs/DEVELOPMENT_MAP.md`](docs/DEVELOPMENT_MAP.md).

Every pull request must show measurable improvement in at least one area:

- Frontend capability
- Backend capability
- Platform quality

A PR that does not improve user value, system capability, delivery quality, or production readiness should not be merged.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Run static checks:

```bash
npm run lint
npm run typecheck
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Next Steps

1. Add authentication and verified academic identity onboarding.
2. Build profile creation for students, lecturers, researchers, institutions, and professional bodies.
3. Expand the institution directory with searchable, typed data models.
4. Prototype Campus Room sessions for live lectures and office hours.
5. Introduce an academic scholarship matcher after core data flows are validated.
