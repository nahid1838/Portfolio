import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SkillBar from "./SkillBar";
import { techIcons } from "./TechIcons";
import { skillCategories, technologies } from "@/data/skills";

/** Total number of individual skills across every category. */
const skillCount = skillCategories.reduce(
  (total, category) => total + category.skills.length,
  0
);

/**
 * Skills: two-column layout.
 * Left — expertise areas as skill names, percentage labels and
 *        animated progress bars, grouped by category.
 * Right — compact grid of dark technology cards, each with its
 *        official logo (TechIcons.tsx) and name.
 */
export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="glow-blob right-[5%] top-1/4 h-[380px] w-[380px] bg-accent-cyan/10" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills"
          subtitle="A categorized view of the technologies I use to build web applications, from interface to database."
        />

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left column — expertise progress bars */}
          <div>
            <Reveal>
              <div className="flex items-center justify-between gap-3">
                <h3 className="flex items-center gap-2 text-xl font-semibold tracking-tight">
                  <span className="h-2 w-2 rounded-full bg-accent-gradient" />
                  My Expertise
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  {skillCount} skills
                </span>
              </div>
            </Reveal>

            <div className="mt-7 space-y-7">
              {skillCategories.map((category, ci) => (
                <Reveal key={category.title} delay={ci * 80}>
                  <div className="border-b border-border-faint pb-7 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-accent-cyan">
                        {category.title}
                      </h4>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                        {category.skills.length} skills
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-muted">{category.note}</p>

                    <div className="mt-4 space-y-4">
                      {category.skills.map((skill, si) => (
                        <SkillBar key={skill.name} skill={skill} delay={si * 70} />
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right column — technology logo cards */}
          <div>
            <Reveal delay={80}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="flex items-center gap-2 text-xl font-semibold tracking-tight">
                  <span className="h-2 w-2 rounded-full bg-accent-gradient" />
                  Tech Stack
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  {technologies.length} technologies
                </span>
              </div>
            </Reveal>

            <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-2">
              {technologies.map((technology, i) => {
                const Icon = techIcons[technology.icon];
                return (
                  <Reveal
                    as="li"
                    key={technology.name}
                    delay={Math.min(i * 25, 300)}
                  >
                    <div className="card group flex h-full flex-col items-center justify-center gap-2.5 px-3 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent-violet/40 hover:shadow-[0_20px_50px_-25px_rgba(139,92,246,0.8)] sm:px-4">
                      <Icon
                        size={30}
                        aria-hidden="true"
                        className="text-muted transition-colors duration-300 group-hover:text-accent-cyan"
                      />
                      <span className="text-xs font-medium leading-tight text-text/90 transition-colors duration-300 group-hover:text-text">
                        {technology.name}
                      </span>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
