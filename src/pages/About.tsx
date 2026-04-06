import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Heart,
  Shield,
  Lightbulb,
  Eye,
  Target,
  Sparkles,
} from "lucide-react";

import heroImg from "@/assets/hero-signage-overview.jpg";
import waitingCalm from "@/assets/waiting-room-calm.jpg";

const values = [
  {
    icon: Heart,
    title: "Healthcare First",
    description:
      "Every feature, every template, every decision is made with healthcare environments in mind. We don't build generic signage software — we build for clinics, hospitals, and the people they serve.",
  },
  {
    icon: Shield,
    title: "Trust & Compliance",
    description:
      "Patient trust is non-negotiable. MedScreen is built with HIPAA awareness, data security, and privacy at its core — so you can communicate confidently without compromising compliance.",
  },
  {
    icon: Lightbulb,
    title: "Radical Simplicity",
    description:
      "Healthcare teams are busy. Our platform is designed so that anyone — from office managers to marketing coordinators — can manage screens in minutes, not hours. No IT degree required.",
  },
  {
    icon: Eye,
    title: "Thoughtful Design",
    description:
      "Screens are part of your patient experience. We obsess over clean layouts, readable typography, and calming visuals that reflect the professionalism of your facility.",
  },
];

const stats = [
  { value: "500+", label: "Healthcare facilities" },
  { value: "4,200+", label: "Active screens" },
  { value: "12M+", label: "Patient impressions / month" },
  { value: "99.9%", label: "Platform uptime" },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImg}
              alt="Hospital lobby with digital signage"
              className="w-full h-full object-cover"
              width={1440}
              height={960}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/50" />
          </div>
          <div className="container relative py-24 md:py-36">
            <div className="max-w-2xl space-y-6">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                About MedScreen
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Smarter screens for{" "}
                <span className="text-primary">better care.</span>
              </h1>
              <p className="text-lg text-white/80 max-w-xl">
                We started MedScreen with a simple belief: the way healthcare
                facilities communicate with patients and staff should be as
                modern as the care they provide.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider">
              <Target className="w-4 h-4" />
              Our Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-snug">
              To make healthcare communication clear, calm, and effortless —
              on every screen, in every facility.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that informed patients are healthier patients. That
              well-communicated staff are more effective teams. And that every
              waiting room, hallway, and lobby deserves more than a muted TV
              playing cable news.
            </p>
          </div>
        </section>

        {/* Why we exist — image + text */}
        <section className="py-20 md:py-28 bg-surface">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <img
                  src={waitingCalm}
                  alt="Calm waiting room with digital display"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width={1280}
                  height={800}
                />
              </div>
              <div className="space-y-6">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Why We Exist
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Medical communication deserves better
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Walk into most healthcare facilities and you'll see the same
                    thing: paper flyers taped to walls, outdated posters, and TVs
                    playing content that has nothing to do with patient care.
                  </p>
                  <p>
                    Patients sit in waiting rooms with no idea how long they'll
                    wait. Staff rely on email chains and bulletin boards to share
                    updates. Important announcements get lost in the noise.
                  </p>
                  <p>
                    We built MedScreen to fix this. A single platform that gives
                    healthcare teams full control over every screen in their
                    facility — delivering the right message, to the right
                    audience, at the right time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product philosophy */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4" />
                Our Philosophy
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What we believe in
              </h2>
              <p className="text-lg text-muted-foreground">
                These principles guide every product decision, every feature,
                and every interaction we have with healthcare teams.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="group rounded-xl border bg-card p-6 md:p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-secondary">
          <div className="container py-12 md:py-16">
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

        {/* Bottom CTA */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="rounded-2xl bg-gradient-to-br from-primary to-accent overflow-hidden px-6 py-16 md:px-16 md:py-20 text-center relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Join us in transforming healthcare communication
                </h2>
                <p className="text-lg text-white/80 max-w-xl mx-auto">
                  See why hundreds of healthcare facilities trust MedScreen to
                  power their digital displays.
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
                    <a href="/contact">Talk to Sales</a>
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

export default About;
