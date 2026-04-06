import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Megaphone,
  Map,
  Users,
  Clock,
  GraduationCap,
  AlertTriangle,
  UtensilsCrossed,
  Radio,
} from "lucide-react";
import { PUBLIC_CTA_PATHS } from "@/routes/paths";

import heroImg from "@/assets/hero-signage-overview.jpg";
import hallwayImg from "@/assets/hospital-hallway-display.jpg";
import emergencyImg from "@/assets/hospital-emergency-display.jpg";
import cafeteriaImg from "@/assets/hospital-cafeteria-display.jpg";
import wayfindingImg from "@/assets/hospital-wayfinding-kiosk.jpg";
import staffImg from "@/assets/staff-communication-screen.jpg";
import waitingImg from "@/assets/waiting-room-screen.jpg";

const stats = [
  { value: "62%", label: "Reduction in perceived wait times" },
  { value: "3x", label: "Faster emergency communication" },
  { value: "40%", label: "Fewer front-desk inquiries" },
  { value: "99.9%", label: "Platform uptime" },
];

const spotlights = [
  {
    title: "Patient Communication",
    icon: MessageSquare,
    image: waitingImg,
    description:
      "Keep patients informed at every touchpoint. Display wait times, appointment status, check-in instructions, and facility updates on screens throughout your hospital — reducing anxiety and front-desk congestion.",
    bullets: [
      "Real-time queue and wait-time displays",
      "Automated check-in instructions",
      "Multilingual support for diverse populations",
      "Discharge and aftercare information screens",
    ],
  },
  {
    title: "Wayfinding & Navigation",
    icon: Map,
    image: wayfindingImg,
    description:
      "Help patients, visitors, and staff navigate complex hospital campuses effortlessly. Interactive and static digital directories guide people to the right department, floor, or room — every time.",
    bullets: [
      "Interactive floor maps and directories",
      "Department-level turn-by-turn guidance",
      "Multi-floor and multi-building support",
      "Instant updates when departments relocate",
    ],
  },
  {
    title: "Emergency Notices",
    icon: AlertTriangle,
    image: emergencyImg,
    description:
      "When seconds count, MedScreen delivers. Override all screens instantly with emergency alerts, code announcements, and critical safety messages — ensuring every person in the building is informed immediately.",
    bullets: [
      "One-click emergency broadcast to all screens",
      "Priority override for any active content",
      "Pre-built alert templates for common codes",
      "Automatic logging for compliance records",
    ],
  },
  {
    title: "Cafeteria & Internal Notices",
    icon: UtensilsCrossed,
    image: cafeteriaImg,
    description:
      "Digital menu boards, daily specials, nutritional information, and internal announcements — all managed from one dashboard. Keep staff and visitors informed in common areas across the facility.",
    bullets: [
      "Dynamic digital menu boards",
      "Daily specials and nutritional info",
      "HR announcements and policy updates",
      "Event schedules and recognition boards",
    ],
  },
  {
    title: "Staff Communication",
    icon: Radio,
    image: staffImg,
    description:
      "Keep your team aligned with dedicated staff-facing screens. Share shift schedules, training updates, safety reminders, and operational metrics — without relying on email or paper notices.",
    bullets: [
      "Shift schedules and staffing updates",
      "Training and compliance reminders",
      "Safety protocols and procedural changes",
      "Performance dashboards and recognition",
    ],
  },
];

const additionalUseCases = [
  {
    icon: Megaphone,
    title: "Department Announcements",
    description:
      "Broadcast department-specific updates, policy changes, and operational news to the right screens in the right areas — automatically.",
  },
  {
    icon: Users,
    title: "Visitor Information",
    description:
      "Display visiting hours, parking information, Wi-Fi instructions, and facility amenities. Make every visitor feel welcome and informed.",
  },
  {
    icon: Clock,
    title: "Queue Management",
    description:
      "Show real-time queue positions and estimated wait times in waiting areas, reducing patient anxiety and front-desk questions.",
  },
  {
    icon: GraduationCap,
    title: "Health Education",
    description:
      "Deliver condition-specific education, preventive care tips, and wellness content to patients while they wait — improving health literacy.",
  },
];

const Hospitals = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImg}
              alt="Hospital lobby with multiple digital signage screens"
              className="w-full h-full object-cover"
              width={1440}
              height={960}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/50" />
          </div>
          <div className="container relative py-24 md:py-36">
            <div className="max-w-2xl space-y-6">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Hospitals
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Digital signage built for{" "}
                <span className="text-primary">hospital scale.</span>
              </h1>
              <p className="text-lg text-white/80 max-w-xl">
                From the lobby to the OR lounge, MedScreen gives hospital teams
                the tools to communicate clearly, navigate efficiently, and
                respond instantly — on every screen, across every floor.
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

        {/* Stats bar */}
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

        {/* Full-width image band */}
        <section className="relative h-48 md:h-72 lg:h-80 overflow-hidden">
          <img
            src={hallwayImg}
            alt="Hospital hallway with digital wayfinding display"
            className="w-full h-full object-cover"
            loading="lazy"
            width={1280}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
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
                        <li
                          key={b}
                          className="flex items-start gap-3 text-sm text-foreground"
                        >
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

        {/* Additional use-cases grid */}
        <section className="py-20 md:py-28 bg-surface">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                More Hospital Solutions
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Every corner of your hospital, connected
              </h2>
              <p className="text-lg text-muted-foreground">
                MedScreen adapts to every department, hallway, and waiting area
                in your facility.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {additionalUseCases.map((uc) => (
                <div
                  key={uc.title}
                  className="group rounded-xl border bg-card p-6 md:p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                    <uc.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {uc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {uc.description}
                  </p>
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
                src={emergencyImg}
                alt="Hospital emergency department digital display"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-primary/70" />
              <div className="relative z-10 px-6 py-16 md:px-16 md:py-20 text-center">
                <div className="max-w-2xl mx-auto space-y-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                    Ready to modernize your hospital's communication?
                  </h2>
                  <p className="text-lg text-white/80 max-w-xl mx-auto">
                    See how MedScreen powers digital displays at hospitals
                    nationwide. Book a personalized demo today.
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

export default Hospitals;
