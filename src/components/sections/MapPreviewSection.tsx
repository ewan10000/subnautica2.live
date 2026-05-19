"use client";

import Link from "next/link";

export function MapPreviewSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-[1200px] px-5 md:px-10">
        <div className="rounded-2xl overflow-hidden border border-outline-variant bg-surface-container">
          {/* Map placeholder */}
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-surface-container-high to-surface flex items-center justify-center">
            <div className="absolute inset-0 opacity-20">
              {/* Grid pattern */}
              <div className="w-full h-full" style={{
                backgroundImage: `linear-gradient(rgba(0,212,170,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.1) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} />
            </div>

            {/* Map markers */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(0,212,170,0.5)]" />
            <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-tertiary shadow-[0_0_10px_rgba(255,107,53,0.5)]" />
            <div className="absolute bottom-1/3 left-1/2 w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_rgba(92,179,204,0.5)]" />
            <div className="absolute top-1/2 right-1/4 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(0,212,170,0.5)]" />

            <div className="text-center relative z-10">
              <div className="text-5xl mb-3">🗺️</div>
              <p className="text-on-surface-variant text-sm mb-4">Interactive Map Coming Soon</p>
              <Link
                href="/map"
                className="px-6 py-2.5 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm"
              >
                Open Full Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
