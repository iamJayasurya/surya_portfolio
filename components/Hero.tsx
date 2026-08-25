"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import PhotonBeam from "./ui/photon-beam";
import { profile } from "@/lib/data";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [profile.role1, profile.role2];

  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const roleTextRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);

  const roleChangingRef = useRef(false);

  const name = profile.name;

  /*
  |--------------------------------------------------------------------------
  | SOCIAL LINKS
  |--------------------------------------------------------------------------
  */

  const socials = [
    {
      name: "GitHub",
      short: "GH",
      href: "#",
    },
    {
      name: "LinkedIn",
      short: "IN",
      href: "#",
    },
    {
      name: "Instagram",
      short: "IG",
      href: "#",
    },
    {
      name: "Dribbble",
      short: "DR",
      href: "#",
    },
  ];

  /*
  |--------------------------------------------------------------------------
  | ROLE CHANGE
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (roles.length <= 1) return;

    const interval = setInterval(() => {
      if (roleChangingRef.current) return;

      roleChangingRef.current = true;

      const nextIndex = (roleIndex + 1) % roles.length;

      const currentElement = roleTextRef.current;

      if (!currentElement) {
        roleChangingRef.current = false;
        return;
      }

      gsap.to(currentElement, {
        opacity: 0,
        y: -20,
        filter: "blur(8px)",
        duration: 0.4,
        ease: "power3.inOut",

        onComplete: () => {
          setRoleIndex(nextIndex);

          requestAnimationFrame(() => {
            const newElement = roleTextRef.current;

            if (!newElement) {
              roleChangingRef.current = false;
              return;
            }

            gsap.fromTo(
              newElement,
              {
                opacity: 0,
                y: 20,
                filter: "blur(8px)",
              },
              {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.6,
                ease: "power3.out",

                onComplete: () => {
                  roleChangingRef.current = false;
                },
              }
            );
          });
        },
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [roleIndex, roles.length]);

  /*
  |--------------------------------------------------------------------------
  | GSAP ENTRANCE + PARALLAX
  |--------------------------------------------------------------------------
  */

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(introRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.7,
      })
        .from(
          roleRef.current,
          {
            opacity: 0,
            y: 35,
            filter: "blur(10px)",
            duration: 0.9,
          },
          "-=0.4"
        )
        .from(
          nameRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.9,
          },
          "-=0.55"
        )
        .from(
          portraitRef.current,
          {
            opacity: 0,
            y: 50,
            scale: 0.94,
            duration: 1.1,
          },
          "-=0.7"
        )
        .from(
          infoRef.current,
          {
            opacity: 0,
            x: -25,
            duration: 0.7,
          },
          "-=0.65"
        )
        .from(
          bottomRef.current,
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
          },
          "-=0.45"
        )
        .from(
          numberRef.current,
          {
            opacity: 0,
            x: 20,
            duration: 0.7,
          },
          "-=0.5"
        );

      /*
      |--------------------------------------------------------------------------
      | Portrait floating animation
      |--------------------------------------------------------------------------
      */

      if (imageRef.current && !reduceMotion) {
        gsap.to(imageRef.current, {
          y: -10,
          duration: 3.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }

      /*
      |--------------------------------------------------------------------------
      | Mouse parallax
      |--------------------------------------------------------------------------
      */

      if (!reduceMotion && sectionRef.current) {
        const imageX = imageRef.current
          ? gsap.quickTo(imageRef.current, "x", {
              duration: 0.8,
              ease: "power3.out",
            })
          : null;

        const imageY = imageRef.current
          ? gsap.quickTo(imageRef.current, "y", {
              duration: 0.8,
              ease: "power3.out",
            })
          : null;

        const roleX = roleRef.current
          ? gsap.quickTo(roleRef.current, "x", {
              duration: 1,
              ease: "power3.out",
            })
          : null;

        const nameX = nameRef.current
          ? gsap.quickTo(nameRef.current, "x", {
              duration: 1.2,
              ease: "power3.out",
            })
          : null;

        const handleMove = (event: MouseEvent) => {
          if (!sectionRef.current) return;

          const rect = sectionRef.current.getBoundingClientRect();

          const px =
            (event.clientX - rect.left) / rect.width - 0.5;

          const py =
            (event.clientY - rect.top) / rect.height - 0.5;

          imageX?.(px * -14);
          imageY?.(py * -8);

          roleX?.(px * 5);
          nameX?.(px * 3);
        };

        sectionRef.current.addEventListener(
          "mousemove",
          handleMove
        );

        return () => {
          sectionRef.current?.removeEventListener(
            "mousemove",
            handleMove
          );
        };
      }
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="top"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-black
        text-white
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 z-99">
       <PhotonBeam
  colorBg="#000000"
  colorLine="#0A2818"
  colorSignal="#1DB954"
  colorSignal2="#1ED760"
  colorSignal3="#0D7A3A"
  lineCount={55}
  spreadHeight={35}
  signalCount={55}
  speedGlobal={0.18}
  trailLength={2}
  bloomStrength={1.2}
  bloomRadius={0.35}
/>
      </div>

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-black/75
        "
      />

      {/* Center glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[45%]
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.035]
          blur-[120px]
        "
      />

      {/* Grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.06]
          [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* =========================================================
          TOP BAR
      ========================================================= */}

      <div
        ref={introRef}
        className="
          relative
          z-30
          mx-auto
          flex
          w-full
          max-w-[1500px]
          items-center
          justify-between
          px-5
          pt-6
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* Left */}
        <div className="flex items-center gap-3">
          <span
            className="
              h-2
              w-2
              rounded-full
              bg-[#1DB954]
            "
          />

          <span
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-white/50
              sm:text-[10px]
            "
          >
            Available for work
          </span>
        </div>

        {/* Right */}
        <div
          className="
            hidden
            items-center
            gap-3
            font-mono
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-white/40
            sm:flex
            sm:text-[10px]
          "
        >
          <span>Coimbatore</span>

          <span className="h-px w-8 bg-white/20" />

          <span>India</span>
        </div>
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-[calc(100vh-80px)]
          w-full
          max-w-[1500px]
          flex-col
          justify-center
          px-5
          pb-8
          pt-10
          sm:px-8
          sm:pb-10
          lg:px-12
          xl:px-16
        "
      >

        <div
          ref={roleRef}
          className="
            absolute
            left-5
            top-[13%]
            z-20
            sm:left-8
            lg:left-12
            xl:left-16
          "
        >
          <div
            className="
              mb-3
              flex
              items-center
              gap-3
            "
          >
            <span className="h-px w-8 bg-white/30 sm:w-12" />

            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/40
              "
            >
              Currently
            </span>
          </div>

          <div
            className="
              overflow-hidden
              text-[clamp(2.8rem,7vw,7rem)]
              font-black
              uppercase
              leading-[0.8]
              tracking-[-0.07em]
            "
          >
            <span
              ref={roleTextRef}
              className="inline-block whitespace-nowrap"
            >
              {roles[roleIndex]}
            </span>
          </div>
        </div>


        <div
          ref={portraitRef}
          className="
            relative
            mx-auto
            flex
            h-[54vh]
            min-h-[420px]
            max-h-[620px]
            w-full
            items-end
            justify-center
            sm:h-[60vh]
            md:h-[66vh]
            lg:h-[70vh]
            lg:max-h-[700px]
          "
        >
          {/* Portrait backdrop */}
          <div
            aria-hidden="true"
            className="
              absolute
              bottom-[4%]
              left-1/2
              h-[72%]
              w-[100%]
              sm:w-[55%]
              max-w-[430px]
              -translate-x-1/2
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.025]
              blur-[1px]
            "
          />

          {/* Inner glow */}
          <div
            aria-hidden="true"
            className="
              absolute
              bottom-[12%]
              left-1/2
              h-[55%]
              w-[38%]
              max-w-[300px]
              -translate-x-1/2
              rounded-full
              bg-white/[0.05]
              blur-[70px]
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              bottom-0
              left-1/2
              h-[85%]
              w-px
              -translate-x-1/2
              bg-gradient-to-t
              from-white/10
              via-[#1DB954]
              to-transparent
            "
          />

          {/* Portrait */}
          <img
            ref={imageRef}
            src="/surya.png"
            width={500}
            height={625}
            alt={`${profile.name} profile portrait`}
            className="
              relative
              z-10
              h-full
              w-auto
              object-contain
              object-bottom
              drop-shadow-[0_20px_40px_#1DB954]
              hover:drop-shadow-[0_30px_60px_#1DB954]
              transition duration-300
              max-sm:w-[280px]
              max-sm:h-[600px]
              sm:max-w-[80%]
              md:max-w-[70%]
               grayscale
              lg:max-w-none
            "
          />
          <div
            className="
              absolute
              bottom-[12%]
              left-[4%]
              z-20
              hidden
              sm:block
            "
          >
            <p
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/30
              "
            >
            Frontend / Full Stack
            </p>

            <p
              className="
                mt-1
                font-mono
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/60
              "
            >
              Developer
            </p>
          </div>

         
        </div>

        <div
          ref={nameRef}
          className="
            relative
            z-30
            -mt-2
            w-full
            sm:text-end
            sm:-mt-6
            md:-mt-8
            lg:-mt-12
          "
        >
          <h1
            className="
              select-none
              whitespace-nowrap
              text-[clamp(3.3rem,6vw,6rem)]
              font-black
              uppercase
              leading-[0.75]
              tracking-[-0.085em]
              text-white
            "
          >
            {name}
          </h1>
        </div>

        <div
          ref={infoRef}
          className="
            relative
            z-30
            mt-8
            flex
            w-full
            flex-col
            gap-8
            sm:mt-10
            sm:flex-row
            sm:items-end
            sm:justify-end
            lg:mt-12
          "
        >
          {/* Description */}
          <div className="max-w-[500px]">
          

            <p
              className="
                text-sm
                leading-6
                text-white/50
                sm:text-[15px]
              "
            >
              Results-driven{" "}
              <span className="text-[#1ed760]">
                {roles[roleIndex]} developer
              </span>{" "}
              with 2y 4m of experience shipping 25+ production
              web applications.
            </p>
          </div>

         
        </div>
        </div>

       

      {/* =========================================================
          DECORATIVE CORNERS
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-6
          left-5
          h-8
          w-8
          border-b
          border-l
          border-white/10
          sm:left-8
          lg:left-12
          xl:left-16
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-5
          top-6
          h-8
          w-8
          border-r
          border-t
          border-white/10
          sm:right-8
          lg:right-12
          xl:right-16
        "
      />
    </section>
  );
}