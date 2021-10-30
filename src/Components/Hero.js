import React from "react";
import styled from "styled-components";
import Bg from "../images/desktop/image-header.jpg";
import Bgm from "../images/mobile/image-header.jpg";
import arrow from "../images/icon-arrow-down.svg";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <Container>
      <ImageDes src={Bg}/>
      <ImageMobile src={Bgm}/>
      <TextContainer>
        <Text variants={Scale} initial="hidden" animate="visible">
          WE ARE CREATIVES
        </Text>
        <Arrow
          src={arrow}
          variants={ScaleYoyo}
          initial="hidden"
          animate="visible"
        />
      </TextContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: var(--Light-blue);
`;

const ImageDes = styled.img`
  max-width: 1440px;
  position: relative;

  @media (max-width: 770px){
      display: none;
  }
`;

const ImageMobile = styled.img`
  width: 100%;
  position: relative;

  @media (min-width: 770px) {
    display: none;
  }
`;
const TextContainer = styled.div`
  position: absolute;
  bottom: 30%;
  left: 25%;
  text-align: center;
  @media (max-width: 770px) {
    top: 40%;
    left: 10%;
  }
`;

const Text = styled(motion.h1)`
  font-size: 3rem;
  color: white;
  font-family: var(--title);
  letter-spacing: 1rem;
  margin-bottom: 5rem;
  
  @media (max-width: 770px) {
    font-size: 2rem;
  }
`;

const Arrow = styled(motion.img)`

`

const Scale = {
  hidden: {
      opacity: 0,
    scale: 0,
  },
  visible: {
      opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};

const ScaleYoyo = {
  hidden: {
    y: "50px"
  },
  visible: {
    y:"0px",
    transition: {
      duration: 1,
      yoyo: Infinity,
    },
  },
};