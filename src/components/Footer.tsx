import { Link } from "react-router-dom";
import MedScreenLogo from "./MedScreenLogo";
import {
  LEGAL_LINKS,
  MAIN_NAV_LINKS,
  PUBLIC_PATHS,
  USE_CASE_LINKS,
} from "@/routes/paths";

const Footer = () => {
  return (
    <footer className="border-t bg-secondary text-secondary-foreground py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link to={PUBLIC_PATHS.home}>
              <MedScreenLogo />
            </Link>
            <p className="text-sm text-secondary-foreground/70 max-w-xs">
              Smarter screens for better care. Premium digital signage built for
              modern healthcare facilities.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              {MAIN_NAV_LINKS.filter((link) =>
                ["Features", "Pricing", "FAQ"].includes(link.label),
              ).map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-secondary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Use Cases</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              {USE_CASE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-secondary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              {MAIN_NAV_LINKS.filter((link) =>
                ["About", "Contact"].includes(link.label),
              ).map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-secondary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-secondary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-foreground/50">
            &copy; {new Date().getFullYear()} MedScreen. All rights reserved.
          </p>
          <p className="text-xs text-secondary-foreground/50">
            Designed for healthcare. Built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
