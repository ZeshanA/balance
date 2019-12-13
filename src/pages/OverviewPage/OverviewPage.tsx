/** @jsx jsx */
import { jsx } from "@emotion/core";
import SidebarPage from "components/SidebarPage/SidebarPage";
import React from "react";

const OverviewPage: React.FC<{}> = () => (
  <SidebarPage>
    <h1>Hey, Zeshan!</h1>
    <p>Here is an overview of your progress so far.</p>
  </SidebarPage>
);

export default OverviewPage;
