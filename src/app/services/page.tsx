import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { services, serviceCategories, type ServiceCategory } from "@/content/services";
import { Section, H2, Eyebrow } from "@/components/Section";
import { FAQ } from "@/components/sections/FAQ";
import { TrucksUSP } from "@/components/sections/TrucksUSP";

export const metadata: Metadata = {
  title: "All Junk Removal Services in Northern Virginia",
  description:
    "Browse every junk removal and light demolition service we offer across Fairfax, Arlington, Loudoun and Prince William counties.",
  alternates: { canonical: "/services" },
};

const categoryOrder: ServiceCategory[] = ["removal", "cleanout", "demolition", "commercial", "specialty"];

export default function ServicesHub() {
  const grouped = categoryOrder.map((cat) => ({
    cat,
    label: serviceCategories[cat].label,
    description: serviceCategories[cat].description,
    items: services.filter((s) => s.category === cat),
  }));

  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 via-white to-brand-50/40 py-14 md:py-20">
        <div className="container-x text-center max-w-3xl mx-auto">
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
            Every kind of junk, every kind of cleanout.
          </h1>
          <p className="mt-5 text-lg text-body">
            {services.length} services across Northern Virginia — pick the one that fits or call us and we'll point you to the right page.
          </p>
        </div>
      </section>

      {grouped.map(({ cat, label, description, items }) => (
        <Section key={cat} className={cat === "cleanout" || cat === "commercial" ? "bg-brand-50/40" : "bg-white"}>
          <div className="mb-8 max-w-2xl">
            <H2>{label}</H2>
            <p className="mt-2 text-body">{description}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-white rounded-xl ring-1 ring-black/5 shadow-sm p-5 hover:shadow-lg hover:ring-brand/20 transition-all"
              >
                <h3 className="font-bold text-ink text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-body line-clamp-3">{s.metaDescription}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-brand font-semibold text-sm">
                  Learn more <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </Section>
      ))}

      <TrucksUSP />
      <FAQ />
    </>
  );
}
