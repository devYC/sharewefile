import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import senderRTCconnection from "../../../RTCconnection/senderRTCConnection";
import { localConnection } from "../../../RTCconnection/senderRTCConnection";
import ReceiverIcon from "../../icons/receivericon/receiverIcon";
import {
  generateURL,
  getUrlFromSessionStorage,
} from "../../../common/utils/receiverURL.util";
import PageEffect from "../../../common/effect/pageEffect";
import ModalEffect from "../../../common/effect/modalEffect";
import UrlModal from "../../modals/urlmodal/urlModal";

function Sender() {
  const [showUrlModal, setShowUrlModal] = useState(false);
  const [showReceiver, setShowReceiver] = useState(false);
  const [urlAddress, setUrlAddress] = useState("");

  useEffect(() => {
    const existingUrl = getUrlFromSessionStorage();

    if (existingUrl) {
      setUrlAddress(existingUrl);
    } else {
      const newUrl = generateURL();
      setUrlAddress(newUrl);
    }
  }, []);

  const handleInitialConnectionState = useCallback(() => {
    if (localConnection.connectionState !== "connected") return;
    setShowReceiver(true);
  }, [localConnection.connectionState]);

  const handleConnectionStateChange = useCallback(() => {
    if (localConnection.connectionState === "connected") {
      setShowReceiver(true);
    } else if (localConnection.connectionState === "disconnected") {
      setShowReceiver(false);
    }
  }, [localConnection.connectionState]);

  useEffect(() => {
    senderRTCconnection();

    localConnection.addEventListener(
      "connectionstatechange",
      handleConnectionStateChange
    );
    handleInitialConnectionState();
    return () => {
      localConnection.removeEventListener(
        "connectionstatechange",
        handleConnectionStateChange
      );
    };
  }, []);

  const handleUrlShow = () => {
    setShowUrlModal(true);
  };

  const handleModalClose = () => {
    setShowUrlModal(false);
  };

  const handleButtonClick = () => {
    handleUrlShow();
  };

  return (
    <>
      <PageEffect
        name="Sender"
        src="/assets/usericons/sender.svg"
        alt="sender"
      />
      <URLButton type="button" onClick={handleButtonClick} />
      <ModalEffect show={showUrlModal}>
        {showUrlModal && (
          <UrlModal onClose={handleModalClose} urlAddress={urlAddress} />
        )}
      </ModalEffect>
      {showReceiver && <ReceiverIcon />}
    </>
  );
}

const URLButton = styled.button`
  position: absolute;
  left: 50vw;
  transform: translate(-50%, -50%);
  min-width: 53px;
  min-height: 53px;
  border: none;
  border-radius: 100%;
  appearance: none;
  background: center no-repeat url("/assets/buttonicons/url.svg");
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 430px) {
    top: 72vh;
  }

  @media screen and (min-width: 431px) and (max-width: 768px) {
    top: 68vh;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    top: 72vh;
  }

  @media screen and (min-width: 1025px) {
    top: 72vh;
  }
`;

export default Sender;
