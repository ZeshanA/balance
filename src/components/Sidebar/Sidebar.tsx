/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { faWeight } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import colors from "styles/colors";
import fonts from "styles/fonts";
import { motion } from "framer-motion";

/* ================================================================================================================== */
/* Styles
/* ================================================================================================================== */
const wrapperStyles = css`
  min-width: 280px;
  background-color: ${colors.neutrals.grey[9]};
  height: 100vh;
`;

const logoStyles = css`
  width: 100%;
  padding: 30px;
  text-align: center;
  color: ${colors.primary.purple[5]};
  font-weight: 400;
  font-size: ${fonts.sizes[4]};
  box-sizing: border-box;

  svg {
    margin-right: 2px;
  }
`;

/* ================================================================================================================== */
/* Components
/* ================================================================================================================== */
const Sidebar: React.FC = () => (
  <AnimatedContainer css={wrapperStyles}>
    <div css={logoStyles}>
      <FontAwesomeIcon icon={faWeight} /> Balance
    </div>
  </AnimatedContainer>
);

const AnimatedContainer: React.FC = props => (
  <motion.section
    {...props}
    initial={{ x: -50, opacity: 0.8 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ damping: 9, type: "spring" }}
  />
);

export default Sidebar;
