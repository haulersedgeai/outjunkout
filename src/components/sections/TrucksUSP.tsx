import Link from "next/link";
import Image from "next/image";
import { Truck, ArrowRight, Check } from "lucide-react";
import { Section, Eyebrow, H2 } from "@/components/Section";

export function TrucksUSP() {
  return (
    <Section className="bg-white">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 aspect-[4/3]">
            <Image
              src="/images/out-junk-out-truck.webp"
              alt="Out Junk Out truck — 20% larger than competitors"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-accent text-ink px-4 py-2 rounded-full font-extrabold text-sm shadow-lg">
              18 Cubic Yards
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Eyebrow>The truck advantage</Eyebrow>
          <H2 className="mt-3">Our trucks are 20% larger — which means your bill is smaller.</H2>
          <p className="mt-4 text-body">
            We run 18-cubic-yard junk removal trucks — the largest in Northern Virginia. Bigger trucks mean fewer trips, less labor billed back to you, and one less driver blocking your driveway.
          </p>
          <ul className="mt-5 space-y-2">
            {[
              "Most jobs fit in a single load — even full-home cleanouts",
              "Less driving = lower price per haul",
              "Sorted on-truck for donation and recycling",
              "Our crews unload at certified facilities, every single trip",
            ].map((p) => (
              <li key={p} className="flex items-start gap-2 text-body">
                <Check size={18} className="text-brand mt-0.5 flex-shrink-0" /> {p}
              </li>
            ))}
          </ul>
          <Link href="/our-truck" className="mt-6 inline-flex btn btn-primary">
            <Truck size={18} /> See our truck <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </Section>
  );
}
