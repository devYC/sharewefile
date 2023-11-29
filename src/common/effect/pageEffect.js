import styled from "styled-components";

export default function PageEffect({ name, src }) {
  return (
    <>
      <Elipse />
      <Name>{name}</Name>
      <UserImg src={src} />
    </>
  );
}

const Elipse = styled.div`
  width: 60vw;
  height: 60vw;
  max-width: 40em;
  max-height: 40em;
  top: 50vh;
  left: 50vw;
  position: absolute;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  border: 0.5px solid rgba(255, 255, 255, 0.6);
`;

const Name = styled.h2`
  width: 5em;
  height: 1.2em;
  font-size: 1.3em;
  font-weight: 400;
  padding: 0.4em;
  background: rgba(0, 0, 0, 0.2);
  top: 60%;
  left: 50%;
  position: absolute;
  text-align: center;
  transform: translate(-50%, -50%);
  margin-bottom: 1em;
  -webkit-transform: translate(-50%, -50%);
`;

const UserImg = styled.img`
  width: 17vw;
  height: 17vw;
  max-width: 10.2em;
  max-height: 10.2em;
  top: 48%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 100%;
`;
