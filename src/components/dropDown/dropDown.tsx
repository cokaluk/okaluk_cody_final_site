import styled from "styled-components";
import React from "react";

const StyledDropDown = styled.select<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid black;
  background-color: ${({ backgroundColor }) => backgroundColor || "white"};
  color: ${({ disabled }) => (disabled ? "gray" : "black")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1.0)};
`;

export interface DropDownProps {
  label?: string;
  options: { value: string; label: string }[];
  disabled?: boolean;
  backgroundColor?: string;
  onChange?: (value: string) => void;
}

export const DropDown = ({
  label,
  options,
  disabled = false,
  backgroundColor,
  onChange,
}: DropDownProps) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <StyledDropDown
        disabled={disabled}
        backgroundColor={backgroundColor}
        onChange={(e) => onChange && onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledDropDown>
    </div>
  );
};
