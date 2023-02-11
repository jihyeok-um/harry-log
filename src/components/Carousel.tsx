import styled from "styled-components";
import { Styles } from "../styles/Styles";
import { CarouselItem } from "./CarouselItem";

export const Carousel = ({ thumbnailSource }: CarouselProps) => {
  const noiseStrengths = [1, 2, 3, 4, 5, 6];

  return (
    <S.Container>
      {noiseStrengths.map((el, index) => (
        <CarouselItem
          key={el}
          rotateY={(360 / noiseStrengths.length) * index}
          thumbnailSource={thumbnailSource}
          noiseStrength={noiseStrengths[index] - 1}
        />
      ))}
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    ${Styles.FlexCenter}
    position: relative;
    flex-direction: row;
    gap: 20px;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
  `,
};

interface CarouselProps {
  thumbnailSource: string;
}
