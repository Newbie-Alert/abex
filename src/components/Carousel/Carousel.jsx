import axios from "axios";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { findIcon } from "../../util.js/IconGenerate";

const GallerySectionWrapper = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const GalleryTitle = styled.h1`
  width: 100%;
  margin-bottom: 2.5rem;
  font-size: 3rem;
  background-color: var(--container-color);
  color: white;
`;

const CarouselContainer = styled.div`
  width: 600vw;
  padding: 2rem;
  overflow: hidden;
  background-color: var(--container-color);
  position: relative;
`;

const SlideButton = styled.div`
  width: 100px;
  height: 100px;
  opacity: 0.7;
  background-color: rgba(14, 16, 12, 1);
  text-align: center;
  border-radius: 50%;
  padding-top: 1.2rem;
  color: var(--primary-color);
  position: absolute;
  top: 50%;
  ${(props) => {
    if (props.$role === "left") {
      return css`
        left: 2%;
        transform: rotateY("10deg");
      `;
    } else {
      return css`
        right: 2%;
      `;
    }
  }}
  z-index:4;
  transform: translateY(-50%);
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const ImageSlider = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  gap: 1rem;
`;

const ImageBox = styled.div`
  width: 100vw;
  transition: all 0.6s ease;
  transform: ${(props) => `translateX(${props.$position}vw)`};
  position: relative;
`;

const ImageFilter = styled.div`
  width: 100vw;
  height: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  background: linear-gradient(60deg, rgba(0, 0, 0, 0.2) 50%, transparent 70%);
`;

const ImageItem = styled.img.attrs((props) => ({
  src: `assets/images/${props.$image}`,
}))`
  width: 100vw;
  height: 100%;
  display: block;
  max-width: 100%;
`;

export default function Carousel() {
  const [images, setImages] = useState([]);
  const [position, setPosition] = useState(0);

  const fetchImg = async () => {
    const images = await axios.get("http://localhost:8080/gallery");
    setImages([...images.data]);
  };

  const imageUI = images?.map((img) => {
    return (
      <ImageBox $position={position}>
        <ImageItem $image={img.url} />
        <ImageFilter></ImageFilter>
      </ImageBox>
    );
  });

  const slideLeft = () => {
    position < 0 && setPosition((prev) => prev + 50);
  };

  const slideRight = () => {
    position > -200 && setPosition((prev) => prev - 50);
  };

  useEffect(() => {
    fetchImg();
  }, []);
  return (
    <GallerySectionWrapper>
      <CarouselContainer>
        <GalleryTitle>Gallery</GalleryTitle>
        <ImageSlider>{imageUI}</ImageSlider>
      </CarouselContainer>
      <SlideButton onClick={slideLeft} $role={"left"}>
        {findIcon("faArrowLeft", "4x", "#ab1f3a")}
      </SlideButton>
      <SlideButton onClick={slideRight} $role={"right"}>
        {findIcon("faArrowRight", "4x", "#ab1f3a")}
      </SlideButton>
    </GallerySectionWrapper>
  );
}
