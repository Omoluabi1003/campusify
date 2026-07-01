import type { PlatformModule } from "@/types";

export const platformModules: PlatformModule[] = [
  {
    slug: "directory",
    eyebrow: "Global discovery",
    title: "Institution Directory",
    shortTitle: "Directory",
    description: "Search and evaluate universities, polytechnics, colleges, vocational schools, nursing schools, military schools, aviation schools, culinary schools, music institutes, and professional bodies.",
    signal: "Verified institution discovery with country, school-type, and trust indicators.",
    campusLayer: ["Global school discovery", "Trust-ready institution cards", "Country and discipline pathways"],
    trustLayer: ["Verification signals", "Institution context", "Clear comparison cues"],
    pathway: ["Discover institutions", "Compare academic fit", "Continue into verified profiles"]
  },
  {
    slug: "profiles",
    eyebrow: "Verified identity",
    title: "Academic Profiles",
    shortTitle: "Profiles",
    description: "Build credible identities for students, lecturers, researchers, alumni, institutions, and professional organizations with verification status and role-aware experiences.",
    signal: "Role-aware identity for safer academic networking and institution trust.",
    campusLayer: ["Student and faculty identity", "Institution and alumni presence", "Role-specific profile paths"],
    trustLayer: ["Verification status", "Ownership clarity", "Professional academic presence"],
    pathway: ["Create profile", "Confirm academic role", "Connect across campus networks"]
  },
  {
    slug: "campus-room",
    eyebrow: "Live learning",
    title: "Campus Room",
    shortTitle: "Campus Room",
    description: "A structured academic boardroom for lectures, notes, attendance, quizzes, assignments, Q&A, office hours, chat, and future live learning integrations.",
    signal: "A structured learning room for classes, faculty interaction, and coursework flow.",
    campusLayer: ["Lecture room flow", "Attendance and assignments", "Q&A and office hours"],
    trustLayer: ["Course context", "Session clarity", "Participation records"],
    pathway: ["Enter a room", "Follow the lecture path", "Submit and review academic work"]
  },
  {
    slug: "opportunities",
    eyebrow: "Access engine",
    title: "Scholarships and Opportunities",
    shortTitle: "Scholarships",
    description: "A global opportunity hub for scholarships, grants, loans, internships, fellowships, competitions, academic jobs, postgraduate programs, and exchange openings.",
    signal: "A guided access layer for scholarships, fellowships, internships, and academic jobs.",
    campusLayer: ["Scholarship discovery", "Internship and fellowship hub", "Academic job visibility"],
    trustLayer: ["Eligibility cues", "Deadline awareness", "Saved opportunity paths"],
    pathway: ["Find an opportunity", "Review eligibility", "Save and prepare materials"]
  },
  {
    slug: "research",
    eyebrow: "Knowledge graph",
    title: "Research Library",
    shortTitle: "Research",
    description: "A research and academic material layer for theses, papers, journals, books, datasets, lecture materials, institutional publications, and scholarly discovery.",
    signal: "A scholarly library for research materials, publication trails, and institutional knowledge.",
    campusLayer: ["Paper and thesis discovery", "Dataset and journal context", "Institutional publication trails"],
    trustLayer: ["Citation metadata", "Author attribution", "Access-level clarity"],
    pathway: ["Search knowledge", "Review source context", "Build a credible research trail"]
  },
  {
    slug: "ai-engine",
    eyebrow: "Academic intelligence",
    title: "AI Academic Engine",
    shortTitle: "AI Engine",
    description: "An AI layer for academic search, scholarship matching, lecture summaries, study schedules, multilingual support, research assistance, and safer knowledge discovery.",
    signal: "Academic intelligence for study planning, scholarship matching, and research assistance.",
    campusLayer: ["Study planning", "Scholarship matching", "Research assistance"],
    trustLayer: ["Clear usage boundaries", "Safer discovery", "Academic context first"],
    pathway: ["Ask with academic intent", "Review guided outputs", "Continue into the right module"]
  },
  {
    slug: "language",
    eyebrow: "Borderless access",
    title: "Multilingual Console",
    shortTitle: "Language",
    description: "A language console for English, French, Chinese, Japanese, Portuguese, Spanish, and future regional languages across onboarding, learning rooms, and academic discovery.",
    signal: "Language access for global onboarding, learning rooms, and academic discovery.",
    campusLayer: ["Global language support", "Regional academic communities", "Translated learning spaces"],
    trustLayer: ["Language preference clarity", "Inclusive onboarding", "Consistent terminology"],
    pathway: ["Choose language", "Explore localized pathways", "Collaborate across regions"]
  },
  {
    slug: "pricing",
    eyebrow: "Sustainable model",
    title: "Pricing and Access",
    shortTitle: "Access",
    description: "A structured access model for free users, paid subscribers, institutions, restricted pages, KYC, and future identity-theft prevention workflows.",
    signal: "Transparent access planning for learners, institutions, and professional bodies.",
    campusLayer: ["Learner access", "Institution tiers", "Professional body pathways"],
    trustLayer: ["Plan clarity", "Restricted area signals", "Identity protection readiness"],
    pathway: ["Review access levels", "Choose the right path", "Scale with institutional needs"]
  }
];

export function getPlatformModule(slug: string) {
  return platformModules.find((module) => module.slug === slug);
}
