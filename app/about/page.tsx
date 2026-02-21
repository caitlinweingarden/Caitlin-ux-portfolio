"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const GRAIN_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E";

const GALLERY_PHOTOS = [
  {
    src: "/images/ocean_image.jpeg",
    alt: "Ocean view",
    label: "Explorer",
    caption: "Travel shapes how I see problems",
  },
  {
    src: "/images/paint_image.jpeg",
    alt: "Painting",
    label: "Artist",
    caption: "Art is how I first learned to see",
  },
  {
    src: "/images/foodie_image.jpeg",
    alt: "Food",
    label: "Curious",
    caption: "Endlessly curious about cultures",
  },
];

const SKILLS = [
  "UX Research",
  "Accessibility (WCAG)",
  "Design Systems",
  "Figma, Adobe Suite",
  "React, HTML/CSS",
  "Localization",
];

const INTERESTS = ["Painting", "Languages", "Traveling", "Photography"];

const VALUES = [
  "Accessibility is non-negotiable",
  "Design should work for everyone",
  "Art and UX inform each other",
  "Continuous learning and growth",
];

export default function AboutPage() {
  return (
    <div className="pb-16 md:pb-24">

      {/* ── Portrait Hero ────────────────────────────────────────── */}
      <section className="px-6 pt-24 pb-16 md:px-12 md:pt-32 lg:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[55%_45%] md:gap-8 lg:gap-16">

            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1
                className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.0] text-page-text"
                style={{ letterSpacing: "-0.04em" }}
              >
                Hi, I&apos;m Caitlin.
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-page-text/65 md:text-xl">
                I design{" "}
                <strong className="font-bold text-page-text">accessible</strong>{" "}
                experiences that meet people where they are — across languages,
                abilities, and contexts.
              </p>
              <p className="mt-4 text-base leading-relaxed text-page-text/55 md:text-lg">
                From painter to product designer, I bring an artist&apos;s eye to
                every problem I solve. Currently learning Japanese{" "}
                <span className="italic text-accent" lang="ja">
                  デザインはすべての人のためのものです。
                </span>
              </p>
            </motion.div>

            {/* Right: Portrait */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="relative w-full overflow-hidden"
                style={{
                  aspectRatio: "4/5",
                  boxShadow:
                    "6px 6px 0px 0px var(--warm-sand), 7px 7px 0px 1px rgba(61,31,15,0.12)",
                }}
              >
                <Image
                  src="/images/self_image.jpg"
                  alt="Caitlin Weingarden"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 90vw, 45vw"
                  priority
                />
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url("${GRAIN_SVG}")`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "200px 200px",
                    opacity: 0.07,
                    mixBlendMode: "overlay",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Photo Gallery ────────────────────────────────────────── */}
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
      >
        <p className="mx-auto mb-5 max-w-[1200px] px-6 text-xs uppercase tracking-[0.18em] text-page-text/30 md:px-12 lg:px-16">
          Scroll to explore →
        </p>

        <div
          className="flex gap-4 overflow-x-auto px-6 pb-5 md:px-12 lg:px-16"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {GALLERY_PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="group relative flex-shrink-0"
              style={{
                width: "clamp(220px, 28vw, 300px)",
                height: "clamp(220px, 28vw, 300px)",
                scrollSnapAlign: "start",
              }}
            >
              <div
                className="relative h-full w-full overflow-hidden"
                style={{
                  borderRadius: "3px",
                  boxShadow:
                    "inset 0 0 0 1px rgba(61,31,15,0.18), inset 0 0 28px rgba(61,31,15,0.10), 0 6px 24px rgba(61,31,15,0.12)",
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 60vw, 300px"
                />
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url("${GRAIN_SVG}")`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "200px 200px",
                    opacity: 0.09,
                    mixBlendMode: "overlay",
                    pointerEvents: "none",
                  }}
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(61,31,15,0.88) 0%, rgba(61,31,15,0.3) 55%, transparent 100%)",
                  }}
                >
                  <p className="text-xl font-bold text-white" style={{ letterSpacing: "0.01em" }}>
                    {photo.label}
                  </p>
                  <p className="mt-0.5 text-sm text-white/75">{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Bio + Skills ─────────────────────────────────────────── */}
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">

        <motion.div
          className="mb-10 grid gap-8 border-t border-page-text/10 pt-10 md:grid-cols-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35 }}
        >
          <div className="md:col-span-2">
            <h2
              className="mb-3 text-2xl font-semibold text-page-text"
              style={{ letterSpacing: "-0.02em" }}
            >
              Background
            </h2>
            <p className="text-base leading-relaxed text-page-text/75">
              From artist to product designer, I blend creativity with user-centered
              thinking. I believe great design should be inclusive, reaching people
              across languages, abilities, and contexts.
            </p>
          </div>

          <div>
            <h2
              className="mb-3 text-2xl font-semibold text-page-text"
              style={{ letterSpacing: "-0.02em" }}
            >
              Skills
            </h2>
            <ul className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <li
                  key={skill}
                  className="rounded-sm border border-page-text/12 bg-pale-blush px-3 py-1 text-sm text-page-text"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-8 border-t border-page-text/10 pt-10 md:grid-cols-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35, delay: 0.05 }}
        >
          <div>
            <h3
              className="mb-3 text-2xl font-semibold text-page-text"
              style={{ letterSpacing: "-0.02em" }}
            >
              When I&apos;m not designing
            </h3>
            <ul className="flex flex-wrap gap-2">
              {INTERESTS.map((interest) => (
                <li
                  key={interest}
                  className="rounded-sm bg-accent/15 px-3 py-1 text-sm font-medium text-page-text"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="mb-3 text-2xl font-semibold text-page-text"
              style={{ letterSpacing: "-0.02em" }}
            >
              Values
            </h3>
            <ul className="space-y-2">
              {VALUES.map((value) => (
                <li
                  key={value}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-page-text/75"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
