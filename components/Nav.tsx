import styled from "styled-components";
import { devices } from "../utils";

const Nav = styled.nav`
  position: fixed;
  left: calc((100vw - ${(props) => props.theme.screenWidth}px) / 2);
  padding: 0 49px;
  width: calc(${(props) => props.theme.screenWidth}px - 98px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  height: 62px;

  background-color: ${(props) => props.theme.components.nav.colors.background};

  @media ${devices.tablet} {
    left: calc((100vw - ${(props) => props.theme.tabWidth}px) / 2);
    padding: 0 64px;
    top: 44px;
    width: calc(${(props) => props.theme.tabWidth}px - 238px);
    height: initial;

    background-color: initial;
  }

  @media ${devices.laptop} {
    left: calc((100vw - ${(props) => props.theme.pageWidth}px) / 2);
    padding: 0 122px;
    top: 44px;
    width: calc(${(props) => props.theme.pageWidth}px - 244px);
    height: initial;

    background-color: initial;
  }
`;

export default Nav;