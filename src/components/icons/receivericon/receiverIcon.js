import React, { useState, useRef } from "react";
import styled from "styled-components";

import { dataChannel } from "../../../RTCconnection/senderRTCConnection";
import FileMetadata from "../../modals/filemetadata/fileMetaData";
import ReceivingLine from "../../arrow/receivingline/receivingLine";
import { CHUNK_SIZE } from "../../../common/constants/constants";
import fileInformationSender from "../../../common/utils/sendFileMetaData.util";
import ModalEffect from "../../../common/effect/modalEffect";
import IconEffect from "../../../common/effect/iconEffect";

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

  const readerLoad = reader => () => {
    let buffer = new Uint8Array(reader.result);

    const sendNextChunk = () => {
      while (buffer.byteLength) {
        if (
          dataChannel.bufferedAmount > dataChannel.bufferedAmountLowThreshold
        ) {
          dataChannel.onbufferedamountlow = () => {
            dataChannel.onbufferedamountlow = null;
            sendNextChunk();
          };

          return;
        }

        const chunk = buffer.slice(0, CHUNK_SIZE);
        buffer = buffer.slice(CHUNK_SIZE, buffer.byteLength);
        dataChannel.send(chunk);
      }

      setActiveLine(false);
    };

    sendNextChunk();
  };

  const fileSender = (file, dataChannel) => {
    const reader = new FileReader();
    reader.onload = readerLoad(reader);
    reader.readAsArrayBuffer(file);
  };

  const handleSendFile = () => {
    setActiveLine(true);

    if (file && dataChannel.readyState === "open") {
      fileInformationSender(file, dataChannel);
      fileSender(file, dataChannel);
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
      <IconEffect
        name="Receiver"
        src="/assets/usericons/receiver.svg"
        alt="receiver"
      />
      <Button type="submit" onClick={handleSelectFile} />
      <HiddenInput
        onChange={handleChangeFile}
        type="file"
        ref={fileInputRef}
        multiple
      />
      <ModalEffect show={showFile}>
        {showFile && (
          <FileMetadata
            filemetadata={file}
            handleCloseFileModal={handleCloseFileModal}
            handleSendFile={handleSendFile}
          />
        )}
      </ModalEffect>
      {activeLine && <ReceivingLine />}
    </>
  );
}

export default ReceiverIcon;

const Button = styled.button`
  appearance: none;
  background: center no-repeat url("/assets/buttonicons/folder.svg");
  width: 2em;
  height: 2em;
  padding: 2em;
  border-radius: 2em;
  position: absolute;
  top: 30%;
  left: 4%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: 431px) and (max-width: 600x) {
    left: 6%;
  }

  @media screen and (min-width: 601px) and (max-width: 900px) {
    left: 8%;
  }

  @media screen and (min-width: 901px) and (max-width: 1024px) {
    left: 13%;
  }

  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    left: 14%;
  }

  @media screen and (min-width: 1281px) and (max-width: 2560px) {
    left: 21%;
  }

  @media screen and (min-width: 2561px) {
    left: 28%;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;
