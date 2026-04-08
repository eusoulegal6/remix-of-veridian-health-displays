import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLocation, useSearchParams } from "react-router-dom";
import { z } from "zod";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowRight,
  Clock,
  LoaderCircle,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  CONTACT_INTENT_HEADLINES,
  CONTACT_INTENT_OPTIONS,
  CONTACT_INTENTS,
  type ContactLead,
  buildContactMailtoHref,
  CONTACT_FORM_ID,
  createContactMessageTemplate,
  createContactSubmissionFields,
  getContactEmail,
  getContactEndpoint,
  hasContactEndpoint,
  resolveContactIntent,
  scrollToContactForm,
} from "@/lib/contact-funnel";

const contactSchema = z.object({
  firstName: z.string().trim().min(2, "Enter your first name."),
  lastName: z.string().trim().min(2, "Enter your last name."),
  email: z.string().trim().email("Enter a valid work email."),
  company: z.string().trim().min(2, "Enter your organization name."),
  intent: z.enum([
    CONTACT_INTENTS.trial,
    CONTACT_INTENTS.demo,
    CONTACT_INTENTS.pricing,
    CONTACT_INTENTS.sales,
    CONTACT_INTENTS.partnership,
    CONTACT_INTENTS.support,
    CONTACT_INTENTS.other,
  ]),
  message: z
    .string()
    .trim()
    .min(20, "Add a little more detail so we can route your request."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@medscreen.io" },
  { icon: Phone, label: "Phone", value: "+1 (800) 555-0199" },
  { icon: MapPin, label: "Office", value: "Austin, Texas" },
  { icon: Clock, label: "Hours", value: "Mon - Fri, 8am - 6pm CT" },
];

const createDefaultValues = (
  intent: ContactFormValues["intent"],
  source?: string | null,
): ContactFormValues => ({
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  intent,
  message: createContactMessageTemplate(intent, source),
});

const shouldReplaceMessageTemplate = (
  currentMessage: string,
  currentIntent: ContactFormValues["intent"],
  currentSource?: string | null,
) => {
  const normalizedMessage = currentMessage.trim();
  if (!normalizedMessage) {
    return true;
  }

  return normalizedMessage ===
    createContactMessageTemplate(currentIntent, currentSource).trim();
};

const Contact = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const source = searchParams.get("source");
  const intent = resolveContactIntent(searchParams.get("intent"));
  const headerCopy = CONTACT_INTENT_HEADLINES[intent];
  const contactEndpoint = getContactEndpoint();
  const contactEmail = getContactEmail();
  const usesEndpoint = hasContactEndpoint();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: createDefaultValues(intent, source),
  });

  useEffect(() => {
    form.reset(createDefaultValues(intent, source));
  }, [form, intent, source]);

  const switchContactIntent = (nextIntent: ContactFormValues["intent"]) => {
    const currentIntent = form.getValues("intent");
    const currentMessage = form.getValues("message");

    form.setValue("intent", nextIntent, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });

    if (shouldReplaceMessageTemplate(currentMessage, currentIntent, source)) {
      form.setValue("message", createContactMessageTemplate(nextIntent, source), {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      });
    }

    scrollToContactForm();
  };

  const handleFallbackToEmail = (values: ContactLead) => {
    const href = buildContactMailtoHref(values, {
      source,
      pagePath: `${location.pathname}${location.search}`,
      toEmail: contactEmail,
    });

    window.location.href = href;
  };

  const onSubmit = form.handleSubmit(async (values: ContactFormValues) => {
    const lead = values as ContactLead;
    setIsSubmitting(true);

    if (contactEndpoint) {
      try {
        const response = await fetch(contactEndpoint, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            createContactSubmissionFields(lead, {
              source,
              pagePath: `${location.pathname}${location.search}`,
            }),
          ),
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        toast({
          title: "Message sent",
          description:
            "Thanks. The MedScreen team should reply within one business day.",
        });
        form.reset(createDefaultValues(intent, source));
        return;
      } catch {
        handleFallbackToEmail(lead);
        toast({
          title: "Email draft opened",
          description:
            "Automatic submission was unavailable, so we opened a prefilled draft instead.",
        });
        form.reset(createDefaultValues(intent, source));
        return;
      } finally {
        setIsSubmitting(false);
      }
    }

    handleFallbackToEmail(lead);
    toast({
      title: "Email draft opened",
      description:
        "Your email app should open with a prefilled message ready to send.",
    });
    form.reset(createDefaultValues(intent, source));
    setIsSubmitting(false);
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
          <div className="container relative text-center max-w-3xl mx-auto space-y-5">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              {headerCopy.eyebrow}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              {headerCopy.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {headerCopy.description}
            </p>
          </div>
        </section>

        <section className="pb-20 md:pb-28 -mt-4">
          <div className="container">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 max-w-5xl mx-auto">
              <div
                id={CONTACT_FORM_ID}
                className="lg:col-span-3 rounded-2xl border bg-card p-6 md:p-10"
              >
                <h2 className="text-xl font-bold text-foreground mb-1">
                  Send us the details
                </h2>
                <p className="text-sm text-muted-foreground mb-8">
                  {usesEndpoint
                    ? "Submit the form and our team will follow up within one business day."
                    : "Submit the form and we will open a prefilled email draft you can send immediately."}
                </p>

                <Form {...form}>
                  <form onSubmit={onSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First name</FormLabel>
                            <FormControl>
                              <Input
                                autoComplete="given-name"
                                placeholder="Jane"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last name</FormLabel>
                            <FormControl>
                              <Input
                                autoComplete="family-name"
                                placeholder="Smith"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Work email</FormLabel>
                          <FormControl>
                            <Input
                              autoComplete="email"
                              placeholder="jane@clinic.com"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organization</FormLabel>
                          <FormControl>
                            <Input
                              autoComplete="organization"
                              placeholder="Clinic or hospital name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="intent"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>I am interested in</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a topic" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {CONTACT_INTENT_OPTIONS.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your facility, timing, and what you need help with."
                              rows={7}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      size="lg"
                      className="w-full gap-2 text-base"
                      disabled={isSubmitting}
                      type="submit"
                    >
                      {isSubmitting ? (
                        <>
                          <LoaderCircle className="w-4 h-4 animate-spin" />
                          Sending
                        </>
                      ) : (
                        <>
                          {usesEndpoint ? "Send Message" : "Open Email Draft"}
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>

              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-1">
                    Get in touch
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Prefer to reach out directly? Here is how to find us.
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

                <div className="rounded-xl border bg-primary/5 p-6 space-y-3">
                  <h3 className="text-base font-semibold text-foreground">
                    Want a live walkthrough?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Jump straight into a demo request if you would rather see
                    the product with your own use case in mind.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    type="button"
                    onClick={() => switchContactIntent(CONTACT_INTENTS.demo)}
                  >
                    Switch to Demo Request
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>

                <div className="rounded-xl border bg-card p-6 space-y-2">
                  <h3 className="text-base font-semibold text-foreground">
                    Delivery setup
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {usesEndpoint
                      ? "Messages submitted here go straight to the MedScreen team."
                      : `If you do not have an email app configured, send your request directly to ${contactEmail}.`}
                  </p>
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
