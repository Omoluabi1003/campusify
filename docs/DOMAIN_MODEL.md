# Campusify Domain Model Foundation

This document explains the first internal data contracts for Campusify. These are TypeScript-only models and do not create a database, API, or persistence commitment yet.

## Purpose

The domain model gives Campusify a stable vocabulary before implementation expands into authentication, institution search, Campus Room, opportunities, research, subscriptions, multilingual access, and AI services.

## Current Model Groups

### Identity

- CampusUser
- AcademicProfile
- UserRole
- VerificationStatus
- AccessTier

### Institutions

- Institution
- Faculty
- Department
- InstitutionType

### Learning

- Course
- CampusSession
- AttendanceRecord
- Assignment

### Opportunity Engine

- Opportunity
- OpportunityType
- ProgramLevel

### Research

- ResearchItem
- ResearchItemType
- ProfessionalOrganization

### Internationalization and Access

- LanguagePreference
- SubscriptionPlan

### AI Boundary

- AiRequest

## Implementation Rules

1. Public pages should not expose internal delivery language.
2. Domain models should be imported from `@/types`.
3. Feature work should extend these contracts instead of creating duplicate local types.
4. Persistence should not be selected until the first seed-data flows prove the model shape.
5. AI requests must remain behind a typed boundary before any paid API integration.

## Next PR Unlocked

The next PR should build the Institution Directory MVP using these contracts with typed seed data, filters, and route-ready institution cards.
