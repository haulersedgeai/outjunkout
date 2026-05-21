import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { NextdoorBadge } from "@/components/sections/NextdoorBadge";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { TrucksUSP } from "@/components/sections/TrucksUSP";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyUs />
      <ServiceArea />
      <HowItWorks />
      <NextdoorBadge />
      <Reviews />
      <FAQ />
      <TrucksUSP />
    </>
  );
}
