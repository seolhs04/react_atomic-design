import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, FlexBox, Input, Page, Text } from "../../components/atoms";
import { Title } from "../../components/molcules";
import { useInput } from "../../hooks";

export default function Signup() {
  const navigate = useNavigate();
  const id = useInput("");
  const password = useInput("");
  const passwordConfirm = useInput("");

  const onSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (sessionStorage.getItem(id.value) !== null) {
      alert("이미 존재하는 아이디 입니다.");
    } else if (password.value !== passwordConfirm.value) {
      alert("패스워드가 일치하지 않습니다.");
    } else {
      sessionStorage.setItem(id.value, password.value);
      alert("회원가입이 완료되었습니다. 로그인 해주세요");
      navigate("/");
    }
  };
  return (
    <div>
      <Page>
        <Title title="회원가입" text1="온라인으로 보관 물품 관리하기" />
        <form onSubmit={onSignup}>
          <FlexBox direction="column" gap="1rem" margin="2rem">
            <Text innerText="사용하실 아이디를 입력해주세요" />
            <Input padding="0.5em" required {...id} />
          </FlexBox>
          <FlexBox direction="column" gap="1rem" margin="2rem">
            <Text innerText="사용하실 비밀번호를 입력해주세요" />
            <Input padding="0.5em" required type="password" {...password} />
          </FlexBox>
          <FlexBox direction="column" gap="1rem" margin="2rem">
            <Text innerText="비밀번호를 확인해주세요" />
            <Input
              padding="0.5em"
              required
              type="password"
              {...passwordConfirm}
            />
            <Button innerText="회원가입" ButtonColor="yellow" margin="2em" />
          </FlexBox>
        </form>
      </Page>
    </div>
  );
}
