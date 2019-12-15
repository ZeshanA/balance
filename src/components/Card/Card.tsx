/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import colors, { Color, Gradient } from "styles/colors";

const Section = styled.section<{ gradient?: Gradient }>`
  background: linear-gradient(
    45deg,
    ${({ gradient }): string => colors.gradients[gradient ?? Color.purple][0]}
  );
  color: #ffffff;
  border-radius: 10px;
  padding: 45px;
`;

interface StatsCardProps {
  children?: React.ReactNode;
  gradient?: Gradient;
}

const Card: React.FC<StatsCardProps> = props => {
  const { children } = props;
  return <Section {...props}>{children}</Section>;
};

export default Card;
