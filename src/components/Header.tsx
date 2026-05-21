"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const nav: { label: string; href: string }[] = [
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Our Truck", href: "/our-truck" },
  { label: "About", href: "/about-us" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-white transition-shadow",
        scrolled ? "shadow-md" : "shadow-sm",
      )}
    >
      <div className="hidden md:block bg-brand text-white">
        <div className="container-x flex items-center justify-between py-1.5 text-xs">
          <span className="opacity-90">Same-day junk removal across Northern VA · Open 24/7</span>
          <div className="flex items-center gap-4">
            <a href={site.whatsapp} className="flex items-center gap-1.5 hover:opacity-90" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={14} /> WhatsApp
            </a>
            <a href={site.social.yelp} className="hover:opacity-90" target="_blank" rel="noopener noreferrer">Yelp</a>
            <a href={site.phoneTel} className="flex items-center gap-1.5 font-semibold">
              <Phone size={14} /> {site.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="container-x flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="Out Junk Out home">
          <Image
            src="/images/logo.svg"
            alt="Out Junk Out"
            width={170}
            height={42}
            priority
            className="h-9 md:h-10 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-semibold text-ink hover:text-brand transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href={site.phoneTel} className="btn btn-ghost text-sm">
            <Phone size={16} /> {site.phone}
          </a>
          <Link href="/get-a-quote" className="btn btn-accent text-sm">
            Get a Quote
          </Link>
        </div>

        <button
          aria-label="Open menu"
          className="lg:hidden p-2 text-ink"
          onClick={() => setOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <Image src="/images/logo.svg" alt="Out Junk Out" width={150} height={36} className="h-9 w-auto" />
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2">
              <X size={28} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 text-lg font-semibold text-ink hover:bg-brand-50 hover:text-brand rounded"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-2">
              <a href={site.phoneTel} className="btn btn-primary w-full">
                <Phone size={18} /> Call {site.phone}
              </a>
              <Link href="/get-a-quote" onClick={() => setOpen(false)} className="btn btn-accent w-full">
                Get a Free Quote
              </Link>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full">
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
