"use client";

/**
 * Floating circles in corners only. Max 200px diameter, 4% opacity.
 * z-index: -1 so they never overlap content. Respects prefers-reduced-motion.
 */

export default function DecorativeShapes() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex: -1 }}
      aria-hidden
    >
      {/* Top-left corner - max 200px */}
      <div
        className="absolute -left-16 -top-8 h-[180px] w-[180px] max-h-[200px] max-w-[200px] rounded-full bg-accent-lavender opacity-[0.04] motion-safe:animate-float-slow"
        style={{ animationDuration: "50s" }}
      />
      {/* Top-right corner */}
      <div
        className="absolute -right-16 -top-8 h-[200px] w-[200px] rounded-full bg-accent-sage opacity-[0.04] motion-safe:animate-float-slower"
        style={{ animationDuration: "55s" }}
      />
      {/* Bottom-left corner */}
      <div
        className="absolute -left-12 bottom-0 h-[160px] w-[160px] max-h-[200px] max-w-[200px] rounded-full bg-accent-blue opacity-[0.04] motion-safe:animate-float-slow"
        style={{ animationDuration: "48s" }}
      />
      {/* Bottom-right corner */}
      <div
        className="absolute -right-12 bottom-0 h-[200px] w-[200px] rounded-full bg-accent-lavender opacity-[0.04] motion-safe:animate-float-slower"
        style={{ animationDuration: "52s" }}
      />
    </div>
  );
}
