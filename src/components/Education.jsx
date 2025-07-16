import styled from '@emotion/styled';

const Section = styled.section`
  max-width: 600px;
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
`;

export default function Education() {
  return (
    <Section>
      <Title>Formación académica</Title>
      <List>
        <Item>
          <strong>Licenciatura en Letras</strong> — Universidad de Buenos Aires (UBA)
        </Item>
        {/* Puedes agregar más estudios aquí */}
      </List>
    </Section>
  );
}
