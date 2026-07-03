import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CampusDirectoryExplorer } from "@/components/ui/CampusDirectoryExplorer";
import { liveInstitutions } from "@/data/campus-live-data";

export default function DirectoryPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-soft backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-campus">Institution Directory</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Search schools, compare categories, and begin academic discovery with real data.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Campusitory now includes a working institution data layer covering universities, polytechnics, nursing schools, aviation schools, culinary institutes, and global academic pathways.
          </p>
        </section>
        <CampusDirectoryExplorer institutions={liveInstitutions} />
      </main>
      <Footer />
    </>
  );
}
