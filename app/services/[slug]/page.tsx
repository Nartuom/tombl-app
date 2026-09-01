import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail, CircleCheck } from "lucide-react";
import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";
import { Card, CardContent } from "@/app/components/ui/card";
import { Container } from "@/app/components/ui/container";
import { Reveal } from "@/app/components/ui/reveal";
import { SERVICES, getServiceBySlug } from "@/lib/services";
import { PROFILE } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.shortDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} · Tom Burton-Lawl`,
      description: service.shortDescription,
      url: `https://tombl.co.uk/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="min-h-screen text-slate-900">
      <SiteHeader />
      <main className="w-full bg-black/95">
        <section className="py-12 md:py-20">
          <Container size="3xl">
            <Reveal>
              <div>
                <p className="text-sm text-accent font-mono">
                  <Link href="/services" className="hover:underline">Services</Link> / {service.title}
                </p>
                <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-white">
                  {service.title}
                </h1>
                <p className="mt-4 text-white leading-relaxed">{service.description}</p>
                {service.price && (
                  <p className="mt-4 text-lg font-semibold text-accent">
                    {service.price}
                    {service.priceNote && (
                      <span className="ml-2 text-sm font-normal text-white/80">{service.priceNote}</span>
                    )}
                  </p>
                )}
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="pb-12">
          <Container size="4xl" className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <Card className="h-full">
                <CardContent>
                  <h2 className="text-lg font-semibold text-accent">What&apos;s included</h2>
                  <ul className="mt-3 space-y-2 text-sm text-white">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CircleCheck className="size-4 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal delay={0.05}>
              <Card className="h-full">
                <CardContent>
                  <h2 className="text-lg font-semibold text-accent">How it works</h2>
                  <ol className="mt-3 space-y-2 text-sm text-white list-decimal list-inside">
                    {service.process.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </Reveal>
          </Container>
        </section>

        <section className="pb-16 md:pb-24">
          <Container size="3xl">
            <Reveal>
              <Card>
                <CardContent>
                  <h2 className="text-lg font-semibold text-accent">Who it&apos;s for</h2>
                  <p className="mt-2 text-sm text-white leading-relaxed">{service.forWho}</p>
                  <div className="mt-6 flex flex-wrap gap-4 items-center">
                    <a
                      className="inline-flex items-center gap-2 hover:underline text-accent font-semibold"
                      href={`mailto:${PROFILE.email}`}
                    >
                      <Mail className="size-4" /> {PROFILE.email}
                    </a>
                    <Link className="hover:underline text-white" href="/#contact">
                      or use the contact form
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
