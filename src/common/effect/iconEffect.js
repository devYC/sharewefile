import styled from "styled-components";

export default function IconEffect({ name, src }) {
  return (
    <>
      <Name>{name}</Name>
      <UserIcon src={src} />
    </>
  );
}

const Name = styled.h2`
  font-size: 1.1em;
  font-weight: 600;
  top: 26%;
  left: 12%;
  position: absolute;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 901px) and (max-width: 1024px) {
    left: 16%;
  }

  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    left: 17%;
  }

  @media screen and (min-width: 1281px) and (max-width: 2560px) {
    left: 23%;
  }

  @media screen and (min-width: 2561px) {
    left: 30%;
  }
`;

const UserIcon = styled.img`
  width: 5em;
  height: 5em;
  top: 21%;
  left: 12%;
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 100%;

  @media screen and (min-width: 901px) and (max-width: 1024px) {
    left: 16%;
  }

  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    left: 17%;
  }

  @media screen and (min-width: 1281px) and (max-width: 2560px) {
    left: 23%;
  }

  @media screen and (min-width: 2561px) {
    left: 30%;
  }
`;
