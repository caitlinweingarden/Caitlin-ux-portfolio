/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ── Light mode base ───────────────────────────────────────────
        "page-bg":        "#FAFAFA", // clean white
        "page-text":      "#1A0F0A", // near-black espresso
        "whisper-white":  "#FAFAFA", // same as page-bg
        "pale-blush":     "#F5EDE8", // barely-there warm white — cards/secondary bg
        "warm-sand":      "#EDE0D8", // slightly warmer card variant
        "slate-charcoal": "#1A0F0A", // same as page-text
        "lavender-blush": "#F5EDE8", // same as pale-blush
        "mist-sage":      "#C4B5AF", // warm grey-taupe — neutral mid-tone
        "silver-blue":    "#8A7065", // warm brown-grey — footer link text
        "mushroom-taupe": "#C9748F", // dusty rose — ACCENT ONLY (sparingly)

        // ── Dark mode ─────────────────────────────────────────────────
        "dark-bg":    "#181818",
        "dark-cards": "#2A2624",
        "dark-text":  "#F5F0EC",

        // ── Name / hero ───────────────────────────────────────────────
        "name-light": "#1A0F0A",
        "name-dark":  "#F5F0EC",

        // ── Accent scale ──────────────────────────────────────────────
        "accent-lavender": "#E8D8D0", // barely warm — gradient mid-stop
        "accent-sage":     "#3D1F0F", // rich dark brown — buttons / CTAs
        "accent-blue":     "#C9748F", // same as mushroom-taupe
      },
      fontFamily: {
        heading:    ["var(--font-playfair)", "Georgia", "serif"],
        sans:       ["var(--font-inter)", "system-ui", "sans-serif"],
        accent:     ["var(--font-playfair)", "Georgia", "serif"],
        cormorant:  ["var(--font-playfair)", "serif"],
        "dm-sans":  ["var(--font-inter)", "sans-serif"],
        instrument: ["var(--font-playfair)", "serif"],
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
        soft:      "0 4px 20px -4px rgba(26, 15, 10, 0.07)",
        "soft-lg": "0 10px 40px -10px rgba(26, 15, 10, 0.11)",
      },
    },
  },
  plugins: [],
};
