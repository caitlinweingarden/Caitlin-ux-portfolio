"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-20 lg:pb-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-4xl font-bold leading-tight text-page-text md:text-5xl lg:text-6xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Let&apos;s Connect
            </h1>
            <p className="mt-6 text-base leading-relaxed text-page-text/70 md:text-lg">
              I&apos;d love to hear from you! Whether you have a project in mind,
              want to collaborate, or just want to say hello.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl bg-pale-blush p-8 shadow-soft">
              <h2 className="text-2xl font-semibold text-page-text md:text-3xl">
                Email
              </h2>
              <a
                href="mailto:hello@caitlinweingarden.com"
                className="mt-4 inline-block text-base text-mushroom-taupe transition-colors duration-300 hover:text-accent-sage md:text-lg"
              >
                hello@caitlinweingarden.com
              </a>
            </div>

            <div className="rounded-2xl bg-warm-sand p-8 shadow-soft">
              <h2 className="text-2xl font-semibold text-page-text md:text-3xl">
                LinkedIn
              </h2>
              <a
                href="https://linkedin.com/in/caitlinweingarden"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-base text-mushroom-taupe transition-colors duration-300 hover:text-accent-sage md:text-lg"
              >
                Connect on LinkedIn →
              </a>
            </div>

            <div className="rounded-2xl bg-accent/15 p-8 shadow-soft">
              <h2 className="text-2xl font-semibold text-page-text md:text-3xl">
                Location
              </h2>
              <p className="mt-4 text-base text-page-text/70 md:text-lg">
                Based in [Your City] and available for remote work
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-base italic text-page-text/55 md:text-lg">
              Looking forward to hearing from you!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
