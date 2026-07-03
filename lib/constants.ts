import type { Metric } from "@/types";

export const siteConfig = {
  name: "Campusitory",
  description:
    "A global academic platform for verified communities, research access, virtual lectures, scholarships, study tools, and multilingual learning.",
  architect: {
    company: "ETL GIS Consulting LLC",
    lead: "Paul A. K. Iyogun",
    role: "Project Architect and Development Lead",
    location: "Florida, United States of America",
  } as const,
  navItems: [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Institution Network", href: "/institution-network" },
    { label: "Academic Identity", href: "/academic-identity" },
    { label: "Campus Room", href: "/campus-room" },
    { label: "Academic Social", href: "/academic-social" },
    { label: "Opportunities", href: "/opportunities" },
    { label: "Research Library", href: "/research-library" },
    { label: "Professional Network", href: "/professional-network" },
    { label: "Student Life", href: "/student-life" },
    { label: "Academic Intelligence", href: "/academic-intelligence" },
    { label: "Trust & Access", href: "/trust-access" },
    { label: "Global Languages", href: "/global-languages" },
  ],
  cta: { label: "Join waitlist", href: "/auth" },
};

export const impactMetrics: Metric[] = [
  { value: "180+", label: "countries planned for academic discovery" },
  { value: "11", label: "connected platform modules" },
  { value: "24/7", label: "global study and collaboration access" },
];
