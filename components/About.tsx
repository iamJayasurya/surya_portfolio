"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { SplitText } from "gsap/SplitText";
import { profile } from "@/lib/data";

const stats = [
  {
    value: 2,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    value: 25,
    suffix: "+",
    label: "Completed Projects",
  },
  {
    value: 12,
    suffix: "+",
    label: "Built with Next.js",
  },
  {
    value: 3,
    suffix: "",
    label: "SaaS platforms",
  },
];

const socials = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M5.2 8.4H2.4V21h2.8V8.4ZM3.8 3A1.7 1.7 0 1 0 3.8 6.4 1.7 1.7 0 0 0 3.8 3ZM21.6 13.8c0-3.8-2-5.8-5-5.8-2.4 0-3.4 1.3-4 2.2V8.4H9.8V21h2.8v-6.2c0-1.6.3-3.2 2.3-3.2 2 0 2 1.8 2 3.3V21h2.8v-7.2Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Behance",
    href: "https://behance.net/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M8.9 11.1c1.1-.5 1.8-1.4 1.8-2.7 0-2.1-1.7-3.2-4.2-3.2H2v13h4.8c2.9 0 4.7-1.4 4.7-3.8 0-1.7-.9-2.9-2.6-3.3ZM4.8 7.4h1.5c1 0 1.6.4 1.6 1.2 0 .9-.6 1.3-1.7 1.3H4.8V7.4Zm1.7 8.4H4.8v-3.5h1.7c1.3 0 2 .6 2 1.7s-.7 1.8-2 1.8ZM17 8.2c-3.2 0-5.2 2.6-5.2 5.2 0 3 2.2 5.1 5.4 5.1 2.2 0 3.9-.9 4.7-2.8l-2.4-1c-.4 1-1.2 1.5-2.3 1.5-1.4 0-2.4-.9-2.5-2.3h7.4c.1-.3.1-.7.1-1 0-2.6-1.8-4.7-5.2-4.7Zm-2.3 3.8c.2-1.1.9-1.8 2.2-1.8 1.2 0 2 .7 2.1 1.8h-4.3ZM15.1 6h4V7h-4V6Z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 .8a11.2 11.2 0 0 0-3.5 21.8c.6.1.8-.3.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.1.1 1.2 1.7.9 1.6 2.6 1.1 3.2.8.1-.7.4-1.1.7-1.4-2.5-.3-5.1-1.3-5.1-5.6 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3.1 1.1a10.8 10.8 0 0 1 5.6 0c2.1-1.4 3.1-1.1 3.1-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.3-5.1 5.6.4.3.7 1 .7 2v2.9c0 .3.2.7.8.6A11.2 11.2 0 0 0 12 .8Z" />
      </svg>
    ),
  },
];

/* Lines rendered inside the terminal panel — a "whoami"-style readout
   that stands in for the portrait, in the site's own mono/terminal voice.
   Each line carries its own syntax-style color, like a themed shell. */
const terminalLines = [
  { cmd: "whoami", out: profile.name || "Jayasurya", color: "text-text" },
  { cmd: "role", out: "Full Stack Web Developer", color: "text-sky-400" },
  {
    cmd: "location",
    out: profile.location || "Coimbatore, India",
    color: "text-amber-400",
  },
  {
    cmd: "stack",
    out: "Next.js · TypeScript · Node",
    color: "text-fuchsia-400",
  },
  { cmd: "status", out: "Available for work", color: "text-emerald-400" },
];

