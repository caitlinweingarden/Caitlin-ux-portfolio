/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        // ── Brand Palette ─────────────────────────────────────────
        "page-bg":   "#FFFDF9",  // Paper Cream
        "page-text": "#2D1B14",  // Deep Brown
        "accent":    "#FFB6C1",  // Brand Pink

        // ── Semantic aliases (used across components) ─────────────
        "accent-sage":    "#2D1B14",  // Deep Brown — primary buttons / CTAs
        "whisper-white":  "#FFFFFF",  // Pure white — button text
        "pale-blush":     "#FFF5F0",  // Warm cream — card fills
        "warm-sand":      "#FFE0E6",  // Soft pink — gradients
        "mushroom-taupe": "#FFB6C1",  // Brand Pink alias
        "mist-sage":      "#2D1B14",  // Deep Brown alias
        "silver-blue":    "#7A6058",  // Warm muted brown — footer links
      },

      fontFamily: {
        // Unified editorial stack — Helvetica Neue everywhere
        heading:    ["'Helvetica Neue'", "Helvetica", "Arial", "sans-serif"],
        sans:       ["'Helvetica Neue'", "Helvetica", "Arial", "sans-serif"],
        accent:     ["'Helvetica Neue'", "Helvetica", "Arial", "sans-serif"],
        cormorant:  ["'Helvetica Neue'", "sans-serif"],
        "dm-sans":  ["'Helvetica Neue'", "sans-serif"],
        instrument: ["'Helvetica Neue'", "sans-serif"],
      },

      maxWidth: {
        "7xl": "80rem",
        "3xl": "48rem",
        "2xl": "42rem",
        md:    "28rem",
      },

      animation: {
        "float-slow":    "float 45s ease-in-out infinite",
        "float-slower":  "float 60s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        "fade-in":       "fadeIn 0.3s ease-out forwards",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%":      { transform: "translate(8px, -8px)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(4px)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },

      transitionDuration: {
        "400": "400ms",
      },

      boxShadow: {
        soft:      "0 4px 24px -4px rgba(45, 27, 20, 0.13)",
        "soft-lg": "0 12px 44px -10px rgba(45, 27, 20, 0.20)",
      },
    },
  },

  plugins: [],
};
