import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { QuickLinksSection } from "@/components/sections/QuickLinksSection";
import { MapPreviewSection } from "@/components/sections/MapPreviewSection";
import { PopularItemsSection } from "@/components/sections/PopularItemsSection";
import { GuidesSection } from "@/components/sections/GuidesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateWebPageSchema, generateBreadcrumbSchema, generateFAQPageSchema } from "@/lib/schema";

export default function Home() {
  const pageUrl = "https://subnautica2.live";
  const pageTitle = "Subnautica 2 Complete Guide & Interactive Map";
  const pageDesc = "Every item, creature, blueprint, and resource location in Subnautica 2 — all in one place. Updated for Early Access.";

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
            { name: "Home", url: pageUrl },
          ]),
          faqSchema,
        ]}
      />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <QuickLinksSection />
        <MapPreviewSection />
        <PopularItemsSection />
        <GuidesSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
