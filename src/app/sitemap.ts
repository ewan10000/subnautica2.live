export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://subnautica2.live";
  const lastMod = new Date();

  return [
    { url: baseUrl, lastModified: lastMod, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/map`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/items`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/blueprints`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/creatures`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/guides`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.3 },
  ];
}
