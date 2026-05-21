import Link from "next/link";
import type { Metadata } from "next";
import { Star, Quote, ExternalLink } from "lucide-react";
import { site } from "@/content/site";
import { Section, H2, Eyebrow } from "@/components/Section";

export const metadata: Metadata = {
  title: "Reviews — 5-Star Rated Junk Removal in Northern Virginia",
  description:
    "Real customer reviews from Northern Virginia neighbors. 2023 Nextdoor Neighborhood Fave Winner.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 via-white to-brand-50/40 py-14 md:py-20">
        <div className="container-x text-center max-w-3xl mx-auto">
          <Eyebrow>Reviews</Eyebrow>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
            5-star rated by the neighbors who use us.
          </h1>
          <div className="mt-4 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="fill-accent text-accent" />
            ))}
          </div>
          <p className="mt-4 text-lg text-body">{site.reviews.summary}</p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {site.reviews.items.map((r) => (
            <figure key={r.name} className="bg-brand-50/40 rounded-xl p-6 ring-1 ring-brand/10">
              <Quote size={28} className="text-brand mb-3" />
              <div className="flex gap-1 mb-3">
                {[...Array(r.stars)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-body leading-relaxed">{r.quote}</blockquote>
              <figcaption className="mt-4 pt-4 border-t border-black/5">
                <div className="font-semibold text-ink">{r.name}</div>
                <div className="text-muted text-xs">{r.location}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
          <a href={site.social.yelp} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Read more on Yelp <ExternalLink size={16} />
          </a>
          <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            On Facebook <ExternalLink size={16} />
          </a>
          <Link href="/get-a-quote" className="btn btn-accent">
            Get a Free Quote
          </Link>
        </div>
      </Section>
    </>
  );
}
