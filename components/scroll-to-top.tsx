"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Nach oben scrollen"
      className={`fixed bottom-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-all duration-500 hover:bg-secondary active:scale-95 sm:bottom-7 sm:right-7 sm:h-11 sm:w-11 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
