import styled from "styled-components";
// @ts-ignore
import React from "react";

const StyledTableCell = styled.td<{
  disabled?: boolean;
  color?: string;
  fontSize?: string;
}>`
  color: ${({ disabled, color }) => (disabled ? "gray" : color || "black")};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-weight: bold;
  padding: 10px;
  text-align: left;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1.0)};
  user-select: ${({ disabled }) => (disabled ? "none" : "auto")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "auto")};
  border: 1px solid black;
`;

export interface TableCellProps {
  disabled?: boolean;
  color?: string;
  fontSize?: string;
  text: string;
}

export const TableCell = ({
  disabled = false,
  color,
  fontSize,
  text,
}: TableCellProps) => {
  return (
    <StyledTableCell color={color} fontSize={fontSize} disabled={disabled}>
      {text}
    </StyledTableCell>
  );
};
