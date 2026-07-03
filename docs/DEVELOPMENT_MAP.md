# Campusitory Development Map

Campusitory is developed under the project architecture leadership of ETL GIS Consulting LLC. This map governs how the repository should evolve from foundation to production readiness.

## Ownership and Representation

- Project architecture and development representation: ETL GIS Consulting LLC.
- Strategic systems lead: Paul A. K. Iyogun.
- Product posture: global academic infrastructure, not a generic learning management system.
- Every major feature must preserve Campusitory as a secure, verified, multilingual, AI-assisted academic ecosystem.

## PR Discipline

Every pull request must improve at least one of the following areas:

1. Frontend capability
   - User-facing interface, layout, accessibility, interaction flow, responsiveness, or component quality.
2. Backend capability
   - Data model, persistence, authentication, authorization, API route, validation, security, or service integration.
3. Platform quality
   - Build reliability, type safety, CI, documentation that governs delivery, or production readiness.

Pure cosmetic changes should be avoided unless they directly improve trust, usability, conversion, or accessibility.

## Required PR Template

Each PR description must include:

```md
### Product Impact
- Frontend:
- Backend:
- Platform Quality:

### User Value

### Technical Scope

### Testing
- npm install
- npm run lint
- npm run typecheck
- npm run build

### Risk and Rollback
```

## Development Phases

### Phase 0: Foundation Governance

Goal: stabilize the project house before building product depth.

Required outcomes:

- ETL GIS Consulting LLC represented in configuration and documentation.
- Development map committed.
- PR discipline established.
- Build, lint, and typecheck commands remain clean.

### Phase 1: Academic Identity

Goal: create verified user onboarding and role structure.

Frontend deliverables:

- Auth landing flow.
- Role selection for student, lecturer, researcher, institution, alumni, and professional body.
- Profile onboarding screens.
- Verification status UI.

Backend deliverables:

- User role types.
- Profile schema.
- Institution affiliation model.
- Verification status model.
- Guardrails for restricted pages.

### Phase 2: Institution Directory

Goal: make Campusitory useful even before live classroom features.

Frontend deliverables:

- Searchable institution directory.
- Institution detail pages.
- Filters by country, school type, faculty, and program category.

Backend deliverables:

- Institution data model.
- Seed data structure.
- Search/filter API route or service layer.
- Slug strategy for institution pages.

### Phase 3: Campus Room Prototype

Goal: build the academic boardroom concept.

Frontend deliverables:

- Campus Room dashboard.
- Lecture session page.
- Attendance, notes, quiz, assignment, Q&A, and chat panels as functional UI shells.

Backend deliverables:

- Course model.
- Lecture session model.
- Attendance model.
- Assignment model.
- Quiz model.
- Message model.

### Phase 4: Opportunity Engine

Goal: turn Campusitory into an academic opportunity marketplace.

Frontend deliverables:

- Scholarships, grants, jobs, fellowships, and postgraduate opportunity pages.
- Saved opportunities.
- Opportunity match preview.

Backend deliverables:

- Opportunity model.
- Eligibility fields.
- Country/program filters.
- Saved opportunity persistence.

### Phase 5: Research Library

Goal: support theses, journals, books, academic materials, and research discovery.

Frontend deliverables:

- Research library listing.
- Document detail page.
- Upload intent UI.
- Citation and metadata display.

Backend deliverables:

- Research item model.
- Author/institution metadata.
- Access level model.
- Document storage plan.

### Phase 6: AI Academic Engine

Goal: introduce AI only after data structures are disciplined.

Frontend deliverables:

- AI academic search interface.
- Scholarship matcher UI.
- Study schedule planner UI.
- Lecture summary UI.

Backend deliverables:

- Prompt boundary layer.
- AI request validation.
- Usage tracking.
- Safe response formatting.

### Phase 7: Internationalization

Goal: prepare Campusitory for global adoption.

Frontend deliverables:

- Language console.
- Translation-aware navigation.
- Locale-ready content structure.

Backend deliverables:

- Locale configuration.
- Translation keys.
- User language preference model.

## Non-Negotiables

- No broken buttons.
- No placeholder routes without intentional user messaging.
- No backend feature without a matching data contract.
- No frontend feature without a clear user journey.
- No paid API integration until the local data model is stable.
- No AI feature without validation, abuse prevention, and usage boundaries.
- Every PR must leave the repo better than it found it.

## Immediate Next PR Sequence

1. [x] ETL representation and development map (Current PR).
2. Auth and role onboarding shell.
3. Shared domain types for users, institutions, courses, opportunities, and research items.
4. Institution directory frontend and seed data.
5. Profile onboarding frontend and mocked persistence boundary.
6. Campus Room UI prototype.
7. Backend data layer and persistence selection.
