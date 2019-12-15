/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { IconDefinition } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import colors, { Color, Gradient } from "styles/colors";
import fonts from "styles/fonts";

const Section = styled.section<{ gradient?: Gradient }>`
  width: 300px;
  height: 300px;
  background: linear-gradient(
    45deg,
    ${({ gradient }): string => colors.gradients[gradient ?? Color.purple][0]}
  );
  border-radius: 10px;
  padding: 45px;

  header {
    font-size: ${fonts.sizes[4]};
    color: #fff;
  }

  h3 {
    margin-top: 10px;
    font-weight: 400;
  }
`;

const StatsCard: React.FC<StatsCardProps> = ({
  children,
  gradient,
  title,
  icon
}) => (
  <Section gradient={gradient}>
    <header>
      <FontAwesomeIcon size="lg" icon={icon} />
      <h3>{title}</h3>
    </header>
    <div>{children}</div>
  </Section>
);

interface StatsCardProps {
  children?: React.ReactNode;
  gradient?: Gradient;
  title: string;
  icon: IconDefinition;
}

export default StatsCard;
