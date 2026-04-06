import { ShieldCheck, Server, HeadphonesIcon, Award } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    label: "HIPAA-Compliant Infrastructure",
  },
  {
    icon: Server,
    label: "99.9% Uptime SLA",
  },
  {
    icon: HeadphonesIcon,
    label: "Dedicated Healthcare Support",
  },
  {
    icon: Award,
    label: "SOC 2 Type II Certified",
  },
];

const stats = [
  { value: "500+", label: "Healthcare Facilities" },
  { value: "4,200+", label: "Active Screens" },
  { value: "99.9%", label: "Platform Uptime" },
  { value: "24/7", label: "Support Coverage" },
];

const TrustSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Trusted & Secure</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Enterprise-grade security, healthcare-grade care
          </h2>
          <p className="text-lg text-muted-foreground">
            We take compliance and reliability as seriously as you take patient care.
          </p>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center gap-3 rounded-xl border bg-card p-5 md:p-6"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground leading-snug">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="rounded-2xl bg-secondary text-secondary-foreground p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-primary">{stat.value}</div>
                <div className="text-sm text-secondary-foreground/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
