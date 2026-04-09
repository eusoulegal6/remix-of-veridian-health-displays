/// <reference lib="dom" />
/// <reference types="vite/client" />

export type SocialMetadata = {
  title?: string;
  description?: string;
  image?: string;
};

export type MarketingMetadata = {
  title: string;
  metaDescription: string;
  canonical?: string;
  openGraph?: SocialMetadata;
  twitter?: SocialMetadata;
};

export type ResolvedMarketingMetadata = {
  title: string;
  metaDescription: string;
  canonical: string;
  openGraph: Required<SocialMetadata>;
  twitter: Required<SocialMetadata>;
};

type MetaDescriptor = {
  title?: string;
  name?: string;
  property?: string;
  content?: string;
};

type LinkDescriptor = {
  rel: string;
  href: string;
};

export const MARKETING_SITE = {
  name: "MedScreen",
  siteUrl: "https://vital-message-hub.lovable.app",
  defaultTitle: "MedScreen | Smarter Screens for Better Care",
  defaultDescription:
    "MedScreen is a premium digital signage platform for hospitals, clinics, waiting rooms, and dental offices.",
  defaultSocialImage: "/og-image.png",
  twitterSite: "@MedScreen",
} as const;

export const createPageTitle = (pageTitle: string) =>
  `${pageTitle} | ${MARKETING_SITE.name}`;

export const definePageMetadata = (metadata: MarketingMetadata) => metadata;

export const createMarketingPageMetadata = ({
  pageTitle,
  metaDescription,
  canonical,
  openGraph,
  twitter,
}: {
  pageTitle: string;
  metaDescription: string;
  canonical: string;
  openGraph?: SocialMetadata;
  twitter?: SocialMetadata;
}) =>
  definePageMetadata({
    title: createPageTitle(pageTitle),
    metaDescription,
    canonical,
    openGraph: {
      title: openGraph?.title ?? createPageTitle(pageTitle),
      description: openGraph?.description ?? metaDescription,
      image: openGraph?.image,
    },
    twitter: {
      title: twitter?.title ?? createPageTitle(pageTitle),
      description: twitter?.description ?? metaDescription,
      image: twitter?.image ?? openGraph?.image,
    },
  });

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

const getSiteUrl = (siteUrl?: string) => {
  if (siteUrl) {
    return trimTrailingSlash(siteUrl);
  }

  const configuredSiteUrl = import.meta.env.VITE_SITE_URL?.trim();
  if (configuredSiteUrl) {
    return trimTrailingSlash(configuredSiteUrl);
  }

  if (typeof window !== "undefined" && window.location.origin) {
    return trimTrailingSlash(window.location.origin);
  }

  return MARKETING_SITE.siteUrl;
};

const toAbsoluteUrl = (value: string, siteUrl: string) => {
  try {
    return new URL(value).toString();
  } catch {
    return new URL(value, `${siteUrl}/`).toString();
  }
};

export const resolveMarketingMetadata = (
  metadata: MarketingMetadata,
  options?: {
    pathname?: string;
    siteUrl?: string;
  },
): ResolvedMarketingMetadata => {
  const siteUrl = getSiteUrl(options?.siteUrl);
  const canonicalPath = metadata.canonical ?? options?.pathname ?? "/";
  const canonical = toAbsoluteUrl(canonicalPath, siteUrl);

  const openGraphImage = toAbsoluteUrl(
    metadata.openGraph?.image ?? MARKETING_SITE.defaultSocialImage,
    siteUrl,
  );
  const twitterImage = toAbsoluteUrl(
    metadata.twitter?.image ??
      metadata.openGraph?.image ??
      MARKETING_SITE.defaultSocialImage,
    siteUrl,
  );

  return {
    title: metadata.title || MARKETING_SITE.defaultTitle,
    metaDescription:
      metadata.metaDescription || MARKETING_SITE.defaultDescription,
    canonical,
    openGraph: {
      title: metadata.openGraph?.title ?? metadata.title,
      description:
        metadata.openGraph?.description ?? metadata.metaDescription,
      image: openGraphImage,
    },
    twitter: {
      title: metadata.twitter?.title ?? metadata.title,
      description:
        metadata.twitter?.description ?? metadata.metaDescription,
      image: twitterImage,
    },
  };
};

export const createMarketingMetaDescriptors = (
  metadata: MarketingMetadata,
  options?: {
    pathname?: string;
    siteUrl?: string;
  },
): MetaDescriptor[] => {
  const resolved = resolveMarketingMetadata(metadata, options);

  return [
    { title: resolved.title },
    { name: "description", content: resolved.metaDescription },
    { name: "author", content: MARKETING_SITE.name },
    { property: "og:type", content: "website" },
    { property: "og:url", content: resolved.canonical },
    { property: "og:title", content: resolved.openGraph.title },
    {
      property: "og:description",
      content: resolved.openGraph.description,
    },
    { property: "og:image", content: resolved.openGraph.image },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: MARKETING_SITE.twitterSite },
    { name: "twitter:title", content: resolved.twitter.title },
    {
      name: "twitter:description",
      content: resolved.twitter.description,
    },
    { name: "twitter:image", content: resolved.twitter.image },
  ];
};

export const createCanonicalLinkDescriptor = (
  metadata: MarketingMetadata,
  options?: {
    pathname?: string;
    siteUrl?: string;
  },
): LinkDescriptor[] => {
  const resolved = resolveMarketingMetadata(metadata, options);

  return [{ rel: "canonical", href: resolved.canonical }];
};
