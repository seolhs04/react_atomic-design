import styled from "styled-components";

export const Footer = styled.div`
  padding: 1rem 2rem;
  text-align: center;
  & > div {
    padding: 0.5rem;
  }
  & > div:first-child {
    border-bottom: 2px solid #c4c4c4;
  }
  & > img:nth-child(2) {
    margin: 1rem;
  }
`;
