import type { CSSProperties } from "react";
import type { Metadata, Viewport } from "next";
import { Manrope, Newsreader } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { brand, contact, seo, theme } from "@/content/site";
import { cn } from "@/lib/utils";
import "./globals.css";

const body = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const display = Newsreader({
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  axes: ["opsz"],
  subsets: ["latin"],
  display: "swap",
});

const ogImage = typeof seo.ogImage.src === "string" ? seo.ogImage.src : seo.ogImage.src.src;

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: { default: seo.title, template: seo.titleTemplate },
  description: seo.description,
  keywords: seo.keywords,
  applicationName: brand.name,
  openGraph: {
    type: "website",
    siteName: brand.name,
    title: seo.title,
    description: seo.description,
    images: [{ url: ogImage, alt: seo.ogImage.alt }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: theme.primary,
  width: "device-width",
  initialScale: 1,
};

/** Maps the brand palette in `content/site.ts` onto the shadcn/ui design tokens. */
const themeVariables = {
  "--background": theme.background,
  "--foreground": theme.ink,
  "--card": theme.surface,
  "--popover": theme.surface,
  "--primary": theme.primary,
  "--primary-dark": theme.primaryDark,
  "--primary-foreground": theme.surface,
  "--secondary": theme.primarySoft,
  "--secondary-foreground": theme.primary,
  "--muted-foreground": theme.muted,
  "--highlight": theme.accent,
  "--highlight-soft": theme.accentSoft,
  "--border": theme.line,
  "--ring": theme.primary,
} as CSSProperties;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.name,
  slogan: brand.tagline,
  url: brand.url,
  email: contact.email,
  telephone: contact.phones,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.address.lines.join(", "),
    addressLocality: "New Delhi",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      style={themeVariables}
      className={cn("antialiased", body.variable, display.variable)}
    >
      <body className="flex min-h-dvh flex-col desk:h-dvh desk:overflow-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex flex-1 flex-col desk:min-h-0">
          {children}
        </main>
        <SiteFooter />
        {contact.showWhatsAppButton && <WhatsAppButton />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
