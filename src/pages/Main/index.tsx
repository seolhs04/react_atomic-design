import React from "react";
import { Button, FlexBox, Image, Page, Text } from "../../components/atoms";
import { Card, Title } from "../../components/molcules";
import { PlaceView } from "../../components/organisms";
import { places } from "../../constants/places";
import { solutions } from "../../constants/solution";

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
                img={`/images/selfStorage_img${item.id}.jpeg`}
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
        <FlexBox background="#e7e6e2">
          <FlexBox direction="column" margin="0 3em" padding="1em">
            <Text
              innerText="셀프스토리지"
              size="medium"
              bold={true}
              color="324a5e"
              margin="0 0 0.5em 0"
            />
            <Text
              innerText="24시간 간편하고 안전하게 나만의 공유창고."
              margin="0 0 1em 0"
            />
            <Text innerText="고객센터:" />
            <Text innerText="월요일 – 금요일: 오전 10시 ~ 오후 7시" />
            <Text innerText="(주말 및 공휴일 휴무)" margin="0 0 1em 0" />
            <FlexBox gap="0.5em">
              <Button innerText="바로 신청하기" ButtonColor="yellow" />
              <Button innerText="1초 견적받기" ButtonColor="navy" />
            </FlexBox>
          </FlexBox>
          <Image src="/images/main_img3.jpeg" width="20rem" />
        </FlexBox>
        <PlaceView data={places} />
      </Page>
      <Page />
    </div>
  );
}
