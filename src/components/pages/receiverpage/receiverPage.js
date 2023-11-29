import React, { useCallback, useEffect, useState } from "react";

import receiverRTCconnection from "../../../RTCconnection/receiverRTCConnection";
import { remoteConnection } from "../../../RTCconnection/receiverRTCConnection";
import SenderIcon from "../../icons/sendericon/senderIcon";
import PageEffect from "../../../common/effect/pageEffect";

function Receiver() {
  const [showSender, setShowSender] = useState(false);

  const handleInitialConnectionState = useCallback(() => {
    if (remoteConnection.connectionState !== "connected") return;
    setShowSender(true);
  }, [remoteConnection.connectionState]);

  const handleConnectionStateChange = useCallback(() => {
    if (remoteConnection.connectionState === "connected") {
      setShowSender(true);
    } else if (remoteConnection.connectionState === "disconnected") {
      setShowSender(false);
    }
  }, [remoteConnection.connectionState]);

  useEffect(() => {
    receiverRTCconnection();

    remoteConnection.addEventListener(
      "connectionstatechange",
      handleConnectionStateChange
    );
    handleInitialConnectionState();
    return () => {
      remoteConnection.removeEventListener(
        "connectionstatechange",
        handleConnectionStateChange
      );
    };
  }, []);

  return (
    <>
      <PageEffect
        name="Receiver"
        src="/assets/usericons/receiver.svg"
        alt="receiver"
      />
      {showSender && <SenderIcon />}
    </>
  );
}

export default Receiver;
