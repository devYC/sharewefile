import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

export default function GeneralModal({
  title,
  name,
  size,
  primaryAction,
  primaryButtonText,
  secondaryAction,
  secondaryButtonText,
  handleClose,
}) {
  return (
    <Wrapper>
      <Words>
        <Info>{title}</Info>
        <Border>
          <p>File name : {name}</p>
          <p>File size : {size} bytes</p>
        </Border>
        <Info>
          {primaryButtonText
            ? "Do you want to send it?"
            : "Would you like to download the file?"}
        </Info>
      </Words>
      {primaryButtonText && (
        <PrimaryButton type="button" onClick={primaryAction}>
          {primaryButtonText}
        </PrimaryButton>
      )}
      {secondaryButtonText && (
        <SecondaryButton type="button" onClick={secondaryAction}>
          {secondaryButtonText}
        </SecondaryButton>
      )}
      <CloseButton type="button" onClick={handleClose}>
        X
      </CloseButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 28%;
  height: 40%;
  left: 34vw;
  top: 3vh;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 1.4em;
  text-align: center;

  @media only screen and (max-device-width: 768px) and (-webkit-min-device-pixel-ratio: 2) {
    top: 18vh;
    left: 32vw;
    width: 30%;
    height: 20%;
  }
`;

const Words = styled.div`
  position: absolute;
  width: 87%;
  height: 45%;
  left: 6%;
  top: 5%;
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 0.4em;
  color: #000000;
`;

const Info = styled.p`
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  line-height: 0.4em;
`;

const Border = styled.div`
  border: none;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 0.5em;
  padding: 0.5em;
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 1.1em;
  line-height: 1em;
  margin: 0.2em;

  @media only screen and (max-device-width: 768px) and (-webkit-min-device-pixel-ratio: 2) {
    line-height: 1.5em;
  }
`;

const commonButtonStyle = css`
  appearance: none;
  font-size: 1.2em;
  background: white;
  border: 0.01em outset;
  border-radius: 0.3em;
  position: absolute;
  width: 32%;
  height: 15%;
  z-index: 1;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  top: 80%;
`;
const PrimaryButton = styled.button`
  ${commonButtonStyle}
  left: 12%;
`;
const SecondaryButton = styled.button`
  ${commonButtonStyle}
  right: 12%;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  border-radius: 0.5em;
  position: absolute;
  font-size: 1em;
  font-weight: 700;
  color: #999999;
  top: 2%;
  right: 2%;
`;

GeneralModal.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  handleClose: PropTypes.func.isRequired,
};
