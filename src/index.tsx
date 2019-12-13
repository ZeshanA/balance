import { css, Global } from "@emotion/core";
import OverviewPage from "pages/OverviewPage/OverviewPage";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.scss";

ReactDOM.render(
  <Fragment>
    <Global
      styles={css`
        body {
          font-family: "Cerebri Sans", -apple-system, BlinkMacSystemFont,
            "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
            "Droid Sans", "Helvetica Neue", sans-serif;
        }
      `}
    />
    <OverviewPage />
  </Fragment>,
  document.getElementById("root")
);
