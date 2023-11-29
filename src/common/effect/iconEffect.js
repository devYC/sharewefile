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
  top: 36vh;
  left: 29vw;
  position: absolute;
  transform: translate(-50%, -50%);

  @media only screen and (max-device-width: 768px) and (-webkit-min-device-pixel-ratio: 2) {
    top: 40vh;
    left: 25vw;
  }
`;

const UserIcon = styled.img`
  width: 5em;
  height: 5em;
  top: 30vh;
  left: 29vw;
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 100%;

  @media only screen and (max-device-width: 768px) and (-webkit-min-device-pixel-ratio: 2) {
    top: 37.5vh;
    left: 25vw;
  }
`;
