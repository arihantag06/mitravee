/**
 * Single source of truth for the website.
 *
 * Text, contact details, colours, pages, services, products and the order of
 * sections are all driven from this file. Edit values here and the components
 * pick them up automatically.
 *
 * Tip: wrap a word in *asterisks* inside any title to render it in the
 * italic accent style, e.g. "Gifts people actually *keep*."
 */
import type { StaticImageData } from "next/image";
import type { IconName } from "@/components/icons";

import logo from "@/public/logo.png";
import giftCollection from "@/public/images/gift-collection.jpg";
import partnership from "@/public/images/partnership.jpg";
import collectionBags from "@/public/images/collections/bags-packaging.jpg";
import collectionDiaries from "@/public/images/collections/diaries.jpg";
import collectionDrinkware from "@/public/images/collections/drinkware.jpg";
import collectionHampers from "@/public/images/collections/festive-hampers.jpg";
import collectionGiftSets from "@/public/images/collections/gift-sets.jpg";
import collectionLeather from "@/public/images/collections/leather.jpg";
import collectionTech from "@/public/images/collections/tech-audio.jpg";
import collectionWriting from "@/public/images/collections/writing.jpg";
import occasionClients from "@/public/images/occasions/clients.jpg";
import occasionEvents from "@/public/images/occasions/events.jpg";
import occasionFestive from "@/public/images/occasions/festive.jpg";
import occasionPeople from "@/public/images/occasions/people.jpg";
import serviceGifting from "@/public/images/services/corporate-gifting.jpg";
import serviceHr from "@/public/images/services/human-resources.jpg";
import serviceSupplies from "@/public/images/services/material-supplies.jpg";
import servicePromo from "@/public/images/services/promotional-materials.jpg";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

type ImageSrc = StaticImageData | string;

export type SiteImage = {
  src: ImageSrc;
  alt: string;
  /** Required only for remote (string) images. */
  width?: number;
  height?: number;
};

export type SectionId =
  | "hero"
  | "highlights"
  | "services"
  | "about"
  | "collections"
  | "occasions"
  | "process"
  | "stats"
  | "contact";

export type Cta = { label: string; href: string };

export type PageConfig = {
  /** URL segment: "" is the home page, "services" becomes /services. */
  slug: string;
  /** Label in the header navigation. */
  label: string;
  /** Browser tab and search result title. */
  title: string;
  description?: string;
  /** Sections rendered on this page, top to bottom. */
  sections: SectionId[];
  /** Set to false to keep the page reachable but out of the menu. */
  showInNav?: boolean;
};

/* ------------------------------------------------------------------ */
/* Brand & theme                                                       */
/* ------------------------------------------------------------------ */

export const brand = {
  name: "MitraVee",
  tagline: "Premium. Impactful. Yours.",
  parent: "A Unit of E-Solutions",
  logo: { src: logo, alt: "MitraVee logo" } satisfies SiteImage,
  url: "https://mitravee.com",
};

/**
 * Colours are taken from the logo (indigo and orange) on a warm ivory base.
 * Changing a value here re-themes the whole site, including UI components.
 */
export const theme = {
  primary: "#3E3F93",
  primaryDark: "#24255C",
  primarySoft: "#E9E5EE",
  accent: "#E07B36",
  accentSoft: "#F3E2D2",
  ink: "#1C1D3B",
  muted: "#6A6878",
  /** Page background: warm ivory. */
  background: "#F5F0E8",
  /** Cards and inputs: a lighter warm white, never pure white. */
  surface: "#FBF8F3",
  line: "#E2D9CB",
};

/* ------------------------------------------------------------------ */
/* SEO                                                                 */
/* ------------------------------------------------------------------ */

