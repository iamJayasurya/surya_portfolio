"use client";

import { useTilt } from "@/hooks/useTilt";
import type { projects } from "@/lib/data";

export default function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const tiltRef = useTilt<HTMLAnchorElement | HTMLDivElement>(3);
  const hasLink = project.link.length > 0;

  const content = (
    <>
      <div className="relative aspect-[8/5] w-full overflow-hidden border-b border-line">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover opacity-90 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
        {/* {project.placeholder && (
          <span className="absolute right-2.5 top-2.5 rounded-sm border border-line/80 bg-ink/80 px-2 py-0.5 font-mono text-[10px] text-muted backdrop-blur">
            placeholder image
          </span>
        )} */}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display text-lg transition duration-300 group-hover:text-[#1ed760]">
            {project.title}
          </h3>
          {hasLink && (
            <span className="font-mono text-xs text-text opacity-0 transition-opacity group-hover:opacity-100">
              view →
            </span>
          )}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="chip group-hover:border-[#fff] group-hover:text-[#fff]  rounded-[5px] px-2.5 py-1 font-mono text-[11px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  if (hasLink) {
    return (
      <a
        ref={tiltRef as React.RefObject<HTMLAnchorElement>}
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="glass-panel focus-ring group overflow-hidden rounded-lg"
      >
        {content}
      </a>
    );
  }

  return (
    <div
      ref={tiltRef as React.RefObject<HTMLDivElement>}
      className="glass-panel focus-ring group overflow-hidden rounded-lg"
    >
      {content}
    </div>
  );
}