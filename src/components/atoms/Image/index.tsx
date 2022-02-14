import * as S from "./style";

interface ImageProps {
  src: string;
  width: string;
  height?: string;
  onClick?: () => void;
  pointer?: boolean;
}

export default function Image({
  src,
  width,
  height,
  onClick,
  pointer,
}: ImageProps) {
  return (
    <S.Img
      onClick={onClick}
      src={src}
      width={width}
      height={height}
      pointer={pointer}
    />
  );
}
