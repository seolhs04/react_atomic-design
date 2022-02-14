import * as S from "./style";

interface TextProps {
  innerText: string;
  color?: string;
  bold?: boolean;
  hover?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export default function Text({
  innerText,
  onClick,
  color = "black",
  size = "small",
  bold = false,
  hover = false,
}: TextProps) {
  return (
    <S.Text onClick={onClick} size={size} color={color} bold={bold} hover={hover}>
      {innerText}
    </S.Text>
  );
}
