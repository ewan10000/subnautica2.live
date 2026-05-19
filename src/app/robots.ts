export const dynamic = "force-static";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://subnautica2.live/sitemap.xml",
  };
}
