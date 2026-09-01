import Link from "next/link";
import { PROFILE } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-5 md:py-10 text-sm backdrop-blur supports-[backdrop-filter]:bg-black/80 border-b text-white">
      <div className="mx-auto flex flex-col items-center gap-3 px-6 text-center">
        <nav className="flex flex-wrap items-center justify-center gap-4 text-accent font-mono">
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/work" className="hover:underline">Work</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/#contact" className="hover:underline">Contact</Link>
        </nav>
        <p>© {year} {PROFILE.name}. Built with React + Tailwind.</p>
      </div>
    </footer>
  );
}

export default SiteFooter;
