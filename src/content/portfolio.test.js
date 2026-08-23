import { describe, expect, it } from "vitest";
import { routeMetadata } from "./routeMetadata";
import {
  assertPortfolioRecord,
  getPanelBySlug,
  getProjectBySlug,
  panelOrder,
  portfolioRecord,
} from "./portfolio";

describe("portfolioRecord", () => {
  it("keeps Tavern and Quick View subjects in the accepted order", () => {
    const acceptedOrder = [
      "about",
      "projects",
      "experience",
      "skills",
      "resume",
      "contact",
    ];

    expect(panelOrder).toEqual(acceptedOrder);
    expect(portfolioRecord.panels.map((panel) => panel.slug)).toEqual(acceptedOrder);
  });

  it("contains exactly the three accepted Featured Projects", () => {
    expect(portfolioRecord.projects.map((project) => project.slug)).toEqual([
      "healthflow",
      "overturn",
      "debugflow",
    ]);
  });

  it("limits Public Contact to the accepted recruiter-safe fields", () => {
    expect(Object.keys(portfolioRecord.contact).sort()).toEqual([
      "email",
      "github",
      "linkedin",
      "location",
    ]);

    const serialized = JSON.stringify(portfolioRecord.contact);
    expect(serialized).not.toMatch(/646-508-8547|10304|phone|zip/i);
  });

  it("does not claim a DebugFlow PyPI release without a verified URL", () => {
    expect(getProjectBySlug("debugflow").links).toEqual([
      { label: "GitHub", href: "https://github.com/saikamara59/debugflow" },
    ]);
  });

  it("states the accepted Pydantic experience levels precisely", () => {
    const agentSkills = portfolioRecord.capabilityGroups.find(
      (group) => group.name === "AI and agent systems",
    ).skills;

    expect(agentSkills).toEqual([
      "Pydantic",
      "Pydantic AI",
      "Logfire",
      "Pydantic Graph — working knowledge",
      "Claude API",
      "Agent reliability",
    ]);
  });

  it("provides metadata for every public portfolio route", () => {
    const acceptedRoutes = [
      "/",
      "/about",
      "/projects",
      "/projects/healthflow",
      "/projects/overturn",
      "/projects/debugflow",
      "/experience",
      "/skills",
      "/resume",
      "/contact",
    ];

    expect(Object.keys(routeMetadata).sort()).toEqual(acceptedRoutes.sort());
    expect(
      Object.values(routeMetadata).every(
        ({ title, description }) => title.length > 0 && description.length > 0,
      ),
    ).toBe(true);
  });

  it("validates unique slugs, routes, and Tavern Object labels", () => {
    expect(assertPortfolioRecord(portfolioRecord)).toBe(true);
    expect(getPanelBySlug("about").route).toBe("/about");
    expect(getPanelBySlug("missing")).toBeNull();
    expect(getProjectBySlug("missing")).toBeNull();
  });

  it("rejects duplicate routes and missing Tavern Object labels", () => {
    const duplicateRoute = {
      ...portfolioRecord,
      projects: portfolioRecord.projects.map((project, index) =>
        index === 0 ? { ...project, route: "/about" } : project,
      ),
    };
    const missingObjectName = {
      ...portfolioRecord,
      panels: portfolioRecord.panels.map((panel, index) =>
        index === 0 ? { ...panel, objectName: "" } : panel,
      ),
    };

    expect(() => assertPortfolioRecord(duplicateRoute)).toThrow(
      "Duplicate portfolio route",
    );
    expect(() => assertPortfolioRecord(missingObjectName)).toThrow(
      "Missing Tavern Object name",
    );
  });
});
