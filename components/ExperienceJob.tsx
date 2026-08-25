"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import type { experience } from "@/lib/data";

export default function ExperienceJob({
  job,
}: {
  job: (typeof experience)[number];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const commitsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              end: "bottom 85%",
              scrub: 0.6,
            },
          }
        );
      }

      if (commitsRef.current) {
        const items = gsap.utils.toArray<HTMLElement>(
          commitsRef.current.querySelectorAll(".commit-item")
        );
        items.forEach((item) => {
          const dot = item.querySelector(".commit-dot");
          const img = item.querySelector(".commit-image");

          const tl = gsap.timeline({
            scrollTrigger: { trigger: item, start: "top 85%" },
          });

          if (dot) {
            tl.fromTo(dot, { scale: 0 }, { scale: 1, duration: 0.4, ease: "power2.out" });
          }
          if (img) {
            tl.fromTo(
              img,
              { clipPath: "inset(0 100% 0 0)" },
              { clipPath: "inset(0 0% 0 0)", duration: 0.6, ease: "power3.out" },
              "-=0.2"
            );
          }
          tl.fromTo(
            item.querySelector(".commit-body"),
            { opacity: 0, x: -16 },
            { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" },
            "-=0.5"
          );
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="mt-10">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-3">
        <div>
          <h3 className="font-display text-xl">{job.title}</h3>
          <p className="font-mono text-sm text-accent">{job.company}</p>
        </div>
        <div className="text-right font-mono text-xs text-muted">
          <p>{job.period}</p>
          <p>{job.place}</p>
        </div>
      </div>

      <div ref={commitsRef} className="relative mt-4 pl-6">
        <div
          ref={lineRef}
          aria-hidden="true"
          className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-accent via-line to-line"
        />
        {job.commits.map((commit) => (
          <div key={commit.project} className="commit-item relative mb-8 last:mb-0">
            <span className="commit-dot absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#1ed760] bg-ink" />
            <div className="grid gap-5 sm:grid-cols-[200px_1fr]">
              <div className="commit-image overflow-hidden rounded-lg border border-line">
                <img
                  src={commit.image}
                  alt={commit.caption}
                  className="aspect-[6/5] w-full object-cover grayscale "
                />
                <p className="border-t border-line bg-surface px-2.5 py-1.5 font-mono text-[10px] text-muted">
                  {commit.caption}
                </p>
              </div>
              <div className="commit-body">
                <p className="font-mono text-xs text-accent2">
                   {commit.message}
                </p>
                <h4 className="mt-1 font-display text-lg">{commit.project}</h4>
                <ul className="mt-2 space-y-2">
                  {commit.details.map((d) => (
                    <li key={d} className="text-sm leading-relaxed text-muted">
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  {commit.stack.map((tech) => (
                    <span
                      key={tech}
                      className="chip hover:border-[#1ed760] rounded-[5px] px-2.5 py-1 font-mono text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
