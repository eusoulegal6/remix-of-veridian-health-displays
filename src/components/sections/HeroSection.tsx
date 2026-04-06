import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-signage-overview.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width hero image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hospital lobby with multiple digital signage screens"
          className="w-full h-full object-cover"
          width={1440}
          height={960}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
      </div>

      <div className="container relative py-24 md:py-36 lg:py-44">
        <div className="max-w-2xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
            Digital Signage for Healthcare
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Transform your <br className="hidden md:block" />
            waiting room <br className="hidden md:block" />
            <span className="text-primary">experience.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-xl">
            MedScreen powers digital displays across hospitals, clinics, and dental offices — delivering the right message, to the right screen, at the right time.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button size="lg" className="px-8 text-base gap-2" asChild>
              <a href="#">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 text-base gap-2 border-white/30 text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <a href="#">
                <Play className="w-4 h-4" />
                Watch Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
