import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { findIcon } from "../../util.js/IconGenerate";
import Button from "../../shared/common/Button";
import { listMount, slideDown, slideLeft } from "../../shared/styles/animation";

const TrainerContainer = styled.section`
  width: 100%;
  padding: 2rem 5rem;
  background-color: var(--container-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const TrainerTextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TextTitle = styled.div`
  width: 100%;
  font-size: 4.5rem;
  margin-bottom: 2.5rem;
  animation: ${slideDown} 1s backwards;
  animation-delay: 0.15s;
  animation-play-state: paused;
`;

const TextDesc = styled.p`
  font-family: "Poppins-Light";
  font-size: 1rem;
  margin-block: 1rem;
  width: 100%;
`;

const HireTextUl = styled.ul`
  width: 100%;
  animation: ${listMount} 1s backwards;
  animation-delay: 0.15s;
  animation-play-state: paused;
`;

const HireTextLi = styled.li`
  width: 100%;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-block: 3rem;
`;

const IconBox = styled.div`
  width: 35px;
  height: 35px;
  text-align: center;
  padding-top: 0.36rem;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
`;

const ImageBox = styled.div`
  width: 100%;
  animation: ${slideLeft} 1s backwards;
  animation-delay: 0.15s;
  animation-play-state: paused;
`;

const ImageEl = styled.img.attrs((props) => ({
  src: `assets/images/${props.src}.jpg`,
}))`
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  display: block;
  border-radius: 15px;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 4.5rem;
  animation: ${listMount} 1s backwards;
  animation-delay: 0.15s;
  animation-play-state: paused;
`;

export default function Trainer() {
  const [hireTextlist, setHireTextList] = useState();
  const observeTarget = useRef([]);
  const test = useRef([]);
  console.log(test);

  const observer = new IntersectionObserver((e) => {
    e.forEach((el) => {
      if (el.isIntersecting) el.target.style.animationPlayState = "running";
    });
  });

  const observeSection = () => {
    observeTarget.current.forEach((el) => {
      observer.observe(el);
    });
  };

  const fetchList = async () => {
    const list = await axios.get("http://localhost:8080/trainer");
    setHireTextList([...list.data]);
  };

  const listUI = hireTextlist?.map((item) => {
    return (
      <HireTextLi key={item.id}>
        <IconBox>{findIcon("faCheck", "1x")}</IconBox>
        {item.text}
      </HireTextLi>
    );
  });

  useEffect(() => {
    fetchList();
    observeSection();
  }, []);

  return (
    <TrainerContainer>
      <TrainerTextBox>
        <TextTitle
          ref={(el) => {
            observeTarget.current[0] = el;
          }}>
          Personal Trainer
          <TextDesc>Hire a trainer at our web</TextDesc>
        </TextTitle>
        <HireTextUl ref={(el) => (observeTarget.current[1] = el)}>
          {listUI}
        </HireTextUl>
        <ButtonBox ref={(el) => (observeTarget.current[2] = el)}>
          <Button
            width={160}
            height={60}
            isBackground={true}
            text={"Hire a trainer"}
          />
          <Button width={160} height={60} text={"Talk in person"} />
        </ButtonBox>
      </TrainerTextBox>
      <ImageBox ref={(el) => (observeTarget.current[3] = el)}>
        <ImageEl src={"trainer"} />
      </ImageBox>
    </TrainerContainer>
  );
}
