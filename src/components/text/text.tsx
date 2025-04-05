import styled from "styled-components";
// @ts-ignore
import React from "react";

const StyledText = styled.span<{
  color?: string;
  fontSize?: string;
  disabled?: boolean;
}>`
  color: ${({ disabled, color }) => (disabled ? "gray" : color || "black")};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-weight: normal;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1.0)};
  user-select: ${({ disabled }) => (disabled ? "none" : "auto")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "auto")};
`
// comment to test git staging

export interface TextProps {
  color?: string;
  fontSize?: string;
  text?: string;
  disabled?: boolean;
}

export const Text = ({
  color,
  fontSize,
  text,
  disabled = false,
}: TextProps) => {
  return (
    <StyledText color={color} fontSize={fontSize} disabled={disabled}>
      {text}
    </StyledText>
  );
};
