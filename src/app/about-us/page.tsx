import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Phone, Award, Heart, Users, Recycle, ShieldCheck } from "lucide-react";
import { site } from "@/content/site";
import { Section, H2, Eyebrow } from "@/components/Section";
import { Reviews } from "@/components/sections/Reviews";
import { TrucksUSP } from "@/components/sections/TrucksUSP";

export const metadata: Metadata = {
  title: "About Out Junk Out — Locally Owned Junk Removal in Northern Virginia",
  description:
    "Meet the locally owned junk removal team serving Northern Virginia since 2023. Family-friendly, eco-routed, fully insured.",
  alternates: { canonical: "/about-us" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 via-white to-brand-50/40 py-14 md:py-20">
        <div className="container-x text-center max-w-3xl mx-auto">
          <Eyebrow>About us</Eyebrow>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
            Your neighbors with the bigger trucks.
          </h1>
          <p className="mt-5 text-lg text-body">
            Out Junk Out is a locally owned junk removal team based in Springfield, Virginia. We started in 2023 with one truck, one phone, and one rule: treat every house like our own.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <H2>Built on the streets you drive every day</H2>
            <p className="mt-4 text-body leading-relaxed">
              Our team lives in Springfield, Fairfax, and across Northern VA — the same neighborhoods we work in. That's not a marketing line. It's how we built the company.
            </p>
            <p className="mt-3 text-body leading-relaxed">
              Eddy runs the day-to-day. Tommy, Sergio and the rest of the crew show up on time, take pride in clean work, and treat every customer like family — because in a place this tight-knit, you might actually be their neighbor.
            </p>
            <p className="mt-3 text-body leading-relaxed">
              We earned our 2023 Nextdoor Neighborhood Fave the only way you can — by being the team people actually recommend on Nextdoor.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <Image
              src="/images/about-team.jpg"
              alt="Out Junk Out team in Springfield, VA"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-brand-50/40">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Eyebrow>What we believe</Eyebrow>
          <H2 className="mt-3">Four principles, applied to every job.</H2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Recycle, title: "Eco first", body: "Donate, recycle, then dispose — in that order. The landfill is the last stop, not the first." },
            { icon: Heart, title: "People first", body: "Cleanouts are personal. We listen, we slow down, and we save what matters." },
            { icon: ShieldCheck, title: "Fairness first", body: "Same volume, same price, every time. No franchise fees, no surprises." },
            { icon: Users, title: "Community first", body: "We hire local, we donate local, and we show up local — 24/7 if the call comes." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-white rounded-xl p-6 ring-1 ring-black/5 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-brand text-white flex items-center justify-center mb-4">
                <Icon size={22} />
              </div>
              <h3 className="font-bold text-ink mb-1.5">{title}</h3>
              <p className="text-sm text-body leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white !py-10">
        <div className="rounded-2xl bg-gradient-to-r from-brand to-brand-light text-white p-8 md:p-12 text-center">
          <Award size={48} className="mx-auto text-accent mb-3" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">2023 Nextdoor Neighborhood Fave</h2>
          <p className="mt-3 text-white/85 max-w-2xl mx-auto">
            Voted by the people who actually live in our service area. The Nextdoor Fave award isn't bought — it's earned, one job at a time.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <a href={site.phoneTel} className="btn btn-accent text-base px-6 py-4">
              <Phone size={18} /> Call {site.phone}
            </a>
            <Link href="/get-a-quote" className="btn bg-white text-brand hover:bg-accent hover:text-ink text-base px-6 py-4">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </Section>

      <TrucksUSP />
      <Reviews />
    </>
  );
}
