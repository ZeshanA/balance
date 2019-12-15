/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { faBullseyeArrow, faHistory } from "@fortawesome/pro-regular-svg-icons";
import SidebarPage from "components/SidebarPage/SidebarPage";
import StatsCard from "components/StatsCard/StatsCard";
import React from "react";
import colors, { Color } from "styles/colors";
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
    <StatsCard
      title="Change Over Time"
      icon={faHistory}
      gradient={Color.purple}
    >
      Hello, world!
    </StatsCard>
    <StatsCard title="Checkpoints" icon={faBullseyeArrow} gradient={Color.red}>
      Hello again, world!
    </StatsCard>
  </SidebarPage>
);

export default OverviewPage;
