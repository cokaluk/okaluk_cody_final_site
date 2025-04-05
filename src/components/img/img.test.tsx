// @ts-ignore
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Img } from "./img";

test("renders the image and is visible", () => {
  render(<Img src="https://via.placeholder.com/1" alt="Placeholder Image" />);

  const img = screen.getByRole("img", { name: /placeholder image/i });

  expect(img).toBeInTheDocument();
  expect(img).toBeVisible();
});

test("applies grayscale filter when disabled", () => {
  render(
    <Img
      src="https://via.placeholder.com/1"
      alt="Placeholder Image"
      disabled={true}
    />,
  );

  const img = screen.getByRole("img", { name: /placeholder image/i });

  expect(img).toHaveStyle("filter: grayscale(50%)");
});
