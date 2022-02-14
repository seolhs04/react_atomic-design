import * as S from "./style";

interface ButtonProps {
  innerText: string;
  ButtonColor?: "yellow" | "navy";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export default function Button({ innerText, onClick, ButtonColor, size = "medium" }: ButtonProps) {
  return (
    <S.Button onClick={onClick} size={size} ButtonColor={ButtonColor}>
      {innerText}
    </S.Button>
  );
}
