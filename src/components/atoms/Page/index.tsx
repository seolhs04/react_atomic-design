import * as S from "./style";

interface PageProps {
  background?: string;
}

export default function Page({ background }: PageProps) {
  return <S.Page background={background} />;
}
