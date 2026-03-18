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

function Sticker({ children }: { children: string }) {
  return (
    <span
      className="inline-block rounded-lg px-3 py-1.5 text-xs font-bold text-page-text"
      style={{
        backgroundColor: "#FFB6C1",
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
      <motion.div
        className="mx-auto max-w-7xl px-8 pt-24 md:pt-32"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
          className="mt-4 max-w-4xl text-5xl font-bold text-page-text md:text-6xl lg:text-7xl"
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
            { stat: "20%",     label: "Improved Communication" },
            { stat: "$2B",     label: "Expected Annual Value" },
            { stat: "15 Mins", label: "Saved per Hospital Visit" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <p
                className="text-5xl font-bold text-page-text md:text-6xl"
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
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
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
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
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
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
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
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionLabel num="04" label="Personas" />
        <p className="mb-10 max-w-xl text-base leading-relaxed text-page-text/60">
          Three distinct users. One shared reality: the system was not designed
          with any of them in mind.
        </p>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          {[
            {
              label:  "Persona 01",
              emoji:  "🏥",
              name:   "Elias",
              age:    "68 · Retired Educator",
              pains:  [
                "Left appointments without understanding diagnosis",
                "No interpreter available when needed most",
                "Days of uncertainty after every visit",
              ],
              quote:  "I sit in the exam room and smile and nod.",
            },
            {
              label:  "Persona 02",
              emoji:  "🎓",
              name:   "Jordan",
              age:    "20 · University Student",
              pains:  [
                "Accommodation requests take days to process",
                "Campus clinic visits require advance planning",
                "Real life does not wait for paperwork",
              ],
              quote:  "I shouldn't need to schedule a week in advance.",
            },
            {
              label:  "Persona 03",
              emoji:  "👩‍👧",
              name:   "Sarah",
              age:    "34 · CODA, Working Mom",
              pains:  [
                "Cannot always be available for her mother",
                "Emotional weight of the interpreter role unsustainable",
                "Her mother deserves to advocate for herself",
              ],
              quote:  "She deserves to speak for herself.",
            },
          ].map((persona) => (
            <div
              key={persona.name}
              className="rounded-xl p-5"
              style={{
                border:     "1px solid rgba(45,27,20,0.10)",
                background: "rgba(255,182,193,0.04)",
              }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg"
                  style={{ background: "rgba(255,182,193,0.15)" }}
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
                  <h3 className="text-sm font-bold text-page-text leading-tight">{persona.name}</h3>
                </div>
              </div>

              <p className="mb-3 text-xs text-page-text/50">{persona.age}</p>

              <ul className="mb-4 space-y-1.5">
                {persona.pains.map((pain) => (
                  <li key={pain} className="flex items-start gap-2 text-xs leading-snug text-page-text/65">
                    <span className="mt-[0.3em] h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: "#FFB6C1" }} aria-hidden />
                    {pain}
                  </li>
                ))}
              </ul>

              <p className="border-t border-page-text/08 pt-3 text-xs italic text-page-text/50">
                &ldquo;{persona.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      <Divider />

      {/* ── 04b Usability Testing ─────────────────────────────────────────────── */}
      <motion.section
        id="usability"
        className="mx-auto max-w-7xl px-8"
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionLabel num="04b" label="Usability Testing" />
        <p className="mb-10 max-w-xl text-base leading-relaxed text-page-text/60">
          Prototype sessions with Deaf adults and hard-of-hearing users surfaced
          three consistent themes across all participants.
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              quote:       "Incredibly intuitive, I didn't need any instructions.",
              participant: "Participant 1",
              context:     "Deaf adult, age 34",
            },
            {
              quote:       "I could see myself using this every single day.",
              participant: "Participant 2",
              context:     "Hard-of-hearing adult, age 28",
            },
            {
              quote:       "It felt natural, like it was designed for me.",
              participant: "Participant 3",
              context:     "ASL user, age 45",
            },
          ].map(({ quote, participant, context }) => (
            <div
              key={participant}
              className="rounded-xl p-6"
              style={{
                background: "rgba(255,182,193,0.09)",
                border:     "1px solid rgba(255,182,193,0.28)",
              }}
            >
              <span
                className="mb-3 block font-bold text-page-text/20"
                style={{ fontSize: "2.5rem", lineHeight: 1, fontFamily: "Georgia, serif" }}
                aria-hidden
              >
                &ldquo;
              </span>
              <p className="text-base font-medium leading-relaxed text-page-text" style={{ letterSpacing: "-0.01em" }}>
                {quote}
              </p>
              <div className="mt-4 border-t border-page-text/08 pt-3">
                <p className="text-xs font-bold text-page-text/55">{participant}</p>
                <p className="text-xs text-page-text/40">{context}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <Divider />

      {/* ── 05 Ideation and Mid-Fi Wireframes ────────────────────────────────── */}
      <motion.section
        id="ideation"
        className="mx-auto max-w-7xl px-8"
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionLabel num="05" label="Design Process" />
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-page-text/65">
          With every iteration, I checked whether my design decisions aligned
          with the findings from my user research — ensuring each change was
          grounded in real user needs, not assumptions.
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
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionLabel num="06" label="The Solution" />
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-page-text/65">
          An in-app translation experience using{" "}
          <strong style={{ fontWeight: 700, textDecoration: "underline", textDecorationColor: "rgba(255,182,193,0.85)", textUnderlineOffset: "3px", textDecorationThickness: "1.5px" }}>real human images</strong>{" "}
          for clarity and trust: a multilingual AI-powered solution that makes
          communication across languages and signing systems feel{" "}
          <strong style={{ fontWeight: 700, textDecoration: "underline", textDecorationColor: "rgba(255,182,193,0.85)", textUnderlineOffset: "3px", textDecorationThickness: "1.5px" }}>seamless, immediate, and human</strong>.
        </p>

        {/* Hi-fi with sticker callouts */}
        <div className="mb-8">
          <CaseImage
            src={IMG.hifi}
            alt="High-fidelity design: core translation interface"
            caption="Final hi-fi: the translation interface prioritizes legibility over decoration, because the user may be stressed or in pain."
          />
          <div className="mt-4 flex flex-wrap gap-3">
            <span
              className="inline-block rounded-lg px-3 py-1.5 text-xs font-bold text-page-text"
              style={{ backgroundColor: "#FFB6C1", letterSpacing: "0.01em", lineHeight: 1.4 }}
            >
              Dynamic Island mode keeps translation running while providers use other tools
            </span>
            <span
              className="inline-block rounded-lg px-3 py-1.5 text-xs font-bold text-page-text"
              style={{ backgroundColor: "#FFB6C1", letterSpacing: "0.01em", lineHeight: 1.4 }}
            >
              Real human images, not avatars, build clarity and trust for Deaf users
            </span>
          </div>
        </div>

        <div className="mb-8 max-w-2xl">
          <p className="text-base font-medium text-page-text" style={{ letterSpacing: "-0.01em" }}>
            For any situation a Deaf individual encounters, they can receive an
            accurate, real-time translation through the Dynamic Island.
          </p>
          <p className="mt-3 text-base leading-relaxed text-page-text/65">
            Ensuring nothing is ever missed, no matter the context — whether
            in an emergency room, a campus clinic, or a spontaneous conversation
            in everyday life.
          </p>
        </div>

        <CaseImage
          src={IMG.dynamic}
          alt="Dynamic Island: persistent background translation"
          caption="Dynamic Island integration: one tap from the lock screen, no app launch required. Designed for the moment when a patient cannot wait."
        />
      </motion.section>

      <Divider />

      {/* ── 07 Impact ────────────────────────────────────────────────────────── */}
      <motion.section
        id="impact"
        className="mx-auto max-w-7xl px-8"
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionLabel num="07" label="Impact" />
        <div
          className="max-w-3xl rounded-2xl p-8"
          style={{ background: "rgba(255,182,193,0.07)", border: "1px solid rgba(255,182,193,0.22)" }}
        >
          <ul className="space-y-4">
            <Bullet>
              Awarded{" "}
              <strong className="font-bold text-page-text">1st Place at the UMich Ross Tech Innovation Jam</strong>,
              validating the solution across a competitive field of student teams.
            </Bullet>
            <Bullet>
              Usability testing with Deaf and hard-of-hearing adults returned consistent results:
              participants called the experience{" "}
              <strong className="font-bold text-page-text">intuitive, natural, and immediately practical</strong>{" "}
              for daily clinical use.
            </Bullet>
            <Bullet>
              Replacing AI avatars with{" "}
              <strong className="font-bold text-page-text">real human images</strong>{" "}
              directly resolved the primary trust barrier surfaced in community research with Deaf leaders at ThinkSelf.
            </Bullet>
            <Bullet>
              The{" "}
              <strong className="font-bold text-page-text">Dynamic Island persistent mode</strong>{" "}
              allows providers to keep translation running in the background, removing the
              need to interrupt clinical workflows to restart the app.
            </Bullet>
          </ul>
        </div>
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
