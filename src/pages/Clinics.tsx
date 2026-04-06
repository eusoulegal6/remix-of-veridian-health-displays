import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  CalendarCheck,
  GraduationCap,
  Sparkles,
  Building,
  Bell,
  Hand,
  Settings,
} from "lucide-react";
import { PUBLIC_CTA_PATHS } from "@/routes/paths";

import clinicReception from "@/assets/clinic-reception-screen.jpg";
import clinicWelcome from "@/assets/clinic-welcome-screen.jpg";
import clinicPromotions from "@/assets/clinic-promotions-screen.jpg";
import clinicMultiLoc from "@/assets/clinic-multi-location.jpg";
import waitingRoom from "@/assets/waiting-room-screen.jpg";

const stats = [
  { value: "45%", label: "Fewer front-desk questions" },
  { value: "2x", label: "More service awareness" },
  { value: "30%", label: "Better patient satisfaction" },
  { value: "<5 min", label: "To update all screens" },
];

const spotlights = [
  {
    title: "Reception & Welcome Screens",
    icon: Hand,
    image: clinicWelcome,
    description:
      "Make a great first impression. Greet patients by name, display check-in instructions, and set the tone for a modern, professional visit — before they even reach the front desk.",
    bullets: [
      "Branded welcome messages",
      "Self-service check-in prompts",
      "Office hours and provider schedules",
      "Multilingual greetings for diverse communities",
    ],
  },
  {
    title: "Appointment & Queue Info",
    icon: CalendarCheck,
    image: clinicReception,
    description:
      "Keep your waiting room calm and informed. Show real-time queue positions, estimated wait times, and appointment status updates — reducing patient anxiety and front-desk interruptions.",
    bullets: [
      "Live wait-time displays",
      "Patient queue position updates",
      "Provider running-late notifications",
      "Post-visit next-steps information",
    ],
  },
  {
    title: "Service Promotions",
    icon: Sparkles,
    image: clinicPromotions,
    description:
      "Turn every screen into a revenue driver. Promote new treatments, seasonal services, wellness programs, and special offers directly where patients are already looking.",
    bullets: [
      "Highlight new services and providers",
      "Seasonal health campaigns",
      "Wellness and preventive care programs",
      "Referral program promotions",
    ],
  },
  {
    title: "Brand Consistency Across Locations",
    icon: Building,
    image: clinicMultiLoc,
    description:
      "Whether you operate two clinics or twenty, MedScreen ensures every location looks, feels, and communicates the same way. Update branding once — it deploys everywhere instantly.",
    bullets: [
      "Centralized brand template management",
      "Consistent messaging across all sites",
      "Location-specific content overrides",
      "One-click multi-location updates",
    ],
  },
  {
    title: "Patient Education",
    icon: GraduationCap,
    image: waitingRoom,
    description:
      "Fill wait times with value. Display condition-specific education, preventive care tips, procedure prep instructions, and wellness content — helping patients feel informed and empowered.",
    bullets: [
      "Curated medical education content",
      "Procedure preparation instructions",
      "Preventive care and wellness tips",
      "Post-visit care reminders",
    ],
  },
];

const additionalFeatures = [
  {
    icon: MessageSquare,
    title: "Digital Notices",
    description:
      "Replace paper flyers with digital notices. Display policy updates, insurance reminders, form requirements, and office announcements on every screen — always current, always professional.",
  },
  {
    icon: Bell,
    title: "Operational Communication",
    description:
      "Share staff schedules, internal announcements, compliance reminders, and training updates on back-office screens — keeping your team aligned without email overload.",
  },
  {
    icon: Settings,
    title: "Easy, No-Code Management",
    description:
      "Your office manager can update any screen in minutes. No design skills, no IT support needed — just log in, make changes, and publish.",
  },
];

const Clinics = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={clinicReception}
              alt="Modern clinic reception with digital display"
              className="w-full h-full object-cover"
              width={1280}
              height={800}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/50" />
          </div>
          <div className="container relative py-24 md:py-36">
            <div className="max-w-2xl space-y-6">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Clinics & Practices
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Smarter screens for{" "}
                <span className="text-primary">modern clinics.</span>
              </h1>
              <p className="text-lg text-white/80 max-w-xl">
                From single-provider practices to multi-location clinic groups,
                MedScreen helps you engage patients, promote services, and
                streamline communication — all from one simple dashboard.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                <Button size="lg" className="px-8 text-base gap-2" asChild>
                  <Link to={PUBLIC_CTA_PATHS.startFreeTrial}>
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 text-base border-white/30 text-white hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <Link to={PUBLIC_CTA_PATHS.requestDemo}>Request a Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-secondary">
          <div className="container py-10 md:py-14">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-extrabold text-primary">
                    {s.value}
                  </div>
                  <div className="text-sm text-secondary-foreground/70 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spotlight sections */}
        {spotlights.map((item, i) => {
          const isReversed = i % 2 !== 0;
          return (
            <section
              key={item.title}
              className={`py-20 md:py-28 ${i % 2 === 0 ? "bg-surface" : ""}`}
            >
              <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div className={isReversed ? "lg:order-2" : ""}>
                    <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                        width={1280}
                        height={800}
                      />
                    </div>
                  </div>
                  <div className={`space-y-6 ${isReversed ? "lg:order-1" : ""}`}>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      {item.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="space-y-3">
                      {item.bullets.map((b) => (
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

        {/* Additional features grid */}
        <section className="py-20 md:py-28 bg-surface">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                Also Included
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Everything a modern clinic needs
              </h2>
              <p className="text-lg text-muted-foreground">
                Simple tools that keep your practice running smoothly — on screen and behind the scenes.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
              {additionalFeatures.map((f) => (
                <div
                  key={f.title}
                  className="group rounded-xl border bg-card p-6 md:p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                    <f.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={clinicWelcome}
                alt="Clinic welcome screen"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-primary/70" />
              <div className="relative z-10 px-6 py-16 md:px-16 md:py-20 text-center">
                <div className="max-w-2xl mx-auto space-y-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                    Ready to elevate your clinic experience?
                  </h2>
                  <p className="text-lg text-white/80 max-w-xl mx-auto">
                    Join hundreds of clinics already using MedScreen to engage patients and streamline operations.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                    <Button
                      size="lg"
                      className="px-8 text-base gap-2 bg-white text-primary hover:bg-white/90"
                      asChild
                    >
                      <Link to={PUBLIC_CTA_PATHS.startFreeTrial}>
                        Start Free Trial
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-8 text-base border-white/30 text-white hover:bg-white/10 hover:text-white"
                      asChild
                    >
                      <Link to={PUBLIC_CTA_PATHS.talkToSales}>Talk to Sales</Link>
                    </Button>
                  </div>
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

export default Clinics;
