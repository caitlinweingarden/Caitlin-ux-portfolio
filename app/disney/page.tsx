"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// ── Image paths ────────────────────────────────────────────────────────────────
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
      <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#FFB6C1" }}>
        {num}
      </span>
      <h2 className="text-2xl font-bold text-page-text md:text-3xl" style={{ letterSpacing: "-0.02em" }}>
        {label}
      </h2>
    </div>
  );
}

function Divider() {
  return <hr className="my-16 border-page-text/10 md:my-20" />;
}

function CaseImage({ src, alt, caption, rounded = "rounded-2xl" }: {
  src: string; alt: string; caption?: string; rounded?: string;
}) {
  return (
    <figure className="w-full">
      <img src={src} alt={alt} className={`w-full h-auto block ${rounded}`} />
      {caption && (
        <figcaption className="mt-3 text-xs text-page-text/40 tracking-wide">{caption}</figcaption>
      )}
    </figure>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm leading-relaxed text-page-text/65">
      <span
        className="mt-[0.4em] h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: "#FFB6C1" }}
        aria-hidden
      />
      <span>{children}</span>
    </li>
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
        data-cursor="streaming"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-page-text/45 transition-colors hover:text-page-text"
        >
          <span aria-hidden>←</span> Back to Work
        </Link>

        <p className="mt-10 text-xs font-semibold uppercase tracking-widest" style={{ color: "#FFB6C1" }}>
          Product Design · Streaming · Strategy
        </p>

        <h1
          className="mt-4 max-w-5xl text-4xl font-bold text-page-text md:text-5xl lg:text-6xl"
          style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}
        >
          Connecting{" "}
          <span
            style={{
              textDecoration:          "underline",
              textDecorationColor:     "rgba(255,182,193,0.55)",
              textUnderlineOffset:     "5px",
              textDecorationThickness: "2px",
            }}
          >
            Digital Stories
          </span>{" "}
          to{" "}
          <span
            style={{
              textDecoration:          "underline",
              textDecorationColor:     "rgba(255,182,193,0.55)",
              textUnderlineOffset:     "5px",
              textDecorationThickness: "2px",
            }}
          >
            Physical Magic
          </span>
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-page-text/70 md:text-xl">
          Bridging the gap between{" "}
          <span style={{ textDecoration: "underline", textDecorationColor: "rgba(255,182,193,0.65)", textUnderlineOffset: "4px", textDecorationThickness: "1.5px" }}>
            digital streaming
          </span>{" "}
          and{" "}
          <span style={{ textDecoration: "underline", textDecorationColor: "rgba(255,182,193,0.65)", textUnderlineOffset: "4px", textDecorationThickness: "1.5px" }}>
            physical experiences
          </span>
          , turning every story watched into a step toward the Magic Kingdom.
        </p>

        {/* Problem / Solution / Impact elevator pitch */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              label:  "Problem",
              accent: "#2D1B14",
              bg:     "rgba(45,27,20,0.05)",
              text:   "Users struggle to find tangible value in ecosystem loyalty, missing out on the physical-world magic Disney offers.",
            },
            {
              label:  "Solution",
              accent: "#FFB6C1",
              bg:     "rgba(255,182,193,0.12)",
              text:   "A unified Disney+ ecosystem where streaming activity directly translates to real-world park perks and travel rewards.",
            },
            {
              label:  "Impact",
              accent: "#2D1B14",
              bg:     "rgba(45,27,20,0.05)",
              text:   "Increased subscriber retention, deeper brand loyalty, and a measurable bridge between digital and physical Disney experiences.",
            },
          ].map(({ label, accent, bg, text }) => (
            <div key={label} className="rounded-2xl p-6" style={{ background: bg, border: "1px solid rgba(45,27,20,0.08)" }}>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>{label}</p>
              <p className="text-sm leading-relaxed text-page-text/70">{text}</p>
            </div>
          ))}
        </div>

        {/* Metadata row */}
        <div className="mt-10 border-t border-page-text/12 pt-7">
          <div className="grid grid-cols-2 gap-x-10 gap-y-6 md:grid-cols-4">
            {[
              { label: "Role",     value: "UX Designer" },
              { label: "Timeline", value: "1 Day Sprint" },
              { label: "Award",    value: "1st Place \u2022 UMich Ross Tech Innovation Jam" },
              { label: "Tools",    value: "Figma, FigJam, Miro" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-page-text/35">{label}</p>
                <p className="mt-1.5 text-sm font-medium text-page-text">{value}</p>
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
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionLabel num="01" label="Overview" />
        <ul className="space-y-4 max-w-3xl">
          <Bullet>Disney+ holds <strong className="font-bold text-page-text">157M+ subscribers</strong> yet its discovery experience drives passive behavior and churn.</Bullet>
          <Bullet>Users spend <strong className="font-bold text-page-text">18+ minutes browsing</strong> before selecting content, or abandon the app entirely.</Bullet>
          <Bullet>Disney Parks generate billions annually, yet <strong className="font-bold text-page-text">digital subscriptions create zero loyalty</strong> toward physical park visits.</Bullet>
          <Bullet>A <strong className="font-bold text-page-text">unified ecosystem</strong> connecting streaming behavior to real-world park rewards has never been built.</Bullet>
        </ul>
      </motion.section>

      <Divider />

      {/* ── 02 The Problem ───────────────────────────────────────────────────── */}
      <motion.section
        id="problem"
        className="mx-auto max-w-7xl px-8"
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionLabel num="02" label="The Problem" />

        {/* Module 4: Rewritten problem statement */}
        <div
          className="mb-12 rounded-2xl p-8 max-w-3xl"
          style={{ background: "rgba(255,182,193,0.08)", border: "1.5px solid rgba(255,182,193,0.30)" }}
        >
          <p className="text-base leading-relaxed text-page-text/80 md:text-lg">
            Users struggle to find tangible value in ecosystem loyalty, missing
            out on the physical-world magic Disney offers.
          </p>
        </div>

        <div className="mb-14 grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#FFB6C1" }}>Problem 01</p>
            <h3 className="mb-5 text-lg font-bold text-page-text" style={{ letterSpacing: "-0.015em" }}>The Passive Scroll Trap</h3>
            <ul className="space-y-3">
              <Bullet>Users open the app with <strong className="font-bold text-page-text">clear intent</strong> but leave without watching.</Bullet>
              <Bullet>Horizontal row layouts <strong className="font-bold text-page-text">reward familiarity</strong>, not discovery.</Bullet>
              <Bullet>No mechanism surfaces content based on <strong className="font-bold text-page-text">how a user feels right now</strong>.</Bullet>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#FFB6C1" }}>Problem 02</p>
            <h3 className="mb-5 text-lg font-bold text-page-text" style={{ letterSpacing: "-0.015em" }}>A Fractured Brand Universe</h3>
            <ul className="space-y-3">
              <Bullet>Disney Parks and Disney+ operate as <strong className="font-bold text-page-text">entirely separate revenue streams</strong>.</Bullet>
              <Bullet>A subscriber who watches 200 hours of Marvel content gets <strong className="font-bold text-page-text">zero benefit</strong> toward a Disneyland trip.</Bullet>
              <Bullet>Digital engagement generates <strong className="font-bold text-page-text">no loyalty signal</strong> for physical park conversion.</Bullet>
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
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionLabel num="03" label="Personas" />
        <p className="mb-10 max-w-xl text-base leading-relaxed text-page-text/60">
          Three real archetypes shaped every design decision, each representing
          a distinct friction point in the current Disney+ experience.
        </p>

        {/* Module 4: Named personas with emoji */}
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              label:    "Persona 01",
              emoji:    "👑",
              name:     "Maya",
              role:     "The Overwhelmed Viewer",
              need:     "Mood-based guidance",
              quote:    "I just want something to watch tonight. I don't know what, I just know how I feel.",
              solution: "Cultural Immersion Discovery",
            },
            {
              label:    "Persona 02",
              emoji:    "🎞️",
              name:     "Leo",
              role:     "The Passive Scroller",
              need:     "Faster decisions",
              quote:    "I scroll for 20 minutes and end up rewatching something I've already seen.",
              solution: "Free Travel Perks System",
            },
            {
              label:    "Persona 03",
              emoji:    "🏰",
              name:     "Aria",
              role:     "The Park Super-Fan",
              need:     "Real-world rewards",
              quote:    "I watch everything Disney makes, but my subscription never does anything for my trip planning.",
              solution: "Embedded Rewards Ecosystem",
            },
          ].map((persona) => (
            <div key={persona.name} className="rounded-2xl p-6" style={{ border: "1px solid rgba(45,27,20,0.10)", background: "rgba(255,182,193,0.04)" }}>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#FFB6C1" }}>
                {persona.label}
              </p>
              <div className="mb-3 flex items-center gap-2">
                <span className="text-xl" aria-hidden>{persona.emoji}</span>
                <div>
                  <h3 className="text-base font-bold text-page-text leading-tight">{persona.name}</h3>
                  <p className="text-xs text-page-text/45">{persona.role}</p>
                </div>
              </div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-page-text/35">{persona.need}</p>
              <p className="mb-5 text-sm italic leading-relaxed text-page-text/60">&ldquo;{persona.quote}&rdquo;</p>
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
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionLabel num="04" label="The Solutions" />

        {/* Solution 01: Cultural Immersion Discovery */}
        <div className="mb-20">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#FFB6C1" }}>Solution 01</p>
          <h3 className="mb-4 text-xl font-bold text-page-text" style={{ letterSpacing: "-0.02em" }}>
            Cultural Immersion Discovery ✨
          </h3>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-page-text/65">
            This feature lets users filter by{" "}
            <strong style={{ fontWeight: 700, textDecoration: "underline", textDecorationColor: "rgba(255,182,193,0.85)", textUnderlineOffset: "3px", textDecorationThickness: "1.5px" }}>culture and region</strong>,
            immersing themselves in curated content as a digital window to France, Japan,
            or anywhere in the Disney universe. Users explore stories through
            the lens of place, language, and tradition rather than genre alone.
            Maya gets what she needs in{" "}
            <strong style={{ fontWeight: 700, textDecoration: "underline", textDecorationColor: "rgba(255,182,193,0.85)", textUnderlineOffset: "3px", textDecorationThickness: "1.5px" }}>under 60 seconds</strong>.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <CaseImage src={IMG.paris} alt="Cultural immersion content discovery" caption="Culture-filtered content: travel through your screen" />
            <CaseImage src={IMG.hifi} alt="Hi-fi wireframes for cultural discovery flow" caption="Hi-fi wireframes: cultural discovery flow" />
          </div>
        </div>

        {/* Solution 02: Free Travel Perks (replaces Rapid Discovery) */}
        <div className="mb-20">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#FFB6C1" }}>Solution 02</p>
          <h3 className="mb-4 text-xl font-bold text-page-text" style={{ letterSpacing: "-0.02em" }}>
            Free Travel Perks & Embedded Rewards System ✈️
          </h3>
          <p className="mb-6 max-w-2xl text-base leading-relaxed text-page-text/65">
            Exploring the Disney universe directly translates to travel
            accumulation. Every episode watched, every world explored, earns
            points toward{" "}
            <strong style={{ fontWeight: 700, textDecoration: "underline", textDecorationColor: "rgba(255,182,193,0.85)", textUnderlineOffset: "3px", textDecorationThickness: "1.5px" }}>real-world Disney Park perks</strong>.
            Leo stops passively scrolling because now every watch decision has{" "}
            <strong style={{ fontWeight: 700, textDecoration: "underline", textDecorationColor: "rgba(255,182,193,0.85)", textUnderlineOffset: "3px", textDecorationThickness: "1.5px" }}>tangible value</strong>.
          </p>

          {/* The flow detail */}
          <div className="mb-8 grid gap-5 md:grid-cols-3">
            {[
              {
                step:  "01 Sign-Up",
                icon:  "✦",
                title: "One-Tap Enrollment",
                desc:  "A non-intrusive pop-up appears on first launch: 'Join Disney Rewards and earn park perks for every title you watch.' Single tap to enroll.",
              },
              {
                step:  "02 Earn",
                icon:  "🎬",
                title: "Earn on Every Movie",
                desc:  "On any movie page, e.g., Moana, an 'Earn Rewards' button sits below the play button. Watching earns points. A persistent 'View Points' CTA shows live balance.",
              },
              {
                step:  "03 Redeem",
                icon:  "🏰",
                title: "Real-World Magic",
                desc:  "Points convert to ticket discounts, priority park boarding, and exclusive merchandise, turning every viewing session into a step toward a Disney trip.",
              },
            ].map(({ step, icon, title, desc }) => (
              <div key={step} className="rounded-2xl p-6" style={{ background: "rgba(255,182,193,0.06)", border: "1px solid rgba(255,182,193,0.20)" }}>
                <p className="mb-1 text-[0.6rem] font-bold uppercase tracking-widest" style={{ color: "#FFB6C1" }}>{step}</p>
                <p className="mb-2 text-lg" aria-hidden>{icon}</p>
                <h4 className="mb-2 text-sm font-bold text-page-text">{title}</h4>
                <p className="text-xs leading-relaxed text-page-text/60">{desc}</p>
              </div>
            ))}
          </div>

          {/* Watch-to-Unlock callout */}
          <div
            className="mb-8 rounded-2xl p-7 max-w-3xl"
            style={{ background: "rgba(45,27,20,0.04)", border: "1px solid rgba(45,27,20,0.10)" }}
          >
            <p className="mb-3 text-[0.6rem] font-bold uppercase tracking-[0.18em]" style={{ color: "#FFB6C1" }}>
              Watch-to-Unlock
            </p>
            <p className="text-sm leading-relaxed text-page-text/75">
              Watching the <strong className="font-bold text-page-text">French Films</strong> section
              on Disney+ unlocks tailored rewards like discounted packages for{" "}
              <strong className="font-bold text-page-text">Disneyland Paris</strong>: the content
              becomes a passport. Watching{" "}
              <strong className="font-bold text-page-text">Moana</strong> surfaces direct CTAs
              and accelerates progress toward{" "}
              <strong className="font-bold text-page-text">Aulani Resort in Hawaii</strong>.
              Each film is a doorway. Every watch session earns the viewer a step closer
              to physically living the story they just watched.
            </p>
          </div>

          <CaseImage
            src={IMG.mainPage}
            alt="Rewards-integrated movie page with Earn Rewards and View Points CTAs"
            caption="Movie page flow: Earn Rewards button below play, View Points CTA shows live balance"
          />
        </div>

        {/* Solution 03: Embedded Rewards Ecosystem */}
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#FFB6C1" }}>Solution 03</p>
          <h3 className="mb-4 text-xl font-bold text-page-text" style={{ letterSpacing: "-0.02em" }}>
            Embedded Rewards Ecosystem 🗺️
          </h3>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-page-text/65">
            A unified dashboard tracks progress across both streaming and park
            visits. Aria 🏰 sees her loyalty reflected in one place, converting
            passive subscribers into <strong className="font-bold text-page-text">active participants</strong> in
            the Disney universe. Ticket discounts, priority boarding, and
            exclusive merchandise are always one tap away.
          </p>
          <CaseImage
            src={IMG.travel}
            alt="Rewards dashboard connecting Disney+ to Disney Parks"
            caption="Rewards dashboard: streaming activity drives real-world park perks"
          />
        </div>
      </motion.section>

      <Divider />

      {/* ── 05 Impact ────────────────────────────────────────────────────────── */}
      <motion.section
        id="impact"
        className="mx-auto max-w-7xl px-8"
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionLabel num="05" label="Impact" />
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-page-text/65">
          The ecosystem bridge between Disney+ streaming and Disney Parks
          creates a flywheel: more watching drives more park visits, and park
          visits deepen emotional investment in the content catalog.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {[
            {
              stat:   "Subscriber Retention",
              detail: "Loyalty rewards reduce churn by giving subscribers a concrete reason to stay active beyond the content library.",
            },
            {
              stat:   "Brand Loyalty",
              detail: "Connecting digital behavior to physical experiences creates emotional ownership of the Disney brand across every touchpoint.",
            },
            {
              stat:   "Cross-Channel Revenue",
              detail: "Park visits driven by streaming rewards represent a new, measurable revenue bridge between Disney's two largest business units.",
            },
          ].map(({ stat, detail }) => (
            <div key={stat} className="border-t border-page-text/12 pt-6">
              <h3 className="mb-3 text-base font-bold text-page-text" style={{ letterSpacing: "-0.01em" }}>
                {stat}
              </h3>
              <p className="text-sm leading-relaxed text-page-text/60">{detail}</p>
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl p-8 max-w-3xl"
          style={{ background: "rgba(255,182,193,0.08)", border: "1.5px solid rgba(255,182,193,0.25)" }}
        >
          <p className="text-base leading-relaxed text-page-text/80 md:text-lg">
            "The most powerful loyalty programs are the ones you don't feel like
            a member of. You feel like a participant in something bigger." This
            ecosystem makes every subscriber feel like the Disney universe is
            expanding for them personally. ♡
          </p>
        </div>
      </motion.section>

      <Divider />

      {/* ── 06 Ecosystem Growth ──────────────────────────────────────────────── */}
      <motion.section
        id="ecosystem-growth"
        className="mx-auto max-w-7xl px-8"
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionLabel num="06" label="Ecosystem Growth" />
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-page-text/65">
          The streaming platform becomes the engine of Disney&apos;s physical
          business. Every viewer is a potential visitor. Every watch session is
          a conversion opportunity.
        </p>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="rounded-2xl p-7" style={{ background: "rgba(255,182,193,0.06)", border: "1px solid rgba(255,182,193,0.20)" }}>
            <p className="mb-3 text-[0.6rem] font-bold uppercase tracking-[0.18em]" style={{ color: "#FFB6C1" }}>
              Parks & Resorts
            </p>
            <h3 className="mb-3 text-base font-bold text-page-text" style={{ letterSpacing: "-0.015em" }}>
              Streaming Drives Park Bookings
            </h3>
            <p className="text-sm leading-relaxed text-page-text/65">
              Watching Disney Parks content, planning vlogs, and behind-the-scenes
              features earns points redeemable for{" "}
              <strong className="font-bold text-page-text">park ticket discounts</strong>,{" "}
              <strong className="font-bold text-page-text">priority boarding passes</strong>,
              and exclusive merchandise drops. Disney Parks sees measurable booking
              lift directly attributed to Disney+ activity.
            </p>
          </div>

          <div className="rounded-2xl p-7" style={{ background: "rgba(255,182,193,0.06)", border: "1px solid rgba(255,182,193,0.20)" }}>
            <p className="mb-3 text-[0.6rem] font-bold uppercase tracking-[0.18em]" style={{ color: "#FFB6C1" }}>
              Disney Cruise Line
            </p>
            <h3 className="mb-3 text-base font-bold text-page-text" style={{ letterSpacing: "-0.015em" }}>
              Rewarding the Super-Fan at Sea
            </h3>
            <p className="text-sm leading-relaxed text-page-text/65">
              High-engagement subscribers unlock early access to{" "}
              <strong className="font-bold text-page-text">Disney Cruise Line cabin upgrades</strong>{" "}
              and voyage packages. Watching Disney&apos;s ocean and adventure catalog
              surfaces contextual CTAs for cruise bookings, turning passive content
              consumption into a scalable cross-platform revenue stream.
            </p>
          </div>
        </div>

        {/* Viewer-to-Visitor callout */}
        <div
          className="rounded-2xl p-8 max-w-3xl"
          style={{ background: "rgba(255,182,193,0.10)", border: "1.5px solid rgba(255,182,193,0.30)" }}
        >
          <p className="mb-3 text-[0.6rem] font-bold uppercase tracking-[0.18em]" style={{ color: "#FFB6C1" }}>
            The North Star
          </p>
          <p className="text-base leading-relaxed text-page-text/80 md:text-lg">
            Disney+ stops being a subscription you pay for and becomes an
            experience you live. The goal is to turn every{" "}
            <strong className="font-bold text-page-text">viewer into a visitor</strong>,
            and every park memory into a reason to come back to the screen. ♡
          </p>
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
