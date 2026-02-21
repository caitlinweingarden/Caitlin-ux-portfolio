import Link from "next/link";

const FOOTER_NAV = [
  { href: "/work",   label: "Work"   },
  { href: "/art",    label: "Art"    },
  { href: "/about",  label: "About"  },
  { href: "/resume", label: "Resume" },
] as const;

const EMAIL    = "hello@caitlinweingarden.com";
const LINKEDIN = "https://linkedin.com/in/caitlinweingarden";
const TWITTER  = "https://twitter.com/caitlinux";

export default function Footer() {
  return (
    <footer
      className="border-t border-page-text/10 bg-pale-blush/50 px-6 py-8 md:px-12 md:py-12 lg:px-16"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 lg:flex-row lg:justify-between lg:gap-16">

        {/* Left */}
        <div className="space-y-4 lg:max-w-md lg:flex-shrink-0">
          <p className="text-2xl font-semibold leading-tight text-page-text md:text-3xl">
            So glad you stopped by ✨
          </p>
          <p className="text-base font-medium text-page-text/80 md:text-lg">
            © Caitlin Weingarden, 2025
          </p>
          <p className="text-base text-page-text/70 md:text-lg">
            Made with ♡ and a sprinkle of stardust
          </p>
        </div>

        {/* Right — Contact & Navigation */}
        <div className="flex flex-col gap-10 md:flex-row md:gap-12 lg:gap-16 lg:text-right">
          <div className="min-w-[200px]">
            <h3 className="mb-4 text-base font-bold uppercase tracking-wider text-page-text md:text-lg">
              Contact
            </h3>
            <ul className="space-y-3 text-base md:text-lg">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-silver-blue transition-colors duration-300 hover:text-mushroom-taupe focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-silver-blue transition-colors duration-300 hover:text-mushroom-taupe focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={TWITTER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-silver-blue transition-colors duration-300 hover:text-mushroom-taupe focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  Twitter / X
                </a>
              </li>
            </ul>
          </div>

          <div className="min-w-[160px]">
            <h3 className="mb-4 text-base font-bold uppercase tracking-wider text-page-text md:text-lg">
              Navigation
            </h3>
            <ul className="space-y-3 text-base md:text-lg">
              {FOOTER_NAV.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-silver-blue transition-colors duration-300 hover:text-mushroom-taupe focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}
