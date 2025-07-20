import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

// Animación de entrada (fade in + slide up)
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = styled.section`
  width: 100vw;
  min-height: 80vh;
  background-image: url('/TestHero1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 5vw;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: 40vh;
    padding: 2rem 2vw;
    gap: 1.5rem;
  }
`;

const ProfileImg = styled.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  background: #fff;
  display: block;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 2rem 4rem;
  border-radius: 1rem;
  text-align: right;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding: 1.2rem 1rem;
    max-width: 95vw;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0 0 1rem 0;
  color: #222;
  font-weight: 700;
  opacity: 0;
  animation: ${fadeInUp} 1.2s cubic-bezier(0.23, 1, 0.32, 1) 0.2s forwards;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.1rem;
  margin: 0;
  color: #444;
  font-weight: 400;
  opacity: 0;
  animation: ${fadeInUp} 1.2s cubic-bezier(0.23, 1, 0.32, 1) 0.7s forwards;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <ProfileImg src="/Profile.jpg" alt="Foto de Emilia" />
      <HeroContent>
        <Title>Lic. María Emilia Martin</Title>
        <Subtitle>Content Writer/editor | Literary Editor | Educational Content Writer | Editorial Translator</Subtitle>
      </HeroContent>
    </HeroSection>
  );
}
