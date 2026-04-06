export const CONTACT_INTENTS = {
  trial: "trial",
  demo: "demo",
  pricing: "pricing",
  sales: "sales",
  partnership: "partnership",
  support: "support",
  other: "other",
} as const;

export type ContactIntent =
  (typeof CONTACT_INTENTS)[keyof typeof CONTACT_INTENTS];

export type ContactLead = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  intent: ContactIntent;
  message: string;
};

export const CONTACT_INTENT_OPTIONS: Array<{
  value: ContactIntent;
  label: string;
}> = [
  { value: CONTACT_INTENTS.trial, label: "Starting a free trial" },
  { value: CONTACT_INTENTS.demo, label: "Booking a personalized demo" },
  { value: CONTACT_INTENTS.pricing, label: "Getting pricing guidance" },
  { value: CONTACT_INTENTS.sales, label: "Talking to sales" },
  { value: CONTACT_INTENTS.partnership, label: "Exploring a partnership" },
  { value: CONTACT_INTENTS.support, label: "Technical support" },
  { value: CONTACT_INTENTS.other, label: "Something else" },
];

export const CONTACT_INTENT_LABELS: Record<ContactIntent, string> = {
  [CONTACT_INTENTS.trial]: "Free Trial",
  [CONTACT_INTENTS.demo]: "Demo Request",
  [CONTACT_INTENTS.pricing]: "Pricing Question",
  [CONTACT_INTENTS.sales]: "Sales Inquiry",
  [CONTACT_INTENTS.partnership]: "Partnership Inquiry",
  [CONTACT_INTENTS.support]: "Technical Support",
  [CONTACT_INTENTS.other]: "General Inquiry",
};

export const CONTACT_INTENT_HEADLINES: Record<
  ContactIntent,
  { eyebrow: string; title: string; description: string }
> = {
  [CONTACT_INTENTS.trial]: {
    eyebrow: "Start Free Trial",
    title: "Start your MedScreen trial",
    description:
      "Tell us a bit about your facility and we will help you get your first screens live quickly.",
  },
  [CONTACT_INTENTS.demo]: {
    eyebrow: "Request Demo",
    title: "Book a personalized walkthrough",
    description:
      "Share your setup and goals so we can tailor the demo to your screens, teams, and locations.",
  },
  [CONTACT_INTENTS.pricing]: {
    eyebrow: "Pricing Help",
    title: "Get pricing guidance for your facility",
    description:
      "We can recommend the right plan based on your screen count, locations, and workflow needs.",
  },
  [CONTACT_INTENTS.sales]: {
    eyebrow: "Talk To Sales",
    title: "Talk through your rollout with sales",
    description:
      "Use this form for buying questions, rollout planning, compliance needs, or enterprise requirements.",
  },
  [CONTACT_INTENTS.partnership]: {
    eyebrow: "Partnerships",
    title: "Explore a partnership with MedScreen",
    description:
      "Tell us how you want to work together and what type of collaboration you have in mind.",
  },
  [CONTACT_INTENTS.support]: {
    eyebrow: "Technical Support",
    title: "Reach the support team",
    description:
      "Include as much detail as you can so we can route the issue quickly and respond with the right next step.",
  },
  [CONTACT_INTENTS.other]: {
    eyebrow: "Contact Us",
    title: "Let us know what you need",
    description:
      "Whether you are exploring digital signage for the first time or ready to scale across locations, we can help.",
  },
};

const CONTACT_INTENT_SET = new Set<ContactIntent>(
  Object.values(CONTACT_INTENTS),
);

const normalizeValue = (value?: string | null) => value?.trim() || undefined;

export const resolveContactIntent = (
  value?: string | null,
): ContactIntent => {
  const normalized = normalizeValue(value);
  if (normalized && CONTACT_INTENT_SET.has(normalized as ContactIntent)) {
    return normalized as ContactIntent;
  }

  return CONTACT_INTENTS.other;
};

export const buildContactPath = (
  basePath: string,
  intent: ContactIntent,
  source?: string,
) => {
  const searchParams = new URLSearchParams({ intent });

  if (source) {
    searchParams.set("source", source);
  }

  return `${basePath}?${searchParams.toString()}`;
};

export const getContactEmail = () =>
  normalizeValue(import.meta.env.VITE_CONTACT_EMAIL) || "hello@medscreen.io";

export const getContactEndpoint = () =>
  normalizeValue(import.meta.env.VITE_CONTACT_FORM_ENDPOINT);

export const hasContactEndpoint = () => Boolean(getContactEndpoint());

export const createContactMessageTemplate = (
  intent: ContactIntent,
  source?: string | null,
) => {
  const introByIntent: Record<ContactIntent, string> = {
    [CONTACT_INTENTS.trial]:
      "I would like to start a free trial for our facility.",
    [CONTACT_INTENTS.demo]:
      "I would like to book a personalized MedScreen demo.",
    [CONTACT_INTENTS.pricing]:
      "I would like help understanding pricing for our facility.",
    [CONTACT_INTENTS.sales]:
      "I would like to talk with sales about MedScreen.",
    [CONTACT_INTENTS.partnership]:
      "I would like to explore a partnership with MedScreen.",
    [CONTACT_INTENTS.support]:
      "I need help from the MedScreen support team.",
    [CONTACT_INTENTS.other]: "I would like to learn more about MedScreen.",
  };

  const lines = [
    introByIntent[intent],
    "",
    "Facility type:",
    "Estimated number of screens:",
    "Timeline:",
  ];

  const normalizedSource = normalizeValue(source);
  if (normalizedSource) {
    lines.push(`CTA source: ${normalizedSource}`);
  }

  return lines.join("\n");
};

export const buildContactMailtoHref = (
  lead: ContactLead,
  options?: {
    source?: string | null;
    pagePath?: string;
    toEmail?: string;
  },
) => {
  const fullName = `${lead.firstName} ${lead.lastName}`.trim();
  const subject = `${CONTACT_INTENT_LABELS[lead.intent]} from ${fullName || lead.company}`;

  const lines = [
    `Name: ${fullName}`,
    `Email: ${lead.email}`,
    `Organization: ${lead.company}`,
    `Intent: ${CONTACT_INTENT_LABELS[lead.intent]}`,
  ];

  const source = normalizeValue(options?.source);
  if (source) {
    lines.push(`CTA source: ${source}`);
  }

  const pagePath = normalizeValue(options?.pagePath);
  if (pagePath) {
    lines.push(`Landing page: ${pagePath}`);
  }

  lines.push("", lead.message);

  const searchParams = new URLSearchParams({
    subject,
    body: lines.join("\n"),
  });

  return `mailto:${options?.toEmail || getContactEmail()}?${searchParams.toString()}`;
};

export const createContactSubmissionFields = (
  lead: ContactLead,
  options?: {
    source?: string | null;
    pagePath?: string;
  },
) => ({
  ...lead,
  intentLabel: CONTACT_INTENT_LABELS[lead.intent],
  source: normalizeValue(options?.source) || "",
  pagePath: normalizeValue(options?.pagePath) || "",
  submittedAt: new Date().toISOString(),
});

