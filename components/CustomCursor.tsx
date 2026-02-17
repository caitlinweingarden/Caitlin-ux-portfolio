"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Raw motion values updated directly from mousemove
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Spring-smoothed values for the trailing effect
  const springX = useSpring(rawX, { stiffness: 300, damping: 30, mass: 0.5 });
  const springY = useSpring(rawY, { stiffness: 300, damping: 30, mass: 0.5 });

  useEffect(() => {
    setIsMounted(true);

    if (typeof window !== "undefined") {
      setIsMobile("ontouchstart" in window || navigator.maxTouchPoints > 0);
    }

    const handleMouseMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      setClickPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [rawX, rawY]);

  // Don't render until mounted (prevents hydration mismatch) or on touch devices
  if (!isMounted || isMobile) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-40">
      {/* Heart cursor with spring-based smooth trailing */}
      <motion.div
        className="absolute"
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: isClicking ? 1.3 : [1, 1.1, 1],
        }}
        transition={{
          scale: {
            duration: isClicking ? 0.2 : 2,
            repeat: isClicking ? 0 : Infinity,
            ease: "easeInOut",
          },
        }}
      >
        {/* SVG Heart — 20px, pale-blush fill / mushroom-taupe stroke */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            fill="#E8D5D8"
            className="dark:fill-[#9B8EA0]"
            opacity="0.9"
          />
          <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            stroke="#6B5E5A"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.6"
            className="dark:stroke-[#B8C5B4]"
          />
        </svg>
      </motion.div>

      {/* Click ripple — appears at actual mouse position, not spring-lagged position */}
      {isClicking && (
        <motion.div
          className="absolute rounded-full border-2 border-pale-blush dark:border-accent-lavender"
          style={{
            left: clickPos.x,
            top: clickPos.y,
            x: "-50%",
            y: "-50%",
            width: 20,
            height: 20,
          }}
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
    </div>
  );
}
