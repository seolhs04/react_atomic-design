import { Text, FlexBox, Image } from "../../atoms";

interface ExplainBoxProps {
  backgroundColor: string;
  image: string;
  textArr: string[];
  children: JSX.Element | JSX.Element[];
}

export default function ExplainBox({
  backgroundColor,
  image,
  textArr,
  children,
}: ExplainBoxProps) {
  return (
    <FlexBox background={backgroundColor}>
      <Image src={image} width="20rem" />
      <FlexBox direction="column" margin="0 3em" padding="2em">
        <div>
          {textArr.map((text, idx) =>
            idx === 0 ? (
              <Text
                key={idx}
                innerText={text}
                margin="1em 0"
                size="medium"
                bold={true}
                color="#324a5e"
              />
            ) : (
              <Text key={idx} innerText={text} margin="0.2em" />
            ),
          )}
        </div>
        <FlexBox gap="0.5em" margin="1.5em">
          {children}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
