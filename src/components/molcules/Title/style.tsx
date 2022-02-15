import styled from "styled-components";

export const Title = styled.div`
  position: relative;
  display: inline-block;
  font-size: 2rem;
  font-weight: bold;
  color: #324a5e;
  &::before {
    content: "";
    display: block;
    width: 110%;
    height: 60%;
    position: absolute;
    left: -5%;
    top: 13px;
    background: rgba(0, 196, 179, 0.2);
  }
`;
