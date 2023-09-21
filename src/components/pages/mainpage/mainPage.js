import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { title } from "../../../common/constants/constants";
import BackgroundEffect from "../../../common/effect/backgroundEffect";

function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/sender"), 5000);
  }, []);

  return (
    <>
      <Header>{title}</Header>
      <BackgroundEffect />
    </>
  );
}

const Header = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 500%;
`;

export default Main;
