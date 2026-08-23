import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import QuickView from "./QuickView";

describe("QuickView", () => {
  it("renders every Portfolio Subject in the accepted order", () => {
    render(
      <MemoryRouter>
        <QuickView />
      </MemoryRouter>,
    );

    const links = screen.getAllByRole("link");
    expect(links.map((link) => link.textContent)).toEqual([
      "About",
      "Projects",
      "Experience",
      "Skills",
      "Resume",
      "Contact",
    ]);
    expect(links.map((link) => link.dataset.subject)).toEqual([
      "about",
      "projects",
      "experience",
      "skills",
      "resume",
      "contact",
    ]);
    expect(links.map((link) => link.getAttribute("href"))).toEqual([
      "/about",
      "/projects",
      "/experience",
      "/skills",
      "/resume",
      "/contact",
    ]);
  });
});
