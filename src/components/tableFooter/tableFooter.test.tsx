// @ts-ignore
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TableFooter } from "./tableFooter";
import { TableCell } from "../tableCell/tableCell"; // Assuming TableCell exists as per previous code

test("renders the table footer and is visible", () => {
  render(
    <table>
      <TableFooter cells={[<TableCell key="1" text="Footer Cell" />]} />
    </table>,
  );

  const footer = screen.getByRole("rowgroup");

  expect(footer).toBeInTheDocument();
  expect(footer).toBeVisible();
});

test("applies 0.5 opacity when disabled", () => {
  render(
    <table>
      <TableFooter
        cells={[<TableCell key="1" text="Footer Cell" />]}
        disabled
      />
    </table>,
  );

  const footer = screen.getByRole("rowgroup");

  expect(footer).toHaveStyle("opacity: 0.5");
});
