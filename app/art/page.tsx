"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ART_ITEMS, ART_CATEGORIES, type ArtCategory, type ArtItem } from "@/lib/art";
import Lightbox from "@/components/Lightbox";

function ArtCard({
  item,
  onOpen,
}: {
  item: ArtItem;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      className="group w-full rounded-2xl overflow-hidden bg-pale-blush p-0 text-left shadow-soft transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-soft-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-mushroom-taupe focus-visible:ring-offset-2 dark:bg-dark-cards dark:hover:shadow-soft-lg"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        {item.imageSrc ? (
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 50vw, (max-width: 1023px) 33vw, 25vw"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-mushroom-taupe/30 to-mist-sage/30"
            aria-hidden
          >
            <span className="text-4xl opacity-50">🎨</span>
          </div>
        )}
      </div>
      <div className="p-6 md:p-6">
        <p className="font-heading text-2xl font-semibold text-page-text dark:text-dark-text">
          {item.title}
        </p>
        {item.caption && (
          <p className="mt-1 font-sans text-sm text-page-text/80 dark:text-dark-text/80">
            {item.caption}
          </p>
        )}
      </div>
    </motion.button>
  );
}

export default function ArtPage() {
  const [filter, setFilter] = useState<ArtCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (filter === "all") return ART_ITEMS;
    return ART_ITEMS.filter((item) => item.category === filter);
  }, [filter]);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = () =>
    setLightboxIndex((i) => (i === null ? null : Math.max(0, i - 1)));
  const goNext = () =>
    setLightboxIndex((i) =>
      i === null ? null : Math.min(filteredItems.length - 1, i + 1)
    );

  const currentItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 md:px-12 md:pt-32 md:pb-20 lg:px-16 lg:pb-24">
      <motion.header
        className="mb-12 md:mb-16"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="font-heading text-4xl font-bold leading-tight text-page-text dark:text-dark-text md:text-5xl">
          Art
        </h1>
        <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-page-text/90 dark:text-dark-text/90">
          A selection of paintings, photography, and motion work.
        </p>
      </motion.header>

      {/* Filter buttons - centered above gallery */}
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        {ART_CATEGORIES.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            onClick={() => setFilter(value)}
            className={`min-h-[44px] rounded-full px-4 py-2 font-sans text-sm font-medium tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-mushroom-taupe focus-visible:ring-offset-2 ${
              filter === value
                ? "bg-mushroom-taupe text-page-bg dark:bg-mist-sage dark:text-dark-bg"
                : "bg-pale-blush text-page-text hover:bg-mushroom-taupe/20 dark:bg-dark-cards dark:text-dark-text dark:hover:bg-dark-text/20"
            }`}
            aria-pressed={filter === value}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Consistent grid - same spacing as Work page */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <ArtCard key={item.id} item={item} onOpen={() => openLightbox(index)} />
          ))}
        </AnimatePresence>
      </div>

      {currentItem && (
        <Lightbox
          isOpen={lightboxIndex !== null}
          onClose={closeLightbox}
          src={currentItem.imageSrc || "/placeholder-art.svg"}
          alt={currentItem.imageAlt}
          title={currentItem.caption || currentItem.title}
          onPrevious={goPrev}
          onNext={goNext}
          hasPrevious={lightboxIndex !== null && lightboxIndex > 0}
          hasNext={
            lightboxIndex !== null && lightboxIndex < filteredItems.length - 1
          }
        />
      )}
    </div>
  );
}
