"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { CASE_STUDIES } from "@/lib/projects";

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-24">
      <motion.header
        className="mb-12 md:mb-16"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="font-heading text-4xl font-bold leading-tight text-page-text dark:text-dark-text md:text-5xl">
          Work
        </h1>
        <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-page-text/90 dark:text-dark-text/90">
          Selected case studies in product design, accessibility, and
          translation.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 grid-rows-[auto] gap-6 md:grid-cols-2 md:gap-8">
        {CASE_STUDIES.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            description={project.description}
            href={`/work/${project.slug}`}
            tags={project.tags}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
          />
        ))}
      </div>
    </div>
  );
}
