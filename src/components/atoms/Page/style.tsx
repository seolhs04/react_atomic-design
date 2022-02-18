import styled, { css } from "styled-components";
import { useMediaQuery } from "../../../hooks";

interface PageProps {
  background?: string;
}

export const Page = styled.div`
  ${(props: PageProps) =>
    props.background &&
    css`
      background: url(${props.background}) no-repeat center;
      background-size: auto 100%;
    `};
  min-width: 100vw;
  min-height: 100vh;
  ${useMediaQuery("background-size: 350% 100%;")}
`;
