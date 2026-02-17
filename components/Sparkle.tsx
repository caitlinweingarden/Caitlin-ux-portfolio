"use client";

import { motion } from "framer-motion";

interface SparkleProps {
  size?: number;
  color?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
}

export default function Sparkle({
  size = 16,
  color = "#6B5E5A",
  delay = 0,
  duration = 2,
  x = 0,
  y = 0,
  className = "",
}: SparkleProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{
        opacity: [0, 1, 0.8, 0],
        scale: [0, 1.2, 1, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`sparkle-gradient-${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color} stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* 4-pointed star shape */}
        <path
          d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
          fill={`url(#sparkle-gradient-${delay})`}
        />
      </svg>
    </motion.div>
  );
}

// Static sparkle for hover states (doesn't animate infinitely)
export function StaticSparkle({
  size = 12,
  color = "#6B5E5A",
  delay = 0,
  x = 0,
  y = 0,
  className = "",
}: SparkleProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{
        opacity: [0, 1, 0.7, 0],
        scale: [0, 1.2, 1, 0.8],
        rotate: [0, 90, 180],
      }}
      transition={{
        duration: 1.5,
        delay,
        ease: "easeOut",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`static-sparkle-${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.9" />
            <stop offset="100%" stopColor={color} stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path
          d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
          fill={`url(#static-sparkle-${delay})`}
        />
      </svg>
    </motion.div>
  );
}
