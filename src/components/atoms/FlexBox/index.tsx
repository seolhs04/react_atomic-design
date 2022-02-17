import { ReactElement } from "react";
import * as S from "./style";

interface FlexBoxProps {
  background?: string;
  width?: string;
  flex?: number;
  height?: string;
  padding?: string;
  margin?: string;
  gap?: string;
  justifyContent?: string;
  direction?: "column" | "row";
  children: ReactElement | ReactElement[];
}

export default function FlexBox({
  children,
  gap,
  flex,
  direction,
  padding,
  margin,
  width,
  height,
  justifyContent,
  background,
}: FlexBoxProps) {
  return (
    <S.FlexBox
      gap={gap}
      flex={flex}
      justifyContent={justifyContent}
      direction={direction}
      background={background}
      padding={padding}
      margin={margin}
      width={width}
      height={height}
    >
      {children && children}
    </S.FlexBox>
  );
}
