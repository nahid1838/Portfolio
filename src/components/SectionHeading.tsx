import Reveal from "./Reveal";

type SectionHeadingProps = {
  /** Small mono label above the title */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Centered layout (default true) */
  centered?: boolean;
};

/**
 * Reusable section header: mono eyebrow, gradient title, muted subtitle.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <Reveal className={centered ? "text-center" : ""}>
      {eyebrow ? (
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 max-w-2xl text-muted ${
            centered ? "mx-auto" : ""
          } text-base sm:text-lg`}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
