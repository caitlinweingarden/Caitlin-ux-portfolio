"use client";

import Image from "next/image";
import { useTheme } from "@/app/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg transition-colors hover:bg-page-text/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-mushroom-taupe focus-visible:ring-offset-2 dark:hover:bg-dark-text/10 dark:focus-visible:ring-mist-sage"
    >
      {theme === "light" ? (
        <span aria-hidden>🌙</span>
      ) : (
        <span aria-hidden>☀️</span>
      )}
    </button>
  );
}
