import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

/**
 * Projects: a responsive grid of project cards.
 * Content comes entirely from src/data/projects.ts.
 */
export default function Projects() {
  return (
    <section id="projects" className="relative overflow-x-clip py-24 sm:py-32">
      <div className="glow-blob left-[0%] top-1/3 h-[400px] w-[400px] bg-accent-pink/10" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
          subtitle="A few things I've built. Each one is a real project deployed live — click a card to see the full breakdown."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 100} className="h-full">
              <div className="h-full">
                <ProjectCard project={project} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
