import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, CircleCheck } from "lucide-react";
import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";
import { Card, CardContent } from "@/app/components/ui/card";
import { Reveal } from "@/app/components/ui/reveal";
import { PROFILE, NOTABLE_CLIENTS } from "@/lib/site";

const HIGHLIGHTS = [
  "Tech agnostic",
  "Accessibility/WCAG‑aware builds",
  "Great communicator",
  "Observant problem solver",
  "Thinks 'outside the box'",
  "Always friendly and approachable",
];

export const metadata: Metadata = {
  title: "About",
  description:
    "Tom Burton-Lawl is a full-stack software engineer based in Weston-super-Mare, working with businesses across Somerset, Bristol, and remotely UK-wide.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About · Tom Burton-Lawl",
    description:
      "Full-stack software engineer based in Weston-super-Mare, working with businesses across Somerset, Bristol, and remotely UK-wide.",
    url: "https://tombl.co.uk/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen text-slate-900">
      <SiteHeader />
      <main className="w-full bg-black/95">
        <section className="mx-6 md:mx-28 py-12 md:py-20 max-w-3xl">
          <Reveal>
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">About</h1>
              <p className="mt-2 inline-flex items-center gap-2 text-white">
                <MapPin className="size-4" /> {PROFILE.location}
              </p>
              <p className="mt-6 text-white leading-relaxed">
                I&apos;m Tom — a dad, curious maker, and space nerd by the sea in Weston-super-Mare.
                I&apos;m the friendly, conscientious type who takes things apart to understand them
                and puts them back together tidier. Off-screen you&apos;ll find me fly-fishing at
                dawn, skating like I&apos;m 15 again, or making chainmaille and useful little wooden
                things. I love weird, textured music, deep conversations about how minds and systems
                work, and designing for people who aren&apos;t always listened to.
              </p>
              <p className="mt-4 text-white leading-relaxed">
                I&apos;m ADHD-powered in the best ways, endlessly curious, and happiest when
                I&apos;m learning and building something that makes someone&apos;s day easier.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="mx-6 md:mx-28 pb-12 max-w-3xl">
          <Reveal>
            <Card>
              <CardContent>
                <h2 className="text-lg font-semibold text-accent">How I work</h2>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {HIGHLIGHTS.map((h) => (
                    <div key={h} className="flex items-center gap-2">
                      <CircleCheck className="size-4 shrink-0" />
                      <span className="text-sm text-white">{h}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </section>

        <section className="mx-6 md:mx-28 pb-12 max-w-3xl">
          <Reveal delay={0.05}>
            <Card>
              <CardContent>
                <h2 className="text-lg font-semibold text-accent">Where I work</h2>
                <p className="mt-2 text-sm text-white leading-relaxed">
                  Based in Weston-super-Mare, I work with small businesses and teams across{" "}
                  {PROFILE.areaServed}. Most engagements are run remotely with regular calls and
                  written updates, so location is rarely a blocker — but I&apos;m always happy to
                  meet in person for clients closer to home in Somerset and the wider Bristol area.
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </section>

        <section className="mx-6 md:mx-28 pb-16 md:pb-24 max-w-3xl">
          <Reveal delay={0.1}>
            <Card>
              <CardContent>
                <h2 className="text-lg font-semibold text-accent">Who I&apos;ve built for</h2>
                <p className="mt-2 text-sm text-white leading-relaxed">
                  Across employed and freelance work, I&apos;ve contributed to accessible,
                  high-traffic sites for organisations including:
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {NOTABLE_CLIENTS.map((client) => (
                    <span
                      key={client}
                      className="inline-flex items-center rounded-full border border-accent text-accent font-semibold px-2 py-0.5 text-sm leading-tight bg-gray-900"
                    >
                      {client}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-white/80">
                  See the full write-ups on the{" "}
                  <Link href="/work" className="text-accent hover:underline">Work</Link> page, or my full
                  history on my{" "}
                  <a href={PROFILE.cvUrl} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                    CV
                  </a>.
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
