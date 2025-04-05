// @ts-ignore
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TableRow } from "./tableRow";
import { TableCell } from "../tableCell/tableCell"; // Make sure to import TableCell component if necessary

test("renders the table row and is visible", () => {
  render(
    <table>
      <tbody>
        <TableRow cells={[<TableCell text="Cell 1" />]} />
      </tbody>
    </table>,
  );

  const row = screen.getByRole("row");

  expect(row).toBeInTheDocument();
  expect(row).toBeVisible();
});

test("applies 0.5 opacity when disabled", () => {
  render(
    <table>
      <tbody>
        <TableRow cells={[<TableCell text="Cell 1" />]} disabled />
      </tbody>
    </table>,
  );

  const row = screen.getByRole("row");

  expect(row).toHaveStyle("opacity: 0.5");
});
