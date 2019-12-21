/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { faArrowDown, faHistory } from "@fortawesome/pro-regular-svg-icons";
import Card from "components/Card/Card";
import React from "react";
import CardHeading from "../../components/Card/CardHeading";
import Statistic, {
  StatisticHeading,
  StatisticValue
} from "../../components/Statistic/Statistic";
import fonts from "../../styles/fonts";

/* ================================================================================================================== */
/* Styles
/* ================================================================================================================== */
const statisticGridStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  row-gap: 30px;
`;

/* ================================================================================================================== */
/* Component
/* ================================================================================================================== */
interface DeltaStatisticProps {
  children: React.ReactNode;
  title?: string | React.ReactNode;
}

const DeltaCard: React.FC = props => (
  <Card {...props}>
    <CardHeading icon={faHistory}>Change Over Time</CardHeading>
    <div css={statisticGridStyles}>
      <DeltaStatistic>
        <StatisticHeading>
          From Your <strong>Start Date</strong>
        </StatisticHeading>
        <StatisticValue>2.9</StatisticValue>
      </DeltaStatistic>

      <DeltaStatistic>
        <StatisticHeading>
          This <strong>Week</strong>
        </StatisticHeading>
        <StatisticValue>2.9</StatisticValue>
      </DeltaStatistic>

      <DeltaStatistic>
        <StatisticHeading>
          This <strong>Month</strong>
        </StatisticHeading>
        <StatisticValue>0.6</StatisticValue>
      </DeltaStatistic>

      <DeltaStatistic>
        <StatisticHeading>
          This <strong>Year</strong>
        </StatisticHeading>
        <StatisticValue>2.3</StatisticValue>
      </DeltaStatistic>
    </div>
  </Card>
);

const DeltaStatistic: React.FC<DeltaStatisticProps> = props => (
  <section>
    <Statistic
      {...props}
      css={{ fontSize: fonts.sizes[8] }}
      unit="kg"
      icon={faArrowDown}
    >
      {props.children}
    </Statistic>
  </section>
);

export default DeltaCard;
