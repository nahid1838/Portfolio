import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Target,
  Rocket,
  Layers,
} from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { projects, getProjectById } from "@/data/projects";
import { site } from "@/data/site";

/**
 * Pre-render all 3 project detail pages at build time.
 * Required with `cacheComponents: true` (see next.config.ts).
 */
export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

/** Page metadata for each project. */
export async function generateMetadata(
  props: PageProps<"/projects/[id]">
): Promise<Metadata> {
  const { id } = await props.params;
  const project = getProjectById(id);
  if (!project) return { title: "Project not found" };

  return {
    title: `${project.title} | ${site.displayName}`,
    description: project.tagline,
  };
}

/**
 * Project detail page: /projects/[id]
 * Shows tech stack, description, live + GitHub links,
 * challenges faced and future plans.
 * Next.js 16: `params` is a Promise and must be awaited.
 */
export default async function ProjectDetailPage(
  props: PageProps<"/projects/[id]">
) {
  const { id } = await props.params;
  const project = getProjectById(id);

  // Unknown project id → 404 (renders not-found.tsx)
  if (!project) notFound();

  return (
    <article className="relative overflow-hidden pt-28 pb-24 sm:pt-36">
      <div className="glow-blob left-[15%] top-[5%] h-[420px] w-[420px] bg-accent-violet/12" />
      <div className="glow-blob right-[5%] top-[35%] h-[380px] w-[380px] bg-accent-cyan/10" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent-cyan"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        {/* Header */}
        <header className="mt-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-gradient">{project.title}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {project.tagline}
          </p>

          {/* Action links */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-faint bg-surface px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
            >
              <GithubIcon size={16} />
              Source Code
            </a>
          </div>
        </header>

        {/* Cover image */}
        <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border-faint">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
        </div>

        {/* Tech stack */}
        <section className="mt-12">
          <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight">
            <Layers size={18} className="text-accent-cyan" />
            Tech Stack
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border-faint bg-surface px-3.5 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent-violet/50 hover:text-accent-violet"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        {/* Description */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">Overview</h2>
          <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
        </section>

        {/* Challenges + Future plans */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <section className="card p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
              <Target size={18} className="text-accent-pink" />
              Challenges Faced
            </h2>
            <ul className="mt-4 space-y-3">
              {project.challenges.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent-pink" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="card p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
              <Rocket size={18} className="text-accent-cyan" />
              Future Plans
            </h2>
            <ul className="mt-4 space-y-3">
              {project.futurePlans.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent-cyan" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Next / previous project nav */}
        <ProjectNav currentId={project.id} />
      </div>
    </article>
  );
}

/** Simple prev/next navigation between projects. */
function ProjectNav({ currentId }: { currentId: string }) {
  const index = projects.findIndex((p) => p.id === currentId);
  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  if (!prev && !next) return null;

  return (
    <nav className="mt-14 flex items-center justify-between gap-4 border-t border-border-faint pt-8">
      {prev ? (
        <Link
          href={`/projects/${prev.id}`}
          className="group inline-flex flex-col gap-1 text-left"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            ← Previous
          </span>
          <span className="font-medium transition-colors group-hover:text-accent-cyan">
            {prev.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`/projects/${next.id}`}
          className="group inline-flex flex-col gap-1 text-right"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            Next →
          </span>
          <span className="font-medium transition-colors group-hover:text-accent-cyan">
            {next.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
