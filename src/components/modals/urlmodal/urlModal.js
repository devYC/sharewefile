import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Proptypes from "prop-types";

function UrlModal({ onClose, urlAddress }) {
  const [description, setDescription] = useState("↑↑↑↑ Click this URL ↑↑↑↑");
  const URLaddress = `http://sharewefile.com/receiver/${urlAddress}`;
  const [showStartButton, setShowStartButton] = useState(false);
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

  useEffect(() => {
    setTimeout(() => {
      setShowStartButton(true);
    }, 5000);
  }, []);

  const handleClickStart = () => {
    window.location.href = "/sender";
  };

  return (
    <Wrapper>
      <URLwrapper onClick={handleCopyUrl}>
        <Description>{description}</Description>
        <URL tabIndex="0">{URLaddress}</URL>
      </URLwrapper>
      <Words>Share this URL to other user</Words>
      <CloseBtn onClick={onClose}>X</CloseBtn>
      {showStartButton && (
        <>
          <StartButton type="button" onClick={handleClickStart}>
            Start
          </StartButton>
          <Description>
            If receiver is ready, please click this Start button to share files!
          </Description>
        </>
      )}
    </Wrapper>
  );
}
export default UrlModal;

const Wrapper = styled.div`
  position: absolute;
  width: 40%;
  height: 28%;
  right: 0;
  top: 50vh;
  transform: translate(0, -50%);
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50px 0px 0px 50px;

  @media screen and (max-width: 600px) {
    width: 100%;
    top: 20vh;
    border-radius: 50px 50px 50px 50px;
  }

  @media screen and (min-width: 601px) and (max-width: 768px) {
    width: 48%;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    right: -7vw;
  }
`;

const Description = styled.p`
  position: absolute;
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  line-height: 1.2em;
  color: #333333;
  left: 1.5vw;
  text-align: center;
  animation: shake 2s linear infinite;

  @keyframes shake {
    0% {
      bottom: -7.5vh;
    }
    50% {
      bottom: -7vh;
    }
    100% {
      bottom: -7.5vh;
    }
  }

  @media screen and (min-width: 601px) and (max-width: 768px) {
    @keyframes shake {
      0% {
        bottom: -8.5vh;
      }
      50% {
        bottom: -8vh;
      }
      100% {
        bottom: -8.5vh;
      }
    }
  }
`;

const Words = styled.h3`
  position: absolute;
  width: 80%;
  right: 5vw;
  top: 2vh;
  font-style: normal;
  font-weight: 600;
  font-size: 1.4em;
  line-height: 1.2em;
  color: #333333;

  @media screen and (max-width: 280px) {
    font-size: 1em;
  }

  @media screen and (max-width: 720px) {
    width: 80%;
    font-size: 1em;
  }

  @media screen and (min-width: 721px) and (max-width: 1024px) {
    right: 1vw;
  }

  @media screen and (min-width: 1025px) {
    right: 3vw;
  }
`;

const URL = styled.div`
  box-sizing: border-box;
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 1.2em;
  color: #000000;
  padding: 2.5%;
  padding-left: 4%;
  border-radius: 2em;

  &:focus {
    font-weight: 700;
    font-style: italic;
  }

  @media screen and (max-width: 280px) {
    font-size: 0.8em;
  }

  @media screen and (min-width: 601px) and (max-width: 768px) {
    padding: 5%;
    line-height: 1.2em;
    font-size: 0.8em;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    line-height:: 1.4em;
  }
`;

const URLwrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 90%;
  right: 5vw;
  top: 12vh;
  border: 0.01em solid #999999;
  border-radius: 2em;

  @media screen and (max-width: 600px) {
    width: 84%;
    left: 5vw;
  }

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    right: 0;
  }

  @media screen and (min-width: 1025px) {
    right: 2vw;
  }
`;

const CloseBtn = styled.span`
  position: absolute;
  width: 2%;
  height: 4%;
  left: 1vw;
  top: 1vh;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5em;
  line-height: 1.3em;
  padding: 0.5em;
  color: #000000;
`;

const StartButton = styled.button`
  position: absolute;
  font-size: 1.2em;
  top: 34vh;
  right: 10vw;
  max-width: 20vw;
  max-height: 10vh;
  border-radius: 50px 50px 50px 50px;
  margin-top: 2vh;
  border: none;
  appearance: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: 601px) and (max-width: 768px) {
    right: 5vw;
  }
`;

UrlModal.propTypes = {
  onClose: Proptypes.func.isRequired,
  urlAddress: Proptypes.string.isRequired,
};
