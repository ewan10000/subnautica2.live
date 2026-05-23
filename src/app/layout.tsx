import type { Metadata } from "next";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subnautica 2 Complete Guide & Interactive Map",
  description: "Every item, creature, blueprint, and resource location in Subnautica 2 — all in one place. Updated for Early Access.",
  keywords: ["Subnautica 2", "guide", "map", "items", "blueprints", "resources", "creatures", "Early Access"],
  metadataBase: new URL("https://subnautica2.live"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Subnautica 2 Complete Guide & Interactive Map",
    description: "Every item, creature, blueprint, and resource location in Subnautica 2 — all in one place.",
    type: "website",
    url: "/",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subnautica 2 Complete Guide & Interactive Map",
    description: "Every item, creature, blueprint, and resource location in Subnautica 2.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "pending",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
        <JsonLd data={[generateOrganizationSchema(), generateWebSiteSchema()]} />
      </body>
    </html>
  );
}
