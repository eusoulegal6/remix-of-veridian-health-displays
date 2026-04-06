import { describe, expect, it } from "vitest";
import { PUBLIC_PAGE_METADATA } from "@/routes/page-metadata";

const MAIN_PAGE_KEYS = [
  "home",
  "features",
  "hospitals",
  "clinics",
  "dentalOffices",
  "waitingRooms",
  "pricing",
  "faq",
  "about",
  "contact",
] as const;

describe("PUBLIC_PAGE_METADATA", () => {
  it("defines unique titles and descriptions for all main marketing pages", () => {
    const titles = MAIN_PAGE_KEYS.map((key) => PUBLIC_PAGE_METADATA[key].title);
    const descriptions = MAIN_PAGE_KEYS.map(
      (key) => PUBLIC_PAGE_METADATA[key].metaDescription,
    );

    expect(new Set(titles).size).toBe(titles.length);
    expect(new Set(descriptions).size).toBe(descriptions.length);
  });

  it("keeps canonical paths on all main marketing pages", () => {
    MAIN_PAGE_KEYS.forEach((key) => {
      expect(PUBLIC_PAGE_METADATA[key].canonical).toBeTruthy();
    });
  });
});
