import Link from "next/link";
import { ReactNode } from "react";
import styled from "styled-components";
import { devices } from "../utils";

const ProjectContainer = styled.div`
  max-width: 296px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  @media ${devices.laptop} {
    display: initial;

    text-align: initial;

    max-width: 506px;
    margin: 0 3rem;
  }

  @media ${devices.desktop} {
    margin: initial;

    &:nth-child(odd) {
      margin-left: initial;
      margin-right: 102px;
    }

    &:nth-child(even) {
      margin-right: initial;
      margin-left: 223px;
    }
  }
`;
const Title = styled.h1`
  font-weight: 900;
  font-size: 34px;
  line-height: 34px;
  margin-bottom: 1rem;

  @media ${devices.laptop} {
    font-weight: 800;
  }
`;
const Subtitle = styled.p`
  font-weight: 800;
  font-size: 14px;
  line-height: 14px;
  margin-bottom: 2rem;

  @media ${devices.laptop} {
    font-weight: 300;
    font-size: 24px;
    line-height: 22px;
    margin-bottom: 2rem;
  }
`;
const Description = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 64px;

  text-align: left;

  @media ${devices.laptop} {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 64px;
  }
`;
const CallToAction = styled(Link)`
  border: solid 2px black;
  border-radius: 10px;
  padding: 12px 40px;
  text-decoration: none;
  color: black;

  font-weight: 800;
  font-size: 12px;
  line-height: 14px;

  @media ${devices.laptop} {
    padding: 22px 74px;
    font-weight: 700;
    font-size: 24px;
    line-height: 20px;
  }
`;

interface ProjectProps {
  title: string;
  subtitle: string;
  desc: string;
  linkTo: string;
  children?: ReactNode;
}

export default function Project({ title, subtitle, desc, linkTo, children }: ProjectProps) {
  return (
    <ProjectContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {children}
      <Description>{desc}</Description>
      <CallToAction href={linkTo}>View Case Study</CallToAction>
    </ProjectContainer>
  );
}