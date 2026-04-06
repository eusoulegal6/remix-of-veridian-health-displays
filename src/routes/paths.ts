import {
  CONTACT_INTENTS,
  buildContactPath,
} from "../lib/contact-funnel";

export const PUBLIC_PATHS = {
  home: "/",
  features: "/features",
  hospitals: "/hospitals",
  clinics: "/clinics",
  dentalOffices: "/dental-offices",
  waitingRooms: "/waiting-rooms",
  pricing: "/pricing",
  faq: "/faq",
  about: "/about",
  contact: "/contact",
  privacyPolicy: "/privacy-policy",
  termsOfService: "/terms-of-service",
} as const;

type RouteLink = {
  label: string;
  href: string;
};

export const USE_CASE_LINKS: RouteLink[] = [
  { label: "Hospitals", href: PUBLIC_PATHS.hospitals },
  { label: "Clinics", href: PUBLIC_PATHS.clinics },
  { label: "Dental Offices", href: PUBLIC_PATHS.dentalOffices },
  { label: "Waiting Rooms", href: PUBLIC_PATHS.waitingRooms },
];

export const MAIN_NAV_LINKS: RouteLink[] = [
  { label: "Features", href: PUBLIC_PATHS.features },
  { label: "Pricing", href: PUBLIC_PATHS.pricing },
  { label: "FAQ", href: PUBLIC_PATHS.faq },
  { label: "About", href: PUBLIC_PATHS.about },
  { label: "Contact", href: PUBLIC_PATHS.contact },
];

export const LEGAL_LINKS: RouteLink[] = [
  { label: "Privacy Policy", href: PUBLIC_PATHS.privacyPolicy },
  { label: "Terms of Service", href: PUBLIC_PATHS.termsOfService },
  { label: "HIPAA Compliance", href: PUBLIC_PATHS.contact },
];

export const PUBLIC_CTA_PATHS = {
  startFreeTrial: buildContactPath(
    PUBLIC_PATHS.contact,
    CONTACT_INTENTS.trial,
    "start-free-trial",
  ),
  requestDemo: buildContactPath(
    PUBLIC_PATHS.contact,
    CONTACT_INTENTS.demo,
    "request-demo",
  ),
  talkToSales: buildContactPath(
    PUBLIC_PATHS.contact,
    CONTACT_INTENTS.sales,
    "talk-to-sales",
  ),
  watchDemo: PUBLIC_PATHS.features,
  bookDemo: buildContactPath(
    PUBLIC_PATHS.contact,
    CONTACT_INTENTS.demo,
    "book-demo",
  ),
  pricing: PUBLIC_PATHS.pricing,
} as const;
