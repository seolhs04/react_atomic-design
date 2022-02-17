import styled, { css } from "styled-components";

interface PageProps {
  background?: string;
}

export const Page = styled.div`
  ${(props: PageProps) =>
    props.background &&
    css`
      background: url(${props.background}) no-repeat center;
      background-size: 100% 100%;
    `};
  min-width: 100vw;
  min-height: 100vh;
`;
