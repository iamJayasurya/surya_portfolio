"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  id?: string;
  /** px offset the element travels in from */
  y?: number;
  x?: number;
  /** starting scale, 1 = no scale animation */
  scale?: number;
  duration?: number;
  delay?: number;
  /** ScrollTrigger "start" position */
  start?: string;
};

/**
 * Fades + slides an element in once it scrolls into view.
 * Drop-in GSAP/ScrollTrigger replacement for the old
 * `motion.div initial/whileInView` pattern.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className,
  id,
  y = 18,
  x = 0,
  scale = 1,
  duration = 0.7,
  delay = 0,
  start = "top 85%",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.fromTo(
        ref.current,
        { opacity: 0, y, x, scale },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start,
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} id={id} className={className}>
      {children}
    </Tag>
  );
}
