import { describe, expect, it } from "vitest";
import { ABOUT_TEXT, CONTACT, HERO_CONTENT } from "../constants";

describe("legacy public content", () => {
  it("does not reintroduce private contact details", () => {
    expect(Object.keys(CONTACT).sort()).toEqual([
      "email",
      "github",
      "linkedin",
      "location",
    ]);
    expect(JSON.stringify(CONTACT)).not.toMatch(/646-508-8547|10304|phone|zip/i);
  });

  it("does not claim an unverified DebugFlow PyPI release", () => {
    expect(`${HERO_CONTENT} ${ABOUT_TEXT}`).not.toMatch(/DebugFlow on PyPI|published DebugFlow on PyPI/i);
  });
});
