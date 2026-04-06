import MedScreenLogo from "./MedScreenLogo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-secondary text-secondary-foreground py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link to="/">
              <MedScreenLogo />
            </Link>
            <p className="text-sm text-secondary-foreground/70 max-w-xs">
              Smarter screens for better care. Premium digital signage built for modern healthcare facilities.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><Link to="/features" className="hover:text-secondary-foreground transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-secondary-foreground transition-colors">Pricing</Link></li>
              <li><Link to="/faq" className="hover:text-secondary-foreground transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Use Cases</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><Link to="/hospitals" className="hover:text-secondary-foreground transition-colors">Hospitals</Link></li>
              <li><Link to="/clinics" className="hover:text-secondary-foreground transition-colors">Clinics</Link></li>
              <li><Link to="/dental-offices" className="hover:text-secondary-foreground transition-colors">Dental Offices</Link></li>
              <li><Link to="/waiting-rooms" className="hover:text-secondary-foreground transition-colors">Waiting Rooms</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><Link to="/about" className="hover:text-secondary-foreground transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-secondary-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">HIPAA Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-foreground/50">
            © {new Date().getFullYear()} MedScreen. All rights reserved.
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
