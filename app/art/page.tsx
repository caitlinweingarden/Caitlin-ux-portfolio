"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ART_ITEMS, ART_CATEGORIES, type ArtCategory, type ArtItem } from "@/lib/art";

// Alternating aspect ratios create the asymmetric masonry rhythm
const ASPECT_RATIOS = [
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[3/5]",
  "aspect-[5/6]",
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-square",
];

function ArtCard({
  item,
  index,
}: {
  item: ArtItem;
  index: number;
}) {
  const aspectClass = ASPECT_RATIOS[index % ASPECT_RATIOS.length];

  return (
    <motion.div
      className="group mb-4 w-full break-inside-avoid overflow-hidden rounded-xl bg-pale-blush md:mb-5"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: (index % 8) * 0.04 }}
    >
      <div className={`relative ${aspectClass} w-full overflow-hidden`}>
        {item.imageSrc ? (
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 1023px) 33vw, 25vw"
          />
        ) : (
          <div
            className="absolute inset-0 bg-gradient-to-br from-accent/25 to-warm-sand"
            aria-hidden
          />
        )}
      </div>
      <div className="p-4 md:p-5">
        <p className="text-base font-semibold text-page-text" style={{ letterSpacing: "-0.01em" }}>
          {item.title}
        </p>
        {item.caption && (
          <p className="mt-0.5 text-sm text-page-text/60">{item.caption}</p>
        )}
      </div>
    </motion.div>
  );
}

export default function ArtPage() {
  const [filter, setFilter] = useState<ArtCategory>("all");

  const filteredItems = useMemo(() => {
    if (filter === "all") return ART_ITEMS;
    return ART_ITEMS.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-20 lg:pb-24">

      <motion.header
        className="mb-12 md:mb-16"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1
          className="text-4xl font-bold leading-tight text-page-text md:text-5xl"
          style={{ letterSpacing: "-0.03em" }}
        >
          Art
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-page-text/70">
          A selection of paintings, photography, and motion work.
        </p>
      </motion.header>

      {/* Filter pills */}
      <div className="mb-10 flex flex-wrap gap-3">
        {ART_CATEGORIES.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            onClick={() => setFilter(value)}
            className={`min-h-[40px] rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
              filter === value
                ? "bg-page-text text-page-bg"
                : "bg-accent/15 text-page-text hover:bg-accent/30"
            }`}
            aria-pressed={filter === value}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Asymmetric masonry — CSS columns */}
      <div className="columns-2 gap-4 md:columns-3 md:gap-5 lg:columns-4">
        {filteredItems.map((item, index) => (
          <ArtCard
            key={item.id}
            item={item}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
