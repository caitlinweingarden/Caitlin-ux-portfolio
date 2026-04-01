"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// ── Typewriter intro ───────────────────────────────────────────────────────────

const INTRO_SEGMENTS = [
  { text: "I\u2019m ",             bold: false, underline: false, nowrap: false },
  { text: "Caitlin Weingarden",    bold: true,  underline: false, nowrap: true  },
  { text: ", an ",                 bold: false, underline: false, nowrap: false },
  { text: "artist",                bold: false, underline: true,  nowrap: false },
  { text: " turned ",              bold: false, underline: false, nowrap: false },
  { text: "product designer",      bold: false, underline: true,  nowrap: true  },
  { text: ".",                     bold: false, underline: false, nowrap: false },
] as const;

const TOTAL_CHARS = INTRO_SEGMENTS.reduce((n, s) => n + s.text.length, 0);

function TypewriterIntro() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= TOTAL_CHARS) return;
    const t = setTimeout(() => setCount(c => c + 1), 36);
    return () => clearTimeout(t);
  }, [count]);

  const underlineStyle = {
    textDecoration:          "underline",
    textDecorationColor:     "rgba(255,182,193,0.75)",
    textUnderlineOffset:     "4px",
    textDecorationThickness: "1.5px",
  } as const;

  let rendered = 0;
  const nodes = INTRO_SEGMENTS.map((seg, i) => {
    const start   = rendered;
    rendered     += seg.text.length;
    const visible = Math.min(Math.max(count - start, 0), seg.text.length);
    if (visible === 0) return null;
    const text = seg.text.slice(0, visible);
    return (
      <span
        key={i}
        style={{
          fontWeight:  seg.bold   ? 700      : undefined,
          whiteSpace:  seg.nowrap ? "nowrap" : undefined,
          ...(seg.underline ? underlineStyle : {}),
        }}
      >
        {text}
      </span>
    );
  });

  return (
    <p
      className="mb-1 text-page-text"
      style={{
        fontSize:      "clamp(1.55rem, 4vw, 2.75rem)",
        fontWeight:    400,
        letterSpacing: "-0.02em",
        lineHeight:    1.3,
        textShadow:    "0 1px 3px rgba(0,0,0,0.06)",
        textWrap:      "balance",
        maxWidth:      "38rem",
      }}
    >
      {nodes}
      {count < TOTAL_CHARS && (
        <span
          aria-hidden
          style={{
            display:             "inline-block",
            width:               "2px",
            height:              "1em",
            background:          "rgba(255,182,193,0.7)",
            marginLeft:          "2px",
            verticalAlign:       "text-bottom",
            animation:           "tw-blink 0.75s step-end infinite",
          }}
        />
      )}
    </p>
  );
}

// ── Cycling facts ─────────────────────────────────────────────────────────────

const FACTS = [
  "I love AI tools.",
  "I\u2019m learning 3 languages.",
  "I\u2019m always planning my next trip.",
  "I paint, collage, and create.",
  "I\u2019m a chocolate chip cookie fanatic.",
];

// Delay start until the first typewriter line finishes
const FACT_DELAY_MS = TOTAL_CHARS * 36 + 400;

function CyclingFact() {
  const [started, setStarted] = useState(false);
  const [factIdx, setFactIdx] = useState(0);
  const [chars,   setChars]   = useState(0);
  const [phase,   setPhase]   = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), FACT_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const fact = FACTS[factIdx];

  useEffect(() => {
    if (!started) return;
    let t: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (chars < fact.length) {
        t = setTimeout(() => setChars(c => c + 1), 36);
      } else {
        t = setTimeout(() => setPhase("deleting"), 1800);
      }
    } else {
      if (chars > 0) {
        t = setTimeout(() => setChars(c => c - 1), 22);
      } else {
        t = setTimeout(() => {
          setFactIdx(i => (i + 1) % FACTS.length);
          setPhase("typing");
        }, 350);
      }
    }
    return () => clearTimeout(t);
  }, [started, phase, chars, fact.length]);

  const cursor = (
    <span
      aria-hidden
      style={{
        display:       "inline-block",
        width:         "2px",
        height:        "1em",
        background:    "rgba(255,182,193,0.7)",
        marginLeft:    "2px",
        verticalAlign: "text-bottom",
        animation:     "tw-blink 0.75s step-end infinite",
      }}
    />
  );

  return (
    <p
      className="text-page-text"
      style={{
        fontSize:      "clamp(1.55rem, 4vw, 2.75rem)",
        fontWeight:    400,
        fontStyle:     "italic",
        letterSpacing: "-0.02em",
        lineHeight:    1.3,
        textShadow:    "0 1px 3px rgba(0,0,0,0.06)",
        textWrap:      "balance",
        maxWidth:      "38rem",
        minHeight:     "1.4em",
      }}
    >
      {started ? (
        <>{fact.slice(0, chars)}{cursor}</>
      ) : null}
    </p>
  );
}

