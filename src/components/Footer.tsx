import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const FacebookIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...p}><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.03H7.9V12.06h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.27c-1.24 0-1.63.78-1.63 1.58v1.86h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06z"/></svg>
);
const TwitterIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...p}><path d="M18.244 2H21.5l-7.5 8.572L23 22h-6.86l-5.37-7.024L4.6 22H1.342l8.04-9.19L1 2h7.03l4.853 6.42L18.244 2Zm-1.205 18h1.835L7.05 4H5.082L17.04 20Z"/></svg>
);
const InstagramIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
import { site } from "@/content/site";
import { services } from "@/content/services";
import { locations } from "@/content/locations";

export function Footer() {
  const topServices = services.slice(0, 8);
  const topLocations = locations.filter((l) => l.featured).concat(
    locations.filter((l) => !l.featured).slice(0, 6),
  ).slice(0, 10);

  return (
    <footer className="bg-ink text-white mt-8">
      <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/logo-white.svg"
            alt="Out Junk Out"
            width={170}
            height={42}
            className="h-10 w-auto mb-4"
          />
          <p className="text-white/80 text-sm leading-relaxed">
            Locally owned junk removal serving every neighborhood in Northern Virginia.
            Same-day pickup, fair pricing, no franchise fees.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <a href={site.phoneTel} className="flex items-center gap-2 hover:text-accent">
              <Phone size={16} /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-accent">
              <Mail size={16} /> {site.email}
            </a>
            <p className="flex items-start gap-2 text-white/80">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              {site.hq.street}, {site.hq.city}, {site.hq.region} {site.hq.postal}
            </p>
            <p className="text-white/60 text-xs mt-2">{site.hours}</p>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent"><FacebookIcon /></a>
            <a href={site.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="hover:text-accent"><TwitterIcon /></a>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent"><InstagramIcon /></a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-accent"><MessageCircle size={20} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Popular Services</h3>
          <ul className="space-y-2 text-sm">
            {topServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-white/80 hover:text-accent">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-accent font-semibold hover:underline">
                See all services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Service Areas</h3>
          <ul className="space-y-2 text-sm">
            {topLocations.map((l) => (
              <li key={l.slug}>
                <Link href={`/service-areas/${l.slug}`} className="text-white/80 hover:text-accent">
                  {l.name}, VA
                </Link>
              </li>
            ))}
            <li>
              <Link href="/service-areas" className="text-accent font-semibold hover:underline">
                See all areas →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about-us" className="text-white/80 hover:text-accent">About</Link></li>
            <li><Link href="/our-truck" className="text-white/80 hover:text-accent">Our Truck</Link></li>
            <li><Link href="/gallery" className="text-white/80 hover:text-accent">Gallery</Link></li>
            <li><Link href="/reviews" className="text-white/80 hover:text-accent">Reviews</Link></li>
            <li><Link href="/pricing" className="text-white/80 hover:text-accent">Pricing</Link></li>
            <li><Link href="/faq" className="text-white/80 hover:text-accent">FAQ</Link></li>
            <li><Link href="/blog" className="text-white/80 hover:text-accent">Blog</Link></li>
            <li><Link href="/contact" className="text-white/80 hover:text-accent">Contact</Link></li>
            <li><Link href="/get-a-quote" className="text-accent font-semibold hover:underline">Get a Free Quote</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Out Junk Out · Locally owned in Springfield, VA · Licensed & Insured</p>
          <p>2023 Nextdoor Neighborhood Fave Winner</p>
        </div>
      </div>
    </footer>
  );
}
