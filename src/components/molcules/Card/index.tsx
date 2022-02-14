import { Image, Text } from "../../atoms";

import * as S from "./style";

interface CardProps {
  backgroundColor: string;
  width: string;
  height: string;
  img: string;
  onClick?: () => void;
}

export default function Card({
  backgroundColor,
  width,
  height,
  img,
  onClick,
}: CardProps) {
  return (
    <S.Card
      onClick={onClick}
      backgroundColor={backgroundColor}
      width={width}
      height={height}
    >
      <Image src={img} width="100%" />
      <Text innerText="방문형" />
      <Text innerText="셀프스토리지" />
      <Text innerText="장기 보관 시" />
      <Text innerText="최대 30%할인" />
    </S.Card>
  );
}
