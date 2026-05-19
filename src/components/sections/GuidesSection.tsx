"use client";

import Link from "next/link";

const guides = [
  {
    id: "beginner",
    title: "Beginner's Guide",
    desc: "Everything you need to know to survive your first hours in Subnautica 2.",
    readTime: "8 min read",
  },
  {
    id: "base-building",
    title: "Base Building 101",
    desc: "How to build efficient bases, manage power, and expand underwater.",
    readTime: "10 min read",
  },
  {
    id: "deep-sea",
    title: "Deep Sea Exploration",
    desc: "Tips for exploring the deepest biomes and finding rare resources.",
    readTime: "12 min read",
  },
];

export function GuidesSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-[1200px] px-5 md:px-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-white">Latest Guides</h2>
          <Link
            href="/guides"
            className="text-primary hover:text-primary-dark text-sm font-medium transition-colors"
          >
            Read All Guides →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {guides.map((guide) => (
            <Link
              key={guide.id}
              href={`/guides/${guide.id}`}
              className="group p-5 rounded-xl bg-surface-container border border-outline-variant hover:border-primary/40 transition-all"
            >
              <h3 className="font-semibold text-white group-hover:text-primary transition-colors mb-2">
                {guide.title}
              </h3>
              <p className="text-on-surface-variant text-sm mb-3">{guide.desc}</p>
              <span className="text-xs text-on-surface-variant font-mono">{guide.readTime}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
