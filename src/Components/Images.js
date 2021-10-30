import React from 'react'
import styled from 'styled-components'
import milk from "../images/desktop/image-gallery-milkbottles.jpg";
import orange from "../images/desktop/image-gallery-orange.jpg";
import cone from "../images/desktop/image-gallery-cone.jpg";
import sugarcubes from "../images/desktop/image-gallery-sugarcubes.jpg";

export default function Images() {
    return (
      <Container>
        <Image src={milk} />
        <Image src={orange} />
        <Image src={cone} />
        <Image src={sugarcubes} />
      </Container>
    );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 436px;

  @media (max-width: 770px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 150px;
  }
`;

const Image = styled.img`
width: 100%;
height: 100%;
`