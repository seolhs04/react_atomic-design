import styled from "styled-components";

interface FlexBoxProps {
  gap?: string;
  direction?: string;
}

export const FlexBox = styled.div`
  gap: ${(props: FlexBoxProps) => props.gap};
  flex-direction: ${(props: FlexBoxProps) => props.direction};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
