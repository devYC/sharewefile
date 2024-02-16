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
            style={{ maxWidth: "90%", maxHeight: "90%" }}
            margin-top="1vh"
          />
        );
      default:
        return (
          <p>Image Files are only available such as png, svg, jpeg so on.</p>
        );
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
              [Preview]
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
  width: 100vw;
  height: 29vh;
  border-radius: 1em;
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 3vh;
  right: 0;
  color: #333333;
  padding: 1em;
  line-height: 2em;
  text-align: center;

  @media screen and (max-width: 320px) {
    max-width: 50vw;
    top: 64vh;
    right: 0;
  }

  @media screen and (min-width: 321px) and (max-width: 639px) {
    top: 68vh;
    right: 0;
    max-width: 50vw;
  }

  @media screen and (min-width: 640px) and (max-width: 1080px) {
    top: 72vh;
    right: 0;
    max-width: 60vw;
  }

  @media screen and (min-width: 1081px) {
    top: 7vh;
    width: 100vw;
    max-width: 30vw;
    height: 50vh;
  }
`;

const Preview = styled.div`
  width: 80vw;
  height: 80vh;
  position: absolute;
  top: 8vh;
  left: 8vh;
  z-index: 1;

  @media screen and (max-width: 320px) {
    top: 10vh;
    left: 7vw;
  }

  @media screen and (min-width: 321px) and (max-width: 639px) {
    width: 39vw;
  }

  @media screen and (min-width: 640px) and (max-width: 1080px) {
    top: 5vh
    right: 1vh;
    height: 27vh;
    max-width: 58vw;
  }

  @media screen and (min-width: 1081px) {
    top: 6vh;
    width: 100vw;
    max-width: 30vw;
    height: 50vh;
    left: 0;
  }
`;
