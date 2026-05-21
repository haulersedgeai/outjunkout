import { site } from "@/content/site";
import { locations } from "@/content/locations";

const cityList = locations.map((l) => l.fullName);

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MovingCompany"],
  "@id": `${site.url}/#business`,
  name: site.name,
  alternateName: "OutJunkOut",
  description:
    "Same-day junk removal and light demolition serving Northern Virginia. Locally owned, licensed and insured, 24/7.",
  url: site.url,
  telephone: site.phoneRaw,
  email: site.email,
  image: `${site.url}/images/logo.svg`,
  logo: `${site.url}/images/logo.svg`,
  priceRange: "$$",
  foundingDate: `${site.founded}-01-01`,
  award: site.award,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.hq.street,
    addressLocality: site.hq.city,
    addressRegion: site.hq.region,
    postalCode: site.hq.postal,
    addressCountry: site.hq.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.hq.lat,
    longitude: site.hq.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  sameAs: [
    site.social.facebook,
    site.social.twitter,
    site.social.instagram,
    site.social.yelp,
  ],
  areaServed: cityList.map((name) => ({ "@type": "City", name })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Junk Removal Services",
    itemListElement: [
      "Appliance Removal",
      "Furniture Removal",
      "Whole-Home Cleanout",
      "Garage Cleanout",
      "Basement Cleanout",
      "Estate Cleanout",
      "Hot Tub Removal",
      "Commercial Junk Removal",
      "Light Demolition",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export function BusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ name, description, slug }: { name: string; description: string; slug: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@id": `${site.url}/#business` },
    areaServed: cityList.map((n) => ({ "@type": "City", name: n })),
    url: `${site.url}/services/${slug}`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function LocationSchema({ name, slug, description }: { name: string; slug: string; description: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${site.name} – ${name}`,
    description,
    parentOrganization: { "@id": `${site.url}/#business` },
    telephone: site.phoneRaw,
    url: `${site.url}/service-areas/${slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: name,
      addressRegion: "VA",
      addressCountry: "US",
    },
    areaServed: { "@type": "City", name },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
