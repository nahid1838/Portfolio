import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

/** Rendered when a /projects/[id] URL doesn't match any project. */
export default function ProjectNotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 pt-28">
      <div className="glow-blob left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 bg-accent-violet/15" />

      <div className="card mx-auto max-w-md p-10 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-border-faint bg-surface-2 text-accent-pink">
          <SearchX size={26} />
        </span>
        <h1 className="mt-6 text-2xl font-bold tracking-tight">
          Project not found
        </h1>
        <p className="mt-3 text-muted">
          The project you&apos;re looking for doesn&apos;t exist or may have been
          renamed.
        </p>
        <Link
          href="/#projects"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
        >
          <ArrowLeft size={16} />
          Back to all projects
        </Link>
      </div>
    </section>
  );
}
