import styled, { css } from "styled-components";

interface ButtonProps {
  ButtonColor?: "yellow" | "navy";
  size?: "small" | "medium" | "large";
}

export const Button = styled.button`
  font-weight: bold;
  border-radius: 4rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  ${(props: ButtonProps) => {
    switch (props.ButtonColor) {
      case "yellow":
        return css`
          color: #444;
          background: #f8d340;
          border: 2px solid #f8d340;
          &:hover {
            background: #d3b022;
            border: 2px solid #d3b022;
            color: white;
          }
        `;
      case "navy":
        return css`
          background: none;
          color: #324a5e;
          border: 2px solid #324a5e;
          &:hover {
            background: #324a5e;
            color: white;
          }
        `;
    }
  }}
  ${(props: ButtonProps) => {
    switch (props.size) {
      case "small":
        return css`
          min-width: 4rem;
          min-height: 2rem;
        `;
      case "medium":
        return css`
          min-width: 8rem;
          min-height: 3rem;
        `;
      case "large":
        return css`
          min-width: 12rem;
          min-height: 3rem;
        `;
    }
  }}
`;
