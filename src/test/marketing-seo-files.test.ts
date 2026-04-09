import { describe, expect, it } from "vitest";
import {
  createRobotsTxt,
  createSitemapXml,
  getMarketingSitemapPaths,
} from "@/seo/marketing-seo-files";

describe("marketing SEO files", () => {
  it("includes all major public marketing routes in the sitemap", () => {
    expect(getMarketingSitemapPaths()).toEqual([
      "/",
      "/features",
      "/hospitals",
      "/clinics",
      "/dental-offices",
      "/waiting-rooms",
      "/pricing",
      "/faq",
      "/about",
      "/contact",
      "/privacy-policy",
      "/terms-of-service",
    ]);
  });

  it("renders production-ready sitemap.xml and robots.txt content", () => {
    const sitemap = createSitemapXml("https://vital-message-hub.lovable.app");
    const robots = createRobotsTxt("https://vital-message-hub.lovable.app");

    expect(sitemap).toContain(
      "<loc>https://vital-message-hub.lovable.app/features</loc>",
    );
    expect(sitemap).toContain(
      "<loc>https://vital-message-hub.lovable.app/contact</loc>",
    );
    expect(robots).toContain("User-agent: *");
    expect(robots).toContain(
      "Sitemap: https://vital-message-hub.lovable.app/sitemap.xml",
    );
  });
});
