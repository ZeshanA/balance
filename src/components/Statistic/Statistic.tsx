/** @jsx jsx */
import { jsx } from "@emotion/core";
import { IconDefinition } from "@fortawesome/pro-regular-svg-icons";
import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";

export interface StatisticProps {
  children: React.ReactNode;
  icon?: IconDefinition;
  unit: string;
}

export const StatisticValue: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => <Fragment>{children}</Fragment>;

const Statistic: React.FC<StatisticProps> = props => {
  const { icon, children, unit } = props;
  const [valueChild, otherChildren]: React.ReactNode[][] = _.partition(
    React.Children.toArray(children),
    (child: React.ReactElement) =>
      (child as React.ReactElement)?.type === StatisticValue
  );
  return (
    <span {...props}>
      {otherChildren}
      {icon && <FontAwesomeIcon icon={icon} />}
      <span css={{ marginLeft: "0.25em" }}>{valueChild}</span>
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
