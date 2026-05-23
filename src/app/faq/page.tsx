import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateWebPageSchema, generateBreadcrumbSchema, generateFAQPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subnautica 2 FAQ — Frequently Asked Questions | Subnautica 2 Guide",
  description: "Answers to the most common questions about Subnautica 2. Release date, multiplayer, platforms, and more.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Subnautica 2 FAQ — Frequently Asked Questions",
    description: "Answers to the most common questions about Subnautica 2. Release date, multiplayer, platforms, and more.",
    url: "/faq",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subnautica 2 FAQ — Frequently Asked Questions",
    description: "Answers to the most common questions about Subnautica 2.",
    images: ["/og-image.jpg"],
  },
};

export default function FAQPage() {
  const pageUrl = "https://subnautica2.live/faq";
  const pageTitle = "Subnautica 2 FAQ — Frequently Asked Questions | Subnautica 2 Guide";
  const pageDesc = "Answers to the most common questions about Subnautica 2. Release date, multiplayer, platforms, and more.";

  const faqSchema = generateFAQPageSchema([
    {
      name: "When is Subnautica 2 coming out?",
      acceptedAnswer: "Subnautica 2 does not have an official release date yet. Unknown Worlds Entertainment has confirmed the game is in development, but no specific date has been announced.",
    },
    {
      name: "Will Subnautica 2 have multiplayer?",
      acceptedAnswer: "Yes, Subnautica 2 will feature multiplayer co-op mode, allowing players to explore the underwater world together.",
    },
    {
      name: "What platforms will Subnautica 2 be on?",
      acceptedAnswer: "Subnautica 2 is expected to release on PC, PlayStation 5, and Xbox Series X/S.",
    },
  ]);

  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({
            title: pageTitle,
            description: pageDesc,
            url: pageUrl,
          }),
          generateBreadcrumbSchema([
            { name: "Home", url: "https://subnautica2.live" },
            { name: "FAQ", url: pageUrl },
          ]),
          faqSchema,
        ]}
      />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Subnautica 2 FAQ</h1>
        <p className="text-lg text-gray-600 mb-8">Frequently asked questions about Subnautica 2.</p>
      </main>
    </>
  );
}
