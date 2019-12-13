/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Sidebar from "components/Sidebar/Sidebar";
import React from "react";

const pageStyles = css`
  display: flex;

  & > section {
    flex-grow: 1;
    padding: 50px;
  }
`;

const SidebarPage: React.FC<SidebarPageProps> = ({ children }) => (
  <div css={pageStyles}>
    <Sidebar></Sidebar>
    <section>{children}</section>
  </div>
);

interface SidebarPageProps {
  children?: React.ReactNode;
}

export default SidebarPage;
