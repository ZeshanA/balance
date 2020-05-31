import OverviewPage from "pages/OverviewPage/OverviewPage";
import React from "react";
import ReactDOM from "react-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<OverviewPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
