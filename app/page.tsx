"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// ── Project data ───────────────────────────────────────────────────────────────

const DISNEY = {
  href:        "/disney",
  title:       "Disney+ Ecosystem",
  tags:        "PRODUCT DESIGN \u2022 STRATEGY",
  description: "Rethinking content discovery and bridging streaming with Disney Parks through mood-based browsing and personalized rewards.",
  imageSrc:    "/case_studies%20/Disney%2B/Disney%2B%20Hero%20Image/Tile.png",
  award:       null as string | null,
};

const ASL = {
  href:        "/signnow",
  title:       "Audio to Sign Language Translator",
  tags:        "ACCESSIBILITY \u2022 HEALTHCARE",
  description: "Breaking communication barriers with real-time ASL translation for healthcare environments.",
  imageSrc:    "/sign-now/Tile.png",
  award:       "1ST PLACE \u2022 UMICH ROSS TECH INNOVATION JAM" as string | null,
};

const MICHIGAN = {
  href:        "/michigan-creamery",
  title:       "Michigan Creamery",
  tags:        "PRODUCT DESIGN \u2022 UX RESEARCH",
  description: "Redesigning a family-owned Ann Arbor ice cream shop's digital presence to match the premium experience customers love in store.",
  imageSrc:    "/michigan-creamery/Hero%20Image.png",
  award:       null as string | null,
};

const SPRING = { type: "spring", stiffness: 300, damping: 24 } as const;

// ── Background (gradient + drifting blobs + grain) ────────────────────────────

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
      {/* Layer 1 — base gradient: pink/warm LEFT, white RIGHT */}
      <div
        style={{
          position: "absolute",
          inset:    0,
          background: [
            // Pink bloom anchored upper-left
            "radial-gradient(ellipse 70% 70% at 0% 0%,   rgba(255,182,193,0.38) 0%, transparent 65%)",
            // Warm blush mid-left
            "radial-gradient(ellipse 55% 60% at 5% 65%,  rgba(255,224,230,0.32) 0%, transparent 60%)",
            // Cream wash on the right — fades to near-white
            "radial-gradient(ellipse 65% 80% at 100% 50%, #FFFDF9 0%, transparent 70%)",
            // Base: warm white overall
            "linear-gradient(105deg, #FFF5F0 0%, #FFFDF9 55%, #FFFFFF 100%)",
          ].join(", "),
        }}
      />

      {/* Blob A — Brand Pink, upper-left */}
      <div
        className="hp-blob-1"
        style={{
          position:     "absolute",
          width:        "520px",
          height:       "440px",
          top:          "-100px",
          left:         "-60px",
          borderRadius: "50%",
          background:   "rgba(255,182,193,0.34)",
          filter:       "blur(100px)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Blob B — Warm Sand, lower-left */}
      <div
        className="hp-blob-2"
        style={{
          position:     "absolute",
          width:        "600px",
          height:       "500px",
          bottom:       "-130px",
          left:         "-70px",
          borderRadius: "50%",
          background:   "rgba(255,224,230,0.38)",
          filter:       "blur(110px)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Blob C — Deep Brown, very low opacity, left-center for subtle depth */}
      <div
        className="hp-blob-3"
        style={{
          position:     "absolute",
          width:        "420px",
          height:       "390px",
          top:          "33%",
          left:         "10%",
          borderRadius: "50%",
          background:   "rgba(45,27,20,0.055)",
          filter:       "blur(90px)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Blob D — Pale Blush, mid-left */}
      <div
        className="hp-blob-4"
        style={{
          position:     "absolute",
          width:        "480px",
          height:       "430px",
          top:          "18%",
          left:         "-50px",
          borderRadius: "50%",
          background:   "rgba(255,245,240,0.42)",
          filter:       "blur(95px)",
          mixBlendMode: "soft-light",
        }}
      />

      {/* Layer 3 — film grain, same as original */}
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
        <filter id="wk-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
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
      <Link
        href={project.href}
        className="group block outline-none"
      >
        <motion.div
          whileTap={{ scale: 0.985 }}
          whileHover={{ scale: 0.998 }}
          transition={SPRING}
        >
          <div
            className="w-full overflow-hidden rounded-3xl"
            style={{ aspectRatio: "16/9" }}
          >
            <img
              src={project.imageSrc}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.02]"
            />
          </div>

          <div className="mt-5">
            {project.award && (
              <p
                className="mb-1 text-[0.6rem] font-bold uppercase tracking-[0.18em]"
                style={{ color: "#FFB6C1" }}
              >
                {project.award}
              </p>
            )}
            <p className="mb-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-page-text/35">
              {project.tags}
            </p>
            <h2
              className="hover-glow text-3xl font-bold text-page-text"
              style={{ letterSpacing: "-0.025em", lineHeight: 1.15 }}
            >
              {project.title}
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-page-text/50">
              {project.description}
            </p>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function WorkPage() {
  return (
    <>
      <WorkBackground />
    <div className="mx-auto max-w-7xl px-8 pt-16 pb-28 md:pt-20 md:pb-32">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-14">
        <ProjectCard project={ASL}      delay={0}    />
        <ProjectCard project={DISNEY}   delay={0.08} />
        <ProjectCard project={MICHIGAN} delay={0.16} />
      </div>
    </div>
    </>
  );
}
