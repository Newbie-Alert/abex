import React from "react";
import styled from "styled-components";

const TrainerContainer = styled.section`
  width: 100%;
  padding: 2rem;
  background-color: var(--container-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TrainerTextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
`;

const TextTitle = styled.h1`
  width: 100%;
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
`;

export default function Trainer() {
  return (
    <TrainerContainer>
      <TrainerTextBox>
        <TextTitle>Personal Trainer</TextTitle>
      </TrainerTextBox>
    </TrainerContainer>
  );
}
