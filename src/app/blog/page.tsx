import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/content/site";
import { Section, H2, Eyebrow } from "@/components/Section";

export const metadata: Metadata = {
  title: "Blog — Junk Removal Tips & Northern Virginia Updates",
  description:
    "Tips, guides, and updates from Out Junk Out — Northern Virginia's locally owned junk removal team.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    slug: "how-much-does-junk-removal-cost",
    title: "How much does junk removal cost in Northern Virginia?",
    excerpt: "A clear-eyed look at what drives the price — volume, access, and what makes some loads more expensive than others.",
    date: "2026-04-12",
  },
  {
    slug: "downsizing-checklist",
    title: "The 7-step downsizing checklist for empty-nesters",
    excerpt: "A practical walk-through of how to clear decades of stuff without losing your mind — or what matters.",
    date: "2026-03-28",
  },
  {
    slug: "what-happens-to-your-junk",
    title: "What actually happens to your junk after we pick it up",
    excerpt: "Donation routing, scrap recycling, e-waste compliance — a behind-the-scenes look at where it all goes.",
    date: "2026-03-10",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 via-white to-brand-50/40 py-14 md:py-20">
        <div className="container-x text-center max-w-3xl mx-auto">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
            Junk removal tips from the Out Junk Out crew.
          </h1>
          <p className="mt-5 text-lg text-body">
            Real advice from real haulers — pricing, scheduling, and how to make any cleanout easier.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {posts.map((p) => (
            <article key={p.slug} className="bg-white rounded-xl ring-1 ring-black/5 shadow-sm p-6 hover:shadow-md transition-shadow">
              <time className="text-xs text-muted uppercase tracking-wider">{new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
              <h2 className="mt-2 text-xl font-bold text-ink">{p.title}</h2>
              <p className="mt-2 text-body text-sm leading-relaxed">{p.excerpt}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-brand font-semibold text-sm">
                Coming soon <ArrowRight size={14} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-brand-50/60 p-8 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-ink">Got a question we should write about?</h2>
          <p className="mt-2 text-body">Drop us a line — most of our posts come from real customer questions.</p>
          <a href={site.phoneTel} className="mt-5 inline-flex btn btn-primary">
            <Phone size={18} /> Call {site.phone}
          </a>
        </div>
      </Section>
    </>
  );
}
