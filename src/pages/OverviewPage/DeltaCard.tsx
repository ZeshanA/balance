/** @jsx jsx */
import { jsx } from "@emotion/core";
import { faArrowDown, faHistory } from "@fortawesome/pro-regular-svg-icons";
import Card from "components/Card/Card";
import React from "react";
import CardHeading from "../../components/Card/CardHeading";
import Statistic from "../../components/Statistic/Statistic";
import fonts from "../../styles/fonts";

/* ================================================================================================================== */
/* Styles
/* ================================================================================================================== */
interface DeltaStatisticProps {
  children: React.ReactNode;
}
const DeltaStatistic: React.FC<DeltaStatisticProps> = props => (
  <Statistic
    {...props}
    css={{ fontSize: fonts.sizes[8], display: "block" }}
    unit="kg"
    icon={faArrowDown}
  >
    {props.children}
  </Statistic>
);

/* ================================================================================================================== */
/* Component
/* ================================================================================================================== */
const DeltaCard: React.FC = props => (
  <Card {...props}>
    <CardHeading icon={faHistory}>Change Over Time</CardHeading>
    <div
      css={{
        display: "grid",
        marginTop: "30px",
        gridTemplateColumns: "1fr 1fr",
        columnGap: "20px",
        rowGap: "20px"
      }}
    >
      <DeltaStatistic>2.9</DeltaStatistic>
      <DeltaStatistic>0.6</DeltaStatistic>
      <DeltaStatistic>2.3</DeltaStatistic>
      <DeltaStatistic>2.5</DeltaStatistic>
    </div>
  </Card>
);

export default DeltaCard;
