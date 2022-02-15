import styled from "styled-components";

interface FlexBoxProps {
  background?: string;
  width?: string;
  flex?: number;
  height?: string;
  gap?: string;
  padding?: string;
  margin?: string;
  direction?: string;
}

export const FlexBox = styled.div`
  width: ${(props: FlexBoxProps) => props.width};
  height: ${(props: FlexBoxProps) => props.height};
  padding: ${(props: FlexBoxProps) => props.padding};
  margin: ${(props: FlexBoxProps) => props.margin};
  flex: ${(props: FlexBoxProps) => props.flex};
  gap: ${(props: FlexBoxProps) => props.gap};
  background: ${(props: FlexBoxProps) => props.background};
  flex-direction: ${(props: FlexBoxProps) => props.direction};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
