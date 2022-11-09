import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface SectionProps {
  readonly backgroundColor?: string;
  readonly swimLaneColor?: string;
}

const Section = styled.div<SectionProps>`
  height: 100vh;
  width: 100vw;
  position: relative;
  background-color: ${(props) =>
    props.backgroundColor
      ? props.theme.colors[props.backgroundColor]
      : props.theme.colors.white};

  &:before {
    content: "";
    height: 100vh;
    width: 101px;
    position: absolute;
    right: calc(((100vw - ${(props) => props.theme.pageWidth}px) / 2) + 122px);
    background-color: ${(props) =>
      props.swimLaneColor
        ? props.theme.colors[props.swimLaneColor]
        : props.theme.colors.white};
  }

  &:nth-child(even):before {
    right: 0;
    left: calc(((100vw - ${(props) => props.theme.pageWidth}px) / 2) + 122px);
  }
`;

const Content = styled.div`
  max-width: ${(props) => props.theme.pageWidth}px;
  margin: 0 auto;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Intro = styled.p`
  max-width: 954px;
  font-weight: 300;
  font-stretch: 75%;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  margin: 0 auto;
`;

const FocusedText = styled.b`
  font-weight: 600;
`;

interface ProjectImageProps {
  right?: boolean;
  margin?: number;
}

const ProjectImage = styled(Image)<ProjectImageProps>`
  position: relative;
  ${(props) => {
    if (props.right) {
      return `margin-right: ${props.margin || 102}px;`;
    }
    return `margin-left: ${props.margin || 102}px;`;
  }}
`;

const ProjectContainer = styled.div`
  max-width: 506px;

  &:nth-child(odd) {
    margin-left: initial;
    margin-right: 102px;
  }

  &:nth-child(even) {
    margin-right: initial;
    margin-left: 223px;
  }
`;
const Title = styled.h1`
  font-weight: 800;
  font-size: 36px;
  line-height: 36px;
  margin-bottom: 1rem;
`;
const Subtitle = styled.p`
  font-weight: 300;
  font-size: 24px;
  line-height: 22px;
  margin-bottom: 2rem;
`;
const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 64px;
`;
const CallToAction = styled(Link)`
  border: solid 2px black;
  border-radius: 10px;
  padding: 22px 74px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 24px;
  line-height: 20px;
`;

interface ProjectProps {
  readonly title: string;
  readonly subtitle: string;
  readonly desc: string;
  readonly linkTo: string;
}

function Project({ title, subtitle, desc, linkTo }: ProjectProps) {
  return (
    <ProjectContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Description>{desc}</Description>
      <CallToAction href={linkTo}>View Case Study</CallToAction>
    </ProjectContainer>
  );
}

export default function Home() {
  return (
    <>
      <Section swimLaneColor="yellow">
        <Content>
          <Intro>
            Hi, I am <FocusedText>Mimi!</FocusedText> I am a creative person who
            is exploring and working in the{" "}
            <FocusedText>user experience design</FocusedText> field. I love
            being able to design solutions for people in their day-to-day life.
            I really enjoy <FocusedText>visual designing</FocusedText>, playing
            with typography, and colors, and discovering new tricks. I believe
            design solutions can be the{" "}
            <FocusedText>absolute bridge </FocusedText>
            between technology and human beings.
            <br />
            <br /> I love to <FocusedText>collaborate</FocusedText> with people
            of my related field who can give me{" "}
            <FocusedText>design critiques</FocusedText> and can inspire me.
            Currently, I am looking for a full-time entry-level
            <FocusedText> UI/UX Designer</FocusedText> position.
          </Intro>
        </Content>
      </Section>
      <Section backgroundColor="yellow">
        <Content>
          <ProjectImage
            src="/home/yfcresponsivepic.png"
            alt="responsive_website_design"
            width={585}
            height={675}
          />
          <Project
            linkTo="/"
            title="Youth For Change"
            subtitle="A Responsive Website for a social organization of Bangladesh"
            desc="Youth for Change Bangladesh is a social organization. The goal of Youth For Change Bangladesh is to ensure women empowerment and gender equity at the fullest sense."
          />
        </Content>
      </Section>
      <Section swimLaneColor="sky">
        <Content>
          <Project
            linkTo="/"
            title="Youth For Change Social App"
            subtitle="For learning about Sexual and Reproductive Health and Rights"
            desc="Youth for Change is a Bangladesh-based  social organization focused on youth and it’s rights. The organization needs a tool that helps people learn about Sexual and Reproductive Health and Rights. Youth for Change Bangladesh’s primary target users include, teenagers, college students, and adults who are concerned with the youth right and would like to learn more about what they can do to enrich knowledge."
          />
          <ProjectImage
            src="/home/yfcapppic.png"
            alt="responsive_website_design"
            width={575}
            height={570}
            margin={66}
            right
          />
        </Content>
      </Section>
      <Section backgroundColor="sky">
        <Content>
          <ProjectImage
            src="/home/catadopterreponsivepic.png"
            alt="responsive_website_design"
            width={799}
            height={491}
            margin={30}
          />
          <Project
            linkTo="/"
            title="Catadopter"
            subtitle="A Responsive Website for cat adoption"
            desc="I have designed a  responsive website for getting cats adopted or adopting one online which save user’s time. It is one of my personal project’s where found the urgency for getting my cats adopted and faced many unknown consequences. These events inspired me to design a user friendly and useful website for adopting cats and getting adopted one."
          />
        </Content>
      </Section>
      <Section swimLaneColor="brown">
        <Content>
          <Project
            linkTo="/"
            title="ArtiestBio App"
            subtitle="For art galleries"
            desc="This is my very first projrct. In this project, I had created a new artist bio app to help people find about artists, events and buying art event tickets so that  they can skip physical labor and the payment process is streamlined."
          />
          <ProjectImage
            src="/home/artiesbioappic.png"
            alt="responsive_website_design"
            width={608}
            height={572}
            margin={122}
            right
          />
        </Content>
      </Section>
    </>
  );
}
