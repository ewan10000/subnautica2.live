import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subnautica 2 Map — Interactive World Map | Subnautica 2 Guide",
  description: "Explore the complete Subnautica 2 world map. Find biomes, resources, and points of interest.",
  alternates: {
    canonical: "/map",
  },
  openGraph: {
    title: "Subnautica 2 Map — Interactive World Map",
    description: "Explore the complete Subnautica 2 world map. Find biomes, resources, and points of interest.",
    url: "/map",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subnautica 2 Map — Interactive World Map",
    description: "Explore the complete Subnautica 2 world map.",
    images: ["/og-image.jpg"],
  },
};

export default function MapPage() {
  const pageUrl = "https://subnautica2.live/map";
  const pageTitle = "Subnautica 2 Map — Interactive World Map | Subnautica 2 Guide";
  const pageDesc = "Explore the complete Subnautica 2 world map. Find biomes, resources, and points of interest.";

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
            { name: "Map", url: pageUrl },
          ]),
        ]}
      />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Subnautica 2 Map</h1>
        <p className="text-lg text-gray-600 mb-8">Interactive world map coming soon. Check back for updates.</p>
      </main>
    </>
  );
}
