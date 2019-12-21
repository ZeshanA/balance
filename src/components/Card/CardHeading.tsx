/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { IconDefinition } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import fonts from "styles/fonts";

const Wrapper = styled.header`
  font-size: ${fonts.sizes[4]};
  margin-bottom: 30px;
`;

const Title = styled.h3`
  margin-top: 10px;
  font-weight: 400;
`;

interface StatsCardProps {
  children?: React.ReactNode;
  icon?: IconDefinition;
}

const CardHeading: React.FC<StatsCardProps> = props => {
  const { children, icon } = props;
  return (
    <Wrapper>
      {icon && <FontAwesomeIcon size="lg" icon={icon} />}
      <Title>{children}</Title>
    </Wrapper>
  );
};

export default CardHeading;
