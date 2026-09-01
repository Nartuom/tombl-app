import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";
import { Card, CardContent } from "@/app/components/ui/card";
import { Container } from "@/app/components/ui/container";
import { Reveal } from "@/app/components/ui/reveal";
import { PROJECTS, getProjectBySlug } from "@/lib/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.challenge,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.name} · Tom Burton-Lawl`,
      description: project.challenge,
      url: `https://tombl.co.uk/work/${project.slug}`,
      images: [{ url: project.imageSrc }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen text-slate-900">
      <SiteHeader />
      <main className="w-full bg-black/95">
        <section className="py-12 md:py-20">
          <Container size="3xl">
            <Reveal>
              <div>
                <p className="text-sm text-accent font-mono">
                  <Link href="/work" className="hover:underline">Work</Link> / {project.name}
                </p>
                <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-white">
                  {project.name}
                </h1>
                <p className="mt-2 text-white/80">{project.client}</p>
                <Image
                  src={project.imageSrc}
                  width={600}
                  height={500}
                  alt={project.imageAlt}
                  className="mt-6 border border-accent rounded-lg"
                />
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="pb-12">
          <Container size="3xl">
            <Reveal>
              <Card>
                <CardContent>
                  <h2 className="text-lg font-semibold text-accent">The challenge</h2>
                  <p className="mt-2 text-sm text-white leading-relaxed">{project.challenge}</p>
                </CardContent>
              </Card>
            </Reveal>
          </Container>
        </section>

        <section className="pb-12">
          <Container size="3xl">
            <Reveal delay={0.05}>
              <Card>
                <CardContent>
                  <h2 className="text-lg font-semibold text-accent">Approach</h2>
                  <ul className="mt-2 space-y-2 text-sm text-white list-disc list-inside">
                    {project.approach.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-accent text-accent font-semibold px-2 py-0.5 text-sm leading-tight bg-gray-900"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </Container>
        </section>

        <section className="pb-16 md:pb-24">
          <Container size="3xl">
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
                  >
                    {link.label} <ExternalLink className="size-4" />
                  </a>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
