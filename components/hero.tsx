"use client";

import { ArrowDown, Camera, Shield, Sparkles, Zap } from "lucide-react";

export function Hero({ onScrollToUpload }: { onScrollToUpload: () => void }) {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 md:pb-40 md:pt-48">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        {/* Badge */}
        <div className="animate-hero-enter mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur-sm sm:text-sm">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
            <Camera className="h-2.5 w-2.5" />
          </span>
          <span>Biometrisch &middot; Kostenlos &middot; DSGVO-konform</span>
        </div>

        {/* Main headline */}
        <h1 className="animate-hero-enter-delay-1 text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Professionelles Passfoto
          <br />
          <span className="text-primary">in Sekunden</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-hero-enter-delay-2 mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg">
          Lade ein Selfie hoch und unsere KI erstellt ein biometrisches
          Passfoto nach deutschen Standards -- fuer Reisepass, Ausweis und
          Bewerbungen.
        </p>

        {/* CTA */}
        <div className="animate-hero-enter-delay-3 mt-10 flex flex-col items-center gap-4 sm:mt-12 sm:flex-row sm:justify-center">
          <button
            onClick={onScrollToUpload}
            className="group relative flex w-full items-center justify-center gap-2.5 rounded-xl bg-foreground px-7 py-4 text-sm font-semibold text-background transition-all duration-300 hover:bg-foreground/90 active:scale-[0.98] sm:w-auto sm:text-base"
          >
            Jetzt Foto erstellen
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </button>
          <span className="text-xs text-muted-foreground">
            Keine Registrierung noetig
          </span>
        </div>

        {/* Stats */}
        <div className="animate-hero-enter-delay-4 mx-auto mt-16 flex max-w-md items-center justify-center gap-8 sm:mt-20 sm:gap-12">
          {[
            { icon: Zap, value: "< 30s", label: "Ergebnis" },
            { icon: Shield, value: "DSGVO", label: "Konform" },
            { icon: Sparkles, value: "100%", label: "Kostenlos" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-card text-primary">
                <stat.icon className="h-4.5 w-4.5" />
              </div>
              <span className="font-display text-lg font-bold text-foreground sm:text-xl">
                {stat.value}
              </span>
              <span className="mt-0.5 text-xs text-muted-foreground">
                {stat.label}
              </span>
              {i < 2 && (
                <div className="absolute" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
