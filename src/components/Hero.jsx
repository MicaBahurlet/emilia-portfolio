import React from "react";
import styled from "@emotion/styled";

const HeroSection = styled.section`
  width: 100vw;
  min-height: 60vh;
  background-image: url('/BackgroundHero.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 0 5vw;

  @media (max-width: 768px) {
    min-height: 40vh;
    padding: 0 2vw;
    justify-content: center;
  }
`;

const HeroContent = styled.div`
  padding: 2rem 7rem;
  border-radius: 1rem;
  text-align: right;

  @media (max-width: 768px) {
    padding: 1.2rem 1rem;
    max-width: 95vw;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0 0 1rem 0;
  color: #222;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.1rem;
  margin: 0;
  color: #444;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <HeroContent>
        <Title>Lic. María Emilia Martin</Title>
        <Subtitle>Content Writer/editor | Literary Editor | Educational Content Writer | Editorial Translator</Subtitle>
      </HeroContent>
    </HeroSection>
  );
}
