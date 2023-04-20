import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Proptypes from "prop-types";

function UrlModal({ onClose, randomUrl }) {
  const [description, setDescription] = useState("Click this URL");
  const URLaddress = `http://192.168.219.103:3000/${randomUrl}`;

  const handleCopyUrl = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(URLaddress);
        setDescription("URL copied to clipboard");
      } catch (err) {
        console.warn(err);
      }
    }
  };

  return (
    <Wrapper>
      <URLwrapper onClick={handleCopyUrl}>
        <Description>{description}</Description>
        <URL tabIndex="0">{URLaddress}</URL>
      </URLwrapper>
      <Words>Share this URL to other user</Words>
      <CloseBtn onClick={onClose}>X</CloseBtn>
    </Wrapper>
  );
}

export default UrlModal;

const Wrapper = styled.div`
  position: absolute;
  width: 40%;
  height: 28%;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50px 0px 0px 50px;

  @media only screen and (max-device-width: 768px) and (-webkit-min-device-pixel-ratio: 2) {
    height: 20%;
    top: 55%;
  }
`;

const Description = styled.p`
  position: absolute;
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  line-height: 1.2em;
  color: #333333;
  left: 1.5vw;
  animation: shake 2s linear infinite;

  @keyframes shake {
    0% {
      bottom: -6.5vh;
    }
    50% {
      bottom: -6vh;
    }
    100% {
      bottom: -6.5vh;
    }
  }

  @media only screen and (max-device-width: 768px) and (-webkit-min-device-pixel-ratio: 2) {
    animation: shake 2s linear infinite;

    @keyframes shake {
      0% {
        bottom: -3vh;
      }
      50% {
        bottom: -4vh;
      }
      100% {
        bottom: -3vh;
      }
    }
  }
`;

const Words = styled.h3`
  position: absolute;
  width: 85%;
  height: 20%;
  right: 1vw;
  top: 5vh;
  font-family: "Arial";
  font-style: normal;
  font-weight: 600;
  font-size: 1.4em;
  line-height: 1.4em;
  color: #333333;

  @media only screen and (max-device-width: 768px) and (-webkit-min-device-pixel-ratio: 2) {
    top: 3.5vh;
  }
`;

const URL = styled.div`
  box-sizing: border-box;
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 1em;
  color: #000000;
  padding: 2.5%;
  padding-left: 5%;
  border-radius: 2em;

  &:focus {
    font-weight: 700;
    font-style: italic;
  }
`;

const URLwrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 90%;
  height: 20%;
  right: 0.5em;
  top: 14vh;
  border: 0.01em solid #999999;
  border-radius: 2em;
`;

const CloseBtn = styled.span`
  position: absolute;
  width: 2%;
  height: 4%;
  left: 0.5em;
  top: 0.5em;

  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5em;
  line-height: 1.3em;
  padding: 0.5em;
  color: #000000;
`;

UrlModal.propTypes = {
  onClose: Proptypes.func.isRequired,
  randomUrl: Proptypes.string.isRequired,
};
