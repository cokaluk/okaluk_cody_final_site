// @ts-ignore
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DropDown } from "./dropDown";

test("renders the dropdown and is visible", () => {
  render(<DropDown options={[{ value: "1", label: "Option 1" }]} />);

  const dropdown = screen.getByRole("combobox");

  expect(dropdown).toBeInTheDocument();
  expect(dropdown).toBeVisible();
});

test("applies 0.5 opacity when disabled", () => {
  render(<DropDown options={[{ value: "1", label: "Option 1" }]} disabled />);

  const dropdown = screen.getByRole("combobox");

  expect(dropdown).toHaveStyle("opacity: 0.5");
});
