"use client";

import Link from "next/link";
import { items } from "@/lib/items";

export function PopularItemsSection() {
  const popularItems = items.slice(0, 6);

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-[1200px] px-5 md:px-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-white">Popular Items</h2>
          <Link
            href="/items"
            className="text-primary hover:text-primary-dark text-sm font-medium transition-colors"
          >
            View All 200+ →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {popularItems.map((item) => (
            <Link
              key={item.id}
              href={`/items/${item.slug}`}
              className="group p-4 rounded-xl bg-surface-container border border-outline-variant hover:border-primary/40 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-lg flex-shrink-0">
                  📦
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-white text-sm group-hover:text-primary transition-colors truncate">
                    {item.name}
                  </h3>
                  <p className="text-on-surface-variant text-xs mt-0.5">{item.category}</p>
                  <p className="text-on-surface-variant text-xs mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
