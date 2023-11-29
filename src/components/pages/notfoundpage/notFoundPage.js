import React from "react";
import styled from "styled-components";

import BackgroundEffect from "../../../common/effect/backgroundEffect";
import { notFoundTitle } from "../../../common/constants/constants";

export default function NotFound() {
  return (
    <>
      <Header>{notFoundTitle}</Header>
      <BackgroundEffect />
    </>
  );
}

const Header = styled.div`
  font-size: 200%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
