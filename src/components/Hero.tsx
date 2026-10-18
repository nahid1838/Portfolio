import Image from "next/image";
import { Download, MapPin, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, type IconComponent } from "./BrandIcons";
import Reveal from "./Reveal";
import { site, socials } from "@/data/site";

/** Maps social names to their icon components. */
const socialIcons: Record<string, IconComponent> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Email: Mail,
};

/**
 * Hero: designation, short intro, Download Resume button,
 * social icon buttons and a circular photo with a gradient ring.
 */
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Soft accent glows */}
      <div className="glow-blob left-[-10%] top-[-10%] h-[420px] w-[420px] bg-accent-violet/25" />
      <div className="glow-blob right-[-8%] top-[10%] h-[380px] w-[380px] bg-accent-cyan/20" />
      <div className="glow-blob bottom-[-20%] left-[35%] h-[420px] w-[420px] bg-accent-pink/15" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8">
        {/* Copy */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border-faint bg-surface px-4 py-1.5 font-mono text-xs tracking-wide text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent-cyan" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
              </span>
              Available for opportunities
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="text-gradient">{site.displayName}</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-4 font-mono text-base text-accent-cyan sm:text-lg">
              {site.designation}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted mx-auto lg:mx-0">
              {site.tagline}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted">
              <MapPin size={15} className="text-accent-pink" />
              {site.location}
            </p>
          </Reveal>

          {/* Buttons + socials */}
          <Reveal delay={320}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-gradient px-6 py-3 font-semibold text-bg shadow-[0_10px_30px_-10px_rgba(139,92,246,0.9)] transition-transform duration-200 hover:scale-[1.03] sm:w-auto"
              >
                <Download size={18} />
                Download Resume
              </a>

              <a
                href="#projects"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border-faint bg-surface px-6 py-3 font-semibold text-text transition-colors duration-200 hover:border-accent-violet/60 hover:bg-surface-2 sm:w-auto"
              >
                View Projects
              </a>
            </div>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-8 flex items-center gap-3 sm:justify-center lg:justify-start">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Find me on
              </span>
              <div className="flex items-center gap-2">
                {socials.map((social) => {
                  const Icon = socialIcons[social.name] ?? GithubIcon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="grid h-10 w-10 place-items-center rounded-xl border border-border-faint bg-surface text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-cyan/50 hover:text-accent-cyan"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Photo with animated gradient ring */}
        <Reveal delay={120} className="order-1 mx-auto lg:order-2">
          <div className="relative mx-auto h-64 w-64 animate-floaty sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem]">
            {/* Pulsing halo */}
            <span className="absolute inset-0 rounded-full bg-accent-gradient opacity-30 blur-2xl" />

            {/* Rotating gradient ring */}
            <span className="absolute -inset-1 rounded-full bg-accent-gradient animate-spin-slow" />

            {/* Photo */}
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-bg bg-surface">
              <Image
                src={site.photo}
                alt={`${site.name} — profile photo`}
                fill
                priority
                sizes="(max-width: 640px) 16rem, (max-width: 1024px) 20rem, 22rem"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
