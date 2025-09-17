import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Download, Code2, Server, Boxes, Database, Hammer, FileText, ExternalLink, CircleCheck } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

// --- Editable content 
const PROFILE = {
  name: "Tom Burton‑Lawl",
  role: "Full‑Stack Software Engineer",
  blurb:
    "UK‑based engineer with a track record building accessible, scalable web platforms. I ship reliable Node/Express microservices, tidy React front‑ends, and pragmatic SQL.",
  location: "Weston‑super‑Mare, UK",
  email: "thomas.burton.lawl@gmail.com", 
  github: "https://github.com/Nartuom", 
  linkedin: "https://www.linkedin.com/in/thomas-burton-lawl/", 
  cvUrl: "/assets/TBL-CV-4.0.pdf", // ← replace
};

const SKILLS = [
  { group: "Core", items: ["JavaScript/TypeScript", "Node.js", "Express", "React/Next.js", "HTML/CSS/Tailwind/Bootstrap", "REST APIs", "Wordpress"] },
  { group: "Data & Infra", items: ["Azure", "AWS", "PostgreSQL", "MongoDB", "SQL", "Redis", "Docker", "CI/CD", "Atlassian Suite"] },
  { group: "DX & Quality", items: ["Accessibility (WCAG)", "Lighthouse", "Testing mindset", "Problem solving", "Agile/Scrum"] },
  { group: "Nice to have", items: ["Strapi", "Cloudflare", "Microservices", "Content modelling"] },
];

const EXPERIENCE = [
  {
    company: "Source Insurance ltd",
    role: "Software Engineer (Full‑stack)",
    period: "2024 — 2025",
    summary:
      "Built and maintained Node/Express microservices and customer journeys across IntroducerUX, CustomerUX and SMR‑API. Delivered integrations with third‑party broker APIs and RICS rebuild‑cost enrichment.",
    bullets: [
      "Designed REST endpoints and internal services used across the quoting + policy stack.",
      "Improved page performance and accessibility with Lighthouse‑driven refactors.",
      "Worked across Mongo/SQL data stores; added pragmatic tests and CI hooks.",
    ],
    stack: ["Node", "Express", "MongoDB", "REST", "Docker", "CI/CD", "BootStrap5", "Agile/Scrum"],
  },
  {
    company: "Software Engineer (Full‑stack)",
    role: "Software Engineer (Full‑stack)",
    period: "2022 — 2024",
    summary:
      "Delivered client sites and internal tooling; set up CI/CD pipelines and performance budgets.",
    bullets: [
      "Built accessible, fast front‑ends and integrated custom CMS features.",
      "Collaborated with designers and content teams to ship on time.",
    ],
    stack: ["React", "Next.js", "Node", "JS", "PHP", "Wordpress", "SQL", "PostgreSQL", "CI/CD", "Agile/Scrum"],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2018 — 2025",
    summary:
      "Working with various clients on projects such as broshure sites for professionals, web analytics and data scraping, and working on production crews to facilitate live streaming of widely recognized events such as Crufts and Henley Royal Regatta",
    bullets: [
      "Built accessible, fast front‑ends and integrated custom CMS features.",
      "Collaborated with designers to create modern and accessible products",
      "Using my knowledge and expertise across the web stack to improve businesses and facilitate the smooth operation of live events"
    ],
    stack: ["Node", "Express","Javascript", "WCAG/Accessibility", "SQL", "MongoDB", "DevOps", "SEO", "CI/CD", "Streaming"],

  }
];

const PROJECTS = [
  {
    name: "No Man’s Son — Author Site",
    blurb:
      "Strapi + Next.js relaunch for a historical‑fiction series. Content modelling, image pipelines, Render deployments.",
    links: [{ label: "Case notes", href: "#" }],
    stack: ["Strapi", "Next.js", "Render", "Cloudflare"],
  },
  {
    name: "SocialSignpost (concept)",
    blurb:
      "Directory to help people find local support groups and services. Emphasis on accessibility and simple authoring.",
    links: [{ label: "Read more", href: "#" }],
    stack: ["Next.js", "Strapi", "PostgreSQL"],
  }
];

const HIGHLIGHTS = [
  "Tech agnostic; I am a quick learner who loves new challenges and immersing myself in new languages and new technologies",
  "WCAG‑aware builds; I am an advocate for accessibility with a pragmatic approach to ensure that accesibility needs are considered part of the default approach to web design and not an afterthought",
  "Happy in messy codebases; enjoy turning unknowns into documented, testable modules",
];

