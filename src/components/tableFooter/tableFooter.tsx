import React from "react";
import styled from "styled-components";
import { TableCellProps } from "../tableCell/tableCell";

const StyledTableFooter = styled.tfoot<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  border-bottom: 1px solid black;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1.0)};
  user-select: ${({ disabled }) => (disabled ? "none" : "auto")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "auto")};
`;

export interface TableFooterProps {
  disabled?: boolean;
  backgroundColor?: string;
  cells: React.ReactElement<TableCellProps>[];
}

export const TableFooter = ({
  disabled = false,
  backgroundColor,
  cells,
}: TableFooterProps) => {
  const autoDisableCells = cells.map((cell) =>
    React.cloneElement(cell, { disabled }),
  );

  return (
    <StyledTableFooter disabled={disabled} backgroundColor={backgroundColor}>
      {autoDisableCells}
    </StyledTableFooter>
  );
};
