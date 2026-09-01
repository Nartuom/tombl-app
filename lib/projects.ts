export type Project = {
  slug: string;
  name: string;
  client: string;
  blurb: string;
  challenge: string;
  approach: string[];
  stack: string[];
  links: { label: string; href: string }[];
  imageSrc: string;
  imageAlt: string;
};

export const PROJECTS: Project[] = [
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
