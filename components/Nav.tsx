import styled from "styled-components";
import { devices } from "../utils";

const Nav = styled.nav`
  position: fixed;
  left: calc((100vw - ${(props) => props.theme.screenWidth}px) / 2);
  top: 30px;
  
  padding: 0 49px;
  width: calc(${(props) => props.theme.screenWidth}px - 98px);
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  z-index: 1;

  @media ${devices.tablet} {
    left: calc((100vw - ${(props) => props.theme.tabWidth}px) / 2);
    top: 44px;

    padding: 0 64px;
    width: calc(${(props) => props.theme.tabWidth}px - 128px);
  }

  @media ${devices.laptop} {
    left: calc((100vw - ${(props) => props.theme.pageWidth}px) / 2);
    
    padding: 0 122px;
    width: calc(${(props) => props.theme.pageWidth}px - 244px);
  }
`;

export default Nav;