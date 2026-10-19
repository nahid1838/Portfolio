"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";

/** Section ids tracked by the scroll spy (derived from the nav links). */
const sectionIds = navLinks
  .map((link) => link.href.replace("#", ""))
  .filter((id) => id.length > 0);

/**
 * Sticky, blurred top navigation.
 * - Smooth-scrolls to in-page sections
 * - Adds a solid background once the page is scrolled
 * - Highlights the section currently in view (scroll spy)
 * - Collapses into an animated hamburger menu on mobile
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(navLinks[0].href);

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

  // Scroll spy — highlight the section under a line ~45% down the viewport.
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);

    if (sections.length === 0 || typeof IntersectionObserver === "undefined") {
      return;
    }

    const syncActive = () => {
      const line = window.innerHeight * 0.45;
      let current: HTMLElement | null = null;

      // Sections are stacked, so exactly one contains the line — unless the
      // footer is showing, where the last active link is kept.
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= line && rect.bottom > line) {
          if (!current || rect.top < current.getBoundingClientRect().top) {
            current = section;
          }
        }
      }

      if (current) setActive(`#${current.id}`);
    };

    // Recompute on every intersection change; multiple thresholds keep the
    // updates frequent while scrolling (and while smooth-scrolling after a click).
    const observer = new IntersectionObserver(syncActive, {
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });

    sections.forEach((section) => observer.observe(section));
    syncActive(); // correct link on load, including deep links like /#projects

    return () => observer.disconnect();
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
        <Link
          href="#home"
          onClick={() => setActive("#home")}
          className="group flex items-center gap-3"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-gradient font-bold text-bg transition-transform duration-300 group-hover:scale-105">
            {initials}
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            {site.displayName}
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => setActive(link.href)}
                  className={`relative rounded-lg px-3 py-2 text-sm transition-colors duration-200 hover:bg-white/5 hover:text-text ${
                    isActive ? "bg-white/5 text-text" : "text-muted"
                  }`}
                >
                  {link.label}
                  {/* Active indicator: signature accent gradient underline */}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-0.5 h-px bg-accent-gradient transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
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
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => {
                    setActive(link.href);
                    setOpen(false);
                  }}
                  className={`relative block rounded-lg px-3 py-3 transition-colors hover:bg-white/5 ${
                    isActive ? "bg-white/5 text-accent-cyan" : "text-text"
                  }`}
                >
                  {link.label}
                  {/* Active indicator: signature accent gradient bar */}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-y-2 left-0 w-0.5 rounded-full bg-accent-gradient transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
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
