/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { faArrowDown, faHistory } from "@fortawesome/pro-regular-svg-icons";
import Card from "components/Card/Card";
import React from "react";
import CardHeading from "../../components/Card/CardHeading";
import Statistic, {
  StatisticValue
} from "../../components/Statistic/Statistic";
import fonts from "../../styles/fonts";

/* ================================================================================================================== */
/* Styles
/* ================================================================================================================== */

/* ================================================================================================================== */
/* Component
/* ================================================================================================================== */
interface DeltaStatisticProps {
  children: React.ReactNode;
  title?: string | React.ReactNode;
}
const DeltaStatistic: React.FC<DeltaStatisticProps> = props => (
  <section>
    <Statistic
      {...props}
      css={{ fontSize: fonts.sizes[8], display: "block" }}
      unit="kg"
      icon={faArrowDown}
    >
      {props.children}
    </Statistic>
  </section>
);

const statisticHeadingStyles = css`
  font-size: ${fonts.sizes[1]};
  font-weight: 100;
  strong {
    font-weight: 500;
  }
`;

const DeltaCard: React.FC = props => (
  <Card {...props}>
    <CardHeading icon={faHistory}>Change Over Time</CardHeading>
    <div
      css={{
        display: "grid",
        marginTop: "30px",
        gridTemplateColumns: "1fr 1fr",
        columnGap: "50px",
        rowGap: "30px"
      }}
    >
      <DeltaStatistic>
        <h3 css={statisticHeadingStyles}>
          From Your <strong>Start Date</strong>
        </h3>
        <StatisticValue>2.9</StatisticValue>
      </DeltaStatistic>
      <DeltaStatistic>
        <h3 css={statisticHeadingStyles}>
          This <strong>Week</strong>
        </h3>
        <StatisticValue>2.9</StatisticValue>
      </DeltaStatistic>
      <DeltaStatistic>
        <h3 css={statisticHeadingStyles}>
          This <strong>Month</strong>
        </h3>
        <StatisticValue>0.6</StatisticValue>
      </DeltaStatistic>
      <DeltaStatistic>
        <h3 css={statisticHeadingStyles}>
          This <strong>Year</strong>
        </h3>
        <StatisticValue>2.3</StatisticValue>
      </DeltaStatistic>
    </div>
  </Card>
);

export default DeltaCard;
