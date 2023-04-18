import React, { useState } from "react";
import styled from "styled-components";

import user3 from "../../assets/usericons/user3.svg";
import url from "../../assets/buttonicons/URL.svg";

function Sender() {
  const [showUrlModal, setShowUrlModal] = useState(false);

  const handleUrlShow = () => {
    setShowUrlModal(true);
  };

  const handleButtonClick = () => {
    handleUrlShow();
  };

  return (
    <>
      <Elipse1 />
      <Name>Sender</Name>
      <UserImg src={user3} alt="sender" />
      <URLButton type="button" onClick={handleButtonClick} />
    </>
  );
}

const Name = styled.h2`
  font-size: 1.3em;
  font-weight: 400;
  padding: 0.4em;
  background: rgba(0, 0, 0, 0.2);
  top: 60vh;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  margin-bottom: 1em;
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

const URLButton = styled.button`
  position: absolute;
  top: 70vh;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8vw;
  height: 8vw;
  max-width: 4em;
  max-height: 4em;
  border: none;
  border-radius: 100%;
  appearance: none;
  background: center no-repeat url(${url});
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  -webkit-transform: translate(-50%, -50%);
`;

export default Sender;
