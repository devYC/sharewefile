import React from "react";
import styled, { keyframes } from "styled-components";

export default function NotFound() {
  return (
    <Wrapper>
      <Words>Not Found</Words>
      <Words>You should check URL address again</Words>
      <Elipse1 />
      <Elipse2 />
      <Elipse3 />
      <Elipse4 />
    </Wrapper>
  );
}

const Words = styled.p`
  color: white;
  font-size: 200%;
  text-align: center;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
`;

const SignalingEffect = styled.div`
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.3;
    }
    100% {
      transform: scale(1);
      opacity: 0.8;
    }
  }
`;

const Elipse1 = styled(SignalingEffect)`
  height: 12em;
  width: 12em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
  box-sizing: border-box;
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  animation: pulse 2s ease-in-out infinite;
`;

const Elipse2 = styled(SignalingEffect)`
  width: 24em;
  height: 24em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
  box-sizing: border-box;
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  animation: pulse 3s ease-in-out infinite;
`;

const Elipse3 = styled(SignalingEffect)`
  height: 36em;
  width: 36em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
  box-sizing: border-box;
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  animation: pulse 4s ease-in-out infinite;
`;

const Elipse4 = styled(SignalingEffect)`
  width: 50em;
  height: 50em;
  position: fixed;
  top: 0;
  left: -20%;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
  box-sizing: border-box;
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  animation: pulse 5s ease-in-out infinite;
`;
