import { Mail, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site, socials } from "@/data/site";

/** Contact methods rendered as clickable cards. */
const contactCards = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    accent: "text-accent-cyan",
    hover: "hover:border-accent-cyan/50",
  },
  {
    label: "Phone",
    value: site.phones.join(" / "),
    href: `tel:${site.phones[0].replace(/\D/g, "")}`,
    icon: Phone,
    accent: "text-accent-violet",
    hover: "hover:border-accent-violet/50",
  },
  {
    label: "WhatsApp",
    value: site.whatsapp,
    href: site.whatsappLink,
    icon: MessageCircle,
    accent: "text-accent-pink",
    hover: "hover:border-accent-pink/50",
  },
];

/**
 * Contact: no form, no backend — just clickable cards for
 * email, phone and WhatsApp, plus social links.
 */
export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="glow-blob left-1/2 top-1/4 h-[420px] w-[420px] -translate-x-1/2 bg-accent-violet/12" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Let's connect"
          title="Contact"
          subtitle="I'm open to internships, junior developer roles and freelance projects. Drop me a message anytime."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.label} delay={i * 90} className="h-full">
                <a
                  href={card.href}
                  target={card.label === "Email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={`card group flex h-full flex-col justify-between gap-6 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-25px_rgba(139,92,246,0.8)] ${card.hover}`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-xl border border-border-faint bg-surface-2 ${card.accent}`}
                    >
                      <Icon size={20} />
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text"
                    />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted">
                      {card.label}
                    </p>
                    <p className="mt-1.5 break-words font-medium">{card.value}</p>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>

        {/* Social row */}
        <Reveal delay={300}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border-faint bg-surface px-5 py-2.5 text-sm text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-cyan/50 hover:text-accent-cyan"
              >
                {social.name}
                <ArrowUpRight size={15} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
