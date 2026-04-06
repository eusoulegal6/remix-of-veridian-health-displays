import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What hardware do I need to run MedScreen?",
    answer: "MedScreen works with most commercial displays and media players. We support Android-based players, Amazon Fire TV Stick, and browser-based setups. Our team can recommend the best hardware for your facility size and budget.",
  },
  {
    question: "Is MedScreen HIPAA compliant?",
    answer: "Yes. MedScreen is built with healthcare compliance in mind. Our platform never displays or stores protected health information (PHI). All data is encrypted in transit and at rest.",
  },
  {
    question: "Can I manage multiple locations from one account?",
    answer: "Absolutely. MedScreen is designed for multi-location management. You can organize screens by facility, department, or floor — all controlled from a single cloud dashboard.",
  },
  {
    question: "How quickly can I get up and running?",
    answer: "Most facilities are live within 24 hours. Simply connect your displays, log in to your dashboard, choose a template or create your own content, and publish. It's that simple.",
  },
  {
    question: "Do you offer support for healthcare organizations?",
    answer: "Yes. We provide dedicated healthcare support with priority response times, onboarding assistance, and a customer success team that understands the unique needs of medical facilities.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-surface">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about MedScreen for your healthcare facility.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b">
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
