import React from "react";
import styled from "styled-components";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import Trainer from "../../components/Trainer/Trainer";
import Carousel from "../../components/Carousel/Carousel";

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--container-color);
`;

export default function Home() {
  return (
    <HomeContainer>
      <Banner />
      <Services />
      <Trainer />
      <Carousel />
    </HomeContainer>
  );
}
