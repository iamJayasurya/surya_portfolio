"use client";

import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {

  return (
    <section id="contact" className="px-6 py-10  sm:py-15 md:pt-20 bg-[#000]" >
      <div className="mx-auto max-w-5xl">
        <Reveal as="p" className="font-mono text-xs uppercase tracking-[0.3em] text-accent2">
          Contact
        </Reveal>
        <Reveal
          as="h2"
          delay={0.05}
          className="mt-3 font-display text-3xl font-semibold sm:text-5xl text-[#1ED760]"
        >
          Let&apos;s ship
          <br />
          <span className="text-gradient ">something together.</span>
        </Reveal>

        <Reveal as="div" delay={0.15} className="mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="btn-ghost rounded-sm px-6 py-3  text-sm text-text focus-ring rounded-[8px] transition duration-300 hover:border-[#1ed760]/75 hover:bg-[#1ed760]/10"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="btn-ghost rounded-sm px-6 py-3  text-sm text-text focus-ring rounded-[8px] transition duration-300 hover:border-[#1ed760]/75 hover:bg-[#1ed760]/10"
          >
            {profile.phone}
          </a>
          <a
            href={`https://${profile.github}`}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost rounded-sm px-6 py-3  text-sm text-text focus-ring rounded-[8px] transition duration-300 hover:border-[#1ed760]/75 hover:bg-[#1ed760]/10"
          >
            {profile.github}
          </a>
        </Reveal>

        <p className="mt-16 border-t border-line py-6 font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name} · built with Next.js
        </p>
      </div>
    </section>
  );
}
