import React from "react";
import styled from "styled-components";
import egg from "../images/desktop/image-transform.jpg";
import glass from "../images/desktop/image-stand-out.jpg";
import cherry from "../images/desktop/image-graphic-design.jpg";
import orange from "../images/desktop/image-photography.jpg";
export default function Info() {

  return (
    <Container>
      <EggTextContainer>
        <Title>Transfrom your brand</Title>
        <Des>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </Des>
        <LearnMore color="var(--Yellow)">LEARN MORE</LearnMore>
      </EggTextContainer>
      <Image src={egg} />
      <Image src={glass} />
      <EggTextContainer>
        <Title>Stand out to the right audience</Title>
        <Des>
          Using a collabrative fromula of designers, researchers, photographers,
          videographers, and copywriter, we'll build and extend your brand in
          digital places.
        </Des>
        <LearnMore color="var(--Soft-red)">LEARN MORE</LearnMore>
      </EggTextContainer>

      <TextoverImage background={cherry}>
        <Wrapper margin="21rem 0 0 4rem">
          <TitleImage>Graphic Design</TitleImage>
          <DesImage>
            Great design makes you menorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention.
          </DesImage>
        </Wrapper>
      </TextoverImage>
      <TextoverImage background={orange}>
        <Wrapper margin="21rem 0 0 5rem">
          <TitleImage>Photography</TitleImage>
          <DesImage>
            Increase your credibility by getting the most stunning. high-quality
            photos that improve your business image.
          </DesImage>
        </Wrapper>
      </TextoverImage>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 575px;
  @media (max-width: 770px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 575px;
  }
`;

const EggTextContainer = styled.div`
  place-self: center;
  width: 50%;
  display: flex;
  flex-direction: column;

  gap: 2rem;
  @media (max-width: 770px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  width: 70%;
  font-family: var(--title);

  @media (max-width: 770px) {
    text-align: center;
    width: 50%;
  }
`;

const Des = styled.p`
  font-size: 1rem;
  font-family: var(--des);
  opacity: 0.5;

  @media (max-width: 770px) {
    text-align: center;
    width: 50%;
  }
`;

const LearnMore = styled.h1`
  font-size: 1rem;
  font-family: var(--title);

  &:after {
    content: "";
    height: 10px;
    width: 30%;
    margin-top: -7px;
    display: block;
    border-radius: 1rem;
    background-color: ${(prop) => prop.color};

    @media (max-width: 770px) {
      width: 100%;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;

`;


const TextoverImage = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(prop) => prop.background});
  background-position: center;
`;

const Wrapper = styled.div`
  margin: ${(prop)=> prop.margin};
  width: 70%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TitleImage = styled.h1`
  font-size: 2rem;
  text-align: center;
  opacity: 0.7;
  font-family: var(--title);
`;

const DesImage = styled.p`
  font-size: 1rem;
  font-family: var(--des);
  opacity: 0.5;
  text-align: center;
  width: 70%;
`;
