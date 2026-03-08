"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

// ── Brand tokens ──────────────────────────────────────────────────────────────
const BG     = "#FFF5F5";
const FRAME  = "#FFF9F0";
const ACCENT = "#F4ACB7";
const NAV_H  = 68;

// Vintage Polaroid: inner glow + 4-layer diffuse shadow
const POLAROID_SHADOW = [
  "inset 0 0 10px rgba(255,255,255,0.65)",
  "0 1px 2px  rgba(61,31,15,0.10)",
  "0 4px 10px rgba(61,31,15,0.16)",
  "0 12px 32px rgba(61,31,15,0.20)",
  "0 28px 64px rgba(61,31,15,0.11)",
].join(", ");

// Strawberry glow for tagline legibility
const TAGLINE_GLOW = [
  "0 0 14px rgba(244,172,183,0.90)",
  "0 0 32px rgba(244,172,183,0.50)",
].join(", ");

// ── Types ─────────────────────────────────────────────────────────────────────
type VideoItem = { id: number; kind: "video"; src: string; rot: number };
type ImageItem = { id: number; kind: "image"; src: string; rot: number };

// ── Assets ────────────────────────────────────────────────────────────────────
const VIDEOS: VideoItem[] = [
  { id: 2, kind: "video", src: "/Art/playground_2.mp4", rot: -4 },
  { id: 3, kind: "video", src: "/Art/playground_3.mp4", rot:  3 },
  { id: 4, kind: "video", src: "/Art/playground_4.mp4", rot: -2 },
  { id: 5, kind: "video", src: "/Art/playground_5.mp4", rot:  5 },
];

const IMAGES: ImageItem[] = [
  { id: 6,  kind: "image", src: "/Art/playground_6.jpg",  rot:  4 },
  { id: 7,  kind: "image", src: "/Art/playground_7.jpg",  rot: -6 },
  { id: 8,  kind: "image", src: "/Art/playground_8.jpg",  rot:  2 },
  { id: 9,  kind: "image", src: "/Art/playground_9.jpg",  rot: -3 },
  { id: 10, kind: "image", src: "/Art/playground_10.jpg", rot:  5 },
  { id: 11, kind: "image", src: "/Art/playground_11.jpg", rot: -4 },
  { id: 12, kind: "image", src: "/Art/playground_12.jpg", rot:  3 },
];

