import styled from "styled-components";
import MenuIcon from "./MenuIcon";


export default function Header({Click, setClick}) {
  
  return (
    <Container>
      <Wrapper>
        <Logo>sunnyside</Logo>
        <TexWrapper>
          <Text>About</Text>
          <Text>Services</Text>
          <Text>Projects</Text>
          <Button>CONTACT</Button>
        </TexWrapper>
          <MenuIcon Click={Click} setClick={setClick}/>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 5rem;
  z-index: 2;
  width: 100%;
  position: fixed;
  background-color: var(--Light-blue);
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr ;
`;

const Logo = styled.h1`
  margin: 1rem 0 0 3rem;
  font-size: 2rem;
  color: white;
  font-family: var(--des);
  font-weight: var(--des-thick);
  @media (max-width: 1025px) {
    margin-left: 1.5rem;
  }
`;

const TexWrapper = styled.div`
  margin: 1rem 3rem 0 0;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  @media (max-width: 770px) {
    display: none;
  }
`;

const Text = styled.h1`
  margin-top: 1rem;
  font-size: 1rem;
  font-family: var(--des);
  color: white;
  opacity: 0.7;
  cursor: pointer;
  &::after {
    content: "";
    height: 5px;
    width: 0;
    display: block;
    border-radius: 1.5rem;
    margin-top: 1.5rem;
    background: white;
    transition: 0.3s;
  }

  &:hover {
    opacity: 1;
    &:after {
      width: 100%;
    }
  }
`;


const Button = styled.button`
  /* margin-top: 1rem; */
  border: none;
  border-radius: 25px;
  background-color: white;
  font-size: 1rem;
  width: 9rem;
  height: 3rem;
  font-family: var(--title);
  font-weight: var(--title-weight);
  transition: 0.3s;

  &:hover {
    color: white;
    background-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 770px) {
    display: none;
  }
`;
