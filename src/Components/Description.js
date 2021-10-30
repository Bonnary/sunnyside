import React from "react";
import styled from "styled-components";
import emily from "../images/image-emily.jpg";
import jennie from "../images/image-jennie.jpg";
import thomas from "../images/image-thomas.jpg";
export default function Description() {
  return (
    <Container>
      <TextWrapper>
        <TextTitle>CLIENT TESTIMONIALS</TextTitle>
        <DetailContainer>
          <DetailWrapper>
            <Icon src={emily} />
            <DetailDecription>
              Our modern web and mobile applications allow you to keep track of
              our finances whenever you are in the world.
            </DetailDecription>
            <DetailTitle>emily Banking</DetailTitle>
            <TitleDes>Fast Onboarding</TitleDes>
          </DetailWrapper>
          <DetailWrapper>
            <Icon src={jennie} />
            <DetailDecription>
              See exactly where your money goes each month. Receive
              notifications when you're close to your hitting limits.
            </DetailDecription>
            <DetailTitle>Simple Budgeting</DetailTitle>
            <TitleDes>Fast Onboarding</TitleDes>
          </DetailWrapper>
          <DetailWrapper>
            <Icon src={thomas} />
            <DetailDecription>
              We don't do branches. Open your account in minutes emily and start
              taking control of your finances right away.
            </DetailDecription>
            <DetailTitle>Fast Onboarding</DetailTitle>
            <TitleDes>Fast Onboarding</TitleDes>
          </DetailWrapper>
        </DetailContainer>
      </TextWrapper>
    </Container>
  );
}

const Container = styled.div`
  min-height: 700px;
  display: flex;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3.5rem;
  flex-direction: column;
`;

const TextTitle = styled.h1`
  font-size: 1.7rem;
  margin-bottom: 1rem;
  letter-spacing: 1rem;
  opacity: 0.3;
  font-family: var(--title);
  text-align: center;
  @media (max-width: 770px) {
    font-size: 1rem;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8rem;
  @media (max-width: 770px) {
    flex-direction: column;
    margin: 1rem;
  }
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 770px) {
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
`;

const Icon = styled.img`
  width: 4.5rem;
  border-radius: 50%;
  margin-bottom: 2rem;
`;



const DetailDecription = styled.p`
  font-size: 1rem;
  width: 80%;
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0.5;
  font-family: var(--des);

`;

const DetailTitle = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  font-family: var(--title);
`;

const TitleDes = styled.p`
  font-size: 1rem;
  width: 80%;
  text-align: center;
  opacity: 0.5;
  font-family: var(--des);
`;