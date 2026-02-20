"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// SVG grain data URI — feTurbulence noise for film/print texture
const GRAIN_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E";

const PHOTOS = [
  {
    src: "/images/self_image.jpg",
    alt: "Caitlin Weingarden",
    label: "Designer",
    caption: "Artist turned product designer",
  },
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
    <div className="pt-24 pb-16 md:pt-32 lg:pb-24">

      {/* ── Header ───────────────────────────────────────────────── */}
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
        <motion.header
          className="mb-12"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="font-heading text-5xl font-bold leading-tight text-page-text dark:text-dark-text md:text-6xl lg:text-7xl">
            Hi, I&apos;m Caitlin.
          </h1>
          <p className="mt-4 max-w-lg font-sans text-lg leading-relaxed text-page-text/60 dark:text-dark-text/60">
            I design accessible experiences that meet people where they are.
          </p>
        </motion.header>
      </div>

      {/* ── Scroll-snap gallery ──────────────────────────────────── */}
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
      >
        {/* Scroll hint */}
        <p className="mx-auto mb-5 max-w-[1200px] px-6 font-sans text-xs uppercase tracking-[0.18em] text-page-text/30 dark:text-dark-text/30 md:px-12 lg:px-16">
          Scroll to explore →
        </p>

        {/* Gallery strip */}
        <div
          className="flex gap-4 overflow-x-auto px-6 pb-5 md:px-12 lg:px-16"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="group relative flex-shrink-0"
              style={{
                width: "clamp(220px, 28vw, 300px)",
                height: "clamp(220px, 28vw, 300px)",
                scrollSnapAlign: "start",
              }}
            >
              {/* Film-print frame: inner shadow + subtle border */}
              <div
                className="relative h-full w-full overflow-hidden"
                style={{
                  borderRadius: "3px",
                  boxShadow:
                    "inset 0 0 0 1px rgba(26,15,10,0.18), inset 0 0 28px rgba(26,15,10,0.10), 0 6px 24px rgba(26,15,10,0.12)",
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 60vw, 300px"
                />

                {/* Grain texture overlay */}
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

                {/* Hover overlay — dark gradient + label */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(20,13,8,0.88) 0%, rgba(20,13,8,0.3) 55%, transparent 100%)",
                  }}
                >
                  <p
                    className="font-heading text-xl font-bold text-white"
                    style={{ letterSpacing: "0.01em" }}
                  >
                    {photo.label}
                  </p>
                  <p className="mt-0.5 font-sans text-sm text-white/75">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Compact info ─────────────────────────────────────────── */}
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">

        {/* Bio + Skills */}
        <motion.div
          className="mb-10 grid gap-8 border-t border-page-text/10 pt-10 dark:border-dark-text/10 md:grid-cols-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35 }}
        >
          <div className="md:col-span-2">
            <h2 className="mb-3 font-heading text-2xl font-semibold italic text-page-text dark:text-dark-text">
              Background
            </h2>
            <p className="font-sans text-base leading-relaxed text-page-text/75 dark:text-dark-text/75">
              From artist to product designer, I blend creativity with
              user-centered thinking. I believe great design should be
              inclusive, reaching people across languages, abilities, and
              contexts. Currently learning Japanese (日本語).{" "}
              <span
                className="italic text-mushroom-taupe dark:text-mist-sage"
                lang="ja"
              >
                デザインはすべての人のためのものです。
              </span>
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-heading text-2xl font-semibold italic text-page-text dark:text-dark-text">
              Skills
            </h2>
            <ul className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <li
                  key={skill}
                  className="rounded-sm border border-page-text/12 bg-pale-blush px-3 py-1 font-sans text-sm text-page-text dark:border-dark-text/12 dark:bg-dark-cards dark:text-dark-text"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Interests + Values */}
        <motion.div
          className="grid gap-8 border-t border-page-text/10 pt-10 dark:border-dark-text/10 md:grid-cols-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35, delay: 0.05 }}
        >
          <div>
            <h3 className="mb-3 font-heading text-2xl font-semibold italic text-page-text dark:text-dark-text">
              When I&apos;m not designing
            </h3>
            <ul className="flex flex-wrap gap-2">
              {INTERESTS.map((interest) => (
                <li
                  key={interest}
                  className="rounded-sm bg-mushroom-taupe/15 px-3 py-1 font-sans text-sm font-medium text-page-text dark:bg-dark-text/15 dark:text-dark-text"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-heading text-2xl font-semibold italic text-page-text dark:text-dark-text">
              Values
            </h3>
            <ul className="space-y-2">
              {VALUES.map((value) => (
                <li
                  key={value}
                  className="flex items-start gap-2.5 font-sans text-sm leading-relaxed text-page-text/75 dark:text-dark-text/75"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mist-sage"
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
