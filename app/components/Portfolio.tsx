import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Download, Code2, Database, FileText, ExternalLink, CircleCheck } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

// --- Editable content 
const PROFILE = {
  name: "Tom Burton‑Lawl",
  role: "Full‑Stack Software Engineer",
  blurb:
    "Tech-agnostic full-stack engineer with an accessibility-first mindset. Friendly, conscientious, and curious. I learn fast, design inclusively, and ship dependable web apps.",
  location: "Weston‑super‑Mare, UK",
  email: "thomas.burton.lawl@gmail.com", 
  github: "https://github.com/Nartuom", 
  linkedin: "https://www.linkedin.com/in/thomas-burton-lawl/", 
  cvUrl: "/assets/TBL-CV-4.0.pdf",
};

const SKILLS = [
  { group: "Core", items: ["JavaScript", "Node.js", "Express", "React/Next.js", "TypeScript", "HTML/CSS","Bootstrap", "Tailwind", "REST APIs", "Wordpress"] },
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
    links: [{ label: "View simonphelps.co.uk", href: "https://simonphelps.co.uk/" }],
    stack: ["Strapi", "Next.js", "Render", "Cloudflare"],
  }
];
const SERVICES = [
  {
    brochureSite: {
      title: "Brochure Website Package",
      description: "A clean, professional 5-page brochure site designed to showcase your business and help new customers find you online. Includes a simple contact form, mobile-friendly layout, and essential SEO setup.",
      features: [
        "Up to 5 custom pages",
        "Mobile-responsive design",
        "Basic contact form",
        "Optimised for speed & accessibility",
        "Setup with your domain & hosting"
      ],
      price: "£750",
      cta: "Perfect for small businesses, freelancers, and local services who need a professional online presence."
    }
  },
]

