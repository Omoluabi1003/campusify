import type { Metadata } from "next";
import { SiteBackdrop } from "@/components/ui/SiteBackdrop";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://campusitory.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Campusitory | Knowledge in Motion",
  description:
    "Campusitory connects global academic communities through institutions, virtual lectures, research access, opportunities, academic intelligence, and multilingual learning.",
  applicationName: "Campusitory",
  manifest: "/manifest.webmanifest",
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
