import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";
import { Card, CardContent } from "@/app/components/ui/card";
import { Container } from "@/app/components/ui/container";
import { Reveal } from "@/app/components/ui/reveal";
import { SERVICES } from "@/lib/services";
import { PROFILE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, SEO optimisation, and technical consultancy for small businesses and teams — bespoke, accessible, and tech-agnostic.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services · Tom Burton-Lawl",
    description:
      "Web development, SEO optimisation, and technical consultancy for small businesses and teams.",
    url: "https://tombl.co.uk/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen text-slate-900">
      <SiteHeader />
      <main className="w-full bg-black/95">
        <section className="py-12 md:py-20">
          <Container size="6xl">
            <Reveal>
              <div>
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Services</h1>
                <p className="mt-4 max-w-2xl text-white leading-relaxed">
                  Bespoke web development, SEO optimisation, and technical consultancy — tech-agnostic,
                  accessibility-first, and based in {PROFILE.areaServed}.
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="pb-16 md:pb-24">
          <Container size="6xl" className="grid gap-6 md:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.05} className="h-full">
                <Card className="flex flex-col h-full">
                  <CardContent className="flex flex-col h-full">
                    <h2 className="text-xl font-semibold text-accent text-shadow-lg">{service.title}</h2>
                    <p className="mt-2 text-sm text-white leading-relaxed flex-1">{service.shortDescription}</p>
                    {service.price && (
                      <p className="mt-4 text-sm font-semibold text-accent">{service.price}</p>
                    )}
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-accent font-semibold hover:underline"
                    >
                      Learn more <ArrowRight className="size-4" />
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
