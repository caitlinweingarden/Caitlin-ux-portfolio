"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SKILLS = [
  "UX Research & Design",
  "Accessibility (WCAG)",
  "Design Systems",
  "Figma, Adobe Suite",
  "React, HTML/CSS",
  "Translation & Localization",
];

const INTERESTS = [
  "Painting",
  "Learning languages",
  "Traveling",
  "Photography",
];

const VALUES = [
  "Accessibility is non-negotiable",
  "Design should work for everyone",
  "Art and UX inform each other",
  "Continuous learning and growth",
];

export default function AboutPage() {
  return (
    <div className="px-6 pt-24 pb-16 md:px-12 md:pt-32 md:pb-20 lg:px-16 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <motion.header
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="font-heading text-4xl font-bold leading-tight text-page-text dark:text-dark-text md:text-5xl lg:text-6xl">
            About
          </h1>

          <div className="mt-8 relative h-64 w-64 overflow-hidden rounded-2xl shadow-soft md:h-80 md:w-80">
            <Image
              src="/images/profile.jpg"
              alt="Caitlin Weingarden portrait"
              fill
              className="profile-image"
              style={{ objectFit: "cover", objectPosition: "center center" }}
              priority
            />
          </div>

          <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-page-text/90 dark:text-dark-text/90 md:text-lg">
            I&apos;m Caitlin—artist turned product designer. I blend creativity
            with user-centered thinking to create accessible experiences that
            work for everyone, everywhere.
          </p>
        </motion.header>

        <div className="space-y-16 md:space-y-20">
          {/* Background */}
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="mb-4 font-heading text-3xl font-semibold italic text-page-text dark:text-dark-text md:text-4xl">
              Background
            </h2>
            <p className="max-w-2xl font-sans text-base leading-relaxed text-page-text/90 dark:text-dark-text/90 md:text-lg">
              From artist to product designer, I blend creativity with
              user-centered thinking to create accessible experiences. What
              drives my work is the belief that great design should be
              inclusive—reaching people across languages, abilities, and
              contexts.
            </p>
          </motion.section>

          {/* Skills */}
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="mb-6 font-heading text-3xl font-semibold italic text-page-text dark:text-dark-text md:text-4xl">
              Skills & expertise
            </h2>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SKILLS.map((skill) => (
                <li
                  key={skill}
                  className="rounded-2xl border border-page-text/10 bg-pale-blush/80 p-6 dark:border-dark-text/10 dark:bg-dark-cards"
                >
                  <span className="font-sans text-base leading-relaxed text-page-text dark:text-dark-text">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Languages */}
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="mb-4 font-heading text-3xl font-semibold italic text-page-text dark:text-dark-text md:text-4xl">
              Languages & global mindset
            </h2>
            <p className="mb-4 max-w-2xl font-sans text-base leading-relaxed text-page-text/90 dark:text-dark-text/90 md:text-lg">
              I study languages and cultures. Currently learning Japanese
              (日本語). I&apos;m passionate about making design accessible
              worldwide—language and locale aren&apos;t afterthoughts, they&apos;re
              part of the experience.
            </p>
            <p className="max-w-2xl font-sans text-base leading-relaxed text-page-text/90 dark:text-dark-text/90 md:text-lg">
              <span
                className="font-heading italic text-mushroom-taupe dark:text-mist-sage"
                lang="ja"
              >
                デザインはすべての人のためのものです
              </span>
              {" — "}
              Design is for everyone.
            </p>
          </motion.section>

          {/* Interests */}
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="mb-4 font-heading text-2xl font-semibold text-page-text dark:text-dark-text md:text-3xl">
              When I&apos;m not designing…
            </h3>
            <ul className="flex flex-wrap gap-4">
              {INTERESTS.map((interest) => (
                <li
                  key={interest}
                  className="rounded-full bg-mushroom-taupe/20 px-4 py-2 font-sans text-sm font-medium tracking-wide text-page-text dark:bg-dark-text/20 dark:text-dark-text"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Values */}
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="mb-6 font-heading text-3xl font-semibold italic text-page-text dark:text-dark-text md:text-4xl">
              Values & philosophy
            </h2>
            <ul className="space-y-4">
              {VALUES.map((value) => (
                <li
                  key={value}
                  className="flex items-start gap-3 font-sans text-base leading-relaxed text-page-text/90 dark:text-dark-text/90 md:text-lg"
                >
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-mist-sage"
                    aria-hidden
                  />
                  {value}
                </li>
              ))}
            </ul>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
