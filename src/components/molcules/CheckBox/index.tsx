import { FlexBox, Image, Text } from "../../atoms";

interface CheckBoxProps {
  innerText: string;
}

export default function CheckBox({ innerText }: CheckBoxProps) {
  return (
    <FlexBox>
      <Image src="/images/check_img.jpeg" width="1.5rem" />
      <Text innerText={innerText} color="#00c4b3" bold={true} />
    </FlexBox>
  );
}
