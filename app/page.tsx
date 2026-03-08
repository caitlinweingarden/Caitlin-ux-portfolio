"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// ── Data ──────────────────────────────────────────────────────────────────────

const HERO_PROJECT = {
  title: "Sign Now",
  description: "Real-time audio-to-ASL translation · 1st Place Healthcare Track",
  href: "/work/sign-now",
  imageSrc: "/images/sign-now/cover.jpg",
  tags: ["Accessibility", "Healthcare", "Award-Winning"],
};

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

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center pt-20 pb-16"
      aria-label="Introduction"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[60%_40%] md:gap-8 lg:gap-16">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              className="text-5xl font-bold leading-[1.0] text-page-text md:text-6xl lg:text-7xl"
              style={{ letterSpacing: "-0.04em" }}
            >
              Hi, I&apos;m{" "}
              <span className="font-bold text-accent">Caitlin Weingarden</span>.
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-page-text/70 md:text-xl">
              An <strong className="font-bold text-page-text">artist</strong> turned{" "}
              <strong className="font-bold text-page-text">product designer</strong>{" "}
              translating{" "}
              <em className="italic text-accent">accessible</em> experiences.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/work"
                className="rounded-sm bg-page-text px-6 py-3 text-sm font-medium tracking-wide text-page-bg transition-colors duration-300 hover:bg-accent hover:text-page-text"
              >
                View Work
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-page-text/60 underline-offset-4 transition-colors hover:text-page-text hover:underline"
              >
                About Me →
              </Link>
            </div>
          </motion.div>

          {/* Right: Featured Work card — glassmorphism with float */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Soft gradient blob behind the glass card */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 rounded-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at 60% 40%, rgba(244,172,183,0.35) 0%, rgba(253,226,228,0.20) 55%, transparent 80%)",
              }}
              aria-hidden
            />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="overflow-hidden rounded-2xl bg-white/40 shadow-soft backdrop-blur-md">

                {/* Image strip — gradient placeholder until cover exists */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-warm-sand to-accent/10" />
                  <Image
                    src={HERO_PROJECT.imageSrc}
                    alt={`${HERO_PROJECT.title} case study`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 40vw"
                  />
                </div>

                {/* Card body */}
                <div className="p-6 md:p-8">
                  <p className="mb-2 text-xs uppercase tracking-[0.18em] text-page-text/40">
                    Featured Work
                  </p>
                  <h3
                    className="text-xl font-bold text-page-text md:text-2xl"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {HERO_PROJECT.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-page-text/60">
                    {HERO_PROJECT.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {HERO_PROJECT.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent/20 px-3 py-0.5 text-xs font-medium text-page-text"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/work"
                    className="mt-6 inline-block rounded-sm bg-page-text px-5 py-2.5 text-sm font-medium tracking-wide text-page-bg transition-colors duration-300 hover:bg-accent hover:text-page-text"
                  >
                    View Work
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ── Featured Projects ─────────────────────────────────────────────────────────

function FeaturedProjects() {
  return (
    <section
      className="py-16 md:py-20 lg:py-24"
      aria-labelledby="featured-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-2 text-xs uppercase tracking-[0.18em] text-page-text/35">
          Selected Work
        </p>
        <motion.h2
          id="featured-heading"
          className="mb-10 text-3xl font-semibold text-page-text md:text-4xl"
          style={{ letterSpacing: "-0.02em" }}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {FEATURED_PROJECTS.map((project, i) => (
            <motion.article
              key={project.href}
              className="min-h-[350px] md:min-h-[400px]"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
            >
              <Link
                href={project.href}
                className="flex h-full flex-col overflow-hidden rounded-2xl bg-pale-blush shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-soft-lg"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-warm-sand" aria-hidden />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <h3 className="text-xl font-semibold text-white md:text-2xl">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-4 md:p-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent/15 px-3 py-1 text-sm font-medium text-page-text"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-4 inline-block text-sm font-medium text-accent-sage">
                    View Project →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            <Link
              href="/work"
              className="inline-block rounded-sm border border-page-text/25 px-6 py-3 text-sm font-medium text-page-text transition-colors hover:border-page-text hover:bg-page-text hover:text-page-bg"
            >
              View all work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
    </>
  );
}
