import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Monitor,
  Calendar,
  Upload,
  ListMusic,
  Layers,
  Megaphone,
  Heart,
  GraduationCap,
  FolderTree,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";

import featureScheduling from "@/assets/feature-scheduling.jpg";
import featureRemote from "@/assets/feature-remote-management.jpg";
import featureMedia from "@/assets/feature-media-library.jpg";
import waitingRoom from "@/assets/waiting-room-screen.jpg";

const heroFeatures = [
  "Remote screen management",
  "Content scheduling",
  "Multi-location control",
  "HIPAA-ready infrastructure",
];

const spotlightFeatures = [
  {
    title: "Remote Screen Management",
    description:
      "Control every screen in your facility from a single cloud dashboard. Monitor status, push updates, reboot displays, and troubleshoot — all without leaving your desk.",
    image: featureRemote,
    icon: Monitor,
    bullets: [
      "Real-time screen status monitoring",
      "One-click content pushes",
      "Remote reboot & diagnostics",
      "Works across any number of locations",
    ],
  },
  {
    title: "Content Scheduling",
    description:
      "Set it and forget it. Schedule exactly what plays on each screen by time of day, day of week, or special events. Your displays always show the right content at the right time.",
    image: featureScheduling,
    icon: Calendar,
    bullets: [
      "Drag-and-drop scheduling calendar",
      "Recurring and one-time schedules",
      "Per-screen or per-group scheduling",
      "Override mode for urgent announcements",
    ],
  },
  {
    title: "Media Uploads & Library",
    description:
      "Upload images, videos, and documents in seconds. Your entire content library is organized, searchable, and ready to deploy to any screen instantly.",
    image: featureMedia,
    icon: Upload,
    bullets: [
      "Drag-and-drop file uploads",
      "Support for images, videos, PDFs & HTML",
      "Folder organization & tagging",
      "Version history for every asset",
    ],
  },
];

const gridFeatures = [
  {
    icon: ListMusic,
    title: "Playlists",
    description:
      "Create dynamic playlists that rotate through your content automatically. Set durations, transitions, and ordering for a polished on-screen experience.",
  },
  {
    icon: Layers,
    title: "Multi-Screen Control",
    description:
      "Manage dozens — or hundreds — of screens from one place. Push unique content to each display or synchronize them across departments.",
  },
  {
    icon: Megaphone,
    title: "Announcements",
    description:
      "Broadcast emergency alerts, schedule changes, or facility-wide messages to all screens in seconds. Priority overrides ensure critical info is seen.",
  },
  {
    icon: Heart,
    title: "Waiting Room Content",
    description:
      "Reduce perceived wait times with calming visuals, health tips, facility news, and entertaining content tailored for healthcare waiting areas.",
  },
  {
    icon: GraduationCap,
    title: "Patient Education",
    description:
      "Display procedure prep instructions, preventive care tips, and condition-specific education. Help patients feel informed and empowered.",
  },
  {
    icon: FolderTree,
    title: "Screen Grouping",
    description:
      "Organize screens by location, department, or function. Push content to groups instead of individual screens — saving time across large facilities.",
  },
  {
    icon: RefreshCw,
    title: "Easy Multi-Location Updates",
    description:
      "Update branding, seasonal content, or policy changes across every location at once. One change, everywhere — instantly.",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={waitingRoom}
              alt="Waiting room with digital signage"
              className="w-full h-full object-cover"
              width={1280}
              height={800}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/50" />
          </div>

          <div className="container relative py-24 md:py-36">
            <div className="max-w-2xl space-y-6">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Platform Features
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Everything you need to run{" "}
                <span className="text-primary">smarter screens.</span>
              </h1>
              <p className="text-lg text-white/80 max-w-xl">
                From content scheduling to multi-location management, MedScreen
                gives healthcare teams full control over their digital displays
                — with zero complexity.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {heroFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Button size="lg" className="px-8 text-base gap-2" asChild>
                  <a href="#">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Spotlight features — alternating image+text rows */}
        {spotlightFeatures.map((feature, i) => {
          const isReversed = i % 2 !== 0;
          return (
            <section
              key={feature.title}
              className={`py-20 md:py-28 ${i % 2 === 0 ? "bg-surface" : ""}`}
            >
              <div className="container">
                <div
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    isReversed ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={`${isReversed ? "lg:order-2" : ""}`}>
                    <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                        width={1280}
                        height={800}
                      />
                    </div>
                  </div>

                  <div className={`space-y-6 ${isReversed ? "lg:order-1" : ""}`}>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      {feature.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Grid features */}
        <section className="py-20 md:py-28 bg-surface">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                More Capabilities
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Built for every healthcare need
              </h2>
              <p className="text-lg text-muted-foreground">
                MedScreen covers every aspect of digital signage management —
                from playlists to patient education.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {gridFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-xl border bg-card p-6 md:p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="rounded-2xl bg-gradient-to-br from-primary to-accent overflow-hidden px-6 py-16 md:px-16 md:py-20 text-center relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  See all features in action
                </h2>
                <p className="text-lg text-white/80 max-w-xl mx-auto">
                  Book a personalized demo and discover how MedScreen can
                  transform your facility's digital displays.
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
                    <a href="#">Request a Demo</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
