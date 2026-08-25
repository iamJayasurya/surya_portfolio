import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  // Smoother, more "premium" feeling defaults for the whole site.
  gsap.defaults({ ease: "power3.out", duration: 0.8 });
  ScrollTrigger.defaults({ toggleActions: "play none none reverse" });
}

export { gsap, ScrollTrigger };
