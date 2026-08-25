"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useTilt } from "@/hooks/useTilt";
import type { skills } from "@/lib/data";

export default function SkillCard({
  group,
}: {
  group: (typeof skills)[number];
}) {
  const tiltRef = useTilt<HTMLDivElement>(4);
  const chipsRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    if (!chipsRef.current) return;

    gsap.fromTo(
      chipsRef.current.children,
      { opacity: 0.5, y: 3 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.02,
        ease: "power2.out",
      }
    );
  };

  return (
    <div
      ref={tiltRef}
      onMouseEnter={handleEnter}
      className="
        glass-panel
        hover:bg-[#1ed760]/10 
        group
        rounded-lg
        p-5
        text-white
        transition-all
        duration-500
        ease-out
      "
    >
      <p
        className="
          font-mono
          text-xs
          text-accent2
          transition-colors
          duration-500
        "
      >
        ./{group.group.toLowerCase().replace(/\s+/g, "-")}
      </p>

      <div
        ref={chipsRef}
        className="mt-3 flex flex-wrap gap-2"
      >
        {group.items.map((item) => (
          <span
            key={item}
            className="
              chip
              rounded-[5px]
              px-2.5
              py-1
              text-xs
              transition-all
              duration-500
               group-hover:border-[#000]/50
              group-hover:bg-white/70
              group-hover:text-black
            "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}