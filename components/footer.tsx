"use client";

import Link from "next/link";
import { Camera } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";

export function Footer() {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.2 });

  return (
    <footer
      ref={ref}
      className={`scroll-reveal border-t border-border bg-card px-4 py-8 sm:py-10 ${isVisible ? "visible" : ""}`}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Camera className="h-3.5 w-3.5" />
          </div>
          <span className="font-display text-sm font-bold text-foreground">
            Foto<span className="text-primary">Profi</span>
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm sm:gap-6">
          <Link
            href="/impressum"
            className="font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            Datenschutzerklaerung
          </Link>
          <a
            href="#faq"
            className="font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            FAQ
          </a>
        </nav>

        <div className="text-center text-xs text-muted-foreground">
          <p>
            Kostenloser Service zur Erstellung professioneller Passfotos mit KI.
          </p>
          <p className="mt-1">
            Keine Speicherung persoenlicher Daten. DSGVO-konform.
          </p>
        </div>
      </div>
    </footer>
  );
}
