import { Section, H2, Eyebrow } from "@/components/Section";
import { site } from "@/content/site";

export function HowItWorks() {
  return (
    <Section className="bg-white">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <Eyebrow>How it works</Eyebrow>
        <H2 className="mt-3">Four steps. No surprises.</H2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
        {site.howItWorks.map((s, i) => (
          <div key={s.step} className="relative">
            <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-accent text-ink font-extrabold text-xl flex items-center justify-center shadow-md ring-4 ring-white">
              {s.step}
            </div>
            <div className="bg-brand-50/60 rounded-xl p-6 pt-10 h-full ring-1 ring-brand/5">
              <h3 className="text-lg font-bold text-ink mb-2">{s.title}</h3>
              <p className="text-sm text-body leading-relaxed">{s.body}</p>
            </div>
            {i < site.howItWorks.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-brand/20" />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
