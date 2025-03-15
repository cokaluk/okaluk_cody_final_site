import styled from "styled-components";
import React from "react";

const StyledLabel = styled.label <{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer' )};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1.0 )};
  user-select: none;
`;

const StyledInput = styled.input`
  accent-color: black;
  cursor: inherit;
`

export interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

export const RadioButton = ({
  label,
  name,
  value,
  disabled = false,
  checked,
  onChange
}: RadioButtonProps) => {
  return (
    <StyledLabel disabled={disabled}>
      <StyledInput
        type="radio"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}/>
      {label}
    </StyledLabel>
  );
};
