import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  GraduationCap,
  Megaphone,
  Sparkles,
  Star,
  Hand,
  Leaf,
  Palette,
} from "lucide-react";
import { PUBLIC_CTA_PATHS } from "@/routes/paths";

import waitingCalm from "@/assets/waiting-room-calm.jpg";
import waitingEdu from "@/assets/waiting-room-education.jpg";
import waitingScreen from "@/assets/waiting-room-screen.jpg";
import clinicReception from "@/assets/clinic-reception-screen.jpg";
import clinicWelcome from "@/assets/clinic-welcome-screen.jpg";

const stats = [
  { value: "62%", label: "Less perceived wait time" },
  { value: "78%", label: "Patients prefer screens over TV" },
  { value: "3x", label: "More health info retention" },
  { value: "45%", label: "Fewer front-desk questions" },
];

const spotlights = [
  {
    title: "Reduce Perceived Wait Time",
    icon: Clock,
    image: waitingCalm,
    description:
      "When patients are engaged, waits feel shorter. MedScreen fills idle minutes with calming visuals, health tips, and facility updates — transforming frustration into a positive, informed experience.",
    bullets: [
      "Calming nature visuals and ambient content",
      "Rotating health and wellness tips",
      "Real-time wait-time estimates",
      "Engaging content that makes time pass faster",
    ],
  },
  {
    title: "Health Education Content",
    icon: GraduationCap,
    image: waitingEdu,
    description:
      "Turn every waiting room into a learning opportunity. Display preventive care tips, condition-specific guides, nutrition advice, and seasonal health information — helping patients arrive at their appointment better informed.",
    bullets: [
      "Curated medical education library",
      "Seasonal health campaigns",
      "Preventive care and wellness tips",
      "Condition and procedure explainers",
    ],
  },
  {
    title: "Announcements & Updates",
    icon: Megaphone,
    image: waitingScreen,
    description:
      "Keep patients in the loop without burdening your front desk. Share schedule changes, new provider introductions, policy updates, and facility news — all automatically displayed on waiting room screens.",
    bullets: [
      "Facility news and schedule updates",
      "New provider introductions",
      "Insurance and billing reminders",
      "Holiday hours and closures",
    ],
  },
  {
    title: "Service & Promotional Content",
    icon: Sparkles,
    image: clinicReception,
    description:
      "Your waiting room is prime marketing space. Promote new services, seasonal offers, wellness programs, and referral incentives to an audience that's already engaged with your practice.",
    bullets: [
      "New service and treatment highlights",
      "Seasonal promotions and offers",
      "Wellness program enrollment",
      "Referral and loyalty programs",
    ],
  },
  {
    title: "Welcome & Branded Displays",
    icon: Hand,
    image: clinicWelcome,
    description:
      "Set the tone from the moment patients walk in. Branded welcome screens, provider introductions, and facility highlights create a polished, professional atmosphere that builds confidence and trust.",
    bullets: [
      "Custom branded welcome messages",
      "Meet-the-team provider profiles",
      "Facility certifications and awards",
      "Community involvement showcases",
    ],
  },
];

const additionalFeatures = [
  {
    icon: Leaf,
    title: "Calming Communication",
    description:
      "Replace anxious silence with soothing content. Nature scenes, ambient visuals, and gentle health reminders create a calm, reassuring environment for patients of all ages.",
  },
  {
    icon: Palette,
    title: "On-Brand Experience",
    description:
      "Every screen reflects your practice's identity. Custom colors, logos, and messaging ensure a cohesive, premium look across every waiting area and location.",
  },
  {
    icon: Star,
    title: "Patient Satisfaction",
    description:
      "Informed, engaged patients are happier patients. Digital displays consistently correlate with higher satisfaction scores and more positive online reviews.",
  },
];

const WaitingRooms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={waitingCalm}
              alt="Serene medical waiting room with digital display"
              className="w-full h-full object-cover"
              width={1280}
              height={800}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/50" />
          </div>
          <div className="container relative py-24 md:py-36">
            <div className="max-w-2xl space-y-6">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Waiting Rooms
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Turn wait time into{" "}
                <span className="text-primary">well time.</span>
              </h1>
              <p className="text-lg text-white/80 max-w-xl">
                MedScreen transforms waiting rooms from idle spaces into
                engaging, educational, and calming environments — improving
                patient satisfaction and reducing perceived wait times.
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

        {/* Additional grid */}
        <section className="py-20 md:py-28 bg-surface">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                The Bigger Picture
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                More than a screen — a better experience
              </h2>
              <p className="text-lg text-muted-foreground">
                Digital waiting room displays create a ripple effect across
                patient satisfaction, staff efficiency, and practice reputation.
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
                src={waitingEdu}
                alt="Waiting room with health education display"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-primary/70" />
              <div className="relative z-10 px-6 py-16 md:px-16 md:py-20 text-center">
                <div className="max-w-2xl mx-auto space-y-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                    Ready to transform your waiting room?
                  </h2>
                  <p className="text-lg text-white/80 max-w-xl mx-auto">
                    See how MedScreen turns idle wait time into an engaging,
                    educational experience for every patient.
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

export default WaitingRooms;
