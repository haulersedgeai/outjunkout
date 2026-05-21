import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { site } from "@/content/site";
import { Section, H2, Eyebrow } from "@/components/Section";
import { QuoteFormEmbed } from "@/components/QuoteFormEmbed";

export const metadata: Metadata = {
  title: "Contact Out Junk Out — 24/7 Junk Removal in Northern Virginia",
  description:
    "Call, text, email or send a photo — we respond fast. Same-day junk removal across Northern Virginia.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const smsHref = `sms:${site.phoneRaw}?body=${encodeURIComponent(site.smsBody + " ")}`;

  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 via-white to-brand-50/40 py-14 md:py-20">
        <div className="container-x text-center max-w-3xl mx-auto">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
            Reach us any way you like.
          </h1>
          <p className="mt-5 text-lg text-body">
            We answer the phone 24/7. Text photos, call in, or use the form — whichever is easier.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <H2>Contact info</H2>
            <div className="mt-6 space-y-4">
              <a href={site.phoneTel} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-brand text-white flex-shrink-0 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-bold text-ink">Phone</div>
                  <div className="text-brand text-xl font-extrabold group-hover:underline">{site.phone}</div>
                  <div className="text-sm text-muted">24/7 — real humans pick up</div>
                </div>
              </a>

              <a href={smsHref} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-brand text-white flex-shrink-0 flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div className="font-bold text-ink">Text a photo</div>
                  <div className="text-brand font-semibold group-hover:underline">Snap a picture →</div>
                  <div className="text-sm text-muted">Fastest way to a quote</div>
                </div>
              </a>

              <a href={`mailto:${site.email}`} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-brand text-white flex-shrink-0 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-bold text-ink">Email</div>
                  <div className="text-brand font-semibold group-hover:underline">{site.email}</div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-brand text-white flex-shrink-0 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-bold text-ink">HQ</div>
                  <div className="text-body">{site.hq.street}</div>
                  <div className="text-body">{site.hq.city}, {site.hq.region} {site.hq.postal}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-brand text-white flex-shrink-0 flex items-center justify-center">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="font-bold text-ink">Hours</div>
                  <div className="text-body">{site.hours}</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <H2>Or use the form</H2>
            <p className="mt-2 text-body">We reply within 15 minutes during business hours, faster than that on weekdays.</p>
            <div className="mt-5">
              <QuoteFormEmbed height={620} />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
