import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import { Reveal } from "@/app/components/ui/reveal";
import { Mail, MapPin, Github, Linkedin, Download, Code2, Database, FileText, ExternalLink, CircleCheck, MessageCircleQuestionMark} from "lucide-react";
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
  cvUrl: "/assets/TBLCV-4.3.pdf",
};

const SKILLS = [
  { group: "Core", items: ["JavaScript", "Node.js", "Express", "React/Next.js", "TypeScript", "HTML/CSS","Bootstrap", "Tailwind", "REST APIs", "Strapi", "Wordpress", "CraftCMS"] },
  { group: "Data & Infra", items: ["Azure", "AWS", "PostgreSQL", "MongoDB", "SQL", "Redis", "Docker", "Microservices", "CI/CD", "Atlassian Suite"] },
  { group: "DX & Quality", items: ["Accessibility (WCAG)", "Lighthouse", "Testing mindset", "Problem solving", "Agile/Scrum"] }
];

const EXPERIENCE = [
  {
    company: "Source Insurance ltd",
    role: "Software Engineer (Full‑stack)",
    period: "2024 — 2025",
    summary:
      "Built and maintained Node/Express microservices and customer journeys across IntroducerUX, CustomerUX and SMR‑API. Rebuilt the Customer Dashboard to be mobile first responsive and accessible. Delivered integrations with third‑party broker APIs and RICS rebuild‑cost enrichment.",
    bullets: [
      "Built REST endpoints and internal services used across the quoting + policy stack.",
      "Improved page performance and accessibility with Lighthouse‑driven refactors.",
      "Worked across Mongo/SQL data stores; added pragmatic tests.",
      "Collaborated with cross-functional teams in an Agile/Scrum environment."
    ],
    stack: ["Node", "Express", "MongoDB", "REST", "Docker", "CI/CD", "BootStrap5", "Agile/Scrum"],
  },
  {
    company: "Empyrean Digital ltd",
    role: "Software Engineer (Full‑stack)",
    period: "2022 — 2024",
    summary:
      "Wore many hats in a small, fast-paced digital agency. Built accessible, performant front-ends and integrated with custom and off-the-shelf CMS back-ends for clients including Genomics England, Sports Wales, and NHS Wales. Supported internal IT and DevOps needs as part of a small team.",
    bullets: [
      "Built accessible, fast front‑ends and integrated custom CMS features.",
      "Took ownership of 8 support desks, resolving issues quickly and communicating clearly with clients.",
      "Worked with the development team using Agile methodologies to deliver high-quality software on time.",
      "Led the company's cyber Essentials certification process, ensuring compliance with industry standards and best practices."
    ],
    stack: ["React", "Next.js", "Node", "JS", "PHP", "Wordpress","CraftCMS", "SQL", "PostgreSQL", "CI/CD", "Agile/Scrum"],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2018 — 2025",
    summary:
      "Working with various clients on projects such as broshure sites for professionals, web analytics and data scraping, and working on production crews to facilitate live streaming of widely recognized events such as Crufts and Henley Royal Regatta",
    bullets: [
      "Worked directly with clients to gather requirements, propose solutions, and deliver high-quality web applications on time and within budget",
      "Collaborated with designers to create modern and accessible products",
      "Using my knowledge and expertise across the web stack to improve businesses and facilitate the smooth operation of live events"
    ],
    stack: ["Node", "Express","Javascript", "Strapi","GhostCMS", "WCAG/Accessibility", "SQL", "MongoDB", "DevOps", "SEO", "CI/CD", "Streaming"],

  }
];

