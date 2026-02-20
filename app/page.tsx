"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import IntroAnimation from "@/components/IntroAnimation";
import { StaticSparkle } from "@/components/Sparkle";
import { useState, useEffect } from "react";

// ── Data ─────────────────────────────────────────────────────────────────────

const FEATURED_PROJECTS = [
  {
    title: "Accessibility Translation Platform",
    href: "/work/accessibility-translation-platform",
    tags: ["UX Research", "Accessibility", "i18n"],
  },
  {
    title: "Multilingual Design System",
    href: "/work/multilingual-design-system",
    tags: ["Product Design", "Design Systems"],
  },
];

const HOVER_SPARKLE_POSITIONS = [
  { x: -30, y: -30 },
  { x: 30,  y: -35 },
  { x: -40, y: 20  },
  { x: 35,  y: 25  },
  { x: 0,   y: -40 },
];

const SPARKLE_COLORS = ["#C9748F", "#C4B5AF", "#3D1F0F"];
// Deterministic sizes — avoids Math.random() hydration mismatch
const SPARKLE_SIZES = [12, 14, 10, 16, 11];

// ── Sub-components ────────────────────────────────────────────────────────────

/* Heading: "Hi, I'm Caitlin." with sparkle hover */
function HeroName() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="font-heading text-5xl font-bold leading-[1.1] text-page-text dark:text-dark-text md:text-6xl lg:text-7xl">
        Hi, I&apos;m Caitlin.
      </h1>
      {isHovered &&
        HOVER_SPARKLE_POSITIONS.map((pos, i) => (
          <StaticSparkle
            key={i}
            size={SPARKLE_SIZES[i]}
            color={SPARKLE_COLORS[i % SPARKLE_COLORS.length]}
            delay={i * 0.1}
            x={pos.x}
            y={pos.y}
          />
        ))}
    </div>
  );
}

/* Tagline: ARTIST and ACCESSIBLE are bold + underlined */
function HeroTagline() {
  return (
    <p className="mt-5 max-w-md font-sans text-lg leading-relaxed text-page-text/65 dark:text-dark-text/65 md:text-xl">
      an{" "}
      <strong className="font-bold text-page-text underline decoration-page-text/50 decoration-2 underline-offset-4 dark:text-dark-text dark:decoration-dark-text/50">
        ARTIST
      </strong>{" "}
      turned product designer, translating{" "}
      <strong className="font-bold text-page-text underline decoration-page-text/50 decoration-2 underline-offset-4 dark:text-dark-text dark:decoration-dark-text/50">
        ACCESSIBLE
      </strong>{" "}
      experiences.
    </p>
  );
}

/* Project card */
function ProjectCardLink({
  project,
}: {
  project: (typeof FEATURED_PROJECTS)[number];
}) {
  return (
    <Link
      href={project.href}
      className="flex h-full flex-col overflow-hidden rounded-2xl bg-pale-blush shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-soft-lg dark:bg-dark-cards"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-pale-blush to-warm-sand"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
          aria-hidden
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <h3 className="font-heading text-xl font-semibold text-white md:text-2xl">
            {project.title}
          </h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-4 md:p-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-mushroom-taupe/20 px-3 py-1 font-sans text-sm font-medium text-page-text dark:bg-dark-text/20 dark:text-dark-text"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-4 inline-block font-sans text-sm font-medium text-accent-sage dark:text-mist-sage">
          View Project →
        </span>
      </div>
    </Link>
  );
}

// ── Hero section ──────────────────────────────────────────────────────────────

