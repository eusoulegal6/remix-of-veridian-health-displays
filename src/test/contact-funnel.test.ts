import { describe, expect, it } from "vitest";
import {
  CONTACT_INTENTS,
  buildContactMailtoHref,
  buildContactPath,
  createContactMessageTemplate,
  resolveContactIntent,
} from "@/lib/contact-funnel";

describe("contact funnel helpers", () => {
  it("builds contact URLs with intent and source context", () => {
    expect(
      buildContactPath("/contact", CONTACT_INTENTS.demo, "book-demo"),
    ).toBe("/contact?intent=demo&source=book-demo");
  });

  it("falls back to a safe default intent for unknown values", () => {
    expect(resolveContactIntent("not-real")).toBe(CONTACT_INTENTS.other);
    expect(resolveContactIntent("sales")).toBe(CONTACT_INTENTS.sales);
  });

  it("creates a useful message template for the selected intent", () => {
    const message = createContactMessageTemplate(
      CONTACT_INTENTS.pricing,
      "pricing-page",
    );

    expect(message).toContain("I would like help understanding pricing");
    expect(message).toContain("CTA source: pricing-page");
  });

  it("builds a prefilled mailto draft with lead details", () => {
    const href = buildContactMailtoHref(
      {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane@clinic.com",
        company: "Veridian Clinic",
        intent: CONTACT_INTENTS.demo,
        message: "We need a demo for three waiting room displays.",
      },
      {
        source: "hero-cta",
        pagePath: "/contact?intent=demo",
        toEmail: "sales@medscreen.io",
      },
    );

    expect(href).toContain("mailto:sales@medscreen.io");
    expect(href).toContain("Demo+Request+from+Jane+Smith");
    expect(href).toContain("CTA+source%3A+hero-cta");
    expect(href).toContain("Veridian+Clinic");
  });
});
