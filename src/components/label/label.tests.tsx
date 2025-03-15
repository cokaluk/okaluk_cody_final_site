import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Label } from "./label";

test("renders the label and is visible", () => {
  render(<Label text="Test Label" />);

  const label = screen.getByText("Test Label");

  expect(label).toBeInTheDocument();
  expect(label).toBeVisible();
});

test("applies 0.5 opacity when disabled", () => {
  render(<Label text="Disabled Label" disabled />);

  const label = screen.getByText("Disabled Label");

  expect(label).toHaveStyle("opacity: 0.5");
});