export const seo = {
  title: "MitraVee | Corporate Gifting & Business Solutions",
  titleTemplate: "%s | MitraVee",
  description:
    "Premium corporate gifting, custom-branded merchandise, material supplies, HR and promotional solutions. Bulk orders with timely, pan-India delivery.",
  keywords: [
    "corporate gifting",
    "corporate gifts Delhi",
    "custom branded merchandise",
    "employee welcome kits",
    "Diwali corporate gifts",
    "promotional materials",
    "bulk gifting India",
  ],
  ogImage: { src: giftCollection, alt: "MitraVee corporate gift collection" },
};

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const contact = {
  phones: ["+91 97173 93935", "+91 94586 90009"],
  /** Digits only, with country code. Used for WhatsApp links. */
  whatsapp: "919717393935",
  whatsappGreeting: "Hello MitraVee! I'd like to know more about your corporate gifting solutions.",
  email: "mitravee01@gmail.com",
  address: {
    lines: ["452, LIG Flats, DDA Pocket-13", "Dwarka Phase-1, New Delhi 110075"],
    mapUrl: "https://maps.google.com/?q=LIG+Flats+DDA+Pocket+13+Dwarka+Phase+1+New+Delhi+110075",
  },
  hours: "Mon to Sat, 10 AM to 7 PM",
  /** Shows a floating WhatsApp button on every screen. */
  showWhatsAppButton: true,
};

export const socials: { label: string; href: string; icon: IconName }[] = [
  // { label: "Instagram", href: "https://instagram.com/...", icon: "instagram" },
  // { label: "LinkedIn", href: "https://linkedin.com/company/...", icon: "linkedin" },
];

/* ------------------------------------------------------------------ */
/* Pages: each entry is its own route and fits one screen on desktop.  */
/* Add, remove or reorder pages and their sections here.               */
/* ------------------------------------------------------------------ */

export const pages: PageConfig[] = [
  {
    slug: "",
    label: "Home",
    title: "MitraVee | Corporate Gifting & Business Solutions",
    sections: ["hero", "highlights"],
    showInNav: false,
  },
  {
    slug: "services",
    label: "Services",
    title: "Services",
    description: "Corporate gifting, material supplies, HR solutions and promotional materials.",
    sections: ["services"],
  },
  {
    slug: "collections",
    label: "Collections",
    title: "Collections",
    description: "Executive diaries, gift sets, drinkware, writing instruments, festive hampers and more.",
    sections: ["collections"],
  },
  {
    slug: "occasions",
    label: "Occasions",
    title: "Occasions",
    description: "Corporate gifts for festivals, onboarding, anniversaries, events and client appreciation.",
    sections: ["occasions"],
  },
  {
    slug: "about",
    label: "Why Us",
    title: "Why MitraVee",
    description: "Curated products, flawless branding and a single point of contact from brief to delivery.",
    sections: ["about"],
  },
  {
    slug: "process",
    label: "Process",
    title: "How It Works",
    description: "From brief to doorstep in four simple steps.",
    sections: ["process", "stats"],
  },
  {
    slug: "contact",
    label: "Contact",
    title: "Contact & Quote",
    description: "Request a quote for corporate gifting and business solutions.",
    sections: ["contact"],
  },
];

export const navigation: { cta: Cta } = {
  cta: { label: "Get a Quote", href: "/contact" },
};

/* ------------------------------------------------------------------ */
/* Section content                                                     */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "Corporate gifting & solutions",
  title: "Solutions that *strengthen* relationships.",
  subtitle:
    "Thoughtful products. Lasting impressions. We curate premium, custom-branded gifts and business essentials that keep your brand remembered.",
  primaryCta: { label: "Request a Quote", href: "/contact" },
  secondaryCta: { label: "Explore Collections", href: "/collections" },
  image: {
    src: giftCollection,
    alt: "Curated corporate gift set with diary, bottle, pens, speaker and branded bag",
  } satisfies SiteImage,
  /** Caption shown beneath the hero image. */
  note: { title: "Pan-India delivery", text: "Branded, packed and on time" },
};

export const highlights: { title: string; icon: IconName }[] = [
  { title: "Premium Quality", icon: "award" },
  { title: "Custom Branding", icon: "pen" },
  { title: "Bulk Orders", icon: "package" },
  { title: "Timely Delivery", icon: "truck" },
  { title: "Pan India Supply", icon: "map" },
];

