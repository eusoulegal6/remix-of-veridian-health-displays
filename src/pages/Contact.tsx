import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@medscreen.io" },
  { icon: Phone, label: "Phone", value: "+1 (800) 555-0199" },
  { icon: MapPin, label: "Office", value: "Austin, Texas" },
  { icon: Clock, label: "Hours", value: "Mon – Fri, 8am – 6pm CT" },
];

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
          <div className="container relative text-center max-w-3xl mx-auto space-y-5">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Let's talk about your screens
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Whether you're exploring digital signage for the first time or
              ready to scale across locations — we're here to help.
            </p>
          </div>
        </section>

        {/* Form + info */}
        <section className="pb-20 md:pb-28 -mt-4">
          <div className="container">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 max-w-5xl mx-auto">
              {/* Form */}
              <div className="lg:col-span-3 rounded-2xl border bg-card p-6 md:p-10">
                <h2 className="text-xl font-bold text-foreground mb-1">
                  Send us a message
                </h2>
                <p className="text-sm text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you
                  within one business day.
                </p>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" placeholder="Smith" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Work email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane@clinic.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Organization</Label>
                    <Input
                      id="company"
                      placeholder="Clinic or hospital name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>I'm interested in</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">
                          Requesting a demo
                        </SelectItem>
                        <SelectItem value="pricing">
                          Pricing information
                        </SelectItem>
                        <SelectItem value="partnership">
                          Partnership opportunities
                        </SelectItem>
                        <SelectItem value="support">
                          Technical support
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your facility and what you're looking for..."
                      rows={5}
                    />
                  </div>

                  <Button size="lg" className="w-full gap-2 text-base">
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              </div>

              {/* Sidebar info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-1">
                    Get in touch
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Prefer to reach out directly? Here's how to find us.
                  </p>
                </div>

                <div className="space-y-5">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {item.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Demo CTA card */}
                <div className="rounded-xl border bg-primary/5 p-6 space-y-3">
                  <h3 className="text-base font-semibold text-foreground">
                    Want a live walkthrough?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Book a personalized demo and see how MedScreen can
                    transform your facility's digital displays in under 30
                    minutes.
                  </p>
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href="#">
                      Request a Demo
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
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

export default Contact;
