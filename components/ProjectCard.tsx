"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
  tags: string[];
  imageSrc?: string;
  imageAlt: string;
  featured?: boolean;
};

export default function ProjectCard({
  title,
  description,
  href,
  tags,
  imageSrc,
  imageAlt,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group flex h-full flex-col"
    >
      <Link
        href={href}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-page-text/10 bg-pale-blush/80 p-6 shadow-soft transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-soft-lg dark:border-dark-text/10 dark:bg-dark-cards md:p-8 dark:hover:shadow-soft-lg"
      >
        {/* 16:9 image - same aspect on all cards */}
        <div className="relative aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl bg-dark-cards dark:bg-dark-cards">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pale-blush to-warm-sand"
              aria-hidden
            />
          )}
        </div>

        {/* Title */}
        <h3 className="mt-6 font-heading text-2xl font-semibold text-page-text dark:text-dark-text">
          {title}
        </h3>

        {/* Description - flex-1 so tags and link stay at bottom */}
        <p className="mt-2 flex-1 font-sans text-base leading-relaxed text-page-text/90 dark:text-dark-text/90">
          {description}
        </p>

        {/* Tags - same position on all cards */}
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-mushroom-taupe/20 px-3 py-1 font-sans text-sm font-medium tracking-wide text-page-text dark:bg-dark-text/20 dark:text-dark-text"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* View Project - always at bottom of card */}
        <span className="mt-6 block font-sans text-sm font-medium tracking-wide text-accent-sage transition-colors group-hover:text-mushroom-taupe dark:text-mist-sage dark:group-hover:text-pale-blush">
          View Project →
        </span>
      </Link>
    </motion.article>
  );
}
