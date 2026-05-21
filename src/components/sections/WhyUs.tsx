import { Leaf, DollarSign, ShieldCheck, MapPin, Truck, Award, Clock, Heart } from "lucide-react";
import { Section, H2, Eyebrow } from "@/components/Section";
import { site } from "@/content/site";

const icons = [Leaf, DollarSign, ShieldCheck, MapPin, Truck, Award, Clock, Heart];

export function WhyUs() {
  return (
    <Section className="bg-brand-50/40">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <Eyebrow>Why choose us</Eyebrow>
        <H2 className="mt-3">Built for Northern Virginia, not a franchise playbook</H2>
        <p className="mt-4 text-body">
          We're not a national chain with a NoVA territory map. We're your neighbors with the trucks.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {site.features.map((f, i) => {
          const Icon = icons[i] ?? Heart;
          return (
            <div key={f.title} className="bg-white rounded-xl p-6 ring-1 ring-black/5 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-brand text-white flex items-center justify-center mb-4">
                <Icon size={22} />
              </div>
              <h3 className="font-bold text-ink mb-1.5">{f.title}</h3>
              <p className="text-sm text-body leading-relaxed">{f.body}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
