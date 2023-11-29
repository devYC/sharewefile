import React from "react";
import styled from "styled-components";
import BackgroundEffect from "../../../common/effect/backgroundEffect";
import { mobileWarningTitle } from "../../../common/constants/constants";

export default function MobileWarningPage() {
  return (
    <>
      <Header>{mobileWarningTitle} </Header>
      <BackgroundEffect />
    </>
  );
}

const Header = styled.div`
  font-size: 200%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
