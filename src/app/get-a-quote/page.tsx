import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Star, Check } from "lucide-react";
import { site } from "@/content/site";
import { Section, Eyebrow } from "@/components/Section";
import { QuoteFormEmbed } from "@/components/QuoteFormEmbed";

export const metadata: Metadata = {
  title: "Get a Free Junk Removal Quote — Northern Virginia",
  description:
    "Free, no-obligation junk removal quote in 60 seconds. Same-day pickup across Fairfax, Arlington, Loudoun and Prince William counties.",
  alternates: { canonical: "/get-a-quote" },
};

export default function QuotePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 via-white to-brand-50/40 py-12 md:py-16">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <Eyebrow>Get a free quote</Eyebrow>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
              Free, honest quote in 60 seconds.
            </h1>
            <p className="mt-5 text-lg text-body">
              Tell us what you've got and where it lives. We'll send a firm price and a same-day pickup window when possible — no credit card, no spam, no pressure.
            </p>

            <ul className="mt-6 space-y-2">
              {[
                "No-obligation estimates — every time",
                "Same-day windows across Northern VA",
                "20% larger trucks means a lower total",
                "Licensed, insured, locally owned",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-body">
                  <Check size={18} className="text-brand mt-0.5 flex-shrink-0" /> {b}
                </li>
              ))}
            </ul>

            <div className="mt-7 grid sm:grid-cols-2 gap-3 max-w-md">
              <a href={site.phoneTel} className="btn btn-primary">
                <Phone size={18} /> Call {site.phone}
              </a>
              <a
                href={`sms:${site.phoneRaw}?body=${encodeURIComponent(site.smsBody + " ")}`}
                className="btn btn-outline"
              >
                <MessageCircle size={18} /> Text a photo
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-body">{site.reviews.summary}</span>
            </div>
          </div>

          <div>
            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white">
              <div className="bg-brand text-white text-center py-3 px-5">
                <p className="font-bold">Get a Free Quote</p>
                <p className="text-xs text-white/80">Real people, real prices.</p>
              </div>
              <QuoteFormEmbed height={620} className="!shadow-none !ring-0 !rounded-none" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
