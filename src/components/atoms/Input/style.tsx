import styled from "styled-components";

interface InputProps {
  padding?: string;
  margin?: string;
  borderRadius?: string;
}

export const Input = styled.input`
  padding: ${(props: InputProps) => props.padding};
  margin: ${(props: InputProps) => props.margin};
  border-radius: ${(props: InputProps) => props.borderRadius};
`;
