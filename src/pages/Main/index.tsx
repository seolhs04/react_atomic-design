import React from "react";
import { Button, FlexBox, Image, Page, Text } from "../../components/atoms";
import { Card, CheckBox, ExplainBox, Title } from "../../components/molcules";
import { CardSlide, IntroTable } from "../../components/organisms";
import { boxs, solutions, places, areas } from "../../constants";

export default function Main() {
  return (
    <div>
      <Page background="/images/main_img.jpeg" />
      <Page>
        <Title
          title="공유창고 종류"
          text1="개인, 기업, 남녀노소 모두 사용 가능한 공유창고"
        />
        <FlexBox gap="1rem">
          {solutions.map((item, idx) => {
            return (
              <Card
                key={idx}
                backgroundColor={item.backgroundColor}
                title={item.title}
                name={item.name}
                text1={item.text1}
                text2={item.text2}
                width="20rem"
                height="30rem"
                img={item.img}
              >
                <Button innerText="상세 설명" ButtonColor="navy" />
              </Card>
            );
          })}
        </FlexBox>
      </Page>
      <Page>
        <Image src="/images/main_img2.jpeg" width="100%" />
        <FlexBox
          background="#00c4b3"
          direction="column"
          gap="1em"
          padding="2em"
        >
          <Text
            innerText="전 세계의 있는 박스풀 지점을 확인하고"
            color="white"
            bold={true}
          />
          <Text
            innerText="다양한 할인혜택을 받으세요!"
            color="white"
            bold={true}
          />
          <Button innerText="뉴스 보기" ButtonColor="navy" />
        </FlexBox>
      </Page>
      <Page>
        <Title title="상세 설명" text1="보증금없이 짐보관 가능한 공유창고" />
        <ExplainBox
          backgroundColor="#e7e6e2"
          image="/images/main_img3.jpeg"
          textArr={[
            "셀프스토리지",
            "24시간 간편하고 안전하게 나만의 공유창고.",
            "고객센터:",
            "월요일 – 금요일: 오전 10시 ~ 오후 7시",
            "(주말 및 공휴일 휴무)",
          ]}
        >
          <Button innerText="바로 신청하기" ButtonColor="yellow" />
          <Button innerText="1초 견적받기" ButtonColor="navy" />
        </ExplainBox>
        <CardSlide data={places} />
        <ExplainBox
          backgroundColor="#e9f8f7"
          image="/images/main_img4.jpeg"
          textArr={[
            "물품 단위 보관",
            "박스풀 자체 픽업 및 배송",
            "갯수 단위 짐보관 가능",
          ]}
        >
          <Button innerText="바로 신청하기" ButtonColor="yellow" />
          <Button innerText="총알 견적 받기" ButtonColor="navy" />
        </ExplainBox>
        <CardSlide data={boxs} />
        <FlexBox margin="2em" direction="column">
          {[
            "무료 픽업",
            "무료 플라스틱 박스 대여",
            "무료 보험 물품당 최대 50만원",
            "빠른 배송",
            "저렴한 배송비",
            "온도∙습도 제어",
          ].map((text, idx) => (
            <CheckBox key={idx} innerText={text} />
          ))}
        </FlexBox>
        <ExplainBox
          backgroundColor="#fef9e5"
          image="/images/main_img5.jpeg"
          textArr={[
            "면적 단위 보관",
            "박스풀 자체 픽업 및 배송",
            "대형 물품, 이삿짐 등 면적 단위",
            "짐보관 가능",
          ]}
        >
          <Button innerText="바로 신청하기" ButtonColor="yellow" />
          <Button innerText="로켓 견적 받기" ButtonColor="navy" />
        </ExplainBox>
        <CardSlide data={areas} />
        <FlexBox margin="2em" direction="column">
          {[
            "빠른 배송",
            "업계최초 픽업∙보관∙배송 한번에 가능",
            "무료 보험 물품당 최대 50만원",
            "온도∙습도 제어",
          ].map((text, idx) => (
            <CheckBox key={idx} innerText={text} />
          ))}
        </FlexBox>
      </Page>
      <Page background="/images/main_img6.jpeg">
        <FlexBox direction="column">
          <Title title="바이러스 안심 공유창고" />
          <IntroTable />
        </FlexBox>
      </Page>
    </div>
  );
}
