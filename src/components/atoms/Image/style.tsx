import styled from "styled-components";

interface ImageProps {
  width: string;
  height?: string;
  pointer?: boolean;
}

export const Img = styled.img`
  width: ${(props: ImageProps) => props.width};
  height: ${(props: ImageProps) => props.height};
  cursor: ${(props: ImageProps) => props.pointer && "pointer"};
`;
