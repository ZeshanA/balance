import { css, Global } from "@emotion/core";
import OverviewPage from "pages/OverviewPage/OverviewPage";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    font-family: "Cerebri Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
  }
`;

ReactDOM.render(
  <Fragment>
    <Global styles={globalStyles} />
    <OverviewPage />
  </Fragment>,
  document.getElementById("root")
);
