import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, type IconComponent } from "./BrandIcons";
import CurrentYear from "./CurrentYear";
import { site, socials } from "@/data/site";

const socialIcons: Record<string, IconComponent> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Email: Mail,
};

/** Site footer: name, quick links, socials and copyright. */
export default function Footer() {
  return (
    <footer className="border-t border-border-faint bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-lg font-bold tracking-tight">
              {site.name}{" "}
              <span className="text-gradient">· {site.designation}</span>
            </p>
            <p className="mt-1 text-sm text-muted">{site.location}</p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
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

        {/* Divider */}
        <div className="mt-10 border-t border-border-faint pt-6">
          <p className="flex flex-col items-center justify-center gap-1 text-center text-sm text-muted sm:flex-row">
            <span>© <CurrentYear /> {site.name}. All rights reserved.</span>
            <span className="inline-flex items-center gap-1">
              Built with <Heart size={13} className="text-accent-pink" /> using Next.js &amp; Tailwind CSS
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
