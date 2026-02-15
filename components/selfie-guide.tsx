"use client";

import {
  Sun,
  Eye,
  Shirt,
  Smartphone,
  Check,
  X,
} from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";

const tips = [
  {
    icon: Sun,
    title: "Gute Beleuchtung",
    description:
      "Nutze natuerliches Tageslicht oder gleichmaessige Beleuchtung. Vermeide starke Schatten im Gesicht.",
  },
  {
    icon: Eye,
    title: "Direkt in die Kamera",
    description:
      "Schaue frontal in die Kamera. Kopf gerade halten, nicht neigen oder drehen.",
  },
  {
    icon: Shirt,
    title: "Kleidung egal",
    description:
      "Die KI ersetzt dein Outfit durch professionelle Kleidung. Trage, was du moechtest.",
  },
  {
    icon: Smartphone,
    title: "Hochformat bevorzugt",
    description:
      "Ein Portrait-Foto funktioniert am besten. Halte dein Handy senkrecht.",
  },
];

const doList = [
  "Neutraler Gesichtsausdruck",
  "Augen vollstaendig geoeffnet",
  "Gesicht gleichmaessig beleuchtet",
  "Frontal in die Kamera schauen",
];

const dontList = [
  "Sonnenbrille oder getoenste Glaeser",
  "Stark verdecktes Gesicht (Muetze, Tuch)",
  "Starke Filter oder Beauty-Modi",
  "Unscharfe oder pixelige Fotos",
];

export function SelfieGuide() {
  const { ref: headerRef, isVisible: headerVisible } = useAnimateOnScroll();
  const { ref: tipsRef, isVisible: tipsVisible } = useAnimateOnScroll({
    threshold: 0.05,
  });
  const { ref: listsRef, isVisible: listsVisible } = useAnimateOnScroll({
    threshold: 0.1,
  });

  return (
    <section id="selfie-guide" className="relative bg-card/50 px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div
          ref={headerRef}
          className={`scroll-reveal mb-12 text-center sm:mb-14 ${headerVisible ? "visible" : ""}`}
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Vorbereitung
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            So machst du das perfekte Selfie
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground sm:text-lg">
            Befolge diese einfachen Tipps, damit unsere KI das bestmoegliche
            Passfoto fuer dich erstellen kann.
          </p>
        </div>

        {/* Tips grid */}
        <div
          ref={tipsRef}
          className={`scroll-reveal-stagger mb-10 grid gap-4 sm:mb-14 sm:grid-cols-2 lg:grid-cols-4 ${tipsVisible ? "visible" : ""}`}
        >
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <tip.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-1.5 text-sm font-semibold text-foreground">
                {tip.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {tip.description}
              </p>
            </div>
          ))}
        </div>

        {/* Do / Don't */}
        <div
          ref={listsRef}
          className={`scroll-reveal-stagger grid gap-4 sm:grid-cols-2 ${listsVisible ? "visible" : ""}`}
        >
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-7">
            <h3 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
              <Check className="h-4 w-4" />
              Richtig
            </h3>
            <ul className="flex flex-col gap-3">
              {doList.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-foreground/80"
                >
                  <div className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 sm:p-7">
            <h3 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-destructive">
              <X className="h-4 w-4" />
              Vermeiden
            </h3>
            <ul className="flex flex-col gap-3">
              {dontList.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-foreground/80"
                >
                  <div className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-destructive/15">
                    <X className="h-3 w-3 text-destructive" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
