"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

// Module 5: Updated scannable facts including affiliations
const FACTS = [
  "University of Michigan student",
  "Simplify Campus Ambassador",
  "Member of TEDxUofM",
  "Artist at heart with fine art training",
  "Language learner currently mastering Japanese",
  "Video editor and storyteller always filming",
  "Sweet treat fanatic on the hunt for the best local cupcake",
];

// Module 3: cursor data-attribute per photo
const GALLERY_PHOTOS = [
  {
    src:        "/images/ocean_image.jpeg",
    alt:        "Ocean view, Kamakura, Japan",
    cursor:     "beach",
  },
  {
    src:        "/images/paint_image.jpeg",
    alt:        "Painting in the studio",
    cursor:     "paint",
  },
  {
    src:        "/images/foodie_image.jpeg",
    alt:        "Food exploration",
    cursor:     "food",
  },
];

export default function AboutPage() {
  return (
    <div className="pb-16 md:pb-24">

      {/* ── Primary Bio ───────────────────────────────────────────── */}
      <section className="px-6 pt-24 pb-16 md:px-12 md:pt-32 lg:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 lg:gap-10">

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
                  className="object-cover object-center"
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
                className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] text-page-text"
                style={{ letterSpacing: "-0.035em" }}
              >
                Hi, I&apos;m Caitlin.
              </h1>
              <p
                className="mt-4 text-sm leading-relaxed text-page-text/55"
                style={{ maxWidth: "38ch" }}
              >
                Artist, researcher, and product designer building accessible
                experiences for the people who need them most.
              </p>

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

      {/* ── Photo Gallery — crisp, no overlays, cursor-driven context ── */}
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
      >
        <p className="mx-auto mb-5 max-w-[1200px] px-6 text-[10px] font-bold uppercase tracking-[0.18em] text-page-text/30 md:px-12 lg:px-16">
          Hover to explore
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
            // Module 3: data-cursor attr drives custom pill label on hover
            <div
              key={photo.src}
              data-cursor={photo.cursor}
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

      {/* ── Contact form ──────────────────────────────────────────── */}
      <ContactForm />

    </div>
  );
}
