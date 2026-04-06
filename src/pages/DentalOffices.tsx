import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Image,
  Bell,
  Hand,
  Heart,
  Award,
  Palette,
} from "lucide-react";
import { PUBLIC_CTA_PATHS } from "@/routes/paths";

import dentalOffice from "@/assets/dental-office-display.jpg";
import dentalTreatment from "@/assets/dental-treatment-screen.jpg";
import dentalBeforeAfter from "@/assets/dental-before-after.jpg";
import dentalKids from "@/assets/dental-kids-screen.jpg";
import clinicWelcome from "@/assets/clinic-welcome-screen.jpg";

const stats = [
  { value: "35%", label: "More treatment acceptance" },
  { value: "50%", label: "Less perceived wait time" },
  { value: "3x", label: "Service awareness lift" },
  { value: "100%", label: "Brand consistency" },
];

const spotlights = [
  {
    title: "Waiting Room Education",
    icon: GraduationCap,
    image: dentalOffice,
    description:
      "Turn idle wait time into informed decisions. Display oral health tips, procedure explanations, and hygiene best practices — helping patients understand the value of their care before they sit in the chair.",
    bullets: [
      "Oral hygiene tips and brushing guides",
      "Procedure explainers (crowns, implants, whitening)",
      "Insurance and payment information",
      "Post-procedure care instructions",
    ],
  },
  {
    title: "Before & After Showcases",
    icon: Image,
    image: dentalBeforeAfter,
    description:
      "Nothing sells cosmetic dentistry like results. Rotate stunning before-and-after galleries on your waiting room screens — building patient confidence and driving treatment inquiries naturally.",
    bullets: [
      "Rotating smile transformation galleries",
      "Treatment-specific result showcases",
      "Patient testimonial highlights",
      "Automatic content rotation schedules",
    ],
  },
  {
    title: "Treatment & Service Promotion",
    icon: Sparkles,
    image: dentalTreatment,
    description:
      "Promote whitening specials, Invisalign consultations, pediatric programs, and seasonal offers right where patients are already looking. Turn every visit into an opportunity.",
    bullets: [
      "Highlight new and premium services",
      "Seasonal promotions and limited offers",
      "Loyalty and referral program awareness",
      "New-patient welcome specials",
    ],
  },
  {
    title: "Welcome & Trust-Building",
    icon: Hand,
    image: clinicWelcome,
    description:
      "First impressions matter. Greet patients with a branded welcome screen, introduce your team, showcase certifications, and display community involvement — building trust from the moment they walk in.",
    bullets: [
      "Branded welcome messages",
      "Meet-the-team provider profiles",
      "Certifications and awards display",
      "Community involvement highlights",
    ],
  },
  {
    title: "Family & Pediatric Content",
    icon: Heart,
    image: dentalKids,
    description:
      "Make visits fun for young patients. Display kid-friendly dental hygiene tips, animated content, and calming visuals that keep children engaged and reduce dental anxiety for the whole family.",
    bullets: [
      "Animated dental education for kids",
      "Fun brushing and flossing guides",
      "Calming visuals to reduce anxiety",
      "Age-appropriate health content",
    ],
  },
];

const additionalFeatures = [
  {
    icon: Bell,
    title: "Office Announcements",
    description:
      "Share holiday hours, schedule changes, new provider introductions, and policy updates digitally — replacing outdated paper flyers with always-current displays.",
  },
  {
    icon: Palette,
    title: "Branding & Patient Experience",
    description:
      "Customize every screen to match your practice's brand. Colors, logos, and fonts stay consistent, creating a polished, professional atmosphere.",
  },
  {
    icon: Award,
    title: "Reviews & Social Proof",
    description:
      "Display Google reviews, patient testimonials, and satisfaction scores on your screens — reinforcing trust and encouraging referrals.",
  },
];

const DentalOffices = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={dentalTreatment}
              alt="Modern dental treatment room with digital screens"
              className="w-full h-full object-cover"
              width={1280}
              height={800}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/50" />
          </div>
          <div className="container relative py-24 md:py-36">
            <div className="max-w-2xl space-y-6">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Dental Offices
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Digital signage that makes{" "}
                <span className="text-primary">patients smile.</span>
              </h1>
              <p className="text-lg text-white/80 max-w-xl">
                From the waiting room to the treatment chair, MedScreen helps
                dental practices educate patients, promote services, and build
                the kind of trust that keeps them coming back.
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
                More for Your Practice
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Every detail, on brand
              </h2>
              <p className="text-lg text-muted-foreground">
                MedScreen handles the operational and branding details so you
                can focus on patient care.
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
                src={dentalBeforeAfter}
                alt="Dental office with before and after display"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-primary/70" />
              <div className="relative z-10 px-6 py-16 md:px-16 md:py-20 text-center">
                <div className="max-w-2xl mx-auto space-y-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                    Ready to upgrade your dental practice?
                  </h2>
                  <p className="text-lg text-white/80 max-w-xl mx-auto">
                    See how MedScreen helps dental offices boost treatment
                    acceptance and create a premium patient experience.
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

export default DentalOffices;
