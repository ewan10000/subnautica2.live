import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subnautica 2 Creatures — Complete Database | Subnautica 2 Guide",
  description: "Complete database of all creatures in Subnautica 2. Find locations, behaviors, and drops.",
  alternates: {
    canonical: "/creatures",
  },
  openGraph: {
    title: "Subnautica 2 Creatures — Complete Database",
    description: "Complete database of all creatures in Subnautica 2. Find locations, behaviors, and drops.",
    url: "/creatures",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subnautica 2 Creatures — Complete Database",
    description: "Complete database of all creatures in Subnautica 2.",
    images: ["/og-image.jpg"],
  },
};

export default function CreaturesPage() {
  const pageUrl = "https://subnautica2.live/creatures";
  const pageTitle = "Subnautica 2 Creatures — Complete Database | Subnautica 2 Guide";
  const pageDesc = "Complete database of all creatures in Subnautica 2. Find locations, behaviors, and drops.";

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
            { name: "Creatures", url: pageUrl },
          ]),
        ]}
      />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Subnautica 2 Creatures</h1>
        <p className="text-lg text-gray-600 mb-8">Creature database coming soon. Check back for updates.</p>
      </main>
    </>
  );
}
