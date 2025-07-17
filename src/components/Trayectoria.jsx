import React from "react";
import styled from "@emotion/styled";

const MainContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  color: #00008c;
  text-align: left;
  margin-bottom: 1.5rem;
`;

const TimelineSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0 2rem 0;
`;

const TimelineContainer = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 2rem;
  width: 100%;
  align-items: stretch;
  position: relative;

  @media (max-width: 700px) {
    gap: 1rem;
    padding: 0 1rem;
  }
`;

const VerticalLine = styled.div`
  grid-row: 1 / -1;
  grid-column: 1;
  width: 4px;
  background: #bdbdbd;
  border-radius: 2px;
  position: absolute;
  left: 14px;
  top: 0;
  bottom: 0;
  z-index: 0;
`;

const TimelineContent = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
  position: relative;

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
  left: -38px;
  top: 6px;
  width: 18px;
  height: 18px;
  background: #5959ff;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 2px 8px rgba(124,58,237,0.15);
  z-index: 2;

  @media (max-width: 700px) {
    left: -40px;
    width: 14px;
    height: 14px;
  }
`;

const Year = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: #00008c;
  min-width: 110px;
  display: inline-block;
  margin-bottom: 1rem;
  margin-top: 10px;

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
  text-align: left;

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

// Timeline para publicaciones
const PubTimelineContainer = styled(TimelineContainer)`
  margin-top: 3rem;
`;

const PubVerticalLine = styled(VerticalLine)`
  background: #bdbdbd;
`;

const PubDot = styled(Dot)`
  background: #0000cc;
  box-shadow: 0 2px 8px rgba(124,58,237,0.15);
  border: 3px solid #fff;
`;

const PubItemText = styled.p`
  font-size: 1.05rem;
  color: #222;
  margin: 0;
  line-height: 1.5;
  font-weight: 400;
  @media (max-width: 700px) {
    font-size: 0.95rem;
  }
`;

const PubTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #0000cc;
  text-align: left;
  margin-top: 2rem;
`;

export default function Trayectoria() {
  return (
    <MainContainer>
      <SectionTitle>Trayectoria</SectionTitle>
      <TimelineSection>
        <TimelineContainer>
          <VerticalLine />
          <TimelineContent>
            <TimelineItem>
              <Dot />
              <div>
                <Year>Octubre - Noviembre 2024</Year>
                <Title>Escuela Nacional Adolfo Pérez Esquivel - Profesora de Literatura</Title>
                <Description>
                  Durante mi suplencia fui docente de Literatura en 5° año de la escuela secundaria. Planificando, desarrollando y evaluando actividades propias de la planificación anual.
                </Description>
              </div>
            </TimelineItem>
            <TimelineItem>
              <Dot />
              <div>
                <Year>Agosto 2024 - actualidad...</Year>
                <Title>Universidad Nacional de Mar del Plata - Adscripta graduada en tareas de docencia en la asignatura Teoría y Crítica Literarias II</Title>
                <Description>
                  Adscripta graduada en tareas de docencia en la asignatura Seminario de Teoría y Crítica Objetos culturales y discursividades: panorama de la lectura.
                </Description>
              </div>
            </TimelineItem>
            <TimelineItem>
              <Dot />
              <div>
                <Year>Abril 2024 - actualidad...</Year>
                <Title>Biblioteca Popular 1° de Mayo - Profesora de Lectura y Escritura</Title>
                <Description>
                  Creadora y profesora del "Taller de Lectura y Escritura Crativa", trabajo con personas adultas desarrollando cualidades creativas para la escritura y buenas prácticas de lectura.
                </Description>
              </div>
            </TimelineItem>
            <TimelineItem>
              <Dot />
              <div>
                <Year>Agosto 2023 - actualidad...</Year>
                <Title>Instituto Superior de Formación Docente n°22 “Adolfo Alsina” - Ayudante de cátedra</Title>
                <Description>
                  Más de 2 años como ayudante de cátedra en el espacio curricular "Seminario de literatura y otros lenguajes" de la carrera de formación docente.
                </Description>
              </div>
            </TimelineItem>
            <TimelineItem>
              <Dot />
              <div>
                <Year>Agosto 2019 - Octubre 2019</Year>
                <Title> Escuela Nueva Pompeya en Mar del Plata  - Practicante</Title>
                <Description>
                   Prácticas profesionales en el marco de la asignatura Didáctica especial y práctica docente en Tercer año.
                </Description>
              </div>
            </TimelineItem>
          </TimelineContent>
        </TimelineContainer>
      </TimelineSection>

      <PubTitle>Publicaciones en revistas periódicas</PubTitle>
      <TimelineSection>
        <PubTimelineContainer>
          <PubVerticalLine />
          <TimelineContent>
            <TimelineItem>
              <PubDot />
              <PubItemText>2024. Martín Preisegger, María Emilia (2024) “La falsa sensación de horizontalidad en el género “Ciencia ficción”: Kentukis de Samanta Schweblin”. En Revista Argos, Volumen 11, número 28 julio diciembre 2024.</PubItemText>
            </TimelineItem>
            <TimelineItem>
              <PubDot />
              <PubItemText>2024. Publicación en prensa. Martín Preisegger, María E. “Reseña bibliográfica: Andrea Cuarterolo, Silvana Flores y Jorge Sala (eds), Giros históricos de los cines regionales en Argentina y América Latina: definiciones, delimitaciones y disputas históricas”. Estudios de Teoría Literaria. Revista digital: artes, letras y humanidades, julio de 2024, vol. 13, n° 31, pp. XX-XX. </PubItemText>
            </TimelineItem>
            <TimelineItem>
              <PubDot />
              <PubItemText>2024. Publicación en prensa. Martín Preisegger, María E. “Reseña bibliográfica: Letras en el aula: secuencias didácticas para enseñar lengua y literatura en la escuela secundaria”. En Revista Catalejos. Revista sobre lectura, formación de lectores y literatura para niños. </PubItemText>
            </TimelineItem>
            <TimelineItem>
              <PubDot />
              <PubItemText>2024. Publicación en prensa de fragmento de licenciatura de tesis. Martín Preisegger, María Emilia. “Transposición fílmica y reescritura: las lecturas hechas por Studio Ghibli de El castillo ambulante (1986) y Los borrowers (1952)”. En Revista Catalejos. Revista sobre lectura, formación de lectores y literatura para niños, sección Travesías. </PubItemText>
            </TimelineItem>
            <TimelineItem>
              <PubDot />
              <PubItemText>2023. Martín Preisegger, María Emilia (2023) “Ese verano a oscuras: adolescencias, entre la violencia y la asfixia”. En Revista Catalejos. Revista sobre lectura, formación de lectores y literatura para niños, 17 (9).</PubItemText>
            </TimelineItem>
          </TimelineContent>
        </PubTimelineContainer>
      </TimelineSection>
    </MainContainer>
  );
} 