import Image from "next/image";
import styled from "styled-components";
import { useMediaQuery } from "../hooks";
import { devices, sizes } from "../utils";
import Logo from "./Logo";

const FooterContainer = styled.footer`
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

interface FooterProps {
  isLaptop: boolean
}

export default function Footer({ isLaptop } : FooterProps) {
  const match = useMediaQuery(sizes.tablet);

  return (
    <FooterContainer>
      <Wrapper>
        <Logo height={match ? 70 : 40} width={match ? 101 : 88.5} />
        <Social>
          {socials.map(({ link, icon, alt }) => (
            <a href={link} key={alt} target="_blank" rel="noopener noreferrer">
              <Image
                src={icon}
                alt={alt}
                height={match ? 30 : 16}
                width={match ? 30 : 16}
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
