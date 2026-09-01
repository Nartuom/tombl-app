import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { PROFILE } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="mx-auto flex flex-nowrap justify-center md:justify-between sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/80 border-b p-4">
      <Link href="/" className="flex items-center gap-3 mx-6 md:ml-28">
        <div className="size-8 rounded-xl bg-accent text-white grid place-items-center font-bold">T</div>
        <span className="font-medium font-mono text-accent text-shadow-lg">{PROFILE.name}</span>
      </Link>
      <nav className="hidden md:flex items-center self-end gap-4 text-sm text-accent font-mono text-shadow-lg mr-28">
        <Link href="/services" className="hover:underline">Services</Link>
        <Link href="/work" className="hover:underline">Work</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/#contact" className="hover:underline">Contact</Link>
        <Button variant="outline" className="flex flex-row gap-2 text-accent shadow-xl/30">
          <a href={PROFILE.cvUrl} target="_blank" rel="noreferrer" className="font-semibold text-black/80 text-shadow-2xl hover:text-white px-4 py-2 h-full w-full">
            <Download className="size-5 text-accent w-full" /> Download CV
          </a>
        </Button>
      </nav>
    </header>
  );
}

export default SiteHeader;
