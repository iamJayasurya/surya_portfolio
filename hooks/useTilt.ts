"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Attach to a ref: the element tilts in 3D toward the cursor position
 * and eases back flat on mouse leave. Requires the element (or a parent)
 * to have `perspective` set — see the `.tilt-perspective` utility class.
 */
export function useTilt<T extends HTMLElement>(max = 8) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.style.transformStyle = "preserve-3d";

    const rotX = gsap.quickTo(el, "rotationX", { duration: 0.5, ease: "power3" });
    const rotY = gsap.quickTo(el, "rotationY", { duration: 0.5, ease: "power3" });
    const scaleTo = gsap.quickTo(el, "scale", { duration: 0.4, ease: "power3" });

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      rotY(px * max);
      rotX(-py * max);
    };

    const handleEnter = () => scaleTo(1.015);
    const handleLeave = () => {
      rotX(0);
      rotY(0);
      scaleTo(1);
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [max]);

  return ref;
}
