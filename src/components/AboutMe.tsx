import { Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { about } from "@/data/site";

/**
 * About Me: 5 content blocks from info.txt, personality
 * keyword chips and a quick-facts card.
 */
export default function AboutMe() {
  return (
    <section id="about" className="relative overflow-x-clip py-24 sm:py-32">
      <div className="glow-blob left-[10%] top-1/3 h-[360px] w-[360px] bg-accent-violet/10" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Get to know me" title={about.title} subtitle={about.subtitle} />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:gap-14">
          {/* Text blocks */}
          <div className="space-y-8">
            {about.blocks.map((block, i) => (
              <Reveal key={block.heading} delay={i * 60}>
                <div>
                  <h3 className="flex items-center gap-2 text-xl font-semibold tracking-tight">
                    <span className="h-2 w-2 rounded-full bg-accent-gradient" />
                    {block.heading}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{block.text}</p>
                </div>
              </Reveal>
            ))}

            {/* Personality keywords */}
            <Reveal delay={about.blocks.length * 60}>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <Sparkles size={16} className="text-accent-pink" />
                {about.personality.map((trait) => (
                  <span
                    key={trait}
                    className="rounded-full border border-border-faint bg-surface px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Quick facts card */}
          <Reveal delay={120}>
            <div className="card sticky top-24 h-fit p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-accent-cyan">
                Quick Facts
              </h3>
              <dl className="mt-5 space-y-4">
                {about.quickFacts.map((fact) => (
                  <div key={fact.label} className="border-b border-border-faint pb-4 last:border-0 last:pb-0">
                    <dt className="text-sm text-muted">{fact.label}</dt>
                    <dd className="mt-1 font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
