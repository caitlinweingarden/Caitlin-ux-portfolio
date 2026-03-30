"use client";

import Link from "next/link";

const NAV_LINKS = [
  { label: "Work",       href: "/"           },
  { label: "Playground", href: "/playground" },
  { label: "About",      href: "/about"      },
];

const REACH_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/caitlinweingarden" },
];

export default function Footer() {
  const bgColor      = "#5C3219";
  const textColor    = "#FFFDF9";
  const linkColor    = "rgba(255,253,249,0.55)";
  const linkHover    = "#FFFDF9";
  const headingColor = "rgba(255,253,249,0.40)";
  const centerGlow   = "radial-gradient(ellipse at 50% 0%, rgba(255,182,193,0.10) 0%, transparent 55%)";

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: bgColor, transition: "background-color 0.4s ease" }}
      role="contentinfo"
    >
      {/* Center radial glow */}
      <div
        aria-hidden
        style={{
          position:      "absolute",
          inset:         0,
          background:    centerGlow,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-16 py-24 md:px-24">
        <div className="flex flex-col gap-14 md:flex-row md:items-start md:justify-between">

          {/* Module 7: Paper Cream signature text */}
          <div className="flex flex-col gap-0 leading-snug" style={{ color: textColor }}>
            <span className="text-sm font-bold md:text-base" style={{ letterSpacing: "-0.01em" }}>
              Created + Coded with ♡
            </span>
            <span className="text-sm font-bold md:text-base" style={{ letterSpacing: "-0.01em" }}>
              by Caitlin Weingarden
            </span>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-2">

            {/* Navigation */}
            <div>
              <p
                className="mb-4 text-xs font-bold uppercase tracking-widest"
                style={{ color: headingColor }}
              >
                Navigation
              </p>
              <ul className="space-y-2.5">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm font-bold transition-opacity duration-200"
                      style={{ color: linkColor }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = linkHover)}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = linkColor)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <p
                className="mb-4 text-xs font-bold uppercase tracking-widest"
                style={{ color: headingColor }}
              >
                Connect
              </p>
              <ul className="space-y-2.5">
                {REACH_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm font-bold transition-opacity duration-200"
                      style={{ color: linkColor }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = linkHover)}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = linkColor)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
