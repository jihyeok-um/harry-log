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
    background-color: ${(props) => props.theme.GRAY_200};
    color: ${(props) => props.theme.WHITE};
    font-size: 24px;

    @media (min-width: 1600px) {
      width: 600px;
      height: 600px;
      transform: rotateY(${(props) => props.rotateY}deg) translateZ(550px);
    }

    @media (max-width: 1600px) {
      width: 500px;
      height: 500px;
      transform: rotateY(${(props) => props.rotateY}deg) translateZ(450px);
    }

    @media (max-width: 1000px) {
      width: 400px;
      height: 400px;
      transform: rotateY(${(props) => props.rotateY}deg) translateZ(380px);
    }

    @media (max-width: 600px) {
      width: 300px;
      height: 300px;
      transform: rotateY(${(props) => props.rotateY}deg) translateZ(280px);
    }
  `,
};

interface CarouselItem {
  thumbnailSource: string;
  noiseStrength: number;
  rotateY: number;
}
