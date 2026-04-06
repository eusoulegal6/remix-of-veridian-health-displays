import fs from "fs";
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig, loadEnv } from "vite";
import path from "path";
import { componentTagger } from "lovable-tagger";
import {
  createRobotsTxt,
  createSitemapXml,
  getMarketingSiteUrl,
} from "./src/seo/marketing-seo-files";

// https://vitejs.dev/config/
const writeMarketingSeoFiles = (mode: string) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = getMarketingSiteUrl(env.VITE_SITE_URL);
  const publicDir = path.resolve(__dirname, "./public");

  fs.writeFileSync(
    path.join(publicDir, "sitemap.xml"),
    createSitemapXml(siteUrl),
    "utf8",
  );
  fs.writeFileSync(
    path.join(publicDir, "robots.txt"),
    createRobotsTxt(siteUrl),
    "utf8",
  );
};

export default defineConfig(({ mode }) => {
  writeMarketingSeoFiles(mode);

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      reactRouter(),
      mode === "development" && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
    },
  };
});
