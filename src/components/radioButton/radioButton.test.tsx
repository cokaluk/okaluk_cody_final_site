import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RadioButton } from "./radioButton";

test("renders the radio button and is visible", () => {
  render(<RadioButton label="Test Radio" name="radioGroup" value="test" />);

  const radio = screen.getByRole("radio", { name: /test radio/i });

  expect(radio).toBeInTheDocument();
  expect(radio).toBeVisible();
});

test("applies 0.5 opacity when disabled", () => {
  render(
    <RadioButton
      label="Disabled Radio"
      name="radioGroup"
      value="test"
      disabled
    />,
  );

  const label = screen.getByText("Disabled Radio");

  expect(label).toHaveStyle("opacity: 0.5");
});
