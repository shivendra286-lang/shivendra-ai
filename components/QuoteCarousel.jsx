"use client";

import { useEffect, useState } from "react";
import { quotes } from "@/lib/siteData";

export default function QuoteCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % quotes.length);
    }, 4600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="quote-carousel" aria-live="polite">
      <p>
        &ldquo;{quotes[active]}&rdquo;
      </p>
      <div className="quote-dots" aria-label="Quote carousel position">
        {quotes.map((quote, index) => (
          <button
            key={quote}
            className={index === active ? "active" : ""}
            onClick={() => setActive(index)}
            aria-label={`Show quote ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
