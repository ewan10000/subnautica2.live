import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Terms of Service | Subnautica 2 Guide",
  description: "Terms of Service for Subnautica 2 Guide — independent fan site.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfService() {
  const pageUrl = "https://subnautica2.live/terms-of-service";
  const pageTitle = "Terms of Service | Subnautica 2 Guide";
  const pageDesc = "Terms of Service for Subnautica 2 Guide — independent fan site.";

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
            { name: "Terms of Service", url: pageUrl },
          ]),
        ]}
      />
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto max-w-[800px] px-5 md:px-10 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Terms of Service</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-on-surface-variant mb-6">
              Last updated: May 19, 2026. By accessing and using Subnautica 2 Guide, you accept and agree to be bound by these Terms of Service.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Independent Fan Site</h2>
            <p className="text-on-surface-variant mb-6">
              Subnautica 2 Guide is an independent fan site and is not affiliated with, endorsed by, or sponsored by Unknown Worlds Entertainment or Krafton. &quot;Subnautica&quot; is a trademark of Unknown Worlds Entertainment.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Use of Content</h2>
            <p className="text-on-surface-variant mb-6">
              All content on this site is provided for informational purposes only. Game data, item names, and descriptions are based on in-game observations and community contributions. We make no guarantees about accuracy, especially during Early Access when game content may change frequently.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Intellectual Property</h2>
            <p className="text-on-surface-variant mb-6">
              All game-related intellectual property (characters, names, logos, artwork) belongs to their respective owners. Our original content (guides, articles, site design) is © 2026 Subnautica 2 Guide.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Disclaimer</h2>
            <p className="text-on-surface-variant mb-6">
              This site is provided &quot;as is&quot; without warranties of any kind. We are not responsible for any loss of game progress, saves, or accounts resulting from the use of information on this site.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. Changes to Terms</h2>
            <p className="text-on-surface-variant">
              We may update these terms at any time. Continued use of the site after changes constitutes acceptance of the updated terms.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
