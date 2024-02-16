import styled, { keyframes } from "styled-components";

export default function TransferingLine() {
  return <MovingLine />;
}

const move = keyframes`
from {
  transform: rotate(-145deg) translate(0, 0);
}
to {
  transform: rotate(-145deg) translate(-100%, 100%);
}
`;

const mobileMovement = keyframes`
  from {
    transform: rotate(-125deg) translate(0,0);
  } to {
    transform: rotate(-125deg) translate(-100%, 100%);
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

  @media screen and (max-width: 430px) {
    left: 25%;
    top: 30%;
    animation: ${mobileMovement} 1s linear infinite;
  }

  @media screen and (min-width: 431px) and (max-width: 768px) {
    left: 25%;
    top: 30%;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    left: 25%;
    top: 30%;
  }

  @media screen and (min-width: 1025px) {
    left: 27%;
    top: 36%;
  }
`;
