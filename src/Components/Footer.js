import React from "react";
import styled from "styled-components";
import Facebook from "../images/icon-facebook.svg";
import Instagram from "../images/icon-instagram.svg";
import Pinterest from "../images/icon-pinterest.svg";
import Twitter from "../images/icon-twitter.svg";
export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <Logo>sunnyside</Logo>
        <TextWrapper>
          <Text>About</Text>
          <Text>Services</Text>
          <Text>Projects</Text>
        </TextWrapper>
        <IconWrapper>
          <Icon src={Facebook} />
          <Icon src={Instagram} />
          <Icon src={Pinterest} />
          <Icon src={Twitter} />
        </IconWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--moderate-cyan);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  gap: 2rem;
`;


const Logo = styled.h1`
  font-size: 2rem;
  margin-top: 2rem;
  font-family: var(--des);
  opacity: 0.5;
`;
const TextWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;
const Text = styled.h1`
  font-family: var(--des);
  font-size: 1rem;
  opacity: 0.3;
  cursor: pointer;

  &:hover {
    opacity: 1;
    color: white;
  }
`;
const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 3rem;
`;
const Icon = styled.img`
  width: 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: white;
  }
`;
