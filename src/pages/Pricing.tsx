import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  X,
  HelpCircle,
  Monitor,
  Building2,
  Rocket,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    icon: Monitor,
    description: "For single-location practices getting started with digital signage.",
    monthlyPrice: 49,
    yearlyPrice: 39,
    cta: "Start",
    popular: false,
    features: [
      "Up to 3 screens",
      "Cloud-based dashboard",
      "50 GB media storage",
      "Basic templates",
      "Email support",
      "Content scheduling",
      "Remote screen control",
    ],
  },
  {
    name: "Professional",
    icon: Building2,
    description: "For growing practices and multi-location clinics that need more power.",
    monthlyPrice: 99,
    yearlyPrice: 79,
    cta: "Start",
    popular: true,
    features: [
      "Up to 15 screens",
      "Multi-location management",
      "200 GB media storage",
      "Premium template library",
      "Priority support",
      "Advanced scheduling & playlists",
      "Screen grouping",
      "Usage analytics",
      "Custom branding",
    ],
  },
  {
    name: "Enterprise",
    icon: Rocket,
    description: "For hospital networks and large organizations with complex requirements.",
    monthlyPrice: null,
    yearlyPrice: null,
    cta: "Talk to Sales",
    popular: false,
    features: [
      "Unlimited screens",
      "Dedicated account manager",
      "Unlimited storage",
      "Custom template design",
      "24/7 phone & chat support",
      "API access & integrations",
      "SSO & advanced security",
      "SLA guarantee (99.9%)",
      "On-site onboarding",
      "HIPAA BAA included",
    ],
  },
];

const comparisonRows = [
  { feature: "Screens included", starter: "Up to 3", pro: "Up to 15", enterprise: "Unlimited" },
  { feature: "Media storage", starter: "50 GB", pro: "200 GB", enterprise: "Unlimited" },
  { feature: "Locations", starter: "1", pro: "Up to 5", enterprise: "Unlimited" },
  { feature: "Content scheduling", starter: true, pro: true, enterprise: true },
  { feature: "Remote screen control", starter: true, pro: true, enterprise: true },
  { feature: "Playlists", starter: false, pro: true, enterprise: true },
  { feature: "Screen grouping", starter: false, pro: true, enterprise: true },
  { feature: "Usage analytics", starter: false, pro: true, enterprise: true },
  { feature: "Custom branding", starter: false, pro: true, enterprise: true },
  { feature: "Premium templates", starter: false, pro: true, enterprise: true },
  { feature: "API access", starter: false, pro: false, enterprise: true },
  { feature: "SSO & security", starter: false, pro: false, enterprise: true },
  { feature: "HIPAA BAA", starter: false, pro: false, enterprise: true },
  { feature: "Dedicated account manager", starter: false, pro: false, enterprise: true },
  { feature: "SLA guarantee", starter: false, pro: false, enterprise: "99.9%" },
  { feature: "Support", starter: "Email", pro: "Priority", enterprise: "24/7 Phone & Chat" },
];

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes — every plan includes a 14-day free trial with full access to all features. No credit card required to start.",
  },
  {
    q: "Can I change plans later?",
    a: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "What happens if I need more screens?",
    a: "You can add additional screens to any plan for a small per-screen fee, or upgrade to a higher tier for better value.",
  },
  {
    q: "Do you offer discounts for annual billing?",
    a: "Yes — annual plans save you 20% compared to monthly billing. The discount is applied automatically when you choose yearly.",
  },
  {
    q: "Is there a contract or commitment?",
    a: "No long-term contracts. Monthly plans can be cancelled anytime. Annual plans are billed yearly but can be cancelled before renewal.",
  },
  {
    q: "Do you sign a HIPAA Business Associate Agreement?",
    a: "Yes — our Enterprise plan includes a signed HIPAA BAA. For Starter and Professional plans, please contact sales to discuss compliance needs.",
  },
];

const CellValue = ({ value }: { value: string | boolean }) => {
  if (value === true) return <Check className="w-4 h-4 text-primary mx-auto" />;
  if (value === false) return <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />;
  return <span className="text-sm text-foreground">{value}</span>;
};

const Pricing = () => {
  const [yearly, setYearly] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
          <div className="container relative text-center max-w-3xl mx-auto space-y-6">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              Pricing
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Simple, transparent pricing
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              No hidden fees. No surprise charges. Pick the plan that fits your
              facility and start transforming your screens today.
            </p>

            {/* Billing toggle */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <span
                className={`text-sm font-medium ${!yearly ? "text-foreground" : "text-muted-foreground"}`}
              >
                Monthly
              </span>
              <button
                onClick={() => setYearly(!yearly)}
                className={`relative w-12 h-6 rounded-full transition-colors ${yearly ? "bg-primary" : "bg-muted"}`}
                aria-label="Toggle billing period"
              >
                <div
                  className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${yearly ? "translate-x-6" : "translate-x-0.5"}`}
                />
              </button>
              <span
                className={`text-sm font-medium ${yearly ? "text-foreground" : "text-muted-foreground"}`}
              >
                Yearly
              </span>
              {yearly && (
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Plan cards */}
        <section className="pb-20 md:pb-28">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl border p-6 md:p-8 flex flex-col ${
                    plan.popular
                      ? "border-primary shadow-xl shadow-primary/10 bg-card"
                      : "bg-card"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <plan.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                  </div>

                  <div className="mb-6">
                    {plan.monthlyPrice !== null ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-foreground">
                          ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          / screen / mo
                        </span>
                      </div>
                    ) : (
                      <div className="text-4xl font-extrabold text-foreground">
                        Custom
                      </div>
                    )}
                    {plan.monthlyPrice !== null && yearly && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Billed annually
                      </p>
                    )}
                  </div>

                  <Button
                    size="lg"
                    className={`w-full gap-2 mb-6 ${
                      plan.popular ? "" : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    }`}
                    variant={plan.popular ? "default" : "secondary"}
                    asChild
                  >
                    <a href="#">
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>

                  <ul className="space-y-3 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-20 md:py-28 bg-surface">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Compare plans
              </h2>
              <p className="text-lg text-muted-foreground">
                See exactly what's included in each plan at a glance.
              </p>
            </div>

            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b">
                    <th className="py-4 pr-4 text-sm font-semibold text-foreground w-2/5">
                      Feature
                    </th>
                    <th className="py-4 px-4 text-sm font-semibold text-foreground text-center w-1/5">
                      Starter
                    </th>
                    <th className="py-4 px-4 text-sm font-semibold text-primary text-center w-1/5">
                      Professional
                    </th>
                    <th className="py-4 pl-4 text-sm font-semibold text-foreground text-center w-1/5">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="border-b border-border/50">
                      <td className="py-3.5 pr-4 text-sm text-foreground">
                        {row.feature}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <CellValue value={row.starter} />
                      </td>
                      <td className="py-3.5 px-4 text-center bg-primary/[0.03]">
                        <CellValue value={row.pro} />
                      </td>
                      <td className="py-3.5 pl-4 text-center">
                        <CellValue value={row.enterprise} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                <HelpCircle className="w-4 h-4" />
                Pricing FAQ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Common questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border rounded-xl px-6 bg-card"
                >
                  <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
                  Start your 14-day free trial
                </h2>
                <p className="text-lg text-white/80 max-w-xl mx-auto">
                  No credit card required. Full access to all features. See why
                  hundreds of healthcare facilities trust MedScreen.
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
                    <a href="#">Talk to Sales</a>
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

export default Pricing;
