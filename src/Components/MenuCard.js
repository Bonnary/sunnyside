import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
export default function MenuCard() {
  return (
    <CardWrapper variants={downVariants} initial="hidden" animate="visible">
      <Container>
        <Wrapper>
          <Text>About</Text>
          <Text>Services</Text>
          <Text>Projects</Text>
          <Button>CONTACT</Button>
        </Wrapper>
      </Container>
    </CardWrapper>
  );
}

const CardWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  position: fixed;
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 7rem 0 0 1rem;
  width: 90vw;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

`;

const Wrapper = styled.div`
  margin: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  font-family: var(--des);
  opacity: 0.3;
  cursor: pointer;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 50px;
  background-color: var(--Yellow);
  font-size: 1.3rem;
  padding: 15px 30px;
  font-family: var(--title);
  font-weight: var(--title-weight);
  transition: 0.3s;

  &:hover {
    color: white;
    background-color: var(--Light-blue);
  }
`;

const downVariants = {
  hidden: {
    y: "-500px",
    x: "500px",
  },
  visible: {
    y: "0px",
    x: "0px",
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 120,
    },
  },
};