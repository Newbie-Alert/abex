import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";

const ServiceContainer = styled.section`
  width: 100%;
  height: 500px;
  padding: 2rem;
  background-color: var(--container-color);
`;

const ServiceTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: white;
`;

const ServiceList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export default function Services() {
  return (
    <ServiceContainer>
      <ServiceTitle>Our Services</ServiceTitle>
      <ServiceList>
        <Card />
      </ServiceList>
    </ServiceContainer>
  );
}