const HIGHLIGHTS = [
  "Tech agnostic",
  "Accessibility/WCAG‑aware builds",
  "Great communicator",
  "Observant problem solver",
  "Thinks 'outside the box'",
  "Always friendly and approachable"
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
      <header className="mx-auto flex flex-nowrap justify-between sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/80 border-b p-4">
          <div className="ml-28 flex items-center gap-3">
            <div className="size-8 rounded-xl bg-accent text-white grid place-items-center font-bold">T</div>
            <span className="font-medium font-mono text-accent text-shadow-lg">{PROFILE.name}</span>
          </div>
          <nav className="hidden md:flex items-center self-end gap-4 text-sm text-accent font-mono text-shadow-lg mr-28">
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <Button variant="outline" className="gap-2 h-auto w-20">
              <a href={PROFILE.cvUrl} target="_blank" rel="noreferrer" className="text-black h-full w-full">
                <Download className="size-4 w-full" /> CV
              </a>
            </Button>
          </nav>
      </header>

      {/* Hero */}
      
      <main className="w-screen">
        <section className="grid grid-cols-2 row-span-full h-auto bg-[url('../public/assets/burnbeck.jpg')] bg-cover bg-position-[50%_50%]">
            <Card className="mx-6 md:ml-28 col-span-2 md:col-span-1">
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
                <Button className="gap-2 shadow-xl/30 h-auto">
                  <a href="#projects" className="px-4 py-2"><Code2 className="size-5 text-accent font-semibold w-full" /> View projects</a>
                </Button>
                <Button variant="outline" className="flex flex-row gap-2 text-accent shadow-xl/30">
                  <a href={PROFILE.cvUrl} target="_blank" rel="noreferrer" className=" font-semibold text-black/80 text-shadow-2xl hover:text-white px-4 py-2 h-full w-full"><Download className="size-5 text-accent w-full" /> Download CV</a>
                </Button>
              </div>
              </CardContent>
            </Card> 
           
        </section>
        {/* Meet Tom */}
        <section className={"grid grid-flow-col grid-cols-2 grid-rows-2  md:grid-rows-1 items-center justify-end gap-2 h-175 bg-[url('../public/assets/happyTom.jpg')] bg-[auto_100%] bg-repeat bg-position-[30%_-75px] md:bg-cover md:bg-position-[30%_-65px] overflow-hidden border-y-2 border-accent"}>
          <div className="col-span-2 md:col-span-1 md:col-start-2 row-span-1 row-start-2 md:row-start-1">
            <Card className="h-auto md:min-w-75 mt-0 mb-0 mx-10 md:mr-28">
              <CardContent className="">
                <div className="">
                  <h2>About me</h2>
                  <p className="text-white md:font-semibold col-11 text-xs md:text-sm">I’m Tom - a dad, curious maker, and space nerd by the sea in Weston-super-Mare. I’m the friendly, conscientious type who takes things apart to understand them and puts them back together tidier. Off-screen you’ll find me fly-fishing at dawn, skating like I’m 15 again, or making chainmaille and useful little wooden things. I love weird, textured music, deep conversations about how minds and systems work, and designing for people who aren’t always listened to.</p>
                  <br/>
                  <p className="text-white md:font-semibold col-11 text-xs md:text-sm"> I’m ADHD-powered in the best ways, endlessly curious, and happiest when I’m learning and building something that makes someone’s day easier.</p>
                  <div className="md:flex-row md:inline-flex md:flex-wrap h-auto justify-around hidden">
                    {HIGHLIGHTS.map((h, i) => (
                      <div key={i} className="flex flex-col col-4 my-2">
                          <div className="inline-flex text-white mt-1 content-center">
                              <CircleCheck className="size-3 mr-2" />
                              <p className="text-white flex-col text-xs  self-center">{h}</p>
                          </div>
                          
                      </div>
                    ))}
                  </div>  
                </div>
              </CardContent>
            </Card>
          </div>
          
        </section>

        {/* Experience */}
        <section id="experience" className={"flex flex-col h-auto bg-[url('../public/assets/jellyfish.jpg')] bg-cover border-b-2 border-accent w-screen"}>
          <div className="flex-row">
            <h2 className="font-semibold text-2xl text-accent p-6 mx-10 md:mx-28 text-shadow-lg">Experience</h2>
          </div>
          
          <div className="flex-row inline-flex flex-wrap gap-4 mb-10 mx-0 md:mx-22 text-shadow-lg justify-between">
            
            {EXPERIENCE.map((job, idx) => (
              <Card key={idx} className="mt-0 mb-0 w-auto md:w-100 mx-0">
                <CardContent className="flex flex-col justify-between h-full">
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

        {/* Projects & Services */}
        <section id="projects" title="Selected Projects" className={"grid grid-flow-row-dense grid-cols-2 shrink w-screen bg-[url('../public/assets/westonPier.jpg')] bg-cover bg-position-[50%_50%]  border-b-2 border-accent"}>
        
          <div className="row-start-1 col-span-2 md:col-span-1 max-h-20 md:border-r-2 border-accent text-center">
            <h2 className="flex inline-flex font-semibold text-2xl text-accent p-6 mx-6 md:mx-28 text-shadow-lg"><FileText className="mr-2"></FileText>Projects</h2>
          </div>
           
          <div className="flex-row inline-flex flex-wrap row-span-1 row-start-2 col-span-2 md:col-span-1 mx-6 md:ml-28 md:mr-0 gap-4 text-shadow-lg justify-center md:border-r-2 border-accent pb-10">
            {PROJECTS.map((p, i) => (
              <Card key={i} className="mt-0 mb-0 w-auto md:w-100">
                <CardContent className="">
                  <h3 className="font-medium">{p.name}</h3>
                  <p className="mt-2 text-sm text-white">{p.blurb}</p>
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


          <div className="row-start-3 md:row-start-1 col-span-2 md:col-span-1 h-20 text-center">
            <h2 className="flex inline-flex row-span-1 col-span-1 h-20 font-semibold text-2xl text-accent p-6 mx-6 text-shadow-lg"><FileText className="mr-2"></FileText>Services</h2>
          </div>
          <div className="flex-row inline-flex flex-wrap row-span-1 row-start-4 md:row-start-2 col-span-2 md:col-span-1 gap-4 pb-10 text-shadow-lg justify-center">
            {SERVICES.map((p, i) => (
              <Card key={i} className="mt-0 mb-0 w-auto md:w-100">
                <CardContent className="">
                  <h3 className="font-medium">{p.brochureSite.title}</h3>
                  <p className="mt-2 text-sm text-white">{p.brochureSite.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.brochureSite.features.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-3">
                    <h4>{p.brochureSite.price}</h4>
                  </div>
                  Enquire: <a className="inline-flex items-center gap-2 hover:underline" href={`mailto:${PROFILE.email}`}><Mail className="size-4" /> {PROFILE.email}</a>
                </CardContent>
              </Card>
            ))}
          </div>
          

        </section>

        {/* Skills */}
        <section id="skills" title="Skills" className={"h-auto bg-[url('../public/assets/norway.jpg')] bg-cover bg-position-[50%_50%]  border-b-2 border-accent"}>

            <div>
              <h2 className="flex font-semibold text-2xl text-accent p-6 mx-6 md:mx-28 text-shadow-lg"><Database className="mr-2"></Database>Skills</h2>
            </div>
          
          <div className="flex flex-row flex-wrap gap-4 md:mx-28 mb-6 md:mb-10 md:justify-around">
            {SKILLS.map((s, i) => (
              <Card key={i} className="flex flex-col w-full md:w-auto mt-0 mb-0">
                <CardContent className="">
                  <h4 className="font-medium">{s.group}</h4>
                  <div className="flex flex-col flex-wrap mt-2 text-sm space-y-1 text-slate-700 list-disc w-50">
                    {s.items.map((it) => (
                      <Tag key={it}>{it}</Tag>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact 
        <section id="contact" title="Contact" icon={<Hammer className="size-5" />}>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="flex-1">
                  <h3 className="font-medium">Let’s work together</h3>
                  <p className="mt-1 text-sm text-white">Open to full‑time or contract roles. I enjoy pragmatic problem solving, clear comms, and shipping value quickly.</p>
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
        </section> */}

        {/* Footer */}
        <footer className="py-10 text-sm backdrop-blur supports-[backdrop-filter]:bg-black/80 border-b text-center text-white">
          © {year} {PROFILE.name}. Built with React + Tailwind.
        </footer>
      </main>
    </div>
  );
}
