"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";

type CursorType =
  | "default"
  | "work"
  | "award"
  | "impact"
  | "streaming"
  | "case-study"
  | "hi"
  | "beach"
  | "paint"
  | "food";

// Module 4: Case study pills are professional (no hearts/emoji).
// Personal/fun hovers keep hearts and emoji.
const LABELS: Record<Exclude<CursorType, "default">, string> = {
  work:        "VIEW WORK ♡",
  award:       "EXPLORE \u272E",
  // Case study tiles — plain bold text, no hearts
  streaming:   "STREAMING ECOSYSTEM",
  "case-study": "VIEW CASE STUDY",
  impact:      "IMPROVING LIVES ♡",   // SignNow header (mission-driven, keeps ♡)
  // Personal / About page — keep fun labels
  hi:          "HI!! ♡",
  beach:       "Kamakura, Japan \uD83D\uDCCD",  // 📍
  paint:       "Mwah \uD83D\uDC8B",             // 💋
  food:        "I love food \uD83C\uDF66",      // 🍦
};

// Pill width calibrated to label length
const PILL_W: Record<CursorType, number> = {
  default:      8,
  work:         122,
  award:        108,
  impact:       158,
  streaming:    172,
  "case-study": 148,
  hi:           80,
  beach:        164,
  paint:        90,
  food:         116,
};
const PILL_H: Record<CursorType, number> = {
  default:      8,
  work:         28,
  award:        28,
  impact:       28,
  streaming:    28,
  "case-study": 28,
  hi:           28,
  beach:        28,
  paint:        28,
  food:         28,
};
const PILL_R: Record<CursorType, number> = {
  default:      4,
  work:         14,
  award:        14,
  impact:       14,
  streaming:    14,
  "case-study": 14,
  hi:           14,
  beach:        14,
  paint:        14,
  food:         14,
};

export default function CustomCursor() {
  const [mounted,    setMounted]    = useState(false);
  const [isMobile,   setIsMobile]   = useState(false);
  const [cursorType, setCursorType] = useState<CursorType>("default");

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      setIsMobile("ontouchstart" in window || navigator.maxTouchPoints > 0);
    }
  }, []);

  useEffect(() => {
    if (!mounted || isMobile) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const el   = (e.target as HTMLElement).closest("[data-cursor]") as HTMLElement | null;
      const type = el?.dataset.cursor;
      if      (type === "streaming")   setCursorType("streaming");
      else if (type === "case-study")  setCursorType("case-study");
      else if (type === "award")       setCursorType("award");
      else if (type === "impact")      setCursorType("impact");
      else if (type === "hi")          setCursorType("hi");
      else if (type === "beach")       setCursorType("beach");
      else if (type === "paint")       setCursorType("paint");
      else if (type === "food")        setCursorType("food");
      else if (type === "work")        setCursorType("work");
      else                             setCursorType("default");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, [mounted, isMobile, x, y]);

  if (!mounted || isMobile) return null;

  const isExpanded = cursorType !== "default";
  const label      = isExpanded ? LABELS[cursorType] : null;

  // Module 4: case study pills use Deep Brown text for professional clarity
  const isCaseStudy = cursorType === "streaming" || cursorType === "case-study";
  const labelColor  = isCaseStudy ? "#2D1B14" : "#FFB6C1";

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <motion.div
        style={{
          position:       "absolute",
          left:           x,
          top:            y,
          x:              "-50%",
          y:              "-50%",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          overflow:       "hidden",
        }}
        animate={{
          width:        PILL_W[cursorType],
          height:       PILL_H[cursorType],
          borderRadius: PILL_R[cursorType],
          // Idle dot = Brand Pink; expanded pill = Paper Cream
          background:   isExpanded ? "#FFFDF9" : "#FFB6C1",
          border:       isExpanded ? "1px solid rgba(255,182,193,0.65)" : "1px solid transparent",
          boxShadow:    isExpanded ? "0 2px 14px rgba(255,182,193,0.20)" : "none",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        <AnimatePresence>
          {label && (
            <motion.span
              key={label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12, delay: 0.08 }}
              style={{
                fontFamily:    "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize:      "9px",
                fontWeight:    700,
                letterSpacing: "0.10em",
                color:         labelColor,
                whiteSpace:    "nowrap",
                userSelect:    "none",
              }}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
