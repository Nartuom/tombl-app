export type Project = {
  slug: string;
  name: string;
  client: string;
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
    name: "Twisted Thorn — Editing House Website",
    client: "Twisted Thorn (editorial business)",
    blurb:
      "I took over an existing Vite + React + Supabase website used by a small editorial business to handle client enquiries and manuscript submissions. My role focused on stabilising and hardening the production system, particularly around authentication, data access, and file storage. I implemented proper staff authentication using Supabase Auth, redesigned database RLS policies to ensure sensitive data is only accessible to authorised users, and secured private file uploads using signed URLs. Alongside the security work, I refactored, restructured, and improved parts of the codebase, front end, and deployment setup to support safe, ongoing operation.",
    challenge:
      "Take over and stabilise an existing production site handling client enquiries and manuscript submissions, where authentication and data-access controls needed urgent hardening.",
    approach: [
      "Implemented proper staff authentication using Supabase Auth",
      "Redesigned database Row Level Security (RLS) policies so sensitive data is only accessible to authorised users",
      "Secured private file uploads using signed URLs",
      "Refactored the codebase, front end, and deployment setup to support safe, ongoing operation",
    ],
    stack: ["Vite", "React", "TypeScript", "Node.js", "Supabase"],
    links: [{ label: "View twisted-thorn.com", href: "https://twisted-thorn.com" }],
    imageSrc: "/assets/TwistedThorn.png",
    imageAlt: "Homepage of the Twisted Thorn editing house website",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
