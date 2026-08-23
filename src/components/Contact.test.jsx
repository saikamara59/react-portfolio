import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Contact from "./Contact";

describe("Contact", () => {
  it("renders only recruiter-safe public contact methods", () => {
    render(<Contact />);

    expect(screen.getByText("New York City")).toBeInTheDocument();
    expect(screen.queryByText(/646-508-8547|10304/)).not.toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "saikamara646@gmail.com" }),
    ).toHaveAttribute("href", "mailto:saikamara646@gmail.com");
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/saidukamara1/",
    );
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/saikamara59",
    );
  });
});
