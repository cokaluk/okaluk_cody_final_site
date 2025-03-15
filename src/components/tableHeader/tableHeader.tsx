import styled from "styled-components";
import React from "react";

const StyledTableHeader = styled.th<{
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
  border: 2px solid black;
`;

export interface TableHeaderProps {
  disabled?: boolean;
  color?: string;
  fontSize?: string;
  text: string;
}

export const TableHeader = ({
  disabled = false,
  color,
  fontSize,
  text,
}: TableHeaderProps) => {
  return (
    <StyledTableHeader color={color} fontSize={fontSize} disabled={disabled}>
      {text}
    </StyledTableHeader>
  );
};
