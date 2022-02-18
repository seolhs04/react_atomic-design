import * as S from "./style";

interface InputProps {
  padding?: string;
  margin?: string;
  borderRadius?: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  type = "text",
  required = false,
  margin,
  padding,
  borderRadius,
  value,
  onChange,
}: InputProps) {
  return (
    <S.Input
      type={type}
      padding={padding}
      margin={margin}
      value={value}
      borderRadius={borderRadius}
      onChange={onChange}
      required={required}
    />
  );
}
