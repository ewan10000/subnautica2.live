import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { QuickLinksSection } from "@/components/sections/QuickLinksSection";
import { MapPreviewSection } from "@/components/sections/MapPreviewSection";
import { PopularItemsSection } from "@/components/sections/PopularItemsSection";
import { GuidesSection } from "@/components/sections/GuidesSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <>
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
