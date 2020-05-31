/** @jsx jsx */
import { jsx } from "@emotion/core";
import Sidebar from "components/Sidebar/Sidebar";
import React from "react";
import styled from "@emotion/styled";

const Page = styled.div`
  display: flex;
`;

const ContentWrapper = styled.section`
  flex-grow: 1;
  padding: 50px;
`;

interface SidebarPageProps {
  children?: React.ReactNode;
}

const SidebarPage: React.FC<SidebarPageProps> = ({ children }) => (
  <Page>
    <Sidebar />
    <ContentWrapper>{children}</ContentWrapper>
  </Page>
);

export default SidebarPage;
