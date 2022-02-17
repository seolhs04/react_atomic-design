import { useNavigate } from "react-router-dom";
import { FlexBox, Image, Text } from "../../atoms";
import * as S from "./style";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <S.Footer>
      <FlexBox justifyContent="space-evenly">
        <Text innerText="회사소개" bold={true} hover={true} />
        <Text innerText="블로그" bold={true} hover={true} />
        <Text innerText="자주 묻는 질문" bold={true} hover={true} />
        <Text innerText="개인정보 처리방침" bold={true} hover={true} />
        <Text innerText="이용약관" bold={true} hover={true} />
        <Text innerText="가맹문의" bold={true} hover={true} />
      </FlexBox>
      <Image
        src="/images/icon_img.jpeg"
        width="15rem"
        onClick={() => navigate("/")}
        pointer={true}
      />
      <FlexBox direction="column">
        <Text innerText="대표: 성정학" />
        <Text innerText="서울시 강남구 역삼로8길 3, 2층" />
        <Text innerText="사업자등록번호: 530-86-00179" />
        <Text innerText="통신판매업신고번호: 제2019-서울강남-01917" />
      </FlexBox>
      <FlexBox direction="column">
        <Text innerText="고객센터 월요일 – 금요일 오전10시 ~ 오후7시" />
        <Text innerText="픽업/배송 월요일 – 금요일 오전10시 ~ 오후8시" />
        <Text innerText="*주말 및 공휴일 휴무" />
        <Text innerText="셀프스토리지 연중무휴" />
      </FlexBox>
      <FlexBox justifyContent="center">
        <Image src="/images/visa_img.jpeg" width="2.5rem" />
        <Image src="/images/masterCard_img.jpeg" width="2.5rem" />
        <Image src="/images/paypal_img.jpeg" width="2.5rem" />
      </FlexBox>
    </S.Footer>
  );
}
