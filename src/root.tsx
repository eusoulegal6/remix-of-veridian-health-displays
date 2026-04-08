import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./index.css";

const faviconVersion = "20260408";

export const links = () => [
  {
    rel: "icon",
    type: "image/png",
    sizes: "512x512",
    href: `/favicon-v2.png?v=${faviconVersion}`,
  },
  {
    rel: "icon",
    type: "image/x-icon",
    href: `/favicon.ico?v=${faviconVersion}`,
  },
  {
    rel: "shortcut icon",
    href: `/favicon.ico?v=${faviconVersion}`,
  },
  {
    rel: "apple-touch-icon",
    href: `/favicon-v2.png?v=${faviconVersion}`,
  },
];

export function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

const Root = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <Outlet />
  </TooltipProvider>
);

export default Root;
