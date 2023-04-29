import React from "react";
import styled from "styled-components";

export default function VersionWarning() {
  return (
    <Wrapper>
      <Words>Please use the latest version of your browser.</Words>
    </Wrapper>
  );
}

const Words = styled.p`
  color: white;
  font-size: 200%;
  text-align: center;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 60vh;
  left: 50vw;
  transform: translate(-50%, -50%);
`;
