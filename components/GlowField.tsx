export default function GlowField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="animate-float absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/[0.04] blur-[90px]" />
      <div className="animate-floatSlow absolute right-[-60px] top-40 h-96 w-96 rounded-full bg-white/[0.03] blur-[110px]" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.25]"
        viewBox="0 0 800 500"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="glowfield-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F2F2F0" stopOpacity="0" />
            <stop offset="50%" stopColor="#F2F2F0" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F2F2F0" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M-50 380 C 150 300, 250 440, 420 340 S 700 220, 850 300"
          stroke="url(#glowfield-line)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-50 120 C 180 60, 260 180, 460 100 S 700 20, 850 90"
          stroke="url(#glowfield-line)"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
}
