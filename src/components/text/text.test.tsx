// @ts-ignore
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Text } from "./text"; // Adjust the import path to where your Text component is

test("renders the text and is visible", () => {
  render(<Text text="Test Text" />);

  const textElement = screen.getByText("Test Text");

  expect(textElement).toBeInTheDocument();
  expect(textElement).toBeVisible();
});

test("applies 0.5 opacity when disabled", () => {
  render(<Text text="Test Text" disabled />);

  const textElement = screen.getByText("Test Text");

  expect(textElement).toHaveStyle("opacity: 0.5");
});
