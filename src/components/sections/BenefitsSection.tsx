import { Shield, Zap, Eye, Clock, Palette, BarChart3 } from "lucide-react";
import clinicImg from "@/assets/clinic-reception-screen.jpg";

const benefits = [
  {
    icon: Eye,
    title: "Engage Patients",
    description: "Reduce perceived wait times with dynamic, informative content tailored for healthcare environments.",
  },
  {
    icon: Shield,
    title: "HIPAA-Ready",
    description: "Built with healthcare compliance in mind. No patient data on screen — ever.",
  },
  {
    icon: Zap,
    title: "Effortless Management",
    description: "Update content across every display from a single cloud dashboard. No technical skills required.",
  },
  {
    icon: Clock,
    title: "Smart Scheduling",
    description: "Automate what plays and when. Set content schedules by time of day, department, or screen location.",
  },
  {
    icon: Palette,
    title: "Beautiful Templates",
    description: "Professional, healthcare-specific templates designed to match your facility's branding.",
  },
  {
    icon: BarChart3,
    title: "Usage Analytics",
    description: "Track screen uptime, content performance, and audience engagement across all your locations.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container">
        {/* Top: full-width showcase image */}
        <div className="rounded-2xl overflow-hidden mb-16 shadow-xl shadow-primary/5">
          <img
            src={clinicImg}
            alt="Modern clinic reception with digital check-in screen"
            className="w-full h-48 md:h-72 lg:h-80 object-cover"
            loading="lazy"
            width={1280}
            height={800}
          />
        </div>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why MedScreen</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything your facility needs, on every screen
          </h2>
          <p className="text-lg text-muted-foreground">
            Purpose-built for healthcare. Designed for simplicity. Trusted by clinics nationwide.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-xl border bg-card p-6 md:p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
