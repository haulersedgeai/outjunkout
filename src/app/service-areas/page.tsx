import Link from "next/link";
import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { locations, counties, type County } from "@/content/locations";
import { Section, H2, Eyebrow } from "@/components/Section";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Northern Virginia Service Areas",
  description:
    "Out Junk Out serves every city and neighborhood across Northern Virginia — Fairfax, Arlington, Loudoun, Prince William, Alexandria, and Fauquier counties.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasHub() {
  const byCounty = counties.map((c) => ({
    county: c,
    items: locations.filter((l) => l.county === c),
  }));

  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 via-white to-brand-50/40 py-14 md:py-20">
        <div className="container-x text-center max-w-3xl mx-auto">
          <Eyebrow>Service areas</Eyebrow>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
            We cover every neighborhood in Northern Virginia.
          </h1>
          <p className="mt-5 text-lg text-body">
            From Old Town Alexandria to Ashburn, Mount Vernon to Haymarket — {locations.length} cities and neighborhoods across six counties.
          </p>
        </div>
      </section>

      {byCounty.map(({ county, items }) => (
        <Section key={county} className={county === "Arlington" || county === "Prince William" ? "bg-brand-50/40" : "bg-white"}>
          <div className="mb-6">
            <H2>{county} County</H2>
            <p className="mt-2 text-body">{items.length} locations served</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {items.map((l) => (
              <Link
                key={l.slug}
                href={`/service-areas/${l.slug}`}
                className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 text-sm font-semibold text-ink ring-1 ring-black/5 hover:ring-brand/30 hover:bg-brand-50/60 transition-all"
              >
                <MapPin size={14} className="text-brand flex-shrink-0" />
                {l.fullName}
              </Link>
            ))}
          </div>
        </Section>
      ))}

      <FAQ />
    </>
  );
}