const PROJECTS = [
  {
    name: "No Man’s Son — Author Site",
    blurb:
      "Strapi + Next.js relaunch for a historical‑fiction series. I designed and build this site myself as a solo project, working with the client and publishing team to create a site that fits the brand in time for the book launch. This site will be further developed in the future according to needs - adding features like a blog, a 'behind the scenes' section for the authors books, a mailing list for fans and more...",
    links: [{ label: "View simonphelps.co.uk", href: "https://simonphelps.co.uk/" }],
    stack: ["Strapi", "Next.js", "Render", "Cloudflare"],
    imageSrc: "/assets/nms.png"
  },
  {
    name: "Genomics England - Generation Study Website",
    blurb: "As part of a 3 dev team, while working at Empyrean Digital ltd, I contributed significantly to building the front-end of this CraftCMS site to pixel-perfect specifications using the designs provided in Figma. This site demonstrates the passion our team had for building modern, accessible, and user friendly sites for large well respected clients in situations where big influxes of traffic would be expected.",
    links: [{label: "View generationstudy.co.uk", href: "https://www.generationstudy.co.uk"}],
    stack: ["Docker", "CraftCMS", "Azure", "Tailwind"],
    imageSrc: "/assets/generation-study.png"
  },
  {
    name: "Twisted Thorn - Editing house website",
    blurb: "I took over an existing Vite + React + Supabase website used by a small editorial business to handle client enquiries and manuscript submissions. My role focused on stabilising and hardening the production system, particularly around authentication, data access, and file storage. I implemented proper staff authentication using Supabase Auth, redesigned database RLS policies to ensure sensitive data is only accessible to authorised users, and secured private file uploads using signed URLs. Alongside the security work, I refactored, restructured, and improved parts of the codebase, front-end, and deployment setup to support safe, ongoing operation.",
    links: [{label: "View twistedthorn.co.uk", href: "https://twisted-thorn.com"}],
    stack: ["Vite", "React", "typescript", "Node.js", "Supabase"],
    imageSrc: "/assets/TwistedThorn.png" 
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

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-accent text-accent font-semibold px-2 py-0.5 text-sm leading-tight bg-gray-900">
      {children}
    </span>
  );
}
// --- Page --------------------------------------------------------------------
export default function Portfolio() {
  const year = new Date().getFullYear();
  const [formData, setFormData] = useState({ name: "", message: "", clientEmail: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formFeedback, setFormFeedback] = useState<string>("");

  const updateField = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (formStatus !== "idle") {
      setFormStatus("idle");
      if (formFeedback) {
        setFormFeedback("");
      }
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = formData.name.trim();
    const message = formData.message.trim();
    const clientEmail = formData.clientEmail.trim();

    if (!name || !message) {
      setFormStatus("error");
      setFormFeedback("Please add your name and a short message before sending.");
      return;
    }

    setFormStatus("submitting");
    setFormFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message, clientEmail }),
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(typeof payload.error === "string" ? payload.error : "Something went wrong. Please try again.");
      }

      setFormStatus("success");
      setFormFeedback("Thanks for reaching out! I'll be in touch soon.");
      setFormData({ name: "", message: "", clientEmail: "" });
    } catch (error) {
      const messageText = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setFormStatus("error");
      setFormFeedback(messageText);
    }
  };

  const feedbackTone =
    formStatus === "success"
      ? "text-emerald-300"
      : formStatus === "error"
      ? "text-red-400"
      : "text-white/80";


  // Scatter style for skill tags// deterministic "random" from a string
  const hashString = (str: string) => {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  };

  const mulberry32 = (seed: number) => {
    return () => {
      let t = (seed += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  };

  const tagScatterStyle = (
    group: string,
    tag: string,
    opts?: { compact?: boolean }
  ) => {
    const seed = hashString(`${group}::${tag}`);
    const rand = mulberry32(seed);

    // angle around the bubble
    const angle = rand() * Math.PI * 2;

    // radius (bigger on desktop / non-compact)
    const baseR = opts?.compact ? 42 : 70;     // px-ish
    const jitterR = opts?.compact ? 28 : 55;

    // elliptical feel: wider than tall
    const r = baseR + rand() * jitterR;
    const x = Math.cos(angle) * r * (opts?.compact ? 1.1 : 1.35);
    const y = Math.sin(angle) * r * (opts?.compact ? 0.8 : 1.0);

    // extra jitter so it doesn't look too circular
    const jx = (rand() - 0.5) * (opts?.compact ? 18 : 28);
    const jy = (rand() - 0.5) * (opts?.compact ? 14 : 22);

    const rot = (rand() - 0.5) * 14; // degrees
    const scale = 0.92 + rand() * 0.18;

    return {
      left: `50%`,
      top: `50%`,
      transform: `translate(calc(-50% + ${x + jx}px), calc(-50% + ${y + jy}px)) rotate(${rot}deg) scale(${scale})`,
    } as const;
  };


  return (
    <div className="min-h-screen text-slate-900">
      {/* Header */}
      <header className="mx-auto flex flex-nowrap justify-center md:justify-between sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/80 border-b p-4">
          <div className="flex items-center gap-3 mx-6 md:ml-28">
            <div className="size-8 rounded-xl bg-accent text-white grid place-items-center font-bold">T</div>
            <span className="font-medium font-mono text-accent text-shadow-lg">{PROFILE.name}</span>
          </div>
          <nav className="hidden md:flex items-center self-end gap-4 text-sm text-accent font-mono text-shadow-lg mr-28">
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a className="hover:underline" href="#contact">Contact</a>
            <Button variant="outline" className="flex flex-row gap-2 text-accent shadow-xl/30">
              <a href={PROFILE.cvUrl} target="_blank" rel="noreferrer" className=" font-semibold text-black/80 text-shadow-2xl hover:text-white px-4 py-2 h-full w-full"><Download className="size-5 text-accent w-full" /> Download CV</a>
            </Button>
          </nav>
      </header>

      {/* Hero */}
      
      <main className="w-full">
        <section className="grid grid-cols-2 row-span-full h-auto bg-[url('../public/assets/burnbeck.jpg')] bg-cover bg-position-[50%_50%] pt-20 pb-20 ">
            <Reveal className="md:ml-28 col-span-2 md:col-span-1 mx-6 md:mx-28">
              <Card className="md:mx-28 my-0">
                <CardContent>
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">{PROFILE.role}</h1>
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
            </Reveal>
           
        </section>
        {/* Meet Tom */}
        <section className={"grid grid-flow-col grid-cols-2 grid-rows-2 md:grid-rows-1 items-center h-175 bg-[url('../public/assets/happyTom.jpg')] bg-[auto_100%] bg-no-repeat bg-cover bg-position-[30%_-75px] md:bg-position-[30%_-65px] overflow-hidden border-y-2 border-accent md:pb-0"}>
          <div className="col-span-2 md:col-span-1 md:col-start-2 row-span-1 row-start-2 md:row-start-1 py-5 md:py-10">
            <Reveal>
            <Card className="h-auto md:min-w-75 my-0 mx-10 md:mx-28">
              <CardContent>
                <div>
                  <h2 className="text-accent text-shadow-lg font-semibold">About me</h2>
                  <p className="text-white md:font-semibold col-11 text-xs md:text-sm">I&#39;m Tom - a dad, curious maker, and space nerd by the sea in Weston-super-Mare. I&#39;m the friendly, conscientious type who takes things apart to understand them and puts them back together tidier. Off-screen you&#39;ll find me fly-fishing at dawn, skating like I&#39;m 15 again, or making chainmaille and useful little wooden things. I love weird, textured music, deep conversations about how minds and systems work, and designing for people who aren&#39;t always listened to.</p>
                  <br/>
                  <p className="text-white md:font-semibold col-11 text-xs md:text-sm"> I&#39;m ADHD-powered in the best ways, endlessly curious, and happiest when I&#39;m learning and building something that makes someone&#39;s day easier.</p>
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
            </Reveal>
          </div>
          
        </section>

        {/* Experience */}
        <section id="experience" className={"flex flex-col h-auto bg-[url('../public/assets/jellyfish.jpg')] bg-cover border-b-2 border-accent w-full"}>
          <div className="flex justify-center md:justify-start">
            <Reveal>
              <h2 className="inline-flex content-center font-semibold text-2xl text-accent p-6 mx-10 md:mx-28 text-shadow-lg"><Code2 className="self-center mr-2"></Code2>Experience</h2>
            </Reveal>
          </div>
          <div className="flex-row inline-flex flex-wrap gap-4 mb-10 mx-6 md:mx-28 text-shadow-lg justify-around py-5 md:py-10">
            {EXPERIENCE.map((job, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
              <Card className="my-0 w-auto md:w-100 mx-0 text-center">
                <CardContent className="flex flex-col h-full">
                  <div className="text-center h-full">
                    <div>
                      <h3 className="font-semibold text-lg text-accent subpixel-antialiased">{job.role}</h3>
                      <p className="text-white">{job.company} · <span className="text-white">{job.period}</span></p>
                    </div>
                    <div className="mx-6 my-3 list-disc text-sm space-y-1">
                      <p className="mt-3 text-sm text-white">{job.summary}</p>
                      <ul className="list-disc mt-3 text-xs space-y-1">
                        {job.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2 justify-center">
                    {job.stack.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </CardContent>
              </Card>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Projects & Services */}
        <section id="projects" title="Selected Projects" className={"grid grid-cols-12 shrink w-full bg-[url('../public/assets/westonPier.jpg')] bg-cover bg-position-[50%_50%] border-b-2 border-accent"}>
          <div className="col-span-12 md:border-r-2 border-accent">
            <div className="h-65px text-center mx-6 md:mx-28 p-4">
              <Reveal>
                <h2 className="inline-flex font-semibold text-2xl text-accent text-shadow-lg"><FileText className="self-center mr-2"></FileText>Projects</h2>
              </Reveal>
              <div className="h-65px border-accent text-left text-white mt-2 text-sm leading-relaxed">
                <Reveal>
                  <p>I&#39;ve worked on many projects I can&#39;t publicly show (internal apps, member areas, vendor platforms). I&#39;m happy to walk through the problems, constraints, and results if you&#39;d like to chat! You can see my publically available work below</p>
                </Reveal>
              </div>
            </div>
            <div className="flex flex-row flex-wrap md:ml-28 text-shadow-lg pb-10 gap-4 justify-around mx-6 md:mx-28 py-5 md:py-10">
              {PROJECTS.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <Card className="my-0 w-auto md:w-100 mx-0 text-center">
                    <CardContent className="flex flex-col h-full">
                      <div className="flex flex-col h-full flex-end">
                        <h3 className="text-accent text-shadow-lg font-semibold">{p.name}</h3>
                        <p className="mt-2 text-sm text-white h-full">{p.blurb}</p>
                        <div className="mt-3 flex flex-wrap gap-1 justify-center">
                          {p.stack.map((t) => (
                            <Tag key={t}>{t}</Tag>
                          ))}
                        </div>
                        <a href={p.links[0].href} className="text-sm items-center hover:underline">
                            <Image
                              src={p.imageSrc}
                              width={300}
                              height={250}
                              objectFit="contain"
                              alt="screenshot of the project homepage"
                              className="mt-4 mx-auto border border-accent rounded-lg"
                            />
                            <p className="inline-flex items-center mt-1 justify-center text-accent font-semibold hover:underline">
                              {p.links[0].label}
                              <span className="ml-1"><ExternalLink className="size-3"/></span> 
                            </p>
                          
                        </a>
                      </div>  
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="col-span-12 w-full border-t-2 md:border-t-2 border-accent bg-black/95 backdrop-blur-sm bg-gradient-to-b from-black/30 via-black/50 to-black/30 md:backdrop-blur-none md:backdrop-filter-none md:bg-none md:bg-black/0">
              <div className="bg-black/95 h-65px text-center p-4">
                <Reveal>
                  <h2 className="inline-flex mx-6 md:mx-28 font-semibold text-2xl text-accent text-shadow-lg"><FileText className="self-center mr-2"></FileText>Services</h2>
                </Reveal>
                <div className="mx-6 md:mx-28  h-65px text-left text-white mt-2 text-sm leading-relaxed">
                  <Reveal>
                    <p>Whether you&#39;re building an online presence or upgrading your e-commerce, I offer a friendly, professional, bespoke package to get you live - and keep you running. I can design, build, and maintain your site. Use my contact form to get in touch for a chat and a quote.</p>
                  </Reveal>
                </div>
              </div>
            <div className="flex-row inline-flex flex-wrap md:col-span-1 gap-4 mb-10 text-shadow-lg justify-center py-5 md:py-10 w-full">
              {SERVICES.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                <Card className="my-0 mx-0 text-center w-auto md:w-full justify-center">
                  <CardContent>
                    <h3 className="text-accent text-shadow-lg font-semibold p-4">{p.brochureSite.title}</h3>
                    <p className="mt-2 text-sm text-white w-80 self-center">{p.brochureSite.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2 justify-center w-80">
                      {p.brochureSite.features.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                    <div>
                      <div className="mt-4">
                        <h4>Price: {p.brochureSite.price}</h4>
                      </div>
                      Enquire: <a className="inline-flex items-center gap-2 hover:underline" href={`mailto:${PROFILE.email}`}><Mail className="size-4" /> {PROFILE.email}</a>
                      <a className="block hover:underline" href="#contact">(or use the contact form below!)</a>
                    </div>
                    
                  </CardContent>
                </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" title="Skills" className={"h-auto bg-[url('../public/assets/norway.jpg')] bg-cover bg-position-[50%_50%]  border-b-2 border-accent "}>
            <div className="flex justify-center md:justify-start">
              <Reveal>
                <h2 className="inline-flex content-center font-semibold text-2xl text-accent p-6 mx-10 md:mx-28 text-shadow-lg"><Database className="self-center mr-2"></Database>Skills</h2>
              </Reveal>
            </div>
          
          <div className="flex flex-row flex-wrap gap-4 mx-6 md:mx-28 mb-10 md:justify-around py-5 md:py-10">
            {SKILLS.map((s, i) => (
              <Reveal key={i} delay={i * 0.05} className="w-full md:w-auto justify-center">
                <Card className="flex flex-col my-0 w-100">
                  <CardContent className="text-center self-center">
                    <h3 className="font-semibold accent">{s.group}</h3>
                    <div className="flex flex-col flex-wrap mt-2 text-sm space-y-1 text-slate-700 list-disc w-50 items-center">
                      {[...s.items].map((it) => (
                        <Tag key={it}>{it}</Tag>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" title="Contact" className="bg-black/80 border-b-2 border-accent">
          <div className="flex justify-center">
            <Reveal>
              <h2 className="inline-flex content-center font-semibold text-2xl text-accent p-6 mx-10 md:mx-28 text-shadow-lg"><MessageCircleQuestionMark className="self-center mr-2"></MessageCircleQuestionMark>Let&#39;s work together</h2>
            </Reveal>
          </div>

          <div className="flex flex-row flex-wrap content-center justify-center py-5 md:py-10">
            <Reveal delay={0.1}>
              <Card className="">
                <CardContent>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:w-200" noValidate>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-semibold text-accent">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={updateField}
                        className="w-full rounded-lg border border-accent bg-black/60 px-3 py-2 text-white shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent placeholder-white"
                        placeholder="How should I address you?"
                        autoComplete="name"
                        maxLength={120}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="clientEmail" className="text-sm font-semibold text-accent">Your email</label>
                      <input
                        id="clientEmail"
                        name="clientEmail"
                        type="email"
                        value={formData.clientEmail}
                        onChange={updateField}
                        className="w-full rounded-lg border border-accent bg-black/60 px-3 py-2 text-white shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent placeholder-white"
                        placeholder="How can I reach you by email?"
                        autoComplete="name"
                        maxLength={120}
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-sm font-semibold text-accent">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={updateField}
                        className="w-full rounded-lg border border-accent bg-black/60 px-3 py-2 text-white shadow-inner min-h-[160px] resize-y focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent placeholder-white"
                        placeholder="Tell me about your project, needs, or goals."
                        maxLength={3000}
                        required
                      />
                    </div>

                    <div className="flex items-center gap-4 flex-wrap">
                      <Button
                        type="submit"
                        className="gap-2 p-2"
                        disabled={formStatus === "submitting"}
                        aria-disabled={formStatus === "submitting"}
                      >
                        {formStatus === "submitting" ? "Sending..." : "Send message"}
                      </Button>
                      {formFeedback && (
                        <p className={`text-sm ${feedbackTone}`} role="status" aria-live="polite">
                          {formFeedback}
                        </p>
                      )}
                    </div>

                    {formStatus === "error" && !formFeedback && (
                      <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-5 md:py-10 text-sm backdrop-blur supports-[backdrop-filter]:bg-black/80 border-b text-center text-white">
          © {year} {PROFILE.name}. Built with React + Tailwind.
        </footer>
      </main>
    </div>
  );
}


