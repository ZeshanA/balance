/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { faCoffee } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import colors, { Color, Gradient } from "styles/colors";
import fonts from "styles/fonts";

const Section = styled.section<{ gradient?: Gradient }>`
  width: 300px;
  height: 300px;
  background: linear-gradient(
    45deg,
    ${({ gradient }) => colors.gradients[gradient ?? Color.purple]}
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

const StatsCard: React.FC<StatsCardProps> = ({ children, gradient }) => (
  <Section gradient={gradient}>
    <header>
      <FontAwesomeIcon size="lg" icon={faCoffee} />
      <h3>Change Over Time</h3>
    </header>
    <div>{children}</div>
  </Section>
);

interface StatsCardProps {
  children?: React.ReactNode;
  gradient?: Gradient;
}

export default StatsCard;
