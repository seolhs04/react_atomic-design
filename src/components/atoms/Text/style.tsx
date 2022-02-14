import styled, { css } from "styled-components";

interface TextProps {
  color: string;
  size?: "small" | "medium" | "large";
  bold?: boolean;
  hover?: boolean;
}

export const Text = styled.div`
  width: fit-content;
  font-weight: ${(props: TextProps) => (props.bold ? "bold" : "inherit")}};
  ${(props: TextProps) =>
    props.hover &&
    css`
      cursor: pointer;
      &:hover {
        color: #00c4b4;
      }
    `};
  color: ${(props: TextProps) => props.color};
    ${(props: TextProps) => {
      switch (props.size) {
        case "small":
          return css`
            font-size: 1em;
          `;
        case "medium":
          return css`
            font-size: 1.5em;
          `;
        case "large":
          return css`
            font-size: 2em;
          `;
      }
    }};
`;
