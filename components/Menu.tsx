import Image from "next/image";
import styled from "styled-components";
import { devices } from "../utils";

const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height:14px;

  @media ${devices.laptop} {
    height: 70px;
    width: 101px;
    background-color: ${(props) =>
      props.theme.components.menu.colors.background};
  }
`;

const MenuLabel = styled.label`
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;

interface MenuProps {
  isLaptop: boolean;
}

export default function Menu({ isLaptop }: MenuProps) {
  return (
    <MenuBox>
      {isLaptop ? (
        <MenuLabel>Menu</MenuLabel>
      ) : (
        <Image
          src="/hamburgermenumobile.svg"
          alt="hamburger"
          width={17.25}
          height={12}
        />
      )}
    </MenuBox>
  );
}