/** @jsx jsx */
import { jsx } from "@emotion/core";
import {
  faBullseyeArrow,
  faCheckCircle
} from "@fortawesome/pro-regular-svg-icons";
import Card from "components/Card/Card";
import React from "react";
import CardHeading from "../../components/Card/CardHeading";
import { Color } from "../../styles/colors";
import fonts from "../../styles/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* ================================================================================================================== */
/* Component
/* ================================================================================================================== */
const CheckpointCard: React.FC = props => (
  <Card {...props} gradient={Color.red}>
    <CardHeading icon={faBullseyeArrow}>Checkpoints</CardHeading>
    <section css={{ marginBottom: 30 }}>
      <h4 css={{ fontWeight: "normal" }}>Checkpoint #3</h4>
      <h5 css={{ fontSize: fonts.sizes[8], fontWeight: "normal" }}>
        88.6<span css={{ marginLeft: 6, fontSize: "0.45em" }}>KG</span>
      </h5>
      <div
        css={{
          width: "100%",
          height: 10,
          background: "rgba(255,255,255,0.3)",
          borderRadius: 100,
          margin: "5px 0 13px 0"
        }}
      >
        <span
          css={{
            width: "68.5%",
            height: 10,
            display: "block",
            background: "#fff",
            borderRadius: 100
          }}
        />
      </div>
      <legend
        css={{
          display: "grid",
          gridTemplateColumns: "4fr 1fr",
          margin: 0
        }}
      >
        <span css={{ textTransform: "uppercase", fontWeight: 200 }}>
          Progress
        </span>
        <span css={{ textAlign: "right" }}>68.5%</span>
      </legend>
    </section>
    <section>
      <h4 css={{ fontWeight: "normal", marginBottom: 10 }}>
        Completed Checkpoints
      </h4>
      <ol css={{ fontSize: fonts.sizes[5] }}>
        <li>
          <FontAwesomeIcon icon={faCheckCircle} css={{ marginRight: 7 }} />
          <span>92.5</span>
          <span css={{ fontSize: "0.45em", marginLeft: 3 }}>KG</span>
        </li>
      </ol>
    </section>
  </Card>
);

export default CheckpointCard;
