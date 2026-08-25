"use client";

import { education } from "@/lib/data";
import Reveal from "./Reveal";
import RevealGroup from "./RevealGroup";

export default function Education() {
  return (
    <section id="education" className="px-6 pt-25  sm:pt-30 md:pt-40 bg-[#000]">
      <div className="mx-auto max-w-5xl">
        <Reveal as="p" className="font-mono text-xs uppercase tracking-[0.3em] text-accent2">
          Readme.edu
        </Reveal>
        <Reveal as="h2" delay={0.05} className="mt-3 font-display text-3xl font-semibold sm:text-4xl text-[#1ED760]">
          Education
        </Reveal>

        <RevealGroup as="div" className="mt-8 space-y-4" stagger={0.1} y={14}>
          {education.map((e) => (
            <div
              key={e.program}
              className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line py-4 transition-colors hover:border-[#1ed760]/40"
            >
              <div>
                <h3 className="font-display text-lg">{e.program}</h3>
                <p className="font-mono text-sm text-muted">{e.school}</p>
              </div>
              <p className="font-mono text-xs text-accent">{e.period}</p>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
