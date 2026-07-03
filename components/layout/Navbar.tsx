import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { CampusitoryLogo } from "@/components/ui/CampusitoryLogo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-paper/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Campusitory home">
          <CampusitoryLogo />
          <span className="text-lg font-semibold tracking-tight text-ink">{siteConfig.name}</span>
        </Link>
        <div className="hidden flex-1 items-center gap-2 overflow-x-auto xl:flex">
          {siteConfig.navItems.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-white hover:text-ink">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link href="/platform" className="rounded-full border border-ink/10 bg-white/70 px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-campus hover:text-campus">
            Platform
          </Link>
          <Link href={siteConfig.cta.href} className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-academy">
            {siteConfig.cta.label}
          </Link>
        </div>
      </nav>
    </header>
  );
}
