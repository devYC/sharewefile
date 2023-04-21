import React from "react";
import styled from "styled-components";

import user3 from "../../../../assets/usericons/user3.svg";

function SenderIcon() {
  return (
    <>
      <Name>Sender</Name>
      <UserImg src={user3} alt="sender" />
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
`;
