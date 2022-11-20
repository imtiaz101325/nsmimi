import type { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { Roboto_Flex } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { Footer, Logo, Menu, Nav } from "../components";

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
        <Footer isLaptop={match} />
      </ThemeProvider>
      <Analytics />
    </>
  );
}
