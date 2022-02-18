import * as S from "./style";

interface TextProps {
  innerText?: string;
  color?: string;
  bold?: boolean;
  hover?: boolean;
  margin?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export default function Text({
  innerText,
  onClick,
  color = "black",
  margin,
  size = "medium",
  bold = false,
  hover = false,
}: TextProps) {
  return (
    <S.Text
      onClick={onClick}
      size={size}
      color={color}
      bold={bold}
      hover={hover}
      margin={margin}
    >
      {innerText}
    </S.Text>
  );
}
