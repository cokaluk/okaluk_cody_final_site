import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./button";

test("renders the Button and is visible", () => {
  render(<Button text="Click Me" />);

  const button = screen.getByRole("button", { name: /click me/i });

  expect(button).toBeInTheDocument();
  expect(button).toBeVisible();
});

test("applies opacity 0.5 when disabled is true", () => {
  render(<Button text="Disabled Button" disabled={true} />);

  const button = screen.getByRole("button", { name: /disabled button/i });

  expect(button).toHaveStyle("opacity: 0.5");
});