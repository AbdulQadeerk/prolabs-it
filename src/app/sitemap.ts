import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://prolabsit.com";

  // In a real scenario, you might fetch all routes from your database or filesystem
  // For now, let's include the core pages and main services
  const routes = [
    "",
    "/about",
    "/contact",
    "/blog",
    "/managed-soc-services",
    "/azure-security-service",
    "/defender-for-endpoint",
    "/email-security",
    "/microsoft-cloud-app-security",
    "/active-directory-consulting",
    "/cloud-managed-services",
    "/it-help-desk",
    "/azure-virtual-desktop",
    "/citrix-consulting",
    "/vapt",
    "/network-and-security-services",
    "/identity-management-isim-igi-solutions",
    "/pki-consulting",
    "/modern-workplace",
    "/professional-labs-transforming-business-with-advanced-ai-solutions",
    "/professional-labs-your-partner-in-data-driven-brilliance",
    "/it-training-services",
    "/market-research-services",
    "/web-development-services",
    "/crm-customer-relationship-management-services",
    "/ticketing-system-service",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
