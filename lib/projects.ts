export type Project = {
  slug: string;
  name: string;
  client: string;
  metaDescription?: string;
  blurb: string;
  challenge: string;
  approach: string[];
  stack: string[];
  links: { label: string; href: string }[];
  imageSrc?: string;
  imageAlt?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "coneng",
    name: "ConEng — Construction Quality Management Platform",
    client: "Co-founder & Software Director, Construction Engineering Ltd.",
    blurb:
      "A quality management platform for construction site teams, co-founded with Sam Phelps (Construction Director). ConEng turns Inspection Test Plans (ITPs) into structured Quality Inspection Records (QIRs) — a guided, mobile-first inspection workflow with audit-ready records, built around how site engineers actually work rather than a generic form builder.",
    challenge:
      "Most construction quality-management software is generic and process-heavy, forcing site teams to adapt their workflow to the tool. Sam's experience managing quality compliance on major infrastructure programmes pointed to a gap: something built specifically around the ITP-to-QIR workflow, with UK-hosted, auditable records that are provably unaltered once signed off.",
    approach: [
      "Co-founded ConEng with Sam Phelps, pairing his civil engineering and site-delivery experience with software design and engineering",
      "Built the app on Next.js 15 (App Router), React 19, and TypeScript, with Tailwind CSS v4",
      "Used Supabase (Postgres, Auth, Storage) hosted in the UK (London, eu-west-2) for data residency, enforcing access control with Row-Level Security in the database itself rather than only in application code",
      "Modelled the domain around versioned ITP templates and checklist/measurement definitions, with a snapshot rule so signed-off records and their PDFs never change if a template is later revised",
      "Added a database-level immutability trigger and full audit log so submitted or locked quality records can't be edited after signoff",
      "Built the 5-stage site engineer inspection wizard (setup, checklist, measurements, files, signoff) alongside a bulk-creation office workflow and weekly programme-progress alignment reporting",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Zod"],
    links: [{ label: "View constructioneng.co.uk", href: "https://www.constructioneng.co.uk/" }],
  },
  {
    slug: "no-mans-son",
    name: "No Man's Son — Author Website",
    client: "Simon Phelps (independent author)",
    blurb:
      "Strapi + Next.js relaunch for a historical-fiction series. I designed and built this site myself as a solo project, working with the client and publishing team to create a site that fits the brand in time for the book launch. This site will be further developed in the future according to needs — adding features like a blog, a 'behind the scenes' section for the author's books, a mailing list for fans and more...",
    challenge:
      "Launch a polished, on-brand author website in time for a historical-fiction book release, with a content model that could grow to support a blog, a behind-the-scenes section, and a mailing list without a rebuild.",
    approach: [
      "Designed and built the site solo, working directly with the client and publishing team",
      "Used Strapi as a headless CMS so the author can manage content without touching code",
      "Built the front end in Next.js for fast, SEO-friendly pages",
      "Deployed on Render with Cloudflare in front for performance and reliability",
    ],
    stack: ["Strapi", "Next.js", "Render", "Cloudflare"],
    links: [{ label: "View simonphelps.co.uk", href: "https://simonphelps.co.uk/" }],
    imageSrc: "/assets/nms.png",
    imageAlt: "Homepage of the No Man's Son author website, built with Strapi and Next.js",
  },
  {
    slug: "genomics-england-generation-study",
    name: "Genomics England — Generation Study Website",
    client: "Genomics England (via Empyrean Digital)",
    blurb:
      "As part of a 3 dev team, while working at Empyrean Digital ltd, I contributed significantly to building the front-end of this CraftCMS site to pixel-perfect specifications using the designs provided in Figma. This site demonstrates the passion our team had for building modern, accessible, and user friendly sites for large well respected clients in situations where big influxes of traffic would be expected.",
    challenge:
      "Deliver a pixel-perfect, accessible front end for a high-profile public health campaign site, matching Figma designs exactly under agency deadlines and expecting significant public traffic.",
    approach: [
      "Worked as part of a 3-developer team at Empyrean Digital",
      "Built front-end components in CraftCMS with Tailwind, matched precisely to Figma designs",
      "Focused on accessibility and performance for a site expecting significant public traffic",
      "Deployed via Docker on Azure infrastructure",
    ],
    stack: ["Docker", "CraftCMS", "Azure", "Tailwind"],
    links: [{ label: "View generationstudy.co.uk", href: "https://www.generationstudy.co.uk" }],
    imageSrc: "/assets/generation-study.png",
    imageAlt: "Homepage of the Genomics England Generation Study website",
  },
  {
    slug: "twisted-thorn",
    name: "Twisted Thorn Editing House — Website Development & SEO",
    client: "Twisted Thorn Editing House, UK book editors for fantasy, romance & horror",
    metaDescription:
      "Case study: ongoing web development, security and SEO for Twisted Thorn Editing House, a UK book editing service for fantasy, romance and horror authors. React, TypeScript and Supabase.",
    blurb:
      "Since December 2025 I've been the sole developer for Twisted Thorn Editing House, a UK book editing service for fantasy, romance and horror authors. I started by taking over an existing site, originally built with Lovable, that needed real authentication and secure handling of manuscript enquiries, and have since built a CMS for their editing services and pricing, genre-specific landing pages, a newsletter-backed News page, and an SEO programme driven by Google Search Console data.",
    challenge:
      "Twisted Thorn offers developmental editing, line and copy editing, and proofreading to self-published and indie authors, and needed a site that ranks for searches like \"fantasy book editor UK\" and turns visitors into manuscript enquiries. The existing site, originally built with Lovable, had cosmetic-only authentication and manuscript enquiry handling that needed real security. What began as stabilising the platform has grown into an ongoing engagement covering pricing, search visibility and content.",
    approach: [
      "Replaced the site's cosmetic-only authentication with real Supabase Auth, and locked down Row-Level Security so only admins can write to the CMS and manuscript enquiries stay private",
      "Redesigned the services page into CMS-managed editing packages (editorial assessment, developmental edit, line and copy edit, proofreading) and Bronze/Silver/Gold tiers the client can update without a developer",
      "Ran an SEO programme: built fantasy, romance and horror editing landing pages around queries surfaced in Google Search Console, and added FAQ, Person, Review and Breadcrumb schema markup",
      "Built a News page that pulls the client's existing Buttondown newsletter into the site, so every issue also becomes indexable content",
      "Improved performance with React Query caching/prefetching and eager-loaded navigation to remove loading flashes and layout shift, and wired up PostHog analytics to track enquiries",
    ],
    stack: ["Vite", "React", "TypeScript", "Supabase", "React Query", "PostHog", "SEO"],
    links: [
      { label: "Visit Twisted Thorn Editing House", href: "https://www.twisted-thorn.com/" },
      { label: "Fantasy book editing", href: "https://www.twisted-thorn.com/services/fantasy-book-editing" },
      { label: "Romance novel editing", href: "https://www.twisted-thorn.com/services/romance-novel-editing" },
      { label: "Horror book editing", href: "https://www.twisted-thorn.com/services/horror-book-editing" },
    ],
    imageSrc: "/assets/TwistedThorn.png",
    imageAlt: "Homepage of Twisted Thorn Editing House, UK book editors for fantasy, romance and horror",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
