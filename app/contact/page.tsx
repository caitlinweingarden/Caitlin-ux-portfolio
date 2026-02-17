"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen px-6 pt-32 pb-16 md:px-12 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-sans text-5xl font-bold leading-tight text-page-text dark:text-dark-text md:text-6xl">
            Let's Connect
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-page-text/80 dark:text-dark-text/80">
            I'd love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hello.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-2xl bg-pale-blush p-8 shadow-soft dark:bg-dark-cards">
            <h2 className="font-sans text-2xl font-semibold text-page-text dark:text-dark-text">
              Email
            </h2>
            <a
              href="mailto:hello@caitlinweingarden.com"
              className="mt-4 inline-block text-lg text-mushroom-taupe transition-colors hover:text-accent-sage dark:text-mist-sage dark:hover:text-accent-sage"
            >
              hello@caitlinweingarden.com
            </a>
          </div>

          <div className="rounded-2xl bg-lavender-blush p-8 shadow-soft dark:bg-dark-cards">
            <h2 className="font-sans text-2xl font-semibold text-page-text dark:text-dark-text">
              LinkedIn
            </h2>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-lg text-mushroom-taupe transition-colors hover:text-accent-sage dark:text-mist-sage dark:hover:text-accent-sage"
            >
              Connect on LinkedIn →
            </a>
          </div>

          <div className="rounded-2xl bg-mist-sage/30 p-8 shadow-soft dark:bg-dark-cards">
            <h2 className="font-sans text-2xl font-semibold text-page-text dark:text-dark-text">
              Location
            </h2>
            <p className="mt-4 text-lg text-page-text/80 dark:text-dark-text/80">
              Based in [Your City] and available for remote work
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg italic text-page-text/60 dark:text-dark-text/60">
            Looking forward to hearing from you!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
