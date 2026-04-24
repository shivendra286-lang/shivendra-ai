"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function PresenceGallery({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeydown(event) {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % items.length);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (current - 1 + items.length) % items.length);
      }
    }

    window.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [activeIndex, items.length]);

  const activeItem = activeIndex === null ? null : items[activeIndex];

  return (
    <>
      <div className="presence-gallery">
        {items.map((item, index) => (
          <button
            key={item.image}
            type="button"
            className="presence-tile"
            onClick={() => setActiveIndex(index)}
          >
            <div className="presence-media">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 1100px) 31vw, (min-width: 700px) 48vw, 100vw"
                style={{ objectPosition: item.objectPosition }}
              />
            </div>
            <div className="presence-caption">
              <span>{item.title}</span>
              <p>{item.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {activeItem ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.alt}
          onClick={() => setActiveIndex(null)}
        >
          <div className="lightbox-shell" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setActiveIndex(null)}
              aria-label="Close image"
            >
              ×
            </button>
            <button
              type="button"
              className="lightbox-nav prev"
              onClick={() =>
                setActiveIndex((current) => (current - 1 + items.length) % items.length)
              }
              aria-label="Previous image"
            >
              ‹
            </button>
            <div className="lightbox-image-wrap">
              <Image
                src={activeItem.image}
                alt={activeItem.alt}
                fill
                sizes="100vw"
                className="lightbox-image"
              />
            </div>
            <button
              type="button"
              className="lightbox-nav next"
              onClick={() => setActiveIndex((current) => (current + 1) % items.length)}
              aria-label="Next image"
            >
              ›
            </button>
            <div className="lightbox-meta">
              <strong>{activeItem.title}</strong>
              <span>{activeItem.caption}</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
