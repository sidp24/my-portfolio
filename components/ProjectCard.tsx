import Image from "next/image";
import type { Project } from "@/content/projects";
import { asset } from "@/lib/asset";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card">
      {project.image ? (
        <div className="relative aspect-[16/9] border-b border-border">
          <Image
            src={asset(project.image)}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div
          className="relative flex aspect-[16/9] items-end overflow-hidden border-b border-border bg-[radial-gradient(120%_120%_at_0%_0%,rgba(91,140,255,0.14),transparent_55%)]"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
          <span className="relative m-5 font-mono text-xs lowercase tracking-widest text-muted-2">
            {project.slug}
          </span>
        </div>
      )}

      <div className="flex grow flex-col p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-medium">{project.title}</h3>
          <span className="shrink-0 font-mono text-xs text-muted-2">
            {project.tags.join(" · ")}
          </span>
        </div>

        <p className="mt-3 grow text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border px-2 py-1 font-mono text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        {(project.links.live || project.links.repo) && (
          <div className="mt-4 flex gap-4">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent transition-opacity duration-150 hover:opacity-80"
              >
                Live ↗
              </a>
            )}
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent transition-opacity duration-150 hover:opacity-80"
              >
                GitHub ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
