import styled from "styled-components";

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

interface SectionProps {
  readonly color?: string;
}

const Section = styled(Background)<SectionProps>`
  background-color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.white};
`;

interface SwimLaneProps {
  readonly left?: boolean;
  readonly color?: string;
}

const SwimLane = styled.div<SwimLaneProps>`
  height: 100vh;
  width: 101px;
  position: absolute;
  ${(props) => (props.left ? "left: 122px;" : "right: 122px;")}
  background-color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.white};
`;

export default function Home() {
  return (
    <>
      <Section>
        <SwimLane color="yellow" />
      </Section>
      <Section color="yellow">
        <SwimLane left />
      </Section>
      <Section>
        <SwimLane color="sky" />
      </Section>
      <Section color="sky">
        <SwimLane left />
      </Section>
      <Section>
        <SwimLane color="brown" />
      </Section>
    </>
  );
}