function Hero({ animate }: { animate: boolean }) {
  const Wrap = animate ? motion.div : "div";
  const wrapProps = animate
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } }
    : {};

  return (
    /* Full-viewport hero — content below the fold on load */
    <section
      className="relative flex min-h-screen flex-col px-6 pt-20 pb-16 md:px-12 lg:px-16"
      aria-label="Introduction"
    >
      {/* Subtle film-grain overlay */}
      <div className="hero-grain" aria-hidden />

      {/* ── Two-column layout ─────────────────────────────────── */}
      <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col items-center gap-10 md:flex-row md:gap-16 lg:gap-24">

        {/* Left column: text */}
        <div className="relative z-10 flex flex-1 flex-col justify-center">

          {/* Heading */}
          {animate ? (
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <HeroName />
            </motion.div>
          ) : (
            <HeroName />
          )}

          {/* Tagline */}
          {animate ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <HeroTagline />
            </motion.div>
          ) : (
            <HeroTagline />
          )}

          {/* CTA links */}
          {animate ? (
            <motion.div
              className="mt-10 flex flex-wrap items-center gap-5"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38, ease: "easeOut" }}
            >
              <Link
                href="/work"
                className="rounded-sm bg-page-text px-6 py-3 font-sans text-sm font-medium tracking-wide text-page-bg transition-colors hover:bg-accent-sage dark:bg-dark-text dark:text-dark-bg dark:hover:bg-mist-sage"
              >
                View Work
              </Link>
              <Link
                href="/about"
                className="font-sans text-sm font-medium text-page-text/60 underline-offset-4 transition-colors hover:text-page-text hover:underline dark:text-dark-text/60 dark:hover:text-dark-text"
              >
                About Me →
              </Link>
            </motion.div>
          ) : (
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/work"
                className="rounded-sm bg-page-text px-6 py-3 font-sans text-sm font-medium tracking-wide text-page-bg dark:bg-dark-text dark:text-dark-bg"
              >
                View Work
              </Link>
              <Link
                href="/about"
                className="font-sans text-sm font-medium text-page-text/60 dark:text-dark-text/60"
              >
                About Me →
              </Link>
            </div>
          )}
        </div>

        {/* Right column: hero image — slides in from left */}
        <div className="relative z-10 w-full flex-shrink-0 md:w-[42%] lg:w-[38%]">
          {animate ? (
            <motion.div
              className="relative overflow-hidden"
              style={{
                aspectRatio: "3 / 4",
                // Vintage editorial drop shadow
                boxShadow: "6px 6px 0px 0px var(--warm-sand), 7px 7px 0px 1px rgba(26,15,10,0.12)",
              }}
              initial={{ x: -70, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/images/self_image.jpg"
                alt="Caitlin Weingarden"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 90vw, 38vw"
              />
              {/* Thin vintage border overlay */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{ border: "1px solid rgba(26,15,10,0.14)" }}
              />
            </motion.div>
          ) : (
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "3 / 4" }}
            >
              <Image
                src="/images/self_image.jpg"
                alt="Caitlin Weingarden"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 90vw, 38vw"
              />
            </div>
          )}
        </div>
      </div>

      {/* ── Scroll-down CTA — bottom left ─────────────────────── */}
      {animate && (
        <motion.div
          className="absolute bottom-8 left-6 flex items-center gap-2 md:left-12 lg:left-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          aria-hidden
        >
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-page-text/35 dark:text-dark-text/35">
            Scroll
          </span>
          <motion.span
            className="text-page-text/35 dark:text-dark-text/35"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.div>
      )}
    </section>
  );
}

// ── Projects section ──────────────────────────────────────────────────────────

function Projects({ animate }: { animate: boolean }) {
  return (
    /* Swoosh-in: each card translates up and fades as it enters the viewport */
    <section
      className="px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24"
      aria-labelledby="featured-heading"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* Section label */}
        {animate ? (
          <motion.p
            className="mb-2 font-sans text-xs uppercase tracking-[0.18em] text-page-text/35 dark:text-dark-text/35"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
          >
            Selected Work
          </motion.p>
        ) : (
          <p className="mb-2 font-sans text-xs uppercase tracking-[0.18em] text-page-text/35 dark:text-dark-text/35">
            Selected Work
          </p>
        )}

        <h2
          id="featured-heading"
          className={
            animate
              ? "mb-10 font-heading text-3xl font-semibold italic text-page-text dark:text-dark-text md:text-4xl"
              : "mb-10 font-heading text-3xl font-semibold italic text-page-text dark:text-dark-text md:text-4xl"
          }
        >
          {animate ? (
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: 0.05 }}
              style={{ display: "block" }}
            >
              Featured Projects
            </motion.span>
          ) : (
            "Featured Projects"
          )}
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {FEATURED_PROJECTS.map((project, i) =>
            animate ? (
              <motion.article
                key={project.href}
                className="min-h-[350px] md:min-h-[400px]"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
              >
                <ProjectCardLink project={project} />
              </motion.article>
            ) : (
              <article key={project.href} className="min-h-[350px] md:min-h-[400px]">
                <ProjectCardLink project={project} />
              </article>
            )
          )}
        </div>

        {/* View all CTA */}
        <div className="mt-8 text-center">
          {animate ? (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <Link
                href="/work"
                className="inline-block rounded-sm border border-page-text/25 px-6 py-3 font-sans text-sm font-medium text-page-text transition-colors hover:border-page-text hover:bg-page-text hover:text-page-bg dark:border-dark-text/25 dark:text-dark-text dark:hover:border-dark-text dark:hover:bg-dark-text dark:hover:text-dark-bg"
              >
                View all work
              </Link>
            </motion.div>
          ) : (
            <Link
              href="/work"
              className="inline-block rounded-sm border border-page-text/25 px-6 py-3 font-sans text-sm font-medium text-page-text dark:border-dark-text/25 dark:text-dark-text"
            >
              View all work
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [isMounted, setIsMounted]       = useState(false);
  const [showIntro, setShowIntro]       = useState(false);
  const [contentVisible, setContentVisible] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    const introPlayed = sessionStorage.getItem("introPlayed");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (introPlayed === "true" || prefersReducedMotion) {
      setShowIntro(false);
      setContentVisible(true);
    } else {
      setShowIntro(true);
      setContentVisible(false);
    }
  }, []);

  const handleIntroComplete = () => {
    if (typeof window !== "undefined")
      sessionStorage.setItem("introPlayed", "true");
    setShowIntro(false);
    setContentVisible(true);
  };

  /* ── Pre-mount static render (avoids hydration mismatch) ── */
  if (!isMounted) {
    return (
      <>
        <Hero animate={false} />
        <Projects animate={false} />
      </>
    );
  }

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentVisible ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Full-viewport hero — everything else starts below the fold */}
        <Hero animate={true} />

        {/* Projects — swoosh in as user scrolls down */}
        <Projects animate={true} />
      </motion.div>
    </>
  );
}
