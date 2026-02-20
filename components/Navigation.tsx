"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/art", label: "Art" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
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

  const handleLogoClick = () => {
    closeMobile();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <nav
        className="fixed left-0 right-0 top-0 z-[60] border-b border-mushroom-taupe/20 bg-page-bg/95 backdrop-blur-md dark:border-mist-sage/20 dark:bg-dark-bg/95"
        aria-label="Main navigation"
      >
        <div className="px-6 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-[1200px] items-center py-3">
          {/* Logo - left */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-mushroom-taupe focus-visible:ring-offset-2"
            aria-label="Caitlin Weingarden – Home"
          >
            <Image
              src="https://raw.githubusercontent.com/caitlinweingarden/Caitlin-ux-portfolio/main/portfolio_logo.png?v=2"
              alt="Caitlin Weingarden"
              height={44}
              width={185}
              style={{ height: "44px", width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop nav - right */}
          <div className="hidden flex-1 items-center justify-end gap-8 md:flex">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive =
                pathname === href ||
                ((href as string) !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`font-sans text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-mushroom-taupe focus-visible:ring-offset-2 ${
                    isActive
                      ? "text-page-text underline decoration-mushroom-taupe decoration-2 underline-offset-4 dark:text-dark-text dark:decoration-mist-sage"
                      : "text-page-text/70 hover:text-page-text dark:text-dark-text/70 dark:hover:text-dark-text"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
            {mounted && <ThemeToggle />}
          </div>

          {/* Mobile: hamburger + theme */}
          <div className="flex flex-1 items-center justify-end gap-2 md:hidden">
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
        </div>

        {/* Mobile menu overlay */}
        <div
          id="mobile-menu"
          className={`fixed inset-0 z-50 flex flex-col bg-page-bg backdrop-blur-sm transition-all duration-300 ease-in-out dark:bg-dark-bg md:hidden ${
            mobileOpen
              ? "visible opacity-100"
              : "pointer-events-none invisible opacity-0"
          }`}
          aria-hidden={!mobileOpen}
        >
          <div className="h-[57px] shrink-0" />
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={closeMobile}
                    className={`inline-flex min-h-[44px] items-center px-2 py-3 font-sans text-base font-medium transition-all duration-200 ${
                      isActive
                        ? "text-page-text underline decoration-mushroom-taupe decoration-2 underline-offset-4 dark:text-dark-text dark:decoration-mist-sage"
                        : "text-page-text/70 hover:text-page-text dark:text-dark-text/70 dark:hover:text-dark-text"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
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
