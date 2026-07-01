import type { CampusUser, Institution, Opportunity, ResearchItem } from "@/types";

const now = "2026-07-01T00:00:00.000Z";

export const sampleUsers: CampusUser[] = [
  {
    id: "user_paul_architect",
    fullName: "Paul A. K. Iyogun",
    email: "platform-architect@campusify.example",
    country: "United States",
    role: "platform_admin",
    verificationStatus: "verified",
    preferredLanguage: "en",
    accessTier: "restricted",
    createdAt: now,
    updatedAt: now,
  },
];

export const sampleInstitutions: Institution[] = [
  {
    id: "inst_global_university_sample",
    name: "Global University Sample",
    slug: "global-university-sample",
    type: "university",
    country: "United States",
    city: "Jacksonville",
    verificationStatus: "pending",
    accessTier: "free",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "inst_aviation_academy_sample",
    name: "Aviation Academy Sample",
    slug: "aviation-academy-sample",
    type: "aviation_school",
    country: "Nigeria",
    city: "Lagos",
    verificationStatus: "unverified",
    accessTier: "free",
    createdAt: now,
    updatedAt: now,
  },
];

export const sampleOpportunities: Opportunity[] = [
  {
    id: "opp_international_scholarship_sample",
    title: "International Scholarship Sample",
    type: "scholarship",
    providerName: "Campusify Opportunity Desk",
    eligibleCountries: ["Nigeria", "United States"],
    eligibleLevels: ["undergraduate", "postgraduate"],
    accessTier: "free",
    createdAt: now,
    updatedAt: now,
  },
];

export const sampleResearchItems: ResearchItem[] = [
  {
    id: "research_ai_learning_sample",
    title: "AI Assisted Learning Systems Sample",
    type: "paper",
    authors: ["Campusify Research Desk"],
    publicationYear: 2026,
    accessTier: "free",
    createdAt: now,
    updatedAt: now,
  },
];
