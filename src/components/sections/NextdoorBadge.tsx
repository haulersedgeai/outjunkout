import Image from "next/image";
import { Section } from "@/components/Section";

export function NextdoorBadge() {
  return (
    <Section className="bg-gradient-to-r from-brand to-brand-light text-white !py-10 md:!py-14">
      <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 items-center text-center md:text-left">
        <div className="flex justify-center">
          <div className="bg-white rounded-full p-3 shadow-xl">
            <Image
              src="/images/nextdoor-winner.webp"
              alt="2023 Nextdoor Neighborhood Fave Winner"
              width={96}
              height={96}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
            />
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-accent font-bold">2023 Winner</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-1">
            Nextdoor Neighborhood Fave
          </h2>
          <p className="mt-2 text-white/85 max-w-2xl">
            Voted by our actual neighbors. We don't buy reviews and we don't run ads at the top of Google — we earn the work, one home at a time.
          </p>
        </div>
        <div className="hidden md:flex flex-col items-end">
          <div className="text-5xl font-extrabold text-accent">5.0</div>
          <div className="text-sm text-white/80">★★★★★</div>
        </div>
      </div>
    </Section>
  );
}