export const services = {
  eyebrow: "What we do",
  title: "Four ways we make your brand *unforgettable*.",
  subtitle:
    "One partner for everything your teams, clients and events need. Sourced, branded and delivered with care.",
  hint: "Hover or tap a service to explore",
  /** Photos are placeholders from Pexels (free to use) until real project shots are ready. */
  items: [
    {
      title: "Corporate Gifting",
      icon: "gift",
      description:
        "Curated gift sets for clients, partners and employees, from executive kits to festive hampers.",
      points: ["Festive & occasion gifting", "Executive gift sets", "Personalised packaging"],
      image: { src: serviceGifting, alt: "Gift box tied with a silver ribbon" },
    },
    {
      title: "Material Supplies",
      icon: "box",
      description:
        "Reliable sourcing of office stationery, pantry and day-to-day business supplies at scale.",
      points: ["Stationery & office essentials", "Pantry & housekeeping", "Scheduled replenishment"],
      image: { src: serviceSupplies, alt: "Notebooks, pencils and stationery laid out on a desk" },
    },
    {
      title: "Human Resources",
      icon: "users",
      description:
        "Employee engagement made simple: onboarding kits, rewards and recognition programmes.",
      points: ["Welcome & joining kits", "Rewards & recognition", "Work anniversary gifts"],
      image: { src: serviceHr, alt: "Manager welcoming a new colleague in the office" },
    },
    {
      title: "Promotional Materials",
      icon: "megaphone",
      description:
        "Branded merchandise and collateral that carries your identity at every touchpoint.",
      points: ["Event & conference kits", "Branded apparel & bags", "Print & display material"],
      image: { src: servicePromo, alt: "Branded canvas tote bag hanging on a chair" },
    },
  ] satisfies { title: string; icon: IconName; description: string; points: string[]; image: SiteImage }[],
};

export const about = {
  eyebrow: "Why MitraVee",
  title: "We help businesses create *meaningful* connections.",
  body: "Through quality, reliability and exceptional service, we turn everyday gifting into moments that build loyalty. Every product is hand-picked, quality-checked and branded to reflect who you are.",
  quote: "Every great gift is a handshake that lasts.",
  image: {
    src: partnership,
    alt: "Business partners shaking hands in a modern office",
  } satisfies SiteImage,
  points: [
    { title: "Curated, not catalogued", text: "Hand-picked products that feel premium in hand." },
    { title: "Your brand, done right", text: "Engraving, printing and packaging matched to your identity." },
    { title: "One point of contact", text: "A dedicated manager from brief to doorstep delivery." },
  ],
};

export const collections = {
  eyebrow: "Collections",
  title: "Gifts people actually *keep*.",
  subtitle: "Mix and match, or let us build a kit around your budget and brand.",
  cta: { label: "Ask for the full catalogue", href: "/contact" },
  /** Photos are placeholders from Pexels (free to use) until product shots are ready. */
  items: [
    {
      title: "Diaries & Organisers",
      text: "Leather-bound planners, foil-stamped with your logo.",
      tag: "Bestseller",
      image: { src: collectionDiaries, alt: "Tan leather notebook on a wooden desk" },
    },
    {
      title: "Premium Gift Sets",
      text: "Curated kits in rigid boxes, ready to impress.",
      tag: "Curated",
      image: { src: collectionGiftSets, alt: "White gift box tied with a black satin ribbon" },
    },
    {
      title: "Drinkware & Bottles",
      text: "Insulated steel bottles, mugs and tumblers.",
      tag: "Brandable",
      image: { src: collectionDrinkware, alt: "Hand holding a stainless steel bottle" },
    },
    {
      title: "Writing Instruments",
      text: "Metal and fountain pens, laser-engraved.",
      tag: "Engravable",
      image: { src: collectionWriting, alt: "Gold fountain pen resting on cream paper" },
    },
    {
      title: "Tech & Audio",
      text: "Headphones, speakers and desk tech people use.",
      tag: "Trending",
      image: { src: collectionTech, alt: "White wireless headphones on a light background" },
    },
    {
      title: "Festive Hampers",
      text: "Diwali and new year boxes of sweets and treats.",
      tag: "Seasonal",
      image: { src: collectionHampers, alt: "Festive gift box of assorted sweets" },
    },
    {
      title: "Leather Essentials",
      text: "Wallets, card holders and passport covers.",
      tag: "Premium",
      image: { src: collectionLeather, alt: "Tan and brown leather wallets laid flat" },
    },
    {
      title: "Bags & Packaging",
      text: "Branded totes, kraft bags and custom boxes.",
      tag: "Custom",
      image: { src: collectionBags, alt: "Kraft paper shopping bag held in hand" },
    },
  ] satisfies { title: string; text: string; tag?: string; image: SiteImage }[],
};

