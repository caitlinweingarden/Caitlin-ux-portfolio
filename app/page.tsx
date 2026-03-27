"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// ── Data ──────────────────────────────────────────────────────────────────────

const DISNEY = {
  href:     "/disney",
  title:    "Disney+ Ecosystem",
  tags:     "PRODUCT DESIGN \u2022 STRATEGY",
  imageSrc: "/case_studies%20/Disney%2B/Disney%2B%20Hero%20Image/Tile.png",
};

const SIGNNOW = {
  href:     "/signnow",
  title:    "Audio to Sign Language Translator",
  award:    "1ST PLACE \u2014 HEALTH TRACK \u00b7 UMICH ROSS TECH INNOVATION JAM",
  tags:     "ACCESSIBILITY \u2022 HEALTHCARE",
  imageSrc: "/sign-now/Ready_to_Post_Images/Sign_Now_Hero.jpg",
};

const SPRING = { type: "spring", stiffness: 380, damping: 22 } as const;

// ── Homepage Background (3 layers: gradient + blobs + grain) ──────────────────

function HomepageBackground() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Layer 1 — Base gradient: cream top-left, pale blush bottom-right, pink bloom mid-right */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: [
            "radial-gradient(ellipse 75% 65% at 0% 0%,   #FFFDF9 0%, transparent 70%)",
            "radial-gradient(ellipse 65% 60% at 100% 100%, #FFF5F0 0%, transparent 68%)",
            "radial-gradient(ellipse 48% 44% at 82% 38%, rgba(255,182,193,0.36) 0%, transparent 58%)",
            "linear-gradient(135deg, #FFFDF9 0%, #FFF5F0 100%)",
          ].join(", "),
        }}
      />

      {/* Layer 2 — Blob A: Brand Pink (#FFB6C1), upper-right, 11 s */}
      <div
        className="hp-blob-1"
        style={{
          position:     "absolute",
          width:        "520px",
          height:       "440px",
          top:          "-100px",
          right:        "4%",
          borderRadius: "50%",
          background:   "rgba(255, 182, 193, 0.34)",
          filter:       "blur(100px)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Layer 2 — Blob B: Warm Sand (#FFE0E6), lower-left, 13 s */}
      <div
        className="hp-blob-2"
        style={{
          position:     "absolute",
          width:        "600px",
          height:       "500px",
          bottom:       "-130px",
          left:         "-70px",
          borderRadius: "50%",
          background:   "rgba(255, 224, 230, 0.38)",
          filter:       "blur(110px)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Layer 2 — Blob C: Deep Brown (#2D1B14) low opacity, center, 8 s */}
      <div
        className="hp-blob-3"
        style={{
          position:     "absolute",
          width:        "420px",
          height:       "390px",
          top:          "33%",
          left:         "28%",
          borderRadius: "50%",
          background:   "rgba(45, 27, 20, 0.055)",
          filter:       "blur(90px)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Layer 2 — Blob D: Pale Blush (#FFF5F0), mid-left, 10 s */}
      <div
        className="hp-blob-4"
        style={{
          position:     "absolute",
          width:        "480px",
          height:       "430px",
          top:          "18%",
          left:         "-50px",
          borderRadius: "50%",
          background:   "rgba(255, 245, 240, 0.42)",
          filter:       "blur(95px)",
          mixBlendMode: "soft-light",
        }}
      />

      {/* Layer 3 — Film grain: static fractalNoise SVG, 18% opacity */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position:      "absolute",
          inset:         0,
          width:         "100%",
          height:        "100%",
          opacity:       0.18,
          pointerEvents: "none",
        }}
      >
        <filter id="hp-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hp-grain)" />
      </svg>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  const underline: React.CSSProperties = {
    textDecoration:          "underline",
    textDecorationColor:     "rgba(255,182,193,0.75)",
    textUnderlineOffset:     "5px",
    textDecorationThickness: "1.5px",
  };
  return (
    <section className="pt-16 pb-12 md:pt-20 md:pb-16" aria-label="Introduction">
      <div className="mx-auto w-full max-w-7xl px-8">
        <motion.h1
          className="text-page-text"
          style={{
            fontSize:      "clamp(1.5rem, 3.5vw, 3rem)",
            fontWeight:    400,
            letterSpacing: "-0.03em",
            lineHeight:    1.15,
            maxWidth:      "1100px",
            textShadow:    "0 1px 3px rgba(0,0,0,0.08)",
          }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Hi, I&apos;m{" "}
          <span style={{ fontWeight: 700 }}>Caitlin Weingarden</span>.{" "}
          I&apos;m an{" "}
          <span style={underline}>artist</span>{" "}
          turned{" "}
          <br className="hidden md:block" />
          product designer creating{" "}
          <span style={underline}>accessible</span>{" "}
          experiences.
        </motion.h1>
      </div>
    </section>
  );
}

// ── Case Study Tile (large, top row) ─────────────────────────────────────────

function CaseTile({
  href,
  imageSrc,
  imageAlt,
  award,
  tags,
  title,
  cursorType = "work",
  delay = 0,
}: {
  href:        string;
  imageSrc:    string;
  imageAlt:    string;
  award?:      string;
  tags:        string;
  title:       string;
  cursorType?: string;
  delay?:      number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={href} className="block outline-none" data-cursor={cursorType}>
        <motion.div whileTap={{ scale: 0.97 }} whileHover={{ scale: 0.99 }} transition={SPRING}>
          {/* 16/9 aspect ratio — matches work page, no clipping */}
          <div className="w-full overflow-hidden rounded-3xl" style={{ aspectRatio: "16/9" }}>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover object-center transition-transform duration-500 ease-in-out"
            />
          </div>
          <div
            className="mt-4 rounded-2xl px-5 py-4"
            style={{
              background:           "rgba(255, 253, 249, 0.62)",
              backdropFilter:       "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
            }}
          >
            {award && (
              <p className="mb-1 text-[0.6rem] font-bold uppercase tracking-[0.18em]" style={{ color: "#FFB6C1" }}>
                {award}
              </p>
            )}
            <p className="mb-1 text-[0.6rem] font-bold uppercase tracking-widest text-page-text/35">
              {tags}
            </p>
            <h2
              className="hover-glow text-4xl font-bold text-page-text"
              style={{ letterSpacing: "-0.025em", lineHeight: 1.15 }}
            >
              {title}
            </h2>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
}

// ── About Tile (small, bottom row) ───────────────────────────────────────────

function AboutTile() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Module 3: cursor expands to "HI!! ♡" on About tile */}
      <Link href="/about" className="block outline-none" data-cursor="hi">
        <motion.div whileTap={{ scale: 0.97 }} whileHover={{ scale: 0.99 }} transition={SPRING}>
          <div className="w-full overflow-hidden rounded-3xl" style={{ aspectRatio: "4/3" }}>
            <img
              src="/images/self_image.jpg"
              alt="Caitlin Weingarden"
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out"
              style={{ objectPosition: "70% center" }}
            />
          </div>
          <div
            className="mt-3 rounded-2xl px-3 py-2"
            style={{
              background:           "rgba(255, 253, 249, 0.62)",
              backdropFilter:       "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
            }}
          >
            <p className="mb-1 text-[0.6rem] font-bold uppercase tracking-widest text-page-text/35">
              ABOUT THE DESIGNER
            </p>
            <h2
              className="hover-glow text-base font-bold text-page-text"
              style={{ letterSpacing: "-0.02em", lineHeight: 1.2 }}
            >
              Caitlin Weingarden
            </h2>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
}

function TimeFlipCard() {
  const [flipped, setFlipped] = useState(false);
  const [time,    setTime]    = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "America/Detroit",
          hour:     "numeric",
          minute:   "2-digit",
          second:   "2-digit",
          hour12:   true,
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const faceBase: React.CSSProperties = {
    position:                 "absolute",
    inset:                    0,
    backfaceVisibility:       "hidden",
    WebkitBackfaceVisibility: "hidden" as React.CSSProperties["WebkitBackfaceVisibility"],
    borderRadius:             "16px",
    padding:                  "16px 20px 14px",
    display:                  "flex",
    flexDirection:            "column",
    justifyContent:           "center",
    gap:                      "5px",
    overflow:                 "hidden",
  };

  return (
    <>
      <style>{`
        @keyframes tfc-gradient {
          0%,100% { background-position: 0% 60%; }
          50%      { background-position: 100% 40%; }
        }
        @keyframes tfc-sparkle {
          0%,100% { opacity: 0.55; transform: scale(1)   rotate(0deg);   }
          50%      { opacity: 0.90; transform: scale(1.25) rotate(22deg); }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.015 }}
        style={{ perspective: "900px" }}
        className="cursor-pointer select-none"
        onClick={() => setFlipped((f) => !f)}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        role="button"
        aria-label="Flip to see current time"
      >
        {/* Card inner — 3D flip container */}
        <div
          style={{
            position:       "relative",
            transformStyle: "preserve-3d",
            transition:     "transform 0.58s cubic-bezier(0.22, 1, 0.36, 1)",
            transform:      flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            /* height set by the invisible spacer below */
          }}
        >
          {/* ── FRONT: HCI ──────────────────────────────── */}
          <div
            style={{
              ...faceBase,
              background:     "linear-gradient(135deg, rgba(255,182,193,0.32) 0%, rgba(255,245,240,0.48) 50%, rgba(255,182,193,0.26) 100%)",
              backgroundSize: "220% 220%",
              animation:      "tfc-gradient 5s ease infinite",
              border:         "1px solid rgba(255,182,193,0.50)",
              boxShadow:      "0 2px 16px rgba(255,182,193,0.18)",
            }}
          >
            {/* decorative ✦ — top-right, pulses */}
            <span
              aria-hidden
              style={{
                position:  "absolute",
                top:       "10px",
                right:     "14px",
                fontSize:  "11px",
                color:     "rgba(255,182,193,0.70)",
                animation: "tfc-sparkle 3s ease-in-out infinite",
              }}
            >
              ✦
            </span>

            <p className="text-[0.55rem] font-bold uppercase tracking-widest text-page-text/35">
              Currently
            </p>
            <p
              className="font-bold text-page-text"
              style={{ fontSize: "0.875rem", letterSpacing: "-0.02em", lineHeight: 1.3 }}
            >
              Studying Human Computer Interaction @ U of M
            </p>
            <p className="text-[0.5rem] font-bold uppercase tracking-widest text-page-text/22">
              Tap to flip ↩
            </p>
          </div>

          {/* ── BACK: live clock ────────────────────────── */}
          <div
            style={{
              ...faceBase,
              transform:  "rotateY(180deg)",
              background: "rgba(255,253,249,0.88)",
              border:     "1px solid rgba(255,182,193,0.32)",
              boxShadow:  "0 2px 16px rgba(255,182,193,0.12)",
            }}
          >
            <p className="text-[0.55rem] font-bold uppercase tracking-widest text-page-text/35">
              EST · Current time
            </p>
            <p
              className="font-bold text-page-text"
              style={{
                fontSize:           "1.4rem",
                letterSpacing:      "-0.025em",
                fontVariantNumeric: "tabular-nums",
                lineHeight:         1,
              }}
            >
              {time}
            </p>
          </div>

          {/* ── invisible spacer keeps container tall enough ── */}
          <div
            aria-hidden
            style={{
              visibility:    "hidden",
              pointerEvents: "none",
              padding:       "16px 20px 14px",
              display:       "flex",
              flexDirection: "column",
              gap:           "5px",
            }}
          >
            <p style={{ fontSize: "0.55rem", lineHeight: 1 }}>Currently</p>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.3 }}>
              Studying Human Computer Interaction @ U of M
            </p>
            <p style={{ fontSize: "0.5rem", lineHeight: 1 }}>Tap to flip ↩</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

function AboutInfoBlock() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col justify-between rounded-3xl p-8"
      style={{
        background:           "rgba(255, 253, 249, 0.62)",
        backdropFilter:       "blur(2px)",
        WebkitBackdropFilter: "blur(2px)",
        border:               "1px solid rgba(255,182,193,0.22)",
      }}
    >
      <TimeFlipCard />

      <div className="mt-8 space-y-3">
        {[
          { label: "Focus",       value: "Accessible & inclusive design" },
          { label: "Affiliation", value: "Simplify Campus Ambassador" },
          { label: "Community",   value: "TEDxUofM Member" },
        ].map(({ label, value }) => (
          <div key={label} className="flex items-baseline gap-3">
            <span className="w-20 shrink-0 text-[0.6rem] font-bold uppercase tracking-widest text-page-text/30">
              {label}
            </span>
            <span className="text-xs text-page-text/65">{value}</span>
          </div>
        ))}
      </div>
    </motion.article>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <HomepageBackground />
      <Hero />

      <section className="pb-28 md:pb-36" aria-label="Work and about">
        <div className="mx-auto max-w-7xl px-8">

          {/* Module 3: Top row — 2 large case study tiles dominating the viewport */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <CaseTile
              href={DISNEY.href}
              imageSrc={DISNEY.imageSrc}
              imageAlt={DISNEY.title}
              tags={DISNEY.tags}
              title={DISNEY.title}
              cursorType="streaming"
              delay={0}
            />
            <CaseTile
              href={SIGNNOW.href}
              imageSrc={SIGNNOW.imageSrc}
              imageAlt={SIGNNOW.title}
              award={SIGNNOW.award}
              tags={SIGNNOW.tags}
              title={SIGNNOW.title}
              cursorType="case-study"
              delay={0.07}
            />
          </div>

          {/* Bottom row — About tile + info block */}
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <AboutTile />
            <AboutInfoBlock />
          </div>

        </div>
      </section>
    </>
  );
}