// ── Audio pill — "Shhh" / "Listen" toggle ────────────────────────────────────
function AudioPill({
  isActive,
  mobile,
  onToggle,
}: {
  isActive: boolean;
  mobile: boolean;
  onToggle: (e: React.MouseEvent | React.PointerEvent) => void;
}) {
  return (
    <motion.button
      type="button"
      onPointerDown={(e) => e.stopPropagation()}
      onClick={onToggle}
      whileTap={{ scale: 0.88 }}
      style={{
        position:            "absolute",
        bottom:              mobile ? 8 : 5,
        right:               mobile ? 8 : 6,
        background:          isActive ? "rgba(244,172,183,0.90)" : "rgba(61,31,15,0.65)",
        color:               isActive ? "#3D1F0F" : "#FFF5F5",
        border:              "none",
        borderRadius:        "20px",
        padding:             mobile ? "6px 14px" : "3px 11px",
        fontSize:            "11px",
        fontFamily:          "'Garamond','Georgia','Palatino Linotype',serif",
        fontStyle:           "italic",
        letterSpacing:       "0.02em",
        cursor:              "pointer",
        zIndex:              5,
        minHeight:           mobile ? 34 : 24,
        display:             "flex",
        alignItems:          "center",
        gap:                 "4px",
        backdropFilter:      "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        boxShadow:           isActive
          ? "0 0 10px rgba(244,172,183,0.55), 0 1px 3px rgba(0,0,0,0.12)"
          : "0 1px 4px rgba(0,0,0,0.28)",
        transition:          "background 0.25s, color 0.25s, box-shadow 0.25s",
      }}
    >
      {/* Note icon wiggles + pops when unmuted */}
      <motion.span
        key={isActive ? "on" : "off"}
        animate={
          isActive
            ? { rotate: [-6, 7, -4, 4, 0], scale: [1, 1.25, 1, 1.1, 1] }
            : { rotate: 0, scale: 1 }
        }
        transition={{ duration: 0.45 }}
        style={{ display: "inline-block", lineHeight: 1 }}
      >
        {isActive ? "♪" : "♩"}
      </motion.span>
      {isActive ? "Listen" : "Shhh"}
    </motion.button>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function PlaygroundPage() {
  const pageRef   = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  const [mounted,       setMounted]       = useState(false);
  const [activeAudioId, setActiveAudioId] = useState<number | null>(null);
  const [zMap,          setZMap]          = useState<Record<number, number>>({});
  const [zTop,          setZTop]          = useState(20);
  const [isMobile,      setIsMobile]      = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    setMounted(true);
    return () => window.removeEventListener("resize", check);
  }, []);

  const bringToFront = (id: number) => {
    setZTop((prev) => {
      const next = prev + 1;
      setZMap((m) => ({ ...m, [id]: next }));
      return next;
    });
  };

  // Smart audio: mute every video, then unmute the chosen one
  const toggleAudio = (id: number, e: React.MouseEvent | React.PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();

    Object.values(videoRefs.current).forEach((v) => { if (v) v.muted = true; });

    if (activeAudioId === id) {
      setActiveAudioId(null);
    } else {
      setActiveAudioId(id);
      const vid = videoRefs.current[id];
      if (vid) {
        vid.muted = false;
        if (vid.paused) vid.play().catch(() => {});
      }
    }
  };

  // Pre-mount placeholder — avoids hydration flash
  if (!mounted) {
    return <div style={{ minHeight: "100vh", background: BG }} />;
  }

  // ── Shared tagline ─────────────────────────────────────────────────────────
  const tagline = (
    <p
      style={{
        fontFamily:   "'Garamond','Georgia','Palatino Linotype',serif",
        color:         ACCENT,
        fontSize:      isMobile ? "0.875rem" : "clamp(0.8rem, 1.1vw, 0.95rem)",
        fontStyle:     "italic",
        letterSpacing: "0.02em",
        lineHeight:    1.75,
        maxWidth:      "70ch",
        overflowWrap:  "break-word",
        margin:        "0 auto",
        textShadow:    TAGLINE_GLOW,
      }}
    >
      Whether it&rsquo;s through baking, video editing, or painting—I just love
      the act of creating. Stay a while.
    </p>
  );

  // ── Mobile: sticky tagline + single-col videos + 2-col image grid ──────────
  if (isMobile) {
    return (
      <div style={{ background: BG, minHeight: "100vh", overflowX: "clip" }}>
        {/* Grain — fixed so it covers the full scroll area */}
        <div
          className="hero-grain"
          style={{ position: "fixed", zIndex: 1, pointerEvents: "none" }}
        />

        {/* Sticky tagline */}
        <div style={{
          position:   "sticky",
          top:        NAV_H,
          zIndex:     30,
          background: BG,
          padding:    "20px 20px 14px",
          textAlign:  "center",
        }}>
          {tagline}
        </div>

        {/* Videos: single column */}
        <div style={{
          display:       "flex",
          flexDirection: "column",
          gap:           "20px",
          padding:       "12px 16px 20px",
          position:      "relative",
          zIndex:        5,
        }}>
          {VIDEOS.map((item) => (
            <div
              key={item.id}
              style={{
                background:   FRAME,
                padding:      "8px 8px 32px",
                borderRadius: "4px",
                boxShadow:    POLAROID_SHADOW,
                position:     "relative",
              }}
            >
              <video
                ref={(el) => { videoRefs.current[item.id] = el; }}
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                style={{ display: "block", width: "100%" }}
              />
              <AudioPill
                isActive={activeAudioId === item.id}
                mobile
                onToggle={(e) => toggleAudio(item.id, e)}
              />
            </div>
          ))}
        </div>

        {/* Images: 2-column grid */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: "1fr 1fr",
          gap:                 "12px",
          padding:             "0 16px 64px",
          position:            "relative",
          zIndex:              5,
        }}>
          {IMAGES.map((item) => (
            <div
              key={item.id}
              style={{
                background:   FRAME,
                padding:      "6px 6px 26px",
                borderRadius: "4px",
                boxShadow:    POLAROID_SHADOW,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt=""
                style={{ display: "block", width: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── Desktop: scrollable grid, items draggable ─────────────────────────────
  // overflowX: "clip" keeps sticky tagline working without clipping sticky context
  return (
    <div
      ref={pageRef}
      style={{
        background:  BG,
        minHeight:   "100vh",
        overflowX:   "clip",
        paddingTop:  NAV_H,
      }}
    >
      {/* Grain */}
      <div
        className="hero-grain"
        style={{ position: "fixed", zIndex: 1, pointerEvents: "none" }}
      />

      {/* ── Sticky tagline ──────────────────────────────────────────────────
          top: 0 because paddingTop on parent already accounts for the nav.   */}
      <div style={{
        position:   "sticky",
        top:        0,
        zIndex:     30,
        background: BG,
        padding:    "24px 0 18px",
        textAlign:  "center",
      }}>
        {tagline}
      </div>

      {/* ── Videos: 4 columns × 300 px ─────────────────────────────────── */}
      <div style={{
        display:             "grid",
        gridTemplateColumns: "repeat(4, 300px)",
        gap:                 "32px",
        justifyContent:      "center",
        padding:             "28px 48px 48px",
        position:            "relative",
        zIndex:              5,
      }}>
        {VIDEOS.map((item, i) => (
          <motion.div
            key={item.id}
            drag={mounted}
            dragMomentum={false}
            dragElastic={0}
            whileDrag={{ scale: 1.05 }}
            onDragStart={() => bringToFront(item.id)}
            onMouseDown={() => bringToFront(item.id)}
            initial={{ rotate: item.rot, opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: i * 0.07 }}
            style={{
              background:   FRAME,
              padding:      "8px 8px 30px",
              borderRadius: "4px",
              boxShadow:    POLAROID_SHADOW,
              cursor:       "grab",
              userSelect:   "none",
              touchAction:  "none",
              position:     "relative",
              zIndex:       zMap[item.id] ?? 20 + i,
              width:        "300px",
            }}
          >
            <video
              ref={(el) => { videoRefs.current[item.id] = el; }}
              src={item.src}
              autoPlay
              muted
              loop
              playsInline
              style={{ display: "block", width: "100%" }}
            />
            <AudioPill
              isActive={activeAudioId === item.id}
              mobile={false}
              onToggle={(e) => toggleAudio(item.id, e)}
            />
          </motion.div>
        ))}
      </div>

      {/* ── Images: 3 columns × 200 px, gap-16 (64 px) ────────────────── */}
      <div style={{
        display:             "grid",
        gridTemplateColumns: "repeat(3, 200px)",
        gap:                 "64px",
        justifyContent:      "center",
        padding:             "0 48px 96px",
        position:            "relative",
        zIndex:              5,
      }}>
        {IMAGES.map((item, i) => (
          <motion.div
            key={item.id}
            drag={mounted}
            dragMomentum={false}
            dragElastic={0}
            whileDrag={{ scale: 1.05 }}
            onDragStart={() => bringToFront(item.id)}
            onMouseDown={() => bringToFront(item.id)}
            initial={{ rotate: item.rot, opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: (VIDEOS.length + i) * 0.07 }}
            style={{
              background:   FRAME,
              padding:      "6px 6px 26px",
              borderRadius: "4px",
              boxShadow:    POLAROID_SHADOW,
              cursor:       "grab",
              userSelect:   "none",
              touchAction:  "none",
              position:     "relative",
              zIndex:       zMap[item.id] ?? 20 + VIDEOS.length + i,
              width:        "200px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt=""
              draggable={false}
              style={{ display: "block", width: "100%", pointerEvents: "none" }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
