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
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-page-text/10 bg-pale-blush/80 p-6 shadow-soft transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-soft-lg md:p-8"
      >
        {/* 16:9 image */}
        <div className="relative aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl bg-accent/10">
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
              className="absolute inset-0 bg-gradient-to-br from-accent/20 to-warm-sand"
              aria-hidden
            />
          )}
        </div>

        <h3 className="mt-6 text-2xl font-semibold text-page-text">
          {title}
        </h3>

        <p className="mt-2 flex-1 text-base leading-relaxed text-page-text/80">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent/15 px-3 py-1 text-sm font-medium tracking-wide text-page-text"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <span className="mt-6 block text-sm font-medium tracking-wide text-accent-sage transition-colors group-hover:text-accent">
          View Project →
        </span>
      </Link>
    </motion.article>
  );
}
