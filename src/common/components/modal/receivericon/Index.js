import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";

import folder from "../../../../assets/buttonicons/folder.svg";
import user4 from "../../../../assets/usericons/user4.svg";
import { dataChannel } from "../../../../config/senderRTCconfig";
import { CHUNK_SIZE } from "../../../../constants/constants";
import FileMetadata from "../filemetatdata/Index";
import ReceivingLine from "../receivingline/Index";

function ReceiverIcon() {
  const [file, setFile] = useState(null);
  const [showFile, setShowFile] = useState(false);
  const [activeLine, setActiveLine] = useState(false);

  const fileInputRef = useRef("");

  const handleSelectFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleChangeFile = e => {
    setFile(e.target.files[0]);
    setShowFile(true);
  };

  const handleSendFile = () => {
    setActiveLine(true);
    if (file && dataChannel.readyState === "open") {
      const sendMetadata = () => {
        const message = {
          name: file.name,
          type: file.type,
          size: file.size,
        };
        dataChannel.send(JSON.stringify(message));
      };
      sendMetadata();

      const reader = new FileReader();
      reader.onload = () => {
        const sendBuffer = () => {
          let byteOffset = 0;
          const buffer = new Uint8Array(reader.result);

          function sendNextChunk() {
            if (dataChannel.bufferedAmount < CHUNK_SIZE) {
              const chunk = buffer.slice(byteOffset, byteOffset + CHUNK_SIZE);
              dataChannel.send(chunk);

              byteOffset += CHUNK_SIZE;

              if (byteOffset < buffer.length) {
                setTimeout(sendNextChunk, 0);
              } else {
                setActiveLine(false);
              }
            } else {
              setTimeout(sendNextChunk, 0.0001);
            }
          }

          sendNextChunk();
        };

        sendBuffer();
      };

      reader.readAsArrayBuffer(file);
    } else {
      console.log("Data channel is not open or no file is selected");
    }
    setShowFile(false);
  };

  const handleCloseFileModal = () => {
    setShowFile(false);
  };

  return (
    <>
      <Name>Receiver</Name>
      <UserImg src={user4} alt="receiver" />
      <Button type="submit" onClick={handleSelectFile} />
      <HiddenInput
        onChange={handleChangeFile}
        type="file"
        ref={fileInputRef}
        multiple
      />
      <ModalContainer show={showFile}>
        {showFile && (
          <FileMetadata
            filemetadata={file}
            handleCloseFileModal={handleCloseFileModal}
            handleSendFile={handleSendFile}
          />
        )}
      </ModalContainer>
      {activeLine && <ReceivingLine />}
    </>
  );
}

export default ReceiverIcon;

const Name = styled.h2`
  font-size: 1.1em;
  font-weight: 600;
  top: 36vh;
  left: 29vw;
  position: absolute;
  transform: translate(-50%, -50%);

  @media only screen and (max-device-width: 768px) and (-webkit-min-device-pixel-ratio: 2) {
    top: 40vh;
    left: 25vw;
  }
`;

const Common = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 100%;
`;

const UserImg = styled(Common)`
  width: 5em;
  height: 5em;
  top: 30vh;
  left: 29vw;

  @media only screen and (max-device-width: 768px) and (-webkit-min-device-pixel-ratio: 2) {
    top: 37.5vh;
    left: 25vw;
  }
`;

const Button = styled.button`
  appearance: none;
  background: center no-repeat url(${folder});
  width: 2em;
  height: 2em;
  padding: 2em;
  border-radius: 2em;
  position: absolute;
  top: 40vh;
  left: 27vw;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media only screen and (max-device-width: 768px) and (-webkit-min-device-pixel-ratio: 2) {
    top: 42vh;
    left: 22vw;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ModalContainer = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  animation: ${fadeIn} 600ms ease-in-out;
`;
