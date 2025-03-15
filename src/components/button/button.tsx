import styled from 'styled-components'
import React from 'react';

export interface ButtonProps {
  disabled?: boolean;
  backgroundColor?: string;
  text: string;
}

const StyledButton = styled.button<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  border: none;
  padding: 10px 16px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;


export const Button = ({
  disabled = false,
  backgroundColor,
  text,
  ...props
}: ButtonProps) => {
  return (
      <StyledButton type="button" backgroundColor={backgroundColor} disabled={disabled} {...props}>
        {text}
        </StyledButton>
  );
};


