/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import SidebarPage from "components/SidebarPage/SidebarPage";
import React from "react";
import colors from "styles/colors";
import fonts from "styles/fonts";

const headingStyles = css`
  color: ${colors.neutrals.grey[2]};
  font-size: ${fonts.sizes[6]};
  font-weight: 400;
  margin-bottom: 10px;

  strong {
    font-weight: 500;
  }
`;
const subheadingStyles = css`
  color: ${colors.neutrals.grey[5]};
  font-weight: 400;
`;

const OverviewPage: React.FC<{}> = () => (
  <SidebarPage>
    <h1 css={headingStyles}>
      Hey, <strong>Zeshan!</strong>
    </h1>
    <p css={subheadingStyles}>Here is an overview of your progress so far.</p>
  </SidebarPage>
);

export default OverviewPage;
