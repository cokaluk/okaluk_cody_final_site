// @ts-ignore
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeroImage } from "./heroImage";

test("renders the hero image and is visible", () => {
  render(<HeroImage backgroundImage="test-image.jpg" heading="Test Hero" />);

  const hero = screen.getByRole("banner");

  expect(hero).toBeInTheDocument();
  expect(hero).toBeVisible();
});

test("applies 0.5 opacity when disabled", () => {
  render(
    <HeroImage
      backgroundImage="test-image.jpg"
      heading="Disabled Hero"
      disabled
    />,
  );

  const hero = screen.getByRole("banner");

  expect(hero).toHaveStyle("opacity: 0.5");
});
