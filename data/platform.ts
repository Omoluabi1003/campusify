import type { PlatformModule, SourceRegistryEntry } from "@/types";

export const platformModules: PlatformModule[] = [
  {
    id: 1,
    slug: "institution-network",
    href: "/institution-network",
    eyebrow: "Global directory",
    title: "Institution Network",
    shortTitle: "Institutions",
    description: "Global directory of universities, polytechnics, nursing schools, colleges, vocational institutions, military academies, aviation schools, culinary schools, music schools, and other accredited institutions.",
    signal: "Verified institution discovery organized by country, location, institution type, and academic pathway.",
    campusLayer: ["World-to-institution discovery", "Institution category comparisons", "Faculty and department entry points"],
    trustLayer: ["Source-backed institution records", "Verification status", "Country and license context"],
    pathway: ["Find an institution", "Review verified context", "Continue into academic identity"]
  },
  {
    id: 2,
    slug: "academic-identity",
    href: "/academic-identity",
    eyebrow: "Verified identity",
    title: "Academic Identity",
    shortTitle: "Identity",
    description: "Registration, profiles, verification, departments, faculties, courses, lecturers, students, and institutional identity.",
    signal: "Role-aware profiles connect students, lecturers, researchers, alumni, institutions, and professional bodies.",
    campusLayer: ["Profiles and registration", "Faculties, departments, and courses", "Lecturer and student identity"],
    trustLayer: ["Verification status", "Role clarity", "Institutional ownership"],
    pathway: ["Create profile", "Confirm academic role", "Join the right campus layer"]
  },
  {
    id: 3,
    slug: "campus-room",
    href: "/campus-room",
    eyebrow: "Live learning",
    title: "Campus Room",
    shortTitle: "Campus Room",
    description: "Virtual lecture rooms, attendance, assignments, quizzes, lecture notes, chat, live collaboration, and academic communication.",
    signal: "Structured spaces for lectures, coursework, faculty interaction, and class collaboration.",
    campusLayer: ["Lecture rooms", "Attendance and assignments", "Chat and collaboration"],
    trustLayer: ["Course context", "Participation records", "Session clarity"],
    pathway: ["Enter a room", "Follow the lecture path", "Submit and review academic work"]
  },
  {
    id: 4,
    slug: "academic-social",
    href: "/academic-social",
    eyebrow: "Scholarly community",
    title: "Academic Social",
    shortTitle: "Social",
    description: "Personal pages, follows, reactions, live sessions, academic news, research updates, hashtags, discussions, and collaboration.",
    signal: "Academic conversation centered on learning, research, collaboration, and campus credibility.",
    campusLayer: ["Personal academic pages", "News and research updates", "Discussions and live sessions"],
    trustLayer: ["Verified contributors", "Academic context", "Community standards"],
    pathway: ["Follow academic interests", "Join discussions", "Collaborate with trusted peers"]
  },
  {
    id: 5,
    slug: "opportunities",
    href: "/opportunities",
    eyebrow: "Access engine",
    title: "Opportunities",
    shortTitle: "Opportunities",
    description: "Scholarships, grants, fellowships, student loans, postgraduate opportunities, internships, and academic careers.",
    signal: "A guided access layer for funding, internships, fellowships, competitions, and academic careers.",
    campusLayer: ["Scholarships and grants", "Internships and fellowships", "Academic careers"],
    trustLayer: ["Eligibility cues", "Deadline awareness", "Official portal references"],
    pathway: ["Find an opportunity", "Review eligibility", "Prepare materials"]
  },
  {
    id: 6,
    slug: "research-library",
    href: "/research-library",
    eyebrow: "Knowledge graph",
    title: "Research Library",
    shortTitle: "Research",
    description: "Books, journals, papers, theses, dissertations, academic resources, and institutional publications.",
    signal: "Scholarly discovery for research materials, publication trails, and institutional knowledge.",
    campusLayer: ["Books and journals", "Papers, theses, and dissertations", "Institutional publications"],
    trustLayer: ["Citation metadata", "Author attribution", "Repository source context"],
    pathway: ["Search knowledge", "Review source context", "Build a credible research trail"]
  },
  {
    id: 7,
    slug: "professional-network",
    href: "/professional-network",
    eyebrow: "Professional bodies",
    title: "Professional Network",
    shortTitle: "Professional",
    description: "Professional organizations, chartered institutes, fellowships, and international academic societies.",
    signal: "Connect academic growth with professional recognition, societies, fellowships, and chartered institutes.",
    campusLayer: ["Professional organizations", "Chartered institutes", "International societies"],
    trustLayer: ["Organization verification", "Membership pathways", "Field and country context"],
    pathway: ["Explore organizations", "Review membership fit", "Connect credentials to career growth"]
  },
  {
    id: 8,
    slug: "student-life",
    href: "/student-life",
    eyebrow: "Campus experience",
    title: "Student Life",
    shortTitle: "Student Life",
    description: "Student unions, university games, AI competitions, innovation challenges, and campus activities.",
    signal: "Student engagement across campus representation, events, competitions, innovation, and wellness.",
    campusLayer: ["Student unions", "University games", "Innovation challenges"],
    trustLayer: ["Organizer clarity", "Institutional alignment", "Safe participation cues"],
    pathway: ["Discover activities", "Join campus groups", "Build student achievement"]
  },
  {
    id: 9,
    slug: "academic-intelligence",
    href: "/academic-intelligence",
    eyebrow: "Academic intelligence",
    title: "Academic Intelligence",
    shortTitle: "Intelligence",
    description: "Campusitory AI search, recommendations, scheduling, academic assistant, research discovery, and intelligent matching.",
    signal: "Academic assistance for study planning, scholarship matching, research discovery, and guided search.",
    campusLayer: ["AI search", "Recommendations and scheduling", "Research discovery"],
    trustLayer: ["Academic context first", "Transparent guidance", "Source-aware outputs"],
    pathway: ["Ask with academic intent", "Review guided outputs", "Continue into the right module"]
  },
  {
    id: 10,
    slug: "trust-access",
    href: "/trust-access",
    eyebrow: "Trust and access",
    title: "Trust & Access",
    shortTitle: "Trust",
    description: "Subscriptions, access tiers, institutional verification, KYC, identity protection, and platform security.",
    signal: "Transparent access, verification, and identity protection for learners, institutions, and partners.",
    campusLayer: ["Access tiers", "Institutional verification", "Identity protection"],
    trustLayer: ["KYC readiness", "Restricted access signals", "Security-first platform controls"],
    pathway: ["Review access levels", "Verify identity", "Scale with institutional needs"]
  },
  {
    id: 11,
    slug: "global-languages",
    href: "/global-languages",
    eyebrow: "Borderless access",
    title: "Global Languages",
    shortTitle: "Languages",
    description: "Multilingual experience supporting English, French, Portuguese, Spanish, Chinese, Japanese, and future languages.",
    signal: "Language access for global onboarding, learning rooms, research, and academic discovery.",
    campusLayer: ["English", "French, Portuguese, and Spanish", "Chinese, Japanese, and future languages"],
    trustLayer: ["Language preference clarity", "Inclusive onboarding", "Consistent academic terminology"],
    pathway: ["Choose language", "Explore localized pathways", "Collaborate across regions"]
  }
];

