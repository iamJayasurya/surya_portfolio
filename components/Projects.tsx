"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { projectTabs, projects, type ProjectCategory } from "@/lib/data";
import GlowField from "./GlowField";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory>("next");
  const items = projects.filter((p) => p.category === active);

  const tabsRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  // Move the pill under whichever tab is active, measured from real DOM rects
  // so it works regardless of label width.
  const movePill = (id: ProjectCategory, animate: boolean) => {
    const btn = buttonRefs.current.get(id);
    const container = tabsRef.current;
    if (!btn || !container || !pillRef.current) return;
    const btnRect = btn.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const x = btnRect.left - containerRect.left;

    if (animate) {
      gsap.to(pillRef.current, {
        x,
        width: btnRect.width,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.set(pillRef.current, { x, width: btnRect.width });
    }
  };

  useGSAP(
    () => {
      movePill(active, false);
    },
    { scope: tabsRef }
  );

  useGSAP(
    () => {
      if (!gridRef.current) return;
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 18, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.07, ease: "power3.out" }
      );
    },
    { scope: gridRef, dependencies: [active] }
  );

  const handleTabClick = (id: ProjectCategory) => {
    if (id === active) return;
    setActive(id);
    movePill(id, true);
  };

  return (
    <section id="projects" className="relative overflow-hidden px-6 pt-25  sm:pt-30 md:pt-40 bg-[#000]">
      <GlowField />
      <div className="relative mx-auto max-w-5xl">
        <Reveal as="p" className="font-mono text-xs uppercase tracking-[0.3em] text-accent2">
          Selected Work
        </Reveal>
        <Reveal as="h2" delay={0.05} className="mt-3 font-display text-3xl font-semibold sm:text-4xl text-[#1ED760]">
          Projects
        </Reveal>
        <Reveal as="p" delay={0.1} className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          A collection of projects I've built — professional work from my time at Appac Mediatech Pvt. Ltd., alongside personal projects driven by curiosity and continuous learning.
        </Reveal>

        {/* Tabs */}
        <div
          ref={tabsRef}
          className="relative mt-10 flex flex-wrap gap-2 border-b  border-line pb-1"
        >
          <span
            ref={pillRef}
            aria-hidden="true"
            className="pointer-events-none bg-[#1ed760] absolute -bottom-px left-0 h-px "
          />
          {projectTabs.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  if (el) buttonRefs.current.set(tab.id, el);
                }}
                onClick={() => handleTabClick(tab.id)}
                className={`focus-ring relative z-[1] px-4 py-2.5 font-mono text-xs transition-colors ${isActive ? "text-text" : "text-muted hover:text-text"
                  }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div className=" mt-8 grid gap-6 sm:grid-cols-2">
          {items.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
