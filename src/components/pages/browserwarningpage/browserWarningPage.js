import React from "react";
import styled from "styled-components";
import BackgroundEffect from "../../../common/effect/backgroundEffect";
import { browserWarningTitle } from "../../../common/constants/constants";

export default function BrowserWarning() {
  return (
    <>
      <Header>{browserWarningTitle}</Header>
      <BackgroundEffect />
    </>
  );
}

const Header = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 200%;
`;
