import {
  createMarketingPageMetadata,
  definePageMetadata,
  MARKETING_SITE,
} from "../lib/marketing-metadata";
import { PUBLIC_PATHS } from "./paths";

export const PUBLIC_PAGE_METADATA = {
  home: definePageMetadata({
    title: MARKETING_SITE.defaultTitle,
    metaDescription:
      "MedScreen helps hospitals, clinics, dental offices, and waiting rooms run healthcare digital signage with polished content and simple control.",
    canonical: PUBLIC_PATHS.home,
    openGraph: {
      title: MARKETING_SITE.defaultTitle,
      description:
        "MedScreen helps hospitals, clinics, dental offices, and waiting rooms run healthcare digital signage with polished content and simple control.",
    },
    twitter: {
      title: MARKETING_SITE.defaultTitle,
      description:
        "MedScreen helps hospitals, clinics, dental offices, and waiting rooms run healthcare digital signage with polished content and simple control.",
    },
  }),
  features: createMarketingPageMetadata({
    pageTitle: "Features",
    canonical: PUBLIC_PATHS.features,
    metaDescription:
      "Explore MedScreen features for healthcare digital signage, including scheduling, playlists, remote management, and multi-location screen control.",
  }),
  hospitals: createMarketingPageMetadata({
    pageTitle: "Hospitals",
    canonical: PUBLIC_PATHS.hospitals,
    metaDescription:
      "See how MedScreen supports hospital digital signage for patient communication, wayfinding, emergency alerts, cafeteria menus, and staff updates.",
  }),
  clinics: createMarketingPageMetadata({
    pageTitle: "Clinics",
    canonical: PUBLIC_PATHS.clinics,
    metaDescription:
      "Learn how clinics use MedScreen to manage reception displays, service promotions, patient education, and multi-location updates from one place.",
  }),
  dentalOffices: createMarketingPageMetadata({
    pageTitle: "Dental Offices",
    canonical: PUBLIC_PATHS.dentalOffices,
    metaDescription:
      "Discover dental office digital signage for treatment education, before-and-after showcases, kid-friendly content, and branded welcome screens.",
  }),
  waitingRooms: createMarketingPageMetadata({
    pageTitle: "Waiting Rooms",
    canonical: PUBLIC_PATHS.waitingRooms,
    metaDescription:
      "MedScreen helps waiting rooms display calming visuals, educational content, queue updates, and timely announcements across healthcare settings.",
  }),
  pricing: createMarketingPageMetadata({
    pageTitle: "Pricing",
    canonical: PUBLIC_PATHS.pricing,
    metaDescription:
      "Review MedScreen pricing for healthcare digital signage, including Starter, Professional, and Enterprise plans for different facility sizes.",
  }),
  faq: createMarketingPageMetadata({
    pageTitle: "FAQ",
    canonical: PUBLIC_PATHS.faq,
    metaDescription:
      "Find answers about MedScreen setup, hardware support, content management, healthcare use cases, pricing, and customer support.",
  }),
  about: createMarketingPageMetadata({
    pageTitle: "About",
    canonical: PUBLIC_PATHS.about,
    metaDescription:
      "Read about MedScreen, our healthcare-first product philosophy, and the mission behind better communication across medical facilities.",
  }),
  contact: createMarketingPageMetadata({
    pageTitle: "Contact",
    canonical: PUBLIC_PATHS.contact,
    metaDescription:
      "Contact MedScreen to request a demo, ask pricing questions, or learn more about healthcare digital signage for your facility.",
  }),
  privacyPolicy: createMarketingPageMetadata({
    pageTitle: "Privacy Policy",
    canonical: PUBLIC_PATHS.privacyPolicy,
    metaDescription:
      "Read the MedScreen marketing website privacy policy for public-site inquiries, analytics, cookies, and contact information.",
  }),
  termsOfService: createMarketingPageMetadata({
    pageTitle: "Terms of Service",
    canonical: PUBLIC_PATHS.termsOfService,
    metaDescription:
      "Review the MedScreen public marketing website terms of service and site-use conditions.",
  }),
} as const;
