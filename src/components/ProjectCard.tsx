import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import type { Project } from "@/data/projects";

/**
 * One project card in the Projects grid.
 * The whole card links to /projects/<id>; the live + GitHub
 * buttons are separate links that stop propagation.
 */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card group relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-violet/40 hover:shadow-[0_25px_60px_-30px_rgba(139,92,246,0.9)]">
      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight">
          <Link href={`/projects/${project.id}`} className="after:absolute after:inset-0">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.tagline}</p>

        {/* Tech chips */}
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border-faint bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {tech}
            </li>
          ))}
          {project.techStack.length > 4 ? (
            <li className="rounded-full border border-border-faint bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted">
              +{project.techStack.length - 4}
            </li>
          ) : null}
        </ul>

        {/* Actions */}
        <div className="relative z-10 mt-6 flex items-center gap-3">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-accent-gradient px-4 py-2.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.02]"
          >
            Details
            <ArrowUpRight size={16} />
          </Link>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="grid h-10 w-10 place-items-center rounded-lg border border-border-faint text-muted transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
            className="grid h-10 w-10 place-items-center rounded-lg border border-border-faint text-muted transition-colors hover:border-accent-pink/50 hover:text-accent-pink"
          >
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </article>
  );
}
