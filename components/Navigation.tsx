"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  {
    href: "/",
    label: "Home",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    href: "/work",
    label: "Work",
    isPrimary: true,
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    href: "/art",
    label: "Art",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    href: "/about",
    label: "About",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    href: "/resume",
    label: "Resume",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    href: "/contact",
    label: "Contact",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
] as const;

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <nav
        className="fixed left-0 right-0 top-0 z-[60] border-b border-mushroom-taupe/20 bg-page-bg/95 backdrop-blur-md dark:border-mist-sage/20 dark:bg-dark-bg/95"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-12 lg:max-w-[1400px] lg:px-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-sans text-lg font-bold text-page-text no-underline transition-colors hover:text-mushroom-taupe dark:text-dark-text dark:hover:text-mist-sage"
            onClick={closeMobile}
          >
            Caitlin Weingarden
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-2 md:flex">
            {NAV_LINKS.map(({ href, label, icon, isPrimary }) => {
              const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 font-sans text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-mushroom-taupe focus-visible:ring-offset-2 ${
                    isPrimary
                      ? isActive
                        ? "bg-mushroom-taupe text-whisper-white shadow-md dark:bg-mist-sage dark:text-slate-charcoal"
                        : "bg-mushroom-taupe/90 text-whisper-white shadow-md hover:bg-mushroom-taupe hover:shadow-lg dark:bg-mist-sage/90 dark:text-slate-charcoal dark:hover:bg-mist-sage"
                      : isActive
                      ? "bg-page-text/10 text-page-text dark:bg-dark-text/10 dark:text-dark-text"
                      : "border border-page-text/20 text-page-text hover:border-mushroom-taupe/50 hover:bg-mushroom-taupe/5 dark:border-dark-text/20 dark:text-dark-text dark:hover:border-mist-sage/50 dark:hover:bg-mist-sage/5"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {icon}
                  <span>{label}</span>
                </Link>
              );
            })}
            {mounted && <ThemeToggle />}
          </div>

          {/* Mobile: hamburger + theme */}
          <div className="flex items-center gap-2 md:hidden">
            {mounted && <ThemeToggle />}
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-page-text transition-colors hover:bg-page-text/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-mushroom-taupe dark:text-dark-text dark:hover:bg-dark-text/10"
            >
              <span className="text-2xl" aria-hidden>
                {mobileOpen ? "✕" : "☰"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu overlay - full screen backdrop */}
        <div
          id="mobile-menu"
          className={`fixed inset-0 z-50 flex flex-col bg-page-bg backdrop-blur-sm transition-all duration-300 ease-in-out dark:bg-dark-bg md:hidden ${
            mobileOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
          aria-hidden={!mobileOpen}
        >
          {/* Header spacer to account for fixed nav bar */}
          <div className="h-[57px] shrink-0" />

          {/* Scrollable menu content */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map(({ href, label, icon, isPrimary }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={closeMobile}
                    className={`inline-flex min-h-[44px] items-center gap-3 rounded-full px-5 py-3 font-sans text-base font-medium transition-all duration-200 ${
                      isPrimary
                        ? "bg-mushroom-taupe text-whisper-white shadow-md dark:bg-mist-sage dark:text-slate-charcoal"
                        : isActive
                        ? "bg-page-text/10 text-page-text dark:bg-dark-text/10 dark:text-dark-text"
                        : "border border-page-text/20 text-page-text hover:border-mushroom-taupe/50 hover:bg-mushroom-taupe/5 dark:border-dark-text/20 dark:text-dark-text dark:hover:border-mist-sage/50"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {icon}
                    <span>{label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
