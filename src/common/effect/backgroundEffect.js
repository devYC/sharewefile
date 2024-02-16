import styled, { keyframes, css } from "styled-components";

export const pulseAnimation = keyframes`
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
      opacity(0.8);
    }
`;

function BackgroundEffect() {
  return (
    <>
      <Elipse1 />
      <Elipse2 />
      <Elipse3 />
      <Elipse4 />
    </>
  );
}

const commonElipseStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
  box-sizing: border-box;
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  animation: ${pulseAnimation} 2s ease-in-out infinite;
`;

const Elipse1 = styled.div`
  ${commonElipseStyle}
  height: 20%;
  width: 20%;
  animation: ${pulseAnimation} 2s ease-in-out infinite;
`;

const Elipse2 = styled.div`
  ${commonElipseStyle}
  width: 40%;
  height: 40%;
  animation: ${pulseAnimation} 3s ease-in-out infinite;
`;

const Elipse3 = styled.div`
  ${commonElipseStyle}
  height: 60%;
  width: 60%;
  animation: ${pulseAnimation} 4s ease-in-out infinite;
`;

const Elipse4 = styled.div`
  ${commonElipseStyle}
  width: 80%;
  height: 80%;
  animation: ${pulseAnimation} 5s ease-in-out infinite;
`;

export default BackgroundEffect;
