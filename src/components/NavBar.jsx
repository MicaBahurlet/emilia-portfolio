import styled from "@emotion/styled";

const Nav = styled.nav`
  width: 100vw;
  background: #f5f5f5;
  padding: 1rem 0;
  box-sizing: border-box;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2vw;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 0 1vw;
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  font-style: italic;
  color: #222;
  margin: 0;
  letter-spacing: 2px;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    gap: 1.2rem;
  }
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 1.1rem;
  transition: color 0.2s;

  &:hover {
    color: violet;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default function NavBar() {
  return (
    <Nav>
      <NavContainer>
        <Logo>María Emilia</Logo>
        <NavList>
          <NavItem><NavLink href="#sobre-mi">Sobre Mi</NavLink></NavItem>
          <NavItem><NavLink href="#formacion">Formación</NavLink></NavItem>
          <NavItem><NavLink href="#trayectoria">Trayectoria</NavLink></NavItem>
          <NavItem><NavLink href="#contacto">Contacto</NavLink></NavItem>
        </NavList>
      </NavContainer>
    </Nav>

    // <nav>
    //   <Logo>María Emilia</Logo>
    // </nav>
  );
} 