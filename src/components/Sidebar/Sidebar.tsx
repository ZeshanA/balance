/** @jsx jsx */
import { css, jsx } from "@emotion/core";
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
  padding: 20px;
  text-align: center;
  color: ${colors.primary.purple[5]};
  font-weight: 600;
  font-size: ${fonts.sizes[4]};
  box-sizing: border-box;
`;

const Sidebar: React.SFC = () => (
  <div css={sidebarStyles}>
    <div css={logoStyles}>Balance</div>
  </div>
);

export default Sidebar;
