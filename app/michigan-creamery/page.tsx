"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// ── Image paths ────────────────────────────────────────────────────────────────
const IMG = {
  hero:       "/michigan-creamery/Hero%20Image.png",
  hifi:       "/michigan-creamery/HiFi%20Images.png",
  components: "/michigan-creamery/Components.png",
  templates:  "/michigan-creamery/Templates.png",
  typography: "/michigan-creamery/Typography.png",
};

// ── Shared components ──────────────────────────────────────────────────────────

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

// ── Page ───────────────────────────────────────────────────────────────────────

export default function MichiganCreameryPage() {
  return (
    <div className="pb-24 md:pb-32">

      {/* ── Project header ────────────────────────────────────────────────── */}
      <motion.div
        className="mx-auto max-w-7xl px-8 pt-24 md:pt-32"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-page-text/45 transition-colors hover:text-page-text"
        >
          <span aria-hidden>←</span> Back to Work
        </Link>

        <p
          className="mt-10 text-xs font-bold uppercase tracking-widest"
          style={{ color: "#FFB6C1" }}
        >
          Product Design · UX Research · Branding
        </p>

        <h1
          className="mt-4 max-w-4xl text-5xl font-bold text-page-text md:text-6xl lg:text-7xl"
          style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}
        >
          Michigan Creamery
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-page-text/70 md:text-xl">
          Redesigning a family-owned Ann Arbor ice cream shop&apos;s digital presence to match the premium, local experience customers already love in store.
        </p>

        {/* Problem / Solution / Impact boxes */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              label: "Problem",
              text:  "The existing site felt inconsistent and cluttered, undermining a brand that had been carefully refined since its 2017 rebrand.",
            },
            {
              label: "Solution",
              text:  "Every design decision traced back to a real user need: surface the menu faster, reduce cognitive load, and give the brand story room to breathe. The result is a site built around what customers actually come looking for.",
            },
            {
              label: "Impact",
              text:  "For the 120,000+ residents of Ann Arbor who search for Michigan Creamery, the redesign means the quality inside the shop finally matches what they find online.",
            },
          ].map(({ label, text }) => (
            <div
              key={label}
              className="rounded-2xl p-6"
              style={{ background: "rgba(45,27,20,0.05)", border: "1px solid rgba(45,27,20,0.08)" }}
            >
              <p
                className="mb-2 text-xs font-bold uppercase tracking-widest"
                style={{ color: "#2D1B14" }}
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
              { label: "Role",     value: "UX Designer" },
              { label: "Timeline", value: "8 Weeks" },
              { label: "Type",     value: "Website Redesign" },
              { label: "Tools",    value: "Figma, FigJam" },
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

      {/* ── Hero image ────────────────────────────────────────────────────── */}
      <motion.div
        className="mx-auto mt-16 max-w-7xl px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <CaseImage src={IMG.hero} alt="Michigan Creamery redesign" rounded="rounded-3xl" />
      </motion.div>

      {/* ── Stats row ─────────────────────────────────────────────────────── */}
      <motion.div
        className="mx-auto mt-20 max-w-7xl px-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 gap-10 border-t border-page-text/10 pt-10 md:grid-cols-3">
          {[
            { stat: "120,000+", label: "Ann Arbor residents reached" },
            { stat: "50%",      label: "Reduction in navigation items" },
            { stat: "8 Weeks",  label: "Research to final designs" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <p
                className="text-4xl font-bold text-page-text md:text-5xl"
                style={{ letterSpacing: "-0.04em" }}
              >
                {stat}
              </p>
              <p className="mt-2 text-sm text-page-text/50">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Body ──────────────────────────────────────────────────────────── */}
      <div className="mx-auto mt-24 max-w-7xl px-8">

        {/* 01 Background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel num="01" label="Background" />
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div className="space-y-4 text-base leading-relaxed text-page-text/65">
              <p>
                Michigan Creamery is a family-owned ice cream and sweet shop in Ann Arbor, Michigan. Founded in 2007 and thoughtfully rebranded in 2017, the shop has built a loyal following around premium small-batch ice cream made with locally sourced Michigan milk.
              </p>
              <p>
                Despite a strong in-store experience and a refined brand identity, the digital presence told a different story. Inconsistent visuals, a cluttered navigation, and a menu that was hard to find were creating friction for new and returning customers alike.
              </p>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-page-text/65">
              <p>
                The goal of this project was to close the gap between how Michigan Creamery feels in person and how it shows up online, giving every customer a reason to visit before they even walk through the door.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Sticker>Family-owned since 2007</Sticker>
                <Sticker>Locally sourced Michigan dairy</Sticker>
                <Sticker>Ann Arbor, MI</Sticker>
                <Sticker>Small-batch production</Sticker>
              </div>
            </div>
          </div>
        </motion.div>

        <Divider />

        {/* 02 The Problem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel num="02" label="The Problem" />
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-page-text/65">
            User research and a heuristic evaluation of the existing site surfaced three friction points that were consistently getting in the way of customers.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon:  "🎨",
                title: "Color as a Visual Cue",
                body:  "Color was used inconsistently across the site, making it difficult for users to identify interactive elements, read hierarchy, or feel oriented within the brand.",
              },
              {
                icon:  "📋",
                title: "Information Overload",
                body:  "Dense text, a packed navigation, and competing calls-to-action overwhelmed first-time visitors and buried the most important content below the fold.",
              },
              {
                icon:  "🔗",
                title: "Consistency",
                body:  "Mismatched fonts, varied button styles, and uneven spacing created a disjointed feel that worked against the polished identity the 2017 rebrand had established.",
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl p-7"
                style={{ background: "rgba(45,27,20,0.04)", border: "1px solid rgba(45,27,20,0.08)" }}
              >
                <span style={{ fontSize: 28, display: "block", marginBottom: 16 }}>{icon}</span>
                <h3
                  className="mb-3 text-base font-bold text-page-text"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-page-text/60">{body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <Divider />

        {/* 03 Research */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel num="03" label="Research" />
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-page-text/65">
            A competitive audit and heuristic evaluation surfaced where the experience was falling short. Three distinct user types kept appearing in the findings.
          </p>

          {/* Persona cards */}
          <div className="mb-16 grid gap-5 md:grid-cols-3">
            {[
              {
                avatar:      "🎓",
                name:        "The Student",
                context:     "U of M undergrad, Ann Arbor local",
                goal:        "Find the flavor menu and hours before heading over",
                frustration: "Couldn't locate basic info without digging through multiple pages",
              },
              {
                avatar:      "👨‍👩‍👧",
                name:        "The Local Family",
                context:     "Ann Arbor resident, regular visitor",
                goal:        "Discover seasonal flavors and plan a weekend trip",
                frustration: "The site felt outdated compared to the warm in-store experience",
              },
              {
                avatar:      "🏫",
                name:        "The First-Timer",
                context:     "Visitor or new resident, found via Google",
                goal:        "Understand what makes Michigan Creamery worth the trip",
                frustration: "No clear brand story or differentiation on the homepage",
              },
            ].map(({ avatar, name, context, goal, frustration }) => (
              <div
                key={name}
                className="rounded-2xl p-7"
                style={{ background: "rgba(45,27,20,0.04)", border: "1px solid rgba(45,27,20,0.08)" }}
              >
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-3xl"
                  style={{ background: "rgba(255,182,193,0.20)" }}
                >
                  {avatar}
                </div>
                <p
                  className="mb-1 text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#FFB6C1" }}
                >
                  User Persona
                </p>
                <h3
                  className="mb-1 text-base font-bold text-page-text"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {name}
                </h3>
                <p className="mb-4 text-xs text-page-text/40">{context}</p>
                <div className="space-y-3">
                  <div>
                    <p className="mb-1 text-[0.65rem] font-bold uppercase tracking-widest text-page-text/35">Goal</p>
                    <p className="text-sm leading-relaxed text-page-text/65">{goal}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-[0.65rem] font-bold uppercase tracking-widest text-page-text/35">Frustration</p>
                    <p className="text-sm leading-relaxed text-page-text/65">{frustration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Templates image + research findings */}
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <CaseImage
              src={IMG.templates}
              alt="Research templates and audit framework"
              caption="Audit templates used across the competitive benchmarking process"
            />
            <div>
              <h3
                className="mb-6 text-xl font-bold text-page-text"
                style={{ letterSpacing: "-0.025em" }}
              >
                What the audit revealed
              </h3>
              {/* Research insight cards */}
              <div className="space-y-4">
                {[
                  { icon: "🔍", finding: "14 usability issues flagged across the existing site, from low-contrast text to broken information hierarchy." },
                  { icon: "📊", finding: "Competitive audit of 6 ice cream brands showed clear best practices in menu layout, photography, and nav structure that Michigan Creamery was not using." },
                  { icon: "🎯", finding: "Three core user goals surfaced: find the menu fast, understand the brand difference, and locate the shop." },
                ].map(({ icon, finding }) => (
                  <div
                    key={finding}
                    className="flex items-start gap-4 rounded-xl p-5"
                    style={{ background: "rgba(45,27,20,0.04)", border: "1px solid rgba(45,27,20,0.07)" }}
                  >
                    <span className="mt-0.5 shrink-0 text-xl">{icon}</span>
                    <p className="text-sm leading-relaxed text-page-text/65">{finding}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Typography image */}
          <div className="mt-12">
            <CaseImage
              src={IMG.typography}
              alt="Typography system for Michigan Creamery"
              caption="Typography decisions drawn from the competitive audit and brand standards"
            />
          </div>
        </motion.div>

        <Divider />

        {/* 04 Key Design Decisions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel num="04" label="Key Design Decisions" />
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-page-text/65">
            Each decision was grounded in research and validated against the goal of making the experience feel as premium as the product itself.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                num:   "01",
                icon:  "📍",
                title: "Clear View Menu CTA",
                body:  "A persistent, high-contrast View Menu button was anchored above the fold on every page. Users no longer had to hunt for the most-visited piece of content on the site.",
              },
              {
                num:   "02",
                icon:  "🗂️",
                title: "Simplified Navigation",
                body:  "Navigation was reduced from 8 items to 4 focused destinations. A clear visual hierarchy was added to guide users toward the actions they actually care about.",
              },
              {
                num:   "03",
                icon:  "🏠",
                title: "Improved Homepage Hierarchy",
                body:  "The homepage was restructured around a clear narrative: what Michigan Creamery is, why it matters, and how to visit or order. Story-first, action second.",
              },
              {
                num:   "04",
                icon:  "📸",
                title: "Elevated Product Imagery",
                body:  "Small, low-contrast thumbnails were replaced with full-bleed photography and generous white space. The ice cream became the hero it deserved to be.",
              },
            ].map(({ num, icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl p-7"
                style={{ background: "rgba(45,27,20,0.03)", border: "1px solid rgba(45,27,20,0.08)" }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span style={{ fontSize: 24 }}>{icon}</span>
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: "#FFB6C1" }}
                  >
                    Decision {num}
                  </span>
                </div>
                <h3
                  className="mb-3 text-lg font-bold text-page-text"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-page-text/60">{body}</p>
              </div>
            ))}
          </div>

          {/* Components image */}
          <div className="mt-10">
            <CaseImage
              src={IMG.components}
              alt="Michigan Creamery component library"
              caption="Component library built to maintain consistency across every page"
            />
          </div>
        </motion.div>

        <Divider />

        {/* 05 Final Designs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel num="05" label="Final Designs" />
          <CaseImage
            src={IMG.hifi}
            alt="Michigan Creamery high-fidelity designs"
            caption="High-fidelity screens across homepage, menu, and product detail pages"
          />
        </motion.div>

        <Divider />

        {/* 06 Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel num="06" label="Impact" />
          <div className="grid gap-10 border-t border-page-text/10 pt-10 md:grid-cols-3">
            {[
              {
                stat:  "120,000+",
                label: "Ann Arbor residents reached",
                body:  "Students walking to campus, families planning a weekend treat, first-time visitors arriving from a Google search. Each of them now lands on a homepage that earns their trust before they ever walk through the door.",
              },
              {
                stat:  "50%",
                label: "Fewer navigation items",
                body:  "Cutting the nav from 8 items to 4 was not about minimalism. It was about removing the mental overhead that kept customers from reaching what they came for in the first place.",
              },
              {
                stat:  "1 click",
                label: "To reach the menu from anywhere",
                body:  "Flavors and menu information were the most-searched content on the site. A persistent CTA above the fold means that search ends in one tap, on any page, every time.",
              },
            ].map(({ stat, label, body }) => (
              <div key={stat}>
                <p
                  className="text-4xl font-bold text-page-text md:text-5xl"
                  style={{ letterSpacing: "-0.04em" }}
                >
                  {stat}
                </p>
                <p
                  className="mt-2 mb-3 text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#FFB6C1" }}
                >
                  {label}
                </p>
                <p className="text-sm leading-relaxed text-page-text/55">{body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <Divider />

        {/* 07 Reflection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel num="07" label="Reflection" />
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div className="space-y-4 text-base leading-relaxed text-page-text/65">
              <p>
                This project reinforced how much a well-defined information architecture can do on its own. Reducing the navigation from 8 items to 4 was one of the simplest changes and one of the most impactful for the overall feel of the site.
              </p>
              <p>
                Working with a real local brand meant every decision had stakes. The visual identity had been carefully built over years, and the design needed to honor that while making it work harder for users.
              </p>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-page-text/65">
              <p>
                If I were to continue this project, I would build out a component library to give the Michigan Creamery team the tools to maintain consistency on their own as the site grows.
              </p>
              <p>
                I would also run usability testing with actual customers to validate the hierarchy changes and measure whether the View Menu CTA placement is performing as expected.
              </p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ── Next project ──────────────────────────────────────────────────── */}
      <div className="mx-auto mt-24 max-w-7xl px-8">
        <div className="border-t border-page-text/10 pt-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-page-text/35">
            Next Project
          </p>
          <Link
            href="/signnow"
            className="group inline-flex items-center gap-3 text-3xl font-bold text-page-text transition-opacity hover:opacity-60 md:text-4xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            Audio to Sign Language Translator
            <span className="transition-transform group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>

    </div>
  );
}
