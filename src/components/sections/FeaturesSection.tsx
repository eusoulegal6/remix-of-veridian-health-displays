import { Monitor, Layout, Cloud, Smartphone, Layers, RefreshCw } from "lucide-react";
import staffImg from "@/assets/staff-communication-screen.jpg";

const features = [
  {
    icon: Layout,
    title: "Drag-and-Drop Editor",
    description: "Design stunning screen layouts with our intuitive visual editor. No design experience needed.",
  },
  {
    icon: Cloud,
    title: "Cloud-Based Platform",
    description: "Manage all your screens from anywhere. Updates push instantly to every connected display.",
  },
  {
    icon: Monitor,
    title: "Multi-Screen Support",
    description: "Run different content on different screens simultaneously. Waiting room, lobby, hallway — all managed centrally.",
  },
  {
    icon: Smartphone,
    title: "Remote Control",
    description: "Turn screens on, off, or update content right from your phone. Full control from any device.",
  },
  {
    icon: Layers,
    title: "Content Library",
    description: "Access a curated library of medical-grade templates, health tips, and seasonal content packs.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Updates",
    description: "Push emergency alerts, schedule changes, or announcements to all screens in seconds.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src={staffImg}
                alt="Staff communication digital display in a hospital break room"
                className="w-full h-auto object-cover"
                loading="lazy"
                width={1280}
                height={800}
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-4 right-2 md:-bottom-6 md:-right-6 bg-card border rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-primary">6</div>
              <div className="text-xs text-muted-foreground">Powerful tools</div>
            </div>
          </div>

          {/* Features list */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful tools, built for healthcare teams
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              From content creation to screen management — MedScreen gives you total control with zero complexity.
            </p>

            <div className="grid gap-5">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 rounded-xl border bg-card p-4 hover:shadow-md hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
