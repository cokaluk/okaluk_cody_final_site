import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./card";

test("renders the card and is visible", () => {
  render(<Card title="Test Card" description="This is a test card" />);

  const card = screen.getByRole("article");

  expect(card).toBeInTheDocument();
  expect(card).toBeVisible();
});

test("applies 0.5 opacity when disabled", () => {
  render(<Card title="Disabled Card" description="This card is disabled" disabled />);

  const card = screen.getByRole("article");

  expect(card).toHaveStyle("opacity: 0.5");
});