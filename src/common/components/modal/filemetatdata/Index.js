import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";

function FileMetadataModal({
  filemetadata,
  handleCloseFileModal,
  handleSendFile,
}) {
  return (
    <Wrapper>
      <Words>
        <Info>[ File Selected ]</Info>
        <Border>
          <p>File name : {filemetadata.name}</p>
          <p>File size : {filemetadata.size} bytes</p>
        </Border>
        <Info>Do you want to send it?</Info>
      </Words>
      <YesButton type="button" onClick={handleSendFile}>
        Yes
      </YesButton>
      <NoButton type="button" onClick={handleCloseFileModal}>
        No
      </NoButton>
    </Wrapper>
  );
}

export default FileMetadataModal;

const Wrapper = styled.div`
  position: absolute;
  width: 28%;
  height: 32%;
  left: 34vw;
  top: 3vh;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 1.4em;
  text-align: center;
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
  text-align: center;
  margin: 0.2em;
`;

const Info = styled.p`
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  line-height: 0.4em;
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

const YesButton = styled.button`
  appearance: none;
  font-size: 1.2em;
  background: white;
  border: 0.01em outset;
  border-radius: 0.3em;
  position: absolute;
  width: 32%;
  height: 15%;
  top: 25vh;
  left: 3.5vw;
  z-index: 1;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const NoButton = styled.button`
  appearance: none;
  background: white;
  border: 0.01em outset;
  border-radius: 0.3em;
  position: absolute;
  width: 32%;
  height: 15%;
  top: 25vh;
  left: 16.5vw;
  font-size: 1.2em;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

FileMetadataModal.propTypes = {
  filemetadata: Proptypes.object.isRequired,
};
