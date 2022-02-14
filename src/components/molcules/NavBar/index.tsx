import { Text } from "../../atoms";
import { useNavigate } from "react-router-dom";

import * as S from "./style";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <S.NavBar>
      <Text innerText="BOXFUL" bold={true} onClick={() => navigate("/")} />
      <Text innerText="프로모션" bold={true} hover={true} />
      <Text innerText="오픈예정 지점" bold={true} hover={true} />
      <Text innerText="공유창고 종류" bold={true} hover={true} />
      <Text innerText="1:1문의" hover={true} />
      <Text innerText="로그인" hover={true} />
    </S.NavBar>
  );
}