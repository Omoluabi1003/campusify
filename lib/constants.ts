import type { Metric } from "@/types";

export const siteConfig = {
  name: "Campusify",
  description:
    "A global academic platform for verified communities, research access, virtual lectures, scholarships, AI study tools, and multilingual learning.",
  architect: {
    company: "ETL GIS Consulting LLC",
    lead: "Paul A. K. Iyogun",
    role: "Project Architect and Development Lead",
    location: "Florida, United States of America",
  } as const,
  navItems: [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Directory", href: "/directory" },
    { label: "Profiles", href: "/profiles" },
    { label: "Campus Room", href: "/campus-room" },
    { label: "Research", href: "/research" },
  ],
  cta: { label: "Join waitlist", href: "/auth" },
};

export const impactMetrics: Metric[] = [
  { value: "180+", label: "countries planned for academic discovery" },
  { value: "8", label: "MVP modules for launch validation" },
  { value: "24/7", label: "global study and collaboration access" },
];
