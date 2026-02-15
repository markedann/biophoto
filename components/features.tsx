"use client";

import {
  Camera,
  Download,
  Image as ImageIcon,
  Lock,
  Sparkles,
  Zap,
} from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";

const features = [
  {
    icon: Sparkles,
    title: "KI-Optimierung",
    description:
      "Professionelle Beleuchtung, Hintergrund und Koerperposition werden automatisch angepasst.",
  },
  {
    icon: Camera,
    title: "Biometrisch korrekt",
    description:
      "Erfuellt alle deutschen Anforderungen fuer Reisepass, Personalausweis und Fuehrerschein.",
  },
  {
    icon: Zap,
    title: "Blitzschnell",
    description:
      "Ergebnis in weniger als 30 Sekunden. Kein Termin beim Fotografen noetig.",
  },
  {
    icon: Download,
    title: "Sofort herunterladen",
    description:
      "Laden Sie Ihr fertiges Foto in hoher Aufloesung direkt auf Ihr Geraet herunter.",
  },
  {
    icon: Lock,
    title: "Datenschutz garantiert",
    description:
      "Ihre Fotos werden nicht gespeichert und sofort nach der Verarbeitung geloescht.",
  },
  {
    icon: ImageIcon,
    title: "Vielseitig einsetzbar",
    description:
      "Perfekt fuer Reisepass, Personalausweis, Fuehrerschein, Visa und Bewerbungsfotos.",
  },
];

export function Features() {
  const { ref: headerRef, isVisible: headerVisible } = useAnimateOnScroll();
  const { ref: gridRef, isVisible: gridVisible } = useAnimateOnScroll({ threshold: 0.05 });

  return (
    <section id="features" className="relative bg-card/50 px-4 py-20 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div
          ref={headerRef}
          className={`scroll-reveal mb-12 sm:mb-16 ${headerVisible ? "visible" : ""}`}
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Vorteile
          </span>
          <h2 className="max-w-lg font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Warum AmtlyPhoto?
          </h2>
          <p className="mt-4 max-w-lg text-base text-muted-foreground sm:text-lg">
            Alles was du fuer das perfekte Dokumentenfoto brauchst -- kostenlos
            und sofort.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`scroll-reveal-stagger grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3 ${gridVisible ? "visible" : ""}`}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-card p-7 transition-colors duration-300 hover:bg-secondary/60 sm:p-8"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-display text-base font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
