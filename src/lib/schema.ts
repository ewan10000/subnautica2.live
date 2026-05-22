const BASE_URL = "https://subnautica2.live";
const ORGANIZATION_ID = `${BASE_URL}/#organization`;
const WEBSITE_ID = `${BASE_URL}/#website`;

export function generateOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Subnautica 2 Guide",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/logo.png`,
    },
    email: "support@subnautica2.live",
    sameAs: [],
  };
}

export function generateWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: "Subnautica 2 Guide",
    url: BASE_URL,
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

interface WebPageParams {
  title: string;
  description: string;
  url: string;
  dateModified?: string;
}

export function generateWebPageSchema({ title, description, url, dateModified }: WebPageParams) {
  const schema: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name: title,
    description,
    url,
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    inLanguage: "en",
  };

  if (dateModified) {
    schema.dateModified = dateModified;
  }

  return schema;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
