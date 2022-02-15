import * as S from "./style";

interface FlexBoxProps {
  background?: string;
  width?: string;
  flex?: number;
  height?: string;
  padding?: string;
  margin?: string;
  gap?: string;
  direction?: "column" | "row";
  children: JSX.Element[];
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
  background,
}: FlexBoxProps) {
  return (
    <S.FlexBox
      gap={gap}
      flex={flex}
      direction={direction}
      background={background}
      padding={padding}
      margin={margin}
      width={width}
      height={height}
    >
      {children}
    </S.FlexBox>
  );
}
