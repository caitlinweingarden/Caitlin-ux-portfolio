"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/",           text: "HOME"       },
  { href: "/work",       text: "WORK"       },
  { href: "/playground", text: "PLAYGROUND" },
  { href: "/about",      text: "ABOUT"      },
] as const;

export default function Navigation() {
  const pathname    = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Paper Cream bg, sticky utility bar */}
      <nav
        className="sticky top-0 z-50 w-full backdrop-blur-sm"
        style={{
          background:   "rgba(255,253,249,0.94)",
          borderBottom: "1px solid rgba(45,27,20,0.06)",
        }}
        aria-label="Main navigation"
      >
        <div className="px-6 md:px-12 lg:px-24">
          <div
            className="mx-auto flex max-w-[1440px] items-center justify-center"
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
          >

            {/* Desktop: 4 centered tabs — 10px bold all-caps, gap-6 */}
            <div className="hidden items-center gap-6 md:flex">
              {NAV_LINKS.map(({ href, text }) => {
                const isActive =
                  href === "/"
                    ? pathname === "/"
                    : pathname === href || pathname.startsWith(href + "/");
                return (
                  <Link
                    key={href}
                    href={href}
                    className="font-bold transition-opacity duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D1B14] focus-visible:ring-offset-1"
                    style={{
                      fontSize:            "10px",
                      letterSpacing:       "0.08em",
                      color:               "#2D1B14",
                      opacity:             isActive ? 1 : 0.40,
                      textDecoration:      isActive ? "underline" : "none",
                      textDecorationColor: "#2D1B14",
                      textUnderlineOffset: "5px",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = isActive ? "1" : "0.40";
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {text}
                  </Link>
                );
              })}
            </div>

            {/* Mobile: centered ♡ toggles the menu overlay */}
            <div className="flex w-full items-center justify-center md:hidden">
              <button
                type="button"
                onClick={() => setMobileOpen((o) => !o)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className="flex min-h-[44px] min-w-[44px] items-center justify-center focus:outline-none"
                style={{ background: "none", border: "none" }}
              >
                <span
                  style={{
                    fontSize:   "20px",
                    color:      "#2D1B14",
                    opacity:    mobileOpen ? 1 : 0.55,
                    display:    "block",
                    lineHeight: 1,
                    transition: "opacity 0.2s ease, transform 0.2s ease",
                    transform:  mobileOpen ? "scale(1.15)" : "scale(1)",
                  }}
                  aria-hidden
                >
                  ♡
                </span>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile overlay — Paper Cream bg, 4 centered 10px tabs, no emojis */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!mobileOpen}
        className={`fixed inset-0 z-[65] flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden ${
          mobileOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        style={{ backgroundColor: "#FFFDF9" }}
      >
        <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ href, text }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={closeMobile}
                className="block font-bold transition-opacity duration-200"
                style={{
                  fontSize:            "10px",
                  color:               "#2D1B14",
                  opacity:             isActive ? 1 : 0.40,
                  letterSpacing:       "0.12em",
                  textDecoration:      isActive ? "underline" : "none",
                  textDecorationColor: "#2D1B14",
                  textUnderlineOffset: "5px",
                }}
                aria-current={isActive ? "page" : undefined}
              >
                {text}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
