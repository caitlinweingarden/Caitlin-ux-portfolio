import Link from "next/link";

// TODO: Replace with actual resume PDF or link when available
export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-24">
      <h1 className="font-heading text-4xl font-bold leading-tight text-page-text dark:text-dark-text md:text-5xl">
        Resume
      </h1>
      <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-page-text/90 dark:text-dark-text/90">
        My resume and experience. You can download a PDF here once it&apos;s
        ready, or reach out for an up-to-date copy.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        {/* Placeholder: link to PDF when you have one */}
        {/* <a href="/resume.pdf" download className="...">Download PDF</a> */}
        <a
          href="mailto:hello@caitlinweingarden.com"
          className="inline-block rounded-lg bg-mushroom-taupe px-6 py-3 font-sans text-base font-medium text-page-bg transition-colors hover:bg-mushroom-taupe/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-mushroom-taupe focus-visible:ring-offset-2 dark:bg-mist-sage dark:text-dark-bg dark:hover:bg-mist-sage/90"
        >
          Request resume via email
        </a>
        <Link
          href="/about"
          className="inline-block rounded-lg border-2 border-mushroom-taupe px-6 py-3 font-sans text-base font-medium text-page-text transition-colors hover:bg-mushroom-taupe/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-mushroom-taupe focus-visible:ring-offset-2 dark:border-mist-sage dark:text-dark-text dark:hover:bg-dark-text/10"
        >
          Learn more about me
        </Link>
      </div>
    </div>
  );
}
