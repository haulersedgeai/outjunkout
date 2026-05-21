import Link from "next/link";
import Image from "next/image";
import { Phone, Check, Star } from "lucide-react";
import { site } from "@/content/site";
import { QuoteFormEmbed } from "@/components/QuoteFormEmbed";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50/40">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="container-x relative grid lg:grid-cols-2 gap-10 lg:gap-14 py-12 md:py-20 items-center">
        <div>
          <div className="inline-flex items-center gap-1 bg-accent/15 text-brand-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
            <Star size={14} className="fill-accent text-accent" />
            2023 Nextdoor Neighborhood Fave Winner
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-ink">
            Same-Day Junk Removal Across <span className="text-brand">Northern Virginia</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-body max-w-2xl">
            Locally owned. Fairly priced. We haul, sort and recycle — so you can get your space (and your weekend) back.
          </p>

          <ul className="mt-6 grid sm:grid-cols-2 gap-2 max-w-xl">
            {[
              "Free, no-obligation quotes",
              "20% larger trucks — fewer trips",
              "Licensed, insured, locally owned",
              "Open 24/7 across all of Northern VA",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2 text-body">
                <Check size={18} className="text-brand mt-0.5 flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link href="/get-a-quote" className="btn btn-accent text-base px-6 py-4">
              Get a Free Quote
            </Link>
            <a href={site.phoneTel} className="btn btn-outline text-base px-6 py-4">
              <Phone size={18} /> {site.phone}
            </a>
          </div>

          <p className="mt-4 text-sm text-muted">
            Average response under 15 minutes during business hours.
          </p>
        </div>

        <div className="lg:pl-4">
          <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white">
            <div className="bg-brand text-white text-center py-3 px-5">
              <p className="font-bold text-lg">Get Your Free Quote in 60 Seconds</p>
              <p className="text-xs text-white/80">No credit card. No spam. Real humans.</p>
            </div>
            <QuoteFormEmbed height={560} className="!shadow-none !ring-0 !rounded-none" />
          </div>
          <div className="mt-3 hidden md:flex items-center justify-center gap-3 text-sm text-muted">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-accent text-accent" />
              ))}
            </div>
            <span>{site.reviews.summary}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
