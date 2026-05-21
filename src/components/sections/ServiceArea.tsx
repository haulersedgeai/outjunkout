import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Section, H2, Eyebrow } from "@/components/Section";
import { locations } from "@/content/locations";

export function ServiceArea() {
  return (
    <Section className="bg-brand-50/40">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <Eyebrow>Our service area</Eyebrow>
          <H2 className="mt-3">Every neighborhood in Northern Virginia.</H2>
          <p className="mt-4 text-body">
            We cover Fairfax, Arlington, Loudoun, Prince William, Alexandria, and Fauquier counties — from
            Old Town to Ashburn, Mount Vernon to Haymarket. If you're inside the Beltway or out toward the
            mountains, we'll be there.
          </p>
          <p className="mt-3 text-body">
            Don't see your town? Call us. We probably cover it.
          </p>
          <Link href="/service-areas" className="mt-6 inline-flex items-center gap-2 btn btn-primary">
            See full service map <ArrowRight size={16} />
          </Link>
        </div>

        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {locations.slice(0, 18).map((l) => (
              <Link
                key={l.slug}
                href={`/service-areas/${l.slug}`}
                className="flex items-center gap-2 bg-white rounded-lg px-3 py-2.5 text-sm font-semibold text-ink ring-1 ring-black/5 hover:ring-brand/30 hover:bg-brand-50/60 transition-all"
              >
                <MapPin size={14} className="text-brand flex-shrink-0" />
                {l.name}
              </Link>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted text-center">+ {locations.length - 18} more locations across Northern VA</p>
        </div>
      </div>
    </Section>
  );
}
