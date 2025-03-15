import styled from "styled-components";
import React from 'react';

const StyledImg = styled.img<{ disabled?: boolean; width?: string; height?: string }>`
  width: ${({ width }) => width || 'auto' };
  height: ${({ height }) => height || 'auto' };
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1.0)};
  user-select: ${({ disabled }) => (disabled ? 'none' : 'auto' )};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default' )};
  filter: ${({ disabled }) => (disabled ? 'grayscale(50%)' : 'none' )};
`

export interface ImgProps {
  src: string;
  alt?: string;
  disabled?: boolean;
  height?: string;
  width?: string;
}

export const Img = ({ src, alt = "", disabled = false, width, height }: ImgProps ) => {
  return <StyledImg src={src} alt={alt} disabled={disabled} height={height} width={width} />;
};