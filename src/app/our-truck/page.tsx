import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Truck, Check, Phone, ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { Section, H2, Eyebrow } from "@/components/Section";
import { Reviews } from "@/components/sections/Reviews";
import { WhyUs } from "@/components/sections/WhyUs";

export const metadata: Metadata = {
  title: "Our Truck — The Largest Junk Removal Truck in Northern Virginia",
  description:
    "Our 18-cubic-yard junk removal trucks are 20% larger than the competition. Fewer trips, lower labor, less driveway time.",
  alternates: { canonical: "/our-truck" },
};

export default function TruckPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 via-white to-brand-50/40 py-14 md:py-20">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Eyebrow>Our truck</Eyebrow>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
              The largest junk-removal truck in Northern Virginia.
            </h1>
            <p className="mt-5 text-lg text-body leading-relaxed">
              We run 18-cubic-yard trucks — about 20% larger than what most junk-removal companies in NoVA use. That sounds like marketing trivia until you see what it does to your bill.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/get-a-quote" className="btn btn-accent px-6 py-4">Get a Free Quote</Link>
              <a href={site.phoneTel} className="btn btn-outline px-6 py-4">
                <Phone size={18} /> {site.phone}
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <Image
              src="/images/out-junk-out-truck.webp"
              alt="Out Junk Out 18 cubic yard junk removal truck"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute bottom-4 left-4 bg-accent text-ink px-4 py-2 rounded-full font-extrabold shadow-lg">
              18 cu yd
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-white">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Eyebrow>Truck math</Eyebrow>
          <H2 className="mt-3">Bigger truck = smaller bill.</H2>
          <p className="mt-4 text-body">
            Junk removal is priced by the load. The math is simple — and the math is on your side.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {[
            { stat: "18", unit: "cubic yards", body: "Full payload capacity per truck — bigger than the industry standard 15 cu yd." },
            { stat: "1", unit: "trip on most jobs", body: "Whole-home cleanouts and big garage clears often fit in a single load." },
            { stat: "20%", unit: "less labor billed", body: "Fewer dump runs means fewer billable hours from start to finish." },
          ].map((b) => (
            <div key={b.unit} className="bg-brand-50/40 rounded-xl p-6 ring-1 ring-brand/10 text-center">
              <div className="text-5xl font-extrabold text-brand">{b.stat}</div>
              <div className="mt-1 text-sm font-semibold text-ink uppercase tracking-wider">{b.unit}</div>
              <p className="mt-3 text-body text-sm">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-50/40">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <H2>What we actually fit in a single load</H2>
            <ul className="mt-5 space-y-2">
              {[
                "An entire 3-BR townhouse cleanout (estate or move)",
                "A complete garage clear — tools, bikes, mowers, the workbench",
                "Two finished basements worth of accumulated boxes",
                "A demolished deck or shed plus its concrete footings",
                "An above-ground pool, frame and liner included",
                "10+ pieces of furniture from a downsize",
              ].map((it) => (
                <li key={it} className="flex items-start gap-3 text-body">
                  <Check size={18} className="text-brand mt-0.5 flex-shrink-0" /> {it}
                </li>
              ))}
            </ul>
            <Link href="/services" className="mt-6 inline-flex btn btn-primary">
              See all services <ArrowRight size={16} />
            </Link>
          </div>
          <div>
            <div className="bg-white rounded-xl p-8 ring-1 ring-black/5 shadow-sm">
              <Truck size={40} className="text-brand mb-4" />
              <h3 className="text-2xl font-bold text-ink">Why we invest in larger trucks</h3>
              <p className="mt-3 text-body">
                Junk-removal companies that run smaller trucks pad their day with extra dump trips — and the cost of those trips lands on your invoice. We chose to run trucks that fit your job in one pass.
              </p>
              <p className="mt-3 text-body">
                It also means we don't block your street, your alley, or your driveway for hours. In and out is the goal.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <WhyUs />
      <Reviews />
    </>
  );
}
