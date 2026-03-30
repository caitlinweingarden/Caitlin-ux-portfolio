"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ── Photo row data ────────────────────────────────────────────────────────────

const CAMPUS_IMAGES = [
  {
    src:     "/about/Build%20and%20Launch.png",
    alt:     "Michigan Build and Launch",
    caption: "Michigan Build and Launch. Shipping real products with real constraints.",
  },
  {
    src:            "/about/EC%202.png?v=4",
    alt:            "Tech Innovation Jam team photo",
    caption:        "Top 5 of 72 teams. First place, Health Track. Proof that good design solves real problems.",
    objectPosition: "70% center",
  },
  {
    src:     "/about/EC%203.png",
    alt:     "UMSI Design Jam",
    caption: "UMSI Design Jam. Fast decisions, sticky notes, and better instincts.",
  },
];

const TRAVEL_IMAGES = [
  {
    src:     "/about/Travel%201.png",
    alt:     "Osaka Castle",
    caption: "Osaka Castle. Experiencing how environment and culture shape the way people move through space.",
  },
  {
    src:     "/about/Travel%202.png",
    alt:     "Photography",
    caption: "Photography sharpened my eye for hierarchy, framing, and what deserves attention.",
  },
  {
    src:     "/about/Travel%203.png",
    alt:     "Kamakura",
    caption: "Kamakura. The best experiences are never on the tourist map.",
  },
];


// ── Background ────────────────────────────────────────────────────────────────

function AboutBackground() {
  return (
    <div
      aria-hidden
      style={{
        position:      "fixed",
        inset:         0,
        zIndex:        -1,
        pointerEvents: "none",
        overflow:      "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset:    0,
          background: [
            "radial-gradient(ellipse 70% 70% at 0% 0%,   rgba(255,182,193,0.38) 0%, transparent 65%)",
            "radial-gradient(ellipse 55% 60% at 5% 65%,  rgba(255,224,230,0.32) 0%, transparent 60%)",
            "radial-gradient(ellipse 65% 80% at 100% 50%, #FFFDF9 0%, transparent 70%)",
            "linear-gradient(105deg, #FFF5F0 0%, #FFFDF9 55%, #FFFFFF 100%)",
          ].join(", "),
        }}
      />
      <div className="hp-blob-1" style={{ position: "absolute", width: "520px", height: "440px", top: "-100px", left: "-60px",  borderRadius: "50%", background: "rgba(255,182,193,0.34)", filter: "blur(100px)", mixBlendMode: "multiply"    }} />
      <div className="hp-blob-2" style={{ position: "absolute", width: "600px", height: "500px", bottom: "-130px", left: "-70px", borderRadius: "50%", background: "rgba(255,224,230,0.38)", filter: "blur(110px)", mixBlendMode: "multiply"    }} />
      <div className="hp-blob-3" style={{ position: "absolute", width: "420px", height: "390px", top: "33%",       left: "10%",   borderRadius: "50%", background: "rgba(45,27,20,0.055)",  filter: "blur(90px)",  mixBlendMode: "multiply"    }} />
      <div className="hp-blob-4" style={{ position: "absolute", width: "480px", height: "430px", top: "18%",       left: "-50px", borderRadius: "50%", background: "rgba(255,245,240,0.42)", filter: "blur(95px)",  mixBlendMode: "soft-light" }} />
    </div>
  );
}

// ── Photo row ─────────────────────────────────────────────────────────────────

function PhotoRow({
  heading,
  images,
  delay = 0,
}: {
  heading: string;
  images: { src: string; alt: string; caption: string; objectPosition?: string }[];
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Row heading */}
      <h3
        className="mb-5 text-base font-bold text-page-text md:text-lg"
        style={{ letterSpacing: "-0.02em" }}
      >
        {heading}
      </h3>

      {/* Three-column image grid — single column on mobile, top-aligned */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5" style={{ alignItems: "start" }}>
        {images.map((img) => (
          <figure key={img.src}>
            {/* Fixed aspect ratio container keeps all images the same height.
                object-contain shows the full image with no cropping. */}
            <div
              className="relative w-full overflow-hidden rounded-xl"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  position:       "absolute",
                  inset:          0,
                  width:          "100%",
                  height:         "100%",
                  objectFit:      "cover",
                  objectPosition: img.objectPosition ?? "center",
                  display:        "block",
                }}
              />
            </div>
            <figcaption className="mt-2 text-xs leading-snug text-page-text/45 text-pretty">
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </motion.div>
  );
}

// ── About Me rows ─────────────────────────────────────────────────────────────

function AboutRows() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="mx-auto max-w-[1200px]">

        <div className="space-y-14 md:space-y-16">
          <PhotoRow heading="Designing Beyond the Classroom" images={CAMPUS_IMAGES} delay={0} />
          <PhotoRow heading="Passport. Camera. Figma." images={TRAVEL_IMAGES} delay={0.06} />
        </div>

      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <AboutBackground />
      <div className="pb-4 md:pb-8">

        {/* ── Primary Bio ────────────────────────────────────────────── */}
        <section className="pt-24 pb-28 md:pt-32 md:pb-36">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-12 lg:gap-14">

              {/* Intro text — left on desktop, top on mobile */}
              <motion.div
                className="w-full md:flex-1"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1
                  className="text-page-text text-balance"
                  style={{
                    fontSize:      "clamp(1.55rem, 4vw, 2.75rem)",
                    fontWeight:    400,
                    letterSpacing: "-0.03em",
                    lineHeight:    1.18,
                    textShadow:    "0 1px 3px rgba(0,0,0,0.08)",
                    textWrap:      "balance",
                  }}
                >
                  Hi, I&apos;m{" "}
                  <span style={{ fontWeight: 700, whiteSpace: "nowrap" }}>Caitlin Weingarden</span>.{" "}
                  I&apos;m an{" "}
                  <span style={{
                    textDecoration:          "underline",
                    textDecorationColor:     "rgba(255,182,193,0.75)",
                    textUnderlineOffset:     "5px",
                    textDecorationThickness: "1.5px",
                  }}>artist</span>{" "}
                  turned product designer bringing fine art instincts to{" "}
                  <span style={{ whiteSpace: "nowrap" }}>craft and{" "}
                    <span style={{
                      textDecoration:          "underline",
                      textDecorationColor:     "rgba(255,182,193,0.75)",
                      textUnderlineOffset:     "5px",
                      textDecorationThickness: "1.5px",
                    }}>code</span>.
                  </span>
                </h1>

              </motion.div>

              {/* Portrait — right on desktop, bottom on mobile */}
              <motion.div
                className="w-full md:w-[33%] md:flex-shrink-0"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="relative w-full overflow-hidden rounded-2xl"
                  style={{ aspectRatio: "3/4" }}
                >
                  <Image
                    src="/images/self_image.jpg"
                    alt="Caitlin Weingarden"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "62% bottom" }}
                    sizes="(max-width: 768px) 90vw, 33vw"
                    priority
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── About Me Rows ──────────────────────────────────────────── */}
        <AboutRows />

        {/* ── CTA ────────────────────────────────────────────────────── */}
        <motion.div
          className="pb-24 md:pb-32 flex justify-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-page-text/60 transition-colors duration-200 hover:text-page-text"
            style={{ letterSpacing: "-0.01em" }}
          >
            View My Work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>

      </div>
    </>
  );
}
