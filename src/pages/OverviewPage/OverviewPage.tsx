/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import SidebarPage from "components/SidebarPage/SidebarPage";
import React from "react";
import colors from "styles/colors";
import fonts from "styles/fonts";
import DeltaCard from "./DeltaCard";
import { motion, Variants } from "framer-motion";

/* ================================================================================================================== */
/* Styles
/* ================================================================================================================== */
const headingStyles = css`
  color: ${colors.neutrals.grey[2]};
  font-size: ${fonts.sizes[6]};
  font-weight: 400;
  margin-bottom: 10px;

  strong {
    font-weight: 500;
  }
`;

const subheadingStyles = css`
  color: ${colors.neutrals.grey[5]};
  font-weight: 400;
`;

const cardGridStyles = css`
  display: grid;
  margin-top: 30px;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 40px;
  row-gap: 40px;
`;

const cardStyles = css`
  width: 380px;
`;

/* ================================================================================================================== */
/* Animation Variants
/* ================================================================================================================== */
const wrapper: Variants = {
  final: {
    transition: {
      staggerChildren: 0.02
    }
  }
};

const item: Variants = {
  initial: {
    opacity: 0.8,
    y: -100
  },
  final: {
    opacity: 1,
    y: 0,
    transition: { damping: 9, type: "spring" }
  }
};

/* ================================================================================================================== */
/* Component
/* ================================================================================================================== */

const OverviewPage: React.FC = () => (
  <SidebarPage>
    <motion.div initial="initial" animate="final" variants={wrapper}>
      <motion.h1 variants={item} css={headingStyles}>
        Hey, <strong>Zeshan!</strong>
      </motion.h1>
      <motion.p variants={item} css={subheadingStyles}>
        Here is an overview of your progress so far.
      </motion.p>
      <motion.section variants={item} css={cardGridStyles}>
        <DeltaCard css={cardStyles} />
      </motion.section>
    </motion.div>
  </SidebarPage>
);

export default OverviewPage;
