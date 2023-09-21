import styled, { keyframes } from "styled-components";

export default function ModalEffect({ show, children }) {
  return <FadeInEffect show={show}>{children}</FadeInEffect>;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeInEffect = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  animation: ${fadeIn} 400ms ease-in-out;
`;
