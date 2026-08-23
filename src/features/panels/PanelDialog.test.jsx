import { StrictMode } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router";
import { describe, expect, it, vi } from "vitest";
import PanelDialog from "./PanelDialog";

describe("PanelDialog", () => {
  it("does not reopen an already-open dialog during Strict Mode checks", () => {
    const showModal = vi.spyOn(HTMLDialogElement.prototype, "showModal");

    render(
      <StrictMode>
        <MemoryRouter>
          <PanelDialog title="About">
            <p>About content</p>
          </PanelDialog>
        </MemoryRouter>
      </StrictMode>,
    );

    expect(showModal).toHaveBeenCalledTimes(1);
    showModal.mockRestore();
  });

  it("closes a directly loaded panel safely back to the Tavern", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/about"]}>
        <Routes>
          <Route path="/" element={<p>Tavern</p>} />
          <Route
            path="/about"
            element={
              <PanelDialog title="About">
                <p>About content</p>
              </PanelDialog>
            }
          />
        </Routes>
      </MemoryRouter>,
    );

    await user.click(screen.getByRole("button", { name: "Close About" }));

    expect(screen.getByText("Tavern")).toBeInTheDocument();
  });
});
