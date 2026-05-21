export const site = {
  name: "Out Junk Out",
  legalName: "Out Junk Out",
  tagline: "Same-Day Junk Removal Across Northern Virginia",
  shortTagline: "Northern VA's neighborhood junk haulers.",
  url: "https://outjunkout.com",
  phone: "(571) 505-9697",
  phoneRaw: "+15715059697",
  phoneTel: "tel:+15715059697",
  whatsapp: "https://wa.me/5715059697",
  email: "support@outjunkout.com",
  founded: 2023,
  hq: {
    street: "8623 Cromwell Dr",
    city: "Springfield",
    region: "VA",
    postal: "22151",
    country: "US",
    lat: 38.8047714,
    lng: -77.2457416,
  },
  hours: "Open 24 hours, 7 days a week",
  award: "2023 Nextdoor Neighborhood Fave Winner",
  ghl: {
    formId: "pIMXxVof0QmqmDnJtVVP",
    embedSrc: "https://api.leadconnectorhq.com/widget/form/pIMXxVof0QmqmDnJtVVP",
    embedScript: "https://link.msgsndr.com/js/form_embed.js",
    formName: "Out Junk Out Quote Form",
  },
  social: {
    facebook: "https://www.facebook.com/OutJunkOutVA",
    twitter: "https://twitter.com/OutJunkOut",
    instagram: "https://www.instagram.com/outjunkout",
    yelp: "https://www.yelp.com/biz/out-junk-out-north-springfield-2",
  },
  smsBody: "I would like to request a trash pickup. My address is",
  reviews: {
    summary: "5-star rated across Google, Yelp, and Nextdoor",
    items: [
      {
        name: "Abed Tarbush",
        stars: 5,
        location: "Springfield, VA",
        quote:
          "Booked them for a furniture haul and the crew was friendly, careful with the walls, and in and out fast. Manager kept me in the loop on timing — exactly what you want.",
      },
      {
        name: "L. Jones",
        stars: 5,
        location: "Fairfax, VA",
        quote:
          "Responsive from the first text, professional on site, and they didn't waste a minute. Would call them again without thinking twice.",
      },
      {
        name: "Liz Williams",
        stars: 5,
        location: "Arlington, VA",
        quote:
          "They only touched the items I pointed out, explained how the electronics would be recycled, and left the space cleaner than they found it.",
      },
    ],
  },
  features: [
    {
      title: "Eco-Friendly Disposal",
      body:
        "Anything that still has life left in it gets donated or recycled — the dump is the last stop, not the first.",
    },
    {
      title: "Fair, Transparent Pricing",
      body:
        "You pay for the volume you fill, not a franchise markup. No surprise fees at the curb.",
    },
    {
      title: "Licensed & Insured",
      body:
        "Full insurance on every job. Damaged walls, dinged floors and stained carpets are our problem, not yours.",
    },
    {
      title: "Locally Owned & Operated",
      body:
        "Born in Springfield, VA. The owner answers the phone and the crew lives in the same zip codes you do.",
    },
    {
      title: "20% Larger Trucks",
      body:
        "Our 18-cubic-yard trucks fit more in one trip — fewer hauls, less labor billed back to you.",
    },
    {
      title: "100% Happiness Guarantee",
      body:
        "If we don't leave the space the way you want it, we'll come back. No paperwork, no fight.",
    },
    {
      title: "Available 24/7",
      body:
        "Late-night eviction trash-outs, Sunday-morning estate jobs, holiday cleanouts — we pick up the phone.",
    },
    {
      title: "Personalized Service",
      body:
        "Real conversation, real estimates, no scripts. You'll hear the same voice from quote to final sweep.",
    },
  ],
  howItWorks: [
    {
      step: 1,
      title: "Tell us what's going",
      body: "Call, text a photo, or fill out the form. Thirty seconds is enough.",
    },
    {
      step: 2,
      title: "Get a real quote",
      body: "Fast, free, no obligation — based on what your stuff actually fills, not guesswork.",
    },
    {
      step: 3,
      title: "Pick a window",
      body: "Same-day windows most weeks. Evenings and weekends with no surcharge.",
    },
    {
      step: 4,
      title: "We haul it out",
      body: "We load it, sweep behind us, and route everything for donation, recycling, or disposal.",
    },
  ],
};

export type SiteConfig = typeof site;
