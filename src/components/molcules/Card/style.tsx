import styled from "styled-components";

interface CardProps {
  backgroundColor: string;
  border?: string;
  width: string;
  height: string;
}

export const Card = styled.div`
  padding: 0.5em;
  border: ${(props: CardProps) => props.border};
  background: ${(props: CardProps) => props.backgroundColor};
  width: ${(props: CardProps) => props.width};
  height: ${(props: CardProps) => props.height};
  margin: auto;
`;
