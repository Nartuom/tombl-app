"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { PROFILE } from "@/lib/site";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/80 border-b">
      <div className="mx-auto flex flex-nowrap items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-3 mx-6 md:ml-28" onClick={() => setOpen(false)}>
          <div className="size-8 rounded-xl bg-accent text-white grid place-items-center font-bold">T</div>
          <span className="font-medium font-mono text-accent text-shadow-lg">{PROFILE.name}</span>
        </Link>

        <nav className="hidden md:flex items-center self-end gap-4 text-sm text-accent font-mono text-shadow-lg mr-28">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">{link.label}</Link>
          ))}
          <Button variant="outline" className="flex flex-row gap-2 text-accent shadow-xl/30">
            <a href={PROFILE.cvUrl} target="_blank" rel="noreferrer" className="font-semibold text-black/80 text-shadow-2xl hover:text-white px-4 py-2 h-full w-full">
              <Download className="size-5 text-accent w-full" /> Download CV
            </a>
          </Button>
        </nav>

        <button
          type="button"
          className="md:hidden mr-6 inline-flex items-center justify-center rounded-lg border border-accent p-2 text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="md:hidden flex flex-col gap-1 border-t border-accent bg-black/95 px-6 py-4 text-accent font-mono text-shadow-lg"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-2 py-3 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={PROFILE.cvUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-lg border border-accent px-2 py-3 font-semibold hover:bg-white/5"
            onClick={() => setOpen(false)}
          >
            <Download className="size-4" /> Download CV
          </a>
        </nav>
      )}
    </header>
  );
}

export default SiteHeader;
