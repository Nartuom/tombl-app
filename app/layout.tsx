import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { ReCaptchaProvider } from "next-recaptcha-v3"
import { SERVICES } from "@/lib/services"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tombl.co.uk"),
  title: {
    default: "Tom Burton-Lawl — Tech-Agnostic, Accessibility-First Engineer",
    template: "%s · Tom Burton-Lawl",
  },
  description:
    "Tech-agnostic full-stack engineer (UK) with an accessibility-first mindset. Friendly, conscientious, and curious—I build inclusive, dependable web experiences.",
  applicationName: "Tom Burton-Lawl — Portfolio",
  authors: [{ name: "Tom Burton-Lawl", url: "https://tombl.co.uk" }],
  creator: "Tom Burton-Lawl",
  keywords: [
    "Tom Burton-Lawl",
    "software engineer",
    "web-developer",
    "full-stack",
    "accessibility",
    "a11y",
    "tech-agnostic",
    "web performance",
    "React",
    "Next.js",
    "Node.js",
    "SQL",
    "UK",
    "Somerset",
    "Bristol"
  ],
  alternates: { canonical: "/" },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://tombl.co.uk",
    siteName: "Tom Burton-Lawl",
    title: "Tom Burton-Lawl — Tech-Agnostic, Accessibility-First Engineer",
    description:
      "I build inclusive, dependable web experiences across whatever stack fits.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Tom Burton-Lawl — Portfolio",
      },
    ],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",

  twitter: {
    card: "summary_large_image",
    title: "Tom Burton-Lawl — Tech-Agnostic, Accessibility-First Engineer",
    description:
      "I build inclusive, dependable web experiences across whatever stack fits.",
    images: ["/og.jpg"],
  },

  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  formatDetection: { telephone: false, address: false, email: false }
};

const serviceOffers = SERVICES.map((service) => ({
  "@type": "Offer",
  "@id": `https://tombl.co.uk/#offer-${service.slug}`,
  url: `https://tombl.co.uk/services/${service.slug}`,
  name: service.title,
  description: service.shortDescription,
  ...(service.slug === "web-development" ? { price: "750", priceCurrency: "GBP" } : {}),
  seller: { "@id": "https://tombl.co.uk/#business" },
  itemOffered: {
    "@type": "Service",
    name: service.title,
    description: service.description,
    areaServed: "GB",
  },
}));

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://tombl.co.uk/#person",
      name: "Tom Burton-Lawl",
      jobTitle: "Full-Stack Software Engineer",
      url: "https://tombl.co.uk",
      email: "mailto:thomas.burton.lawl@gmail.com",
      sameAs: [
        "https://github.com/Nartuom",
        "https://www.linkedin.com/in/thomas-burton-lawl/",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Weston-super-Mare",
        addressCountry: "GB",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://tombl.co.uk/#business",
      name: "Tom Burton-Lawl — Web Development, SEO & Consultancy",
      url: "https://tombl.co.uk",
      image: "https://tombl.co.uk/og.jpg",
      founder: { "@id": "https://tombl.co.uk/#person" },
      email: "mailto:thomas.burton.lawl@gmail.com",
      priceRange: "££",
      areaServed: [
        { "@type": "City", name: "Weston-super-Mare" },
        { "@type": "AdministrativeArea", name: "Somerset" },
        { "@type": "City", name: "Bristol" },
        { "@type": "Country", name: "United Kingdom" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Weston-super-Mare",
        addressCountry: "GB",
      },
      sameAs: [
        "https://github.com/Nartuom",
        "https://www.linkedin.com/in/thomas-burton-lawl/",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: serviceOffers.map((offer) => ({ "@id": offer["@id"] })),
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://tombl.co.uk/#profile",
      url: "https://tombl.co.uk",
      mainEntity: { "@id": "https://tombl.co.uk/#person" },
    },
    ...serviceOffers,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
          {children}
        </ReCaptchaProvider>
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
