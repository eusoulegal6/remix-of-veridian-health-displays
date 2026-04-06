import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const categories = [
  {
    title: "About MedScreen",
    questions: [
      {
        q: "What is MedScreen?",
        a: "MedScreen is a cloud-based digital signage platform built specifically for healthcare. It lets hospitals, clinics, dental offices, and other medical facilities manage on-screen content — from health education and wayfinding to announcements and promotions — all from a single, easy-to-use dashboard.",
      },
      {
        q: "Who is MedScreen for?",
        a: "MedScreen is designed for any healthcare organization that uses screens to communicate with patients, visitors, or staff. That includes hospitals, private clinics, multi-location practices, dental offices, pediatric centers, urgent care facilities, and specialty practices of all sizes.",
      },
      {
        q: "Do I need technical skills to use MedScreen?",
        a: "Not at all. MedScreen is designed for office managers, marketing teams, and administrative staff — not IT departments. The drag-and-drop editor, pre-built templates, and intuitive scheduling tools mean anyone on your team can manage content without technical experience.",
      },
      {
        q: "Is MedScreen HIPAA-compliant?",
        a: "Yes. MedScreen is built with healthcare compliance in mind. We never display or store patient data on screens. Our Enterprise plan includes a signed HIPAA Business Associate Agreement (BAA), and all data is encrypted in transit and at rest.",
      },
    ],
  },
  {
    title: "Screens & Hardware",
    questions: [
      {
        q: "What kinds of screens does MedScreen support?",
        a: "MedScreen works with virtually any commercial display, smart TV, or digital signage player. Whether you use wall-mounted TVs, freestanding kiosks, waiting room monitors, or treatment room displays, MedScreen can power them all. We support Android media players, Amazon Fire TV Stick, and most commercial signage hardware.",
      },
      {
        q: "Do I need to buy special hardware?",
        a: "No. MedScreen works with the screens and media players you likely already have. If you need hardware recommendations, our team can suggest cost-effective options that work seamlessly with the platform.",
      },
      {
        q: "Can I use different screen sizes and orientations?",
        a: "Yes. MedScreen supports both landscape and portrait orientations, and content automatically adapts to different screen resolutions. You can run different layouts on different screens — all managed from the same dashboard.",
      },
    ],
  },
  {
    title: "Content & Updates",
    questions: [
      {
        q: "How is content updated?",
        a: "Everything is managed through the MedScreen cloud dashboard. You can upload media, design layouts, schedule content, and push updates to any screen — from anywhere, on any device. Changes appear on your screens within seconds.",
      },
      {
        q: "How quickly can I change what's on a screen?",
        a: "Instantly. Content updates push to connected screens in real time. Whether you're swapping a promotion, posting an announcement, or broadcasting an emergency alert, changes take effect within seconds of publishing.",
      },
      {
        q: "What types of content can I display?",
        a: "MedScreen supports images, videos, PDFs, HTML content, web pages, and dynamic data feeds. You can display anything from health education slides and promotional videos to live queue information and social media feeds.",
      },
      {
        q: "Do you provide ready-made content or templates?",
        a: "Yes. MedScreen includes a library of professionally designed, healthcare-specific templates — covering health tips, seasonal campaigns, service promotions, wayfinding layouts, and more. You can customize any template to match your brand.",
      },
    ],
  },
  {
    title: "Use Cases & Locations",
    questions: [
      {
        q: "Does MedScreen work for multi-location practices?",
        a: "Absolutely. MedScreen is built for multi-location management. You can control screens across all your locations from a single dashboard, push location-specific content, or deploy the same branding everywhere — whatever your workflow requires.",
      },
      {
        q: "Can I use MedScreen in hospital settings?",
        a: "Yes. MedScreen powers digital signage in hospital lobbies, hallways, emergency departments, cafeterias, staff break rooms, and waiting areas. It supports wayfinding, department announcements, emergency alerts, and more.",
      },
      {
        q: "Is MedScreen suitable for dental offices?",
        a: "Definitely. Dental practices use MedScreen to display treatment showcases, before-and-after galleries, oral health education, service promotions, and branded welcome screens — turning every patient touchpoint into an opportunity.",
      },
      {
        q: "Can I use it specifically for waiting rooms?",
        a: "Yes — waiting rooms are one of our most popular use cases. MedScreen helps reduce perceived wait times by displaying engaging health content, calming visuals, queue updates, and facility information that keeps patients informed and comfortable.",
      },
    ],
  },
  {
    title: "Pricing & Support",
    questions: [
      {
        q: "Is there a free trial?",
        a: "Yes. Every plan includes a 14-day free trial with full access to all features. No credit card is required to get started.",
      },
      {
        q: "What plans are available?",
        a: "MedScreen offers three plans: Starter (for single-location practices), Professional (for growing and multi-location clinics), and Enterprise (for hospital networks and large organizations). Visit our Pricing page for full details and comparison.",
      },
      {
        q: "What kind of support do you offer?",
        a: "All plans include email support. Professional plans include priority support with faster response times. Enterprise customers receive 24/7 phone and chat support along with a dedicated account manager.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes. Monthly plans can be cancelled at any time with no penalties. Annual plans are billed yearly and can be cancelled before their renewal date. We don't believe in lock-in contracts.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
          <div className="container relative text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Frequently asked questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Everything you need to know about MedScreen — from setup to
              support. Can't find your answer? Reach out to our team.
            </p>
          </div>
        </section>

        {/* FAQ sections */}
        <section className="pb-20 md:pb-28">
          <div className="container max-w-3xl space-y-14">
            {categories.map((cat) => (
              <div key={cat.title}>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-5 pb-3 border-b">
                  {cat.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {cat.questions.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`${cat.title}-${i}`}
                      className="border rounded-xl px-6 bg-card"
                    >
                      <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline py-5">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
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
                  Still have questions?
                </h2>
                <p className="text-lg text-white/80 max-w-xl mx-auto">
                  Our team is here to help. Book a demo or reach out — we'll
                  walk you through everything.
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
                    <a href="/contact">Contact Us</a>
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

export default FAQ;
