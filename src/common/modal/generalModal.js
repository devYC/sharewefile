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
            : "Would you like to download it?"}
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
  width: 100%;
  height: 100%;
  left: 34%;
  top: 3%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 1.4em;
  text-align: center;

  @media screen and (max-width: 320px) {
    width: 90vw;
    height: 40vh;
    left: 10vw;
    top: 9vh;
  }

  @media screen and (min-width: 321px) and (max-width: 639px) {
    width: 90vw;
    height: 34vh;
    left: 12%;
    top: 15%;
  }

  @media screen and (min-width: 640px) and (max-width: 1080px) {
    width: 70vw;
    height: 40vh;
    left: 25vw;
  }

  @media screen and (min-width: 1081px) {
    width: 50vw;
    height: 40vh;
    left: 30vw;
  }
`;

const Words = styled.div`
  position: absolute;
  width: 87%;
  height: 45%;
  left: 6%;
  top: 5%;
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 0.4em;
  color: #000000;

  @media screen and (max-width: 430px) {
    font-size: 0.8em;
  }
`;

const Info = styled.p`
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
  font-style: normal;
  font-weight: 700;
  font-size: 1.1em;
  line-height: 1em;
  margin: 0.2em;
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

  @media screen and (max-width: 320px) {
    font-size: 1em;
  }

  @media screen and (min-width: 321px) and (max-width: 639px) {
    font-size: 1.3em;
  }

  @media screen and (min-width: 640px) and (max-width: 1080px) {
    font-size: 1.5em;
  }

  @media screen and (min-width: 1081px) {
    font-size: 2em;
  }
`;

const PrimaryButton = styled.button`
  ${commonButtonStyle}
  left: 12%;
`;

const SecondaryButton = styled.button`
  ${commonButtonStyle}
  right: 12%;

  @media screen and (min-width: 431px) and (max-width: 768px) {
    width: 37%;
  }
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
