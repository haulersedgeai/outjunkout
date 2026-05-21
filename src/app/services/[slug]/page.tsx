import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Check, Phone, ArrowRight, MapPin } from "lucide-react";
import { services, getService } from "@/content/services";
import { locations } from "@/content/locations";
import { Section, H2, Eyebrow } from "@/components/Section";
import { QuoteFormEmbed } from "@/components/QuoteFormEmbed";
import { Reviews } from "@/components/sections/Reviews";
import { WhyUs } from "@/components/sections/WhyUs";
import { ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { site } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription, url: `/services/${s.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related
    .map((r) => services.find((s) => s.slug === r))
    .filter(Boolean);

  const topLocations = locations.filter((l) => l.featured).slice(0, 6);

  return (
    <>
      <ServiceSchema name={service.title} description={service.metaDescription} slug={service.slug} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: site.url },
          { name: "Services", url: `${site.url}/services` },
          { name: service.title, url: `${site.url}/services/${service.slug}` },
        ]}
      />

      <section className="bg-gradient-to-br from-brand-50 via-white to-brand-50/40 py-12 md:py-16">
        <div className="container-x">
          <nav className="text-xs text-muted mb-4">
            <Link href="/" className="hover:text-brand">Home</Link> /{" "}
            <Link href="/services" className="hover:text-brand">Services</Link> /{" "}
            <span className="text-ink">{service.title}</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <Eyebrow>{service.title}</Eyebrow>
              <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight">{service.h1}</h1>
              <div className="mt-5 space-y-3">
                {service.intro.map((p, i) => (
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
            <div>
              <QuoteFormEmbed height={560} />
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 prose-oj">
            <H2>What we include</H2>
            <ul className="mt-5">
              {service.whatsIncluded.map((b) => (
                <li key={b} className="flex items-start gap-3 mb-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-brand text-white flex-shrink-0 flex items-center justify-center">
                    <Check size={14} />
                  </span>
                  <span className="text-body">{b}</span>
                </li>
              ))}
            </ul>

            {service.items && service.items.length > 0 && (
              <>
                <H2 className="!mt-12">Items we accept</H2>
                <div className="mt-4 grid sm:grid-cols-2 gap-2">
                  {service.items.map((it) => (
                    <div key={it} className="flex items-center gap-2 bg-brand-50/40 rounded-lg px-3 py-2 text-sm text-body">
                      <Check size={14} className="text-brand flex-shrink-0" />
                      {it}
                    </div>
                  ))}
                </div>
              </>
            )}

            {service.process && (
              <>
                <H2 className="!mt-12">How it works</H2>
                <ol className="mt-5 space-y-3">
                  {service.process.map((p, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-ink font-extrabold flex items-center justify-center text-sm">
                        {i + 1}
                      </span>
                      <span className="text-body pt-1">{p}</span>
                    </li>
                  ))}
                </ol>
              </>
            )}
          </div>

          <aside className="space-y-4">
            <div className="bg-brand text-white rounded-xl p-6 sticky top-24">
              <p className="text-sm text-white/80 font-semibold uppercase tracking-wider">Same-day pickup</p>
              <p className="mt-2 text-2xl font-extrabold">Ready when you are.</p>
              <p className="mt-2 text-white/85 text-sm">
                Call, text a photo, or fill out the quick form — we usually respond in under 15 minutes.
              </p>
              <a href={site.phoneTel} className="mt-4 btn bg-white text-brand hover:bg-accent hover:text-ink w-full">
                <Phone size={18} /> {site.phone}
              </a>
              <Link href="/get-a-quote" className="mt-2 btn btn-accent w-full">
                Free Quote
              </Link>
            </div>

            <div className="bg-white ring-1 ring-black/5 rounded-xl p-6">
              <h3 className="font-bold text-ink mb-3">Service areas</h3>
              <ul className="space-y-1.5 text-sm">
                {topLocations.map((l) => (
                  <li key={l.slug}>
                    <Link href={`/service-areas/${l.slug}`} className="flex items-center gap-2 text-body hover:text-brand">
                      <MapPin size={14} /> {l.name}, VA
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/service-areas" className="text-brand font-semibold text-sm hover:underline">
                    See full service area →
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <WhyUs />
      <Reviews />

      {related.length > 0 && (
        <Section className="bg-white">
          <H2 className="text-center mb-10">Related services</H2>
          <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {related.map((r) => (
              <Link
                key={r!.slug}
                href={`/services/${r!.slug}`}
                className="group bg-white rounded-xl ring-1 ring-black/5 shadow-sm p-5 hover:shadow-lg hover:ring-brand/20 transition-all"
              >
                <h3 className="font-bold text-ink">{r!.title}</h3>
                <p className="mt-2 text-sm text-body line-clamp-2">{r!.metaDescription}</p>
                <div className="mt-3 text-brand font-semibold text-sm inline-flex items-center gap-1">
                  Learn more <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
