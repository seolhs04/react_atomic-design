import styled, { css } from "styled-components";

interface PageProps {
  background?: string;
}

export const Page = styled.div`
  ${(props: PageProps) =>
    props.background &&
    css`
      background: url(${props.background});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    `};
  width: 100vw;
  height: 100vh;
`;
