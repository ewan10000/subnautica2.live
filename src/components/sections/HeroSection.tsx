"use client";

import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-container via-background to-background opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_50%)] opacity-10" />

      <div className="container mx-auto max-w-[1200px] px-5 md:px-10 py-16 md:py-24 lg:py-32 relative">
        <div className="text-center max-w-3xl mx-auto">
          {/* Update badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Updated for Early Access
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Subnautica 2
            <br />
            <span className="text-primary">Complete Guide</span>
            <br />
            & Interactive Map
          </h1>

          <p className="text-lg md:text-xl text-on-surface-variant mb-8 max-w-2xl mx-auto">
            Every item, creature, blueprint, and resource location — all in one place.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/map"
              className="px-8 py-3.5 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors text-center w-full sm:w-auto"
            >
              Explore Interactive Map
            </Link>
            <Link
              href="/items"
              className="px-8 py-3.5 border border-outline text-on-surface font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors text-center w-full sm:w-auto"
            >
              Browse All Items
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-on-surface-variant">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              200+ Items
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              150+ Locations
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
              Daily Updates
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
