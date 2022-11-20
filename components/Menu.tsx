import Image from "next/image";
import styled from "styled-components";
import { useMediaQuery } from "../hooks";
import { devices, sizes } from "../utils";

const MenuBox = styled.div`
  width: 33px;
  height: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.components.menu.colors.background};

  @media ${devices.tablet} {
    height: 62px;
    width: 127px;
  }

  @media ${devices.laptop} {
    height: 70px;
    width: 101px;
  }
`;

const MenuLabel = styled.label`
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;

export default function Menu() {
  const isLaptop = useMediaQuery(sizes.laptop);

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
