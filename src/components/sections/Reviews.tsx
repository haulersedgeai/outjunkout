import { Star, Quote } from "lucide-react";
import { Section, H2, Eyebrow } from "@/components/Section";
import { site } from "@/content/site";

export function Reviews() {
  return (
    <Section className="bg-ink text-white">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <Eyebrow>What neighbors say</Eyebrow>
        <H2 className="mt-3 text-white">5-star rated across Google, Yelp & Nextdoor</H2>
        <div className="mt-4 flex items-center justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} className="fill-accent text-accent" />
          ))}
          <span className="ml-2 text-white/80 text-sm">Verified reviews</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {site.reviews.items.map((r) => (
          <figure key={r.name} className="bg-white/5 rounded-xl p-6 ring-1 ring-white/10">
            <Quote size={28} className="text-accent mb-3" />
            <div className="flex gap-1 mb-3">
              {[...Array(r.stars)].map((_, i) => (
                <Star key={i} size={16} className="fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="text-white/90 leading-relaxed text-sm">{r.quote}</blockquote>
            <figcaption className="mt-4 pt-4 border-t border-white/10">
              <div className="font-semibold">{r.name}</div>
              <div className="text-white/60 text-xs">{r.location}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
