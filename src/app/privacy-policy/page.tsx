import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy | Subnautica 2 Guide",
  description: "Privacy Policy for Subnautica 2 Guide — independent fan site.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  const pageUrl = "https://subnautica2.live/privacy-policy";
  const pageTitle = "Privacy Policy | Subnautica 2 Guide";
  const pageDesc = "Privacy Policy for Subnautica 2 Guide — independent fan site.";

  return (
    <>
      <JsonLd
        data={generateWebPageSchema({
          title: pageTitle,
          description: pageDesc,
          url: pageUrl,
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: "https://subnautica2.live" },
          { name: "Privacy Policy", url: pageUrl },
        ])}
      />
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto max-w-[800px] px-5 md:px-10 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-on-surface-variant mb-6">
              Last updated: May 19, 2026. This Privacy Policy describes how Subnautica 2 Guide ("we", "our", or "us") collects, uses, and shares your personal information when you visit our website.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Information We Collect</h2>
            <p className="text-on-surface-variant mb-4">
              We collect minimal information to operate this site:
            </p>
            <ul className="list-disc list-inside text-on-surface-variant mb-6 space-y-2">
              <li><strong>Analytics data:</strong> We use privacy-friendly analytics (Plausible) to understand site usage. This data is aggregated and anonymized.</li>
              <li><strong>Technical data:</strong> Your browser type, device type, and IP address may be logged by our hosting provider (Cloudflare) for security and performance purposes.</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Cookies</h2>
            <p className="text-on-surface-variant mb-6">
              We do not use tracking cookies. Any cookies set are essential for site functionality only.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Third-Party Services</h2>
            <p className="text-on-surface-variant mb-6">
              We may display advertisements through third-party ad networks (e.g., Google AdSense). These networks may use cookies to serve personalized ads. You can opt out of personalized advertising through your Google Ad Settings.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Data Retention</h2>
            <p className="text-on-surface-variant mb-6">
              Analytics data is retained for up to 24 months. We do not store personal identifiers.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Contact</h2>
            <p className="text-on-surface-variant">
              For privacy-related inquiries, contact us at support@subnautica2.live.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
