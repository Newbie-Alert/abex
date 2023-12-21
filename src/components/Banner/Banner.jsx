import React from "react";
import styled from "styled-components";
import { FadeMount, FadeMountText } from "../../shared/styles/animation";
import Button from "../../shared/common/Button";

const BannerContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(-120deg, transparent, rgba(0, 0, 0, 0.6) 70%),
    url("./assets/images/bannerImg.jpg") center;
  background-size: cover;
  position: relative;
  animation: ${FadeMount} 1s forwards;
`;

const BannerTextBox = styled.div`
  width: fit-content;
  position: absolute;
  top: 50%;
  left: 3%;
  transform: translateY(-50%);
  white-space: pre-wrap;
  animation: ${FadeMountText} 1s backwards;
  animation-delay: 0.5s;
`;

const BannerTextHeadBox = styled.div`
  width: 100%;
  font-size: 4.5rem;
  letter-spacing: -0.25rem;
  color: white;
  line-height: 1.25;
  font-family: "Poppins-Regular";
  & span {
    color: var(--primary-light-color);
  }
`;

const BannerTextDesc = styled.div`
  color: white;
  line-height: 1.25;
  margin-block: 2rem;
  width: 600px;
`;

export default function Banner() {
  return (
    <BannerContainer>
      <BannerTextBox>
        <BannerTextHeadBox>
          <h1>
            Stay <span>fit</span> and <span>Healthy</span>
          </h1>
          <h1>
            with your <span>Mates</span>
          </h1>
        </BannerTextHeadBox>
        <BannerTextDesc>
          <p>
            Use our Services, Find your mates Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Eaque quam molestias, molestiae harum
            repudiandae nisi totam quaerat fugiat nobis Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Tenetur doloribus
          </p>
        </BannerTextDesc>
        <Button
          width={120}
          height={45}
          isBackGround={true}
          location={"services"}
          text={"View Services"}
        />
      </BannerTextBox>
    </BannerContainer>
  );
}
