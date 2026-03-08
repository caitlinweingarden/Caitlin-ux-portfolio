export default function Footer() {
  return (
    <footer
      className="border-t border-page-text/10 bg-pale-blush/30 py-20 text-center"
      role="contentinfo"
    >
      {/* Line 1 — italic serif signature */}
      <p className="font-serif italic text-[15px] leading-relaxed text-page-text/80">
        creating meaningful spaces, one pixel at a time.
      </p>

      {/* Line 2 — clean sans credit line */}
      <p className="mt-3 font-sans text-[13px] tracking-wide text-page-text/50">
        designed with{" "}
        <span
          className="inline-block cursor-default text-accent transition-transform duration-200 hover:scale-125"
          aria-hidden
        >
          ♡
        </span>
        {" "}by caitlin weingarden — 2026
      </p>
    </footer>
  );
}
