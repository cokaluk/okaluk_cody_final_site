import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TableCell } from "./tableCell";

test("renders the TableCell and is visible", () => {
  render(<TableCell text="Test Cell" />);

  const cell = screen.getByText("Test Cell");

  expect(cell).toBeInTheDocument();
  expect(cell).toBeVisible();
});

test("applies opacity 0.5 when disabled is true", () => {
  render(<TableCell text="Disabled Cell" disabled={true} />);

  const cell = screen.getByText("Disabled Cell");

  // Check if opacity is set to 0.5
  expect(cell).toHaveStyle("opacity: 0.5");
});
