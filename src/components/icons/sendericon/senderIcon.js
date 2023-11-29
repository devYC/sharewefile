import React, { useRef, useState } from "react";
import styled from "styled-components";

import { remoteConnection } from "../../../RTCconnection/receiverRTCConnection";
import AcceptModal from "../../modals/acceptmodal/acceptModal";
import TransferingLine from "../../arrow/transferingline/transferingLine";
import IconEffect from "../../../common/effect/iconEffect";
import ModalEffect from "../../../common/effect/modalEffect";

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

  const createFile = chunksBuffer => {
    const fileBlob = new Blob(chunksBuffer, {
      type: metadataRef.current.type,
    });

    const fileUrl = URL.createObjectURL(fileBlob);

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = metadataRef.current.name;

    return {
      fileUrl,
      fileType: metadataRef.current.type.split("/")[0],
      downloadLink: link,
    };
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
          const { fileUrl, fileType, downloadLink } = createFile(chunksBuffer);

          setFileUrl(fileUrl);
          setFileType(fileType);
          setDownloadLink(downloadLink);

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

  const renderPreview = () => {
    if (!metadataRef.current) return null;
    switch (fileType) {
      case "image":
        return (
          <img
            src={fileUrl}
            alt="Preview"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        );
      default:
        return <p>Image File is available.</p>;
    }
  };

  return (
    <>
      <IconEffect name="Sender" src="/assets/usericons/sender.svg" />
      <ModalEffect show={downloadLink !== ""}>
        {downloadLink !== "" && (
          <>
            <AcceptModal
              metadata={metadata}
              handleCloseButton={handleCloseButton}
              handleDownloadFile={handleDownloadFile}
            />
            <PreviewContainer>
              Preview
              <Preview>{renderPreview()}</Preview>
            </PreviewContainer>
          </>
        )}
      </ModalEffect>
      {transfering && <TransferingLine />}
    </>
  );
}
export default SenderIcon;

const PreviewContainer = styled.div`
  width: 18%;
  height: 29%;
  border-radius: 1em;
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 3vh;
  left: 63vw;
  color: #333333;
  padding: 1em;
  line-height: 2em;

  @media only screen and (max-device-width: 768px) and (-webkit-min-device-pixel-ratio: 2) {
    left: 65vw;
    top: 15vh;
    width: 25%;
    height: 20%;
  }
`;

const Preview = styled.div`
  width: 80%;
  height: 80%;
  position: absolute;
  top: 5vh;
  left: 8vh;
  z-index: 1;

  @media only screen and (max-device-width: 768px) and (-webkit-min-device-pixel-ratio: 2) {
    left: 4vw;
    top: 3vh;
    width: 70%;
    height: 100%;
  }
`;
