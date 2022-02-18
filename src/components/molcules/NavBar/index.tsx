import { Image, Text } from "../../atoms";
import { useNavigate } from "react-router-dom";

import * as S from "./style";
import { useState } from "react";
import { LoginModal, SideMenu } from "../../organisms";

export default function NavBar() {
  const navigate = useNavigate();
  const [loginModal, setLoginModal] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const login = localStorage.getItem("login") === "true" ? true : false;

  const onLogin = () => {
    if (login) {
      localStorage.setItem("login", "false");
      location.reload();
    } else {
      setLoginModal(true);
    }
  };

  return (
    <S.NavBar>
      <Image
        src="/images/icon_img.jpeg"
        width="10rem"
        onClick={() => navigate("/")}
        pointer={true}
      />
      <S.NavItem>
        <Text innerText="프로모션" bold={true} hover={true} />
      </S.NavItem>
      <S.NavItem>
        <Text innerText="오픈예정 지점" bold={true} hover={true} />
      </S.NavItem>
      <S.NavItem>
        <Text innerText="공유창고 종류" bold={true} hover={true} />
      </S.NavItem>
      <S.NavItem>
        <Text innerText="1:1문의" hover={true} />
      </S.NavItem>
      <S.NavItem>
        <Text
          innerText={login ? "로그아웃" : "로그인"}
          hover={true}
          onClick={onLogin}
        />
      </S.NavItem>
      <S.SideMenu>
        <Text innerText="메뉴" hover={true} onClick={() => setSideMenu(true)} />
      </S.SideMenu>
      {sideMenu && <SideMenu closeMenu={() => setSideMenu(false)} />}
      {loginModal && <LoginModal closeModal={() => setLoginModal(false)} />}
    </S.NavBar>
  );
}
