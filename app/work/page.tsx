import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";
import { Card, CardContent } from "@/app/components/ui/card";
import { Container } from "@/app/components/ui/container";
import { Reveal } from "@/app/components/ui/reveal";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from web development, accessibility, and security projects — including work for Genomics England, an author relaunch, and a production security hardening project.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work · Tom Burton-Lawl",
    description: "Case studies from recent web development projects.",
    url: "https://tombl.co.uk/work",
  },
};

export default function WorkPage() {
  return (
    <div className="min-h-screen text-slate-900">
      <SiteHeader />
      <main className="w-full bg-black/95">
        <section className="py-12 md:py-20">
          <Container size="6xl">
            <Reveal>
              <div>
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Work</h1>
                <p className="mt-4 max-w-2xl text-white leading-relaxed">
                  A selection of publicly-viewable projects. Plenty of my work is behind logins or
                  internal to clients — I&apos;m happy to walk through the problems, constraints, and
                  results if you&apos;d like to chat.
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="pb-16 md:pb-24">
          <Container size="6xl" className="grid gap-6 md:grid-cols-3">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.05} className="h-full">
                <Card className="flex flex-col h-full text-center">
                  <CardContent className="flex flex-col h-full">
                    <Image
                      src={project.imageSrc}
                      width={300}
                      height={250}
                      alt={project.imageAlt}
                      className="mx-auto border border-accent rounded-lg"
                    />
                    <h2 className="mt-4 text-lg font-semibold text-accent text-shadow-lg">{project.name}</h2>
                    <p className="mt-2 text-sm text-white/80">{project.client}</p>
                    <Link
                      href={`/work/${project.slug}`}
                      className="mt-4 inline-flex items-center justify-center gap-2 text-accent font-semibold hover:underline"
                    >
                      Read case study <ArrowRight className="size-4" />
                    </Link>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
