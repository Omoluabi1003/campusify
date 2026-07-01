import type { Metadata } from "next";
import { SiteBackdrop } from "@/components/ui/SiteBackdrop";
import "./globals.css";

export const metadata: Metadata = {
  title: "Campusify | Global Academic Network",
  description:
    "Campusify connects verified academic communities through virtual lectures, research access, scholarships, AI study tools, and multilingual learning.",
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
