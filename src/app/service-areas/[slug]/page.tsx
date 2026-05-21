import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Check, Phone, MapPin, ArrowRight } from "lucide-react";
import { locations, getLocation } from "@/content/locations";
import { services } from "@/content/services";
import { Section, H2, Eyebrow } from "@/components/Section";
import { QuoteFormEmbed } from "@/components/QuoteFormEmbed";
import { WhyUs } from "@/components/sections/WhyUs";
import { Reviews } from "@/components/sections/Reviews";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LocationSchema, BreadcrumbSchema } from "@/components/Schema";
import { site } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) return {};
  return {
    title: l.metaTitle,
    description: l.metaDescription,
    alternates: { canonical: `/service-areas/${l.slug}` },
    openGraph: { title: l.metaTitle, description: l.metaDescription, url: `/service-areas/${l.slug}` },
  };
}

const popularServices = [
  "appliance-removal",
  "furniture-removal",
  "home-cleanout",
  "garage-cleanout",
  "basement-cleanout",
  "hot-tub-removal",
  "estate-cleanout",
  "commercial-junk-removal",
];

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const popular = popularServices
    .map((s) => services.find((sv) => sv.slug === s))
    .filter(Boolean);

  return (
    <>
      <LocationSchema name={location.fullName} slug={location.slug} description={location.metaDescription} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: site.url },
          { name: "Service Areas", url: `${site.url}/service-areas` },
          { name: location.fullName, url: `${site.url}/service-areas/${location.slug}` },
        ]}
      />

      <section className="bg-gradient-to-br from-brand-50 via-white to-brand-50/40 py-12 md:py-16">
        <div className="container-x">
          <nav className="text-xs text-muted mb-4">
            <Link href="/" className="hover:text-brand">Home</Link> /{" "}
            <Link href="/service-areas" className="hover:text-brand">Service Areas</Link> /{" "}
            <span className="text-ink">{location.fullName}</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <Eyebrow>Junk removal in {location.county} County</Eyebrow>
              <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight">
                Junk Removal in {location.fullName}
              </h1>
              <div className="mt-5 space-y-3">
                {location.intro.map((p, i) => (
                  <p key={i} className="text-lg text-body leading-relaxed">{p}</p>
                ))}
              </div>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link href="/get-a-quote" className="btn btn-accent px-6 py-4">Get a Free Quote</Link>
                <a href={site.phoneTel} className="btn btn-outline px-6 py-4">
                  <Phone size={18} /> {site.phone}
                </a>
              </div>
            </div>
            <QuoteFormEmbed height={560} />
          </div>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <H2>Most popular services in {location.name}</H2>
            <p className="mt-2 text-body">Every Out Junk Out service is available in {location.name} — here are the ones we book most.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {popular.map((s) => (
                <Link
                  key={s!.slug}
                  href={`/services/${s!.slug}`}
                  className="group bg-brand-50/40 rounded-lg p-4 ring-1 ring-brand/10 hover:ring-brand/30 hover:bg-brand-50 transition-all"
                >
                  <h3 className="font-bold text-ink text-sm">{s!.title}</h3>
                  <p className="mt-1 text-xs text-body line-clamp-2">{s!.metaDescription}</p>
                  <div className="mt-2 text-brand text-xs font-semibold inline-flex items-center gap-1">
                    Learn more <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

            {location.neighborhoods.length > 0 && (
              <>
                <H2 className="!mt-12">Neighborhoods we serve in {location.name}</H2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {location.neighborhoods.map((n) => (
                    <span key={n} className="bg-brand-50 text-brand-800 px-3 py-1.5 rounded-full text-sm font-semibold">
                      {n}
                    </span>
                  ))}
                </div>
              </>
            )}

            <H2 className="!mt-12">Local landmarks & roads</H2>
            <div className="mt-4 grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-ink text-sm uppercase tracking-wider mb-2">Landmarks</h3>
                <ul className="space-y-1.5 text-body text-sm">
                  {location.landmarks.map((l) => (
                    <li key={l} className="flex items-start gap-2">
                      <Check size={14} className="text-brand mt-1 flex-shrink-0" /> {l}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-ink text-sm uppercase tracking-wider mb-2">Major roads</h3>
                <ul className="space-y-1.5 text-body text-sm">
                  {location.roads.map((r) => (
                    <li key={r} className="flex items-start gap-2">
                      <Check size={14} className="text-brand mt-1 flex-shrink-0" /> {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="bg-brand text-white rounded-xl p-6 sticky top-24">
              <p className="text-sm text-white/80 font-semibold uppercase tracking-wider">{location.name}, VA</p>
              <p className="mt-2 text-2xl font-extrabold">Local crews. Local rates.</p>
              <p className="mt-2 text-white/85 text-sm">
                Same-day windows almost every day across {location.county} County.
              </p>
              <a href={site.phoneTel} className="mt-4 btn bg-white text-brand hover:bg-accent hover:text-ink w-full">
                <Phone size={18} /> {site.phone}
              </a>
              <Link href="/get-a-quote" className="mt-2 btn btn-accent w-full">
                Free Quote
              </Link>
            </div>

            <div className="bg-white ring-1 ring-black/5 rounded-xl p-6">
              <h3 className="font-bold text-ink mb-3">Other nearby areas</h3>
              <ul className="space-y-1.5 text-sm">
                {locations
                  .filter((l) => l.county === location.county && l.slug !== location.slug)
                  .slice(0, 8)
                  .map((l) => (
                    <li key={l.slug}>
                      <Link href={`/service-areas/${l.slug}`} className="flex items-center gap-2 text-body hover:text-brand">
                        <MapPin size={14} /> {l.fullName}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <HowItWorks />
      <WhyUs />
      <Reviews />
    </>
  );
}
