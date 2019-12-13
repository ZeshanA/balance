/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { faWeight } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import colors from "styles/colors";
import fonts from "styles/fonts";

const sidebarStyles = css`
  width: 280px;
  background-color: ${colors.neutrals.grey[9]};
  height: 100vh;
`;

const logoStyles = css`
  width: 100%;
  border-bottom: solid 1px ${colors.neutrals.grey[8]};
  padding: 20px;
  text-align: center;
  color: ${colors.primary.purple[5]};
  font-weight: 400;
  font-size: ${fonts.sizes[4]};
  box-sizing: border-box;

  svg {
    margin-right: 2px;
  }
`;

const Sidebar: React.SFC = () => (
  <div css={sidebarStyles}>
    <div css={logoStyles}>
      <FontAwesomeIcon icon={faWeight} /> Balance
    </div>
  </div>
);

export default Sidebar;