/* =========================================================
   Counter Component
========================================================= */

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const counterRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!counterRef.current) return;

    const counter = { value: 0 };

    gsap.to(counter, {
      value,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: counterRef.current,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        if (!counterRef.current) return;
        counterRef.current.textContent = `${Math.floor(counter.value)}${suffix}`;
      },
    });
  });

  return (
    <span ref={counterRef}>
      0
      {suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const statsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  const terminalRef = useRef<HTMLDivElement>(null);
  const terminalLinesRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!paragraphRef.current) return;

      const split = new SplitText(paragraphRef.current, {
        type: "lines",
        linesClass: "overflow-hidden",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.7,
      })
        .from(
          split.lines,
          {
            opacity: 0,
            y: "100%",
            duration: 0.65,
            stagger: 0.08,
          },
          "-=0.35"
        )
        .from(
          statsRef.current ? gsap.utils.toArray(statsRef.current.children) : [],
          {
            opacity: 0,
            y: 25,
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.3"
        )
        .from(
          contactRef.current,
          { opacity: 0, y: 20, duration: 0.6 },
          "-=0.3"
        )
        .from(
          socialRef.current,
          { opacity: 0, y: 20, duration: 0.6 },
          "-=0.35"
        )
        .from(
          terminalRef.current,
          { opacity: 0, y: 30, scale: 0.97, duration: 0.7 },
          "-=0.65"
        )
        .from(
          terminalLinesRef.current
            ? gsap.utils.toArray(terminalLinesRef.current.children)
            : [],
          {
            opacity: 0,
            x: -10,
            duration: 0.4,
            stagger: 0.12,
          },
          "-=0.3"
        );

      return () => {
        split.revert();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#000]
        px-6
        py-20
        md:py-25
        text-text
        sm:px-8
        lg:px-12
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[20%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-accent/[0.035]
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              <span className="text-muted">~/</span>about
            </p>

            <h2
              ref={headingRef}
              className="mt-3 font-display text-3xl font-semibold sm:text-4xl text-[#1ED760]"
            >
              About Me
            </h2>

            <p
              ref={paragraphRef}
              className="
                my-5
                max-w-2xl
                text-base
                leading-[1.7]
                text-muted
                sm:text-lg
                lg:text-lg
              "
            >
              {profile.summary ||
                "I'm a Full Stack Web Developer passionate about building fast, scalable and meaningful digital experiences. I work across modern frontend and backend technologies to create clean, responsive and high-performance web applications."} <br /> <br />
            
            </p>

            {/* STATS */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 gap-x-8 gap-y-10 sm:gap-10"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="
                      font-display
                      text-5xl
                      font-semibold
                      leading-none
                      tracking-[-0.04em]
                      text-accent
                      sm:text-6xl
                    "
                  >
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>

                  <p className="mt-2 max-w-[160px] text-sm font-medium leading-snug text-text">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CONTACT */}
            <div
              ref={contactRef}
              className="
                mt-14
                grid
                gap-8
                border-t
                border-line
                pt-8
                sm:grid-cols-2
              "
            >
              <div>
                <p className="text-xs font-semibold text-text">Location</p>
                <p className="mt-1 text-sm text-muted">
                  {profile.location || "Coimbatore, India"}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-text">Email</p>
                <a
                  href="mailto:j.jayasurya127@gmail.com"
                  className="
                    mt-1
                    inline-block
                    break-all
                    text-sm
                    text-muted
                    transition-colors
                    hover:text-accent
                  "
                >
                  j.jayasurya127@gmail.com
                </a>
              </div>
            </div>

            {/* SOCIAL
            <div
              ref={socialRef}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-line
                    text-text
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-accent
                    hover:bg-accent
                    hover:text-ink
                  "
                >
                  {social.icon}
                </a>
              ))}
            </div> */}

            {/* CTA */}
            {/* <a
              href="#experience"
              className="
                group
                mt-9
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-accent
                px-7
                py-3.5
                font-display
                text-sm
                font-medium
                uppercase
                tracking-wide
                text-ink
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_35px_rgba(190,255,80,0.16)]
              "
            >
              My Story
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a> */}
          </div>

        
          <div className="lg:pt-2">
            <div
              ref={terminalRef}
              className="
                sticky
                top-28
                overflow-hidden
                rounded-[18px]
                border
                border-accent/25
                bg-gradient-to-b
                from-[#0d120a]
                to-[#0a0a0a]
                shadow-[0_20px_60px_rgba(0,0,0,0.55),0_0_50px_-15px_rgba(190,255,80,0.18)]
              "
            >
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-2 font-mono text-[11px] text-muted">
                  about.sh
                </span>
              </div>

              {/* Body */}
              <div
                ref={terminalLinesRef}
                className="space-y-4 px-5 py-6 font-mono text-sm"
              >
                {terminalLines.map((line) => (
                  <div key={line.cmd}>
                    <p className="text-muted">
                      <span className="text-accent">❯</span> {line.cmd}
                    </p>
                    <p className={`mt-1 flex items-center gap-2 pl-4 ${line.color}`}>
                      {line.cmd === "status" && (
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                      )}
                      {line.out}
                    </p>
                  </div>
                ))}
                   

                <p className="py-3 text-muted">
                  <span className="text-accent">❯</span>{" "}
                   <a
            href={`/files/surya-resume.pdf`}
            target="_blank"
            type="file"
            rel="noreferrer"
            className="ml-1 text-sm text-text focus-ring  border rounded-[5px] px-4 py-2  border-[#fff]/70 transition duration-300 hover:text-[#1ed760]"
          >
            My Resume
          </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}