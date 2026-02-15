"use client";

import Link from "next/link";
import { Camera, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header({ onScrollToUpload }: { onScrollToUpload: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-70">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background">
            <Camera className="h-4 w-4" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            Amtly<span className="text-primary">Photo</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="/#features" className="font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground">
            Vorteile
          </a>
          <a href="/#how-it-works" className="font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground">
            {"So funktioniert's"}
          </a>
          <a href="/#faq" className="font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground">
            FAQ
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={onScrollToUpload}
            className="hidden rounded-lg bg-foreground px-5 py-2 text-sm font-semibold text-background transition-all duration-200 hover:bg-foreground/85 active:scale-[0.97] sm:block"
          >
            Foto erstellen
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground md:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-border/40 bg-background/95 backdrop-blur-xl transition-all duration-300 ease-out md:hidden ${
          mobileOpen ? "max-h-72 opacity-100" : "max-h-0 border-t-transparent opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 pb-5 pt-3 sm:px-6">
          {[
            { href: "/#features", label: "Vorteile" },
            { href: "/#how-it-works", label: "So funktioniert's" },
            { href: "/#faq", label: "FAQ" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              onScrollToUpload();
            }}
            className="mt-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-all duration-200 hover:bg-foreground/85"
          >
            Foto erstellen
          </button>
        </nav>
      </div>
    </header>
  );
}
