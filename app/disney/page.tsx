"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// ── Image paths (spaces → %20, + → %2B) ───────────────────────────────────────
const BASE = "/case_studies%20/Disney%2B";
const IMG = {
  hero:     `${BASE}/Disney%2B%20Hero%20Image/Tile.png`,
  lofi:     `${BASE}/Disney%2B%20Lofi%20Frames.jpg`,
  hifi:     `${BASE}/Disney%20HiFi%20Wireframes.png`,
  mainPage: `${BASE}/Main%20Page.png`,
  paris:    `${BASE}/Paris%20%2B%20Pasta.png`,
  travel:   `${BASE}/Travel%20Dashboard.png`,
};

// ── Helpers ────────────────────────────────────────────────────────────────────

function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="mb-8 flex items-baseline gap-3">
      <span
        className="text-xs font-semibold uppercase tracking-widest"
        style={{ color: "#F4ACB7" }}
      >
        {num}
      </span>
      <h2
        className="text-2xl font-bold text-page-text md:text-3xl"
        style={{ letterSpacing: "-0.02em" }}
      >
        {label}
      </h2>
    </div>
  );
}

function Divider() {
  return <hr className="my-16 border-page-text/10 md:my-20" />;
}

function CaseImage({
  src,
  alt,
  caption,
  rounded = "rounded-2xl",
}: {
  src: string;
  alt: string;
  caption?: string;
  rounded?: string;
}) {
  return (
    <figure className="w-full">
      <img
        src={src}
        alt={alt}
        className={`w-full h-auto block ${rounded}`}
      />
      {caption && (
        <figcaption className="mt-3 text-xs text-page-text/40 tracking-wide">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function DisneyPlusCaseStudy() {
  return (
    <div className="pb-24 md:pb-32">

      {/* ── Project header ───────────────────────────────────────────────────── */}
      <motion.div
        className="mx-auto max-w-7xl px-8 pt-24 md:pt-32"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-page-text/45 transition-colors hover:text-page-text"
        >
          <span aria-hidden>←</span> Back to Work
        </Link>

        {/* Category tag */}
        <p
          className="mt-10 text-xs font-semibold uppercase tracking-widest"
          style={{ color: "#F4ACB7" }}
        >
          Product Design · Streaming · Strategy
        </p>

        {/* Title */}
        <h1
          className="mt-4 max-w-5xl text-4xl font-bold text-page-text md:text-5xl lg:text-6xl"
          style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}
        >
          Disney+ Ecosystem
        </h1>

        {/* Tagline */}
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-page-text/70 md:text-xl">
          Bridging the gap between the living room and the Magic Kingdom so
          watching your favorite stories can take you to Disney{" "}
          <strong className="font-bold text-page-text">World</strong>.
        </p>

        {/* Metadata row */}
        <div className="mt-10 border-t border-page-text/12 pt-7">
          <div className="grid grid-cols-2 gap-x-10 gap-y-6 md:grid-cols-4">
            {[
              { label: "Role",     value: "UX Designer" },
              { label: "Timeline", value: "1 Day" },
              { label: "Award",    value: "1st Place \u2022 UMich Ross Tech Innovation Jam" },
              { label: "Tools",    value: "Figma, FigJam, Miro" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-page-text/35">
                  {label}
                </p>
                <p className="mt-1.5 text-sm font-medium text-page-text">
                  {value}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-7 border-b border-page-text/12" />
        </div>
      </motion.div>

      {/* ── Hero image ───────────────────────────────────────────────────────── */}
      <motion.div
        className="mx-auto mt-16 max-w-7xl px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <CaseImage src={IMG.hero} alt="Disney+ Ecosystem hero" rounded="rounded-3xl" />
      </motion.div>

      {/* ── 01 Overview ──────────────────────────────────────────────────────── */}
      <motion.section
        id="overview"
        className="mx-auto mt-20 max-w-7xl px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <SectionLabel num="01" label="Overview" />
        <ul className="space-y-4 max-w-3xl">
          {[
            <>Disney+ holds <strong className="font-bold text-page-text">157M+ subscribers</strong> yet its discovery experience drives passive behavior and churn.</>,
            <>Users spend <strong className="font-bold text-page-text">18+ minutes browsing</strong> before selecting content, or abandon the app entirely.</>,
            <>Disney Parks generate billions annually, yet <strong className="font-bold text-page-text">digital subscriptions create zero loyalty</strong> toward physical park visits.</>,
            <>A <strong className="font-bold text-page-text">unified ecosystem</strong> connecting streaming behavior to real-world park rewards has never been built.</>,
          ].map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-base leading-relaxed text-page-text/65">
              <span
                className="mt-[0.4em] h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: "#F4ACB7" }}
                aria-hidden
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </motion.section>

      <Divider />

      {/* ── 02 The Problem ───────────────────────────────────────────────────── */}
      <motion.section
        id="problem"
        className="mx-auto max-w-7xl px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <SectionLabel num="02" label="The Problem" />

        <div className="mb-14 grid gap-12 md:grid-cols-2">
          {/* Problem 1 */}
          <div>
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: "#F4ACB7" }}
            >
              Problem 01
            </p>
            <h3
              className="mb-5 text-lg font-bold text-page-text"
              style={{ letterSpacing: "-0.015em" }}
            >
              The Passive Scroll Trap
            </h3>
            <ul className="space-y-3">
              {[
                <>Users open the app with <strong className="font-bold text-page-text">clear intent</strong> but leave without watching.</>,
                <>Horizontal row layouts <strong className="font-bold text-page-text">reward familiarity</strong>, not discovery.</>,
                <>No mechanism surfaces content based on <strong className="font-bold text-page-text">how a user feels right now</strong>.</>,
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-page-text/65">
                  <span
                    className="mt-[0.4em] h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: "#F4ACB7" }}
                    aria-hidden
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Problem 2 */}
          <div>
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: "#F4ACB7" }}
            >
              Problem 02
            </p>
            <h3
              className="mb-5 text-lg font-bold text-page-text"
              style={{ letterSpacing: "-0.015em" }}
            >
              A Fractured Brand Universe
            </h3>
            <ul className="space-y-3">
              {[
                <>Disney Parks and Disney+ operate as <strong className="font-bold text-page-text">entirely separate revenue streams</strong>.</>,
                <>A subscriber who watches 200 hours of Marvel content gets <strong className="font-bold text-page-text">zero benefit</strong> toward a Disneyland trip.</>,
                <>Digital engagement generates <strong className="font-bold text-page-text">no loyalty signal</strong> for physical park conversion.</>,
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-page-text/65">
                  <span
                    className="mt-[0.4em] h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: "#F4ACB7" }}
                    aria-hidden
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <CaseImage
          src={IMG.lofi}
          alt="Lo-fi wireframes exploring the discovery problem"
          caption="Lo-fi wireframes: early exploration of the discovery problem space"
        />
      </motion.section>

      <Divider />

      {/* ── 03 Personas ──────────────────────────────────────────────────────── */}
      <motion.section
        id="personas"
        className="mx-auto max-w-7xl px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <SectionLabel num="03" label="Personas" />
        <p className="mb-10 max-w-xl text-base leading-relaxed text-page-text/60">
          Three archetypes shaped every design decision, each representing a
          distinct friction point in the current Disney+ experience.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              label:    "Persona 01",
              name:     "The Overwhelmed Viewer",
              need:     "Mood-based guidance",
              quote:    "I just want something to watch tonight. I don't know what, I just know how I feel.",
              solution: "Cultural Immersion Discovery",
            },
            {
              label:    "Persona 02",
              name:     "The Passive Scroller",
              need:     "Faster decisions",
              quote:    "I scroll for 20 minutes and end up rewatching something I've already seen.",
              solution: "Rapid Discovery Feed",
            },
            {
              label:    "Persona 03",
              name:     "The Park Super-Fan",
              need:     "Real-world rewards",
              quote:    "I watch everything Disney makes, but my subscription never does anything for my trip planning.",
              solution: "Embedded Rewards Ecosystem",
            },
          ].map((persona) => (
            <div key={persona.name} className="border-t border-page-text/12 pt-6">
              <p
                className="mb-2 text-xs font-bold uppercase tracking-widest"
                style={{ color: "#F4ACB7" }}
              >
                {persona.label}
              </p>
              <h3 className="mb-1 text-base font-bold text-page-text">
                {persona.name}
              </h3>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-page-text/35">
                {persona.need}
              </p>
              <p className="mb-5 text-sm italic leading-relaxed text-page-text/60">
                &ldquo;{persona.quote}&rdquo;
              </p>
              <p className="text-xs font-semibold uppercase tracking-widest text-page-text/40">
                Solved by: {persona.solution}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      <Divider />

      {/* ── 04 The Solutions ─────────────────────────────────────────────────── */}
      <motion.section
        id="solutions"
        className="mx-auto max-w-7xl px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <SectionLabel num="04" label="The Solutions" />

        {/* Solution 01 */}
        <div className="mb-20">
          <p
            className="mb-2 text-xs font-bold uppercase tracking-widest"
            style={{ color: "#F4ACB7" }}
          >
            Solution 01
          </p>
          <h3
            className="mb-4 text-xl font-bold text-page-text"
            style={{ letterSpacing: "-0.02em" }}
          >
            Cultural Immersion Discovery
          </h3>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-page-text/65">
            This feature allows users to filter by culture, immersing themselves
            in curated content that acts as a digital window to France or other
            regions, providing a highly personalized search experience. Users
            explore stories through the lens of place, language, and tradition
            rather than genre alone.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <CaseImage src={IMG.paris} alt="Cultural immersion content discovery" caption="Culture-filtered content: travel through your screen" />
            <CaseImage src={IMG.hifi} alt="Hi-fi wireframes for cultural discovery flow" caption="Hi-fi wireframes: cultural discovery flow" />
          </div>
        </div>

        {/* Solution 02 */}
        <div className="mb-20">
          <p
            className="mb-2 text-xs font-bold uppercase tracking-widest"
            style={{ color: "#F4ACB7" }}
          >
            Solution 02
          </p>
          <h3
            className="mb-4 text-xl font-bold text-page-text"
            style={{ letterSpacing: "-0.02em" }}
          >
            Rapid Discovery Feed
          </h3>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-page-text/65">
            A vertical feed presents one title at a time with a short preview
            clip, a one-sentence hook, and a runtime. Users make a single
            decision: add to watchlist or move on. This interaction collapses{" "}
            <strong className="font-bold text-page-text">
              18 minutes of passive browsing
            </strong>{" "}
            into under 2 minutes of intentional choices.
          </p>
          <CaseImage
            src={IMG.mainPage}
            alt="Rapid discovery feed interface"
            caption="Discovery feed: one title, one decision"
          />
        </div>

        {/* Solution 03 */}
        <div>
          <p
            className="mb-2 text-xs font-bold uppercase tracking-widest"
            style={{ color: "#F4ACB7" }}
          >
            Solution 03
          </p>
          <h3
            className="mb-4 text-xl font-bold text-page-text"
            style={{ letterSpacing: "-0.02em" }}
          >
            Embedded Rewards Ecosystem
          </h3>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-page-text/65">
            An incentive-driven ecosystem where{" "}
            <strong className="font-bold text-page-text">
              watching content unlocks tangible park perks
            </strong>
            : ticket discounts, priority boarding, and exclusive merchandise.
            A unified dashboard tracks progress across both streaming and park
            visits, converting passive subscribers into active participants in
            the Disney universe.
          </p>
          <CaseImage
            src={IMG.travel}
            alt="Rewards dashboard connecting Disney+ to Disney Parks"
            caption="Rewards dashboard: streaming activity drives real-world park perks"
          />
        </div>
      </motion.section>

      {/* ── Back to Work ─────────────────────────────────────────────────────── */}
      <div className="mx-auto mt-20 max-w-7xl px-8 border-t border-page-text/10 pt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-page-text/45 transition-colors hover:text-page-text"
        >
          <span aria-hidden>←</span> Back to Work
        </Link>
      </div>

    </div>
  );
}
