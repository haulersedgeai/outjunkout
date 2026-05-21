import type { Metadata } from "next";
import { Open_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { BusinessSchema } from "@/components/Schema";
import { site } from "@/content/site";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Out Junk Out | Same-Day Junk Removal in Northern Virginia",
    template: "%s | Out Junk Out",
  },
  description:
    "Locally owned junk removal across Northern Virginia. Same-day pickup, fair pricing, 20% larger trucks. Furniture, appliance, estate and commercial cleanouts.",
  applicationName: "Out Junk Out",
  authors: [{ name: "Out Junk Out" }],
  keywords: [
    "junk removal Northern Virginia",
    "junk removal Fairfax",
    "junk removal Arlington",
    "junk removal Springfield VA",
    "appliance removal NoVA",
    "furniture removal Fairfax",
    "estate cleanout Virginia",
    "hot tub removal NoVA",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Out Junk Out — Same-Day Junk Removal Across Northern Virginia",
    description:
      "Locally owned junk removal across Northern Virginia. Same-day pickup, fair pricing, 20% larger trucks.",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: "Out Junk Out" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Out Junk Out — Northern VA Junk Removal",
    description: "Same-day junk removal. Locally owned. 24/7.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/favicon-192.webp", sizes: "192x192", type: "image/webp" },
    ],
    apple: "/images/favicon-180.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${openSans.variable} ${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <BusinessSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
