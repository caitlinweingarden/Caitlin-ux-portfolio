"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── Section config ────────────────────────────────────────────────────────
const SECTIONS = [
  { id: "overview",   label: "Overview",          num: "01" },
  { id: "problem",    label: "The Problem",        num: "02" },
  { id: "research",   label: "Research",           num: "03" },
  { id: "decisions",  label: "Design Decisions",   num: "04" },
  { id: "solution",   label: "The Solution",       num: "05" },
  { id: "process",    label: "The Process",        num: "06" },
  { id: "impact",     label: "Impact",             num: "07" },
  { id: "reflection", label: "Reflection",         num: "08" },
] as const;

// ─── Image component ────────────────────────────────────────────────────────
function Img({
  ratio = "16/9",
  label = "Image placeholder",
  src,
  caption,
}: {
  ratio?: string;
  label?: string;
  src?: string;
  caption?: string;
}) {
  const [w, h] = ratio.split("/").map(Number);
  const pt = `${((h / w) * 100).toFixed(2)}%`;
  return (
    <figure className="w-full">
      <div className="relative w-full overflow-hidden rounded-2xl" style={{ paddingTop: pt }}>
        {src ? (
          <Image
            src={src}
            alt={caption || label}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 900px"
          />
        ) : (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
            style={{ background: "var(--blush)", border: "1px solid var(--taupe)" }}
          >
            <svg
              width="36" height="36" viewBox="0 0 24 24"
              fill="none" stroke="var(--taupe)" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span className="font-sans" style={{ fontSize: "0.8rem", color: "var(--taupe)", letterSpacing: "0.04em" }}>
              {label}
            </span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption
          className="mt-3 text-center text-sm font-sans"
          style={{ color: "var(--taupe)" }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ─── Faded section number behind heading ───────────────────────────────────
function SectionNum({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <div className="relative">
      <span
        className="pointer-events-none absolute -top-4 -left-2 select-none leading-none"
        aria-hidden
        style={{
          fontSize: "clamp(4rem, 10vw, 7.5rem)",
          fontWeight: 700,
          color: "var(--ink)",
          opacity: 0.045,
          lineHeight: 1,
        }}
      >
        {num}
      </span>
      {children}
    </div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────
export default function SignNowPage() {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  // Dot-nav: highlight active section on scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-25% 0px -25% 0px" }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Reveal-on-scroll fade-up for all [data-reveal] elements
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const key = (e.target as HTMLElement).dataset.reveal;
            if (key) setRevealed((prev) => { const next = new Set(prev); next.add(key); return next; });
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const r = (key: string) =>
    revealed.has(key)
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-6";
  const T = "transition-all duration-700 ease-out";

  // ─── Section padding shorthand
  const SP = "py-20";
  const INNER = "mx-auto max-w-5xl";

  return (
    <>
      {/* ── Sticky dot nav (desktop only) ───────────────────────── */}
      <nav
        className="fixed left-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
        aria-label="Page sections"
      >
        {SECTIONS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-label={`Jump to ${label}`}
            title={label}
            className="block rounded-full transition-all duration-300"
            style={{
              width: activeSection === id ? "12px" : "8px",
              height: activeSection === id ? "12px" : "8px",
              background: activeSection === id ? "var(--terra)" : "var(--taupe)",
              transform: activeSection === id ? "scale(1.3)" : "scale(1)",
            }}
          />
        ))}
      </nav>

      {/* ── Floating back pill ───────────────────────────────────── */}
      <Link
        href="/work"
        className="fixed bottom-8 right-8 z-50 rounded-full px-5 py-2.5 text-sm font-medium shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        style={{
          background: "var(--ink)",
          color: "var(--cream)",
        }}
      >
        ← Work
      </Link>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* MAIN                                                       */}
      {/* ══════════════════════════════════════════════════════════ */}
      <div
        className="sn font-sans"
        style={{ background: "var(--cream)", color: "var(--ink)" }}
      >

        {/* ════════ HERO ════════ */}
        <header className="pt-32 pb-16">
          <div className={INNER}>
            {/* Breadcrumb */}
            <nav
              className="mb-8 flex items-center gap-2 text-sm"
              style={{ color: "var(--ink-40)" }}
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:underline" style={{ color: "var(--ink-40)" }}>Home</Link>
              <span aria-hidden>›</span>
              <Link href="/work" className="hover:underline" style={{ color: "var(--ink-40)" }}>Work</Link>
              <span aria-hidden>›</span>
              <span style={{ color: "var(--ink)" }}>Sign Now</span>
            </nav>

            {/* Badge */}
            <div
              className="mb-6 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
              style={{ background: "var(--sage)", color: "var(--terra)" }}
            >
              Real-Time ASL Translation
            </div>

            {/* H1 + unicode accents */}
            <div className={`${T} ${r("hero-title")}`} data-reveal="hero-title">
              <div className="flex items-start gap-2">
                <h1
                  className="font-sans"
                  style={{
                    fontSize: "clamp(3.5rem, 10vw, 8rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "var(--ink)",
                    lineHeight: 1.0,
                  }}
                >
                  Sign Now
                </h1>
                <span className="mt-3 text-2xl" style={{ color: "var(--terra)", opacity: 0.75 }} aria-hidden>✦</span>
              </div>
              <span className="ml-1 text-lg" style={{ color: "var(--taupe)" }} aria-hidden>⋆</span>
            </div>

            {/* Data-first hook */}
            <p
              className={`mt-6 max-w-2xl font-bold ${T} ${r("hero-sub")}`}
              data-reveal="hero-sub"
              style={{
                fontSize:      "clamp(1.1rem, 2.2vw, 1.5rem)",
                lineHeight:    1.2,
                letterSpacing: "-0.02em",
                color:         "var(--ink)",
              }}
            >
              Miscommunication isn&apos;t just a barrier;&nbsp;
              <span style={{ color: "var(--terra)" }}>it&apos;s a $2.7 Billion yearly cost.</span>
            </p>

            {/* Subtitle */}
            <p
              className={`mt-4 max-w-2xl text-xl leading-relaxed md:text-2xl ${T} ${r("hero-sub-body")}`}
              data-reveal="hero-sub-body"
              style={{ color: "var(--ink-70)" }}
            >
              Empowering Deaf users to access critical spoken information, without waiting for interpreter delays.
            </p>

            {/* Metadata bar */}
            <div
              className={`mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border md:grid-cols-5 ${T} ${r("hero-meta")}`}
              data-reveal="hero-meta"
              style={{ borderColor: "var(--taupe)", background: "var(--taupe)" }}
            >
              {[
                { label: "Company",  value: "Hackathon Project" },
                { label: "Role",     value: "Lead UX Designer" },
                { label: "Team",     value: "Solo Designer" },
                { label: "Timeline", value: "Fall 2025 · 6 Weeks+" },
                { label: "Focus",    value: "End-to-end · Accessibility" },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1 p-4 md:p-5" style={{ background: "var(--cream)" }}>
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--terra)" }}>
                    {label}
                  </span>
                  <span className="text-sm font-medium" style={{ color: "var(--ink)" }}>{value}</span>
                </div>
              ))}
            </div>

            {/* Constraints block */}
            <div
              className={`mt-4 rounded-xl px-5 py-4 text-sm leading-relaxed ${T} ${r("hero-constraints")}`}
              data-reveal="hero-constraints"
              style={{ background: "var(--blush)", color: "var(--ink-70)" }}
            >
              <span className="font-semibold" style={{ color: "var(--terra)" }}>Constraints: </span>
              No existing ASL translation precedent · Solo designer · 6-week timeline · No usability testing budget
            </div>

            {/* Hero image — full width, natural aspect ratio */}
            <div className={`mt-10 ${T} ${r("hero-img")}`} data-reveal="hero-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/case_studies/Sign_Now_Images/Ready_to_Post_Images/Sign_Now_Hero.jpg"
                alt="Sign Now Case Study Hero"
                style={{ width: "100%", height: "auto", display: "block", margin: 0, padding: 0 }}
              />
            </div>
          </div>
        </header>

        {/* ════════ TL;DR ════════ */}
        <section style={{ background: "var(--blush)" }} className="py-16">
          <div className={INNER}>
            <div className={`${T} ${r("tldr")}`} data-reveal="tldr">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--terra)" }}>
                TL;DR: For Recruiters
              </p>
              <p
                className="max-w-3xl text-xl italic font-sans leading-relaxed md:text-2xl"
                style={{ color: "var(--ink)" }}
              >
                &ldquo;I designed a real-time audio-to-ASL translation system for healthcare settings: two access
                modes, HIPAA-grade privacy, culturally authentic design. Competed against 72+ teams, won
                1st in Healthcare, placed Top 5 overall.&rdquo;
              </p>
              <div className="mt-10 flex flex-wrap gap-10 md:gap-16">
                {[
                  { icon: "🏆", stat: "Top 5",     sub: "out of 72+ teams" },
                  { icon: "🥇", stat: "1st Place",  sub: "Healthcare Track" },
                  { icon: "👥", stat: "200+",       sub: "attendees pitched to" },
                ].map(({ icon, stat, sub }) => (
                  <div key={stat} className="flex flex-col gap-1">
                    <span className="text-3xl">{icon}</span>
                    <span className="text-2xl font-bold font-sans" style={{ color: "var(--ink)" }}>
                      {stat}
                    </span>
                    <span className="text-sm" style={{ color: "var(--ink-70)" }}>{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════ 01 OVERVIEW ════════ */}
        <section id="overview" className={SP}>
          <div className={INNER}>
            <div className={`${T} ${r("s-overview")}`} data-reveal="s-overview">
              <SectionNum num="01">
                <h2
                  className="mb-8 text-4xl font-bold font-sans md:text-5xl"
                  style={{ color: "var(--ink)" }}
                >
                  Overview
                </h2>
              </SectionNum>
              <p className="max-w-3xl text-base leading-relaxed md:text-lg" style={{ color: "var(--ink-70)" }}>
                I designed a real-time audio-to-sign translation system for healthcare and public settings where
                Deaf individuals face critical communication barriers. The solution features two access modes:
                an in-app interface and Apple Dynamic Island integration, prioritizing authentic ASL interpretation
                over generic alternatives. The project placed Top 5 overall and won 1st place in the Healthcare Track.
              </p>
            </div>
          </div>
        </section>

        {/* ════════ 02 THE PROBLEM ════════ */}
        <section id="problem" className={SP} style={{ background: "var(--blush)" }}>
          <div className={INNER}>

            <div className={`${T} ${r("s-problem-head")}`} data-reveal="s-problem-head">
              <SectionNum num="02">
                <h2
                  className="mb-4 text-4xl font-bold font-sans tracking-wide md:text-5xl"
                  style={{ letterSpacing: "0.06em", color: "var(--ink)" }}
                >
                  CURRENTLY...
                </h2>
              </SectionNum>
              <p className="mb-10 max-w-3xl text-base leading-relaxed md:text-lg" style={{ color: "var(--ink-70)" }}>
                Deaf individuals are shut out of critical conversations in healthcare settings. Not from lack of
                technology, but from a lack of design that respects how they actually communicate.
              </p>
            </div>

            {/* ☑ / ☒ contrast block */}
            <div
              className={`mb-12 rounded-2xl p-6 md:p-8 ${T} ${r("s-problem-checks")}`}
              data-reveal="s-problem-checks"
              style={{ background: "var(--cream)" }}
            >
              <div className="space-y-4">
                {[
                  { good: true,  text: "Interpreters work well, when they're available" },
                  { good: false, text: "Availability is inconsistent and creates real safety risks" },
                  { good: false, text: "Workarounds like captions and written notes ignore how ASL actually works" },
                  { good: false, text: "Existing tech solutions weren't built with the Deaf community" },
                ].map(({ good, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex-shrink-0 text-xl"
                      style={{ color: good ? "var(--terra)" : "var(--ink-40)" }}
                    >
                      {good ? "☑" : "☒"}
                    </span>
                    <span
                      className="text-base"
                      style={{
                        color: good ? "var(--ink)" : "var(--ink-40)",
                        textDecoration: good ? "none" : "line-through",
                      }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Problem cards */}
            <div
              className={`grid gap-6 md:grid-cols-3 ${T} ${r("s-problem-cards")}`}
              data-reveal="s-problem-cards"
            >
              {[
                {
                  icon: "🚨",
                  title: "Interpreter Unavailability",
                  body: "Delays aren't just inconvenient. In emergency scenarios, they create real safety risks. Interpreter access is inconsistent across every healthcare system I researched.",
                },
                {
                  icon: "❌",
                  title: "Inadequate Workarounds",
                  body: "Captioning apps and written notes treat ASL like a dialect of English. It isn't. ASL is a distinct, spatial language. No flat-text alternative respects that.",
                },
                {
                  icon: "🔒",
                  title: "A Trust Gap",
                  body: "Generic avatars signal the designer never talked to the community. Deaf users recognize inauthenticity immediately and disengage.",
                },
              ].map(({ icon, title, body }) => (
                <div
                  key={title}
                  className="sn-lift rounded-2xl p-6"
                  style={{ background: "var(--cream)", border: "1px solid var(--taupe)" }}
                >
                  <span className="text-2xl">{icon}</span>
                  <h3
                    className="mt-3 mb-2 text-lg font-semibold font-sans"
                    style={{ color: "var(--ink)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--ink-70)" }}>{body}</p>
                </div>
              ))}
            </div>

            {/* Why This Matters stat bar */}
            <div
              className={`mt-10 rounded-2xl p-6 md:p-8 ${T} ${r("s-problem-stats")}`}
              data-reveal="s-problem-stats"
              style={{ background: "var(--sage)", borderLeft: "4px solid var(--terra)" }}
            >
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--terra)" }}>
                Why This Matters
              </p>
              <div className="flex flex-wrap gap-8 md:gap-16">
                {[
                  { stat: "$2.7B",   label: "In preventable yearly costs" },
                  { stat: "$2,200",  label: "Added yearly healthcare cost per person" },
                  { stat: "18 Min",  label: "Wasted per hospital visit" },
                  { stat: "$150/hr", label: "Cost of current human interpreters" },
                ].map(({ stat, label }) => (
                  <div key={label}>
                    <p className="text-2xl font-bold font-sans" style={{ color: "var(--ink)" }}>
                      {stat}
                    </p>
                    <p className="text-sm" style={{ color: "var(--ink-70)" }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* HMW centered callout */}
            <div
              className={`mt-10 rounded-2xl p-8 text-center md:p-14 ${T} ${r("s-problem-hmw")}`}
              data-reveal="s-problem-hmw"
              style={{ background: "var(--cream)", border: "2px solid var(--taupe)" }}
            >
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--terra)" }}>
                How Might We
              </p>
              <p
                className="mx-auto max-w-2xl text-xl italic font-sans leading-relaxed md:text-2xl lg:text-3xl"
                style={{ color: "var(--ink)" }}
              >
                &ldquo;How might we give Deaf users immediate access to spoken language, in any setting,
                at any urgency level, without depending on a third-party interpreter?&rdquo;
              </p>
            </div>

          </div>
        </section>

        {/* ════════ 03 RESEARCH ════════ */}
        <section id="research" className={SP}>
          <div className={INNER}>

            <div className={`${T} ${r("s-research-head")}`} data-reveal="s-research-head">
              <SectionNum num="03">
                <h2
                  className="mb-4 text-4xl font-bold font-sans tracking-wide md:text-5xl"
                  style={{ letterSpacing: "0.04em", color: "var(--ink)" }}
                >
                  TALKING TO THE COMMUNITY
                </h2>
              </SectionNum>
              <p className="mb-10 max-w-3xl text-base leading-relaxed md:text-lg" style={{ color: "var(--ink-70)" }}>
                I conducted primary research with three groups whose perspectives rarely appear in the same
                room: Deaf community advocates at ThinkSelf (Michigan and Minnesota), clinical staff at U-M
                Health, and ASL linguistics faculty at Cornell and UPenn. The goal wasn&apos;t to validate
                assumptions. The goal was to surface what I didn&apos;t know.
              </p>
            </div>

            {/* 3-theme synthesis */}
            <div
              className={`mb-12 grid gap-6 md:grid-cols-3 ${T} ${r("s-research-themes")}`}
              data-reveal="s-research-themes"
            >
              {[
                {
                  num: "Theme 1",
                  title: "No Trust",
                  body: "Deaf users distrust tech solutions because most were designed without them.",
                },
                {
                  num: "Theme 2",
                  title: "No Access",
                  body: "Interpreter delays are structural, not occasional. Users have built their entire healthcare behavior around expecting them.",
                },
                {
                  num: "Theme 3",
                  title: "No Authentic Representation",
                  body: "Any solution using generic avatars or flat text fails before it launches.",
                },
              ].map(({ num, title, body }) => (
                <div
                  key={num}
                  className="sn-lift rounded-2xl p-6"
                  style={{ background: "var(--sage)", border: "1px solid var(--taupe)" }}
                >
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--terra)" }}>
                    {num}
                  </p>
                  <h3
                    className="mb-3 text-xl font-bold font-sans"
                    style={{ color: "var(--ink)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--ink-70)" }}>{body}</p>
                </div>
              ))}
            </div>

            {/* Quote bars */}
            <div
              className={`mb-12 space-y-6 ${T} ${r("s-research-quotes")}`}
              data-reveal="s-research-quotes"
            >
              {[
                "Interpreter delays aren't occasional. They're structural.",
                "There's a reason Deaf users distrust tech solutions: most were designed without them.",
                "The interface has to work when someone is stressed, scared, or in pain.",
                "ASL is 3D and expressive. Any 2D text representation is a lossy translation.",
              ].map((q) => (
                <div key={q} className="sn-qbar">
                  <p
                    className="text-base italic font-sans leading-relaxed md:text-lg"
                    style={{ color: "var(--ink)" }}
                  >
                    &ldquo;{q}&rdquo;
                  </p>
                </div>
              ))}
            </div>

            {/* ── Persona snapshots ── */}
            <div
              className={`mb-12 grid gap-5 md:grid-cols-3 ${T} ${r("s-research-personas")}`}
              data-reveal="s-research-personas"
            >
              {[
                {
                  emoji: "🏥",
                  label: "Persona 01",
                  name:  "Elias, 68",
                  role:  "Retired veteran. Wears hearing aids.",
                  body:  "Navigates VA appointments alone. Interpreter delays leave him nodding along to diagnoses he can't fully hear.",
                },
                {
                  emoji: "🎓",
                  label: "Persona 02",
                  name:  "Jordan, 20",
                  role:  "College student. Congenital hearing loss.",
                  body:  "Relies on written notes in urgent care. Misses critical dosage instructions because no one has time to write everything down.",
                },
                {
                  emoji: "👩‍👧",
                  label: "Persona 03",
                  name:  "Sarah, 34",
                  role:  "Parent. Works in healthcare admin.",
                  body:  "Coordinates care for her Deaf daughter. Scheduling a certified interpreter adds 2-3 days to every non-emergency visit.",
                },
              ].map(({ emoji, label, name, role, body }) => (
                <div
                  key={name}
                  className="sn-lift rounded-2xl p-6"
                  style={{ background: "var(--cream)", border: "1px solid var(--taupe)" }}
                >
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--terra)" }}>{label}</p>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-2xl" aria-hidden>{emoji}</span>
                    <div>
                      <h3 className="text-base font-bold font-sans leading-tight" style={{ color: "var(--ink)" }}>{name}</h3>
                      <p className="text-xs" style={{ color: "var(--ink-70)" }}>{role}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--ink-70)" }}>{body}</p>
                </div>
              ))}
            </div>

            <div className={`${T} ${r("s-research-img")}`} data-reveal="s-research-img">
              <Img
                ratio="4/3"
                src="/images/sign-now/research.png"
                label="sign-now-research.png"
                caption="Research synthesis: themes from community interviews and clinical staff conversations"
              />
            </div>

          </div>
        </section>

        {/* ════════ 04 KEY DESIGN DECISIONS ════════ */}
        <section id="decisions" className={SP} style={{ background: "var(--blush)" }}>
          <div className={INNER}>

            <div className={`${T} ${r("s-decisions-head")}`} data-reveal="s-decisions-head">
              <SectionNum num="04">
                <h2
                  className="mb-4 text-4xl font-bold font-sans md:text-5xl"
                  style={{ color: "var(--ink)" }}
                >
                  Key Design Decisions
                </h2>
              </SectionNum>
              <p className="mb-10 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: "var(--ink-70)" }}>
                Based on what I heard, I made four decisions that shaped everything:
              </p>
            </div>

            <div
              className={`grid gap-6 md:grid-cols-2 ${T} ${r("s-decisions-cards")}`}
              data-reveal="s-decisions-cards"
            >
              {[
                {
                  icon: "🎭",
                  title: "Authentic Representation Over Convenience",
                  body: "We could have used a generic avatar library. I advocated against it. Culturally authentic signing builds the trust that makes adoption possible.",
                },
                {
                  icon: "⚡",
                  title: "Friction as a Design Variable",
                  body: "Every tap added in an emergency is a design failure. Dynamic Island integration exists to eliminate setup friction at the moment it matters most.",
                },
                {
                  icon: "🔒",
                  title: "Privacy as a Feature, Not a Checkbox",
                  body: "HIPAA compliance isn't a legal formality. It signals to users that their medical conversations are protected. I treated it as a core design constraint.",
                },
                {
                  icon: "🎯",
                  title: "Two Mental Models, Two Interaction Patterns",
                  body: "A planned appointment and a hospital emergency are not the same context. I designed two distinct experiences rather than forcing one flow to serve both.",
                },
              ].map(({ icon, title, body }) => (
                <div
                  key={title}
                  className="sn-lift rounded-2xl p-6 md:p-8"
                  style={{ background: "var(--cream)", border: "1px solid var(--taupe)" }}
                >
                  <span className="text-3xl">{icon}</span>
                  <h3
                    className="mt-4 mb-3 text-lg font-semibold font-sans"
                    style={{ color: "var(--ink)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--ink-70)" }}>{body}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ════════ 05 THE SOLUTION ════════ */}
        <section id="solution" className={SP}>
          <div className={INNER}>

            <div className={`${T} ${r("s-solution-head")}`} data-reveal="s-solution-head">
              <SectionNum num="05">
                <h2
                  className="mb-4 text-4xl font-bold font-sans md:text-5xl"
                  style={{ color: "var(--ink)" }}
                >
                  The Solution
                </h2>
              </SectionNum>
              <p className="mb-8 text-base leading-relaxed md:text-lg" style={{ color: "var(--ink-70)" }}>
                Two access modes for two fundamentally different contexts.
              </p>

              {/* Feature pills */}
              <div className="mb-10 flex flex-wrap gap-3">
                {[
                  { label: "Real-Human Translation",  desc: "Built for trust and clarity: no AI avatars" },
                  { label: "Dynamic Island",           desc: "1-second activation for emergencies" },
                  { label: "2-Way Audio / Sign",       desc: "Real-time speech-to-ASL and ASL-to-Audio" },
                ].map(({ label, desc }) => (
                  <div
                    key={label}
                    className="rounded-full px-5 py-2.5"
                    style={{
                      background:   "var(--sage)",
                      border:       "1px solid var(--taupe)",
                      display:      "inline-flex",
                      flexDirection: "column" as const,
                      gap:          "2px",
                    }}
                  >
                    <span className="text-xs font-bold" style={{ color: "var(--ink)", letterSpacing: "-0.01em" }}>
                      {label}
                    </span>
                    <span className="text-[0.65rem] leading-tight" style={{ color: "var(--ink-70)" }}>
                      {desc}
                    </span>
                  </div>
                ))}
              </div>

              {/* HIPAA vision */}
              <div
                className="mb-10 rounded-2xl px-6 py-5"
                style={{ background: "var(--blush)", borderLeft: "3px solid var(--terra)" }}
              >
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-70)" }}>
                  <strong style={{ color: "var(--ink)" }}>HIPAA compliant prototype</strong> currently
                  beta-testing with state organizations, bridging the gap between digital accessibility
                  and clinical-grade trust.
                </p>
              </div>
            </div>

            {/* Mode 1 — In-App */}
            <div
              className={`mb-8 overflow-hidden rounded-2xl ${T} ${r("s-solution-mode1")}`}
              data-reveal="s-solution-mode1"
              style={{ border: "1px solid var(--taupe)" }}
            >
              <div className="grid md:grid-cols-2" style={{ background: "var(--blush)" }}>
                <div className="p-8">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--terra)" }}>
                    Mode 01
                  </p>
                  <h3
                    className="mb-4 text-2xl font-bold font-sans"
                    style={{ color: "var(--ink)" }}
                  >
                    In-App Experience
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed" style={{ color: "var(--ink-70)" }}>
                    An in-app translation experience leveraging real human imagery for clarity and trust. This multilingual, AI-powered solution bridges the communication gap in real-time.
                  </p>
                  <ul className="mb-6 space-y-2">
                    {[
                      "Real-time voice-to-sign translation",
                      "Conversation history and context",
                      "Multilingual support across ASL dialects",
                      "HIPAA-compliant session handling",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--ink-70)" }}>
                        <span style={{ color: "var(--terra)" }}>✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="rounded-xl px-4 py-3 text-xs leading-relaxed"
                    style={{ background: "var(--sage)", borderLeft: "3px solid var(--terra)", color: "var(--ink-70)" }}
                  >
                    <strong style={{ color: "var(--ink)" }}>UX Principle: </strong>
                    Progressive disclosure: show advanced features only when needed to reduce cognitive load
                  </div>
                </div>
                <div className="p-4 md:p-6 md:flex md:items-center">
                  <Img ratio="4/3" src="/images/sign-now/hifi.png" label="sign-now-in-app.png" caption="In-app translation interface" />
                </div>
              </div>
            </div>

            {/* Mode 2 — Dynamic Island */}
            <div
              className={`overflow-hidden rounded-2xl ${T} ${r("s-solution-mode2")}`}
              data-reveal="s-solution-mode2"
              style={{ border: "1px solid var(--taupe)" }}
            >
              <div className="grid md:grid-cols-2" style={{ background: "var(--sage)" }}>
                <div className="p-4 md:order-last md:p-6 md:flex md:items-center">
                  <Img ratio="4/3" src="/images/sign-now/dynamic-island.png" label="sign-now-dynamic-island.png" caption="Dynamic Island quick access" />
                </div>
                <div className="p-8">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--terra)" }}>
                    Mode 02
                  </p>
                  <h3
                    className="mb-4 text-2xl font-bold font-sans"
                    style={{ color: "var(--ink)" }}
                  >
                    Dynamic Island Quick Access
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed" style={{ color: "var(--ink-70)" }}>
                    The Dynamic Island integration allows for 1-second activation, ensuring users can access translation services instantly at the click of a button.
                  </p>
                  <ul className="mb-6 space-y-2">
                    {[
                      "One-tap activation from any screen",
                      "Minimal setup required",
                      "Instant connection without app launch",
                      "Clear visual feedback during translation",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--ink-70)" }}>
                        <span style={{ color: "var(--terra)" }}>✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="rounded-xl px-4 py-3 text-xs leading-relaxed"
                    style={{ background: "var(--blush)", borderLeft: "3px solid var(--terra)", color: "var(--ink-70)" }}
                  >
                    <strong style={{ color: "var(--ink)" }}>UX Principle: </strong>
                    Reduce friction in emergencies: every second matters when safety is at stake
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ════════ 06 THE PROCESS ════════ */}
        <section id="process" className={SP} style={{ background: "var(--blush)" }}>
          <div className={INNER}>

            <div className={`${T} ${r("s-process-head")}`} data-reveal="s-process-head">
              <SectionNum num="06">
                <h2
                  className="mb-10 text-4xl font-bold font-sans md:text-5xl"
                  style={{ color: "var(--ink)" }}
                >
                  The Process
                </h2>
              </SectionNum>
            </div>

            <div
              className={`grid gap-10 md:grid-cols-2 ${T} ${r("s-process-content")}`}
              data-reveal="s-process-content"
            >
              {/* Vertical timeline */}
              <div>
                <div className="relative space-y-0">
                  {[
                    { step: "01", title: "Early Sketches",           body: "Explored form factors: app vs. system-level access, interaction flows for routine and emergency scenarios." },
                    { step: "02", title: "Lo-Fi Wireframes",         body: "Focused on clarity, minimal cognitive load, and automatic activation patterns." },
                    { step: "03", title: "Mid-Fi Wireframes",        body: "Refined information architecture and tested signing presentation models." },
                    { step: "04", title: "High-Fidelity Prototypes", body: "Created two distinct experiences optimized for their use cases." },
                    { step: "05", title: "Iteration",                body: "Refined visual hierarchy and feedback states based on research insights." },
                  ].map(({ step, title, body }, i, arr) => (
                    <div key={step} className="relative flex gap-5 pb-8">
                      {i < arr.length - 1 && (
                        <div
                          className="absolute bottom-0 left-5 top-10 w-px"
                          style={{ background: "var(--taupe)" }}
                        />
                      )}
                      <div
                        className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
                        style={{ background: "var(--terra)", color: "var(--cream)" }}
                      >
                        {step}
                      </div>
                      <div className="pt-1.5">
                        <h4 className="font-semibold font-sans" style={{ color: "var(--ink)" }}>
                          {title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--ink-70)" }}>{body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Before / after comparison */}
                <div className="mt-6 overflow-hidden rounded-2xl" style={{ border: "1px solid var(--taupe)" }}>
                  <div
                    className="p-5"
                    style={{ background: "var(--cream)", borderBottom: "1px solid var(--taupe)" }}
                  >
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--ink-40)" }}>
                      Initial Direction
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--ink-70)" }}>
                      I originally designed a single unified interface for all contexts, covering
                      both emergency and routine use.
                    </p>
                  </div>
                  <div className="p-5" style={{ background: "var(--sage)" }}>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--terra)" }}>
                      Final Direction
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--ink)" }}>
                      Research revealed emergency and routine users have completely different mental models,
                      so I split them into two distinct flows with different levels of setup and friction.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2×2 process image grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "sign-now-sketches.png", src: "/images/sign-now/figma.png",   caption: "Sketches" },
                  { label: "sign-now-lofi.png",     src: "/images/sign-now/lofi.png",    caption: "Lo-Fi" },
                  { label: "sign-now-midfi.png",    src: "/images/sign-now/lofi-bw.png", caption: "Mid-Fi" },
                  { label: "sign-now-hifi.png",     src: "/images/sign-now/hifi.png",    caption: "Hi-Fi" },
                ].map(({ label, src, caption }) => (
                  <Img key={label} ratio="1/1" src={src} label={label} caption={caption} />
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ════════ 07 IMPACT ════════ */}
        <section id="impact" className={SP}>
          <div className={INNER}>

            <div className={`${T} ${r("s-impact-head")}`} data-reveal="s-impact-head">
              <SectionNum num="07">
                <h2
                  className="mb-10 text-4xl font-bold font-sans md:text-5xl"
                  style={{ color: "var(--ink)" }}
                >
                  Impact
                </h2>
              </SectionNum>
            </div>

            <div
              className={`grid gap-6 md:grid-cols-3 ${T} ${r("s-impact-cards")}`}
              data-reveal="s-impact-cards"
            >
              {[
                {
                  icon: "🎯",
                  title: "For Deaf Users",
                  items: [
                    "Safer, less stressful experiences",
                    "Increased autonomy and confidence",
                    "Immediate access to spoken information",
                  ],
                },
                {
                  icon: "🏢",
                  title: "For Organizations",
                  items: [
                    "Improved ADA compliance",
                    "Reduced liability exposure",
                    "Stronger reputation for inclusion",
                  ],
                },
                {
                  icon: "🌍",
                  title: "For Society",
                  items: [
                    "Progress toward universal design",
                    "More equitable public spaces",
                    "Shifted conversation around accessibility tech",
                  ],
                },
              ].map(({ icon, title, items }) => (
                <div
                  key={title}
                  className="sn-lift rounded-2xl p-6 md:p-8"
                  style={{ background: "var(--blush)", border: "1px solid var(--taupe)" }}
                >
                  <span className="text-3xl">{icon}</span>
                  <h3
                    className="mt-4 mb-4 text-xl font-bold font-sans"
                    style={{ color: "var(--ink)" }}
                  >
                    {title}
                  </h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: "var(--ink-70)" }}>
                        <span style={{ color: "var(--terra)" }}>·</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Competition results */}
            <div
              className={`mt-10 rounded-2xl p-8 text-center md:p-12 ${T} ${r("s-impact-results")}`}
              data-reveal="s-impact-results"
              style={{ background: "var(--sage)", border: "2px solid var(--terra)" }}
            >
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                {[
                  { icon: "🏆", stat: "Top 5 Overall",      sub: "out of 72+ teams" },
                  { icon: "🥇", stat: "1st Place Healthcare", sub: "Healthcare Track" },
                  { icon: "👥", stat: "200+ Attendees",      sub: "pitched to" },
                ].map(({ icon, stat, sub }) => (
                  <div key={stat} className="flex flex-col items-center gap-1">
                    <span className="text-3xl">{icon}</span>
                    <span
                      className="text-xl font-bold font-sans"
                      style={{ color: "var(--ink)" }}
                    >
                      {stat}
                    </span>
                    <span className="text-sm" style={{ color: "var(--ink-70)" }}>{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Usability quote */}
            <div
              className={`mt-8 sn-qbar ${T} ${r("s-impact-quote")}`}
              data-reveal="s-impact-quote"
            >
              <p className="text-base italic font-sans leading-relaxed md:text-lg" style={{ color: "var(--ink)" }}>
                &ldquo;The interface is incredibly intuitive; it feels like a natural extension of my conversation.&rdquo;
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--terra)" }}>
                Beta Tester
              </p>
            </div>

            {/* Impact Power Statement */}
            <div
              className={`mt-10 rounded-2xl p-8 md:p-12 ${T} ${r("s-impact-power")}`}
              data-reveal="s-impact-power"
              style={{ background: "var(--blush)", border: "1.5px solid var(--terra)" }}
            >
              <p
                className="max-w-3xl text-base leading-relaxed md:text-lg font-sans"
                style={{ color: "var(--ink)" }}
              >
                SignNow is bridging the{" "}
                <span style={{ textDecoration: "underline", textDecorationColor: "var(--terra)", textUnderlineOffset: "4px", textDecorationThickness: "1.5px", fontWeight: 600 }}>
                  18-minute communication gap
                </span>
                , turning life-altering confusion into instant understanding. By delivering real-time,
                human-centric translation in under 300ms, we are empowering{" "}
                <span style={{ textDecoration: "underline", textDecorationColor: "var(--terra)", textUnderlineOffset: "4px", textDecorationThickness: "1.5px", fontWeight: 600 }}>
                  1 million Americans
                </span>{" "}
                to navigate high-stakes environments with the autonomy they deserve.
              </p>
            </div>

          </div>
        </section>

        {/* ════════ 08 REFLECTION ════════ */}
        <section id="reflection" className={SP} style={{ background: "var(--blush)" }}>
          <div className={INNER}>

            <div className={`${T} ${r("s-reflection-head")}`} data-reveal="s-reflection-head">
              <SectionNum num="08">
                <h2
                  className="mb-4 text-4xl font-bold font-sans md:text-5xl"
                  style={{ color: "var(--ink)" }}
                >
                  Reflection
                </h2>
              </SectionNum>
              <p className="mb-10 max-w-3xl text-base leading-relaxed md:text-lg" style={{ color: "var(--ink-70)" }}>
                I came into this project without deep expertise in Deaf culture or healthcare UX. That gap became
                an asset that forced me to listen before I designed. The most important decisions weren&apos;t visual;
                they were about who I talked to and what I was willing to let challenge my assumptions.
              </p>
            </div>

            {/* Two honest reflection blocks */}
            <div
              className={`mb-12 grid gap-6 md:grid-cols-2 ${T} ${r("s-reflection-blocks")}`}
              data-reveal="s-reflection-blocks"
            >
              {[
                {
                  accent: "✎ᝰ",
                  title: "Designing outside my comfort zone",
                  body: "One of the hardest parts was entering a design space where I had no prior expertise. I had to earn the right to design for this community by genuinely engaging with it, not just reading about it.",
                },
                {
                  accent: "𝄞",
                  title: "Advocating for authentic representation",
                  body: "There were easier paths. Generic avatars, simpler animation, faster builds. I pushed back on all of them because the research made clear that authenticity wasn't optional. It was the entire foundation.",
                },
              ].map(({ accent, title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl p-8"
                  style={{ background: "var(--cream)", border: "1px solid var(--taupe)" }}
                >
                  <span className="text-3xl" style={{ color: "var(--terra)" }}>{accent}</span>
                  <h3
                    className="mt-4 mb-3 text-xl font-semibold italic font-sans"
                    style={{ color: "var(--ink)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--ink-70)" }}>{body}</p>
                </div>
              ))}
            </div>

            {/* Lessons 2×2 grid */}
            <div
              className={`mb-12 grid grid-cols-2 gap-4 md:grid-cols-4 ${T} ${r("s-reflection-lessons")}`}
              data-reveal="s-reflection-lessons"
            >
              {[
                { icon: "🎯", lesson: "Proximity to the community is a design tool" },
                { icon: "🤝", lesson: "Trust is designed, not assumed" },
                { icon: "⚡", lesson: "Urgency changes everything" },
                { icon: "🔬", lesson: "Assumption inversion is a research skill" },
              ].map(({ icon, lesson }) => (
                <div
                  key={lesson}
                  className="sn-lift rounded-2xl p-5 text-center"
                  style={{ background: "var(--cream)", border: "1px solid var(--taupe)" }}
                >
                  <span className="text-2xl">{icon}</span>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--ink-70)" }}>{lesson}</p>
                </div>
              ))}
            </div>

            {/* Closing pull quote */}
            <div
              className={`rounded-2xl p-8 md:p-12 ${T} ${r("s-reflection-quote")}`}
              data-reveal="s-reflection-quote"
              style={{ background: "var(--cream)" }}
            >
              <p
                className="max-w-2xl text-xl italic font-sans leading-relaxed md:text-2xl"
                style={{ color: "var(--ink)" }}
              >
                &ldquo;More importantly, it solidified my commitment to designing technology that connects
                people and doesn&apos;t leave Deaf users behind.&rdquo;
              </p>
            </div>

          </div>
        </section>

        {/* ════════ IF WE CONTINUED ════════ */}
        <section className={SP}>
          <div className={INNER}>
            <div className={`${T} ${r("s-continued")}`} data-reveal="s-continued">
              <h2
                className="mb-10 text-3xl font-bold font-sans"
                style={{ color: "var(--ink)" }}
              >
                If We Continued...
              </h2>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {[
                  { icon: "🌍", title: "Expand Language Support",   body: "ASL → BSL, LSF, and other national sign languages" },
                  { icon: "🏥", title: "EMR Integration",           body: "Direct connection with hospital record systems" },
                  { icon: "🤖", title: "AI Context Detection",      body: "Automatically adapt formality and vocabulary to context" },
                  { icon: "🔄", title: "Community Feedback Loop",   body: "Ongoing input from Deaf users to improve avatar authenticity" },
                ].map(({ icon, title, body }) => (
                  <div
                    key={title}
                    className="sn-lift rounded-2xl p-5"
                    style={{ background: "var(--blush)", border: "1px solid var(--taupe)" }}
                  >
                    <span className="text-2xl">{icon}</span>
                    <h3
                      className="mt-3 mb-2 text-base font-semibold font-sans"
                      style={{ color: "var(--ink)" }}
                    >
                      {title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--ink-70)" }}>{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════ BOTTOM NAV ════════ */}
        <div
          className="pb-24"
          style={{ borderTop: "1px solid var(--taupe)" }}
        >
          <div className={INNER}>
            <div className="flex items-center justify-between py-8">
              <Link
                href="/work"
                className="text-sm font-medium transition-colors hover:underline"
                style={{ color: "var(--terra)" }}
              >
                ← Back to Work
              </Link>
              <Link
                href="/work"
                className="text-sm font-medium transition-colors hover:underline"
                style={{ color: "var(--terra)" }}
              >
                Next Project →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
