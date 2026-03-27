"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const FACTS = [
  "University of Michigan student",
  "Artist at heart with fine art training",
  "Member of TEDxUofM",
  "Sweet treat fanatic on the hunt for the best local cupcake",
];

const GALLERY_PHOTOS = [
  { src: "/images/ocean_image.jpeg", alt: "Ocean view, Kamakura, Japan" },
  { src: "/images/paint_image.jpeg", alt: "Painting in the studio"      },
  { src: "/images/foodie_image.jpeg", alt: "Food exploration"           },
];

function AboutBackground() {
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
      {/* Layer 1 — base: warm cream centre, fades to white at edges */}
      <div
        style={{
          position: "absolute",
          inset:    0,
          background: [
            // Soft pink bloom, top-right — mirrors Work page but opposite corner
            "radial-gradient(ellipse 60% 55% at 100% 0%,  rgba(255,182,193,0.28) 0%, transparent 62%)",
            // Warm blush pool, bottom-centre — grounds the page
            "radial-gradient(ellipse 75% 50% at 50% 100%, rgba(255,224,230,0.30) 0%, transparent 65%)",
            // Pale blush wash, left-centre — gentle fill
            "radial-gradient(ellipse 50% 60% at 0% 55%,   rgba(255,245,240,0.36) 0%, transparent 60%)",
            // Base: cream overall, slightly warmer than the Work page white
            "linear-gradient(160deg, #FFFDF9 0%, #FFF8F5 50%, #FFFDF9 100%)",
          ].join(", "),
        }}
      />

      {/* Blob A — Brand Pink, upper-right, slow drift */}
      <div
        className="hp-blob-1"
        style={{
          position:     "absolute",
          width:        "480px",
          height:       "420px",
          top:          "-80px",
          right:        "-40px",
          borderRadius: "50%",
          background:   "rgba(255,182,193,0.28)",
          filter:       "blur(110px)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Blob B — Warm Sand, bottom-centre */}
      <div
        className="hp-blob-2"
        style={{
          position:     "absolute",
          width:        "580px",
          height:       "460px",
          bottom:       "-120px",
          left:         "20%",
          borderRadius: "50%",
          background:   "rgba(255,224,230,0.32)",
          filter:       "blur(115px)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Blob C — Deep Brown, very low opacity, centre — subtle warmth anchor */}
      <div
        className="hp-blob-3"
        style={{
          position:     "absolute",
          width:        "400px",
          height:       "360px",
          top:          "40%",
          left:         "38%",
          borderRadius: "50%",
          background:   "rgba(45,27,20,0.04)",
          filter:       "blur(90px)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Blob D — Pale Blush, left-centre */}
      <div
        className="hp-blob-4"
        style={{
          position:     "absolute",
          width:        "440px",
          height:       "400px",
          top:          "25%",
          left:         "-60px",
          borderRadius: "50%",
          background:   "rgba(255,245,240,0.38)",
          filter:       "blur(100px)",
          mixBlendMode: "soft-light",
        }}
      />

      {/* Layer 3 — film grain, identical to Work page */}
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
        <filter id="about-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#about-grain)" />
      </svg>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
    <AboutBackground />
    <div className="pb-16 md:pb-24">

      {/* ── Primary Bio ───────────────────────────────────────────── */}
      <section className="pt-24 pb-16 md:pt-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-start md:gap-8 lg:gap-10">

            {/* Columns 1-4: Portrait — centered upper body crop */}
            <motion.div
              className="col-span-1 md:col-span-4"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="relative w-full overflow-hidden rounded-2xl"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src="/images/self_image.jpg"
                  alt="Caitlin Weingarden"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "62% bottom" }}
                  sizes="(max-width: 768px) 90vw, 33vw"
                  priority
                />
              </div>
            </motion.div>

            {/* Columns 6-12: Facts + SCROLL FOR MORE cue */}
            <motion.div
              className="col-span-1 md:col-span-7 md:col-start-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1
                className="text-page-text"
                style={{
                  fontSize:      "clamp(1.5rem, 3.5vw, 3rem)",
                  fontWeight:    400,
                  letterSpacing: "-0.03em",
                  lineHeight:    1.15,
                  textShadow:    "0 1px 3px rgba(0,0,0,0.08)",
                }}
              >
                Hi, I&apos;m{" "}
                <span style={{ fontWeight: 700 }}>Caitlin Weingarden</span>.{" "}
                I&apos;m an{" "}
                <span style={{
                  textDecoration:          "underline",
                  textDecorationColor:     "rgba(255,182,193,0.75)",
                  textUnderlineOffset:     "5px",
                  textDecorationThickness: "1.5px",
                }}>artist</span>{" "}
                turned product designer creating{" "}
                <span style={{
                  textDecoration:          "underline",
                  textDecorationColor:     "rgba(255,182,193,0.75)",
                  textUnderlineOffset:     "5px",
                  textDecorationThickness: "1.5px",
                }}>accessible</span>{" "}
                experiences.
              </h1>

              {/* 4 staggered facts */}
              <ul className="mt-10 space-y-3">
                {FACTS.map((fact, i) => (
                  <motion.li
                    key={fact}
                    className="flex items-start gap-3 text-sm leading-relaxed text-page-text/65"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.4, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span
                      className="mt-[0.3em] h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: "#FFB6C1" }}
                      aria-hidden
                    />
                    {fact}
                  </motion.li>
                ))}
              </ul>

              {/* Module 3: SCROLL FOR MORE ↓ — visual cue only, not a link */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.32 }}
              >
                <span
                  style={{
                    display:       "inline-flex",
                    alignItems:    "center",
                    gap:           "0.4rem",
                    fontSize:      "10px",
                    fontWeight:    700,
                    letterSpacing: "0.10em",
                    textTransform: "uppercase" as const,
                    color:         "rgba(45,27,20,0.40)",
                  }}
                >
                  Scroll for more
                  <span style={{ fontSize: "12px" }}>&#8595;</span>
                </span>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Photo Gallery ─────────────────────────────────────────── */}
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
      >
        <p className="mx-auto mb-5 max-w-[1200px] px-6 text-[10px] font-bold uppercase tracking-[0.18em] text-page-text/30 md:px-12 lg:px-16">
          Swipe to explore
        </p>

        <div
          className="flex gap-4 overflow-x-auto px-6 pb-5 md:px-12 lg:px-16"
          style={{
            scrollSnapType:          "x mandatory",
            scrollbarWidth:          "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {GALLERY_PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="relative flex-shrink-0"
              style={{
                width:           "clamp(220px, 28vw, 300px)",
                height:          "clamp(220px, 28vw, 300px)",
                scrollSnapAlign: "start",
              }}
            >
              <div
                className="relative h-full w-full overflow-hidden"
                style={{
                  borderRadius: "3px",
                  boxShadow:    "0 4px 20px rgba(45,27,20,0.10)",
                }}
              >
                {/* Module 3: crisp photo — no grain, no blur, no grey overlay */}
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 60vw, 300px"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
    </>
  );
}
