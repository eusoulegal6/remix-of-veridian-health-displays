import { MARKETING_SITE } from "../lib/marketing-metadata";
import { PUBLIC_PAGE_METADATA } from "../routes/page-metadata";

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export const getMarketingSiteUrl = (siteUrl?: string) =>
  trimTrailingSlash(siteUrl?.trim() || MARKETING_SITE.siteUrl);

export const getMarketingSitemapPaths = () =>
  Array.from(
    new Set(
      Object.values(PUBLIC_PAGE_METADATA)
        .map((metadata) => metadata.canonical)
        .filter((canonical): canonical is string => Boolean(canonical)),
    ),
  );

export const createSitemapXml = (siteUrl?: string) => {
  const resolvedSiteUrl = getMarketingSiteUrl(siteUrl);
  const urls = getMarketingSitemapPaths()
    .map((pathname) => {
      const loc = new URL(pathname, `${resolvedSiteUrl}/`).toString();
      return [
        "  <url>",
        `    <loc>${escapeXml(loc)}</loc>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
    "",
  ].join("\n");
};

export const createRobotsTxt = (siteUrl?: string) => {
  const resolvedSiteUrl = getMarketingSiteUrl(siteUrl);

  return [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${resolvedSiteUrl}/sitemap.xml`,
    "",
  ].join("\n");
};
