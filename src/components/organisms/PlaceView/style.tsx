import styled from "styled-components";

export const PlaceView = styled.div`
  margin: 4rem;
  & > div {
    padding: 1em;
  }
  & > div > div img {
    height: 55%;
  }
  & .slick-prev,
  .slick-next {
    background: #c4c4c4;
    border-radius: 50%;
    :hover {
      background: black;
    }
    :focus {
      background: black;
    }
  }
  & .slick-dots {
    left: -3px;
  }
`;
export const SlickButton = styled.button``;
