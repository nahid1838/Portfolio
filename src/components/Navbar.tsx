"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";

/**
 * Sticky, blurred top navigation.
 * - Smooth-scrolls to in-page sections
 * - Adds a solid background once the page is scrolled
 * - Collapses into an animated hamburger menu on mobile
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for the background + shadow.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the menu if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const initials = site.displayName.slice(0, 1).toUpperCase();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border-faint bg-bg/80 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(139,92,246,0.6)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / monogram */}
        <Link href="#home" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-gradient font-bold text-bg transition-transform duration-300 group-hover:scale-105">
            {initials}
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            {site.displayName}
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-muted transition-colors duration-200 hover:bg-white/5 hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-full bg-accent-gradient px-4 py-2 text-sm font-semibold text-bg transition-transform duration-200 hover:scale-105"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border-faint text-text transition-colors hover:bg-white/5 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 border-t border-border-faint bg-bg/95 px-4 pb-6 pt-4 backdrop-blur-xl">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-text transition-colors hover:bg-white/5"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-accent-gradient px-4 py-3 text-center font-semibold text-bg"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
