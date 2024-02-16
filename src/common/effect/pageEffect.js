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
  width: 50em;
  height: 50em;
  max-width: 100%;
  max-height: 100%;
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
  top: 55vh;
  left: 50vw;
  position: absolute;
  text-align: center;
  transform: translate(-50%, -50%);
  margin-bottom: 1em;

  @media screen and (max-width: 430px) {
    top: 56vh;
  }

  @media screen and (min-width: 431px) and (max-width: 768px) {
    top: 60vh;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    top: 62vh;
    font-size: 1.7em;
  }

  @media screen and (min-width: 1025px) {
    top: 62vh;
    font-size: 1.8em;
  }
`;

const UserImg = styled.img`
  min-width: 10vw;
  min-height: 10vh;
  top: 48vh;
  left: 50vw;
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 100%;

  @media screen and (max-width: 430px) {
    max-width: 20%;
    max-height: 18%;
  }

  @media screen and (min-width: 431px) and (max-width: 768px) {
    max-width: 22%;
    max-heignt: 20%;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    max-width: 24%;
    max-height: 22%;
  }

  @media screen and (min-width: 1025px) {
    max-width: 25%;
    max-height: 23%;
  }
`;
