import type { PlatformModule } from "@/types";

export const platformModules: PlatformModule[] = [
  {
    slug: "directory",
    eyebrow: "Global discovery",
    title: "Institution Directory",
    description: "Search and evaluate universities, polytechnics, colleges, vocational schools, nursing schools, military schools, aviation schools, culinary schools, music institutes, and professional bodies.",
    frontEndProgress: ["Dedicated route", "Filter-ready module layout", "Institution cards and trust signals"],
    backEndProgress: ["Institution schema planned", "Country and school-type filters mapped", "Slug strategy prepared"],
    nextBuild: ["Seed institution records", "Add search state", "Create institution detail route"]
  },
  {
    slug: "profiles",
    eyebrow: "Verified identity",
    title: "Academic Profiles",
    description: "Build credible identities for students, lecturers, researchers, alumni, institutions, and professional organizations with verification status and role-aware experiences.",
    frontEndProgress: ["Profile role surface", "Verification-state messaging", "Onboarding journey outline"],
    backEndProgress: ["Role model planned", "Verification status model planned", "Profile ownership boundaries mapped"],
    nextBuild: ["Create onboarding form", "Add role-specific fields", "Prepare auth guard contract"]
  },
  {
    slug: "campus-room",
    eyebrow: "Live learning",
    title: "Campus Room",
    description: "A structured academic boardroom for lectures, notes, attendance, quizzes, assignments, Q&A, office hours, chat, and future live learning integrations.",
    frontEndProgress: ["Dedicated room dashboard route", "Lecture workflow panels", "Attendance and assignment placeholders"],
    backEndProgress: ["Course model planned", "Lecture session model planned", "Attendance and submission records mapped"],
    nextBuild: ["Build session shell", "Add quiz locker UI", "Define lecture-note upload contract"]
  },
  {
    slug: "opportunities",
    eyebrow: "Access engine",
    title: "Scholarships and Opportunities",
    description: "A global opportunity hub for scholarships, grants, loans, internships, fellowships, competitions, academic jobs, postgraduate programs, and exchange openings.",
    frontEndProgress: ["Opportunity hub route", "Eligibility-ready layout", "Saved opportunity concept"],
    backEndProgress: ["Opportunity schema planned", "Eligibility filters mapped", "Saved opportunity persistence planned"],
    nextBuild: ["Seed opportunity cards", "Add program filters", "Create saved-items boundary"]
  },
  {
    slug: "research",
    eyebrow: "Knowledge graph",
    title: "Research Library",
    description: "A research and academic material layer for theses, papers, journals, books, datasets, lecture materials, institutional publications, and scholarly discovery.",
    frontEndProgress: ["Research library route", "Metadata display pattern", "Upload-intent journey"],
    backEndProgress: ["Research item model planned", "Author and institution metadata mapped", "Access-level model planned"],
    nextBuild: ["Seed research records", "Add citation metadata", "Plan document storage boundary"]
  },
  {
    slug: "ai-engine",
    eyebrow: "Academic intelligence",
    title: "AI Academic Engine",
    description: "An AI layer for academic search, scholarship matching, lecture summaries, study schedules, multilingual support, research assistance, and safer knowledge discovery.",
    frontEndProgress: ["AI engine route", "Prompt-intent panels", "Usage-boundary messaging"],
    backEndProgress: ["AI boundary layer planned", "Request validation planned", "Usage tracking planned"],
    nextBuild: ["Create prompt boundary service", "Add scholarship matcher mock", "Define safety and rate-limit rules"]
  },
  {
    slug: "language",
    eyebrow: "Borderless access",
    title: "Multilingual Console",
    description: "A language console for English, French, Chinese, Japanese, Portuguese, Spanish, and future regional languages across onboarding, learning rooms, and academic discovery.",
    frontEndProgress: ["Language route", "Locale-ready messaging", "Translation-aware module boundary"],
    backEndProgress: ["Locale model planned", "User language preference planned", "Translation key strategy mapped"],
    nextBuild: ["Add language selector", "Define locale config", "Prepare translated content keys"]
  },
  {
    slug: "pricing",
    eyebrow: "Sustainable model",
    title: "Pricing and Access",
    description: "A structured access model for free users, paid subscribers, institutions, restricted pages, KYC, and future identity-theft prevention workflows.",
    frontEndProgress: ["Pricing route", "Access-tier messaging", "Restricted-page concept"],
    backEndProgress: ["Subscription tier model planned", "KYC boundary planned", "Access-control model mapped"],
    nextBuild: ["Add plan cards", "Define restricted-route guard", "Prepare billing boundary without paid API lock-in"]
  }
];

export function getPlatformModule(slug: string) {
  return platformModules.find((module) => module.slug === slug);
}
