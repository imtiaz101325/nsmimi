import styled from "styled-components";

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

interface SectionProps {
  readonly backgroundColor?: string;
  readonly swimLaneColor?: string;
}

const Section = styled(Background)<SectionProps>`
  background-color: ${(props) =>
    props.backgroundColor
      ? props.theme.colors[props.backgroundColor]
      : props.theme.colors.white};

  &:before {
    content: "";
    height: 100vh;
    width: 101px;
    position: absolute;
    right: calc(((100vw - 1440px) / 2) + 122px);
    background-color: ${(props) =>
      props.swimLaneColor
        ? props.theme.colors[props.swimLaneColor]
        : props.theme.colors.white};
  }

  &:nth-child(even):before {
    right: 0;
    left: calc(((100vw - 1440px) / 2) + 122px);
  }
`;

const Intro = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const IntroContent = styled.p`
  max-width: 954px;
  font-weight: 300;
  font-stretch: 75%;
  font-size: 32px;
  line-height: 36px;
`;

const FocusedText = styled.b`
  font-weight: 600;
`;

export default function Home() {
  return (
    <>
      <Section swimLaneColor="yellow">
        <Intro>
          <IntroContent>
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
          </IntroContent>
        </Intro>
      </Section>
      <Section backgroundColor="yellow"></Section>
      <Section swimLaneColor="sky"></Section>
      <Section backgroundColor="sky"></Section>
      <Section swimLaneColor="brown"></Section>
    </>
  );
}
