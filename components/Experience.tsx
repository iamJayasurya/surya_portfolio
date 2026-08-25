"use client";

import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import ExperienceJob from "./ExperienceJob";

export default function Experience() {
  return (
    <section id="experience" className="px-6 pt-25  sm:pt-30 md:pt-40 bg-[#000]">
      <div className="mx-auto max-w-5xl">
        <Reveal as="p" className="font-mono text-xs uppercase tracking-[0.3em] text-accent2">
           Notable Projects
        </Reveal>
        <Reveal as="h2" delay={0.05} className="mt-3 font-display text-3xl font-semibold sm:text-4xl text-[#1ED760]">
          Experience
        </Reveal> 

        {experience.map((job) => (
          <ExperienceJob key={job.company} job={job} />
        ))}
      </div>
    </section>
  );
}
