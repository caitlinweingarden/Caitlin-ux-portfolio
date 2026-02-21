import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="px-6 pt-24 pb-16 md:px-12 md:pt-32 md:pb-20 lg:px-16 lg:pb-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-2xl">
          <h1
            className="text-4xl font-bold leading-tight text-page-text md:text-5xl lg:text-6xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            Resume
          </h1>
          <p className="mt-6 text-base leading-relaxed text-page-text/70 md:text-lg">
            My resume and experience. You can download a PDF here once it&apos;s
            ready, or reach out for an up-to-date copy.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:hello@caitlinweingarden.com"
              className="inline-block rounded-sm bg-page-text px-6 py-3 text-base font-medium text-page-bg transition-colors duration-300 hover:bg-accent hover:text-page-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Request resume via email
            </a>
            <Link
              href="/about"
              className="inline-block rounded-sm border-2 border-accent px-6 py-3 text-base font-medium text-page-text transition-colors duration-300 hover:bg-accent/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Learn more about me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
