import { ReactElement } from "react";
import { FlexBox, Image, Text } from "../../atoms";

import * as S from "./style";

interface CardProps {
  backgroundColor?: string;
  width: string;
  height: string;
  title?: string;
  name: string;
  border?: string;
  text1?: string;
  text2?: string;
  img: string;
  textGap?: string;
  children: ReactElement;
  onClick?: () => void;
}

export default function Card({
  backgroundColor = "white",
  width,
  height,
  title,
  name,
  border = "none",
  text1,
  text2,
  img,
  textGap = "0.3em",
  children,
  onClick,
}: CardProps) {
  return (
    <S.Card
      onClick={onClick}
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      border={border}
    >
      <Image src={img} width="100%" />
      <FlexBox direction="column" gap={textGap}>
        <Text innerText={title} bold={true} size="small" color="#324a5e" />
        <Text innerText={name} bold={true} size="medium" color="#324a5e" />
        <Text innerText={text1} size="small" color="#9b9b9b" />
        <Text innerText={text2} size="small" color="#9b9b9b" />
        {children}
      </FlexBox>
    </S.Card>
  );
}
