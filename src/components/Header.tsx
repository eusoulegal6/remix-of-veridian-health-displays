import MedScreenLogo from "./MedScreenLogo";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { scrollToContactForm } from "@/lib/contact-funnel";
import {
  MAIN_NAV_LINKS,
  PUBLIC_CTA_PATHS,
  PUBLIC_PATHS,
  USE_CASE_LINKS,
} from "@/routes/paths";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const [mobileUseCasesOpen, setMobileUseCasesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isContactPage = location.pathname === PUBLIC_PATHS.contact;

  const handleContactPageDemoAction = () => {
    setMobileOpen(false);
    setMobileUseCasesOpen(false);
    scrollToContactForm();
  };

  useEffect(() => {
    setMobileOpen(false);
    setMobileUseCasesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setUseCasesOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to={PUBLIC_PATHS.home} className="flex-shrink-0">
          <MedScreenLogo />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          <Link
            to={PUBLIC_PATHS.features}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>

          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setUseCasesOpen(!useCasesOpen)}
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Use Cases
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${
                  useCasesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {useCasesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 rounded-xl border bg-card shadow-lg py-2 z-50">
                {USE_CASE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    onClick={() => setUseCasesOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {MAIN_NAV_LINKS.filter((link) => link.label !== "Features").map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link to={PUBLIC_CTA_PATHS.pricing}>Pricing</Link>
          </Button>
          {isContactPage ? (
            <Button size="sm" type="button" onClick={handleContactPageDemoAction}>
              Open Demo Form
            </Button>
          ) : (
            <Button size="sm" asChild>
              <Link to={PUBLIC_CTA_PATHS.bookDemo}>Book Demo</Link>
            </Button>
          )}
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t bg-background max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="container py-4 flex flex-col gap-1">
            <Link
              to={PUBLIC_PATHS.features}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-2 rounded-lg hover:bg-muted/50"
            >
              Features
            </Link>

            <button
              onClick={() => setMobileUseCasesOpen(!mobileUseCasesOpen)}
              className="flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-2 rounded-lg hover:bg-muted/50"
            >
              Use Cases
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileUseCasesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileUseCasesOpen && (
              <div className="pl-4 flex flex-col gap-1">
                {USE_CASE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2.5 px-2 rounded-lg hover:bg-muted/50"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {MAIN_NAV_LINKS.filter((link) => link.label !== "Features").map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-2 rounded-lg hover:bg-muted/50"
              >
                {link.label}
              </Link>
            ))}

            <div className="flex flex-col gap-2 pt-3 mt-2 border-t">
              <Button variant="outline" size="sm" asChild>
                <Link to={PUBLIC_CTA_PATHS.pricing}>Pricing</Link>
              </Button>
              {isContactPage ? (
                <Button size="sm" type="button" onClick={handleContactPageDemoAction}>
                  Open Demo Form
                </Button>
              ) : (
                <Button size="sm" asChild>
                  <Link to={PUBLIC_CTA_PATHS.bookDemo}>Book Demo</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
