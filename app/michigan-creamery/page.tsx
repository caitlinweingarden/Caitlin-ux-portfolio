"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// ── Image paths ────────────────────────────────────────────────────────────────
const IMG = {
  hero:        "/michigan-creamery/Hero%20Image.png?v=4",
  hifi:        "/michigan-creamery/HiFi%20Images.png",
  hifiDesigns: "/michigan-creamery/HiFi%20Designs.png",
  components:  "/michigan-creamery/Components.png",
  templates:   "/michigan-creamery/Templates.png",
  typography:  "/michigan-creamery/Typography.png",
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
          UX Research · Design Systems · E-Commerce
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
              text:  <>Flavors, hours, and menu info were <span style={{ textDecoration: "underline", textDecorationColor: "rgba(255,182,193,0.6)", textUnderlineOffset: "3px", textDecorationThickness: "1.5px" }}>frustratingly difficult to locate</span> before deciding to make the trip.</>,
            },
            {
              label: "Solution",
              text:  <>Every design decision traced back to a real user need: <span style={{ textDecoration: "underline", textDecorationColor: "rgba(255,182,193,0.6)", textUnderlineOffset: "3px", textDecorationThickness: "1.5px", fontWeight: 700 }}>surface the menu faster</span>, reduce cognitive load, and give the brand story room to breathe.</>,
            },
            {
              label: "Impact",
              text:  <>For the <strong className="font-bold text-page-text">120,000+ Ann Arbor residents</strong> who search for Michigan Creamery, the redesign means the quality inside the shop finally matches what they find online.</>,
            },
          ].map(({ label, text }) => (
            <div
              key={label}
              className="rounded-2xl p-6"
              style={{ background: "rgba(45,27,20,0.05)", border: "1px solid rgba(45,27,20,0.08)" }}
            >
              <p
                className="mb-2 text-xs font-bold uppercase tracking-widest"
                style={{ color: "#FFB6C1" }}
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
              { label: "Role",     value: "UX Designer (1 of 2)" },
              { label: "Timeline", value: "8 Weeks" },
              { label: "Type",     value: "Website Redesign" },
              { label: "Tools",    value: "Figma, FigJam, Usability Testing, Cursor, AI Tools" },
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
            { stat: "85%",      label: "Of users found flavors faster after redesign" },
            { stat: "120,000+", label: "Ann Arbor residents reached through a more accessible experience" },
            { stat: "92%",      label: "Task success rate for reaching the menu in usability testing" },
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

        {/* 01 Meet Michigan Creamery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel num="01" label="Meet Michigan Creamery" />
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div className="space-y-4 text-base leading-relaxed text-page-text/65">
              <p>
                Never heard of Michigan Creamery? You are not alone. Their website had the same problem.
              </p>
              <p>
                Michigan Creamery is a family-owned ice cream and sweet shop in Ann Arbor, Michigan, with a loyal following built around <strong className="font-bold text-page-text">premium small-batch ice cream</strong> made with locally sourced Michigan milk.
              </p>
              <p>
                Inconsistent visuals, cluttered navigation, and a menu that was <strong className="font-bold text-page-text">hard to find</strong> were creating friction for new and returning customers alike.
              </p>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-page-text/65">
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
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon:  "🎨",
                title: "Color as a Visual Cue",
                body:  "Color was used inconsistently across the site, making it difficult for users to identify interactive elements, read visual hierarchy, or feel oriented within the brand.",
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
                style={{ background: "rgba(255,182,193,0.06)", border: "1px solid rgba(255,182,193,0.20)" }}
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
            <strong className="font-bold text-page-text">User interviews conducted on campus</strong> helped ground the findings in real behavior.
          </p>

          {/* Persona cards */}
          <div className="mb-16 grid gap-5 md:grid-cols-3">
            {[
              {
                avatar:      "🎓",
                name:        "The Student",
                context:     "U of M undergrad, Ann Arbor local",
                goal:        "Find the flavor menu and hours before heading out.",
                frustration: "Hard to track down flavors while planning a Friday night, and the ordering page linking out to a separate site caused loading issues that killed the vibe.",
                accentBg:    "rgba(255,182,193,0.12)",
                accentBorder:"rgba(255,182,193,0.35)",
              },
              {
                avatar:      "👨‍👩‍👧",
                name:        "The Local Family",
                context:     "Ann Arbor resident, regular visitor",
                goal:        "Discover seasonal flavors and plan a weekend trip.",
                frustration: "On desktop, flavors were hard to find and the site felt outdated, making them quietly question whether the quality was still there.",
                accentBg:    "rgba(45,27,20,0.05)",
                accentBorder:"rgba(45,27,20,0.12)",
              },
              {
                avatar:      "🗺️",
                name:        "The First-Timer",
                context:     "Visitor or new resident, found via Google",
                goal:        "Understand what makes Michigan Creamery worth the trip.",
                frustration: "No clear brand story on the homepage and no real product photography, making it impossible to see what the ice cream actually looks like.",
                accentBg:    "rgba(255,182,193,0.07)",
                accentBorder:"rgba(255,182,193,0.20)",
              },
            ].map(({ avatar, name, context, goal, frustration, accentBg, accentBorder }) => (
              <div
                key={name}
                className="flex flex-col rounded-2xl overflow-hidden"
                style={{ background: "rgba(45,27,20,0.04)", border: "1px solid rgba(45,27,20,0.08)" }}
              >
                <div
                  className="flex items-center gap-4 px-7 py-5"
                  style={{ background: accentBg, borderBottom: `1px solid ${accentBorder}` }}
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl"
                    style={{ background: "rgba(255,182,193,0.25)" }}
                  >
                    {avatar}
                  </div>
                  <div>
                    <p
                      className="text-[0.6rem] font-bold uppercase tracking-widest"
                      style={{ color: "#FFB6C1" }}
                    >
                      User Persona
                    </p>
                    <h3
                      className="text-base font-bold text-page-text"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {name}
                    </h3>
                    <p className="text-xs text-page-text/40">{context}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 px-7 py-6">
                  <div>
                    <p className="mb-1 text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "#FFB6C1" }}>Goal</p>
                    <p className="text-sm leading-relaxed text-page-text/65">{goal}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "#FFB6C1" }}>Frustration</p>
                    <p className="text-sm leading-relaxed text-page-text/65">{frustration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Research findings */}
          <div>
            <h3
              className="mb-6 text-xl font-bold text-page-text"
              style={{ letterSpacing: "-0.025em" }}
            >
              What the audit revealed
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: "🔍",
                  finding: <>The audit revealed <strong className="font-bold text-page-text">14 usability issues</strong> across the existing site, from low-contrast text to broken information hierarchy.</>,
                  key: "usability",
                },
                {
                  icon: "📊",
                  finding: <>A competitive audit of <strong className="font-bold text-page-text">6 ice cream brands</strong> surfaced clear best practices in menu layout, photography, and nav structure that Michigan Creamery was not following.</>,
                  key: "competitive",
                },
                {
                  icon: "🎯",
                  finding: <>Three core user goals emerged: <strong className="font-bold text-page-text">find the menu fast</strong>, understand the brand difference, and locate the shop.</>,
                  key: "goals",
                },
              ].map(({ icon, finding, key }) => (
                <div
                  key={key}
                  className="flex items-start gap-4 rounded-xl p-5"
                  style={{ background: "rgba(255,182,193,0.06)", border: "1px solid rgba(255,182,193,0.20)" }}
                >
                  <span className="mt-0.5 shrink-0 text-xl">{icon}</span>
                  <p className="text-sm leading-relaxed text-page-text/65">{finding}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Analysis */}
          <div className="mt-16">
            <h3
              className="mb-3 text-xl font-bold text-page-text"
              style={{ letterSpacing: "-0.025em" }}
            >
              What the Competition Got Right
            </h3>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-page-text/65">
              I audited 3 direct competitors to identify what Michigan Creamery was missing online.
            </p>

            <div className="mb-8 grid gap-5 md:grid-cols-3">
              {[
                {
                  icon:     "🍦",
                  name:     "Ben & Jerry's",
                  finding:  <>Led with <strong className="font-bold text-page-text">bold, appetizing product photography</strong> on every page. Flavors were impossible to miss, making the experience feel indulgent before you even walk in.</>,
                  key:      "bj",
                },
                {
                  icon:     "🖤",
                  name:     "Blank Slate Creamery",
                  finding:  <>Leaned into <strong className="font-bold text-page-text">modern, editorial branding</strong> with a clean layout that felt premium and intentional.</>,
                  key:      "bs",
                },
                {
                  icon:     "🏛️",
                  name:     "Washtenaw Dairy",
                  finding:  <>Built on <strong className="font-bold text-page-text">community loyalty and nostalgia</strong>, a historic Ann Arbor staple since 1934 with a large flavor selection.</>,
                  key:      "wd",
                },
              ].map(({ icon, name, finding, key }) => (
                <div
                  key={key}
                  className="rounded-2xl p-6"
                  style={{ background: "rgba(45,27,20,0.04)", border: "1px solid rgba(45,27,20,0.08)" }}
                >
                  <span style={{ fontSize: 26, display: "block", marginBottom: 12 }}>{icon}</span>
                  <p
                    className="mb-2 text-[0.6rem] font-bold uppercase tracking-widest"
                    style={{ color: "#FFB6C1" }}
                  >
                    Competitor
                  </p>
                  <h4
                    className="mb-3 text-base font-bold text-page-text"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {name}
                  </h4>
                  <p className="text-sm leading-relaxed text-page-text/60">{finding}</p>
                </div>
              ))}
            </div>

            <div
              className="max-w-3xl rounded-2xl p-7"
              style={{ background: "rgba(255,182,193,0.08)", border: "1.5px solid rgba(255,182,193,0.28)" }}
            >
              <p className="text-sm leading-relaxed text-page-text/80">
                Michigan Creamery&apos;s biggest weakness was not its product, it was <strong className="font-bold text-page-text">website navigation and information organization</strong>. Competitors were winning online before customers even walked through the door.
              </p>
            </div>
          </div>

        </motion.div>

        <Divider />

        {/* 04 The Ingredients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel num="04" label="The Ingredients" />
          <div
            className="mb-10 max-w-3xl rounded-2xl p-8"
            style={{ background: "rgba(255,182,193,0.08)", border: "1.5px solid rgba(255,182,193,0.28)" }}
          >
            <p className="text-base leading-relaxed text-page-text/80">
              Before designing a single screen, I rebuilt the <strong className="font-bold text-page-text">color palette, typography, and component library</strong> from scratch.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <CaseImage
              src={IMG.typography}
              alt="Typography system for Michigan Creamery"
              caption="Typography decisions drawn from the competitive audit and brand standards"
            />
            <CaseImage
              src={IMG.components}
              alt="Michigan Creamery component library"
              caption="Component library built to maintain consistency across every page"
            />
            <CaseImage
              src={IMG.templates}
              alt="Research templates and audit framework"
              caption="Audit templates used across the competitive benchmarking process"
              rounded=""
            />
          </div>
        </motion.div>

        <Divider />

        {/* 05 Key Design Decisions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel num="05" label="Key Design Decisions" />
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                num:   "01",
                icon:  "📍",
                title: "Clear View Menu CTA",
                body:  <>A persistent, high-contrast <strong className="font-bold text-page-text">View Menu button</strong> was anchored above the fold on every page.</>,
              },
              {
                num:   "02",
                icon:  "🗂️",
                title: "Simplified Navigation",
                body:  <>Navigation was reduced from <strong className="font-bold text-page-text">8 items to 4</strong> focused destinations.</>,
              },
              {
                num:   "03",
                icon:  "🏠",
                title: "Improved Homepage Hierarchy",
                body:  "The homepage was restructured around a clear narrative: what Michigan Creamery is, why it matters, and how to visit or order.",
              },
              {
                num:   "04",
                icon:  "📸",
                title: "Elevated Product Imagery",
                body:  <>Small, low-contrast thumbnails were replaced with <strong className="font-bold text-page-text">full-bleed photography</strong> and generous white space. The ice cream became the hero it deserved to be.</>,
              },
            ].map(({ num, icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl p-7"
                style={{ background: "rgba(255,182,193,0.06)", border: "1px solid rgba(255,182,193,0.20)" }}
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

        </motion.div>

        <Divider />

        {/* 06 Final Designs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel num="06" label="Final Designs" />

          {/* TLDR preview */}
          <div className="mb-16">
            <p
              className="mb-2 text-xs font-bold uppercase tracking-widest"
              style={{ color: "#FFB6C1" }}
            >
              TLDR
            </p>
            <p className="mb-6 max-w-2xl text-base leading-relaxed text-page-text/65">
              Clean hierarchy, elevated photography, and a <strong className="font-bold text-page-text">menu that is actually easy to find</strong>.
            </p>
            <CaseImage
              src={IMG.hifiDesigns}
              alt="Michigan Creamery final design preview"
              rounded=""
            />
          </div>

          {/* Responsive designs */}
          <div>
            <p
              className="mb-2 text-xs font-bold uppercase tracking-widest"
              style={{ color: "#FFB6C1" }}
            >
              Responsive Designs
            </p>
            <CaseImage
              src={IMG.hifi}
              alt="Michigan Creamery responsive designs across screen sizes"
              rounded=""
            />
          </div>
        </motion.div>

        <Divider />

        {/* 07 Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel num="07" label="Impact" />
          <div className="grid gap-10 border-t border-page-text/10 pt-10 md:grid-cols-3">
            {[
              {
                stat:  "85%",
                label: "of users said the redesign better reflects the Michigan Creamery brand",
                body:  "",
              },
              {
                stat:  "120,000+",
                label: "Ann Arbor residents reached through a more accessible experience",
                body:  "",
              },
              {
                stat:  "92%",
                label: "task success rate for reaching the menu in usability testing",
                body:  "",
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

        {/* 08 Reflection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel num="08" label="Reflection" />
          <div
            className="mb-10 max-w-3xl rounded-2xl p-8"
            style={{ background: "rgba(255,182,193,0.08)", border: "1.5px solid rgba(255,182,193,0.28)" }}
          >
            <p className="text-base leading-relaxed text-page-text/80 md:text-lg">
              If it does not solve the problem, it is not good design.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <ul className="space-y-3">
              <Bullet><strong className="font-bold text-page-text">Product first.</strong> The menu page leads with real photography so users know what they want before they even walk in.</Bullet>
              <Bullet><strong className="font-bold text-page-text">Intentional CTAs.</strong> The View Menu button guides customers to what they came for before they realize they need it.</Bullet>
              <Bullet><strong className="font-bold text-page-text">Brand consistency.</strong> Improved imagery throughout finally matches the warmth and quality of the in-store experience.</Bullet>
              <Bullet><strong className="font-bold text-page-text">Navigation simplified.</strong> Reducing from 8 items to 4 was one of the smallest changes with the biggest impact.</Bullet>
              <Bullet><strong className="font-bold text-page-text">Component library built.</strong> Handed off a full system so the Michigan Creamery team can maintain consistency as the site grows.</Bullet>
            </ul>
            <div className="space-y-4">
              <p
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "#FFB6C1" }}
              >
                If I were to continue this project:
              </p>
              <ul className="space-y-3">
                <Bullet>Usability testing with real customers to validate hierarchy changes and measure View Menu CTA performance.</Bullet>
                <Bullet>Expand the design system to cover seasonal promotions and new product launches.</Bullet>
              </ul>
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
