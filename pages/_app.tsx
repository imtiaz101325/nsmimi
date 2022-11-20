import type { AppProps } from "next/app";
import Head from "next/head";
import Image from "next/image";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { Roboto_Flex } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

import theme from "../theme";
import { devices, sizes } from "../utils";
import { useMediaQuery } from "../hooks";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--roboto-font",
});

const GlobalStyles = createGlobalStyle`
  ${reset}
  html {
    font-family: ${roboto.style.fontFamily}
  }
`;

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

  @media ${devices.laptop} {
    left: calc((100vw - ${(props) => props.theme.pageWidth}px) / 2);
    padding: 0 122px;
    top: 44px;
    width: calc(${(props) => props.theme.pageWidth}px - 244px);
    height: initial;

    background-color: initial;
  }
`;

const LogoContainer = styled.div`
  background-color: ${(props) => props.theme.components.menu.colors.background};
`;

interface LogoProps {
  background?: boolean;
  height: number;
  width: number;
}

function Logo({ background, height, width }: LogoProps) {
  if (background) {
    return (
      <LogoContainer>
        <Image src="/logo.svg" alt="logo" height={height} width={width} />
      </LogoContainer>
    );
  }

  return <Image src="/logo.svg" alt="logo" height={70} width={101} />;
}

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

function Menu({ isLaptop }: MenuProps) {
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

const Footer = styled.footer`
  background-color: ${(props) => props.theme.colors.brown};
  width: 100vw;
  height: 112px;

  @media ${devices.laptop} {
    height: 221px;
  }
`;

const Wrapper = styled.div`
  height: 40px;
  max-width: calc(${(props) => props.theme.screenWidth}px - 64px);

  padding: 0 32px;
  margin: 0 auto;
  padding-top: 37px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${devices.laptop} {
    height: 100%;
    max-width: calc(${(props) => props.theme.pageWidth}px - 216px);

    padding: 0 108px;
  }
`;

const Social = styled.div`
  width: 48px;
  height: 32px;
  display: flex;
  flex-wrap: wrap;

  @media ${devices.laptop} {
    width: 293px;
    flex-wrap: initial;
    justify-content: space-between;
  }
`;

const socials = [
  {
    alt: "Mail",
    icon: "/socials/mail.svg",
    link: "mailto: mimijsr09@gmail.com",
  },
  {
    alt: "Facebook",
    icon: "/socials/facebook.svg",
    link: "https://www.facebook.com/mimijsr",
  },
  {
    alt: "LinkedIn",
    icon: "/socials/linkedIn.svg",
    link: "https://www.linkedin.com/in/nsmimi/",
  },
  {
    alt: "Twitter",
    icon: "/socials/twitter.svg",
    link: "https://twitter.com/Nsmimi99",
  },
  {
    alt: "Behance",
    icon: "/socials/behance.svg",
    link: "https://www.behance.net/miminiger",
  },
  {
    alt: "Instagram",
    icon: "/socials/instagram.svg",
    link: "https://www.instagram.com/niger_sultana_mimi/",
  },
];

const Copyright = styled.p`
  font-weight: 400;
  font-size: 7px;
  line-height: 8px;
  text-align: right;
  padding-right: calc(
    ((100vw - ${(props) => props.theme.screenWidth}px) / 2) + 30px
  );

  @media ${devices.laptop} {
    font-size: 12px;
    line-height: 20px;
    text-align: initial;

    padding: initial;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  const match = useMediaQuery(sizes.tablet);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Head>
          <title>Mimi</title>
          <meta
            name="description"
            content="Portfolio website of Niger Sultana Mimi"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav>
          <Logo background height={match ? 70 : 14} width={match ? 101 : 28} />
          <Menu isLaptop={match} />
        </Nav>

        <main>
          <Component {...pageProps} />
        </main>

        <Footer>
          <Wrapper>
            <Logo height={match ? 70 : 40} width={match ? 101 : 88.5} />
            <Social>
              {socials.map(({ link, icon, alt }) => (
                <a
                  href={link}
                  key={alt}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={icon}
                    alt={alt}
                    height={match ? 30 : 16}
                    width={match ? 30 : 16}
                  />
                </a>
              ))}
            </Social>
            {match && (
              <Copyright>
                Website design and content &copy; 2022 Niger Sultana Mimi.
              </Copyright>
            )}
          </Wrapper>
          {!match && (
            <Copyright>
              Website design and content &copy; 2022 Niger Sultana Mimi.
            </Copyright>
          )}
        </Footer>
      </ThemeProvider>
      <Analytics />
    </>
  );
}
