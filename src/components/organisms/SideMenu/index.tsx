import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginModal } from "..";
import { useInput } from "../../../hooks";
import { Button, FlexBox, Input, Modal, Text } from "../../atoms";

import * as S from "./style";

interface SideMenuProps {
  closeMenu: () => void;
}

export default function SideMenu({ closeMenu }: SideMenuProps) {
  const navigate = useNavigate();
  const [loginModal, setLoginModal] = useState(false);
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
    <>
      <Modal closeModal={closeMenu}>
        <S.MenuBox onClick={(e) => e.stopPropagation()}>
          <FlexBox direction="column" gap="2em">
            <Text
              innerText={login ? "로그아웃" : "로그인"}
              hover={true}
              onClick={onLogin}
            />
            <Text innerText="프로모션" bold={true} hover={true} />
            <Text innerText="오픈예정 지점" bold={true} hover={true} />
            <Text innerText="공유창고 종류" bold={true} hover={true} />
            <Text innerText="1:1문의" hover={true} />
          </FlexBox>
        </S.MenuBox>
      </Modal>
      {loginModal && <LoginModal closeModal={() => setLoginModal(false)} />}
    </>
  );
}
