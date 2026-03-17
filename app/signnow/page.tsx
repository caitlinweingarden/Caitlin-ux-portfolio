"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// ── Image paths ────────────────────────────────────────────────────────────────
const IMG = {
  hero:    "/sign-now/Ready_to_Post_Images/Sign_Now_Hero.jpg",
  lofi:    "/sign-now/LoFi%20WireFrames.png",
  lofi_bw: "/sign-now/LoFi%20WireFrames%20(Black%20and%20White)%201.png",
  hifi:    "/sign-now/HiFi_Images.png",
  hifi_v2: "/sign-now/Mid_Fi.png",
  dynamic: "/sign-now/Final%20Design%20(Dynamic%20Island).png",
  persona: "/sign-now/Primary%20Persona.png",
  miro:    "/sign-now/MiroBoardSignNow.png",
};

// ── Helpers ────────────────────────────────────────────────────────────────────

function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="mb-8 flex items-baseline gap-3">
      <span
        className="text-xs font-bold uppercase tracking-widest"
        style={{ color: "#FFB6C1" }}
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
  rounded = "rounded-3xl",
}: {
  src: string;
  alt: string;
  caption?: string;
  rounded?: string;
}) {
  return (
    <figure className="w-full">
      <img src={src} alt={alt} className={`w-full h-auto block ${rounded}`} />
      {caption && (
        <figcaption className="mt-3 text-xs text-page-text/40 tracking-wide">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function Sticker({ children, rotate = "-2deg" }: { children: string; rotate?: string }) {
  return (
    <span
      className="inline-block rounded-lg px-3 py-1.5 text-xs font-bold text-page-text"
      style={{
        backgroundColor: "#FFB6C1",
        transform: `rotate(${rotate})`,
        letterSpacing: "0.01em",
        lineHeight: 1.4,
      }}
    >
      {children}
    </span>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-base leading-relaxed text-page-text/65">
      <span
        className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: "#FFB6C1" }}
        aria-hidden
      />
      <span>{children}</span>
    </li>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SignNowCaseStudy() {
  return (
    <div className="pb-24 md:pb-32">

      {/* ── Project header ───────────────────────────────────────────────────── */}
      {/* Module 6: data-cursor="impact" triggers "IMPROVING LIVES ♡" on hover */}
      <motion.div
        className="mx-auto max-w-7xl px-8 pt-24 md:pt-32"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        data-cursor="impact"
      >
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-page-text/45 transition-colors hover:text-page-text"
        >
          <span aria-hidden>←</span> Back to Work
        </Link>

        {/* Category tag */}
        <p
          className="mt-10 text-xs font-bold uppercase tracking-widest"
          style={{ color: "#FFB6C1" }}
        >
          UX Design · Accessibility · Healthcare
        </p>

        {/* Title */}
        <h1
          className="mt-4 max-w-4xl text-4xl font-bold text-page-text md:text-5xl lg:text-6xl"
          style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}
        >
          Audio to Sign Language Translator
        </h1>

        {/* Tagline */}
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-page-text/70 md:text-xl">
          How can we empower Deaf users to &ldquo;listen&rdquo; without always
          relying on an interpreter?
        </p>

        {/* Module 1: Problem / Solution / Impact elevator pitch */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              label:  "Problem",
              accent: "#2D1B14",
              bg:     "rgba(45,27,20,0.05)",
              text:   "Deaf individuals face life-threatening communication barriers in high-stakes environments.",
            },
            {
              label:  "Solution",
              accent: "#FFB6C1",
              bg:     "rgba(255,182,193,0.12)",
              text:   "A real-time, human-centric AR bridge connecting ASL users with hearing professionals.",
            },
            {
              label:  "Impact",
              accent: "#2D1B14",
              bg:     "rgba(45,27,20,0.05)",
              text:   "Transforming isolation into agency, ensuring every deaf individual is heard when it matters most.",
            },
          ].map(({ label, accent, bg, text }) => (
            <div
              key={label}
              className="rounded-2xl p-6"
              style={{ background: bg, border: "1px solid rgba(45,27,20,0.08)" }}
            >
              <p
                className="mb-2 text-xs font-bold uppercase tracking-widest"
                style={{ color: accent }}
              >
                {label}
              </p>
              <p className="text-sm leading-relaxed text-page-text/70">{text}</p>
            </div>
          ))}
        </div>

        {/* Metadata row */}
        <div className="mt-10 border-t border-page-text/12 pt-7">
          <div className="grid grid-cols-2 gap-x-10 gap-y-6 md:grid-cols-4">
            {[
              { label: "Role",     value: "Lead UX Designer" },
              { label: "Timeline", value: "Fall 2025 \u00b7 6 Weeks" },
              { label: "Award",    value: "1st Place \u2022 UMich Ross Tech Innovation Jam" },
              { label: "Tools",    value: "Figma, FigJam, Miro" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-page-text/35">
                  {label}
                </p>
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
        <CaseImage
          src={IMG.hero}
          alt="Audio to Sign Language Translator"
          rounded="rounded-3xl"
        />
      </motion.div>

      {/* ── Metrics ──────────────────────────────────────────────────────────── */}
      <motion.div
        className="mx-auto mt-20 max-w-7xl px-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 gap-10 border-t border-page-text/10 pt-10 md:grid-cols-3">
          {[
            { stat: "20%",  label: "Improved Communication" },
            { stat: "$2B",  label: "Expected Annual Value" },
            { stat: "15 min", label: "Saved per Hospital Visit" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <p
                className="text-4xl font-bold text-page-text md:text-5xl"
                style={{ letterSpacing: "-0.03em" }}
              >
                {stat}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-widest text-page-text/45">
                {label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <Divider />

      {/* ── 01 Why This Matters ──────────────────────────────────────────────── */}
      <motion.section
        id="why"
        className="mx-auto max-w-7xl px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <SectionLabel num="01" label="Why This Matters" />
        <ul className="max-w-3xl space-y-4">
          <Bullet>
            Interpreter delays in emergency rooms average{" "}
            <strong className="font-bold text-page-text">14 minutes</strong>,
            a window where critical decisions are made without patient input.
          </Bullet>
          <Bullet>
            <strong className="font-bold text-page-text">
              Accessibility in emergencies cannot be optional.
            </strong>{" "}
            Federal law requires equal communication access, yet most hospitals
            fail in real-time compliance.
          </Bullet>
          <Bullet>
            Over{" "}
            <strong className="font-bold text-page-text">
              11 million Deaf and hard-of-hearing Americans
            </strong>{" "}
            navigate a healthcare system that was not designed with them in mind.
          </Bullet>
          <Bullet>
            A real-time translation tool removes the human bottleneck and gives
            Deaf patients{" "}
            <strong className="font-bold text-page-text">
              agency in their own care
            </strong>{" "}
            at every step.
          </Bullet>
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
          <div>
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: "#FFB6C1" }}
            >
              Existing Alternatives Fail
            </p>
            <ul className="space-y-3">
              <Bullet>
                Written notes and captioning are{" "}
                <strong className="font-bold text-page-text">
                  slow, impersonal, and ineffective
                </strong>{" "}
                for patients whose primary language is ASL, not English.
              </Bullet>
              <Bullet>
                Remote interpreter services require setup time and a{" "}
                <strong className="font-bold text-page-text">
                  stable video connection
                </strong>{" "}
                and neither is reliable in urgent clinical settings.
              </Bullet>
              <Bullet>
                No existing mobile tool bridges{" "}
                <strong className="font-bold text-page-text">
                  spoken audio directly to ASL
                </strong>{" "}
                without a third-party device or service.
              </Bullet>
            </ul>
          </div>

          <div>
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: "#FFB6C1" }}
            >
              The Real Cost
            </p>
            <ul className="space-y-3">
              <Bullet>
                Communication gaps create{" "}
                <strong className="font-bold text-page-text">
                  measurable safety risks
                </strong>
                : misdiagnoses, missed consent, and incorrect medication
                administration.
              </Bullet>
              <Bullet>
                Deaf patients report{" "}
                <strong className="font-bold text-page-text">
                  reduced autonomy and heightened anxiety
                </strong>{" "}
                leading to avoidance of medical care entirely.
              </Bullet>
              <Bullet>
                Clinicians lack a fast, dignified way to confirm patient
                understanding under{" "}
                <strong className="font-bold text-page-text">
                  high-pressure conditions
                </strong>
                .
              </Bullet>
            </ul>
          </div>
        </div>

        <CaseImage
          src={IMG.miro}
          alt="Miro board: research and problem mapping"
          caption="Miro research synthesis: this board mapped the gap between what Deaf users actually need and what existing tools provide."
        />
      </motion.section>

      <Divider />

      {/* ── 03 Research & Insights ───────────────────────────────────────────── */}
      <motion.section
        id="research"
        className="mx-auto max-w-7xl px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <SectionLabel num="03" label="Research and Insights" />
        <ul className="mb-14 max-w-3xl space-y-4">
          <Bullet>
            Conducted interviews with{" "}
            <strong className="font-bold text-page-text">
              Deaf community leaders at ThinkSelf
            </strong>{" "}
            to validate pain points and understand trust barriers with
            AI-generated signing.
          </Bullet>
          <Bullet>
            Spoke with{" "}
            <strong className="font-bold text-page-text">
              U-M Health providers
            </strong>{" "}
            about current workflows and the specific moments where communication
            breaks down under pressure.
          </Bullet>
          <Bullet>
            Key insight:{" "}
            <strong className="font-bold text-page-text">
              trust and authenticity
            </strong>{" "}
            are the primary needs. Users do not just want speed. They want
            signing that feels natural and dignified, not robotic.
          </Bullet>
          <Bullet>
            Secondary insight: providers want a tool that requires{" "}
            <strong className="font-bold text-page-text">
              zero onboarding
            </strong>{" "}
            and works in the same motion as unlocking a phone.
          </Bullet>
        </ul>

        {/* Trust is Human callout */}
        <div
          className="max-w-3xl rounded-2xl p-8"
          style={{
            background: "rgba(255,182,193,0.10)",
            border: "1.5px solid rgba(255,182,193,0.40)",
          }}
        >
          <p
            className="mb-2 text-xs font-bold uppercase tracking-widest"
            style={{ color: "#FFB6C1" }}
          >
            Key Insight
          </p>
          <p
            className="mb-3 text-xl font-bold text-page-text"
            style={{ letterSpacing: "-0.02em" }}
          >
            Trust is Human.
          </p>
          <p className="text-sm leading-relaxed text-page-text/65">
            Our research revealed that Deaf users found AI-animated avatars
            untrustworthy. They requested humanized solutions that feel
            authentic and reliable, not robotic proxies for communication
            that should feel personal.
          </p>
        </div>
      </motion.section>

      <Divider />

      {/* ── 04 Personas ──────────────────────────────────────────────────────── */}
      <motion.section
        id="personas"
        className="mx-auto max-w-7xl px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <SectionLabel num="04" label="Personas" />
        <p className="mb-10 max-w-xl text-base leading-relaxed text-page-text/60">
          Three distinct users. One shared reality: the system was not designed
          with any of them in mind.
        </p>

        <div className="mb-14 grid gap-8 md:grid-cols-3">
          {[
            {
              label:     "Persona 01",
              emoji:     "👴",
              name:      "Elias",
              age:       "68, Retired Educator",
              backstory: "Elias lost most of his hearing at 52. He navigates hospital visits alone and has left appointments without understanding his diagnosis because no interpreter was available.",
              goal:      "Receive clear, dignified medical information without burdening family members or waiting for a service that may never arrive.",
              pain:      "The anxiety of not knowing what the doctor said stays with him for days. Uncertainty about his own health feels like a second diagnosis.",
              quote:     "I sit in the exam room and smile and nod. I go home and I still don't know what's wrong.",
            },
            {
              label:     "Persona 02",
              emoji:     "🎓",
              name:      "Jordan",
              age:       "20, University Student",
              backstory: "Jordan is Deaf from birth and uses ASL as their primary language. They navigate campus, classes, and social life with confidence but hit walls in unexpected moments: a campus clinic visit, a TA office hour, a group project kickoff.",
              goal:      "Communicate fluidly in everyday environments without having to plan ahead or carry interpreting services into every interaction.",
              pain:      "Accommodation requests take days. Real life does not wait for paperwork.",
              quote:     "I shouldn't need to schedule a week in advance just to talk to my professor.",
            },
            {
              label:     "Persona 03",
              emoji:     "👩‍👧",
              name:      "Sarah",
              age:       "34, Working Mom",
              backstory: "Sarah is a CODA (Child of Deaf Adults) who signs fluently and often serves as an informal interpreter for her mother. She works full-time and cannot always be available, and the emotional weight of that role is unsustainable.",
              goal:      "Give her mother a tool that restores independence so Sarah can be a daughter instead of a communication proxy.",
              pain:      "Her mother deserves to advocate for herself. The current system forces Sarah into a role that no family member should have to fill.",
              quote:     "Every time she calls me into a doctor's appointment, I feel like I've failed to give her something she deserves.",
            },
          ].map((persona) => (
            <div
              key={persona.name}
              className="rounded-2xl p-7"
              style={{
                border:     "1px solid rgba(45,27,20,0.10)",
                background: "rgba(255,182,193,0.04)",
              }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl"
                  style={{ background: "rgba(255,182,193,0.18)" }}
                  aria-hidden
                >
                  {persona.emoji}
                </span>
                <div>
                  <p
                    className="text-[0.6rem] font-bold uppercase tracking-widest"
                    style={{ color: "#FFB6C1" }}
                  >
                    {persona.label}
                  </p>
                  <h3 className="text-base font-bold text-page-text leading-tight">{persona.name}</h3>
                </div>
              </div>
              <p className="mb-4 text-xs font-medium text-page-text/45">{persona.age}</p>
              <p className="mb-5 text-sm leading-relaxed text-page-text/60">
                {persona.backstory}
              </p>
              <div className="mb-3">
                <p className="mb-1 text-xs font-bold uppercase tracking-wide" style={{ color: "#2D1B14" }}>
                  Goal
                </p>
                <p className="text-sm leading-relaxed text-page-text/65">{persona.goal}</p>
              </div>
              <div className="mb-5">
                <p className="mb-1 text-xs font-bold uppercase tracking-wide" style={{ color: "#2D1B14" }}>
                  Pain Point
                </p>
                <p className="text-sm leading-relaxed text-page-text/65">{persona.pain}</p>
              </div>
              <p className="text-sm italic leading-relaxed text-page-text/50">
                &ldquo;{persona.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      <Divider />

      {/* ── 05 Ideation and Mid-Fi Wireframes ────────────────────────────────── */}
      <motion.section
        id="ideation"
        className="mx-auto max-w-7xl px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <SectionLabel num="05" label="Design Process" />
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-page-text/65">
          The design moved through three phases: early Figma layout exploration,
          mid-fidelity accessibility testing, and high-fidelity refinement.
          Every decision was checked against one question: does this reduce
          cognitive load in a high-stress environment?
        </p>

        <div className="mb-6">
          <CaseImage
            src={IMG.lofi}
            alt="Lo-fi wireframes: initial layout concepts"
            caption="Lo-fi wireframes: rapid iteration on layout and flow before introducing visual treatment."
          />
        </div>

        <div className="mt-6">
          <CaseImage
            src={IMG.hifi_v2}
            alt="Mid-fidelity iterations: refined screen layout"
            caption="Mid-Fidelity Iterations: visual hierarchy tightened after community feedback flagged the earlier version felt too app-like for emergency contexts."
          />
        </div>
      </motion.section>

      <Divider />

      {/* ── 06 The Solution ──────────────────────────────────────────────────── */}
      <motion.section
        id="solution"
        className="mx-auto max-w-7xl px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <SectionLabel num="06" label="The Solution" />
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-page-text/65">
          The final product renders{" "}
          <strong className="font-bold text-page-text">
            animated ASL in under 300ms
          </strong>{" "}
          to keep pace with natural conversation. Two modes serve distinct
          contexts: the in-app full-screen view for focused exchanges and the
          Dynamic Island persistent mode for background translation while
          providers use other tools.
        </p>

        {/* Hi-fi with sticker callouts */}
        <div className="mb-8">
          <CaseImage
            src={IMG.hifi}
            alt="High-fidelity design: core translation interface"
            caption="Final hi-fi: the translation interface prioritizes legibility over decoration, because the user may be stressed or in pain."
          />
          <div className="mt-4 flex flex-wrap gap-3">
            <Sticker rotate="-2deg">High-contrast for clinical use</Sticker>
            <Sticker rotate="1.5deg">Real-time 3D Rendering</Sticker>
          </div>
        </div>

        <CaseImage
          src={IMG.dynamic}
          alt="Dynamic Island: persistent background translation"
          caption="Dynamic Island integration: one tap from the lock screen, no app launch required. Designed for the moment when a patient cannot wait."
        />
      </motion.section>

      {/* ── Back to Work ─────────────────────────────────────────────────────── */}
      <div className="mx-auto mt-20 max-w-7xl px-8 border-t border-page-text/10 pt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-page-text/45 transition-colors hover:text-page-text"
        >
          <span aria-hidden>←</span> Back to Work
        </Link>
      </div>

    </div>
  );
}
