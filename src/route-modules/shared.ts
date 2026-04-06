import {
  createCanonicalLinkDescriptor,
  createMarketingMetaDescriptors,
} from "@/lib/marketing-metadata";
import { PUBLIC_PAGE_METADATA } from "@/routes/page-metadata";

type PublicPageKey = keyof typeof PUBLIC_PAGE_METADATA;

export const createPageMeta = (key: PublicPageKey) =>
  createMarketingMetaDescriptors(PUBLIC_PAGE_METADATA[key]);

export const createPageLinks = (key: PublicPageKey) =>
  createCanonicalLinkDescriptor(PUBLIC_PAGE_METADATA[key]);
