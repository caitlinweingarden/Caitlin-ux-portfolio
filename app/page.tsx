"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import DecorativeShapes from "@/components/DecorativeShapes";
import IntroAnimation from "@/components/IntroAnimation";
import { StaticSparkle } from "@/components/Sparkle";
import { useState, useEffect } from "react";

const FEATURED_PROJECTS = [
  {
    title: "Accessibility Translation Platform",
    href: "/work/accessibility-translation-platform",
    tags: ["UX Research", "Accessibility", "i18n"],
    imageAlt: "Accessibility Translation Platform interface preview",
  },
  {
    title: "Multilingual Design System",
    href: "/work/multilingual-design-system",
    tags: ["Product Design", "Design Systems"],
    imageAlt: "Multilingual Design System components and documentation",
  },
];

// Sparkle positions for hover effect
const HOVER_SPARKLE_POSITIONS = [
  { x: -30, y: -30 },
  { x: 30, y: -35 },
  { x: -40, y: 20 },
  { x: 35, y: 25 },
  { x: 0, y: -40 },
];

const SPARKLE_COLORS = [
  "#6B5E5A", // mushroom-taupe
  "#B8C5B4", // mist-sage
  "#9B8EA0", // accent-lavender
];

// Deterministic sparkle sizes to avoid hydration mismatch from Math.random()
const SPARKLE_SIZES = [12, 14, 10, 16, 11];

function StaticName() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.h1
        className="font-sans text-6xl font-bold leading-none tracking-tight text-name-light dark:text-name-dark md:text-8xl lg:text-9xl"
        animate={{ y: [0, -3, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Caitlin Weingarden
      </motion.h1>

      {/* SVG Sparkles on hover */}
      {isHovered && (
        <>
          {HOVER_SPARKLE_POSITIONS.map((pos, i) => (
            <StaticSparkle
              key={i}
              size={SPARKLE_SIZES[i]}
              color={SPARKLE_COLORS[i % SPARKLE_COLORS.length]}
              delay={i * 0.1}
              x={pos.x}
              y={pos.y}
            />
          ))}
        </>
      )}
    </div>
  );
}

function HeroTagline({ animate = false }: { animate?: boolean }) {
  const content = (
    <span className="bg-gradient-to-r from-mushroom-taupe via-accent-lavender to-mist-sage bg-clip-text text-transparent dark:from-mist-sage dark:via-accent-lavender dark:to-accent-sage">
      Artist turned product designer translating accessible experiences.
    </span>
  );

  if (!animate) {
    return (
      <p className="mt-6 max-w-2xl font-sans text-xl font-medium leading-relaxed md:text-2xl">
        {content}
      </p>
    );
  }

  return (
    <motion.p
      className="mt-6 max-w-2xl font-sans text-xl font-medium leading-relaxed md:text-2xl"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
    >
      {content}
    </motion.p>
  );
}

function ProjectCards({ animate = false }: { animate?: boolean }) {
  return (
    <section
      className="relative px-6 py-4 md:px-12 md:py-6 lg:max-w-[1400px] lg:px-16 lg:py-8"
      aria-labelledby="featured-heading"
    >
      <h2 id="featured-heading" className="sr-only">
        Featured projects
      </h2>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {FEATURED_PROJECTS.map((project, index) =>
            animate ? (
              <motion.article
                key={project.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                className="group min-h-[350px] md:min-h-[400px]"
              >
                <ProjectCardLink project={project} />
              </motion.article>
            ) : (
              <article
                key={project.href}
                className="group min-h-[350px] md:min-h-[400px]"
              >
                <ProjectCardLink project={project} />
              </article>
            )
          )}
        </div>
        <div className="mt-6 text-center md:mt-8">
          <Link
            href="/work"
            className="inline-block rounded-lg bg-mushroom-taupe px-6 py-3 font-sans text-base font-medium text-page-bg transition-colors hover:bg-mushroom-taupe/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-mushroom-taupe focus-visible:ring-offset-2 dark:bg-mist-sage dark:text-dark-bg dark:hover:bg-mist-sage/90"
          >
            View all work
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectCardLink({
  project,
}: {
  project: (typeof FEATURED_PROJECTS)[number];
}) {
  return (
    <Link
      href={project.href}
      className="flex h-full flex-col overflow-hidden rounded-2xl bg-pale-blush shadow-soft transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-soft-lg dark:bg-dark-cards"
    >
      <div className="relative aspect-video w-full flex-shrink-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-mushroom-taupe/50 to-mist-sage/50"
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
              className="rounded-full bg-mushroom-taupe/20 px-3 py-1 font-sans text-sm font-medium tracking-wide text-page-text dark:bg-dark-text/20 dark:text-dark-text"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-4 inline-block font-sans text-sm font-medium tracking-wide text-mushroom-taupe transition-colors group-hover:text-accent-sage dark:text-mist-sage dark:group-hover:text-accent-sage">
          View Project →
        </span>
      </div>
    </Link>
  );
}

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
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
    if (typeof window !== "undefined") {
      sessionStorage.setItem("introPlayed", "true");
    }
    setShowIntro(false);
    setContentVisible(true);
  };

  // Stable server/client render before mount — no animations, no browser APIs
  if (!isMounted) {
    return (
      <>
        <DecorativeShapes />
        <section
          className="relative px-6 pt-[12vh] pb-4 md:px-12 lg:max-w-[1400px] lg:px-16"
          aria-label="Introduction"
        >
          <div className="mx-auto w-full max-w-4xl">
            <div>
              <StaticName />
            </div>
            <HeroTagline animate={false} />
          </div>
        </section>
        <ProjectCards animate={false} />
      </>
    );
  }

  return (
    <>
      {/* Full-screen intro animation */}
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

      {/* Main portfolio content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentVisible ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <DecorativeShapes />
        {/* Hero — name + punchy tagline */}
        <section
          className="relative px-6 pt-[12vh] pb-4 md:px-12 lg:max-w-[1400px] lg:px-16"
          aria-label="Introduction"
        >
          <div className="mx-auto w-full max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <StaticName />
            </motion.div>
            <HeroTagline animate={true} />
          </div>
        </section>

        {/* Featured project cards */}
        <ProjectCards animate={true} />
      </motion.div>
    </>
  );
}
