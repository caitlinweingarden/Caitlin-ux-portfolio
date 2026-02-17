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
        "page-bg": "#FAFAF8",
        "page-text": "#1A1A1A",
        "whisper-white": "#FAF9F6",
        "pale-blush": "#F5E6E8",
        "warm-sand": "#D9C5A8",
        "slate-charcoal": "#2A2A2A",
        "lavender-blush": "#E8D5D8",
        "mist-sage": "#B8C5B4",
        "silver-blue": "#6B7A8A",
        "mushroom-taupe": "#6B5E5A",
        "dark-bg": "#181818",
        "dark-cards": "#2A2624",
        "dark-text": "#F5F5F0",
        "name-light": "#1A1A1A",
        "name-dark": "#F5F5F0",
        "accent-lavender": "#9B8EA0",
        "accent-sage": "#8FA897",
        "accent-blue": "#8FA8B8",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        accent: ["var(--font-instrument)", "Georgia", "serif"],
        'cormorant': ['var(--font-cormorant)', 'serif'],
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
        'instrument': ['var(--font-instrument)', 'serif'],
      },
      maxWidth: {
        "7xl": "80rem",
        "3xl": "48rem",
        "2xl": "42rem",
        md: "28rem",
      },
      animation: {
        "float-slow": "float 45s ease-in-out infinite",
        "float-slower": "float 60s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        "fade-in": "fadeIn 0.3s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(8px, -8px)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(4px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      transitionDuration: {
        "400": "400ms",
      },
      boxShadow: {
        soft: "0 4px 20px -4px rgba(42, 42, 42, 0.08)",
        "soft-lg": "0 10px 40px -10px rgba(42, 42, 42, 0.12)",
      },
    },
  },
  plugins: [],
};