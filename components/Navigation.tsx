"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/",           text: "WORK"       },
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
                    className="font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D1B14] focus-visible:ring-offset-1 nav-link"
                    style={{ fontSize: "10px", letterSpacing: "0.08em" }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {text}
                  </Link>
                );
              })}
            </div>

            {/* Mobile: ♡ logo left (home link) + MENU toggle right */}
            <div className="flex w-full items-center justify-between md:hidden">
              {/* Module 2: ♡ signature logo top-left — links home */}
              <Link
                href="/"
                onClick={closeMobile}
                className="flex min-h-[44px] min-w-[44px] items-center focus:outline-none"
                aria-label="Home"
              >
                <span
                  style={{
                    fontSize:   "18px",
                    color:      "#2D1B14",
                    opacity:    0.60,
                    lineHeight: 1,
                  }}
                  aria-hidden
                >
                  ♡
                </span>
              </Link>

              {/* Menu toggle — right side */}
              <button
                type="button"
                onClick={() => setMobileOpen((o) => !o)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className="flex min-h-[44px] min-w-[44px] items-center justify-end focus:outline-none"
                style={{ background: "none", border: "none" }}
              >
                {mobileOpen ? (
                  /* X close icon */
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                    style={{ opacity: 1, transition: "opacity 0.2s ease" }}
                  >
                    <line x1="2" y1="2" x2="14" y2="14" stroke="#2D1B14" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="14" y1="2" x2="2" y2="14" stroke="#2D1B14" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ) : (
                  /* Hamburger icon */
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    aria-hidden
                    style={{ opacity: 0.40, transition: "opacity 0.2s ease" }}
                  >
                    <line x1="0" y1="1"  x2="16" y2="1"  stroke="#2D1B14" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="0" y1="6"  x2="16" y2="6"  stroke="#2D1B14" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="0" y1="11" x2="16" y2="11" stroke="#2D1B14" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
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
        {/* X close button — top-right, always visible inside overlay */}
        <button
          type="button"
          onClick={closeMobile}
          aria-label="Close menu"
          className="absolute top-5 right-6 flex min-h-[44px] min-w-[44px] items-center justify-end focus:outline-none"
          style={{ background: "none", border: "none" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <line x1="2" y1="2" x2="14" y2="14" stroke="#2D1B14" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="14" y1="2" x2="2" y2="14" stroke="#2D1B14" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ href, text }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={closeMobile}
                className="block font-bold nav-link"
                style={{ fontSize: "10px", letterSpacing: "0.12em" }}
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
