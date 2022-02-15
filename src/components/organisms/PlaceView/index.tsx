import { Button } from "../../atoms";
import { Card } from "../../molcules";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as S from "./style";

interface PlaceViewProps {
  data: {
    id: number;
    name: string;
    text: string;
    img: string;
  }[];
}

export default function PlaceView({ data }: PlaceViewProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    customPaging: (i: number) => <S.SlickButton>{i + 1}</S.SlickButton>,
  };
  return (
    <S.PlaceView>
      <Slider {...settings}>
        {data.map((item, idx) => {
          return (
            <Card
              key={idx}
              name={item.name}
              text1={item.text}
              width="15rem"
              height="20rem"
              img={item.img}
              border="1px solid #c4c4c4"
            >
              <Button
                innerText="더 알아보기"
                ButtonColor="yellow"
                margin="2em"
              />
            </Card>
          );
        })}
      </Slider>
    </S.PlaceView>
  );
}
