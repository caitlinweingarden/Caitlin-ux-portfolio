import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getCaseStudyBySlug, getCaseStudySlugs } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-24">
      {/* Hero image */}
      <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-2xl bg-pale-blush dark:bg-dark-cards md:mb-16">
        {project.imageSrc ? (
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1280px"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-mushroom-taupe/50 to-mist-sage/50"
            aria-hidden
          />
        )}
      </div>

      <header className="mb-12 md:mb-16">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-mushroom-taupe/20 px-3 py-1 font-sans text-sm font-medium tracking-wide text-page-text dark:bg-dark-text/20 dark:text-dark-text"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-heading text-4xl font-bold leading-tight text-page-text dark:text-dark-text md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-page-text/90 dark:text-dark-text/90">
          {project.description}
        </p>
      </header>

      {/* Overview grid */}
      <section
        className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2"
        aria-labelledby="overview-heading"
      >
        <h2 id="overview-heading" className="sr-only">
          Project overview
        </h2>
        <div>
          <h3 className="font-sans text-sm font-medium uppercase tracking-wide text-page-text/70 dark:text-dark-text/70">
            Role
          </h3>
          <p className="mt-2 font-sans text-base text-page-text dark:text-dark-text">
            {project.overview.role}
          </p>
        </div>
        <div>
          <h3 className="font-sans text-sm font-medium uppercase tracking-wide text-page-text/70 dark:text-dark-text/70">
            Timeline
          </h3>
          <p className="mt-2 font-sans text-base text-page-text dark:text-dark-text">
            {project.overview.timeline}
          </p>
        </div>
        {project.overview.team && (
          <div>
            <h3 className="font-sans text-sm font-medium uppercase tracking-wide text-page-text/70 dark:text-dark-text/70">
              Team
            </h3>
            <p className="mt-2 font-sans text-base text-page-text dark:text-dark-text">
              {project.overview.team}
            </p>
          </div>
        )}
        <div>
          <h3 className="font-sans text-sm font-medium uppercase tracking-wide text-page-text/70 dark:text-dark-text/70">
            Tools
          </h3>
          <p className="mt-2 font-sans text-base text-page-text dark:text-dark-text">
            {project.overview.tools.join(", ")}
          </p>
        </div>
      </section>

      {/* Content sections */}
      <div className="space-y-16">
        {project.content.map((section, i) => (
          <section key={i}>
            <h2 className="mb-4 font-heading text-4xl font-semibold italic text-page-text dark:text-dark-text md:text-5xl">
              {section.heading}
            </h2>
            <div className="max-w-3xl font-sans text-base leading-relaxed text-page-text/90 dark:text-dark-text/90">
              {section.body}
            </div>
          </section>
        ))}
      </div>

      {/* Next/Previous */}
      <nav
        className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-page-text/10 pt-8 dark:border-dark-text/10"
        aria-label="Case study navigation"
      >
        <Link
          href="/work"
          className="font-sans text-sm font-medium tracking-wide text-mushroom-taupe transition-colors hover:text-mist-sage focus:outline-none focus-visible:ring-2 focus-visible:ring-mushroom-taupe focus-visible:ring-offset-2"
        >
          ← Back to work
        </Link>
      </nav>
    </article>
  );
}
