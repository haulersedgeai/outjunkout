import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Camera } from "lucide-react";
import { Section, H2, Eyebrow } from "@/components/Section";

export const metadata: Metadata = {
  title: "Gallery — Before & After Junk Removal in Northern Virginia",
  description:
    "See real Out Junk Out projects from across Northern Virginia — basements, garages, full property cleanouts, and demolition work.",
  alternates: { canonical: "/gallery" },
};

const photos = [
  { src: "/images/gallery/before-after.png", alt: "Before and after junk removal" },
  { src: "/images/gallery/IMG_1890.webp", alt: "Furniture haul-off in Fairfax" },
  { src: "/images/gallery/IMG_2578.webp", alt: "Garage cleanout in Springfield" },
  { src: "/images/gallery/junk-removal-gallery3.webp", alt: "Northern VA junk removal job" },
  { src: "/images/gallery/Apartment-cleanout1.jpg", alt: "Apartment cleanout" },
  { src: "/images/gallery/Appliance-junk-removal.jpg", alt: "Appliance pickup" },
  { src: "/images/gallery/Cleanout-services1.jpg", alt: "Whole-home cleanout" },
  { src: "/images/gallery/Carpet.Removal.webp", alt: "Carpet removal job" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 via-white to-brand-50/40 py-14 md:py-20">
        <div className="container-x text-center max-w-3xl mx-auto">
          <Eyebrow>Gallery</Eyebrow>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
            Real jobs, real results.
          </h1>
          <p className="mt-5 text-lg text-body">
            Photos from actual Out Junk Out projects across Fairfax, Arlington, Springfield, and the rest of Northern Virginia.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((p) => (
            <div key={p.src} className="relative aspect-square rounded-xl overflow-hidden ring-1 ring-black/5 group">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-brand-50/60 p-8 text-center max-w-2xl mx-auto">
          <Camera size={32} className="mx-auto text-brand mb-3" />
          <h2 className="text-2xl font-bold text-ink">Snap a picture of your junk</h2>
          <p className="mt-2 text-body">
            Text us a photo and we'll send back a price — usually in under 15 minutes.
          </p>
          <Link href="/get-a-quote" className="mt-5 inline-flex btn btn-primary">
            Get a Quote
          </Link>
        </div>
      </Section>
    </>
  );
}
