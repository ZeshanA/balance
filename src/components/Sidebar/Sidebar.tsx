/** @jsx jsx */
import { jsx } from "@emotion/core";
import { faWeight } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import colors from "styles/colors";
import fonts from "styles/fonts";
import styled from "@emotion/styled";

/* ================================================================================================================== */
/* Styles
/* ================================================================================================================== */
const Wrapper = styled.div`
  min-width: 280px;
  background-color: ${colors.neutrals.grey[9]};
  height: 100vh;
`;

const Logo = styled.div`
  width: 100%;
  padding: 30px;
  text-align: center;
  color: ${colors.primary.purple[5]};
  font-weight: 400;
  font-size: ${fonts.sizes[4]};
  box-sizing: border-box;

  svg {
    margin-right: 2px;
  }
`;

/* ================================================================================================================== */
/* Component
/* ================================================================================================================== */
const Sidebar: React.FC = () => (
  <Wrapper>
    <Logo>
      <FontAwesomeIcon icon={faWeight} /> Balance
    </Logo>
  </Wrapper>
);

export default Sidebar;
