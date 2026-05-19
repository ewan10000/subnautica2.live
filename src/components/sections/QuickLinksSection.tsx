"use client";

import Link from "next/link";

const quickLinks = [
  {
    icon: "🗺️",
    title: "Interactive Map",
    desc: "Find resources by biome with filters and coordinates",
    href: "/map",
    color: "text-primary",
  },
  {
    icon: "📦",
    title: "Items Database",
    desc: "200+ items with locations, crafting, and uses",
    href: "/items",
    color: "text-secondary",
  },
  {
    icon: "⚙️",
    title: "Blueprints",
    desc: "Crafting recipes & materials for every blueprint",
    href: "/blueprints",
    color: "text-tertiary",
  },
  {
    icon: "🐠",
    title: "Creatures",
    desc: "Danger levels, habitats, and loot drops",
    href: "/creatures",
    color: "text-primary",
  },
];

export function QuickLinksSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-[1200px] px-5 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group p-6 rounded-xl bg-surface-container border border-outline-variant hover:border-primary/40 transition-all"
            >
              <div className="text-3xl mb-3">{link.icon}</div>
              <h3 className={`font-semibold text-white mb-1 group-hover:${link.color} transition-colors`}>
                {link.title}
              </h3>
              <p className="text-on-surface-variant text-sm">{link.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
