"use client";

import { useState } from "react";
import { Phone, Camera, FileText, X, MessageSquare } from "lucide-react";
import Link from "next/link";
import { site } from "@/content/site";

export function FloatingActions() {
  const [open, setOpen] = useState(true);
  const smsHref = `sms:${site.phoneRaw}?body=${encodeURIComponent(site.smsBody + " ")}`;

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-30 rounded-full bg-brand text-white p-3 shadow-lg hover:bg-brand-dark"
        aria-label="Show contact actions"
      >
        <MessageSquare size={22} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-30 flex flex-col gap-2 items-end">
      <button
        type="button"
        onClick={() => setOpen(false)}
        className="rounded-full bg-white shadow-md p-1 text-ink/70 hover:text-ink"
        aria-label="Hide contact actions"
      >
        <X size={14} />
      </button>

      <Link
        href="/get-a-quote"
        className="group flex items-center gap-2 rounded-full bg-accent text-ink shadow-lg px-4 py-3 text-sm font-bold hover:bg-accent-dark hover:text-white transition-colors"
      >
        <FileText size={18} />
        <span>Get a Quote</span>
      </Link>

      <a
        href={site.phoneTel}
        className="group flex items-center gap-2 rounded-full bg-brand text-white shadow-lg px-4 py-3 text-sm font-bold hover:bg-brand-dark transition-colors"
      >
        <Phone size={18} />
        <span>Book Now</span>
      </a>

      <a
        href={smsHref}
        className="group flex items-center gap-2 rounded-full bg-green-600 text-white shadow-lg px-4 py-3 text-sm font-bold hover:bg-green-700 transition-colors"
      >
        <Camera size={18} />
        <span>Snap a Picture</span>
      </a>
    </div>
  );
}
