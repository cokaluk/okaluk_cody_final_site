import styled from "styled-components";
import React from "react";

const HeroContainer = styled.section.attrs({ role: "banner" })<{
  backgroundImage: string;
  height?: string;
  disabled?: boolean;
}>`
width: 100vw;
overflow: hidden;
height: ${({ height }) => height || "500px"};
background-image: url(${({ backgroundImage }) => backgroundImage});
background-size: cover;
background-position: center;
display: flex;
justify-content: center;
align-items: center;
color: white
position: relative;
cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
opacity: ${({ disabled }) => (disabled ? 0.5 : 1.0)};
`;

const TextOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const Subheading = styled.p`
  font-size: 1.5rem;
`;

export interface HeroImageProps {
  backgroundImage: string;
  height?: string;
  heading: string;
  subheading?: string;
  disabled?: boolean;
}

export const HeroImage = ({
  backgroundImage,
  height,
  heading,
  subheading,
  disabled = false,
}: HeroImageProps) => {
  return (
    <HeroContainer
      backgroundImage={backgroundImage}
      height={height}
      disabled={disabled}
    >
      <TextOverlay>
        <Heading>{heading}</Heading>
        {subheading && <Subheading>{subheading}</Subheading>}
      </TextOverlay>
    </HeroContainer>
  );
};
