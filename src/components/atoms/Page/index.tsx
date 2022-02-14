import * as S from "./style";

interface PageProps {
  background?: string;
  children?: JSX.Element[] | JSX.Element;
}

export default function Page({ background, children }: PageProps) {
  return <S.Page background={background}>{children}</S.Page>;
}
