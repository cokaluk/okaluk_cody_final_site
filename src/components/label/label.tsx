import styled from 'styled-components';
import React from 'react';

const StyledLabel = styled.label<{ backgroundColor?: string; disabled?: boolean }>`
  display: inline-block;
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  padding: 10px 16px;
  font-size: 16px;
  border-radius: 5px;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1.0)};

`;


export interface LabelProps {
  disabled?: boolean;
  backgroundColor?: string;
  text: string;
}

export const Label = ({
  disabled = false,
  backgroundColor,
  text,
  ...props
}: LabelProps) => {
  return (
    <StyledLabel backgroundColor={backgroundColor} disabled={disabled} {...props}>
      {text}
    </StyledLabel>
  );
};

