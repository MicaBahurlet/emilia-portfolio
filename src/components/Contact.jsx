import React from "react";
import styled from "@emotion/styled";
import { FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0 2rem 0;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #222;
`;

const IconsRow = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 30px;
    gap: 1.5rem;
  }
`;

const IconLink = styled.a`
  color: #333;
  font-size: 2.5rem;
  transition: color 0.2s;

  &:hover {
    color: #0077b6;
  }
`;

export default function Contact() {
  return (
    <ContactSection>
      <Title>Contacto</Title>
      <IconsRow>
        <IconLink href="https://www.linkedin.com/in/mariaemilia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </IconLink>
        <IconLink href="mailto:mariaemilia@email.com" aria-label="Correo electrónico">
          <FaEnvelope />
        </IconLink>
        <IconLink href="https://www.instagram.com/mariaemilia" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </IconLink>
      </IconsRow>
    </ContactSection>
  );
} 