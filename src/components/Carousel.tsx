import { useState } from "react";
import styled from "styled-components";
import { Styles } from "../styles/Styles";
import { CarouselItem } from "./CarouselItem";

export const Carousel = ({ thumbnailSource, carouselContainerRotateY }: CarouselProps) => {
  const noiseStrengths = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <S.Container rotateY={carouselContainerRotateY}>
        {noiseStrengths.map((el, index) => (
          <CarouselItem
            key={el}
            rotateY={(360 / noiseStrengths.length) * index}
            thumbnailSource={thumbnailSource}
            noiseStrength={noiseStrengths[index] - 1}
          />
        ))}
      </S.Container>
    </>
  );
};

const S = {
  Container: styled.div<{ rotateY: number }>`
    ${Styles.FlexCenter}
    position: relative;
    flex-direction: row;
    gap: 20px;
    transform-style: preserve-3d;
    transition-duration: 300ms;

    transform: rotateY(${(props) => props.rotateY}deg);
  `,
};

interface CarouselProps {
  thumbnailSource: string;
  carouselContainerRotateY: number;
}
