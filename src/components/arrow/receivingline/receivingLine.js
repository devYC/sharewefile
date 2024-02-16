import styled, { keyframes } from "styled-components";

export default function ReceivingLine() {
  return <MovingLine />;
}

const move = keyframes`
from {
  transform: rotate(-145deg) translate(-100%, 100%);
}
to {
  transform: rotate(-145deg) translate(0, 0);
}
`;

const mobileMoving = keyframes`
  from {
    transform: rotate(-125deg) translate(-100%, 100%);
  } to {
    transform: rotate(-125deg) translate(0,0);
  }
`;

const MovingLine = styled.div`
  position: absolute;
  width: 50px;
  height: 0;
  left: 35%;
  top: 40%;
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

  @media screen and (max-width: 430px) {
    left: 25%;
    top: 30%;
    animation: ${mobileMoving} 1s linear infinite;
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