// --- UI helpers --------------------------------------------------------------
const fade = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } };

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-accent text-accent font-semibold px-2 py-0.5 text-sm leading-tight bg-gray-900">
      {children}
    </span>
  );
}
// --- Page --------------------------------------------------------------------
export default function Portfolio() {
  const [year] = useState(new Date().getFullYear());

  return (
    <div className="min-h-screen text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/80 border-b">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-xl bg-accent text-white grid place-items-center font-bold">T</div>
            <span className="font-medium font-mono text-accent text-shadow-lg">{PROFILE.name}</span>
          </div>
          <nav className="hidden md:flex items-center gap-4 text-sm text-accent font-mono text-shadow-lg">
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <Button variant="secondary" className="gap-2">
              <a href={PROFILE.cvUrl} target="_blank" rel="noreferrer">
                <Download className="size-4" /> CV
              </a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      
      <main className="">
        <section className="grid lg:grid-cols-2 gap-8  h-auto bg-[url('../public/assets/burnbeck.jpg')] bg-cover bg-position-[50%_50%]" >
          
            <Card className="h-auto my-10 p-6 mx-6 sm:my-28 md:ml-28 text-shadow-lg">
              <CardContent>
              <h1 className="text-3xl md:text-4xl font-semibold  tracking-tight text-white">{PROFILE.role}</h1>
              <p className="mt-2 text-white leading-relaxed">{PROFILE.blurb}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white">
                <span className="inline-flex items-center gap-2"><MapPin className="size-4" /> {PROFILE.location}</span>
                <a className="inline-flex items-center gap-2 hover:underline" href={`mailto:${PROFILE.email}`}><Mail className="size-4" /> {PROFILE.email}</a>
                <a className="inline-flex items-center gap-2 hover:underline" href={PROFILE.github} target="_blank" rel="noreferrer"><Github className="size-4" /> GitHub</a>
                <a className="inline-flex items-center gap-2 hover:underline" href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin className="size-4" /> LinkedIn</a>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-accent">
                <Button className="gap-2 shadow-xl/30">
                  <a href="#projects"><Code2 className="size-4 text-accent font-semibold" /> View projects</a>
                </Button>
                <Button variant="outline" className="flex flex-row gap-2 text-accent shadow-xl/30">
                  <a href={PROFILE.cvUrl} target="_blank" rel="noreferrer" className=" font-semibold text-black/80 text-shadow-2xl hover:text-white"><Download className="size-4 text-accent" /> Download CV</a>
                </Button>
              </div>
              </CardContent>
            </Card> 
           
        </section>
        {/* Meet Tom */}
        <section className={"grid grid-cols-2 gap-4 h-200 bg-[url('../public/assets/happyTom.jpg')] bg-cover bg-position-[25%_25%] sm:bg-position-[25%_20%] border-y-2 border-accent"}>
          <div className="col-span-2 lg:col-start-2 content-end lg:content-center justify-self-end mx-6 lg:my-28 md:mr-28">
            <Card className="shadow-sm sm:h-auto mb-6 content-center text-shadow-lg">
              <CardContent className="p-1 md:p-4">
                <div className="">
                  {HIGHLIGHTS.map((h, i) => (
                    <div key={i} className="flex-row flex-nowrap inline-flex h-auto w-full my-2">
                        <div className="text-white col-1 mt-1 mr-2 content-center">
                            <CircleCheck className="size-4" />
                        </div>
                        <p className="text-white md:font-semibold col-11 text-xs md:text-sm self-center">{h}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience */}
        <section className={"flex h-auto bg-[url('../public/assets/jellyfish.jpg')] bg-cover border-b-2 border-accent "}>
          <div className="grid md:grid-cols-3 gap-4 my-28 mx-28 text-shadow-lg">
            {EXPERIENCE.map((job, idx) => (
              <Card key={idx} className="">
                <CardContent className="flex flex-col justify-between p-6 h-full">
                  <div className="flex flex-col justify-between gap-4">
                    <div>
                      <h3 className="font-medium font-semibold text-lg text-accent subpixel-antialiased">{job.role}</h3>
                      <p className="text-white">{job.company} · <span className="text-white">{job.period}</span></p>
                    </div>
                    <div>
                      <p className="mt-3 text-sm text-white">{job.summary}</p>
                      <ul className="mt-3 ml-4 list-disc text-sm space-y-1">
                        {job.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2 justify-self-end">
                    {job.stack.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" title="Selected Projects" className={"flex h-auto bg-[url('../public/assets/westonPier.jpg')] bg-cover bg-position-[50%_50%]  border-b-2 border-accent"}>
          <div className="grid md:grid-cols-3 gap-4 my-28 mx-28 text-shadow-lg">
            {PROJECTS.map((p, i) => (
              <Card key={i} className="hover:shadow-sm transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-medium">{p.name}</h3>
                  <p className="mt-2 text-sm text-slate-700">{p.blurb}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-3">
                    {p.links.map((l, j) => (
                      <a key={j} href={l.href} className="text-sm inline-flex items-center gap-1 hover:underline" target="_blank" rel="noreferrer">
                        {l.label} <ExternalLink className="size-3" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" title="Skills" icon={<Database className="size-5" />} className={"flex h-auto bg-[url('../public/assets/norway.jpg')] bg-cover bg-position-[50%_50%]  border-b-2 border-accent"}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-28 mx-28">
            {SKILLS.map((s, i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <h4 className="font-medium">{s.group}</h4>
                  <div className="flex flex-col flex-wrap mt-2 text-sm space-y-1 text-slate-700 list-disc ml-4">
                    {s.items.map((it) => (
                      <Tag key={it}>{it}</Tag>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" title="Contact" icon={<Hammer className="size-5" />}>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="flex-1">
                  <h3 className="font-medium">Let’s work together</h3>
                  <p className="mt-1 text-sm text-slate-700">Open to full‑time or contract roles. I enjoy pragmatic problem solving, clear comms, and shipping value quickly.</p>
                </div>
                <div className="flex items-center gap-3">
                  <Button className="gap-2">
                    <a href={`mailto:${PROFILE.email}`}><Mail className="size-4"/> Email me</a>
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <a href={PROFILE.cvUrl} target="_blank" rel="noreferrer"><FileText className="size-4"/> CV</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="py-10 text-sm backdrop-blur supports-[backdrop-filter]:bg-black/80 border-b text-center text-white">
          © {year} {PROFILE.name}. Built with React + Tailwind.
        </footer>
      </main>
    </div>
  );
}
