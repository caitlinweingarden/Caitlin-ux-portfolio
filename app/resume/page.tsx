import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="px-6 pt-24 pb-16 md:px-12 md:pt-32 md:pb-20 lg:px-16 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl font-bold leading-tight text-page-text dark:text-dark-text md:text-5xl lg:text-6xl">
            Resume
          </h1>
          <p className="mt-6 font-sans text-base leading-relaxed text-page-text/90 dark:text-dark-text/90 md:text-lg">
            My resume and experience. You can download a PDF here once it&apos;s
            ready, or reach out for an up-to-date copy.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:hello@caitlinweingarden.com"
              className="inline-block rounded-lg bg-mushroom-taupe px-6 py-3 font-sans text-base font-medium text-page-bg transition-colors duration-300 hover:bg-mushroom-taupe/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-mushroom-taupe focus-visible:ring-offset-2 dark:bg-mist-sage dark:text-dark-bg dark:hover:bg-mist-sage/90"
            >
              Request resume via email
            </a>
            <Link
              href="/about"
              className="inline-block rounded-lg border-2 border-mushroom-taupe px-6 py-3 font-sans text-base font-medium text-page-text transition-colors duration-300 hover:bg-mushroom-taupe/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-mushroom-taupe focus-visible:ring-offset-2 dark:border-mist-sage dark:text-dark-text dark:hover:bg-dark-text/10"
            >
              Learn more about me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
