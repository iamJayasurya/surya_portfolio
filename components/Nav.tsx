"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const DESKTOP_QUERY = "(min-width: 768px)"; // matches Tailwind's `md` breakpoint

export default function Nav() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const desktopPanelRef = useRef<HTMLDivElement>(null); // clips the horizontal links row
  const desktopListRef = useRef<HTMLUListElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null); // vertical dropdown
  const progressRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  // mount-in animation + scroll progress
  useGSAP(
    () => {
      gsap.fromTo(
        wrapRef.current,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );

      if (progressRef.current) {
        gsap.set(progressRef.current, { scaleX: 0, transformOrigin: "left" });
        ScrollTrigger.create({
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
          onUpdate: (self) => {
            gsap.set(progressRef.current, { scaleX: self.progress });
          },
        });
      }
    },
    { scope: wrapRef }
  );

  // close the menu if the viewport crosses the mobile/desktop breakpoint
  // while it's open, so it never gets stuck mid-animation in the wrong layout
  useGSAP(() => {
    const mql = window.matchMedia(DESKTOP_QUERY);
    const handleChange = () => setOpen(false);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  // open / close animation — direction depends on viewport
  useGSAP(
    () => {
      const isDesktop = window.matchMedia(DESKTOP_QUERY).matches;

      // container radius softens from pill to rounded rect on desktop expand
      gsap.to(containerRef.current, {
        borderRadius: !open && isDesktop ? 9999 : 20,
        duration: 0.45,
        ease: "power3.out",
      });

      // --- desktop (md+): expand horizontally in the top row ---
      if (desktopPanelRef.current) {
        if (open && isDesktop) {
          gsap.set(desktopPanelRef.current, { display: "flex" });
          gsap.fromTo(
            desktopPanelRef.current,
            { width: 0, opacity: 0 },
            { width: "auto", opacity: 1, duration: 0.45, ease: "power3.out" }
          );
          gsap.fromTo(
            desktopListRef.current?.children ?? [],
            { y: -6, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.3,
              stagger: 0.04,
              delay: 0.15,
              ease: "power2.out",
            }
          );
        } else {
          gsap.to(desktopPanelRef.current, {
            width: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power3.in",
            onComplete: () => {
              gsap.set(desktopPanelRef.current, { display: "none" });
            },
          });
        }
      }

      // --- below md: expand vertically below the top row ---
      if (mobilePanelRef.current) {
        if (open && !isDesktop) {
          gsap.set(mobilePanelRef.current, { display: "flex" });
          gsap.fromTo(
            mobilePanelRef.current,
            { height: 0, opacity: 0 },
            { height: "auto", opacity: 1, duration: 0.45, ease: "power3.out" }
          );
          gsap.fromTo(
            mobilePanelRef.current.querySelectorAll("[data-nav-link]"),
            { y: -8, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.35,
              stagger: 0.04,
              delay: 0.1,
              ease: "power2.out",
            }
          );
        } else {
          gsap.to(mobilePanelRef.current, {
            height: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power3.in",
            onComplete: () => {
              gsap.set(mobilePanelRef.current, { display: "none" });
            },
          });
        }
      }
    },
    { dependencies: [open], scope: wrapRef }
  );

  const handleLinkClick = () => setOpen(false);

  return (
    <div
      ref={wrapRef}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6"
    >
      <div
        ref={containerRef}
        className="flex w-full min-w-0 max-w-[calc(100vw-2rem)]  flex-col overflow-hidden border border-white/10 bg-ink/95 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-300 hover:border-[#1DB954]/90 hover:shadow-[0_0_15px_#1ed76096] sm:w-auto sm:min-w-[320px] sm:max-w-[92vw] sm:"
        style={{ borderRadius: 9999 }}
      >
        {/* Top row: logo, (desktop) links, toggle */}
        <div className="flex items-center gap-4 px-5 py-3">
          <a
            href="#top"
            onClick={handleLinkClick}
            className="focus-ring shrink-0 whitespace-nowrap font-mono text-sm font-semibold text-[#1ED760]"
          >
            JS
            <span className="animate-blink text-accent">_</span>
          </a>

          {/* Desktop horizontal links — hidden until expanded, hidden entirely below md */}
          <div
            ref={desktopPanelRef}
            className="hidden shrink-0 overflow-hidden"
            style={{ width: 0, opacity: 0 }}
          >
            <ul
              ref={desktopListRef}
              className="flex items-center gap-6 whitespace-nowrap pl-2 font-mono text-xs text-muted"
            >
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="group relative py-1 transition-colors hover:text-accent focus-ring"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-text/70 transition-[width] duration-300 ease-out group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="focus-ring ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/95 text-ink transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            {open ? (
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L13 13M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="18"
                height="4"
                viewBox="0 0 18 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2" cy="2" r="2" fill="currentColor" />
                <circle cx="9" cy="2" r="2" fill="currentColor" />
                <circle cx="16" cy="2" r="2" fill="currentColor" />
              </svg>
            )}
          </button>
        </div>

        {/* Vertical dropdown — shown below md, hidden entirely at md+ */}
        <div
          ref={mobilePanelRef}
          className="hidden flex-col overflow-hidden px-2 pb-3 md:!hidden"
          style={{ height: 0, opacity: 0 }}
        >
          <div className="mx-3 mb-2 h-px bg-white/10" />
          <ul className="flex flex-col gap-1 px-2 font-mono text-sm text-muted">
            {links.map((link) => (
              <li key={link.href} data-nav-link>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="group flex items-center justify-between rounded-xl px-3 py-2.5 transition-colors hover:bg-white/5 hover:text-accent focus-ring"
                >
                  {link.label}
                  <span className="text-xs text-muted/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-accent">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
       
        </div>
      </div>
    </div>
  );
}