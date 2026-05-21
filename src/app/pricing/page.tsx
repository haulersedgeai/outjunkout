import Link from "next/link";
import type { Metadata } from "next";
import { Phone, Check, DollarSign } from "lucide-react";
import { site } from "@/content/site";
import { Section, H2, Eyebrow } from "@/components/Section";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Pricing — Honest, Volume-Based Junk Removal Quotes",
  description:
    "How junk removal pricing works in Northern Virginia. Volume-based quotes, no franchise fees, no surprises. Free estimates available.",
  alternates: { canonical: "/pricing" },
};

const tiers = [
  {
    name: "Single Item",
    label: "1 piece",
    body: "One appliance, one couch, one mattress.",
    examples: ["Single appliance pickup", "Old mattress removal", "Single piece of furniture", "Hot tub disposal (single)"],
  },
  {
    name: "Partial Load",
    label: "1/4 – 1/2 truck",
    body: "A garage corner, a small room, a few large items.",
    examples: ["Garage section cleanout", "Small office turnover", "Yard waste / storm debris", "Several large furniture pieces"],
  },
  {
    name: "Full Truck",
    label: "Full 18 cu yd",
    body: "A full basement, a whole-home cleanout, a property turnover.",
    examples: ["Whole-home cleanout", "Estate cleanout", "Full basement / garage clear", "Foreclosure or eviction trash-out"],
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 via-white to-brand-50/40 py-14 md:py-20">
        <div className="container-x text-center max-w-3xl mx-auto">
          <Eyebrow>Pricing</Eyebrow>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
            Volume-based pricing. No franchise fees.
          </h1>
          <p className="mt-5 text-lg text-body">
            You pay for the space your stuff fills in our truck — that's it. No mileage charges, no fuel surcharge, no "lift fee" for going to the second floor.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {tiers.map((t, i) => (
            <div
              key={t.name}
              className={`rounded-xl p-6 ring-1 shadow-sm ${
                i === 1 ? "bg-brand text-white ring-brand" : "bg-white ring-black/5"
              }`}
            >
              <div className={`text-xs font-bold uppercase tracking-wider ${i === 1 ? "text-accent" : "text-brand"}`}>
                {t.label}
              </div>
              <h3 className={`mt-2 text-2xl font-extrabold ${i === 1 ? "text-white" : "text-ink"}`}>{t.name}</h3>
              <p className={`mt-2 text-sm ${i === 1 ? "text-white/85" : "text-body"}`}>{t.body}</p>
              <ul className={`mt-5 space-y-2 text-sm ${i === 1 ? "text-white/95" : "text-body"}`}>
                {t.examples.map((e) => (
                  <li key={e} className="flex items-start gap-2">
                    <Check size={16} className={i === 1 ? "text-accent mt-0.5" : "text-brand mt-0.5"} />
                    {e}
                  </li>
                ))}
              </ul>
              <Link
                href="/get-a-quote"
                className={`mt-6 btn w-full ${i === 1 ? "bg-white text-brand hover:bg-accent hover:text-ink" : "btn-primary"}`}
              >
                Get a Quote
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted max-w-2xl mx-auto">
          Specific pricing depends on the items, the access (basement vs curbside), and the disposal route. We always give a firm quote before any work starts — and the price doesn't change at the end of the job.
        </p>
      </Section>

      <Section className="bg-brand-50/40">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Eyebrow>What we never charge for</Eyebrow>
            <H2 className="mt-3">No hidden fees, period.</H2>
            <ul className="mt-5 space-y-2 text-body">
              {[
                "Fuel surcharges",
                "Mileage within our NoVA service area",
                "Second-floor or basement carry fees",
                "Weekend or evening surcharges",
                "Donation routing fees",
                "Truck dispatch or 'minimum service' fees",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <Check size={18} className="text-brand mt-0.5 flex-shrink-0" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 ring-1 ring-black/5 shadow-md">
            <DollarSign size={40} className="text-brand mb-4" />
            <h3 className="text-2xl font-bold text-ink">How to get an accurate quote</h3>
            <ol className="mt-4 space-y-3 text-body text-sm">
              <li><strong>1.</strong> Text a few photos to {site.phone}, or fill out our quote form.</li>
              <li><strong>2.</strong> We'll review and reply with a firm price range — usually within 15 minutes.</li>
              <li><strong>3.</strong> If the price works, we book a window that suits you.</li>
              <li><strong>4.</strong> On site, we confirm the final price before any work starts. No surprises.</li>
            </ol>
            <Link href="/get-a-quote" className="mt-6 btn btn-accent w-full">
              Get my free quote
            </Link>
            <a href={site.phoneTel} className="mt-2 btn btn-outline w-full">
              <Phone size={16} /> Call {site.phone}
            </a>
          </div>
        </div>
      </Section>

      <FAQ />
    </>
  );
}
