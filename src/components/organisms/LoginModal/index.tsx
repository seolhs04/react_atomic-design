import { useNavigate } from "react-router-dom";
import { useInput } from "../../../hooks";
import { Button, FlexBox, Input, Modal, Text } from "../../atoms";

import * as S from "./style";

interface LoginModalProps {
  closeModal: () => void;
}

export default function LoginModal({ closeModal }: LoginModalProps) {
  const navigate = useNavigate();
  const id = useInput("");
  const password = useInput("");

  const onLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (sessionStorage.getItem(id.value) === password.value) {
      navigate("/");
      localStorage.setItem("login", "true");
      location.reload();
    } else {
      alert("아이디와 비밀번호를 확인해주세요");
    }
  };

  return (
    <Modal closeModal={closeModal}>
      <S.ModalBox onClick={(e) => e.stopPropagation()}>
        <FlexBox direction="column">
          <Text innerText="로그인" size="large" bold={true} margin="1em" />
          <Text innerText="환영합니다!" />
          <Text innerText="로그인 후 박스풀의 서비스를 이용하세요" />
          <form onSubmit={onLogin}>
            <FlexBox direction="column" gap="0.5em" margin="2em">
              <Input padding="0.5em" {...id} required />
              <Input padding="0.5em" {...password} type="password" required />
              <Button innerText="로그인" ButtonColor="yellow" margin="auto" />
              <Text
                innerText="회원가입"
                size="small"
                hover={true}
                onClick={() => {
                  closeModal();
                  navigate("/signup");
                }}
              />
            </FlexBox>
          </form>
        </FlexBox>
      </S.ModalBox>
    </Modal>
  );
}
