"use client";

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
  award:    "1ST PLACE \u2022 UMICH ROSS TECH INNOVATION JAM",
  tags:     "ACCESSIBILITY \u2022 HEALTHCARE",
  imageSrc: "/sign-now/Ready_to_Post_Images/Sign_Now_Hero.jpg",
};

const SPRING = { type: "spring", stiffness: 380, damping: 22 } as const;

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="pt-20 pb-14 md:pt-28 md:pb-18" aria-label="Introduction">
      <div className="mx-auto w-full max-w-7xl px-8">
        {/* Module 2: single fluid paragraph, name bold, delicate size */}
        <motion.p
          className="max-w-2xl leading-relaxed text-page-text/70"
          style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)", letterSpacing: "-0.005em" }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          I design with intention and craft. I&apos;m{" "}
          <span className="font-bold text-page-text">Caitlin Weingarden</span>,
          an artist turned product designer creating accessible experiences
          that meet people where they are, across languages, abilities, and contexts.
        </motion.p>
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
          {/* Module 3: 16:9 dominates the viewport */}
          <div className="w-full overflow-hidden rounded-3xl" style={{ aspectRatio: "16/9" }}>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover object-center transition-transform duration-500 ease-in-out"
            />
          </div>
          <div className="mt-4 px-1">
            {award && (
              <p className="mb-1 text-[0.6rem] font-bold uppercase tracking-[0.18em]" style={{ color: "#FFB6C1" }}>
                {award}
              </p>
            )}
            <p className="mb-1 text-[0.6rem] font-bold uppercase tracking-widest text-page-text/35">
              {tags}
            </p>
            <h2
              className="hover-glow text-lg font-bold text-page-text md:text-xl"
              style={{ letterSpacing: "-0.025em", lineHeight: 1.2 }}
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
      className="md:max-w-xs"
    >
      {/* Module 3: cursor expands to "HI!! ♡" on About tile */}
      <Link href="/about" className="block outline-none" data-cursor="hi">
        <motion.div whileTap={{ scale: 0.97 }} whileHover={{ scale: 0.99 }} transition={SPRING}>
          <div className="w-full overflow-hidden rounded-3xl" style={{ aspectRatio: "4/3" }}>
            <img
              src="/images/self_image.jpg"
              alt="Caitlin Weingarden"
              className="h-full w-full object-cover object-center transition-transform duration-500 ease-in-out"
            />
          </div>
          <div className="mt-4 px-1">
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

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
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
              cursorType="work"
              delay={0}
            />
            <CaseTile
              href={SIGNNOW.href}
              imageSrc={SIGNNOW.imageSrc}
              imageAlt={SIGNNOW.title}
              award={SIGNNOW.award}
              tags={SIGNNOW.tags}
              title={SIGNNOW.title}
              cursorType="award"
              delay={0.07}
            />
          </div>

          {/* Module 3: Bottom row — About Me tile, left-aligned, smaller */}
          <div className="mt-8">
            <AboutTile />
          </div>

        </div>
      </section>
    </>
  );
}
