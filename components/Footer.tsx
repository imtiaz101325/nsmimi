import Image from "next/image";
import styled from "styled-components";
import { useMediaQuery } from "../hooks";
import { devices, sizes } from "../utils";
import Logo from "./Logo";

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.brown};
  width: 100vw;
  height: 112px;

  @media ${devices.tablet} {
    height: 202px;
  }

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

  @media ${devices.tablet} {
    height: 99px;
    max-width: calc(${(props) => props.theme.tabWidth}px - 128px);
    padding-top: 64px;
  }

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

  @media ${devices.tablet} {
    width: 122px;
  }

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

  @media ${devices.tablet} {
    padding-right: calc(
      ((100vw - ${(props) => props.theme.tabWidth}px) / 2) + 64px
    );
  }

  @media ${devices.laptop} {
    font-size: 12px;
    line-height: 20px;
    text-align: initial;

    padding: initial;
  }
`;

interface getLogoDimensions {
  isTablet: boolean;
  isLaptop: boolean;
}

function getLogoDimensions({
  isTablet,
  isLaptop,
}: getLogoDimensions): [number, number] {
  if (isLaptop) {
    return [64.86, 130.44];
  }

  if (isTablet) {
    return [99, 180.92];
  }

  return [40, 88.49];
}

interface getSocialDimensions {
  isTablet: boolean;
  isLaptop: boolean;
}

function getSocialDimensions({
  isTablet,
  isLaptop,
}: getSocialDimensions): [number, number] {
  if (isLaptop) {
    return [30, 30];
  }

  if (isTablet) {
    return [40, 40];
  }

  return [16, 16];
}

export default function Footer() {
  const isTablet = useMediaQuery(sizes.tablet);
  const isLaptop = useMediaQuery(sizes.laptop);

  const [logoHeight, logoWidth] = getLogoDimensions({ isTablet, isLaptop });
  const [socialHeight, socialWidth] = getSocialDimensions({
    isTablet,
    isLaptop,
  });

  return (
    <FooterContainer>
      <Wrapper>
        <Logo height={logoHeight} width={logoWidth} />
        <Social>
          {socials.map(({ link, icon, alt }) => (
            <a href={link} key={alt} target="_blank" rel="noopener noreferrer">
              <Image
                src={icon}
                alt={alt}
                height={socialHeight}
                width={socialWidth}
              />
            </a>
          ))}
        </Social>
        {isLaptop && (
          <Copyright>
            Website design and content &copy; 2022 Niger Sultana Mimi.
          </Copyright>
        )}
      </Wrapper>
      {!isLaptop && (
        <Copyright>
          Website design and content &copy; 2022 Niger Sultana Mimi.
        </Copyright>
      )}
    </FooterContainer>
  );
}
