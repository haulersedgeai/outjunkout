import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sofa, Refrigerator, Bath, HardHat, Monitor, Home as HomeIcon } from "lucide-react";
import { Section, H2, Eyebrow } from "@/components/Section";

const featured = [
  {
    title: "Appliance Removal",
    slug: "appliance-removal",
    image: "/images/services/Appliance-junk-removal.jpg",
    icon: Refrigerator,
    body: "Fridges, washers, dryers, ovens, water heaters — we haul any size, from any floor.",
  },
  {
    title: "Furniture Removal",
    slug: "furniture-removal",
    image: "/images/services/furniture-removal.jpg",
    icon: Sofa,
    body: "Couches, mattresses, dressers, dining sets. Disassembly included when needed.",
  },
  {
    title: "Hot Tub Removal",
    slug: "hot-tub-removal",
    image: "/images/services/jacuzzi.webp",
    icon: Bath,
    body: "Disconnect, demo and haul-off in one visit. Yard ready for whatever's next.",
  },
  {
    title: "Construction Debris",
    slug: "kitchen-demolition",
    image: "/images/services/kitchen-demolition.jpg",
    icon: HardHat,
    body: "Drywall, cabinets, flooring, fixtures — post-reno cleanup the contractor didn't include.",
  },
  {
    title: "Electronics & E-Waste",
    slug: "electronics-removal",
    image: "/images/services/electronics-removal.jpg",
    icon: Monitor,
    body: "TVs, computers, printers, batteries — routed to certified e-waste recyclers.",
  },
  {
    title: "Whole-Home Cleanouts",
    slug: "home-cleanout",
    image: "/images/services/home-cleanout.jpg",
    icon: HomeIcon,
    body: "Top-to-bottom clears for moves, estates, and listings — every closet, every floor.",
  },
];

export function ServicesGrid() {
  return (
    <Section className="bg-white">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <Eyebrow>What we do</Eyebrow>
        <H2 className="mt-3">Our Northern VA Junk Removal Services</H2>
        <p className="mt-4 text-body">
          From a single old couch to a full-property cleanout, we handle every kind of haul — and we do it the right way every time.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {featured.map(({ title, slug, image, icon: Icon, body }) => (
          <Link
            key={slug}
            href={`/services/${slug}`}
            className="group bg-white rounded-xl ring-1 ring-black/5 shadow-sm overflow-hidden hover:shadow-lg hover:ring-brand/20 transition-all"
          >
            <div className="relative aspect-[4/3] bg-brand-50 overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-white/95 rounded-lg p-2 shadow-md">
                <Icon size={22} className="text-brand" />
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-ink mb-1.5">{title}</h3>
              <p className="text-sm text-body">{body}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-brand font-semibold text-sm group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={16} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/services" className="btn btn-primary">
          See all 38 services <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
}
