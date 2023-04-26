import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";

function AcceptModal({ metadata, handleCloseButton, handleDownloadFile }) {
  return (
    <Wrapper>
      <Words>
        <Border>
          <p>File name : {metadata.name}</p>
          <p>File size : {metadata.size} bytes</p>
        </Border>
        <Info>Would you like to download a file?</Info>
      </Words>
      <DownloadButton type="button" onClick={handleDownloadFile}>
        Download
      </DownloadButton>
      <XButton type="button" onClick={handleCloseButton}>
        X
      </XButton>
    </Wrapper>
  );
}

export default AcceptModal;

const Wrapper = styled.div`
  position: absolute;
  width: 28vw;
  height: 32vh;
  left: 34vw;
  top: 3vh;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 1.4em;
`;

const Info = styled.p`
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  line-height: 1.5em;
  text-align: center;
`;

const Words = styled.div`
  position: absolute;
  width: 80%;
  height: 40%;
  left: 10%;
  top: 10%;

  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 1.1em;
  line-height: 1.1em;

  color: #000000;
`;

const Border = styled.div`
  border: none;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 0.5em;
  padding: 0.5em;
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  line-height: 1em;
  text-align: center;
`;

const DownloadButton = styled.button`
  appearance: none;
  background: white;
  border: 0.01em outset;
  position: absolute;
  border-radius: 0.3em;
  width: 32%;
  height: 15%;
  top: 77%;
  left: 9.5vw;
  font-size: 1.2em;
  color: #333333;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const XButton = styled.button`
  border: none;
  background: none;
  border-radius: 0.5em;
  position: absolute;
  top: 2vh;
  right: 0.5vw;
  font-size: 1em;
  font-weight: 700;
  color: #999999;
`;

AcceptModal.propTypes = {
  metadata: Proptypes.object.isRequired,
  handleCloseButton: Proptypes.func.isRequired,
  handleDownloadFile: Proptypes.func.isRequired,
};
