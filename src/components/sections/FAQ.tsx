"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Section, H2, Eyebrow } from "@/components/Section";

export interface FAQItem { q: string; a: string }

export const homepageFAQs: FAQItem[] = [
  {
    q: "How much does junk removal cost?",
    a: "Pricing depends on the volume your items take up in the truck and how easy they are to access. We give free, no-obligation quotes — call, text a photo, or fill out the form.",
  },
  {
    q: "Do I need to be home when you arrive?",
    a: "Not if the items are accessible from outside. If we need to enter the home, we'll schedule a window that works for you — we're flexible on evenings and weekends.",
  },
  {
    q: "How fast can you pick up?",
    a: "Same-day windows are usually available across Northern VA. Late-night and pre-dawn pickups available 24/7 — no surcharge.",
  },
  {
    q: "Where does the junk actually go?",
    a: "Anything in working condition gets donated to our NoVA charity partners. Recyclable metal, e-waste, and appliances are routed to certified facilities. Everything else goes to a licensed transfer station.",
  },
  {
    q: "What can't you take?",
    a: "Hazardous liquids like oil, gasoline, paint thinner and solvents we'll point you to the right municipal drop-off. We can take latex paint that's been dried out.",
  },
  {
    q: "Do you handle demolition?",
    a: "Yes — we handle light demo: sheds, decks, hot tubs, pools, playsets, mobile homes, plus interior renovations like bathrooms, kitchens, outdoor kitchens and built-in BBQs.",
  },
  {
    q: "Do you serve realtors and property managers?",
    a: "Yes. We do REO trash-outs, eviction cleanouts, and rental turnovers 24/7. We document the job with photos and can invoice on net-30 terms for commercial accounts.",
  },
  {
    q: "Will you move items between locations?",
    a: "We can. We do short-distance furniture and appliance delivery in addition to junk removal — call us for a quote.",
  },
];

export function FAQ({ items = homepageFAQs, title = "Frequently asked questions" }: { items?: FAQItem[]; title?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };

  return (
    <Section className="bg-brand-50/40">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <Eyebrow>FAQ</Eyebrow>
        <H2 className="mt-3">{title}</H2>
      </div>

      <Accordion.Root type="single" collapsible className="max-w-3xl mx-auto space-y-3">
        {items.map((item, i) => (
          <Accordion.Item
            key={i}
            value={`item-${i}`}
            className="bg-white rounded-xl ring-1 ring-black/5 shadow-sm overflow-hidden"
          >
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-center justify-between text-left px-5 py-4 font-semibold text-ink hover:bg-brand-50/40">
                <span>{item.q}</span>
                <ChevronDown
                  size={20}
                  className="text-brand transition-transform group-data-[state=open]:rotate-180"
                />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-5 pb-4 text-body data-[state=closed]:hidden">
              {item.a}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Section>
  );
}
