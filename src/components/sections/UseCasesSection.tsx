import hospitalImg from "@/assets/hospital-hallway-display.jpg";
import clinicImg from "@/assets/clinic-reception-screen.jpg";
import dentalImg from "@/assets/dental-office-display.jpg";
import waitingImg from "@/assets/waiting-room-screen.jpg";

const useCases = [
  {
    image: hospitalImg,
    title: "Hospitals",
    description: "Wayfinding, departmental announcements, visitor guidelines, and real-time wait time displays across large campuses.",
    items: ["Wayfinding directories", "Emergency alerts", "Department updates"],
  },
  {
    image: clinicImg,
    title: "Clinics & Practices",
    description: "Engage patients with health education, promote services, and display check-in instructions in waiting areas.",
    items: ["Health tips & education", "Service promotions", "Queue management"],
  },
  {
    image: dentalImg,
    title: "Dental Offices",
    description: "Showcase before-and-after results, display treatment menus, and keep patients informed while they wait.",
    items: ["Treatment showcases", "Patient education", "Branded content"],
  },
  {
    image: waitingImg,
    title: "Waiting Rooms",
    description: "Create welcoming, calming environments with educational content and appointment information displays.",
    items: ["Health education", "Appointment updates", "Calming visuals"],
  },
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-20 md:py-28 bg-surface">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Use Cases</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for every healthcare setting
          </h2>
          <p className="text-lg text-muted-foreground">
            From large hospital networks to single-location dental practices, MedScreen adapts to your needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="group rounded-xl border bg-card overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={useCase.image}
                  alt={`${useCase.title} digital signage display`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={1280}
                  height={800}
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
