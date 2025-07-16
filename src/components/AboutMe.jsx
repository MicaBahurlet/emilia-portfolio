import React from "react";
import styled from "@emotion/styled";

const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 3rem 0 2rem 0;
  max-width: 1200px;
  margin: 2rem auto;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1rem;
  }
`;

const ProfileImg = styled.img`
  width: 260px;
  height: 260px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  background: #fff;

  @media (max-width: 900px) {
    width: 180px;
    height: 180px;
  }
`;

const AboutContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 600px;

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
    max-width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #222;
  width: 100%;
`;

const Text = styled.p`
  font-size: 1.15rem;
  color: #444;
  margin: 0;
  line-height: 1.6;
`;

export default function AboutMe() {
  return (
    <AboutSection>
      <ProfileImg src="/ProfileEmilia.png" alt="Foto de Emilia" />
      <AboutContent>
        <Title>Sobre mí</Title>
        <Text>
          ¡Hola! Soy Emilia, vivo en Olavarría. Soy profesora y licenciada en Letras. Me apasiona la docencia, la literatura y el trabajo editorial. Disfruto creando y editando contenidos educativos y literarios, y acompañando a otros en sus procesos de aprendizaje y escritura.
        </Text>
      </AboutContent>
    </AboutSection>
  );
} 