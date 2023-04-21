import React from "react";
import styled from "styled-components";

import folder from "../../../../assets/buttonicons/folder.svg";
import user4 from "../../../../assets/usericons/user4.svg";

function ReceiverIcon() {
  return (
    <>
      <Name>Receiver</Name>
      <UserImg src={user4} alt="receiver" />
      <Button type="submit" />
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
`;
