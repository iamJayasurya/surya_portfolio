"use client";

import { skills } from "@/lib/data";
import Reveal from "./Reveal";
import RevealGroup from "./RevealGroup";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="px-6 pt-25  sm:pt-30 md:pt-40 bg-[#000]">
      <div className="mx-auto max-w-5xl">
        <Reveal as="p" className="font-mono text-xs uppercase tracking-[0.3em] text-accent2">
          Stack directory
        </Reveal>
        <Reveal as="h2" delay={0.05} className="mt-3 font-display text-3xl font-semibold sm:text-4xl text-[#1ED760]">
          Skills
        </Reveal>

        <RevealGroup
          as="div"
          className="tilt-perspective mt-10 grid gap-4 sm:grid-cols-2"
          stagger={0.08}
        >
          {skills.map((group) => (
            <SkillCard key={group.group} group={group} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
