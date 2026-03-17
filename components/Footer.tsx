"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Work",       href: "/work"       },
  { label: "Playground", href: "/playground" },
  { label: "About",      href: "/about"      },
  { label: "Home",       href: "/"           },
];

const REACH_LINKS = [
  { label: "Resume",   href: "/resume"                                   },
  { label: "Email",    href: "mailto:caitlin@weingarden.design"          },
  { label: "LinkedIn", href: "https://linkedin.com/in/caitlinweingarden" },
];

export default function Footer() {
  const pathname     = usePathname();
  const isPlayground = pathname === "/playground";

  // Module 6 + 7: Playground flips to Brand Pink; all other pages use Deep Brown
  const bgColor      = isPlayground ? "#FFB6C1" : "#2D1B14";
  const textColor    = isPlayground ? "#2D1B14" : "#FFFDF9";
  const linkColor    = isPlayground ? "rgba(45,27,20,0.60)"   : "rgba(255,253,249,0.60)";
  const linkHover    = isPlayground ? "#2D1B14"               : "#FFFDF9";
  const headingColor = isPlayground ? "rgba(45,27,20,0.45)"   : "rgba(255,253,249,0.45)";

  // Module 6: center 'high-shine' radial glow on Deep Brown footer
  const centerGlow = isPlayground
    ? "radial-gradient(ellipse at 50% 50%, rgba(45,27,20,0.12) 0%, transparent 65%)"
    : "radial-gradient(ellipse at 50% 0%,  rgba(255,182,193,0.20) 0%, transparent 60%)";

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

            {/* Module 7: Resume, Email, LinkedIn */}
            <div>
              <p
                className="mb-4 text-xs font-bold uppercase tracking-widest"
                style={{ color: headingColor }}
              >
                Reach Out
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
