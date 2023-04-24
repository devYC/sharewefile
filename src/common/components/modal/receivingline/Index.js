import React from "react";
import styled, { keyframes } from "styled-components";

function ReceivingLine() {
  return <MovingLine />;
}

export default ReceivingLine;

const move = keyframes`
from {
  transform: rotate(-145deg) translate(-100%, 100%);
}
to {
  transform: rotate(-145deg) translate(0, 0);
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
    top: -15px;
    right: -10px;
    border-top: 15px solid transparent;
    border-left: 15px solid rgba(255, 255, 255, 0.8);
    border-bottom: 15px solid transparent;
    transform: rotate(0deg);
  }
`;
