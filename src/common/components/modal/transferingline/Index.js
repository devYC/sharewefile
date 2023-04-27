import React from "react";
import styled, { keyframes } from "styled-components";

function TransferingLine() {
  return <MovingLine />;
}

export default TransferingLine;

const move = keyframes`
from {
  transform: rotate(-145deg) translate(0, 0);
}
to {
  transform: rotate(-145deg) translate(-100%, 100%);
}
`;

const MovingLine = styled.div`
  position: absolute;
  width: 50px;
  height: 0;
  left: 35vw;
  top: 40vh;
  border: 3px dashed rgba(255, 255, 255, 0.8);
  animation: ${move} 1s linear infinite;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    top: -14px;
    right: 50px;
    border-top: 15px solid transparent;
    border-left: 15px solid rgba(255, 255, 255, 0.8);
    border-bottom: 15px solid transparent;
    transform: rotate(-180deg);
  }

  @media only screen and (max-device-width: 768px) and (-webkit-min-device-pixel-ratio: 2) {
    top: 43vh;
    left: 30vw;
  }
`;
