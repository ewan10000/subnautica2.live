import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateWebPageSchema, generateBreadcrumbSchema, generateHowToSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subnautica 2 Crafting — Recipes & Materials | Subnautica 2 Guide",
  description: "Complete Subnautica 2 crafting guide with all recipes and required materials.",
  alternates: {
    canonical: "/crafting",
  },
  openGraph: {
    title: "Subnautica 2 Crafting — Recipes & Materials",
    description: "Complete Subnautica 2 crafting guide with all recipes and required materials.",
    url: "/crafting",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subnautica 2 Crafting — Recipes & Materials",
    description: "Complete Subnautica 2 crafting guide.",
    images: ["/og-image.jpg"],
  },
};

export default function CraftingPage() {
  const pageUrl = "https://subnautica2.live/crafting";
  const pageTitle = "Subnautica 2 Crafting — Recipes & Materials | Subnautica 2 Guide";
  const pageDesc = "Complete Subnautica 2 crafting guide with all recipes and required materials.";

  const howToSchema = generateHowToSchema({
    name: "How to Craft in Subnautica 2",
    description: "Step-by-step guide to crafting items in Subnautica 2",
    totalTime: "PT10M",
    step: [
      { name: "Gather Resources", text: "Collect the required materials from the ocean floor and surrounding areas." },
      { name: "Open Crafting Menu", text: "Press the crafting key to open the fabrication menu." },
      { name: "Select Blueprint", text: "Choose the item you want to craft from the available blueprints." },
      { name: "Craft Item", text: "Confirm the crafting process and wait for the item to be fabricated." },
    ],
  });

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
            { name: "Crafting", url: pageUrl },
          ]),
          howToSchema,
        ]}
      />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Subnautica 2 Crafting</h1>
        <p className="text-lg text-gray-600 mb-8">Crafting guide coming soon. Check back for updates.</p>
      </main>
    </>
  );
}
