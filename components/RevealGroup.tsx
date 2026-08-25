"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

type RevealGroupProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  y?: number;
  stagger?: number;
  duration?: number;
  start?: string;
  /** re-run the animation when this changes (e.g. a filter tab) */
  deps?: unknown[];
};

/**
 * Staggers the direct children of the wrapped element into view.
 * GSAP replacement for repeating `motion.div` entries with `delay: i * n`.
 */
export default function RevealGroup({
  children,
  as: Tag = "div",
  className,
  y = 18,
  stagger = 0.08,
  duration = 0.6,
  start = "top 85%",
  deps = [],
}: RevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const items = gsap.utils.toArray<HTMLElement>(ref.current.children);
      if (!items.length) return;

      gsap.fromTo(
        items,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start,
          },
        }
      );
    },
    { scope: ref, dependencies: deps }
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
