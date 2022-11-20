import Image from "next/image";
import styled from "styled-components";

const LogoContainer = styled.div`
  background-color: ${(props) => props.theme.components.menu.colors.background};
`;

interface LogoProps {
  background?: boolean;
  height: number;
  width: number;
}

export default function Logo({ background, height, width }: LogoProps) {
  if (background) {
    return (
      <LogoContainer>
        <Image src="/logo.svg" alt="logo" height={height} width={width} />
      </LogoContainer>
    );
  }

  return <Image src="/logo.svg" alt="logo" height={height} width={width} />;
}
