export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  price?: string;
  priceNote?: string;
  forWho: string;
  process: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortDescription:
      "Bespoke, accessible websites and web apps — from a 5-page brochure site to a full-stack build.",
    description:
      "Tech-agnostic full-stack web development, built around whatever stack genuinely fits your project — React/Next.js, WordPress, CraftCMS, Strapi, or a custom Node.js back end. The most popular starting point is the Brochure Website Package: a clean, professional 5-page site designed to showcase your business and help new customers find you online, with a contact form, mobile-friendly layout, and essential SEO setup included. Larger or more complex builds — e-commerce, member areas, custom web apps — are scoped and quoted individually.",
    features: [
      "Up to 5 custom pages in the Brochure package (larger builds quoted individually)",
      "Mobile-responsive, accessible design (WCAG-aware)",
      "Contact forms and other simple integrations",
      "Optimised for speed & accessibility from the start",
      "Setup with your domain & hosting",
      "Essential on-page SEO included",
    ],
    price: "From £750",
    priceNote: "5-page Brochure Website Package. Larger or custom builds are quoted individually.",
    forWho:
      "Small businesses, freelancers, and local services who need a professional, fast, accessible online presence — or an existing site that needs rebuilding on more solid foundations.",
    process: [
      "A quick call or message to understand your goals and requirements",
      "A fixed-scope proposal and quote — no surprises",
      "Design and build, with regular check-ins",
      "Launch, with essential SEO setup included",
      "Optional ongoing support and maintenance",
    ],
  },
  {
    slug: "seo",
    title: "SEO Optimisation",
    shortDescription:
      "Technical and on-page SEO so your site gets found by the people searching for what you offer.",
    description:
      "A site that looks great but doesn't get found isn't doing its job. I work through the technical and on-page fundamentals — clean markup, fast pages, correct metadata, structured data, and content that actually matches what your customers are searching for — so search engines can properly understand and rank your site. This works as a standalone engagement for an existing site, or as part of a new build.",
    features: [
      "Technical SEO audit (crawlability, indexing, Core Web Vitals)",
      "On-page optimisation — titles, meta descriptions, headings, internal linking",
      "Structured data (schema.org / JSON-LD) so search engines understand your content",
      "Sitemap and robots.txt configuration",
      "Local SEO setup for businesses that serve a specific area",
      "Plain-English report on what changed and why",
    ],
    price: "Custom quote",
    priceNote: "Scoped to your site and goals — get in touch for a quote.",
    forWho:
      "Businesses with an existing site that isn't showing up in search, or anyone building a new site who wants it set up correctly for search from day one.",
    process: [
      "Audit your current site (or your plans, for a new build)",
      "A prioritised list of fixes and improvements, in plain English",
      "Implementation of the technical and on-page changes",
      "Sitemap, robots.txt, and structured data set up correctly",
      "A short report on what changed and what to expect",
    ],
  },
  {
    slug: "consultancy",
    title: "Web & Technical Consultancy",
    shortDescription:
      "Independent, tech-agnostic advice on your stack, architecture, or a specific problem.",
    description:
      "Sometimes what you need isn't a build, it's a second opinion — from choosing the right tools for a new project, to untangling a legacy system, hardening security around authentication and data access, or planning an accessibility upgrade. I offer independent, tech-agnostic consultancy for founders, small teams, and agencies who want experienced input without hiring a full-time engineer.",
    features: [
      "Technology and stack recommendations",
      "Code and architecture review",
      "Accessibility (WCAG) audits",
      "Security review — authentication, data access, hosting",
      "Available as hourly or fixed-scope engagements",
    ],
    price: "Custom quote",
    priceNote: "Hourly or fixed-scope, depending on what you need.",
    forWho:
      "Founders, small teams, or agencies who need an experienced, independent second opinion on a technical decision or an existing system.",
    process: [
      "A conversation to understand the problem or decision at hand",
      "A clear scope — hourly or fixed, whichever fits",
      "Review, recommendations, or hands-on work as agreed",
      "A written summary of findings and next steps",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
