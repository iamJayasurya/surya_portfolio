"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { profile } from "@/lib/data";
import { useMagnetic } from "@/hooks/useMagnetic";

const items = [
  { label: "gh", href: `https://${profile.github}`, name: "GitHub" },
  { label: "in", href: "#", name: "LinkedIn" },
  { label: "X", href: "#", name: "X / Twitter" },
  { label: "@", href: `mailto:${profile.email}`, name: "Email" },
];

function SocialIcon({ item }: { item: (typeof items)[number] }) {
  const ref = useMagnetic<HTMLAnchorElement>(0.35);
  return (
    <a
      ref={ref}
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={item.name}
      title={item.name}
      className="glass-panel focus-ring flex h-9 w-9 items-center justify-center rounded-full font-mono text-[11px] text-muted transition-colors hover:text-text"
    >
      {item.label}
    </a>
  );
}

export default function SocialRail() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.6, delay: 0.4, ease: "power3.out" }
      );
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-4 sm:right-8 lg:flex"
    >
      <span className="h-14 w-px bg-gradient-to-b from-transparent to-line" />
      {items.map((item) => (
        <SocialIcon key={item.name} item={item} />
      ))}
      <span className="h-14 w-px bg-gradient-to-t from-transparent to-line" />
    </div>
  );
}
