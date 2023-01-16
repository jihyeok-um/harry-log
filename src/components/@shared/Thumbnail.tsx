import { useRef } from "react";
import styled from "styled-components";
import ThumbnailPoint from "./ThumbnailPoint";

const Thumbnail = ({ src }: ThumbnailProps) => {
  const triangleArray = Array.from({ length: 600 }, () => 0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  if (canvasRef.current && imageRef.current) {
    const canvas = canvasRef.current.getContext("2d");
    canvas?.drawImage(imageRef.current, 0, 0);
  }

  return (
    <S.Container>
      <canvas ref={canvasRef}>
        <S.Image src={src} ref={imageRef} />
      </canvas>
      {triangleArray.map((el, index) => (
        <ThumbnailPoint key={index} index={index} />
      ))}
    </S.Container>
  );
};

interface ThumbnailProps {
  src: string;
}

const S = {
  Container: styled.div`
    position: relative;
    width: 1600px;
    height: 900px;
  `,

  Image: styled.img`
    width: inherit;
    height: inherit;
  `,
};

export default Thumbnail;
