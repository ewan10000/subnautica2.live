"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is this an official site?",
    a: "No. Subnautica 2 Guide is an independent fan site created by players. We are not affiliated with Unknown Worlds Entertainment or Krafton.",
  },
  {
    q: "How often is the content updated?",
    a: "We update the site weekly during Early Access to reflect new discoveries, item changes, and map updates from the latest patches.",
  },
  {
    q: "Can I use the map on mobile?",
    a: "Yes! The interactive map is fully responsive and supports touch gestures for panning and zooming on mobile devices.",
  },
  {
    q: "How do I report incorrect information?",
    a: "You can reach out via the contact link in the footer. We verify all reports against in-game data and community sources.",
  },
  {
    q: "Will you add more languages?",
    a: "A Chinese version is planned for P1. Other languages may follow based on community demand.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-[1200px] px-5 md:px-10">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>

        <div className="max-w-2xl space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl bg-surface-container border border-outline-variant overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-surface-container-high/50 transition-colors"
              >
                <span className="font-medium text-white text-sm">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-on-surface-variant flex-shrink-0 ml-4 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-4 pb-4 text-on-surface-variant text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
