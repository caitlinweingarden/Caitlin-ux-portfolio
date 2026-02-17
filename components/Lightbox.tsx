"use client";

import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

type LightboxProps = {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  title?: string;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
};

export default function Lightbox({
  isOpen,
  onClose,
  src,
  alt,
  title,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrevious && hasPrevious) onPrevious();
      if (e.key === "ArrowRight" && onNext && hasNext) onNext();
    },
    [isOpen, onClose, onPrevious, onNext, hasPrevious, hasNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || typeof document === "undefined") return null;

  const content = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-charcoal/90 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-whisper-white transition-colors hover:bg-whisper-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-blush"
        aria-label="Close lightbox"
      >
        <span className="text-2xl">×</span>
      </button>

      {onPrevious && hasPrevious && (
        <button
          type="button"
          onClick={onPrevious}
          className="absolute left-4 top-1/2 z-10 flex min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-lg text-whisper-white transition-colors hover:bg-whisper-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-blush"
          aria-label="Previous image"
        >
          ←
        </button>
      )}
      {onNext && hasNext && (
        <button
          type="button"
          onClick={onNext}
          className="absolute right-4 top-1/2 z-10 flex min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-lg text-whisper-white transition-colors hover:bg-whisper-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-blush"
          aria-label="Next image"
        >
          →
        </button>
      )}

      <div
        className="absolute inset-0 cursor-pointer"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative z-10 mx-4 max-h-[90vh] max-w-4xl">
        <div className="relative aspect-auto max-h-[85vh] w-full">
          {src.endsWith(".svg") ? (
            <img
              src={src}
              alt={alt}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={800}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
        {title && (
          <p className="mt-4 text-center font-sans text-sm text-whisper-white/90">
            {title}
          </p>
        )}
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
