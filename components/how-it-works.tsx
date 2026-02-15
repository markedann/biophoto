"use client";

import { Upload, Cpu, Download } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";

const steps = [
  {
    icon: Upload,
    number: "1",
    title: "Selfie hochladen",
    description:
      "Mache ein Selfie oder lade ein vorhandenes Foto hoch. Achte auf gute Beleuchtung und schaue direkt in die Kamera.",
  },
  {
    icon: Cpu,
    number: "2",
    title: "KI verarbeitet",
    description:
      "Unsere KI transformiert dein Foto in ein biometrisches Passfoto: professioneller Hintergrund, Beleuchtung und Kleidung.",
  },
  {
    icon: Download,
    number: "3",
    title: "Herunterladen",
    description:
      "Lade dein fertiges Passfoto in hoher Aufloesung herunter. Bereit fuer Reisepass, Ausweis oder Bewerbung.",
  },
];

export function HowItWorks() {
  const { ref: headerRef, isVisible: headerVisible } = useAnimateOnScroll();
  const { ref: gridRef, isVisible: gridVisible } = useAnimateOnScroll({ threshold: 0.1 });

  return (
    <section id="how-it-works" className="relative px-4 py-20 sm:px-6 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div
          ref={headerRef}
          className={`scroll-reveal mb-12 text-center sm:mb-16 ${headerVisible ? "visible" : ""}`}
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Anleitung
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {"So funktioniert's"}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground sm:text-lg">
            In nur drei einfachen Schritten zum perfekten Passfoto.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`scroll-reveal-stagger grid gap-6 md:grid-cols-3 ${gridVisible ? "visible" : ""}`}
        >
          {steps.map((item) => (
            <div
              key={item.number}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg"
            >
              {/* Large step number */}
              <span className="mb-6 block font-display text-5xl font-bold text-border transition-colors duration-300 group-hover:text-primary/30">
                {item.number}
              </span>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="h-5.5 w-5.5" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
