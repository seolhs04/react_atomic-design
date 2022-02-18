import styled from "styled-components";
import { useMediaQuery } from "../../../hooks";

export const NavBar = styled.div`
  display: flex;
  height: 3.5rem;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  box-shadow: rgb(189 189 189 / 20%) 10px 10px 30px 0px;
  background: white;
  opacity: 0.9;
  z-index: 99;
  padding: 0 2em;
`;
export const NavItem = styled.div`
  ${useMediaQuery("display:none")}
`;
export const SideMenu = styled.div`
  display: none;
  ${useMediaQuery("display:block")};
`;