// ── Project data ───────────────────────────────────────────────────────────────

const DISNEY = {
  href:        "/disney",
  title:       "Disney+ Ecosystem",
  tags:        "Cross-Platform Strategy \u00b7 Personalization \u00b7 Interaction Design",
  description: "Rethinking content discovery and bridging streaming with Disney Parks through mood-based browsing and personalized rewards.",
  imageSrc:    "/case_studies%20/Disney%2B/Disney%2B%20Hero%20Image/Tile.png",
  award:       null as string | null,
  year:        "2025",
};

const ASL = {
  href:        "/signnow",
  title:       "Audio to Sign Language Translator",
  tags:        "Accessibility Design \u00b7 AI Integration \u00b7 Healthcare UX \u00b7 Prototyping",
  description: "Breaking communication barriers with real-time ASL translation for healthcare environments.",
  imageSrc:    "/sign-now/Tile.png",
  award:       "🥇 1ST PLACE \u00b7 HEALTH TRACK \u00b7 UMICH ROSS TECH INNOVATION JAM" as string | null,
  year:        "2025",
};

const MICHIGAN = {
  href:        "/michigan-creamery",
  title:       "Michigan Creamery",
  tags:        "UX Research \u00b7 Design Systems \u00b7 E-Commerce",
  description: "Redesigning a family-owned Ann Arbor ice cream shop's digital presence to match the premium experience customers love in store.",
  imageSrc:    "/michigan-creamery/Hero%20Image.png?v=4",
  award:       null as string | null,
  year:        "2026",
};

const NEXJE = {
  title:       "Intro",
  tags:        "Zero-to-One Design \u00b7 Networking \u00b7 Mobile UX",
  description: "Never lose a contact again. A networking app designed to make collecting and remembering contacts at events effortless.",
  imageSrc:    "/nexje/Hero%20Image.png?v=4",
  award:       null as string | null,
  year:        "2026",
};

const SPRING = { type: "spring", stiffness: 300, damping: 24 } as const;

// ── Background ────────────────────────────────────────────────────────────────

function WorkBackground() {
  return (
    <div
      aria-hidden
      style={{
        position:      "fixed",
        inset:         0,
        zIndex:        -1,
        pointerEvents: "none",
        overflow:      "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset:    0,
          background: [
            "radial-gradient(ellipse 70% 70% at 0% 0%,   rgba(255,182,193,0.38) 0%, transparent 65%)",
            "radial-gradient(ellipse 55% 60% at 5% 65%,  rgba(255,224,230,0.32) 0%, transparent 60%)",
            "radial-gradient(ellipse 65% 80% at 100% 50%, #FFFDF9 0%, transparent 70%)",
            "linear-gradient(105deg, #FFF5F0 0%, #FFFDF9 55%, #FFFFFF 100%)",
          ].join(", "),
        }}
      />
      <div className="hp-blob-1" style={{ position: "absolute", width: "520px", height: "440px", top: "-100px", left: "-60px", borderRadius: "50%", background: "rgba(255,182,193,0.34)", filter: "blur(100px)", mixBlendMode: "multiply" }} />
      <div className="hp-blob-2" style={{ position: "absolute", width: "600px", height: "500px", bottom: "-130px", left: "-70px", borderRadius: "50%", background: "rgba(255,224,230,0.38)", filter: "blur(110px)", mixBlendMode: "multiply" }} />
      <div className="hp-blob-3" style={{ position: "absolute", width: "420px", height: "390px", top: "33%", left: "10%", borderRadius: "50%", background: "rgba(45,27,20,0.055)", filter: "blur(90px)", mixBlendMode: "multiply" }} />
      <div className="hp-blob-4" style={{ position: "absolute", width: "480px", height: "430px", top: "18%", left: "-50px", borderRadius: "50%", background: "rgba(255,245,240,0.42)", filter: "blur(95px)", mixBlendMode: "soft-light" }} />
      <svg xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18, pointerEvents: "none" }}>
        <filter id="wk-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#wk-grain)" />
      </svg>
    </div>
  );
}

