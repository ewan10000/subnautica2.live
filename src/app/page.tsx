import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { QuickLinksSection } from "@/components/sections/QuickLinksSection";
import { MapPreviewSection } from "@/components/sections/MapPreviewSection";
import { PopularItemsSection } from "@/components/sections/PopularItemsSection";
import { GuidesSection } from "@/components/sections/GuidesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/schema";

export default function Home() {
  const pageUrl = "https://subnautica2.live";
  const pageTitle = "Subnautica 2 Complete Guide & Interactive Map";
  const pageDesc = "Every item, creature, blueprint, and resource location in Subnautica 2 — all in one place. Updated for Early Access.";

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
