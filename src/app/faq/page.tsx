import type { Metadata } from "next";
import { FAQ } from "@/components/sections/FAQ";
import { Section, H2, Eyebrow } from "@/components/Section";

export const metadata: Metadata = {
  title: "FAQ — Junk Removal Questions Answered",
  description:
    "Common questions about junk removal in Northern Virginia — cost, scheduling, what we take, demolition services, and more.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 via-white to-brand-50/40 py-14 md:py-20">
        <div className="container-x text-center max-w-3xl mx-auto">
          <Eyebrow>FAQ</Eyebrow>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
            Honest answers to the questions we get most.
          </h1>
          <p className="mt-5 text-lg text-body">
            Don't see your question here? Call or text us — we'll give you a real answer in plain English.
          </p>
        </div>
      </section>

      <FAQ title="All questions" />
    </>
  );
}
