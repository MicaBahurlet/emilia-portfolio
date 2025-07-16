import React from "react";
import styled from "@emotion/styled";

const TimelineSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 3rem 0 2rem 0;
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  max-width: 800px;
  width: 100%;

  @media (max-width: 700px) {
    gap: 1rem;
    padding: 0 1rem;
  }
`;

const VerticalLine = styled.div`
  width: 4px;
  background: #bdbdbd;
  border-radius: 2px;
  position: relative;
  margin: 0 0.5rem;
  min-height: 350px;
  height: 100%;
`;

const TimelineContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  flex: 1;

  @media (max-width: 700px) {
    gap: 2rem;
  }
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  position: relative;
`;

const Dot = styled.div`
  position: absolute;
  left: -2.1rem;
  top: 0.2rem;
  width: 18px;
  height: 18px;
  background: #7c3aed;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 2px 8px rgba(124,58,237,0.15);
  z-index: 2;

  @media (max-width: 700px) {
    left: -2.3rem;
    width: 14px;
    height: 14px;
  }
`;

const Year = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: #7c3aed;
  min-width: 110px;
  display: inline-block;
  margin-bottom: 0.2rem;

  @media (max-width: 700px) {
    font-size: 0.95rem;
    min-width: 80px;
  }
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.3rem 0;
  color: #222;

  @media (max-width: 700px) {
    font-size: 1.05rem;
  }
`;

const Description = styled.p`
  font-size: 1.05rem;
  color: #444;
  margin: 0;
  line-height: 1.5;

  @media (max-width: 700px) {
    font-size: 0.95rem;
  }
`;

export default function Trayectoria() {
  return (
    <TimelineSection>
      <TimelineContainer>
        <VerticalLine />
        <TimelineContent>
          <TimelineItem>
            <Dot />
            <div>
              <Year>2017 - Actualidad</Year>
              <Title>Docente en la escuela Pepito</Title>
              <Description>
                Encargada de dictar clases de Lengua y Literatura, planificación de contenidos y acompañamiento pedagógico a estudiantes de nivel secundario.
              </Description>
            </div>
          </TimelineItem>
          <TimelineItem>
            <Dot />
            <div>
              <Year>2023 - Actualidad</Year>
              <Title>Profesora a cargo de estudiantes en escuela Pepito</Title>
              <Description>
                Coordinación de proyectos educativos, tutoría de estudiantes y desarrollo de actividades extracurriculares orientadas al fortalecimiento académico.
              </Description>
            </div>
          </TimelineItem>
          <TimelineItem>
            <Dot />
            <div>
              <Year>2024 - Actualidad</Year>
              <Title>Ayudante pscripta en ...</Title>
              <Description>
                Asistencia en la corrección de exámenes, apoyo en la organización de materiales didácticos y colaboración en tareas administrativas del área.
              </Description>
            </div>
          </TimelineItem>
        </TimelineContent>
      </TimelineContainer>
    </TimelineSection>
  );
} 