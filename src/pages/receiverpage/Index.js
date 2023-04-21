import React, { useEffect, useState } from "react";
import styled from "styled-components";

import user4 from "../../assets/usericons/user4.svg";
import receiverRTCconfig from "../../config/receiverRTCconfig";
import { remoteConnection } from "../../config/receiverRTCconfig";
import SenderIcon from "../../common/components/modal/sendericon/Index";

function Receiver() {
  const [showSender, setShowSender] = useState(false);

  const handleInitialConnectionState = () => {
    if (remoteConnection.connectionState === "connected") {
      setShowSender(true);
    }
  };

  const handleConnectionStateChange = () => {
    if (remoteConnection.connectionState === "connected") {
      setShowSender(true);
    } else if (remoteConnection.connectionState === "disconnected") {
      setShowSender(false);
    }
  };

  useEffect(() => {
    receiverRTCconfig();

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
      <Elipse1 />
      <Name>Receiver</Name>
      <UserImg src={user4} alt="receiver" />
      {showSender && <SenderIcon />}
    </>
  );
}

const Name = styled.h2`
  font-size: 1.3em;
  font-weight: 400;
  padding: 0.4em;
  background: rgba(0, 0, 0, 0.2);
  top: 60vh;
  left: 50vw;
  position: absolute;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
`;

const Circle = styled.div`
  top: 50vh;
  left: 50vw;
  position: absolute;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  border: 0.5px solid rgba(255, 255, 255, 0.6);
`;

const Common = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 100%;
`;

const Elipse1 = styled(Circle)`
  width: 60vw;
  height: 60vw;
  max-width: 40em;
  max-height: 40em;
`;

const UserImg = styled(Common)`
  width: 17vw;
  height: 17vw;
  max-width: 10.2em;
  max-height: 10.2em;
  top: 48vh;
  left: 50vw;
`;

export default Receiver;