export const occasions = {
  eyebrow: "Occasions",
  title: "A gift for *every* milestone.",
  subtitle: "Whatever you're celebrating, we'll curate something your people will remember.",
  cta: { label: "Plan your gifting", href: "/contact" },
  hint: "Tap an occasion to start a WhatsApp enquiry",
  /** Photos are placeholders from Pexels (free to use) until real event shots are ready. */
  groups: [
    {
      title: "Festive & seasonal",
      text: "Hampers and keepsakes for the moments everyone celebrates.",
      items: ["Diwali & festive gifting", "New year greetings"],
      image: { src: occasionFestive, alt: "Lit Diwali diyas glowing in the dark" },
    },
    {
      title: "Your people",
      text: "Gifts that welcome, reward and thank the team.",
      items: ["Employee onboarding", "Work anniversaries", "Rewards & recognition", "Farewells & retirements"],
      image: { src: occasionPeople, alt: "Colleagues celebrating together with sparklers" },
    },
    {
      title: "Clients & partners",
      text: "Thoughtful gestures that keep relationships warm.",
      items: ["Client appreciation", "Dealer & channel meets"],
      image: { src: occasionClients, alt: "Business partners shaking hands over coffee" },
    },
    {
      title: "Events & launches",
      text: "Kits and merchandise that make your brand the talking point.",
      items: ["Conferences & events", "Product launches"],
      image: { src: occasionEvents, alt: "Speaker presenting on a conference stage" },
    },
  ] satisfies { title: string; text: string; items: string[]; image: SiteImage }[],
};

export const process = {
  eyebrow: "How it works",
  title: "From brief to *doorstep* in four steps.",
  steps: [
    { title: "Share your brief", text: "Tell us the occasion, quantity, budget and timeline." },
    { title: "Curate & propose", text: "We shortlist products and share branded mock-ups." },
    { title: "Brand & pack", text: "Customisation, quality checks and premium packaging." },
    { title: "Deliver anywhere", text: "On-time delivery to one address or many across India." },
  ],
};

export const stats: { value: string; label: string }[] = [
  { value: "500+", label: "Curated products" },
  { value: "100%", label: "Custom branding" },
  { value: "Pan-India", label: "Delivery network" },
  { value: "24h", label: "Quote turnaround" },
];

export const contactSection = {
  eyebrow: "Let's talk",
  title: "Let's create something *memorable*.",
  subtitle: "Share a few details and we'll come back with curated options and a quote, usually within a day.",
  form: {
    title: "Request a quote",
    note: "We reply within one working day.",
    /** "whatsapp" opens a pre-filled chat, "email" opens the mail client. */
    submitVia: "whatsapp" as "whatsapp" | "email",
    submitLabel: "Send Enquiry",
    requirementOptions: [
      "Corporate Gifting",
      "Festive Hampers",
      "Employee Welcome Kits",
      "Promotional Materials",
      "Material Supplies",
      "Something else",
    ],
    quantityOptions: ["Under 50", "50 to 200", "200 to 1,000", "1,000+"],
  },
};