export const platformHierarchy = [
  "World", "Country", "Region", "State", "City", "Institution", "Faculty", "Department", "Programme", "Course", "Lecture", "Research", "Opportunity", "Professional Organization", "Career"
];

export const sourceRegistry: SourceRegistryEntry[] = [
  { source: "Official institution websites", verificationStatus: "pending", lastUpdated: "2026-07-01", country: "Global", institutionType: "university", license: "Public institutional reference", confidence: "high" },
  { source: "Government education directories", verificationStatus: "pending", lastUpdated: "2026-07-01", country: "Global", institutionType: "college", license: "Government open directory", confidence: "high" },
  { source: "OpenAlex", verificationStatus: "pending", lastUpdated: "2026-07-01", country: "Global", institutionType: "professional_body", license: "Open scholarly metadata", confidence: "medium" },
  { source: "Crossref", verificationStatus: "pending", lastUpdated: "2026-07-01", country: "Global", institutionType: "professional_body", license: "Open citation metadata", confidence: "medium" },
  { source: "DOAJ", verificationStatus: "pending", lastUpdated: "2026-07-01", country: "Global", institutionType: "professional_body", license: "Open journal directory", confidence: "medium" },
  { source: "Public institutional repositories", verificationStatus: "pending", lastUpdated: "2026-07-01", country: "Global", institutionType: "university", license: "Repository-specific public terms", confidence: "medium" },
  { source: "Official scholarship portals", verificationStatus: "pending", lastUpdated: "2026-07-01", country: "Global", institutionType: "college", license: "Official opportunity reference", confidence: "high" }
];

export function getPlatformModule(slug: string) {
  const aliases: Record<string, string> = {
    directory: "institution-network",
    profiles: "academic-identity",
    research: "research-library",
    "ai-engine": "academic-intelligence",
    pricing: "trust-access",
    language: "global-languages",
  };

  return platformModules.find((module) => module.slug === (aliases[slug] ?? slug));
}
