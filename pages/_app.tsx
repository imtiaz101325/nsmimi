import type { AppProps } from "next/app";
import Head from "next/head";
import Image from "next/image";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import { Roboto_Flex } from "@next/font/google";

import theme from "./theme";

const roboto = Roboto_Flex();

const GlobalStyles = createGlobalStyle`
  html {
    font-family: ${roboto.style.fontFamily}
  }
`;

const Footer = styled.footer`
  background-color: ${(props) => props.theme.colors.brown};
  width: 100vw;
  height: 221px;
`;

const Wrapper = styled.div`
  height: 100%;
  width: calc(100% - 216px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 108px;
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
      <Reset />
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

          <main>
            <Component {...pageProps} />
          </main>

          <Footer>
            <Wrapper>
              <Image src="/logo.svg" alt="logo" height={65} width={130} />
              <Social>
                {socials.map(({ link, icon, alt }) => (
                  <a href={link} key={alt}>
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
