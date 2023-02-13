import styled from "styled-components";
import { usePointillism } from "../hooks/usePointillism";

export const CarouselItem = ({ rotateY, thumbnailSource, noiseStrength }: CarouselItem) => {
  const { canvasRef } = usePointillism({
    thumbnailSource,
    noiseStrength,
    canvasWidth: 1200,
    canvasHeight: 1200,
  });

  return <S.Canvas ref={canvasRef} rotateY={rotateY} width={1200} height={1200}></S.Canvas>;
};

const S = {
  Canvas: styled.canvas<{ rotateY: number }>`
    position: absolute;
    text-align: center;
    background-color: ${(props) => props.theme.GRAY_200};
    box-shadow: 1px 1px 1px 1px ${(props) => props.theme.GRAY_600};
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
