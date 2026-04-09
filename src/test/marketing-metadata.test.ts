import { describe, expect, it } from "vitest";
import {
  MARKETING_SITE,
  createPageTitle,
  resolveMarketingMetadata,
} from "@/lib/marketing-metadata";

describe("resolveMarketingMetadata", () => {
  it("fills social metadata from page defaults and route path", () => {
    const metadata = resolveMarketingMetadata(
      {
        title: createPageTitle("Features"),
        metaDescription: "Explore scheduling, screen control, and playlists.",
      },
      {
        pathname: "/features",
        siteUrl: "https://vital-message-hub.lovable.app",
      },
    );

    expect(metadata.title).toBe("Features | MedScreen");
    expect(metadata.metaDescription).toBe(
      "Explore scheduling, screen control, and playlists.",
    );
    expect(metadata.canonical).toBe(
      "https://vital-message-hub.lovable.app/features",
    );
    expect(metadata.openGraph.title).toBe("Features | MedScreen");
    expect(metadata.twitter.description).toBe(
      "Explore scheduling, screen control, and playlists.",
    );
    expect(metadata.openGraph.image).toBe(MARKETING_SITE.defaultSocialImage);
  });

  it("allows page-level social overrides", () => {
    const metadata = resolveMarketingMetadata(
      {
        title: MARKETING_SITE.defaultTitle,
        metaDescription: MARKETING_SITE.defaultDescription,
        canonical: "/",
        openGraph: {
          title: "Healthcare Digital Signage | MedScreen",
          image: "/images/og-home.png",
        },
        twitter: {
          title: "MedScreen on X",
          description: "Marketing-site social preview",
          image: "https://cdn.example.com/twitter-home.png",
        },
      },
      {
        siteUrl: "https://vital-message-hub.lovable.app/",
      },
    );

    expect(metadata.canonical).toBe("https://vital-message-hub.lovable.app/");
    expect(metadata.openGraph.title).toBe(
      "Healthcare Digital Signage | MedScreen",
    );
    expect(metadata.openGraph.image).toBe(
      "https://vital-message-hub.lovable.app/images/og-home.png",
    );
    expect(metadata.twitter.title).toBe("MedScreen on X");
    expect(metadata.twitter.image).toBe(
      "https://cdn.example.com/twitter-home.png",
    );
  });
});
