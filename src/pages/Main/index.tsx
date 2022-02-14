import React from "react";
import { FlexBox, Image, Page, Text } from "../../components/atoms";
import { Card } from "../../components/molcules";

export default function Main() {
  return (
    <div>
      <Page background="/images/main_img.jpeg" />
      <Page>
        <Text
          innerText="공유창고 종류"
          size="large"
          bold={true}
          color="#324a5e"
        />
        <Text
          innerText="개인, 기업, 남녀노소 모두 사용 가능한 공유창고"
          color="#949494"
        />
        <FlexBox gap="1rem">
          <Card
            backgroundColor="#e7e6e2"
            width="20rem"
            height="30rem"
            img="/images/selfStorage_img.jpeg"
          />
          <Card
            backgroundColor="#e9f8f7"
            width="20rem"
            height="30rem"
            img="/images/selfStorage_img2.jpeg"
          />
          <Card
            backgroundColor="#fef9e5"
            width="20rem"
            height="30rem"
            img="/images/selfStorage_img3.jpeg"
          />
        </FlexBox>
      </Page>
      <Page background="/images/main_img2.jpeg" />
      <Page />
      <Page />
    </div>
  );
}
