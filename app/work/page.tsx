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
  cursor:      "streaming",
};

const ASL = {
  href:        "/signnow",
  title:       "Audio to Sign Language Translator",
  tags:        "ACCESSIBILITY \u2022 HEALTHCARE",
  description: "Breaking communication barriers with real-time ASL translation for healthcare environments.",
  imageSrc:    "/sign-now/Ready_to_Post_Images/Sign_Now_Hero.jpg",
  award:       "1ST PLACE \u2022 UMICH ROSS TECH INNOVATION JAM" as string | null,
  cursor:      "impact",
};

// Module 3: spring per spec
const SPRING = { type: "spring", stiffness: 300, damping: 24 } as const;

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
        data-cursor={project.cursor}
      >
        <motion.div
          whileTap={{ scale: 0.985 }}
          whileHover={{ scale: 0.998 }}
          transition={SPRING}
        >
          {/* Module 1: 16/9 ratio — maximum visual weight */}
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
            {/* Award badge in Brand Pink */}
            {project.award && (
              <p
                className="mb-1 text-[0.6rem] font-bold uppercase tracking-[0.18em]"
                style={{ color: "#FFB6C1" }}
              >
                {project.award}
              </p>
            )}

            {/* Module 2: tags — small, semi-transparent Deep Brown, no borders */}
            <p className="mb-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-page-text/35">
              {project.tags}
            </p>

            {/* Module 2: title — Deep Brown */}
            <h2
              className="hover-glow font-bold text-page-text"
              style={{
                fontSize:      "clamp(1.15rem, 2vw, 1.5rem)",
                letterSpacing: "-0.025em",
                lineHeight:    1.15,
              }}
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
    <div className="mx-auto max-w-7xl px-8 pt-16 pb-28 md:pt-20 md:pb-32">

      {/* Module 1: no 'Selected Work' label — heading only */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1
          className="font-bold text-page-text"
          style={{
            fontSize:      "clamp(1.75rem, 4vw, 2.5rem)",
            letterSpacing: "-0.03em",
            lineHeight:    1.1,
          }}
        >
          Design that moves people.
        </h1>
      </motion.div>

      {/* Module 1: 2-col, generous gap, no Coming Soon */}
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-14">
        <ProjectCard project={DISNEY} delay={0}    />
        <ProjectCard project={ASL}    delay={0.08} />
      </div>

    </div>
  );
}
