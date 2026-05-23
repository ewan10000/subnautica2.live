import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subnautica 2 Blueprints — Crafting Guide | Subnautica 2 Guide",
  description: "Complete Subnautica 2 blueprints and crafting guide. Find all crafting recipes and required materials.",
  alternates: {
    canonical: "/blueprints",
  },
  openGraph: {
    title: "Subnautica 2 Blueprints — Crafting Guide",
    description: "Complete Subnautica 2 blueprints and crafting guide. Find all crafting recipes and required materials.",
    url: "/blueprints",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subnautica 2 Blueprints — Crafting Guide",
    description: "Complete Subnautica 2 blueprints and crafting guide.",
    images: ["/og-image.jpg"],
  },
};

export default function BlueprintsPage() {
  const pageUrl = "https://subnautica2.live/blueprints";
  const pageTitle = "Subnautica 2 Blueprints — Crafting Guide | Subnautica 2 Guide";
  const pageDesc = "Complete Subnautica 2 blueprints and crafting guide. Find all crafting recipes and required materials.";

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
            { name: "Blueprints", url: pageUrl },
          ]),
        ]}
      />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Subnautica 2 Blueprints</h1>
        <p className="text-lg text-gray-600 mb-8">Blueprints database coming soon. Check back for updates.</p>
      </main>
    </>
  );
}
