"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// High-contrast white noise — tactile corduroy/film texture
const GRAIN_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
  <filter id='n'>
    <feTurbulence type='fractalNoise' baseFrequency='0.92' numOctaves='4' stitchTiles='stitch'/>
    <feColorMatrix type='saturate' values='0'/>
    <feComponentTransfer>
      <feFuncR type='discrete' tableValues='0 0 1 1'/>
      <feFuncG type='discrete' tableValues='0 0 1 1'/>
      <feFuncB type='discrete' tableValues='0 0 1 1'/>
    </feComponentTransfer>
  </filter>
  <rect width='200' height='200' filter='url(%23n)' opacity='0.50'/>
</svg>`;
const GRAIN_URL = `url("data:image/svg+xml,${encodeURIComponent(GRAIN_SVG)}")`;

// Phase timeline:
//   0 ms  — pink + grain (phase 1)
// 800 ms  — name pops in (phase 2)
// 1500 ms — wipe starts (phase 3 = exit)

export default function SplashScreen() {
  const [mounted, setMounted] = useState(false);
  const [showName, setShowName] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t1 = setTimeout(() => setShowName(true),  800);
    const t2 = setTimeout(() => setExiting(true),   1500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Don't render on server — avoids hydration mismatch
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          aria-hidden="true"
          role="presentation"
          initial={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.78, ease: [0.87, 0, 0.13, 1] }}
          style={{
            position:      "fixed",
            inset:         0,
            zIndex:        9999,
            background:    "#FFB6C1",
            display:       "flex",
            alignItems:    "center",
            justifyContent:"center",
            pointerEvents: "none",
            overflow:      "hidden",
          }}
        >
          {/* Grain jitter layer */}
          <div
            className="splash-grain"
            style={{
              position:         "absolute",
              inset:            0,
              backgroundImage:  GRAIN_URL,
              backgroundSize:   "200px 200px",
              backgroundRepeat: "repeat",
              mixBlendMode:     "overlay",
              opacity:          0.55,
            }}
          />

          {/* Phase 2: name pop — framer-motion spring entrance */}
          <AnimatePresence>
            {showName && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1,   opacity: 1 }}
                transition={{ type: "spring", stiffness: 380, damping: 22 }}
                style={{ position: "relative", zIndex: 1 }}
              >
                <span
                  style={{
                    fontFamily:    "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontSize:      "clamp(1.4rem, 4vw, 2rem)",
                    fontWeight:    700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color:         "#2D1B14",
                    whiteSpace:    "nowrap",
                    userSelect:    "none",
                  }}
                >
                  Caitlin Weingarden
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
