import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import title from "../../constants/constants";

function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    const pageEffect = setTimeout(() => {
      navigate("/sender");
    }, 5000);

    return () => clearTimeout(pageEffect);
  }, [navigate]);

  return (
    <>
      <Header>{title}</Header>
      <Elipse1 />
      <Elipse2 />
      <Elipse3 />
      <Elipse4 />
    </>
  );
}

const Header = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 500%;
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
  height: 20em;
  width: 20em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
  box-sizing: border-box;
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  -webkit-animation: pulse 2s ease-in-out infinite;
  -moz-animation: pulse 2s ease-in-out infinite;
  animation: pulse 2s ease-in-out infinite;
`;

const Elipse2 = styled(SignalingEffect)`
  width: 40em;
  height: 40em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
  box-sizing: border-box;
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  -webkit-animation: pulse 3s ease-in-out infinite;
  -moz-animation: pulse 3s ease-in-out infinite;
  animation: pulse 3s ease-in-out infinite;
`;

const Elipse3 = styled(SignalingEffect)`
  height: 60em;
  width: 60em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
  box-sizing: border-box;
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  -webkit-animation: pulse 4s ease-in-out infinite;
  -moz-animation: pulse 4s ease-in-out infinite;
  animation: pulse 4s ease-in-out infinite;
`;

const Elipse4 = styled(SignalingEffect)`
  width: 80em;
  height: 80em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
  box-sizing: border-box;
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  animation: pulse 5s ease-in-out infinite;
`;

export default Main;
