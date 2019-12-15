/** @jsx jsx */
import { jsx } from "@emotion/core";
import { IconDefinition } from "@fortawesome/pro-regular-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface StatisticProps {
  children: React.ReactNode;
  icon?: IconDefinition;
  unit: string;
}

const Statistic: React.FC<StatisticProps> = props => {
  const { icon, children, unit } = props;
  return (
    <span {...props}>
      {icon && <FontAwesomeIcon icon={icon} />}
      <span css={{ marginLeft: "0.25em" }}>{children}</span>
      <span
        css={{
          marginLeft: "0.25em",
          fontSize: "0.45em",
          textTransform: "uppercase"
        }}
      >
        {unit}
      </span>
    </span>
  );
};

export default Statistic;
