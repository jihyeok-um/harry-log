import styled from "styled-components";
import { usePointillism } from "../hooks/usePointillism";

export const CarouselItem = ({ rotateY, thumbnailSource, noiseStrength }: CarouselItem) => {
  const { canvasRef } = usePointillism({
    thumbnailSource,
    noiseStrength: noiseStrength,
    canvasWidth: 600,
    canvasHeight: 600,
  });

  return <S.Canvas ref={canvasRef} rotateY={rotateY} width={600} height={600}></S.Canvas>;
};

const S = {
  Canvas: styled.canvas<{ rotateY: number }>`
    position: absolute;
    text-align: center;
    width: 500px;
    height: 500px;
    background-color: ${(props) => props.theme.GRAY_200};
    color: ${(props) => props.theme.WHITE};
    transform: rotateY(${(props) => props.rotateY}deg) translateZ(450px);
    font-size: 24px;

    @media (max-width: 1000px) {
      width: 300px;
      height: 300px;
      transform: rotateY(${(props) => props.rotateY}deg) translateZ(280px);
    }

    @media (max-width: 600px) {
      width: 250px;
      height: 250px;
      transform: rotateY(${(props) => props.rotateY}deg) translateZ(230px);
    }
  `,
};

interface CarouselItem {
  thumbnailSource: string;
  noiseStrength: number;
  rotateY: number;
}
