"use client";

import { ArrowDown, Camera, Shield, Sparkles, Zap } from "lucide-react";

export function Hero({ onScrollToUpload }: { onScrollToUpload: () => void }) {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 md:pb-32 md:pt-44">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Text content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="animate-hero-enter mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur-sm sm:text-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Camera className="h-2.5 w-2.5" />
              </span>
              <span>Biometrisch &middot; Kostenlos &middot; DSGVO-konform</span>
            </div>

            {/* Main headline */}
            <h1 className="animate-hero-enter-delay-1 text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Professionelles Passfoto
              <br />
              <span className="text-primary">in Sekunden</span>
            </h1>

            {/* Subtitle */}
            <p className="animate-hero-enter-delay-2 mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg lg:mx-0">
              Lade ein Selfie hoch und unsere KI erstellt ein biometrisches
              Passfoto nach deutschen Standards -- fuer Reisepass, Ausweis und
              Bewerbungen.
            </p>

            {/* CTA */}
            <div className="animate-hero-enter-delay-3 mt-10 flex flex-col items-center gap-4 sm:mt-12 sm:flex-row lg:justify-start">
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
            <div className="animate-hero-enter-delay-4 mt-12 flex items-center justify-center gap-8 sm:mt-14 sm:gap-10 lg:justify-start">
              {[
                { icon: Zap, value: "< 30s", label: "Ergebnis" },
                { icon: Shield, value: "DSGVO", label: "Konform" },
                { icon: Sparkles, value: "100%", label: "Kostenlos" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center lg:items-start">
                  <div className="mb-1.5 flex items-center gap-2">
                    <stat.icon className="h-3.5 w-3.5 text-primary" />
                    <span className="font-display text-lg font-bold text-foreground">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Hero image */}
          <div className="animate-hero-enter-delay-2 relative flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Decorative glow behind image */}
              <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-border shadow-2xl">
                <img
                  src="/images/hero-preview.jpg"
                  alt="AI-Passfoto Transformation: Von Selfie zum professionellen Passfoto"
                  className="h-auto w-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-2 rounded-xl border border-border bg-card px-4 py-3 shadow-lg sm:-right-6">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">KI-optimiert</p>
                    <p className="text-[10px] text-muted-foreground">Biometrisch korrekt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
