import type { AppProps } from "next/app";
import Head from "next/head";
import Image from "next/image";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { Roboto_Flex } from "@next/font/google";

import theme from "../theme";

const roboto = Roboto_Flex({
  subsets: ['latin'],
  axes: ["wdth"],
  variable: "--roboto-font"
});

const GlobalStyles = createGlobalStyle`
  ${reset}
  html {
    font-family: ${roboto.style.fontFamily}
  }
`;

const Nav = styled.nav`
  position: fixed;
  top: 44px;
  left: calc((100vw - ${props => props.theme.pageWidth}px) / 2);
  padding: 0 122px;
  width: calc(${props => props.theme.pageWidth}px - 244px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
`;

function Logo() {
  return <Image src="/logo.svg" alt="logo" height={65} width={130} />
}

const MenuBox = styled.div`
  height: 70px;
  width: 101px;
  background-color: ${props => props.theme.components.menu.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuLabel = styled.label`
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;

function Menu() {
  return <MenuBox>
    <MenuLabel>Menu</MenuLabel>
  </MenuBox>
}

const Footer = styled.footer`
  background-color: ${(props) => props.theme.colors.brown};
  width: 100vw;
  height: 221px;
`;

const Wrapper = styled.div`
  height: 100%;
  max-width: calc(${props => props.theme.pageWidth}px - 216px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 108px;
  margin: 0 auto;
`;

const Social = styled.div`
  width: 293px;
  display: flex;
  justify-content: space-between;
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
  font-size: 12px;
  line-height: 20px;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <div>
          <Head>
            <title>Mimi</title>
            <meta
              name="description"
              content="Portfolio website of Niger Sultana Mimi"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          
          <Nav>
            <Logo />
            <Menu />
          </Nav>

          <main>
            <Component {...pageProps} />
          </main>

          <Footer>
            <Wrapper>
              <Logo />
              <Social>
                {socials.map(({ link, icon, alt }) => (
                  <a href={link} key={alt} target="_blank" rel="noopener noreferrer">
                    <Image src={icon} alt={alt} height={30} width={30} />
                  </a>
                ))}
              </Social>
              <Copyright>
                Website design and content &copy; 2022 Niger Sultana Mimi.
              </Copyright>
            </Wrapper>
          </Footer>
        </div>
      </ThemeProvider>
    </>
  );
}
