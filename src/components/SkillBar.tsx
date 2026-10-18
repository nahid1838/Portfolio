"use client";

import { useEffect, useRef, useState } from "react";
import type { Skill } from "@/data/skills";

/**
 * A single skill row with an animated progress bar.
 * The bar fills from 0 to its level the first time it
 * scrolls into view.
 */
export default function SkillBar({ skill, delay = 0 }: { skill: Skill; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If IntersectionObserver is unavailable, fill the bar immediately.
    // Deferred so it isn't a synchronous setState in the effect body.
    if (typeof IntersectionObserver === "undefined") {
      queueMicrotask(() => setStarted(true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="font-mono text-xs text-muted">{skill.level}%</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-accent-gradient transition-[width] duration-1000 ease-out"
          style={{
            width: started ? `${skill.level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}
