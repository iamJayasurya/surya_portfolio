import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0B",
        surface: "#111113",
        surface2: "#17171A",
        line: "#232326",
        text: "#F2F2F0",
        muted: "#87878C",
        accent: "#E7E7E4",
        accent2: "#9A9AA0",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(24px, -30px) scale(1.06)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(-30px, 20px) scale(1.04)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        scanline: "scanline 6s linear infinite",
        float: "float 14s ease-in-out infinite",
        floatSlow: "floatSlow 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
