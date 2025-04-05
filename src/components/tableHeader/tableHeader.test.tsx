// @ts-ignore
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TableHeader } from "./tableHeader";

test("renders the table header and is visible", () => {
  render(
    <table>
      <thead>
        <tr>
          <TableHeader text="Header" />
        </tr>
      </thead>
    </table>,
  );

  const header = screen.getByText("Header");

  expect(header).toBeInTheDocument();
  expect(header).toBeVisible();
});

test("applies 0.5 opacity when disabled", () => {
  render(
    <table>
      <thead>
        <tr>
          <TableHeader text="Header" disabled />
        </tr>
      </thead>
    </table>,
  );

  const header = screen.getByText("Header");

  expect(header).toHaveStyle("opacity: 0.5");
});