// ── Project card ───────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  delay = 0,
}: {
  project: typeof DISNEY;
  delay?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={project.href} className="group block outline-none">
        <motion.div
          whileTap={{ scale: 0.985 }}
          whileHover={{ scale: 0.998 }}
          transition={SPRING}
        >
          {/* Image */}
          <div className="w-full rounded-xl overflow-hidden">
            <img
              src={project.imageSrc}
              alt={project.title}
              className="w-full h-auto block"
            />
          </div>

          {/* Text */}
          <div className="pt-4 text-left">
            {project.award && (
              <p
                className="mb-1.5 text-[0.6rem] font-bold uppercase leading-relaxed tracking-[0.08em] text-pretty"
                style={{ color: "#FFB6C1" }}
              >
                {project.award}
              </p>
            )}
            <p className="mb-1.5 text-[0.6rem] font-semibold uppercase leading-relaxed tracking-[0.08em] text-page-text/45 text-pretty">
              {project.tags} <span className="text-page-text/55">&middot; {project.year}</span>
            </p>
            <h2
              className="hover-glow font-bold text-page-text text-xl md:text-2xl text-balance"
              style={{ letterSpacing: "-0.025em", lineHeight: 1.15 }}
            >
              {project.title}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-page-text/60 text-pretty">
              {project.description}
            </p>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
}

// ── Coming soon card ───────────────────────────────────────────────────────────

function ComingSoonCard({
  project,
  delay = 0,
}: {
  project: typeof NEXJE;
  delay?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="group">
        <motion.div
          whileHover={{ scale: 0.998 }}
          transition={SPRING}
        >
          {/* Image */}
          <div className="relative w-full rounded-xl overflow-hidden">
            <img
              src={project.imageSrc}
              alt={project.title}
              className="w-full h-auto block"
            />
            {/* Hover overlay */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:           "rgba(45,27,20,0.78)",
                backdropFilter:       "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#FFB6C1" }}
              >
                Coming Soon
              </p>
              <p className="mt-2 text-sm" style={{ color: "rgba(255,253,249,0.60)" }}>
                Case study in progress
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="pt-4 text-left">
            <p className="mb-1.5 text-[0.6rem] font-semibold uppercase leading-relaxed tracking-[0.08em] text-page-text/45 text-pretty">
              {project.tags} <span className="text-page-text/55">&middot; {project.year}</span>
            </p>
            <h2
              className="font-bold text-page-text text-xl md:text-2xl text-balance"
              style={{ letterSpacing: "-0.025em", lineHeight: 1.15 }}
            >
              {project.title}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-page-text/60 text-pretty">
              {project.description}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function WorkPage() {
  return (
    <>
      <WorkBackground />
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-24 sm:px-8 md:pt-24 md:pb-36">

        {/* Intro lines — typewriter + cycling fact */}
        <div className="mb-16 md:mb-28">
          <TypewriterIntro />
          <CyclingFact />
        </div>

        {/* 2×2 grid — collapses to single column on mobile */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
          <ProjectCard    project={ASL}      delay={0}    />
          <ProjectCard    project={DISNEY}   delay={0.08} />
          <ProjectCard    project={MICHIGAN} delay={0.16} />
          <ComingSoonCard project={NEXJE}    delay={0.24} />
        </div>

      </div>
    </>
  );
}
