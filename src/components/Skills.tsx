import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SkillBar from "./SkillBar";
import { skillCategories } from "@/data/skills";

/**
 * Skills: categorized cards, each listing skills with an
 * animated progress bar that fills on scroll into view.
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {skillCategories.map((category, ci) => (
            <Reveal key={category.title} delay={ci * 80} as="article" className="card group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-violet/40 hover:shadow-[0_20px_50px_-25px_rgba(139,92,246,0.8)] sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold tracking-tight">{category.title}</h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  {category.skills.length} skills
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{category.note}</p>

              <div className="mt-6 space-y-4">
                {category.skills.map((skill, si) => (
                  <SkillBar key={skill.name} skill={skill} delay={si * 70} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
