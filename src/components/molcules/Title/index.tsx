import { FlexBox, Text } from "../../atoms";
import * as S from "./style";

interface TitleProps {
  title: string;
  text1?: string;
  text2?: string;
}

export default function Title({ title, text1, text2 }: TitleProps) {
  return (
    <FlexBox direction="column" gap="1em" margin="3em">
      <S.Title>{title}</S.Title>
      <Text innerText={text1} color="#949494" />
      <Text innerText={text2} color="#949494" />
    </FlexBox>
  );
}
