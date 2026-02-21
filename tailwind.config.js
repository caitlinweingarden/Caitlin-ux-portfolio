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
        // ── Neapolitan Brand ──────────────────────────────────────
        "page-bg":   "#FFF5F5",  // Pink-white
        "page-text": "#3D1F0F",  // Chocolate
        "accent":    "#F4ACB7",  // Strawberry

        // ── Semantic aliases (used across components) ─────────────
        "accent-sage":    "#3D1F0F",  // Chocolate — primary buttons / CTAs
        "whisper-white":  "#FFFFFF",  // Pure white — button text
        "pale-blush":     "#FFF5F5",  // Same as page-bg — card fills
        "warm-sand":      "#FDE2E4",  // Soft strawberry — gradients
        "mushroom-taupe": "#F4ACB7",  // Strawberry alias (legacy)
        "mist-sage":      "#3D1F0F",  // Chocolate alias (legacy)
        "silver-blue":    "#8A7065",  // Warm muted grey — footer links
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
        soft:      "0 4px 24px -4px rgba(61, 31, 15, 0.13)",
        "soft-lg": "0 12px 44px -10px rgba(61, 31, 15, 0.20)",
      },
    },
  },

  plugins: [],
};
