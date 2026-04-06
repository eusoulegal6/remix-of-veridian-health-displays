import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "src",
  buildDirectory: "dist",
  ssr: false,
  async prerender() {
    return [
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
    ];
  },
} satisfies Config;
