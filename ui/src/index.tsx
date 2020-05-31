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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  legend {
    padding-inline-start: 0;
    padding-inline-end: 0;
  }

  ol,
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

ReactDOM.render(
  <Fragment>
    <Global styles={globalStyles} />
    <OverviewPage />
  </Fragment>,
  document.getElementById("root")
);
