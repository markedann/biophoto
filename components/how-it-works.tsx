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
    image: "/images/step-upload.jpg",
  },
  {
    icon: Cpu,
    number: "2",
    title: "KI verarbeitet",
    description:
      "Unsere KI transformiert dein Foto in ein biometrisches Passfoto: professioneller Hintergrund, Beleuchtung und Kleidung.",
    image: "/images/step-process.jpg",
  },
  {
    icon: Download,
    number: "3",
    title: "Herunterladen",
    description:
      "Lade dein fertiges Passfoto in hoher Aufloesung herunter. Bereit fuer Reisepass, Ausweis oder Bewerbung.",
    image: "/images/step-download.jpg",
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
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-lg"
            >
              {/* Step image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Number overlay */}
                <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/80 font-display text-sm font-bold text-background backdrop-blur-sm">
                  {item.number}
                </div>
              </div>

              {/* Text content */}
              <div className="p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
