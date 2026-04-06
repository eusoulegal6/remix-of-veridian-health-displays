import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import hospitalImg from "@/assets/hospital-hallway-display.jpg";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background image */}
          <img
            src={hospitalImg}
            alt="Hospital hallway with digital wayfinding display"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            width={1280}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-primary/70" />

          <div className="relative z-10 px-6 py-16 md:px-16 md:py-20 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Ready to upgrade your patient experience?
              </h2>
              <p className="text-lg text-white/80 max-w-xl mx-auto">
                Join hundreds of healthcare facilities already using MedScreen to power their digital displays.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Button
                  size="lg"
                  className="px-8 text-base gap-2 bg-white text-primary hover:bg-white/90"
                  asChild
                >
                  <a href="#">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 text-base border-white/30 text-white hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <a href="#">Talk to Sales</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
