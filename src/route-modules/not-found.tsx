import { createCanonicalLinkDescriptor, createMarketingMetaDescriptors } from "@/lib/marketing-metadata";
import NotFound from "@/pages/NotFound";

export const meta = () =>
  createMarketingMetaDescriptors({
    title: "Page Not Found | MedScreen",
    metaDescription:
      "The page you are looking for could not be found on the MedScreen website.",
    canonical: "/404",
  });

export const links = () =>
  createCanonicalLinkDescriptor({
    title: "Page Not Found | MedScreen",
    metaDescription:
      "The page you are looking for could not be found on the MedScreen website.",
    canonical: "/404",
  });

export default NotFound;
