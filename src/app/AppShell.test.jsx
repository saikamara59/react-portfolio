import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, useNavigate } from "react-router";
import { describe, expect, it } from "vitest";
import AppShell from "./AppShell";

function renderShell(initialEntries) {
  function HistoryControls() {
    const navigate = useNavigate();

    return (
      <div>
        <button type="button" onClick={() => navigate(-1)}>
          Back
        </button>
        <button type="button" onClick={() => navigate(1)}>
          Forward
        </button>
      </div>
    );
  }

  render(
    <MemoryRouter initialEntries={initialEntries}>
      <HistoryControls />
      <AppShell />
    </MemoryRouter>,
  );
}

describe("AppShell", () => {
  it("opens a directly loaded Portfolio Subject over the Tavern", () => {
    renderShell(["/about"]);

    expect(screen.getByText(/Welcome aboard/)).toBeInTheDocument();
    expect(screen.getByRole("dialog", { name: "About" })).toBeInTheDocument();
  });

  it("opens a directly loaded Project Story route", () => {
    renderShell(["/projects/overturn"]);

    expect(screen.getByRole("dialog", { name: "Overturn" })).toBeInTheDocument();
    expect(
      screen.getByText(/Raw payer denial exports do not give operators/),
    ).toBeInTheDocument();
  });

  it("preserves overlay navigation through Back and Forward", async () => {
    const user = userEvent.setup();
    renderShell(["/"]);

    await user.click(screen.getByRole("link", { name: "About" }));
    expect(screen.getByRole("dialog", { name: "About" })).toBeInTheDocument();

    await user.click(screen.getByText("Back"));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await user.click(screen.getByText("Forward"));
    expect(screen.getByRole("dialog", { name: "About" })).toBeInTheDocument();
  });

  it("returns focus to the Quick View link after closing", async () => {
    const user = userEvent.setup();
    renderShell(["/"]);
    const aboutLink = screen.getByRole("link", { name: "About" });

    await user.click(aboutLink);
    await user.click(screen.getByRole("button", { name: "Close About" }));

    await waitFor(() => expect(aboutLink).toHaveFocus());
  });
});
