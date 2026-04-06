import type { RouteConfig } from "@react-router/dev/routes";

export default [
  {
    index: true,
    file: "./route-modules/home.tsx",
  },
  {
    path: "features",
    file: "./route-modules/features.tsx",
  },
  {
    path: "hospitals",
    file: "./route-modules/hospitals.tsx",
  },
  {
    path: "clinics",
    file: "./route-modules/clinics.tsx",
  },
  {
    path: "dental-offices",
    file: "./route-modules/dental-offices.tsx",
  },
  {
    path: "waiting-rooms",
    file: "./route-modules/waiting-rooms.tsx",
  },
  {
    path: "pricing",
    file: "./route-modules/pricing.tsx",
  },
  {
    path: "faq",
    file: "./route-modules/faq.tsx",
  },
  {
    path: "about",
    file: "./route-modules/about.tsx",
  },
  {
    path: "contact",
    file: "./route-modules/contact.tsx",
  },
  {
    path: "privacy-policy",
    file: "./route-modules/privacy-policy.tsx",
  },
  {
    path: "terms-of-service",
    file: "./route-modules/terms-of-service.tsx",
  },
  {
    path: "*",
    file: "./route-modules/not-found.tsx",
  },
] satisfies RouteConfig;
