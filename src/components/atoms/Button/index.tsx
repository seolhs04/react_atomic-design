import * as S from "./style";

interface ButtonProps {
  innerText: string;
  ButtonColor?: "yellow" | "navy";
  size?: "small" | "medium" | "large";
  margin?: string;
  onClick?: () => void;
}

export default function Button({
  innerText,
  onClick,
  ButtonColor,
  margin,
  size = "medium",
}: ButtonProps) {
  return (
    <S.Button
      margin={margin}
      onClick={onClick}
      size={size}
      ButtonColor={ButtonColor}
    >
      {innerText}
    </S.Button>
  );
}
