import React, { useRef, useState } from "react";
import styled from "styled-components";

import user3 from "../../../../assets/usericons/user3.svg";
import { remoteConnection } from "../../../../config/receiverRTCconfig";
import AcceptModal from "../acceptmodal/Index";
import TransferingLine from "../transferingline/Index";

function SenderIcon() {
  const metadataRef = useRef("");
  const [transfering, setTransfering] = useState(false);
  const [metadata, setMetadata] = useState(null);
  const [downloadLink, setDownloadLink] = useState("");
  const [fileUrl, setFileUrl] = useState(null);
  const [fileType, setFileType] = useState(null);

  const handleCloseButton = () => {
    setDownloadLink("");
  };

  remoteConnection.ondatachannel = e => {
    const receiveChannel = e.channel;
    let chunksBuffer = [];

    receiveChannel.onmessage = e => {
      if (typeof e.data === "string") {
        metadataRef.current = JSON.parse(e.data);
        setMetadata(metadataRef.current);
      }

      if (typeof e.data === "object") {
        const fileBuffer = e.data;
        chunksBuffer.push(fileBuffer);

        const receivedSize = chunksBuffer.reduce(
          (acc, chunk) => acc + chunk.byteLength,
          0
        );

        if (receivedSize === metadataRef.current.size) {
          const fileBlob = new Blob(chunksBuffer, {
            type: metadataRef.current.type,
          });

          const fileUrl = URL.createObjectURL(fileBlob);

          setFileUrl(fileUrl);
          setFileType(metadataRef.current.type.split("/")[0]);

          const link = document.createElement("a");
          link.href = fileUrl;
          link.download = metadataRef.current.name;
          setDownloadLink(link);

          chunksBuffer = [];
        }
      }
    };
  };

  const handleDownloadFile = () => {
    setTransfering(true);
    downloadLink.download = metadataRef.current.name;
    downloadLink.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      })
    );
    setDownloadLink("");
    setTimeout(() => {
      setTransfering(false);
    }, 1000);
  };

  return (
    <>
      <Name>Sender</Name>
      <UserImg src={user3} alt="sender" />
      {downloadLink !== "" && (
        <AcceptModal
          metadata={metadata}
          handleCloseButton={handleCloseButton}
          handleDownloadFile={handleDownloadFile}
        />
      )}
      {transfering && <TransferingLine />}
    </>
  );
}

export default SenderIcon;

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
  left: 29.5vw;

  @media only screen and (max-device-width: 768px) and (-webkit-min-device-pixel-ratio: 2) {
    top: 37.5vh;
    left: 25vw;
  }
`;
