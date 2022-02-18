import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
0% {
  transform : translate(-50%, -45%);
  opacity: 0;
}
100%{
  transform : translateY(-50%, -50%);
  opacity: 1;
}`;

export const ModalBox = styled.div`
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: white;
  border-radius: 1rem;
  width: 25rem;
  height: 20rem;
  max-width: 100%;
  animation: ${slideUp} 1s ease-in;
`;
