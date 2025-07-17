import styled from '@emotion/styled';

const Section = styled.section`
  max-width: 800px;
  margin: 2rem auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  padding: 2rem;
`;

const Title = styled.h2`
  color: #22223b;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  padding-left: 1.2rem;
`;

const Item = styled.li`
  margin-bottom: 0.7rem;
  color: #4a4e69;
  line-height: 1.2;
`;

export default function Education() {
  return (
    <>
      <Section>
        <Title>Formación académica</Title>
        <List>
          <Item>
            <strong>Profesorado en Letras (2017-2023)</strong> — Universidad Nacional de Mar del Plata
          </Item>
          <Item>
            <strong> Licenciatura en Letras (2015-2024)</strong> — Universidad Nacional de Mar del Plata
          </Item>
          <Item>
            <strong>Bibliotecaria escolar (2023-actualidad)
             </strong> — Universidad Nacional de Mar del Plata
          </Item>
        </List>
      </Section>
      <Section>
        <Title>Cursos y capacitaciones</Title>
        <List>
          <Item>
            <strong>2022 - 2023:</strong> Curso inicial de lengua de señas cursado en el Laboratorio de Idiomas de UNICEN
          </Item>
          <Item>
            <strong>2021:</strong>  Taller de literatura japonesa. Programa Universidad de Verano, UNMDP. 
          </Item>
          <Item>
            <strong>2021:</strong> Curso Ciencias sociales y tecnopedagogía. Programa Universidad de Verano, UNMDP. 
          </Item>

          <Item>
            <strong>2021:</strong> Curso Taller de juegos de mesa: cómo fabricarlos y utilizarlos en la escuela o actividades recreativas. Programa Universidad de Verano, UNMDP. 

          </Item>
          <Item>
            <strong>2021:</strong>  Curso de seguridad en el entorno educativo organizado por Fundación Telefónica 
          </Item>
          <Item>
            <strong>2021:</strong> Curso de creación de Contenidos Digitales en el Entorno Educativo organizado por Fundación Telefónica 
          </Item>
        </List>
      </Section>
    </>
  );
}
