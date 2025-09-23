import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        url: "/og/og-card.jpg", // 1200×630
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

  formatDetection: { telephone: false, address: false, email: false },

  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
