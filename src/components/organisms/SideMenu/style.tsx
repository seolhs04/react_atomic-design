import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
0% {
  transform : translate(100%, 0);
  opacity: 0;
}
100%{
  transform : translateY(-50%, -50%);
  opacity: 1;
}`;

export const MenuBox = styled.div`
  background-color: white;
  margin-left: auto;
  width: 15rem;
  height: 100%;
  max-width: 100%;
  animation: ${slideUp} 0.3s ease-in;
  padding: 2em 0;
`;
