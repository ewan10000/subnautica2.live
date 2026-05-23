export const dynamic = "force-static";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    host: "https://subnautica2.live",
    sitemap: "https://subnautica2.live/sitemap.xml\nContent-Signal: search=yes, ai-input=yes",
  };
}
