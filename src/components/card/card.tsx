import styled from "styled-components";
import React from "react";

const CardContainer = styled.div.attrs({ role: "article" })<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1.0)};
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const CardFooter = styled.div`
  padding: 8px  16px;
  background-color: #f7f7f7;
  text-align: right;
  font-size: 0.9rem;
`;

export interface CardProps {
  title: string;
  description: string;
  backgroundColor?: string;
  image?: string;
  footer?: string;
  disabled?: boolean;
}

export const Card = ({
  title,
  description,
  backgroundColor,
  image,
  footer,
  disabled = false,
}: CardProps) => {
  return (
    <CardContainer disabled={disabled} backgroundColor={backgroundColor}>
      {image && <CardImage src={image} alt={title} />}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardContainer>
  );
};
