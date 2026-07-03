import type { Metadata, Viewport } from "next";
import { SiteBackdrop } from "@/components/ui/SiteBackdrop";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://campusitory.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Campusitory | Knowledge in Motion",
  description:
    "Campusitory is a global academic operating system connecting institutions, students, lecturers, researchers, professional organizations, scholarships, research, and intelligent academic discovery.",
  applicationName: "Campusitory",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },
  openGraph: {
    title: "Campusitory | Knowledge in Motion",
    description:
      "Campusitory is a global academic operating system connecting institutions, students, lecturers, researchers, professional organizations, scholarships, research, and intelligent academic discovery.",
    siteName: "Campusitory",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Campusitory | Knowledge in Motion",
    description:
      "Campusitory is a global academic operating system connecting institutions, students, lecturers, researchers, professional organizations, scholarships, research, and intelligent academic discovery.",
    images: ["/twitter-image"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A2240",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteBackdrop />
        {children}
      </body>
    </html>
  );
}
