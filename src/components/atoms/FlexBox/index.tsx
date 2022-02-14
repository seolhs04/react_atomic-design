import * as S from "./style";

interface FlexBoxProps {
  gap?: string;
  direction?: string;
  children: JSX.Element[];
}

export default function FlexBox({ children, gap, direction }: FlexBoxProps) {
  return (
    <S.FlexBox gap={gap} direction={direction}>
      {children}
    </S.FlexBox>
  );
}
