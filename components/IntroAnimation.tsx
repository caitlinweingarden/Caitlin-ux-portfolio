"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Sparkle from "./Sparkle";

const FONT_CONFIGS = [
  {
    family: "font-cormorant",
    firstWeight: "font-light",
    secondWeight: "font-bold",
    bgColor: "#F5E6E8", // pale-blush
    textColor: "#2A2A2A", // slate-charcoal
    darkBgColor: "#F5E6E8",
    darkTextColor: "#2A2A2A"
  },
  {
    family: "font-dm-sans",
    firstWeight: "font-light",
    secondWeight: "font-bold",
    bgColor: "#B8C5B4", // mist-sage
    textColor: "#1A1A1A",
    darkBgColor: "#B8C5B4",
    darkTextColor: "#1A1A1A"
  },
  {
    family: "font-instrument",
    firstWeight: "font-normal",
    secondWeight: "font-normal",
    bgColor: "#E8D5D8", // lavender-blush
    textColor: "#2A2A2A",
    darkBgColor: "#E8D5D8",
    darkTextColor: "#2A2A2A"
  },
  {
    family: "font-cormorant",
    firstWeight: "font-semibold",
    secondWeight: "font-bold",
    bgColor: "#D9C5A8", // warm-sand
    textColor: "#1A1A1A",
    darkBgColor: "#D9C5A8",
    darkTextColor: "#1A1A1A"
  },
];

// Generate sparkle positions in a radius around center
const generateSparklePositions = (count: number, isMobile: boolean) => {
  const positions = [];
  const radius = isMobile ? 180 : 300;

  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.8;
    const distance = radius * (0.5 + Math.random() * 0.5);
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    positions.push({ x, y });
  }
  return positions;
};

const SPARKLE_COLORS = [
  "#6B5E5A", // mushroom-taupe
  "#B8C5B4", // mist-sage
  "#9B8EA0", // accent-lavender
  "#E8D5D8", // lavender-blush
  "#D9C5A8", // warm-sand
  "#8FA897", // accent-sage
];

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [currentFontIndex, setCurrentFontIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [sparklePositions, setSparklePositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Generate sparkle positions - more sparkles for colorful effect
    const count = isMobile ? 8 : 16;
    setSparklePositions(generateSparklePositions(count, isMobile));
  }, [isMobile]);

  useEffect(() => {
    // Font switching cycle - 1 second per font = 4 seconds total
    const duration = 1000;
    const interval = setInterval(() => {
      setCurrentFontIndex((prev) => {
        const next = prev + 1;
        if (next >= FONT_CONFIGS.length) {
          clearInterval(interval);
          // Start exit animation
          setTimeout(() => {
            setIsExiting(true);
            // Complete after exit animation
            setTimeout(onComplete, 1000);
          }, 200);
          return prev;
        }
        return next;
      });
    }, duration);

    return () => clearInterval(interval);
  }, [isMobile, onComplete]);

  // Allow skipping with Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsExiting(true);
        setTimeout(onComplete, 300);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onComplete]);

  const currentConfig = FONT_CONFIGS[currentFontIndex];

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            backgroundColor: currentConfig.bgColor,
          }}
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          role="status"
          aria-live="polite"
          aria-label="Loading"
        >
          {/* Sparkles container */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="relative">
              {sparklePositions.map((pos, i) => (
                <Sparkle
                  key={i}
                  size={isMobile ? 12 + Math.random() * 12 : 16 + Math.random() * 16}
                  color={SPARKLE_COLORS[i % SPARKLE_COLORS.length]}
                  delay={i * 0.05}
                  duration={1.5 + Math.random() * 1.5}
                  x={pos.x}
                  y={pos.y}
                  className="transform -translate-x-1/2 -translate-y-1/2"
                />
              ))}
            </div>
          </div>

          {/* Animated name */}
          <div className="relative z-10 px-6">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentFontIndex}
                className={`text-center text-7xl leading-none tracking-tight md:text-9xl lg:text-[12rem] ${currentConfig.family}`}
                style={{ color: currentConfig.textColor }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <span className={`${currentConfig.firstWeight} italic`}>
                  Caitlin
                </span>{" "}
                <span className={currentConfig.secondWeight}>
                  Weingarden
                </span>
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Skip hint */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <p className="text-sm font-sans" style={{ color: currentConfig.textColor }}>
              Press ESC to skip
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
